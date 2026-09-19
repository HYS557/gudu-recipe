const test = require('node:test');
const assert = require('node:assert/strict');
const { validateEnrichedRecipe, assertValidRecipeCollection } = require('../scripts/lib/recipe-schema');

function validRecipe(id = 'recipe-1') {
  return {
    id,
    name: '测试菜',
    nutrition: {
      finishedWeightG: 400,
      servingWeightG: 200,
      servings: 2,
      total: { caloriesKcal: 600, proteinG: 30, fatG: 28, carbsG: 57 },
      perServing: { caloriesKcal: 300, proteinG: 15, fatG: 14, carbsG: 28.5 },
      per100g: { caloriesKcal: 150, proteinG: 7.5, fatG: 7, carbsG: 14.3 },
      assumptions: ['估算值']
    },
    timeBreakdown: {
      activeMinutes: 15, prepMinutes: 10, cookMinutes: 20,
      soakMinutes: 0, marinateMinutes: 0, fermentMinutes: 0,
      restMinutes: 0, coolMinutes: 0, totalElapsedMinutes: 30,
      applianceVariants: []
    },
    scaling: {
      baseServings: 2, supportedServings: [1, 2, 4, 6],
      ingredientRules: {}, seasoningRules: {}
    },
    alternatives: {
      ingredientSwaps: [],
      dietaryVariants: { lessOil: null, lowSodium: null, mild: null, vegetarian: null }
    },
    storage: {
      roomTemperatureMinutes: 120, refrigeratedDays: 2, frozenDays: null,
      freezeRecommended: false, overnightRecommended: true,
      reheatingMethods: [{ device: '蒸锅', minutes: [5, 8], instruction: '加盖蒸热' }], notes: []
    }
  };
}

test('enriched recipe schema accepts a consistent complete recipe', () => {
  assert.deepEqual(validateEnrichedRecipe(validRecipe()), []);
});

test('enriched recipe schema reports field-specific consistency errors', () => {
  assert.match(validateEnrichedRecipe({ ...validRecipe(), nutrition: null }).join('\n'), /nutrition/);
  const negative = validRecipe(); negative.nutrition.total.fatG = -1;
  assert.match(validateEnrichedRecipe(negative).join('\n'), /fatG/);
  const weight = validRecipe(); weight.nutrition.servingWeightG = 150;
  assert.match(validateEnrichedRecipe(weight).join('\n'), /servingWeightG/);
  const time = validRecipe(); delete time.timeBreakdown.coolMinutes;
  assert.match(validateEnrichedRecipe(time).join('\n'), /coolMinutes/);
  const scaling = validRecipe(); scaling.scaling.supportedServings = [2, 4];
  assert.match(validateEnrichedRecipe(scaling).join('\n'), /1,2,4,6/);
  const storage = validRecipe(); delete storage.storage.overnightRecommended;
  assert.match(validateEnrichedRecipe(storage).join('\n'), /overnightRecommended/);
});

test('enriched recipe schema rejects duplicate IDs and wrong collection size', () => {
  assert.throws(() => assertValidRecipeCollection([validRecipe(), validRecipe()], 2), /duplicate recipe ID/);
  assert.throws(() => assertValidRecipeCollection([validRecipe()], 2), /expected 2 recipes/);
});

module.exports = { validRecipe };
