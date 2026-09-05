// scripts/expand_and_rebuild.js
const fs = require('fs');
const path = require('path');

// 扩展全量地道特色菜
const NEW_AUTHENTIC_RECIPES = {
  "柳州正宗螺蛳粉": {
    subtitle: "八桂名吃代表，石螺与猪筒骨熬制醇香酸辣原汤，爽滑米粉配酸笋、油炸腐竹与木耳",
    flavor: ["酸辣鲜爽", "螺香浓郁"],
    cookingMethod: "螺蛳筒骨熬汤烫粉",
    main: [
      { name: "柳州正宗干米粉(粗圆粉)", amount: 150, unit: "克 (温水提前泡软冷水下锅煮透)" },
      { name: "鲜活青壳石螺", amount: 200, unit: "克 (剪尾去泥沙炒香熬汤)" },
      { name: "猪筒骨/猪骨原汤", amount: 500, unit: "ml" }
    ],
    sec: [
      { name: "柳州老坛酸笋丝", amount: 50, unit: "克 (螺蛳粉独特风味灵魂)" },
      { name: "金黄酥脆油炸腐竹大片", amount: 40, unit: "克" },
      { name: "香脆油炸花生米与酸豆角丁", amount: 30, unit: "克" },
      { name: "脆嫩木耳丝与黄花菜段", amount: 25, unit: "克" },
      { name: "鲜嫩空心菜/生菜叶", amount: 50, unit: "克" }
    ],
    sea: [
      { name: "柳州秘制红油辣椒油", amountText: "2 瓷汤勺 (红亮透顶辣而不燥)", baseAmount: 2, unit: "勺" },
      { name: "十三香八角紫苏螺蛳香料", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯米醋/陈醋", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "生抽与食用精盐", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "石螺紫苏香料爆炒入骨汤熬原汤", instruction: "石螺加姜蒜、紫苏叶、八角桂皮大火爆炒出香，倒入猪筒骨高汤大火烧沸转文火慢熬1小时成浓香螺蛳高汤。", chefTip: "“螺蛳熬汤不吃螺”，石螺与筒骨交融出的清鲜是螺蛳粉真正的灵魂！" },
      { title: "米粉沸水烫透捞出入大深碗", instruction: "提前泡软的米粉下沸水锅煮8分钟至软滑Q弹无硬芯，捞出放入大碗，烫青菜垫在粉旁。", chefTip: "米粉煮后过一遍凉水，口感更加顺滑爽韧！" },
      { title: "配菜分格码入浇滚烫螺蛳辣汤", instruction: "在米粉上依次整齐码入炒香酸笋丝、油炸腐竹、花生米、酸豆角、木耳丝，兜头浇入滚沸螺蛳高汤与两勺红亮辣椒油！", chefTip: "酸笋的酸爽、腐竹的酥脆与红油螺汤在舌尖交织，酸辣鲜烫，欲罢不能！" }
    ]
  },

  "桂林正宗米粉": {
    subtitle: "千年三江名吃，爽滑早稻湿米粉，八角草果二十味草药熬制卤水，锅烧酥脆牛肉薄香",
    flavor: ["卤香四溢", "外脆里韧"],
    cookingMethod: "鲜粉焯烫干拌配骨汤",
    main: [
      { name: "桂林特制鲜榨湿米粉", amount: 200, unit: "克 (滚水快速焯烫5秒)" },
      { name: "特制金黄酥脆锅烧肉片", amount: 60, unit: "克 (五花肉炸至起大泡松脆)" },
      { name: "特制五香卤牛肉薄片", amount: 40, unit: "克" }
    ],
    sec: [
      { name: "酸豆角丁与老坛酸笋", amount: 30, unit: "克" },
      { name: "香脆油炸黄豆粒", amount: 20, unit: "克" },
      { name: "鲜葱花与芫荽碎", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "桂林秘制草药香料老卤水", amountText: "2 瓷汤勺 (一滴入魂黑褐浓汁)", baseAmount: 2, unit: "勺" },
      { name: "熟猪油与小磨香油", amountText: "各半瓷汤勺", baseAmount: 0.5, unit: "勺" },
      { name: "桂林特产三花酒与冰糖", amountText: "各 1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "二十味草药秘制熬成透亮老卤水", instruction: "牛骨猪骨加八角、草果、砂仁、罗汉果、三花酒微火慢煨4小时收成黑亮浓香卤水备用。", chefTip: "老卤水是桂林米粉的最高机密，甘香醇厚，挂粉极佳！" },
      { title: "鲜湿米粉笊篱滚水过桥快速捞出", instruction: "湿米粉装入竹蔑笊篱中放入沸水锅轻轻抖动5秒，即刻捞出沥干甩干水分扣入碗中。", chefTip: "“过水不过十秒”，鲜湿米粉不可久烫，保持米香与最佳弹爽！" },
      { title: "淋热猪油老卤铺满锅烧牛肉干拌", instruction: "米粉淋一勺熟猪油和两勺秘制温热老卤水，顶层密铺金黄酥脆锅烧肉与卤牛肉薄片，自选酸笋酸豆角炸黄豆拌匀干捞食用！", chefTip: "先干拌享受浓郁卤香与锅烧咔嚓咔嚓的极致酥脆，吃完大半再喝一碗清亮筒骨汤收尾！" }
    ]
  },

  "重庆麻辣小面": {
    subtitle: "山城早晨的沸腾呼吸，细碱面条筋道爽滑，油泼辣子红亮焦香，青花椒油麻透舌尖",
    flavor: ["麻辣鲜香", "油亮喷香"],
    cookingMethod: "宽水下细碱面麻辣打底",
    main: [
      { name: "重庆鲜切水叶子细碱面", amount: 150, unit: "克" },
      { name: "鲜嫩青翠豌豆尖/空心菜", amount: 50, unit: "克" }
    ],
    sec: [
      { name: "熟油辣椒面碎", amount: 2, unit: "瓷汤勺 (重庆本地二荆条与朝天椒合制)" },
      { name: "四川汉源大红袍花椒粉与花椒油", amount: 1, unit: "茶匙" },
      { name: "涪陵老坛碎米榨菜丁", amount: 15, unit: "克" },
      { name: "油酥脆黄豆与花生碎", amount: 15, unit: "克" },
      { name: "猪板油熬制熟猪油", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "特级生抽与老抽", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "大蒜汁与姜水", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "四川保宁香醋", amountText: "半茶匙 (提鲜微酸)", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯骨汤/面汤", amountText: "150 ml", baseAmount: 150, unit: "ml" }
    ],
    steps: [
      { title: "十二种经典佐料入碗打好麻辣底", instruction: "在面碗中依次加入熟猪油、生抽、蒜水、姜水、花椒油、花椒粉、熟油辣椒、保宁醋、碎米榨菜、葱花，冲入小半碗滚沸骨汤化开。", chefTip: "“宽汤重油打底料”，重庆小面讲究一碗调料半碗红油，复合香气扑鼻！" },
      { title: "大锅沸水下细碱面中火翻滚", instruction: "深锅宽水大火烧沸，抖散下入细碱面，用长竹筷挑散煮1分半钟面条断生微带筋骨，下入豌豆尖同烫10秒关火。", chefTip: "水必须大、沸腾要猛，面条下锅不糊汤，捞出干爽弹牙！" },
      { title: "挑面入红油底料撒葱花脆黄豆", instruction: "快速挑面入碗，豌豆尖覆在面顶，撒满香脆黄豆与葱花，双手执筷由碗底向上翻拌均匀开吃！", chefTip: "根根红亮裹油，麻辣直冲脑门，酣畅淋漓！" }
    ]
  },

  "四川担担面": {
    subtitle: "川味面食百年非遗，手工细面条韧滑，芽菜肉臊酥香微焦，麻酱红油复合味浓稠挂面",
    flavor: ["酥香咸辣", "微麻微酸"],
    cookingMethod: "炒酥芽菜肉臊调汁拌面",
    main: [
      { name: "手工鲜切细面条", amount: 150, unit: "克" },
      { name: "猪前腿肥三瘦七肉末", amount: 80, unit: "克 (细剁成小肉粒)" }
    ],
    sec: [
      { name: "正宗四川宜宾碎米芽菜", amount: 30, unit: "克 (肉臊灵魂)" },
      { name: "小香葱碎与炒熟花生碎", amount: 20, unit: "克" },
      { name: "熟菜籽油与熟猪油", amount: 15, unit: "ml" }
    ],
    sea: [
      { name: "四川纯正红油辣椒", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "纯芝麻酱", amountText: "1 瓷汤勺 (化开浓郁挂汁)", baseAmount: 1, unit: "勺" },
      { name: "花椒油与生抽", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "保宁醋与白糖", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "芽菜肉臊慢火干煸至金黄酥香", instruction: "锅下菜油下肉末煸炒散开发白逼出油脂，下少许料酒老抽上色，倒入宜宾芽菜末中小火慢煸至肉粒金黄焦香盛出（此即脆哨肉臊）。", chefTip: "“肉臊必须干香化渣”，芽菜的清香渗入肉粒，久嚼回甜！" },
      { title: "碗底调配麻酱红油复合醇汁", instruction: "碗底加入生抽、芝麻酱、红油辣椒、花椒油、蒜水、保宁醋和少许白糖搅拌乳化成稠亮味汁。", chefTip: "麻酱能增强红油与酱油的挂壁能力，挑面时汤汁牢牢裹住面条！" },
      { title: "煮熟细面捞入碗中铺满芽菜肉臊", instruction: "沸水煮熟细面条捞出沥水置于味汁上，上面厚厚铺上两大勺炒好的芽菜肉臊、熟花生碎与葱花！", chefTip: "吃前充分拌匀，面条顺滑细腻，肉臊酥脆颗粒在口中爆发！" }
    ]
  },

  "广式水晶虾饺皇": {
    subtitle: "粤式茶楼一盅两件早茶之王，澄粉皮晶莹剔透薄如蝉翼，整颗整粒鲜虾仁脆爽弹牙爆汁",
    flavor: ["鲜甜弹牙", "皮薄晶亮"],
    cookingMethod: "开水烫澄面包捏旺火蒸",
    main: [
      { name: "鲜活大青虾仁", amount: 250, unit: "克 (挑去虾线，2/3整粒，1/3打虾胶)" },
      { name: "优质小麦澄粉(澄面)", amount: 100, unit: "克" },
      { name: "优质木薯淀粉/生粉", amount: 30, unit: "克" }
    ],
    sec: [
      { name: "熟猪肥肉丁", amount: 30, unit: "克 (蒸熟化油多汁滋润)" },
      { name: "清脆鲜冬笋小丁", amount: 30, unit: "克 (焯水吸干)" },
      { name: "滚烫开水", amount: 130, unit: "ml (烫熟澄粉)" }
    ],
    sea: [
      { name: "食用精盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白糖与白胡椒粉", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "小磨芝麻香油", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯熟猪油", amountText: "10 克 (和面透明柔韧)", baseAmount: 10, unit: "克" }
    ],
    steps: [
      { title: "虾仁拌冬笋肥膘抓打上劲成馅", instruction: "整虾仁用厨房纸吸干水分，加盐、白胡椒、糖顺时针抓至起胶，加入冬笋丁和肥猪肉丁拌匀冷藏半小时。", chefTip: "“虾仁吸干摔打上劲”，馅料弹脆多汁，肥肉受热融化滋润绝不柴！" },
      { title: "开水烫澄面加熟猪油揉匀压薄皮", instruction: "澄粉与木薯粉混合，一口气冲入滚开沸水快速搅成熟面团，加入熟猪油揉至光滑无干粉，搓条切剂用刀面压出透亮薄圆皮。", chefTip: "必须用100℃刚滚开的水烫面，澄粉糊化彻底，蒸出才通透如水晶！" },
      { title: "包入整颗虾仁折出蜘蛛肚褶大火蒸5分钟", instruction: "包入整颗虾仁馅捏出10-12道规整折褶成弯月蜘蛛肚形，入笼旺火足汽大火蒸5分钟立即出笼！", chefTip: "蒸熟后透过皮薄如纸的外皮清晰可见内部整颗粉红虾仁，咬开鲜汁四溢！" }
    ]
  },

  "上海鲜肉小笼汤包": {
    subtitle: "江南非遗经典名点，薄皮多褶小巧玲珑，精肉裹猪皮冻，提起来像小灯笼，咬一小口满嘴滚烫鲜汤",
    flavor: ["皮薄多汁", "汤鲜肉嫩"],
    cookingMethod: "手工包捏大火急汽蒸",
    main: [
      { name: "精选新鲜前腿夹心肉末", amount: 250, unit: "克 (肥三瘦七)" },
      { name: "自制传统猪皮冻小丁", amount: 150, unit: "克 (灌汤鲜美关键)" },
      { name: "中筋优质面粉", amount: 200, unit: "克 (冷水和面紧致硬面)" }
    ],
    sec: [
      { name: "老生姜大葱葱姜水", amount: 40, unit: "ml" },
      { name: "冷水 (和面用)", amount: 100, unit: "ml" },
      { name: "镇江香醋与生姜细丝 (蘸料灵魂)", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "特级生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "绍兴黄酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白糖与白胡椒粉", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用精盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "新鲜肉馅加葱姜水打上劲拌入皮冻丁", instruction: "肉末加盐、生抽、黄酒、糖和葱姜水顺时针用力搅打至起粘胶，拌入切碎的冷藏凝固皮冻丁拌匀密封冷藏。", chefTip: "皮冻受热完全融化成鲜美热汤，皮冻与肉馅比例约1:1.5汤汁最丰沛！" },
      { title: "冷水硬面擀出中间厚边缘薄圆皮", instruction: "面粉加冷水揉成光滑偏硬的面团饧透，下小剂子擀成直径约7cm、边缘极薄如纸的圆面皮。", chefTip: "冷水面皮紧致抗拉伸，包入丰富汤汁高温蒸时不易破底破皮！" },
      { title: "包入大馅捏出18道紧密细褶急汽蒸7分钟", instruction: "包入肉馅皮冻，手指均匀旋转捏出18个以上密实褶子封顶，放入垫胡萝卜片蒸笼，大火沸水足汽蒸7分钟出笼！", chefTip: "“轻轻提，慢慢移，先开窗，后喝汤”，满口浓香！" }
    ]
  },

  "原壳清蒸大鲍鱼": {
    subtitle: "沿海国宴级水产，九孔鲜鲍肉质肥厚Q弹，内侧划细密麦穗花刀，葱姜丝炝滚油淋蒸鱼豉油",
    flavor: ["原汁鲜甜", "软嫩弹牙"],
    cookingMethod: "原壳旺火足汽蒸",
    main: [
      { name: "鲜活鲜大连九孔鲍鱼", amount: 6, unit: "只 (刷洗干净鲍壳，鲍肉去内脏牙齿洗净)" }
    ],
    sec: [
      { name: "新鲜大葱白与红椒极细丝", amount: 20, unit: "克 (浸冷水自然卷曲)" },
      { name: "老生姜丝", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "李锦记特级蒸鱼豉油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "压榨纯花生油", amountText: "2 瓷汤勺 (热油泼葱丝)", baseAmount: 2, unit: "勺" },
      { name: "绍兴黄酒", amountText: "1 瓷汤勺 (焯水去腥)", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "鲜鲍刷净壳肉分离去内脏划麦穗花刀", instruction: "用小勺将鲍肉由壳边缘撬出，剔除黑色内脏和硬嘴牙齿用盐抓洗干净；肉面切十字花刀，放回刷净的鲍壳内摆盘。", chefTip: "“花刀深三分之二”，受热自然卷曲如同盛开花朵，受热均匀熟透且易吸汁！" },
      { title: "鲍鱼摆盘淋少许黄酒旺火足汽蒸5分钟", instruction: "鲍鱼表面码姜丝，蒸锅大火烧沸上足汽，入蒸锅大火蒸整整5分钟关火揭盖，拣去残姜丝倒掉蒸出的多余汤水。", chefTip: "鲍鱼最忌蒸老！鲜活大鲍5分钟刚断生最是柔嫩弹牙，过火即发韧咬不动！" },
      { title: "码入卷曲葱姜红椒丝泼滚烫热油激香", instruction: "在每个鲍鱼顶端放一小撮浸卷的葱姜红椒丝，沿盘边淋入蒸鱼豉油；锅烧热油至冒微烟，用小勺高高泼在葱丝上激发出扑鼻香气！", chefTip: "滋啦作响，葱香四溢，鲍肉鲜嫩紧致，回味清甜！" }
    ]
  },

  "避风塘炒波士顿龙虾": {
    subtitle: "香港铜锣湾避风塘传奇名菜，鲜活波龙斩大块锁油炸脆，金黄蒜酥豆豉面包糠烘炒喷香扑鼻",
    flavor: ["焦香浓烈", "虾肉清甜弹嫩"],
    cookingMethod: "拍粉油炸蒜酥烘炒",
    main: [
      { name: "鲜活波士顿大龙虾", amount: 1, unit: "只 (约700克，放尿斩规整大块拍薄淀粉)" }
    ],
    sec: [
      { name: "紫皮大蒜剁碎洗去粘液蒜蓉", amount: 80, unit: "克 (小火慢炸成金黄蒜酥)" },
      { name: "优质金黄烘焙面包糠", amount: 50, unit: "克" },
      { name: "阳江原酿黑豆豉碎", amount: 15, unit: "克" },
      { name: "干红辣椒小段与小香葱段", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "生抽与特级蚝油", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白糖与白胡椒粉", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "炸油", amountText: "400 ml (实际耗油微量)", baseAmount: 30, unit: "ml" }
    ],
    steps: [
      { title: "金蒜蓉与面包糠小火慢炸至金黄焦脆", instruction: "蒜蓉清水冲洗挤干（防苦），冷油下锅慢火炸至微黄酥脆捞出沥油，再下面包糠、豆豉和干辣椒段炒至通体金黄焦香倒出备用。", chefTip: "蒜蓉洗去黏液炸出的金蒜酥不焦不苦，颗颗如同黄金沙！" },
      { title: "龙虾斩块刀口拍生粉入七成热油猛炸锁汁", instruction: "龙虾块刀口处拍上薄生粉，入七成热油锅炸40秒至虾壳通红、虾肉紧实微卷立刻捞出沥油。", chefTip: "高温快炸瞬间锁住龙虾内部甘甜原汁，虾肉外脆内嫩！" },
      { title: "热锅翻炒金蒜酥龙虾颠锅调味出锅", instruction: "锅留底油下葱段爆香，倒入炸好的龙虾块和满满一大盘金蒜面包糠，调入生抽糖胡椒粉，大火暴风颠锅翻炒15秒让蒜酥紧紧挂满虾壳起锅装盘！", chefTip: "金黄如山，蒜香漫溢，虾肉雪白丰腴，壳脆肉嫩！" }
    ]
  },

  "清蒸鲜活石斑鱼": {
    subtitle: "粤菜海鲜第一品，鲜活石斑鱼肉如白玉瓣瓣起蒜瓣肉，葱姜铺底垫高，极简蒸鱼豉油热油炝香",
    flavor: ["极其鲜嫩", "蒜瓣肉清甜"],
    cookingMethod: "筷子架起大火足汽快蒸",
    main: [
      { name: "鲜活深海老虎斑/青石斑鱼", amount: 1, unit: "条 (约600克，去鳃内脏洗净，背部两边各划一刀)" }
    ],
    sec: [
      { name: "小香葱段与生姜大厚片", amount: 40, unit: "克 (盘底铺垫架高鱼身)" },
      { name: "大葱白红椒切极细丝", amount: 25, unit: "克 (冰水浸泡卷曲)" }
    ],
    sea: [
      { name: "李锦记特级蒸鱼豉油", amountText: "2.5 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "压榨纯花生油", amountText: "2.5 瓷汤勺 (热油激发出葱香)", baseAmount: 2.5, unit: "勺" }
    ],
    steps: [
      { title: "鱼身划刀筷子垫底保持蒸汽对流", instruction: "石斑鱼背部肉厚处两侧各划一深刀便于受热；盘底横架两根长竹筷（或厚葱段），将鱼架空摆在上面，鱼身抹极薄花生油。", chefTip: "“鱼身架空大对流”，蒸汽从鱼底毫无阻碍穿透，上下熟度完全一致，肉质鲜嫩不泡死！" },
      { title: "水沸足汽大火蒸整整7分钟倒盘水", instruction: "蒸锅水大火烧至狂沸上大汽，入鱼盘大火蒸7分钟立即关火虚蒸1分钟；取出抽去盘底筷子，倒尽盘中所有蒸鱼腥水！", chefTip: "“盘底蒸水必须倒尽”，蒸出的腥水倒净后才无杂味，只留纯鱼鲜！" },
      { title: "铺满葱姜红椒丝泼滚烫花生油豉油", instruction: "在鱼身铺满葱姜丝与红椒丝，将热至冒烟的花生油浇在葱丝上激起浓郁葱油香，最后沿盘边缘淋入温热蒸鱼豉油即可！", chefTip: "豉油沿盘边淋入不破坏鱼肉本身的甘鲜，鱼肉如蒜瓣般脱落，鲜美绝伦！" }
    ]
  },

  "湛江炭烤肥嫩生蚝": {
    subtitle: "南粤海鲜夜市头牌，湛江原产大生蚝原壳炭火烤至沸腾，金黄蒜蓉蒜油酱浓郁流淌，蚝肉爆浆多汁",
    flavor: ["焦香鲜嫩", "蒜香爆汁"],
    cookingMethod: "原壳炭火/烤箱烤制",
    main: [
      { name: "湛江鲜活新鲜带壳大生蚝", amount: 8, unit: "只 (洗净外壳泥沙开壳)" }
    ],
    sec: [
      { name: "紫皮大蒜剁碎生熟金银蒜泥", amount: 60, unit: "克 (一半炸金黄一半留鲜生)" },
      { name: "新鲜红小米辣小碎圈", amount: 15, unit: "克" },
      { name: "鲜小香葱碎", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "特级生抽与特级蚝油", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白糖与食用精盐", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "压榨纯花生油", amountText: "3 瓷汤勺 (熬制金银蒜蓉酱)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "熬制金银金黄蒜蓉秘制烧烤酱", instruction: "热油下一半蒜末和小米辣小火慢炸至金黄焦香蒜油漫溢，关火倒入生蒜末、生抽、蚝油、糖盐搅拌均匀成金银蒜蓉酱。", chefTip: "“生熟金银蒜复合”，炸蒜提供焦香，生蒜提供高亢辛甜，绝配海鲜！" },
      { title: "生蚝开壳洗净摆上烤网或烤盘", instruction: "生蚝撬开去平壳洗去碎壳渣，原壳盛着饱满蚝肉摆在烤网（或烤箱220℃烤盘上），每个蚝肉上铺一大勺金银蒜蓉酱。", chefTip: "原壳锁住生蚝内部的天然海水与原汁，烘烤时在壳内自然滚沸！" },
      { title: "大火炭烤5分钟至汤汁沸腾撒葱花出炉", instruction: "烤至蚝壳内汤汁咕嘟咕嘟滚沸冒大泡、蚝肉边缘微卷紧致（约5分钟），撒上葱花立刻夹出趁热享用！", chefTip: "一整口滑入嘴中，蒜香焦脆、蚝肉甘美爆浆，汤汁鲜美到一滴不剩！" }
    ]
  }
};

// 导出
module.exports = {
  NEW_AUTHENTIC_RECIPES
};
console.log('✅ 新增特色大菜与经典面食海鲜配方库生成成功！');
