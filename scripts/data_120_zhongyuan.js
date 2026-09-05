// scripts/data_120_zhongyuan.js
// 三晋晋冀中原 22道经典名菜与特色家常小炒 (rec_prov_099 ~ rec_prov_120)
// 涵盖山西、河南、天津、河北
module.exports = [
  {
    id: "rec_prov_099",
    name: "山西正宗传统名菜过油肉",
    region: "山西",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 310,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜猪里脊肉(切铜钱厚大薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "山西冬笋薄片与水发木耳", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩菠菜梗段与葱白丝", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜片与老生姜末", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "太原宁化府正宗老陈醋(烹锅灵魂)", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯正压榨熟猪油与熟菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "特级酿造生抽与老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯天然水淀粉与蛋清(抓肉片)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "高汤与白胡椒粉", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯香油淋明油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肉片厚薄如铜钱挂蛋清薄糊",
        instruction: "猪里脊肉顶刀切成铜钱厚大片，加少许盐、料酒、蛋清与纯水淀粉抓匀上浆，封少许油锁水。",
        timerSeconds: 180,
        chefTip: "山西过油肉讲究软过油，挂糊要匀薄透明，滑油才能金黄滑嫩。"
      },
      {
        stepIndex: 2,
        title: "温油滑肉片金黄展开即捞",
        instruction: "锅中烧油至四成温热，将肉片逐片滑入油中，用筷子快速划散至肉片伸展变金黄色断生，捞出控油。",
        timerSeconds: 60,
        chefTip: "油温绝不可过高，温油慢滑使肉质软嫩不缩、外滑里嫩。"
      },
      {
        stepIndex: 3,
        title: "爆香姜蒜辅料回肉片烹宁化府老陈醋",
        instruction: "锅留底油下葱姜蒜、冬笋与木耳大火翻炒，倒入滑好的肉片，立即沿滚烫锅边烹入太原宁化府老陈醋，淋生抽老抽高汤水淀粉薄芡，撒菠菜段颠翻淋香油出锅。",
        timerSeconds: 45,
        chefTip: "临出锅烹入山西老陈醋是这道三晋第一名菜的绝技，酸香瞬间挥发只留醇厚回甘。"
      }
    ],
    tips: "三晋第一名菜！山西菜的灵魂代表。色泽金黄油亮，肉片滑嫩鲜香如豆腐，老陈醋的幽香去油解腻回味绵长，配一碗刀削面堪称人间绝响。",
    tags: ["山西", "晋菜", "过油肉", "宁化府老陈醋", "三晋第一菜", "软过油"]
  },
  {
    id: "rec_prov_100",
    name: "平遥传统冠云五香牛肉块",
    region: "山西",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 280,
    prepTimeMinutes: 20,
    cookTimeMinutes: 90,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜黄牛前腿腱子肉或胸肉(大整块)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "平遥传统百年五香卤汤料包", amount: 25, unit: "g", type: "main", isCore: true },
      { name: "老生姜块与整大葱白", amount: 40, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "传统古法硝水与大粒原盐腌肉", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "山西老陈醋配蒜泥(佐餐蘸汁)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯正芝麻香油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "整块牛肉古法干盐深度揉搓腌透",
        instruction: "新鲜黄牛肉改刀成拳头大块，用粗盐、八角茴香细致揉搓渗透，层层压缸腌制2天排净血水。",
        timerSeconds: 600,
        chefTip: "古法腌制是平遥牛肉肉质紧致、色泽红润如玫瑰的秘密所在。"
      },
      {
        stepIndex: 2,
        title: "老卤慢火温水文火温煨",
        instruction: "将腌透的牛肉入清水漂洗，放入五香老卤锅中，加葱姜与香料包，大火烧沸撇清浮沫，改文火慢煨2小时至肉熟透烂而不散，关火在汤中浸泡放凉。",
        timerSeconds: 5400,
        chefTip: "浸泡至完全凉透，肉块才能锁住卤香肉汁，切片整齐不碎。"
      },
      {
        stepIndex: 3,
        title: "逆纹横切大薄片配老陈醋蒜泥",
        instruction: "牛肉捞出沥干，顺着纹理横切成大薄片装盘，牛肉红润油亮，配山西老陈醋与蒜泥蘸食。",
        timerSeconds: 180,
        chefTip: "色泽红润如胭脂，肉质肥而不腻、瘦而不柴，香醇可口。"
      }
    ],
    tips: "平遥古城名震华夏的非遗极品！相传慈禧太后品尝后赞叹不已定为贡品。色泽红润诱人，肉质鲜嫩纯香肥而不腻，瘦肉酥软脱骨，入口回甘。",
    tags: ["山西", "晋菜", "平遥牛肉", "冠云牛肉", "非遗名吃", "老陈醋蘸汁"]
  },
  {
    id: "rec_prov_101",
    name: "定襄传统名席土豆蒸肉",
    region: "山西",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "蒸",
    calories: 320,
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "土猪精品肥瘦相间五花肉末", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "优质定襄土豆淀粉加土豆泥", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "生姜末与香葱细末", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "山西宁化府老陈醋", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯正小磨香油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "特级生抽与五香粉", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "清纯鸡汤调稠浆", baseAmount: 80, unit: "ml", amountText: "80ml", isPantryStaple: false },
      { name: "食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肉末与土豆粉高汤顺向搅打上劲",
        instruction: "五花肉末加入土豆淀粉、姜葱末、五香粉、生抽、盐与清鸡汤，顺着一个方向死力搅打至极度细腻黏稠、上劲抱团。",
        timerSeconds: 400,
        chefTip: "定襄蒸肉传承数百年，肉与淀粉完全融合如胶泥状是口感软嫩的关键。"
      },
      {
        stepIndex: 2,
        title: "装入平盘上锅大火汽蒸熟透成糕",
        instruction: "取深平盘刷少许香油，将肉泥均匀铺平压实，水开上蒸锅大火蒸35分钟至通体熟透、凝结成弹性肉糕。",
        timerSeconds: 2100,
        chefTip: "大火蒸透后内部肉脂与淀粉乳化，质感滑糯细腻。"
      },
      {
        stepIndex: 3,
        title: "自然放凉切厚片淋老陈醋蒜汁",
        instruction: "取出放凉后倒扣切成整齐厚片，淋上宁化府老陈醋、蒜泥与小磨香油调配的料汁趁温享用。",
        timerSeconds: 180,
        chefTip: "热吃软嫩糯滑，冷吃筋道弹牙，多味兼备。"
      }
    ],
    tips: "三晋定襄传统筵席不可或缺的头牌佳品！土猪肉与土豆淀粉深度融合，质地软糯细腻弹牙，肉香浓郁却毫无油腻感，老陈醋蒜汁解腻开胃。",
    tags: ["山西", "晋菜", "定襄蒸肉", "非遗传统", "软糯弹牙", "传统名席"]
  },
  {
    id: "rec_prov_102",
    name: "开封传统黄河鲤鱼焙面",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 360,
    prepTimeMinutes: 30,
    cookTimeMinutes: 20,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "鲜活黄河大鲤鱼(鳞红尾红一条)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "细如发丝开封手工龙须面(焙成金黄面蓬)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "葱丝姜丝蒜末", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "传统镇江香醋与山西老醋调和醋", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "纯白细砂糖(调糖醋红亮汁)", baseAmount: 50, unit: "g", amountText: "50g", isPantryStaple: true },
      { name: "高汤与特级生抽", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "炸制花生油与玉米湿淀粉", baseAmount: 80, unit: "ml", amountText: "80ml", isPantryStaple: true },
      { name: "食用精制盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鲤鱼两面瓦垄花刀挂糊炸翘尾",
        instruction: "黄河鲤鱼两面打深瓦垄花刀抹盐入味，挂一层厚玉米水淀粉糊。提着鱼尾滑入七成热油锅中，勺泼热油定型成头尾翘起的跃龙门姿态，炸至金黄酥脆捞出装大盘。",
        timerSeconds: 480,
        chefTip: "瓦垄花刀要均匀，油炸定型呈头翘尾展，外壳极度酥脆肉质雪白。"
      },
      {
        stepIndex: 2,
        title: "极细龙须面温油焙成金黄酥蓬",
        instruction: "细如发丝的开封龙须面下入五成热温油中，微火慢焙翻面，焙成金黄轻盈、入口即化的酥脆面蓬，捞出沥油备用。",
        timerSeconds: 150,
        chefTip: "焙面是技术绝活，面丝根根金黄酥脆膨松如云朵，入口即化。"
      },
      {
        stepIndex: 3,
        title: "炒制红亮糖醋熘汁覆焙面于鱼身",
        instruction: "锅底留油爆香姜葱蒜，倒入香醋、白糖、生抽与高汤烧沸，淋湿淀粉勾成浓亮糖醋熘汁淋在鱼身上，将金黄龙须面焙蓬轻轻盖在鱼体顶层上席。",
        timerSeconds: 180,
        chefTip: "焙面吸足热烫糖醋汁，半酥半软酸甜开胃，鱼肉外焦里嫩蒜瓣滑爽。"
      }
    ],
    tips: "豫菜头牌千古名肴！北宋汴京名菜糖醋熘鱼与细如发丝的油焙龙须面合璧，光绪帝与慈禧太后品尝后誉为“古都成双绝”，酸甜酥脆，兼备面食与活鱼之美。",
    tags: ["河南", "豫菜", "鲤鱼焙面", "黄河鲤鱼", "龙须面", "汴京名菜"]
  },
  {
    id: "rec_prov_103",
    name: "洛阳水席头牌牡丹燕菜",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "soup",
    cookingMethod: "蒸",
    calories: 160,
    prepTimeMinutes: 30,
    cookTimeMinutes: 20,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜多汁白萝卜(切极细发丝状)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "极品绿豆纯绿豆淀粉(抓裹萝卜丝)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "熟土鸡胸肉丝与水发海参丝", amount: 60, unit: "g", type: "secondary", isCore: true },
      { name: "水发鱿鱼丝与火腿细丝", amount: 50, unit: "g", type: "secondary", isCore: true },
      { name: "黄蛋糕切牡丹花瓣造型", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "老母鸡鸭骨清醇高级清汤", baseAmount: 600, unit: "ml", amountText: "600ml", isPantryStaple: false },
      { name: "河南传统清香陈醋(微酸醒脾)", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "现磨极细纯白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "食用精制细盐与香油", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "萝卜切极细发丝泡水去辛辣",
        instruction: "白萝卜去皮顶刀切成细如发丝的长丝，冷水中反复漂洗3次挤干，去除萝卜生辣气。",
        timerSeconds: 300,
        chefTip: "刀工决定一切，丝细如头发才能呈现燕窝般晶莹爽滑质感。"
      },
      {
        stepIndex: 2,
        title: "拌绿豆淀粉大火汽蒸晶莹透亮",
        instruction: "萝卜丝抖散拌匀纯绿豆淀粉，使每根萝卜丝薄薄挂粉，开水上笼大火蒸5分钟，出锅放入温水抖散冲凉沥干。",
        timerSeconds: 360,
        chefTip: "蒸后萝卜丝脱胎换骨，宛若上等天然燕窝丝般晶莹剔透滑润微脆。"
      },
      {
        stepIndex: 3,
        title: "大海碗码放牡丹造型冲入酸辣清汤",
        instruction: "海碗中央堆放燕菜丝，四周摆放鸡丝、海参丝、鱿鱼丝与火腿丝，顶端摆放鸡蛋黄蛋皮雕刻的盛开牡丹花。淋入滚烫调好陈醋、白胡椒粉的浓郁鸡汤上席。",
        timerSeconds: 240,
        chefTip: "汤汁清澈见底，酸辣醇爽，入口滑爽如真燕窝，国色天香。"
      }
    ],
    tips: "洛阳千年水席二十四道大菜之首！相传武则天执政时长出巨型白萝卜，御厨妙手巧作成如燕窝般的佳肴。周恩来总理赞誉为“洛阳牡丹甲天下，菜中也开牡丹花”。",
    tags: ["河南", "豫菜", "牡丹燕菜", "洛阳水席", "白萝卜丝", "国宴名汤"]
  },
  {
    id: "rec_prov_104",
    name: "河南道口传统世传五香烧鸡",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 320,
    prepTimeMinutes: 25,
    cookTimeMinutes: 70,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "当年散养嫩公鸡(净膛盘腿别翅整只)", amount: 1000, unit: "g", type: "main", isCore: true },
      { name: "浓稠天然红蜂蜜或麦芽糖稀水", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "道口三百年陈年老汤底", amount: 1500, unit: "ml", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "八味纯中草药世传秘制八香料包", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: false },
      { name: "菜籽油炸制上色", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "酿造老抽生抽与冰糖", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "盘鸡元宝造型抹糖晾干",
        instruction: "公鸡洗净，两腿盘入腹腔两翅由喉部穿出，呈紧凑元宝坐卧姿态。控干后通体刷涂一层薄麦芽糖蜂蜜水风干晾透。",
        timerSeconds: 300,
        chefTip: "道口烧鸡标志造型，元宝紧凑美观易于在老汤中翻转受热。"
      },
      {
        stepIndex: 2,
        title: "滚油快炸皮色枣红晶亮",
        instruction: "油锅烧至八成热下入全鸡快速油炸，边炸边浇热油，炸约2分钟至通体呈均匀明亮枣皮红迅速捞出。",
        timerSeconds: 120,
        chefTip: "高温快炸只锁皮色，不可把鸡皮炸破或炸焦内部肉质。"
      },
      {
        stepIndex: 3,
        title: "陈年老汤压石文火慢煨脱骨",
        instruction: "将炸好的鸡放入老卤汤锅中，加入八味香料包、生抽老抽与冰糖，大火滚沸压上重瓷盘防止浮起，微火慢焖60分钟，关火焖泡透味。",
        timerSeconds: 4200,
        chefTip: "微火慢煨达到极度酥烂境界，用手轻提鸡骨，肉骨瞬间自行脱落。"
      }
    ],
    tips: "中华四大名鸡之冠！始于清顺治年间，色泽鲜艳油亮形如元宝，肉烂脱骨酥香软嫩，五香浓郁穿骨透髓，热食肉嫩多汁冷食凉香爽口。",
    tags: ["河南", "豫菜", "道口烧鸡", "四大名鸡", "肉烂脱骨", "非遗传承"]
  },
  {
    id: "rec_prov_105",
    name: "信阳传统固始大铁锅地锅鸡",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 410,
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "信阳固始散养大公鸡(剁方块)", amount: 750, unit: "g", type: "main", isCore: true },
      { name: "传统发面玉米面贴饼面剂", amount: 180, unit: "g", type: "main", isCore: true },
      { name: "信阳本地红皮小洋芋块", amount: 200, unit: "g", type: "secondary", isCore: false },
      { name: "青红尖椒段与整蒜瓣", amount: 50, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "农家压榨菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "信阳特产红油黄豆辣酱", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "生抽老抽与白糖", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "生姜八角香叶料包", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "开水或鸡骨高汤", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "铁锅热油干煸土鸡块紧皮逼油",
        instruction: "大铁锅烧热下菜籽油，下入焯好的固始鸡块大火煸炒5分钟，把鸡皮油脂炒出，肉质金黄紧缩。",
        timerSeconds: 300,
        chefTip: "固始土鸡肉质紧致肌理细密，干煸出浓香才耐炖。"
      },
      {
        stepIndex: 2,
        title: "下辣酱香料加汤焖煨入味下洋芋",
        instruction: "加入姜蒜片、八角香叶与黄豆辣酱大火炒出红亮酱香，加入老抽生抽与开水大火煮沸，下入洋芋块中火焖煮15分钟。",
        timerSeconds: 900,
        chefTip: "信阳菜兼具南北之长，酱香浓郁微辣开胃。"
      },
      {
        stepIndex: 3,
        title: "锅沿紧贴玉米饼焖透收浓汁",
        instruction: "将玉米面团压扁拉成椭圆贴饼，顺着铁锅内壁上沿贴满一圈，浸泡半截于汤中，加盖微火焖蒸12分钟至饼熟鸡酥起锅。",
        timerSeconds: 720,
        chefTip: "贴饼下半部吸透鸡油辣汁焦香软烂，上半部松软甜香，相得益彰。"
      }
    ],
    tips: "豫南大别山下的乡野传奇！选用著名的固始散养鸡，肉质鲜美弹牙越嚼越香，铁锅贴饼吸足了浓油赤酱的鲜浓肉汁，香浓四溢极度下饭。",
    tags: ["河南", "豫菜", "固始鸡", "地锅鸡", "玉米贴饼", "大别山风味"]
  },
  {
    id: "rec_prov_106",
    name: "天津老字号金黄带鳞罾蹦鲤鱼",
    region: "天津",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 340,
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜活野生大鲤鱼一条(保留全部完整鱼鳞)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "大葱白切细丝与鲜姜丝", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "天津特产纯正独流老醋(酸甜灵魂)", baseAmount: 45, unit: "ml", amountText: "45ml", isPantryStaple: true },
      { name: "细白砂糖(调配正统糖醋汁)", baseAmount: 40, unit: "g", amountText: "40g", isPantryStaple: true },
      { name: "炸制用精炼花生油", baseAmount: 80, unit: "ml", amountText: "80ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "清鸡汤与玉米水淀粉", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯芝麻香油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "留完整鱼鳞剖腹去鳃吸干水分",
        instruction: "鲤鱼绝不去鳞，从腹部剖开掏出内脏去鳃洗净，用厨房纸彻底吸干鱼身表面与鳞片内外水分，抹少许黄酒与盐。",
        timerSeconds: 300,
        chefTip: "带鳞活炸是津门绝活，鱼鳞在高温油炸下如同米花般炸开酥脆可食。"
      },
      {
        stepIndex: 2,
        title: "大火高油温整鱼油炸鱼鳞立起焦酥",
        instruction: "大锅烧花生油至八成滚热，手提鱼尾滑入油中，勺淋热油至鱼鳞彻底炸开直立，炸至通体金黄、骨酥肉嫩如在鱼网中挣扎蹦跃状捞出装盘。",
        timerSeconds: 400,
        chefTip: "炸至鱼身弯曲如罾网中蹦跃，鱼骨酥脆连头带刺皆可咀嚼嚼化。"
      },
      {
        stepIndex: 3,
        title: "独流老醋调红亮热汁浇鱼作响",
        instruction: "锅中爆香葱姜丝，倒入独流老醋、白糖、生抽与高汤烧沸，勾薄芡淋香油。趁热将滚烫糖醋汁猛浇在刚出锅的炸鱼上，伴随吱吱作响声端桌上席。",
        timerSeconds: 120,
        chefTip: "热汁浇在热鱼上发出悦耳响声，鱼鳞吸汁酥脆爆裂，酸甜适口。"
      }
    ],
    tips: "津门百年不衰的天下第一名肴！带鳞炸熟，鱼鳞张开金黄如白玉花片酥脆无比，肉质细嫩，独流老醋酸甜适口，连骨带鳞皆酥脆可食。",
    tags: ["天津", "津菜", "罾蹦鲤鱼", "独流老醋", "带鳞活炸", "百年老字号"]
  },
  {
    id: "rec_prov_107",
    name: "天津传统名菜八大碗老爆三",
    region: "天津",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 290,
    prepTimeMinutes: 20,
    cookTimeMinutes: 5,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "鲜猪肝切薄柳叶片(剔筋血水冲净)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "鲜猪里脊肉切薄片", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "新鲜猪腰对剖去腰臊打十字麦穗花刀", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "天津特产大蒜碎末(重蒜香灵魂)", amount: 35, unit: "g", type: "main", isCore: true },
      { name: "香葱花与老姜末", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "精炼纯菜籽油或熟猪油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "独流老醋烹锅提味", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "传统酿造生抽与老抽", baseAmount: 18, unit: "ml", amountText: "18ml", isPantryStaple: true },
      { name: "纯水淀粉上浆与勾芡", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "黄酒、精盐与白糖", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "纯芝麻香油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "三样荤料细致刀工上浆",
        instruction: "猪肝切薄柳叶片，肉切薄片，猪腰去腰臊打麦穗花刀，分别加盐、黄酒与水淀粉抓匀上薄浆。",
        timerSeconds: 300,
        chefTip: "津味老爆三传统无任何素菜配料，纯靠肝、肉、腰三种荤料的脆嫩相谐。"
      },
      {
        stepIndex: 2,
        title: "旺火热油极速滑油变色捞出",
        instruction: "油温升至六成热，将肉片、猪肝、腰花一同滑入油中，旺火快拨12秒至腰花卷曲展开、变白断生立即沥油捞出。",
        timerSeconds: 30,
        chefTip: "滑油时间极短，过头则猪肝变硬腰花变柴失去脆嫩多汁。"
      },
      {
        stepIndex: 3,
        title: "重蒜末爆锅烹醋裹红油芡汁出锅",
        instruction: "锅留底油爆香大量蒜末姜葱，下老爆三原料，立即烹入独流老醋、生抽老抽、糖与水淀粉对成的碗汁，旺火剧烈颠翻5秒淋香油出锅。",
        timerSeconds: 20,
        chefTip: "大蒜辛香与老醋酸香交融，红润油亮裹紧食材，盘底不见多余汤汁。"
      }
    ],
    tips: "津菜纯荤爆炒的极致巅峰！猪肝滑嫩无腥、肉片爽滑、腰花脆嫩弹牙，浓油赤酱紧裹，蒜香浓烈老醋清香，下酒下饭痛快淋漓。",
    tags: ["天津", "津菜", "老爆三", "天津八大碗", "腰花猪肝", "大火爆炒"]
  },
  {
    id: "rec_prov_108",
    name: "天津传统八大碗之红烧独面筋",
    region: "天津",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 250,
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "天津特产油面筋(手撕大块焯水微沥干)", amount: 8, unit: "个", type: "main", isCore: true },
      { name: "蒜瓣拍碎切蒜末(量足)", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "小香葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "精炼纯花生油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "纯正独流老醋(锅边烹香)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "传统酿造老抽生抽(浓油赤酱)", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯白细砂糖(微甜红亮)", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "清高汤或热水", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: false },
      { name: "纯玉米水淀粉勾浓芡", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "芝麻香油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "天津油面筋手撕大块焯水去油",
        instruction: "天津特产大油面筋用手撕成大块，沸水中焯烫30秒压出多余油脂，捞出轻轻攥干水分备用。",
        timerSeconds: 120,
        chefTip: "焯水去多余炸油不仅更健康，且能使面筋孔隙大开更易吸足红烧汤汁。"
      },
      {
        stepIndex: 2,
        title: "蒜末爆锅炒浓油赤酱下汤微煨",
        instruction: "锅中倒油烧热爆香一半蒜末，倒入生抽老抽与白糖炒出红润焦糖酱香，加入高汤烧沸，下入手撕面筋块加盖中火煨烧5分钟。",
        timerSeconds: 360,
        chefTip: "“独”在天津话里即为“微火慢煨”之意，煨透让面筋充分吸饱醇厚酱汁软糯回弹。"
      },
      {
        stepIndex: 3,
        title: "下生蒜末烹独流老醋勾芡出锅",
        instruction: "汤汁减半时投入另一半生蒜末，沿锅边烹入少许独流老醋提神，淋水淀粉大火收成稠浓玻璃芡，淋香油出锅。",
        timerSeconds: 90,
        chefTip: "分两次下蒜，熟蒜出底香，后下生蒜出辛香，老醋解甜腻更添风味。"
      }
    ],
    tips: "天津卫人人皆爱的看家代表菜！油面筋吸饱了红亮浓醇的汤汁，软糯筋道如肉般多汁饱满，酱香浓郁微甜微酸，蒜香扑鼻，素菜荤做的绝妙典范。",
    tags: ["天津", "津菜", "独面筋", "天津八大碗", "油面筋", "浓油赤酱"]
  },
  {
    id: "rec_prov_109",
    name: "山西五台山野山台蘑炒肉片",
    region: "山西",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 20,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "五台山特产天然野生干燥台蘑(温水泡软切厚片)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "土猪鲜里脊肉薄片", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "脆爽青红椒片与大蒜片", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "小香葱花与生姜丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟猪油与菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "台蘑原泡澄清蘑菇水", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: false },
      { name: "特级生抽酱油", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "山西黄酒烹锅", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白胡椒粉与精制细盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "五台山台蘑温水泡发切大厚片",
        instruction: "干台蘑温水泡发1小时剪去泥根切厚片，泡蘑菇的原汤澄清沉淀留用打底。",
        timerSeconds: 300,
        chefTip: "五台山台蘑香气醇厚浓烈，原汤富含浓缩鸟苷酸天然鲜味，万不可倒掉。"
      },
      {
        stepIndex: 2,
        title: "肉片滑油变白盛出备用",
        instruction: "肉片加黄酒、盐与少许生粉抓匀上浆，热油滑炒变白散开即捞出备用。",
        timerSeconds: 60,
        chefTip: "快速滑油保持肉片软嫩爽滑。"
      },
      {
        stepIndex: 3,
        title: "猪油炒香台蘑下原汤煨出浓醇香",
        instruction: "锅中化开猪油爆香姜葱蒜，下入台蘑片大火翻炒透，倒入澄清台蘑原汤、生抽慢煨2分钟，倒入肉片与青红椒片，大火翻炒收汁起锅。",
        timerSeconds: 150,
        chefTip: "猪油与野山菌相得益彰，肉香菌鲜浓烈回甘。"
      }
    ],
    tips: "佛国五台山大山深处的至尊珍馐！五台山台蘑肉质肥厚滑嫩，香气高雅浓郁冠绝群菇，借猪油与肉片之醇，汁浓味美，鲜入骨髓。",
    tags: ["山西", "晋菜", "五台山台蘑", "台蘑炒肉", "山珍名肴", "天然鲜醇"]
  },
  {
    id: "rec_prov_110",
    name: "山西正宗宁化府陈醋溜土豆丝",
    region: "山西",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 140,
    prepTimeMinutes: 10,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "优质黄心土豆(手工刀切细均匀长丝)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "本地脆嫩青尖椒丝与红椒丝", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜瓣拍碎切蒜末", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "花椒粒(炸花椒油用)", amount: 15, unit: "粒", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "太原宁化府老陈醋(分两次放)", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "纯细白砂糖(调和微酸)", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "手工细切土豆丝反复洗去淀粉",
        instruction: "土豆手工刀切成牙签粗细匀称长丝，凉水中淘洗3遍彻底洗去表面淀粉，沥干水份备用。",
        timerSeconds: 180,
        chefTip: "必须彻底洗净淀粉，炒出来才能根根晶莹剔透、爽脆不粘。"
      },
      {
        stepIndex: 2,
        title: "热油炸香花椒捞出爆蒜末头道醋",
        instruction: "热锅倒菜籽油炸香花椒粒捞出不用，下蒜末爆香，立即烹入第一勺宁化府老陈醋炒出醋香。",
        timerSeconds: 45,
        chefTip: "头道热油炝醋能在土豆丝表面迅速形成一层酸性脆硬保护膜。"
      },
      {
        stepIndex: 3,
        title: "下土豆丝大火极速翻炒临出锅再烹醋",
        instruction: "倒入土豆丝与青红椒丝，大火极速颠锅爆炒40秒，调入盐、微量白糖，出锅前沿锅边烹入第二道生老陈醋颠匀出锅。",
        timerSeconds: 45,
        chefTip: "山西双醋法：一醋炝锅定其脆，二醋出锅留其香，酸脆爽口极致。"
      }
    ],
    tips: "三晋百姓最骄傲的国民小炒神作！宁化府手工老陈醋酸而不烈、绵厚回甘，土豆丝爽脆如冰草，根根酸脆挺括，开胃生津百吃不厌。",
    tags: ["山西", "晋菜", "酸辣土豆丝", "宁化府老陈醋", "醋溜土豆丝", "爽脆开胃"]
  },
  {
    id: "rec_prov_111",
    name: "山西大葱花蒜薹炒黄牛里脊",
    region: "山西",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 260,
    prepTimeMinutes: 12,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜晋南黄牛嫩里脊肉(顶刀切大薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩青翠蒜薹段", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "大葱白斜切厚马蹄片", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "生姜丝与红椒丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "山西老陈醋烹锅提气", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "生粉、黄酒与水(抓腌牛肉)", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "黄牛肉横切大薄片抓水上浆",
        instruction: "晋南黄牛里脊逆纹切薄片，加黄酒、生抽、少许水抓匀吸水，拌入生粉锁水封油。",
        timerSeconds: 180,
        chefTip: "逆纹切断粗纤维，水分抓足炒出来鲜嫩爆汁。"
      },
      {
        stepIndex: 2,
        title: "旺火滑炒牛肉变色即捞",
        instruction: "炒锅大火热油，倒入牛肉片旺火快速划散15秒变白立即捞出控油。",
        timerSeconds: 30,
        chefTip: "滑炒动作要快，牛肉片保持滑嫩多汁。"
      },
      {
        stepIndex: 3,
        title: "爆炒蒜薹大葱回牛肉烹老陈醋",
        instruction: "底油下姜丝、大葱片与蒜薹段大火爆炒1分钟断生，倒入牛肉片，烹入生抽与老陈醋，加白糖胡椒粉颠匀起锅。",
        timerSeconds: 45,
        chefTip: "老陈醋在锅壁高温激出醇香，葱甜蒜香与牛肉嫩香交融。"
      }
    ],
    tips: "晋南传统经典的过瘾硬炒！黄牛里脊肉质紧致细嫩多汁，蒜薹脆甜清口，大葱焦香扑鼻，在微量山西老陈醋的提味下香而不腻，绝妙配饭。",
    tags: ["山西", "晋菜", "蒜薹炒牛肉", "黄牛肉", "大葱爆炒", "下饭硬菜"]
  },
  {
    id: "rec_prov_112",
    name: "山西传统尖椒大火爆炒干豆腐",
    region: "山西",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 200,
    prepTimeMinutes: 8,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "优质薄千张干豆腐(切菱形片沸水焯软)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "本地清脆绿尖椒(滚刀切菱形块)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "猪五花肉薄片", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "蒜片与香葱碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油或熟猪油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "清高汤或热水", baseAmount: 100, unit: "ml", amountText: "100ml", isPantryStaple: false },
      { name: "特级生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "纯玉米水淀粉勾薄芡", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "干豆腐切菱形片加食用碱微焯水",
        instruction: "干豆腐切菱形薄片，沸水中加极微量食用碱焯烫30秒捞出沥水。",
        timerSeconds: 90,
        chefTip: "微量碱水焯烫能彻底消除豆腥味，使干豆腐软嫩滑爽如缎子。"
      },
      {
        stepIndex: 2,
        title: "煸炒肉片蒜香加高汤下干豆腐小煨",
        instruction: "热锅倒油煸香肉片，下蒜片葱花炒香，倒入生抽与高汤烧沸，下入干豆腐片中小火煨煮2分钟吸足肉汤鲜味。",
        timerSeconds: 150,
        chefTip: "让干豆腐在汤中微微煨炖是北方爆炒干豆腐滑润适口的精髓。"
      },
      {
        stepIndex: 3,
        title: "下尖椒片勾薄芡急火包裹出锅",
        instruction: "倒入尖椒片大火翻炒断生，淋入水淀粉大火翻颠收成薄亮芡汁，使酱汁紧裹豆腐片出锅。",
        timerSeconds: 45,
        chefTip: "薄芡锁住水分与酱汁，豆腐软嫩微弹，尖椒爽脆清辣。"
      }
    ],
    tips: "北方餐桌永远的神！干豆腐经过高汤煨制变得软嫩柔滑如缎，尖椒脆爽微辣开胃，芡汁薄亮包裹，极其下饭又营养丰富。",
    tags: ["山西", "晋菜", "尖椒干豆腐", "千张", "家常小炒", "软嫩多汁"]
  },
  {
    id: "rec_prov_113",
    name: "河南五花肉豆角传统蒸卤面",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "蒸",
    calories: 430,
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "传统手工压制特细生鲜面条", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "土猪肥三瘦七五花肉片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜嫩长豆角或四季豆(掰寸段)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜黄豆芽或豆芽菜", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜瓣拍碎与生姜片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟花生油或熟猪油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "传统酿造老抽生抽(重酱色)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "河南十三香粉与八角", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "高汤或热水", baseAmount: 350, unit: "ml", amountText: "350ml", isPantryStaple: false },
      { name: "食用精制细盐", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "生面条抖散拌少许油初蒸熟透",
        instruction: "细鲜面条抖散淋少许熟油抓匀，水开上蒸锅大火蒸15分钟，取出抖散晾凉防粘。",
        timerSeconds: 900,
        chefTip: "先干蒸熟透能让面条筋骨坚挺，之后吸收肉汁绝不发烂发坨。"
      },
      {
        stepIndex: 2,
        title: "炒锅煸香五花肉豆角出咸香卤汤",
        instruction: "锅中热油煸炒五花肉出油金黄，下姜蒜八角炒香，倒入豆角与豆芽大火翻炒，加入生抽老抽、十三香与盐，倒入热水大火煮沸炖5分钟，盛出一半卤汤备用。",
        timerSeconds: 400,
        chefTip: "卤汤要咸度稍重、颜色稍深，才能让面条入味上色红润。"
      },
      {
        stepIndex: 3,
        title: "面条拌匀浓郁卤汁二度上锅蒸透",
        instruction: "将蒸好的面条放入盆中，浇入盛出的滚烫肉菜卤汤翻拌均匀使面条吸饱酱汁，平铺在锅中肉菜上方，加盖中火蒸8分钟，关火拌匀撒生蒜末出锅。",
        timerSeconds: 600,
        chefTip: "面条根根红亮分明油润筋道，吸透了五花肉与豆角的鲜浓油脂，妙不可言。"
      }
    ],
    tips: "河南人家户户皆通的传家至宝！先蒸再卤二度复蒸，面条根根红亮弹牙油润有嚼劲，五花肉肥而不腻，豆角软烂入味，配生大蒜吃绝了。",
    tags: ["河南", "豫菜", "河南卤面", "豆角蒸面", "十三香", "传统主食"]
  },
  {
    id: "rec_prov_114",
    name: "河南传统十三香鸡蛋炒红薯凉粉",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 230,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "纯红薯淀粉熬制灰黑透亮凉粉(切麻将方块)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "新鲜土鸡蛋打散", amount: 2, unit: "个", type: "main", isCore: true },
      { name: "本地生大蒜泥加水调蒜汁", amount: 30, unit: "ml", type: "main", isCore: true },
      { name: "香葱碎与青红椒粒", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟菜籽油或花生油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "正宗王守义十三香粉", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "传统豆瓣酱或芝麻酱", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "特级酿造生抽老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "香醋与自制红油辣椒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "铁板热油下凉粉块平铺慢煎",
        instruction: "平底锅或铁板烧热倒油，下入切方块的红薯凉粉，中小火慢煎慢翻，煎至凉粉表面受热起透明金黄皮壳。",
        timerSeconds: 240,
        chefTip: "红薯凉粉遇热变软糯透明，煎出焦香外皮更富嚼劲。"
      },
      {
        stepIndex: 2,
        title: "倒入蛋液包裹凉粉撒十三香",
        instruction: "将打散的鸡蛋液淋在凉粉表面，迅速翻动让蛋液紧紧包裹凉粉块，调入十三香粉、豆瓣酱、生抽老抽大火翻炒翻出焦香。",
        timerSeconds: 150,
        chefTip: "十三香是河南炒凉粉的灵魂增香剂，复合草本香气浓郁醇厚。"
      },
      {
        stepIndex: 3,
        title: "浇蒜泥汁油泼辣子热气腾腾出锅",
        instruction: "淋入浓浓大蒜汁、香醋与红油辣椒，大火颠翻几下使蒜汁受热激发出浓郁辛香，撒葱花热吃。",
        timerSeconds: 60,
        chefTip: "一定要趁热吃，软糯筋道烫嘴，蒜香浓郁辣爽过瘾。"
      }
    ],
    tips: "开封鼓楼夜市最火爆的热炒名小吃！纯红薯凉粉受热软糯晶莹，焦香锅巴与嫩鸡蛋碎紧紧包裹，十三香与蒜汁香浓扑鼻，咸辣微酸回味无穷。",
    tags: ["河南", "豫菜", "炒凉粉", "红薯凉粉", "十三香", "开封夜市"]
  },
  {
    id: "rec_prov_115",
    name: "河南荆芥大蒜汁凉拌嫩黄瓜",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "凉拌",
    calories: 80,
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "河南特产新鲜绿荆芥嫩叶尖", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "鲜脆带刺嫩黄瓜(拍裂改滚刀块)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新鲜紫皮大蒜瓣(蒜臼子捣泥)", amount: 30, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "河南纯正驻马店小磨香油(灵魂油脂)", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "传统粮食香醋", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "特级淡盐生抽", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "食用精制细盐与白糖", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "黄瓜拍扁裂开切不规则块",
        instruction: "鲜黄瓜洗净，用刀背猛拍使瓜肉自然裂开，再刀切成适口小滚刀块入大碗中。",
        timerSeconds: 60,
        chefTip: "刀拍黄瓜断面粗糙不规则，比刀切更能深度吸附酱汁蒜香。"
      },
      {
        stepIndex: 2,
        title: "石臼捣蒜泥调入小磨香油香醋",
        instruction: "紫皮大蒜加少许盐在石臼中捣成细腻蒜泥，加入小磨香油、香醋、生抽与微量白糖调匀成浓烈蒜泥调料汁。",
        timerSeconds: 120,
        chefTip: "驻马店小磨香油浓香醇厚，与蒜泥结合形成地道中原底味。"
      },
      {
        stepIndex: 3,
        title: "投入新鲜荆芥叶即拌即食",
        instruction: "将洗净控干的河南鲜荆芥叶撕碎放入黄瓜碗中，倒入调料汁拌匀立即装盘上席享用。",
        timerSeconds: 60,
        chefTip: "荆芥一定要现拌现吃，保持叶片脆嫩翠绿与浓郁芳香。"
      }
    ],
    tips: "中原夏日家家户户必不可少的清神小品！河南人夏天离不开荆芥，特有的清凉柠檬薄荷香气直透心脾，配上拍黄瓜与小磨香油蒜泥，爽脆清神消暑无双。",
    tags: ["河南", "豫菜", "河南荆芥", "拍黄瓜", "小磨香油", "清凉解暑"]
  },
  {
    id: "rec_prov_116",
    name: "河南农家蒜苔炒五花肉丝",
    region: "河南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "农家新鲜细嫩甜蒜苔(切手指段)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜带皮或去皮五花猪肉丝", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "大葱花与生姜丝", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "红干辣椒丝", amount: 5, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟花生油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "传统酿造生抽老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "河南十三香粉微量", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "白糖提鲜与食用盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "五花肉丝煸炒出自然猪脂",
        instruction: "热锅下少许油，下入五花肉丝中小火煸炒至出油微卷金黄，爆香葱姜与干辣椒丝。",
        timerSeconds: 150,
        chefTip: "五花肉丝煸干多余水汽，猪油炒蒜苔香气更足。"
      },
      {
        stepIndex: 2,
        title: "烹入生抽老抽十三香上色",
        instruction: "烹入生抽老抽与十三香，翻炒出浓郁酱香肉色。",
        timerSeconds: 30,
        chefTip: "先让肉丝充分吸收酱香上色。"
      },
      {
        stepIndex: 3,
        title: "下蒜苔段旺火极速爆炒断生出锅",
        instruction: "倒入蒜苔段大火猛翻，烹入两勺热水，调入盐与微量白糖，大火翻炒1分半至蒜苔表面起微皱断生即可盛盘。",
        timerSeconds: 90,
        chefTip: "烹少许热水产生高温蒸汽促使蒜苔快速熟透，保持翠绿爽脆爆汁。"
      }
    ],
    tips: "河南农村最亲切常吃的家常热炒！蒜苔脆嫩鲜甜多汁，五花肉油润咸香，十三香带来独特的家常底味，配馒头配米饭百吃不厌。",
    tags: ["河南", "豫菜", "蒜苔炒肉丝", "五花肉", "家常快手", "脆嫩鲜甜"]
  },
  {
    id: "rec_prov_117",
    name: "保定传统槐茂甜面酱炒肉丝",
    region: "河北",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜猪里脊肉(切粗细均匀肉丝)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "保定老字号槐茂传统甜面酱", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "脆嫩大葱白(极细长丝铺盘底)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "香嫩豆腐皮或荷叶薄饼", amount: 6, unit: "张", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "精炼纯花生油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "黄酒与纯水淀粉蛋清(上浆)", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯白细砂糖(调和酱香甘甜)", baseAmount: 12, unit: "g", amountText: "12g", isPantryStaple: true },
      { name: "纯正小磨芝麻香油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肉丝抓匀蛋清淀粉温油滑散",
        instruction: "里脊肉顺纹切丝，加料酒、少许盐、蛋清与水淀粉抓匀上浆。油温四成热下肉丝快速划散变白断生捞出。",
        timerSeconds: 90,
        chefTip: "温油滑肉丝丝滑软嫩不柴，根根分明。"
      },
      {
        stepIndex: 2,
        title: "槐茂甜面酱小火慢炒出红润明油",
        instruction: "锅中留少许油，下入槐茂甜面酱加白糖与少许清水，用小火慢慢推炒至酱汁起泡、油润红亮散发浓郁甜香。",
        timerSeconds: 90,
        chefTip: "保定槐茂甜面酱经古法日光自然发酵，慢炒出焦糖酱香是整道菜灵魂。"
      },
      {
        stepIndex: 3,
        title: "肉丝裹满红亮甜酱覆于葱丝大盘",
        instruction: "倒入滑好的肉丝大火颠炒包裹酱汁，淋入香油，趁热铺在码满大葱白丝的平盘上，配豆皮或荷叶饼卷食。",
        timerSeconds: 40,
        chefTip: "酱汁红亮紧紧包裹肉丝，盘底不见稀汤，葱丝爽脆辛甜解腻。"
      }
    ],
    tips: "河北保定名闻遐迩的三百年风味代表！选用非遗老字号槐茂甜面酱，酱汁红亮光洁甜咸浓郁，肉丝软嫩滑口，裹着大葱丝用豆皮一卷，香甜醇厚妙不可言。",
    tags: ["河北", "冀菜", "槐茂甜面酱", "京酱肉丝", "保定风味", "酱香浓郁"]
  },
  {
    id: "rec_prov_118",
    name: "河北正定传统热切丸子炒青蒜",
    region: "河北",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 260,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "正定传统八大碗蒸制热切丸子(切菱形厚片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩青蒜苗斜切长段", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "红辣椒细丝与老生姜丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟花生油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "特级酿造生抽酱油", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "纯细白砂糖提鲜", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热切丸子切厚菱形片两面微煎",
        instruction: "正定传统红薯粉肉泥蒸制的热切丸子切半厘米厚菱形片，热锅下少许油微火轻煎至两面微黄有焦香。",
        timerSeconds: 150,
        chefTip: "热切丸子蒸熟后软弹，轻微煎香能激发出红薯粉与肉香混合的焦香。"
      },
      {
        stepIndex: 2,
        title: "下姜丝红椒与青蒜白爆出香气",
        instruction: "下姜丝、红椒丝与青蒜白部分大火快速翻炒，炒出鲜脆蒜甜香气。",
        timerSeconds: 45,
        chefTip: "青蒜白先下炒出蒜香。"
      },
      {
        stepIndex: 3,
        title: "投入青蒜叶调味急火颠翻盛盘",
        instruction: "撒入青蒜叶，烹入生抽、微量盐与白糖，大火急颠锅翻匀15秒至蒜叶变绿断生即可出锅。",
        timerSeconds: 30,
        chefTip: "调味简单咸鲜，丸子软弹滑爽，蒜香浓烈。"
      }
    ],
    tips: "河北正定府传统八大碗招牌家常创新！热切丸子由肉泥与红薯淀粉混合蒸制定型，质地滑糯筋道弹牙，同鲜青蒜大火急炒，软韧咸鲜蒜香扑鼻。",
    tags: ["河北", "冀菜", "正定热切丸子", "正定八大碗", "青蒜炒丸子", "软弹筋道"]
  },
  {
    id: "rec_prov_119",
    name: "唐山传统小火炉棋子烧饼夹肉",
    region: "河北",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "烤",
    calories: 320,
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "传统小巧如围棋子金黄多层酥皮烧饼", amount: 6, unit: "个", type: "main", isCore: true },
      { name: "秘制五香卤猪头肉或酱肘子(剁细碎肉末)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "鲜脆青青尖椒与香葱碎", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "原锅五香浓郁老卤汤汁", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "小磨芝麻香油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "棋子烧饼小巧酥脆微烤复热",
        instruction: "唐山传统棋子烧饼如围棋子般小巧玲珑，入烤箱或平底锅微火慢烤2分钟恢复层层酥脆热气腾腾。",
        timerSeconds: 120,
        chefTip: "棋子烧饼油酥起层多达数十层，表面洒满芝麻，香脆掉渣。"
      },
      {
        stepIndex: 2,
        title: "酱肉青椒香葱在案板细致剁碎",
        instruction: "将卤好的酱肘子或猪头肉加少许青椒碎、香葱在案板上细致剁成碎末，浇上一小勺滚烫老卤汤拌匀。",
        timerSeconds: 120,
        chefTip: "加少许青椒碎能解卤肉油腻，增添爽脆清新口感。"
      },
      {
        stepIndex: 3,
        title: "烧饼对半剖开塞入饱满酱肉享用",
        instruction: "用小刀将棋子烧饼沿侧面剖开一个口，塞入满满剁好的温热酱肉馅，趁热一口一个整吞。",
        timerSeconds: 60,
        chefTip: "外皮酥脆香浓掉渣，内馅肥瘦相间汁水丰盈，一口一个停不下来。"
      }
    ],
    tips: "河北唐山百年非遗传统名点！小巧玲珑如围棋子，油酥层次丰富香脆掉渣，夹着香气四溢的五香卤肉与青椒碎，酥脆与软烂碰撞，妙趣横生。",
    tags: ["河北", "冀菜", "棋子烧饼", "唐山名吃", "酥脆掉渣", "夹肉烧饼"]
  },
  {
    id: "rec_prov_120",
    name: "天津正宗纯绿豆面煎饼馃子",
    region: "天津",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "煎",
    calories: 360,
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "纯纯石磨现磨绿豆面小米面稀浆", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜土鸡蛋", amount: 2, unit: "个", type: "main", isCore: true },
      { name: "现炸金黄大油条(馃子)或酥脆馃箅儿", amount: 2, unit: "根", type: "main", isCore: true },
      { name: "鲜青小香葱花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "天津正宗面酱加酱豆腐汁调酱料", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "纯正油泼香辣辣椒面", baseAmount: 10, unit: "g", amountText: "10ml", isPantryStaple: true },
      { name: "羊角刮板与纯熟植物油(润铛)", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热铛轻抹油舀绿豆浆摊圆薄饼",
        instruction: "生铁铛烧微热抹微量油，舀入绿豆面小米面浆，用竹刮板轻盈旋转推摊成又圆又薄的完整大饼皮。",
        timerSeconds: 45,
        chefTip: "正宗天津煎饼馃子只用纯绿豆与小米磨浆，绝不掺白面，带着天然豆麦香。"
      },
      {
        stepIndex: 2,
        title: "磕入鸡蛋摊匀撒葱花翻面",
        instruction: "在面皮上磕入一颗鸡蛋，用刮板划散摊匀覆盖全饼，撒上碧绿葱花，待蛋液凝固用铲子利落翻面。",
        timerSeconds: 60,
        chefTip: "蛋香与豆香在铁铛上瞬间弥漫，饼皮金黄微焦。"
      },
      {
        stepIndex: 3,
        title: "抹面酱酱豆腐辣椒夹入热脆馃子",
        instruction: "在翻过来的饼面均匀刷上面酱与红酱豆腐汁、辣椒油，放上刚出锅香脆油条(馃子)或馃箅儿，两边对折紧裹趁热享用。",
        timerSeconds: 45,
        chefTip: "天津规矩只夹馃子或馃箅儿，软糯豆香面皮裹着酥脆馃子，咸香微甘妙绝津门。"
      }
    ],
    tips: "津门早晨最有尊严的城市名片！纯绿豆面皮薄而软韧豆香扑鼻，金黄鸡蛋嫩滑，裹着刚出锅金黄焦脆的热油条，面酱酱豆腐提味增咸鲜，咔嚓一口魂归海河。",
    tags: ["天津", "津菜", "煎饼馃子", "纯绿豆面", "油条馃子", "非遗小吃"]
  }
];
