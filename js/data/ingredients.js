/**
 * 🍲 咕嘟食谱 - 标准食材库与本地扩展池 (用于冰箱反向查菜与UGC新食材添加)
 */

const BASE_INGREDIENTS = [
  // 肉禽蛋品
  { id: "ing_pork_belly", name: "五花肉", category: "meat", unit: "克", commonTags: ["肉类", "猪肉"] },
  { id: "ing_pork_tenderloin", name: "猪里脊", category: "meat", unit: "克", commonTags: ["肉类", "猪肉"] },
  { id: "ing_pork_ribs", name: "排骨", category: "meat", unit: "克", commonTags: ["肉类", "猪肉"] },
  { id: "ing_beef_shank", name: "牛腱子", category: "meat", unit: "克", commonTags: ["肉类", "牛肉"] },
  { id: "ing_beef_fillet", name: "牛里脊", category: "meat", unit: "克", commonTags: ["肉类", "牛肉"] },
  { id: "ing_beef_brisket", name: "牛腩", category: "meat", unit: "克", commonTags: ["肉类", "牛肉"] },
  { id: "ing_lamb_chop", name: "羊排/羊肉", category: "meat", unit: "克", commonTags: ["肉类", "羊肉"] },
  { id: "ing_chicken", name: "土鸡/鸡肉", category: "meat", unit: "只/克", commonTags: ["肉类", "禽类"] },
  { id: "ing_chicken_wings", name: "鸡翅", category: "meat", unit: "个", commonTags: ["肉类", "禽类"] },
  { id: "ing_duck", name: "土鸭", category: "meat", unit: "克", commonTags: ["肉类", "禽类"] },
  { id: "ing_egg", name: "鸡蛋", category: "egg", unit: "个", commonTags: ["蛋品"] },
  { id: "ing_century_egg", name: "皮蛋", category: "egg", unit: "个", commonTags: ["蛋品"] },

  // 水产海鲜
  { id: "ing_shrimp", name: "基围虾/对虾", category: "seafood", unit: "克", commonTags: ["海鲜", "虾蟹"] },
  { id: "ing_crab", name: "梭子蟹/大闸蟹", category: "seafood", unit: "只", commonTags: ["海鲜", "虾蟹"] },
  { id: "ing_clam", name: "花蛤/贝类", category: "seafood", unit: "克", commonTags: ["海鲜", "贝螺"] },
  { id: "ing_oyster", name: "生蚝", category: "seafood", unit: "个", commonTags: ["海鲜", "贝螺"] },
  { id: "ing_sea_bass", name: "鲈鱼/海鱼", category: "seafood", unit: "条", commonTags: ["海鲜", "鱼类"] },
  { id: "ing_squid", name: "鲜鱿鱼", category: "seafood", unit: "条", commonTags: ["海鲜", "软体"] },

  // 蔬菜豆品与特色
  { id: "ing_tomato", name: "西红柿/番茄", category: "vegetable", unit: "个", commonTags: ["蔬菜"] },
  { id: "ing_potato", name: "土豆", category: "vegetable", unit: "个", commonTags: ["蔬菜"] },
  { id: "ing_sour_bamboo", name: "酸笋", category: "vegetable", unit: "克", commonTags: ["地方特色", "广西"] },
  { id: "ing_yugan_pepper", name: "余干辣椒/青红椒", category: "vegetable", unit: "克", commonTags: ["蔬菜", "辣椒"] },
  { id: "ing_lotus_root", name: "莲藕", category: "vegetable", unit: "节", commonTags: ["蔬菜", "时令"] },
  { id: "ing_bamboo_shoot", name: "春笋/冬笋", category: "vegetable", unit: "克", commonTags: ["蔬菜", "时令"] },
  { id: "ing_eggplant", name: "茄子", category: "vegetable", unit: "根", commonTags: ["蔬菜"] },
  { id: "ing_tofu", name: "嫩豆腐/老豆腐", category: "vegetable", unit: "块", commonTags: ["豆制品"] },
  { id: "ing_cucumber", name: "黄瓜", category: "vegetable", unit: "根", commonTags: ["蔬菜"] },
  { id: "ing_green_veg", name: "青菜/油麦菜", category: "vegetable", unit: "棵/克", commonTags: ["蔬菜"] },

  // 甜品轻食主料
  { id: "ing_white_jelly", name: "白凉粉", category: "dessert", unit: "盒/克", commonTags: ["甜品"] },
  { id: "ing_ice_jelly", name: "冰粉粉/手搓冰粉籽", category: "dessert", unit: "包", commonTags: ["甜品"] },
  { id: "ing_milk", name: "纯牛奶", category: "dessert", unit: "盒", commonTags: ["甜品"] },
  { id: "ing_mango", name: "芒果", category: "dessert", unit: "个", commonTags: ["水果", "甜品"] },
  { id: "ing_peanut", name: "花生米", category: "snack", unit: "克", commonTags: ["坚果", "下酒"] }
];

// 本地拓展存储服务
const IngredientsService = {
  getCustomIngredients() {
    try {
      const stored = localStorage.getItem("GUDU_CUSTOM_INGREDIENTS");
      return stored ? JSON.parse(stored) : [];
    } catch(e) {
      return [];
    }
  },

  getAllIngredients() {
    const custom = this.getCustomIngredients();
    return [...BASE_INGREDIENTS, ...custom];
  },

  addCustomIngredient(name, unit = "克", category = "custom") {
    if (!name || !name.trim()) return null;
    const cleanName = name.trim();
    const all = this.getAllIngredients();
    const existing = all.find(i => i.name === cleanName);
    if (existing) return existing;

    const newIng = {
      id: "custom_ing_" + Date.now(),
      name: cleanName,
      unit: unit || "适量",
      category: category,
      commonTags: ["用户自定义", "地方特色"],
      isCustom: true
    };

    const currentCustom = this.getCustomIngredients();
    currentCustom.push(newIng);
    try {
      localStorage.setItem("GUDU_CUSTOM_INGREDIENTS", JSON.stringify(currentCustom));
    } catch(e) {
      console.warn("Storage quota exceeded", e);
    }
    return newIng;
  }
};

const INGREDIENT_SYNONYMS = {
  // 瓜果蔬菜常用近义词 (全国各地俗称映射)
  "青瓜": ["黄瓜", "青瓜", "小黄瓜"],
  "黄瓜": ["黄瓜", "青瓜", "小黄瓜"],
  "西红柿": ["番茄", "西红柿"],
  "番茄": ["西红柿", "番茄"],
  "洋芋": ["土豆", "马铃薯", "洋芋"],
  "土豆": ["土豆", "马铃薯", "洋芋"],
  "马铃薯": ["土豆", "洋芋", "马铃薯"],
  "包谷": ["玉米", "包谷", "苞米"],
  "苞米": ["玉米", "包谷", "苞米"],
  "玉米": ["玉米", "包谷", "苞米"],
  "地瓜": ["红薯", "红苕", "地瓜", "白薯"],
  "红薯": ["红薯", "红苕", "地瓜", "白薯"],
  "白薯": ["红薯", "红苕", "地瓜", "白薯"],
  "红苕": ["红薯", "红苕", "地瓜", "白薯"],
  "芫荽": ["香菜", "芫荽"],
  "香菜": ["香菜", "芫荽"],
  "卷心菜": ["包菜", "圆白菜", "甘蓝", "卷心菜"],
  "包菜": ["包菜", "圆白菜", "甘蓝", "卷心菜"],
  "圆白菜": ["包菜", "圆白菜", "甘蓝", "卷心菜"],
  "甘蓝": ["包菜", "圆白菜", "甘蓝", "卷心菜"],
  "青蒜": ["青蒜", "大蒜叶", "蒜苗"],
  "蒜苗": ["青蒜", "大蒜叶", "蒜苗"],
  "大蒜叶": ["青蒜", "大蒜叶", "蒜苗"],
  "菜花": ["花菜", "菜花", "花椰菜"],
  "花菜": ["花菜", "菜花", "花椰菜"],
  "花椰菜": ["花菜", "菜花", "花椰菜"],
  "西兰花": ["西兰花", "青花菜", "花椰菜"],
  "辣椒": ["青椒", "彩椒", "尖椒", "红椒", "朝天椒", "小米椒", "辣椒"],
  "甜椒": ["彩椒", "甜椒", "红黄彩椒"],
  "彩椒": ["彩椒", "甜椒", "红黄彩椒"],
  "丝瓜": ["丝瓜", "胜瓜"],
  "胜瓜": ["胜瓜", "丝瓜"],
  "藕": ["莲藕", "藕", "粉藕", "脆藕"],
  "莲藕": ["莲藕", "藕", "粉藕", "脆藕"],
  "竹笋": ["春笋", "冬笋", "竹笋", "雷笋", "笋"],
  "春笋": ["春笋", "竹笋", "笋"],
  "冬笋": ["冬笋", "竹笋", "笋"],
  "茄子": ["茄子", "矮瓜"],
  "矮瓜": ["茄子", "矮瓜"],
  "蘑菇": ["口蘑", "香菇", "金针菇", "白玉菇", "蟹味菇", "平菇", "蘑菇", "菌"],
  "香菇": ["香菇", "冬菇"],
  "冬菇": ["香菇", "冬菇"],
  "木耳": ["木耳", "黑木耳", "小碗耳"],
  "黑木耳": ["木耳", "黑木耳", "小碗耳"],
  "豆腐": ["内酯豆腐", "嫩豆腐", "老豆腐", "北豆腐", "绢豆腐", "豆腐"],
  "板栗": ["栗", "板栗", "板栗仁", "迁西板栗"],
  "栗子": ["栗", "板栗", "板栗仁", "栗子"],
  "苦瓜": ["苦瓜", "凉瓜", "雷公凿"],
  "凉瓜": ["苦瓜", "凉瓜", "雷公凿"],
  "丝瓜": ["丝瓜", "胜瓜", "水瓜"],
  "茭白": ["茭白", "茭笋", "出水白"],
  "香椿": ["香椿", "香椿芽", "椿头"],
  "藕带": ["藕带", "藕尖", "藕簪"],

  // 肉禽蛋水产近义词
  "猪肉": ["五花肉", "里脊肉", "前腿肉", "肉丝", "肉末", "猪肉", "二刀肉", "排骨"],
  "五花肉": ["五花肉", "下五花", "三层肉", "二刀肉"],
  "二刀肉": ["二刀肉", "后腿肉", "五花肉"],
  "排骨": ["排骨", "肋排", "小排", "前排"],
  "肋排": ["排骨", "肋排", "小排"],
  "牛肉": ["牛腩", "牛里脊", "牛腱", "肥牛", "牛肉", "牛绞肉"],
  "牛腩": ["牛腩", "牛肉"],
  "牛里脊": ["牛里脊", "牛柳", "牛肉"],
  "肥牛": ["肥牛", "肥牛卷", "牛肉"],
  "羊肉": ["羊排", "羊腩", "羊肉", "羊腿肉", "滩羊"],
  "羊排": ["羊排", "羊肋排", "羊肉"],
  "鸡肉": ["鸡胸肉", "鸡腿", "鸡翅", "土鸡", "童子鸡", "鸡肉", "三黄鸡"],
  "鸡胸肉": ["鸡胸肉", "鸡胸"],
  "鸡腿": ["鸡腿", "琵琶腿", "鸡肉"],
  "鸡翅": ["鸡翅", "鸡翅中"],
  "鸭肉": ["土鸭", "野鸭", "烤鸭", "老鸭", "鸭肉"],
  "鸭": ["土鸭", "野鸭", "烤鸭", "老鸭", "鸭肉"],
  "虾": ["基围虾", "虾仁", "对虾", "青虾", "大虾", "鲜虾", "罗氏虾", "皮皮虾", "濑尿虾"],
  "虾仁": ["基围虾", "虾仁", "青虾仁", "鲜虾"],
  "皮皮虾": ["皮皮虾", "虾爬子", "濑尿虾", "富贵虾"],
  "蟹": ["梭子蟹", "大闸蟹", "三目蟹", "青蟹", "螃蟹", "膏蟹", "面包蟹"],
  "梭子蟹": ["梭子蟹", "白蟹", "海蟹"],
  "大闸蟹": ["大闸蟹", "河蟹", "毛蟹", "清水蟹"],
  "鱼": ["鲈鱼", "清江鱼", "黑鱼", "草鱼", "鲫鱼", "巴沙鱼", "龙利鱼", "三文鱼", "带鱼", "鳕鱼", "大黄鱼", "黄鱼", "东星斑", "石斑鱼", "多宝鱼", "白鲳", "鲳鱼", "海鲈鱼", "鲅鱼", "海鳗", "白鳝", "九肚鱼", "豆腐鱼", "马友鱼", "秋刀鱼"],
  "大黄鱼": ["大黄鱼", "黄鱼", "黄花鱼", "东海大黄鱼"],
  "黄鱼": ["大黄鱼", "黄鱼", "黄花鱼"],
  "带鱼": ["带鱼", "刀鱼", "油带", "舟山带鱼"],
  "石斑鱼": ["石斑鱼", "东星斑", "龙胆石斑", "红东星斑", "鱼腩"],
  "东星斑": ["东星斑", "红东星斑", "石斑鱼"],
  "多宝鱼": ["多宝鱼", "比目鱼"],
  "鲳鱼": ["鲳鱼", "白鲳", "金鲳", "斗鲳"],
  "海鲈鱼": ["海鲈鱼", "鲈鱼", "花鲈"],
  "鲅鱼": ["鲅鱼", "马鲛鱼", "蓝点马鲛"],
  "海鳗": ["海鳗", "白鳝", "鳗鱼", "蒲烧鳗"],
  "白鳝": ["白鳝", "海鳗", "鳗鱼"],
  "九肚鱼": ["九肚鱼", "豆腐鱼", "龙头鱼"],
  "生蚝": ["生蚝", "牡蛎", "海蛎子"],
  "牡蛎": ["生蚝", "牡蛎", "海蛎子"],
  "海蛎子": ["生蚝", "牡蛎", "海蛎子"],
  "扇贝": ["扇贝", "带子", "日月贝"],
  "蛤蜊": ["花蛤", "文蛤", "蛤蜊", "蚬子", "花甲"],
  "花蛤": ["花蛤", "花甲", "蛤蜊", "文蛤"],
  "花甲": ["花蛤", "花甲", "蛤蜊", "文蛤"],
  "蛏子": ["蛏子", "竹蛏", "蛏子皇"],
  "螺蛳": ["螺蛳", "田螺", "石螺"],
  "鸡蛋": ["鸡蛋", "蛋液", "土鸡蛋", "荷包蛋"],
  "皮蛋": ["皮蛋", "松花蛋"],

  // 粮油主食与调料近义词
  "面条": ["面", "拉面", "手擀面", "意面", "宽面", "面条", "碱水面", "荞麦面"],
  "面": ["面", "拉面", "手擀面", "意面", "宽面", "面条", "碱水面", "荞麦面"],
  "米粉": ["米粉", "拌粉", "桂林米粉", "螺蛳粉", "江西米粉"],
  "米线": ["米线", "过桥米线"],
  "凉皮": ["凉皮", "大拉皮", "酿皮"],
  "大米": ["大米", "白米", "米饭", "糯米"],
  "糯米": ["糯米", "江米"],
  "酱油": ["生抽", "老抽", "酱油", "味极鲜", "蒸鱼豉油"],
  "生抽": ["生抽", "酱油", "味极鲜"],
  "老抽": ["老抽", "酱油"],
  "醋": ["香醋", "陈醋", "白醋", "米醋", "保宁醋"],
  "黄酒": ["料酒", "黄酒", "花雕", "花雕酒", "绍兴酒"]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BASE_INGREDIENTS, IngredientsService, INGREDIENT_SYNONYMS };
}
if (typeof window !== 'undefined') {
  window.BASE_INGREDIENTS = BASE_INGREDIENTS;
  window.IngredientsService = IngredientsService;
  window.INGREDIENT_SYNONYMS = INGREDIENT_SYNONYMS;
}
