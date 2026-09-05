// scripts/merge_120_provincial.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('--- 开始合并120道中华各省地道名菜与家常小炒 ---');

// 1. 加载5个数据模块
const hunan = require('./data_120_hunan.js');
const anhui = require('./data_120_anhui.js');
const xibei = require('./data_120_xibei.js');
const dianqian = require('./data_120_dianqian.js');
const zhongyuan = require('./data_120_zhongyuan.js');

const all120 = [...hunan, ...anhui, ...xibei, ...dianqian, ...zhongyuan];
console.log(`已加载5个模块，共 ${all120.length} 道新食谱 (预期120)`);
if (all120.length !== 120) {
  throw new Error(`食谱数量不符: ${all120.length}`);
}

// 2. 加载图片映射
const photos = require('./provincial_120_photos.json');

// 3. 补全标准化字段
const cuisineMap = {
  '湖南': '湘菜',
  '安徽': '徽菜',
  '新疆': '西北风味',
  '甘肃': '西北风味',
  '宁夏': '西北风味',
  '青海': '西北风味',
  '云南': '滇菜',
  '贵州': '黔菜',
  '山西': '晋菜',
  '河南': '豫菜',
  '天津': '津菜',
  '河北': '冀菜'
};

const processed120 = all120.map(rec => {
  const photoEntry = photos[rec.id];
  if (!photoEntry || !photoEntry.photoUrl) {
    throw new Error(`缺少图片: ${rec.id} ${rec.name}`);
  }
  const photoUrl = photoEntry.photoUrl;

  const cuisine = cuisineMap[rec.region] || '中华各省';

  return {
    id: rec.id,
    name: rec.name,
    subtitle: rec.tips ? (rec.tips.length > 50 ? rec.tips.slice(0, 48) + '...' : rec.tips) : rec.name,
    photoUrl: photoUrl,
    image: photoUrl,
    region: rec.region,
    cuisineCategory: cuisine,
    categoryType: rec.categoryType || 'dish',
    cookingMethod: rec.cookingMethod || '炒',
    difficulty: rec.difficulty || '中等',
    prepTimeMinutes: rec.prepTimeMinutes || 15,
    cookTimeMinutes: rec.cookTimeMinutes || 15,
    servings: rec.portion || 2,
    calories: rec.calories || 280,
    ingredients: rec.ingredients || [],
    seasonings: rec.seasonings || [],
    steps: rec.steps || [],
    chefTips: rec.tips || '',
    tips: rec.tips || '',
    tags: rec.tags || [rec.region, cuisine],
    rating: 4.9,
    favoriteCount: Math.floor(Math.random() * 600) + 1200,
    season: 'all',
    primarySeason: 'all',
    seasonBadge: '四季常青',
    isGrandBanquets: !!rec.tags.some(t => t.includes('国宴') || t.includes('名菜') || t.includes('非遗')),
    isDrinkingSnack: !!rec.tags.some(t => t.includes('下酒') || t.includes('小炒')),
    isFatLossFriendly: (rec.calories && rec.calories <= 220),
    isSeafood: !!rec.name.match(/鱼|虾|蟹|蚝|贝|蛤|海鲜/)
  };
});

console.log(`成功处理120道食谱结构，图片完全匹配！`);

// 4. 读取现有 recipes.js
const webRecipesPath = path.join(__dirname, '../js/data/recipes.js');
const androidRecipesPath = path.join(__dirname, '../android_build/assets/js/data/recipes.js');

const rawContent = fs.readFileSync(webRecipesPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(rawContent, sandbox);
const existingRecipes = sandbox.window.RECIPES_DATA;
console.log(`现有食谱数据库包含 ${existingRecipes.length} 道食谱`);

// 过滤掉已存在的相同 id (如果有的话)
const existingIds = new Set(existingRecipes.map(r => r.id));
const existingUrls = new Set(existingRecipes.map(r => r.photoUrl || r.image));

let duplicateUrlCollisions = 0;
processed120.forEach(r => {
  if (existingUrls.has(r.photoUrl)) {
    console.warn(`[警告] 图片URL与现有食谱冲突: ${r.name} -> ${r.photoUrl}`);
    duplicateUrlCollisions++;
  }
});
console.log(`与现有食谱图片冲突检测结果: ${duplicateUrlCollisions} 个冲突`);

const cleanExisting = existingRecipes.filter(r => !r.id.startsWith('rec_prov_'));
const finalMerged = [...cleanExisting, ...processed120];

console.log(`合并后总食谱数: ${finalMerged.length} (预期: ${cleanExisting.length + 120})`);

// 5. 生成新的 recipes.js 文件内容
const outputContent = `// 咕嘟食谱 - 权威中华特色风味与时令菜谱数据库 (共 ${finalMerged.length} 道精选食谱)\nwindow.RECIPES_DATA = ${JSON.stringify(finalMerged, null, 2)};\n`;

fs.writeFileSync(webRecipesPath, outputContent, 'utf8');
console.log(`已成功更新: ${webRecipesPath}`);

if (fs.existsSync(androidRecipesPath)) {
  fs.writeFileSync(androidRecipesPath, outputContent, 'utf8');
  console.log(`已成功同步更新: ${androidRecipesPath}`);
}

console.log('--- 120道中华各省菜谱合并完成 ---');
