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

test('every foundation recipe has its own matched food photo', () => {
  const recipes = buildFoundationRecipes();
  const urls = new Set();
  for (const recipe of recipes) {
    assert.match(recipe.photoUrl, /^https:\/\//, `${recipe.name} 缺少网络实拍图`);
    assert.equal(recipe.image, recipe.photoUrl, `${recipe.name} 的封面字段不一致`);
    assert.notEqual(recipe.photoUrl, './icons/icon-192.png', `${recipe.name} 仍在使用默认图标`);
    assert.ok(!urls.has(recipe.photoUrl), `${recipe.name} 与其他食谱重复使用同一张图`);
    urls.add(recipe.photoUrl);
  }
});
