// scripts/data_120_xibei.js
// 大西北丝路塞外风味 22道经典名菜与特色家常小炒 (rec_prov_053 ~ rec_prov_074)
// 涵盖新疆、甘肃、宁夏、青海
module.exports = [
  {
    id: "rec_prov_053",
    name: "新疆炭火红柳生烤羊肉串",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 380,
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新疆阿勒泰大尾羊后腿肉(三瘦两肥)", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "新鲜红柳木削签(去皮散发清香)", amount: 8, unit: "根", type: "main", isCore: true },
      { name: "洋葱碎(皮芽子榨汁腌制)", amount: 100, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "新疆托克逊孜然原粒研磨粉", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "新疆安集海特级粗辣椒面", baseAmount: 12, unit: "g", amountText: "12g", isPantryStaple: true },
      { name: "天然湖盐或食用海盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "矿泉水喷壶", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "大块分切洋葱汁原汁抓腌",
        instruction: "羊肉切成麻将大小厚块，洋葱切碎榨汁与少许盐、清水抓匀腌制20分钟，保留羊肉天然鲜美甘甜。",
        timerSeconds: 1200,
        chefTip: "新疆正统烤肉只用洋葱汁与盐打底，切忌放料酒酱油破坏纯正羊肉鲜味。"
      },
      {
        stepIndex: 2,
        title: "新鲜红柳枝穿串肥瘦相间",
        instruction: "将羊肉块以一肥两瘦间隔紧实穿在粗红柳木枝上，肥油在炭火烘烤时渗出滋养瘦肉。",
        timerSeconds: 300,
        chefTip: "新鲜红柳枝受热后分泌天然植物汁液，去膻赋香，让肉质带有自然木香。"
      },
      {
        stepIndex: 3,
        title: "旺炭生烤翻面撒粗盐孜然辣椒",
        instruction: "无烟木炭烧至白灰旺火，架上肉串不停翻转，烤至肥油滋滋滴落表面微焦，喷少许盐水，撒上粗盐、粗辣椒面与现磨孜然粉烤出浓香。",
        timerSeconds: 720,
        chefTip: "大火快速锁住肉汁，外焦里嫩咬破爆汁，香气回荡唇齿之间。"
      }
    ],
    tips: "丝绸之路最具标志性的旷野珍馐！阿勒泰天然草原散养羊肉毫无膻味，新鲜红柳树枝遇热溢出清香，外焦里嫩，汁水丰沛，孜然香浓。",
    tags: ["新疆", "西北菜", "红柳烤肉", "羊肉串", "炭火生烤", "塞外风味"]
  },
  {
    id: "rec_prov_054",
    name: "沙湾正宗爆炒大盘土鸡配皮带面",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 450,
    prepTimeMinutes: 25,
    cookTimeMinutes: 30,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜三黄三黄土公鸡(剁方块)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "沙湾红安集海干线椒(剪段水泡)", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "沙土黄心大土豆滚刀厚块", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "青红尖椒大片与洋葱块", amount: 100, unit: "g", type: "secondary", isCore: false },
      { name: "手工扯制宽厚白面皮带面", amount: 200, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "纯白白糖(炒糖色用)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "大蒜瓣与老姜片", baseAmount: 40, unit: "g", amountText: "40g", isPantryStaple: true },
      { name: "花椒粒、八角、草果、桂皮", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "新疆乌苏啤酒(半罐去腥增醇)", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: false },
      { name: "生抽老抽与食盐", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "糖色煸炒鸡块红亮出油",
        instruction: "热锅倒菜籽油下白糖，中小火炒出枣红色微泡，迅速倒入控干水分的生鸡块大火爆炒，使鸡肉均匀裹色，煸干水分出鸡油。",
        timerSeconds: 300,
        chefTip: "生炒鸡块比焯水更香更弹牙，鸡油与糖色交织出浓油亮色。"
      },
      {
        stepIndex: 2,
        title: "下辣皮子花椒香料烹入乌苏啤酒",
        instruction: "下入姜蒜片、八角草果、花椒粒与泡好的安集海辣皮子大火爆出浓郁香辣，倒入半罐乌苏啤酒与热水没过鸡块，调入生抽老抽与盐，焖煮15分钟。",
        timerSeconds: 900,
        chefTip: "安集海干线椒辣而不燥、皮厚肉醇，加啤酒能快速软化鸡肉增添麦香。"
      },
      {
        stepIndex: 3,
        title: "下土豆软糯大火收浓汁拌皮带面",
        instruction: "放入黄心土豆块加盖中火煨12分钟至土豆绵沙，下入青红椒片与洋葱翻炒断生收浓汤汁。将刚煮好的手工皮带面垫底或拌入大盘中裹汁享用。",
        timerSeconds: 720,
        chefTip: "土豆煮到边缘微微沙化融入汤中，皮带面吸饱辣油酱汁是灵魂高潮。"
      }
    ],
    tips: "新疆公路走廊诞生的国民传奇硬菜！鸡肉鲜嫩多汁麻辣爽口，黄心土豆绵软沙甜，现扯皮带面宽如腰带筋道爽滑，裹满红油辣汁停不下口。",
    tags: ["新疆", "西北菜", "大盘鸡", "皮带面", "安集海辣皮子", "沙湾名吃"]
  },
  {
    id: "rec_prov_055",
    name: "新疆传统白水煮手抓羊肉",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 360,
    prepTimeMinutes: 15,
    cookTimeMinutes: 60,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新疆草原本地产带肋绵羊肉条", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "新疆洋葱(皮芽子)厚片", amount: 100, unit: "g", type: "secondary", isCore: true },
      { name: "带皮整大蒜瓣捣蒜泥", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "鲜红小米辣与香菜碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "原产天然大粒海盐或青盐", baseAmount: 12, unit: "g", amountText: "12g", isPantryStaple: true },
      { name: "新疆特级细孜然粉", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "现磨纯黑胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "原汤与纯香醋调蘸水", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "冷水慢煮彻底撇净浮沫",
        instruction: "带肋羊肉斩成长条大块，冷水下大锅，大火慢慢烧开，随煮随用勺子反复撇除深色血沫，直至汤面完全清澈。",
        timerSeconds: 600,
        chefTip: "好羊肉无需焯水倒水，慢撇浮沫保留最纯净羊肉原汁原汤。"
      },
      {
        stepIndex: 2,
        title: "只投洋葱微火慢煨熟透",
        instruction: "汤清后投入大块洋葱(皮芽子)，不放其他八角桂皮，加盖微火慢煮45分钟至筷子可轻松穿透肉身。",
        timerSeconds: 2700,
        chefTip: "大羹不和！顶级草原羊肉只需洋葱去腥提甜，调料过多反夺其天赐甘美。"
      },
      {
        stepIndex: 3,
        title: "临出锅撒大粒青盐调汁手撕享用",
        instruction: "出锅前10分钟加入大粒青盐煮透入味。捞出趁热手撕大块，配生洋葱丝、孜然干料或蒜泥香醋原汤汁蘸食，原汤撒香菜痛饮。",
        timerSeconds: 600,
        chefTip: "手抓大块撕着吃，肥瘦相间汁水丰沛，肉香扑鼻回甘明显。"
      }
    ],
    tips: "大繁至简的塞外游牧本色！只凭一锅清水、一把青盐、数片洋葱，煮出羊肉的原汁原味，肥而不膻，肉嫩多汁，汤清见底回味无尽。",
    tags: ["新疆", "西北菜", "手抓羊肉", "原汁原味", "皮芽子", "塞外至味"]
  },
  {
    id: "rec_prov_056",
    name: "乌鲁木齐传统馕坑肉烤包子",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 320,
    prepTimeMinutes: 30,
    cookTimeMinutes: 20,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜肥羊尾油与后腿羊肉(切小丁)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新疆白皮洋葱(皮芽子切碎丁)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "死面擀制四方薄面皮(四边薄中间厚)", amount: 10, unit: "张", type: "main", isCore: true },
      { name: "生鸡蛋黄液(刷表面上色)", amount: 1, unit: "个", type: "secondary", isCore: false },
      { name: "熟白芝麻粒与黑芝麻粒", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "托克逊纯正孜然粉", baseAmount: 12, unit: "g", amountText: "12g", isPantryStaple: true },
      { name: "现磨黑胡椒碎", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "清凉盐水(刷底部黏贴用)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肉丁与洋葱丁抓拌调馅",
        instruction: "羊肉与羊尾油切成0.5厘米见方小丁，加入大量洋葱碎、孜然粉、黑胡椒粉、盐与少许清水抓匀上劲，冷藏腌制15分钟。",
        timerSeconds: 900,
        chefTip: "羊尾油是爆汁的关键，洋葱与羊肉比例约为1:1.5，烤制时洋葱融化出甜汁。"
      },
      {
        stepIndex: 2,
        title: "四方折叠包裹方正包子生坯",
        instruction: "取擀好的薄面皮放上饱满肉馅，四边向中间对折叠成长方形枕头状压实封口。表面刷薄薄一层蛋黄液，撒黑白芝麻。",
        timerSeconds: 400,
        chefTip: "封口一定要压实，防止烘烤过程中丰腴羊肉汤汁漏出。"
      },
      {
        stepIndex: 3,
        title: "高温烘烤外皮金黄酥脆内部爆汁",
        instruction: "烤箱预热至220度(或传统馕坑)，烤盘铺油纸放入包子生坯，烤制18-20分钟至表面金黄油润、外皮起酥鼓胀即可出炉。",
        timerSeconds: 1200,
        chefTip: "刚出炉极其烫嘴，外壳酥脆如饼干，咬开瞬间滚烫鲜甜羊肉汁倾泻而出。"
      }
    ],
    tips: "乌鲁木齐大巴扎最火爆的美食招牌！死面皮薄而脆韧，内馅羊肉肥瘦相间，洋葱化水与羊尾油融为一汪滚烫鲜美浓汁，酥香四溢。",
    tags: ["新疆", "西北菜", "烤包子", "皮芽子羊肉", "酥脆爆汁", "传统小吃"]
  },
  {
    id: "rec_prov_057",
    name: "新疆传统手撕冷浸椒麻鸡",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 240,
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "散养当年紧实三黄童子鸡(整只)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩青花椒与汉源红花椒", amount: 25, unit: "g", type: "main", isCore: true },
      { name: "新疆白皮洋葱(皮芽子切细丝)", amount: 100, unit: "g", type: "secondary", isCore: true },
      { name: "大葱白斜切马蹄段", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "香菜小段与熟芝麻", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯菜籽油(熬椒麻油)", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "鸡汤原汁加食盐白糖调料汁", baseAmount: 100, unit: "ml", amountText: "100ml", isPantryStaple: true },
      { name: "优质生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "老姜葱结料酒(煮鸡用)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "慢火浸熟土鸡冰水过凉手撕条",
        instruction: "整鸡入开水锅加姜葱料酒，小火慢浸慢煮25分钟至熟透，捞出立即投入冰水冰镇紧肤，沥干后用手撕成均匀鸡肉长条。",
        timerSeconds: 1500,
        chefTip: "冰水激凉使鸡皮紧致爽脆，鸡肉手撕比刀切更能吸附椒麻料汁。"
      },
      {
        stepIndex: 2,
        title: "现炸青红花椒熬制浓香椒麻油",
        instruction: "青红花椒用温水浸湿沥干，小火在热菜籽油中慢炸出浓烈麻香，关火倒出与剁细的花椒碎混合成椒麻红油。",
        timerSeconds: 300,
        chefTip: "青花椒带来清爽跳跃的麻感，红花椒带来深沉醇香，双椒合璧直透舌尖。"
      },
      {
        stepIndex: 3,
        title: "调入原汤大盘翻拌浸润出味",
        instruction: "将手撕鸡肉、皮芽子丝、大葱段置于大盆中，淋入椒麻油、鸡汤调味汁、生抽与芝麻，戴手套抓拌均匀，静置5分钟装盘。",
        timerSeconds: 300,
        chefTip: "皮芽子生吃微甜微辛，与鸡皮鸡肉在椒麻汤汁中浸润，麻劲过瘾爽利。"
      }
    ],
    tips: "新疆夏天餐桌上不可或缺的过瘾凉菜！鸡皮清脆弹牙，鸡肉紧致细腻，鲜花椒油的清麻辛香如微电流刺激舌苔，麻而不苦，越吃越停不下。",
    tags: ["新疆", "西北菜", "椒麻鸡", "手撕鸡", "青花椒", "开胃过瘾"]
  },
  {
    id: "rec_prov_058",
    name: "新疆传统羊排手抓饭",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "焖",
    calories: 460,
    prepTimeMinutes: 25,
    cookTimeMinutes: 40,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜肥美带骨羊肋排块", amount: 450, unit: "g", type: "main", isCore: true },
      { name: "新疆特产黄胡萝卜与红胡萝卜(切粗条)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新疆皮芽子(白洋葱切粗丝)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "长粒香米(温水提前浸泡30分钟)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "吐鲁番无核红葡萄干", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "托克逊孜然整粒", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "精制细盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "开水(焖饭用)", baseAmount: 350, unit: "ml", amountText: "350ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热油干煸羊排吐油金黄",
        instruction: "铁锅烧热下菜籽油，下入羊排块大火翻炒煸出肥油，肉块表面呈金黄微焦，下洋葱丝继续煸炒至软化焦黄。",
        timerSeconds: 360,
        chefTip: "羊肉必须煸出自身的油脂，洋葱炒到微黄产生焦糖甜香。"
      },
      {
        stepIndex: 2,
        title: "下双色胡萝卜条翻炒加水煮软",
        instruction: "倒入红黄胡萝卜条大火翻炒至发软变透，加入盐与孜然粒，倒入开水没过食材，加盖中小火焖煮10分钟煮出甘甜汤底。",
        timerSeconds: 600,
        chefTip: "黄胡萝卜是正宗抓饭不可替代的灵魂，含糖高且久煮不烂软糯甘甜。"
      },
      {
        stepIndex: 3,
        title: "大米平铺焖锅打气孔慢火焖熟",
        instruction: "将泡好的大米沥干均匀平铺在肉菜上方，用筷子扎若干出气孔，撒葡萄干，加盖小火焖25分钟，开盖大火将米饭与肉菜充分翻拌均匀。",
        timerSeconds: 1500,
        chefTip: "米粒平铺在上方借由菜汤蒸汽焖熟，粒粒油亮晶莹，绝不粘糊成坨。"
      }
    ],
    tips: "维吾尔族待客最高礼遇的经典主食！金黄油亮，米粒粒粒分明吸饱羊肉香气与胡萝卜的甘甜，羊排肉烂骨酥，葡萄干酸甜解腻，百吃不厌。",
    tags: ["新疆", "西北菜", "手抓饭", "羊排手抓饭", "黄胡萝卜", "经典主食"]
  },
  {
    id: "rec_prov_059",
    name: "兰州传统白条手抓羊肉配蒜汁",
    region: "甘肃",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 350,
    prepTimeMinutes: 15,
    cookTimeMinutes: 50,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "甘肃临夏东乡羔羊大肋条排", amount: 750, unit: "g", type: "main", isCore: true },
      { name: "紫皮大蒜瓣(拍蒜泥调汁)", amount: 35, unit: "g", type: "secondary", isCore: true },
      { name: "老生姜片与大葱白段", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "香菜末与鲜红辣椒面", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "粗粒食用海盐", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "草果1枚与花椒数粒(极简料包)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "优质香醋与原汤", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯正兰州油泼辣子", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "整扇肋排冷水慢滚焯清浮沫",
        instruction: "东乡羊肋排斩成条形大块，入大铁锅注足冷水，大火烧开，反复打捞撇尽油沫浮渣，汤水转为乳清色。",
        timerSeconds: 480,
        chefTip: "甘肃白条手抓讲究原色纯白，汤清肉白，火候由大转微。"
      },
      {
        stepIndex: 2,
        title: "投入极简香料微火煨至软脱",
        instruction: "投入姜片、葱段与仅有的一枚草果、数粒花椒，加盖微火慢煨45分钟，羊肉至九成熟时加入粗盐继续煨10分钟入味。",
        timerSeconds: 3300,
        chefTip: "草果去油腻添幽香，后下盐能让羊肉始终保持松软鲜嫩多汁。"
      },
      {
        stepIndex: 3,
        title: "趁热捞出斩块配秘制蒜泥醋汁",
        instruction: "趁热捞出沥水，案板上刀起刀落斩成整齐肉条装盘。蒜泥加入香醋、少许原汤与油泼辣子调成蘸汁，蘸肉趁热抓食。",
        timerSeconds: 180,
        chefTip: "兰州俗语：吃羊肉不吃蒜，营养少一半。酸辣蒜汁一蘸，解腻提鲜绝美。"
      }
    ],
    tips: "甘肃丝路上的传世极味！选用享誉全国的东乡贡羊，肉质细嫩毫无膻味，色泽雪白油润，热吃软滑化渣，冷吃筋道爽口，蒜醋汁更添画龙点睛之妙。",
    tags: ["甘肃", "西北菜", "兰州手抓", "白条手抓", "东乡羔羊", "蒜泥醋汁"]
  },
  {
    id: "rec_prov_060",
    name: "甘肃靖远正宗黄焖羊肉",
    region: "甘肃",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "焖",
    calories: 400,
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "甘肃靖远哈思山散养羯羊排肉", amount: 650, unit: "g", type: "main", isCore: true },
      { name: "陇西红皮洋芋(土豆)切大滚刀块", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "甘肃定西手工手揪宽粉粉条", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "青红线椒段与大蒜整瓣", amount: 50, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯胡麻油或熟菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "甘谷特产香辣红油辣椒面", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "老抽生抽调味汁", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "草果白芷肉蔻茴香料", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "开水或鲜羊骨清汤", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "胡麻油大火生炒羊肉变色断生",
        instruction: "热锅倒胡麻油，下入切方块的靖远羊肉大火生炒，炒干水汽逼出羊油，至肉块表面金黄紧致。",
        timerSeconds: 300,
        chefTip: "胡麻油是甘肃西北风味精魂，生炒能牢牢锁住鲜美汁水。"
      },
      {
        stepIndex: 2,
        title: "下甘谷辣椒草果爆香加高汤小焖",
        instruction: "投入大蒜瓣、草果、白芷与甘谷红辣椒面翻炒出红亮辣椒油，烹入生抽老抽，注入羊高汤大火煮沸，改中火盖焖20分钟。",
        timerSeconds: 1200,
        chefTip: "甘谷辣椒香而不燥红艳诱人，使焖肉色如赤金、香味扑鼻。"
      },
      {
        stepIndex: 3,
        title: "加入洋芋块与定西宽粉慢煨出锅",
        instruction: "下入红皮洋芋块与泡软的定西宽粉条，中小火煨炖15分钟至洋芋沙软、宽粉吸饱红亮肉汁，撒青红椒段大火收汁起锅。",
        timerSeconds: 900,
        chefTip: "定西宽粉筋道透明挂汁，洋芋绵糯如泥，伴着羊排浓香过瘾无比。"
      }
    ],
    tips: "甘肃靖远国家地理标志保护美味！靖远羊吃百草喝山泉，肉嫩无膻，搭配胡麻油、甘谷辣椒与定西宽粉焖制，汤红肉嫩，油润香浓。",
    tags: ["甘肃", "西北菜", "靖远羊肉", "黄焖羊肉", "定西宽粉", "地标名菜"]
  },
  {
    id: "rec_prov_061",
    name: "宁夏正宗盐池手抓滩羊肉",
    region: "宁夏",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 340,
    prepTimeMinutes: 15,
    cookTimeMinutes: 45,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "宁夏盐池天然牧场散养滩羊肋排条", amount: 700, unit: "g", type: "main", isCore: true },
      { name: "宁夏生紫皮大蒜瓣(生吃配肉)", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "鲜大葱段与老姜片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯天然大粒青盐", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "宁夏枸杞子(临出锅投入)", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: false },
      { name: "草果一枚敲裂与花椒数粒", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "纯正香醋油泼辣子料汁", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "凉水入锅慢火催沸撇净浮沫",
        instruction: "滩羊肋条切成一指宽的长条，凉水入大砂锅，中小火慢慢加温促使内部血水自然析出，细致撇去全部浮沫直至汤水白澈。",
        timerSeconds: 420,
        chefTip: "盐池滩羊吃苦豆子甘草长大，天然不膻，慢煮浮沫方显肉色如玉。"
      },
      {
        stepIndex: 2,
        title: "极简辅料文火温炖保留甘甜",
        instruction: "加入老姜、葱段与敲裂的草果，微火慢煨35分钟，羊肉至八成熟时下入大粒青盐继续焖煨10分钟入味，最后撒一把红枸杞。",
        timerSeconds: 2700,
        chefTip: "盐池滩羊含丰富的天然风味物质，原汁清炖回甘最为明显丰厚。"
      },
      {
        stepIndex: 3,
        title: "整条码盘配生蒜粒与醋辣汁享用",
        instruction: "趁热捞出整齐排入大盘，配剥皮生紫皮大蒜、香醋油泼辣子调配的蘸料，大快朵颐，原汤饮之通体舒泰。",
        timerSeconds: 120,
        chefTip: "热气蒸腾时咬一口，肉质细嫩多汁软滑化渣，脂肪如凝脂清香不腻。"
      }
    ],
    tips: "国宴之选！宁夏盐池滩羊肉质细嫩冠绝神州，脂肪均匀分布宛如大理石纹，白煮手抓最能彰显其不膻不腻、鲜甜爽口的至尊品质。",
    tags: ["宁夏", "西北菜", "盐池滩羊", "手抓羊肉", "国宴食材", "回味甘甜"]
  },
  {
    id: "rec_prov_062",
    name: "青海传统高原紫铜锅土火锅",
    region: "青海",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 380,
    prepTimeMinutes: 30,
    cookTimeMinutes: 40,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "青海传统手工炸羊肉丸子与肉块", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "高原耗牛肉片或熟羊排块", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "青海黄白豆腐块煎金黄", amount: 100, unit: "g", type: "secondary", isCore: true },
      { name: "高原洋芋厚片与白菜心", amount: 150, unit: "g", type: "secondary", isCore: false },
      { name: "手工青海粉条与木耳泡发", amount: 100, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "老母鸡耗牛骨双料高汤", baseAmount: 800, unit: "ml", amountText: "800ml", isPantryStaple: false },
      { name: "熟菜籽油与青盐", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "花椒、草果、生姜熬汤底", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "白胡椒粉与香葱花", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "紫铜火锅内层层码放素菜垫底",
        instruction: "传统烧木炭紫铜火锅底层垫入耐煮的白菜心、泡发木耳、洋芋厚片与青海粉条，吸收肉汁荤香。",
        timerSeconds: 300,
        chefTip: "青海土火锅讲究荤素搭配堆叠如塔，底部素菜越煮越香甜。"
      },
      {
        stepIndex: 2,
        title: "上层整齐铺排丸子牛肉与金黄豆腐",
        instruction: "上层环形整齐码放炸肉丸、牦牛肉片、羊排块与金黄煎豆腐块，色泽交相辉映，造型丰满端庄。",
        timerSeconds: 300,
        chefTip: "肉丸酥软、耗肉劲香、豆腐孔隙饱满吸汁，层次分明。"
      },
      {
        stepIndex: 3,
        title: "注醇厚高汤炭火滚沸咕嘟慢煨",
        instruction: "铜锅烟囱内加入通红木炭，沿锅沿注入滚烫牦牛骨鸡高汤，盖火锅顶盖烧沸，咕嘟翻滚慢煨15分钟，撒葱花与白胡椒粉原锅享用。",
        timerSeconds: 900,
        chefTip: "紫铜导热极其均匀，木炭微温慢煨，汤鲜味醇，高原冬日暖融惬意。"
      }
    ],
    tips: "青海高原传统民俗头牌硬宴！紫铜炭火锅造型古朴端庄，牛羊肉、炸肉丸、金黄豆腐与高原粉条吸透了牛骨老汤，热气升腾鲜美无比。",
    tags: ["青海", "西北菜", "青海土火锅", "紫铜火锅", "牦牛肉", "合家欢席"]
  },
  {
    id: "rec_prov_063",
    name: "新疆正宗家常辣皮子炒米粉",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "炒",
    calories: 410,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新疆特粗粗圆干米粉(提前泡软煮透)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩牛里脊肉或鸡脯肉薄片", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "新疆安集海干线椒泡软打碎(辣皮子酱)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "鲜脆芹菜细段或野蘑菇片", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "大葱段与大蒜末", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "新疆特制豆瓣酱与甜面酱", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "新疆特级生抽老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖与孜然粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "清骨汤或热水", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "粗米粉煮至软弹无硬心过凉",
        instruction: "特粗新疆米粉沸水煮约12分钟至无硬芯，捞出冲凉水沥干防粘备用。",
        timerSeconds: 720,
        chefTip: "新疆炒米粉用的特制粗圆粉，久煮不烂弹牙筋道韧劲十足。"
      },
      {
        stepIndex: 2,
        title: "煸炒牛肉下辣皮子酱炒出红亮红油",
        instruction: "锅中烧热菜籽油，滑入肉片煸炒断生，下入葱蒜、辣皮子碎、豆瓣酱与甜面酱大火翻炒，炒出红亮粘稠酱汁与浓烈椒香。",
        timerSeconds: 150,
        chefTip: "辣皮子碎经热油炒透是酱汁红润浓稠、辣而不燥的关键。"
      },
      {
        stepIndex: 3,
        title: "下米粉芹菜大火翻炒浓酱裹匀",
        instruction: "倒入煮好的米粉、芹菜段与少许高汤，大火剧烈翻炒颠锅，使浓红油润酱汁彻底裹满每一根米粉，撒孜然粉大火出锅。",
        timerSeconds: 180,
        chefTip: "浓稠酱汁必须完全挂在米粉上，吃完盘底只见红油不见稀汤方为地道。"
      }
    ],
    tips: "风靡全国的新疆神级小吃！粗米粉弹牙劲道越嚼越香，浓郁红亮的辣皮子酱汁裹满根根粉条，香辣浓厚中带有一丝甘甜，令人大呼过瘾。",
    tags: ["新疆", "西北菜", "炒米粉", "安集海辣皮子", "香辣浓郁", "特粗米粉"]
  },
  {
    id: "rec_prov_064",
    name: "新疆辣皮子大火炒嫩羊肉片",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 340,
    prepTimeMinutes: 12,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜嫩羊后腿肉(顶刀切大薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新疆安集海干辣皮子(温水泡软剪粗段)", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "白皮洋葱(皮芽子切大块)", amount: 80, unit: "g", type: "secondary", isCore: true },
      { name: "大蒜瓣切片与小葱段", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "托克逊孜然粗颗粒", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "酿造特级生抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用盐与纯白砂糖", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "羊肉顶刀切大薄片抓水润油",
        instruction: "羊后腿肉顺着肌肉纹理横切成大薄片，加少许生抽、清水抓匀吸收，封少许油锁水备用。",
        timerSeconds: 180,
        chefTip: "横切牛羊竖切猪，顶刀切断纤维羊肉炒出来才嫩而不柴。"
      },
      {
        stepIndex: 2,
        title: "旺火热油滑炒羊肉快速变色",
        instruction: "炒锅大火烧至冒青烟，倒菜籽油滑入羊肉片，旺火极速划炒15秒至变色断生，立即盛出备用。",
        timerSeconds: 45,
        chefTip: "滑炒羊肉动作要快如闪电，锁住肉汁保持滑嫩多汁。"
      },
      {
        stepIndex: 3,
        title: "煸炒辣皮子皮芽子回锅合炒起锅",
        instruction: "锅中留底油，下蒜片、辣皮子段与皮芽子大火爆炒出辣香，倒入羊肉片、孜然粒、生抽、盐与白糖，大火颠锅翻炒10秒出锅。",
        timerSeconds: 45,
        chefTip: "辣皮子肉厚微甜，与羊肉在孜然大火熏陶下香气四溢。"
      }
    ],
    tips: "新疆馆子点击率奇高的一道硬炒！羊肉滑嫩多汁，红润厚实的辣皮子吸收了羊脂的甘美，孜然香气扑鼻，配馕或者拌面都是人间极品。",
    tags: ["新疆", "西北菜", "辣皮子炒羊肉", "皮芽子", "孜然", "大火快炒"]
  },
  {
    id: "rec_prov_065",
    name: "新疆孜然洋葱爆炒羊肉粒",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 360,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "鲜嫩羊后腿肉(切大拇指大肉丁粒)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "白皮甜洋葱(皮芽子切小丁方块)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切碎末", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "小香葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "托克逊纯正孜然原粒与孜然粉", baseAmount: 12, unit: "g", amountText: "12g", isPantryStaple: true },
      { name: "粗辣椒面", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "食用盐与生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热锅大火干煸羊肉粒逼出羊脂",
        instruction: "铁锅烧热下少许油，下入羊肉丁大火翻炒煸炒至表面金黄微焦，溢出原生态羊油焦香。",
        timerSeconds: 150,
        chefTip: "肉丁切成骰子块，煸炒出焦黄壳而内里依然多汁。"
      },
      {
        stepIndex: 2,
        title: "下皮芽子蒜末大火同炒断生",
        instruction: "下入洋葱丁与大蒜末，大火猛翻使洋葱吸收羊油，散发出天然甘甜焦香。",
        timerSeconds: 90,
        chefTip: "洋葱丁炒到微微透明边沿焦香最为甜脆。"
      },
      {
        stepIndex: 3,
        title: "重撒孜然辣椒大火颠炒起焦香",
        instruction: "撒入大量的孜然粒、孜然粉、辣椒面、盐与少许生抽，旺火极速颠炒10秒出锅撒葱花。",
        timerSeconds: 30,
        chefTip: "孜然分两份，一份整粒耐嚼爆香，一份粉末紧裹肉粒。"
      }
    ],
    tips: "宛如不用炭火的铁锅烤羊肉！肉粒焦香四溢，外酥里嫩，洋葱丁脆甜解腻，孜然辣椒风味浓郁直击灵魂，下饭下酒快手绝味。",
    tags: ["新疆", "西北菜", "爆炒羊肉", "孜然羊肉", "皮芽子", "铁锅焦香"]
  },
  {
    id: "rec_prov_066",
    name: "新疆西红柿青椒炒烤肉盖馕",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "炒",
    calories: 430,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "刚出炉传统新疆芝麻白油馕(切八瓣)", amount: 1, unit: "个", type: "main", isCore: true },
      { name: "鲜嫩羊肉薄片", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "熟透多汁沙瓤西红柿(切小厚块)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "脆爽青尖椒块与洋葱丝", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "蒜片与香菜碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "新疆孜然粉", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "特级生抽老抽", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "食用盐与纯白砂糖", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "烤馕改刀大盘铺底",
        instruction: "将焦香的白油馕切成均匀扇形三角块，在宽口大平盘中呈环形紧凑铺满底盘。",
        timerSeconds: 90,
        chefTip: "馕底干燥酥脆，正等待滚烫酸甜肉汁的浸润。"
      },
      {
        stepIndex: 2,
        title: "炒锅大火炒肉片西红柿出浓红汁",
        instruction: "热锅倒油滑入羊肉片翻炒断生，倒入蒜片、洋葱与西红柿块大火炒出浓郁沙红茄汁，调入生抽、盐、白糖炒出酸甜酸浓底味。",
        timerSeconds: 180,
        chefTip: "西红柿一定要炒化出浓红果汁，形成浓郁醇厚的汤卤。"
      },
      {
        stepIndex: 3,
        title: "投入青椒快炒趁热倾倒盖馕",
        instruction: "投入青椒片与孜然粉快炒10秒断生，连肉带酸香浓汁整锅热气腾腾倾倒在铺好的馕块上，撒香菜上桌。",
        timerSeconds: 60,
        chefTip: "一定要趁热连汁浇盖，馕块吸满茄汁肉香，外脆内软回味无尽。"
      }
    ],
    tips: "新疆面食与肉食的极致浪漫组合！金黄酥香的烤馕遇到热气腾腾的西红柿羊肉热炒，馕饼半脆半糯吸足了浓厚酸甜汤汁，比肉还诱人。",
    tags: ["新疆", "西北菜", "炒烤肉", "炒菜盖馕", "白油馕", "西红柿羊肉"]
  },
  {
    id: "rec_prov_067",
    name: "新疆家常蒜苔炒风干牛肉",
    region: "新疆",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 290,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新疆传统伊犁手工风干牛肉(蒸透切薄片)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "鲜脆青嫩蒜苔(切指长段)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "安集海干红辣椒丝", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜末与老姜丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "新疆黄酒或清水少许", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "生抽调味汁", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用盐(微量)与白糖", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "风干牛肉提前汽蒸切透光薄片",
        instruction: "风干牛肉上锅大火蒸20分钟至肉质回软，取开放凉后切成均匀薄肉片备用。",
        timerSeconds: 300,
        chefTip: "风干牛肉经大漠干风自然熟成，蒸制回软后越嚼越香醇浓。"
      },
      {
        stepIndex: 2,
        title: "热油干煸风干肉薄片吐焦香",
        instruction: "热锅倒油，下入风干牛肉薄片小火煸炒1分钟，煸出自然牛脂香与微脆边缘。",
        timerSeconds: 90,
        chefTip: "小火煸炒使牛肉的腊香与干香充分激活。"
      },
      {
        stepIndex: 3,
        title: "蒜苔干椒大火合炒脆嫩出锅",
        instruction: "下蒜末姜丝干椒丝与蒜苔段大火猛翻，烹入黄酒与生抽，加少许白糖大火翻炒1分钟至蒜苔断生翠绿即可起锅。",
        timerSeconds: 90,
        chefTip: "风干牛肉自带天然咸香，调味只需少许生抽与白糖提鲜。"
      }
    ],
    tips: "伊犁草原传统硬核风味！风干牛肉紧致耐嚼越嚼越浓郁，蒜苔清甜爽脆多汁，荤素交融，下饭下酒都是无可替代的草原珍馐。",
    tags: ["新疆", "西北菜", "风干牛肉", "蒜苔炒牛肉", "草原特色", "越嚼越香"]
  },
  {
    id: "rec_prov_068",
    name: "甘肃传统酸辣洋芋擦擦小炒",
    region: "甘肃",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 210,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "甘肃定西黄心土豆(特制擦子擦长丝)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "普通中筋小麦面粉(抖裹土豆丝)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "大蒜末与小香葱末", amount: 25, unit: "g", type: "secondary", isCore: false },
      { name: "青红尖椒碎粒", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯胡麻油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "甘肃特色陈醋或老陈醋", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "自制油泼红辣椒辣子", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "土豆擦粗丝抖裹薄面粉上汽蒸",
        instruction: "土豆擦成粗长丝，不水洗保留表面淀粉，拌入面粉使每根土豆丝均匀裹上一层薄薄白面，水开上锅大火蒸5分钟抖散晾凉。",
        timerSeconds: 360,
        chefTip: "面粉量不可贪多，薄如蝉翼包裹即可，蒸熟后颗颗分明不黏连。"
      },
      {
        stepIndex: 2,
        title: "胡麻油爆香蒜末葱花辣椒粒",
        instruction: "铁锅烧热下浓香胡麻油，爆香大蒜末、葱花与青红椒粒，激发出浓郁西北胡麻油香。",
        timerSeconds: 60,
        chefTip: "胡麻油独特的坚果香气与土豆是天生绝配。"
      },
      {
        stepIndex: 3,
        title: "洋芋擦擦下锅翻炒调醋辣出锅",
        instruction: "倒入蒸好的洋芋擦擦大火翻炒，将土豆丝炒出焦香金黄硬壳，调入盐、陈醋与油泼辣子大火颠锅翻炒均匀出锅。",
        timerSeconds: 150,
        chefTip: "炒到底部微微起金黄锅巴最香，酸辣适口，干香软糯兼备。"
      }
    ],
    tips: "陇原黄土地上的质朴传奇！黄心土豆裹面蒸熟后软糯弹牙，再经胡麻油大火翻炒出金黄脆壳，酸辣开胃，焦香扑鼻，百吃不厌。",
    tags: ["甘肃", "西北菜", "洋芋擦擦", "定西土豆", "胡麻油", "酸辣家常"]
  },
  {
    id: "rec_prov_069",
    name: "兰州红根韭黄肉丝小炒",
    region: "甘肃",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "兰州特产地窖无光培植红根韭黄", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜鲜猪里脊肉切细丝", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "小红辣椒丝点缀", amount: 10, unit: "g", type: "secondary", isCore: false },
      { name: "生姜丝", amount: 8, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "精炼纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "黄酒与玉米生粉(抓肉丝)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "优质清淡生抽", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肉丝抓浆滑油变白捞出",
        instruction: "肉丝加料酒、少许盐、生粉抓匀上浆。锅中热油滑入肉丝，大火快拨30秒至变白散开即刻捞出。",
        timerSeconds: 45,
        chefTip: "滑炒肉丝时间要极短，保持嫩滑如丝。"
      },
      {
        stepIndex: 2,
        title: "兰州韭黄切长段快速下锅",
        instruction: "兰州红根韭黄洗净切寸段。锅留底油爆香姜丝与红椒丝，下韭黄段大火颠锅急炒15秒。",
        timerSeconds: 30,
        chefTip: "兰州红根韭黄是全国地理标志，根部粉红叶肉金黄嫩甜无渣。"
      },
      {
        stepIndex: 3,
        title: "肉丝回锅调味颠翻十秒出锅",
        instruction: "倒入滑好的肉丝，调入生抽、盐与微量白糖，猛火快速颠翻两下，断生即出锅装盘。",
        timerSeconds: 20,
        chefTip: "韭黄极其娇嫩，出锅余温足以熟透，炒过头则出水软烂。"
      }
    ],
    tips: "兰州冬季贡品级名蔬！兰州红根韭黄香味浓郁嫩脆甘甜，在旺火快炒下保持脆嫩爽口，肉丝软滑，清甜鲜嫩满口生津。",
    tags: ["甘肃", "西北菜", "兰州韭黄", "韭黄炒肉丝", "时令名蔬", "爽脆清甜"]
  },
  {
    id: "rec_prov_070",
    name: "敦煌传统胡羊焖薄面饼",
    region: "甘肃",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "焖",
    calories: 420,
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "敦煌大漠新鲜羊肉小排条", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "手工擀制宽如手掌薄面饼皮", amount: 6, unit: "张", type: "main", isCore: true },
      { name: "大洋葱厚片与老生姜", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "青红椒大片与大蒜粒", amount: 50, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "红油豆瓣酱与生抽老抽", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "草果八角香叶料包", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "胡椒粉、盐与白糖", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "清水或羊骨高汤", baseAmount: 400, unit: "ml", amountText: "400ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "生炒羊排酱香四溢加汤焖炖",
        instruction: "热锅倒油下羊排块大火煸炒至焦黄出油，下姜葱蒜、豆瓣酱与香料炒出红油酱香，加水漫过羊排，加盖中火焖煨20分钟。",
        timerSeconds: 1200,
        chefTip: "羊肉先焖至八成熟酥烂，留出足量汤汁焖饼。"
      },
      {
        stepIndex: 2,
        title: "擀制手掌薄饼平铺羊肉顶层",
        instruction: "面团擀成薄如蝉翼的宽大面饼，一张张轻柔平铺在咕嘟翻滚的羊肉汤上方，加盖中火焖蒸5分钟。",
        timerSeconds: 300,
        chefTip: "薄面饼吸收羊肉汤蒸汽熟透，柔软而极富麦香韧劲。"
      },
      {
        stepIndex: 3,
        title: "揭盖浸汁搅拌面饼吸饱浓汁",
        instruction: "揭开锅盖，用筷子和锅铲将薄饼撕大块浸入红亮肉汤中，投入青红椒翻炒收浓汤汁出锅装盘。",
        timerSeconds: 120,
        chefTip: "面饼吸足羊肉红油浓汁油亮软糯，肉烂汁醇，妙绝大漠。"
      }
    ],
    tips: "古丝绸之路重镇敦煌传承千年的古老名菜！胡羊肉烂汁醇毫无腥膻，面饼薄如白纸在羊肉汤汁中焖透，筋道软滑吸汁饱满，一口肉一口饼回荡西域风情。",
    tags: ["甘肃", "西北菜", "胡羊焖饼", "敦煌名菜", "丝路古风", "薄饼裹汁"]
  },
  {
    id: "rec_prov_071",
    name: "青海干煸手揪面片炒羊肉",
    region: "青海",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "炒",
    calories: 400,
    prepTimeMinutes: 20,
    cookTimeMinutes: 8,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "青海手工手揪小面片(煮熟过凉)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩羊里脊肉切大薄片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "青红尖椒片与洋葱丝", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜片与香菜段", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正胡麻油或熟菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "特级生抽老抽复合汁", baseAmount: 18, unit: "ml", amountText: "18ml", isPantryStaple: true },
      { name: "现磨孜然粉与粗辣椒面", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "高原精制青盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "手工揪指甲盖大薄面片煮透",
        instruction: "醒好的面拉成长条，手指灵巧揪成指甲盖大小面片投入沸水，煮2分钟捞出过凉水沥干备用。",
        timerSeconds: 180,
        chefTip: "揪面片要薄、匀、小，如雪花翻飞，煮后极富嚼劲弹牙。"
      },
      {
        stepIndex: 2,
        title: "羊肉片滑油炒熟爆蒜香辣椒",
        instruction: "热锅倒胡麻油，下羊肉薄片大火快速滑炒变色，下蒜片、洋葱与青红椒片翻炒出焦香味。",
        timerSeconds: 90,
        chefTip: "羊肉滑炒时间宜短，保持嫩滑多汁。"
      },
      {
        stepIndex: 3,
        title: "面片下锅大火干煸翻炒干香",
        instruction: "倒入揪面片大火翻炒颠锅，烹入生抽老抽炒出焦黄酱色，撒入孜然粉与辣椒面大火干煸至粉皮微干焦香出锅。",
        timerSeconds: 150,
        chefTip: "干煸手法使面片吸收羊脂孜然，表皮微焦干香、内部弹韧筋道。"
      }
    ],
    tips: "青海高原老少皆宜的殿堂级面食！面片小巧薄韧如贝壳，在大火热油干煸下裹满羊肉鲜汁与孜然焦香，干香扑鼻筋道利口。",
    tags: ["青海", "西北菜", "揪面片", "干煸面片", "羊肉炒面", "高原面食"]
  },
  {
    id: "rec_prov_072",
    name: "青海青椒爆炒牦牛干巴肉",
    region: "青海",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "青海高原正宗天然风干牦牛干巴肉(切薄片)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "本地鲜脆青尖椒斜切厚片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切厚片与生姜丝", amount: 25, unit: "g", type: "secondary", isCore: false },
      { name: "干红辣椒丝", amount: 10, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油或胡麻油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "青海农家老黄酒烹锅", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "酿造特级鲜酱油", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "白糖提鲜微量", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "干巴肉温水浸泡蒸软顶刀切薄",
        instruction: "牦牛干巴用温水刷洗，上锅蒸15分钟回软，顶刀切成薄如木梳齿的薄片。",
        timerSeconds: 300,
        chefTip: "牦牛肉纤维紧密，蒸透切薄片利于出香且不塞牙。"
      },
      {
        stepIndex: 2,
        title: "热油干煸牦牛肉薄片出干香",
        instruction: "锅中烧热油，下入干巴牛肉片中小火煸炒1分钟，煸出油脂焦香与高原阳光自然风干的陈香。",
        timerSeconds: 90,
        chefTip: "煸炒使干巴肉外焦里韧，浓郁牛肉香溢出。"
      },
      {
        stepIndex: 3,
        title: "青椒蒜片大火猛炒喷黄酒出锅",
        instruction: "倒入蒜片、姜丝与青椒片，调大火猛烈翻炒，烹入黄酒、生抽与少许白糖，大火颠锅40秒至青椒断生脆绿立即出锅。",
        timerSeconds: 60,
        chefTip: "青椒保持爽脆爆汁，中和干巴肉的干香浓郁。"
      }
    ],
    tips: "青藏高原纯净天地的豪迈美味！牦牛肉干巴肉质坚韧富有嚼劲越嚼越香，青椒辛香爽脆多汁，火候干香利落，是绝佳的高原下酒神菜。",
    tags: ["青海", "西北菜", "牦牛肉", "牛干巴", "青椒炒牛肉", "高原风味"]
  },
  {
    id: "rec_prov_073",
    name: "宁夏家常洋葱爆炒羊杂碎",
    region: "宁夏",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 320,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜熟羊头肉羊肚羊肺羊心(切条丝)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "甜脆白皮洋葱(切厚丝)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "青红线椒斜切圈", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "拍大蒜瓣与小葱段", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "秘制羊油油泼辣子", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "老陈醋或香醋", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "生抽老抽复合调味汁", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "孜然粉与胡椒粉", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "熟羊杂沸水快焯去油脂杂味",
        instruction: "将改刀成条的熟羊肚、羊头肉与羊心在沸水中加料酒焯烫30秒，捞出沥干水份备用。",
        timerSeconds: 60,
        chefTip: "焯水能去掉表面凝固的冷凝羊油，炒出来清爽不腻。"
      },
      {
        stepIndex: 2,
        title: "大火煸炒蒜瓣羊油辣子出红油",
        instruction: "铁锅烧热下菜籽油，爆香蒜末，加入羊油辣子翻炒出红润明亮的香辣红油。",
        timerSeconds: 45,
        chefTip: "羊油熬制的辣子是宁夏羊杂的灵魂增香剂。"
      },
      {
        stepIndex: 3,
        title: "下羊杂洋葱大火快炒烹醋出锅",
        instruction: "倒入羊杂碎、洋葱丝与青红椒圈，大火极速翻炒颠锅，烹入生抽老抽与陈醋，撒孜然粉与胡椒粉颠匀出锅。",
        timerSeconds: 90,
        chefTip: "临出锅沿锅边烹入一勺陈醋，去膻增香提神，酸辣爽脆过瘾。"
      }
    ],
    tips: "宁夏街头市井最热烈的烟火美味！羊杂肚丝软韧脆弹、头肉软糯肥美，洋葱清甜爽口，羊油辣子红艳浓香，酸辣微麻，下饭神器。",
    tags: ["宁夏", "西北菜", "羊杂碎", "爆炒羊杂", "羊油辣子", "市井烟火"]
  },
  {
    id: "rec_prov_074",
    name: "兰州地道高担酿皮浇香醋辣油",
    region: "甘肃",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "蒸",
    calories: 230,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "优质小麦面浆蒸制厚切高担酿皮", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "金黄蜂窝多孔蒸面筋块", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "鲜脆黄瓜细丝与香菜末", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "生大蒜泥加纯净水调蒜水", amount: 30, unit: "ml", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "兰州秘制胡麻油泼红辣椒油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "甘肃粮食香醋加茴香熬制香醋汁", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "浓香纯芝麻酱(温水化开)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "精制细盐与花椒盐水", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "酿皮厚切手指条码入大碗",
        instruction: "将金黄通透的高担酿皮切成半指宽的长条，蒸面筋切厚方丁，整齐码在大海碗中备用。",
        timerSeconds: 120,
        chefTip: "高担酿皮不洗面筋直接蒸制，质地厚重软韧、麦香醇厚。"
      },
      {
        stepIndex: 2,
        title: "放上青脆黄瓜丝香菜蒜泥水",
        instruction: "在酿皮顶端放上一大把翠绿黄瓜丝与香菜碎，淋入调好的大蒜汁与花椒盐水打底。",
        timerSeconds: 60,
        chefTip: "蒜水与花椒水是西北调凉皮不可或缺的底味架构。"
      },
      {
        stepIndex: 3,
        title: "浇透麻酱香醋淋浓红油泼辣子",
        instruction: "淋入浓稠芝麻酱、熬制调料香醋，最后大勺浇上鲜红透亮的胡麻油泼辣子，拌匀享用。",
        timerSeconds: 60,
        chefTip: "红油浮面，面筋吸透酸辣汁，入口酸辣清凉、香浓软滑开胃之极。"
      }
    ],
    tips: "兰州城街头巷尾百吃不厌的招牌风味！高担酿皮厚实软糯韧劲十足，面筋吸饱了红油与熬制香醋，大蒜辛香麻酱浓滑，酸辣爽口神清气爽。",
    tags: ["甘肃", "西北菜", "兰州酿皮", "高担酿皮", "油泼辣子", "传统小吃"]
  }
];
