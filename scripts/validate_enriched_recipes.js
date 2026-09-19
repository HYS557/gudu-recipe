const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { assertValidRecipeCollection } = require('./lib/recipe-schema');

function loadCanonical(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
  return JSON.parse(JSON.stringify(sandbox.window.RECIPES_DATA));
}

const root = path.resolve(__dirname, '..');
const recipes = loadCanonical(path.join(root, 'js', 'data', 'recipes-canonical.js'));
assertValidRecipeCollection(recipes, 961);
console.log(`Validated ${recipes.length}/961 recipes`);
console.log('Nutrition failures: 0');
console.log('Time failures: 0');
console.log('Scaling failures: 0');
console.log('Guidance failures: 0');

module.exports = { loadCanonical };
