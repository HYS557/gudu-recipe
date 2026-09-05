const fs = require('fs');

const verifiedPhotos = {
  '家常南昌拌粉': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
  '生焖土鸭': 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&auto=format&fit=crop&q=80',
  '南昌辣椒炒藕片': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
  '北海蒜蓉生蚝': 'https://images.unsplash.com/photo-1533745848184-3db07256e163?w=800&auto=format&fit=crop&q=80',
  '岐山臊子面': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&auto=format&fit=crop&q=80',
  '西宁手抓羊肉': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
  '宁夏黄焖羊肉': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
  '椒麻鸡': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
  '地三鲜': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
  '毛血旺': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
  '过桥米线': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
  '沙县扁肉': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=80',
  '南京盐水鸭': 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&auto=format&fit=crop&q=80',
  '油焖春笋': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
  '天津家常大卤面': 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&auto=format&fit=crop&q=80',
  '河南滋补羊肉烩面': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&auto=format&fit=crop&q=80',
  '河南传统黄河鲤鱼焙面': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
  '河南胡辣汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '洪湖排骨煨藕汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '清蒸武昌鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
  '荆州鱼糕': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop&q=80',
  '徽州刀板香炖豆腐': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
  '无为熏鸭': 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&auto=format&fit=crop&q=80',
  '徽州一品锅': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '直隶官府李鸿章烩菜': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '蒙古传统咸奶茶炒米': 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
  '台式传统香菇卤肉饭': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80',
  '生滚鲜虾海鲜砂锅粥': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '潮汕传统金不换煮白鲳鱼': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
  '江南传统香酥干煎带鱼段': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
  '广式葱油清蒸鲜活多宝鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
  '胶东渔家干烧大鲅鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&auto=format&fit=crop&q=80',
  '半岛老味道茄汁红烧鲅鱼块': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
  '日式蒲烧厚切活海鳗': 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=80',
  '潮菜经典避风塘香酥椒盐九肚鱼': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
  '潮汕传统马友鱼脯一夜干香煎': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80',
  '重庆麻辣小面': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
  '无矾香酥大油条': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
  '西安牛肉泡馍': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '传统四川红油抄手': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=80',
  '正宗重庆酸辣粉': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
  '开封多汁灌汤包': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&auto=format&fit=crop&q=80',
  '泰式碳烤猪颈肉': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
  '泰式香茅烤鸡': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=80',
  '日式日式海鲜天妇罗': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop&q=80',
  '韩式传统石锅拌饭': 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800&auto=format&fit=crop&q=80',
  '韩式大酱汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '韩式辣炖土豆鸡块': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80',
  '美式经典汉堡肉饼': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
  '英式炸鱼薯条': 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=800&auto=format&fit=crop&q=80',
  '无糖希腊酸奶水果捞': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
  '云南蜂蜜百花玫瑰酿茶': 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=80',
  '台湾传统珍珠奶茶': 'https://images.unsplash.com/photo-1558857563-b37cf2cb1c49?w=800&auto=format&fit=crop&q=80',
  '海南椰青沙冰': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
  '台式杨枝甘露': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
  '潮汕芋泥芋甜品': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80',
  '四川成都红糖糍粑': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
  '老北京古法糖炒迁西板栗': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
  '魔芋丝番茄嫩豆腐减脂汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '无油六茸菌菇豆腐刮油汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '国宴乌鱼蛋汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '钓鱼台国宴鲍汁极品刺参配西兰花': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
  '开国第一宴扬州文思豆腐羹': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&q=80',
  '开国第一宴清炖大红袍蟹粉狮子头': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
  '鲁菜官府名肴经典九转大肠': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80',
  '芷江鸭': 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&auto=format&fit=crop&q=80',
  '日式冷荞麦面配天妇罗': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&auto=format&fit=crop&q=80',
  '韩式芝士辣炒年糕': 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop&q=80',
  '苏菜泰斗无为熏鸭三套鸭': 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&auto=format&fit=crop&q=80'
};

// 1. Update photos_cache.json
const cachePath = 'scripts/photos_cache.json';
const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
for (const [name, url] of Object.entries(verifiedPhotos)) {
  cache[name] = url;
}
fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
console.log('Updated cache with verified photos');

// 2. Update js/data/recipes.js and android_build/assets/js/data/recipes.js
function updateRecipes(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  global.window = {};
  eval(content);
  const recipes = window.RECIPES_DATA;
  let count = 0;

  recipes.forEach(r => {
    if (verifiedPhotos[r.name]) {
      r.image = verifiedPhotos[r.name];
      r.photoUrl = verifiedPhotos[r.name];
      count++;
    }
  });

  const output = '/**\n * 咕嘟食谱 - 407道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ' + JSON.stringify(recipes, null, 2) + ';\n';
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`Updated ${count} recipes in ${filePath}`);
}

updateRecipes('js/data/recipes.js');
updateRecipes('android_build/assets/js/data/recipes.js');
