const fs = require('node:fs');
const path = require('node:path');
const { buildFoundationRecipes, LABELS } = require('./lib/foundation-recipes');

const recipes = buildFoundationRecipes();
const categories = Object.fromEntries(Object.keys(LABELS).map(key => [key, {
  label: LABELS[key],
  count: recipes.filter(recipe => recipe.categoryType === key).length
}]));
const audit = {
  dataVersion: '2026.09.20.3',
  totalAdded: recipes.length,
  totalAfterMerge: 961 + recipes.length,
  categories,
  duplicateIds: recipes.length - new Set(recipes.map(recipe => recipe.id)).size,
  duplicateNames: recipes.length - new Set(recipes.map(recipe => recipe.name)).size,
  excludedCategoriesPresent: recipes.some(recipe => ['dry-seasoning', 'kitchen-basic', 'meal-prep'].includes(recipe.categoryType)),
  incompleteRecipes: recipes.filter(recipe => !recipe.ingredients.length || recipe.steps.length < 3).map(recipe => recipe.id)
};
const out = path.resolve(__dirname, '../output/foundation-catalog-audit.json');
fs.writeFileSync(out, JSON.stringify(audit, null, 2) + '\n');
console.log(JSON.stringify(audit));
