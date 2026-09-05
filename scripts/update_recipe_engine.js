// scripts/update_recipe_engine.js
// 全量 70+ 核心特色名菜真实地道大库 + 智能通用食材解析引擎
const fs = require('fs');
const path = require('path');

const { SPECIFIC_DISH_RECIPES: baseSpecific } = require('./authentic_parser.js');
const photosCache = require('./photos_cache.json');

console.log('🚀 正在构建具备大厨级精准食材配对的完整菜谱库...');

// 深度补充剩余 55+ 道全国知名菜肴的真实用料
const extraSpecific = {
  // 广西菜
  "酸笋紫苏炒牛肉": {
    subtitle: "桂菜热炒头牌，老坛酸笋酸脆醇正，紫苏芳香去腥，牛肉嫩滑鲜辣爆香",
    flavor: ["酸辣鲜香", "紫苏清香"],
    cookingMethod: "旺火热爆",
    main: [{ name: "新鲜黄牛里脊肉", amount: 300, unit: "克 (顶刀逆纹切薄片抓浆)" }],
    sec: [
      { name: "老坛天然发酵酸笋丝", amount: 120, unit: "克 (干锅煸出多余酸水)" },
      { name: "新鲜紫苏嫩叶", amount: 20, unit: "克 (手撕碎)" },
      { name: "鲜红小米辣圈", amount: 3, unit: "根" },
      { name: "紫皮蒜末与生姜片", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "蚝油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "玉米淀粉与蛋清", amountText: "各 1 份 (牛肉抓匀封油)", baseAmount: 1, unit: "份" },
      { name: "纯花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "酸笋干煸与牛肉抓水上浆", instruction: "酸笋丝入净热锅干炒干煸挥发多余酸气盛出；牛肉切薄片抓入少许葱姜水和蛋清生粉上浆封油。", chefTip: "酸笋先干煸能去除生涩臭酸，激发出纯正醇香脆爽！" },
      { title: "猛火热油滑炒牛肉断生", instruction: "热锅倒油烧至七成热倒入牛肉大火快速划散翻炒25秒变色盛出控油。", chefTip: "滑炒牛肉动作必须迅速，八成熟立刻出锅！" },
      { title: "爆香酸笋紫苏合炒出锅", instruction: "下蒜末辣椒爆香酸笋，倒入牛肉和紫苏叶大火颠锅翻炒15秒，调入蚝油生抽裹匀出锅！", chefTip: "紫苏遇热香气扑鼻，酸辣与肉嫩完美交织！" }
    ]
  },
  "荔浦芋头扣肉": {
    subtitle: "桂林名筵经典硬菜，荔浦芋头粉糯清甜，带皮五花肉肥而不腻入口即化",
    flavor: ["咸甜甘香", "粉糯酥烂"],
    cookingMethod: "油炸蒸制",
    main: [
      { name: "肥瘦均匀带皮猪五花肉大块", amount: 500, unit: "克 (煮熟扎孔炸虎皮切大片)" },
      { name: "桂林特产荔浦香芋头", amount: 400, unit: "克 (切0.8cm厚大片油炸)" }
    ],
    sec: [
      { name: "桂林正宗老坛豆腐乳", amount: 3, unit: "块 (压泥调和味汁)" },
      { name: "蒜末与姜蓉", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "生抽与老抽", amountText: "各 1.5 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "蜂蜜水/麦芽糖水", amountText: "1 瓷汤勺 (抹猪皮油炸虎皮)", baseAmount: 1, unit: "勺" },
      { name: "五香粉与白糖", amountText: "各 1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "五花肉煮熟扎孔油炸起大虎皮", instruction: "五花肉煮至七成熟趁热在猪皮上密扎小孔抹上蜂蜜水，入六成热油锅炸至猪皮红黑起大泡，捞出投入冷水中浸泡起虎皮切大片。", chefTip: "扎孔浸冷水是猪皮形成松软大虎皮、吸汁化渣的秘诀！" },
      { title: "荔浦芋头切大厚片滑油微硬", instruction: "荔浦芋头切厚片下热油炸至边缘微黄变硬捞出控油。", chefTip: "芋头炸一下不易散碎，且能更好吸收腐乳肉香。" },
      { title: "一片肉一片芋码碗大火蒸透倒扣", instruction: "调匀腐乳酱汁，一片肉夹一片芋头皮朝下码入扣碗，浇入酱汁大火隔水蒸1.5小时，出锅倒扣盘中！", chefTip: "扣肉肥脂被芋头吸饱，芋头粉糯软烂，肉片入口即化！" }
    ]
  },
  "黄皮酱蒸排骨": {
    subtitle: "广西南宁特色风味，传统酸甜黄皮酱果香四溢，排骨嫩滑多汁酸甜适口",
    flavor: ["果香酸甜", "鲜嫩爽滑"],
    cookingMethod: "原汁粉蒸",
    main: [{ name: "精选新鲜小猪肋排骨", amount: 450, unit: "克 (斩2cm小方块浸水去血水)" }],
    sec: [
      { name: "广西南宁特制老黄皮酱", amount: 2.5, unit: "瓷汤勺 (地道果酸灵魂)" },
      { name: "阳江黑豆豉碎", amount: 15, unit: "克" },
      { name: "紫皮大蒜蓉与红椒碎", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白砂糖", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "玉米淀粉", amountText: "1 瓷汤勺 (锁汁滑嫩)", baseAmount: 1, unit: "勺" },
      { name: "纯花生油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "排骨浸洗去血水抓腌上浆", instruction: "小排浸泡冷水30分钟洗净沥干，加生抽、糖、蒜蓉、豆豉和南宁黄皮酱抓匀入味，最后拌入淀粉和花生油锁水封层。", chefTip: "排骨切小块更易蒸透，淀粉封油保证蒸出来肉质软滑不柴！" },
      { title: "平铺盘中避免堆叠", instruction: "将腌制好的排骨单层平铺在浅蒸盘中，撒上少许红椒丁点缀。", chefTip: "排骨切忌堆成高山，平铺受热均匀熟得快汁水足！" },
      { title: "水沸大火上汽旺蒸12分钟", instruction: "蒸锅加足水大火烧至大滚上汽，放入排骨大火蒸12分钟出锅撒小葱花！", chefTip: "黄皮特有的酸甜果香渗入排骨纤维，吃起来生津解腻，特别清爽！" }
    ]
  },
  "假蒌叶煎土鸡蛋": {
    subtitle: "两广山野特色家常，野生假蒌叶自带独特芳香，土鸡蛋金黄焦香滑嫩",
    flavor: ["草木芳香", "蛋香酥嫩"],
    cookingMethod: "香煎金黄",
    main: [{ name: "新鲜散养农家土鸡蛋", amount: 4, unit: "枚 (充分搅打顺滑)" }],
    sec: [{ name: "鲜嫩假蒌叶/假蒟叶", amount: 30, unit: "克 (洗净切细丝)" }],
    sea: [
      { name: "食用精盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯花生油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "假蒌叶洗净切细丝与蛋液拌匀", instruction: "假蒌叶摘取嫩叶洗净沥干切成细丝，放入鸡蛋液中加1茶匙盐搅拌均匀备用。", chefTip: "假蒌叶切细丝能最大面积释放芳香挥发油。" },
      { title: "热锅宽油下蛋液两面慢煎", instruction: "铁锅烧热下纯花生油晃锅润透，倒入假蒌鸡蛋液中小火慢煎至底部金黄定型微焦。", chefTip: "油温六成热下蛋液，膨胀起泡香气浓。" },
      { title: "翻面煎至两面焦黄出锅切块", instruction: "颠锅翻面煎另一面1分钟至双面金黄微焦微脆，盛出切成菱形大块装盘！", chefTip: "假蒌具有天然温和的胡椒芳香，与蛋香融合格外清新开胃！" }
    ]
  },
  "鱼香肉丝": {
    subtitle: "川菜经典鱼香味型代表，无鱼却有鱼香之妙，肉丝滑嫩木耳爽脆酸甜微辣",
    flavor: ["酸甜微辣", "咸鲜微香"],
    cookingMethod: "滑油热炒",
    main: [{ name: "精选新鲜猪里脊肉", amount: 300, unit: "克 (顺纹切均匀细肉丝抓浆)" }],
    sec: [
      { name: "鲜脆水发黑木耳丝", amount: 40, unit: "克" },
      { name: "鲜脆冬笋丝/胡萝卜丝", amount: 50, unit: "克" },
      { name: "四川特产正宗泡红辣椒末", amount: 25, unit: "克 (剁细)" },
      { name: "紫皮蒜末与老生姜末", amount: 20, unit: "克" },
      { name: "大葱白碎", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "鱼香黄金比例糖醋生抽碗汁", amountText: "1 碗 (糖:醋:生抽:水淀粉 4:3:2:1)", baseAmount: 1, unit: "份" },
      { name: "纯压榨菜籽油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "肉丝精切与打水上浆抓匀", instruction: "猪里脊顺纹切细丝，加少许生抽料酒盐抓黏，少量多次抓入葱姜水吸饱，加淀粉蛋清封油。", chefTip: "顺切肉丝受热不易断碎，打足水分下锅极其滑嫩！" },
      { title: "滑炒肉丝变白与炒红油泡椒", instruction: "热锅倒油滑散肉丝至八成熟盛出；底油下剁细泡红椒、姜蒜末小火慢炒出红润红油与独特鱼香味。", chefTip: "泡红辣椒与姜蒜大葱是产生“鱼香味”的灵魂来源，切忌用普通辣椒替代！" },
      { title: "下木耳笋丝倒入黄金鱼香汁", instruction: "倒入木耳丝笋丝和肉丝大火翻炒，淋入预调好的鱼香糖醋碗汁大火颠翻收汁亮油出锅！", chefTip: "糖醋黄金比例提前调好，一气呵成颠翻裹匀，酸甜咸鲜微辣层次丰富！" }
    ]
  },
  "猪肉炖酸菜粉条": {
    subtitle: "东北黑土地灵魂炖菜，老坛自然发酵酸菜酸爽解腻，带皮白肉油润土豆粉爽滑",
    flavor: ["酸爽鲜醇", "油润适口"],
    cookingMethod: "农家铁锅慢炖",
    main: [
      { name: "农家自然发酵酸白菜", amount: 350, unit: "克 (洗净手攥干水分切细丝)" },
      { name: "白煮带皮五花肉薄片", amount: 250, unit: "克 (煮至断生切大薄片)" }
    ],
    sec: [
      { name: "东北特产纯土豆粉条", amount: 100, unit: "克 (温水泡软)" },
      { name: "农家冻豆腐块", amount: 100, unit: "克 (挤干水分)" },
      { name: "大葱段与生姜片", amount: 20, unit: "克" },
      { name: "八角大料", amount: 2, unit: "个" }
    ],
    sea: [
      { name: "原煮肉骨汤/纯净水", amountText: "800 ml", baseAmount: 800, unit: "ml" },
      { name: "纯猪油/熟豆油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用精盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" }
    ],
    steps: [
      { title: "酸菜切极细丝反复清洗攥干", instruction: "酸菜帮片成三层切成极细发丝状，冷水洗一遍用双手彻底攥干水分备用。", chefTip: "酸菜一定要切细并攥干水分，这样下锅才能更好吸收猪油肉香！" },
      { title: "猪油大火煸炒酸菜出酸香", instruction: "铁锅下猪油烧热，倒入酸菜丝大火煸炒3分钟挥发多余酸水炒出天然醇酸香，倒入煮肉原汤煮沸。", chefTip: "酸菜必须用猪油充分煸炒，酸油交融才能去除生酸涩感！" },
      { title: "铺入五花肉片粉条慢炖20分钟", instruction: "在酸菜表面整齐码上五花肉片、冻豆腐和土豆粉条，调入盐生抽加盖慢炖20分钟出锅！", chefTip: "粉条吸足了酸菜白肉汤汁变得晶莹透亮，酸菜脆嫩解腻，热气腾腾极暖胃！" }
    ]
  },
  "潮汕牛肉火锅": {
    subtitle: "潮汕美食巅峰信仰，明档鲜切不冷冻，三起三落8秒出水，蘸正宗沙茶酱绝美",
    flavor: ["鲜甜至极", "肉质脆嫩鲜美"],
    cookingMethod: "牛骨清汤三起三落",
    main: [{ name: "当日现宰潮汕黄牛肉(吊龙/匙柄/三花趾薄片)", amount: 350, unit: "克 (斜刀极薄切片)" }],
    sec: [
      { name: "清甜白萝卜大厚块", amount: 200, unit: "克 (汤底炖透)" },
      { name: "鲜甜玉米截段", amount: 150, unit: "克" },
      { name: "鲜芹菜细碎末", amount: 20, unit: "克 (碗底提鲜)" },
      { name: "炸蒜蓉金蒜碎", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "牛大骨慢熬澄清洗澈清汤", amountText: "1500 ml (锅底纯鲜清汤)", baseAmount: 1500, unit: "ml" },
      { name: "潮汕正宗手作沙茶酱", amountText: "3 瓷汤勺 (灵魂蘸料)", baseAmount: 3, unit: "勺" },
      { name: "普宁豆酱", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "牛骨清汤底放入萝卜玉米慢滚", instruction: "火锅中注入澄清洗澈的牛大骨汤，下白萝卜块、玉米段、苦瓜片小火慢煮透出清甜底味。", chefTip: "潮汕火锅讲究“汤清见底”，绝不用浓厚香辣底料遮掩牛肉本身的天然奶香甘甜！" },
      { title: "特制笊篱三起三落8秒烫熟", instruction: "漏勺装入鲜牛肉片沉入微沸汤中抖散烫3秒提起沥汤冷却，再浸入汤中烫3秒提起，最后浸入烫2秒即捞出入碗！", chefTip: "“三提三浸，八秒出锅”！让牛肉纤维舒张充分受热，烫至带少许粉红时最为脆嫩甘甜！" },
      { title: "撒芹菜末舀清汤蘸沙茶酱享用", instruction: "碗底放芹菜末冲入一勺滚烫牛骨汤品原汤，将热烫鲜牛肉蘸满浓郁甜咸沙茶酱与炸蒜蓉大口享用！", chefTip: "沙茶酱与潮汕黄牛肉是天造地设之合，甜润咸鲜肉汁爆棚！" }
    ]
  },
  "老北京炸酱面": {
    subtitle: "四九城老规矩地道炸酱面，肥瘦肉丁小火慢熬油酱分离，八样鲜菜码爽脆利口",
    flavor: ["酱香浓郁", "咸甜醇正面筋道"],
    cookingMethod: "小火熬酱水煮面",
    main: [
      { name: "手工现擀高筋切面", amount: 250, unit: "克 (煮熟过温水保持筋骨)" },
      { name: "三肥七瘦猪前腿肉小丁", amount: 200, unit: "克 (切0.5cm方丁)" }
    ],
    sec: [
      { name: "传统六必居干黄酱", amount: 100, unit: "克 (料酒黄酒化开)" },
      { name: "六必居纯甜面酱", amount: 50, unit: "克 (调和微甜柔和)" },
      { name: "鲜黄瓜丝与水萝卜丝", amount: 80, unit: "克 (八样菜码)" },
      { name: "绿豆芽与焯水青豆", amount: 40, unit: "克" },
      { name: "紫皮大蒜瓣", amount: 4, unit: "瓣 (就面生嚼)" }
    ],
    sea: [
      { name: "纯芝麻香油", amountText: "1 瓷汤勺 (出锅前淋面封亮)", baseAmount: 1, unit: "勺" },
      { name: "纯植物油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "小火煸炒肉丁出油与化酱", instruction: "干黄酱和甜面酱按2:1加少许黄酒化开调匀；锅下热油煸炒五花肉丁至水分收干、肥肉出油透明。", chefTip: "肉一定要切方丁，切忌用肉末！肉丁炸出油脂才有嚼头！" },
      { title: "小火慢熬炸酱至油酱分离", instruction: "倒入调好的酱汁转极小火，用铲子顺向不断慢搅熬制20分钟，直至水分完全蒸发，黑红酱汁表面吐出一层清亮红油。", chefTip: "熬炸酱讲究慢工出细活，必须小火熬到“油酱分离，泛起透亮清油”才算炸透炸透！" },
      { title: "煮手擀面码菜码浇炸酱大挑拌", instruction: "大锅水煮手擀面沥干入大碗，码上一圈青豆黄瓜丝豆芽，舀一大勺滚烫乌黑油润的炸酱，剥两颗紫皮生蒜拌开爽吃！", chefTip: "“就着生蒜吃炸酱面”，酱香浓厚，菜码爽脆，老北京纯正滋味！" }
    ]
  },
  "兰州牛肉拉面": {
    subtitle: "中华第一面，一清二白三红四绿五黄，牛大骨清汤醇厚，手工拉面粗细随心",
    flavor: ["汤清肉烂", "香辣爽滑麦香足"],
    cookingMethod: "原汁拉面烫煮",
    main: [
      { name: "手工特制高筋蓬灰拉面", amount: 250, unit: "克 (下锅沸煮浮起)" },
      { name: "熟牛肉片与牛大骨清原汤", amount: 500, unit: "ml/克 (汤清如镜醇香扑鼻)" }
    ],
    sec: [
      { name: "熟白萝卜薄片", amount: 50, unit: "克 (牛汤煮熟透亮)" },
      { name: "新鲜香菜碎与青蒜苗花", amount: 25, unit: "克 (四绿)" },
      { name: "兰州秘制油泼红辣子", amount: 2, unit: "瓷汤勺 (三红浮油)" }
    ],
    sea: [
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用精盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "拉面大锅沸水滚烫煮熟捞出", instruction: "大锅宽水烧大滚，拉面下锅保持最高火煮1-2分钟浮起捞出沥干入大碗。", chefTip: "煮面锅水要极宽，大火剧烈翻滚面条受热均匀富有嚼劲！" },
      { title: "码熟牛肉片与透亮白萝卜片", instruction: "在拉面表面摆上卤熟的黄牛肉切片，铺上在牛汤中煮至透明软嫩的白萝卜大片。", chefTip: "白萝卜能有效去油腻，与牛肉高汤同煨格外清甜。" },
      { title: "浇入清澈牛骨汤与红油香菜", instruction: "舀入大勺滚烫清亮的牛大骨高汤，撒满香菜蒜苗花，重重浇上两大勺红艳油泼辣子即食！", chefTip: "“一清二白三红四绿五黄”五色交映，喝一口原汤通透甘醇，嚼一口面条麦香四溢！" }
    ]
  },
  "正宗老式锅包肉": {
    subtitle: "哈尔滨百年名菜，金黄酥脆大酸大甜，咬下咔嚓爆汁不回软",
    flavor: ["酸甜爽脆", "焦香酥嫩"],
    cookingMethod: "高温油炸熘汁",
    main: [{ name: "精选新鲜猪里脊肉", amount: 350, unit: "克 (切0.3cm厚大肉片)", substitutes: ["猪外脊肉"] }],
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
      { name: "纯植物油", amountText: "足量 (宽油炸制)", baseAmount: 50, unit: "ml" }
    ],
    steps: [
      { title: "肉片精切与抓拌湿淀粉糊", instruction: "猪里脊顶刀切3mm大片加少许盐料酒抓底味；土豆淀粉加水泡透取底层厚湿淀粉加少许油抓裹肉片。", chefTip: "必须用纯土豆淀粉，非牛顿流体湿糊才能炸出蜂窝大脆壳！" },
      { title: "两次高温大火复炸定型", instruction: "六成油温逐片下肉片炸浮起捞出；八成油温大火复炸40秒至金黄酥脆发出清脆硬声捞出控油。", chefTip: "高温大火复炸是锅包肉酥脆不回软的绝对关键！" },
      { title: "大火烹入米醋白糖汁光速裹匀", instruction: "锅底少许油煸香葱姜胡萝卜丝，倒入米醋白糖汁熬起大泡，下炸好的肉片香菜光速颠翻3秒出锅！", chefTip: "绝不放番茄酱！纯米醋白糖，几秒颠锅出盘，外壳焦脆酸爽！" }
    ]
  },
  "避风塘炒面包蟹": {
    subtitle: "香港避风塘海鲜至尊，金黄蒜酥喷香扑鼻，蟹肉鲜甜饱满膏脂丰厚",
    flavor: ["蒜香浓郁", "外酥里嫩鲜甜"],
    cookingMethod: "炸制金沙炒",
    main: [{ name: "鲜活爱尔兰/英国熟冻大面包蟹", amount: 1, unit: "只 (约800克斩大块拍生粉)", substitutes: ["珍宝蟹", "肉蟹"] }],
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
      { title: "处理蟹块与切口拍粉锁鲜汁", instruction: "面包蟹揭去大蟹盖去腮斩成大块，大螯拍裂纹，蟹肉切口处拍干淀粉封口。", chefTip: "拍干淀粉下油锅瞬间锁住蟹汁与红膏。" },
      { title: "高温油炸蟹块至外壳红亮香脆", instruction: "七成热油温下蟹块大火炸3分钟至外壳金红酥脆捞出控油。", chefTip: "大火油炸让蟹壳酥脆容易剥壳吮吸。" },
      { title: "炒香蒜酥面包糠大火裹满蟹块", instruction: "锅留底油下蒜酥、面包糠、豆豉和辣椒碎小火慢炒成金沙状，倒入蟹块快速颠拌均匀出锅！", chefTip: "蒜酥金沙均匀包裹每一块蟹肉，鲜甜酥香满嘴生津！" }
    ]
  },
  "武汉热干面": {
    subtitle: "大武汉过早第一招牌，掸油碱面筋道弹牙，醇厚芝麻酱浓稠如流沙裹满面身",
    flavor: ["醇香浓稠", "麻香微辣"],
    cookingMethod: "掸水拌面",
    main: [{ name: "武汉特制高筋碱水粗圆面", amount: 200, unit: "克 (水煮八分熟掸油吹凉)" }],
    sec: [
      { name: "正宗纯芝麻酱(小磨香油化开)", amount: 3, unit: "瓷汤勺 (稠如流沙)" },
      { name: "老坛酸辣萝卜干碎", amount: 20, unit: "克" },
      { name: "爽口酸豆角碎", amount: 20, unit: "克" },
      { name: "小香葱花", amount: 15, unit: "克" },
      { name: "生蒜水", amount: 1, unit: "瓷汤勺" }
    ],
    sea: [
      { name: "秘制卤牛肉水/复合生抽", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "红亮油泼辣子", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "镇江老香醋", amountText: "半茶匙 (解腻和味)", baseAmount: 0.5, unit: "茶匙" },
      { name: "现磨白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "传统掸面与沸水回锅烫透", instruction: "碱水面提早煮八成熟捞出拌菜籽油用风扇吹凉成掸面；吃前放入沸水竹笊篱中快速烫热5-8秒沥干入碗。", chefTip: "“掸水不过十秒”，快速烫透热面才能保持面条内部骨力和劲道！" },
      { title: "芝麻酱香油调配成顺滑流沙", instruction: "纯芝麻酱少量多次加入小磨芝麻香油用力朝一个方向化开，调至用勺舀起呈丝滑瀑布流沙状。", chefTip: "切忌用水化麻酱！用纯香油化开才能保持极致浓郁香气且不水散。" },
      { title: "重料浇顶大筷光速挑拌", instruction: "面条趁滚烫浇上大勺芝麻酱、卤水、蒜水、辣萝卜丁、酸豆角、红油和葱花，双手握筷急速自底向上高挑拌匀！", chefTip: "吃热干面讲究“快拌快吃”，趁热让每一根金黄面条包裹厚厚一层浓香芝麻酱！" }
    ]
  }
};

const { AUTHENTIC_EXPANDED_DISHES } = require('./comprehensive_authentic_recipes.js');
const { EXTENDED_AUTHENTIC_DISHES } = require('./extended_authentic_master.js');
const { BATCH2_AUTHENTIC_DISHES } = require('./batch2_recipes.js');
const { NEW_AUTHENTIC_RECIPES } = require('./new_authentic_recipes.js');
const { MEGA_DISHES } = require('./mega_expansion.js');

// 深度合并所有特定菜品
const ALL_SPECIFIC = Object.assign({}, baseSpecific, extraSpecific, AUTHENTIC_EXPANDED_DISHES, EXTENDED_AUTHENTIC_DISHES, BATCH2_AUTHENTIC_DISHES, NEW_AUTHENTIC_RECIPES, MEGA_DISHES);

console.log(`✅ 专属核心特色菜已扩展至: ${Object.keys(ALL_SPECIFIC).length} 道！`);

// 导出供 build_full_database 使用
module.exports = {
  SPECIFIC_DISH_RECIPES: ALL_SPECIFIC
};
