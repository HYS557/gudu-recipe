const fs = require('fs');
const path = require('path');
const vm = require('vm');

const g1 = require('./congee_definitions/group1');
const g2 = require('./congee_definitions/group2');
const g3 = require('./congee_definitions/group3');
const g4 = require('./congee_definitions/group4');

const all80 = [...g1, ...g2, ...g3, ...g4];
console.log(`Loaded ${all80.length} curated recipes from 4 groups.`);

if (all80.length !== 80) {
  console.error(`Error: Expected 80 recipes, but got ${all80.length}`);
  process.exit(1);
}

// 1. Read existing verified image URLs from js/data/recipes.js
const recipesJsPath = path.join(__dirname, '../js/data/recipes.js');
const recipesContent = fs.readFileSync(recipesJsPath, 'utf8');
const sandbox = { window: {} };
sandbox.window = sandbox;
vm.runInNewContext(recipesContent, sandbox);
const existingRecipes = sandbox.RECIPES_DATA || sandbox.window.RECIPES_DATA || [];

const congeeMap = {};
existingRecipes.forEach(r => {
  if (r.id && r.id.startsWith('rec_congee_')) {
    congeeMap[r.id] = r;
  }
});
console.log(`Found ${Object.keys(congeeMap).length} existing congee recipes in recipes.js.`);

// 2. Assemble complete authentic 80 congee data
const finalized80 = all80.map(item => {
  const existing = congeeMap[item.id] || {};
  const image = existing.image || '';
  if (!image) {
    console.warn(`Warning: No existing image found for ${item.id} - ${item.name}`);
  }

  return {
    id: item.id,
    name: item.name,
    subtitle: item.subtitle,
    region: item.region,
    cookingMethod: item.cookingMethod,
    difficulty: item.difficulty,
    prepTimeMinutes: item.prepTimeMinutes,
    cookTimeMinutes: item.cookTimeMinutes,
    prepTime: item.prepTimeMinutes,
    cookTime: item.cookTimeMinutes,
    servings: item.servings || 2,
    calories: item.calories,
    protein: item.protein,
    fat: item.fat,
    carbs: item.carbs,
    ratio: item.ratio,
    waterRiceRatio: item.ratio,
    tags: item.tags,
    cuisineCategory: '滋补养生粥',
    categoryType: 'noodle',
    isDrinkingSnack: false,
    isGrandBanquet: false,
    isFatLossFriendly: item.calories < 250,
    isSeafood: item.name.match(/虾|蟹|鱼|贝|生蚝|鲍鱼|海参|海鲜|黄鳝|象拔蚌|泥鳅|螺|蛤|蛏/) !== null,
    image: image,
    ingredients: item.ingredients,
    seasonings: item.seasonings,
    steps: item.steps,
    chefTips: item.chefTips || item.steps.map(s => s.chefTip),
    proTips: item.proTips || (item.steps[0] ? item.steps[0].chefTip : ''),
    nutritionHighlights: item.nutritionHighlights
  };
});

// 3. Write to scripts/data_80_congee.js
const data80Content = `// 滋补养生粥品大典：80道名家名粥全席 (涵盖广府生滚、潮汕砂锅、北方五谷药膳、华夏地标调理)
// 全量“真·保姆级分步做法与避坑Tips”标准升级版
window.CONGEE_80_DATA = ${JSON.stringify(finalized80, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, 'data_80_congee.js'), data80Content, 'utf8');
console.log(`Saved scripts/data_80_congee.js successfully.`);

// 4. Update js/data/recipes.js
const updatedAllRecipes = existingRecipes.map(r => {
  if (r.id && r.id.startsWith('rec_congee_')) {
    const updated = finalized80.find(c => c.id === r.id);
    return updated || r;
  }
  return r;
});

const newRecipesJsContent = `// 全量菜谱核心主数据库
window.RECIPES_DATA = ${JSON.stringify(updatedAllRecipes, null, 2)};
`;
fs.writeFileSync(recipesJsPath, newRecipesJsContent, 'utf8');
console.log(`Updated js/data/recipes.js successfully.`);

// 5. Update android_build/assets/js/data/recipes.js
const androidRecipesJsPath = path.join(__dirname, '../android_build/assets/js/data/recipes.js');
if (fs.existsSync(androidRecipesJsPath)) {
  fs.writeFileSync(androidRecipesJsPath, newRecipesJsContent, 'utf8');
  console.log(`Updated android_build/assets/js/data/recipes.js successfully.`);
}

// 6. Perform validation
let errCount = 0;
finalized80.forEach((r, idx) => {
  if (!r.image || !r.image.startsWith('http')) {
    console.error(`[ERR] ${r.id} (${r.name}) has invalid image: ${r.image}`);
    errCount++;
  }
  if (!r.steps || r.steps.length < 4) {
    console.error(`[ERR] ${r.id} (${r.name}) has insufficient steps: ${r.steps ? r.steps.length : 0}`);
    errCount++;
  }
  r.steps.forEach((s, sIdx) => {
    if (!s.instruction || s.instruction.length < 15) {
      console.error(`[ERR] ${r.id} step ${sIdx + 1} instruction too short: ${s.instruction}`);
      errCount++;
    }
    if (!s.chefTip || s.chefTip.length < 5) {
      console.error(`[ERR] ${r.id} step ${sIdx + 1} chefTip missing: ${s.chefTip}`);
      errCount++;
    }
    if (!s.timerSeconds || s.timerSeconds <= 0) {
      console.error(`[ERR] ${r.id} step ${sIdx + 1} timerSeconds invalid: ${s.timerSeconds}`);
      errCount++;
    }
  });
  r.ingredients.forEach((ing, iIdx) => {
    if (ing.name.includes('主料精选') || ing.name.includes('辅料时蔬')) {
      console.error(`[ERR] ${r.id} ingredient ${iIdx + 1} has placeholder: ${ing.name}`);
      errCount++;
    }
  });
});

if (errCount === 0) {
  console.log(`\n🎉 完美！80道养生粥全量检验通过！`);
  console.log(`- 80/80 道食谱具备纯正“保姆级分步教程”（instruction、timerSeconds、chefTip）`);
  console.log(`- 80/80 道食谱防翻车Tips全覆盖`);
  console.log(`- 0 处模糊占位符`);
  console.log(`- 100% 保持精准图片对应关系`);
} else {
  console.error(`Validation found ${errCount} errors.`);
  process.exit(1);
}
