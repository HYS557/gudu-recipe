const test = require('node:test');
const assert = require('node:assert/strict');
const { buildFoundationRecipes } = require('../scripts/lib/foundation-recipes');

test('only the six approved foundation categories are unique and complete', () => {
  const recipes = buildFoundationRecipes();
  const approved = new Set(['sauce', 'pickle', 'stock', 'marinade', 'filling', 'brine']);
  for (const recipe of recipes) {
    assert.ok(approved.has(recipe.categoryType));
    assert.ok(recipe.id.startsWith('rec_foundation_'));
    assert.ok(recipe.name && recipe.subtitle && recipe.region);
    assert.ok(recipe.ingredients.length >= 2);
    assert.ok(recipe.steps.length >= 3);
    assert.ok(recipe.ingredients.every(item => Number.isFinite(item.amount) && item.amount > 0 && item.unit));
    assert.ok(!['dry-seasoning', 'kitchen-basic', 'meal-prep'].includes(recipe.categoryType));
  }
  assert.equal(new Set(recipes.map(recipe => recipe.id)).size, recipes.length);
  assert.equal(new Set(recipes.map(recipe => recipe.name)).size, recipes.length);
  for (const category of approved) assert.ok(recipes.some(recipe => recipe.categoryType === category));
});
