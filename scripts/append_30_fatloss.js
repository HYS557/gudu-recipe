const fs = require('fs');
const path = require('path');

const photoList = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_fatloss_photos.json'), 'utf8'));
const pMap = {};
photoList.forEach(p => { pMap[p.name] = p.photoUrl; });

const newFatlossRecipes = [
  {
    id: "rec_fatloss_01",
    name: "香煎黑椒多汁嫩鸡胸",
    subtitle: "柠檬生抽锁水腌透，外皮金黄焦香咬开爆汁，彻底告别水煮干柴",
    photoUrl: pMap["香煎黑椒多汁嫩鸡胸"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["黑椒焦香", "鲜嫩爆汁", "高蛋白"],
    cookingMethod: "少油香煎",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    servings: 2,
    calories: 195,
    ingredients: [
      { name: "新鲜鸡胸肉", amount: "350g", category: "肉禽" },
      { name: "现磨黑胡椒碎", amount: "1.5茶匙", category: "调料" },
      { name: "鲜柠檬汁", amount: "1汤匙", category: "调料" },
      { name: "生抽", amount: "1.5大勺", category: "调料" },
      { name: "蚝油", amount: "1茶匙", category: "调料" },
      { name: "玉米淀粉/生粉", amount: "1茶匙", category: "调料" },
      { name: "橄榄油/喷雾油", amount: "5ml", category: "食用油" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "蚝油", baseAmount: 5, unit: "ml" },
      { name: "黑胡椒碎", baseAmount: 3, unit: "g" },
      { name: "橄榄油", baseAmount: 5, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "横剖改刀", instruction: "鸡胸肉洗净擦干，顺着纹理横向片成两片薄厚均匀的大肉排，用刀背在正反两面轻轻拍松。", timerSeconds: 180, chefTip: "横剖变薄能受热均匀，刀背拍断部分筋膜能使鸡肉极嫩。" },
      { stepIndex: 2, title: "锁水腌渍", instruction: "放入生抽、蚝油、柠檬汁、现磨黑胡椒和少许生粉抓匀，淋几滴清水抓至完全吸收，腌制15分钟。", timerSeconds: 900, chefTip: "少许柠檬汁中的果酸能软化肉质纤维。" },
      { stepIndex: 3, title: "少油慢煎", instruction: "平底不粘锅喷薄薄一层橄榄油，烧至五成热下入鸡胸肉，中小火慢煎2.5分钟至底面金黄微焦。", timerSeconds: 150, chefTip: "切忌过早频繁翻动，待蛋白质定型产生梅纳反应焦香。" },
      { stepIndex: 4, title: "翻面加盖", instruction: "翻面继续煎2分钟，顺锅边淋入一小勺清水，迅速盖上锅盖利用蒸汽焖煎1分钟锁住汁水，出锅切条装盘。", timerSeconds: 180, chefTip: "锅边淋少许水加盖焖煎是外焦里嫩爆汁的核心绝招。" }
    ],
    tips: "生煎前横剖变薄，起锅前加盖焖煎1分钟，彻底告别水煮柴鸡胸。"
  },
  {
    id: "rec_fatloss_02",
    name: "茄汁金针菇焖鸡胸肉",
    subtitle: "新鲜番茄炒出浓沙起汁，金针菇与鸡胸肉吸饱酸甜茄汁，开胃饱腹",
    photoUrl: pMap["茄汁金针菇焖鸡胸肉"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["酸甜鲜美", "浓郁多汁", "高纤低卡"],
    cookingMethod: "少油焖炖",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    servings: 2,
    calories: 210,
    ingredients: [
      { name: "去皮鸡胸肉丁", amount: "250g", category: "肉禽" },
      { name: "熟透大红番茄", amount: "2个(约350g)", category: "蔬菜" },
      { name: "鲜金针菇", amount: "150g", category: "蔬菜" },
      { name: "蒜末、葱花", amount: "各15g", category: "蔬菜" },
      { name: "生抽、白胡椒粉、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "盐", baseAmount: 2, unit: "g" },
      { name: "白胡椒粉", baseAmount: 1, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "食材切备", instruction: "番茄开十字刀用开水烫皮撕去，切成小碎块；金针菇切去根部撕开洗净沥干；鸡胸肉切小丁加生抽胡椒粉抓匀。", timerSeconds: 300, chefTip: "番茄切得越碎越容易炒出浓郁沙汁。" },
      { stepIndex: 2, title: "炒出浓沙", instruction: "热锅倒3滴油爆香蒜末，倒入番茄碎块加小半茶匙盐，中小火翻炒按压出大量红亮番茄汁沙。", timerSeconds: 240, chefTip: "加少许盐能加速番茄析出汁水起沙。" },
      { stepIndex: 3, title: "铺菇下鸡", instruction: "锅内倒入小半碗沸水煮开，铺入金针菇，再将腌好的鸡胸肉丁均匀撒在金针菇上方，盖盖焖煮3分钟。", timerSeconds: 180, chefTip: "鸡丁撒在金针菇上焖熟，肉质格外滑嫩。" },
      { stepIndex: 4, title: "收汁撒葱", instruction: "揭盖大火翻炒收至汤汁浓稠包裹食材，撒入葱花即可出锅连汤拌糙米饭享用。", timerSeconds: 60, chefTip: "浓郁番茄酸甜汁是天然低卡酱汁，完全不用额外放糖。" }
    ],
    tips: "番茄炒出沙汁是整道菜灵魂，金针菇提供大量可溶性膳食纤维，饱腹感强。"
  },
  {
    id: "rec_fatloss_03",
    name: "低脂黄瓜木耳炒鸡胸肉",
    subtitle: "爽脆黄瓜片与黑木耳少油急炒，鸡胸肉滑嫩清甜，清爽刮油家常味",
    photoUrl: pMap["低脂黄瓜木耳炒鸡胸肉"],
    region: "家常轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["咸鲜清爽", "爽脆滑嫩", "低脂清淡"],
    cookingMethod: "大火快炒",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    servings: 2,
    calories: 175,
    ingredients: [
      { name: "鸡胸肉切片", amount: "200g", category: "肉禽" },
      { name: "脆黄瓜切菱形片", amount: "1根(约150g)", category: "蔬菜" },
      { name: "泡发秋木耳", amount: "80g", category: "干货菌菇" },
      { name: "大蒜片", amount: "10g", category: "蔬菜" },
      { name: "生抽、白胡椒、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 10, unit: "ml" },
      { name: "盐", baseAmount: 2, unit: "g" },
      { name: "橄榄油", baseAmount: 5, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "滑肉腌制", instruction: "鸡胸肉逆纹切薄片，加入少许料酒、生抽、淀粉与一勺清水抓匀上浆静置10分钟。", timerSeconds: 300, chefTip: "少许上浆能锁住水分，炒时不柴。" },
      { stepIndex: 2, title: "木耳焯水", instruction: "黑木耳开水下锅焯烫1分钟捞出沥干（防炒制时炸锅）。", timerSeconds: 60, chefTip: "焯水能去杂质防爆油。" },
      { stepIndex: 3, title: "滑炒鸡片", instruction: "锅内喷少许油烧热，下蒜片爆香，倒入鸡胸肉片大火滑炒至变白断生（约40秒）盛出。", timerSeconds: 60, chefTip: "刚变白立即出锅，切忌炒老。" },
      { stepIndex: 4, title: "合炒出锅", instruction: "锅底余温下木耳和黄瓜片大火翻炒40秒，倒入鸡片，加生抽和少许盐翻匀出锅。", timerSeconds: 60, chefTip: "黄瓜快翻断生保持清脆多汁。" }
    ],
    tips: "黑木耳与黄瓜热量极低，配合滑炒鸡片，高蛋白低热量营养均衡。"
  },
  {
    id: "rec_fatloss_04",
    name: "越式鲜虾鸡丝低卡米纸卷",
    subtitle: "透明米纸卷入鲜脆生菜、紫甘蓝、鸡丝与红润大虾，蘸泰式酸辣汁",
    photoUrl: pMap["越式鲜虾鸡丝低卡米纸卷"],
    region: "东南亚轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["清脆爽口", "酸辣开胃", "零油低卡"],
    cookingMethod: "免火卷制",
    difficulty: "新手友好",
    prepTimeMinutes: 20,
    cookTimeMinutes: 5,
    servings: 2,
    calories: 160,
    ingredients: [
      { name: "越南纯米纸皮", amount: "6张", category: "粮油主食" },
      { name: "白灼开背大虾仁", amount: "12只", category: "海鲜水产" },
      { name: "熟鸡胸肉手撕丝", amount: "150g", category: "肉禽" },
      { name: "紫甘蓝丝、黄瓜条、胡萝卜丝", amount: "各50g", category: "蔬菜" },
      { name: "脆球生菜叶", amount: "6片", category: "蔬菜" },
      { name: "泰式甜辣酱/低脂油醋汁", amount: "2大勺", category: "调料" }
    ],
    seasonings: [
      { name: "低脂油醋汁/泰式酸辣酱", baseAmount: 30, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "白灼鲜虾", instruction: "鲜虾加姜片料酒煮沸断生，捞出剥壳开背待用；鸡胸肉煮熟撕细丝。", timerSeconds: 300, chefTip: "虾仁对半切开摆盘更美观。" },
      { stepIndex: 2, title: "温水软化", instruction: "大盘中装温水，取一张米纸浸入温水中3~5秒立刻平铺在干净砧板上（余温会自动使其变软透明）。", timerSeconds: 30, chefTip: "千万不要泡太久，沾湿即拿出，否则容易破皮黏连。" },
      { stepIndex: 3, title: "层叠摆放", instruction: "米纸中间放生菜叶，码上鸡丝、黄瓜条、胡萝卜丝与紫甘蓝，上面整齐排开两只红润大虾仁。", timerSeconds: 60, chefTip: "虾仁红面向下摆放，卷起后透过透明米纸显露鲜亮红色。" },
      { stepIndex: 4, title: "紧实卷紧", instruction: "将米纸下边缘向上折起包住食材，左右两侧向内对折，再由下向上紧紧卷成圆柱卷，对半斜切摆盘蘸酱享用。", timerSeconds: 60, chefTip: "卷紧实切面不易散落。" }
    ],
    tips: "零烹调油、高蛋白、高膳食纤维，冷吃便携，是炎夏与办公室减脂便当首选。"
  },
  {
    id: "rec_fatloss_05",
    name: "减脂彩椒孜然鸡肉串",
    subtitle: "鸡胸肉与红黄彩椒洋葱相间串起，孜然辣椒烤出大排档烧烤焦香",
    photoUrl: pMap["减脂彩椒孜然鸡肉串"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["孜然焦香", "香辣多汁", "微甜爽脆"],
    cookingMethod: "少油香煎/空气炸",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 2,
    calories: 210,
    ingredients: [
      { name: "鸡胸肉丁", amount: "300g", category: "肉禽" },
      { name: "红黄甜椒、紫洋葱块", amount: "各80g", category: "蔬菜" },
      { name: "竹签", amount: "6根", category: "辅料" },
      { name: "孜然粒、辣椒粉、白芝麻", amount: "各1大勺", category: "干货香料" },
      { name: "生抽、蚝油、料酒", amount: "各1大勺", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "孜然粒", baseAmount: 10, unit: "g" },
      { name: "粗辣椒粉", baseAmount: 5, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "腌制肉丁", instruction: "鸡胸肉切2厘米方丁，加入生抽、蚝油、料酒、少许黑胡椒粉抓匀腌制20分钟入味。", timerSeconds: 600, chefTip: "加入少许料酒腌制去腥且多汁。" },
      { stepIndex: 2, title: "相间穿串", instruction: "竹签洗净，依次穿上一块洋葱、一块鸡肉、一块彩椒，紧凑穿满整签。", timerSeconds: 300, chefTip: "洋葱受热渗出的天然甜味会渗入鸡肉中。" },
      { stepIndex: 3, title: "控温烤煎", instruction: "平底锅喷薄油中小火煎（或空气炸锅180℃烤8分钟），中途翻面煎至鸡肉表面金黄微焦全熟。", timerSeconds: 480, chefTip: "彩椒边缘微焦风味最佳。" },
      { stepIndex: 4, title: "撒料出炉", instruction: "出锅前均匀撒上足量孜然粒、辣椒面与熟白芝麻，焦香四溢如同大排档烧烤。", timerSeconds: 60, chefTip: "现撒孜然粉在热气激发下香气更浓。" }
    ],
    tips: "用甜椒与洋葱代替高油肥肉，饱腹低脂，解馋大排档烧烤瘾。"
  },
  {
    id: "rec_fatloss_06",
    name: "低卡无油蒜香彩蔬鸡肉丸",
    subtitle: "鸡胸肉加甜玉米胡萝卜马蹄手打上劲蒸熟，Q弹爆汁，减脂百搭常备",
    photoUrl: pMap["低卡无油蒜香彩蔬鸡肉丸"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["清甜Q弹", "蒜香适口", "零油高蛋白"],
    cookingMethod: "清蒸熟制",
    difficulty: "需要耐心",
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    servings: 3,
    calories: 165,
    ingredients: [
      { name: "纯鸡胸肉泥", amount: "400g", category: "肉禽" },
      { name: "熟甜玉米粒", amount: "50g", category: "蔬菜" },
      { name: "胡萝卜细丁、脆马蹄碎", amount: "各40g", category: "蔬菜" },
      { name: "蛋清", amount: "1个", category: "蛋类" },
      { name: "蒜泥", amount: "15g", category: "蔬菜" },
      { name: "生抽、白胡椒粉、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "盐", baseAmount: 3, unit: "g" },
      { name: "白胡椒粉", baseAmount: 1, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "绞打肉泥", instruction: "鸡胸肉切小块放入绞肉机，加入蛋清、蒜泥、生抽、盐与白胡椒粉搅打成细腻肉茸。", timerSeconds: 180, chefTip: "蛋清是保持肉丸滑嫩成团的关键。" },
      { stepIndex: 2, title: "拌入彩蔬", instruction: "将胡萝卜丁、玉米粒和马蹄碎倒入肉泥中，用筷子顺着一个方向用力搅打上劲起胶。", timerSeconds: 180, chefTip: "马蹄丁提供爽脆多汁颗粒感。" },
      { stepIndex: 3, title: "虎口挤丸", instruction: "左手抓起肉泥从虎口处挤出圆润肉丸，右手用勺子蘸少许凉水刮下，码在蒸盘上。", timerSeconds: 240, chefTip: "勺子蘸水防粘，丸子表面光滑。" },
      { stepIndex: 4, title: "大火蒸熟", instruction: "蒸锅水开后上屉，大火蒸10~12分钟至丸子鼓起熟透即可，可直接吃也可冷冻保存煮汤做菜。", timerSeconds: 600, chefTip: "蒸熟后自然冷却放冷冻室，随吃随取超方便。" }
    ],
    tips: "零油蒸制，玉米马蹄天然清甜，蛋白质含量高达25g每份。"
  },
  {
    id: "rec_fatloss_07",
    name: "黑椒彩椒滑牛柳粒",
    subtitle: "牛里脊切丁大火快炒，搭配彩椒洋葱黑椒碎，高蛋白补铁饱腹硬菜",
    photoUrl: pMap["黑椒彩椒滑牛柳粒"],
    region: "家常轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["黑椒浓醇", "牛肉鲜嫩", "多汁有嚼劲"],
    cookingMethod: "少油生炒",
    difficulty: "需要火候",
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    servings: 2,
    calories: 235,
    ingredients: [
      { name: "牛里脊肉丁", amount: "280g", category: "肉禽" },
      { name: "红黄甜椒块、洋葱块", amount: "各80g", category: "蔬菜" },
      { name: "现磨黑胡椒碎", amount: "2茶匙", category: "调料" },
      { name: "生抽、蚝油、料酒", amount: "各1大勺", category: "调料" },
      { name: "橄榄油", amount: "5ml", category: "食用油" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "蚝油", baseAmount: 10, unit: "ml" },
      { name: "黑胡椒碎", baseAmount: 4, unit: "g" },
      { name: "橄榄油", baseAmount: 5, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "牛肉切丁", instruction: "牛里脊切成1.5厘米方块，加入料酒、生抽、少许黑胡椒粉和生粉抓匀上浆，最后封少许油腌制15分钟。", timerSeconds: 600, chefTip: "封少许油炒时不沾粘，肉质嫩滑。" },
      { stepIndex: 2, title: "大火滑肉", instruction: "热锅倒少许油烧热，下牛肉粒大火快速滑炒至八成熟变色（约1分钟），迅速盛出备用。", timerSeconds: 60, chefTip: "大火快炒防止牛肉内部汁水流失变柴。" },
      { stepIndex: 3, title: "彩椒断生", instruction: "锅内留少许底油，下洋葱和彩椒块大火翻炒1分钟至香气散发断生微脆。", timerSeconds: 60, chefTip: "彩椒快炒能保持维生素C和甜脆口感。" },
      { stepIndex: 4, title: "合锅黑椒", instruction: "倒入牛肉粒，调入蚝油与大量现磨黑胡椒碎，猛火快速翻炒均匀让黑椒汁裹透牛肉立即出锅。", timerSeconds: 40, chefTip: "黑椒最后撒入出锅，香气最浓烈。" }
    ],
    tips: "牛里脊脂肪极低（仅2%），富含肌酸与血红素铁，是减脂期力量恢复黄金食材。"
  },
  {
    id: "rec_fatloss_08",
    name: "芦笋清炒滑牛柳丝",
    subtitle: "脆嫩青芦笋与牛柳丝少油急炒，清甜爽口高微量元素，经典西式轻食",
    photoUrl: pMap["芦笋清炒滑牛柳丝"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["清甜脆嫩", "牛肉鲜滑", "清爽少油"],
    cookingMethod: "旺火快炒",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 4,
    servings: 2,
    calories: 215,
    ingredients: [
      { name: "牛柳切丝", amount: "200g", category: "肉禽" },
      { name: "鲜嫩青芦笋段", amount: "200g", category: "蔬菜" },
      { name: "蒜末", amount: "10g", category: "蔬菜" },
      { name: "生抽、白胡椒粉、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 10, unit: "ml" },
      { name: "盐", baseAmount: 2, unit: "g" },
      { name: "橄榄油", baseAmount: 5, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "处理芦笋", instruction: "芦笋削去老根硬皮，斜切成长段，沸水中加少许盐焯烫40秒捞出冲凉水保持翠绿。", timerSeconds: 120, chefTip: "焯水能去草酸并保持芦笋碧绿爽脆。" },
      { stepIndex: 2, title: "牛柳上浆", instruction: "牛里脊顺纹切细丝，加料酒、生抽和少许淀粉抓匀上浆备用。", timerSeconds: 300, chefTip: "顺丝切炒时不碎。" },
      { stepIndex: 3, title: "滑炒牛肉", instruction: "平底锅倒少许橄榄油，爆香蒜末，倒入牛柳丝大火滑炒至刚变色断生。", timerSeconds: 45, chefTip: "牛肉在锅中停留时间不要超过1分钟。" },
      { stepIndex: 4, title: "合炒调味", instruction: "倒入焯好的芦笋段，加少许生抽与盐快速翻炒均匀即可装盘。", timerSeconds: 30, chefTip: "大火急翻保持脆嫩。" }
    ],
    tips: "芦笋富含天门冬酰胺和微量元素硒，有利尿消水肿功效。"
  },
  {
    id: "rec_fatloss_09",
    name: "鲜嫩冬瓜手打纯牛肉丸煲",
    subtitle: "纯瘦牛肉手打肉丸配半透明软烂冬瓜片，汤清肉甜零淀粉超饱腹",
    photoUrl: pMap["鲜嫩冬瓜手打纯牛肉丸煲"],
    region: "清润暖煲",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["清甜鲜香", "肉丸弹牙", "暖胃刮油"],
    cookingMethod: "慢火清煮",
    difficulty: "需要耐心",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 2,
    calories: 180,
    ingredients: [
      { name: "纯瘦黄牛肉泥", amount: "250g", category: "肉禽" },
      { name: "去皮白玉冬瓜片", amount: "300g", category: "蔬菜" },
      { name: "芹菜末、葱姜末", amount: "各15g", category: "蔬菜" },
      { name: "白胡椒粉、盐、生抽", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "盐", baseAmount: 3, unit: "g" },
      { name: "白胡椒粉", baseAmount: 2, unit: "g" },
      { name: "生抽", baseAmount: 10, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "牛肉打胶", instruction: "黄牛肉剁成细茸，加入姜水、蛋清、盐和胡椒粉，用手沿顺时针用力摔打上劲成肉胶。", timerSeconds: 300, chefTip: "分次打入姜水并摔打，肉丸自然紧实爆汁。" },
      { stepIndex: 2, title: "冬瓜煮软", instruction: "砂锅中加适量清水，放入姜片和冬瓜片，大火烧开后转中小火煮5分钟至冬瓜呈半透明状。", timerSeconds: 300, chefTip: "冬瓜先煮出清甜底汤。" },
      { stepIndex: 3, title: "小火下丸", instruction: "转小火保持微沸，用勺子将牛肉泥舀成小丸子滑入锅中，待肉丸全部漂浮成熟。", timerSeconds: 240, chefTip: "水微沸下丸不会冲散肉丸。" },
      { stepIndex: 4, title: "芹末提鲜", instruction: "调入少许盐、白胡椒粉和生抽，撒入新鲜芹菜末关火出锅。", timerSeconds: 60, chefTip: "芹菜末是潮汕牛肉汤的经典点睛之笔。" }
    ],
    tips: "冬瓜有利水消肿之效，纯牛肉丸高蛋白无添加剂，连汤带菜喝光也不长秤。"
  },
  {
    id: "rec_fatloss_10",
    name: "无米燕麦滑蛋低卡肥牛饭",
    subtitle: "饱腹燕麦米打底，精瘦肥牛片与半凝固滑蛋覆盖，吉野家牛丼健康平替",
    photoUrl: pMap["无米燕麦滑蛋低卡肥牛饭"],
    region: "低卡简餐",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["洋葱甘甜", "蛋香浓郁", "肉汁多汁"],
    cookingMethod: "水焖轻炒",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    servings: 1,
    calories: 320,
    ingredients: [
      { name: "精瘦肥牛卷", amount: "120g", category: "肉禽" },
      { name: "鸡蛋", amount: "2枚(打散成蛋液)", category: "蛋类" },
      { name: "洋葱切丝", amount: "80g", category: "蔬菜" },
      { name: "熟燕麦米/糙米饭", amount: "100g", category: "粮油主食" },
      { name: "生抽、白糖、料酒、水", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "料酒", baseAmount: 10, unit: "ml" },
      { name: "白糖/代糖", baseAmount: 3, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "肥牛焯水", instruction: "沸水中下料酒，倒入肥牛卷快速烫至变色（约15秒）捞出沥干，除去多余油脂浮沫。", timerSeconds: 60, chefTip: "提前焯烫能去除大部分动物油脂，热量骤降。" },
      { stepIndex: 2, title: "洋葱熬汁", instruction: "平底锅加生抽、料酒、小半碗水与少许代糖，放入洋葱丝中小火煮2分钟至洋葱变软发甜。", timerSeconds: 120, chefTip: "洋葱慢熬释放天然焦糖甘甜。" },
      { stepIndex: 3, title: "下肉淋蛋", instruction: "倒入焯好的肥牛片拌匀，转微火，画圈淋入打散的鸡蛋液，盖盖焖30秒至蛋液半凝固微溏心关火。", timerSeconds: 60, chefTip: "蛋液七成熟滑嫩如布丁，余温会自动焖熟。" },
      { stepIndex: 4, title: "装碗盖浇", instruction: "将煮好的燕麦糙米饭盛入碗底，整锅滑蛋肥牛顺滑浇在米饭上，撒熟白芝麻和小葱即可。", timerSeconds: 60, chefTip: "汤汁拌燕麦饭浓香扑鼻。" }
    ],
    tips: "肥牛焯水减油50%，燕麦糙米提供长效低GI饱腹感，减脂期大口吃丼饭无压力。"
  },
  {
    id: "rec_fatloss_11",
    name: "酸辣柠檬鲜虾凉拌荞麦面",
    subtitle: "无糖全麦荞麦面冰镇，加大虾仁、青柠片与酸辣油醋汁，减脂期断货王",
    photoUrl: pMap["酸辣柠檬鲜虾凉拌荞麦面"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["青柠酸辣", "冰爽开胃", "Q弹低GI"],
    cookingMethod: "煮面拌凉",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 1,
    calories: 280,
    ingredients: [
      { name: "纯全麦荞麦面条", amount: "60g", category: "粮油主食" },
      { name: "鲜虾仁", amount: "8只", category: "海鲜水产" },
      { name: "黄瓜丝", amount: "60g", category: "蔬菜" },
      { name: "鲜柠檬切片去籽", amount: "3片", category: "果蔬" },
      { name: "大蒜末、小米椒圈、香菜", amount: "各10g", category: "蔬菜" },
      { name: "生抽、陈醋、蚝油、芝麻油", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 20, unit: "ml" },
      { name: "陈醋", baseAmount: 15, unit: "ml" },
      { name: "芝麻油", baseAmount: 3, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "煮透荞麦", instruction: "水开下荞麦面条煮4~5分钟无硬心，捞出立即投入准备好的纯净冰水中过凉沥干备用。", timerSeconds: 300, chefTip: "冰水过凉能使荞麦面极其爽滑筋道无粘稠感。" },
      { stepIndex: 2, title: "煮熟鲜虾", instruction: "开水锅加少许姜片，倒入鲜虾仁煮2分钟至红润微卷捞出过冰水备用。", timerSeconds: 120, chefTip: "过冰水使虾肉弹牙紧致。" },
      { stepIndex: 3, title: "调酸辣汁", instruction: "大碗中加蒜末、小米辣、生抽、陈醋、少许蚝油、几滴香油与去籽柠檬片，拌匀成酸爽酱汁。", timerSeconds: 60, chefTip: "柠檬挤压出少许果汁融于酱汁中。" },
      { stepIndex: 4, title: "装盘拌匀", instruction: "碗底放冰凉荞麦面，铺上黄瓜丝与大虾仁，淋上酸辣柠檬汁，撒香菜拌匀开吃。", timerSeconds: 60, chefTip: "冰镇酸辣在炎热夏天特别振奋食欲。" }
    ],
    tips: "100%纯全麦荞麦面升糖指数GI仅45，消化慢饱腹久，是减脂期优质主食代表。"
  },
  {
    id: "rec_fatloss_12",
    name: "减脂鲜虾生菜全麦卷饼",
    subtitle: "低卡全麦饼皮抹薄层低脂酱，卷入现灼大虾仁与脆生菜，便携轻食便当",
    photoUrl: pMap["减脂鲜虾生菜全麦卷饼"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["麦香清脆", "鲜甜饱满", "快手便携"],
    cookingMethod: "轻烙卷制",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 3,
    servings: 1,
    calories: 260,
    ingredients: [
      { name: "全麦卷饼皮", amount: "1张", category: "粮油主食" },
      { name: "白灼大虾仁", amount: "6只", category: "海鲜水产" },
      { name: "水煮蛋切片", amount: "1枚", category: "蛋类" },
      { name: "罗马生菜/球生菜", amount: "2大片", category: "蔬菜" },
      { name: "黄瓜丝、紫甘蓝丝", amount: "各30g", category: "蔬菜" },
      { name: "低脂沙拉酱/无糖油醋汁", amount: "15g", category: "调料" }
    ],
    seasonings: [
      { name: "低脂沙拉酱", baseAmount: 15, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "烙热饼皮", instruction: "平底锅不用放油，小火将全麦饼皮正反面各烘热15秒至柔软散发麦香。", timerSeconds: 30, chefTip: "烘软后饼皮柔韧不易破裂。" },
      { stepIndex: 2, title: "抹酱铺菜", instruction: "饼皮平铺，中间抹少许低脂酱料，铺上洗净擦干的生菜叶和黄瓜、紫甘蓝丝。", timerSeconds: 60, chefTip: "蔬菜务必擦干水分防泡软饼皮。" },
      { stepIndex: 3, title: "摆虾码蛋", instruction: "将白灼虾仁和熟鸡蛋片整齐排在蔬菜上方。", timerSeconds: 45, chefTip: "食材顺着一个方向摆放便于卷起。" },
      { stepIndex: 4, title: "紧实卷起", instruction: "由一侧向另一侧紧紧卷起成筒状，用油纸包紧对半斜切即可装盒带餐。", timerSeconds: 60, chefTip: "油纸包紧切开切面整齐好看。" }
    ],
    tips: "高蛋白、多纤维、控碳水，10分钟快手搞定营养工作餐。"
  },
  {
    id: "rec_fatloss_13",
    name: "虾仁西兰花炒口蘑",
    subtitle: "口蘑天然氨基酸增鲜，西兰花高纤充盈，配大虾仁不用味精也极鲜",
    photoUrl: pMap["虾仁西兰花炒口蘑"],
    region: "家常轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["鲜甜脆嫩", "蘑菇香浓", "少油少盐"],
    cookingMethod: "大火快炒",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    servings: 2,
    calories: 160,
    ingredients: [
      { name: "鲜海虾仁", amount: "150g", category: "海鲜水产" },
      { name: "西兰花切小朵", amount: "180g", category: "蔬菜" },
      { name: "新鲜白口蘑切片", amount: "100g", category: "蔬菜" },
      { name: "蒜末", amount: "15g", category: "蔬菜" },
      { name: "生抽、黑胡椒粉、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 10, unit: "ml" },
      { name: "黑胡椒粉", baseAmount: 2, unit: "g" },
      { name: "盐", baseAmount: 2, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "时蔬焯烫", instruction: "西兰花切小朵开水下锅焯水1分钟捞出沥干；口蘑切厚片备用。", timerSeconds: 90, chefTip: "焯水让西兰花保持翠绿且易炒熟。" },
      { stepIndex: 2, title: "煎香口蘑", instruction: "平底锅喷薄油，下口蘑片中小火慢煎至两面金黄微出汁，散发浓郁菌菇鲜香。", timerSeconds: 120, chefTip: "口蘑慢煎能释放天然呈味氨基酸。" },
      { stepIndex: 3, title: "下虾滑炒", instruction: "下蒜末和鲜虾仁，大火翻炒至虾仁蜷曲通体变红。", timerSeconds: 60, chefTip: "虾仁变红刚熟口感最Q弹。" },
      { stepIndex: 4, title: "合炒调味", instruction: "倒入西兰花，调入少许生抽、盐与现磨黑胡椒粉，大火猛翻30秒出锅装盘。", timerSeconds: 30, chefTip: "黑胡椒与口蘑是天生绝配。" }
    ],
    tips: "菌菇氨基酸搭配海鲜虾仁鲜度翻倍，膳食纤维含量高，饱腹感强。"
  },
  {
    id: "rec_fatloss_14",
    name: "滑蛋鲜虾抱嫩豆腐",
    subtitle: "微火将嫩豆腐煎至微黄，铺鲜虾淋打散蛋液焖熟，嫩滑高钙高蛋白",
    photoUrl: pMap["滑蛋鲜虾抱嫩豆腐"],
    region: "家常轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["嫩滑醇香", "蛋香四溢", "高钙高蛋白"],
    cookingMethod: "微油慢焖",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 7,
    servings: 2,
    calories: 190,
    ingredients: [
      { name: "嫩豆腐/内酯豆腐", amount: "250g(切厚小块)", category: "豆制品" },
      { name: "鲜虾仁", amount: "10只", category: "海鲜水产" },
      { name: "鸡蛋", amount: "2枚(打散成蛋液)", category: "蛋类" },
      { name: "香葱碎", amount: "15g", category: "蔬菜" },
      { name: "生抽、白胡椒粉、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 10, unit: "ml" },
      { name: "白胡椒粉", baseAmount: 1, unit: "g" },
      { name: "盐", baseAmount: 2, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "豆腐铺底", instruction: "不粘锅抹极薄一层橄榄油，将切块的嫩豆腐平铺锅底，小火慢煎1.5分钟至底部微定型金黄。", timerSeconds: 90, chefTip: "豆腐切稍厚块不易碎散。" },
      { stepIndex: 2, title: "码放鲜虾", instruction: "将开背虾仁均匀摆放在豆腐空隙和表面。", timerSeconds: 45, chefTip: "虾仁贴近锅底受热快速熟透。" },
      { stepIndex: 3, title: "淋入蛋液", instruction: "蛋液中加少许盐和温水打散，顺着豆腐缝隙均匀画圈倒入锅中，盖上锅盖小火慢焖2分钟。", timerSeconds: 150, chefTip: "蛋液加少许水蒸熟后格外滑嫩软嫩。" },
      { stepIndex: 4, title: "撒葱出锅", instruction: "待蛋液微凝固呈嫩豆腐质感，虾仁全熟变红，顺锅边淋半勺生抽，撒满葱花即可整块滑入盘中。", timerSeconds: 45, chefTip: "关火利用余温焖熟，蛋质最嫩。" }
    ],
    tips: "大豆蛋白与禽蛋、海鲜优质动物蛋白三重叠加，高钙低卡好吸收。"
  },
  {
    id: "rec_fatloss_15",
    name: "无油香煎三文鱼配海盐黑胡椒",
    subtitle: "利用三文鱼自身优质深海Omega-3自煎，外皮微脆内里柔嫩，挤青柠解腻",
    photoUrl: pMap["无油香煎三文鱼配海盐黑胡椒"],
    region: "西式轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["油脂清香", "外脆里嫩", "黑椒海盐"],
    cookingMethod: "原油自煎",
    difficulty: "新手友好",
    prepTimeMinutes: 5,
    cookTimeMinutes: 6,
    servings: 1,
    calories: 290,
    ingredients: [
      { name: "新鲜三文鱼排", amount: "200g", category: "海鲜水产" },
      { name: "现磨海盐", amount: "1/2茶匙", category: "调料" },
      { name: "现磨黑胡椒碎", amount: "1茶匙", category: "调料" },
      { name: "鲜柠檬/青柠角", amount: "1瓣", category: "果蔬" }
    ],
    seasonings: [
      { name: "海盐", baseAmount: 2, unit: "g" },
      { name: "黑胡椒碎", baseAmount: 2, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "吸干调味", instruction: "三文鱼排两面用厨房纸反复吸干多余水分，均匀撒上现磨海盐和黑胡椒碎腌制5分钟。", timerSeconds: 300, chefTip: "表面擦干是煎出金黄酥脆焦皮的关键秘诀。" },
      { stepIndex: 2, title: "热锅无油", instruction: "不粘锅不放一滴油烧至七成热，先将三文鱼带皮一面朝下放入锅中，小火慢煎2.5分钟逼出天然鱼油。", timerSeconds: 150, chefTip: "利用天然深海不饱和脂肪酸自煎，健康无额外油脂。" },
      { stepIndex: 3, title: "翻面微焦", instruction: "翻面继续煎2分钟，立起侧面各煎30秒至边缘泛白内部微粉嫩微糖心。", timerSeconds: 150, chefTip: "不要煎至全死白，内部微透粉嫩最鲜多汁。" },
      { stepIndex: 4, title: "挤汁摆盘", instruction: "盛出装盘，配几片小番茄，挤入新鲜青柠汁，外酥里嫩清爽解腻。", timerSeconds: 30, chefTip: "新鲜柠檬汁天然果酸解腻提鲜。" }
    ],
    tips: "富含EPA与DHA优质抗炎脂肪酸，促进新陈代谢并保护心脑血管健康。"
  },
  {
    id: "rec_fatloss_16",
    name: "蒜蓉荷兰豆清炒虾仁",
    subtitle: "荷兰豆碧绿爽脆，虾仁红润弹牙，清甜少油，餐桌常备高纤维解腻菜",
    photoUrl: pMap["蒜蓉荷兰豆清炒虾仁"],
    region: "家常轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["清脆甘甜", "虾肉弹牙", "清爽利口"],
    cookingMethod: "少油急炒",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 4,
    servings: 2,
    calories: 155,
    ingredients: [
      { name: "鲜虾仁", amount: "180g", category: "海鲜水产" },
      { name: "新鲜荷兰豆", amount: "180g", category: "蔬菜" },
      { name: "大蒜片", amount: "15g", category: "蔬菜" },
      { name: "生抽、盐、橄榄油", amount: "各少许", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 10, unit: "ml" },
      { name: "盐", baseAmount: 2, unit: "g" },
      { name: "橄榄油", baseAmount: 5, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "撕筋焯水", instruction: "荷兰豆撕去两边老筋洗净，开水锅中加少许盐焯水40秒捞出冲凉水沥干。", timerSeconds: 60, chefTip: "去筋口感无渣，焯水保翠绿。" },
      { stepIndex: 2, title: "腌制虾仁", instruction: "虾仁吸干水分，加少许料酒、白胡椒粉和生粉抓匀上浆。", timerSeconds: 180, chefTip: "虾仁略抓粉炒时水分不流失。" },
      { stepIndex: 3, title: "爆香滑虾", instruction: "平底锅倒少许橄榄油爆香蒜片，下虾仁大火快速滑炒至变红卷曲。", timerSeconds: 45, chefTip: "大火快炒保持Q弹。" },
      { stepIndex: 4, title: "合炒装盘", instruction: "倒入焯好的荷兰豆，调入生抽和少许盐，大火急翻20秒出锅。", timerSeconds: 30, chefTip: "荷兰豆不宜久炒防变软。" }
    ],
    tips: "高蛋白质、极低热量，荷兰豆含丰富膳食纤维与维生素A。"
  },
  {
    id: "rec_fatloss_17",
    name: "低脂金枪鱼彩虹藜麦沙拉",
    subtitle: "水浸金枪鱼肉碎、煮透红白藜麦、水煮蛋与牛油果丁，营养教科书配比",
    photoUrl: pMap["低脂金枪鱼彩虹藜麦沙拉"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["谷物清香", "鲜美饱满", "营养均衡"],
    cookingMethod: "免油拌食",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    servings: 1,
    calories: 275,
    ingredients: [
      { name: "三色藜麦米", amount: "40g(煮熟约100g)", category: "粮油主食" },
      { name: "水浸金枪鱼罐头", amount: "80g(沥干水分)", category: "海鲜水产" },
      { name: "水煮蛋", amount: "1枚(切小块)", category: "蛋类" },
      { name: "牛油果丁", amount: "40g", category: "果蔬" },
      { name: "小番茄、黄瓜丁、甜玉米", amount: "各30g", category: "蔬菜" },
      { name: "无糖油醋汁", amount: "20ml", category: "调料" }
    ],
    seasonings: [
      { name: "无糖油醋汁", baseAmount: 20, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "煮透藜麦", instruction: "三色藜麦清水淘洗，小锅加水煮15分钟至藜麦出小萌芽须，捞出沥干放凉。", timerSeconds: 900, chefTip: "藜麦出小芽圈即代表煮透弹牙。" },
      { stepIndex: 2, title: "备齐配料", instruction: "水浸金枪鱼充分沥干水分压碎；熟鸡蛋切瓣；牛油果切小丁；小番茄对半切开。", timerSeconds: 300, chefTip: "选用水浸而非油浸，热量少大半。" },
      { stepIndex: 3, title: "彩虹摆盘", instruction: "大碗底铺放放凉的熟藜麦，顺时针整齐摆放金枪鱼碎、鸡蛋块、小番茄、黄瓜与牛油果。", timerSeconds: 120, chefTip: "色彩丰富让人食欲大开。" },
      { stepIndex: 4, title: "淋汁拌匀", instruction: "吃前均匀淋上低脂油醋汁，轻轻拌匀即可大口享用。", timerSeconds: 30, chefTip: "少许油醋汁提供酸甜开胃感。" }
    ],
    tips: "藜麦为全营养完全蛋白粮食，搭配深海金枪鱼与牛油果健康脂肪，抗饿饱腹。"
  },
  {
    id: "rec_fatloss_18",
    name: "白灼海虾配秘制生抽姜丝汁",
    subtitle: "最纯粹的原汁原味鲜甜，高蛋白极低脂肪，蘸自制温热低脂海鲜汁",
    photoUrl: pMap["白灼海虾配秘制生抽姜丝汁"],
    region: "粤式原味",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["鲜甜弹牙", "原汁原味", "极低脂肪"],
    cookingMethod: "白灼清煮",
    difficulty: "极简快手",
    prepTimeMinutes: 5,
    cookTimeMinutes: 3,
    servings: 2,
    calories: 140,
    ingredients: [
      { name: "鲜活海虾/基围虾", amount: "350g", category: "海鲜水产" },
      { name: "老姜切细丝", amount: "20g", category: "蔬菜" },
      { name: "小葱结、葱白丝", amount: "各15g", category: "蔬菜" },
      { name: "特级生抽/蒸鱼豉油", amount: "2大勺", category: "调料" },
      { name: "香醋", amount: "1茶匙", category: "调料" }
    ],
    seasonings: [
      { name: "特级生抽", baseAmount: 20, unit: "ml" },
      { name: "香醋", baseAmount: 5, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "海虾洗净", instruction: "鲜虾剪去长须，用牙签在倒数第二节挑出沙线，冲洗沥干备用。", timerSeconds: 180, chefTip: "鲜活海虾只需剪须去虾线，保留头尾最鲜。" },
      { stepIndex: 2, title: "沸水下葱", instruction: "锅中宽水加入大葱结、姜片和料酒大火烧至大滚沸腾。", timerSeconds: 180, chefTip: "一定要大滚水下锅快速锁住鲜甜。" },
      { stepIndex: 3, title: "快速白灼", instruction: "倒入鲜虾大火煮2~3分钟，见虾身通体变红微弯曲成U字型立刻捞出装盘。", timerSeconds: 150, chefTip: "虾身成U型刚刚熟，若成O型紧缩则稍老。" },
      { stepIndex: 4, title: "调蘸鲜汁", instruction: "小碗中放入极细姜丝与葱丝，倒入生抽和少许香醋调匀作为蘸汁。", timerSeconds: 60, chefTip: "姜丝能中和海虾微凉属性。" }
    ],
    tips: "不放一滴油，热量几乎全来自纯蛋白质，减脂期大口吃无负担。"
  },
  {
    id: "rec_fatloss_19",
    name: "花椰菜碎彩蔬低卡炒饭",
    subtitle: "白菜花碎粒伪装成米饭，配玉米胡萝卜豌豆清炒，零淀粉超低碳水",
    photoUrl: pMap["花椰菜碎彩蔬低卡炒饭"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["焦香颗粒", "清爽微甜", "零淀粉假炒饭"],
    cookingMethod: "少油急炒",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    servings: 2,
    calories: 135,
    ingredients: [
      { name: "白菜花头(破壁机打成米粒大)", amount: "350g", category: "蔬菜" },
      { name: "胡萝卜小丁、甜玉米、豌豆", amount: "各30g", category: "蔬菜" },
      { name: "鸡蛋", amount: "1枚(打散)", category: "蛋类" },
      { name: "小葱花", amount: "15g", category: "蔬菜" },
      { name: "生抽、白胡椒粉、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 10, unit: "ml" },
      { name: "盐", baseAmount: 2, unit: "g" },
      { name: "白胡椒粉", baseAmount: 1, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "菜花打碎", instruction: "白菜花洗净掰小朵，放入料理机打几秒成米粒大小的碎花颗粒，用纱布略挤去水分。", timerSeconds: 180, chefTip: "挤去部分多余水分炒出来颗粒分明不会水汪汪。" },
      { stepIndex: 2, title: "炒散蛋花", instruction: "热锅倒3滴油，下鸡蛋液大火快速划散成金黄碎蛋花，盛出备用。", timerSeconds: 45, chefTip: "滑散蛋花增加香气。" },
      { stepIndex: 3, title: "干炒米粒", instruction: "锅内下彩蔬丁翻炒1分钟，倒入菜花“米粒”，中大火快速翻炒2分钟蒸发水分炒出锅气。", timerSeconds: 120, chefTip: "大火干炒能让菜花散发坚果米香。" },
      { stepIndex: 4, title: "调味出锅", instruction: "倒入碎蛋花和葱花，调入少许生抽、盐与白胡椒粉，翻匀炒香即可盛大碗享用。", timerSeconds: 40, chefTip: "口感与炒饭无异但热量只有普通米饭的五分之一。" }
    ],
    tips: "风靡欧美的Cauliflower Rice，零淀粉零米饭，吃两大碗热量也不过百大卡。"
  },
  {
    id: "rec_fatloss_20",
    name: "贝贝南瓜紫薯鸡胸温沙拉",
    subtitle: "蒸熟的贝贝南瓜紫薯自带清甜绵密，配烤鸡胸与坚果，暖胃护肠控卡",
    photoUrl: pMap["贝贝南瓜紫薯鸡胸温沙拉"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["软糯清甜", "温热暖胃", "营养饱腹"],
    cookingMethod: "清蒸烘烤",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 1,
    calories: 285,
    ingredients: [
      { name: "贝贝南瓜块", amount: "120g", category: "蔬菜" },
      { name: "紫薯小块", amount: "80g", category: "粮油主食" },
      { name: "香煎/蒸熟鸡胸肉块", amount: "120g", category: "肉禽" },
      { name: "混合生菜叶", amount: "50g", category: "蔬菜" },
      { name: "小番茄", amount: "4颗", category: "蔬菜" },
      { name: "油醋汁/黑椒汁", amount: "15ml", category: "调料" }
    ],
    seasonings: [
      { name: "低脂油醋汁", baseAmount: 15, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "蒸制粗粮", instruction: "贝贝南瓜去籽切小块，紫薯去皮切块，放入蒸锅大火蒸12分钟至软糯熟透。", timerSeconds: 720, chefTip: "贝贝南瓜板栗口感清甜绵密。" },
      { stepIndex: 2, title: "肉禽备妥", instruction: "鸡胸肉用黑胡椒生抽略腌，少油煎香切成小块备用。", timerSeconds: 300, chefTip: "温热鸡肉搭配温热南瓜最护胃。" },
      { stepIndex: 3, title: "装盘组合", instruction: "大深盘铺入生菜叶垫底，放入温热的南瓜块、紫薯块与鸡胸肉丁，点缀小番茄。", timerSeconds: 60, chefTip: "温热口感更适合中国肠胃。" },
      { stepIndex: 4, title: "淋汁享用", instruction: "淋上少许低脂油醋汁，撒一撮熟黑芝麻即可开吃。", timerSeconds: 30, chefTip: "天然甜味浓郁，无需额外调味糖。" }
    ],
    tips: "贝贝南瓜富含胡萝卜素与果胶，紫薯富含花青素，温沙拉暖胃不伤脾。"
  },
  {
    id: "rec_fatloss_21",
    name: "低卡韩式泡菜凉拌荞麦面",
    subtitle: "酸辣辛香无油辣白菜拌入冰镇荞麦面，佐半颗溏心蛋与黄瓜丝，开胃解馋",
    photoUrl: pMap["低卡韩式泡菜凉拌荞麦面"],
    region: "韩风轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["酸辣辛爽", "冰爽筋道", "低卡开胃"],
    cookingMethod: "水煮拌凉",
    difficulty: "极简快手",
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 1,
    calories: 270,
    ingredients: [
      { name: "纯荞麦面条", amount: "60g", category: "粮油主食" },
      { name: "正宗发酵辣白菜切丝", amount: "60g", category: "蔬菜" },
      { name: "溏心熟鸡蛋", amount: "半颗", category: "蛋类" },
      { name: "黄瓜丝", amount: "50g", category: "蔬菜" },
      { name: "韩式辣酱(低脂)", amount: "1茶匙", category: "调料" },
      { name: "雪碧(零卡无糖)/泡菜汁", amount: "20ml", category: "调料" },
      { name: "熟白芝麻", amount: "3g", category: "坚果" }
    ],
    seasonings: [
      { name: "泡菜汁/零卡雪碧", baseAmount: 20, unit: "ml" },
      { name: "生抽", baseAmount: 5, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "煮面过冰", instruction: "荞麦面开水下锅煮4分钟捞出，迅速投入冰水中淘洗两遍沥干，保持面条筋道Q弹。", timerSeconds: 240, chefTip: "冰水冲洗洗去表面浮粉，面条爽滑。" },
      { stepIndex: 2, title: "调制泡汁", instruction: "小碗中将辣白菜汁、1茶匙低脂辣酱、生抽与20ml无糖零卡雪碧调匀成酸甜微辣冷面汁。", timerSeconds: 60, chefTip: "零卡雪碧是韩式冷面汤底清爽甘甜的秘密配方。" },
      { stepIndex: 3, title: "装盘码放", instruction: "冷面入深碗，铺上辣白菜丝、清脆黄瓜丝与半颗溏心蛋。", timerSeconds: 45, chefTip: "溏心蛋黄微流心搭配酸辣汁风味绝佳。" },
      { stepIndex: 4, title: "倒汁撒麻", instruction: "将调好的冷面汁倒入碗中，撒上熟白芝麻拌匀即可畅快吸溜大口吸面。", timerSeconds: 30, chefTip: "酸爽开胃特别适合天热不想开火时。" }
    ],
    tips: "发酵辣白菜富含活性乳酸菌有助肠道健康，低GI全麦饱腹无负担。"
  },
  {
    id: "rec_fatloss_22",
    name: "意式黑麦烤时蔬牛油果波奇碗",
    subtitle: "烤口蘑彩椒小番茄与牛油果切片平铺黑麦底，色彩缤纷膳食纤维爆棚",
    photoUrl: pMap["意式黑麦烤时蔬牛油果波奇碗"],
    region: "西式轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["烤香清甜", "果香浓郁", "高纤饱腹"],
    cookingMethod: "轻烤拼摆",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    servings: 1,
    calories: 295,
    ingredients: [
      { name: "煮熟黑麦仁/糙米底", amount: "80g", category: "粮油主食" },
      { name: "牛油果切薄片", amount: "40g", category: "果蔬" },
      { name: "白口蘑厚片、彩椒片、小番茄", amount: "各50g", category: "蔬菜" },
      { name: "烤南瓜籽/坚果碎", amount: "10g", category: "坚果" },
      { name: "海盐、黑胡椒、橄榄油", amount: "各微量", category: "调料" }
    ],
    seasonings: [
      { name: "橄榄油", baseAmount: 3, unit: "ml" },
      { name: "海盐", baseAmount: 2, unit: "g" },
      { name: "黑胡椒碎", baseAmount: 2, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "烤制时蔬", instruction: "烤盘铺锡纸，放入口蘑片、彩椒和小番茄，喷两滴橄榄油，撒少许海盐和黑胡椒，190℃烤12分钟至表面微焦出汁。", timerSeconds: 720, chefTip: "烤过的番茄酸甜浓缩，口蘑多汁。" },
      { stepIndex: 2, title: "准备基底", instruction: "温热的煮熟黑麦糙米盛入宽口大平底碗中，铺平压实垫底。", timerSeconds: 60, chefTip: "黑麦咀嚼感十足延长进食时间。" },
      { stepIndex: 3, title: "排列时蔬", instruction: "将烤好的彩椒、口蘑片、小番茄和新鲜牛油果扇形薄片依次环形码在黑麦底上方。", timerSeconds: 120, chefTip: "扇形码放层次分明色彩亮丽。" },
      { stepIndex: 4, title: "点缀出餐", instruction: "中间撒上一勺烤熟南瓜籽碎，配小碟低脂油醋汁淋上即可享用。", timerSeconds: 30, chefTip: "坚果提供酥脆嚼劲与微量元素锌。" }
    ],
    tips: "高抗性淀粉与优质不饱和脂肪，稳控胰岛素抗饿4小时以上。"
  },
  {
    id: "rec_fatloss_23",
    name: "无油菠菜口蘑厚蛋烧",
    subtitle: "新鲜菠菜焯水挤干与口蘑倒入蛋液小火烘烤，金黄蓬松厚实高饱腹",
    photoUrl: pMap["无油菠菜口蘑厚蛋烧"],
    region: "健康轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["蛋香松软", "菌蔬清甜", "厚实饱腹"],
    cookingMethod: "微火烘煎",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    servings: 2,
    calories: 185,
    ingredients: [
      { name: "新鲜菠菜", amount: "150g", category: "蔬菜" },
      { name: "新鲜白口蘑切薄片", amount: "60g", category: "蔬菜" },
      { name: "鸡蛋", amount: "3枚", category: "蛋类" },
      { name: "脱脂牛奶", amount: "30ml", category: "乳制品" },
      { name: "黑胡椒粉、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "盐", baseAmount: 2, unit: "g" },
      { name: "黑胡椒粉", baseAmount: 1, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "菠菜焯水", instruction: "菠菜沸水中焯烫30秒去除草酸，捞出过凉水，用力挤干水分切成小碎段备用。", timerSeconds: 60, chefTip: "水分务必挤干，防止厚蛋烧出汤湿塌。" },
      { stepIndex: 2, title: "打发蛋液", instruction: "3个鸡蛋打入碗中，加30ml脱脂牛奶、少许盐和黑胡椒粉，充分搅打起泡。", timerSeconds: 60, chefTip: "加少许牛奶使煎出的厚蛋格外蓬松软嫩。" },
      { stepIndex: 3, title: "混合下锅", instruction: "将口蘑薄片和菠菜碎倒入蛋液中搅匀；平底不粘锅小火加热，倒入全部蔬菜蛋液，盖上锅盖微火慢烘4分钟至底部金黄微焦。", timerSeconds: 240, chefTip: "全程小火加盖焖，底不焦且内部全熟。" },
      { stepIndex: 4, title: "翻面切块", instruction: "借助平盘翻面再小火烘烤1.5分钟至两面金黄蓬松，切成小披萨三角块装盘趁热吃。", timerSeconds: 90, chefTip: "金黄厚实像吃西式咸派。" }
    ],
    tips: "高蛋白、富含叶黄素与铁质，无油烘制，早餐或减脂正餐均适宜。"
  },
  {
    id: "rec_fatloss_24",
    name: "酸辣魔芋丝凉拌鸡丝",
    subtitle: "零卡魔芋丝吸溜爽滑，搭配手撕鸡丝与黄瓜丝大蒜醋汁，夜宵饱腹无负担",
    photoUrl: pMap["酸辣魔芋丝凉拌鸡丝"],
    region: "川味轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["酸辣过瘾", "爽滑筋道", "零卡饱腹"],
    cookingMethod: "水煮拌凉",
    difficulty: "极简快手",
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 2,
    calories: 145,
    ingredients: [
      { name: "清水魔芋丝结", amount: "250g", category: "豆制品" },
      { name: "煮熟鸡胸肉手撕丝", amount: "150g", category: "肉禽" },
      { name: "清脆黄瓜丝", amount: "80g", category: "蔬菜" },
      { name: "大蒜泥、小米辣碎、香菜", amount: "各15g", category: "蔬菜" },
      { name: "生抽、香醋、花椒油、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "香醋", baseAmount: 20, unit: "ml" },
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "花椒油", baseAmount: 2, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "魔芋焯水", instruction: "魔芋丝结开水下锅焯烫1.5分钟除去碱水味，捞出投入冰水中浸凉沥干。", timerSeconds: 90, chefTip: "焯烫去碱味后过冰水格外脆弹滑溜。" },
      { stepIndex: 2, title: "手撕鸡丝", instruction: "白水煮熟的鸡胸肉顺着肌肉纤维手撕成细长肉丝备用。", timerSeconds: 180, chefTip: "手撕比刀切更能吸饱调料汁。" },
      { stepIndex: 3, title: "调酸辣汁", instruction: "碗中放蒜泥、小米椒碎、香醋、生抽、少许盐、花椒油与2勺清水搅拌均匀。", timerSeconds: 60, chefTip: "多放香醋开胃提神。" },
      { stepIndex: 4, title: "大碗拌匀", instruction: "大盆中放入冰爽魔芋丝、鸡丝、黄瓜丝和香菜，倒入酸辣料汁充分抓拌均匀入味。", timerSeconds: 60, chefTip: "拌匀后静置3分钟更入味。" }
    ],
    tips: "魔芋葡甘聚糖吸水膨胀百倍，几乎零卡路里饱腹，深夜饥饿解馋神器。"
  },
  {
    id: "rec_fatloss_25",
    name: "低卡酸辣番茄魔芋结老豆腐煲",
    subtitle: "番茄炒出浓沙加水煮沸，魔芋结与老豆腐慢火炖透吸饱汤汁，暖胃刮油",
    photoUrl: pMap["低卡酸辣番茄魔芋结老豆腐煲"],
    region: "清润暖煲",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["酸爽浓郁", "软糯入味", "暖身刮脂"],
    cookingMethod: "慢火焖煲",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    servings: 2,
    calories: 165,
    ingredients: [
      { name: "熟透大红番茄", amount: "2个(约350g)", category: "蔬菜" },
      { name: "农家老豆腐切厚片", amount: "200g", category: "豆制品" },
      { name: "魔芋结", amount: "200g", category: "豆制品" },
      { name: "金针菇", amount: "80g", category: "蔬菜" },
      { name: "蒜末、葱段", amount: "各10g", category: "蔬菜" },
      { name: "生抽、白胡椒、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "盐", baseAmount: 3, unit: "g" },
      { name: "白胡椒粉", baseAmount: 1, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "煎老豆腐", instruction: "不粘锅喷几滴油，下老豆腐片两面小火微煎1分钟至表面略微起硬皮捞出。", timerSeconds: 120, chefTip: "略煎的豆腐炖煮时不碎且孔隙大吸汤。" },
      { stepIndex: 2, title: "炒番茄浓汁", instruction: "下蒜末炒香，倒入去皮切碎的番茄块，中小火慢慢翻炒按压成浓稠红沙汤底。", timerSeconds: 240, chefTip: "番茄熬透起沙是全锅酸甜浓郁的关键。" },
      { stepIndex: 3, title: "下料同煨", instruction: "砂锅中加入大半碗热水煮沸，放入煎豆腐、焯水魔芋结与金针菇，调入生抽和盐。", timerSeconds: 180, chefTip: "魔芋结在酸汤中越煮越爽脆入味。" },
      { stepIndex: 4, title: "慢炖收浓", instruction: "盖上锅盖中小火慢炖6分钟使食材充分吸收番茄浓汁，出锅撒小葱段趁热开吃。", timerSeconds: 360, chefTip: "连汤带料酸甜暖胃。" }
    ],
    tips: "高植物蛋白高纤维组合，酸甜番茄自带天然果酸促消化，清爽去油腻。"
  },
  {
    id: "rec_fatloss_26",
    name: "白灼秋葵配秘制低脂料汁",
    subtitle: "秋葵丰富天然果胶粘液保护胃黏膜，滚水烫熟过凉，淋热生抽干椒碎",
    photoUrl: pMap["白灼秋葵配秘制低脂料汁"],
    region: "家常轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["清脆嫩滑", "鲜咸微辣", "护胃清甜"],
    cookingMethod: "白灼过凉",
    difficulty: "极简快手",
    prepTimeMinutes: 5,
    cookTimeMinutes: 2,
    servings: 2,
    calories: 85,
    ingredients: [
      { name: "新鲜嫩秋葵", amount: "250g", category: "蔬菜" },
      { name: "大蒜碎、红椒圈", amount: "各15g", category: "蔬菜" },
      { name: "特级生抽/蒸鱼豉油", amount: "2大勺", category: "调料" },
      { name: "香油", amount: "1/2茶匙", category: "调料" }
    ],
    seasonings: [
      { name: "特级生抽", baseAmount: 20, unit: "ml" },
      { name: "香油", baseAmount: 3, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "整根焯水", instruction: "秋葵洗净保留蒂头不要切开，沸水锅中加少许盐和油，下秋葵大火焯水1.5分钟至深绿变通透捞出。", timerSeconds: 90, chefTip: "千万不要先切蒂，整根焯水营养粘液才不会流失。" },
      { stepIndex: 2, title: "过凉切段", instruction: "焯好的秋葵立即投入冰水中过凉浸泡1分钟，捞出切去蒂头，斜切或对半剖开摆盘。", timerSeconds: 60, chefTip: "冰镇能让秋葵外皮极其爽脆。" },
      { stepIndex: 3, title: "调配料汁", instruction: "碗中放入蒜泥、红椒圈、生抽、少许白糖和几滴香油调匀。", timerSeconds: 45, chefTip: "简单料汁衬托秋葵本味鲜甜。" },
      { stepIndex: 4, title: "淋汁上桌", instruction: "将调好的蒜香料汁均匀浇淋在秋葵上即可享用。", timerSeconds: 30, chefTip: "脆嫩多汁滑溜爽口。" }
    ],
    tips: "秋葵天然果胶黏多糖可吸附体内油脂并修复胃粘膜，减脂期超级蔬菜。"
  },
  {
    id: "rec_fatloss_27",
    name: "降脂凉拌木耳洋葱腐竹",
    subtitle: "黑木耳吸附肠胃杂质，紫洋葱生抽微炝，香醋调和酸爽开胃消积食",
    photoUrl: pMap["降脂凉拌木耳洋葱腐竹"],
    region: "家常凉拌",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["爽脆酸香", "咸香微麻", "消积降脂"],
    cookingMethod: "焯烫凉拌",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 3,
    servings: 2,
    calories: 145,
    ingredients: [
      { name: "泡发东北黑木耳", amount: "150g", category: "干货菌菇" },
      { name: "泡发优质腐竹段", amount: "100g", category: "豆制品" },
      { name: "紫洋葱切细丝", amount: "60g", category: "蔬菜" },
      { name: "蒜末、香菜段", amount: "各15g", category: "蔬菜" },
      { name: "陈醋、生抽、花椒油、盐", amount: "各适量", category: "调料" }
    ],
    seasonings: [
      { name: "陈醋", baseAmount: 20, unit: "ml" },
      { name: "生抽", baseAmount: 15, unit: "ml" },
      { name: "花椒油", baseAmount: 2, unit: "ml" }
    ],
    steps: [
      { stepIndex: 1, title: "焯烫木耳", instruction: "泡发的木耳和腐竹放入沸水锅中焯烫2分钟断生，捞出迅速投入冰水中浸透沥干。", timerSeconds: 120, chefTip: "冰镇让木耳肉质肥厚爽脆。" },
      { stepIndex: 2, title: "洋葱去辛", instruction: "紫洋葱切细丝，浸泡在冰水中5分钟滤干，去除部分辛辣辣气只留甜脆。", timerSeconds: 300, chefTip: "冰水浸泡去辛留甜。" },
      { stepIndex: 3, title: "调酸爽汁", instruction: "碗中混合蒜泥、老陈醋、生抽、少许盐、白糖提鲜与花椒油调成开胃汁。", timerSeconds: 60, chefTip: "老陈醋是消脂解腻的灵魂。" },
      { stepIndex: 4, title: "大盆拌匀", instruction: "盆中汇入木耳、腐竹、洋葱丝与香菜段，倒入调味汁充分颠翻抓拌装盘。", timerSeconds: 60, chefTip: "拌好后冷藏20分钟口感更佳。" }
    ],
    tips: "黑木耳植物胶原吸附肠道杂质，洋葱前列腺素A促代谢，血管清道夫经典菜。"
  },
  {
    id: "rec_fatloss_28",
    name: "蚝油手撕杏鲍菇",
    subtitle: "杏鲍菇手撕成条干锅煸干水汽，加少许蚝油生抽炒出鲍鱼肉般的滑韧多汁",
    photoUrl: pMap["蚝油手撕杏鲍菇"],
    region: "家常轻食",
    cuisineCategory: "减脂轻食",
    categoryType: "dish",
    isFatLossFriendly: true,
    flavor: ["菌香浓郁", "韧劲滑嫩", "少油少调味"],
    cookingMethod: "干锅干煸",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 7,
    servings: 2,
    calories: 125,
    ingredients: [
      { name: "新鲜大杏鲍菇", amount: "2根(约300g)", category: "蔬菜" },
      { name: "青红椒丝", amount: "40g", category: "蔬菜" },
      { name: "大蒜碎", amount: "15g", category: "蔬菜" },
      { name: "特级生抽", amount: "1大勺", category: "调料" },
      { name: "蚝油", amount: "1大勺", category: "调料" },
      { name: "黑胡椒粉", amount: "1/2茶匙", category: "调料" }
    ],
    seasonings: [
      { name: "蚝油", baseAmount: 15, unit: "ml" },
      { name: "生抽", baseAmount: 10, unit: "ml" },
      { name: "黑胡椒粉", baseAmount: 2, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "手撕成条", instruction: "杏鲍菇洗净擦干，顺着纤维用手撕成筷子粗细的长条，手撕比刀切更易附着酱汁且口感劲道。", timerSeconds: 300, chefTip: "手撕断面不规则更吸味。" },
      { stepIndex: 2, title: "干锅煸水", instruction: "热锅不倒一滴油，直接下入杏鲍菇条中小火慢慢干煸翻炒3分钟，逼出菇内多余水分至菇条变软微缩捞出。", timerSeconds: 180, chefTip: "先干煸出水，后续炒制不会软塌出汤。" },
      { stepIndex: 3, title: "少油爆香", instruction: "锅内喷薄油，爆香蒜末和青红椒丝，倒入干煸好的杏鲍菇条大火翻炒1分钟。", timerSeconds: 60, chefTip: "大火炒出镬气。" },
      { stepIndex: 4, title: "蚝油调味", instruction: "倒入生抽、蚝油与现磨黑胡椒粉，大火快速翻炒裹透酱汁出锅装盘。", timerSeconds: 40, chefTip: "蚝油微焦糖化散发鲍鱼肉般鲜香。" }
    ],
    tips: "吃出大鱼大肉的韧劲，但热量极低，富含多种菌菇多糖提高免疫力。"
  },
  {
    id: "rec_fatloss_29",
    name: "裙带菜番茄虾仁无油鲜汤",
    subtitle: "免洗裙带菜丰富海藻胶配番茄鲜汤与大虾仁打蛋花，5分钟搞定暖胃鲜汤",
    photoUrl: pMap["裙带菜番茄虾仁无油鲜汤"],
    region: "快手减脂汤",
    cuisineCategory: "减脂轻食",
    categoryType: "soup",
    isFatLossFriendly: true,
    flavor: ["酸甜鲜美", "清润无油", "极低热量"],
    cookingMethod: "快火滚汤",
    difficulty: "极简快手",
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    servings: 2,
    calories: 120,
    ingredients: [
      { name: "干裙带菜(免洗泡发)", amount: "10g(泡发一大碗)", category: "海鲜水产" },
      { name: "熟番茄切小丁", amount: "1个(约180g)", category: "蔬菜" },
      { name: "鲜虾仁", amount: "8只", category: "海鲜水产" },
      { name: "鸡蛋", amount: "1枚(打散)", category: "蛋类" },
      { name: "白胡椒粉、盐、葱花", amount: "各少许", category: "调料" }
    ],
    seasonings: [
      { name: "盐", baseAmount: 2, unit: "g" },
      { name: "白胡椒粉", baseAmount: 1, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "泡发裙带", instruction: "干裙带菜取一小撮用温水泡发2分钟，迅速涨发成一大碗嫩绿海藻叶，捞出洗净沥干。", timerSeconds: 120, chefTip: "干裙带菜极易膨胀，一小把足够煮大锅。" },
      { stepIndex: 2, title: "番茄煮沸", instruction: "汤锅倒入两大碗清水，放入番茄丁大火煮开2分钟煮出酸甜微红的番茄清汤。", timerSeconds: 120, chefTip: "无油清煮番茄汤底极清爽。" },
      { stepIndex: 3, title: "下虾入菜", instruction: "下入鲜虾仁和泡发裙带菜，大火煮沸1.5分钟至虾仁通体变红浮起。", timerSeconds: 90, chefTip: "裙带菜久煮易烂，滚沸1分钟口感最脆嫩。" },
      { stepIndex: 4, title: "淋蛋调味", instruction: "转微火淋入打散的鸡蛋液形成漂亮蛋花，调入少许盐和白胡椒粉，撒上香葱花即可关火出锅。", timerSeconds: 30, chefTip: "白胡椒粉驱寒提鲜。" }
    ],
    tips: "无一滴烹调油，裙带菜富含海藻酸钠与膳食纤维，一碗汤热量不足百卡。"
  },
  {
    id: "rec_fatloss_30",
    name: "鲜甜丝瓜蛤蜊高钙清汤",
    subtitle: "鲜活蛤蜊原汤自带天然鲜咸，配翠绿软甜丝瓜段，清热去火刮脂消肿",
    photoUrl: pMap["鲜甜丝瓜蛤蜊高钙清汤"],
    region: "沿海快手汤",
    cuisineCategory: "减脂轻食",
    categoryType: "soup",
    isFatLossFriendly: true,
    flavor: ["天然咸鲜", "丝瓜清甜", "原汁原味"],
    cookingMethod: "原汁滚汤",
    difficulty: "极简快手",
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 2,
    calories: 110,
    ingredients: [
      { name: "鲜活蛤蜊/文蛤", amount: "300g", category: "海鲜水产" },
      { name: "嫩丝瓜滚刀块", amount: "1条(约200g)", category: "蔬菜" },
      { name: "老姜丝、葱白", amount: "各10g", category: "蔬菜" },
      { name: "白胡椒粉、盐", amount: "各极微量", category: "调料" }
    ],
    seasonings: [
      { name: "盐", baseAmount: 1, unit: "g" },
      { name: "白胡椒粉", baseAmount: 1, unit: "g" }
    ],
    steps: [
      { stepIndex: 1, title: "蛤蜊吐沙", instruction: "蛤蜊提前在淡盐水中静置吐净泥沙，冲洗外壳沥干备用；丝瓜刮去外皮切滚刀块。", timerSeconds: 300, chefTip: "丝瓜现做现切防氧化发黑。" },
      { stepIndex: 2, title: "煮沸姜水", instruction: "汤锅加两大碗水和生姜丝，大火烧开煮出姜香驱寒。", timerSeconds: 120, chefTip: "姜丝能压制蛤蜊腥味。" },
      { stepIndex: 3, title: "下入丝瓜", instruction: "下入丝瓜块大火煮1.5分钟至丝瓜变深绿微透明软嫩。", timerSeconds: 90, chefTip: "丝瓜先煮吸入原汤甘甜。" },
      { stepIndex: 4, title: "开口关火", instruction: "倒入蛤蜊，大火滚煮1分钟，见蛤蜊颗颗张开贝壳立刻关火，尝味（蛤蜊自带海盐咸味，不够补少许盐）撒葱花出锅。", timerSeconds: 60, chefTip: "张壳即关火，蛤肉最嫩不缩水。" }
    ],
    tips: "蛤蜊海鲜原汁自带天然谷氨酸钠与鲜咸味，无需放味精鸡精，消肿去湿首选。"
  }
];

// Append to recipes.js and android_build/assets/js/data/recipes.js
const webFile = path.join(__dirname, '../js/data/recipes.js');
const androidFile = path.join(__dirname, '../android_build/assets/js/data/recipes.js');

function updateFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
  const existing = fn({});
  
  const existingIds = new Set(existing.map(r => r.id));
  const toAdd = newFatlossRecipes.filter(r => !existingIds.has(r.id));
  
  const combined = existing.concat(toAdd);
  const newContent = `/**\n * 咕嘟食谱 - ${combined.length}道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ${JSON.stringify(combined, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated ${filePath}: Total recipes now = ${combined.length} (+${toAdd.length} new fatloss dishes)`);
}

updateFile(webFile);
if (fs.existsSync(androidFile)) {
  updateFile(androidFile);
}
