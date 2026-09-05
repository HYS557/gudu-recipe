const fs = require('fs');
const path = require('path');

const recipesFile = path.join(__dirname, '../js/data/recipes.js');
const code = fs.readFileSync(recipesFile, 'utf8');
const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
const allRecipes = fn({});

console.log(`Loaded ${allRecipes.length} total recipes.`);

// 1. User specified dishes list
const userQueryNames = [
  "北海蒜蓉生蚝", "西安手抓羊肉", "宁夏黄焖羊肉", "经典回锅肉", "水煮牛肉", "鱼香肉丝", "重特辣子鸡", "粉蒸牛肉", "干煸肥肠", 
  "农家一碗香", "辣椒炒肉", "麻辣小龙虾", "外婆菜炒肉末", "攸县干炒肉", "平江豆干", "擂辣椒皮蛋", "顺德鱼头豆腐汤", 
  "经典菠萝咕佬肉", "广东早茶蒸排骨", "老火靓汤霸王花排骨", "生滚牛肉粥", "潮汕牛肉丸汤", "滑蛋虾仁", "啫啫煲鸡", 
  "盐焗鸡", "避风塘炒虾", "耗油生菜", "过桥米线", "胶东大鲅鱼水饺", "天津家常大卤面", "河南滋补羊肉烩面", 
  "河南传统黄河鲤鱼焙面", "洪湖排骨煨藕汤", "清蒸武昌鱼", "荆州鱼糕", "徽州刀版香炖豆腐", "徽州一品锅", "直隶官府李鸿章烩菜", 
  "蒙古传统咸奶茶炒米", "青海老牌土火锅", "台式传统香菇卤肉饭", "白灼基围虾", "蒜蓉粉丝蒸扇贝", "生滚鲜虾海鲜砂锅粥", 
  "潮汕传统金不换煮白鲳鱼", "江南家常清蒸斗鲳", "经典清蒸海鲜嫩海鲈鱼", "广式葱油清蒸鲜活多宝鱼", "胶东渔家干烧大鲅鱼", 
  "半岛老味道茄汁红烧鲅鱼块", "潮菜经典避风塘香酥椒盐九肚鱼", "潮汕传统马友鱼脯一夜干香煎", "日式盐烤整条秋刀鱼配柠檬萝卜泥", 
  "重庆麻辣小面", "无巩香酥大油条", "扬州老派阳春面", "西安牛肉泡馍", "扬州经典碎金翡翠扬州炒饭", "广式腊味排骨煲仔饭", 
  "老上海咸肉菜饭", "广式荷香糯米鸡", "传统四川红油抄手", "正宗重庆酸辣粉", "开封多汁灌汤包", "老北京炒肝配猪肉大葱包", 
  "泰式冬阴功海鲜大虾汤", "泰式打抛猪肉碎拌饭", "菠萝海鲜炒饭", "泰式芒果白糯米饭", "泰式黄咖喱炒蟹", "泰式罗勒叶炒肉碎", 
  "泰式碳烤猪颈肉", "泰式香茅烤鸡", "泰式黄咖喱牛腩", "泰式酸辣生虾", "泰式金钱虾饼", "香兰叶包鸡", "泰式柠檬清蒸海鲈鱼", 
  "泰式香茅酸辣烤鱼", "泰式冬阴功海鲜拉面", "日式蒲烧鳗鱼饭", "日式照烧鸡腿排", "日式传统土豆炖牛肉", "日式和风关东煮", 
  "日式海鲜大阪烧", "日式日式海鲜天妇罗", "日式荞麦面配天妇罗", "韩式经典部队火锅", "韩式辣白菜豆腐五花肉汤", 
  "韩式传统泡菜海鲜豆腐汤", "韩式芝士炒年糕", "韩式大酱汤", "韩式辣炖土豆鸡块", "韩式春川铁板辣炒鸡排", 
  "韩式大葱海鲜煎饼", "意大利玛格丽特披萨", "经典凯撒大虾沙拉", "法式经典罗宋汤", "台湾传统珍珠奶茶", "北京宫廷豌豆黄", 
  "四川成都红糖糍粑", "老北京古法糖炒迁西板栗", "广式传统陈皮红豆沙", "桃胶皂角米炖雪燕", "经典西红柿炒鸡蛋", "绝味可乐鸡翅", 
  "酸辣爽脆土豆丝", "爽口拍黄瓜拌花生", "低卡东瓜荷叶排骨刮油汤", "魔芋丝番茄嫩豆腐减脂汤", "鲜虾白玉冬瓜暖胃清脂汤", 
  "无油六茸菌菇豆腐刮油汤", "清润冬瓜薏米瘦肉祛湿消肿汤", "低卡玉米海带排骨清脂汤", "国宴乌鱼蛋汤", "开国第一宴扬州文思豆腐羹", 
  "直隶官府经典李鸿章一品大杂烩", "杭帮菜百年楼外楼正宗西湖醋鱼", "湖北传统炸藕夹", "江南桂花蜜汁糖藕", "老醋五香炸花生米", 
  "五香盐水煮毛豆", "绝味麻辣鸭头鸭脖", "香辣孜然炒掌中宝", "自贡香辣冷吃牛肉", "潮汕椒盐酥炸九肚鱼", "红油香脆猪耳朵"
];

// Map user names to recipes
const targetRecipesMap = new Map(); // id -> { recipe, queryName, searchKeyword }

function findRecipeForQuery(q) {
  const cleanQ = q.replace(/重特/, '重庆').replace(/无巩/, '无矾').replace(/东瓜/, '冬瓜').replace(/日式日式/, '日式').replace(/耗油/, '蚝油').replace(/刀版香/, '刀板香');
  for (const r of allRecipes) {
    if (r.name === cleanQ || r.name === q) return r;
  }
  // aliases
  if (q.includes('手抓羊肉')) return allRecipes.find(r => r.name === '西宁手抓羊肉');
  if (q.includes('攸县')) return allRecipes.find(r => r.name === '攸县香干炒肉');
  if (q.includes('清蒸斗鲳')) return allRecipes.find(r => r.name === '江南家常葱油清蒸斗鲳');
  if (q.includes('李鸿章')) return allRecipes.find(r => r.name === '李鸿章大杂烩' || r.name.includes('李鸿章'));
  if (q.includes('荞麦面')) return allRecipes.find(r => r.name === '日式冷荞麦面配天妇罗');
  if (q.includes('九肚鱼') && q.includes('避风塘')) return allRecipes.find(r => r.name === '潮菜经典避风塘香酥椒盐九肚鱼');
  if (q.includes('九肚鱼') && q.includes('酥炸')) return allRecipes.find(r => r.name === '潮汕椒盐酥炸九肚鱼');
  
  for (const r of allRecipes) {
    if (r.name.includes(cleanQ.slice(0, 4)) || cleanQ.includes(r.name.slice(0, 4))) return r;
  }
  return null;
}

userQueryNames.forEach(q => {
  const r = findRecipeForQuery(q);
  if (r) {
    targetRecipesMap.set(r.id, { recipe: r, queryName: q });
  } else {
    console.warn('Could not map query:', q);
  }
});

// Also find all recipes that currently share duplicated URLs
const urlToRecipes = new Map();
allRecipes.forEach(r => {
  if (!r.photoUrl) return;
  if (!urlToRecipes.has(r.photoUrl)) urlToRecipes.set(r.photoUrl, []);
  urlToRecipes.get(r.photoUrl).push(r);
});

urlToRecipes.forEach((recipes, url) => {
  if (recipes.length > 1) {
    recipes.forEach(r => {
      if (!targetRecipesMap.has(r.id)) {
        targetRecipesMap.set(r.id, { recipe: r, queryName: r.name });
      }
    });
  }
});

console.log(`Total target recipes to accurately update: ${targetRecipesMap.size}`);

// Compute search keyword for each recipe
function getSearchKeyword(r, queryName) {
  let name = r.name;
  // Strip prefixes like "经典", "广式", "日式", "泰式", "传统", "正宗", "老牌", "老北京", "老上海", "徽州", "潮汕", etc.
  let kw = name;
  kw = kw.replace(/^(经典|正宗|传统|老牌|广式|港式|川味|湘味|滇味|黔味|鲁菜|苏菜|浙菜|徽州|日式|韩式|泰式|意式|法式|台式|老北京|老上海|老派|扬州|潮汕|潮菜|胶东|河南|河北|直隶|天津|西安|西宁|宁夏|新疆|蒙古|青海|湖北|顺德|开封|自贡)/, '');
  kw = kw.replace(/^(传统|经典|家常|秘制|绝味|爽口|清润|低卡|无油|开国第一宴|国宴|百年楼外楼)/, '');
  kw = kw.replace(/^(鲜活|深海|嫩|大)/, '');
  kw = kw.trim();
  if (kw.length < 2) kw = name;
  
  // Specific dish keyword overrides for optimal culinary photo retrieval
  const overrides = {
    'rec_gudu_0033': '手抓羊肉',
    'rec_gudu_0035': '黄焖羊肉',
    'rec_gudu_0055': '蒜蓉生蚝',
    'rec_gudu_0061': '回锅肉',
    'rec_gudu_0062': '水煮牛肉',
    'rec_gudu_0063': '鱼香肉丝',
    'rec_gudu_0064': '重庆辣子鸡',
    'rec_gudu_0065': '粉蒸牛肉',
    'rec_gudu_0066': '干煸肥肠',
    'rec_gudu_0071': '农家一碗香',
    'rec_gudu_0072': '辣椒炒肉',
    'rec_gudu_0074': '麻辣小龙虾',
    'rec_gudu_0075': '攸县香干炒肉',
    'rec_gudu_0076': '平江豆干',
    'rec_gudu_0077': '擂辣椒皮蛋',
    'rec_gudu_0078': '外婆菜炒肉末',
    'rec_gudu_0082': '顺德鱼头豆腐汤',
    'rec_gudu_0083': '菠萝咕咾肉',
    'rec_gudu_0084': '豉汁蒸排骨',
    'rec_gudu_0085': '霸王花排骨汤',
    'rec_gudu_0086': '生滚牛肉粥',
    'rec_gudu_0087': '潮汕牛肉丸汤',
    'rec_gudu_0088': '滑蛋虾仁',
    'rec_gudu_0089': '啫啫鸡煲',
    'rec_gudu_0090': '客家盐焗鸡',
    'rec_gudu_0091': '避风塘炒虾',
    'rec_gudu_0092': '蚝油生菜',
    'rec_gudu_0102': '云南过桥米线',
    'rec_gudu_0121': '鲅鱼水饺',
    'rec_gudu_0131': '天津打卤面',
    'rec_gudu_0141': '羊肉烩面',
    'rec_gudu_0142': '黄河鲤鱼焙面',
    'rec_gudu_0143': '排骨煨藕汤',
    'rec_gudu_0144': '清蒸武昌鱼',
    'rec_gudu_0145': '荆州鱼糕',
    'rec_gudu_0152': '刀板香炖豆腐',
    'rec_gudu_0155': '徽州一品锅',
    'rec_gudu_0156': '李鸿章大杂烩',
    'rec_gudu_0171': '咸奶茶炒米',
    'rec_gudu_0182': '青海土火锅',
    'rec_gudu_0191': '台湾卤肉饭',
    'rec_gudu_0192': '白灼基围虾',
    'rec_gudu_0193': '蒜蓉粉丝蒸扇贝',
    'rec_gudu_0194': '潮汕鲜虾砂锅粥',
    'rec_gudu_0201': '九层塔烧鲳鱼',
    'rec_gudu_0202': '清蒸斗鲳',
    'rec_gudu_0204': '清蒸海鲈鱼',
    'rec_gudu_0205': '葱油蒸多宝鱼',
    'rec_gudu_0206': '干烧鲅鱼',
    'rec_gudu_0207': '茄汁红烧鲅鱼',
    'rec_gudu_0208': '椒盐九肚鱼',
    'rec_gudu_0209': '香煎马友鱼',
    'rec_gudu_0210': '盐烤秋刀鱼',
    'rec_gudu_0222': '重庆小面',
    'rec_gudu_0223': '炸油条',
    'rec_gudu_0224': '阳春面',
    'rec_gudu_0225': '牛肉泡馍',
    'rec_gudu_0226': '扬州炒饭',
    'rec_gudu_0227': '腊味排骨煲仔饭',
    'rec_gudu_0228': '咸肉菜饭',
    'rec_gudu_0229': '糯米鸡',
    'rec_gudu_0230': '红油抄手',
    'rec_gudu_0231': '重庆酸辣粉',
    'rec_gudu_0232': '开封灌汤包',
    'rec_gudu_0233': '北京炒肝',
    'rec_gudu_0281': '冬阴功汤',
    'rec_gudu_0282': '打抛猪肉碎',
    'rec_gudu_0283': '菠萝海鲜炒饭',
    'rec_gudu_0284': '芒果糯米饭',
    'rec_gudu_0285': '咖喱炒蟹',
    'rec_gudu_0286': '泰式罗勒炒肉碎',
    'rec_gudu_0287': '泰式烤猪颈肉',
    'rec_gudu_0288': '香茅烤鸡',
    'rec_gudu_0289': '黄咖喱牛腩',
    'rec_gudu_0290': '泰式酸辣虾',
    'rec_gudu_0291': '泰式金钱虾饼',
    'rec_gudu_0292': '香兰叶包鸡',
    'rec_gudu_0293': '泰式柠檬蒸鱼',
    'rec_gudu_0294': '泰式香茅烤鱼',
    'rec_gudu_0295': '冬阴功拉面',
    'rec_gudu_0296': '海鲜天妇罗',
    'rec_gudu_0297': '蒲烧鳗鱼饭',
    'rec_gudu_0298': '冷荞麦面配天妇罗',
    'rec_gudu_0299': '照烧鸡腿饭',
    'rec_gudu_0300': '日式土豆炖牛肉',
    'rec_gudu_0301': '关东煮',
    'rec_gudu_0302': '辣白菜豆腐五花肉汤',
    'rec_gudu_0303': '韩式海鲜豆腐汤',
    'rec_gudu_0304': '韩式炒年糕',
    'rec_gudu_0305': '韩式大酱汤',
    'rec_gudu_0306': '韩式春川辣炒鸡排',
    'rec_gudu_0307': '韩式海鲜葱饼',
    'rec_gudu_0308': '韩式部队锅',
    'rec_gudu_0309': '韩式辣炖鸡块',
    'rec_gudu_0310': '日式海鲜大阪烧',
    'rec_gudu_0311': '玛格丽特披萨',
    'rec_gudu_0312': '凯撒大虾沙拉',
    'rec_gudu_0313': '罗宋汤',
    'rec_gudu_0321': '珍珠奶茶',
    'rec_gudu_0322': '豌豆黄',
    'rec_gudu_0323': '红糖糍粑',
    'rec_gudu_0324': '糖炒栗子',
    'rec_gudu_0325': '陈皮红豆沙',
    'rec_gudu_0326': '桃胶皂角米雪燕',
    'rec_gudu_0331': '西红柿炒鸡蛋',
    'rec_gudu_0332': '可乐鸡翅',
    'rec_gudu_0333': '酸辣土豆丝',
    'rec_gudu_0334': '拍黄瓜花生米',
    'rec_gudu_0381': '魔芋豆腐汤',
    'rec_gudu_0382': '冬瓜虾仁汤',
    'rec_gudu_0383': '菌菇豆腐汤',
    'rec_gudu_0384': '冬瓜薏米排骨汤',
    'rec_gudu_0385': '玉米海带排骨汤',
    'rec_gudu_0386': '冬瓜荷叶排骨汤',
    'rec_gudu_0389': '乌鱼蛋汤',
    'rec_gudu_0390': '文思豆腐羹',
    'rec_gudu_0391': '西湖醋鱼',
    'rec_gudu_0392': '炸藕夹',
    'rec_gudu_0393': '桂花糖藕',
    'rec_gudu_0394': '老醋花生米',
    'rec_gudu_0395': '盐水毛豆',
    'rec_gudu_0396': '麻辣鸭头',
    'rec_gudu_0397': '孜然掌中宝',
    'rec_gudu_0398': '冷吃牛肉',
    'rec_gudu_0399': '椒盐九肚鱼',
    'rec_gudu_0400': '红油猪耳'
  };

  if (overrides[r.id]) return overrides[r.id];
  return kw;
}

// Export targets list to JSON for processing
const targetList = [];
targetRecipesMap.forEach((val, id) => {
  const kw = getSearchKeyword(val.recipe, val.queryName);
  targetList.push({
    id: val.recipe.id,
    name: val.recipe.name,
    queryName: val.queryName,
    currentUrl: val.recipe.photoUrl,
    searchKeyword: kw
  });
});

fs.writeFileSync(path.join(__dirname, 'targets_to_fetch.json'), JSON.stringify(targetList, null, 2), 'utf8');
console.log(`Saved targets_to_fetch.json with ${targetList.length} dishes.`);
