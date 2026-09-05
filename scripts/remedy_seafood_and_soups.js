const fs = require('fs');

const remedies = {
  // Bespoke Local Crabs
  '清蒸阳澄湖大闸蟹': './images/yangcheng_dazhaxie.jpg',
  '清蒸东海梭子蟹': './images/donghai_suozixie.jpg',

  // Accurate Steamed Whole Fish
  '清蒸深海石斑鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
  '清蒸金鲳鱼': 'https://i2.chuimg.com/237a67ba113a4bd1ba12e2da64da1c68_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/75',
  '潮汕传统金不换煮白鲳鱼': 'https://i2.chuimg.com/237a67ba113a4bd1ba12e2da64da1c68_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/75',
  '江南传统香酥干煎带鱼段': 'https://s1.cdn.jiaonizuocai.com/caipu/201205/1821/182146507522.jpg/NjAwX2MyXzQwMA',
  '潮菜经典避风塘香酥椒盐九肚鱼': 'https://images.unsplash.com/photo-1527477378392-1ca58428807d?w=800&auto=format&fit=crop&q=80',

  // Distinct Bowls & Specialty Foods
  '日式亲子丼': 'https://images.unsplash.com/photo-1569058242567-93de406c58e7?w=800&auto=format&fit=crop&q=80',
  '法式经典罗宋汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '生滚鲜虾海鲜砂锅粥': 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800&auto=format&fit=crop&q=80'
};

// Update cache
const cachePath = 'scripts/photos_cache.json';
const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
for (const [k, v] of Object.entries(remedies)) {
  cache[k] = v;
}
fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');

// Update JS files
['js/data/recipes.js', 'android_build/assets/js/data/recipes.js'].forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  global.window = {};
  eval(content);
  const recipes = window.RECIPES_DATA;
  let count = 0;
  recipes.forEach(r => {
    if (remedies[r.name]) {
      r.image = remedies[r.name];
      r.photoUrl = remedies[r.name];
      count++;
    }
  });
  const output = '/**\n * 咕嘟食谱 - 407道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ' + JSON.stringify(recipes, null, 2) + ';\n';
  fs.writeFileSync(p, output, 'utf8');
  console.log(`Updated ${count} recipes in ${p}`);
});
