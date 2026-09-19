const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { loadResolvedRecipes } = require('./lib/load-resolved-recipes');
const { calculateNutrition } = require('./lib/nutrition-engine');
const { deriveTimeBreakdown } = require('./lib/time-engine');
const { buildScalingMetadata } = require('./lib/scaling-engine');
const { buildAlternatives, buildStorage, validateGuidanceCoverage } = require('./lib/guidance-engine');
const { assertValidRecipeCollection, validateEnrichedRecipe } = require('./lib/recipe-schema');
const refs = require('./data/nutrition-reference.json');
const aliases = require('./data/ingredient-aliases.json');
const overrides = require('./data/recipe-enrichment-overrides.json');
const guidanceRules = require('./data/guidance-rules.json');
const { buildFoundationRecipes } = require('./lib/foundation-recipes');

function sha256(value) { return crypto.createHash('sha256').update(value, 'utf8').digest('hex'); }

function automaticNutritionOverride(recipe, explicit = {}) {
  const text = `${recipe.name || ''} ${(recipe.steps || []).map(step => step.instruction).join(' ')}`;
  const value = { ...explicit };
  if (!Number.isFinite(value.retainedOilG) && /炸|油锅|宽油/.test(text)) value.retainedOilG = 20;
  if (!Number.isFinite(value.consumedLiquidRatio) && /汤|羹|粥|火锅/.test(text)) value.consumedLiquidRatio = /火锅/.test(text) ? 0.35 : 0.85;
  return value;
}

function buildCanonicalRecipes(rootDir, outputFile = path.join(rootDir, 'js', 'data', 'recipes-canonical.js'), auditFile = path.join(rootDir, 'output', 'recipe-enrichment-audit.json')) {
  const resolved = loadResolvedRecipes(rootDir);
  const sourceRecipes = [...resolved.recipes, ...buildFoundationRecipes()];
  const loadedFiles = [...resolved.loadedFiles, 'scripts/lib/foundation-recipes.js'];
  const recipes = sourceRecipes.map(recipe => {
    const override = overrides[recipe.id] || {};
    const nutrition = calculateNutrition(recipe, refs, aliases, automaticNutritionOverride(recipe, override.nutrition || {}));
    return {
      ...recipe,
      servings: nutrition.servings,
      calories: nutrition.total.caloriesKcal,
      caloriePerServing: nutrition.perServing.caloriesKcal,
      nutrition,
      timeBreakdown: deriveTimeBreakdown(recipe, { ...(recipe.enrichmentSeed || {}), ...(override.time || {}) }),
      scaling: buildScalingMetadata(recipe, override.scaling || {}),
      alternatives: buildAlternatives(recipe, guidanceRules, override.alternatives || {}),
      storage: buildStorage(recipe, guidanceRules, override.storage || {}),
      enrichmentVersion: '2026.09.20.3'
    };
  });
  const failures = [];
  for (const recipe of recipes) for (const error of validateEnrichedRecipe(recipe)) failures.push(`${recipe.id}: ${error}`);
  failures.push(...validateGuidanceCoverage(recipes));
  if (failures.length) throw new Error(failures.join('\n'));
  assertValidRecipeCollection(recipes, sourceRecipes.length);
  const json = JSON.stringify(recipes);
  const output = `window.RECIPES_DATA=${json};\n`;
  const audit = {
    version: '2026.09.20.3', count: recipes.length,
    loadedFiles, inputHash: sha256(JSON.stringify(sourceRecipes)), outputHash: sha256(output),
    nutritionFailures: 0, timeFailures: 0, scalingFailures: 0, guidanceFailures: 0, failures
  };
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.mkdirSync(path.dirname(auditFile), { recursive: true });
  fs.writeFileSync(outputFile, output, 'utf8');
  fs.writeFileSync(auditFile, `${JSON.stringify(audit, null, 2)}\n`, 'utf8');
  return { recipes, audit };
}

if (require.main === module) {
  const root = path.resolve(__dirname, '..');
  const { recipes } = buildCanonicalRecipes(root);
  console.log(`Built ${recipes.length} canonical recipes`);
}

module.exports = { buildCanonicalRecipes };
