const fs = require('fs');
const path = require('path');

const map = JSON.parse(fs.readFileSync(path.join(__dirname, 'authentic_photos_map.json'), 'utf8'));
console.log(`Loaded ${Object.keys(map).length} photo updates.`);

function updateRecipesFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Load data
  const fn = new Function('window', content + '\nreturn window.RECIPES_DATA;');
  const recipes = fn({});
  
  let updatedCount = 0;
  recipes.forEach(r => {
    if (map[r.id]) {
      r.photoUrl = map[r.id].photoUrl;
      updatedCount++;
    }
  });
  
  // Format back cleanly as window.RECIPES_DATA = [...]
  const newContent = `/**\n * 咕嘟食谱 - 407道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ${JSON.stringify(recipes, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated ${updatedCount} recipes in ${filePath}`);
}

// 1. Update web data
const webFile = path.join(__dirname, '../js/data/recipes.js');
updateRecipesFile(webFile);

// 2. Update android assets data
const androidFile = path.join(__dirname, '../android_build/assets/js/data/recipes.js');
if (fs.existsSync(androidFile)) {
  updateRecipesFile(androidFile);
}

// 3. Update photos_cache.json
const cacheFile = path.join(__dirname, 'photos_cache.json');
if (fs.existsSync(cacheFile)) {
  const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  Object.values(map).forEach(item => {
    cache[item.id] = {
      name: item.name,
      photoUrl: item.photoUrl,
      updatedAt: new Date().toISOString()
    };
  });
  fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), 'utf8');
  console.log(`Updated cache file: ${cacheFile}`);
}

console.log('All files successfully updated!');
