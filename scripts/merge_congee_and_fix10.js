const fs = require('fs');
const path = require('path');

// 1. 读取当前 881 库
global.window = global;
require('../js/data/recipes.js');
let allRecipes = [...window.RECIPES_DATA];
console.log(`原库食谱数: ${allRecipes.length}`);

// 2. 更新 10 道被指定的菜品图片
const replacements = {
  'rec_gudu_0067': {
    name: '经典剁椒鱼头',
    newImg: 'https://i2.chuimg.com/03bb7e748bb711e6b87c0242ac110003_1614w_1080h.jpg'
  },
  'rec_gudu_0072': {
    name: '红煨甲鱼',
    newImg: 'https://i2.chuimg.com/c9f34fd8c91a496fadf9c40442d4e789_1280w_960h.jpg'
  },
  'rec_gudu_0107': {
    name: '沙县扁肉',
    newImg: 'https://i2.chuimg.com/85ad33d0e8bb41f6ae91f037370b8b83_1440w_1080h.jpg'
  },
  'rec_seafood_32': {
    name: '渤海香煎针亮鱼',
    newImg: 'https://i2.chuimg.com/d6c1b5de4e0843fdb310939e82433534_1280w_855h.jpg'
  },
  'rec_staple_16': {
    name: '门框胡同老北京牛肉褡裢火烧',
    newImg: 'https://i2.chuimg.com/7841df375d6148c496c8a881c7c6c580_1280w_960h.jpg'
  },
  'rec_prov_121': {
    name: '国宴川菜头牌传统开水白菜',
    newImg: 'https://i2.chuimg.com/afb11460844b4bc8922d6de295af9429_7952w_5304h.jpg'
  },
  'rec_prov_162': {
    name: '松花江得莫利大铁锅炖鱼',
    newImg: 'https://i2.chuimg.com/e3fedf6939194cd5a79454aab216c2c4_1050w_1050h.jpg'
  },
  'rec_prov_183': {
    name: '东北老式溜蒜香猪腰花',
    newImg: 'https://i2.chuimg.com/d1357ede2eea4a40b21e3dec606c67ef_1280w_960h.jpg'
  },
  'rec_gudu_0122': {
    name: '杭州开水白烫酸甜西湖醋鱼',
    newImg: 'https://i2.chuimg.com/7d2d49245673496c9a465432976cc0e9_1280w_960h.jpg'
  },
  'rec_prov_234': {
    name: '杭州清明前龙井新茶炒虾仁',
    newImg: 'https://i2.chuimg.com/1bf412c05aaf49abb82fbf6c47fa10f2_1080w_864h.jpg'
  }
};

let replacedCount = 0;
allRecipes = allRecipes.map(r => {
  if (replacements[r.id]) {
    replacedCount++;
    console.log(`[替换成功] ${r.id} (${r.name}) -> ${replacements[r.id].newImg}`);
    return {
      ...r,
      image: replacements[r.id].newImg
    };
  }
  return r;
});
console.log(`已成功纠偏替换 ${replacedCount} 道目标菜品图片`);

// 3. 读取并合并 80 道全新粥品
require('./data_80_congee.js');
const congeeRecipes = window.CONGEE_80_DATA;
console.log(`读取新粥品数: ${congeeRecipes.length}`);

// 排除已在库里的rec_congee ID（防御性去重）
const existingIds = new Set(allRecipes.map(r => r.id));
const newToAdd = congeeRecipes.filter(r => !existingIds.has(r.id));
console.log(`实际待合并新粥品数: ${newToAdd.length}`);

const mergedRecipes = [...allRecipes, ...newToAdd];
console.log(`合并后全库总数: ${mergedRecipes.length}`);

// 4. 严谨一致性校验
const finalIds = new Set(mergedRecipes.map(r => r.id));
const finalUrls = new Set(mergedRecipes.map(r => r.image));

console.log(`--- 数据库完整性校验 ---`);
console.log(`总食谱数: ${mergedRecipes.length}`);
console.log(`唯一ID数: ${finalIds.size} (碰撞数: ${mergedRecipes.length - finalIds.size})`);
console.log(`唯一URL数: ${finalUrls.size} (碰撞数: ${mergedRecipes.length - finalUrls.size})`);

if (finalIds.size !== mergedRecipes.length || finalUrls.size !== mergedRecipes.length) {
  console.error('发现碰撞！请检查重复项！');
  process.exit(1);
}

// 5. 写入 Web 与 Android 端
const outContent = `// 咕嘟食谱全量大数据库 (全库 961 道精选好味，含 80 道全派系滋补养生粥品大典)
window.RECIPES_DATA = ${JSON.stringify(mergedRecipes, null, 2)};
`;

const webTarget = path.join(__dirname, '..', 'js', 'data', 'recipes.js');
const androidTarget = path.join(__dirname, '..', 'android_build', 'assets', 'js', 'data', 'recipes.js');

fs.writeFileSync(webTarget, outContent, 'utf8');
console.log(`Web 端已更新: ${webTarget}`);

fs.writeFileSync(androidTarget, outContent, 'utf8');
console.log(`Android 原生端已更新: ${androidTarget}`);
