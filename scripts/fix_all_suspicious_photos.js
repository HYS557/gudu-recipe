const fs = require('fs');

const verifiedPhotos = {
  '松鼠鳜鱼': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
  '低卡冬瓜荷叶排骨刮油汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '清润冬瓜薏米瘦肉去湿消肿汤': 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=800&auto=format&fit=crop&q=80',
  '扬州老派葱油阳春面': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
  '韩式经典部队火锅': 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&auto=format&fit=crop&q=80',
  '同安封肉': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&auto=format&fit=crop&q=80',
  '老上海咸肉菜饭': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop&q=80',
  '北京宫廷豌豆黄': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
  '鲜虾白玉冬瓜暖胃清脂汤': 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
  '日式盐烤整条秋刀鱼配柠檬萝卜泥': 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&auto=format&fit=crop&q=80',
  '山西过油肉': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
  '经典清蒸鲜嫩海鲈鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
  '新疆大盘鸡': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80',
  '宫保鸡丁': 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&auto=format&fit=crop&q=80',
  '鱼香肉丝': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
  '酸辣爽脆土豆丝': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80',
  '家常青椒肉丝': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
  '家常手撕包菜': 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&auto=format&fit=crop&q=80',
  '低卡玉米海带排骨清脂汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '湖北传统炸藕夹': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80',
  '江南桂花蜜汁糖藕': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80'
};

// 1. Update photos_cache.json
const cachePath = 'scripts/photos_cache.json';
const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
for (const [k, v] of Object.entries(verifiedPhotos)) {
  cache[k] = v;
}
fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
console.log('Updated photos_cache.json with verified photos.');

// 2. Update js/data/recipes.js and android_build/assets/js/data/recipes.js
function updateRecipesFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  
  global.window = {};
  eval(content);
  const recipes = window.RECIPES_DATA;
  
  recipes.forEach(r => {
    if (verifiedPhotos[r.name]) {
      r.photoUrl = verifiedPhotos[r.name];
      count++;
    }
  });
  
  const newContent = '/**\n * 咕嘟食谱 - 407道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ' + JSON.stringify(recipes, null, 2) + ';\n';
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated ${count} photos in ${filePath}`);
}

updateRecipesFile('js/data/recipes.js');
updateRecipesFile('android_build/assets/js/data/recipes.js');
