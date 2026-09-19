const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { validateReleasePackage } = require('../scripts/validate_enriched_recipes');

test('release package contains 1482 valid canonical upserts and matches manifest hash', () => {
  const root = path.resolve(__dirname, '..');
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'updates/manifest.json'), 'utf8'));
  const packagePath = path.join(root, manifest.dataUrl);
  const bytes = fs.readFileSync(packagePath);
  const pkg = JSON.parse(bytes);
  const result = validateReleasePackage(pkg, manifest, crypto.createHash('sha256').update(bytes).digest('hex'));
  assert.deepEqual(result.errors, []);
  assert.equal(pkg.upserts.length, 1482);
});
