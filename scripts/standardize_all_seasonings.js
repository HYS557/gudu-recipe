const fs = require('fs');
const path = require('path');
const vm = require('vm');

function parseAmount(amtStr) {
  if (!amtStr) return { baseAmount: 1, unit: '适量', amountText: '适量' };
  const str = String(amtStr).trim();
  if (str === '适量' || str.startsWith('适量') || str === '少许' || str.startsWith('少许') || str.includes('没过')) {
    return { baseAmount: 1, unit: '适量', amountText: str };
  }
  if (str.startsWith('半')) {
    const unitMatch = str.slice(1).match(/^([^\(（\d]+)/);
    const unit = unitMatch ? unitMatch[1] : '勺';
    return { baseAmount: 0.5, unit: unit, amountText: str };
  }
  if (str.startsWith('各半')) {
    const unitMatch = str.slice(2).match(/^([^\(（\d]+)/);
    const unit = unitMatch ? unitMatch[1] : '勺';
    return { baseAmount: 0.5, unit: unit, amountText: str };
  }
  if (str.startsWith('各')) {
    const sub = str.slice(1);
    const m = sub.match(/^([\d\.]+)(.*)$/);
    if (m) {
      return { baseAmount: parseFloat(m[1]), unit: m[2] || '份', amountText: str };
    }
  }
  const m = str.match(/^([\d\.]+)\s*([^\(（\d]*)/);
  if (m) {
    return { baseAmount: parseFloat(m[1]), unit: m[2] || '份', amountText: str };
  }
  return { baseAmount: 1, unit: '份', amountText: str };
}

function processFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);

  const recipes = sandbox.window.RECIPES_DATA;
  let updatedCount = 0;

  recipes.forEach(r => {
    if (Array.isArray(r.seasonings)) {
      r.seasonings.forEach(s => {
        if (s.baseAmount === undefined || isNaN(s.baseAmount)) {
          const parsed = parseAmount(s.amount || s.amountText);
          s.baseAmount = parsed.baseAmount;
          if (!s.unit) s.unit = parsed.unit;
          if (!s.amountText) s.amountText = s.amount || parsed.amountText;
          if (s.isPantryStaple === undefined) s.isPantryStaple = true;
          updatedCount++;
        }
      });
    }
  });

  const newCode = `// 咕嘟食谱 - 权威中华特色风味与时令菜谱数据库 (共 ${recipes.length} 道精选食谱)\nwindow.RECIPES_DATA = ${JSON.stringify(recipes, null, 2)};\n`;
  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log(`Standardized ${filePath}: ${recipes.length} recipes, ${updatedCount} seasonings updated.`);
}

processFile(path.join(__dirname, '../js/data/recipes.js'));
processFile(path.join(__dirname, '../android_build/assets/js/data/recipes.js'));
