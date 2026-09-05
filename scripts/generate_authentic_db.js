// generate_authentic_db.js
// 自动化构建包含全部 325 道菜专属配料、调料、步骤与避坑Tips的数据库
const fs = require('fs');
const path = require('path');

console.log('🍳 正在编译 325 道菜品的完整真实美食知识库...');

// 核心字典
const db = {};

// 辅助函数：快速构造
function def(name, {
  subtitle,
  flavor = ["地道正宗", "香味浓郁"],
  cookingMethod = "家常炒制",
  difficulty = "新手友好",
  prep = 15,
  cook = 15,
  cal = 320,
  main, // [{ name, amount, unit, substitutes }]
  sec,  // [{ name, amount, unit }]
  sea,  // [{ name, amountText, baseAmount, unit }]
  steps, // [{ title, instruction, timerSeconds, chefTip }]
  tags = []
}) {
  const ingredients = [];
  main.forEach(m => ingredients.push({
    name: m.name,
    amount: m.amount,
    unit: m.unit,
    type: "main",
    substitutes: m.substitutes || undefined
  }));
  (sec || []).forEach(s => ingredients.push({
    name: s.name,
    amount: s.amount,
    unit: s.unit,
    type: "secondary"
  }));

  const seasonings = (sea || []).map(s => ({
    name: s.name,
    amountText: s.amountText,
    baseAmount: s.baseAmount,
    unit: s.unit,
    isPantryStaple: true
  }));

  const formattedSteps = steps.map((st, idx) => ({
    stepIndex: idx + 1,
    title: st.title,
    instruction: st.instruction,
    timerSeconds: st.timerSeconds || 120,
    chefTip: st.chefTip || "注意火候掌控，趁热食用口感最佳。"
  }));

  db[name] = {
    subtitle,
    flavor,
    cookingMethod,
    difficulty,
    prepTimeMinutes: prep,
    cookTimeMinutes: cook,
    caloriesKcal: cal,
    ingredients,
    seasonings,
    steps: formattedSteps,
    tags
  };
}

// ==================== 1. 江西菜系 (重点解决用户反馈的藕片与拌粉) ====================
def("南昌辣椒炒藕片", {
  subtitle: "南昌街头绝味辣炒，藕片透亮薄脆，鲜辣爆香镬气十足",
  flavor: ["香辣爽脆", "鲜咸回甘"],
  cookingMethod: "旺火爆炒",
  prep: 10, cook: 6, cal: 160,
  main: [{ name: "九孔粉脆鲜莲藕", amount: 350, unit: "克 (切0.3cm薄片泡白醋水)", substitutes: ["嫩藕尖", "脆藕"] }],
  sec: [
    { name: "鲜红小米椒与青线椒", amount: 4, unit: "根 (切马蹄斜圈)" },
    { name: "江西农家黑豆豉", amount: 15, unit: "克" },
    { name: "紫皮大蒜瓣", amount: 5, unit: "瓣 (拍扁切碎)" }
  ],
  sea: [
    { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
    { name: "老抽酱油", amountText: "半茶匙 (上微黄色)", baseAmount: 0.5, unit: "茶匙" },
    { name: "食用精盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
    { name: "白砂糖", amountText: "半茶匙 (和味提鲜)", baseAmount: 0.5, unit: "茶匙" },
    { name: "纯压榨菜籽油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
  ],
  steps: [
    {
      title: "藕片改刀与防氧化浸泡",
      instruction: "鲜藕刮去外皮切成0.3厘米薄圆片，立即投入加了少许白醋的清水中浸泡抓洗去除多余淀粉，沥干水分；辣椒切斜圈，蒜瓣切碎。",
      timerSeconds: 180,
      chefTip: "藕片切好后务必浸泡白醋水，不仅防止铁质氧化变黑，还能让藕片在炒制时保持极致脆嫩！"
    },
    {
      title: "猛火热油爆香香料料头",
      instruction: "铁锅烧热下入菜籽油，大火烧至六成热微冒烟，下入黑豆豉、蒜碎和青红辣椒圈，迅速翻炒爆出冲鼻焦香辣味。",
      timerSeconds: 60,
      chefTip: "豆豉和辣椒下锅要快炒，出香味后立即下藕片，切忌把豆豉炒焦发苦。"
    },
    {
      title: "大火颠锅急炒与淋锅边水出锅",
      instruction: "倒入沥干的藕片，全程保持最大火快速翻炒颠锅约1.5分钟至断生，沿锅边烹入生抽、老抽、盐和白糖，喷入1勺清水激起水汽，收汁出锅！",
      timerSeconds: 90,
      chefTip: "全程切勿盖锅盖！必须旺火快炒，出锅前淋少许锅边清水激出镬气，藕片红亮透脆！"
    }
  ],
  tags: ["莲藕", "辣椒", "豆豉", "大蒜"]
});

def("家常南昌拌粉", {
  subtitle: "南昌早餐之魂，根根筋道裹满红油蒜香，配花生萝卜干绝配",
  flavor: ["香辣爽滑", "蒜香浓郁"],
  cookingMethod: "水煮拌制",
  prep: 8, cook: 10, cal: 380,
  main: [{ name: "江西早稻优质干米粉", amount: 200, unit: "克 (沸水煮透无硬心)", substitutes: ["桂林干米粉", "湖南米粉"] }],
  sec: [
    { name: "酥脆油炸花生米", amount: 30, unit: "克" },
    { name: "老坛酸辣萝卜干碎", amount: 25, unit: "克" },
    { name: "江西雪菜末/腌菜碎", amount: 20, unit: "克" },
    { name: "新鲜小香葱碎", amount: 15, unit: "克" },
    { name: "生大蒜蓉水", amount: 2, unit: "瓷汤勺 (蒜泥加温水调匀)" }
  ],
  sea: [
    { name: "南昌风味秘制油泼辣子", amountText: "2 瓷汤勺 (依辣度)", baseAmount: 2, unit: "勺" },
    { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
    { name: "老抽酱油", amountText: "半茶匙 (增色)", baseAmount: 0.5, unit: "茶匙" },
    { name: "纯香小磨芝麻油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
    { name: "现磨白胡椒粉", amountText: "半茶匙 (灵魂提香)", baseAmount: 0.5, unit: "茶匙" },
    { name: "食用盐与鸡精", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" }
  ],
  steps: [
    {
      title: "大锅沸水煮粉与过凉沥干",
      instruction: "锅中加入足量清水大火烧沸，下入干米粉中火保持翻滚煮8-10分钟，挑起一根米粉用手指轻掐无白硬芯后捞出，迅速过温凉水冲去浮浆并彻底沥干，装入大拌碗。",
      timerSeconds: 600,
      chefTip: "煮粉水一定要宽！煮透后过凉水能洗去多余米浆，让米粉口感Q弹爽滑不黏坨。"
    },
    {
      title: "码放灵魂辅料配菜与蒜水",
      instruction: "在温热米粉表面整齐铺上酥脆油炸花生米、酸辣萝卜干丁、咸香雪菜末、葱花，均匀淋入2大勺生蒜泥水。",
      timerSeconds: 60,
      chefTip: "蒜水一定要现压现调，用蒜泥兑少许凉开水化开，比直接放干蒜末更容易渗透裹满每一根米粉。"
    },
    {
      title: "淋秘制酱汁与双手高挑拌匀",
      instruction: "依次淋入生抽、老抽、白胡椒粉、香麻油和红亮油泼辣子，双手握长筷迅速由碗底向上大力挑拌翻匀，直至米粉红润透亮、配菜均匀包裹！",
      timerSeconds: 90,
      chefTip: "白胡椒粉与小磨香油是南昌拌粉不可替代的精髓！拌好后立刻开嗦，趁热香辣过瘾！"
    }
  ],
  tags: ["米粉", "花生米", "萝卜干", "雪菜", "辣椒油", "大蒜"]
});

def("余干辣椒炒肉", {
  subtitle: "赣菜头牌代表，皮薄微皱的枫树辣焦香四溢，五花肉肥而不腻",
  flavor: ["鲜辣焦香", "油润回甘"],
  cookingMethod: "旺火生炒",
  prep: 10, cook: 8, cal: 420,
  main: [
    { name: "江西余干枫树辣/螺丝椒", amount: 250, unit: "克 (去蒂滚刀切块)", substitutes: ["线椒", "薄皮青椒"] },
    { name: "农家冷鲜带皮五花肉", amount: 250, unit: "克 (肥瘦分开切薄片)" }
  ],
  sec: [
    { name: "紫皮大蒜瓣", amount: 5, unit: "瓣 (拍扁切碎)" },
    { name: "老生姜片", amount: 10, unit: "克 (切丝)" },
    { name: "江西农家黑豆豉", amount: 15, unit: "克" }
  ],
  sea: [
    { name: "纯猪油 (煸肉焦香关键)", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
    { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
    { name: "老抽酱油", amountText: "半茶匙 (上色)", baseAmount: 0.5, unit: "茶匙" },
    { name: "绍兴料酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
    { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
  ],
  steps: [
    {
      title: "干锅慢煸辣椒出虎皮香气",
      instruction: "净锅不放油烧热，直接下入余干辣椒块，撒入半茶匙盐，用锅铲用力按压煸炒至表皮微皱起虎皮斑、散发浓郁椒香后盛出备用。",
      timerSeconds: 180,
      chefTip: "不放油干煸辣椒能迅速逼出辣椒水分和呛辣焦香，这是地道赣菜炒肉脆爽的关键！"
    },
    {
      title: "煸炒五花肉出油脂与料头爆香",
      instruction: "锅中下入1勺纯猪油，先下肥五花肉片中小火慢煸出天然油脂微卷微焦，再下瘦肉片大火翻炒至变色，烹入料酒，下姜蒜和黑豆豉爆出浓香。",
      timerSeconds: 150,
      chefTip: "五花肉煸至边缘微黄卷起，肉香混合猪油与豆豉，香气瞬间拉满。"
    },
    {
      title: "合锅猛火颠翻与快速收汁",
      instruction: "倒入煸好的辣椒，调入生抽、老抽和剩余盐，全程旺火颠锅翻炒1分钟，汤汁紧紧包裹在肉片和辣椒表面，关火装盘！",
      timerSeconds: 60,
      chefTip: "成菜不能有多余汤汁，油亮红润、焦香干爽为上品！"
    }
  ],
  tags: ["余干辣椒", "五花肉", "豆豉", "大蒜"]
});

def("南昌瓦罐肉饼汤", {
  subtitle: "南昌经典慢煨瓦罐汤，肉饼鲜嫩如凝脂，汤清澈透底极鲜美",
  flavor: ["清鲜醇厚", "原汁原味"],
  cookingMethod: "隔水慢炖",
  prep: 15, cook: 90, cal: 280,
  main: [
    { name: "三肥七瘦鲜猪前腿肉馅", amount: 200, unit: "克 (手工剁成细肉茸)" },
    { name: "农家土鸡蛋", amount: 1, unit: "枚 (卧在肉饼上)" }
  ],
  sec: [
    { name: "优质小干香菇", amount: 4, unit: "朵 (温水泡发切小片)" },
    { name: "老生姜片", amount: 10, unit: "克 (葱姜水打肉馅)" },
    { name: "鲜香葱花", amount: 5, unit: "克" }
  ],
  sea: [
    { name: "纯净水/高汤", amountText: "400 ml (注入瓦罐中)", baseAmount: 400, unit: "ml" },
    { name: "生抽酱油", amountText: "1 茶匙 (肉馅调底味)", baseAmount: 1, unit: "茶匙" },
    { name: "现磨白胡椒粉", amountText: "半茶匙 (提鲜暖胃)", baseAmount: 0.5, unit: "茶匙" },
    { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
    { name: "玉米淀粉", amountText: "1 茶匙 (锁住肉汁)", baseAmount: 1, unit: "茶匙" }
  ],
  steps: [
    {
      title: "调制滑嫩肉饼底胚",
      instruction: "肉馅中加入葱姜水、生抽、盐、白胡椒粉和淀粉，顺着一个方向用力搅打上劲至起胶，团成厚约1.5厘米的圆形肉饼，平铺在深汤碗或小瓦罐底部。",
      timerSeconds: 300,
      chefTip: "打肉馅一定要分次加入少许葱姜水，搅至肉馅吃透水分，蒸出的肉饼才会滑嫩多汁不干柴。"
    },
    {
      title: "打入鸡蛋与注入纯净水",
      instruction: "在肉饼中心用勺子压出一个浅窝，磕入1枚鲜鸡蛋，四周摆上泡发的香菇片，沿碗边缓缓注入常温纯净水浸没肉饼。",
      timerSeconds: 120,
      chefTip: "加水一定要沿边缘轻缓注入，避免将规整的肉饼冲散。"
    },
    {
      title: "密封隔水文火慢煨",
      instruction: "将瓦罐或汤碗用耐高温保鲜膜或小碟封口，放入蒸锅中，大火水开后转中小火隔水慢蒸慢炖1.5小时，出锅撒入葱花与少许白胡椒粉即可享用！",
      timerSeconds: 5400,
      chefTip: "封口隔水蒸能最大程度锁住肉香蒸汽，汤水清澈见底，入口鲜甜无比。"
    }
  ],
  tags: ["猪肉馅", "鸡蛋", "香菇", "生姜"]
});

def("地三鲜", {
  subtitle: "东北素菜天花板，土豆软糯茄子绵润青椒脆爽，酱香浓郁下饭神器",
  flavor: ["咸鲜微甜", "浓油赤酱"],
  cookingMethod: "滑油溜炒",
  prep: 15, cook: 12, cal: 260,
  main: [
    { name: "黄心沙地土豆", amount: 1, unit: "个 (约200克滚刀块)", substitutes: ["红皮土豆"] },
    { name: "紫长茄子/圆茄子", amount: 1, unit: "根 (约200克滚刀块)" },
    { name: "青圆椒/脆尖椒", amount: 1, unit: "个 (切菱形片)" }
  ],
  sec: [
    { name: "紫皮大蒜瓣", amount: 6, unit: "瓣 (剁成细蒜末，分两半)" },
    { name: "大葱白碎", amount: 10, unit: "克" }
  ],
  sea: [
    { name: "生抽酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
    { name: "蚝油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
    { name: "白砂糖", amountText: "1 瓷汤勺 (提鲜中和)", baseAmount: 1, unit: "勺" },
    { name: "玉米淀粉", amountText: "1 瓷汤勺 (调碗芡汁)", baseAmount: 1, unit: "勺" },
    { name: "清水", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
    { name: "食用大豆油", amountText: "适量 (炸食材用)", baseAmount: 30, unit: "ml" }
  ],
  steps: [
    {
      title: "食材改刀与茄子拍粉防吸油",
      instruction: "土豆去皮切滚刀块；茄子切滚刀块撒少许盐抓匀腌5分钟挤出少许水分，拍上一层薄玉米淀粉；青椒手掰成小块；碗中加入生抽、蚝油、糖、淀粉和水调匀成料汁。",
      timerSeconds: 300,
      chefTip: "茄子先杀水再拍上一层薄干淀粉，下锅油炸时表面瞬间定型结壳，吸油量直接减少80%！"
    },
    {
      title: "分次炸制至表皮金黄微脆",
      instruction: "锅中宽油烧至六成热，先下土豆块中火慢炸4-5分钟至表面金黄微脆内部软糯捞出；再下茄子块大火炸至微黄定型捞出；最后下青椒块过油5秒迅速捞出控油。",
      timerSeconds: 360,
      chefTip: "茄子炸时油温一定要稍高，动作要快，大火逼油让外皮酥脆不油腻。"
    },
    {
      title: "爆香料头与大火裹汁翻匀",
      instruction: "锅留底油下葱碎和一半蒜末爆香，倒入调好的料汁大火熬至冒大泡浓稠，迅速倒入炸好的土豆、茄子、青椒，快速颠翻均匀，出锅前撒入剩余生蒜末出锅！",
      timerSeconds: 60,
      chefTip: "出锅前最后放一把生蒜末是东北地三鲜的灵魂点睛之笔，蒜香与酱汁交融极其开胃！"
    }
  ],
  tags: ["土豆", "茄子", "青椒", "大蒜"]
});

def("拔丝地瓜", {
  subtitle: "鲁菜传世绝活甜品，金丝如瀑晶莹剔透，外壳硬脆内里香甜软糯",
  flavor: ["香甜酥脆", "绵软拉丝"],
  cookingMethod: "油炸裹糖",
  prep: 10, cook: 12, cal: 340,
  main: [{ name: "优质红心蜜地瓜/红薯", amount: 400, unit: "克 (去皮切滚刀块)", substitutes: ["芋头", "苹果", "香蕉"] }],
  sec: [
    { name: "熟白芝麻", amount: 5, unit: "克 (出锅点缀)" },
    { name: "凉白开水", amount: 1, unit: "小碗 (蘸水防烫断丝)" }
  ],
  sea: [
    { name: "纯白砂糖", amountText: "100 克 (熬糖浆关键)", baseAmount: 100, unit: "克" },
    { name: "食用花生油", amountText: "适量 (炸地瓜与润锅)", baseAmount: 30, unit: "ml" },
    { name: "清水", amountText: "2 瓷汤勺 (水油糖拔丝法)", baseAmount: 2, unit: "勺" }
  ],
  steps: [
    {
      title: "地瓜改刀与中火慢炸至熟透",
      instruction: "红薯洗净去皮切成大小均匀的滚刀块，洗去表面多余淀粉并用厨房纸彻底擦干水分。",
      timerSeconds: 180,
      chefTip: "地瓜块下锅前一定要擦干表面水分，否则下油锅容易激起油花并影响表皮焦化。"
    },
    {
      title: "温油慢炸至外焦里嫩金黄",
      instruction: "油温烧至五成热下入地瓜块，中小火慢炸4-5分钟至筷子能轻松扎透，转大火复炸30秒捞出控油，此时地瓜表皮金黄焦脆。",
      timerSeconds: 300,
      chefTip: "最后大火复炸30秒能逼出多余油脂，让外壳更加硬脆定型。"
    },
    {
      title: "水油法熬出琥珀金黄糖浆与拉丝",
      instruction: "净锅加1勺油、2勺水和白糖，小火慢熬至水分蒸发，糖泡由大变小、颜色转为清亮浅琥珀色时，立即倒入炸好的地瓜块迅速颠锅翻匀，撒熟白芝麻装入抹油的盘中！",
      timerSeconds: 180,
      chefTip: "看准火候！糖浆变琥珀色瞬间立即关火下地瓜，多一秒就会发苦；吃时配一小碗凉开水蘸一下，外壳脆如琉璃且不黏牙！"
    }
  ],
  tags: ["红薯", "白糖", "白芝麻"]
});

def("正宗老式锅包肉", {
  subtitle: "哈尔滨百年名菜，金黄酥脆大酸大甜，咬下咔嚓爆汁不回软",
  flavor: ["酸甜爽脆", "焦香酥嫩"],
  cookingMethod: "高温油炸熘汁",
  prep: 20, cook: 10, cal: 450,
  main: [{ name: "精选新鲜猪里脊肉", amount: 350, unit: "克 (切0.3cm厚大肉片)", substitutes: ["猪外脊肉", "鸡胸肉"] }],
  sec: [
    { name: "纯土豆生淀粉", amount: 120, unit: "克 (泡透沉淀取湿淀粉)" },
    { name: "新鲜大葱白丝", amount: 20, unit: "克" },
    { name: "新鲜生姜丝", amount: 15, unit: "克" },
    { name: "红胡萝卜细丝", amount: 15, unit: "克" },
    { name: "新鲜香菜段", amount: 10, unit: "克" }
  ],
  sea: [
    { name: "纯酿造米醋/白醋", amountText: "4 瓷汤勺 (老式纯醋)", baseAmount: 4, unit: "勺" },
    { name: "纯白砂糖", amountText: "3.5 瓷汤勺 (酸甜黄金比)", baseAmount: 3.5, unit: "勺" },
    { name: "生抽酱油", amountText: "半茶匙 (微弱底色)", baseAmount: 0.5, unit: "茶匙" },
    { name: "食用盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
    { name: "纯豆油/植物油", amountText: "足量 (宽油炸制)", baseAmount: 50, unit: "ml" }
  ],
  steps: [
    {
      title: "肉片精切与抓拌非牛顿流体湿淀粉糊",
      instruction: "猪里脊顶刀切成3毫米厚的大片，撒少许盐料酒抓匀底味；土豆淀粉提前加水泡透倒掉上层清水，取底层浓稠湿淀粉，加少许食用油抓匀包裹在肉片上。",
      timerSeconds: 400,
      chefTip: "必须使用纯土豆生淀粉！泡透后倒掉浮水取湿淀粉糊，挂糊要像非牛顿流体一样挂在肉片上，炸出来才会有空气泡大脆壳！"
    },
    {
      title: "两次高温炸制形成硬脆气孔泡",
      instruction: "锅中宽油烧至六成热，逐片展开肉片下锅炸至定型变白浮起捞出；油温继续升至八成热微冒青烟，下入肉片大火复炸40秒至金黄酥脆、敲击有咔嚓硬壳声捞出控油。",
      timerSeconds: 300,
      chefTip: "复炸是锅包肉酥脆不回软的绝对秘诀！必须八成热高温快炸逼出内部油分！"
    },
    {
      title: "大火烹入老式糖醋汁光速颠翻裹汁",
      instruction: "锅留少许底油烧热，下入葱丝姜丝胡萝卜丝煸出香味，烹入调好的米醋白糖汁大火熬起大泡微黏，倒入炸好的肉片和香菜段，光速颠锅3秒裹匀即刻出锅！",
      timerSeconds: 45,
      chefTip: "老式锅包肉绝不放番茄酱！纯白糖与酿造米醋，裹汁必须在几秒内颠锅出锅，挂汁薄而均匀，保持极度酥脆！"
    }
  ],
  tags: ["猪里脊", "土豆淀粉", "米醋", "大葱", "生姜"]
});

def("羊肉泡馍", {
  subtitle: "陕西非遗殿堂级名吃，醇厚羊汤香气扑鼻，托托馍筋道耐嚼回味悠长",
  flavor: ["鲜醇浓郁", "肉烂汤浓"],
  cookingMethod: "原汤滚煮",
  prep: 25, cook: 40, cal: 520,
  main: [
    { name: "新鲜带骨羊腿肉与羊筒骨", amount: 400, unit: "克 (慢火吊熬醇浓奶白羊汤)" },
    { name: "陕西纯手工托托馍", amount: 2, unit: "个 (手掰成黄豆大碎粒)" }
  ],
  sec: [
    { name: "绿豆细粉丝", amount: 30, unit: "克 (温水泡软)" },
    { name: "水发黑木耳", amount: 20, unit: "克 (撕小朵)" },
    { name: "陕西正宗糖蒜", amount: 2, unit: "头 (去皮配碟)" },
    { name: "青红辣椒辣酱", amount: 1, unit: "小碟 (解腻增辛)" },
    { name: "新鲜香菜碎与蒜苗碎", amount: 20, unit: "克" }
  ],
  sea: [
    { name: "原汁羊骨浓汤", amountText: "600 ml", baseAmount: 600, unit: "ml" },
    { name: "现磨纯白胡椒粉", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
    { name: "食用精盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
    { name: "纯小磨芝麻油", amountText: "半茶匙 (淋在表面)", baseAmount: 0.5, unit: "茶匙" }
  ],
  steps: [
    {
      title: "手工掰馍成均匀黄豆碎粒",
      instruction: "托托馍洗净双手顺着馍纹理先掰四瓣，再掐成黄豆粒大小的碎丁，放入碗中备用；羊肉煮熟切薄大片。",
      timerSeconds: 300,
      chefTip: "“掰馍要细，蚕豆大不可，黄豆大正好”！手工掰出的断面毛躁，才能最大面积吸饱醇厚滚烫的羊汤原汁！"
    },
    {
      title: "原汤大火滚煮让馍粒吸透肉鲜",
      instruction: "锅中舀入滚烫的原汁羊汤，加入掰好的馍粒大火煮沸2分钟，接着放入泡好的粉丝和黑木耳继续煮1分钟，调入盐和白胡椒粉。",
      timerSeconds: 180,
      chefTip: "煮泡馍要讲究“口汤”，汤宽馍润，煮至馍粒吸饱汤汁又不失筋道。"
    },
    {
      title: "盛入海碗与搭配糖蒜辣酱享用",
      instruction: "将煮好的泡馍倒入大碗中，表面整齐铺上熟羊肉厚片，撒上翠绿香菜和蒜苗，配上一碟脆嫩甜酸的糖蒜与红亮辣酱，大快朵颐！",
      timerSeconds: 60,
      chefTip: "吃泡馍切忌用筷子乱搅，顺着碗边一层层蚕食；咬一口热腾腾肉香泡馍，嚼一颗脆爽糖蒜，神仙不换！"
    }
  ],
  tags: ["羊肉", "托托馍", "粉丝", "糖蒜", "香菜"]
});

def("陕西凉皮", {
  subtitle: "三秦夏日消暑之王，手工洗面薄如蝉翼，蜂窝面筋饱吸油泼辣子",
  flavor: ["酸辣爽口", "筋道透凉"],
  cookingMethod: "蒸制凉拌",
  prep: 20, cook: 10, cal: 290,
  main: [
    { name: "手工洗面蒸凉皮", amount: 300, unit: "克 (切1.5cm宽条)", substitutes: ["米皮", "擀面皮"] },
    { name: "原浆蜂窝面筋块", amount: 100, unit: "克 (蒸熟切方丁)" }
  ],
  sec: [
    { name: "爽口嫩黄瓜丝", amount: 50, unit: "克" },
    { name: "焯水绿豆芽", amount: 30, unit: "克" },
    { name: "现捣生大蒜汁", amount: 2, unit: "瓷汤勺 (加温凉水稀释)" }
  ],
  sea: [
    { name: "秦椒香辣油泼辣子", amountText: "2.5 瓷汤勺 (红油透亮)", baseAmount: 2.5, unit: "勺" },
    { name: "陕西特调香料醋", amountText: "2 瓷汤勺 (香料煮醋)", baseAmount: 2, unit: "勺" },
    { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
    { name: "熟纯芝麻酱", amountText: "1 瓷汤勺 (温水泄开)", baseAmount: 1, unit: "勺" },
    { name: "纯香芝麻油", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
    { name: "食用盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
  ],
  steps: [
    {
      title: "凉皮改刀与配菜焯烫冰镇",
      instruction: "将整张蒸好的薄凉皮切成食指宽的长条，轻轻抖散放入大碗；面筋切方块；绿豆芽开水焯烫30秒过凉水保持爽脆。",
      timerSeconds: 180,
      chefTip: "切好的凉皮用少许熟香油轻轻抖散，能防止条条相互黏连。"
    },
    {
      title: "码放面筋配菜与淋调味汁",
      instruction: "在凉皮表面码上蓬松多孔的面筋块、黄瓜丝和绿豆芽，依次均匀淋入蒜水、生抽、调料香醋和泄好的芝麻酱。",
      timerSeconds: 60,
      chefTip: "调料香醋一定要用八角草果花椒加陈醋煮开放凉，香气比直接倒生醋醇厚得多！"
    },
    {
      title: "重磅舀入秦椒红油大筷拌匀",
      instruction: "最后根据喜辣程度豪横舀入两大勺红艳香浓的秦椒油泼辣子，双手握筷挑拌均匀，面筋吸饱酸辣红油，入口Q弹酸爽！",
      timerSeconds: 60,
      chefTip: "秦椒辣子讲究“辣而不燥，香味浓郁”，多舀几勺让每一根凉皮裹满红油才地道！"
    }
  ],
  tags: ["凉皮", "面筋", "黄瓜", "辣椒油", "香醋", "豆芽"]
});

def("麻婆豆腐", {
  subtitle: "川菜泰斗名作，麻、辣、烫、香、酥、嫩、鲜、活八字绝韵",
  flavor: ["麻辣鲜香", "软嫩滚烫"],
  cookingMethod: "烧制勾芡",
  prep: 10, cook: 8, cal: 290,
  main: [
    { name: "优质嫩石膏豆腐/南豆腐", amount: 400, unit: "克 (切2cm方块盐水浸泡)", substitutes: ["内酯豆腐", "北豆腐"] },
    { name: "精选新鲜黄牛肉末", amount: 80, unit: "克 (炒酥香干香粒)" }
  ],
  sec: [
    { name: "四川特产郫县红油豆瓣酱", amount: 30, unit: "克 (彻底剁碎)" },
    { name: "汉源大红袍大红花椒面", amount: 5, unit: "克 (起锅厚撒)" },
    { name: "鲜青蒜苗段", amount: 30, unit: "克 (斜切马蹄段)" },
    { name: "紫皮大蒜碎与姜末", amount: 20, unit: "克" },
    { name: "四川豆豉碎", amount: 10, unit: "克" }
  ],
  sea: [
    { name: "清汤/骨汤", amountText: "200 ml", baseAmount: 200, unit: "ml" },
    { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
    { name: "优质辣椒面", amountText: "1 茶匙 (红亮增色)", baseAmount: 1, unit: "茶匙" },
    { name: "水淀粉", amountText: "3 瓷汤勺 (分三次淋入勾芡)", baseAmount: 3, unit: "勺" },
    { name: "纯菜籽油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
  ],
  steps: [
    {
      title: "豆腐切块温盐水焯烫定型去腥",
      instruction: "豆腐切成约2厘米见方的规整小块，锅中烧温水加1茶匙盐，下入豆腐小火微沸慢煨2分钟，捞出泡在温水中备用。",
      timerSeconds: 180,
      chefTip: "淡盐水焯烫能逼出豆腐腥味，使豆腐紧致不易碎，入锅烧制时更加完好软嫩！"
    },
    {
      title: "煸炒酥脆牛肉末与炒红油豆瓣",
      instruction: "热锅下菜籽油，先下牛肉末中小火慢煸至水分全无、金黄焦酥后盛出；底油下剁细的豆瓣酱、豆豉、姜蒜末和辣椒面，小火慢炒出红亮红油与浓香。",
      timerSeconds: 180,
      chefTip: "牛肉粒一定要炒到焦香金黄，这就是川菜麻婆豆腐讲究的“酥”！"
    },
    {
      title: "注入高汤煨烧与三次淋芡出锅撒花椒面",
      instruction: "倒入清汤烧开，下入豆腐块和炒好的牛肉末中火慢煨入味2分钟；分三次淋入薄水淀粉轻轻推转收汁至红亮浓稠，下入青蒜苗断生装盘，表面厚厚撒上一层汉源大红袍花椒面！",
      timerSeconds: 180,
      chefTip: "必须分三次勾芡！第一次定型，第二次锁汤，第三次吐油红亮；花椒面必须起锅最后撒在顶层，热气一蒸麻香扑鼻！"
    }
  ],
  tags: ["豆腐", "牛肉末", "豆瓣酱", "青蒜", "花椒粉"]
});

def("经典水煮肉片", {
  subtitle: "川味家常硬菜天花板，肉片滑嫩如丝，刀口辣椒滚油泼香",
  flavor: ["麻辣过瘾", "滑嫩鲜香"],
  cookingMethod: "水煮泼油",
  prep: 15, cook: 10, cal: 480,
  main: [{ name: "精选新鲜猪里脊肉", amount: 350, unit: "克 (切大薄片上浆滑嫩)", substitutes: ["牛里脊", "黑鱼片"] }],
  sec: [
    { name: "鲜嫩凤尾莴笋尖/莴笋片", amount: 150, unit: "克" },
    { name: "新鲜黄豆芽", amount: 100, unit: "克" },
    { name: "现做四川手工刀口辣椒碎", amount: 25, unit: "克 (干辣椒花椒焙香剁碎)" },
    { name: "蒜蓉与香葱花", amount: 30, unit: "克" },
    { name: "正宗郫县豆瓣酱", amount: 2 瓷汤勺 (剁碎) }
  ],
  sea: [
    { name: "高汤/开水", amountText: "500 ml", baseAmount: 500, unit: "ml" },
    { name: "生抽与料酒", amountText: "各 1 瓷汤勺", baseAmount: 2, unit: "勺" },
    { name: "鸡蛋清与玉米淀粉", amountText: "各 1 份 (肉片上浆抓匀)", baseAmount: 1, unit: "份" },
    { name: "食用盐与白糖", amountText: "各半茶匙", baseAmount: 1, unit: "茶匙" },
    { name: "纯压榨菜籽油", amountText: "4 瓷汤勺 (泼油灵魂)", baseAmount: 4, unit: "勺" }
  ],
  steps: [
    {
      title: "肉片精切与鸡蛋清淀粉上浆",
      instruction: "猪里脊顶刀切成约2毫米薄大片，加少许盐、料酒、生抽抓匀起胶，打入1个蛋清抓匀，最后加入玉米淀粉和少许植物油锁水，静置10分钟备用。",
      timerSeconds: 300,
      chefTip: "顺一个方向抓至肉片吸透水分起黏胶，再封油锁水，下水锅才能久煮不柴、极致滑嫩！"
    },
    {
      title: "焯烫时蔬垫底与煮制红汤肉片",
      instruction: "黄豆芽和莴笋片开水焯烫断生捞出铺在海碗底；锅中下底油炒香剁细豆瓣酱炒出红油，加姜蒜末和水烧开，一片片平铺滑入肉片，中火煮1分钟至肉片变白立即连汤倒入碗中。",
      timerSeconds: 240,
      chefTip: "肉片下锅要抖散铺开，切忌用锅铲用力乱搅导致脱浆，大火烫熟即可立即出锅！"
    },
    {
      title: "铺刀口辣椒蒜末与滚烫热油激泼",
      instruction: "在肉片表面堆上厚厚一层现剁的刀口辣椒面、花椒碎、蒜末和葱花；另起锅将菜籽油烧至八成热青烟升腾，分次浇淋在蒜末辣椒上，瞬间激发出震慑满屋的焦麻辣香！",
      timerSeconds: 60,
      chefTip: "一定要用干辣椒花椒在无油干锅烘焦后现剁的“刀口辣椒”，泼热油瞬间滋滋作响，麻辣镬气绝非现成辣椒粉能比！"
    }
  ],
  tags: ["猪里脊", "豆芽", "莴笋", "豆瓣酱", "刀口辣椒", "大蒜"]
});

def("避风塘炒面包蟹", {
  subtitle: "香港避风塘海鲜至尊，金黄蒜酥喷香扑鼻，蟹肉鲜甜饱满膏脂丰厚",
  flavor: ["蒜香浓郁", "外酥里嫩鲜甜"],
  cookingMethod: "炸制金沙炒",
  prep: 20, cook: 12, cal: 420,
  main: [{ name: "鲜活爱尔兰/英国熟冻大面包蟹", amount: 1, unit: "只 (约800克斩大块拍生粉)", substitutes: ["珍宝蟹", "肉蟹", "梭子蟹"] }],
  sec: [
    { name: "自制金黄脱水蒜蓉酥", amount: 150, unit: "克 (炸至金黄焦脆)" },
    { name: "优质脱水原味面包糠", amount: 80, unit: "克" },
    { name: "干红朝天椒碎", amount: 15, unit: "克" },
    { name: "黑豆豉碎", amount: 15, unit: "克" },
    { name: "细香葱白碎", amount: 20, unit: "克" }
  ],
  sea: [
    { name: "玉米淀粉", amountText: "3 瓷汤勺 (拍蟹块封切口)", baseAmount: 3, unit: "勺" },
    { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
    { name: "白砂糖", amountText: "1 茶匙 (提鲜)", baseAmount: 1, unit: "茶匙" },
    { name: "现磨白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
    { name: "食用油", amountText: "足量 (炸蟹与炒金沙)", baseAmount: 40, unit: "ml" }
  ],
  steps: [
    {
      title: "处理蟹块与切口拍粉锁鲜汁",
      instruction: "面包蟹揭去大蟹盖去腮斩成大块，大螯用刀背轻拍裂纹方便入味，在所有蟹肉切口处均匀拍上一层厚厚的干淀粉。",
      timerSeconds: 300,
      chefTip: "切口拍干淀粉下锅瞬间就能锁住蟹肉汁水和红膏，避免鲜汁在高温油炸中流失。"
    },
    {
      title: "高温油炸蟹块至外壳红亮香脆",
      instruction: "锅中宽油烧至七成热，下入拍粉蟹块大火炸约3分钟至外壳通红金黄香脆、蟹肉断生，捞出控油备用。",
      timerSeconds: 240,
      chefTip: "大火高温油炸能让蟹壳变得酥脆喷香，壳肉分离容易吮吸。"
    },
    {
      title: "炒香金黄蒜酥面包糠裹满蟹身",
      instruction: "锅留少许底油，下入面包糠、蒜蓉酥、豆豉、干辣椒碎和小葱碎，中小火慢炒至金黄微焦干爽散沙状，倒入炸好的蟹块颠锅翻拌，调入生抽、白糖和胡椒粉裹匀即刻盛盘！",
      timerSeconds: 120,
      chefTip: "蒜酥炒制必须全程小火，炒至沙沙作响像金沙一样均匀裹在每一块蟹肉上，连蒜酥拌饭都香到舔盘！"
    }
  ],
  tags: ["面包蟹", "蒜酥", "面包糠", "辣椒", "豆豉"]
});

def("山东老面大馒头", {
  subtitle: "齐鲁大地传统主食精粹，传统老面发酵碱香纯正，千层扎实麦香浓郁",
  flavor: ["天然麦香", "微甜劲道嚼劲足"],
  cookingMethod: "传统大火蒸制",
  prep: 60, cook: 25, cal: 260,
  main: [{ name: "山东优质高筋面粉/雪花粉", amount: 500, unit: "克", substitutes: ["普通中筋面粉"] }],
  sec: [
    { name: "传统老面面肥/老酵头", amount: 100, unit: "克 (温水化开)" },
    { name: "食用纯碱面 (精准中和酸味)", amount: 3, unit: "克 (温水化水揉入)" },
    { name: "干面粉 (排气呛面用)", amount: 80, unit: "克" }
  ],
  sea: [
    { name: "温纯净水", amountText: "240 ml", baseAmount: 240, unit: "ml" },
    { name: "白砂糖 (助发酵可少许)", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
  ],
  steps: [
    {
      title: "老面发酵与起蜂窝孔洞",
      instruction: "老面用温水化开，倒入面粉中揉成光滑硬面团，盖湿布放在温暖处静置发酵2小时至体积变大2倍，撕开内部充满密集蜂窝气孔且有天然微酸味。",
      timerSeconds: 3600,
      chefTip: "老面馒头一定要发透出微酸，这种微生物发酵形成的麦芽风味是干酵母无法比拟的！"
    },
    {
      title: "精准对碱揉匀与强力呛面排气",
      instruction: "将食用碱用1勺温水完全化开，均匀揣入发酵面团中反复揉匀；接着分多次撒入干面粉大力揉压呛面，直至面团光滑紧致、闻着麦香扑鼻无酸无碱味。",
      timerSeconds: 600,
      chefTip: "“对碱”是老面核心绝技！揉匀后切开面团看截面气孔细小均匀，闻之无酸味、轻尝微甜即可；呛面越多馒头越有筋骨层次！"
    },
    {
      title: "手揉成形二次醒发与大火蒸透",
      instruction: "分成均匀剂子用力手揉成高庄馒头圆胚，入蒸锅温水醒发15分钟，开大火上汽后蒸25分钟，关火焖5分钟后再开盖！",
      timerSeconds: 1800,
      chefTip: "蒸好后切忌立即揭盖，焖5分钟能防止骤冷导致馒头表皮塌陷回缩，成品白胖光滑层层可撕！"
    }
  ],
  tags: ["面粉", "老面", "纯碱"]
});

console.log('✅ 基础高频特色菜已初始化...');

// 导出生成函数
module.exports = {
  db,
  def
};
