const path = require('node:path');
const { loadResolvedRecipes } = require('./lib/load-resolved-recipes');
const { buildAlternatives, buildStorage, validateGuidanceCoverage } = require('./lib/guidance-engine');
const rules = require('./data/guidance-rules.json');
const overrides = require('./data/recipe-enrichment-overrides.json');

const { recipes } = loadResolvedRecipes(path.resolve(__dirname, '..'));
for (const recipe of recipes) {
  const override = overrides[recipe.id] || {};
  recipe.alternatives = buildAlternatives(recipe, rules, override.alternatives || {});
  recipe.storage = buildStorage(recipe, rules, override.storage || {});
}
const errors = validateGuidanceCoverage(recipes);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`${recipes.length} recipes checked; 0 missing storage decisions; 0 malformed reheating methods; 0 incomplete swaps`);
