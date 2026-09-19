const test = require('node:test');
const assert = require('node:assert/strict');
const RecipeDetails = require('../js/recipe-details');

const recipe = {
  id: 'r1', name: '<测试菜>', servings: 2,
  ingredients: [{ name: '<猪肉>', amount: 200, unit: '克' }],
  seasonings: [{ name: '盐', baseAmount: 5, unit: '克' }],
  nutrition: { finishedWeightG: 400, servingWeightG: 200, servings: 2, total: { caloriesKcal: 600, proteinG: 30, fatG: 28, carbsG: 57 }, perServing: { caloriesKcal: 300, proteinG: 15, fatG: 14, carbsG: 28.5 }, per100g: { caloriesKcal: 150, proteinG: 7.5, fatG: 7, carbsG: 14.3 }, assumptions: ['估算值'] },
  timeBreakdown: { activeMinutes: 10, prepMinutes: 10, cookMinutes: 20, soakMinutes: 0, marinateMinutes: 0, fermentMinutes: 0, restMinutes: 0, coolMinutes: 0, totalElapsedMinutes: 30, applianceVariants: [{ key: 'stovetop', label: '普通锅', cookMinutes: 20, note: '加盖' }] },
  alternatives: { ingredientSwaps: [], dietaryVariants: { lessOil: '少油说明', lowSodium: '低盐说明', mild: null, vegetarian: null } },
  storage: { roomTemperatureMinutes: 120, refrigeratedDays: 2, frozenDays: 14, freezeRecommended: true, overnightRecommended: true, reheatingMethods: [{ device: '蒸锅', minutes: [5, 8], instruction: '加盖蒸热' }], notes: [] }
};

test('recipe detail helpers scale four supported servings safely', () => {
  for (const servings of [1, 2, 4, 6]) assert.equal(RecipeDetails.scale(recipe, servings).servings, servings);
  assert.equal(RecipeDetails.scale(recipe, 4).ingredients[0].amount, 400);
  assert.ok(RecipeDetails.scale(recipe, 6).seasonings[0].amount < 15);
});

test('recipe detail helpers render escaped enriched sections', () => {
  const nutrition = RecipeDetails.renderNutrition(recipe, 2);
  assert.match(nutrition, /每100克/);
  assert.doesNotMatch(nutrition, /<测试菜>/);
  assert.match(RecipeDetails.renderTimes(recipe), /普通锅/);
  assert.doesNotMatch(RecipeDetails.renderAlternatives(recipe), /不辣版/);
  assert.match(RecipeDetails.renderStorage(recipe), /冷藏2天/);
});

test('recipe detail helpers hide modules for legacy recipes', () => {
  const legacy = { id: 'old', servings: 2, ingredients: [], seasonings: [] };
  assert.equal(RecipeDetails.renderNutrition(legacy, 2), '');
  assert.equal(RecipeDetails.renderTimes(legacy), '');
  assert.equal(RecipeDetails.renderAlternatives(legacy), '');
  assert.equal(RecipeDetails.renderStorage(legacy), '');
});
