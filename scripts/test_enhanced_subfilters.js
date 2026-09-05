global.window = global;
require('../js/data/recipes.js');
const list = window.RECIPES_DATA;

function checkRecipeMatches(cat, sub, recipe) {
  // 1. Primary category filter
  if (cat === 'regional' && !recipe.region.match(/江西|广西|陕西|东北|四川|湖南|广东|福建|海南|江苏|浙江|山东|北京|天津|河南|湖北|安徽|山西|河北|内蒙|港澳台|国民家常/)) return false;
  if (cat === 'soup') {
    if (recipe.categoryType === 'noodle' || recipe.name.match(/水饺|饺子|馄饨|包子|面条|冷面/)) return false;
    const isSoup = recipe.categoryType === 'soup' || !!recipe.name.match(/汤|羹|煲|煨|炖|笃|盅/);
    if (!isSoup) return false;
  }
  if (cat === 'noodle') {
    if (recipe.isSeafood) return false;
    if (recipe.name.match(/锅包肉|包菜|荷包蛋|肉饼汤|过油肉|大烩菜|冷盘|红烧肉|回锅肉|狮子头|排骨|鸡翅|鱼头|盐酥鸡|酸菜粉条|蚂蚁上树|花生米|白凉粉|冰粉|肉饼|焙面|沙拉|大鱼|生蚝|扇贝|面包蟹/)) return false;
    const isNoodle = recipe.categoryType === 'noodle' || !!recipe.name.match(/面|米粉|拌粉|米线|拉面|刀削|扯面|臊子|热干|阳春|云吞|炸酱|烩面|拌面|饸饹|包子|生煎|汤包|小笼|水饺|蒸饺|锅贴|馄饨|烧麦|肉夹馍|白吉馍|油条|麻花|馓子|酥饼|葱油饼|煎饼|发糕|伦教糕|年糕|糍粑|青团|汤圆|粽|酿皮|凉皮|河粉|肠粉|意面|千层面|披萨|锅盔|烧饼|馒头|烤包子|豆包|剔尖|栲栳栳|甑糕|粉|炒饭|焖饭|盖饭|抄手|菠萝包|鲜花饼|糯米鸡/);
    if (!isNoodle) return false;
  }
  if (cat === 'seafood' && !recipe.isSeafood) return false;
  if (cat === 'japanese' && recipe.cuisineCategory !== '日式料理') return false;
  if (cat === 'korean' && recipe.cuisineCategory !== '韩式料理') return false;
  if (cat === 'thai' && recipe.cuisineCategory !== '泰式料理') return false;
  if (cat === 'western' && recipe.cuisineCategory !== '西餐经典') return false;
  if (cat === 'grand' && !recipe.isGrandBanquet) return false;
  if (cat === 'drinks' && !recipe.isDrinkingSnack) return false;
  
  if (cat === 'dessert') {
    if (recipe.isDrinkingSnack || recipe.cuisineCategory === "下酒菜" || recipe.name.match(/花生米|肥肠|牛腱|猪头肉|田螺|回锅肉|小炒|排骨|肉饼|炖/)) return false;
    if (recipe.categoryType !== "dessert" && recipe.cuisineCategory !== "甜品沙拉" && !recipe.name.match(/茶|饮|奶|露|沙冰|糖水|咖啡|布丁|提拉米苏|马蹄糕|豌豆黄|糍粑|栗子/)) return false;
  }
  
  if (cat === 'fatloss' && !recipe.isFatLossFriendly) return false;

  // 2. Sub-filter
  if (sub === 'all') return true;

  if (cat === 'dessert') {
    if (sub === 'drink') return !!recipe.name.match(/茶|奶茶|拿铁|咖啡|柠檬茶|普洱|酸梅汤|冷萃|饮/);
    if (sub === 'tongsui') return !!recipe.name.match(/双皮奶|姜撞奶|杏仁|花生糊|杨枝甘露|红豆沙|绿豆沙|清补凉|银耳|桃胶|糖水|糊|露|雪梨/);
    if (sub === 'fruit') return !!recipe.name.match(/水果|果捞|沙拉|青芒|芒果/);
    if (sub === 'ice') return !!recipe.name.match(/冰粉|茶冻|凉粉|沙冰|雪媚娘|布丁/);
    if (sub === 'pastry') return !!recipe.name.match(/糕|黄|糍粑|栗子|鲜花饼|蛋挞|发糕|提拉米苏/);
  }

  if (cat === 'fatloss') {
    if (sub === 'soup') return recipe.categoryType === 'soup' || !!recipe.name.match(/汤|羹/);
    if (sub === 'poultry') return !!recipe.name.match(/鸡|肉|牛/);
    if (sub === 'seafood') return recipe.isSeafood || !!recipe.name.match(/虾|鱼|水产/);
    if (sub === 'veggie') return !!recipe.name.match(/沙拉|瓜|木耳|油麦菜|青菜|凉粉/);
  }

  if (cat === 'grand') {
    if (sub === 'diaoyutai') return !!recipe.name.match(/乌鱼蛋|鸡豆花|牡丹海鲈鱼|刺参|开水白菜|葱烧海参|佛跳墙|惠灵顿/);
    if (sub === 'founding') return !!recipe.name.match(/第一宴|文思豆腐|狮子头|水晶肴肉/);
    if (sub === 'legend') return !!recipe.name.match(/九转大肠|烤乳猪|三套鸭|西湖醋鱼|李鸿章|松鼠鳜鱼|东坡肘子|烤鸭|龙井虾仁/);
  }

  if (cat === 'all') {
    if (sub === '素') return !!recipe.name.match(/素|豆腐|土豆|黄瓜|藕|包菜|油麦菜|西兰花|茭白|白菜|木耳|丝瓜|苦瓜|地三鲜|金针菇|干豆腐/) && !recipe.name.match(/炒肉|炖肉|肉片|肉末|肥肠|牛腩|排骨/);
  }

  if (cat === 'regional') {
    if (sub === '国民家常') return recipe.region === "国民家常" || recipe.cuisineCategory === "家常经典" || !!recipe.name.match(/西红柿炒鸡蛋|可乐鸡翅|土豆丝|糖醋小排|青椒肉丝|茄子煲|老豆腐炖|蒜苔|爆炒牛肉|牛腩|酸汤肥牛|拍黄瓜|茭白|凉瓜|丝瓜/);
  }

  if (cat === 'western') {
    if (sub === '意面') return !!recipe.name.match(/意面|面|Lasagna|千层面|披萨/);
  }

  if (cat === 'noodle') {
    if (sub === '饭') return !!recipe.name.match(/饭|粥|糯米鸡/);
  }

  // Fallback default
  return recipe.region.includes(sub) ||
    recipe.name.includes(sub) ||
    recipe.cookingMethod.includes(sub) ||
    (recipe.cuisineCategory && recipe.cuisineCategory.includes(sub));
}

const tests = [
  ['dessert', 'drink', '🧋 特调茶饮咖啡'],
  ['dessert', 'tongsui', '🍮 港粤传统糖水'],
  ['dessert', 'fruit', '🥭 鲜果沙拉果捞'],
  ['dessert', 'ice', '🍧 冰粉茶冻沙冰'],
  ['dessert', 'pastry', '🥮 传统中式点心'],
  ['fatloss', 'soup', '🍲 低卡暖胃刮油汤'],
  ['fatloss', 'poultry', '🥗 优质高蛋白肉禽'],
  ['fatloss', 'seafood', '🦐 鲜虾低脂水产'],
  ['fatloss', 'veggie', '🥦 爽脆解腻清肠'],
  ['grand', 'diaoyutai', '👑 钓鱼台国宾馆'],
  ['grand', 'founding', '🏛️ 开国第一宴'],
  ['grand', 'legend', '📜 传世八大菜系头牌'],
  ['regional', '国民家常', '🏠 国民家常'],
  ['all', '素', '🥬 爽脆解腻素菜'],
  ['western', '意面', '🍝 经典肉酱意面'],
  ['noodle', '饭', '🍚 炒饭焖饭主食']
];

console.log('=== RUNNING ENHANCED SUBFILTER VERIFICATION ===');
let hasError = false;
tests.forEach(([cat, sub, label]) => {
  const matches = list.filter(r => checkRecipeMatches(cat, sub, r));
  console.log(`[${label}] (${cat} -> ${sub}): ${matches.length} 道菜品`);
  if (matches.length === 0) {
    console.error(`  ❌ FAILED: Zero dishes for ${label}`);
    hasError = true;
  } else {
    // Check if peanut leaked into dessert
    if (cat === 'dessert') {
      const peanuts = matches.filter(r => r.name.includes('花生米'));
      if (peanuts.length > 0) {
        console.error(`  ❌ FAILED: Peanut leaked into dessert! ${peanuts.map(p => p.name).join(', ')}`);
        hasError = true;
      }
    }
  }
});

if (!hasError) {
  console.log('🎉 ALL SUB-FILTERS PASSED WITH ABUNDANT DISHES AND ZERO LEAKAGE!');
}
