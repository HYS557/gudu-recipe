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
