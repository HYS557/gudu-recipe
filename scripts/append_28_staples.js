const fs = require('fs');
const path = require('path');

const photos = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_staple_photos.json'), 'utf8'));
const photoMap = {};
photos.forEach(p => {
  photoMap[p.dishName] = p.photoUrl;
});

const newStapleRecipes = [
  // 1. 华夏面条大观（南北名面 10道）
  {
    id: "rec_staple_01",
    name: "新疆正宗过油肉拌面",
    subtitle: "大西北面食灵魂图腾，纯手工拉条子筋道透亮，嫩羊肉片洋葱番茄猛火过油爆炒，油润浓香裹满长面",
    calories: "520 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "新疆",
    cookingMethod: "拉条手拉爆炒",
    season: ["autumn", "winter", "spring", "summer"],
    cookTime: "30分钟",
    difficulty: "经典必学",
    image: photoMap["新疆正宗过油肉拌面"],
    photoUrl: photoMap["新疆正宗过油肉拌面"],
    ingredients: [
      { name: "高筋面粉", amount: "300g(淡盐水和面醒发)" },
      { name: "鲜嫩羊后腿肉/牛里脊", amount: "180g(切薄片)" },
      { name: "皮芽子(紫洋葱)", amount: "半个(切块)" },
      { name: "青红线椒", amount: "各2根(切斜段)" },
      { name: "熟透多汁大番茄", amount: "1个(切块出沙)" },
      { name: "大蒜切碎", amount: "20g" }
    ],
    seasonings: [
      { name: "特级生抽", amount: "20ml" },
      { name: "番茄酱", amount: "15g" },
      { name: "新疆孜然粉", amount: "5g" },
      { name: "花椒粉与白糖", amount: "各2g" },
      { name: "清油(菜籽油)", amount: "40ml" }
    ],
    steps: [
      { title: "盐水和面盘条刷油", detail: "面粉加150ml淡盐水揉成稍软光滑面团，醒面30分钟；搓成拇指粗的长面条，盘入大平盘中表面刷满厚厚一层清油，加盖继续松弛醒发1小时。", timerSeconds: 3600 },
      { title: "羊肉上浆温油滑熟", detail: "羊肉薄片加生抽、胡椒粉、少许蛋清和生粉抓匀上浆；热锅宽油，四成油温下羊肉片快速滑散至变色八成熟（过油肉关键），捞出沥油。", timerSeconds: 120 },
      { title: "爆炒皮芽子番茄红油菜头", detail: "锅留底油爆香蒜末，下皮芽子、青红椒块大火爆炒，倒入番茄块与番茄酱煸炒出红亮酸甜浓汁，倒入滑好的羊肉片，撒孜然粉大火翻炒入味关火。", timerSeconds: 180 },
      { title: "两手缠面摔打拉条下锅", detail: "将醒透的面条缠绕在两手手腕上，在案板上边摔打边向两侧缓缓拉伸出粗细均匀的圆润长拉条，下入大沸水锅煮2分钟捞出沥水过温凉开水，浇上满满一层过油肉拌匀，吸溜入口麦香肉浓。", timerSeconds: 180 }
    ],
    tips: "拉条子不拉断的秘诀全在‘充分刷油醒发’，面团松弛到位自然延展延绵不绝；过油肉要猛火快炒出番茄红汁，拌在面条上油润挂汁。",
    tags: ["主食", "面食", "新疆拌面", "过油肉", "碳水炸弹"]
  },
  {
    id: "rec_staple_02",
    name: "陕西油泼大宽BiangBiang面",
    subtitle: "三指宽如裤带纯手工扯面，摔打案板BiangBiang作响，滚烫热油激泼秦椒辣子，香飘十里油润辛香",
    calories: "480 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "陕西",
    cookingMethod: "手工扯面热油泼",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "陕西绝活",
    image: photoMap["陕西油泼大宽BiangBiang面"],
    photoUrl: photoMap["陕西油泼大宽BiangBiang面"],
    ingredients: [
      { name: "优质高筋中筋面粉", amount: "300g" },
      { name: "陕南秦椒细辣椒面", amount: "25g" },
      { name: "青油菜/小青菜", amount: "4棵" },
      { name: "鲜嫩绿豆芽", amount: "50g" },
      { name: "大蒜切碎泥", amount: "20g" },
      { name: "香葱白切碎", amount: "20g" }
    ],
    seasonings: [
      { name: "纯菜籽油", amount: "45ml(泼油灵魂)" },
      { name: "陕西岐山香醋", amount: "25ml" },
      { name: "特级生抽", amount: "20ml" },
      { name: "十三香与精盐", amount: "各2g" }
    ],
    steps: [
      { title: "和面搓剂子刷油松弛", detail: "面粉加温盐水揉成较硬面团，充分揉光醒面30分钟；分成大长条形面剂子，两面刷满菜籽油盖保鲜膜松弛40分钟。", timerSeconds: 2400 },
      { title: "筷子压中缝扯出三指宽面", detail: "取一个面剂子用擀面杖稍微擀扁，用一根筷子在中间用力压出一道深印；两手捏住两端在案板上上下摔打拉伸，面打案板BiangBiang响，从中间压痕处顺势一撕为二。", timerSeconds: 180 },
      { title: "滚水煮面连带豆芽青菜", detail: "下大宽面入大沸水锅煮3分钟，临出锅前下入豆芽和小青菜同烫熟，捞入大海碗中。", timerSeconds: 180 },
      { title: "码调料滚烫菜油猛泼", detail: "在面条最顶部集中堆放蒜泥、葱碎、十三香、精盐与厚厚一层秦椒辣椒面；菜籽油烧至八成热冒青烟，分三次顺着辣椒蒜泥猛泼下去，滋滋声大作，辣椒香气瞬间冲顶，趁热淋香醋生抽拌匀。", timerSeconds: 60 }
    ],
    tips: "扯面中间用筷子压一道深痕，摔扯薄后顺着印记轻轻一撕就能完美撕成两根宽如裤带的薄面；泼油必须用烧热的纯菜籽油，才具备老陕最地道的油香。",
    tags: ["主食", "面食", "biangbiang面", "油泼面", "陕西名吃"]
  },
  {
    id: "rec_staple_03",
    name: "杭州正宗雪菜笋肉片儿川",
    subtitle: "杭帮面天花板名作，安吉鲜春笋薄片、邱隘倒笃菜与滑嫩猪肉片同烹，倒笃菜鲜酸脆嫩，汤清面筋",
    calories: "410 kcal/碗",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "浙江",
    cookingMethod: "生炒吊汤煮面",
    season: ["spring", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "江南名面",
    image: photoMap["杭州正宗雪菜笋肉片儿川"],
    photoUrl: photoMap["杭州正宗雪菜笋肉片儿川"],
    ingredients: [
      { name: "江南碱水生面条(细圆面)", amount: "150g" },
      { name: "安吉鲜春笋/冬笋", amount: "80g(切薄长菱形片)" },
      { name: "猪里脊肉片", amount: "60g(生粉上浆)" },
      { name: "精选倒笃菜/老雪菜", amount: "40g" },
      { name: "高汤/热水", amount: "550ml" }
    ],
    seasonings: [
      { name: "熟猪油", amount: "25g" },
      { name: "生抽", amount: "15ml" },
      { name: "绍兴加饭酒", amount: "10ml" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "精盐", amount: "2g" }
    ],
    steps: [
      { title: "笋肉切薄菱形片", detail: "鲜笋剥壳切薄长菱形片，入开水焯烫1分钟去草酸；里脊肉顺纹切薄片，加少许生抽、黄酒与湿淀粉抓匀上浆。", timerSeconds: 180 },
      { title: "猪油煸炒浇头出浓香", detail: "铁锅下熟猪油化开，倒入肉片滑炒至变白盛出；原锅下笋片与倒笃菜大火翻炒出扑鼻发酵酸香，倒回肉片烹黄酒，加生抽炒匀。", timerSeconds: 120 },
      { title: "冲沸水煮成鲜咸高汤", detail: "锅中直接冲入550ml滚水或高汤，大火翻滚沸腾2分钟，雪菜与鲜笋的氨基酸彻底融进汤中成琥珀色面汤。", timerSeconds: 120 },
      { title: "下碱水生面同煮熟装碗", detail: "直接下入江南碱水生面，大火翻滚煮2分钟至断生微有咬劲，连汤带面带厚码浇头一并倒入大青瓷大海碗中，鲜咸爽口，笋脆菜香。", timerSeconds: 120 }
    ],
    tips: "片儿川必须用‘猪油’炒笋和肉片，雪菜与笋片结合释放出天下第一鲜；面条一定要带一点硬芯，浸在滚烫鲜汤里吃到最后一根依然爽滑筋道。",
    tags: ["主食", "杭州片儿川", "江南名面", "雪菜笋肉"]
  },
  {
    id: "rec_staple_04",
    name: "镇江传统跳面锅盖面",
    subtitle: "江南天下第一面，杉木小锅盖压在滚沸大铁锅煮跳面，酱油秘制高汤配肴肉浇头，汤浓面韧不烂",
    calories: "430 kcal/碗",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "江苏",
    cookingMethod: "跳面压煮",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "非遗工艺",
    image: photoMap["镇江传统跳面锅盖面"],
    photoUrl: photoMap["镇江传统跳面锅盖面"],
    ingredients: [
      { name: "镇江传统跳面(竹竿压制毛孔粗面)", amount: "160g" },
      { name: "水晶肴肉片/肥牛浇头", amount: "4片" },
      { name: "香干切丝", amount: "30g" },
      { name: "鲜嫩小青菜与豆芽", amount: "各30g" }
    ],
    seasonings: [
      { name: "镇江香醋", amount: "15ml" },
      { name: "镇江秘制熟酱油(熬虾子酱油)", amount: "30ml" },
      { name: "纯熟猪油", amount: "15g" },
      { name: "生姜细丝与青葱末", amount: "各10g" },
      { name: "高汤", amount: "400ml" }
    ],
    steps: [
      { title: "大海碗预调镇江熟酱油底", detail: "大面碗底放入一勺熬好的虾籽熟酱油、一小块纯熟猪油、姜丝、香葱碎和胡椒粉，冲入滚烫原骨高汤化开成油亮香浓底汤。", timerSeconds: 60 },
      { title: "沸水大锅浮杉木小锅盖", detail: "大锅烧滚大开水，将手打跳面抖散下入沸水中，将一只比锅小一圈的杉木小锅盖轻轻压在面条上方浮水煮制。", timerSeconds: 60 },
      { title: "小锅盖压面煮出蜂窝弹韧", detail: "木锅盖压住沸水让水泡沿锅边翻滚、内部面条保持平缓受热不糊化，杉木香气渗入面中，面条久煮不烂筋道透气，烫入青菜豆芽。", timerSeconds: 180 },
      { title: "捞面入碗码水晶肴肉", detail: "用长竹筷捞起沥水跳面滑入底汤大碗中，码上切好的水晶肴肉与香干丝，配一碟镇江香醋蘸食，酱香醇厚，面条极具韧劲。", timerSeconds: 60 }
    ],
    tips: "‘大锅漂着小锅盖’不仅是视觉特色，杉木锅盖压住面条能防止沸水扑锅，且木质清香能去面腥，使跳面内部小气孔充分舒展吸饱酱汁。",
    tags: ["主食", "镇江锅盖面", "跳面", "江南第一面"]
  },
  {
    id: "rec_staple_05",
    name: "苏式枫镇大面",
    subtitle: "姑苏六月限定至尊白汤面，酒酿吊出清冽透明骨汤，五花大肉糟香软糯入口即化，清雅绝伦",
    calories: "450 kcal/碗",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "江苏",
    cookingMethod: "白汤慢煨焖肉",
    season: ["summer", "spring"],
    cookTime: "35分钟",
    difficulty: "苏帮名品",
    image: photoMap["苏式枫镇大面"],
    photoUrl: photoMap["苏式枫镇大面"],
    ingredients: [
      { name: "苏式银丝细生面", amount: "140g" },
      { name: "苏州特产白糟焖肉(五花肉厚切块)", amount: "2大块(约120g)" },
      { name: "老母鸡鳝骨白汤", amount: "500ml" },
      { name: "纯天然甜酒酿原汁", amount: "35ml" }
    ],
    seasonings: [
      { name: "纯熟猪油", amount: "15g" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "精盐", amount: "3g" },
      { name: "青蒜叶极细末", amount: "10g" }
    ],
    steps: [
      { title: "白糟大肉慢煨出胶", detail: "带皮五花大肉加酒酿糟卤、葱姜与少许白糖小火慢煨至筷子能毫无阻力穿透，冷却后切成整齐厚长方块，皮白肉粉。", timerSeconds: 1800 },
      { title: "酒酿高汤吊出清鲜白汤", detail: "老母鸡与鳝鱼骨熬煮的高汤过滤澄澈，调入纯天然甜酒酿原汁与少许精盐，微火保持清澈微沸，汤体清澈无酱油，泛出淡淡米酒甜香。", timerSeconds: 300 },
      { title: "下银丝细面抖散煮硬面", detail: "另起大水锅大火烧沸，下苏式银丝生面条，用长筷挑散煮60秒至断生即捞出（苏面讲究‘紧汤硬面’，捞出在漏勺中甩干水分）。", timerSeconds: 90 },
      { title: "折出鲫鱼背盖白糟大肉", detail: "面条在面碗中折叠成整齐漂亮的‘鲫鱼背’形，注入热腾腾的酒酿白汤，撒一撮青蒜花，覆上一大块厚焖肉，焖肉在热汤中油脂化开，鲜甜清润回味悠长。", timerSeconds: 60 }
    ],
    tips: "枫镇大面被誉为‘最难做的一碗素面’，汤底绝对不加一滴酱油，靠老母鸡、黄鳝骨和甜酒酿天然吊出微酸带甘甜的琥珀白汤，肉肥而不腻入口即融。",
    tags: ["主食", "苏式汤面", "枫镇大面", "白汤焖肉"]
  },
  {
    id: "rec_staple_06",
    name: "成都纯手工甜水面",
    subtitle: "筷子粗手扯筋道实心宽面，秘制香料复制酱油慢熬浓稠，配油泼辣子与浓香芝麻酱，甜辣交织裹满面条",
    calories: "390 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "四川",
    cookingMethod: "纯手工扯面凉拌",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "20分钟",
    difficulty: "川味招牌",
    image: photoMap["成都纯手工甜水面"],
    photoUrl: photoMap["成都纯手工甜水面"],
    ingredients: [
      { name: "高筋面粉", amount: "250g(加微量食用碱硬和面)" },
      { name: "烘烤熟花生碎", amount: "25g" },
      { name: "浓香纯芝麻酱", amount: "20g(温香油化开)" },
      { name: "红油熟辣椒油", amount: "25ml" },
      { name: "鲜大蒜泥", amount: "15g" }
    ],
    seasonings: [
      { name: "川味秘制复制酱油(黄豆酱油配红糖八角桂皮慢熬)", amount: "35ml" },
      { name: "熟白芝麻", amount: "5g" },
      { name: "花椒面", amount: "1.5g" }
    ],
    steps: [
      { title: "和极硬面团切筷子粗条", detail: "高筋面粉加少许碱水和冷水揉成极其紧实硬挺的面团，醒面20分钟后擀成约0.8厘米厚的大厚片，用刀切成筷子粗细的手指长粗条。", timerSeconds: 600 },
      { title: "手搓圆条拉伸煮熟", detail: "将面条一根根在案板上用手掌心稍微搓圆并顺势轻拉，下入滚大开水锅煮5分钟至熟透但内芯仍具扎实嚼劲，捞出挑入盘中淋一小勺熟油拌匀防粘晾凉。", timerSeconds: 300 },
      { title: "调配灵魂甜辣酱汁", detail: "小碗中将熬好的浓稠复制甜酱油、化开的芝麻酱、蒜泥、花椒面混合调匀。", timerSeconds: 60 },
      { title: "淋料撒脆花生碎拌匀", detail: "将调料均匀浇在粗甜水面上，淋上厚厚一大勺红亮熟辣椒油，撒满烤香的脆花生碎和白芝麻，吃前用力拌匀，每根粗面挂满酱汁，第一口微甜第二口麻辣浓香，越嚼越香。", timerSeconds: 60 }
    ],
    tips: "甜水面的灵魂在‘复制酱油’（酱油加红糖、八角、草果慢火收汁变稠），甜中带甘；面条必须和得比普通面硬得多，才能做出实心弹牙的嚼劲。",
    tags: ["主食", "成都小吃", "甜水面", "甜辣交织", "筋道十足"]
  },
  {
    id: "rec_staple_07",
    name: "广府大火镬气干炒牛河",
    subtitle: "粤菜厨师考牌天花板名馔，牛肉滑嫩焦香，沙河粉根根透亮不断不碎，盘底无多余浮油镬气冲天",
    calories: "510 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "广东",
    cookingMethod: "极速猛火干炒",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "10分钟",
    difficulty: "大厨火候",
    image: photoMap["广府大火镬气干炒牛河"],
    photoUrl: photoMap["广府大火镬气干炒牛河"],
    ingredients: [
      { name: "新鲜纯正广州沙河粉", amount: "300g(手工撕散条条分明)" },
      { name: "鲜嫩牛里脊肉薄片", amount: "120g" },
      { name: "清脆绿豆芽(掐头去尾银芽)", amount: "60g" },
      { name: "细嫩韭黄段与小葱段", amount: "各20g" },
      { name: "洋葱丝", amount: "20g" }
    ],
    seasonings: [
      { name: "特级老抽(上色)", amount: "10ml" },
      { name: "特级生抽(调鲜咸)", amount: "15ml" },
      { name: "蚝油", amount: "10ml" },
      { name: "白糖", amount: "2g" },
      { name: "花生油", amount: "30ml" }
    ],
    steps: [
      { title: "牛肉滑油迅速断生", detail: "牛肉切薄片，加生抽、白糖、小苏打一撮、湿淀粉抓匀腌制上浆，最后封油；热锅热油，下牛肉片猛火划炒至八成熟迅速捞出沥油。", timerSeconds: 120 },
      { title: "铁锅烧至冒青烟下河粉", detail: "铁锅大火烧至极热微冒青烟，倒两勺油润锅后倒出多余油，下撕散的沙河粉，双手握锅柄快速颠锅翻炒，让河粉均匀接触高温铁锅烙出焦香焦斑。", timerSeconds: 90 },
      { title: "下洋葱绿豆芽与混合酱油", detail: "下入洋葱丝和绿豆芽，顺锅边淋入生抽、老抽、蚝油与白糖调好的复合酱汁，大火剧烈颠翻上色均一。", timerSeconds: 45 },
      { title: "倒入牛肉韭黄合颠出锅", detail: "倒回滑好的牛肉片、韭黄段和葱段，大火快速颠锅翻炒10次（尽量少用锅铲，靠腕力颠锅防止铲断河粉），出锅盛盘，油润金黄，盘底无残油。", timerSeconds: 30 }
    ],
    tips: "干炒牛河的标准是‘油多则腻、油少则焦、河粉不断、盘底无油’；整道菜全程大火，靠手腕颠锅把镬气打进河粉内部。",
    tags: ["主食", "干炒牛河", "广府名菜", "镬气冲天", "宵夜霸主"]
  },
  {
    id: "rec_staple_08",
    name: "广式鲜虾竹升云吞面",
    subtitle: "香港与西关老牌茶餐厅招牌，全鸭蛋和面经大毛竹竿千百次压制弹牙竹升面，大地鱼汤底鲜虾大云吞",
    calories: "380 kcal/碗",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "广东",
    cookingMethod: "鸭蛋打面清汤云吞",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "非遗工艺",
    image: photoMap["广式鲜虾竹升云吞面"],
    photoUrl: photoMap["广式鲜虾竹升云吞面"],
    ingredients: [
      { name: "传统广式全蛋竹升细面", amount: "120g" },
      { name: "手工鲜虾大云吞", amount: "5个(整颗鲜虾仁配黑猪肉馅)" },
      { name: "大地鱼虾子老鸡清高汤", amount: "450ml" },
      { name: "鲜嫩韭黄段", amount: "15g" }
    ],
    seasonings: [
      { name: "纯熟猪油", amount: "5g" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "鱼露", amount: "5ml" }
    ],
    steps: [
      { title: "大地鱼虾籽高汤调底", detail: "将烘烤后的大地鱼干、干虾籽与老母鸡熬出的清澄高汤烧沸，大碗底放入一小勺纯熟猪油、白胡椒粉与几根韭黄段，冲入滚烫高汤。", timerSeconds: 60 },
      { title: "煮鲜虾大云吞浮水", detail: "大沸水锅下入鲜虾云吞，中大火煮3分钟至云吞皮薄透如金鱼尾巴浮在水面，捞出放入碗底。", timerSeconds: 180 },
      { title: "竹升面滚水极速秒煮爽面", detail: "将爽脆的竹升面抖散投入滚大开水中，用长竹筷快速搅散煮45秒（竹升面含碱极脆，切勿久煮），捞出入冷水快速‘过冷河’2秒激脆，再回烫热水1秒沥干。", timerSeconds: 60 },
      { title: "面条盖在云吞之上盛碗", detail: "将烫好的竹升面整齐盖在底部的云吞上（传统广式吃法‘汤匙垫底、云吞在下、竹升面在上’，防止面条泡在热汤中软烂失去脆爽弹性），撒少许韭黄即食。", timerSeconds: 30 }
    ],
    tips: "广式云吞面精髓在‘过冷河’让面条脆爽如银丝弹牙；上桌时必须‘云吞垫底、面浮其上’，保持面条刚出锅的爽脆空气感。",
    tags: ["主食", "竹升面", "鲜虾云吞", "老西关名面"]
  },
  {
    id: "rec_staple_09",
    name: "湖南常德红油牛肉米粉",
    subtitle: "三湘大地嗦粉王者，圆米粉爽滑筋骨强，牛骨牛油文火慢炖红亮麻辣牛肉大块油码，一口嗦尽江湖气",
    calories: "460 kcal/碗",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "湖南",
    cookingMethod: "慢熬红油码水煮粉",
    season: ["winter", "autumn", "spring", "summer"],
    cookTime: "25分钟",
    difficulty: "三湘嗦粉",
    image: photoMap["湖南常德红油牛肉米粉"],
    photoUrl: photoMap["湖南常德红油牛肉米粉"],
    ingredients: [
      { name: "常德特产粗圆鲜米粉", amount: "200g" },
      { name: "慢炖红油牛腩牛肉大块(带浓汁油码)", amount: "100g" },
      { name: "牛大骨浓熬高汤", amount: "400ml" },
      { name: "湖南香脆剁辣椒与酸豆角", amount: "各15g" },
      { name: "香葱花与香菜碎", amount: "各10g" }
    ],
    seasonings: [
      { name: "纯正常德熬制牛油", amount: "15g" },
      { name: "特级生抽", amount: "15ml" },
      { name: "花椒粉与白胡椒粉", amount: "各1g" }
    ],
    steps: [
      { title: "大碗调入牛油香料底", detail: "大海碗底放入一勺浓香凝固的纯熟牛油、特级生抽、白胡椒粉、花椒粉和葱花，冲入滚烫沸腾的牛大骨白高汤，牛油受热融化成一层红润诱人油封。", timerSeconds: 60 },
      { title: "滚水烫熟常德圆米粉", detail: "另起大锅烧大沸水，将常德鲜圆米粉装入竹捞竹篓中，在沸水中上下抖动烫煮约1分钟至米粉透亮滑溜软糯无硬芯。", timerSeconds: 60 },
      { title: "甩干水分滑入底汤", detail: "将捞篓用力甩干多余水分，将整团圆粉顺势滑入调好牛油高汤的碗中。", timerSeconds: 30 },
      { title: "铺上大块红油牛肉码子", detail: "在米粉最顶端舀上满满一大勺连肉带浓红汤的慢炖麻辣牛肉块，配上一大勺酸豆角和剁辣椒，撒葱花香菜，大口嗦粉，麻辣鲜香直透心扉。", timerSeconds: 60 }
    ],
    tips: "常德牛肉粉必须用‘纯牛油’调汤封碗，锁住滚烫温度不跑热；选用粗圆鲜米粉比细扁粉更具弹性嚼头，挂满红油最是痛快。",
    tags: ["主食", "湖南米粉", "常德牛肉粉", "麻辣鲜香", "嗦粉天花板"]
  },
  {
    id: "rec_staple_10",
    name: "贵州老素粉",
    subtitle: "老贵阳人清晨的城市灵魂，酸浆微发酵粗米粉，配香脆油炸猪肉脆哨、酸菜、油辣椒与黄豆，拌开红亮扑鼻",
    calories: "390 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "贵州",
    cookingMethod: "极速烫粉干拌",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "10分钟",
    difficulty: "黔味名吃",
    image: photoMap["贵阳老素粉"],
    photoUrl: photoMap["贵阳老素粉"],
    ingredients: [
      { name: "贵州酸浆发酵粗圆米粉", amount: "200g" },
      { name: "贵阳特制香脆猪肉脆哨(油渣肉碎)", amount: "25g" },
      { name: "贵州传统酸腌菜/酸盐菜碎", amount: "25g" },
      { name: "油炸香脆黄豆粒", amount: "15g" },
      { name: "折耳根(鱼腥草细丁，可选灵魂)", amount: "10g" },
      { name: "大蒜水与葱花", amount: "各10g" }
    ],
    seasonings: [
      { name: "贵州糊辣椒油(柴火糊辣椒调油)", amount: "20ml" },
      { name: "纯熟猪油", amount: "10g" },
      { name: "传统甜酱油/生抽", amount: "15ml" },
      { name: "味精与花椒粉", amount: "各1g" }
    ],
    steps: [
      { title: "酸浆粗米粉滚水冒烫", detail: "大锅水烧大开，将带有天然微酸米香的粗圆米粉放入竹丝捞篓中，在开水里飞速冒烫15秒（仅需热透，久烫则易断），迅速捞起控水。", timerSeconds: 30 },
      { title: "入盘加熟猪油酱油", detail: "倒在大海碗中，趁热挑入一小勺熟猪油，淋入生抽甜酱油和少许花椒粉，用筷子快速挑拌让米粉吃上底味与油亮光泽。", timerSeconds: 40 },
      { title: "堆放丰富灵魂浇头", detail: "在米粉表面整齐码上一大勺香脆肉脆哨、酸腌菜丁、炸黄豆、折耳根碎和蒜水，中心舀入一大勺红油糊辣椒。", timerSeconds: 60 },
      { title: "双手拌匀干香酸辣", detail: "双手握筷子迅速将所有红油、脆哨与酸菜在粗粉中彻底翻拌均匀，每一根米粉裹满辣椒碎与猪油香，酸辣焦香，嚼劲十足。", timerSeconds: 60 }
    ],
    tips: "正宗老素粉必须用带天然乳酸微酸香气的酸浆粗米粉；糊辣椒要用柴火焙干焦香后舂碎浇热油制成，糊香浓烈是贵阳特有的味觉密码。",
    tags: ["主食", "贵阳老素粉", "脆哨", "酸辣干拌", "非遗风味"]
  },

  // 2. 蒸烙煎炸名点（包子煎包水饺 8道）
  {
    id: "rec_staple_11",
    name: "天津传统狗不理水馅包子",
    subtitle: "津门百年老字号传世绝活，传统半发面皮薄软韧，排酸猪肉打入骨汤水馅，十八个褶花如白菊绽放爆多汁",
    calories: "160 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "天津",
    cookingMethod: "半发面水馅蒸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "35分钟",
    difficulty: "非遗面点",
    image: photoMap["天津传统狗不理水馅包子"],
    photoUrl: photoMap["天津传统狗不理水馅包子"],
    ingredients: [
      { name: "中筋面粉", amount: "300g(老酵面加碱揉半发面)" },
      { name: "三肥七瘦新鲜猪前腿肉馅", amount: "250g" },
      { name: "老母鸡猪大骨浓排骨高汤", amount: "120ml(打水馅关键)" },
      { name: "山东大葱白细碎", amount: "50g" },
      { name: "鲜生姜碎泥", amount: "15g" }
    ],
    seasonings: [
      { name: "传统小磨纯香油", amount: "25ml" },
      { name: "特级酿造生抽", amount: "20ml" },
      { name: "纯正甜面酱(提天津味)", amount: "15g" },
      { name: "精盐与白胡椒粉", amount: "各2g" }
    ],
    steps: [
      { title: "搅打老汤水馅抱团爆汁", detail: "肉馅加姜末、生抽、甜面酱、精盐与胡椒粉，分四次淋入120ml温热猪骨高汤，顺一个方向拼命搅打至肉馅完全吸饱高汤呈粘稠拔丝状，淋入纯香油封住水分入冷藏定型，包前拌入大葱碎。", timerSeconds: 600 },
      { title: "半发面团分剂擀菊花边皮", detail: "面粉加酵母揉成半发面（发至微膨胀即包，保留面皮韧性），搓条下成15克一个的小剂子，擀成中间稍厚、边缘薄的圆形包子皮。", timerSeconds: 300 },
      { title: "巧捏十八褶形如白菊", detail: "填入大团饱满水馅，左手托底右手大拇指与食指配合，顺时针飞速捏出十八个紧密均匀的褶花，中心留一小圆孔（如菊花心），封口美观大方。", timerSeconds: 300 },
      { title: "大火足汽猛蒸8分钟", detail: "蒸笼刷薄油摆入包子，大火沸水足汽上笼蒸8分钟立即揭盖出锅，面皮雪白松软，轻轻咬开一包滚烫肉鲜汤汁溢满口腔。", timerSeconds: 480 }
    ],
    tips: "狗不理包子不漏油的关键在于‘打足骨汤水馅且最后封香油’，且面团采用‘半发面’（不可全发泡软），蒸出后外皮筋道兜得住一汪热卤。",
    tags: ["主食", "狗不理包子", "天津非遗", "爆汁水馅", "经典名吃"]
  },
  {
    id: "rec_staple_12",
    name: "广式早茶松软蜜汁叉烧包",
    subtitle: "粤式茶楼早茶四大天王之一，老面天然开花三瓣如裂帛，云朵般雪白松软，包裹热腾腾焦香蜜汁叉烧",
    calories: "170 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "广东",
    cookingMethod: "老面开花大火蒸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "30分钟",
    difficulty: "茶楼招牌",
    image: photoMap["广式早茶松软蜜汁叉烧包"],
    photoUrl: photoMap["广式早茶松软蜜汁叉烧包"],
    ingredients: [
      { name: "低筋面粉/包子专用粉", amount: "250g" },
      { name: "广式蜜汁肥瘦叉烧肉丁", amount: "180g" },
      { name: "老面种/酵母", amount: "适量" },
      { name: "洋葱碎与大葱段", amount: "各20g(熬叉烧芡汁)" },
      { name: "食用泡打粉", amount: "4g(助力天然开花)" }
    ],
    seasonings: [
      { name: "特级蚝油", amount: "20g" },
      { name: "李锦记叉烧酱", amount: "25g" },
      { name: "白砂糖", amount: "40g" },
      { name: "生抽", amount: "15ml" },
      { name: "玉米淀粉水(浓芡)", amount: "30ml" },
      { name: "纯猪油", amount: "15g" }
    ],
    steps: [
      { title: "熬制红亮浓稠叉烧芡汁", detail: "锅中热油爆香洋葱碎捞出，下入高汤、叉烧酱、蚝油、生抽与白砂糖煮沸，淋入浓玉米淀粉水收成浓稠挂勺的红亮芡汁，拌入切成小丁的蜜汁叉烧肉，晾凉冷藏成团凝固备用。", timerSeconds: 300 },
      { title: "低筋面粉揉入猪油白糖", detail: "低筋面粉加入发酵种、泡打粉、白糖和熟猪油揉成极度光滑雪白的面团（加猪油是叉烧包表皮如云朵般雪白不发黄的绝密）。", timerSeconds: 300 },
      { title: "包馅捏成雀笼形", detail: "分小剂子压扁填入一大坨浓汁叉烧馅，双手手指向上拢起收口捏拢成雀笼状（顶部切勿死死捏实，保留呼吸缝隙）。", timerSeconds: 180 },
      { title: "大火狂暴足汽蒸10分钟", detail: "蒸锅必须大火狂烧至蒸汽猛烈翻滚，入锅全程保持最高火蒸10分钟，高温蒸汽瞬间促使包子顶部自然‘绽开三瓣如花朵’，趁热掰开蜜汁流淌，松软甜香。", timerSeconds: 600 }
    ],
    tips: "叉烧包开花的秘密：一是面粉选用低筋粉并加泡打粉，二是收口不能完全捏死，三是蒸锅的火力必须达到‘最狂暴的大火足汽’，热胀冷缩瞬间冲开花瓣。",
    tags: ["主食", "广式早茶", "叉烧包", "茶楼点心", "自然开花"]
  },
  {
    id: "rec_staple_13",
    name: "焦脆冰花底猪肉韭菜水煎包",
    subtitle: "街头早点最诱人存在，薄面水煎底部凝固成金黄薄如蝉翼的雪花冰花网，一口咬下外皮软弹底板焦脆馅香爆汁",
    calories: "140 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "山东",
    cookingMethod: "水煎冰花起底",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "20分钟",
    difficulty: "家常必学",
    image: photoMap["焦脆冰花底猪肉韭菜水煎包"],
    photoUrl: photoMap["焦脆冰花底猪肉韭菜水煎包"],
    ingredients: [
      { name: "中筋面粉", amount: "250g(酵母发面)" },
      { name: "前腿猪肉末", amount: "180g" },
      { name: "鲜嫩青韭菜碎", amount: "150g" },
      { name: "冰花水淀粉面水", amount: "水150ml+面粉10g+玉米淀粉5g调匀" }
    ],
    seasonings: [
      { name: "香油", amount: "20ml" },
      { name: "生抽", amount: "15ml" },
      { name: "蚝油", amount: "10ml" },
      { name: "白胡椒粉与精盐", amount: "各2g" },
      { name: "花生油", amount: "20ml" }
    ],
    steps: [
      { title: "调香油韭菜猪肉馅", detail: "猪肉末加生抽、蚝油、胡椒粉、盐抓匀腌制；韭菜洗净沥干水分切细碎，先淋入一勺香油抓匀封油（防出水关键），包前才倒入肉馅中拌匀。", timerSeconds: 300 },
      { title: "包小巧圆水煎包", detail: "发酵好的面团揉匀分小剂子，擀薄皮包入满满馅料，捏成小巧圆形褶花包子，醒发5分钟。", timerSeconds: 300 },
      { title: "平底锅码包小火煎底", detail: "平底不粘锅刷一层薄花生油微热，将生水煎包紧凑整齐码在锅中，小火煎1-2分钟至包子底部微黄定型。", timerSeconds: 120 },
      { title: "淋冰花面水加盖焖熟掀盘", detail: "将调匀的面粉淀粉水均匀浇在锅隙四周（约没过包子1/3处），盖紧锅盖转中火水煎8分钟，水分收干转小火慢焙，看到锅底结出一层整齐金黄的薄网冰花，倒扣在圆盘中，焦脆咔嚓响。", timerSeconds: 540 }
    ],
    tips: "韭菜切好后先用香油彻底拌匀封住切口水分，包馅绝不会渗出半滴菜汤；面粉与玉米淀粉按2:1加水调汁，能烧出金黄如蕾丝般完整的酥脆大冰花。",
    tags: ["主食", "水煎包", "冰花水煎包", "焦脆爆汁", "山东早餐"]
  },
  {
    id: "rec_staple_14",
    name: "靖江皮薄如纸蟹黄大汤包",
    subtitle: "江南四大名点之首，皮薄如纸通体透亮吹弹可破，里面包裹满满一整汪金黄蟹黄蟹膏老母鸡原汤，吸管吸汤妙绝",
    calories: "180 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "江苏",
    cookingMethod: "极薄澄皮皮冻蒸",
    season: ["autumn", "winter"],
    cookTime: "30分钟",
    difficulty: "非遗巅峰",
    image: photoMap["靖江皮薄如纸蟹黄大汤包"],
    photoUrl: photoMap["靖江皮薄如纸蟹黄大汤包"],
    ingredients: [
      { name: "特级高筋精白面粉", amount: "200g(温热水揉出极强延展性)" },
      { name: "现剥新鲜阳澄湖母蟹黄蟹膏", amount: "80g" },
      { name: "老母鸡猪肉皮冻(凝固成固体冻)", amount: "200g(切极小碎丁)" },
      { name: "鲜猪前夹肉末", amount: "80g" },
      { name: "生姜细末", amount: "15g" }
    ],
    seasonings: [
      { name: "绍兴花雕酒", amount: "15ml" },
      { name: "特级生抽", amount: "10ml" },
      { name: "镇江香醋", amount: "适量(佐餐姜丝)" },
      { name: "白胡椒粉与盐", amount: "各2g" },
      { name: "猪油", amount: "15g" }
    ],
    steps: [
      { title: "猪油炒香红膏母蟹黄", detail: "锅中化开纯猪油，下姜末与阳澄湖鲜剥蟹黄、蟹膏小火慢炒出香浓金红蟹油，烹入花雕酒去腥，加入肉末炒熟晾凉，拌入切成小颗粒的老母鸡猪皮冻碎，调入精盐胡椒粉冷藏定型。", timerSeconds: 300 },
      { title: "揉极薄极韧汤包皮", detail: "高筋面粉加温开水手工用力揉至面团极度光滑柔软有韧性，搓条下剂，用走槌擀成中间稍厚、边缘薄如透亮蝉翼的圆形大面皮。", timerSeconds: 300 },
      { title: "挑大团皮冻馅捏三十褶", detail: "挑入大团凝固的蟹黄皮冻馅，右手大拇指与食指飞速收拢捏出三十个细密小褶，收口收紧形成小巧肚圆的大汤包生胚。", timerSeconds: 180 },
      { title: "垫草垫大火足汽蒸熟", detail: "竹蒸笼铺湿草垫，将大汤包小心摆入，大火足汽猛蒸6分钟，蒸热后内部皮冻彻底融化成一汪金黄沸腾原汤，包体变得半透明如玉盘托珠，用吸管先吸汤再吃皮，鲜冠天下。", timerSeconds: 360 }
    ],
    tips: "‘轻轻提、慢慢移、先开窗、后吸汤’是吃靖江汤包的口诀；馅料全靠大量高品质猪皮老母鸡冻支撑，蒸热后化为一包纯天然高胶质金黄原汤。",
    tags: ["主食", "蟹黄汤包", "靖江名点", "皮薄如纸", "一吸满口鲜"]
  },
  {
    id: "rec_staple_15",
    name: "东北传统酸菜猪肉手工水饺",
    subtitle: "黑土地游子心中至高图腾，正宗老坛自然发酵酸菜丝去油解腻，五花肉馅吸饱高汤，酸脆鲜美多汁",
    calories: "45 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "东北",
    cookingMethod: "手工包制水煮",
    season: ["winter", "autumn", "spring"],
    cookTime: "30分钟",
    difficulty: "家常经典",
    image: photoMap["东北传统酸菜猪肉手工水饺"],
    photoUrl: photoMap["东北传统酸菜猪肉手工水饺"],
    ingredients: [
      { name: "中筋小麦面粉", amount: "350g(冷水揉劲道面团)" },
      { name: "东北特产正宗老坛酸菜", amount: "300g" },
      { name: "四肥六瘦五花肉馅", amount: "250g" },
      { name: "花椒生姜葱水", amount: "80ml" },
      { name: "大葱白碎", amount: "40g" }
    ],
    seasonings: [
      { name: "熟豆油/猪油", amount: "30ml" },
      { name: "特级生抽", amount: "20ml" },
      { name: "十三香", amount: "2g" },
      { name: "精盐", amount: "3g" },
      { name: "香油", amount: "10ml" }
    ],
    steps: [
      { title: "酸菜漂洗切细丝挤水", detail: "正宗东北酸菜一片片剥开，用清水漂洗两遍去除过重酸味，片成薄片切细丝再剁成碎末，用双手用力挤掉约7成水分备用（保留微量酸汁才多汁）。", timerSeconds: 300 },
      { title: "五花肉馅打水上劲加调料", detail: "五花肉馅分次打入80ml花椒葱姜水搅打至拉丝吸收，调入生抽、十三香、精盐、熟豆油抓拌均匀，最后倒入酸菜末、大葱碎和香油彻底抓拌成团。", timerSeconds: 300 },
      { title: "擀圆皮包大馅大肚水饺", detail: "醒好的面团揉匀搓长条切剂子，擀成中间厚边缘薄的饺子皮，填入满满酸菜肉馅，两手虎口用力往中间挤压成大肚饱满水饺。", timerSeconds: 300 },
      { title: "三开三点冷水煮熟", detail: "大铁锅水大火烧开下入饺子轻轻推转防止粘底，大火煮沸后点一次冷水，连续煮开三次至饺子个个肚圆鼓胀、浮在水面捞出装盘，蘸蒜泥酱油醋吃，酸香开胃解腻至极。", timerSeconds: 360 }
    ],
    tips: "东北酸菜水饺好吃的秘籍：一是五花肉一定要略带肥油（酸菜吸油），二是酸菜挤水不能太干，保留三成原汁肉馅才饱满多汁、酸脆清香。",
    tags: ["主食", "手工水饺", "东北酸菜水饺", "家常包饺子", "酸香脆嫩"]
  },
  {
    id: "rec_staple_16",
    name: "门框胡同老北京牛肉褡裢火烧",
    subtitle: "老北京胡同传统名吃，形似古人腰带褡裢，金黄焦酥油亮长条外皮，包裹滚烫爆汁葱香牛肉大葱馅",
    calories: "170 kcal/条",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "北京",
    cookingMethod: "两面金黄油煎",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "老北京风味",
    image: photoMap["门框胡同老北京牛肉褡裢火烧"],
    photoUrl: photoMap["门框胡同老北京牛肉褡裢火烧"],
    ingredients: [
      { name: "中筋面粉", amount: "250g(温水和稍软面团)" },
      { name: "新鲜牛里脊/肥瘦牛绞肉", amount: "200g" },
      { name: "老北京大葱葱白碎", amount: "60g" },
      { name: "花椒水", amount: "60ml" }
    ],
    seasonings: [
      { name: "小磨芝麻香油", amount: "25ml" },
      { name: "黄豆酱油/生抽", amount: "20ml" },
      { name: "料酒", amount: "10ml" },
      { name: "白胡椒粉与十三香", amount: "各2g" },
      { name: "花生油", amount: "25ml" }
    ],
    steps: [
      { title: "花椒水打牛肉馅", detail: "牛肉馅加入生抽、料酒、白胡椒粉、十三香，分次打入60ml花椒水至肉馅粘糯吸足水分，倒入大葱白碎和小磨香油搅拌均匀。", timerSeconds: 300 },
      { title: "和温水软面擀长薄条", detail: "面粉加温水揉成非常柔软的面团醒发20分钟，搓成长条压扁，擀成约手掌长、手指宽的长方形薄面皮。", timerSeconds: 300 },
      { title: "包成长条褡裢状对折折口", detail: "在长面皮正中纵向抹上厚厚一条牛肉馅，两边面皮往中间对折重叠包紧，再将两头封口稍微对折折压在底部，形如一条平整长方形布袋褡裢。", timerSeconds: 240 },
      { title: "平底锅慢火两面油煎金黄", detail: "平底铸铁锅热油，将褡裢火烧整齐码入锅中，中火慢煎2分钟至底面金黄酥脆，翻面继续煎至两面油亮焦黄、面皮起酥脆壳，出锅配玉米粥与老北京糖蒜吃，外焦内嫩肉汁爆溢。", timerSeconds: 300 }
    ],
    tips: "面团一定要和得非常柔软且醒透，延展性好才能包出皮薄汁多的长褡裢；牛肉馅多打花椒水并加足香油，煎出来内部肉汁充盈不干柴。",
    tags: ["主食", "老北京小吃", "褡裢火烧", "外酥内嫩", "牛肉大葱"]
  },
  {
    id: "rec_staple_17",
    name: "山东老面手揉起层戗面大馒头",
    subtitle: "齐鲁大地传统面食巅峰，纯老酵发面中和碱水，层层揉入干面粉戗面百次，馒头白胖结实有嚼劲，越嚼越回甜麦香",
    calories: "210 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "山东",
    cookingMethod: "戗面大火蒸制",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "40分钟",
    difficulty: "手劲功夫",
    image: photoMap["山东老面手揉起层戗面大馒头"],
    photoUrl: photoMap["山东老面手揉起层戗面大馒头"],
    ingredients: [
      { name: "优质中高筋小麦粉", amount: "400g" },
      { name: "戗面用干面粉(揉入用)", amount: "100g" },
      { name: "老面肥/老酵母", amount: "100g" },
      { name: "食用碱水", amount: "微量(闻味无酸中和)" },
      { name: "温水", amount: "180ml" }
    ],
    seasonings: [],
    steps: [
      { title: "老面发酵与对碱", detail: "面粉加入老面头和温水和成面团，温暖处发酵至两倍大充满蜂窝孔；兑入微量稀释碱水，用手反复揉匀，闻面团无酸味、切开有细密小孔且微泛麦香即碱度精准。", timerSeconds: 1800 },
      { title: "层层揉入干面粉戗面", detail: "将面团移至大案板上，分次将100g干面粉洒在面团上，用双手手掌根部用力反复向前推揉、折叠、再洒干粉、再用力推揉（戗面百次），直至干面粉全部揉入面团中，面团变得极其紧实坚硬光滑如瓷。", timerSeconds: 900 },
      { title: "双手搓圆挺拔馒头生胚", detail: "切分成大剂子，两手合力将小剂子揉搓上挺，揉出圆润高耸、顶平底稳的大馒头生胚，盖纱布二次醒发15分钟至手按微回弹。", timerSeconds: 900 },
      { title: "大火沸水足汽猛蒸25分钟", detail: "蒸锅大火烧水沸腾足汽，放入馒头大火蒸25分钟，关火焖3分钟出锅。馒头表皮光滑如白玉，掰开撕开一层层麦香丝缕，筋道扎实，越嚼越甘甜。", timerSeconds: 1680 }
    ],
    tips: "山东戗面馒头的硬核就在‘戗面’二字，不断将干面粉强行揉入发面中，使面团密度大增，蒸熟后内部结构呈现层层相叠的麦香纤维，绝非普通发糕式虚软馒头可比。",
    tags: ["主食", "山东馒头", "戗面馒头", "麦香浓郁", "越嚼越香"]
  },
  {
    id: "rec_staple_18",
    name: "西安牛肉水盆配香酥月牙饼",
    subtitle: "老陕最地道的早餐清真排面，牛骨羊骨慢熬清透金黄清汤配大片软烂牛肉，夹一捧刚出炉酥香月牙饼大口撕嚼",
    calories: "450 kcal/套",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "陕西",
    cookingMethod: "清炖老汤配烤饼",
    season: ["winter", "autumn", "spring"],
    cookTime: "30分钟",
    difficulty: "老陕绝活",
    image: photoMap["西安牛肉水盆配香酥月牙饼"],
    photoUrl: photoMap["西安牛肉水盆配香酥月牙饼"],
    ingredients: [
      { name: "牛腱子肉/牛腩片", amount: "150g(提前文火炖烂薄切)" },
      { name: "牛大骨草果香料熬制清汤", amount: "600ml" },
      { name: "水晶粉丝", amount: "30g(泡软)" },
      { name: "现烤香酥月牙饼/白吉馍", amount: "2个" },
      { name: "香菜碎与蒜苗细丝", amount: "各15g" }
    ],
    seasonings: [
      { name: "陕西油泼辣子", amount: "15ml" },
      { name: "精盐与特级花椒粉", amount: "各2g" },
      { name: "糖蒜", amount: "2头(佐餐)" }
    ],
    steps: [
      { title: "大汤碗备粉丝牛肉大片", detail: "大瓷碗中放入泡软的水晶粉丝，铺上切得薄如蝉翼的熟牛肉大片。", timerSeconds: 60 },
      { title: "滚烫牛骨原汤浇淋烫透", detail: "大汤锅中将牛大骨清汤烧至大滚沸腾，舀起滚汤冲入碗中烫透肉片再倒回锅中（反复两次回锅烫热），第三次盛满滚烫金黄清汤。", timerSeconds: 60 },
      { title: "撒蒜苗香菜调花椒香", detail: "调入精盐与特级花椒粉，汤面撒满翠绿鲜嫩的蒜苗丝与香菜末，汤清见底，油珠金黄漂浮。", timerSeconds: 30 },
      { title: "月牙饼夹牛肉夹油泼辣子", detail: "现烤出炉的月牙饼酥脆掉渣，横向割开，夹入满满几片牛肉与一勺红亮香辣油泼辣子，一口咬下外焦内香，配一大口鲜香滚烫的牛肉清汤，通体舒泰。", timerSeconds: 60 }
    ],
    tips: "水盆牛肉与羊肉泡馍不同，讲究‘汤清见底、不稠不糊’，月牙饼必须现烤至两面金黄起酥皮，一口饼一口汤才是关中人享受早晨的标准姿势。",
    tags: ["主食", "水盆牛肉", "月牙饼", "老陕名吃", "暖心暖胃"]
  },

  // 3. 酥香烧饼烙饼与地方锅盔 (6道)
  {
    id: "rec_staple_19",
    name: "缙云炭烤梅干菜五花肉烧饼",
    subtitle: "浙江非遗名小吃，半发面薄皮包入九层红烧梅干菜与肥瘦五花肉，贴在炭烤大陶炉壁烤至金黄焦脆掉渣流油",
    calories: "220 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "浙江",
    cookingMethod: "炭烤/烤箱烘烤",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "非遗小吃",
    image: photoMap["缙云炭烤梅干菜五花肉烧饼"],
    photoUrl: photoMap["缙云炭烤梅干菜五花肉烧饼"],
    ingredients: [
      { name: "中筋面粉", amount: "250g(加酵母温水揉半发面)" },
      { name: "优质九头芥梅干菜碎", amount: "80g(泡软炒香)" },
      { name: "肥瘦相间猪五花肉丁", amount: "120g" },
      { name: "熟白芝麻", amount: "20g" },
      { name: "麦芽糖饴糖水", amount: "20ml(刷表面上色)" }
    ],
    seasonings: [
      { name: "生抽", amount: "15ml" },
      { name: "白糖", amount: "10g" },
      { name: "白胡椒粉", amount: "2g" }
    ],
    steps: [
      { title: "炒制香浓梅干菜肉馅", detail: "五花肉切小肉丁下锅煸炒出猪油，倒入泡洗干净的梅干菜碎翻炒，加生抽、白糖、胡椒粉翻炒干香抱团，晾凉备用。", timerSeconds: 300 },
      { title: "面团分剂包馅收口封死", detail: "半发酵好的面团分成60克一个的小剂子，按扁填入满满一大团梅干菜肉馅，像包包子一样收紧口捏死。", timerSeconds: 180 },
      { title: "擀薄大圆饼刷饴糖沾芝麻", detail: "收口朝下，用擀面杖从中间向四周轻轻均匀擀成薄如盘子的大圆薄饼（薄到隐约可见梅干菜色泽而不破），表面刷一层麦芽糖水，撒满白芝麻并按实。", timerSeconds: 180 },
      { title: "烤箱/空气炸锅高温烘烤出炉", detail: "烤箱或空气炸锅预热至210℃，入炉高温烘烤10-12分钟，至烧饼鼓起大焦泡、表面金黄焦脆，热气腾腾出炉，一口咬下咔嚓碎响，梅干菜油香溢满齿颊。", timerSeconds: 720 }
    ],
    tips: "缙云烧饼好吃的两绝：一是五花肉一定要切丁与梅干菜炒透，高温烘烤时五花肉油脂自然融化浸透整张薄饼；二是刷麦芽糖水能烤出迷人的金红焦斑与微甜麦香。",
    tags: ["主食", "缙云烧饼", "梅干菜肉饼", "香酥焦脆", "地方非遗"]
  },
  {
    id: "rec_staple_20",
    name: "江苏泰兴传统黄桥烧饼",
    subtitle: "淮扬传世战地酥饼传奇，油酥与水油面层层开酥包入咸甜两种馅料，表面沾满饱满白芝麻烘烤至千层酥碎掉渣",
    calories: "190 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "江苏",
    cookingMethod: "千层开酥烘烤",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "30分钟",
    difficulty: "开酥工艺",
    image: photoMap["江苏泰兴传统黄桥烧饼"],
    photoUrl: photoMap["江苏泰兴传统黄桥烧饼"],
    ingredients: [
      { name: "中筋面粉(水油皮)", amount: "150g" },
      { name: "低筋面粉(纯油酥)", amount: "100g+纯熟猪油50g" },
      { name: "香葱猪油肉松馅/白糖芝麻馅", amount: "120g" },
      { name: "脱皮生白芝麻", amount: "30g" }
    ],
    seasonings: [
      { name: "麦芽糖水", amount: "15ml" },
      { name: "精盐", amount: "2g" }
    ],
    steps: [
      { title: "揉制水油皮与油酥", detail: "面粉加温水与猪油揉成柔软光滑的水油皮面团；低筋粉加猪油擦揉成柔软纯油酥面团，两面团各自松弛20分钟。", timerSeconds: 1200 },
      { title: "小包酥大开酥卷成千层卷", detail: "用水油皮包裹油酥团，擀成长舌状三折折叠，旋转90度再次擀开卷成长圆筒，切成等份小剂子（小开酥工艺形成上百层酥皮）。", timerSeconds: 300 },
      { title: "包入咸甜内馅压扁沾芝麻", detail: "小剂子两头向中间捏拢按扁，包入香葱肉松猪油馅或白糖馅收口捏紧，刷一层麦芽糖水，在满满白芝麻盘中按实沾满芝麻。", timerSeconds: 240 },
      { title: "烤炉高温烤出千层金黄", detail: "烤箱预热200℃，将烧饼摆入烤盘中大火烘烤15分钟，至饼身膨胀微圆鼓起、芝麻金黄喷香，取出趁热咬下一口，酥皮如雪片纷纷飘落，满嘴酥香。", timerSeconds: 900 }
    ],
    tips: "黄桥烧饼的酥松全在‘猪油开酥’的层次感，猪油起酥度远胜植物油；麦芽糖水不仅能锁住白芝麻烤时不脱落，更能带来诱人金黄光泽。",
    tags: ["主食", "黄桥烧饼", "泰兴非遗", "千层酥脆", "名吃传奇"]
  },
  {
    id: "rec_staple_21",
    name: "老北京千层麻酱红糖大花卷",
    subtitle: "老北京面点至尊，纯发面大擀薄皮抹满醇香麻酱与古法红糖，层层叠叠卷出多层花卷，蒸出流心浓醇甜香",
    calories: "230 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "北京",
    cookingMethod: "发面卷制大火蒸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "30分钟",
    difficulty: "家庭必学",
    image: photoMap["老北京千层麻酱红糖大花卷"],
    photoUrl: photoMap["老北京千层麻酱红糖大花卷"],
    ingredients: [
      { name: "中筋小麦面粉", amount: "300g(加酵母发面)" },
      { name: "纯正浓香二八麻酱(芝麻花生酱)", amount: "80g" },
      { name: "古法纯红糖粉", amount: "60g" },
      { name: "小磨芝麻香油", amount: "15ml(调稀麻酱)" }
    ],
    seasonings: [],
    steps: [
      { title: "发好面团擀薄长大片", detail: "酵母加温水将面粉揉成柔软面团发酵至两倍大，取出在案板上充分排气揉匀，用擀面杖擀成长约50厘米、厚约0.3厘米的大薄长方片。", timerSeconds: 1800 },
      { title: "调香油麻酱撒厚红糖粉", detail: "二八麻酱加入15ml香油搅拌至顺滑易涂抹的流动状，均匀倒在面皮上用刮板刷平，表面厚厚均匀筛上一层细腻红糖粉并用手轻按。", timerSeconds: 180 },
      { title: "从下往上卷起切厚段筷子压花", detail: "从一长边开始紧密卷成长圆卷，用刀切成等距梯形或方块，两块叠在一起，中间用一根筷子用力从中间往下压下，两头向下一捏成漂亮花卷。", timerSeconds: 240 },
      { title: "二次醒发大火蒸熟出锅", detail: "摆入蒸笼二次醒发10分钟，蒸锅大火沸水足汽猛蒸15分钟，关火焖3分钟揭盖。层层展开，深褐色的麻酱红糖如流心溢出，松软甜润香浓无比。", timerSeconds: 1080 }
    ],
    tips: "麻酱一定要用少许香油调匀才好刷开，红糖粉要过筛防止硬疙瘩划破面皮；多层卷制能让每一口面皮都夹着醇厚麻酱红糖，是北方家庭最治愈的甜主食。",
    tags: ["主食", "红糖麻酱花卷", "老北京面点", "千层松软", "甜润醇香"]
  },
  {
    id: "rec_staple_22",
    name: "陕西乾县古法干硬大锅盔",
    subtitle: "关中八大怪之一‘锅盔大如锅盖’，硬面慢酵，文火慢烙出金黄火色，干硬酥脆耐储存，麦香纯粹醇厚",
    calories: "280 kcal/块",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "陕西",
    cookingMethod: "硬面慢火干烙",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "35分钟",
    difficulty: "关中传统",
    image: photoMap["陕西乾县古法干硬大锅盔"],
    photoUrl: photoMap["陕西乾县古法干硬大锅盔"],
    ingredients: [
      { name: "特级高筋面粉", amount: "350g" },
      { name: "老酵头/少许酵母", amount: "微量(微发酵面)" },
      { name: "凉白开", amount: "130ml(极硬面团水少)" }
    ],
    seasonings: [
      { name: "五香粉与精盐", amount: "各2g" },
      { name: "熟白芝麻", amount: "10g" }
    ],
    steps: [
      { title: "揉制极硬面团反复压制", detail: "面粉加微量发酵剂与少量水揉成极硬面团，在案板上用压面杖反复用力折叠碾压20次，直到面团内部无气孔、质地极其细腻紧密。", timerSeconds: 600 },
      { title: "擀成厚圆圆盘扎气孔", detail: "擀成厚约1.5厘米、圆如大铁锅的圆形大饼，用竹签在表面均匀扎满细密透气小孔（防止干烙时局部鼓起变形），撒少许熟芝麻擀实。", timerSeconds: 240 },
      { title: "大厚铁锅无油微火干烙", detail: "厚底生铁大锅烧微热，不放一滴油，轻轻放入大锅盔面饼，全程保持极微小文火慢烤5分钟定型。", timerSeconds: 300 },
      { title: "多次翻面烙出菊花火色", detail: "每隔3分钟轻轻翻面一次，持续文火慢烙20分钟，直到两面烙出整齐金黄的菊花状焦斑火色、敲击面饼发出咚咚清脆声，切三角块蘸油泼辣子或夹八宝辣酱嚼食，麦香浓郁经久不馊。", timerSeconds: 1200 }
    ],
    tips: "乾县锅盔的三个特色是‘干、硬、香’；面硬水少、扎细密小眼、文火慢烙三道关口缺一不可，烙出的锅盔可以存放半月不变质。",
    tags: ["主食", "关中锅盔", "陕西八大怪", "干香耐嚼", "非遗面食"]
  },
  {
    id: "rec_staple_23",
    name: "扬州传统细密千层油糕",
    subtitle: "扬州早茶双绝之一，菱形块玉白半透明，六十四层层层分明薄如宣纸，糖油相融绵软甜润入口即化",
    calories: "175 kcal/块",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "江苏",
    cookingMethod: "千层叠制大火蒸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "30分钟",
    difficulty: "淮扬绝活",
    image: photoMap["扬州传统细密千层油糕"],
    photoUrl: photoMap["扬州传统细密千层油糕"],
    ingredients: [
      { name: "中筋小麦面粉", amount: "250g(微甜酵母发面)" },
      { name: "熟猪板油切极细细粒", amount: "80g" },
      { name: "纯白砂糖", amount: "70g" },
      { name: "天然红绿丝或玫瑰酱", amount: "少许(传统表面点缀)" }
    ],
    seasonings: [],
    steps: [
      { title: "熟猪油粒与白糖腌糖板油", detail: "猪板油去筋膜切成米粒大细丁，拌入等量白砂糖腌制1小时成透明爽脆的‘糖板油丁’备用。", timerSeconds: 3600 },
      { title: "发面擀大长方薄片", detail: "发酵面团排气揉匀，用擀面杖擀成长方形薄片，表面均匀撒上一层糖板油丁和细白糖粉。", timerSeconds: 180 },
      { title: "层层折叠复擀达到六十四层", detail: "将面皮像折被子一样三折折叠，旋转90度重新擀开再次铺糖板油三折，反复四次叠出整整六十四层极其细密的微油层面。", timerSeconds: 300 },
      { title: "入笼蒸熟改刀切菱形块", detail: "整块面胚放入方蒸笼，表面点缀红绿丝，大火足汽猛蒸20分钟至糕身晶莹半透明，出锅趁温热改刀切成典雅漂亮的菱形块，层层撕着吃，甜软爽滑毫无油腻感。", timerSeconds: 1200 }
    ],
    tips: "千层油糕的秘诀在于‘糖板油丁’在高温蒸汽下化作无形，将面皮层层隔开却又被面皮彻底吸收，造就了‘见层不见油、甜而不腻’的淮扬早茶神作。",
    tags: ["主食", "扬州早茶", "千层油糕", "淮扬双绝", "绵软甜润"]
  },
  {
    id: "rec_staple_24",
    name: "胶东金黄发丝油旋饼",
    subtitle: "济南府百年传统名点，外皮金黄酥脆如缕缕发丝，内芯层层松软微咸葱香，从中间旋压出金丝旋涡",
    calories: "185 kcal/个",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "山东",
    cookingMethod: "开酥盘旋慢煎烤",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "齐鲁名点",
    image: photoMap["胶东金黄发丝油旋饼"],
    photoUrl: photoMap["胶东金黄发丝油旋饼"],
    ingredients: [
      { name: "特级高筋中筋面粉", amount: "250g(温盐水和软面)" },
      { name: "纯熟猪油/花生油", amount: "40g(开酥刷油)" },
      { name: "香葱葱白细末", amount: "30g" }
    ],
    seasonings: [
      { name: "椒盐粉与精盐", amount: "各2g" },
      { name: "花生油", amount: "20ml(煎制)" }
    ],
    steps: [
      { title: "和极软面团分剂泡油", detail: "面粉加温水和成极软面团醒发30分钟，分成小剂子搓长条泡在油盘中醒透，延展性极佳。", timerSeconds: 1800 },
      { title: "案板拉伸薄如蝉翼长带", detail: "取一个剂子在刷油案板上用手掌轻轻拉抻推抹成两米长、半透明透字的极薄面皮，抹上熟猪油、撒上椒盐和香葱碎。", timerSeconds: 180 },
      { title: "折叠拉抻卷成螺丝旋涡", detail: "将长面皮折叠成长条，从一端一边轻扯一边卷成如螺丝状的圆塔圆柱，将尾端按入底部，用手掌垂直向下压成圆饼。", timerSeconds: 120 },
      { title: "平底锅煎至两面金黄开旋", detail: "平底锅少油中火慢煎两面金黄酥脆，移入烤箱或加盖微火慢焙透，出锅趁热用双手拇指食指在圆饼中心轻轻向内一捏一旋，饼面瞬间如发丝绽开旋涡，外酥内软葱香满屋。", timerSeconds: 480 }
    ],
    tips: "油旋之妙在‘拉得极薄、卷成螺丝、出锅一旋’；熟猪油开酥保证了内部葱油层的松软多层，趁热吃酥脆掉渣，配济南甜沫绝妙搭档。",
    tags: ["主食", "济南油旋", "齐鲁名小吃", "金黄酥脆", "葱香扑鼻"]
  },

  // 4. 砂锅煲仔与地方风味米饭 (4道)
  {
    id: "rec_staple_25",
    name: "广式正宗双喜腊味煲仔饭",
    subtitle: "广府老街炭火砂锅传世之作，丝苗米生煲出透亮米粒，皇上皇广味腊肠腊肉油脂渗透，底板金黄焦脆香脆饭焦",
    calories: "530 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "广东",
    cookingMethod: "生米砂锅煲",
    season: ["autumn", "winter", "spring"],
    cookTime: "25分钟",
    difficulty: "家常必会",
    image: photoMap["广式正宗双喜腊味煲仔饭"],
    photoUrl: photoMap["广式正宗双喜腊味煲仔饭"],
    ingredients: [
      { name: "精选马坝油粘米/丝苗米", amount: "150g(浸泡1小时沥干)" },
      { name: "广式皇上皇甜腊肠", amount: "1根(切薄斜片)" },
      { name: "广式五花腊肉", amount: "50g(切薄片)" },
      { name: "鲜嫩菜心", amount: "3棵(盐水焯熟)" },
      { name: "新鲜鸡蛋", amount: "1个" },
      { name: "纯净水", amount: "180ml" }
    ],
    seasonings: [
      { name: "纯猪油/花生油", amount: "15ml(沿锅边淋脆锅巴)" },
      { name: "特制煲仔饭豉油(生抽+美极鲜+冰糖+鱼露熬制)", amount: "30ml" }
    ],
    steps: [
      { title: "砂锅刷油生米下锅大火烧沸", detail: "传统广式浅底砂锅内壁刷一层薄花生油，倒入浸泡过沥干的丝苗米，加入180ml水（水面高出米面约一个食指指节），大火烧至米汤翻滚冒大泡泡。", timerSeconds: 300 },
      { title: "转小火煮出虾眼小孔", detail: "转小火加盖焖煮约6分钟，开盖见米饭表面水分收干、呈现均匀密集的小蒸气孔（俗称‘虾眼孔’）。", timerSeconds: 360 },
      { title: "平铺双腊肉打入窝蛋", detail: "将切薄片的广式腊肠和五花腊肉整齐平铺在米饭上，中心打入一颗新鲜鸡蛋，盖严砂锅盖。", timerSeconds: 120 },
      { title: "沿锅盖缝淋猪油焗出金黄锅巴", detail: "转最微小火，顺着锅盖边缘缝隙细细淋入一勺花生油或融化猪油（油顺内壁流下炸酥底层米粒），倾斜砂锅转动四周各烤1分钟，关火焖5分钟，揭盖摆上焯水菜心淋热煲仔饭豉油拌开，焦香扑鼻，整张金黄锅巴香脆脱底。", timerSeconds: 480 }
    ],
    tips: "煲仔饭金黄焦脆锅巴的诀窍：收水后‘沿盖缝淋油’并倾斜砂锅分转四角微火慢烤；腊味切薄片铺在热饭上蒸，腊油渗透整锅米饭粒粒香甜闪亮。",
    tags: ["主食", "煲仔饭", "广式腊味", "黄金锅巴", "香浓下饭"]
  },
  {
    id: "rec_staple_26",
    name: "台湾正宗古早味手切香菇卤肉饭",
    subtitle: "台北夜市传世招牌，肥瘦相间带皮五花肉纯手工切小长条，红葱酥金黄炒香慢炖至胶质浓稠粘唇，淋在热米饭上连扒三碗",
    calories: "520 kcal/碗",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "港澳台",
    cookingMethod: "慢火煨炖浇汁",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "50分钟",
    difficulty: "招牌硬菜",
    image: photoMap["台湾正宗古早味手切香菇卤肉饭"],
    photoUrl: photoMap["台湾正宗古早味手切香菇卤肉饭"],
    ingredients: [
      { name: "新鲜带皮五花肉", amount: "400g(手工手切细小条)" },
      { name: "红葱头/洋葱碎", amount: "100g(炸金黄红葱酥)" },
      { name: "干香菇", amount: "6朵(温水泡发切小丁)" },
      { name: "水煮白煮蛋", amount: "3个" },
      { name: "热大米饭", amount: "满碗" }
    ],
    seasonings: [
      { name: "台湾金兰酱油膏/生抽老抽", amount: "40ml" },
      { name: "台湾米酒", amount: "30ml" },
      { name: "古法纯冰糖", amount: "20g" },
      { name: "五香粉与白胡椒粉", amount: "各2g" },
      { name: "香菇水/高汤", amount: "450ml" }
    ],
    steps: [
      { title: "慢火炸出灵魂金黄红葱酥", detail: "红葱头切薄圈，入冷油中小火慢炸10分钟至水分全干、呈现诱人金黄香脆，捞出沥干压碎成红葱酥（卤肉饭第一灵魂）。", timerSeconds: 600 },
      { title: "手切五花肉条煸出油脂", detail: "带皮五花肉切成小筷子头粗细的长肉丁（切肉比绞肉口感高级百倍），热锅下肉条煸炒至出多余油脂微黄变紧，下香菇丁同炒出浓郁菌香。", timerSeconds: 300 },
      { title: "下红葱酥调料高汤慢炖", detail: "倒入红葱酥、米酒、酱油膏、冰糖、五香粉翻炒上色，倒入过滤香菇水与热水，大火烧沸后下入剥壳熟鸡蛋，加盖转微小火慢炖40分钟至汤汁浓稠起胶。", timerSeconds: 2400 },
      { title: "大火收汁浇盖热米饭", detail: "大火将汤汁收至浓稠挂勺、富含天然猪皮胶原蛋白粘唇微亮，盛一碗热腾腾泰国香米饭，舀满两大勺带皮卤肉碎与浓卤汁，摆半颗卤蛋，肉烂汁浓米饭吸足卤香，人间至乐。", timerSeconds: 120 }
    ],
    tips: "正宗古早味卤肉饭绝不能用绞肉机肉末，必须‘手切带皮小肉条’，皮脂在慢炖中融解出粘唇胶原；红葱酥是绝对不可替代的香气源泉。",
    tags: ["主食", "卤肉饭", "台式古早味", "手切五花肉", "下饭神作"]
  },
  {
    id: "rec_staple_27",
    name: "潮汕芥菜海鲜五花肉咸饭",
    subtitle: "潮汕人刻进骨子里的古早味菜饭（戈饭），大铁锅下五花肉煸出香猪油，干贝虾干大香菇炒软芥菜生米同焖，咸香扑鼻",
    calories: "460 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "广东",
    cookingMethod: "生炒焖饭",
    season: ["autumn", "winter", "spring"],
    cookTime: "30分钟",
    difficulty: "家常经典",
    image: photoMap["潮汕芥菜海鲜五花肉咸饭"],
    photoUrl: photoMap["潮汕芥菜海鲜五花肉咸饭"],
    ingredients: [
      { name: "优质晚造大米", amount: "250g(淘洗沥干)" },
      { name: "潮汕大肉芥菜/大芥菜梗", amount: "150g(切小丁)" },
      { name: "带皮五花肉丁", amount: "80g" },
      { name: "深海天然干贝(泡发撕丝)", amount: "20g" },
      { name: "东海海虾米/开洋", amount: "20g" },
      { name: "干香菇丁", amount: "4朵" },
      { name: "干贝香菇水", amount: "260ml" }
    ],
    seasonings: [
      { name: "普宁黄豆酱", amount: "15g" },
      { name: "特级生抽", amount: "15ml" },
      { name: "纯正鱼露", amount: "10ml" },
      { name: "白胡椒粉", amount: "2g" }
    ],
    steps: [
      { title: "五花肉煸出猪油炒香干货", detail: "铁锅烧热下五花肉丁小火煸炒出大量天然透明猪油，投入干贝丝、虾米和香菇丁中火翻炒出猛烈海味干香。", timerSeconds: 240 },
      { title: "下芥菜生米翻炒吸香", detail: "倒入大芥菜丁翻炒断生，倒入沥干的大米，加入生抽、鱼露、普宁豆酱和白胡椒粉，大火翻炒2分钟让每粒生米均匀吸裹海鲜猪油与酱色。", timerSeconds: 120 },
      { title: "加香菇干贝原水入电饭煲/铁锅", detail: "将翻炒均匀的芥菜海鲜米饭倒入电饭煲或留铁锅中，倒入260ml泡香菇干贝过滤好的温原水（水米齐平即可，芥菜自身会析出汁水）。", timerSeconds: 60 },
      { title: "加盖焖熟开锅翻拌", detail: "按正常煮饭键焖熟，开盖瞬间鲜香扑鼻直冲天花板，用饭铲上下彻底挑拌均匀，米粒晶亮油润，芥菜翠绿爽口，干贝虾米咸香入芯。", timerSeconds: 1800 }
    ],
    tips: "潮汕戈饭一定要用五花肉煸出的‘猪油’先炒生米，米粒受油脂包裹后再焖，粒粒分明绝不发烂；泡香菇干贝的水千万别倒，用来焖饭鲜上加鲜。",
    tags: ["主食", "潮汕咸饭", "芥菜焖饭", "戈饭", "海鲜干贝"]
  },
  {
    id: "rec_staple_28",
    name: "陕西地道洋芋擦擦",
    subtitle: "陕北高原最具民俗风情的非遗土豆面食，土豆擦细丝裹干面粉蒸至松散金黄，油泼辣子青红椒蒜苗炝炒出焦香",
    calories: "260 kcal/份",
    categoryType: "noodle",
    cuisineCategory: "面食点心",
    region: "陕西",
    cookingMethod: "裹粉蒸熟二次爆炒",
    season: ["autumn", "winter", "spring", "summer"],
    cookTime: "20分钟",
    difficulty: "特色民俗",
    image: photoMap["陕西地道洋芋擦擦"],
    photoUrl: photoMap["陕西地道洋芋擦擦"],
    ingredients: [
      { name: "沙地新鲜黄心大土豆", amount: "2个(约400g)" },
      { name: "中筋小麦面粉", amount: "60g" },
      { name: "青红尖椒圈", amount: "各1根" },
      { name: "大蒜碎与葱花", amount: "各15g" }
    ],
    seasonings: [
      { name: "纯菜籽油", amount: "25ml" },
      { name: "特制陕西油泼辣子", amount: "15g" },
      { name: "十三香与五香粉", amount: "各1.5g" },
      { name: "精盐", amount: "3g" }
    ],
    steps: [
      { title: "擦子擦长土豆丝沥水", detail: "土豆削皮用传统擦子擦成粗细均匀的土豆长丝，入清水中快速淘洗一遍洗掉部分淀粉，用纱布或双手彻底挤干水分备用（水分太足裹粉易粘坨发烂）。", timerSeconds: 180 },
      { title: "分次裹干面粉粒粒分明", detail: "土豆丝放入大盆，分次撒入干面粉抖散抓拌，让每一根土豆丝都均匀薄薄裹上一层白面粉，手抓根根分明互不粘连。", timerSeconds: 180 },
      { title: "上汽大火蒸6分钟", detail: "蒸锅大火烧水沸腾足汽，蒸屉铺湿纱布，将裹粉土豆丝轻轻抖散平铺在蒸屉上，大火足汽猛蒸6分钟至断生熟透出锅，倒在大盘中用筷子迅速抖散晾凉。", timerSeconds: 360 },
      { title: "菜籽油爆炒蒜辣焦香", detail: "铁锅烧热下菜籽油，爆香蒜末、葱花、青红椒丝和五香粉，倒入蒸好的洋芋擦擦，调入精盐与油泼辣子，大火快速翻颠大炒2分钟至部分土豆丝外皮带微焦黄脆壳，出锅装盘，油香蒜香土豆甜香扑鼻。", timerSeconds: 120 }
    ],
    tips: "土豆丝擦好后必须彻底挤干水分再裹面粉，面粉只要薄薄一层刚好包住即可；大火蒸熟后必须迅速用筷子挑散防止粘成死坨，再回热锅爆炒出焦香味最佳。",
    tags: ["主食", "洋芋擦擦", "陕北风味", "土豆面食", "焦香爽口"]
  }
];

function updateFile(filePath) {
  const fullPath = path.resolve(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Append new staple recipes before closing bracket
  const lastBracketIndex = content.lastIndexOf('];');
  if (lastBracketIndex === -1) {
    throw new Error('Could not find closing bracket ]; in ' + filePath);
  }

  const before = content.slice(0, lastBracketIndex).trimEnd();
  const needsComma = !before.endsWith(',');
  const newEntriesJson = newStapleRecipes.map(r => JSON.stringify(r, null, 2)).join(',\n');
  
  const updated = before + (needsComma ? ',\n' : '\n') + newEntriesJson + '\n];\n';
  fs.writeFileSync(fullPath, updated, 'utf8');
  console.log(`Updated ${fullPath}: Appended 28 staple recipes.`);
}

updateFile('../js/data/recipes.js');
updateFile('../android_build/assets/js/data/recipes.js');
