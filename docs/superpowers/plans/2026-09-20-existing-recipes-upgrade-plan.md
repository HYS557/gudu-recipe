# Existing 961 Recipes Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade all 961 existing recipes with consistent nutrition, elapsed-time, serving-scaling, substitution, storage and reheating data, then ship the new detail experience through the existing web/PWA/APK update path.

**Architecture:** A deterministic Node build pipeline first resolves the current base database plus every correction file into one canonical recipe collection. Focused rule engines and explicit override data enrich that collection, a validator refuses incomplete or inconsistent output, and the browser loads one generated data file while retaining ID and update-package compatibility.

**Tech Stack:** Node.js built-ins (`node:test`, `assert`, `fs`, `vm`, `crypto`), browser JavaScript, HTML/CSS, service worker, existing Android APK builder and ADB workflow.

**Spec:** `docs/superpowers/specs/2026-09-20-recipe-data-upgrade-design.md`

## Global Constraints

- Upgrade exactly the existing 961 recipes before adding any new content category.
- Preserve every existing recipe ID, favorite key, search behavior, category and cooking step.
- Keep `calories` and `caloriePerServing` as compatibility fields generated from the new nutrition object.
- Support exactly 1, 2, 4 and 6 servings.
- Do not add or revise doneness/heat standards, failure recovery, source display or image licensing.
- Continue SHA-256 verification for downloaded update packages and retain the bundled-data fallback.
- A recipe may hide an inapplicable optional variant, but no required nutrition, time, scaling or storage field may be absent.
- Phase-two sauce, stock, marinade, filling, brine, dry seasoning, pickle, kitchen-basic and meal-prep content is not part of this plan.

## Review Focus

- Ingredients expressed as “适量/少许/若干” must resolve to an explicit calculation assumption without presenting false precision; Task 3 pins this with an unresolved-quantity test.
- Frying oil, blanching water and broth left in the pot must not be counted as fully consumed; Task 3 tests retained-oil and consumed-liquid policies.
- Parallel soaking, marinating and cooking must not be double-counted in elapsed time; Task 4 tests overlapping phases.
- Salt, soy sauce, sugar, chilli, frying oil and thickening slurry must not scale linearly to six servings; Task 5 tests each scaling class.
- Missing/corrupt remote enriched fields must not prevent the bundled recipe from opening; Task 9 tests update validation and UI fallback.

---

## File Map

- `scripts/lib/load-resolved-recipes.js`: execute the current data files in browser order and return the fully patched 961 recipes.
- `scripts/lib/recipe-schema.js`: field constructors, schema constants and full-recipe validation.
- `scripts/lib/nutrition-engine.js`: normalize ingredient names and calculate nutrition/finished-weight values.
- `scripts/lib/time-engine.js`: derive structured time breakdown and appliance variants.
- `scripts/lib/scaling-engine.js`: classify ingredients and calculate 1/2/4/6-person display amounts.
- `scripts/lib/guidance-engine.js`: derive substitutions, dietary variants, storage and reheating guidance.
- `scripts/data/nutrition-reference.json`: nutrient values per 100 g for normalized food ingredients.
- `scripts/data/ingredient-aliases.json`: exact aliases from recipe ingredient text to normalized nutrition keys.
- `scripts/data/recipe-enrichment-overrides.json`: explicit recipe-level yield, retained-oil, consumed-liquid, time, storage and substitution exceptions.
- `scripts/build_canonical_recipes.js`: deterministic orchestrator that writes the canonical browser dataset and audit report.
- `scripts/validate_enriched_recipes.js`: release gate for all 961 records.
- `js/data/recipes-canonical.js`: generated browser-ready canonical dataset.
- `js/recipe-details.js`: pure browser helpers for scaling and rendering the new detail sections.
- `js/app.js`: integrate the new helpers into the existing detail modal.
- `css/index.css`: layout and responsive styling for the new sections.
- `index.html`, `sw.js`: load/cache the canonical data and detail helper.
- `js/updater.js`, `updates/manifest.json`, `updates/recipe-update-2026.09.20.1.json`: validate and distribute the enriched schema.
- `scripts/build_apk.js`: version/package the upgraded application.
- `tests/*.test.js`: Node unit, integration, schema and regression tests.

### Task 1: Establish a deterministic resolved-recipe loader

**Files:**
- Create: `scripts/lib/load-resolved-recipes.js`
- Create: `tests/load-resolved-recipes.test.js`
- Modify: `package.json`

**Interfaces:**
- Produces: `loadResolvedRecipes(rootDir: string): { recipes: object[], loadedFiles: string[] }`.
- Produces: `npm test`, running `node --test tests/*.test.js`.

- [ ] **Step 1: Add the failing loader test**

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { loadResolvedRecipes } = require('../scripts/lib/load-resolved-recipes');

test('loads the fully corrected 961-recipe collection in browser order', () => {
  const { recipes, loadedFiles } = loadResolvedRecipes(path.resolve(__dirname, '..'));
  assert.equal(recipes.length, 961);
  assert.equal(new Set(recipes.map(recipe => recipe.id)).size, 961);
  assert.equal(loadedFiles[0], 'recipes.js');
  assert.ok(loadedFiles.indexOf('recipe-corrections-v54.js') > loadedFiles.indexOf('recipe-corrections-v1.js'));
  assert.ok(loadedFiles.at(-1).startsWith('recipe-nutrition-corrections-v'));
});
```

- [ ] **Step 2: Add `npm test` and verify the test fails**

Set `package.json` scripts to:

```json
"scripts": {
  "test": "node --test tests/*.test.js",
  "build:data": "node scripts/build_canonical_recipes.js",
  "validate:data": "node scripts/validate_enriched_recipes.js"
}
```

Run: `npm test -- --test-name-pattern="fully corrected"`

Expected: FAIL because `load-resolved-recipes.js` does not exist.

- [ ] **Step 3: Implement the loader**

Use `vm.createContext({ window: {} })`, load `recipes.js`, numeric-sort `recipe-corrections-v*.js`, `recipe-metadata-corrections-v*.js`, `recipe-allergens-v*.js` and `recipe-nutrition-corrections-v*.js`, and deep-clone `window.RECIPES_DATA` before returning it. Numeric sorting must use the integer after `-v`, not lexical filename order.

- [ ] **Step 4: Run the loader test**

Run: `npm test -- --test-name-pattern="fully corrected"`

Expected: PASS with 961 unique IDs.

- [ ] **Step 5: Commit**

```bash
git add package.json scripts/lib/load-resolved-recipes.js tests/load-resolved-recipes.test.js
git commit -m "test: add deterministic resolved recipe loader"
```

### Task 2: Define and validate the enriched recipe schema

**Files:**
- Create: `scripts/lib/recipe-schema.js`
- Create: `tests/recipe-schema.test.js`

**Interfaces:**
- Consumes: resolved recipe objects from Task 1.
- Produces: `SUPPORTED_SERVINGS: readonly [1,2,4,6]`.
- Produces: `validateEnrichedRecipe(recipe: object): string[]` and `assertValidRecipeCollection(recipes: object[], expectedCount?: number): void`.

- [ ] **Step 1: Write failing schema tests**

Create fixtures for one valid enriched recipe and mutations covering duplicate ID, missing `finishedWeightG`, negative macro, inconsistent serving weight, absent time field, unsupported serving option and missing storage decision. Assert the valid fixture returns `[]` and every mutation returns a field-specific message.

```js
assert.deepEqual(validateEnrichedRecipe(validRecipe), []);
assert.match(validateEnrichedRecipe({ ...validRecipe, nutrition: null }).join('\n'), /nutrition/);
assert.match(validateEnrichedRecipe({ ...validRecipe, scaling: { ...validRecipe.scaling, supportedServings: [2, 4] } }).join('\n'), /1,2,4,6/);
```

- [ ] **Step 2: Verify the tests fail**

Run: `npm test -- --test-name-pattern="enriched recipe schema"`

Expected: FAIL because validation functions do not exist.

- [ ] **Step 3: Implement exact validation rules**

Validate numeric finiteness/non-negativity; total/per-serving/per-100-g nutrition within the spec tolerances; finished/serving weight within 1 g; all time keys; exact supported servings; storage nullable numbers plus boolean decisions; array/object field types; unique IDs and expected count in the collection assertion.

- [ ] **Step 4: Run schema tests**

Run: `npm test -- --test-name-pattern="enriched recipe schema"`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add scripts/lib/recipe-schema.js tests/recipe-schema.test.js
git commit -m "feat: define enriched recipe schema"
```

### Task 3: Build nutrition and finished-yield calculation

**Files:**
- Create: `scripts/lib/nutrition-engine.js`
- Create: `scripts/data/nutrition-reference.json`
- Create: `scripts/data/ingredient-aliases.json`
- Create: `tests/nutrition-engine.test.js`

**Interfaces:**
- Produces: `normalizeIngredientName(name: string, aliases: object): string | null`.
- Produces: `calculateNutrition(recipe: object, refs: object, aliases: object, override: object): object` matching `nutrition` in the spec.
- Produces: `findUnresolvedNutritionInputs(recipes: object[], refs: object, aliases: object, overrides: object): object[]`.

- [ ] **Step 1: Write failing nutrition tests**

Cover a weighed stir-fry, a bone-in ingredient with edible fraction, dry rice gaining water, fried food retaining only configured oil, broth with partial consumption, and an “适量” ingredient that lacks an explicit override.

```js
assert.equal(calculateNutrition(friedFixture, refs, aliases, { retainedOilG: 18 }).assumptions.includes('吸油量按18克计'), true);
assert.equal(findUnresolvedNutritionInputs([unknownAmountFixture], refs, aliases, {}).length, 1);
assert.ok(Math.abs(result.total.caloriesKcal - (result.total.proteinG * 4 + result.total.carbsG * 4 + result.total.fatG * 9)) <= 20);
```

- [ ] **Step 2: Verify the tests fail**

Run: `npm test -- --test-name-pattern="nutrition engine"`

Expected: FAIL because the engine and reference tables do not exist.

- [ ] **Step 3: Implement the calculation engine**

Calculate edible nutrients from amount in grams, edible fraction and nutrient values per 100 g. Apply explicit `yieldWeightG`, `retainedOilG`, `consumedLiquidRatio`, `hydrationGainG` and `quantityAssumptions` overrides. Round calories to integers and macros to one decimal. Reject unresolved names, units or ambiguous quantities rather than silently treating them as zero.

- [ ] **Step 4: Populate reference and alias coverage to 100%**

Extract every ingredient and seasoning name from the resolved 961 recipes, add normalized reference entries and exact aliases, then run:

`node scripts/check_nutrition_coverage.js`

Expected: `961 recipes checked; 0 unresolved ingredient names; 0 unresolved quantities`.

The coverage script must exit non-zero and print recipe ID, ingredient name, amount and unit for every unresolved input.

- [ ] **Step 5: Run nutrition tests and commit**

Run: `npm test -- --test-name-pattern="nutrition engine"`

Expected: PASS.

```bash
git add scripts/lib/nutrition-engine.js scripts/data/nutrition-reference.json scripts/data/ingredient-aliases.json scripts/check_nutrition_coverage.js tests/nutrition-engine.test.js
git commit -m "feat: calculate recipe nutrition and finished yield"
```

### Task 4: Derive structured elapsed time and congee variants

**Files:**
- Create: `scripts/lib/time-engine.js`
- Create: `tests/time-engine.test.js`
- Modify: `scripts/data/recipe-enrichment-overrides.json`

**Interfaces:**
- Produces: `deriveTimeBreakdown(recipe: object, override: object): object` matching `timeBreakdown` in the spec.
- Consumes: per-recipe time overrides with `parallelGroups` and `applianceVariants`.

- [ ] **Step 1: Write failing time tests**

Test an ordinary stir-fry, overnight marination, simultaneous soaking and prep, fermentation plus baking, cooling, and a congee recipe with ordinary-pot/electric-rice-cooker/pressure-cooker variants.

```js
assert.equal(deriveTimeBreakdown(parallelFixture, { parallelGroups: [['soakMinutes', 'prepMinutes']] }).totalElapsedMinutes, 70);
assert.deepEqual(deriveTimeBreakdown(congeeFixture, congeeOverride).applianceVariants.map(item => item.key), ['stovetop', 'riceCooker', 'pressureCooker']);
```

- [ ] **Step 2: Verify failure**

Run: `npm test -- --test-name-pattern="time engine"`

Expected: FAIL because `deriveTimeBreakdown` does not exist.

- [ ] **Step 3: Implement time derivation**

Use existing prep/cook values and step timers as inputs; require overrides for soak, marinade, ferment, rest, cool and parallel execution that cannot be derived unambiguously. Compute elapsed time from sequential phases plus the maximum duration inside each parallel group. Do not alter step instructions or introduce doneness/heat guidance.

- [ ] **Step 4: Add and validate all recipe time overrides**

Generate a report of recipes whose step-timer sum conflicts with declared time or whose instructions mention soaking, marinating, fermenting, resting or cooling without a structured value. Resolve every row in `recipe-enrichment-overrides.json`.

Run: `node scripts/audit_recipe_times.js`

Expected: `961 recipes checked; 0 missing time phases; 0 invalid elapsed totals`.

- [ ] **Step 5: Run tests and commit**

```bash
npm test -- --test-name-pattern="time engine"
git add scripts/lib/time-engine.js scripts/data/recipe-enrichment-overrides.json scripts/audit_recipe_times.js tests/time-engine.test.js
git commit -m "feat: add structured recipe time breakdowns"
```

### Task 5: Implement safe 1/2/4/6-serving scaling

**Files:**
- Create: `scripts/lib/scaling-engine.js`
- Create: `tests/scaling-engine.test.js`

**Interfaces:**
- Produces: `classifyScalingRule(item: object): 'linear' | 'gentle' | 'process'`.
- Produces: `scaleRecipeAmounts(recipe: object, targetServings: 1|2|4|6): { ingredients: object[], seasonings: object[] }`.
- Produces: `buildScalingMetadata(recipe: object, override: object): object` matching `scaling` in the spec.

- [ ] **Step 1: Write failing scaling tests**

Assert meat and vegetables scale linearly; salt, soy sauce, sugar, vinegar, chilli and spices use `ratio ** 0.75`; process liquids/oils use minimum coverage amounts and never claim full consumption; fractional eggs round to the nearest half and retain a display note.

```js
assert.equal(scaleRecipeAmounts(twoServingFixture, 4).ingredients.find(i => i.name === '猪肉').amount, 400);
assert.ok(scaleRecipeAmounts(twoServingFixture, 6).seasonings.find(i => i.name === '盐').amount < 15);
assert.equal(scaleRecipeAmounts(twoServingFixture, 1).ingredients.find(i => i.name === '鸡蛋').displayAmount, '1.5个');
```

- [ ] **Step 2: Verify failure**

Run: `npm test -- --test-name-pattern="serving scaling"`

Expected: FAIL because scaling functions do not exist.

- [ ] **Step 3: Implement scaling classes and formatting**

Keep base values immutable. Store rule assignments by stable item index plus normalized name, support grams/millilitres/count units, round kitchen quantities to usable precision, and include the fixed taste-adjustment notice.

- [ ] **Step 4: Audit every recipe at all four serving sizes**

Run: `node scripts/audit_recipe_scaling.js`

Expected: `3844 scaling cases passed; 0 NaN; 0 negative; 0 zeroed required ingredients; 0 seasoning cap violations`.

- [ ] **Step 5: Run tests and commit**

```bash
npm test -- --test-name-pattern="serving scaling"
git add scripts/lib/scaling-engine.js scripts/audit_recipe_scaling.js tests/scaling-engine.test.js
git commit -m "feat: add safe serving-size scaling"
```

### Task 6: Add substitutions, dietary variants, storage and reheating guidance

**Files:**
- Create: `scripts/lib/guidance-engine.js`
- Create: `scripts/data/guidance-rules.json`
- Create: `tests/guidance-engine.test.js`
- Modify: `scripts/data/recipe-enrichment-overrides.json`

**Interfaces:**
- Produces: `buildAlternatives(recipe: object, rules: object, override: object): object`.
- Produces: `buildStorage(recipe: object, rules: object, override: object): object`.
- Produces: `validateGuidanceCoverage(recipes: object[]): string[]`.

- [ ] **Step 1: Write failing guidance tests**

Cover fried food, cooked rice, seafood, dairy dessert, raw/cold dish, soup and shelf-stable dry seasoning. Assert inapplicable vegetarian variants remain `null`, allergen-changing swaps include an allergen note, unsafe overnight/freezing cases are explicitly false, and reheating methods contain device plus time range.

- [ ] **Step 2: Verify failure**

Run: `npm test -- --test-name-pattern="storage and alternatives"`

Expected: FAIL because the guidance engine does not exist.

- [ ] **Step 3: Implement ordered rules with explicit overrides**

Apply the most conservative matching storage rule when a recipe belongs to multiple risk groups. Merge existing `substitutes` data into structured swaps, require ratio/effect/time-impact fields, and suppress empty optional variants in the returned object.

- [ ] **Step 4: Resolve the guidance coverage report**

Run: `node scripts/audit_recipe_guidance.js`

Expected: `961 recipes checked; 0 missing storage decisions; 0 malformed reheating methods; 0 incomplete swaps`.

- [ ] **Step 5: Run tests and commit**

```bash
npm test -- --test-name-pattern="storage and alternatives"
git add scripts/lib/guidance-engine.js scripts/data/guidance-rules.json scripts/data/recipe-enrichment-overrides.json scripts/audit_recipe_guidance.js tests/guidance-engine.test.js
git commit -m "feat: add recipe storage and substitution guidance"
```

### Task 7: Generate and validate the canonical 961-recipe dataset

**Files:**
- Create: `scripts/build_canonical_recipes.js`
- Create: `scripts/validate_enriched_recipes.js`
- Create: `tests/canonical-build.test.js`
- Create: `js/data/recipes-canonical.js` (generated)
- Create: `output/recipe-enrichment-audit.json` (generated, tracked release evidence)

**Interfaces:**
- Consumes: all Task 1–6 engines and data tables.
- Produces: `window.RECIPES_DATA = [...]` in `recipes-canonical.js`.
- Produces: a JSON audit with counts, input hash, output hash and validation failures.

- [ ] **Step 1: Write a failing deterministic-build test**

Run the builder twice into temporary directories and assert byte-identical output, 961 unique unchanged IDs, zero validation errors, and compatibility calories equal `nutrition.total.caloriesKcal`.

- [ ] **Step 2: Verify failure**

Run: `npm test -- --test-name-pattern="canonical build"`

Expected: FAIL because the orchestrator does not exist.

- [ ] **Step 3: Implement the canonical builder**

Load resolved recipes, enrich each record through nutrition/time/scaling/guidance engines, preserve unowned existing fields, validate the complete collection, stable-sort object keys, and write UTF-8 JavaScript plus the audit JSON. On any unresolved input or validation error, write no canonical file and exit non-zero.

- [ ] **Step 4: Build and run the release validator**

Run:

```bash
npm run build:data
npm run validate:data
```

Expected:

```text
Built 961 canonical recipes
Validated 961/961 recipes
Nutrition failures: 0
Time failures: 0
Scaling failures: 0
Guidance failures: 0
```

- [ ] **Step 5: Commit**

```bash
git add scripts/build_canonical_recipes.js scripts/validate_enriched_recipes.js tests/canonical-build.test.js js/data/recipes-canonical.js output/recipe-enrichment-audit.json
git commit -m "feat: generate canonical enriched recipe database"
```

### Task 8: Add browser helpers and detail-page UI

**Files:**
- Create: `js/recipe-details.js`
- Create: `tests/recipe-details.test.js`
- Modify: `js/app.js:941-1139`
- Modify: `css/index.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: enriched recipe objects and `scaleRecipeAmounts`-equivalent browser metadata.
- Produces: `window.RecipeDetails.scale(recipe, servings)`.
- Produces: `window.RecipeDetails.renderNutrition(recipe, servings)`, `renderTimes(recipe)`, `renderAlternatives(recipe)`, and `renderStorage(recipe)` returning safe HTML strings.

- [ ] **Step 1: Write failing pure-helper tests**

Load `js/recipe-details.js` in a VM DOM stub. Test 1/2/4/6 scaling, HTML escaping, nutrition values, appliance variants, hidden `null` dietary variants, storage booleans, and a legacy recipe without enriched fields returning empty module HTML instead of throwing.

- [ ] **Step 2: Verify failure**

Run: `npm test -- --test-name-pattern="recipe detail helpers"`

Expected: FAIL because `RecipeDetails` does not exist.

- [ ] **Step 3: Implement helpers and integrate the modal**

Add the 1-person button, replace the current linear multiplier with `RecipeDetails.scale`, render four collapsible sections after ingredients and before cooking steps, and leave the current cooking-step timer untouched. Use buttons with `aria-expanded` and section IDs; do not render an empty section.

- [ ] **Step 4: Add responsive styling and run tests**

Run:

```bash
npm test -- --test-name-pattern="recipe detail helpers"
node --check js/recipe-details.js
node --check js/app.js
```

Expected: all PASS and both syntax checks exit 0.

- [ ] **Step 5: Commit**

```bash
git add js/recipe-details.js tests/recipe-details.test.js js/app.js css/index.css index.html
git commit -m "feat: show enriched recipe details and serving controls"
```

### Task 9: Switch loading, caching and remote updates to canonical data

**Files:**
- Modify: `index.html`
- Modify: `sw.js`
- Modify: `js/updater.js`
- Create: `tests/updater-enriched-data.test.js`
- Delete after fallback verification: `index.html` references to `recipe-corrections-v*.js`, `recipe-metadata-corrections-v*.js`, `recipe-allergens-v*.js`, `recipe-nutrition-corrections-v*.js`

**Interfaces:**
- Consumes: `recipes-canonical.js` and enriched update packages.
- Produces: `validatePackage(pkg): boolean` inside updater logic, requiring valid enriched upserts/patch fields before cache replacement.

- [ ] **Step 1: Write failing updater fallback tests**

Test valid enriched package application, hash mismatch, corrupt JSON, missing required enriched fields, patch for an unknown ID, and cached-package failure. Assert every failure leaves the bundled 961-recipe collection available and does not overwrite the previous valid cache.

- [ ] **Step 2: Verify failure**

Run: `npm test -- --test-name-pattern="enriched update fallback"`

Expected: FAIL because package schema validation is absent.

- [ ] **Step 3: Implement validated update application and canonical loading**

Load only `recipes-canonical.js` plus `recipe-details.js`, validate all incoming enriched records before `localStorage.setItem`, apply patches by preserved recipe ID, and keep the built-in dataset when validation or SHA-256 fails.

- [ ] **Step 4: Update service-worker cache and run regression tests**

Remove obsolete correction assets from the pre-cache list, add canonical/detail assets, bump the cache version, and run:

```bash
npm test
node --check sw.js
node --check js/updater.js
```

Expected: complete test suite PASS; syntax checks exit 0.

- [ ] **Step 5: Commit**

```bash
git add index.html sw.js js/updater.js tests/updater-enriched-data.test.js
git commit -m "feat: load and update canonical recipe data"
```

### Task 10: Run browser regression and 30-recipe stratified review

**Files:**
- Create: `scripts/verify_enriched_ui.js`
- Create: `scripts/data/manual-review-sample.json`
- Create: `output/enriched-ui-verification.json`

**Interfaces:**
- Consumes: locally served PWA and canonical data.
- Produces: machine-readable results for home, search, detail, four serving sizes, favorites, all four enriched sections and legacy fallback.

- [ ] **Step 1: Add the failing UI verification script**

Define a fixed 30-ID sample covering stir-fry, braise, fry, steam, soup, congee, pastry, cold dish, drink and banquet recipes. The script must fail if a category is absent, an ID changes, a section contains `undefined`/`NaN`, or a serving button does not change amounts.

- [ ] **Step 2: Run against the local app and capture initial failures**

Run: `node scripts/verify_enriched_ui.js`

Expected before completing fixes: non-zero exit with exact recipe ID and failed assertion.

- [ ] **Step 3: Fix only reported UI/data integration defects**

Correct the responsible canonical override, helper or CSS rule; do not modify excluded fire/doneness, failure-recovery, source-display or image-license content.

- [ ] **Step 4: Re-run the full verification**

Run:

```bash
npm test
npm run validate:data
node scripts/verify_enriched_ui.js
```

Expected: `30/30 sampled recipes passed; 4/4 serving sizes passed; favorites preserved; no blocking console errors`.

- [ ] **Step 5: Commit**

```bash
git add scripts/verify_enriched_ui.js scripts/data/manual-review-sample.json output/enriched-ui-verification.json
git commit -m "test: verify enriched recipe experience"
```

### Task 11: Package the data update and Android build

**Files:**
- Modify: `updates/manifest.json`
- Create: `updates/recipe-update-2026.09.20.1.json`
- Modify: `js/updater.js`
- Modify: `sw.js`
- Modify: `scripts/build_apk.js`
- Modify: `download.html`
- Modify: `scripts/generate_release_assets.js`
- Regenerate: `gudu-recipe.apk`

**Interfaces:**
- Produces: a data package keyed by existing recipe IDs and a manifest containing its exact SHA-256.
- Produces: a signed APK with a higher `versionCode` and the existing signing identity.

- [ ] **Step 1: Generate the enriched update package and hash**

Create an upsert package containing all 961 canonical records for the one-time schema migration. Compute SHA-256 from the exact UTF-8 bytes and write it to `updates/manifest.json`; set `dataVersion` to `2026.09.20.1`, `appVersion`/`versionName` to `3.7.0`, and `versionCode` to `370` consistently.

- [ ] **Step 2: Validate package/manifest consistency**

Run: `node scripts/validate_enriched_recipes.js --package updates/recipe-update-2026.09.20.1.json --manifest updates/manifest.json`

Expected: 961 valid upserts, matching version, matching SHA-256 and zero unknown/deleted IDs.

- [ ] **Step 3: Build the APK and inspect its contents**

Run: `node scripts/build_apk.js`

Expected: signed APK build succeeds; archive includes `assets/js/data/recipes-canonical.js`, `assets/js/recipe-details.js` and the new update files.

- [ ] **Step 4: Verify signing identity and installed version before installation**

Compare the new APK certificate SHA-256 with `aeff52122c9be1a54f4b29d798dbc6a58abc5854f3c17f944d254d3aeb1b140d`. Abort installation if it differs. Verify `versionCode=370` and `versionName=3.7.0`.

- [ ] **Step 5: Commit the release-ready sources**

Do not stage unrelated pre-existing dirty files. Commit exact paths only:

```bash
git add updates/manifest.json updates/recipe-update-2026.09.20.1.json js/updater.js sw.js scripts/build_apk.js download.html scripts/generate_release_assets.js
git commit -m "release: prepare enriched recipe update"
```

Keep the APK as a release artifact rather than forcing the binary into the source commit.

### Task 12: Device verification and controlled publication

**Files:**
- Create: `output/device-verification-2026.09.20.1.json`
- Modify only if verification exposes a defect: the exact owning source/test file from Tasks 1 through 11.

**Interfaces:**
- Consumes: signed APK, hosted update manifest/package and ADB-connected Android device.
- Produces: device verification evidence and published web/release versions.

- [ ] **Step 1: Install on the connected Android device without clearing app data**

Run `adb install -r gudu-recipe.apk`, launch `com.gudurecipe.app/.MainActivity`, and verify package version with `adb shell dumpsys package com.gudurecipe.app`.

Expected: install succeeds, app data/favorites remain, installed version matches the new manifest.

- [ ] **Step 2: Exercise critical mobile flows**

Check one recipe from each of the ten review classes, all four serving buttons, each enriched section, search, favorites and manual update check. Capture exact IDs and outcomes in the device verification JSON.

- [ ] **Step 3: Publish source, web build and release asset**

Push only after the full test/data/UI/device gates pass. Publish the signed APK as a new release asset and ensure the update manifest points to that exact release URL.

- [ ] **Step 4: Verify public deployment**

Confirm Pages reports `built`; fetch the public manifest and package; recompute package SHA-256; confirm app/data versions, canonical script, detail helper and APK asset are reachable.

Expected: public hash matches, deployment commit matches the intended release, APK asset size is non-zero.

- [ ] **Step 5: Run the completion gate and commit evidence**

Run:

```bash
npm test
npm run build:data
npm run validate:data
node scripts/verify_enriched_ui.js
```

Expected: all PASS, 961/961 validated, 30/30 UI sample passed and device evidence reports no blocking issue.

```bash
git add output/recipe-enrichment-audit.json output/enriched-ui-verification.json output/device-verification-2026.09.20.1.json
git commit -m "test: record enriched recipe release verification"
```

After this commit and public verification, the existing-recipe upgrade is complete. Only then create the separate implementation plan for the nine new content categories.
