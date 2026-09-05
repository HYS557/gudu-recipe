const fs = require('fs');
const c = fs.readFileSync('./js/data/recipes.js', 'utf8');

const ids = c.match(/"id":/g);
console.log('总食谱数:', ids ? ids.length : 0);

// Check seafood fish recipes by name field
const fishTerms = ['大黄鱼','带鱼','石斑鱼','鲳鱼','鲈鱼','九肚鱼','秋刀鱼','鲅鱼','马友鱼','银鳕鱼','三文鱼','海鳗','多宝鱼'];
console.log('--- 海鱼专区命中 ---');
fishTerms.forEach(function(f) {
  const regex = new RegExp('"name":\\s*"[^"]*' + f + '[^"]*"', 'g');
  const n = (c.match(regex) || []).length;
  console.log(f + ': ' + n + ' 道');
});

// Grand banquet
const grandCount = (c.match(/isGrandBanquet.*?true/g) || []).length;
console.log('\n--- 国宴硬席 ---');
console.log('国宴菜品数:', grandCount);

// Seafood category  
const seafoodCount = (c.match(/categoryType.*?seafood/g) || []).length;
console.log('\n--- 海鲜分类 ---');
console.log('海鲜类菜品数:', seafoodCount);

// Season tags check
const seasonTerms = ['茭白','苦瓜','丝瓜','藕带','香椿','春笋','白菜'];
console.log('\n--- 时令食材命中 ---');
seasonTerms.forEach(function(s) {
  const n = (c.match(new RegExp(s, 'g')) || []).length;
  console.log(s + ': ' + n + ' 次');
});

// Duplicate photo check
const photoMatches = c.match(/"photoUrl":\s*"([^"]+)"/g) || [];
const photoUrls = photoMatches.map(function(p) { return p.replace(/"photoUrl":\s*"/, '').replace(/"$/, ''); });
const photoFreq = {};
photoUrls.forEach(function(url) {
  photoFreq[url] = (photoFreq[url] || 0) + 1;
});
const duplicates = Object.entries(photoFreq).filter(function(e) { return e[1] > 2; });
console.log('\n--- 图片重复度 ---');
console.log('总图片数:', photoUrls.length);
console.log('使用 >2 次的图片数:', duplicates.length);
if (duplicates.length > 0) {
  duplicates.slice(0, 5).forEach(function(d) {
    console.log('  使用' + d[1] + '次:', d[0].substring(0, 80));
  });
}
