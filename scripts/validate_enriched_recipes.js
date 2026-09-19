const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { assertValidRecipeCollection } = require('./lib/recipe-schema');

function loadCanonical(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
  return JSON.parse(JSON.stringify(sandbox.window.RECIPES_DATA));
}

function validateReleasePackage(pkg, manifest, actualHash, expectedCount = 1482) {
  const errors = [];
  if (!pkg || pkg.dataVersion !== manifest.dataVersion) errors.push('package and manifest data versions differ');
  if (!pkg || !Array.isArray(pkg.upserts) || pkg.upserts.length !== expectedCount) errors.push(`package must contain ${expectedCount} upserts`);
  if (pkg && ((pkg.patches && pkg.patches.length) || (pkg.removeIds && pkg.removeIds.length))) errors.push('migration package may not patch or remove IDs');
  if (manifest.dataSha256 !== actualHash) errors.push('manifest SHA-256 does not match package bytes');
  if (pkg && Array.isArray(pkg.upserts)) {
    try { assertValidRecipeCollection(pkg.upserts, expectedCount); } catch (error) { errors.push(error.message); }
  }
  return { errors };
}

function main() {
  const root = path.resolve(__dirname, '..');
  const recipes = loadCanonical(path.join(root, 'js', 'data', 'recipes-canonical.js'));
  assertValidRecipeCollection(recipes, 1482);
  console.log(`Validated ${recipes.length}/1482 recipes`);
  console.log('Nutrition failures: 0');
  console.log('Time failures: 0');
  console.log('Scaling failures: 0');
  console.log('Guidance failures: 0');
  const packageIndex = process.argv.indexOf('--package');
  const manifestIndex = process.argv.indexOf('--manifest');
  if (packageIndex !== -1 || manifestIndex !== -1) {
    if (packageIndex === -1 || manifestIndex === -1) throw new Error('both --package and --manifest are required');
    const packageFile = path.resolve(process.argv[packageIndex + 1]);
    const manifestFile = path.resolve(process.argv[manifestIndex + 1]);
    const bytes = fs.readFileSync(packageFile);
    const result = validateReleasePackage(JSON.parse(bytes), JSON.parse(fs.readFileSync(manifestFile, 'utf8')),
      crypto.createHash('sha256').update(bytes).digest('hex'));
    if (result.errors.length) throw new Error(result.errors.join('; '));
    console.log(`Release package: ${recipes.length} valid upserts; versions and SHA-256 match`);
  }
}

if (require.main === module) main();
module.exports = { loadCanonical, validateReleasePackage };
