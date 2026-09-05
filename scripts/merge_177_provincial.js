// scripts/merge_177_provincial.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== 开始合并 177 道中华各省地道名菜与市井小炒 (目标总数: 881道) ===');

// 1. 加载5个数据模块
const chuanyu = require('./data_177_chuanyu.js');
const dongbei = require('./data_177_dongbei.js');
const shandong = require('./data_177_shandong.js');
const jiangzhe = require('./data_177_jiangzhe.js');
const hubei = require('./data_177_hubei.js');

console.log(`川渝巴蜀: ${chuanyu.length} 道`);
console.log(`关东东北: ${dongbei.length} 道`);
console.log(`齐鲁鲁菜: ${shandong.length} 道`);
console.log(`江浙水韵: ${jiangzhe.length} 道`);
console.log(`荆楚湖北: ${hubei.length} 道`);

const all177 = [...chuanyu, ...dongbei, ...shandong, ...jiangzhe, ...hubei];
console.log(`新食谱加载总计: ${all177.length} 道 (预期: 177)`);
if (all177.length !== 177) {
  throw new Error(`食谱数量不符: ${all177.length}`);
}

// 2. 加载图片映射
const photos = require('./provincial_177_photos.json');
console.log(`已加载图片映射库: ${Object.keys(photos).length} 张`);

// 3. 补全标准化字段
const cuisineMap = {
  '四川': '川菜',
  '重庆': '川菜',
  '东北': '东北菜',
  '黑龙江': '东北菜',
  '吉林': '东北菜',
  '辽宁': '东北菜',
  '山东': '鲁菜',
  '江苏': '江浙菜',
  '浙江': '江浙菜',
  '湖北': '楚菜'
};

const processed177 = all177.map(rec => {
  const photoEntry = photos[rec.id];
  if (!photoEntry || !photoEntry.photoUrl) {
    throw new Error(`缺少图片: ${rec.id} ${rec.name}`);
  }
  const photoUrl = photoEntry.photoUrl;

  const cuisine = rec.cuisineCategory || cuisineMap[rec.region] || '中华各省';

  // 规范化 region，确保兼容现有分类器与标签
  let standardizedRegion = rec.region;
  if (['黑龙江', '吉林', '辽宁'].includes(rec.region)) {
    standardizedRegion = '东北';
  } else if (rec.region === '重庆') {
    standardizedRegion = '四川';
  }

  return {
    id: rec.id,
    name: rec.name,
    subtitle: rec.tips ? (rec.tips.length > 50 ? rec.tips.slice(0, 48) + '...' : rec.tips) : rec.name,
    photoUrl: photoUrl,
    image: photoUrl,
    region: standardizedRegion,
    cuisineCategory: cuisine,
    categoryType: rec.categoryType || 'dish',
    cookingMethod: rec.cookingMethod || '炒',
    difficulty: rec.difficulty || '中等',
    prepTimeMinutes: rec.prepTimeMinutes || 15,
    cookTimeMinutes: rec.cookTimeMinutes || 15,
    servings: rec.portion || 2,
    calories: rec.calories || 260,
    ingredients: rec.ingredients || [],
    seasonings: rec.seasonings || [],
    steps: rec.steps || [],
    chefTips: rec.tips || '',
    tips: rec.tips || '',
    tags: rec.tags || [standardizedRegion, cuisine],
    rating: 4.9,
    favoriteCount: Math.floor(Math.random() * 600) + 1200,
    season: 'all',
    primarySeason: 'all',
    seasonBadge: '四季常青',
    isGrandBanquets: !!(rec.tags && rec.tags.some(t => t.includes('国宴') || t.includes('名菜') || t.includes('非遗'))),
    isDrinkingSnack: !!(rec.tags && rec.tags.some(t => t.includes('下酒') || t.includes('小炒') || t.includes('家常'))),
    isFatLossFriendly: (rec.calories && rec.calories <= 220),
    isSeafood: !!rec.name.match(/鱼|虾|蟹|蚝|贝|蛤|海肠|海参|螺|蚌/)
  };
});

console.log(`成功处理 177 道食谱结构，图片完全匹配！`);

// 4. 读取现有 recipes.js
const webRecipesPath = path.join(__dirname, '../js/data/recipes.js');
const androidRecipesPath = path.join(__dirname, '../android_build/assets/js/data/recipes.js');

const rawContent = fs.readFileSync(webRecipesPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(rawContent, sandbox);
const existingRecipes = sandbox.window.RECIPES_DATA;
console.log(`现有食谱数据库包含 ${existingRecipes.length} 道食谱`);

// 检查碰撞与重复
const existingIds = new Set(existingRecipes.map(r => r.id));
const existingUrls = new Set(existingRecipes.map(r => r.photoUrl || r.image));

let duplicateUrlCollisions = 0;
processed177.forEach(r => {
  if (existingUrls.has(r.photoUrl)) {
    console.error(`警告：发现重复图片 URL: ${r.id} ${r.name} -> ${r.photoUrl}`);
    duplicateUrlCollisions++;
  }
});

if (duplicateUrlCollisions > 0) {
  throw new Error(`存在 ${duplicateUrlCollisions} 个与现有食谱冲突的图片 URL！`);
}

// 过滤掉已存在的相同 id (确保幂等)
const cleanExisting = existingRecipes.filter(r => !processed177.some(n => n.id === r.id));
const mergedRecipes = [...cleanExisting, ...processed177];

console.log(`合并后总食谱数: ${mergedRecipes.length} 道 (预期: 881)`);
if (mergedRecipes.length !== 881) {
  console.warn(`警告：总数 ${mergedRecipes.length} 与 881 不一致，请确认原始数量`);
}

// 检查最终所有 881 道食谱的 URL 唯一性
const allUrls = mergedRecipes.map(r => r.photoUrl || r.image);
const uniqueUrls = new Set(allUrls);
console.log(`全库图片总数: ${allUrls.length}, 唯一 URL 数: ${uniqueUrls.size}`);
if (allUrls.length !== uniqueUrls.size) {
  throw new Error(`全库发现重复图片 URL: ${allUrls.length - uniqueUrls.size} 个！`);
}

// 5. 格式化并写入双端文件
const outputJs = `// 咕嘟食谱 核心数据库 (共 ${mergedRecipes.length} 道食谱)\nwindow.RECIPES_DATA = ${JSON.stringify(mergedRecipes, null, 2)};\n`;

fs.writeFileSync(webRecipesPath, outputJs, 'utf8');
console.log(`已成功更新 Web 端数据库: ${webRecipesPath}`);

if (fs.existsSync(androidRecipesPath)) {
  fs.writeFileSync(androidRecipesPath, outputJs, 'utf8');
  console.log(`已成功更新 Android 端数据库: ${androidRecipesPath}`);
} else {
  console.warn(`未找到 Android 数据库路径: ${androidRecipesPath}`);
}

console.log('=== 合并与校验圆满完成！===');
