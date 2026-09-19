const test = require('node:test');
const assert = require('node:assert/strict');
const { classifyScalingRule, scaleRecipeAmounts, buildScalingMetadata } = require('../scripts/lib/scaling-engine');

const fixture = {
  servings: 2,
  ingredients: [{ name: '猪肉', amount: 200, unit: '克' }, { name: '鸡蛋', amount: 3, unit: '个' }],
  seasonings: [
    { name: '盐', baseAmount: 5, unit: '克' }, { name: '生抽', baseAmount: 15, unit: 'ml' },
    { name: '白糖', baseAmount: 10, unit: '克' }, { name: '辣椒粉', baseAmount: 4, unit: '克' },
    { name: '炸制用油', baseAmount: 500, unit: 'ml' }, { name: '水淀粉', baseAmount: 30, unit: 'ml' }
  ]
};

test('serving scaling classifies linear gentle and process items', () => {
  assert.equal(classifyScalingRule({ name: '猪肉' }), 'linear');
  assert.equal(classifyScalingRule({ name: '盐' }), 'gentle');
  assert.equal(classifyScalingRule({ name: '炸制用油' }), 'process');
});

test('serving scaling changes food linearly and rounds eggs to half units', () => {
  const four = scaleRecipeAmounts(fixture, 4);
  assert.equal(four.ingredients.find(item => item.name === '猪肉').amount, 400);
  const one = scaleRecipeAmounts(fixture, 1);
  assert.equal(one.ingredients.find(item => item.name === '鸡蛋').displayAmount, '1.5个');
});

test('serving scaling gently increases seasonings and caps process quantities', () => {
  const six = scaleRecipeAmounts(fixture, 6);
  for (const name of ['盐', '生抽', '白糖', '辣椒粉']) assert.ok(six.seasonings.find(item => item.name === name).amount < fixture.seasonings.find(item => item.name === name).baseAmount * 3);
  assert.ok(six.seasonings.find(item => item.name === '炸制用油').amount <= 750);
  assert.ok(six.seasonings.find(item => item.name === '水淀粉').amount <= 45);
});

test('serving scaling metadata exposes exactly four serving options', () => {
  assert.deepEqual(buildScalingMetadata(fixture, {}).supportedServings, [1, 2, 4, 6]);
});
