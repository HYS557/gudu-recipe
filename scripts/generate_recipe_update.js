const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { loadCanonical } = require('./validate_enriched_recipes');

const root = path.resolve(__dirname, '..');
const dataVersion = '2026.09.20.3';
const packageRelative = `updates/recipe-update-${dataVersion}.json`;
const packagePath = path.join(root, packageRelative);
const recipes = loadCanonical(path.join(root, 'js/data/recipes-canonical.js'));
const pkg = { dataVersion, patches: [], upserts: recipes, removeIds: [] };
const bytes = Buffer.from(JSON.stringify(pkg) + '\n', 'utf8');
fs.writeFileSync(packagePath, bytes);
const dataSha256 = crypto.createHash('sha256').update(bytes).digest('hex');
const manifest = {
  appVersion: '3.8.1',
  versionCode: 381,
  dataVersion,
  dataUrl: packageRelative.replace(/\\/g, '/'),
  dataSha256,
  apkUrl: 'https://github.com/HYS557/gudu-recipe/releases/download/v3.8.1/gudu-recipe.apk'
};
fs.writeFileSync(path.join(root, 'updates/manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Generated ${recipes.length} upserts; SHA-256 ${dataSha256}`);
