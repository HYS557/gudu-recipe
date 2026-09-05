// 华夏地标名吃与功能调理粥 (61 - 80)
module.exports = [
  {
    id: 'rec_congee_61',
    name: '厦门老字号经典卤鸭肉米粥',
    subtitle: '闽南古法秘制卤鸭切条，浓醇卤汁融入鲜滚热粥，咸甜交织古早经典',
    region: '福建厦门',
    cookingMethod: '生滚浇卤',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 280,
    protein: 19.5,
    fat: 8.0,
    carbs: 32.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['厦门古早味', '八市名吃', '秘制卤鸭', '咸甜浓郁'],
    ingredients: [
      { name: '闽南古法卤鸭肉 (切厚条)', amount: 150, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '炸金黄红葱头酥', amount: 15, unit: '克', type: 'secondary' },
      { name: '香芹菜粒与细葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '正宗陈年老卤鸭原汁', amountText: '3 汤匙 (45ml 灵魂底料)', baseAmount: 3, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻纯香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '卤水老鸭切厚肉条',
        instruction: '取厦门古法卤鸭（带皮带肉）剔去大骨，切成长约4cm的整齐肉条；留取头道浓醇卤鸭汁加热备用。',
        timerSeconds: 180,
        chefTip: '卤鸭切厚条肉感十足，卤汁咸甜浓香是整碗粥的灵魂风味支撑。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火煲煮稠白粥',
        instruction: '砂锅水滚下大米与生姜丝，大火保持剧烈翻滚18分钟，熬煮至米花全开、汤如白玉。',
        timerSeconds: 1080,
        chefTip: '米汤煮稠才能托住浓卤汁，形成顺滑层次。'
      },
      {
        stepIndex: 3,
        title: '调入秘制老卤鸭原汁',
        instruction: '将3汤匙热老卤鸭原汁浇入沸滚的白粥中，顺时针充分搅匀，白粥底瞬间转为酱红透亮、药香与酱香四溢。',
        timerSeconds: 120,
        chefTip: '老卤汁含有八角、丁香、肉桂等几十味香料精华，倒入沸粥瞬间激发出迷人的古早风味。'
      },
      {
        stepIndex: 4,
        title: '下卤鸭条大火滚煮1分钟',
        instruction: '下入切好的卤鸭肉条，大火生滚1分钟让鸭肉重新温热并吸饱稠滑米汤。',
        timerSeconds: 60,
        chefTip: '卤鸭本已熟透入味，生滚1分钟即可，久煮鸭肉容易软烂脱骨散碎。'
      },
      {
        stepIndex: 5,
        title: '撒红葱酥芹菜白胡椒起锅',
        instruction: '盛入瓷碗，撒入大量酥脆的红葱头酥、鲜芹菜碎与现磨白胡椒粉，淋少许芝麻香油温食。',
        timerSeconds: 30,
        chefTip: '油炸红葱头酥（葱头油）是闽南小吃的标志性脆香，葱香扑鼻。'
      }
    ],
    chefTips: [
      '选用带皮闽南卤鸭切厚条。',
      '热卤原汁直接融入沸粥中提味增香。',
      '鸭肉生滚1分钟回温吸汁即可。',
      '起锅必撒大量油炸红葱头酥增加酥脆葱香。'
    ],
    proTips: '白粥熬至粘稠调入秘制老卤鸭原汁，卤鸭切厚条生滚1分钟，撒大量红葱头酥与白胡椒，咸甜酱香、闽南八市正宗古早味。',
    nutritionHighlights: '鸭肉凉补不上火，富含B族维生素与优质蛋白质，滋阴润燥、健脾开胃。'
  },
  {
    id: 'rec_congee_62',
    name: '闽南泉州高汤干贝海蛎咸稀饭',
    subtitle: '新鲜珠海蛎裹红薯粉烫滑，干贝香菇红葱头油煸出古早味，咸稀饭粒粒分明',
    region: '福建泉州',
    cookingMethod: '油煸慢熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 275,
    protein: 20.0,
    fat: 7.5,
    carbs: 31.0,
    ratio: '1:10 (米80g:大骨高汤800ml)',
    tags: ['泉州古早味', '红葱油香', '鲜珠海蛎', '干贝咸饭'],
    ingredients: [
      { name: '新鲜泉州野生珠海蛎', amount: 150, unit: '克', type: 'main' },
      { name: '优质淡干瑶柱/干贝丝', amount: 15, unit: '克', type: 'main' },
      { name: '新鲜猪三层肉丝/五花肉', amount: 60, unit: '克', type: 'main' },
      { name: '水发椴木干香菇丝', amount: 20, unit: '克', type: 'secondary' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '闽南红葱头 (切片炸油)', amount: 20, unit: '克', type: 'secondary' },
      { name: '新鲜青蒜苗与香芹碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '闽南纯地瓜粉/番薯粉', amountText: '1 汤匙 (15g 抓滑海蛎)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '传统熟猪油/花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '红葱头小火炸出金黄葱油',
        instruction: '热锅下猪油，倒入红葱头薄片，小火慢炸至金黄酥脆（红葱头酥），迅速捞出葱酥，锅中留香浓的红葱头底油。',
        timerSeconds: 300,
        chefTip: '闽南咸饭咸粥的精髓全在这一勺自炸红葱头油，猪油混合红葱香，香气通透直钻鼻尖。'
      },
      {
        stepIndex: 2,
        title: '煸炒肉丝香菇与大米出香',
        instruction: '用葱油炒香三层肉丝、香菇丝与撕碎的干贝丝，倒入淘净沥干的大米，中火翻炒2分钟至生米吸收油脂呈微透明。',
        timerSeconds: 180,
        chefTip: '生米先在油锅中与干贝香菇同炒（闽南炒米法），米粒吸满油脂，煮出的咸稀饭粒粒分明、香浓绝不烂糊。'
      },
      {
        stepIndex: 3,
        title: '入砂锅加骨汤煲煮米饭',
        instruction: '将炒好的米与配料移入砂锅，注入800ml大骨高汤或沸水，大火烧沸后转中小火煲煮18分钟至米粒开花成浓稠咸稀饭。',
        timerSeconds: 1080,
        chefTip: '高汤煲煮让每一粒米吸饱肉香与干贝鲜，粥汤浓淡适中。'
      },
      {
        stepIndex: 4,
        title: '地瓜粉抓匀海蛎生滚1分钟',
        instruction: '新鲜海蛎淘净沥水，加地瓜粉轻柔抓裹薄浆；砂锅调大火大滚，滑入海蛎，用筷子拨散，滚煮1分钟至海蛎圆润鼓胀。',
        timerSeconds: 60,
        chefTip: '地瓜粉包裹海蛎是泉州绝技，地瓜粉糊化成透明薄胶衣，锁住海蛎饱满汁水，入口滑嫩如布丁、绝无腥涩。'
      },
      {
        stepIndex: 5,
        title: '撒葱酥蒜苗白胡椒起锅',
        instruction: '调入生抽、盐与白胡椒粉，撒入切碎的青蒜苗花、香芹末与炸好的红葱酥，趁滚烫温食。',
        timerSeconds: 30,
        chefTip: '青蒜苗遇滚汤激出辛香，海蛎滑嫩鲜爆，是泉州老街最魂牵梦萦的市井美味。'
      }
    ],
    chefTips: [
      '猪油小火慢熬出金黄酥脆红葱酥与葱头油。',
      '生米在葱油中与三层肉干贝同炒至半透明。',
      '海蛎必须加闽南地瓜粉抓薄薄粉衣锁鲜。',
      '海蛎大火生滚1分钟鼓胀即熟，滑嫩如豆腐。'
    ],
    proTips: '炸红葱头油炒香米与三层肉干贝，入砂锅煲成咸稀饭，地瓜粉裹滑嫩海蛎生滚1分钟，撒青蒜苗与葱酥，咸香鲜嫩、泉州古早味绝品。',
    nutritionHighlights: '海蛎富含丰富的天然锌元素与优质蛋白，搭配干贝与粗纤维香菇，健脾开胃、补益肝肾。'
  },
  {
    id: 'rec_congee_63',
    name: '河南开封八宝牛肉五香咸稠粥',
    subtitle: '熟牛肉切丁五香浓烈，花生黄豆面筋吸透浓汤，开封老字号早点一绝',
    region: '河南开封',
    cookingMethod: '慢熬慢煮',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '简单',
    servings: 2,
    calories: 285,
    protein: 21.5,
    fat: 7.2,
    carbs: 33.0,
    ratio: '1:10 (五谷牛肉80g:水800ml)',
    tags: ['中原风味', '开封名吃', '五香咸粥', '牛肉浓郁'],
    ingredients: [
      { name: '卤熟优质牛腱子肉丁', amount: 120, unit: '克', type: 'main' },
      { name: '东北大米/粳米', amount: 70, unit: '克', type: 'main' },
      { name: '水泡黄豆', amount: 20, unit: '克', type: 'secondary' },
      { name: '红皮花生米', amount: 15, unit: '克', type: 'secondary' },
      { name: '油面筋/水面筋丁', amount: 20, unit: '克', type: 'secondary' },
      { name: '老生姜末', amount: 10, unit: '克', type: 'secondary' },
      { name: '细香葱与香菜碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '传统十三香/五香粉', amountText: '1 茶匙 (3g 核心香味)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻纯香油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '熟牛肉面筋切均匀小丁',
        instruction: '开封五香卤牛肉切成约1cm方丁；油面筋开水泡软挤干切小片备用。',
        timerSeconds: 180,
        chefTip: '牛肉切方丁咀嚼更有嚼劲，面筋多孔能充分吸饱浓郁的五香肉汤。'
      },
      {
        stepIndex: 2,
        title: '黄豆花生大米大火同熬',
        instruction: '砂锅注入800ml清水大火烧沸，倒入泡发黄豆、花生米、大米与生姜末，大火保持翻滚沸腾18分钟至豆熟米烂。',
        timerSeconds: 1080,
        chefTip: '黄豆花生耐煮，与大米同熬能煮出浓郁的豆油香气。'
      },
      {
        stepIndex: 3,
        title: '下入牛肉丁与五香面筋',
        instruction: '倒入切好的熟牛肉丁与面筋片，加入1茶匙五香粉、生抽和盐，转中火翻滚慢煨8分钟。',
        timerSeconds: 480,
        chefTip: '五香粉是中原咸粥的灵魂调味，让牛肉与面筋在五香中入味透彻。'
      },
      {
        stepIndex: 4,
        title: '调白胡椒香油浓稠出锅',
        instruction: '出锅前撒入大量现磨白胡椒粉、淋入芝麻香油，顺时针搅动均匀关火。',
        timerSeconds: 60,
        chefTip: '开封老式咸粥讲究胡椒味浓烈、芝麻油透亮。'
      },
      {
        stepIndex: 5,
        title: '撒葱花香菜盛碗',
        instruction: '盛入大瓷碗，撒入葱花香菜，配水煎包或热烧饼，中原早点绝配。',
        timerSeconds: 20,
        chefTip: '浓稠咸香，牛肉筋道，一碗下肚元气满满。'
      }
    ],
    chefTips: [
      '熟卤牛肉切1cm方丁保留咀嚼感。',
      '油面筋吸饱五香肉汁软韧咸鲜。',
      '黄豆花生提前浸透与大米同煲。',
      '五香粉与白胡椒粉并重，香浓开胃。'
    ],
    proTips: '卤牛肉切丁，与面筋、黄豆、花生米、大米同煲，调入十三香与白胡椒粉，咸香浓稠、豆烂肉香，开封古都传统清晨硬早点。',
    nutritionHighlights: '优质牛肉高蛋白高肌酸，配伍大豆卵磷脂与五谷碳水，耐饿扛饱、健脾益气。'
  },
  {
    id: 'rec_congee_64',
    name: '老北京地道油茶面茶麻酱芝麻盐粥',
    subtitle: '传统糜子面小火慢炒出焦香，浓稠双麻酱淋顶，现擀椒盐咸香地道',
    region: '北京',
    cookingMethod: '小火慢熬调酱',
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: '简单',
    servings: 2,
    calories: 250,
    protein: 6.5,
    fat: 9.0,
    carbs: 35.0,
    ratio: '糜子面/面粉60g:水500ml:纯芝麻酱30g',
    tags: ['老北京传统', '南门面茶', '双层麻酱', '地道椒盐'],
    ingredients: [
      { name: '纯黄糜子面/精选面粉', amount: 60, unit: '克', type: 'main' },
      { name: '纯正北京二八麻酱/纯芝麻酱', amount: 35, unit: '克', type: 'main' },
      { name: '熟白芝麻粒 (现擀椒盐)', amount: 15, unit: '克', type: 'secondary' },
      { name: '老花椒粒', amount: 3, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯芝麻香油 (解麻酱用)', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '食用精盐 (炒椒盐用)', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '现焙花椒白芝麻擀芝麻盐',
        instruction: '净锅无油，小火将花椒与精盐炒出浓香，倒在案板上用擀面杖擀成极细花椒盐；熟白芝麻同样用擀面杖擀碎混合成绝香芝麻椒盐。',
        timerSeconds: 240,
        chefTip: '现焙现擀的芝麻椒盐是老北京面茶的精髓，花椒香与芝麻香在热盐激发下香飘满屋。'
      },
      {
        stepIndex: 2,
        title: '纯芝麻香油解纯芝麻酱',
        instruction: '将二八麻酱倒入碗中，加入1汤匙芝麻纯香油，顺同一方向慢慢调和至呈丝滑流动的丝带状。',
        timerSeconds: 180,
        chefTip: '切记要用香油解麻酱而非水解，香油解出的麻酱油润浓稠、淋在面茶上久置不干不分层。'
      },
      {
        stepIndex: 3,
        title: '糜子面凉水化开下沸锅顺搅',
        instruction: '糜子面加150ml凉水调成均匀无疙瘩的稀面糊；小锅中注入350ml水烧沸，将面糊缓缓淋入沸水中，木勺顺时针用力持续搅动。',
        timerSeconds: 300,
        chefTip: '小火慢搅让面糊彻底糊化，熬至咕嘟冒大泡、浓稠光亮挂勺即可关火。'
      },
      {
        stepIndex: 4,
        title: '盛入大瓷碗淋第一层麻酱椒盐',
        instruction: '趁热盛半碗滚烫面茶，淋上一层浓浓的麻酱，撒上一层现擀芝麻椒盐。',
        timerSeconds: 60,
        chefTip: '传统讲究“双层料”，半碗一层酱一层盐，再倒满再淋一层。'
      },
      {
        stepIndex: 5,
        title: '加满面茶再淋二层麻酱椒盐',
        instruction: '再盛入滚热面茶盖顶，上面浇满厚厚一层丝滑麻酱，铺满浓香芝麻椒盐，转着碗边直接吸溜温食。',
        timerSeconds: 30,
        chefTip: '吃面茶老规矩“不用勺子筷子，单手托碗转着圈吸溜”，一口面茶一口麻酱椒盐，绝妙享受。'
      }
    ],
    chefTips: [
      '花椒与白芝麻小火炒香现擀成芝麻椒盐。',
      '用纯芝麻香油顺时针将麻酱澥成流线状。',
      '糜子面凉水调稀糊再入沸锅顺搅防结块。',
      '双层浇淋麻酱与椒盐，转着碗边吸溜喝。'
    ],
    proTips: '糜子面顺搅成浓亮稠糊，现焙花椒芝麻擀成咸香椒盐，香油解麻酱双层浇淋，不用勺箸转碗吸溜，地道老北京韵味。',
    nutritionHighlights: '芝麻富含丰富的天然钙、不饱和脂肪酸与芝麻素，糜子面健脾开胃，老幼皆宜。'
  },
  {
    id: 'rec_congee_65',
    name: '山东临沂牛羊肉糊嘟糁汤稠粥',
    subtitle: '整鸡牛骨熬煮十二时辰出浓白高汤，胡椒生姜麦仁打底，热辣滚烫醒脾开窍',
    region: '山东临沂',
    cookingMethod: '老汤慢煲',
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: '中等',
    servings: 2,
    calories: 280,
    protein: 23.0,
    fat: 8.5,
    carbs: 27.0,
    ratio: '1:10 (麦仁大米70g:牛骨浓汤700ml)',
    tags: ['山东非遗', '临沂糁汤', '胡椒辛热', '骨汤浓白'],
    ingredients: [
      { name: '熟牛肉片/熟羊肉片', amount: 120, unit: '克', type: 'main' },
      { name: '去皮小麦仁/麦豆', amount: 30, unit: '克', type: 'main' },
      { name: '东北大米', amount: 40, unit: '克', type: 'main' },
      { name: '母鸡蛋', amount: 1, unit: '枚 (碗底打散)', type: 'main' },
      { name: '生姜切极细碎末', amount: 15, unit: '克', type: 'secondary' },
      { name: '香葱花与香菜碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '特制黑白胡椒粉', amountText: '1 茶匙 (5g 临沂糁灵魂)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '纯芝麻纯香油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '麦仁大米提前浸润软化',
        instruction: '去皮小麦仁洗净温水浸泡1小时；大米淘净沥干备用。',
        timerSeconds: 3600,
        chefTip: '麦仁是临沂糁汤必不可少的灵魂谷物，咀嚼时爽脆筋道耐嚼。'
      },
      {
        stepIndex: 2,
        title: '浓牛骨高汤大火沸煮麦仁',
        instruction: '砂锅注入700ml牛骨浓汤（或优质清汤）大沸，下入浸泡好的麦仁与大米，大火保持翻滚沸腾18分钟至米麦开花成浓白厚汤。',
        timerSeconds: 1080,
        chefTip: '糁汤重在“浓而不腻、稠如面糊”，骨汤熬化米麦淀粉形成粘稠浆体。'
      },
      {
        stepIndex: 3,
        title: '下牛肉片生姜足量黑胡椒',
        instruction: '倒入熟牛肉片、大量细生姜末、生抽、盐和足足1茶匙黑白胡椒粉，大火翻滚煮3分钟至胡椒辛香浓烈渗透。',
        timerSeconds: 180,
        chefTip: '临沂糁（sá）的最大特色便是胡椒厚重、生姜辛辣，大火滚煮将胡椒辛辣完全融入骨汤中。'
      },
      {
        stepIndex: 4,
        title: '碗底打入生鸡蛋滚汤直冲',
        instruction: '在空瓷碗底打入一颗生鸡蛋打散；趁锅中糁汤剧烈鼎沸达到100℃的一瞬间，一大勺滚沸糁汤直冲入碗，将生蛋液冲成丝滑云朵蛋花。',
        timerSeconds: 30,
        chefTip: '“热汤冲生蛋”是喝糁的最地道吃法，滚烫的高温瞬间把蛋液烫熟成乳白如纱的嫩蛋花。'
      },
      {
        stepIndex: 5,
        title: '撒香菜香油起锅热饮',
        instruction: '撒入香葱花、香菜碎，淋入芝麻香油，配油条或吊炉烧饼，趁滚烫大口喝下。',
        timerSeconds: 20,
        chefTip: '胡椒生姜辛热扑鼻，热气腾腾喝下一碗大汗淋漓、通体舒坦。'
      }
    ],
    chefTips: [
      '选用去皮小麦仁，增加耐嚼筋道麦香。',
      '牛骨老汤煲煮，大火滚出白稠乳浆。',
      '黑白胡椒粉量要足，辛辣温热是临沂糁灵魂。',
      '滚沸热汤冲碗底生蛋液，烫成极嫩蛋花。'
    ],
    proTips: '牛骨浓汤煲化麦仁大米，下熟牛肉片与重度黑胡椒生姜滚沸，乘100度滚汤冲入碗底生蛋液成嫩蛋花，热辣滚烫、非遗名吃。',
    nutritionHighlights: '牛骨高汤富含胶原蛋白与骨钙，生姜胡椒散寒止痛、温中开胃，是山东民间御寒健脾、发汗解表的传奇名汤。'
  },
  {
    id: 'rec_congee_66',
    name: '上海荠菜冬笋鲜肉黄豆咸香菜粥',
    subtitle: '春野鲜荠菜碧绿清香，冬笋爽脆五花肉酥香，老上海泡饭菜粥情怀',
    region: '上海/江南',
    cookingMethod: '明火煮煲',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '简单',
    servings: 2,
    calories: 260,
    protein: 16.5,
    fat: 7.0,
    carbs: 33.0,
    ratio: '1:10 (大米80g:水800ml)',
    tags: ['海派风味', '荠菜鲜香', '冬笋清脆', '老上海菜饭'],
    ingredients: [
      { name: '新鲜野生绿荠菜 (切碎末)', amount: 80, unit: '克', type: 'main' },
      { name: '时令鲜冬笋', amount: 50, unit: '克', type: 'main' },
      { name: '新鲜猪前腿肉末/三层肉丁', amount: 80, unit: '克', type: 'main' },
      { name: '优质浸泡大黄豆', amount: 20, unit: '克', type: 'secondary' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '生姜末', amount: 8, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '传统熟猪油 (上海菜粥灵魂)', amountText: '1 汤匙 (15g)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '荠菜焯水过凉挤干切碎',
        instruction: '鲜荠菜摘去黄叶洗净泥沙，入沸水锅快速焯烫10秒立刻捞出投入冷水中拔凉，挤干水分后切成细碎末备用。',
        timerSeconds: 180,
        chefTip: '焯水十秒过凉水能固化荠菜的叶绿素，去除泥草气，同时保证在后续煮粥时依然翠绿不发黄。'
      },
      {
        stepIndex: 2,
        title: '冬笋切小丁焯水去涩',
        instruction: '冬笋去皮切成玉米粒大小的细丁，沸水加少许盐焯烫2分钟捞出沥干。',
        timerSeconds: 180,
        chefTip: '冬笋切细丁不仅容易熟，而且在软糯菜粥中提供清脆跳跃的口感反差。'
      },
      {
        stepIndex: 3,
        title: '熟猪油煸香肉末与冬笋',
        instruction: '锅中放1汤匙熟猪油化开，下姜末与肉末小火煸炒出油，倒入冬笋丁与少许生抽翻炒出香气备用。',
        timerSeconds: 180,
        chefTip: '老上海菜粥必用猪油煸炒肉丁，猪油独特的动物油脂香气能把荠菜的草本清香完全衬托出来。'
      },
      {
        stepIndex: 4,
        title: '大米黄豆砂锅煲煮开花',
        instruction: '砂锅水滚下大米与泡透的黄豆，大火翻滚熬制18分钟至米粒碎化开花，倒入煸好的猪油肉末冬笋丁中火同煮5分钟。',
        timerSeconds: 1380,
        chefTip: '黄豆与大米同熬增添豆香，肉丁冬笋与米粥融为一体。'
      },
      {
        stepIndex: 5,
        title: '下入碎荠菜调盐关火出锅',
        instruction: '关火前1分钟倒入切碎的荠菜末推匀，调入食用盐与白胡椒粉，关火加盖焖半分钟即可起锅。',
        timerSeconds: 60,
        chefTip: '荠菜最后入锅拌匀即关火，保持清碧如翡翠，春意盎然。'
      }
    ],
    chefTips: [
      '荠菜沸水焯10秒过凉水挤干切碎保持翠绿。',
      '冬笋切小碎丁焯水去除草酸涩味。',
      '用熟猪油煸炒肉末与冬笋激发地道江南香。',
      '荠菜出锅前1分钟投入，碧绿清香。'
    ],
    proTips: '熟猪油煸香肉丁与冬笋，与大米黄豆煲出稠粥，出锅前拌入焯透鲜荠菜碎，碧绿如翠、笋脆肉香，老上海暖心菜粥。',
    nutritionHighlights: '荠菜含丰富胡萝卜素、维生素C与高天然钙质，冬笋粗纤维清肠通便，低脂鲜美、清热和中。'
  },
  {
    id: 'rec_congee_67',
    name: '苏州清香荷叶莲子鸡头米夏令粥',
    subtitle: '苏州水八仙头牌新鲜鸡头米软糯爆浆，嫩荷叶煎汤碧绿，消暑清心江南极品',
    region: '江苏苏州',
    cookingMethod: '温火慢煮',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 205,
    protein: 6.0,
    fat: 1.0,
    carbs: 43.0,
    ratio: '1:10 (鸡头米大米70g:荷叶清汤700ml)',
    tags: ['水八仙极品', '苏州鸡头米', '荷叶清香', '江南夏令'],
    ingredients: [
      { name: '新鲜苏州南塘芡实/鲜鸡头米', amount: 80, unit: '克', type: 'main' },
      { name: '鲜采碧绿嫩荷叶', amount: 1, unit: '张 (剪大块煎汤)', type: 'main' },
      { name: '太湖新鲜去皮鲜莲子', amount: 30, unit: '克', type: 'main' },
      { name: '太湖优质粳米', amount: 30, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '太古单晶冰糖', amountText: '20克 (清甜不夺味)', baseAmount: 20, unit: '克', isPantryStaple: true },
      { name: '干金桂花', amountText: '1克 (出锅点缀)', baseAmount: 1, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '嫩荷叶煎出碧绿清香水',
        instruction: '鲜采嫩荷叶洗净剪成大块，入锅加700ml水大火煮沸3分钟至汤呈淡碧绿色，捞去荷叶保留荷叶清香汤汁。',
        timerSeconds: 240,
        chefTip: '荷叶煮3分钟清香最足，切忌长时间死煮，久煮汤色发黄发苦。'
      },
      {
        stepIndex: 2,
        title: '荷叶清汤煲大米鲜莲子',
        instruction: '取荷叶清汤倒入砂锅大火烧沸，下入粳米与鲜莲子肉，大火煮沸后转小火慢煲15分钟至米粒开花软糯。',
        timerSeconds: 900,
        chefTip: '荷叶清芬完全渗入米汤中，汤色带淡淡草本微青，清热解暑。'
      },
      {
        stepIndex: 3,
        title: '苏州鲜鸡头米淘净准备',
        instruction: '新鲜江南鸡头米温水冲洗一遍沥干水分备用。',
        timerSeconds: 60,
        chefTip: '鲜鸡头米极其娇贵，淀粉颗粒弹性足，绝对不可过早下锅长时间炖煮，久煮会失去弹牙爆浆感变干硬。'
      },
      {
        stepIndex: 4,
        title: '下鲜鸡头米小火慢煨3分钟',
        instruction: '将新鲜鸡头米倒入滚粥中，加入单晶冰糖，小火保持微滚慢煮仅3分钟，见鸡头米微胀泛半透明即关火。',
        timerSeconds: 180,
        chefTip: '苏州名厨铁律：“鲜鸡头米入锅不过三分钟”，刚熟时入口外弹内糯、轻轻一咬浆汁在齿间化开。'
      },
      {
        stepIndex: 5,
        title: '撒干桂花起锅装碗温食',
        instruction: '盛入青瓷碗中，表面撒少许金黄干桂花，荷香、桂香与鸡头米糯香交融，冷热皆宜。',
        timerSeconds: 20,
        chefTip: '姑苏夏末秋初极品风雅小点，清凉甘甜。'
      }
    ],
    chefTips: [
      '鲜荷叶煮沸3分钟捞出取清香碧汤。',
      '鲜莲子去芯同米先煲15分钟软糯。',
      '鲜鸡头米严格控制煮3分钟，保持软糯弹浆。',
      '点缀干金桂花，荷香桂香幽雅动人。'
    ],
    proTips: '鲜嫩荷叶煎清汤熬白米鲜莲，下苏州新鲜鸡头米仅煮3分钟弹糯爆浆，撒金桂花调冰糖，清幽雅致、消夏安神。',
    nutritionHighlights: '新鲜鸡头米富含大量复合淀粉、蛋白质、维生素与矿物质，健脾固肾、抗衰延年，中医称其为“水中人参”。'
  },
  {
    id: 'rec_congee_68',
    name: '四川香辣牛肉末皮蛋特色风味粥',
    subtitle: '手剁牛里脊炒出红油麻辣焦香，松花皮蛋切丁，川味火辣醇浓落胃',
    region: '四川成都',
    cookingMethod: '生滚调味',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 275,
    protein: 21.0,
    fat: 8.0,
    carbs: 30.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['川味特色', '香辣开胃', '牛肉末酥香', '川式改良'],
    ingredients: [
      { name: '新鲜黄牛里脊 (手剁粗末)', amount: 120, unit: '克', type: 'main' },
      { name: '无铅松花皮蛋', amount: 2, unit: '枚 (切丁)', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜切细末', amount: 10, unit: '克', type: 'secondary' },
      { name: '炒香熟黄豆/油炸花生碎', amount: 15, unit: '克', type: 'secondary' },
      { name: '鲜细葱花与香菜末', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '正宗郫县红油豆瓣酱 (剁细)', amountText: '1 汤匙 (15g 川味灵魂)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '汉源大红袍青花椒粉', amountText: '半茶匙 (2g 微麻提神)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '四川红油辣子', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '菜籽油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '菜油煸炒豆瓣红油牛肉末',
        instruction: '热锅倒入熟菜籽油烧热，下姜末与剁细的郫县豆瓣酱小火煸炒出红油豆瓣香，倒入牛肉末大火快速煸炒至水分收干、呈酥香焦脆的红油牛肉臊子盛出。',
        timerSeconds: 240,
        chefTip: '牛肉末必须煸干水分炒出酥香焦红，不仅去腥，更赋予整锅粥令人食欲大开的川味浓烈酱香。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火煲煮稠白粥底',
        instruction: '砂锅沸水下淘净大米，大火保持剧烈翻滚18分钟熬至米花绽开、浓白如脂。',
        timerSeconds: 1080,
        chefTip: '稠白粥底能包容红油的麻辣，使得入口顺滑温厚而不呛喉。'
      },
      {
        stepIndex: 3,
        title: '下皮蛋丁慢煮激发底香',
        instruction: '皮蛋切小丁，倒入沸滚白粥中中火慢煮3分钟，皮蛋碱香与米浆融合。',
        timerSeconds: 180,
        chefTip: '皮蛋的绵滑咸香刚好能化解麻辣油腻，二者奇妙碰撞相融。'
      },
      {
        stepIndex: 4,
        title: '倒入香辣牛肉末同滚2分钟',
        instruction: '将煸好的红油牛肉臊子倒入粥中，淋入生抽与少许盐，大火滚煮2分钟，整锅粥染成金红微辣的火辣色泽。',
        timerSeconds: 120,
        chefTip: '红油在滚烫米浆中完全乳化，米粒吸饱肉香红油。'
      },
      {
        stepIndex: 5,
        title: '撒花椒粉红油酥黄豆出锅',
        instruction: '盛入大瓷碗，撒入汉源花椒粉、现炸酥黄豆碎、葱花香菜，淋半勺红油辣子开吃。',
        timerSeconds: 30,
        chefTip: '麻、辣、鲜、香、脆五味俱全，天冷或食欲不振时一碗下肚酣畅淋漓。'
      }
    ],
    chefTips: [
      '熟菜籽油小火炒香郫县豆瓣红油。',
      '牛肉末煸炒至微焦酥香制成川味臊子。',
      '皮蛋丁先下煮融打底，中和辛辣。',
      '出锅加汉源青花椒粉与酥黄豆，麻辣香脆。'
    ],
    proTips: '郫县豆瓣煸香炒出红油牛肉末臊子，与皮蛋白粥大火同滚，出锅撒汉源青花椒粉与油炸酥黄豆，麻辣鲜香、颠覆传统。',
    nutritionHighlights: '牛肉提供优质高蛋白，辣椒与花椒富含辣椒素与芳香醇，能驱寒祛湿、强力唤醒食欲。'
  },
  {
    id: 'rec_congee_69',
    name: '东北大碴子红小豆柴火铁锅稠粘粥',
    subtitle: '大粒黄玉米碴经年柴火大锅慢煨，红小豆出沙软糯，大碴粥筋道糊香',
    region: '黑龙江/东北',
    cookingMethod: '铁锅慢熬',
    prepTimeMinutes: 30,
    cookTimeMinutes: 60,
    difficulty: '简单',
    servings: 2,
    calories: 220,
    protein: 7.0,
    fat: 2.0,
    carbs: 45.0,
    ratio: '1:9 (大碴子杂粮80g:水720ml)',
    tags: ['东北特色', '大碴子粥', '粗粮筋道', '黑土地风情'],
    ingredients: [
      { name: '东北农家大粒笨玉米碴子', amount: 50, unit: '克', type: 'main' },
      { name: '东北农家红小豆/大红饭豆', amount: 30, unit: '克', type: 'main' },
      { name: '纯净水', amount: 720, unit: 'ml', type: 'main' }
    ],
    seasonings: [
      { name: '食用小苏打', amountText: '指尖微量 (0.5g 东北大厨不传之秘)', baseAmount: 0.5, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '大碴子红小豆温水充分浸泡',
        instruction: '大粒玉米碴与红小豆淘净，温水浸泡4小时以上充分吸水变软发胀。',
        timerSeconds: 14400,
        chefTip: '东北大碴子颗粒极大质地极其坚硬，必须提前泡透，不然煮两小时也煮不透芯。'
      },
      {
        stepIndex: 2,
        title: '铁锅足水大火下锅狂滚',
        instruction: '铁锅或厚底铸铁锅注入720ml水大火烧至大滚，倒入泡好的大碴子与红小豆，大火保持翻滚沸腾20分钟。',
        timerSeconds: 1200,
        chefTip: '大火保持翻滚，硬颗粒在对流中撞击破裂，绝不盖严防止溢锅。'
      },
      {
        stepIndex: 3,
        title: '加微量食用碱面小火慢煨',
        instruction: '加入0.5g食用小苏打搅拌均匀，立刻盖严锅盖转微小火慢煲40分钟。',
        timerSeconds: 2400,
        chefTip: '东北熬大碴粥的核心绝技就在这一星碱面！微量碱能迅速软化玉米硬壳，促使玉米淀粉糊化出胶，红小豆极速出沙。'
      },
      {
        stepIndex: 4,
        title: '木勺用力顺锅底揽稠',
        instruction: '开盖用木勺顺时针用力搅动锅底5分钟（俗称“揽大碴子”），直至整锅粥黏稠拉丝，米豆相融。',
        timerSeconds: 300,
        chefTip: '用力揽动使破碎的豆沙与玉米多糖融为一体，浓稠透亮。'
      },
      {
        stepIndex: 5,
        title: '关火焖透出锅配小菜咸鸭蛋',
        instruction: '关火离灶，加盖焖10分钟起锅盛大粗瓷碗，配东北咸鸭蛋或炝拌土豆丝，极香极饱腹。',
        timerSeconds: 600,
        chefTip: '大碴子嚼起来Q弹筋道，红豆绵沙，独特的糊香味令人久久回味。'
      }
    ],
    chefTips: [
      '大粒玉米碴必须温水浸泡4小时以上泡透心。',
      '加入指尖微量食用小苏打迅速软化豆皮出沙。',
      '煮熟后用木勺用力顺搅5分钟使米豆交融。',
      '关火加盖焖透10分钟，筋道不干硬。'
    ],
    proTips: '大粒玉米碴与红小豆浸透，入铁锅加微量食用碱大火翻滚转小火慢煨1小时，木勺揽稠，筋道爽弹、豆沙甘香、地道关东风骨。',
    nutritionHighlights: '保留了玉米全部的胚芽与胚乳，富含玉米黄素、亚油酸、植物粗纤维与钾，刮肠排毒、降脂饱腹。'
  },
  {
    id: 'rec_congee_70',
    name: '陕北延安糜子米红枣稠饭米汤',
    subtitle: '黄土高原软黄糜子米，清涧大红枣甘甜，擀面杖顺锅强力揽出金黄稠脂',
    region: '陕西延安/陕北',
    cookingMethod: '大火煮开慢焖强搅',
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: '中等',
    servings: 2,
    calories: 240,
    protein: 6.0,
    fat: 2.0,
    carbs: 50.0,
    ratio: '1:8 (黄糜子米80g:水640ml)',
    tags: ['陕北非遗', '延安精神', '糜子稠饭', '米汤如乳'],
    ingredients: [
      { name: '陕北正宗软黄糜子米/大黄米', amount: 80, unit: '克', type: 'main' },
      { name: '陕北清涧狗头大红枣', amount: 8, unit: '枚', type: 'main' },
      { name: '优质红小豆', amount: 20, unit: '克 (提前浸泡)', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯净水', amountText: '640ml (自带红枣甘甜，原味纯正)', baseAmount: 640, unit: 'ml', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '软黄糜子米淘净浸泡',
        instruction: '选用陕北梯田产软黄糜子米淘洗干净，加温水浸泡30分钟；红豆提前浸泡2小时。',
        timerSeconds: 1800,
        chefTip: '黄糜子米富含高粘性支链淀粉，水温适宜浸透后易出粘稠金黄米膏。'
      },
      {
        stepIndex: 2,
        title: '清涧大红枣洗净划花刀',
        instruction: '大红枣洗净，在果皮表面纵向划三道小口子备用。',
        timerSeconds: 120,
        chefTip: '划口子能让红枣内部丰沛的果胶与枣糖在沸煮中彻底融入糜子饭中。'
      },
      {
        stepIndex: 3,
        title: '下红豆糜子大火沸煮15分钟',
        instruction: '铁锅注水大沸，先下红豆煮10分钟，倒入浸好的黄糜子米与大红枣，大火保持翻滚沸腾15分钟。',
        timerSeconds: 1500,
        chefTip: '沸水煮透米粒破裂，汤色转为浓亮金黄色。'
      },
      {
        stepIndex: 4,
        title: '陕北传统手法“揽稠饭”',
        instruction: '转微火，用特制木擀面杖或粗勺顺锅壁同一方向用力顺搅（陕北土语称“揽饭”）持续5分钟，将饭搅至如金胶般起筋拉丝。',
        timerSeconds: 300,
        chefTip: '“揽”是陕北稠饭的灵魂，通过强力机械搅拌迫使糜子高黏多糖剧烈糊化，稠饭才能立筷不倒。'
      },
      {
        stepIndex: 5,
        title: '微火加盖焖透出金亮稠羹',
        instruction: '揽匀后微火加盖焖透8分钟关火出锅，盛出金黄稠饭，上层浮一层浓滑金黄米汤，红枣甘润，温香扑鼻。',
        timerSeconds: 480,
        chefTip: '红枣软烂甜香，糜子黏软拉丝，陕北红军长征与黄土高坡传唱百年的生命暖粮。'
      }
    ],
    chefTips: [
      '选用陕北软黄糜子米，粘性极高自带纯正谷香。',
      '清涧大红枣划口子煮出天然枣糖。',
      '微火用木棍顺锅壁用力“揽”出筋道拉丝质感。',
      '加盖焖透出厚厚一层金黄甘润米汤。'
    ],
    proTips: '正宗陕北软黄糜子米与清涧大红枣同煮，用木杖顺壁用力“揽”出筋力粘性，焖至金黄如胶、枣香扑鼻，黄土高原至真温养。',
    nutritionHighlights: '糜子米富含人体必需的8种氨基酸、维生素E与胡萝卜素，大红枣补中益气、养血安神，温补脾胃极佳。'
  },
  {
    id: 'rec_congee_71',
    name: '云南松茸鲜火腿生滚山珍香米粥',
    subtitle: '香格里拉新鲜松茸切厚片菌香弥漫，宣威老火腿咸鲜提味，彩云山珍绝味',
    region: '云南',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 260,
    protein: 19.5,
    fat: 6.8,
    carbs: 30.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['彩云山珍', '香格里拉松茸', '宣威火腿', '山野菌香'],
    ingredients: [
      { name: '新鲜香格里拉松茸', amount: 2, unit: '朵 (约60g)', type: 'main' },
      { name: '正宗宣威老火腿薄片', amount: 40, unit: '克 (三肥七瘦)', type: 'main' },
      { name: '云南梯田红米/香米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '新鲜香葱花', amount: 12, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯云南菜籽油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '云南米酒', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '微量 (火腿带咸，尝后酌加)', baseAmount: 1, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '陶瓷刀轻削松茸切厚片',
        instruction: '新鲜松茸切勿泡水，用陶瓷刀或竹刀轻轻削去根部泥土，湿毛巾轻轻擦去表面杂质，切成约3毫米饱满厚片备用。',
        timerSeconds: 300,
        chefTip: '松茸绝不能泡水，遇水菌香挥发且肉质变水肿发软；切厚片在热滚中能牢牢锁住特有的泥土与松木香气。'
      },
      {
        stepIndex: 2,
        title: '宣威火腿切薄片微煸出陈油',
        instruction: '宣威火腿剔除氧化黄油切成极薄小片，锅中下几滴油小火慢煸1分钟逼出陈年火腿油与浓郁肉香备用。',
        timerSeconds: 180,
        chefTip: '火腿微煸能逼出沉睡的陈年氨基酸风味，为松茸提供咸鲜油脂底蕴。'
      },
      {
        stepIndex: 3,
        title: '大米与火腿同煲入底味',
        instruction: '砂锅水滚下大米与煸香的火腿片，大火翻滚熬制18分钟，煮至米花全开、火腿咸香融入粥浆中。',
        timerSeconds: 1080,
        chefTip: '火腿耐煮，随米同煲将复合肉鲜渗入米油中，奠定深厚底味。'
      },
      {
        stepIndex: 4,
        title: '下新鲜厚松茸片大火生滚1分半',
        instruction: '转大火让粥大浪沸腾，加入姜丝，倒入切好的厚松茸片，保持大火沸滚1分半钟，松茸断生出香即刻关火。',
        timerSeconds: 90,
        chefTip: '松茸烹饪重在火候，大火滚烫90秒刚刚断生最为爽脆多汁，久煮芳香精油完全挥发、肉质发烂。'
      },
      {
        stepIndex: 5,
        title: '撒现磨白胡椒葱花起锅',
        instruction: '尝味（火腿本身带足咸香通常无需加盐），撒入少许现磨白胡椒粉与鲜葱花，关火加盖焖半分钟即可温食。',
        timerSeconds: 30,
        chefTip: '整锅粥弥漫着大自然原始山林的浓烈松木清香，火腿咸鲜、松茸爽脆多汁。'
      }
    ],
    chefTips: [
      '新鲜松茸湿巾擦拭切3毫米厚片，绝不可泡水。',
      '宣威火腿微煸出陈油，与大米同煲打底。',
      '厚松茸片大火生滚仅需90秒断生立刻停火。',
      '火腿自带咸味，无需多加食用盐。'
    ],
    proTips: '松茸湿巾擦净切厚片，宣威老火腿小火微煎出陈油与大米熬稠，大火生滚松茸仅90秒断生停火，林海松香扑鼻、鲜咸脆嫩。',
    nutritionHighlights: '松茸富含全球独有的抗肿瘤活性物质松茸多糖与松茸多肽，火腿提供丰富游离氨基酸，强健免疫机能、补气生津。'
  },
  {
    id: 'rec_congee_72',
    name: '贵州苗家酸汤鲜鱼片开胃生滚粥',
    subtitle: '黔东南凯里非遗野生红酸汤，草鱼片双飞薄透，木姜子油酸辣开胃落胃提神',
    region: '贵州凯里/苗乡',
    cookingMethod: '生滚酸汤',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '中等',
    servings: 2,
    calories: 235,
    protein: 21.0,
    fat: 5.5,
    carbs: 26.0,
    ratio: '1:10 (米70g:酸汤底700ml)',
    tags: ['贵州非遗', '凯里红酸汤', '木姜子油', '酸辣开胃'],
    ingredients: [
      { name: '新鲜草鱼/黑鱼双飞薄片', amount: 150, unit: '克', type: 'main' },
      { name: '正宗凯里红酸汤 (自然发酵)', amount: 60, unit: 'ml', type: 'main' },
      { name: '东北大米', amount: 70, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '贵州野生木姜子油', amount: 3, unit: '滴 (灵魂风味)', type: 'secondary' },
      { name: '折耳根/香菜碎与蒜苗花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '熟菜籽油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鱼柳双飞薄片上浆封油',
        instruction: '草鱼或黑鱼净肉柳斜切成1.5毫米双飞蝴蝶薄片，加米酒、少许盐、白胡椒粉和淀粉抓匀薄浆，最后封入半茶匙熟菜油。',
        timerSeconds: 240,
        chefTip: '双飞薄片在酸汤热滚中极易瞬间烫熟，薄浆封油能保护鱼肉不脱水碎裂。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火熬好顺滑白粥',
        instruction: '砂锅水滚下大米，大火煲煮18分钟熬成米花绽开、浓稠顺滑的白粥底。',
        timerSeconds: 1080,
        chefTip: '白粥底要保持滚沸，米浆能很好地融合酸汤的发酵酸味。'
      },
      {
        stepIndex: 3,
        title: '调入正宗凯里红酸汤煮沸',
        instruction: '将60ml自然发酵凯里红酸汤倒入滚粥中顺时针搅匀，大火滚煮2分钟激出发酵番茄与糟辣椒的浓郁酸香，汤色转为鲜红油亮。',
        timerSeconds: 120,
        chefTip: '红酸汤是野生小番茄与红辣椒自然发酵而成，入滚锅一煮，独特的发酵果酸扑鼻而来。'
      },
      {
        stepIndex: 4,
        title: '大火生滚鱼片30秒关火',
        instruction: '红酸汤粥大火翻浪，下入姜丝，将鱼片均匀撒入锅中快速划散，看到鱼肉由粉红转为雪白卷挺（约30秒）立刻熄火。',
        timerSeconds: 40,
        chefTip: '酸汤中果酸能促使鱼蛋白迅速凝固，30秒断生即可，鱼肉极其滑嫩无腥味。'
      },
      {
        stepIndex: 5,
        title: '滴木姜子油撒蒜苗折耳根',
        instruction: '关火后立即滴入3滴灵魂野生木姜子油，撒入青蒜苗末与香菜碎（亦可加折耳根嫩碎），滚烫起锅。',
        timerSeconds: 20,
        chefTip: '木姜子油具有标志性的类似柠檬草的浓郁奇香，是苗家酸汤的灵魂，几滴即可让整锅粥风味升华。'
      }
    ],
    chefTips: [
      '草鱼黑鱼切1.5毫米双飞蝴蝶薄片。',
      '红酸汤入沸粥大滚2分钟激发出酵香。',
      '大火生滚鱼片30秒雪白即关火。',
      '出锅必滴2-3滴野生木姜子油提神醒脾。'
    ],
    proTips: '自然发酵凯里红酸汤入沸粥调出色泽艳红底汤，薄鱼片大火生滚30秒断生关火，滴入灵魂木姜子油，酸辣开胃、醒脾生津。',
    nutritionHighlights: '发酵酸汤富含乳酸、有机酸与丰富番茄红素，能强力促进消化液分泌、生津止渴、解腻开胃。'
  },
  {
    id: 'rec_congee_73',
    name: '台湾地瓜白米香甜古早味稀饭',
    subtitle: '红心蜜地瓜切块软糯化糖，蓬莱香米慢熬出绵长米油，台湾古早温情',
    region: '台湾/闽南',
    cookingMethod: '温火慢熬',
    prepTimeMinutes: 10,
    cookTimeMinutes: 30,
    difficulty: '新手友好',
    servings: 2,
    calories: 215,
    protein: 4.0,
    fat: 1.0,
    carbs: 48.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['台湾古早味', '红心地瓜', '清甜温和', '家常经典'],
    ingredients: [
      { name: '台湾红心蜜地瓜/黄心地瓜', amount: 150, unit: '克', type: 'main' },
      { name: '优质蓬莱米/珍珠米', amount: 70, unit: '克', type: 'main' },
      { name: '纯净山泉水', amount: 700, unit: 'ml', type: 'main' }
    ],
    seasonings: [
      { name: '食用精盐', amountText: '指尖微量 (0.3g 激发地瓜天然甜味)', baseAmount: 0.3, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '地瓜去皮切滚刀厚块',
        instruction: '红心蜜地瓜削皮洗净，切成约2.5cm的滚刀块，浸泡在清水中防氧化变黑。',
        timerSeconds: 180,
        chefTip: '切大块地瓜耐煮，煮到最后外层化沙融入米浆，内里依然绵密甘甜如蜜糖。'
      },
      {
        stepIndex: 2,
        title: '米与地瓜冷水同入锅大火烧沸',
        instruction: '砂锅注入700ml清水，下入淘洗好的大米与地瓜块，大火烧至大滚沸腾10分钟，中途顺时针搅动几次防沉底。',
        timerSeconds: 600,
        chefTip: '地瓜稀饭讲究冷水下锅，地瓜在水温渐升过程中，内部淀粉酶充分激活将淀粉水解为麦芽糖，甜度倍增。'
      },
      {
        stepIndex: 3,
        title: '转中小火慢煲20分钟出糖心',
        instruction: '转中小火加盖留微缝慢熬20分钟，煮至米花全部爆开、汤色泛微黄浓稠，地瓜用筷子一扎即透。',
        timerSeconds: 1200,
        chefTip: '慢熬使地瓜天然胡萝卜素与糖分析入米汤，粥面凝出一层金黄色米油。'
      },
      {
        stepIndex: 4,
        title: '加入微量细盐激发甘甜',
        instruction: '调入指尖大小的极微量细盐（0.3g），顺时针轻轻搅匀，关火离灶。',
        timerSeconds: 60,
        chefTip: '微量细盐能瞬间提振地瓜的天然蜜甜，使甜味更加醇厚深长、绝不发齁。'
      },
      {
        stepIndex: 5,
        title: '加盖焖透出锅享用',
        instruction: '关火加盖焖3分钟即可盛出，配台湾酱菜、肉松或荫豉蚵，古早味满溢。',
        timerSeconds: 180,
        chefTip: '原汁原味的质朴甘香，温润养胃。'
      }
    ],
    chefTips: [
      '选用红心蜜地瓜切2.5cm滚刀厚块。',
      '冷水下锅让地瓜缓慢受热释放麦芽糖。',
      '中小火慢熬20分钟至地瓜外层化沙。',
      '出锅加指尖微盐提味，配台湾肉松酱菜绝品。'
    ],
    proTips: '红心蜜地瓜大块冷水下锅慢熬，让地瓜内部淀粉充分水解成麦芽糖，地瓜外融内糯，微盐引出极致甘甜，台湾传唱百年的古早味稀饭。',
    nutritionHighlights: '地瓜富含膳食纤维、胡萝卜素、维生素A与钾，通便排毒、平稳血压，温和滋养肠胃。'
  },
  {
    id: 'rec_congee_74',
    name: '黄金甜玉米粒鲜虾碎菜儿童长高粥',
    subtitle: '水果甜玉米粒鲜甜爆浆，手剁活虾仁Q弹补钙，时蔬碎菜促进消化',
    region: '全国/儿童食养',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 220,
    protein: 17.5,
    fat: 4.5,
    carbs: 28.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['儿童长高', '补钙促发育', '玉米爆浆', '营养均衡'],
    ingredients: [
      { name: '新鲜水果甜玉米粒 (现剥)', amount: 40, unit: '克', type: 'main' },
      { name: '新鲜青虾仁 (手剁小丁)', amount: 100, unit: '克', type: 'main' },
      { name: '优质胚芽大米', amount: 70, unit: '克', type: 'main' },
      { name: '鲜嫩胡萝卜碎丁', amount: 25, unit: '克', type: 'secondary' },
      { name: '鲜嫩小菠菜碎', amount: 20, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '初榨核桃油/亚麻籽油', amountText: '1 茶匙 (5ml 健脑益智)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g 微盐健康)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鲜虾切小丁薄浆抓匀',
        instruction: '鲜虾仁去除虾线，切成约0.8cm的小颗粒丁，加少许淀粉与几滴清水轻轻抓拌薄浆。',
        timerSeconds: 180,
        chefTip: '切细小颗粒适合儿童吞咽咀嚼，薄浆锁水使虾肉熟后保持Q弹多汁。'
      },
      {
        stepIndex: 2,
        title: '胡萝卜切细末菠菜焯水',
        instruction: '胡萝卜切成细小碎末；鲜嫩菠菜沸水焯烫30秒去草酸捞出过凉水切碎。',
        timerSeconds: 240,
        chefTip: '菠菜必须焯水去除草酸，否则会阻碍孩子对虾仁钙质的吸收。'
      },
      {
        stepIndex: 3,
        title: '甜玉米胡萝卜大米同煲粥底',
        instruction: '砂锅水滚下胚芽米、甜玉米粒与胡萝卜末，大火滚煮18分钟至米花全开，胡萝卜与玉米清甜溶入米汤。',
        timerSeconds: 1080,
        chefTip: '现剥水果玉米粒多汁爆浆，煮出的粥自带诱人金黄与甘甜果香。'
      },
      {
        stepIndex: 4,
        title: '下入虾仁丁大火生滚1分半',
        instruction: '转大火沸滚，倒入腌好的虾仁小丁推散，大火煮1分半钟至虾肉完全变粉红熟透。',
        timerSeconds: 90,
        chefTip: '虾丁细小极易熟，1分半钟断生保持脆嫩。'
      },
      {
        stepIndex: 5,
        title: '拌入菠菜碎淋核桃油出锅',
        instruction: '放入切碎的菠菜碎推匀，调入少许盐，关火淋入1茶匙初榨核桃油即可盛出。',
        timerSeconds: 30,
        chefTip: '色彩红黄白绿俱全，核桃油富含DHA与α-亚麻酸，健脑益智。'
      }
    ],
    chefTips: [
      '鲜虾去虾线切0.8cm小粒方便咀嚼。',
      '菠菜焯水30秒去除草酸保护钙质吸收。',
      '水果甜玉米粒鲜甜爆浆增进食欲。',
      '出锅淋初榨核桃油健脑益智。'
    ],
    proTips: '现剥甜玉米粒胡萝卜大米同煲甜浆，鲜虾切小粒生滚1分半断生，拌入焯透菠菜碎与初榨核桃油，钙铁锌DHA全覆盖，孩子长高必备。',
    nutritionHighlights: '富含易消化海洋动物蛋白、天然活性钙质、胡萝卜素与DHA必需脂肪酸，强健骨骼牙齿、保护视力、促进大脑发育。'
  },
  {
    id: 'rec_congee_75',
    name: '银鱼碎菠菜嫩豆腐泥婴幼辅食补钙粥',
    subtitle: '太湖无骨无刺鲜银鱼碎，嫩豆腐研磨成泥，焯水菠菜细泥，婴幼辅食补钙头牌',
    region: '全国/婴幼辅食',
    cookingMethod: '温火慢熬研磨',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 180,
    protein: 15.0,
    fat: 4.5,
    carbs: 21.0,
    ratio: '1:10 (米50g:水500ml)',
    tags: ['婴幼辅食', '无刺无骨', '极速补钙', '细腻如脂'],
    ingredients: [
      { name: '新鲜无刺小银鱼/太湖银鱼', amount: 60, unit: '克 (切碎末)', type: 'main' },
      { name: '新鲜嫩豆腐/南豆腐', amount: 80, unit: '克 (勺背压泥)', type: 'main' },
      { name: '优质有机宝宝胚芽米', amount: 50, unit: '克', type: 'main' },
      { name: '鲜嫩菠菜嫩尖', amount: 20, unit: '克 (焯水切泥)', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯初榨亚麻籽油/核桃油', amountText: '1 茶匙 (5ml 宝宝健脑油)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '指尖微量 (1岁以下完全不加，大童极微量)', baseAmount: 0.3, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鲜银鱼温水冲净切极细碎末',
        instruction: '新鲜银鱼用温开水冲洗干净，沥干后在案板上用刀细细剁成约2毫米的微小碎末。',
        timerSeconds: 180,
        chefTip: '太湖小银鱼天然通体透明、无鳞无硬刺，全身皆可食用，切成微小碎末极适宜婴儿脆弱的喉咙吞咽。'
      },
      {
        stepIndex: 2,
        title: '嫩豆腐勺背研磨成细腻豆腐泥',
        instruction: '取新鲜嫩豆腐入开水锅焯水1分钟去豆腥味，捞出放入碗中用勺背彻底碾压研磨成顺滑无颗粒的豆腐泥。',
        timerSeconds: 180,
        chefTip: '碾磨成细腻豆腐泥与米浆融合后，呈现如奶冻般丝滑的触感。'
      },
      {
        stepIndex: 3,
        title: '菠菜焯水1分钟彻底除草酸切泥',
        instruction: '只取菠菜鲜嫩绿叶，入沸水锅焯烫整整1分钟去除草酸，捞出过凉开水彻底挤干，切成极细菜泥。',
        timerSeconds: 180,
        chefTip: '辅食制作中菠菜必须充分焯透1分钟，草酸会破坏宝宝娇嫩肠胃对银鱼和豆腐中丰富钙质的吸收。'
      },
      {
        stepIndex: 4,
        title: '胚芽米熬成浓稠全烂米油粥',
        instruction: '小锅下胚芽大米加500ml水大火烧沸，转小火慢煮20分钟至米花完全软烂糊化，形成厚厚米油。',
        timerSeconds: 1200,
        chefTip: '米粒熬至完全碎化开花，汤浓如脂，形成极佳的消化吸收保护膜。'
      },
      {
        stepIndex: 5,
        title: '下银鱼豆腐菠菜泥温煨出锅',
        instruction: '倒入银鱼碎与豆腐泥，小火微滚慢煨2分钟至银鱼熟透变白，最后拌入菠菜泥推匀，关火滴入亚麻籽油或核桃油出锅。',
        timerSeconds: 120,
        chefTip: '无骨无刺、细腻绵软，滴入核桃油促进脑黄金发育。'
      }
    ],
    chefTips: [
      '天然无刺小银鱼切2毫米细碎末。',
      '嫩豆腐焯水去腥后用勺背彻底压成泥状。',
      '菠菜嫩叶焯透1分钟去除草酸保护钙质。',
      '大米熬烂出稠米油，出锅淋宝宝健脑核桃油。'
    ],
    proTips: '太湖无刺小银鱼切碎末，嫩豆腐压泥，菠菜焯透除草酸切细茸，入熟烂胚芽米油中慢煨2分钟，滴初榨核桃油，无刺细腻、极速补钙。',
    nutritionHighlights: '银鱼是天然的优质高钙全息食材，豆腐提供易吸收大豆钙与植物卵磷脂，核桃油提供DHA前体，是宝宝辅食期的黄金营养粥。'
  },
  {
    id: 'rec_congee_76',
    name: '苹果胡萝卜肉泥开胃健脾消食儿童粥',
    subtitle: '红富士苹果天然果酸促消化，胡萝卜软甜护眼，鲜肉泥滑嫩开胃生津',
    region: '全国/儿童调理',
    cookingMethod: '温火慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 195,
    protein: 14.5,
    fat: 3.5,
    carbs: 27.0,
    ratio: '1:10 (米60g:水600ml)',
    tags: ['开胃消食', '苹果果酸', '肉泥顺滑', '积食调理'],
    ingredients: [
      { name: '新鲜猪里脊肉泥', amount: 80, unit: '克', type: 'main' },
      { name: '脆甜红富士苹果', amount: 50, unit: '克 (去皮擦细丝/擦泥)', type: 'main' },
      { name: '红心胡萝卜', amount: 40, unit: '克 (擦细丝/擦泥)', type: 'main' },
      { name: '优质宝宝大米', amount: 60, unit: '克', type: 'main' }
    ],
    seasonings: [
      { name: '初榨核桃油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (2g 嫩肉)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '指尖微量 (0.5g 大童调味)', baseAmount: 0.5, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '里脊肉剔筋剁成极细肉泥',
        instruction: '新鲜猪里脊剔除全部筋膜，在案板上剁成如细腻果酱般的极细肉泥，加少许淀粉与1勺温水抓匀打散上浆。',
        timerSeconds: 300,
        chefTip: '加少许水打散肉泥能防止下入沸粥时抱死成硬肉团，煮出来细腻如脂、入口即化。'
      },
      {
        stepIndex: 2,
        title: '苹果胡萝卜去皮擦细蓉泥',
        instruction: '苹果削皮去核用擦丝器擦成极细果蓉泥；胡萝卜同样削皮擦成细末泥备用。',
        timerSeconds: 180,
        chefTip: '苹果受热煮熟后果胶活性大大增强，释放天然苹果酸，能强力调理脾胃消食导滞。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬煮大米出米油',
        instruction: '砂锅水沸下大米，大火保持翻滚沸腾18分钟熬成米花全开、汤如白浆的顺滑粥底。',
        timerSeconds: 1080,
        chefTip: '米油厚重能护胃黏膜，完美承托果酸。'
      },
      {
        stepIndex: 4,
        title: '下胡萝卜泥与肉泥滑散煮熟',
        instruction: '倒入胡萝卜泥煮2分钟，转大火沸滚，倒入打散的肉泥，迅速用筷子划散，大火滚煮1分半钟至肉泥全熟变白。',
        timerSeconds: 150,
        chefTip: '肉泥快速划散成细碎小颗粒，与米浆融为一体。'
      },
      {
        stepIndex: 5,
        title: '拌入苹果泥淋核桃油出锅',
        instruction: '最后倒入苹果泥推匀煮1分钟，关火淋入核桃油即可起锅温食。',
        timerSeconds: 60,
        chefTip: '苹果泥后下能保留果香与果胶活性，酸甜适口、开胃消积。'
      }
    ],
    chefTips: [
      '猪里脊肉剔筋剁成细肉泥加温水抓散防抱团。',
      '苹果胡萝卜擦细泥，细腻好吞咽。',
      '苹果泥最后下锅煮1分钟，保留果酸果胶活性。',
      '酸甜果香有效解决儿童积食、厌食问题。'
    ],
    proTips: '里脊肉剁细泥打散，大米熬烂后同胡萝卜肉泥滑熟，最后拌入新鲜苹果泥煮1分钟，酸甜清香开胃、消食导滞、健脾养胃。',
    nutritionHighlights: '煮熟苹果富含水溶性果胶多酚与天然苹果酸，能收敛止泻、调节肠道菌群，胡萝卜护眼，专治小儿积食厌食。'
  },
  {
    id: 'rec_congee_77',
    name: '鸡胸肉芦笋荷兰豆高蛋白低卡减脂粥',
    subtitle: '低脂高蛋白鲜鸡胸肉丝顺滑不柴，鲜嫩芦笋荷兰豆清脆低卡，刮油减脂神仙粥',
    region: '全国/轻食减脂',
    cookingMethod: '生滚快烫',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 195,
    protein: 21.5,
    fat: 3.5,
    carbs: 22.0,
    ratio: '1:10 (米燕麦50g:水500ml)',
    tags: ['高蛋白低脂', '减脂控卡', '芦笋清脆', '身材管理'],
    ingredients: [
      { name: '新鲜鸡胸肉', amount: 120, unit: '克', type: 'main' },
      { name: '鲜嫩绿芦笋段', amount: 40, unit: '克', type: 'main' },
      { name: '鲜脆荷兰豆丝', amount: 30, unit: '克', type: 'main' },
      { name: '纯燕麦片与胚芽米拼配', amount: 50, unit: '克', type: 'main' },
      { name: '生姜切细丝', amount: 8, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '无菌蛋清', amountText: '半个 (嫩肉秘诀)', baseAmount: 0.5, unit: '个', isPantryStaple: true },
      { name: '料酒', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨纯黑胡椒碎', amountText: '半茶匙 (3g 燃脂提味)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鸡胸肉顺纹切丝蛋清上浆',
        instruction: '鸡胸肉顺着肌肉纹理切成细长肉丝，加料酒、少许盐、半个蛋清和淀粉抓匀上浆，淋入几滴清水静置10分钟。',
        timerSeconds: 300,
        chefTip: '蛋清是鸡胸肉滑嫩绝不干柴的核心秘诀，外层形成透气水润保护膜，大火汆烫依然多汁软嫩。'
      },
      {
        stepIndex: 2,
        title: '芦笋斜切段荷兰豆撕筋切丝',
        instruction: '嫩芦笋削去根部老皮，斜刀切成小段；荷兰豆撕去两侧老筋切成细丝备用。',
        timerSeconds: 180,
        chefTip: '芦笋与荷兰豆热量极低且富含不溶性膳食纤维，清脆爽口。'
      },
      {
        stepIndex: 3,
        title: '燕麦胚芽米大火煲煮出胶',
        instruction: '砂锅注入500ml水烧沸，下入胚芽米与纯燕麦片，大火翻滚熬制18分钟熬成粘稠顺滑的燕麦粥底。',
        timerSeconds: 1080,
        chefTip: '燕麦含有丰富的β-葡聚糖胶质，无需多放大米也能熬出厚厚米浆，饱腹感持久。'
      },
      {
        stepIndex: 4,
        title: '大火沸粥下鸡丝滚烫40秒',
        instruction: '转大火大沸，下入姜丝与腌好的鸡丝，用筷子快速划散，鸡丝变白断生（约40秒）即停止翻滚。',
        timerSeconds: 45,
        chefTip: '鸡胸肉丝切细后熟得极快，40秒断生即可，多煮几秒肉中水分被挤出就会发硬变柴。'
      },
      {
        stepIndex: 5,
        title: '下芦笋荷兰豆黑胡椒出锅',
        instruction: '立即倒入芦笋段与荷兰豆丝，推匀滚煮30秒保持碧绿脆嫩，调入盐与现磨黑胡椒碎起锅温食。',
        timerSeconds: 30,
        chefTip: '芦笋荷兰豆断生即起，脆甜爽口，黑胡椒提味增鲜促进代谢。'
      }
    ],
    chefTips: [
      '鸡胸肉加无菌蛋清抓匀上浆，嫩滑多汁绝不发柴。',
      '选用纯燕麦加胚芽米，低升糖高饱腹。',
      '鸡丝大火快汆40秒断生即停。',
      '芦笋荷兰豆烫30秒保持翠绿多汁脆感。'
    ],
    proTips: '鸡胸肉丝用蛋清抓透锁住水分，大火生滚仅40秒多汁滑嫩，下鲜芦笋荷兰豆滚烫30秒保持翠绿，现磨黑胡椒提神，高蛋白低脂刮油首选。',
    nutritionHighlights: '鸡胸肉提供高达21g纯净低脂肪动物蛋白，芦笋富含天门冬酰胺与叶酸，荷兰豆高膳食纤维，清爽控卡、促肌减脂。'
  },
  {
    id: 'rec_congee_78',
    name: '魔芋燕麦奇亚籽低GI高饱腹刮油轻体粥',
    subtitle: '高纯度魔芋丝零卡饱腹，厚燕麦片胶质粘稠，奇亚籽遇水膨胀轻盈顺肠',
    region: '全国/低碳减脂',
    cookingMethod: '温火慢煮',
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    difficulty: '新手友好',
    servings: 2,
    calories: 145,
    protein: 5.0,
    fat: 2.5,
    carbs: 23.0,
    ratio: '魔芋150g:燕麦大米40g:水500ml',
    tags: ['超低热量', '极强饱腹', '奇亚籽膨胀', '清肠通便'],
    ingredients: [
      { name: '优质纯白魔芋结/魔芋丝', amount: 150, unit: '克', type: 'main' },
      { name: '传统纯燕麦厚片', amount: 30, unit: '克', type: 'main' },
      { name: '纯黑奇亚籽', amount: 10, unit: '克 (吸水膨胀)', type: 'main' },
      { name: '东北大米', amount: 15, unit: '克 (出米香)', type: 'secondary' }
    ],
    seasonings: [
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '细香葱花', amountText: '10克', baseAmount: 10, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '魔芋丝焯水去碱味切短段',
        instruction: '魔芋丝或魔芋结取出冲洗，入沸水锅加少许醋焯烫1分钟捞出沥干，切成约3cm短段备用。',
        timerSeconds: 120,
        chefTip: '魔芋保存液带微碱性，加几滴醋焯水能彻底去净碱味，口感脆爽如海蜇。'
      },
      {
        stepIndex: 2,
        title: '大米燕麦大火煮沸出胶',
        instruction: '砂锅注入500ml水大沸，下入大米与纯燕麦厚片，大火滚煮12分钟，燕麦释放拉丝浓稠黏质。',
        timerSeconds: 720,
        chefTip: '少许大米与燕麦为整锅粥提供细腻稠底，化解魔芋的无黏性。'
      },
      {
        stepIndex: 3,
        title: '下焯好魔芋丝慢煮5分钟',
        instruction: '倒入切短的魔芋丝段，转中小火慢煲5分钟让魔芋丝充分吸收燕麦米汤。',
        timerSeconds: 300,
        chefTip: '魔芋吸水能力极强且几乎零热量，饱腹感十足。'
      },
      {
        stepIndex: 4,
        title: '倒入奇亚籽搅拌微膨',
        instruction: '倒入黑奇亚籽，搅拌均匀微火煮2分钟关火。',
        timerSeconds: 120,
        chefTip: '奇亚籽遇热水后外层胶质迅速吸水膨胀数倍，形成滑溜溜的小凝胶颗粒，润滑肠道。'
      },
      {
        stepIndex: 5,
        title: '调入细盐胡椒葱花起锅',
        instruction: '调入食用精盐、现磨白胡椒粉与香葱碎，关火加盖焖3分钟盛出温食。',
        timerSeconds: 180,
        chefTip: '整碗粥不到150大卡，喝下一大碗抗饿饱腹长达半天，清肠排毒首选。'
      }
    ],
    chefTips: [
      '魔芋加微量醋焯水去净包装碱味。',
      '燕麦大米熬煮出天然黏润拉丝稠浆。',
      '奇亚籽入锅吸水膨胀形成凝胶颗粒。',
      '咸鲜清淡调味，抗饿饱腹热量极低。'
    ],
    proTips: '魔芋丝微醋焯净碱味切短段，与传统厚燕麦片同熬出胶，撒奇亚籽膨胀吸水，调入淡盐胡椒，极低卡路里、超强饱腹清肠。',
    nutritionHighlights: '魔芋葡甘露聚糖具有超强膨胀吸水力，奇亚籽富含Omega-3必需脂肪酸与膳食纤维，强力促进肠胃蠕动、排毒刮油。'
  },
  {
    id: 'rec_congee_79',
    name: '荷叶冬瓜生滚里脊去水肿排毒轻润粥',
    subtitle: '鲜荷叶煎出碧青清香原汤，冬瓜清甜利湿，瘦里脊肉片嫩滑不腥',
    region: '华南/岭南食养',
    cookingMethod: '生滚慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 210,
    protein: 16.0,
    fat: 4.0,
    carbs: 27.0,
    ratio: '1:10 (米70g:荷叶水700ml)',
    tags: ['消肿利水', '荷叶清香', '冬瓜清甜', '夏秋排毒'],
    ingredients: [
      { name: '新鲜猪里脊肉薄片', amount: 100, unit: '克', type: 'main' },
      { name: '清甜冬瓜片 (带皮带籽初煮)', amount: 120, unit: '克', type: 'main' },
      { name: '鲜采碧绿嫩荷叶', amount: 1, unit: '张 (剪片煮汤)', type: 'main' },
      { name: '优质丝苗米', amount: 70, unit: '克', type: 'main' },
      { name: '老生姜丝', amount: 10, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '花生油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鲜荷叶大火煎煮出碧绿香汤',
        instruction: '鲜荷叶洗净剪成大块，入锅加700ml清水大火煮沸3分钟至汤色淡碧如玉，捞去荷叶保留荷香清汤。',
        timerSeconds: 240,
        chefTip: '鲜荷叶清香宜人，煮3分钟挥发性荷叶碱完全溶入水中，久煮则变苦。'
      },
      {
        stepIndex: 2,
        title: '冬瓜切薄片里脊切片上浆',
        instruction: '冬瓜削皮切成2毫米厚薄片；猪里脊剔除筋膜切薄片，加姜丝、生抽、淀粉与少许花生油抓匀上浆。',
        timerSeconds: 240,
        chefTip: '冬瓜切薄片在滚粥中极速透明软糯，释放清甜甘淡水分。'
      },
      {
        stepIndex: 3,
        title: '荷叶清汤熬大米开花',
        instruction: '取荷叶香汤大火烧沸，倒入洗净的大米，大火翻滚熬制18分钟至米花爆开、汤如碧露。',
        timerSeconds: 1080,
        chefTip: '大米在荷叶水中熬出淡雅清香，米香与草本香浑然一体。'
      },
      {
        stepIndex: 4,
        title: '下冬瓜片与里脊肉片生滚',
        instruction: '下入冬瓜片煮1分钟至半透明，随后倒入腌好的里脊肉片用筷子快速划散，大火生滚40秒至肉片变白断生。',
        timerSeconds: 100,
        chefTip: '里脊肉片生滚40秒断生即关火，肉质极嫩不老。'
      },
      {
        stepIndex: 5,
        title: '调味白胡椒出锅温食',
        instruction: '调入食用精盐与少许白胡椒粉，撒入细葱花起锅装入白瓷大碗。',
        timerSeconds: 20,
        chefTip: '荷叶清芬、冬瓜滑润、肉片嫩弹，消暑利湿排毒。'
      }
    ],
    chefTips: [
      '鲜荷叶沸水大火煮3分钟取碧绿清露。',
      '冬瓜切薄片易软烂化甘。',
      '里脊肉薄片淀粉花生油锁水嫩滑。',
      '大火生滚40秒断生关火，利水消肿不油腻。'
    ],
    proTips: '鲜荷叶快速煎出碧绿清汤煲粥底，冬瓜切薄片生滚出甜汁，里脊肉片快汆40秒嫩滑断生，清热解暑、利尿消肿、除湿排毒。',
    nutritionHighlights: '荷叶含有荷叶碱与黄酮苷，冬瓜含丙醇二酸与大量钾离子，强力促进体内多余水分与钠盐排出，消除水肿、轻身降脂。'
  },
  {
    id: 'rec_congee_80',
    name: '白萝卜丝生姜鲜肉丝化痰止咳暖身粥',
    subtitle: '冬吃萝卜赛人参，生姜散寒肉丝鲜滑，清甜化痰顺气暖胃老火家常',
    region: '华北/传统家常',
    cookingMethod: '生滚慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 220,
    protein: 16.5,
    fat: 5.0,
    carbs: 27.5,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['冬吃萝卜', '化痰止咳', '老姜散寒', '温中顺气'],
    ingredients: [
      { name: '新鲜水嫩白萝卜 (擦细丝)', amount: 150, unit: '克', type: 'main' },
      { name: '新鲜前夹瘦肉丝', amount: 100, unit: '克', type: 'main' },
      { name: '东北大米', amount: 70, unit: '克', type: 'main' },
      { name: '老生姜 (切足量细丝)', amount: 15, unit: '克', type: 'secondary' },
      { name: '鲜嫩细小葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g 驱寒化痰)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '白萝卜擦细丝淡盐抓去辛辣',
        instruction: '水嫩白萝卜削皮，用擦丝器擦成均匀细丝，撒半茶匙盐抓揉1分钟挤出少许辛辣汁水冲净沥干。',
        timerSeconds: 180,
        chefTip: '轻微揉洗能除去生萝卜冲鼻的芥辣辛涩味，只留下清甜多汁与化痰顺气的有效成分。'
      },
      {
        stepIndex: 2,
        title: '瘦肉顺纹切丝生抽姜丝上浆',
        instruction: '猪瘦肉顺纹切成细肉丝，加入姜丝、少许生抽、淀粉与1茶匙清水抓拌上浆，淋几滴花生油封油。',
        timerSeconds: 240,
        chefTip: '肉丝锁水上浆，入沸粥后滑弹嫩润绝不塞牙。'
      },
      {
        stepIndex: 3,
        title: '砂锅足水下大米大火煲粥底',
        instruction: '砂锅水滚下淘净大米，大火保持翻滚沸腾18分钟熬成米花全开、白白稠稠的粥底。',
        timerSeconds: 1080,
        chefTip: '米汤稠厚能使萝卜丝与肉丝悬浮于米浆中，不沉底不粘锅。'
      },
      {
        stepIndex: 4,
        title: '下萝卜丝老姜丝滚煮3分钟',
        instruction: '放入白萝卜丝与大量老生姜细丝，大火滚煮3分钟至萝卜丝完全变软呈透明状，清甜滋味融入粥中。',
        timerSeconds: 180,
        chefTip: '萝卜丝煮至全透明时最为软化入味，老生姜丝激发出暖身辛香。'
      },
      {
        stepIndex: 5,
        title: '肉丝大火生滚40秒出锅',
        instruction: '大火鼎沸，撒入腌好的肉丝迅速划散，煮40秒肉丝变白断生立即关火，调入盐、白胡椒粉与香油，撒入葱花温食。',
        timerSeconds: 45,
        chefTip: '老姜丝与白胡椒粉双重散寒，萝卜清甜顺气，秋冬风寒咳嗽喝下一碗，喉头润滑通体发汗。'
      }
    ],
    chefTips: [
      '白萝卜细丝微盐抓洗去辛辣冲味。',
      '大量老生姜细丝散寒暖胃是核心。',
      '萝卜丝煮至半透明清甜甘润。',
      '肉丝最后下锅大火快汆40秒极其嫩滑。'
    ],
    proTips: '白萝卜擦丝去辛辣，老生姜切细丝与大米熬煮至萝卜透明出甜，生滚瘦肉丝40秒断生，调入白胡椒香油，顺气化痰、暖身驱寒。',
    nutritionHighlights: '民间“冬吃萝卜夏吃姜”，白萝卜含丰富芥子油、淀粉酶与粗纤维，消食化积、止咳化痰、顺气解郁，老姜温胃驱寒。'
  }
];
