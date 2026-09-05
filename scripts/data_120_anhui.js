// scripts/data_120_anhui.js
// 徽派皖韵 22道经典名菜与下饭家常小炒 (rec_prov_031 ~ rec_prov_052)
module.exports = [
  {
    id: "rec_prov_031",
    name: "徽州传统红烧臭鳜鱼",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 320,
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "传统发酵臭鳜鱼(桃花鳜)", amount: 650, unit: "g", type: "main", isCore: true },
      { name: "徽州刀板香腊肉丁", amount: 50, unit: "g", type: "secondary", isCore: true },
      { name: "问政山鲜春笋丁", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "大红泡椒段", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "小黄姜片与整瓣蒜", amount: 40, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "传统菜籽油与熟猪油(各半)", baseAmount: 35, unit: "g", amountText: "35g", isPantryStaple: true },
      { name: "老抽生抽调和酱油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "徽州古法黄酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "细白砂糖", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "现磨白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "高汤或温水", baseAmount: 350, unit: "ml", amountText: "350ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "吸干鱼身两面花刀",
        instruction: "臭鳜鱼用温水轻轻冲洗表面，用厨房纸彻底吸干水份。鱼身两面各划柳叶花刀以便充分入味。",
        timerSeconds: 180,
        chefTip: "必须彻底吸干水分，下锅两面煎制才不会破皮粘锅。"
      },
      {
        stepIndex: 2,
        title: "混合油小火两面煎透",
        instruction: "锅中烧热菜籽油与熟猪油混合油，下入臭鳜鱼用中小火慢煎，煎至两面金黄焦香、鱼肉紧实。",
        timerSeconds: 360,
        chefTip: "菜籽油提色香，猪油提醇厚，双油交融是徽菜红烧精髓。"
      },
      {
        stepIndex: 3,
        title: "煸炒辅料与调料爆香",
        instruction: "将鱼拨至一侧，下入腊肉丁、笋丁、姜蒜片与泡椒段大火煸炒出浓郁腊香与脂香，烹入徽州黄酒激发出醇香。",
        timerSeconds: 120,
        chefTip: "黄酒一定要贴着滚烫锅边烹入，蒸发酒精留下稻谷香。"
      },
      {
        stepIndex: 4,
        title: "浓油赤酱煨汤收浓汁",
        instruction: "倒入高汤、生抽老抽与白糖，大火烧沸后转中小火加盖焖煨12分钟，开盖大火将汤汁收至浓稠挂勺，撒上青蒜花出锅。",
        timerSeconds: 720,
        chefTip: "臭鳜鱼鱼肉呈蒜瓣状，骨刺易剥离，初闻微臭入口奇香浓郁。"
      }
    ],
    tips: "徽菜首选代表作！初闻似臭非臭，入口蒜瓣肉质紧致细嫩，肉香、鱼鲜与发酵酵香浑然一体，风味独特冠绝八大菜系。",
    tags: ["安徽", "徽菜", "臭鳜鱼", "传统名菜", "蒜瓣肉", "徽派经典"]
  },
  {
    id: "rec_prov_032",
    name: "徽州传统两面煎毛豆腐配辣酱",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煎",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "传统自然发酵白毛长绒毛豆腐", amount: 10, unit: "块", type: "main", isCore: true },
      { name: "鲜嫩青蒜白与蒜叶碎", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "徽州风味油泼自制香辣酱", amount: 30, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "压榨浓香熟菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "徽州特级酿造生抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "农家米酒或黄酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热锅滑润菜籽油",
        instruction: "铁平底锅烧热，倒入徽州浓香菜籽油，旋转锅身使油均匀铺满锅底并烧至五成热。",
        timerSeconds: 90,
        chefTip: "毛豆腐白毛在遇热油瞬间倒伏，锁住内里植物蛋白自然水解的鲜美乳脂。"
      },
      {
        stepIndex: 2,
        title: "文火平铺慢煎两面金黄",
        instruction: "将长满雪白菌丝的毛豆腐轻轻放入平底锅，中小火慢慢煎制约4分钟，底面金黄硬壳后翻面继续煎制另一面。",
        timerSeconds: 300,
        chefTip: "切忌急火，火候一定要温柔，保持外皮香脆而内里如腐乳般如芝士般细嫩化渣。"
      },
      {
        stepIndex: 3,
        title: "烹入醇酒生抽点缀蒜花辣酱",
        instruction: "两面金黄后沿锅边烹入米酒与生抽提鲜增香，撒上青蒜花，搭配特制徽州香辣酱趁热蘸食。",
        timerSeconds: 90,
        chefTip: "徽州名谚：徽州第一怪，豆腐长毛上席待。蘸上特制鲜辣酱热吃口感绝佳。"
      }
    ],
    tips: "徽州非遗民间风味！豆腐经过自然发酵长出茸茸白毛，蛋白质转化为极高的氨基酸，煎熟后外焦里嫩，鲜醇如乳酪。",
    tags: ["安徽", "徽菜", "毛豆腐", "两面金黄", "传统名小吃", "非遗风味"]
  },
  {
    id: "rec_prov_033",
    name: "徽州问政山笋煨刀板香",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 280,
    prepTimeMinutes: 15,
    cookTimeMinutes: 45,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "徽州传统正宗刀板香咸肉", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "歙县问政山鲜贡笋(或干笋浸泡)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "老黄姜片", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "小葱结", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "绍兴古越花雕黄酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "现磨白胡椒粒", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "山泉水或清鸡汤", baseAmount: 800, unit: "ml", amountText: "800ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "刀板香切厚片汆水",
        instruction: "刀板香咸肉洗净温水浸泡20分钟减轻咸度，切成0.5厘米厚片，冷水下锅焯水3分钟捞出沥干。",
        timerSeconds: 300,
        chefTip: "刀板香是徽州特产腌腊肉，油脂渗入香樟木刀板而得名，风味醇香透亮。"
      },
      {
        stepIndex: 2,
        title: "问政山笋滚刀改块焯透",
        instruction: "问政山笋剥去外壳取极嫩笋肉，切成滚刀厚块，沸水中加少许盐焯烫2分钟捞出以祛涩味。",
        timerSeconds: 180,
        chefTip: "鲜笋焯水可彻底祛除草酸与涩感，使成菜口感清脆甘甜。"
      },
      {
        stepIndex: 3,
        title: "砂锅文火慢煨汤清味醇",
        instruction: "砂锅中放入笋块、刀板香肉片、老姜片与葱结，倒入清鸡汤与花雕酒，大火烧开撇净浮沫，转微火加盖煨炖40分钟，出锅撒白胡椒粉。",
        timerSeconds: 2400,
        chefTip: "咸肉自带天然醇咸鲜香，煨炖全程无需额外加盐或味精，原汁原味。"
      }
    ],
    tips: "山野双绝！问政山鲜笋清甜爽脆，徽州刀板香咸肉脂香甘润，笋借肉脂、肉借笋香，汤色白润如奶，鲜绝徽州山水。",
    tags: ["安徽", "徽菜", "刀板香", "问政山笋", "文火慢煨", "山野珍品"]
  },
  {
    id: "rec_prov_034",
    name: "徽州传统绩溪一品锅",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 360,
    prepTimeMinutes: 30,
    cookTimeMinutes: 50,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "绩溪传统金黄蛋饺", amount: 6, unit: "个", type: "main", isCore: true },
      { name: "油豆腐嵌肉馅", amount: 6, unit: "个", type: "main", isCore: true },
      { name: "红烧五花肉厚块", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "徽州干笋尖(温水泡发)", amount: 120, unit: "g", type: "secondary", isCore: true },
      { name: "红薯粉丝与白菜叶", amount: 150, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香土鸡浓高汤", baseAmount: 600, unit: "ml", amountText: "600ml", isPantryStaple: false },
      { name: "徽州特产陈年黄酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "红烧肉原生浓原汁", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "铁锅底部铺垫素菜底料",
        instruction: "取传统双耳铁锅，底层整齐铺上洗净白菜叶、发好的干笋尖与红薯粉丝，作为垫底吸汁。",
        timerSeconds: 240,
        chefTip: "一品锅讲究层层叠叠，底层垫笋干耐煮且能充分吸纳上层肉脂。"
      },
      {
        stepIndex: 2,
        title: "层层码放肉块豆腐与金黄蛋饺",
        instruction: "第二层码放煨透的红烧五花肉块，第三层整齐排入油豆腐塞肉，最顶层环形摆放金灿灿的蛋饺，层次分明宛如繁花锦簇。",
        timerSeconds: 300,
        chefTip: "摆盘必须整齐端庄，象征步步高升、阖家团圆的一品尊荣。"
      },
      {
        stepIndex: 3,
        title: "浇入高汤微火慢焖入味",
        instruction: "沿锅边缓缓淋入高汤、红烧原汁与黄酒，调入适量盐与白胡椒粉。置于小火炉上微火慢炖40分钟，原锅端上餐桌趁热享用。",
        timerSeconds: 2400,
        chefTip: "吃一品锅必须由表及里，层层品味，各层滋味交融却各具独特口感。"
      }
    ],
    tips: "徽州民俗大席首席名菜！相传由明代户部尚书毕锵夫人创制，后梁实秋与胡适先生极力盛赞。蛋香、肉香、豆香与笋香多味一体。",
    tags: ["安徽", "徽菜", "一品锅", "胡适家宴", "金黄蛋饺", "合家欢宴"]
  },
  {
    id: "rec_prov_035",
    name: "淮南正宗牛肉汤配葱油烧饼",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "soup",
    cookingMethod: "煮",
    calories: 260,
    prepTimeMinutes: 20,
    cookTimeMinutes: 90,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜黄牛肉与牛骨棒", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "淮南豆饼(特产绿豆面小饼)", amount: 80, unit: "g", type: "secondary", isCore: true },
      { name: "淮南薄千张丝与红薯红丝", amount: 100, unit: "g", type: "secondary", isCore: false },
      { name: "鲜嫩香菜与青蒜末", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "牛油熬制红油辣椒酱", amount: 25, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "淮南秘制二十味草果香料包", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: false },
      { name: "老生姜与整根大葱白", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "粗粒食用海盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "现磨牛骨白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "牛骨牛肉长时间吊熬清亮高汤",
        instruction: "牛骨敲断冷水浸泡出血水，黄牛肉切大块，与牛骨一起冷水下大锅焯透。洗净后重新注水，放入老姜葱白与香料包大火滚沸撇尽浮沫，转微火慢炖2小时汤色白亮香气扑鼻。",
        timerSeconds: 3600,
        chefTip: "牛骨必选新鲜腿骨敲出骨髓，熬出的骨汤不仅醇厚更带有天然脂香。"
      },
      {
        stepIndex: 2,
        title: "捞出熟牛肉顶刀切极薄片",
        instruction: "将炖至软烂适口的黄牛肉捞出自然放凉，顺着纹理顶刀切成纸一样透光的薄牛肉片备用。",
        timerSeconds: 300,
        chefTip: "牛肉一定要放凉后再切，切极薄片入汤一烫即软，滑嫩可口。"
      },
      {
        stepIndex: 3,
        title: "烫熟千张粉丝豆饼浇滚汤辣油",
        instruction: "碗中放入烫熟的千张丝、红薯粉丝与淮南豆饼，码上薄牛肉片，浇入滚烫翻滚的牛骨浓汤，撒青蒜香菜，淋一大勺鲜红牛油辣子，配刚出炉热烧饼。",
        timerSeconds: 180,
        chefTip: "牛油辣子是淮南牛肉汤的灵魂，红油浮面，辣而不燥，鲜香直透脑门。"
      }
    ],
    tips: "淮河两岸第一汤！汤清而味厚，辣爽而油润，豆饼酥香，粉丝劲道，牛肉片薄如蝉翼，搭配香脆葱油酥烧饼泡入汤中，堪称人间至味。",
    tags: ["安徽", "徽菜", "淮南牛肉汤", "牛油辣子", "淮南豆饼", "非遗名汤"]
  },
  {
    id: "rec_prov_036",
    name: "安徽宿州符离集五香烧鸡",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 310,
    prepTimeMinutes: 25,
    cookTimeMinutes: 60,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "宿州本地散养当年小公鸡(净膛)", amount: 1000, unit: "g", type: "main", isCore: true },
      { name: "天然麦芽糖稀(涂抹鸡身)", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "老母鸡牛骨百年老卤原汤", amount: 1500, unit: "ml", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "十六味传统中药五香秘料包", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: false },
      { name: "炸制用菜籽油", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true },
      { name: "纯正生抽老抽", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "冰糖碎粒", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "精制细盐", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "盘鸡造型与涂抹红润麦芽糖",
        instruction: "公鸡洗净，两腿盘入腹内，双翅由颈部交叉别出成回首卧姿。控干水分后全身均匀刷涂上一层薄薄的麦芽糖水风干。",
        timerSeconds: 300,
        chefTip: "造型是符离集烧鸡标志，麦芽糖能在短时间内炸出均匀诱人的红棕枣红色。"
      },
      {
        stepIndex: 2,
        title: "热油快炸上色外皮紧致金红",
        instruction: "锅中烧热菜籽油至七成热，将整鸡轻轻下入油锅快速翻动炸制，约2分钟至鸡身通体呈金红枣皮色迅速捞出控油。",
        timerSeconds: 150,
        chefTip: "油温一定要高，猛火快炸只为上色定型，不可炸焦肉质。"
      },
      {
        stepIndex: 3,
        title: "老卤慢焖肉烂脱骨不散架",
        instruction: "将炸好的鸡放入老卤汤锅中，加入五香料包、生抽老抽、冰糖与盐，大火滚沸后压上瓷盘防浮起，改微火煨焖50分钟，关火浸泡入味。",
        timerSeconds: 3000,
        chefTip: "肉烂脱骨、肉质细嫩而不散，冷热均可撕食，香气穿骨透髓。"
      }
    ],
    tips: "中国四大名鸡之一！源自安徽宿州符离镇，色泽枣红油润，肉质醇香，五香透骨烂而不碎，用手轻轻一抖即可骨肉分离。",
    tags: ["安徽", "徽菜", "符离集烧鸡", "四大名鸡", "肉烂脱骨", "传统卤烤"]
  },
  {
    id: "rec_prov_037",
    name: "皖北传统炭火地锅鸡配贴饼",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 420,
    prepTimeMinutes: 25,
    cookTimeMinutes: 35,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "散养皖北土公鸡(剁方块)", amount: 750, unit: "g", type: "main", isCore: true },
      { name: "中筋面粉玉米面混合面团(做贴饼)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "螺丝椒块与蒜瓣生姜", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "农家粉条或土豆厚块", amount: 150, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "老式压榨农家菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "红油豆瓣酱与黄豆酱", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "生抽老抽与白糖", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "大料八角桂皮草果", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "温开水或高汤", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热油干煸土鸡块出油脂焦香",
        instruction: "铁锅烧热下菜籽油，下入焯干水份的鸡肉块大火煸炒5分钟，煸出鸡皮多余油脂，水分煸干至鸡块边缘微焦金黄。",
        timerSeconds: 300,
        chefTip: "皖北地锅鸡必须生煸至透，鸡油与菜籽油融合才能产生浓烈焦香。"
      },
      {
        stepIndex: 2,
        title: "酱香爆炒加汤焖煨入味",
        instruction: "加入葱姜蒜、八角桂皮、豆瓣酱与黄豆酱翻炒出浓郁酱香红油，调入生抽老抽与糖，倒入温水加盖大火煮沸转中火烧15分钟，加入土豆块。",
        timerSeconds: 900,
        chefTip: "汤汁要留足半锅，以便给贴饼提供充足的水汽和浸润底料。"
      },
      {
        stepIndex: 3,
        title: "沿铁锅四周贴面饼盖焖双绝",
        instruction: "将软面团揪成小剂子，蘸水拉扯拍成扁薄椭圆饼，顺着锅沿内壁紧紧贴上一圈，下半部浸在红亮汤汁里，加盖小火焖炖12分钟即可起锅。",
        timerSeconds: 720,
        chefTip: "贴饼上半截被水汽蒸得松软麦香，下半截吸满红油鸡汁焦香浓郁，一口绝绝子。"
      }
    ],
    tips: "皖北豪迈代表作！一锅出两味，鸡肉紧致弹牙酱香浓郁，贴饼一半吸足醇厚鸡汁软糯鲜浓，一半干香焦脆，乡土锅气直击味蕾。",
    tags: ["安徽", "徽菜", "地锅鸡", "皖北风味", "贴饼一锅出", "铁锅柴火香"]
  },
  {
    id: "rec_prov_038",
    name: "皖北传统铁锅炖地锅羊肉",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 390,
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "皖北新鲜带皮山羊肉块", amount: 650, unit: "g", type: "main", isCore: true },
      { name: "传统手工活面贴饼面剂子", amount: 180, unit: "g", type: "main", isCore: true },
      { name: "白萝卜厚滚刀块", amount: 200, unit: "g", type: "secondary", isCore: false },
      { name: "整瓣大蒜粒与老生姜", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "干红辣椒段与香菜碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "秘制羊肉红油豆瓣香辣酱", baseAmount: 35, unit: "g", amountText: "35g", isPantryStaple: true },
      { name: "黄酒或高度白酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "白芷小茴香草果香料", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "精制食盐与胡椒粉", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "带皮羊肉焯透煸炒去膻提香",
        instruction: "带皮山羊肉洗净切大块，冷水下锅焯水3分钟捞出。铁锅中下菜籽油，大火下羊肉煸炒至皮紧缩焦黄，逼出多余羊脂。",
        timerSeconds: 300,
        chefTip: "带皮山羊肉筋皮弹牙，煸炒出焦黄不仅去膻而且汤汁更醇白。"
      },
      {
        stepIndex: 2,
        title: "香料酱汁红焖入味加萝卜块",
        instruction: "下入姜蒜、白芷、小茴香与豆瓣香辣酱大火翻炒爆香，烹入黄酒，倒入开水没过羊肉，加盖中小火焖炖30分钟后下入白萝卜块。",
        timerSeconds: 1800,
        chefTip: "白芷是炖羊肉去膻增香的秘诀，白萝卜吸油解腻相得益彰。"
      },
      {
        stepIndex: 3,
        title: "沿铁锅内壁贴薄面饼焖至汤稠",
        instruction: "手蘸清水将面团压薄贴于铁锅沿边，加盖焖炖12分钟至饼熟羊肉酥烂，开盖撒香菜出锅。",
        timerSeconds: 720,
        chefTip: "贴饼下沿浸润热辣鲜红的羊汤，香浓四溢，暖身驱寒过瘾十足。"
      }
    ],
    tips: "冬日皖北大地暖胃名吃！带皮山羊肉皮糯肉酥，毫无膻气，萝卜水灵多汁，浓郁羊肉红油汤汁浸透面饼，一口面饼一口羊肉绝配。",
    tags: ["安徽", "徽菜", "地锅羊肉", "皖北特色", "带皮羊肉", "贴饼子"]
  },
  {
    id: "rec_prov_039",
    name: "合肥官府名菜李鸿章大杂烩",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 330,
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "发制水发海参切条", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "发制水发白鱼肚块", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "熟土鸡脯肉条与熟猪肚丝", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩冬笋片与水发香菇丝", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "青豌豆与枸杞子", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "极品浓醇黄油老母鸡浓汤", baseAmount: 400, unit: "ml", amountText: "400ml", isPantryStaple: false },
      { name: "徽州醇香黄酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "熟猪油与精炼芝麻香油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "天然生抽调味汁", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "精盐与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "纯水淀粉勾薄芡", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "八方山珍海味汆烫滤清",
        instruction: "将海参、鱼肚、熟鸡丝、熟肚丝、冬笋片与香菇丝在沸水中加黄酒快速焯烫30秒，捞出沥干水份备用。",
        timerSeconds: 90,
        chefTip: "沸水快焯去异味且保持海参和鱼肚爽滑弹牙质感。"
      },
      {
        stepIndex: 2,
        title: "母鸡浓高汤文火慢煨醇味",
        instruction: "炒锅下熟猪油化开，倒入老母鸡醇厚高汤烧沸，下入所有荤素主料，调入黄酒、生抽、盐与白胡椒粉，中小火煨煮8分钟使山珍海味吸足高汤底蕴。",
        timerSeconds: 480,
        chefTip: "老母鸡高汤是统领众味的桥梁，使荤素异香在煨制中和谐互融。"
      },
      {
        stepIndex: 3,
        title: "轻勾琉璃薄芡淋芝麻明油",
        instruction: "投入青豌豆与枸杞点缀亮色，转大火徐徐淋入水淀粉勾成晶莹琉璃薄芡，出锅前淋入芝麻香油装盘上席。",
        timerSeconds: 120,
        chefTip: "芡汁宜薄不宜厚，犹如轻纱包裹食材，润滑爽口，汤汁稠润鲜滑。"
      }
    ],
    tips: "合肥晚清官府首席华席名肴！相传李鸿章宴请外国公使时厨师妙思巧合之作。海参弹糯、鱼肚软滑、鸡肚鲜韧，汤汁浓白醇鲜，尊贵典雅。",
    tags: ["安徽", "徽菜", "李鸿章大杂烩", "合肥名菜", "官府华席", "山珍海味"]
  },
  {
    id: "rec_prov_040",
    name: "徽州名山珍品农家石耳炖土鸡",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "soup",
    cookingMethod: "炖",
    calories: 260,
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "黄山特产悬崖天然石耳(泡发干净)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "皖南山林散养土母鸡半只", amount: 600, unit: "g", type: "main", isCore: true },
      { name: "金华或徽州老火腿厚片", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "老姜块拍松与小香葱", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正徽州农家米酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "现磨纯天然白胡椒粒", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "深山矿泉水", baseAmount: 900, unit: "ml", amountText: "900ml", isPantryStaple: false },
      { name: "精盐(按需微量)", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "石耳温水细致泡发洗净泥沙",
        instruction: "将干燥的黄山石耳用温水充分泡发1小时，摘去根蒂耳根黑蒂，反复漂洗除去悬崖岩石微尘沙砾，撕成小片备用。",
        timerSeconds: 300,
        chefTip: "石耳生于绝壁石缝，采摘极为不易，必须细致清洗干净方能品其至纯山野香。"
      },
      {
        stepIndex: 2,
        title: "母鸡剁块焯水并入砂锅",
        instruction: "土母鸡剁成大块，冷水下锅焯水3分钟捞出冲净。紫砂锅或土砂锅中放入鸡块、老姜块、葱结、火腿片，注入山泉水大火煮沸撇净浮沫。",
        timerSeconds: 360,
        chefTip: "火腿片能与土鸡肉产生协同增鲜效应，汤底清澈见底金黄油润。"
      },
      {
        stepIndex: 3,
        title: "微火慢煲加入石耳清润出锅",
        instruction: "烹入农家米酒，盖紧砂锅盖微火慢煨50分钟至鸡肉软烂，加入洗净的石耳再慢煨15分钟，调入微量盐与胡椒粉出锅。",
        timerSeconds: 3900,
        chefTip: "石耳质地爽滑微脆，鸡汤鲜香清甜绝伦，乃黄山一绝天然滋补至品。"
      }
    ],
    tips: "黄山山珍之王！石耳附生于黄山悬崖峭壁绝险石缝，吸天地雨露精华，与肉质紧实的皖南土母鸡文火慢煲，汤汁金黄清润，滑嫩甘美。",
    tags: ["安徽", "徽菜", "黄山石耳", "石耳炖土鸡", "滋补养生", "山野至鲜"]
  },
  {
    id: "rec_prov_041",
    name: "徽州传统腊八豆腐炒香肠",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "黟县传统腊八豆腐(切厚片)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "徽州风味土猪风干香肠片", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩青蒜段斜切", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "红泡椒斜切丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟猪油与菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "优质生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "老陈醋或香醋", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "白糖提鲜", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "香肠煸出油脂透亮",
        instruction: "热锅下少许底油，下入香肠薄片中小火煸炒至卷曲出油、晶莹透亮。",
        timerSeconds: 150,
        chefTip: "香肠慢慢煸出天然猪肉腊脂，用这层底油炒腊八豆腐风味更香。"
      },
      {
        stepIndex: 2,
        title: "下入腊八豆腐片煎透吸收脂香",
        instruction: "倒入切片的腊八豆腐片大火翻炒，让豆腐吸足香肠油脂，两面微微呈浅黄色焦香。",
        timerSeconds: 180,
        chefTip: "黟县腊八豆腐紧致有嚼劲，带有微咸天然香料味，受热更显甘醇。"
      },
      {
        stepIndex: 3,
        title: "投入青蒜红椒调味快炒出锅",
        instruction: "撒入青蒜白与红椒丝翻炒断生，烹入生抽、微量香醋与白糖大火颠锅翻炒均匀，最后撒入青蒜叶出锅。",
        timerSeconds: 90,
        chefTip: "青蒜叶受热极易软塌，出锅前放入翻炒几秒保留碧绿蒜香。"
      }
    ],
    tips: "徽州过年家常必备！腊八豆腐圆润如币，质地细腻干香如软酪，与腊香肠、青蒜同炒，鲜咸适口韧香弹牙，下饭下酒一绝。",
    tags: ["安徽", "徽菜", "腊八豆腐", "风干香肠", "下饭小炒", "家常快手"]
  },
  {
    id: "rec_prov_042",
    name: "绩溪传统徽州肉末炒粉丝",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "绩溪山芋粉丝(红薯粉泡软)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "肥三瘦七农家土猪肉末", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "生姜末与香葱花", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "红辣椒碎小段", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "农家压榨熟菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "传统酿造老抽调色", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "优质酿造特级生抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "徽州黄酒提香", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白胡椒粉与白糖", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "红薯粉丝温水发泡煮软沥干",
        instruction: "红薯粉丝用温水浸泡20分钟，沸水锅中焯烫2分钟至透明软弹捞出沥水，剪成适当长度防过长。",
        timerSeconds: 180,
        chefTip: "粉丝煮至八成熟即可，留有余地在锅中吸收肉汤红酱。"
      },
      {
        stepIndex: 2,
        title: "肉末煸香调入浓油赤酱",
        instruction: "锅中烧热菜籽油，下入肉末大火煸炒至变色吐油，下入姜末与辣椒碎爆香，烹入黄酒、生抽、老抽炒出红亮肉酱色。",
        timerSeconds: 150,
        chefTip: "肉末煸干水汽带微焦香味，能使粉条充分附着肉汁香气。"
      },
      {
        stepIndex: 3,
        title: "粉丝下锅大火颠炒根根晶莹入味",
        instruction: "倒入沥干的粉丝大火快速翻炒颠锅，加入白糖与胡椒粉调味，大火炒至粉丝彻底吸干汤汁透亮入味，撒入葱花出锅。",
        timerSeconds: 150,
        chefTip: "全程保持大火，利用筷子与铲子配合挑翻，粉丝根根油亮不坨不粘。"
      }
    ],
    tips: "徽州绩溪家喻户晓的经典家常热炒！山芋粉丝筋道爽滑，吸足土猪肉末与菜籽油的醇厚酱香，根根油润晶亮，咸鲜微辣停不下筷子。",
    tags: ["安徽", "徽菜", "红薯粉丝", "肉末炒粉丝", "下饭家常", "滑嫩筋道"]
  },
  {
    id: "rec_prov_043",
    name: "皖南农家蒜苗炒刀板香腊肉",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 310,
    prepTimeMinutes: 10,
    cookTimeMinutes: 7,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "徽州刀板香咸腊肉薄片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "本地农家青蒜苗斜切段", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "小红干辣椒节", amount: 10, unit: "g", type: "secondary", isCore: false },
      { name: "老姜丝", amount: 10, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟菜籽油(微量润锅)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "徽州黄酒烹锅", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "酿造生抽", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "纯细白糖提鲜", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "刀板香温水洗净小火慢煸出油",
        instruction: "腊肉片温水清洗，热锅加少许油下入腊肉薄片，中小火煸炒至肥肉部分完全透明呈灯盏窝状，倒出多余油份。",
        timerSeconds: 180,
        chefTip: "刀板香腌腊肉肥而不腻，煸透后油脂清亮透明，口感香脆甘润。"
      },
      {
        stepIndex: 2,
        title: "下姜丝干椒与青蒜白爆出香气",
        instruction: "锅中留底油，下姜丝、干辣椒节与青蒜白大火猛翻几下，烹入徽州黄酒激发出浓烈锅气。",
        timerSeconds: 60,
        chefTip: "青蒜白质地较厚先下锅炒出甜蒜香，蒜叶后放保持爽脆。"
      },
      {
        stepIndex: 3,
        title: "投入蒜绿调味快炒盛盘",
        instruction: "倒入青蒜绿叶部分，调入生抽与微量白糖，猛火快速颠翻翻炒8秒至蒜叶变绿断生立刻出锅。",
        timerSeconds: 45,
        chefTip: "刀板香自带咸鲜，调味无需再加盐，白糖中和腊味更显醇甜。"
      }
    ],
    tips: "皖南农家最下饭的一道菜！刀板香片片晶莹剔透，肥而不腻瘦而不柴，蒜苗青翠多汁辣甜适口，肉香与蒜香交织，妥妥的白米饭杀手。",
    tags: ["安徽", "徽菜", "刀板香", "蒜苗炒腊肉", "农家土菜", "焦香下饭"]
  },
  {
    id: "rec_prov_044",
    name: "徽州雪菜毛豆肉丝炒鲜笋",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 190,
    prepTimeMinutes: 12,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "农家自腌雪里蕻碎(雪菜)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "碧绿新剥鲜毛豆仁", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩春笋或雷竹笋丝", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "里脊猪肉细丝", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "红彩椒细丝点缀", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "精炼纯菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "酿造淡盐鲜酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯白砂糖(提鲜灵魂)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "料酒与生粉(腌肉丝)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "毛豆与笋丝沸水焯烫沥干",
        instruction: "鲜毛豆仁与笋丝在沸水中焯水2分钟至八分熟捞出，去除笋涩并确保豆子软嫩生绿。",
        timerSeconds: 120,
        chefTip: "毛豆焯水加少许盐和油，可保持碧绿诱人色泽。"
      },
      {
        stepIndex: 2,
        title: "滑炒肉丝变色盛出",
        instruction: "肉丝加料酒、生粉抓匀，锅中烧热油滑入肉丝快速拨散，变白断生后盛出备用。",
        timerSeconds: 90,
        chefTip: "滑炒肉丝时间宜短，保持软嫩爽口。"
      },
      {
        stepIndex: 3,
        title: "煸炒雪菜合炒四宝清爽出锅",
        instruction: "锅中底油下雪菜末小火煸出酸爽清香，倒入毛豆、笋丝、肉丝与红椒丝大火同炒，调入淡盐生抽与白糖提鲜，大火快炒翻匀出锅。",
        timerSeconds: 120,
        chefTip: "雪菜炒透后香味彻底释放，白糖能中和酸咸带来回甘。"
      }
    ],
    tips: "江南徽地早春时鲜！雪菜酸香爽脆，毛豆软糯甜润，竹笋爽脆清甜，肉丝滑嫩，四鲜荟萃，咸鲜脆嫩，既是下饭佳肴也是面条绝佳浇头。",
    tags: ["安徽", "徽菜", "雪菜毛豆", "炒笋丝", "时令小炒", "清爽下饭"]
  },
  {
    id: "rec_prov_045",
    name: "皖北农家干豆角烧五花肉",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 380,
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "土猪精品带皮五花肉块", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "农家日光自然晾晒干豆角(温水泡软)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "八角草果干辣椒生姜片", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "小香葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "传统菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "冰糖粒(炒糖色)", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "生抽老抽复合酱油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "黄酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "精制盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "开水", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "五花肉煸炒上糖色红亮",
        instruction: "五花肉切成麻将块焯水冲净。铁锅烧热下少许油与冰糖炒至枣红微泡，下五花肉块大火翻炒上色，煸出油脂焦香。",
        timerSeconds: 300,
        chefTip: "炒糖色给红烧肉天然红润光泽，比单纯老抽上色更红润甘甜。"
      },
      {
        stepIndex: 2,
        title: "下入香料与干豆角合炖",
        instruction: "投入八角、草果、干椒、生姜爆香，烹入黄酒、生抽老抽。倒入泡发切段的干豆角，倒入没过食材的开水大火煮沸转小火焖煨30分钟。",
        timerSeconds: 1800,
        chefTip: "干豆角极其耐炖且天生嗜油，与五花肉慢煨是相生相克的绝配。"
      },
      {
        stepIndex: 3,
        title: "收浓酱汁肉烂豆角浓香",
        instruction: "待五花肉软糯酥烂，开大火将汤汁收至浓稠挂勺，干豆角吸饱浓郁肉汁油亮发黑，撒葱花装盘。",
        timerSeconds: 300,
        chefTip: "干豆角吸足肉汁比肉还香，富有韧性嚼劲十足。"
      }
    ],
    tips: "皖北农家经典硬菜！太阳晾晒的干豆角有着独特日光醇香，吸足了五花肉的丰腴肥油，肥肉软糯不腻，豆角筋道多汁，超级下饭。",
    tags: ["安徽", "徽菜", "干豆角烧肉", "五花肉", "农家硬菜", "日光干菜"]
  },
  {
    id: "rec_prov_046",
    name: "徽州农家青椒炒野生葛粉皮",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 180,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "纯野生葛根粉蒸制粉皮切条", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "本地脆嫩青线椒斜切圈", amount: 60, unit: "g", type: "secondary", isCore: true },
      { name: "五花肉细丝", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "蒜碎与红椒丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯正菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "香醋", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "食用盐与白糖", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "葛粉皮温水浸润切长宽条",
        instruction: "纯天然葛粉皮切成一指宽的长条，入温水略微浸泡使其柔软不粘连，沥水备用。",
        timerSeconds: 120,
        chefTip: "正宗徽州葛根粉皮质地呈半透明灰青色，久煮久炒不烂，爽滑劲道。"
      },
      {
        stepIndex: 2,
        title: "煸炒肉丝蒜碎与青红椒圈",
        instruction: "热锅倒菜籽油，下入肉丝与蒜碎煸香，倒入青椒圈与红椒丝大火快速煸出椒香味。",
        timerSeconds: 120,
        chefTip: "青线椒煸出微起虎皮纹，辣香扑鼻。"
      },
      {
        stepIndex: 3,
        title: "葛粉皮滑入快翻吸味出锅",
        instruction: "滑入葛粉皮大火颠锅翻炒，调入生抽、香醋、盐与白糖，烹入两汤匙温水防粘，大火炒至粉皮透亮挂汁即可出锅。",
        timerSeconds: 120,
        chefTip: "烹少许水产生蒸汽，葛粉皮能瞬间吸收酱汁变得晶莹剔透滑润弹牙。"
      }
    ],
    tips: "徽州大山馈赠的养生土菜！葛根粉生津清火，粉皮晶莹剔透，入口爽滑弹牙耐嚼，配着青椒的辛香与蒜香，清爽利落。",
    tags: ["安徽", "徽菜", "葛粉皮", "青椒炒粉皮", "山野土菜", "清爽弹牙"]
  },
  {
    id: "rec_prov_047",
    name: "徽州生煎臭豆腐炒青红椒",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 210,
    prepTimeMinutes: 8,
    cookTimeMinutes: 7,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "传统徽州灰白发酵臭豆腐块", amount: 8, unit: "块", type: "main", isCore: true },
      { name: "脆爽青红尖椒切段", amount: 60, unit: "g", type: "secondary", isCore: true },
      { name: "拍大蒜瓣与老姜片", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "香葱段", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟压榨菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "酿造特鲜生抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "农家糯米黄酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白糖与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "铁锅双面煎至金黄焦脆",
        instruction: "锅中烧热菜籽油，将臭豆腐平铺入锅，中小火慢慢煎制，两面皆煎至金黄硬壳、内部鼓起。",
        timerSeconds: 240,
        chefTip: "徽州臭豆腐与长沙黑臭豆腐不同，表面灰白，煎透后外酥内软如咸芝士。"
      },
      {
        stepIndex: 2,
        title: "锅铲切小块加入姜蒜红椒",
        instruction: "用锅铲将煎好的臭豆腐就地划成四小块，拨至锅边，下入大蒜、姜片与青红椒段大火煸香。",
        timerSeconds: 120,
        chefTip: "切成小块后豆腐断面能更好吸纳青椒辣香与酱汁。"
      },
      {
        stepIndex: 3,
        title: "烹酒调味大火快速合炒颠锅",
        instruction: "沿锅边烹入黄酒、生抽、微量白糖与胡椒粉，大火剧烈颠锅翻炒15秒，撒入葱段出锅盛盘。",
        timerSeconds: 60,
        chefTip: "急火短炒，保持外壳香脆内里软滑嫩热。"
      }
    ],
    tips: "街头巷尾闻香驻足的风味小炒！闻着微臭，入口酥香化渣，青红椒的鲜辣完美升华了发酵醇香，是皖南地区极受欢迎的佐酒下饭神菜。",
    tags: ["安徽", "徽菜", "臭豆腐", "生煎臭豆腐", "下酒小炒", "外酥里嫩"]
  },
  {
    id: "rec_prov_048",
    name: "皖中家常芹菜炒香干肉丝",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "安徽采石矶茶干或五香干(切细条)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩细水芹或香芹段", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "鲜猪里脊肉丝", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "小红椒细丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正大豆油或菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "生抽酱油", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "料酒与生粉(腌肉)", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "白糖与食盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肉丝滑油变白即盛",
        instruction: "肉丝加料酒、少许盐、生粉抓匀上浆。锅中热油下肉丝快速滑炒变白散开，捞出备用。",
        timerSeconds: 60,
        chefTip: "肉丝热油快滑方能滑嫩不柴。"
      },
      {
        stepIndex: 2,
        title: "大火煸炒香干条出豆香",
        instruction: "锅中留底油，下入茶干细条大火煸炒1分钟，烹入生抽使茶干吸收酱香与温热。",
        timerSeconds: 90,
        chefTip: "采石矶茶干质地密实芳香，稍加煸炒即可激发八角丁香卤制底香。"
      },
      {
        stepIndex: 3,
        title: "加入芹菜肉丝红椒急火快炒",
        instruction: "投入芹菜段、红椒丝与滑好的肉丝，调入少许盐与白糖，大火急炒40秒至芹菜断生保持翠绿，出锅装盘。",
        timerSeconds: 45,
        chefTip: "芹菜入锅不可久炒，断生即起锅方显爽脆爆汁口感。"
      }
    ],
    tips: "皖中小河水乡经典家常快炒！茶干越嚼越香韧劲十足，水芹脆嫩清香直透心扉，肉丝爽滑，三者相得益彰，百吃不厌的家常至味。",
    tags: ["安徽", "徽菜", "采石矶茶干", "芹菜炒香干", "家常快手", "爽脆清香"]
  },
  {
    id: "rec_prov_049",
    name: "徽州梅干菜肉末炒小河鱼",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 280,
    prepTimeMinutes: 12,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新安江野生小河鱼(干煎焙干)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "徽州特产农家蒸晒梅干菜碎", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "土猪肥瘦肉末", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "青红尖椒末与蒜米姜末", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "农家浓香菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "徽州古法黄酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "酿造特鲜老抽生抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "细白砂糖", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "小河鱼慢火煎透酥香干脆",
        instruction: "锅中烧热菜籽油，将小河鱼入锅用文火慢焙慢煎，煎至两面金黄干香酥脆，捞出控油备用。",
        timerSeconds: 300,
        chefTip: "小河鱼必须焙干水分连骨头都酥香，吃起来才不会被鱼刺卡喉。"
      },
      {
        stepIndex: 2,
        title: "煸炒肉末与梅干菜爆出陈香",
        instruction: "锅中留油下猪肉末煸香吐油，下入蒜姜末、青红椒与洗净攥干的梅干菜碎大火炒干水分，激发甘醇陈香。",
        timerSeconds: 180,
        chefTip: "梅干菜经高温油脂煸炒后，干香甜润充分挥发。"
      },
      {
        stepIndex: 3,
        title: "河鱼合锅喷酒大火翻匀出锅",
        instruction: "倒入酥脆小河鱼，烹入黄酒、生抽、微量老抽与白糖，大火快速颠锅翻炒1分钟让河鱼裹满干菜肉末，香浓出锅。",
        timerSeconds: 60,
        chefTip: "翻炒动作要快且轻，保持小鱼完整不碎，干香透骨。"
      }
    ],
    tips: "新安江畔渔家风味！小河鱼酥脆焦香，梅干菜咸甜回甘，肉末脂香四溢，干香浓烈越嚼越香，配清粥或米饭都是极品神品。",
    tags: ["安徽", "徽菜", "新安江河鱼", "梅干菜", "酥香干脆", "佐餐极品"]
  },
  {
    id: "rec_prov_050",
    name: "皖南农家咸菜炒苦瓜薄片",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 120,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜翠绿苦瓜(剖开去白瓤切薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "皖南农家自腌咸菜碎", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣拍碎与红椒丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "农家熟菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯白砂糖(中和苦味)", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "酿造清淡生抽", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "精制细盐(苦瓜杀水用)", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "苦瓜薄片加盐抓腌杀水挤干",
        instruction: "苦瓜刮净内部白膜切薄片，撒少许盐抓匀静置5分钟，挤去泛苦的苦瓜汁水，用清水冲洗沥干。",
        timerSeconds: 300,
        chefTip: "去白膜加盐杀水可去除80%苦味，使炒出的苦瓜依旧翠绿爽脆。"
      },
      {
        stepIndex: 2,
        title: "热油煸炒蒜碎与农家咸菜",
        instruction: "铁锅烧热下菜籽油，爆香大蒜碎，倒入农家咸菜碎大火翻炒，炒出咸酸干香之气。",
        timerSeconds: 90,
        chefTip: "咸菜炒干水分才香，与油融合形成独特发酵香。"
      },
      {
        stepIndex: 3,
        title: "苦瓜下锅大火猛翻白糖提鲜",
        instruction: "下入挤干的苦瓜薄片与红椒丝，调入白糖与少许生抽，旺火极速颠翻1分钟至苦瓜变亮断生，即可装盘。",
        timerSeconds: 60,
        chefTip: "大火短炒苦味变甘，白糖与咸菜互补，苦甘交融清爽怡人。"
      }
    ],
    tips: "徽州乡村祛暑开胃小妙菜！咸菜的咸酸与苦瓜的清苦在白糖的调和下化作悠长回甘，脆嫩爽口解油腻，夏天吃上一口神清气爽。",
    tags: ["安徽", "徽菜", "苦瓜炒咸菜", "清爽回甘", "农家素菜", "开胃消暑"]
  },
  {
    id: "rec_prov_051",
    name: "皖北传统水烙馍卷馓子卤肉",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "蒸",
    calories: 340,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "传统手工水烙馍薄如纸面饼", amount: 6, unit: "张", type: "main", isCore: true },
      { name: "皖北金黄酥脆油炸油馓子", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "秘制五香卤猪头肉或卤五花片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜黄瓜丝与大葱白细丝", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "自制蒜泥西红柿红油蘸汁", amount: 30, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "纯芝麻香油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "酿造甜面酱或黄豆酱", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "蒜泥米醋辣油汁", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "水烙馍热气腾腾复蒸回软",
        instruction: "水烙馍在蒸锅中上汽蒸2分钟，取出保持热气腾腾、柔软筋道、薄如宣纸状态。",
        timerSeconds: 120,
        chefTip: "水烙馍用沸水锅汽蒸熟，无油干烙，柔软中带着麦香筋道。"
      },
      {
        stepIndex: 2,
        title: "案板平铺面饼刷酱抹蒜泥汁",
        instruction: "取一张温海水烙馍平铺，均匀刷上一层甜面酱或蒜泥辣椒酱，撒少许香油提香。",
        timerSeconds: 60,
        chefTip: "酱料不宜过厚，薄薄一层提味即可。"
      },
      {
        stepIndex: 3,
        title: "卷入卤肉脆馓子葱丝紧裹",
        instruction: "在面饼中央码放卤五花肉片、金黄酥脆馓子一把、葱丝与黄瓜丝，两边向内折叠紧紧卷起，斜切对半开吃。",
        timerSeconds: 90,
        chefTip: "酥脆的馓子与软糯卤肉、筋道水烙馍在口中碰撞，脆软兼备妙不可言。"
      }
    ],
    tips: "皖北宿州淮北地道街头传统美味！水烙馍软滑筋道薄若蝉翼，馓子酥脆金黄咔嚓作响，卤肉软烂酱香浓郁，一口咬下层次丰盈过瘾。",
    tags: ["安徽", "徽菜", "水烙馍", "皖北名吃", "油馓子", "卷饼百味"]
  },
  {
    id: "rec_prov_052",
    name: "徽州家常浓酱煨冬瓜块",
    region: "安徽",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 140,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "肉厚皮薄青皮冬瓜(切大厚方块划十字纹)", amount: 400, unit: "g", type: "main", isCore: true },
      { name: "熟猪油熬制肉渣或腊肉碎", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜瓣拍松与小葱花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟猪油与菜籽油(1:1)", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "传统徽州特级红烧酱油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯白砂糖", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "清高汤或热水", baseAmount: 200, unit: "ml", amountText: "200ml", isPantryStaple: false },
      { name: "水淀粉薄芡", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "冬瓜去皮划十字花刀两面煎黄",
        instruction: "冬瓜去皮切3厘米见方大块，表面打上细密十字花刀。热锅下猪油菜籽油，将冬瓜块皮面朝下慢煎至金黄微焦。",
        timerSeconds: 240,
        chefTip: "打花刀能让冬瓜肉在短时间内充分吸收浓酱肉汁，两面煎黄更出香气。"
      },
      {
        stepIndex: 2,
        title: "下肉渣蒜瓣烹酱汁加汤焖煨",
        instruction: "加入肉渣与大蒜瓣煸香，烹入红烧酱油、白糖炒出红亮酱色，倒入清高汤大火煮沸，改中小火加盖煨煮10分钟至冬瓜透明软糯。",
        timerSeconds: 600,
        chefTip: "加少许猪油渣是徽州素菜荤做的秘法，赋予冬瓜宛如红烧肉般丰腴口感。"
      },
      {
        stepIndex: 3,
        title: "收浓酱汁勾琉璃薄芡出锅",
        instruction: "开大火将汤汁收至浓稠，淋少许水淀粉勾薄芡使红亮酱汁紧紧包裹冬瓜，撒上葱花出锅装盘。",
        timerSeconds: 90,
        chefTip: "冬瓜煨至半透明如琥珀，吸饱肉汁入口即化，胜似红烧肉。"
      }
    ],
    tips: "徽派素菜荤做的代表佳作！普通的冬瓜在猪油与浓郁酱油的煨炖下化作温润软糯的琥珀琼浆，入口即融，浓油赤酱下饭至美。",
    tags: ["安徽", "徽菜", "红烧冬瓜", "素菜荤做", "浓油赤酱", "家常素美"]
  }
];
