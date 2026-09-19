const path = require('node:path');
const { loadResolvedRecipes } = require('./lib/load-resolved-recipes');
const { findUnresolvedNutritionInputs } = require('./lib/nutrition-engine');
const refs = require('./data/nutrition-reference.json');
const aliases = require('./data/ingredient-aliases.json');

const root = path.resolve(__dirname, '..');
const { recipes } = loadResolvedRecipes(root);
const unresolved = findUnresolvedNutritionInputs(recipes, refs, aliases, {});
if (unresolved.length) {
  for (const item of unresolved) console.error(`${item.recipeId}\t${item.kind}\t${item.name}\t${item.amount ?? ''}\t${item.unit ?? ''}\t${item.reason}`);
  console.error(`${recipes.length} recipes checked; ${unresolved.length} unresolved inputs`);
  process.exit(1);
}
console.log(`${recipes.length} recipes checked; 0 unresolved ingredient names; 0 unresolved quantities`);
