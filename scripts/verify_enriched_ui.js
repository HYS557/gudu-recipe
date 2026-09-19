const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const RecipeDetails = require('../js/recipe-details');

const root = path.resolve(__dirname, '..');

function loadCanonical() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, 'js/data/recipes-canonical.js'), 'utf8'), sandbox);
  return sandbox.window.RECIPES_DATA;
}

function verifySample(recipes, sample) {
  const requiredCategories = ['stir-fry', 'braise', 'fry', 'steam', 'soup', 'congee', 'pastry', 'cold-dish', 'drink', 'banquet'];
  const categorySet = new Set(sample.map(item => item.category));
  const failures = requiredCategories.filter(category => !categorySet.has(category)).map(category => `missing category: ${category}`);
  if (sample.length !== 30) failures.push(`expected 30 sample rows, got ${sample.length}`);
  const byId = new Map(recipes.map(recipe => [recipe.id, recipe]));
  const results = [];
  for (const item of sample) {
    const recipe = byId.get(item.id);
    const errors = [];
    if (!recipe) errors.push('recipe id missing');
    if (recipe) {
      for (const servings of [1, 2, 4, 6]) {
        const scaled = RecipeDetails.scale(recipe, servings);
        if (scaled.servings !== servings) errors.push(`serving ${servings} did not apply`);
        const text = JSON.stringify(scaled);
        if (/undefined|NaN/.test(text)) errors.push(`serving ${servings} contains invalid value`);
      }
      const sections = [
        RecipeDetails.renderNutrition(recipe, recipe.servings),
        RecipeDetails.renderTimes(recipe),
        RecipeDetails.renderAlternatives(recipe),
        RecipeDetails.renderStorage(recipe)
      ];
      if (sections.some(section => !section)) errors.push('enriched section missing');
      if (sections.some(section => /undefined|NaN|\uFFFD/.test(section))) errors.push('section contains invalid text');
      const one = RecipeDetails.scale(recipe, 1).ingredients.find(x => Number.isFinite(x.amount));
      const four = RecipeDetails.scale(recipe, 4).ingredients.find(x => Number.isFinite(x.amount));
      if (one && four && one.amount === four.amount) errors.push('serving amount did not change');
    }
    results.push({ ...item, name: recipe && recipe.name, passed: errors.length === 0, errors });
    failures.push(...errors.map(error => `${item.id}: ${error}`));
  }
  return { passed: failures.length === 0, sampleCount: sample.length, servingSizes: [1, 2, 4, 6], failures, results };
}

function main() {
  const recipes = loadCanonical();
  const sample = JSON.parse(fs.readFileSync(path.join(root, 'scripts/data/manual-review-sample.json'), 'utf8'));
  const report = verifySample(recipes, sample);
  report.checkedAt = new Date().toISOString();
  report.totalRecipes = recipes.length;
  report.favoritesPreserved = /GUDU_FAVORITES/.test(fs.readFileSync(path.join(root, 'js/app.js'), 'utf8'));
  report.canonicalOnly = !/recipe-corrections|nutrition-corrections/.test(fs.readFileSync(path.join(root, 'index.html'), 'utf8'));
  if (!report.favoritesPreserved) report.failures.push('favorites persistence key missing');
  if (!report.canonicalOnly) report.failures.push('legacy correction script remains in index');
  report.passed = report.failures.length === 0;
  fs.mkdirSync(path.join(root, 'output'), { recursive: true });
  fs.writeFileSync(path.join(root, 'output/enriched-ui-verification.json'), JSON.stringify(report, null, 2) + '\n');
  if (!report.passed) {
    console.error(report.failures.join('\n'));
    process.exitCode = 1;
  } else {
    console.log('30/30 sampled recipes passed; 4/4 serving sizes passed; favorites preserved; no blocking render errors');
  }
}

if (require.main === module) main();
module.exports = { loadCanonical, verifySample };
