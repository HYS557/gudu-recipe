const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

test('web recipe index is lightweight and every recipe resolves to exactly one detail shard', () => {
  const root = path.resolve(__dirname, '..');
  const indexFile = path.join(root, 'js', 'data', 'recipes-index.js');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(indexFile, 'utf8'), sandbox);
  const listing = sandbox.window.RECIPES_DATA;
  assert.equal(listing.length, 1482);
  assert.ok(fs.statSync(indexFile).size < 2_000_000);
  assert.ok(listing.every(recipe => recipe._detailShard && !recipe.steps));

  const details = new Map();
  for (let index = 0; index < 32; index += 1) {
    const shard = String(index).padStart(2, '0');
    const recipes = JSON.parse(fs.readFileSync(path.join(root, 'js', 'data', 'recipe-shards', `${shard}.json`), 'utf8'));
    for (const recipe of recipes) {
      assert.equal(details.has(recipe.id), false, `duplicate detail ${recipe.id}`);
      details.set(recipe.id, { recipe, shard });
    }
  }
  assert.equal(details.size, 1482);
  for (const recipe of listing) {
    const detail = details.get(recipe.id);
    assert.ok(detail, `missing detail ${recipe.id}`);
    assert.equal(detail.shard, recipe._detailShard);
    assert.ok(Array.isArray(detail.recipe.steps));
  }
});
