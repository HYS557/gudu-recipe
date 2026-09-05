const fs = require('fs');
const path = require('path');

const photos = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_dessert_photos.json'), 'utf8'));
const photoMap = {};
photos.forEach(p => {
  photoMap[p.dishName] = p.photoUrl;
});

const newDessertRecipes = [
  // 1. 广粤经典养生润燥糖水
  {
    id: "rec_dessert_01",
    name: "冰糖雪梨百合银耳羹",
    subtitle: "秋冬润肺止咳第一名羹，银耳出浓胶拉丝，雪梨晶莹软糯，清甜润喉沁人心脾",
    calories: "95 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["autumn", "winter", "spring"],
    cookTime: "45分钟",
    difficulty: "新手友好",
    image: photoMap["冰糖雪梨百合银耳羹"],
    photoUrl: photoMap["冰糖雪梨百合银耳羹"],
    ingredients: [
      { name: "通江段木银耳", amount: "半朵(约15g)" },
      { name: "赵县雪梨", amount: "1个(约300g)" },
      { name: "兰州干百合", amount: "15g" },
      { name: "宁夏枸杞", amount: "10粒" },
      { name: "纯净水", amount: "1200ml" }
    ],
    seasonings: [
      { name: "老黄冰糖", amount: "35g" }
    ],
    steps: [
      { title: "银耳泡发手撕碎", detail: "银耳用温水充分泡发30分钟，剪去黄色硬蒂，用手尽量撕成指甲盖大小的细碎碎片，碎银耳截面多极易快速炖出浓胶。", timerSeconds: 1800 },
      { title: "大火煮沸转慢炖", detail: "炖锅加入1200ml纯净水与碎银耳，大火烧沸后用勺子快速顺时针搅拌1分钟打出胶质雏形，转微小火加盖慢煲30分钟。", timerSeconds: 1800 },
      { title: "加雪梨百合慢熬", detail: "雪梨洗净去皮去核切成滚刀块，与洗净的干百合一同下锅，继续小火慢炖15分钟至雪梨半透明。", timerSeconds: 900 },
      { title: "下冰糖枸杞焖出稠胶", detail: "下入老黄冰糖与枸杞，搅拌至冰糖完全融化，关火后加盖焖5分钟即可盛碗，汤体浓稠拉丝，甘润无比。", timerSeconds: 300 }
    ],
    tips: "银耳出胶的关键：一是一定要用手撕得极碎，二是大火沸水时拿勺子顺时针猛搅1分钟，胶质快速释放出浓稠拉丝感。",
    tags: ["甜品", "润肺", "养生糖水", "粤式"]
  },
  {
    id: "rec_dessert_02",
    name: "广式海带陈皮清凉绿豆沙",
    subtitle: "老广州街头糖水铺镇店招牌，新会老陈皮飘香，海带爽脆，绿豆起沙绵密清热解毒",
    calories: "120 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["summer", "autumn"],
    cookTime: "50分钟",
    difficulty: "家常必学",
    image: photoMap["广式海带陈皮清凉绿豆沙"],
    photoUrl: photoMap["广式海带陈皮清凉绿豆沙"],
    ingredients: [
      { name: "精选脱皮或原粒绿豆", amount: "150g" },
      { name: "干海带丝", amount: "15g" },
      { name: "新会十年老陈皮", amount: "1瓣(约3g)" },
      { name: "纯净水", amount: "1500ml" }
    ],
    seasonings: [
      { name: "老冰糖", amount: "50g" }
    ],
    steps: [
      { title: "食材洗浸与陈皮刮囊", detail: "绿豆淘洗干净冷冻或冷水浸泡1小时；陈皮温水浸软，用小刀轻轻刮去白囊（刮净才不苦涩）；干海带泡软切细丝。", timerSeconds: 3600 },
      { title: "大火同煲陈皮出香", detail: "锅中加入1500ml水，放入绿豆与陈皮大火烧开，保持中大火翻滚20分钟，豆壳浮起时用漏勺捞出弃掉。", timerSeconds: 1200 },
      { title: "下海带丝压沙起绵", detail: "投入切好的海带丝，转小火慢熬25分钟，期间用勺背在锅边碾压绿豆，直至汤水浓稠成沙。", timerSeconds: 1500 },
      { title: "下冰糖出锅冷藏", detail: "投入老冰糖搅拌至融化，常温喝温润消暑，冰镇后更是爽甜解燥。", timerSeconds: 300 }
    ],
    tips: "广式正宗绿豆沙的灵魂是陈皮和海带，陈皮白囊一定要刮干净，煮中途捞出绿豆皮，口感才会细腻无渣、绵沙顺滑。",
    tags: ["甜品", "消暑", "广式糖水", "陈皮绿豆沙"]
  },
  {
    id: "rec_dessert_03",
    name: "现磨香滑黑芝麻糊汤圆",
    subtitle: "传统广式生磨手工糊，黑芝麻配黑糯米香浓醇厚，注入软糯爆浆小汤圆，温润乌发",
    calories: "180 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["winter", "autumn", "spring"],
    cookTime: "25分钟",
    difficulty: "新手友好",
    image: photoMap["现磨香滑黑芝麻糊汤圆"],
    photoUrl: photoMap["现磨香滑黑芝麻糊汤圆"],
    ingredients: [
      { name: "熟黑芝麻", amount: "100g" },
      { name: "生黑米/糯米", amount: "30g" },
      { name: "手搓小汤圆", amount: "8-10粒" },
      { name: "清水", amount: "650ml" }
    ],
    seasonings: [
      { name: "黄冰糖", amount: "35g" }
    ],
    steps: [
      { title: "糯米浸泡与黑芝麻炒香", detail: "糯米洗净提前浸泡2小时增稠；熟黑芝麻若买现成的直接入机，若是生芝麻需小火干炒至噼啪作响出浓香。", timerSeconds: 7200 },
      { title: "破壁机打成细腻糊浆", detail: "将炒香黑芝麻、糯米和650ml清水放入破壁机，开启豆浆或米糊模式加热破壁，打至如丝缎般漆黑顺滑无渣。", timerSeconds: 1200 },
      { title: "煮软糯小汤圆", detail: "另起小锅烧沸水，下入小汤圆煮至全部浮起，中途点一次冷水，捞出浸入冷开水中保持Q弹防粘连。", timerSeconds: 300 },
      { title: "合碗趁热享用", detail: "将破壁机内热腾腾的黑芝麻糊倒入碗中，调入冰糖拌匀，轻轻盛入温润软糯的小汤圆即可。", timerSeconds: 120 }
    ],
    tips: "加一把糯米是黑芝麻糊顺滑黏糯的关键，不用加澄粉生粉，纯谷物自然稠厚，亮泽漆黑香飘满屋。",
    tags: ["甜品", "生磨糊", "养生", "温暖治愈"]
  },
  {
    id: "rec_dessert_04",
    name: "生姜红糖番薯暖身糖水",
    subtitle: "家常经典驱寒暖胃甜汤，老姜微辣回甘，红心蜜薯粉糯甜丝，一碗下肚通体舒畅",
    calories: "135 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["winter", "autumn"],
    cookTime: "20分钟",
    difficulty: "零失败",
    image: photoMap["生姜红糖番薯暖身糖水"],
    photoUrl: photoMap["生姜红糖番薯暖身糖水"],
    ingredients: [
      { name: "红心蜜薯/烟薯", amount: "2个(约350g)" },
      { name: "老黄姜", amount: "30g" },
      { name: "清水", amount: "800ml" }
    ],
    seasonings: [
      { name: "古法纯正红糖块", amount: "40g" }
    ],
    steps: [
      { title: "番薯滚刀切块与泡洗", detail: "蜜薯削皮切滚刀块，放入清水中多淘洗两遍洗去表面多余淀粉，煮出来的糖水才会清澈见底不浑浊。", timerSeconds: 300 },
      { title: "老姜拍扁出汁", detail: "老姜洗净保留姜皮，用刀面大力拍扁拍裂，这样烹煮时姜辣素更容易快速渗入汤汁中。", timerSeconds: 120 },
      { title: "大火沸煮转慢焖", detail: "汤锅中放入800ml清水、蜜薯块和拍裂老姜，大火煮沸后转中小火煮15分钟，至筷子能轻松戳透番薯。", timerSeconds: 900 },
      { title: "下古法红糖融化即成", detail: "加入古法红糖块搅拌融化，继续慢煨3分钟让番薯充分吸足糖姜味，趁热盛碗饮用。", timerSeconds: 180 }
    ],
    tips: "切好的番薯一定要用水冲掉表面淀粉，汤色才亮；老姜用刀拍碎比切片香气浓郁得多。",
    tags: ["甜品", "驱寒暖胃", "广式糖水", "家常快手"]
  },
  {
    id: "rec_dessert_05",
    name: "潮汕清心丸绿豆爽",
    subtitle: "潮汕夏秋街头传统名点，去皮脱壳金黄绿豆起爽，透亮Q弹清心丸，清心润燥",
    calories: "145 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["summer", "autumn"],
    cookTime: "30分钟",
    difficulty: "地道风味",
    image: photoMap["潮汕清心丸绿豆爽"],
    photoUrl: photoMap["潮汕清心丸绿豆爽"],
    ingredients: [
      { name: "脱皮绿豆(绿豆瓣)", amount: "120g" },
      { name: "潮汕清心丸/木薯粉小丸", amount: "80g" },
      { name: "马蹄粉/木薯淀粉", amount: "25g(加50ml水调芡)" },
      { name: "纯净水", amount: "1000ml" }
    ],
    seasonings: [
      { name: "老冰糖", amount: "45g" }
    ],
    steps: [
      { title: "绿豆瓣浸泡蒸透", detail: "脱皮绿豆洗净浸泡1小时，沥干水分铺在蒸笼中大火蒸15分钟至刚好开花粉糯但豆粒完整不烂。", timerSeconds: 900 },
      { title: "煮透亮清心丸", detail: "水沸下入清心丸小火煮5分钟至浮起且完全变成透明，捞出投入冰开水中浸泡，保持晶莹软糯Q弹。", timerSeconds: 300 },
      { title: "调糖水与轻勾琉璃芡", detail: "锅中烧开1000ml清水下入冰糖融化，倒入调匀的马蹄粉水边倒边快速搅拌，勾出如琉璃般清透微稠的薄芡。", timerSeconds: 180 },
      { title: "合煮出锅", detail: "下入蒸熟的绿豆瓣与Q弹清心丸，轻轻搅拌均匀，煮沸即关火，豆香扑鼻，口感滑嫩爽脆。", timerSeconds: 120 }
    ],
    tips: "脱皮绿豆切勿直接在汤里久煮，必须先隔水蒸至刚熟软糯，再入清芡糖水，绿豆粒粒金黄分明，吃起来才叫‘爽’！",
    tags: ["甜品", "潮汕特色", "清热润燥", "街头名小吃"]
  },
  {
    id: "rec_dessert_06",
    name: "冰糖川贝炖雪梨盅",
    subtitle: "整个雪梨掏空成玉盅，川贝母细粉配老冰糖隔水清炖，梨肉化汁，止咳化痰极品",
    calories: "110 kcal/盅",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["autumn", "winter"],
    cookTime: "40分钟",
    difficulty: "养生必修",
    image: photoMap["冰糖川贝炖雪梨盅"],
    photoUrl: photoMap["冰糖川贝炖雪梨盅"],
    ingredients: [
      { name: "特大黄冠梨/鸭梨", amount: "1个(约350g)" },
      { name: "川贝母研磨细粉", amount: "3g" },
      { name: "宁夏枸杞", amount: "5粒" }
    ],
    seasonings: [
      { name: "老黄冰糖", amount: "15g" }
    ],
    steps: [
      { title: "巧做雪梨盅", detail: "雪梨洗净，在顶部约1/4处横向切下一刀保留当盖子；用小勺小心挖去中间硬芯和果籽，形成一个小圆碗状梨盅。", timerSeconds: 300 },
      { title: "填入药膳糖料", detail: "将研磨好的3g川贝母细粉倒入梨盅底部，放入老黄冰糖和枸杞，注入约两调羹纯净水（不要太满，蒸时会出大量原汁）。", timerSeconds: 120 },
      { title: "盖顶隔水蒸透", detail: "将切下的雪梨顶部盖回，用牙签固定，放入深碗中（防止蒸制时溢出的珍贵梨汁流失）。", timerSeconds: 180 },
      { title: "隔水大火蒸熟", detail: "蒸锅水烧开，入蒸锅中大火蒸35分钟，至雪梨肉变得完全透明软烂，汤汁清亮回甘。", timerSeconds: 2100 }
    ],
    tips: "川贝母略带天然苦微回甘，用老黄冰糖与雪梨的原汁中和最为对味，一定要连梨盅析出的原汤和炖软的梨肉一起吃完。",
    tags: ["甜品", "川贝雪梨", "润肺止咳", "传统养生"]
  },

  // 2. 国民佐餐解腻与破壁热饮
  {
    id: "rec_dessert_07",
    name: "古法熬制冰镇酸梅汤",
    subtitle: "烟熏乌梅配北山楂、甘草陈皮与洛神花慢熬，撒一把江南干桂花，生津止渴火锅绝配",
    calories: "45 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "北京",
    season: ["summer", "autumn", "spring", "winter"],
    cookTime: "45分钟",
    difficulty: "新手友好",
    image: photoMap["古法熬制冰镇酸梅汤"],
    photoUrl: photoMap["古法熬制冰镇酸梅汤"],
    ingredients: [
      { name: "烟熏乌梅", amount: "35g" },
      { name: "干山楂片", amount: "25g" },
      { name: "洛神花(天然玫瑰红调色)", amount: "10朵" },
      { name: "新会陈皮", amount: "5g" },
      { name: "中药甘草", amount: "3g" },
      { name: "清水", amount: "1800ml" }
    ],
    seasonings: [
      { name: "老冰糖", amount: "80g" },
      { name: "干金桂花", amount: "2g" }
    ],
    steps: [
      { title: "草本浸泡洗尘", detail: "将乌梅、山楂、洛神花、陈皮和甘草装入纱布袋或直接用冷水快速冲洗一遍去浮灰，冷水浸泡20分钟唤醒果酸。", timerSeconds: 1200 },
      { title: "大火煮沸小火慢熬", detail: "倒入汤锅加入1800ml清水，大火煮沸后转微小火慢熬35分钟，汤汁逐渐转为深宝石红，果酸浓郁扑鼻。", timerSeconds: 2100 },
      { title: "加冰糖融化过滤", detail: "加入老黄冰糖搅拌至完全融化，关火用细筛网将所有药材渣过滤干净，得到清澈透亮的酸梅原汤。", timerSeconds: 300 },
      { title: "撒桂花冰镇饮用", detail: "趁热撒入干桂花激发香气，自然晾凉后放入冰箱冷藏4小时，加冰块饮用，酸甜沁爽，火锅烧烤解腻神器。", timerSeconds: 120 }
    ],
    tips: "加几朵洛神花（玫瑰茄）能熬出自然迷人的宝石红汤色；加入甘草能让酸甜之后泛起淡淡悠长的回甘。",
    tags: ["饮品", "解腻", "古法酸梅汤", "夏季冰饮"]
  },
  {
    id: "rec_dessert_08",
    name: "香浓破壁机鲜榨玉米汁",
    subtitle: "饭店五星同款配方，甜玉米粒加大米与醇牛奶打成金黄浓浆，丝滑不分层，香浓扑鼻",
    calories: "115 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "国民家常",
    season: ["autumn", "winter", "spring", "summer"],
    cookTime: "25分钟",
    difficulty: "零失败",
    image: photoMap["香浓破壁机鲜榨玉米汁"],
    photoUrl: photoMap["香浓破壁机鲜榨玉米汁"],
    ingredients: [
      { name: "新鲜金黄甜玉米(水果玉米)", amount: "1根(剥粒约200g)" },
      { name: "纯牛奶", amount: "200ml" },
      { name: "生大米/小米(防分层神器)", amount: "20g" },
      { name: "清水", amount: "600ml" }
    ],
    seasonings: [
      { name: "炼乳或白砂糖", amount: "15g" }
    ],
    steps: [
      { title: "剥玉米粒与淘洗大米", detail: "新鲜水果玉米洗净用刀贴紧玉米芯切下玉米粒；取20g生大米淘洗干净，大米中的支链淀粉是玉米汁顺滑不沉淀的秘密。", timerSeconds: 300 },
      { title: "破壁机投料加热", detail: "将玉米粒、大米和600ml清水倒入破壁机，选择豆浆或玉米汁功能，启动加热熬煮并高速打碎。", timerSeconds: 1200 },
      { title: "注入牛奶与炼乳提香", detail: "程序结束后，倒入200ml纯牛奶和15g炼乳（牛奶后放能保留奶香且不易糊底），再按点动清洗或果汁键搅拌30秒混合均匀。", timerSeconds: 60 },
      { title: "温热倒入玻璃壶", detail: "金黄温润的鲜榨玉米汁直接倒入公道壶中，质地如同天鹅绒般丝滑，香甜浓郁，老少皆爱。", timerSeconds: 60 }
    ],
    tips: "大米是饭店玉米汁‘浓稠不沉淀、不分层’的核心配方；纯牛奶一定要在加热煮好后再加入搅拌，奶香最为鲜纯。",
    tags: ["饮品", "破壁机热饮", "鲜榨玉米汁", "国民佐餐饮品"]
  },
  {
    id: "rec_dessert_09",
    name: "传统手工甜酒酿发酵米酒",
    subtitle: "传统圆糯米配苏州蜂窝酒曲自然发酵，出汁清澈如甘泉，米粒绵甜醇香，煮蛋做羹万能",
    calories: "160 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "江南",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "36小时发酵",
    difficulty: "传统工艺",
    image: photoMap["传统手工甜酒酿发酵米酒"],
    photoUrl: photoMap["传统手工甜酒酿发酵米酒"],
    ingredients: [
      { name: "优质圆糯米", amount: "500g" },
      { name: "安琪甜酒曲粉", amount: "2g" },
      { name: "凉白开/纯净水", amount: "200ml" }
    ],
    seasonings: [],
    steps: [
      { title: "糯米浸泡与蒸熟", detail: "糯米淘洗干净浸泡4-6小时至手指能轻易碾碎，蒸笼垫纱布大火蒸30分钟至熟透无硬芯。", timerSeconds: 1800 },
      { title: "降温与拌入酒曲", detail: "将蒸好的糯米摊凉至30℃左右（微温不烫手），撒入1.5g酒曲粉并淋入200ml凉白开轻轻拌散。", timerSeconds: 600 },
      { title: "装罐并搭窝窝", detail: "装入彻底无水无油的无菌玻璃罐或搪瓷盆中，中间用手戳一个小圆洞（方便观察出酒），在表面和洞内撒上剩余0.5g酒曲粉。", timerSeconds: 300 },
      { title: "恒温发酵出蜜汁", detail: "加盖密封放在28-32℃温暖处保温发酵30-36小时，窝中积满清澈香甜的天然蜜汁且散发浓郁酒香即发酵完成，移入冰箱冷藏中止发酵。", timerSeconds: 129600 }
    ],
    tips: "制作酒酿全程所有器皿和手必须做到‘绝对无生水、绝对无油脂’，温度控制在30℃左右，酒酿就会甜如蜜糖。",
    tags: ["甜品", "酒酿", "传统手工", "发酵食风"]
  },
  {
    id: "rec_dessert_10",
    name: "椰香紫米芋圆捞",
    subtitle: "浓香纯椰浆打底，软糯紫米饭团配手揉双色Q弹芋圆，奶香四溢，解馋轻食甜品",
    calories: "175 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "台式",
    season: ["summer", "autumn", "spring", "winter"],
    cookTime: "25分钟",
    difficulty: "新手友好",
    image: photoMap["椰香紫米芋圆捞"],
    photoUrl: photoMap["椰香紫米芋圆捞"],
    ingredients: [
      { name: "香糯墨江紫米", amount: "80g" },
      { name: "手揉双色木薯芋圆(紫薯/红薯)", amount: "100g" },
      { name: "特浓椰浆", amount: "150ml" },
      { name: "纯牛奶", amount: "100ml" }
    ],
    seasonings: [
      { name: "炼乳或蜂蜜", amount: "15g" }
    ],
    steps: [
      { title: "电饭煲煮香浓紫米", detail: "紫米洗净加水（水米比约1.3:1），按电饭煲杂粮饭键煮至软糯成团，趁热拌入少许炼乳捏成小球备用。", timerSeconds: 1800 },
      { title: "滚水煮Q弹芋圆", detail: "锅中烧大滚水下入芋圆，轻轻搅拌防粘底，煮至芋圆全部浮起膨胀，再煮2分钟捞出过冰水保持劲道Q弹。", timerSeconds: 300 },
      { title: "调配椰奶基底", detail: "将特浓椰浆、纯牛奶和少许炼乳在小碗中调匀，常温或冷藏均可。", timerSeconds: 120 },
      { title: "组装拼碗", detail: "碗中挖入一勺软糯紫米团，铺上一圈晶亮Q弹芋圆，顺着碗边缓缓倒入香浓椰奶基底即可开吃。", timerSeconds: 60 }
    ],
    tips: "芋圆煮好后一定要迅速浸入冰水‘激一下’，口感才会筋道回弹；紫米煮好后趁热加一点炼乳拌匀能黏结成光滑圆润的球状。",
    tags: ["甜品", "椰奶", "芋圆", "下午茶"]
  },
  {
    id: "rec_dessert_11",
    name: "广式传统白果腐竹薏米糖水",
    subtitle: "老西关传统名作，腐竹慢煨化成绵软豆浆乳汤，白果清苦回甜，薏米去湿润白",
    calories: "125 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["summer", "autumn", "spring"],
    cookTime: "35分钟",
    difficulty: "家常经典",
    image: photoMap["广式传统白果腐竹薏米糖水"],
    photoUrl: photoMap["广式传统白果腐竹薏米糖水"],
    ingredients: [
      { name: "精选头道油皮腐竹", amount: "50g" },
      { name: "去心鲜白果/银杏果", amount: "15粒" },
      { name: "贵州小薏米", amount: "40g" },
      { name: "清水", amount: "1000ml" }
    ],
    seasonings: [
      { name: "冰糖", amount: "40g" }
    ],
    steps: [
      { title: "薏米浸泡与白果去苦心", detail: "薏米洗净提前浸泡1小时；白果剥壳用温水剥去红薄皮，切开挑出中间带苦味的小胚芽芯。", timerSeconds: 3600 },
      { title: "薏米白果大火煲煮", detail: "汤锅加1000ml清水，放入薏米和白果，大火烧沸后转中小火煮20分钟至薏米微裂开。", timerSeconds: 1200 },
      { title: "下腐竹煮化成奶白豆香", detail: "油皮腐竹折小段下锅，继续用中火翻滚煮10-15分钟，腐竹会逐渐软化融解在汤中，让整锅糖水呈现诱人的豆乳白浆。", timerSeconds: 900 },
      { title: "入冰糖出锅", detail: "最后放入老冰糖煮至融化，亦可磕入一个鸡蛋做成白果腐竹糖心蛋花汤水，豆香扑鼻清润养颜。", timerSeconds: 180 }
    ],
    tips: "一定要买用来煲糖水的薄油皮腐竹，耐煮且容易融化成奶白色的浓豆浆状，白果一定要剔除内芯防止微毒和苦涩。",
    tags: ["甜品", "广式糖水", "去湿养颜", "老西关名点"]
  },
  {
    id: "rec_dessert_12",
    name: "港式香浓生磨核桃露",
    subtitle: "香港传统茶楼生磨甜汤，原粒新核桃配纯牛奶慢磨慢熬，坚果脂香浓郁丝滑挂喉",
    calories: "190 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "新手友好",
    image: photoMap["港式香浓生磨核桃露"],
    photoUrl: photoMap["港式香浓生磨核桃露"],
    ingredients: [
      { name: "优质原粒生核桃仁", amount: "80g" },
      { name: "纯牛奶", amount: "200ml" },
      { name: "大米/糯米(起稠顺滑)", amount: "25g" },
      { name: "纯净水", amount: "500ml" }
    ],
    seasonings: [
      { name: "黄冰糖", amount: "35g" }
    ],
    steps: [
      { title: "核桃微烤去涩", detail: "核桃仁放入空气炸锅或平底锅微烤3分钟出香，搓去部分苦涩的深色外衣。", timerSeconds: 180 },
      { title: "糯米浸泡润胀", detail: "25g糯米洗净浸泡1小时，与核桃同煮能带出丝绸般光润的流动性。", timerSeconds: 3600 },
      { title: "破壁机生磨浓浆", detail: "将烤香核桃仁、浸泡糯米和500ml清水倒入破壁机，开启米糊模式加热破壁，彻底打成浓郁无渣白浆。", timerSeconds: 1200 },
      { title: "加牛奶冰糖调和", detail: "打好后调入纯牛奶和黄冰糖搅拌均匀，醇香温热，坚果天然芳香直钻鼻腔。", timerSeconds: 120 }
    ],
    tips: "核桃稍微烘烤一下再打糊，香气翻倍且没有生涩感；加一把糯米能完全告别水水分离，浓郁挂壁。",
    tags: ["甜品", "核桃露", "港式甜品", "坚果热饮"]
  },

  // 3. 新中式与网红手调茶饮/咖啡
  {
    id: "rec_dessert_13",
    name: "鸭屎香暴打手槌香水柠檬茶",
    subtitle: "潮汕凤凰单丛乌龙茶底配广东香水柠檬，雪克杯暴力手槌捶出芳香精油，冰爽回甘霸道",
    calories: "55 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["summer", "spring", "autumn"],
    cookTime: "10分钟",
    difficulty: "零失败",
    image: photoMap["鸭屎香暴打手槌香水柠檬茶"],
    photoUrl: photoMap["鸭屎香暴打手槌香水柠檬茶"],
    ingredients: [
      { name: "广东香水柠檬", amount: "4-5厚片(约50g)" },
      { name: "潮汕鸭屎香单丛乌龙茶叶", amount: "8g(或现泡茶汤200ml)" },
      { name: "老冰块", amount: "250g" }
    ],
    seasonings: [
      { name: "纯果糖浆/蜂蜜", amount: "35ml" }
    ],
    steps: [
      { title: "冲泡鸭屎香茶汤", detail: "8g茶叶加250ml沸水加盖焖泡8分钟，滤出茶汤并迅速加入少许冰块‘激冷锁香’（降温可防止茶多酚氧化发涩）。", timerSeconds: 480 },
      { title: "暴打香水柠檬", detail: "香水柠檬洗净切厚片放入雪克杯底部，加入几块冰块，用压汁柠檬槌暴力反复捶打20-30次，充分榨出果汁并击破柠檬皮表面挥发油细胞。", timerSeconds: 60 },
      { title: "加糖加冰大摇", detail: "往雪克杯中注入200ml降温的鸭屎香茶汤、35ml果糖浆，并将冰块加至7分满。", timerSeconds: 30 },
      { title: "雪克杯极速摇晃", detail: "盖紧雪克杯盖子，双手快速上下剧烈摇晃20次至杯壁结满冰霜，倒入大玻璃杯中享用，香气霸道上头。", timerSeconds: 30 }
    ],
    tips: "必须用香水柠檬（皮薄香气像香水），不能用黄柠檬代替；暴打时加入冰块能更充分磨破柠檬表皮的芳香油，茶汤必须激冷防涩。",
    tags: ["饮品", "网红手打茶", "清凉解暑", "鸭屎香柠檬茶"]
  },
  {
    id: "rec_dessert_14",
    name: "生椰拿铁家庭简易版",
    subtitle: "经典顶流咖啡家庭极速复刻，菲诺厚椰乳醇正清甜，注入香浓现萃意式浓缩，分层绝美",
    calories: "140 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "国民家常",
    season: ["summer", "spring", "autumn", "winter"],
    cookTime: "5分钟",
    difficulty: "极简快手",
    image: photoMap["生椰拿铁家庭简易版"],
    photoUrl: photoMap["生椰拿铁家庭简易版"],
    ingredients: [
      { name: "菲诺原味厚椰乳", amount: "180ml" },
      { name: "浓缩咖啡液(胶囊/摩卡壶/冻干粉溶于35ml水)", amount: "35-40ml" },
      { name: "纯净冰块", amount: "大半杯(约150g)" }
    ],
    seasonings: [],
    steps: [
      { title: "准备冰块与厚椰乳", detail: "高透玻璃杯中加满纯净冰块，将冷藏好的180ml菲诺厚椰乳直接缓缓倒入杯中，约至七八分满。", timerSeconds: 30 },
      { title: "萃取意式浓缩", detail: "用咖啡机萃取一份意式浓缩Espresso（或用冻干黑咖啡粉以35ml温热水完全融化成浓咖啡液）。", timerSeconds: 60 },
      { title: "沿冰块注入做出分层", detail: "将热浓缩咖啡液顺着最顶层浮起的冰块表面缓缓淋下，液体因密度差形成上深黑、下乳白的绝美渐变分层。", timerSeconds: 30 },
      { title: "拍照后搅拌享用", detail: "拍照后用吸管充分上下搅拌均匀，入口满嘴椰香浓郁，紧接着是咖啡的微苦醇厚，层次感无敌。", timerSeconds: 30 }
    ],
    tips: "厚椰乳本身已有自然椰甜，完全无需另外加糖；淋咖啡时顺着冰块表面慢慢倒，就能轻松做出专业咖啡馆同款的分层效果。",
    tags: ["饮品", "特调咖啡", "生椰拿铁", "家庭自制"]
  },
  {
    id: "rec_dessert_15",
    name: "满杯红柚百香果四季春果茶",
    subtitle: "当季红西柚粒爆汁酸甜，鲜百香果芬芳，交融清幽四季春茶底，大容量冰爽满足",
    calories: "65 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "台式",
    season: ["summer", "autumn"],
    cookTime: "10分钟",
    difficulty: "新手友好",
    image: photoMap["满杯红柚百香果四季春果茶"],
    photoUrl: photoMap["满杯红柚百香果四季春果茶"],
    ingredients: [
      { name: "红心西柚", amount: "半个(取两片切片+果粒50g)" },
      { name: "新鲜百香果", amount: "1个" },
      { name: "四季春乌龙茶汤", amount: "200ml" },
      { name: "纯净冰块", amount: "180g" }
    ],
    seasonings: [
      { name: "蜂蜜或冰糖浆", amount: "30ml" }
    ],
    steps: [
      { title: "泡四季春茶汤", detail: "四季春茶包加220ml开水冲泡5分钟取出茶包，加入少许冰块降至冰凉备用。", timerSeconds: 300 },
      { title: "处理红柚与贴杯", detail: "切出两片整圆漂亮的红西柚贴紧在大玻璃杯内壁（颜值拉满）；剩余果肉剥出满满一小碗散开的红柚果粒。", timerSeconds: 180 },
      { title: "雪克杯摇匀果茶", detail: "在雪克杯中放入新鲜百香果原汁、剥散的红柚粒、30ml糖浆、适量冰块和200ml四季春茶汤，加盖快速摇匀出细腻泡沫。", timerSeconds: 60 },
      { title: "倒入贴壁杯享用", detail: "将摇好的冰果茶整杯倒入贴好红柚片的玻璃杯中，每一口都能吸到爆汁的西柚粒与百香果籽，酸爽开胃。", timerSeconds: 30 }
    ],
    tips: "红柚白皮部分有苦涩味，剥果肉时尽量只取饱满果粒；贴杯薄切能做出网红饮品店一模一样的视觉大片效果。",
    tags: ["饮品", "鲜果茶", "百香果红柚", "夏日冰爽"]
  },
  {
    id: "rec_dessert_16",
    name: "现熬黑糖波霸厚鲜奶",
    subtitle: "木薯珍珠现煮现焖软糯入芯，古法黑糖慢熬浓稠挂壁虎纹，注入冰纯鲜奶，冰火双重天",
    calories: "220 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "台式",
    season: ["winter", "autumn", "spring", "summer"],
    cookTime: "30分钟",
    difficulty: "人气招牌",
    image: photoMap["现熬黑糖波霸厚鲜奶"],
    photoUrl: photoMap["现熬黑糖波霸厚鲜奶"],
    ingredients: [
      { name: "纯木薯黑糖珍珠波霸", amount: "60g" },
      { name: "古法纯黑糖块/红糖", amount: "40g" },
      { name: "冷藏全脂纯鲜牛奶", amount: "220ml" },
      { name: "水", amount: "适量" }
    ],
    seasonings: [],
    steps: [
      { title: "大滚水煮透黑糖波霸", detail: "锅中烧大开水（水要多），下入珍珠搅拌防止黏底，大火沸水煮20分钟，关火后加盖焖20分钟至珍珠无白芯通体软糯。", timerSeconds: 2400 },
      { title: "黑糖慢熬挂浆成糖蜜", detail: "捞出珍珠沥干，换小奶锅下入40g黑糖与60ml清水煮沸融化，倒入煮好的珍珠，小火不停画圈搅拌熬煮5分钟，至黑糖汁变得浓稠拉丝呈糖浆状。", timerSeconds: 300 },
      { title: "转杯挂出霸气虎纹", detail: "将温热的黑糖珍珠连同浓稠黑糖浆舀入玻璃杯底部，倾斜杯身转动一圈，让黑糖浆沿杯壁自然流淌，挂出漂亮的虎皮纹理。", timerSeconds: 60 },
      { title: "注入冰鲜奶享用", detail: "加入几颗冰块，随后倒入冷藏全脂鲜牛奶，底部温热软Q黑糖珍珠与上层冰凉鲜奶形成绝妙的冰火交融口感。", timerSeconds: 30 }
    ],
    tips: "黑糖珍珠一定要‘大火煮透、关火焖足’，才会筋道软弹不夹生；黑糖浆必须熬到足够浓稠挂勺，倾斜杯子转动才能形成立体的虎纹挂壁。",
    tags: ["饮品", "脏脏茶", "黑糖波霸", "网红饮品"]
  },
  {
    id: "rec_dessert_17",
    name: "生打酪酪抹茶拿铁",
    subtitle: "特级宇治五十铃风味抹茶细致茶筅点茶，配冰纯牛奶与厚乳，翠绿如玉，甘醇微苦奶香漫溢",
    calories: "130 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "日韩料理",
    season: ["spring", "summer", "autumn"],
    cookTime: "8分钟",
    difficulty: "零失败",
    image: photoMap["生打酪酪抹茶拿铁"],
    photoUrl: photoMap["生打酪酪抹茶拿铁"],
    ingredients: [
      { name: "特级纯抹茶粉(无糖)", amount: "4g" },
      { name: "纯牛奶", amount: "160ml" },
      { name: "淡奶油/厚乳(增香奶盖层)", amount: "30ml" },
      { name: "温水(约65℃)", amount: "40ml" },
      { name: "纯净冰块", amount: "120g" }
    ],
    seasonings: [
      { name: "糖浆/炼乳", amount: "15g" }
    ],
    steps: [
      { title: "茶筅点茶打出抹茶泡沫", detail: "4g抹茶粉过筛入小茶碗中，注入40ml约65℃温水，用茶筅（或电动奶泡器）呈‘W’字形快速抽打1分钟，打出翠绿浓密细腻的茶沫。", timerSeconds: 60 },
      { title: "调制甜香牛奶底", detail: "在玻璃杯中倒入15g糖浆，注入160ml纯牛奶与30ml厚乳，搅拌均匀，加入满杯冰块。", timerSeconds: 60 },
      { title: "顺冰块淋入翠绿抹茶", detail: "将打散的抹茶浓液顺着最上层的冰块轻柔缓慢淋入，自然形成顶层碧绿透亮、底层雪白牛奶的治愈分层。", timerSeconds: 30 },
      { title: "搅拌饮用", detail: "用玻璃吸管顺时针轻搅，看翠绿与乳白如水墨画般交融，微苦解腻，奶香醇正回甘悠长。", timerSeconds: 30 }
    ],
    tips: "抹茶粉必须过细筛且水温不宜超过70℃，否则容易结块且发黄氧化；用茶筅快速抽打出浓密泡沫是抹茶香气四溢的秘诀。",
    tags: ["饮品", "抹茶拿铁", "治愈系", "下午茶特调"]
  },
  {
    id: "rec_dessert_18",
    name: "荔枝玫瑰乌龙冰茶",
    subtitle: "岭南妃子笑荔枝爆汁清甜，融入重瓣红玫瑰的浪漫花香，与冷萃高山乌龙茶回甘共舞",
    calories: "50 kcal/杯",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["summer", "spring"],
    cookTime: "8分钟",
    difficulty: "极简快手",
    image: photoMap["荔枝玫瑰乌龙冰茶"],
    photoUrl: photoMap["荔枝玫瑰乌龙冰茶"],
    ingredients: [
      { name: "新鲜多汁荔枝", amount: "5颗(去壳去核)" },
      { name: "高山乌龙冷萃茶汤", amount: "200ml" },
      { name: "天然食用可泡玫瑰花瓣", amount: "3朵" },
      { name: "冰块", amount: "适量" }
    ],
    seasonings: [
      { name: "天然蜂蜜", amount: "15ml" }
    ],
    steps: [
      { title: "冷萃乌龙茶", detail: "乌龙茶叶放冷开水放冰箱冷萃4小时滤出清澈回甘的高山乌龙冷萃茶汤。", timerSeconds: 14400 },
      { title: "轻压荔枝出汁保留果肉", detail: "雪克杯中放入剥好去核的荔枝果肉，用压棒稍微按压挤出大部分原汁，保留粗纤维果肉口感。", timerSeconds: 60 },
      { title: "加玫瑰与冷萃茶冰镇摇匀", detail: "加入15ml蜂蜜、几瓣玫瑰花瓣、大半杯冰块与200ml乌龙冷萃茶汤，加盖快速摇匀激发出花果香。", timerSeconds: 30 },
      { title: "盛杯插枝点缀", detail: "整杯倒入透明高脚杯，杯口点缀一颗晶莹荔枝与两片玫瑰花瓣，粉嫩晶莹，入口如清风拂面甘甜怡人。", timerSeconds: 30 }
    ],
    tips: "荔枝本身甜度高，只需加少许蜂蜜提味；冷萃乌龙茶无苦涩感，搭配荔枝的花果香气最为清新。",
    tags: ["饮品", "荔枝玫瑰", "冷萃茶", "仙女果茶"]
  },

  // 4. 江南金陵与宴席名点甜品
  {
    id: "rec_dessert_19",
    name: "金陵名小吃桂花糖芋苗",
    subtitle: "南京秦淮河畔传世名小吃，小芋艿煨至软糯粉润，藕粉勾出浓稠红亮芡汁，金桂飘香",
    calories: "150 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "江苏",
    season: ["autumn", "winter"],
    cookTime: "30分钟",
    difficulty: "地道名产",
    image: photoMap["金陵名小吃桂花糖芋苗"],
    photoUrl: photoMap["金陵名小吃桂花糖芋苗"],
    ingredients: [
      { name: "精选小芋艿/芋苗", amount: "250g" },
      { name: "纯正无糖红藕粉", amount: "25g(加40ml凉水化开)" },
      { name: "纯净水", amount: "700ml" }
    ],
    seasonings: [
      { name: "古法老红糖", amount: "40g" },
      { name: "糖渍江南金桂花", amount: "10g" },
      { name: "食用食用小苏打(红亮秘方)", amount: "1g(指甲盖微量)" }
    ],
    steps: [
      { title: "芋苗煮熟剥皮切块", detail: "新鲜小芋艿洗净入锅煮熟捞出剥去薄皮，改刀切成适口的小滚刀块。", timerSeconds: 900 },
      { title: "小苏打与红糖煮出玫瑰红", detail: "锅中加入700ml水、红糖和极其微量的小苏打（1g即可，这是南京老店芋苗汤色由黄转深红褐色的天然化学奥秘），下入芋苗小火慢炖15分钟让芋肉吸满甜香。", timerSeconds: 900 },
      { title: "浇淋藕粉浓芡", detail: "转微小火，将化开的红藕粉液顺着勺子边缓缓画圈淋入锅中，同时快速轻推锅底，汤汁瞬间变得通体红亮、润泽稠浓如蜜。", timerSeconds: 60 },
      { title: "撒金桂趁热盛碗", detail: "关火撒入糖桂花轻轻翻拌，趁热盛入青花瓷碗，芋苗入口即化，藕粉羹滑润无比，桂香浓郁扑鼻。", timerSeconds: 60 }
    ],
    tips: "加极其微量的小苏打是金陵百年老店让糖水与芋苗自然泛出艳丽红褐色泽的不传之秘；一定要用纯正藕粉勾芡，才会有晶莹拉丝的剔透感。",
    tags: ["甜品", "金陵小吃", "糖芋苗", "非遗风味"]
  },
  {
    id: "rec_dessert_20",
    name: "南京传统赤豆酒酿小元宵",
    subtitle: "江南老巷子里的温暖记忆，红小豆慢煨起沙拉沙，甜酒酿幽香微醺，手搓小糯米圆子软糯弹牙",
    calories: "165 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "江苏",
    season: ["winter", "autumn", "spring"],
    cookTime: "40分钟",
    difficulty: "家常经典",
    image: photoMap["南京传统赤豆酒酿小元宵"],
    photoUrl: photoMap["南京传统赤豆酒酿小元宵"],
    ingredients: [
      { name: "精选红小豆", amount: "120g" },
      { name: "手搓无馅小元宵/小圆子", amount: "80g" },
      { name: "自制甜酒酿", amount: "60g" },
      { name: "纯藕粉/淀粉", amount: "15g(调薄芡)" },
      { name: "清水", amount: "1000ml" }
    ],
    seasonings: [
      { name: "老冰糖/红糖", amount: "45g" },
      { name: "糖桂花", amount: "5g" }
    ],
    steps: [
      { title: "红豆浸泡与慢熬起沙", detail: "红豆洗净提前浸泡半天，倒入汤锅加入1000ml水大火烧开，转微小火慢炖35分钟，用勺背贴锅压烂大半红豆令其‘起沙出稠’。", timerSeconds: 2100 },
      { title: "下小元宵煮浮起", detail: "下入老冰糖融化，倒入白嫩小元宵，中小火煮约3-4分钟至小圆子圆滚滚全部浮在红豆沙表面。", timerSeconds: 240 },
      { title: "淋藕粉芡拉丝", detail: "将15g藕粉调水化开，细流淋入锅中快速推匀，让红豆沙汤体变身为浓稠顺滑的镜面光泽。", timerSeconds: 60 },
      { title: "入酒酿糖桂花出锅", detail: "最后下入甜酒酿拌匀关火（酒酿切忌久煮，久煮香气散失且发酸），盛碗撒一把糖桂花，香甜扑鼻暖入心脾。", timerSeconds: 60 }
    ],
    tips: "酒酿一定要在最后关火前一刻放入，保留其天然酵香与甘甜；用少许藕粉勾薄芡能让红豆沙包裹住小元宵，口口滑爽。",
    tags: ["甜品", "赤豆小元宵", "金陵特色", "温暖糖水"]
  },
  {
    id: "rec_dessert_21",
    name: "老北京传统杏仁豆腐",
    subtitle: "宫廷消暑名点，甜南杏仁配苦北杏仁生磨成浆，琼脂微凝白如凝脂，冰镇淋糖桂花如玉石晶莹",
    calories: "90 kcal/碗",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "北京",
    season: ["summer", "spring"],
    cookTime: "20分钟(冷藏2小时)",
    difficulty: "名宴雅点",
    image: photoMap["老北京传统杏仁豆腐"],
    photoUrl: photoMap["老北京传统杏仁豆腐"],
    ingredients: [
      { name: "甜杏仁(南杏)", amount: "40g" },
      { name: "苦杏仁(北杏，提天然浓香)", amount: "5g" },
      { name: "纯牛奶", amount: "200ml" },
      { name: "食用琼脂条/吉利丁片", amount: "6g(琼脂口感更传统爽脆)" },
      { name: "清水", amount: "350ml" }
    ],
    seasonings: [
      { name: "糖桂花蜜", amount: "20g" },
      { name: "细砂糖", amount: "30g" }
    ],
    steps: [
      { title: "南北杏仁浸泡破壁", detail: "南杏仁与北杏仁温水浸泡2小时剥去外皮，加入200ml清水放入破壁机打成细腻杏仁原浆，用双层纱布过滤去渣留下香浓纯浆。", timerSeconds: 7200 },
      { title: "琼脂软化慢熬溶解", detail: "琼脂条温水泡软，锅中加150ml水与30g白糖小火煮至琼脂完全化为无颗粒的透明胶液。", timerSeconds: 300 },
      { title: "混合杏仁浆与牛奶", detail: "将滤出的杏仁纯浆与200ml纯牛奶倒入温热的琼脂液中搅拌均匀，保持微沸即可关火，倒入平底方形容器中。", timerSeconds: 120 },
      { title: "凝固切菱形块淋蜜", detail: "自然放凉后入冰箱冷藏2小时凝固成白玉豆腐，用小刀在盒中划出整齐的菱形块，倒扣入碗，淋上冰镇糖桂花蜜或什锦水果即成。", timerSeconds: 7200 }
    ],
    tips: "南杏甜、北杏香，配比8:1是北京老字号既有浓烈杏仁幽香又无过浓苦味的黄金配比；用琼脂做出的口感爽脆如冻，比吉利丁更具老传统韵味。",
    tags: ["甜品", "老北京名点", "清凉消暑", "宫廷雅点"]
  },
  {
    id: "rec_dessert_22",
    name: "北京传统拔丝苹果",
    subtitle: "国宴北方宴席压轴甜菜，苹果挂蛋糊炸出金黄脆壳，白糖炒出琥珀琉璃丝，金丝万缕甜脆爆汁",
    calories: "210 kcal/份",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "北京",
    season: ["winter", "autumn", "spring"],
    cookTime: "25分钟",
    difficulty: "控火功夫",
    image: photoMap["北京传统拔丝苹果"],
    photoUrl: photoMap["北京传统拔丝苹果"],
    ingredients: [
      { name: "脆甜红富士苹果", amount: "2个(约350g)" },
      { name: "干玉米淀粉", amount: "60g" },
      { name: "鸡蛋清", amount: "1个" },
      { name: "清水", amount: "少许" },
      { name: "熟白芝麻", amount: "少许" }
    ],
    seasonings: [
      { name: "绵白糖/白砂糖", amount: "100g" },
      { name: "食用油", amount: "30ml(炒糖油拔法)" }
    ],
    steps: [
      { title: "苹果切块裹干粉挂糊", detail: "苹果削皮去核切成滚刀块，先薄薄撒一层干淀粉抓匀防脱浆；再用淀粉、蛋清和少许水调成浓稠如酸奶状的面糊，将苹果块均匀裹上。", timerSeconds: 300 },
      { title: "温油炸至金黄酥脆", detail: "锅中热油至六成热（约170℃），逐块下入苹果炸至外壳定型淡黄捞出；升高油温至八成热复炸30秒至金黄硬脆捞出沥油。", timerSeconds: 300 },
      { title: "小火炒糖至琥珀色", detail: "锅留底油下入100g白糖，小火不停画圈慢铲，观察糖经历‘白沙粒→融化起大泡→转细密小泡→泛琥珀金黄色’，闻到浓郁焦糖香迅速离火。", timerSeconds: 240 },
      { title: "下苹果极速颠翻拉丝", detail: "立即倒下炸脆的苹果块和少许熟白芝麻，快速颠翻颠锅让糖汁均匀包裹苹果，出锅装盘配一碗凉开水上桌，夹起拉出一米金丝。", timerSeconds: 60 }
    ],
    tips: "看糖色的功夫：由大泡转细泡且颜色一转浅琥珀色就要立即下苹果，慢两秒糖就发黑发苦；盘底抹薄薄一层熟油可以防止糖丝粘盘难洗。",
    tags: ["甜品", "拔丝名菜", "宴席甜菜", "传统名菜"]
  },
  {
    id: "rec_dessert_23",
    name: "传统广式茶楼红糖马拉糕",
    subtitle: "广府早茶四大天王之一，红糖醇厚浓香，三层蓬松微孔如海绵云朵，弹性十足回味悠长",
    calories: "175 kcal/块",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "30分钟",
    difficulty: "家常必学",
    image: photoMap["传统广式茶楼红糖马拉糕"],
    photoUrl: photoMap["传统广式茶楼红糖马拉糕"],
    ingredients: [
      { name: "低筋面粉", amount: "120g" },
      { name: "优质木薯淀粉(增添Q弹)", amount: "40g" },
      { name: "新鲜鸡蛋", amount: "3个" },
      { name: "耐高糖无铝泡打粉", amount: "4g" },
      { name: "玉米油/无味植物油", amount: "25g" }
    ],
    seasonings: [
      { name: "古法红糖", amount: "70g(加60ml温水化开)" }
    ],
    steps: [
      { title: "红糖温水融化冷却", detail: "70g古法红糖用60ml温开水搅拌彻底化开，过滤去杂质冷却至常温。", timerSeconds: 300 },
      { title: "全蛋打发至画字不消", detail: "打蛋盆打入3个鸡蛋，分次倒入红糖水，用电动打蛋器高速打发4-5分钟，至蛋糊膨胀发白、提起打蛋头画‘8’字几秒内不消失。", timerSeconds: 300 },
      { title: "筛入双粉切拌加油", detail: "筛入低筋面粉、木薯淀粉与泡打粉，用刮刀轻柔快速翻拌均匀无干粉，最后顺盆边淋入25g玉米油翻拌乳化。", timerSeconds: 120 },
      { title: "大火沸水蒸透出微孔", detail: "模具刷薄油垫油纸，倒入面糊震出大气泡；蒸锅水大火烧滚开，上汽后放入模具加盖，全程大火蒸25分钟，关火焖3分钟出锅切菱形块。", timerSeconds: 1680 }
    ],
    tips: "加木薯淀粉是茶楼马拉糕‘松软中带有Q弹嚼劲’的核心；蒸的时候水一定要烧大开、锅盖不要滴落水汽，内部微孔才会均匀如海绵。",
    tags: ["甜品", "广式早茶", "茶点", "松软糕点"]
  },
  {
    id: "rec_dessert_24",
    name: "自制江南桂花定胜糕",
    subtitle: "江南水乡传统祈福吉庆名点，红曲粉染出娇艳淡粉，松软细腻入口化沙，藏一缕豆沙桂香",
    calories: "140 kcal/块",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "浙江",
    season: ["spring", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "传统江南点心",
    image: photoMap["自制江南桂花定胜糕"],
    photoUrl: photoMap["自制江南桂花定胜糕"],
    ingredients: [
      { name: "籼米粉(大米粉)", amount: "100g" },
      { name: "水磨糯米粉", amount: "50g" },
      { name: "天然红曲粉(天然粉色染料)", amount: "1g" },
      { name: "细腻红豆沙馅", amount: "60g" },
      { name: "凉开水", amount: "65ml" }
    ],
    seasonings: [
      { name: "糖桂花", amount: "10g" },
      { name: "细白砂糖", amount: "25g" }
    ],
    steps: [
      { title: "混合米粉与搓粉出粗砂状", detail: "将大米粉、糯米粉、红曲粉和白糖在大盆中拌匀，分次极慢淋入65ml水，用双手掌心反复搓揉成手捏成团、一碰即散的湿粗沙状。", timerSeconds: 300 },
      { title: "粗网过筛获得松软糕粉", detail: "将湿粉放入粗眼筛网中，用手轻擦过筛出蓬松细腻如雪花的定胜糕粉（绝不能用手压实，蓬松透气是蒸熟后松软的关键）。", timerSeconds: 300 },
      { title: "入模分层夹入豆沙", detail: "在定胜模具（或方形模具）底部轻铺半层糕粉，中间放入搓成薄条的红豆沙和少许糖桂花，再轻柔覆上糕粉填平，用刮板轻轻刮平表面。", timerSeconds: 180 },
      { title: "大火足汽蒸透", detail: "蒸锅水大火烧沸腾，放入定胜糕，大火足汽蒸15分钟至熟透脱模，香气四溢，淡粉喜庆。", timerSeconds: 900 }
    ],
    tips: "定胜糕的松软秘籍是‘只能筛入，绝对不能用力按压’，米粉之间保留空气缝隙，高温蒸汽才能穿透将其迅速熟化，绵软化渣。",
    tags: ["甜品", "江南名点", "定胜糕", "传统手工点心"]
  },

  // 5. 治愈系免烤/快手西式烘焙小点
  {
    id: "rec_dessert_25",
    name: "空气炸锅巴斯克焦香芝士蛋糕",
    subtitle: "烘焙新手零翻车天花板，焦黑外皮伴随浓郁焦糖奶香，内芯半熟流心极度顺滑丝密",
    calories: "260 kcal/块",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "西餐经典",
    season: ["winter", "autumn", "spring", "summer"],
    cookTime: "25分钟(冷藏4小时)",
    difficulty: "零翻车",
    image: photoMap["空气炸锅巴斯克焦香芝士蛋糕"],
    photoUrl: photoMap["空气炸锅巴斯克焦香芝士蛋糕"],
    ingredients: [
      { name: "奶油芝士(奶油奶酪Cream Cheese)", amount: "250g(提前室温软化)" },
      { name: "动物淡奶油", amount: "120g" },
      { name: "全蛋", amount: "2个" },
      { name: "蛋黄", amount: "1个" },
      { name: "玉米淀粉/低筋面粉", amount: "8g" }
    ],
    seasonings: [
      { name: "细砂糖", amount: "45g" },
      { name: "天然香草精或柠檬汁", amount: "数滴" }
    ],
    steps: [
      { title: "软化芝士拌糖至顺滑", detail: "室温软化透的奶油芝士加入45g细砂糖，用蛋抽顺时针划圈搅打至无颗粒、如丝缎般柔滑。", timerSeconds: 180 },
      { title: "分次加入蛋液乳化", detail: "2个全蛋和1个蛋黄打散，分3次缓缓倒入芝士糊中，每次充分搅匀乳化后再加下一次，滴入数滴香草精增香。", timerSeconds: 180 },
      { title: "倒淡奶油与筛入淀粉", detail: "倒入120g淡奶油搅匀，筛入8g玉米淀粉轻柔拌至完全无干粉，将整盆面糊过细筛一次确保极度细腻。", timerSeconds: 120 },
      { title: "空气炸锅高温烘烤", detail: "6寸圆形模具内铺一张揉皱的硅油纸（自然褶皱美感），倒入面糊震出大气泡。空气炸锅预热后，以190℃烤22-25分钟，至表面形成深琥珀焦黑色，轻晃内部仍有DuangDuang微颤感，取出冷藏4小时以上切块享用。", timerSeconds: 1500 }
    ],
    tips: "巴斯克的精髓就是‘故意烤焦的高温美拉德反应’，表面深焦黑色带来类似焦糖布丁的香浓风味；烤完出炉一定要冷藏数小时，冰透后口感犹如冰淇淋般顺滑绵密。",
    tags: ["甜品", "巴斯克", "芝士蛋糕", "空气炸锅快手"]
  },
  {
    id: "rec_dessert_26",
    name: "平底锅云朵舒芙蕾松饼",
    subtitle: "无需烤箱，平底锅即刻复刻网红咖啡厅爆款，如云朵般轻盈蓬松，入口即化满满蛋香",
    calories: "160 kcal/份",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "日韩料理",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "控温必学",
    image: photoMap["平底锅云朵舒芙蕾松饼"],
    photoUrl: photoMap["平底锅云朵舒芙蕾松饼"],
    ingredients: [
      { name: "新鲜鸡蛋", amount: "2个(蛋黄蛋白精准分离)" },
      { name: "纯牛奶", amount: "20ml" },
      { name: "低筋面粉", amount: "30g" },
      { name: "柠檬汁/白醋", amount: "3滴" }
    ],
    seasonings: [
      { name: "细砂糖", amount: "20g" },
      { name: "黄油(抹锅)", amount: "3g" },
      { name: "糖粉/枫糖浆/黄油块(装饰)", amount: "适量" }
    ],
    steps: [
      { title: "蛋黄糊调和", detail: "2个蛋黄加20ml牛奶用蛋抽搅匀，筛入30g低筋面粉划‘Z’字拌匀成无干粉的细腻顺滑蛋黄糊。", timerSeconds: 120 },
      { title: "打发蛋白霜至坚挺尖角", detail: "无水无油盆中加入2个蛋白和3滴柠檬汁，分三次加入20g细砂糖，用电动打蛋器高速打发至提起打蛋头呈短小直立的坚挺小尖角（干性发泡状态）。", timerSeconds: 240 },
      { title: "分次切拌混合", detail: "分1/3蛋白霜入蛋黄糊切拌均匀，再倒回剩余蛋白霜中，用刮刀像炒菜一样轻柔快速翻拌均匀，动作要快防止消泡。", timerSeconds: 60 },
      { title: "平底锅微火滴水加盖焖熟", detail: "不粘锅抹极薄一层黄油，极微火加热，用冰淇淋勺挖两团面糊落入锅中，加一勺水在空隙处加盖焖2分钟；开盖再往上面各落一勺面糊增加厚度，再滴一勺水盖焖3分钟，翻面继续滴水盖焖3分钟即可出锅，筛糖粉淋枫糖浆，摇曳如云朵。", timerSeconds: 480 }
    ],
    tips: "舒芙蕾蓬松立体的两大核心：一是蛋白霜必须打到硬挺不弯钩的干性发泡，二是平底锅必须全程极微火，利用少许水汽加盖蒸汽焖熟。",
    tags: ["甜品", "舒芙蕾", "平底锅甜点", "网红早午餐"]
  },
  {
    id: "rec_dessert_27",
    name: "港式冰凉芒果班戟",
    subtitle: "香港甜品殿堂级代表作，金黄如蝉翼的班戟皮裹挟轻柔动物淡奶油与大块厚切甜芒，冰爽过瘾",
    calories: "190 kcal/个",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "广东",
    season: ["summer", "spring", "autumn"],
    cookTime: "25分钟",
    difficulty: "新手友好",
    image: photoMap["港式冰凉芒果班戟"],
    photoUrl: photoMap["港式冰凉芒果班戟"],
    ingredients: [
      { name: "熟透香甜大芒果(水仙芒/台农)", amount: "1大个(切厚长方条)" },
      { name: "动物淡奶油", amount: "200ml" },
      { name: "低筋面粉", amount: "50g" },
      { name: "纯牛奶", amount: "120ml" },
      { name: "鸡蛋", amount: "1个" },
      { name: "融化黄油", amount: "15g" }
    ],
    seasonings: [
      { name: "细砂糖(调饼皮与奶油)", amount: "30g" }
    ],
    steps: [
      { title: "调班戟面糊并过筛", detail: "鸡蛋加15g白糖打散，注入120ml牛奶搅匀，筛入低筋面粉搅拌，淋入15g融化液态黄油彻底拌匀，用滤网过筛两次获得极度无杂质的细腻面浆。", timerSeconds: 240 },
      { title: "不粘锅单面煎薄皮", detail: "平底不粘锅微温离火，舀入一勺面糊快速转动锅子摊成薄圆饼，小火煎至表面鼓起微小气泡即可倒扣在油纸上晾凉（只煎一面，无需翻面）。", timerSeconds: 300 },
      { title: "打发硬挺淡奶油", detail: "200ml冰冷淡奶油加入15g细砂糖，电动打蛋器高速打发至花纹清晰坚挺、倒扣不滑落的硬挺状态。", timerSeconds: 180 },
      { title: "包入奶油芒果折叠", detail: "班戟皮光滑朝下，中间抹上一大坨淡奶油，放上一大块厚切多汁芒果肉，表面再盖一层奶油，将班戟皮四边向内折叠包裹成方形小枕头，冷藏30分钟切开即食。", timerSeconds: 180 }
    ],
    tips: "煎班戟皮一定要锅温微凉时倒浆转匀再放火上，只需煎单面至表层受热凝固，皮质柔韧金黄且不会发干发硬。",
    tags: ["甜品", "港式班戟", "芒果甜点", "经典名点"]
  },
  {
    id: "rec_dessert_28",
    name: "软糯拉丝芒果雪媚娘",
    subtitle: "纯手工手揉糯米大福皮，冰冰凉凉拉丝不发硬，奶香细腻与新鲜芒果丁爆汁相融",
    calories: "160 kcal/个",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "日韩料理",
    season: ["summer", "autumn", "spring", "winter"],
    cookTime: "30分钟",
    difficulty: "家庭手作",
    image: photoMap["软糯拉丝芒果雪媚娘"],
    photoUrl: photoMap["软糯拉丝芒果雪媚娘"],
    ingredients: [
      { name: "水磨糯米粉", amount: "100g" },
      { name: "玉米淀粉(防止过黏)", amount: "30g" },
      { name: "纯牛奶", amount: "170ml" },
      { name: "无盐黄油", amount: "20g" },
      { name: "动物淡奶油", amount: "200ml" },
      { name: "新鲜多汁芒果", amount: "1个(切丁)" }
    ],
    seasonings: [
      { name: "细砂糖", amount: "40g" },
      { name: "熟糯米粉(手粉防粘)", amount: "25g(干锅小火炒至微黄熟透)" }
    ],
    steps: [
      { title: "调配麻薯糊并蒸透", detail: "糯米粉、玉米淀粉、30g糖与牛奶在大碗中搅拌均匀无干粉，包保鲜膜扎几个小孔，上汽大火蒸20分钟至面糊完全凝固无生浆。", timerSeconds: 1200 },
      { title: "趁热揉入黄油拉丝", detail: "蒸熟的麻薯趁温热下入20g软化黄油，戴上防粘PVC手套，像洗衣服一样反复揉捏拉扯5分钟，将黄油彻底吃进面团，直至面团能拉出半透明薄膜韧皮。", timerSeconds: 300 },
      { title: "打发淡奶油切芒果", detail: "淡奶油加10g糖打发至坚硬定型；芒果剥皮切成果肉小丁。", timerSeconds: 180 },
      { title: "分剂擀薄皮包裹组装", detail: "撒少许熟糯米粉防粘，将麻薯团均分成6-8等份，擀成中间稍厚边缘薄的圆形薄皮，放入半圆小模具中，挤一层奶油、放一把芒果丁、再盖一层奶油，收拢四边捏紧掐死收口，倒扣在纸托上冷藏冰凉享用。", timerSeconds: 300 }
    ],
    tips: "刚蒸好的麻薯必须趁热揉入黄油且‘充分拉扯揉透’，淀粉分子重新排列，做好的雪媚娘即使冷藏两天依然软糯拉丝不发硬。",
    tags: ["甜品", "雪媚娘", "大福", "手工甜点"]
  },
  {
    id: "rec_dessert_29",
    name: "经典葡式焦糖蛋挞",
    subtitle: "千层酥脆起酥皮包覆醇香蛋挞水，高温烘烤出诱人的焦糖黑斑与嫩滑如布丁般的内芯",
    calories: "170 kcal/个",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "港澳台",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "零翻车",
    image: photoMap["经典葡式焦糖蛋挞"],
    photoUrl: photoMap["经典葡式焦糖蛋挞"],
    ingredients: [
      { name: "现成千层葡挞皮", amount: "8-10个" },
      { name: "纯牛奶", amount: "80ml" },
      { name: "动物淡奶油", amount: "100ml" },
      { name: "新鲜蛋黄", amount: "2个" },
      { name: "炼乳(增香防腥)", amount: "10g" }
    ],
    seasonings: [
      { name: "细砂糖", amount: "25g" }
    ],
    steps: [
      { title: "调配焦糖蛋挞水", detail: "小碗中倒入纯牛奶、淡奶油、25g细砂糖和10g炼乳，温水隔水加热或微波炉打10秒搅拌至糖彻底融化，冷却至室温。", timerSeconds: 120 },
      { title: "加入蛋黄过筛去筋", detail: "打入2个蛋黄，用打蛋网轻轻搅拌均匀（不要打出过多气泡），用细筛网将蛋挞水过筛两次，滤掉未打散的蛋筋和浮沫。", timerSeconds: 120 },
      { title: "注挞水入酥皮", detail: "烤盘铺油纸摆好8-10个冷冻葡挞皮（无需提前解冻），将蛋挞水缓缓倒入挞皮中，倒约八分满即可（烤时会膨胀）。", timerSeconds: 60 },
      { title: "高温烘烤出焦糖黑斑", detail: "烤箱或空气炸锅预热至200℃，放入蛋挞烘烤20-22分钟，观察挞皮起层酥化，蛋挞芯隆起且表面形成漂亮的焦糖小黑斑即可出炉，趁热外酥里嫩奶香四溢。", timerSeconds: 1320 }
    ],
    tips: "蛋挞水必须过筛两次，烤出来的挞芯才会像布丁一样毫无蜂窝、滑嫩如脂；一定要用高温（200℃）烘烤，才能形成地道的葡式焦斑。",
    tags: ["甜品", "葡式蛋挞", "下午茶点心", "烤箱炸锅必备"]
  },
  {
    id: "rec_dessert_30",
    name: "法式焦糖苹果派",
    subtitle: "平底锅快手免开酥苹果派，焦糖黄油炖肉桂甜苹果，外壳金黄酥脆内馅滚烫酸甜回甘",
    calories: "185 kcal/份",
    categoryType: "dessert",
    cuisineCategory: "甜品沙拉",
    region: "西餐经典",
    season: ["autumn", "winter"],
    cookTime: "20分钟",
    difficulty: "极简快手",
    image: photoMap["法式焦糖苹果派"],
    photoUrl: photoMap["法式焦糖苹果派"],
    ingredients: [
      { name: "红富士苹果", amount: "1个(切细丁)" },
      { name: "手抓饼皮/蛋挞皮(免揉面酥皮)", amount: "2张" },
      { name: "动物黄油", amount: "15g" },
      { name: "天然肉桂粉(提灵魂香气)", amount: "1g" },
      { name: "鸡蛋液(刷表面上色)", amount: "1勺" }
    ],
    seasonings: [
      { name: "细砂糖/红糖", amount: "25g" },
      { name: "柠檬汁", amount: "半小勺" },
      { name: "水淀粉(薄芡锁汁)", amount: "1勺" }
    ],
    steps: [
      { title: "黄油焦糖炒苹果肉桂馅", detail: "平底锅融化15g黄油，下入苹果细丁和25g糖中火翻炒出汁，淋少许柠檬汁和1g肉桂粉翻炒3分钟至苹果透明软化，淋入水淀粉收汁至浓稠抱团，盛出晾凉。", timerSeconds: 300 },
      { title: "包馅折叠与叉子压边", detail: "解冻微软的手抓饼对半切开，中间填上满满焦糖苹果馅，边缘刷少许蛋液对折封口，用叉子齿在边缘用力按压出一圈漂亮的花纹锁死封口。", timerSeconds: 180 },
      { title: "表面划刀与刷蛋黄液", detail: "在苹果派表面用小刀轻轻划三道透气小口（防止烘烤膨胀破裂），表面均匀刷上一层金黄纯蛋黄液，撒几粒白芝麻。", timerSeconds: 60 },
      { title: "煎烤至两面金黄起酥", detail: "放入空气炸锅180℃烤12-15分钟（或平底锅不放油微小火加盖两面慢煎8分钟），至饼皮起层金黄酥脆，趁热咬开肉桂焦糖苹果爆浆，浓香四溢。", timerSeconds: 800 }
    ],
    tips: "用手抓饼皮做苹果派省去繁琐开酥过程，层层酥脆掉渣；苹果馅一定要炒浓稠收汁再包，否则烘烤时容易漏汤破皮。",
    tags: ["甜品", "苹果派", "焦糖肉桂", "快手烘焙"]
  }
];

function updateFile(filePath) {
  const fullPath = path.resolve(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // 1. Fix rec_sz_08 万能油醋汁彩椒鸡胸肉沙拉 so it doesn't pollute desserts
  content = content.replace(
    /("id":\s*"rec_sz_08"[\s\S]*?"cuisineCategory":\s*)"甜品沙拉"/,
    '$1"减脂轻食"'
  );
  content = content.replace(
    /("id":\s*"rec_sz_08"[\s\S]*?"categoryType":\s*)"dessert"/,
    '$1"fatloss"'
  );

  // 2. Append new dessert recipes before closing bracket
  const lastBracketIndex = content.lastIndexOf('];');
  if (lastBracketIndex === -1) {
    throw new Error('Could not find closing bracket ]; in ' + filePath);
  }

  const before = content.slice(0, lastBracketIndex).trimEnd();
  const needsComma = !before.endsWith(',');
  const newEntriesJson = newDessertRecipes.map(r => JSON.stringify(r, null, 2)).join(',\n');
  
  const updated = before + (needsComma ? ',\n' : '\n') + newEntriesJson + '\n];\n';
  fs.writeFileSync(fullPath, updated, 'utf8');
  console.log(`Updated ${fullPath}: Appended 30 dessert recipes.`);
}

updateFile('../js/data/recipes.js');
updateFile('../android_build/assets/js/data/recipes.js');
