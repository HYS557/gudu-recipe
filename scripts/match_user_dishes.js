const fs = require('fs');
const path = require('path');

const recipesFile = path.join(__dirname, '../js/data/recipes.js');
let code = fs.readFileSync(recipesFile, 'utf8');

// The file defines window.ALL_RECIPES = [...] or const ALL_RECIPES = [...]
// Let's create a sandbox or regex parser to load ALL_RECIPES safely
const sandbox = { window: {} };
const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
const recipes = fn(sandbox.window);

console.log('Successfully loaded recipes count:', recipes.length);

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

console.log('User listed target names:', userQueryNames.length);

const nameToRecipe = new Map();
recipes.forEach(r => {
  nameToRecipe.set(r.name, r);
});

const matched = [];
const missing = [];

userQueryNames.forEach(qName => {
  // Direct match
  if (nameToRecipe.has(qName)) {
    matched.push({ query: qName, recipe: nameToRecipe.get(qName) });
    return;
  }
  // Fuzzy match (contains or slight typo like 重特辣子鸡 -> 重庆辣子鸡, 无巩 -> 无矾, 东瓜 -> 冬瓜)
  let found = null;
  const cleanQ = qName.replace(/重特/, '重庆').replace(/无巩/, '无矾').replace(/东瓜/, '冬瓜').replace(/日式日式/, '日式');
  for (const r of recipes) {
    if (r.name === cleanQ || r.name.includes(cleanQ) || cleanQ.includes(r.name)) {
      found = r;
      break;
    }
  }
  if (!found) {
    // try key token match
    for (const r of recipes) {
      if (qName.includes(r.name.slice(0, 4)) || r.name.includes(qName.slice(0, 4))) {
        found = r;
        break;
      }
    }
  }
  if (found) {
    matched.push({ query: qName, recipe: found });
  } else {
    missing.push(qName);
  }
});

console.log('Matched recipes count:', matched.length);
console.log('Missing queries count:', missing.length);
if (missing.length > 0) {
  console.log('Missing queries:', missing);
}
