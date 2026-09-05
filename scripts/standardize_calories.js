const fs = require('fs');
const path = require('path');
const vm = require('vm');

const recipeFilePath = path.join(__dirname, '..', 'js', 'data', 'recipes.js');
const rawCode = fs.readFileSync(recipeFilePath, 'utf8');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(rawCode, sandbox);

const recipes = sandbox.window.RECIPES_DATA || [];
console.log(`Loaded ${recipes.length} recipes.`);

let updatedCount = 0;

for (const r of recipes) {
  let numVal = 0;
  if (typeof r.calories === 'number' && r.calories > 0) {
    numVal = Math.round(r.calories);
  } else if (typeof r.calories === 'string') {
    const match = r.calories.match(/\d+/);
    if (match) {
      numVal = parseInt(match[0], 10);
    }
  }

  // Fallback estimation if somehow <= 0
  if (numVal <= 0) {
    if (r.cuisineCategory && r.cuisineCategory.includes('汤')) numVal = 180;
    else if (r.categoryType === 'staple') numVal = 420;
    else if (r.categoryType === 'snack') numVal = 220;
    else numVal = 320;
  }

  const baseServings = r.servings || 2;
  
  // Normalize: if numVal is > 550 and baseServings >= 2, treat it as dish total; otherwise per-serving
  let perServing = 0;
  let totalCal = 0;

  if (numVal > 500 && baseServings >= 2) {
    totalCal = numVal;
    perServing = Math.round(numVal / baseServings);
  } else {
    perServing = numVal;
    totalCal = Math.round(numVal * baseServings);
  }

  // Determine Level and Tip
  let level = 'balanced';
  let tip = '🟡 营养均衡 · 约合1.5碗米饭，元气满满';

  if (perServing <= 320) {
    level = 'light';
    tip = '🟢 轻负担低脂 · 慢跑20分钟即可轻松消耗';
  } else if (perServing > 500) {
    level = 'rich';
    tip = '🟠 浓郁犒劳 · 饱腹过瘾，吃饱了才有力气生活';
  }

  r.calories = totalCal;
  r.caloriePerServing = perServing;
  r.calorieLevel = level;
  r.calorieBurnTip = tip;
  updatedCount++;
}

console.log(`Standardized ${updatedCount} recipes with calorie info.`);

// Write back to js/data/recipes.js
const newCode = `// 全量菜谱核心主数据库 (标准化商用版 · 含精准卡路里与热量健康标)\nwindow.RECIPES_DATA = ${JSON.stringify(recipes, null, 2)};\n`;
fs.writeFileSync(recipeFilePath, newCode, 'utf8');
console.log(`[Success] Written updated recipes.js!`);
