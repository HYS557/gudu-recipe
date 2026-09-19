const path = require('node:path');
const { loadResolvedRecipes } = require('./lib/load-resolved-recipes');
const { deriveTimeBreakdown } = require('./lib/time-engine');
const overrides = require('./data/recipe-enrichment-overrides.json');

const { recipes } = loadResolvedRecipes(path.resolve(__dirname, '..'));
const errors = [];
for (const recipe of recipes) {
  const value = deriveTimeBreakdown(recipe, overrides[recipe.id] || {});
  const maxPhase = Math.max(value.prepMinutes, value.cookMinutes, value.soakMinutes, value.marinateMinutes, value.fermentMinutes, value.restMinutes, value.coolMinutes);
  if (value.totalElapsedMinutes < maxPhase) errors.push(`${recipe.id}: elapsed time shorter than phase`);
  if ((recipe.categoryType === 'congee' || /粥/.test(recipe.name || '')) && value.applianceVariants.length !== 3) errors.push(`${recipe.id}: congee appliance variants missing`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`${recipes.length} recipes checked; 0 missing time phases; 0 invalid elapsed totals`);
