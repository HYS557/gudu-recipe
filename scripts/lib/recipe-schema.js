const SUPPORTED_SERVINGS = Object.freeze([1, 2, 4, 6]);
const MACROS = ['caloriesKcal', 'proteinG', 'fatG', 'carbsG'];
const TIME_FIELDS = [
  'activeMinutes', 'prepMinutes', 'cookMinutes', 'soakMinutes',
  'marinateMinutes', 'fermentMinutes', 'restMinutes', 'coolMinutes',
  'totalElapsedMinutes'
];

function finiteNonNegative(value) {
  return Number.isFinite(value) && value >= 0;
}

function validateNutrition(nutrition, errors) {
  if (!nutrition || typeof nutrition !== 'object') {
    errors.push('nutrition must be an object');
    return;
  }
  for (const field of ['finishedWeightG', 'servingWeightG', 'servings']) {
    if (!finiteNonNegative(nutrition[field]) || nutrition[field] === 0) errors.push(`nutrition.${field} must be positive`);
  }
  for (const section of ['total', 'perServing', 'per100g']) {
    if (!nutrition[section] || typeof nutrition[section] !== 'object') {
      errors.push(`nutrition.${section} must be an object`);
      continue;
    }
    for (const macro of MACROS) {
      if (!finiteNonNegative(nutrition[section][macro])) errors.push(`nutrition.${section}.${macro} must be non-negative`);
    }
  }
  if (!Array.isArray(nutrition.assumptions)) errors.push('nutrition.assumptions must be an array');
  if (finiteNonNegative(nutrition.finishedWeightG) && finiteNonNegative(nutrition.servingWeightG) && finiteNonNegative(nutrition.servings)) {
    const expectedServingWeight = nutrition.finishedWeightG / nutrition.servings;
    if (Math.abs(expectedServingWeight - nutrition.servingWeightG) > 1) errors.push('nutrition.servingWeightG is inconsistent with yield and servings');
  }
  if (nutrition.total && nutrition.perServing && nutrition.per100g && nutrition.finishedWeightG > 0 && nutrition.servings > 0) {
    for (const macro of MACROS) {
      const tolerance = macro === 'caloriesKcal' ? Math.max(1, nutrition.total[macro] * 0.02) : 0.2;
      if (Math.abs(nutrition.total[macro] / nutrition.servings - nutrition.perServing[macro]) > tolerance) {
        errors.push(`nutrition.perServing.${macro} is inconsistent`);
      }
      if (Math.abs(nutrition.total[macro] / nutrition.finishedWeightG * 100 - nutrition.per100g[macro]) > tolerance) {
        errors.push(`nutrition.per100g.${macro} is inconsistent`);
      }
    }
  }
}

function validateTime(time, errors) {
  if (!time || typeof time !== 'object') {
    errors.push('timeBreakdown must be an object');
    return;
  }
  for (const field of TIME_FIELDS) if (!finiteNonNegative(time[field])) errors.push(`timeBreakdown.${field} must be non-negative`);
  if (!Array.isArray(time.applianceVariants)) errors.push('timeBreakdown.applianceVariants must be an array');
  const longestPhase = Math.max(0, ...TIME_FIELDS.filter(field => field !== 'activeMinutes' && field !== 'totalElapsedMinutes').map(field => Number(time[field]) || 0));
  if (finiteNonNegative(time.totalElapsedMinutes) && time.totalElapsedMinutes < longestPhase) errors.push('timeBreakdown.totalElapsedMinutes is shorter than a required phase');
}

function validateScaling(scaling, errors) {
  if (!scaling || typeof scaling !== 'object') {
    errors.push('scaling must be an object');
    return;
  }
  if (!finiteNonNegative(scaling.baseServings) || scaling.baseServings === 0) errors.push('scaling.baseServings must be positive');
  if (!Array.isArray(scaling.supportedServings) || scaling.supportedServings.join(',') !== SUPPORTED_SERVINGS.join(',')) {
    errors.push('scaling.supportedServings must be exactly 1,2,4,6');
  }
  if (!scaling.ingredientRules || typeof scaling.ingredientRules !== 'object') errors.push('scaling.ingredientRules must be an object');
  if (!scaling.seasoningRules || typeof scaling.seasoningRules !== 'object') errors.push('scaling.seasoningRules must be an object');
}

function validateStorage(storage, errors) {
  if (!storage || typeof storage !== 'object') {
    errors.push('storage must be an object');
    return;
  }
  for (const field of ['roomTemperatureMinutes', 'refrigeratedDays', 'frozenDays']) {
    if (storage[field] !== null && !finiteNonNegative(storage[field])) errors.push(`storage.${field} must be null or non-negative`);
  }
  for (const field of ['freezeRecommended', 'overnightRecommended']) {
    if (typeof storage[field] !== 'boolean') errors.push(`storage.${field} must be boolean`);
  }
  if (!Array.isArray(storage.reheatingMethods)) errors.push('storage.reheatingMethods must be an array');
  if (!Array.isArray(storage.notes)) errors.push('storage.notes must be an array');
}

function validateEnrichedRecipe(recipe) {
  const errors = [];
  if (!recipe || typeof recipe !== 'object') return ['recipe must be an object'];
  if (!recipe.id || typeof recipe.id !== 'string') errors.push('id must be a non-empty string');
  validateNutrition(recipe.nutrition, errors);
  validateTime(recipe.timeBreakdown, errors);
  validateScaling(recipe.scaling, errors);
  if (!recipe.alternatives || typeof recipe.alternatives !== 'object') errors.push('alternatives must be an object');
  validateStorage(recipe.storage, errors);
  return errors;
}

function assertValidRecipeCollection(recipes, expectedCount = 961) {
  if (!Array.isArray(recipes)) throw new Error('recipe collection must be an array');
  if (recipes.length !== expectedCount) throw new Error(`expected ${expectedCount} recipes, received ${recipes.length}`);
  const seen = new Set();
  const failures = [];
  for (const recipe of recipes) {
    if (seen.has(recipe.id)) failures.push(`duplicate recipe ID: ${recipe.id}`);
    seen.add(recipe.id);
    for (const error of validateEnrichedRecipe(recipe)) failures.push(`${recipe.id || '<missing-id>'}: ${error}`);
  }
  if (failures.length) throw new Error(failures.join('\n'));
}

module.exports = { SUPPORTED_SERVINGS, validateEnrichedRecipe, assertValidRecipeCollection };
