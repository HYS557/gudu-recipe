// scripts/generate_full_jiangzhe.js
const fs = require('fs');
const path = require('path');

const part1 = [
  // 12道大菜名肴 (rec_prov_228 ~ rec_prov_239)
  {
    id: "rec_prov_228",
    name: "苏州名门金黄松鼠鳜鱼",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 280,
    prepTimeMinutes: 25,
    cookTimeMinutes: 18,
    difficulty: "进阶",
    portion: 3,
    ingredients: [
      { name: "太湖活鲜鳜鱼(桂鱼)", amount: 750, unit: "g", type: "main", isCore: true },
      { name: "熟剥松仁", amount: 20, unit: "g", type: "secondary", isCore: true },
      { name: "青豌豆与鲜虾仁丁", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "纯玉米干淀粉", amount: 120, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "纯正番茄沙司与白糖", baseAmount: 60, unit: "g", amountText: "60g", isPantryStaple: true },
      { name: "酿造米醋与花雕酒", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "熟猪油与植物油(炸油)", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鳜鱼去骨斜刀直刀切菱形麦穗花",
        instruction: "去头留用，鱼身带皮剖成两片去脊骨；鱼肉朝上，先斜刀片至鱼皮不切断，再直刀切成均匀菱形麦穗小条，抹花雕酒少许盐，扑透干淀粉抖落余粉。",
        timerSeconds: 400,
        chefTip: "刀刀切至鱼皮但切不可破皮，粉要扑进每一个缝隙炸开才如松鼠毛蓬松张扬。"
      },
      {
        stepIndex: 2,
        title: "提尾入八成热油炸成金黄昂首松鼠状",
        instruction: "提鱼尾在热油中荡炸定型，松鼠毛彻底炸开立起，鱼头一同下锅慢炸5分钟至金黄酥脆捞出摆盘拼接成昂首伏卧松鼠形。",
        timerSeconds: 360,
        chefTip: "高温炸至外皮硬脆敲打作响，内里鱼肉滑嫩如蒜瓣。"
      },
      {
        stepIndex: 3,
        title: "糖醋红汁沸腾浇淋鱼身吱吱有声撒松仁",
        instruction: "锅中下少许油，下番茄沙司、白糖、米醋和少许清汤熬沸，水淀粉勾芡淋熟猪油提亮，趁滚沸浇淋在鱼身上发出清脆吱吱声，撒上炸松仁豌豆。",
        timerSeconds: 120,
        chefTip: "热汁浇在热鱼上吱吱作响，形如松鼠、酸甜外脆内嫩。"
      }
    ],
    tips: "苏帮菜传世宴席头牌名肴！乾隆皇帝下江南赞不绝口，形如松鼠昂首，色泽红亮如火，外皮酥脆微酸微甜，鱼肉细嫩入口化，松仁酥香。",
    tags: ["江苏", "江浙菜", "松鼠鳜鱼", "苏帮名菜", "形如松鼠", "酸甜酥脆"]
  },
  {
    id: "rec_prov_229",
    name: "金陵古法清卤浸熟盐水鸭",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 240,
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    difficulty: "进阶",
    portion: 4,
    ingredients: [
      { name: "优质散养麻鸭或湖鸭", amount: 1500, unit: "g", type: "main", isCore: true },
      { name: "炒香热盐(加花椒八角慢炒微黄)", amount: 80, unit: "g", type: "secondary", isCore: true },
      { name: "陈年老卤汁", amount: 500, unit: "ml", type: "secondary", isCore: true },
      { name: "生姜块、大葱结、八角", amount: 40, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "绍兴纯酿料酒", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "传统香醋(佐食)", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热炒花椒盐深揉鸭体内外热擦腌透",
        instruction: "盐与花椒八角小火炒至微黄出香；趁热擦遍鸭身鸭膛，重点揉搓鸭腿翅根，腌制2小时让咸香透骨。",
        timerSeconds: 7200,
        chefTip: "热盐擦腌不仅去腥，还能使鸭肉紧致提香。"
      },
      {
        stepIndex: 2,
        title: "浸入清凉陈年老卤复腌两小时出卤挂凉",
        instruction: "将腌鸭放入陈年清老卤中浸泡2小时，挂在通风处吹干表面水气6小时成干爽白胚。",
        timerSeconds: 7200,
        chefTip: "复卤使鸭肉滋味醇厚入骨，皮白肉红。"
      },
      {
        stepIndex: 3,
        title: "微沸微温浸熟四十五分钟皮白油润",
        instruction: "汤锅加葱姜八角花雕酒烧开，提鸭烫三次让汤水灌入鸭膛，改极小微火保持汤面微起菊花泡(85-90度)慢焐45分钟出锅切块。",
        timerSeconds: 2700,
        chefTip: "不能大滚，微温慢浸鸭肉才嫩如豆腐、皮白流油。"
      }
    ],
    tips: "六朝古都金陵第一名馔！皮白肉红油润光亮，肥而不腻紧实鲜香，天然醇咸中带悠悠花椒清芬，空口吃回味无穷。",
    tags: ["江苏", "江浙菜", "金陵盐水鸭", "南京名吃", "皮白油润", "鲜香脱脂"]
  },
  {
    id: "rec_prov_230",
    name: "扬州纯手工细切清炖狮子头",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "soup",
    cookingMethod: "炖",
    calories: 260,
    prepTimeMinutes: 30,
    cookTimeMinutes: 90,
    difficulty: "进阶",
    portion: 3,
    ingredients: [
      { name: "肥四瘦六优质五花肋条肉", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩冬笋丁或马蹄细丁", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "扬州大青菜或黄芽菜叶", amount: 4, unit: "大叶", type: "secondary", isCore: true },
      { name: "葱姜浸出水与鸡蛋清", amount: 60, unit: "ml", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "绍兴陈年花雕酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "天然食用精盐", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "白胡椒粉与纯干淀粉", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "清鸡汤或排骨高汤", baseAmount: 800, unit: "ml", amountText: "800ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "纯手工细切粗斩成石榴米粒大肉粒",
        instruction: "精选五花肉绝不用绞肉机，先切成火柴粗细再横切成石榴米粒大的小方丁，略微排斩几刀保持颗粒感；加入葱姜水、蛋清、少许淀粉轻轻搅拌上劲。",
        timerSeconds: 600,
        chefTip: "细切粗斩保留肉质组织颗粒，受热后肥肉融化、瘦肉软嫩，形成入口即化的天鹅绒口感。"
      },
      {
        stepIndex: 2,
        title: "双手手心轻揉大圆球青菜叶封顶下锅",
        instruction: "肉馅在双手手心轻轻抛揉成圆球，砂锅倒入清鸡汤烧微开，将肉圆滑入锅中，表面完全覆盖焯软的青菜大叶加盖。",
        timerSeconds: 300,
        chefTip: "大青菜叶封顶既能防止肉丸晃动散碎，又能锁住蒸汽保润。"
      },
      {
        stepIndex: 3,
        title: "极小微火慢煨一个半小时汤清如茶",
        instruction: "保持极小微火慢炖90分钟，不可沸腾，出锅揭去菜叶，汤色清亮见底不浑浊，肉圆肥嫩若豆腐上席。",
        timerSeconds: 5400,
        chefTip: "微火慢养，肥肉油脂完全化入汤中，肉丸颤巍巍入口即化。"
      }
    ],
    tips: "淮扬菜刀工与火候极致神作！细切粗斩粒粒分明，肉圆硕大如狮首，质地软嫩到须用调羹舀食，入口即化毫无肥腻，汤清味极醇。",
    tags: ["江苏", "江浙菜", "清炖狮子头", "淮扬名菜", "细切粗斩", "入口即化"]
  },
  {
    id: "rec_prov_231",
    name: "淮安传统无骨滑爽软兜长鱼",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 210,
    prepTimeMinutes: 20,
    cookTimeMinutes: 5,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "活水黄鳝剔骨长鱼背脊肉(软兜)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切厚片", amount: 35, unit: "g", type: "secondary", isCore: true },
      { name: "现磨优质白胡椒粉", amount: 3, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "镇江陈年香醋", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "生抽酱油与花雕酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "白糖与食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "水淀粉", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "长鱼沸水烫熟竹签划取脊肉软兜",
        instruction: "活小鳝鱼加盐醋沸水烫死断生，用特制竹签快速划出一条条纯嫩背脊肉(软兜)，用布吸干水分。",
        timerSeconds: 300,
        chefTip: "纯取鳝脊肉无一丝刺，柔软如绸缎，筷子夹起两端下垂如兜状。"
      },
      {
        stepIndex: 2,
        title: "熟猪油化开爆香大量蒜片",
        instruction: "大铁锅化开熟猪油，下蒜片中火慢煸至金黄透明释放蒜香，烹入花雕酒、生抽、香醋、糖和高汤煮沸。",
        timerSeconds: 90,
        chefTip: "猪油与大蒜片是软兜长鱼香气扑鼻的核心灵魂。"
      },
      {
        stepIndex: 3,
        title: "下软兜长鱼极速推匀勾琉璃薄芡撒胡椒",
        instruction: "滑入软兜鳝肉，大火推匀加水淀粉勾成极薄琉璃芡，撒入大量白胡椒粉颠翻两锅立即盛入垫有热白布的热盘上席。",
        timerSeconds: 40,
        chefTip: "上桌趁热吃，软嫩滑爽无骨，蒜香与胡椒酸香直通脑门。"
      }
    ],
    tips: "开国第一宴头道热菜开门红！鳝肉滑嫩柔软如绸缎，蒜香扑鼻微酸微胡椒辛香，入口软嫩化渣，淮扬菜传世名珍。",
    tags: ["江苏", "江浙菜", "软兜长鱼", "开国第一宴", "无骨滑嫩", "淮扬头牌"]
  },
  {
    id: "rec_prov_232",
    name: "无锡传统红曲浓酱甜排骨",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 330,
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    difficulty: "中等",
    portion: 3,
    ingredients: [
      { name: "精选新鲜带软骨肋排骨(切大块)", amount: 600, unit: "g", type: "main", isCore: true },
      { name: "红曲米(天然红上色)", amount: 15, unit: "g", type: "secondary", isCore: true },
      { name: "大葱段、老姜片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "多晶白冰糖与红糖", baseAmount: 50, unit: "g", amountText: "50g", isPantryStaple: true },
      { name: "无锡特产酱油或生抽老抽", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "八角桂皮丁香", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "绍兴纯酿花雕酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肋排剁大块冷水浸泡透彻焯水",
        instruction: "精排切4厘米长块，冷水浸透析出血水；焯水撇沫冲洗干净沥干备用；红曲米装入料包。",
        timerSeconds: 300,
        chefTip: "红曲米是天然植物上色古法，赋予排骨纯正喜庆的枣红色。"
      },
      {
        stepIndex: 2,
        title: "砂锅化冰糖下排骨香料小火慢煨",
        instruction: "砂锅微油化开部分冰糖成浅琥珀色，下排骨翻匀挂糖色，下葱姜八角桂皮料酒酱油与红曲料包，加足量开水大火烧开转小火慢煨40分钟。",
        timerSeconds: 2400,
        chefTip: "小火慢煨让肉质酥烂脱骨，红曲天然红浸润透肉。"
      },
      {
        stepIndex: 3,
        title: "加足量冰糖转大火不断晃锅收浓挂糖汁",
        instruction: "加入余下大块冰糖，转大火不断晃动砂锅收汁，直至汤汁浓缩成拉丝琥珀红浓油糖汁包裹排骨出锅。",
        timerSeconds: 600,
        chefTip: "无锡排骨灵魂在于大火收糖汁，汁亮如胶，甜咸醇厚。"
      }
    ],
    tips: "江南水乡三大名排之首！古法红曲天然红亮喜庆，排骨肉质酥烂脱骨，糖汁浓郁拉丝裹满骨肉，咸甜适口甜而不腻回味悠长。",
    tags: ["江苏", "江浙菜", "无锡酱排骨", "红曲米色", "咸甜浓郁", "酥烂脱骨"]
  },
  {
    id: "rec_prov_233",
    name: "杭州开水白烫酸甜西湖醋鱼",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 190,
    prepTimeMinutes: 20,
    cookTimeMinutes: 8,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "西湖活草鱼或鳜鱼(清水饿养三天)", amount: 750, unit: "g", type: "main", isCore: true },
      { name: "极细新鲜生姜末", amount: 30, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "镇江纯正香醋", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "纯白砂糖", baseAmount: 50, unit: "g", amountText: "50g", isPantryStaple: true },
      { name: "生抽酱油与绍兴料酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "水淀粉", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "草鱼背部剖开一分为二打五刀一字花刀",
        instruction: "草鱼洗净剖成雌雄两片，厚肉处斜打五刀一字深花刀利于受热；清水饿养去泥腥气。",
        timerSeconds: 300,
        chefTip: "花刀打深使极速白水烫煮时熟度均匀。"
      },
      {
        stepIndex: 2,
        title: "大锅开水仅三分钟微沸烫至刚好断生",
        instruction: "大锅宽水加料酒煮沸关微火，将鱼肉平摊滑入微沸水中，微烫3分钟至鱼鳍翘起鱼肉雪白断生捞出拼盘。",
        timerSeconds: 180,
        chefTip: "传统西湖醋鱼绝不用油煎炸，纯水浸烫，鱼肉细嫩宛如蟹肉。"
      },
      {
        stepIndex: 3,
        title: "原汤调香醋白糖生抽水淀粉浇汁撒细姜末",
        instruction: "留小半碗烫鱼原汤，加香醋、白糖、少许生抽烧沸，水淀粉勾成琉璃亮芡，浇淋在鱼身上，密撒生姜末。",
        timerSeconds: 90,
        chefTip: "吃鱼肉蘸糖醋姜汁，口感酸甜鲜美恍若品尝鲜活阳澄湖大闸蟹。"
      }
    ],
    tips: "杭州楼外楼百年传统绝技！水烫断生保留鱼肉原始清甜，酸甜浓汁中细姜末提味，入口蟹香隐隐、细嫩无双。",
    tags: ["浙江", "江浙菜", "西湖醋鱼", "杭州名菜", "水烫绝技", "蟹肉风味"]
  },
  {
    id: "rec_prov_234",
    name: "杭州清明前龙井新茶炒虾仁",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 150,
    prepTimeMinutes: 20,
    cookTimeMinutes: 4,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "活西湖小河虾纯手剥虾仁", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "明前特级狮峰龙井茶叶", amount: 5, unit: "g", type: "main", isCore: true },
      { name: "蛋清与纯生粉", amount: 25, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "绍兴纯花雕酒", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "熟猪油(滑油用)", baseAmount: 200, unit: "ml", amountText: "200ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "手剥河虾仁洗净挤水上蛋清薄浆",
        instruction: "活河虾挤出纯白虾仁漂洗吸干水份，加盐抓黏，下蛋清干生粉轻裹薄浆冷藏静置20分钟。",
        timerSeconds: 300,
        chefTip: "活虾手剥虾仁玉白透红，冷藏上浆肉质紧韧弹牙。"
      },
      {
        stepIndex: 2,
        title: "八十五度温开水冲泡龙井舒展留茶汁",
        instruction: "龙井茶叶用85度温开水冲泡1分钟，滤出翠绿清澈茶汁，留青翠茶叶叶芽备用。",
        timerSeconds: 60,
        chefTip: "茶叶清香甘醇，茶水只取清鲜部分。"
      },
      {
        stepIndex: 3,
        title: "温猪油滑熟虾仁推入茶汤叶芽颠翻起锅",
        instruction: "熟猪油三成热滑入虾仁15秒变白浮起捞出；锅留余油下虾仁、龙井茶汁和茶叶，烹花雕酒少许盐，颠锅三下出盘。",
        timerSeconds: 30,
        chefTip: "极速快炒，虾仁如白玉、茶叶若碧玉，入口甘香清甜。"
      }
    ],
    tips: "杭帮菜诗画江南第一雅馔！白玉般的活河虾仁与早春特级龙井茶芽共烹，茶香扑鼻虾仁脆嫩弹牙，清雅高贵至纯至美。",
    tags: ["浙江", "江浙菜", "龙井虾仁", "杭州名菜", "诗情画意", "清香脆嫩"]
  },
  {
    id: "rec_prov_235",
    name: "绍兴陈年花雕酒焖东坡方肉",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 360,
    prepTimeMinutes: 20,
    cookTimeMinutes: 120,
    difficulty: "进阶",
    portion: 3,
    ingredients: [
      { name: "上等三层肥两层瘦五花肉(切大方块)", amount: 600, unit: "g", type: "main", isCore: true },
      { name: "生姜大厚片、大葱段整把", amount: 60, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "绍兴陈年手工花雕老酒", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: true },
      { name: "多晶白冰糖", baseAmount: 50, unit: "g", amountText: "50g", isPantryStaple: true },
      { name: "传统酿造浓酱油与生抽", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true }
    ],
    season: "all",
    steps: [
      {
        stepIndex: 1,
        title: "五花肉切四方大块皮朝下垫满葱姜",
        instruction: "五花肉切成6厘米见方大块焯水；特制小陶砂锅底密密铺满大葱生姜片防粘，肉皮朝下码在葱姜上。",
        timerSeconds: 300,
        chefTip: "皮朝下慢煨让肉皮吸透葱香与花雕酒香。"
      },
      {
        stepIndex: 2,
        title: "纯花雕酒与冰糖酱油不加一滴清水慢焖",
        instruction: "倒入足量陈年花雕酒，加入冰糖与酱油，不加一滴水，加盖密封微火慢焖2小时至肉质酥软红亮。",
        timerSeconds: 7200,
        chefTip: "纯酒慢化油脂，酒香挥发肉脂软糯化胶。"
      },
      {
        stepIndex: 3,
        title: "肉皮朝上移入小瓷盅隔水蒸透逼油",
        instruction: "将肉块翻面皮朝上放入小瓷盅，舀原汤少许，上蒸锅大火蒸30分钟逼出多余油脂上席。",
        timerSeconds: 1800,
        chefTip: "焖后再蒸，红亮如琥珀，肥肉入口即化毫无腻感。"
      }
    ],
    tips: "苏东坡名扬千古江南神馔！慢着火少着水火候足时它自美，方肉色泽红亮晶莹如玉，筷子轻拨颤巍巍，肥而不腻酥烂香浓。",
    tags: ["浙江", "江浙菜", "东坡肉", "传统名菜", "花雕醇香", "肥而不腻"]
  },
  {
    id: "rec_prov_236",
    name: "杭州传统宋嫂鲜鲈鱼肉羹",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "soup",
    cookingMethod: "煮",
    calories: 160,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜活鲈鱼(蒸熟剔取纯白鱼肉片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "金华火腿切细丝", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "水发香菇丝、鲜笋丝", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜蛋黄液打散", amount: 1, unit: "个", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "清鸡汤高汤", baseAmount: 600, unit: "ml", amountText: "600ml", isPantryStaple: true },
      { name: "镇江香醋与花雕酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "白胡椒粉与精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "水淀粉", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鲈鱼加葱姜料酒蒸熟细剔纯鱼肉",
        instruction: "活鲈鱼蒸熟放凉，去皮去鱼刺，用筷子轻轻细剔出雪白鱼肉大片，保留原汁。",
        timerSeconds: 400,
        chefTip: "细心去净微小细刺，保持鱼肉块大洁白。"
      },
      {
        stepIndex: 2,
        title: "高汤煮沸下笋丝火腿香菇丝调味勾芡",
        instruction: "清鸡汤入锅烧沸，下火腿丝香菇笋丝，调入花雕酒盐香醋白胡椒粉，水淀粉勾成米汤浓芡。",
        timerSeconds: 240,
        chefTip: "先勾芡再下鱼肉，鱼肉不会被搅碎。"
      },
      {
        stepIndex: 3,
        title: "推入鱼肉片淋蛋黄液熟猪油出锅",
        instruction: "轻轻滑入鱼肉片，淋入金黄蛋黄液形成金黄云朵，淋少许熟猪油增亮，盛入汤盅。",
        timerSeconds: 60,
        chefTip: "酸辣鲜美恍若蟹羹，滑嫩醇香暖胃生津。"
      }
    ],
    tips: "南宋临安名传古今的赛蟹羹！鲈鱼肉细嫩若蟹肉，高汤酸甜微辣胡椒生香，汤滑肉嫩色泽金黄，冬春暖身头牌名品。",
    tags: ["浙江", "江浙菜", "宋嫂鱼羹", "赛蟹肉", "滑嫩鲜酸", "南宋古风"]
  },
  {
    id: "rec_prov_237",
    name: "宁波老雪里蕻炖东海大黄鱼",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "soup",
    cookingMethod: "炖",
    calories: 210,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: "中等",
    portion: 3,
    ingredients: [
      { name: "东海野生或鲜活大黄鱼", amount: 650, unit: "g", type: "main", isCore: true },
      { name: "宁波老坛陈雪里蕻咸菜末", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "冬笋切薄片", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "生姜片、葱结", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "绍兴纯酿花雕酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "食用精盐与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "清开水或高汤", baseAmount: 700, unit: "ml", amountText: "700ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "大黄鱼洗净沥干熟猪油两面微煎",
        instruction: "大黄鱼刮鳞去鳃洗净擦干；锅热化熟猪油，下黄鱼中火微煎至两面微定型微黄盛出。",
        timerSeconds: 180,
        chefTip: "猪油轻煎不仅去腥，还能使炖出的鱼汤雪白浓郁。"
      },
      {
        stepIndex: 2,
        title: "熟猪油爆香老雪菜冬笋片",
        instruction: "锅底余猪油爆香姜片，下雪里蕻末与冬笋片大火煸炒1分半钟，煸出特殊的咸菜清香。",
        timerSeconds: 90,
        chefTip: "雪菜炒透酸鲜味彻底融入油脂中。"
      },
      {
        stepIndex: 3,
        title: "添沸水黄鱼同炖汤色如奶醇香扑鼻",
        instruction: "倒入足量滚沸开水，滑入黄鱼烹花雕酒，大火大滚10分钟转中火炖5分钟至汤白如乳，调入白胡椒出锅。",
        timerSeconds: 900,
        chefTip: "大火沸水激出奶白浓汤，雪菜鲜咸完全渗入蒜瓣鱼肉中。"
      }
    ],
    tips: "宁波四明山下东海渔家第一鲜！老雪菜独特的醇酸咸香与黄鱼的极致海味交融，汤色如奶醇香无比，鱼肉细嫩如蒜瓣。",
    tags: ["浙江", "江浙菜", "雪菜大黄鱼", "宁波名菜", "汤白如乳", "极致鲜美"]
  },
  {
    id: "rec_prov_238",
    name: "杭州荷叶黄泥慢煨叫花鸡",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 290,
    prepTimeMinutes: 30,
    cookTimeMinutes: 90,
    difficulty: "进阶",
    portion: 4,
    ingredients: [
      { name: "优质三黄嫩母鸡", amount: 1100, unit: "g", type: "main", isCore: true },
      { name: "西湖新鲜清香大荷叶", amount: 2, unit: "张", type: "secondary", isCore: true },
      { name: "香菇丁、冬笋丁、五花肉丁(填膛料)", amount: 150, unit: "g", type: "secondary", isCore: false },
      { name: "干净黄泥或专用烘烤面泥包", amount: 500, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "绍兴老花雕酒", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "生抽老抽", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "食用精盐与五香粉", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "整鸡深腌腹中填入炒香八宝珍馅",
        instruction: "三黄鸡加花雕酒酱油五香粉全身揉透腌制；腹中填入炒熟的香菇肉丁冬笋馅料缝合。",
        timerSeconds: 1800,
        chefTip: "馅料汁水在烘煨时由内而外滋润鸡肉。"
      },
      {
        stepIndex: 2,
        title: "荷叶层层严密包裹外敷酒香黄泥",
        instruction: "鲜荷叶焯水擦干，紧密包裹整鸡数层用麻绳扎紧；外面涂抹调和黄酒的细黄泥浆封严。",
        timerSeconds: 600,
        chefTip: "荷叶锁住清香，黄泥保住原汁原味受热均匀。"
      },
      {
        stepIndex: 3,
        title: "炭火或烤箱慢火煨透敲泥揭叶香飘满堂",
        instruction: "烤箱200度或炭火慢煨1.5小时，敲开硬壳揭开荷叶，肉烂骨酥香气扑鼻。",
        timerSeconds: 5400,
        chefTip: "上桌当众敲泥揭叶，荷香肉香酒香瞬间弥漫全厅。"
      }
    ],
    tips: "江南叫花鸡武侠绝学重现！荷叶清芬渗入每一缕肌理，肉质酥烂脱骨多汁，腹内珍馅吸收油脂，原汁原味人间珍味。",
    tags: ["浙江", "江浙菜", "叫花鸡", "荷叶清香", "酥烂多汁", "武侠经典"]
  },
  {
    id: "rec_prov_239",
    name: "扬州传统鸭套鸽慢煨三套鸭",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "soup",
    cookingMethod: "炖",
    calories: 270,
    prepTimeMinutes: 40,
    cookTimeMinutes: 150,
    difficulty: "进阶",
    portion: 5,
    ingredients: [
      { name: "高邮散养肥家鸭(脱骨整鸭)", amount: 1500, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩野鸭(脱骨整野鸭)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "乳鸽(脱骨整乳鸽)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "金华火腿厚片与冬笋块", amount: 80, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "陈年花雕老酒", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "生姜葱结", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "食用精盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "整禽脱骨绝技家鸭套野鸭野鸭套乳鸽",
        instruction: "精湛刀工将家鸭、野鸭、乳鸽分别整禽剔骨保持表皮完整无损；将乳鸽套入野鸭腹中，再将野鸭套入家鸭腹中成一套。",
        timerSeconds: 2400,
        chefTip: "家鸭肥嫩、野鸭肉香、乳鸽骨嫩，三味层层相套，淮扬刀工神技。"
      },
      {
        stepIndex: 2,
        title: "砂锅铺火腿冬笋大火沸腾撇尽浮沫",
        instruction: "大砂锅中下火腿片冬笋葱姜，放入三套鸭加满清水，大火烧开反复撇净微细浮沫，汤清如水。",
        timerSeconds: 600,
        chefTip: "撇沫要极彻底，炖出的汤才能保持如茶清亮。"
      },
      {
        stepIndex: 3,
        title: "微火慢炖两个半小时三禽鲜味彻底交融",
        instruction: "加盖极微火慢炖2.5小时，三禽鲜味互为渗透，肉酥汤清，揭盖醇香无匹上席。",
        timerSeconds: 9000,
        chefTip: "家鸭之肥、野鸭之柴、乳鸽之嫩互为补充，天下一绝。"
      }
    ],
    tips: "淮扬国宝级传世大菜！家鸭肥嫩、野鸭香瘦、乳鸽细嫩，一层套一层，汤清如碧玉，肉酥至极鲜，叹为观止的中华美食瑰宝。",
    tags: ["江苏", "江浙菜", "三套鸭", "淮扬国宝", "整禽脱骨", "三禽合一"]
  }
];

console.log(`生成前12道江浙名菜...`);
fs.writeFileSync(path.join(__dirname, 'temp_jiangzhe_part1.json'), JSON.stringify(part1, null, 2), 'utf8');
