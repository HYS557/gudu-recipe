global.window = global;
require('../js/data/recipes.js');
const list = window.RECIPES_DATA;

const catPills = {
  all: ['家常', '辣', '肉', '汤', '面', '海鲜', '素'],
  soup: ['煨', '汤', '羹', '鸡'],
  regional: ['江西', '广西', '陕西', '东北', '四川', '广东', '湖北', '福建', '内蒙古', '港澳台', '国民家常'],
  noodle: ['面', '蒸', '饭', '煎', '炸'],
  seafood: ['鱼', '蟹', '虾', '生蚝'],
  grand: ['国宴', '开国', '名'],
  japanese: ['寿喜烧', '饭'],
  korean: ['火锅', '年糕'],
  thai: ['冬阴功', '糯米饭'],
  western: ['牛排', '意面'],
  dessert: ['茶', '奶', '果', '冰', '糕'],
  fatloss: ['鸡', '虾', '汤'],
  drinks: ['花生', '肥肠', '酒', '辣子鸡']
};

Object.entries(catPills).forEach(([cat, pills]) => {
  pills.forEach(sub => {
    const filtered = list.filter(recipe => {
      // 1. cat filter
      if (cat === 'regional' && !recipe.region.match(/江西|广西|陕西|东北|四川|湖南|广东|福建|海南|江苏|浙江|山东|北京|天津|河南|湖北|安徽|山西|河北|内蒙|港澳台/)) return false;
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
      if (cat === 'dessert' && recipe.categoryType !== 'dessert' && recipe.cuisineCategory !== '甜品沙拉' && !recipe.name.match(/茶|饮|奶|露|沙冰|糖水|咖啡|布丁|提拉米苏|甜/)) return false;
      if (cat === 'fatloss' && !recipe.isFatLossFriendly) return false;

      // 2. sub filter
      const subMatch = 
        recipe.region.includes(sub) ||
        recipe.name.includes(sub) ||
        recipe.cookingMethod.includes(sub) ||
        (recipe.cuisineCategory && recipe.cuisineCategory.includes(sub));
      return subMatch;
    });
    
    if (filtered.length <= 1) {
      console.log(`[ALERT] [${cat} -> ${sub}]: only ${filtered.length} dishes`);
    } else {
      console.log(`[OK] [${cat} -> ${sub}]: ${filtered.length} dishes`);
    }
  });
});
