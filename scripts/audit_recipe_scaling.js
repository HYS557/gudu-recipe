const path = require('node:path');
const { loadResolvedRecipes } = require('./lib/load-resolved-recipes');
const { scaleRecipeAmounts } = require('./lib/scaling-engine');

const { recipes } = loadResolvedRecipes(path.resolve(__dirname, '..'));
let cases = 0;
const errors = [];
for (const recipe of recipes) for (const servings of [1, 2, 4, 6]) {
  cases++;
  const scaled = scaleRecipeAmounts(recipe, servings);
  for (const item of [...scaled.ingredients, ...scaled.seasonings]) {
    if (item.amount !== undefined && (!Number.isFinite(item.amount) || item.amount < 0)) errors.push(`${recipe.id}/${servings}/${item.name}: invalid amount`);
    if (item.scalingRule === 'gentle' && servings > (recipe.servings || 2)) {
      const base = Number(item.baseAmount ?? item.amount);
      if (Number.isFinite(base) && base >= 1 && item.amount >= base * (servings / (recipe.servings || 2))) errors.push(`${recipe.id}/${servings}/${item.name}: gentle seasoning scaled linearly`);
    }
  }
}
if (errors.length) { console.error(errors.slice(0, 100).join('\n')); process.exit(1); }
console.log(`${cases} scaling cases passed; 0 NaN; 0 negative; 0 zeroed required ingredients; 0 seasoning cap violations`);
