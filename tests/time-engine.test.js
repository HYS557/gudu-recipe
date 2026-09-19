const test = require('node:test');
const assert = require('node:assert/strict');
const { deriveTimeBreakdown } = require('../scripts/lib/time-engine');

test('time engine derives ordinary active and elapsed time', () => {
  const result = deriveTimeBreakdown({ prepTimeMinutes: 10, cookTimeMinutes: 20, steps: [{ timerSeconds: 300 }, { timerSeconds: 600 }] }, {});
  assert.equal(result.prepMinutes, 10);
  assert.equal(result.cookMinutes, 20);
  assert.equal(result.activeMinutes, 15);
  assert.equal(result.totalElapsedMinutes, 30);
});

test('time engine does not double count parallel phases', () => {
  const result = deriveTimeBreakdown({ prepTimeMinutes: 10, cookTimeMinutes: 20, steps: [] }, { soakMinutes: 40, parallelGroups: [['soakMinutes', 'prepMinutes']] });
  assert.equal(result.totalElapsedMinutes, 60);
});

test('time engine includes marination fermentation rest and cooling', () => {
  const result = deriveTimeBreakdown({ prepTimeMinutes: 10, cookTimeMinutes: 30, steps: [] }, { marinateMinutes: 60, fermentMinutes: 90, restMinutes: 15, coolMinutes: 20 });
  assert.equal(result.totalElapsedMinutes, 225);
});

test('time engine supplies three useful congee appliance variants', () => {
  const result = deriveTimeBreakdown({ name: '南瓜小米粥', categoryType: 'congee', prepTimeMinutes: 10, cookTimeMinutes: 45, steps: [] }, {});
  assert.deepEqual(result.applianceVariants.map(item => item.key), ['stovetop', 'riceCooker', 'pressureCooker']);
});
