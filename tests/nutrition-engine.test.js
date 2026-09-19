const test = require('node:test');
const assert = require('node:assert/strict');
const {
  normalizeIngredientName,
  calculateNutrition,
  findUnresolvedNutritionInputs
} = require('../scripts/lib/nutrition-engine');

const refs = {
  pork: { caloriesKcal: 395, proteinG: 14, fatG: 37, carbsG: 0, edibleFraction: 1 },
  rice: { caloriesKcal: 346, proteinG: 7.4, fatG: 0.8, carbsG: 77.9, edibleFraction: 1 },
  oil: { caloriesKcal: 900, proteinG: 0, fatG: 100, carbsG: 0, edibleFraction: 1 },
  water: { caloriesKcal: 0, proteinG: 0, fatG: 0, carbsG: 0, edibleFraction: 1 }
};
const aliases = { '猪肉': 'pork', '大米': 'rice', '食用油': 'oil', '清水': 'water' };

test('nutrition engine normalizes aliases and calculates weighed food', () => {
  assert.equal(normalizeIngredientName('新鲜猪肉', { '新鲜猪肉': 'pork' }), 'pork');
  const recipe = { id: 'stir', servings: 2, calories: 970, ingredients: [{ name: '猪肉', amount: 200, unit: '克' }], seasonings: [{ name: '食用油', baseAmount: 15, unit: '克' }] };
  const result = calculateNutrition(recipe, refs, aliases, { yieldWeightG: 190 });
  assert.equal(result.finishedWeightG, 190);
  assert.equal(result.total.caloriesKcal, 970);
  assert.equal(result.perServing.caloriesKcal, 485);
  assert.equal(result.per100g.caloriesKcal, 511);
});

test('nutrition engine records edible fraction, hydration, retained oil and consumed liquid assumptions', () => {
  const recipe = {
    id: 'fried-rice', servings: 2, calories: 800,
    ingredients: [{ name: '大米', amount: 100, unit: '克' }],
    seasonings: [{ name: '食用油', baseAmount: 100, unit: '克' }, { name: '清水', baseAmount: 500, unit: 'ml' }]
  };
  const result = calculateNutrition(recipe, refs, aliases, { hydrationGainG: 120, retainedOilG: 18, consumedLiquidRatio: 0.2, yieldWeightG: 338 });
  assert.ok(result.assumptions.includes('吸油量按18克计'));
  assert.ok(result.assumptions.includes('液体按20%计入成品'));
  assert.equal(result.finishedWeightG, 338);
});

test('nutrition engine reports truly unresolved quantities instead of treating them as zero', () => {
  const recipe = { id: 'unknown', servings: 2, calories: 100, ingredients: [{ name: '神秘食材', amountText: '适量' }], seasonings: [] };
  const unresolved = findUnresolvedNutritionInputs([recipe], refs, aliases, {});
  assert.equal(unresolved.length, 1);
  assert.equal(unresolved[0].recipeId, 'unknown');
});
