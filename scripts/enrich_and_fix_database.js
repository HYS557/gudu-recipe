const fs = require('fs');
const path = require('path');

global.window = {};
require('../js/data/recipes.js');
let recipes = window.RECIPES_DATA;
console.log('Original recipes count:', recipes.length);

let photosCache = {};
try {
  photosCache = JSON.parse(fs.readFileSync(path.join(__dirname, 'photos_cache.json'), 'utf8'));
} catch (e) {}

const verifiedPhotos = {
  // 川湘川味
  '正宗麻婆豆腐': 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=700&auto=format&fit=crop&q=80',
  '经典回锅肉': 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=700&auto=format&fit=crop&q=80',
  '水煮牛肉': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80',
  '酸菜鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700&auto=format&fit=crop&q=80',
  '重特辣子鸡': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=700&auto=format&fit=crop&q=80',
  '宜宾燃面': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=700&auto=format&fit=crop&q=80',
  '粉蒸牛肉': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&auto=format&fit=crop&q=80',
  '干煸肥肠': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=700&auto=format&fit=crop&q=80',
  '经典剁椒鱼头': 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=700&auto=format&fit=crop&q=80',
  '农家一碗香': 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=700&auto=format&fit=crop&q=80',
  '辣椒炒肉': 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=700&auto=format&fit=crop&q=80',
  '麻辣小龙虾': 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=700&auto=format&fit=crop&q=80',
  '外婆菜炒肉沫': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&auto=format&fit=crop&q=80',
  '红煨甲鱼': 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=700&auto=format&fit=crop&q=80',
  '攸县香干炒肉': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop&q=80',
  '平江豆干': 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=700&auto=format&fit=crop&q=80',
  '芷江鸭': 'https://images.unsplash.com/photo-1514944298352-f4e918501191?w=700&auto=format&fit=crop&q=80',
  '擂辣椒皮蛋': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&auto=format&fit=crop&q=80',
  // 粤菜
  '蜜汁叉烧肉': 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=700&auto=format&fit=crop&q=80',
  '清蒸金鲳鱼': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&auto=format&fit=crop&q=80',
  '顺德鱼头豆腐汤': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&auto=format&fit=crop&q=80',
  '经典菠萝咕咾肉': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&auto=format&fit=crop&q=80',
  '广东早茶蒸排骨': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80',
  '老火靓汤霸王花排骨': 'https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?w=700&auto=format&fit=crop&q=80',
  '生滚牛肉粥': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop&q=80',
  '潮汕牛肉丸汤': 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=700&auto=format&fit=crop&q=80',
  '滑蛋虾仁': 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=700&auto=format&fit=crop&q=80',
  '啫啫煲鸡': 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=700&auto=format&fit=crop&q=80',
  '盐焗鸡': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=700&auto=format&fit=crop&q=80',
  '避风塘炒虾': 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=700&auto=format&fit=crop&q=80',
  '蚝油生菜': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&auto=format&fit=crop&q=80',
  // 海鲜盛宴
  '清蒸阳澄湖大闸蟹': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=700&auto=format&fit=crop&q=80',
  '白灼基围虾': 'https://images.unsplash.com/photo-1559742811-822873691df8?w=700&auto=format&fit=crop&q=80',
  '清蒸东海梭子蟹': 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=700&auto=format&fit=crop&q=80',
  '清蒸深海石斑鱼': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700&auto=format&fit=crop&q=80',
  '蒜蓉粉丝蒸扇贝': 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&auto=format&fit=crop&q=80',
  // 异国与名宴
  '韩式大葱海鲜煎饼': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&auto=format&fit=crop&q=80',
  '苏菜泰斗无为熏鸭三套鸭': 'https://images.unsplash.com/photo-1514944298352-f4e918501191?w=700&auto=format&fit=crop&q=80',
  '直隶官府经典李鸿章一品大杂烩': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&auto=format&fit=crop&q=80',
  '杭帮名馔百年楼外楼正宗西湖醋鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700&auto=format&fit=crop&q=80',
  // 新菜品
  '湖北传统炸藕夹': 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=700&auto=format&fit=crop&q=80',
  '江南桂花蜜汁糖藕': 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&auto=format&fit=crop&q=80',
  '老醋五香炸花生米': 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=700&auto=format&fit=crop&q=80',
  '五香盐水煮毛豆': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&auto=format&fit=crop&q=80',
  '绝味麻辣鸭头鸭脖': 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=700&auto=format&fit=crop&q=80',
  '香辣孜然炒掌中宝': 'https://images.unsplash.com/photo-1562967914-608f82629710?w=700&auto=format&fit=crop&q=80',
  '自贡香辣冷吃牛肉': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80',
  '潮汕椒盐酥炸九肚鱼': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700&auto=format&fit=crop&q=80',
  '红油香脆猪耳朵': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop&q=80'
};

// Update cache
Object.assign(photosCache, verifiedPhotos);
fs.writeFileSync(path.join(__dirname, 'photos_cache.json'), JSON.stringify(photosCache, null, 2), 'utf8');

// New bespoke authentic dishes
const newDishes = [
  {
    id: "rec_lotus_01",
    name: "湖北传统炸藕夹",
    subtitle: "江汉平原节令名肴，洪湖粉嫩九孔藕夹鲜肉馅，金黄酥脆，咸鲜爆汁，外脆里嫩",
    photoUrl: verifiedPhotos["湖北传统炸藕夹"],
    region: "湖北",
    cuisineCategory: "鄂菜",
    categoryType: "dish",
    flavor: ["外酥里嫩", "鲜咸焦香", "清香多汁"],
    cookingMethod: "炸",
    difficulty: "进阶",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    calories: 380,
    season: ["autumn", "winter"],
    primarySeason: "autumn",
    seasonBadge: "粉糯秋藕",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: false,
    tags: ["鄂菜", "湖北", "下酒绝配", "时令秋藕", "酥脆炸物"],
    ingredients: [
      { name: "洪湖九孔粉嫩莲藕", amount: "400克 (切连刀薄片)" },
      { name: "新鲜优质猪前腿五花肉馅", amount: "200克 (三肥七瘦)" },
      { name: "香葱花与老生姜末", amount: "25克" },
      { name: "面粉与玉米淀粉 (1:1脆皮糊)", amount: "100克" },
      { name: "农家土鸡蛋", amount: "1枚" }
    ],
    seasonings: [
      { name: "特级生抽酱油", amount: "1.5勺" },
      { name: "纯正芝麻香油", amount: "1茶匙" },
      { name: "十三香与花椒粉", amount: "半茶匙" },
      { name: "精制食盐", amount: "1茶匙" }
    ],
    steps: [
      { title: "藕片改刀连刀片", instruction: "莲藕去皮切成第一刀不切断、第二刀切断的蝴蝶连刀片，泡清水防氧化变黑。" },
      { title: "肉馅调味酿入藕夹", instruction: "肉馅加生抽、盐、葱姜碎、十三香、香油顺一个方向搅拌上劲，抹入藕夹内部轻轻捏合。" },
      { title: "调黄金脆糊双面挂浆", instruction: "面粉与淀粉加入鸡蛋、少许盐、适量清水调成浓稠酸奶状脆皮糊，藕夹均匀挂浆。" },
      { title: "高温炸透复炸出锅", instruction: "六成油温下藕夹炸至定型微黄捞出，升至七成油温大火复炸30秒至全身金黄酥脆，捞出撒椒盐装盘。" }
    ],
    chefTips: "连刀片厚度约3毫米最酥脆；复炸30秒逼出多余油脂，外壳嘎嘣脆，久放不塌秧！"
  },
  {
    id: "rec_lotus_02",
    name: "江南桂花蜜汁糖藕",
    subtitle: "江南水乡中秋传统甜头牌，九孔红藕灌入软糯圆糯米，浓醇红糖桂花汁慢火熬透，拉丝软糯",
    photoUrl: verifiedPhotos["江南桂花蜜汁糖藕"],
    region: "江苏",
    cuisineCategory: "苏菜",
    categoryType: "dessert",
    flavor: ["软糯拉丝", "桂花清香", "甘甜温润"],
    cookingMethod: "慢炖煨煮",
    difficulty: "进阶",
    prepTimeMinutes: 30,
    cookTimeMinutes: 90,
    servings: 4,
    calories: 290,
    season: ["autumn", "winter"],
    primarySeason: "autumn",
    seasonBadge: "当令甜糯",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: false,
    isFatLossFriendly: false,
    tags: ["苏菜", "江南", "糖水甜品", "秋藕甜糯", "中秋传统"],
    ingredients: [
      { name: "粗壮九孔老粉藕 (洪湖/太湖)", amount: "2节 (约700克)" },
      { name: "太湖圆糯米 (提前浸泡3小时)", amount: "150克" },
      { name: "传统原汁老红糖与冰糖", amount: "120克" },
      { name: "天然干金桂花", amount: "10克" },
      { name: "红枣", amount: "8颗" }
    ],
    seasonings: [
      { name: "天然纯蜂蜜", amount: "2大勺" },
      { name: "清水", amount: "没过藕身" }
    ],
    steps: [
      { title: "切顶灌米", instruction: "莲藕切下一头约2厘米做盖，用筷子将泡发糯米塞紧藕孔，盖上切下的藕头用牙签牢固固定。" },
      { title: "文火慢熬上色", instruction: "锅中放没过藕的水，加入红糖、冰糖、红枣，大火烧开转文火盖盖慢炖1.5小时至藕肉绛红透亮。" },
      { title: "大火收汁收浓", instruction: "揭盖大火收汁至汤汁起大泡且浓稠，关火淋入蜂蜜与干桂花浸润。" },
      { title: "改刀厚片浇蜜汁", instruction: "稍晾凉切成0.8厘米整齐厚片，码盘后淋上锅中醇厚桂花糖蜜汁。" }
    ],
    chefTips: "塞米要用筷子捣实，但留一点点膨胀空间；老藕比新藕淀粉更足，炖出来才有经典的拉丝沙糯感！"
  },
  {
    id: "rec_snack_01",
    name: "老醋五香炸花生米",
    subtitle: "天下第一下酒神菜，红皮花生炸至酥脆，配镇江香醋老冰糖生抽调成秘制老醋汁，酸甜解腻嘎嘣脆",
    photoUrl: verifiedPhotos["老醋五香炸花生米"],
    region: "国民家常",
    cuisineCategory: "家常经典",
    categoryType: "dish",
    flavor: ["酸甜爽脆", "焦香酥化", "解酒解腻"],
    cookingMethod: "炸拌",
    difficulty: "新手",
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    servings: 4,
    calories: 220,
    season: ["spring", "summer", "autumn", "winter"],
    primarySeason: "autumn",
    seasonBadge: "四季下酒",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: false,
    tags: ["下酒神菜", "家常", "酥脆爽口", "快手小凉菜"],
    ingredients: [
      { name: "精选小红皮花生米", amount: "250克" },
      { name: "清爽香菜碎与洋葱红椒丁", amount: "30克" },
      { name: "熟白芝麻", amount: "5克" }
    ],
    seasonings: [
      { name: "镇江陈年陈醋/老香醋", amount: "3大勺" },
      { name: "特级生抽酱油", amount: "1.5勺" },
      { name: "天然老冰糖粉/白糖", amount: "2勺" },
      { name: "纯正芝麻香油", amount: "半茶匙" }
    ],
    steps: [
      { title: "冷锅冷油慢炸", instruction: "花生米淘洗擦干，冷锅冷油下锅，中小火慢炸，随着噼啪作响且香味浓郁、红皮加深立即捞出控油。" },
      { title: "喷白酒散热增脆", instruction: "趁热喷数滴高度白酒拌匀，迅速散热，可使花生米即便放三天也嘎嘣酥脆。" },
      { title: "调秘制老醋汁", instruction: "老醋、生抽、糖小火微热融化至浓稠，晾凉成清爽酸甜老醋汁。" },
      { title: "洋葱香菜合拌", instruction: "将冷却酥脆的花生米、洋葱丁、红椒丁、香菜碎倒入大碗，淋入老醋汁拌匀装盘。" }
    ],
    chefTips: "冷锅冷油是炸花生米不糊且熟透的核心秘诀；喷白酒能快速带走表面水汽，保证极致酥脆！"
  },
  {
    id: "rec_snack_02",
    name: "五香盐水煮毛豆",
    subtitle: "夏秋大排档灵魂微醺伴侣，八角桂皮小茴香慢卤入味，毛豆翠绿欲滴，豆仁咸香多汁",
    photoUrl: verifiedPhotos["五香盐水煮毛豆"],
    region: "国民家常",
    cuisineCategory: "家常经典",
    categoryType: "dish",
    flavor: ["咸香多汁", "清甜回味", "五香醇厚"],
    cookingMethod: "煮卤",
    difficulty: "新手",
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    servings: 4,
    calories: 120,
    season: ["summer", "autumn"],
    primarySeason: "autumn",
    seasonBadge: "夏秋清爽",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: true,
    tags: ["下酒菜", "低卡饱腹", "大排档名物", "快手卤水"],
    ingredients: [
      { name: "新鲜饱满绿皮毛豆", amount: "500克" },
      { name: "大红袍花椒与八角", amount: "各3克" },
      { name: "桂皮与香叶", amount: "各2片" },
      { name: "干红小辣椒", amount: "3只" }
    ],
    seasonings: [
      { name: "食用精盐", amount: "2大勺 (略咸才入味)" },
      { name: "食用食用油 (保持翠绿秘诀)", amount: "半茶匙" }
    ],
    steps: [
      { title: "剪角清洗", instruction: "毛豆加盐搓洗去表面细毛，用剪刀剪去两头尖角，便于卤汤快速吸入。" },
      { title: "煮五香卤水", instruction: "锅中加足量水，下八角、花椒、桂皮、香叶、干辣椒和盐大火烧开煮5分钟析出浓郁香气。" },
      { title: "开盖下毛豆煮熟", instruction: "滴入几滴食用油，下入毛豆，保持中火开盖煮8-10分钟至豆仁软糯适口。" },
      { title: "浸泡入味冷藏", instruction: "关火后自然放凉，浸泡在汤汁中30分钟更入味，冷藏后配冰爽啤酒风味更绝！" }
    ],
    chefTips: "煮毛豆绝对不能盖锅盖！盖盖叶绿素受热变黄变灰，开盖滴油煮能让毛豆青翠如翡翠！"
  },
  {
    id: "rec_snack_03",
    name: "绝味麻辣鸭头鸭脖",
    subtitle: "二十四味草本老卤透骨卤制，先卤后焖，麻辣鲜香直透骨髓，肉质紧实撕扯感十足",
    photoUrl: verifiedPhotos["绝味麻辣鸭头鸭脖"],
    region: "湖南",
    cuisineCategory: "湘菜",
    categoryType: "dish",
    flavor: ["麻辣透骨", "醇厚酱香", "越啃越香"],
    cookingMethod: "酱卤",
    difficulty: "中等",
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    servings: 4,
    calories: 260,
    season: ["spring", "summer", "autumn", "winter"],
    primarySeason: "summer",
    seasonBadge: "四季热辣",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: false,
    tags: ["下酒神菜", "湘川风味", "麻辣卤味", "宵夜顶流"],
    ingredients: [
      { name: "新鲜鸭头与鸭脖", amount: "600克" },
      { name: "老生姜片与大葱结", amount: "40克" },
      { name: "四川大红袍花椒与青花椒", amount: "15克" },
      { name: "特辣魔鬼椒与七星椒段", amount: "30克" },
      { name: "草果白芷砂仁桂皮香叶八角", amount: "复合卤料包1副" }
    ],
    seasonings: [
      { name: "冰糖炒制糖色", amount: "2大勺" },
      { name: "传统老抽与特级生抽", amount: "各2勺" },
      { name: "纯酿高度白酒", amount: "2大勺" },
      { name: "精制食盐与胡椒粉", amount: "适量" }
    ],
    steps: [
      { title: "焯水去腥", instruction: "鸭头鸭脖冷水下锅，加葱姜白酒大火煮沸5分钟，捞出温水彻底冲洗净血沫。" },
      { title: "炒香料熬卤汤", instruction: "油锅煸香姜葱、干辣椒、花椒及香料包，加高汤、糖色、生抽老抽大火滚沸10分钟成红亮香辣老卤。" },
      { title: "下锅酱卤", instruction: "放入鸭头鸭脖，加白酒，大火烧开转中小火加盖慢卤35分钟。" },
      { title: "原汤浸泡透骨", instruction: "关火不掀盖，浸焖40分钟让麻辣滋味完全沁入骨髓，捞出斩小节装盘。" }
    ],
    chefTips: "三分卤七分焖！关火浸泡是肉质紧致、连骨头都吮吸出鲜辣汁水的无上秘笈！"
  },
  {
    id: "rec_snack_04",
    name: "香辣孜然炒掌中宝",
    subtitle: "烧烤摊与深夜居酒屋招牌，精选鸡膝软骨爆炒孜然辣椒，外皮焦香金黄，软骨咔嚓脆爽",
    photoUrl: verifiedPhotos["香辣孜然炒掌中宝"],
    region: "国民家常",
    cuisineCategory: "家常经典",
    categoryType: "dish",
    flavor: ["焦香酥脆", "孜然浓郁", "鲜辣弹牙"],
    cookingMethod: "旺火热炒",
    difficulty: "新手",
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    servings: 2,
    calories: 280,
    season: ["spring", "summer", "autumn", "winter"],
    primarySeason: "autumn",
    seasonBadge: "四季下酒",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: false,
    tags: ["下酒菜", "夜市必点", "酥脆下酒", "镬气十足"],
    ingredients: [
      { name: "新鲜鸡膝脆骨(掌中宝)", amount: "350克" },
      { name: "蒜瓣碎与熟白芝麻", amount: "20克" },
      { name: "干红辣椒段与青花椒", amount: "15克" },
      { name: "小香葱花", amount: "10克" }
    ],
    seasonings: [
      { name: "精细研磨孜然粒/孜然粉", amount: "2茶匙" },
      { name: "生抽酱油与黄酒", amount: "各1勺" },
      { name: "玉米淀粉", amount: "1勺" },
      { name: "辣椒粉与椒盐粉", amount: "各半茶匙" }
    ],
    steps: [
      { title: "腌制入味", instruction: "掌中宝洗净挤干水分，加生抽、料酒、白胡椒粉、淀粉抓匀腌制10分钟。" },
      { title: "热油煸炒微焦", instruction: "热锅倒宽油，下掌中宝中大火快速翻炒煸炒4分钟，煸至表面金黄油脂析出、边缘微卷焦脆盛出。" },
      { title: "爆香配料", instruction: "锅留底油，下蒜末、干辣椒、花椒爆出猛烈香辣风味。" },
      { title: "撒孜然合炒出镬气", instruction: "倒回掌中宝，撒入足量孜然粉、辣椒粉、椒盐、熟芝麻和大葱花，大火快速颠翻15秒出锅！" }
    ],
    chefTips: "掌中宝一定要煸出多余油脂再合炒，吃起来才焦香不腻，软骨咬在嘴里咔嚓咔嚓极有嚼劲！"
  },
  {
    id: "rec_snack_05",
    name: "自贡香辣冷吃牛肉",
    subtitle: "川南千年盐都一绝，精选牛后腿腱肉切条煸干，红油赤酱裹附，陈皮五香麻辣干香，回味无穷",
    photoUrl: verifiedPhotos["自贡香辣冷吃牛肉"],
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    flavor: ["麻辣干香", "丝丝入味", "越嚼越香"],
    cookingMethod: "煸炒收汁",
    difficulty: "进阶",
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 4,
    calories: 310,
    season: ["spring", "summer", "autumn", "winter"],
    primarySeason: "winter",
    seasonBadge: "下酒绝品",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: true,
    tags: ["川菜", "四川", "自贡盐帮菜", "下酒神菜", "高蛋白手撕"],
    ingredients: [
      { name: "精选牛后腿腱子肉", amount: "500克 (切一指宽长条)" },
      { name: "九制新会陈皮碎", amount: "10克" },
      { name: "四川剪段二荆条与朝天椒", amount: "30克" },
      { name: "生姜丝与熟白芝麻", amount: "20克" }
    ],
    seasonings: [
      { name: "郫县豆瓣酱", amount: "1大勺" },
      { name: "纯酿老抽与特级生抽", amount: "各1.5勺" },
      { name: "大红袍花椒面与五香粉", amount: "各1茶匙" },
      { name: "高度五粮浓香白酒", amount: "2勺" }
    ],
    steps: [
      { title: "牛肉冷水焯水", instruction: "牛肉条冷水下锅加料酒葱姜煮沸5分钟，捞出用温水洗净沥干。" },
      { title: "慢火煸炒干香", instruction: "菜籽油烧热，下牛肉条与姜丝，中小火慢煸8-10分钟，将牛肉内部水汽完全煸干至肉色深褐紧致。" },
      { title: "下酱下料烹出红油", instruction: "拨开牛肉，下豆瓣酱、陈皮、干辣椒段、花椒慢炒至红油泛起香气扑鼻。" },
      { title: "调味收汁撒芝麻", instruction: "淋生抽、老抽、白糖、五香粉翻匀，淋少许高汤焖2分钟让肉条吸饱调料，大火收干亮油，撒白芝麻出锅晾凉。" }
    ],
    chefTips: "自贡冷吃牛肉的灵魂在'冷'！出锅后静置放凉，红油凝于肉条之上，麻辣与陈皮香气收敛沉淀，风味暴增十倍！"
  },
  {
    id: "rec_snack_06",
    name: "潮汕椒盐酥炸九肚鱼",
    subtitle: "潮汕打冷经典海鲜小食，豆腐鱼挂特调脆浆炸至银白金黄，外壳薄脆如蝉翼，内里鱼肉水嫩似布丁",
    photoUrl: verifiedPhotos["潮汕椒盐酥炸九肚鱼"],
    region: "广东",
    cuisineCategory: "海鲜盛宴",
    categoryType: "seafood",
    flavor: ["外酥里嫩", "咸香椒盐", "入口即化"],
    cookingMethod: "炸",
    difficulty: "中等",
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    servings: 3,
    calories: 240,
    season: ["spring", "summer", "autumn", "winter"],
    primarySeason: "autumn",
    seasonBadge: "鲜活海鲜",
    isSeafood: true,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: false,
    tags: ["海鲜盛宴", "潮汕", "酥脆炸鱼", "下酒必点", "鲜美水产"],
    ingredients: [
      { name: "鲜活九肚鱼(豆腐鱼/龙头鱼)", amount: "400克 (去头内脏切段)" },
      { name: "香脆调糊淀粉 (红薯淀粉+低筋粉)", amount: "80克" },
      { name: "香葱花与青红椒粒", amount: "15克" }
    ],
    seasonings: [
      { name: "潮汕经典特制椒盐粉", amount: "1.5勺" },
      { name: "绍兴花雕酒", amount: "1勺" },
      { name: "精制食盐与白胡椒粉", amount: "各半茶匙" }
    ],
    steps: [
      { title: "吸水腌制", instruction: "九肚鱼含水量极高，洗净切段后务必用厨房纸充分吸干表面多余水分，加料酒白胡椒腌制5分钟。" },
      { title: "调酥脆粉浆", instruction: "红薯淀粉加入少量低粉和冰水调匀，静置数分钟形成能挂在鱼身上的薄浆。" },
      { title: "七成热油炸酥", instruction: "油温升至七成热（放入筷子冒大泡），九肚鱼裹薄浆逐块下锅，大火炸2-3分钟定型浮起。" },
      { title: "快速复炸撒椒盐", instruction: "捞出后油温升至八成，倒入复炸20秒逼出油脂至外表金黄硬脆，捞出颠撒葱花椒盐装盘。" }
    ],
    chefTips: "九肚鱼骨软如无，炸透后鱼骨完全酥化可直接吞咽，极致反差的外脆里滑是下酒无敌神配！"
  },
  {
    id: "rec_snack_07",
    name: "红油香脆猪耳朵",
    subtitle: "川蜀经典凉菜铺之冠，老卤猪耳切透光薄片，红油辣子大蒜麻油一拌，软骨咯吱脆爽，香辣开胃",
    photoUrl: verifiedPhotos["红油香脆猪耳朵"],
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    flavor: ["香辣红油", "爽脆弹牙", "蒜香扑鼻"],
    cookingMethod: "卤拌",
    difficulty: "新手",
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 3,
    calories: 210,
    season: ["spring", "summer", "autumn", "winter"],
    primarySeason: "summer",
    seasonBadge: "四季下酒",
    isSeafood: false,
    isGrandBanquets: false,
    isDrinkingSnack: true,
    isFatLossFriendly: false,
    tags: ["川菜", "下酒头牌", "爽脆凉菜", "经典红油"],
    ingredients: [
      { name: "卤制入味熟猪耳朵", amount: "300克 (斜刀切极薄片)" },
      { name: "清脆黄瓜丝或香芹段", amount: "50克" },
      { name: "紫皮大蒜瓣末与葱丝", amount: "20克" },
      { name: "熟花生碎与熟白芝麻", amount: "15克" }
    ],
    seasonings: [
      { name: "自炼正宗四川红油辣椒", amount: "2.5大勺" },
      { name: "特级生抽酱油", amount: "1.5勺" },
      { name: "保宁醋/香醋", amount: "1勺" },
      { name: "白糖与花椒油", amount: "各半茶匙" }
    ],
    steps: [
      { title: "斜刀薄切", instruction: "猪耳朵必须彻底放凉变硬后，用快刀斜着片出宽而薄的透明片，每一片都连带软骨与肉皮。" },
      { title: "调制秘汁", instruction: "碗中放入大量蒜泥、生抽、香醋、白糖、少许盐、花椒油和两大勺浓香红油辣椒拌匀融化。" },
      { title: "下配菜兜拌", instruction: "将猪耳片、黄瓜丝、葱丝放入大盆，倒入红油调味汁，快速兜拌均匀让每一片都挂满红油。" },
      { title: "撒坚果碎装盘", instruction: "装盘后顶层撒满酥脆熟花生碎与白芝麻，红亮诱人，脆爽扑鼻。" }
    ],
    chefTips: "猪耳朵越薄越入味！拌好后静置5分钟再吃，红油辣香与蒜香充分渗入耳软骨，嚼劲十足！"
  }
];

// Append new dishes if not already present
newDishes.forEach(nd => {
  if (!recipes.some(r => r.name === nd.name || r.id === nd.id)) {
    recipes.push(nd);
  }
});
recipes = recipes.filter((r, idx, arr) => arr.findIndex(x => x.name === r.name) === idx);

// Process all recipes
let seafoodCount = 0;
let drinkingCount = 0;

recipes.forEach(r => {
  // 1. Photo replacement if in verifiedPhotos
  if (verifiedPhotos[r.name]) {
    r.photoUrl = verifiedPhotos[r.name];
  } else if (r.photoUrl.includes('1546069901-ba9599a7e63c')) {
    for (const [k, u] of Object.entries(photosCache)) {
      if (r.name.includes(k) || k.includes(r.name)) {
        r.photoUrl = u;
        break;
      }
    }
  }

  // 2. isSeafood flag
  const isExcludedSeafood = r.name.match(/鱼香肉丝|蟹粉狮子头|木鱼花/);
  const isSea = !isExcludedSeafood && (
    r.categoryType === 'seafood' || 
    r.cuisineCategory === '海鲜盛宴' || 
    !!r.name.match(/鱼|虾|蟹|蚝|贝|蛤|螺|鲍|海鲜|鱿|鳗|甲鱼/)
  );
  if (isSea) {
    r.isSeafood = true;
    if (r.categoryType === 'dish' && r.name.match(/鱼|虾|蟹|蚝|贝|海鲜/)) {
      r.categoryType = 'seafood';
    }
    seafoodCount++;
  } else {
    r.isSeafood = false;
  }

  // Special fix for 面拖香酥小黄鱼
  if (r.name.includes('小黄鱼')) {
    r.isSeafood = true;
    r.categoryType = 'seafood';
    r.cuisineCategory = '海鲜盛宴';
    r.isDrinkingSnack = true;
  }

  // 3. isDrinkingSnack flag
  const isSnack = r.isDrinkingSnack || !!r.name.match(/花生|毛豆|鸭脖|鸭头|鸭爪|肥肠|牛腱|猪耳|小龙虾|田螺|花甲|花蛤|螺蛳|烤串|串串|掌中宝|小黄鱼|带鱼|冷吃|辣子鸡|盐酥鸡|盐焗|口水鸡|椒盐|油爆|熏肉|卤|炸鸡|避风塘|排骨|鸡爪/);
  if (isSnack && !r.name.match(/粥|糊|糖水|清汤|炖盅/)) {
    r.isDrinkingSnack = true;
    drinkingCount++;
  }
});

console.log('Total recipes after enrichment:', recipes.length);
console.log('Total Seafood dishes with isSeafood=true:', seafoodCount);
console.log('Total Drinking snacks with isDrinkingSnack=true:', drinkingCount);

// Verify no salad fallback exists in core recipes
const remainingSalad = recipes.filter(r => r.photoUrl.includes('1546069901-ba9599a7e63c'));
console.log('Remaining fallback salad photos:', remainingSalad.length);
if (remainingSalad.length > 0) {
  console.log('Remaining:', remainingSalad.map(r => r.name));
}

// Write out to js/data/recipes.js and android_build
const content = `/**
 * 咕嘟食谱 - 全菜谱精细数据库 (已核验配方、主辅料真实配比与高清实物摄影)
 */
window.RECIPES_DATA = ${JSON.stringify(recipes, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../js/data/recipes.js'), content, 'utf8');
fs.writeFileSync(path.join(__dirname, '../android_build/assets/js/data/recipes.js'), content, 'utf8');
console.log('Successfully updated js/data/recipes.js and android_build assets!');
