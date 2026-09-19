const test = require('node:test');
const assert = require('node:assert/strict');
const { buildAlternatives, buildStorage, validateGuidanceCoverage } = require('../scripts/lib/guidance-engine');
const rules = require('../scripts/data/guidance-rules.json');

test('storage and alternatives use conservative seafood and cold-dish rules', () => {
  const seafood = { id: 'fish', name: '凉拌生腌海鲜', ingredients: [{ name: '鲜虾', substitutes: ['熟虾仁'] }], seasonings: [], allergens: ['甲壳类'] };
  const storage = buildStorage(seafood, rules, {});
  assert.equal(storage.roomTemperatureMinutes, 60);
  assert.equal(storage.freezeRecommended, false);
  assert.equal(storage.overnightRecommended, false);
  const alternatives = buildAlternatives(seafood, rules, {});
  assert.equal(alternatives.ingredientSwaps[0].ratio, '等重量替换');
  assert.match(alternatives.ingredientSwaps[0].allergenNote, /过敏原/);
});

test('storage and alternatives hide inapplicable variants and describe reheating', () => {
  const rice = { id: 'rice', name: '腊味焖饭', ingredients: [{ name: '大米' }, { name: '腊肠' }], seasonings: [] };
  const storage = buildStorage(rice, rules, {});
  assert.equal(storage.refrigeratedDays, 1);
  assert.ok(storage.reheatingMethods.every(method => method.device && method.minutes.length === 2 && method.instruction));
  const alternatives = buildAlternatives(rice, rules, {});
  assert.equal(alternatives.dietaryVariants.vegetarian, null);
  assert.ok(alternatives.dietaryVariants.lowSodium);
});

test('storage and alternatives validate complete guidance', () => {
  const recipe = { id: 'soup', name: '蔬菜汤', ingredients: [{ name: '青菜' }], seasonings: [] };
  recipe.alternatives = buildAlternatives(recipe, rules, {});
  recipe.storage = buildStorage(recipe, rules, {});
  assert.deepEqual(validateGuidanceCoverage([recipe]), []);
});
