const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCanonical, verifySample } = require('../scripts/verify_enriched_ui');

test('fixed 30-recipe sample renders all enriched modules at four serving sizes', () => {
  const sample = JSON.parse(fs.readFileSync(path.join(__dirname, '../scripts/data/manual-review-sample.json'), 'utf8'));
  const report = verifySample(loadCanonical(), sample);
  assert.equal(report.sampleCount, 30);
  assert.deepEqual(report.failures, []);
});
