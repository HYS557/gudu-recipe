const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { buildCanonicalRecipes } = require('../scripts/build_canonical_recipes');

test('canonical build is deterministic and validates all 961 unchanged IDs', () => {
  const root = path.resolve(__dirname, '..');
  const first = fs.mkdtempSync(path.join(os.tmpdir(), 'gudu-canonical-a-'));
  const second = fs.mkdtempSync(path.join(os.tmpdir(), 'gudu-canonical-b-'));
  const a = buildCanonicalRecipes(root, path.join(first, 'recipes.js'), path.join(first, 'audit.json'));
  const b = buildCanonicalRecipes(root, path.join(second, 'recipes.js'), path.join(second, 'audit.json'));
  assert.equal(a.recipes.length, 961);
  assert.equal(new Set(a.recipes.map(recipe => recipe.id)).size, 961);
  assert.deepEqual(a.recipes.map(recipe => recipe.id), b.recipes.map(recipe => recipe.id));
  assert.equal(fs.readFileSync(path.join(first, 'recipes.js'), 'utf8'), fs.readFileSync(path.join(second, 'recipes.js'), 'utf8'));
  assert.ok(a.recipes.every(recipe => recipe.calories === recipe.nutrition.total.caloriesKcal));
  assert.equal(a.audit.failures.length, 0);
});
