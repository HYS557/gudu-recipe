const test = require('node:test');
const assert = require('node:assert/strict');
const updater = require('../js/updater');

function enriched(id, name = '测试菜') {
  return {
    id, name, servings: 2,
    nutrition: { finishedWeightG: 300, servingWeightG: 150, servings: 2, total: {}, perServing: {}, per100g: {}, assumptions: [] },
    timeBreakdown: { activeMinutes: 10, prepMinutes: 5, cookMinutes: 10, totalElapsedMinutes: 15, applianceVariants: [] },
    scaling: { baseServings: 2, supportedServings: [1, 2, 4, 6], ingredientRules: {}, seasoningRules: {} },
    alternatives: { ingredientSwaps: [], dietaryVariants: {} },
    storage: { roomTemperatureMinutes: 120, refrigeratedDays: 2, frozenDays: 0, reheatingMethods: [], notes: [] }
  };
}

test('accepts and applies a valid enriched replacement without mutating bundled data', () => {
  const bundled = [enriched('r1', '旧名')];
  const pkg = { dataVersion: '2026.09.20.2', upserts: [enriched('r1', '新名')], patches: [], removeIds: [] };
  assert.equal(updater.validatePackage(pkg, bundled).valid, true);
  const applied = updater.applyPackageToRecipes(bundled, pkg);
  assert.equal(applied[0].name, '新名');
  assert.equal(bundled[0].name, '旧名');
});

test('rejects missing enriched fields and unknown patch ids', () => {
  const bundled = [enriched('r1')];
  assert.equal(updater.validatePackage({ dataVersion: '2', upserts: [{ id: 'r1' }] }, bundled).valid, false);
  assert.equal(updater.validatePackage({ dataVersion: '2', patches: [{ id: 'missing', fields: { name: 'x' } }] }, bundled).valid, false);
});

test('rejects corrupt package shapes and does not apply them', () => {
  const bundled = [enriched('r1')];
  const corrupt = { dataVersion: '2', upserts: 'not-an-array' };
  assert.equal(updater.validatePackage(corrupt, bundled).valid, false);
  assert.throws(() => updater.applyPackageToRecipes(bundled, corrupt), /invalid/i);
});
