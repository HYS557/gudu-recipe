const fs = require('fs');
const path = require('path');

const newSoups = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_30_soups.json'), 'utf8'));

function appendToFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fn = new Function('window', content + '\nreturn window.RECIPES_DATA;');
  const existingRecipes = fn({});

  const existingIds = new Set(existingRecipes.map(r => r.id));
  const filteredNew = newSoups.filter(s => !existingIds.has(s.id));

  const merged = [...existingRecipes, ...filteredNew];
  const newCode = `// 咕嘟食谱 - 权威中华特色风味与时令菜谱数据库 (共 ${merged.length} 道精选食谱)\nwindow.RECIPES_DATA = ${JSON.stringify(merged, null, 2)};\n`;
  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log(`Updated ${filePath}: from ${existingRecipes.length} to ${merged.length} recipes (+${filteredNew.length} new).`);
}

appendToFile(path.join(__dirname, '../js/data/recipes.js'));
appendToFile(path.join(__dirname, '../android_build/assets/js/data/recipes.js'));
