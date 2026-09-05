// scripts/data_120_dianqian.js
// 西南滇黔秘境 24道经典名菜与特色家常小炒 (rec_prov_075 ~ rec_prov_098)
// 涵盖云南与贵州
module.exports = [
  {
    id: "rec_prov_075",
    name: "贵州凯里正宗红酸汤江团鱼",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 290,
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜活江团鱼(或乌江鱼剁厚块)", amount: 750, unit: "g", type: "main", isCore: true },
      { name: "凯里苗家纯正发酵野生毛辣果红酸汤", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜鲜木姜子与木姜子油", amount: 15, unit: "ml", type: "main", isCore: true },
      { name: "贵州本地糟辣椒与老姜末", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "新鲜广菜(滴水芋)或黄豆芽与金针菇", amount: 150, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯熟菜籽油与熟猪油(各半)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "米酸汤(调和酸度更柔和)", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: false },
      { name: "特级酿造生抽与纯白糖", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "高汤或沸水", baseAmount: 600, unit: "ml", amountText: "600ml", isPantryStaple: false },
      { name: "贵州糊辣椒面蘸水料(配折耳根葱花)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "江团鱼斩厚块洗净控干",
        instruction: "江团鱼刮洗干净黑膜，剁成两指宽厚块，加少许料酒和姜片抓匀腌制5分钟，无需油炸保持原鲜。",
        timerSeconds: 300,
        chefTip: "江团鱼无小刺肉质滑嫩肥美，极其适合酸汤久煮不碎。"
      },
      {
        stepIndex: 2,
        title: "双油煸炒糟辣椒与红酸汤熬制浓汤",
        instruction: "热锅下菜油与猪油，炒香姜末与糟辣椒，倒入凯里红酸汤大火翻炒激发出醇香果酸，加入高汤与米酸汤大火煮沸5分钟熬出红亮鲜酸汤底。",
        timerSeconds: 300,
        chefTip: "红酸汤是野生毛辣果加白酒盐自然发酵数月而成，天然酸香透亮，糟辣椒提辣增色。"
      },
      {
        stepIndex: 3,
        title: "下江团鱼块滚煨滴入木姜子油",
        instruction: "锅底铺黄豆芽与豆芽，下入江团鱼块加盖中火滚煨8分钟至鱼肉熟透嫩滑，起锅前淋入灵魂木姜子油，撒香菜端上小炉。",
        timerSeconds: 480,
        chefTip: "木姜子油特有的柠檬香茅清香是贵州红酸汤的绝密灵魂，万不可少。"
      }
    ],
    tips: "黔地非遗第一味！三天不吃酸，走路打捞蹿。野生毛辣果发酵而成的红酸汤酸爽清冽，江团鱼肉肥厚软糯入口化渣，木姜子香气萦绕，鲜爽绝伦。",
    tags: ["贵州", "黔菜", "凯里酸汤鱼", "红酸汤", "木姜子油", "非遗风味"]
  },
  {
    id: "rec_prov_076",
    name: "贵州凯里传统红酸汤软烂猪手煲",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 360,
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "优质前猪蹄剁小块(焯透洗净)", amount: 650, unit: "g", type: "main", isCore: true },
      { name: "凯里正宗传统发酵红酸汤", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "贵州土产糟辣椒", amount: 25, unit: "g", type: "secondary", isCore: true },
      { name: "木姜子油滴管", amount: 8, unit: "滴", type: "secondary", isCore: true },
      { name: "嫩豆腐块与青菜心", amount: 150, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "老黄姜片与大蒜粒", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "特级鲜生抽与白糖", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "骨头浓汤或开水", baseAmount: 800, unit: "ml", amountText: "800ml", isPantryStaple: false },
      { name: "食用精制细盐", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "猪蹄炙皮焯透压煮至八成熟",
        instruction: "猪蹄铁锅烙皮洗净斩块，冷水焯透捞出冲净。高压锅或砂锅加姜片先炖30分钟至猪蹄软烂糯滑但皮不烂。",
        timerSeconds: 1800,
        chefTip: "猪蹄胶原蛋白丰厚，先炖软再入酸汤中吸收酸香，更易入味软糯。"
      },
      {
        stepIndex: 2,
        title: "炒香糟辣红酸汤倒入炖蹄原汤",
        instruction: "热锅倒油炒香姜蒜与糟辣椒，倒入凯里红酸汤炒透炒香，注入炖猪蹄的清亮原汤煮沸，调入生抽与白糖平衡酸甜。",
        timerSeconds: 300,
        chefTip: "酸汤与猪蹄原汤融合，浓郁胶质与清爽果酸完美结合。"
      },
      {
        stepIndex: 3,
        title: "砂锅文火煨煮入味淋木姜子油",
        instruction: "将炖软的猪蹄、嫩豆腐块放入酸汤砂锅中，微火慢煨15分钟使蹄肉吸饱红亮酸汁，出锅前淋数滴木姜子油，撒蒜苗花盛盘。",
        timerSeconds: 900,
        chefTip: "酸汤能够化解猪蹄的油腻，猪蹄让酸汤更稠厚温润，相辅相成。"
      }
    ],
    tips: "贵州酸汤绝配新经典！猪蹄皮糯肉烂胶原蛋白满满，吸收了红酸汤的酸香与糟辣椒的微辣，丝毫不显肥腻，酸爽开胃软糯黏唇。",
    tags: ["贵州", "黔菜", "酸汤猪脚", "红酸汤", "胶原蛋白", "软糯开胃"]
  },
  {
    id: "rec_prov_077",
    name: "贵州遵义传统虾子羊肉粉",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "煮",
    calories: 330,
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜麻羊肉与羊腿骨(虾子镇特产)", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "贵州传统粗圆发酵酸浆米粉(煮熟沥水)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "遵义虾子镇特产糊辣椒面(特级焦香)", amount: 25, unit: "g", type: "main", isCore: true },
      { name: "农家自腌爽脆泡菜丁与酸菜碎", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "香菜碎、香葱花与蒜苗碎", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "原锅熬制清亮纯羊油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "十味草果沙仁去膻香料包", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: false },
      { name: "遵义特产陈年老陈醋", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "精制食盐与现磨花椒粉", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "羊肉羊骨香料慢煨吊出清甜羊汤",
        instruction: "羊骨与麻羊肉焯透，加老姜与去膻香料包大火滚沸撇清浮沫，文火慢炖2小时汤清味浓，捞出羊肉放凉切成整齐大薄片。",
        timerSeconds: 3600,
        chefTip: "遵义羊肉粉汤色微黄而清澈，羊肉不柴不膻，切极薄肉片入口即化。"
      },
      {
        stepIndex: 2,
        title: "滚水冒熟粗米粉装入大碗",
        instruction: "将发酵粗酸浆米粉在沸水竹篓中反复冒烫3次至热透软滑，倒扣入海碗中，上面铺满切好的薄羊肉片。",
        timerSeconds: 90,
        chefTip: "酸浆米粉微带米香酵酸，吸汤能力极强，爽滑不断条。"
      },
      {
        stepIndex: 3,
        title: "浇滚烫羊肉原汤撒虾子糊辣椒",
        instruction: "舀入滚沸的羊肉浓汤没过米粉，淋少许热羊油，大勺撒入遵义虾子镇炭火现糊的辣椒面、花椒粉、泡菜丁、蒜苗花上桌趁热拌食。",
        timerSeconds: 60,
        chefTip: "虾子镇糊辣椒带有独特焦香，辣而不烈，汤面红亮油润香气逼人。"
      }
    ],
    tips: "贵州冬日早晨的灵魂之光！遵义虾子镇辣椒名震天下，焦香糊辣椒浮于滚烫鲜甜的麻羊汤之上，米粉爽滑筋道，肉嫩汤鲜，一碗下肚酣畅淋漓。",
    tags: ["贵州", "黔菜", "遵义羊肉粉", "虾子辣椒", "糊辣椒", "非遗小吃"]
  },
  {
    id: "rec_prov_078",
    name: "贵阳传统青岩古镇卤猪脚",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 380,
    prepTimeMinutes: 20,
    cookTimeMinutes: 90,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "本地土猪前猪蹄两只(对半劈开斩小段)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "贵阳传统糊辣椒双花蘸水料", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "青岩传统百年老卤汁原汤", amount: 1500, unit: "ml", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "十余种名贵中草药与香料包", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: false },
      { name: "冰糖炒糖色红润微甜", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "特级生抽老抽", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "贵州本地米酒", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "铁锅火炙猪皮洗净焯透去腥",
        instruction: "猪蹄火烤烧焦外皮除去细毛，温水泡软用钢丝刷洗白净，冷水下锅加姜葱料酒焯透捞出。",
        timerSeconds: 400,
        chefTip: "炙皮是皮质软糯有嚼劲且无腥臊味的必经工序。"
      },
      {
        stepIndex: 2,
        title: "红润糖色老卤文火慢卤透味",
        instruction: "老卤汤锅中加入糖色、中草药料包、生抽老抽、米酒与盐，大火滚沸下入猪蹄，转微火加盖慢卤70分钟至骨肉酥软脱骨，关火浸泡20分钟。",
        timerSeconds: 5400,
        chefTip: "卤猪脚要烂而不碎，皮红润光亮，胶质丰富弹牙。"
      },
      {
        stepIndex: 3,
        title: "捞出沥汤搭配青岩特色酸辣蘸水",
        instruction: "捞出装盘，调制灵魂蘸水：糊辣椒面、原汤一勺、生抽、陈醋、折耳根碎、酸萝卜丁与香葱末，蘸食享用。",
        timerSeconds: 120,
        chefTip: "蘸水是青岩猪脚升华的钥匙，酸辣爽口解腻提鲜，相得益彰。"
      }
    ],
    tips: "贵阳青岩古镇六百年传世招牌！又名状元蹄。猪蹄色泽红润诱人，软烂糯滑胶质满满，肥而不腻，配以折耳根糊辣椒蘸水，风味绝佳。",
    tags: ["贵州", "黔菜", "青岩古镇", "状元蹄", "卤猪脚", "折耳根蘸水"]
  },
  {
    id: "rec_prov_079",
    name: "云南宜良传统松毛炭烤麻鸭",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 370,
    prepTimeMinutes: 30,
    cookTimeMinutes: 40,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "滇东宜良本地仔麻鸭(净膛整只)", amount: 1000, unit: "g", type: "main", isCore: true },
      { name: "天然新鲜云南干松树针(松毛)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "天然麦芽糖与滇红蜂蜜脆皮水", amount: 40, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "云南草果粉与五香细粉", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "酿造生抽与云南米酒(腹内腌汁)", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "椒盐与甜面酱(佐食蘸料)", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "腹腔灌入五香料汁缝合吹气",
        instruction: "仔麻鸭洗净，从肛门开口将五香粉、草果粉、生抽米酒与盐灌入鸭腹中，用竹签针线缝紧腹部。打气使鸭皮与肉分离，烫沸水定型。",
        timerSeconds: 400,
        chefTip: "腹内灌汁叫内煮外烤，鸭肉在烘烤时内部多汁香软绝不干柴。"
      },
      {
        stepIndex: 2,
        title: "通体均匀刷涂蜂蜜脆皮水晾干",
        instruction: "鸭身表面均匀刷上蜂蜜麦芽糖水，挂在阴凉通风处风干3-4小时至表皮干爽紧绷呈纸质感。",
        timerSeconds: 300,
        chefTip: "表皮必须彻底风干，烤出才能达到玻璃脆壳般咔嚓酥脆。"
      },
      {
        stepIndex: 3,
        title: "松毛暗火慢烤熏制清香皮脆",
        instruction: "烤炉内用干松树针(松毛)作为天然燃料点燃慢熏烘烤，鸭身不断翻转受热均匀，烤约35分钟至通体油润枣红酥脆出炉斩件。",
        timerSeconds: 2100,
        chefTip: "云南松毛燃烧释放特有的松脂清香渗入鸭皮，皮脆肉嫩自带天然山林木香。"
      }
    ],
    tips: "云南滇中传承数百年的烤鸭始祖！相传源自明代南京烤鸭传人，就地取材以干松毛暗火烘烤，鸭皮薄如糖纸脆如琉璃，鸭肉嫩滑多汁清香四溢。",
    tags: ["云南", "滇菜", "宜良烤鸭", "松毛烤鸭", "皮脆肉嫩", "百年非遗"]
  },
  {
    id: "rec_prov_080",
    name: "建水古城传统炭火烤小豆腐",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 180,
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "红河建水西门水井特产微发酵小豆腐块", amount: 16, unit: "块", type: "main", isCore: true },
      { name: "云南建水特制糊辣椒蘸水粉", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "自制潮水蘸料(生抽麻油折耳根香菜)", amount: 40, unit: "ml", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "熟猪油或食用油(微刷烤网)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "微量盐与花椒面(干蘸粉)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "红河建水古井小豆腐自然回温",
        instruction: "建水小豆腐经西门大板井甜水与酸浆点制、微发酵晾干，小巧方正，置于室温下自然回软。",
        timerSeconds: 120,
        chefTip: "建水豆腐神奇之处在于自然发酵产生的微酸微臭，受热后化作奇异奶香与豆醇。"
      },
      {
        stepIndex: 2,
        title: "铁丝烤网文火慢翻烤至圆滚鼓起",
        instruction: "炭火微红，将小豆腐置于铁网上，用长筷不断翻动使四面均匀受热，烤至豆腐外皮金黄焦脆、内部彻底鼓胀如充气小气球。",
        timerSeconds: 480,
        chefTip: "烤建水豆腐讲究心急吃不了热豆腐，一定要小火慢翻至通体膨胀鼓圆方才熟透。"
      },
      {
        stepIndex: 3,
        title: "撕开小口蘸取干碟湿汁趁烫享用",
        instruction: "趁烫用手掰开两半，可见内部蜂窝孔隙热气腾腾如嫩芝士，在干辣椒粉或折耳根潮水碟中一滚入口，外脆里嫩喷香化渣。",
        timerSeconds: 60,
        chefTip: "当地围炉而坐，老板用玉米粒计数，吃一个放一粒，其乐融融。"
      }
    ],
    tips: "建水古城火遍神州的市井围炉极味！小小一方豆腐遇炭火逐渐膨胀变圆，外焦香酥脆内里如软酪嫩滑，裹上糊辣蘸水，烫嘴却停不下手。",
    tags: ["云南", "滇菜", "建水豆腐", "炭火烤豆腐", "外焦里嫩", "古城小吃"]
  },
  {
    id: "rec_prov_081",
    name: "大理传统瓦片烤白族纯乳扇",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 260,
    prepTimeMinutes: 5,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "大理洱源传统纯纯水牛奶手工乳扇", amount: 4, unit: "张", type: "main", isCore: true },
      { name: "大理特产纯天然重瓣玫瑰花酿酱", amount: 40, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "精炼纯芝麻油或熟菜油(微抹软化)", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "优质细白砂糖", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "干乳扇刷油微温回软",
        instruction: "大理纯水牛奶乳扇表面微刷一层植物油，平铺在微温铁板或平底锅上温热使其回软平整。",
        timerSeconds: 90,
        chefTip: "乳扇是大理白族特色奶酪，水牛奶酸浆点制晾晒如扇，富含纯粹乳脂奶香。"
      },
      {
        stepIndex: 2,
        title: "微火烘烤起小金黄泡散发浓烈奶香",
        instruction: "中小火烘烤，不断用锅铲轻轻按压，烤至乳扇表面微微软化、冒出均匀小气泡并带浅金黄色焦香。",
        timerSeconds: 150,
        chefTip: "火候要极柔和，不可大火烤焦，保持乳扇柔韧有嚼劲。"
      },
      {
        stepIndex: 3,
        title: "均匀抹满玫瑰酱卷竹签趁热咬食",
        instruction: "在乳扇内侧均匀涂抹上一层厚厚的云南重瓣玫瑰红花酱，用竹签从一端紧紧卷成圆筒状，趁热拉丝咬食。",
        timerSeconds: 60,
        chefTip: "云南十八怪：牛奶做成扇子卖。热吃奶香浓郁拉丝，花香馥郁满口生香。"
      }
    ],
    tips: "苍山洱海间的浪漫甜韵！水牛奶提炼而成的纯乳扇遇热散发醇厚奶香，卷着云南新鲜重瓣红玫瑰酿酱，外酥内糯微带拉丝，奶香花香甜醉人心。",
    tags: ["云南", "滇菜", "大理乳扇", "烤乳扇", "玫瑰花酱", "白族风味"]
  },
  {
    id: "rec_prov_082",
    name: "西双版纳傣味香茅草烤罗非鱼",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 260,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "西双版纳新鲜肥嫩罗非鱼(背剖双开)", amount: 650, unit: "g", type: "main", isCore: true },
      { name: "热带新鲜翠绿香茅草(捆扎)", amount: 6, unit: "根", type: "main", isCore: true },
      { name: "大芫荽(刺芹)、香柳、野葱碎", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "新鲜红小米辣碎与大蒜泥", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "云南纯正熟菜籽油或猪油(刷鱼身)", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "新鲜青柠檬汁", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "天然食用精盐与花椒粉", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "罗非鱼背部剖开腹内填塞傣味香草",
        instruction: "罗非鱼从背部剖开洗净黑膜压平，鱼肉划斜刀抹盐。将大芫荽、香柳、蒜泥、小米辣碎塞入鱼肉与腹腔内部腌制10分钟。",
        timerSeconds: 600,
        chefTip: "大芫荽与香柳是傣味核心香草，去腥赋以热带丛林特有的野性清香。"
      },
      {
        stepIndex: 2,
        title: "整根香茅草紧紧捆扎鱼身夹入烤网",
        instruction: "用新鲜长香茅草从头到尾紧紧缠绕捆扎在罗非鱼身上，用双面竹夹或铁烤网紧紧夹牢固定。",
        timerSeconds: 180,
        chefTip: "香茅草在炭火烘烤时高温逼出天然柠檬清香，深层渗入鱼肉肌理。"
      },
      {
        stepIndex: 3,
        title: "炭火慢翻刷油烤至两面金黄焦香",
        instruction: "炭火微红无明火，将鱼架在炭网上翻转烘烤，中途两面刷油，烤约12分钟至鱼皮焦香酥脆、鱼肉雪白鲜嫩多汁，挤青柠檬汁趁热开吃。",
        timerSeconds: 720,
        chefTip: "外皮焦脆带香茅熏香，鱼肉鲜嫩滑爽不柴，热辣酸爽直击心底。"
      }
    ],
    tips: "版纳夜市最具诱惑力的傣家烧烤！香茅草天然的清冽柠檬香深透鱼骨，罗非鱼外皮金黄酥脆肉质雪白细嫩，混合大芫荽与小米辣的辛香，热带风情拉满。",
    tags: ["云南", "滇菜", "傣味烤鱼", "香茅草烤鱼", "西双版纳", "罗非鱼"]
  },
  {
    id: "rec_prov_083",
    name: "腾冲传统大救驾炒饵块",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "炒",
    calories: 380,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "腾冲特产浆米手工饵块(切菱形薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩猪里脊肉薄片", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩红酸西红柿块与鲜甜酸菜", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "本地韭菜段与鲜豌豆尖", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "土鸡蛋打散炒碎块", amount: 1, unit: "个", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "优质熟猪油与纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "云南昭通特产黄豆酱或甜酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用盐与现磨胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "饵块菱形薄片温水润湿沥干",
        instruction: "腾冲优质大米舂制的饵块切成小菱形薄片，温水中过一下使表面滋润不粘连，沥干水分备用。",
        timerSeconds: 90,
        chefTip: "饵块久炒不糊耐嚼弹牙，切薄片易于在短时间内吸收肉菜鲜汁。"
      },
      {
        stepIndex: 2,
        title: "猪油滑炒肉片鸡蛋西红柿出红酸汁",
        instruction: "热锅倒猪油炒散肉片变色，加入鸡蛋碎、西红柿块与酸菜大火翻炒出红润酸香底汁，下昭通酱爆出酱香。",
        timerSeconds: 150,
        chefTip: "猪油能使饵块油润软糯，酸菜与西红柿带来天然爽口微酸果味。"
      },
      {
        stepIndex: 3,
        title: "下饵块韭菜大火颠锅急炒起锅",
        instruction: "倒入饵块薄片大火翻炒颠锅，调入生抽、盐与胡椒粉，撒入韭菜段与豌豆尖快速翻炒20秒至饵块变软油亮出锅。",
        timerSeconds: 90,
        chefTip: "旺火热油快颠，饵块软糯而富嚼劲，色泽红黄绿相间五彩斑斓。"
      }
    ],
    tips: "云南极边第一城腾冲名震中外的传奇名吃！相传南明永历帝奔波至此时饥肠辘辘，农家炒饵块奉上，帝大悦曰“真乃大救驾也”。酸辣香甜软糯弹牙，开胃饱腹。",
    tags: ["云南", "滇菜", "腾冲大救驾", "炒饵块", "传奇名吃", "软糯弹牙"]
  },
  {
    id: "rec_prov_084",
    name: "云南红河哈尼蘸水白斩土鸡",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 250,
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "红河梯田散养当年小土母鸡半只", amount: 650, unit: "g", type: "main", isCore: true },
      { name: "哈尼族天然植物蘸水料(香茅草、薄荷、大芫荽、糊辣椒)", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "熟土鸡蛋黄(压泥入蘸水)", amount: 1, unit: "个", type: "secondary", isCore: true },
      { name: "鸡肝鸡心鸡胗(煮熟剁碎入蘸水)", amount: 50, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "原锅鸡汤加食用海盐", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true },
      { name: "纯正特级生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "老生姜片与葱结(煮鸡用)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "文火慢浸煮熟土鸡冰水定型",
        instruction: "土鸡冷水入锅加葱姜，小火保持微滚慢浸20分钟至熟，捞出立即泡入冰水中冷透，斩成均匀厚块装盘。",
        timerSeconds: 1500,
        chefTip: "慢火浸煮保持鸡肉滑嫩，冰水冷激让皮质爽脆紧致如水晶皮冻。"
      },
      {
        stepIndex: 2,
        title: "鸡杂熟蛋黄调配哈尼灵魂蘸水",
        instruction: "煮熟的鸡杂剁成细小碎末，熟蛋黄压泥，加入切碎的大芫荽、薄荷碎、蒜泥与炭火糊辣椒面放入大碗。",
        timerSeconds: 300,
        chefTip: "鸡杂碎与蛋黄融入蘸水是哈尼族至高礼遇，使蘸汁浓稠醇鲜包裹感极佳。"
      },
      {
        stepIndex: 3,
        title: "注入滚烫鸡汤原汁蘸肉享用",
        instruction: "往蘸水碗中冲入半碗滚烫的原味清甜土鸡汤，调入生抽与盐拌匀，夹起冰爽白斩鸡块蘸满浓郁香草酱汁食用。",
        timerSeconds: 60,
        chefTip: "鸡肉清甜滑嫩，蘸水酸辣鲜烈透着草本野性香气，绝味双璧。"
      }
    ],
    tips: "哀牢山哈尼梯田风情至味！土鸡皮脆肉滑原汁原味，灵魂在于鸡杂与野生草本香料混合的哈尼蘸水，层次极其丰富，鲜辣辛香满口生津。",
    tags: ["云南", "滇菜", "哈尼蘸水鸡", "白斩鸡", "红河特色", "灵魂蘸水"]
  },
  {
    id: "rec_prov_085",
    name: "云南经典下饭招牌黑三剁",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 240,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "云南特产传统玫瑰大头菜(切细小碎丁)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "新鲜鲜猪瘦肉剁细肉末", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "本地鲜脆青红皱皮尖椒(切细丁碎)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "大蒜米与老姜末", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "特级酿造生抽", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白糖提鲜(玫瑰大头菜偏咸)", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "云南米酒烹锅", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "玫瑰大头菜清水略洗切细小丁",
        instruction: "黑褐油润的云南玫瑰大头菜用清水略冲洗去表面盐霜，切成极细均匀小碎丁控干水分。",
        timerSeconds: 120,
        chefTip: "玫瑰大头菜经老玫瑰汁与红糖酱香腌制，带有独特甘甜醇香，是黑三剁的核心。"
      },
      {
        stepIndex: 2,
        title: "煸炒肉末吐油焦香下蒜姜大头菜",
        instruction: "锅中烧热菜籽油，滑入肉末大火煸炒至发白吐油，下入蒜姜末与大头菜碎大火翻炒煸炒出浓烈酱甜干香。",
        timerSeconds: 120,
        chefTip: "大头菜一定要煸出油脂香气，香味完全融入肉末之中。"
      },
      {
        stepIndex: 3,
        title: "下青红椒碎调入白糖猛火翻炒出锅",
        instruction: "倒入青红椒碎丁，烹入少许米酒、生抽与白糖，大火颠锅猛炒30秒断生即可起锅装盘。",
        timerSeconds: 45,
        chefTip: "青椒保持爽脆翠绿，大头菜咸香甘润，白糖化解重咸带来悠长回甜。"
      }
    ],
    tips: "滇菜馆首屈一指的米饭克星！大头菜黑亮甘香、肉末丰腴、青椒脆烈，三味切碎同炒，咸香鲜脆微甜微辣，拌在热米饭里能多吃三碗。",
    tags: ["云南", "滇菜", "黑三剁", "玫瑰大头菜", "下饭神器", "经典家常"]
  },
  {
    id: "rec_prov_086",
    name: "云南酸甜清爽家常红三剁",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 200,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "熟透多汁沙瓤红西红柿(去皮切小细丁)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "本地脆爽青红尖椒(切细丁碎)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "肥三瘦七鲜猪肉剁细末", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "蒜碎与姜末", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "纯白砂糖(中和酸味)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "精制细盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "食材均细致剁成规整小细粒",
        instruction: "熟透西红柿开水烫去外皮切小丁，青红尖椒去籽切细丁，猪肉剁碎，确保三者颗粒大小匀称。",
        timerSeconds: 150,
        chefTip: "红三剁全靠颗粒齐整，三种食材在汤汁中融为一体。"
      },
      {
        stepIndex: 2,
        title: "肉末煸香西红柿炒出浓郁红果汁",
        instruction: "热锅倒油滑散肉末变白，倒入蒜姜与西红柿丁大火翻炒，将西红柿炒化出浓郁天然红酸果汁。",
        timerSeconds: 120,
        chefTip: "西红柿必须炒化出浓郁果泥，为整道菜提供天然酸甜底酱。"
      },
      {
        stepIndex: 3,
        title: "下青椒丁调味急火快翻收稠出锅",
        instruction: "倒入青椒丁碎，调入生抽、盐与白糖，大火颠锅翻炒40秒至青椒断生汤汁微稠，趁热浇饭盛盘。",
        timerSeconds: 45,
        chefTip: "青椒最后下锅保持清脆，酸甜微辣鲜润多汁。"
      }
    ],
    tips: "云南夏日最开胃的清新佳品！红西红柿的天然酸甜与青椒的脆爽微辛完美结合，肉末油润咸香，汤汁稠亮酸甜适口，老少咸宜下饭神器。",
    tags: ["云南", "滇菜", "红三剁", "西红柿炒肉末", "酸甜开胃", "家常小炒"]
  },
  {
    id: "rec_prov_087",
    name: "云南鲜薄荷爆炒鲜嫩牛肉",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 12,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜嫩黄牛里脊肉(顶刀切大薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "农家现采新鲜嫩薄荷叶", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "新鲜小米辣圈与大蒜片", amount: 25, unit: "g", type: "secondary", isCore: false },
      { name: "生姜丝", amount: 10, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "玉米生粉与生抽(抓腌牛肉)", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "特级酿造生抽与蚝油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "微量白糖提鲜", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "牛肉顶刀薄切抓水上浆封油",
        instruction: "牛里脊逆着纹路切大薄片，加生抽、少许水抓匀吸水，加生粉抓匀，封少许油腌制5分钟。",
        timerSeconds: 180,
        chefTip: "顶刀切断纤维让牛肉极速熟化且多汁滑嫩。"
      },
      {
        stepIndex: 2,
        title: "旺火热油极速滑炒牛肉变色即捞",
        instruction: "铁锅烧至大热倒油，滑入牛肉片旺火翻炒15秒至八分熟断生，立即沥油盛出。",
        timerSeconds: 30,
        chefTip: "滑炒动作要快，牛肉不可在锅中久留，余温自熟最嫩。"
      },
      {
        stepIndex: 3,
        title: "爆香姜蒜辣椒下薄荷牛肉猛火翻匀",
        instruction: "锅底留油爆香姜丝蒜片小米辣，下牛肉片、洗净沥干的鲜薄荷叶，烹入生抽、蚝油与微糖，大火颠锅8秒立即出锅。",
        timerSeconds: 25,
        chefTip: "薄荷叶见热极易软化，出锅前翻炒数秒即可，保留浓郁清凉草本芳香。"
      }
    ],
    tips: "云南特色草本热炒一绝！新鲜薄荷的清凉回甘穿透浓郁咸鲜的嫩牛肉，小米辣鲜烈点缀，入口清香扑鼻滑嫩无比，消暑解腻令人击节赞赏。",
    tags: ["云南", "滇菜", "薄荷牛肉", "鲜薄荷", "大火滑炒", "草本清香"]
  },
  {
    id: "rec_prov_088",
    name: "宣威火腿炒春嫩青蚕豆",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "正宗三年陈宣威老火腿(切薄小片)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "早春新鲜碧绿剥壳嫩蚕豆仁", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切片", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟猪油或食用油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯细白砂糖(提鲜灵魂)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "清鸡汤或温水", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "火腿切薄片温水略冲沥干",
        instruction: "三年陈宣威火腿去皮切成指甲大小薄片，温水中轻轻过一下去表面浮盐。",
        timerSeconds: 90,
        chefTip: "宣威火腿瘦肉红艳如玫瑰，肥肉晶莹透明，自带独特坚果与陈酿香。"
      },
      {
        stepIndex: 2,
        title: "猪油小火煸炒火腿出透明脂香",
        instruction: "锅中下少许猪油，下入火腿薄片小火慢煸1分钟，煸至肥肉部分完全透明卷曲、释放出浓醇香气，下蒜片爆香。",
        timerSeconds: 90,
        chefTip: "火腿煸出的天然动物油脂用来炒蚕豆最甘润。"
      },
      {
        stepIndex: 3,
        title: "下青蚕豆翻炒焖入味白糖提鲜",
        instruction: "倒入剥好的嫩蚕豆仁大火翻炒，淋入清鸡汤或少许水，加盖中小火焖炒2分钟至蚕豆皮微破软沙，加入白糖大火翻匀出锅。",
        timerSeconds: 150,
        chefTip: "火腿天然带咸，全程无需加盐，白糖烘托出蚕豆软糯甜润与火腿鲜咸。"
      }
    ],
    tips: "云南初春时令第一鲜！宣威火腿的丰腴陈香与春蚕豆的清甜软沙在猪油的催化下浑然天成，碧绿嫣红相映成趣，鲜甜咸润回味悠长。",
    tags: ["云南", "滇菜", "宣威火腿", "青蚕豆", "时令小炒", "鲜甜软糯"]
  },
  {
    id: "rec_prov_089",
    name: "云南皱皮椒炒洋芋厚片",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 190,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "云南特产皱皮青辣子(斜切粗圈)", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "黄心沙面大洋芋(去皮切0.5cm厚圆片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣拍碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "酿造特级生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "白糖提鲜微量", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "洋芋切厚片煎出金黄双面脆壳",
        instruction: "黄心洋芋切半厘米厚片，无需水洗。热锅倒菜籽油，将洋芋片平铺锅中中小火慢煎，煎至两面金黄微焦、内里绵软起壳盛出。",
        timerSeconds: 300,
        chefTip: "保留土豆天然淀粉慢煎，外皮能煎出金黄酥脆焦壳，内里沙面香甜。"
      },
      {
        stepIndex: 2,
        title: "干锅大火干煸皱皮椒出虎皮纹",
        instruction: "锅中不加油或微油，下皱皮椒圈用锅铲按压大火干煸，煸出漂亮虎皮纹与浓烈鲜椒辛香味，下蒜碎爆香。",
        timerSeconds: 90,
        chefTip: "云南皱皮椒皮薄肉厚，干煸出虎皮纹微辣微甜香气最浓。"
      },
      {
        stepIndex: 3,
        title: "洋芋片回锅合炒调味起锅",
        instruction: "倒入金黄洋芋片，调入生抽、盐与微量白糖，旺火快速颠锅翻炒15秒让酱香包裹洋芋出锅。",
        timerSeconds: 45,
        chefTip: "大火翻颠防止洋芋碎裂，焦香粉糯与青椒辛香完美交织。"
      }
    ],
    tips: "云南家家户户必吃的小炒土菜！洋芋外焦里沙粉糯甜润，皱皮椒辛辣扑鼻多汁鲜爽，一硬一脆，看似平淡却让无数游子魂牵梦绕。",
    tags: ["云南", "滇菜", "洋芋片", "皱皮椒", "家常土菜", "焦香粉糯"]
  },
  {
    id: "rec_prov_090",
    name: "云南苦菜炒酸菜肉末",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 180,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "云南本地鲜青苦菜(切细碎末)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "云南特产老坛发酵青酸菜(切细碎)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "土猪鲜肉末", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "干红辣椒段与大蒜碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟菜籽油或熟猪油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "酿造特级生抽", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯白砂糖(中和苦涩)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鲜苦菜切细末沸水轻烫挤干",
        instruction: "云南青苦菜洗净切细末，在沸水中快速焯烫20秒捞出过凉水，挤去苦水备用。",
        timerSeconds: 120,
        chefTip: "焯烫挤水能去尽苦菜生涩，保留回甘清香与翠绿质感。"
      },
      {
        stepIndex: 2,
        title: "煸炒肉末与老坛酸菜出酸香",
        instruction: "热锅倒油下肉末煸香吐油，倒入干辣椒、蒜碎与酸菜细末大火煸炒干水汽，炒出老坛酸菜浓烈酸香。",
        timerSeconds: 120,
        chefTip: "酸菜炒干水分后酸味更加柔和醇厚。"
      },
      {
        stepIndex: 3,
        title: "下苦菜末大火合炒调味出锅",
        instruction: "倒入挤干的苦菜末，调入生抽、盐与白糖，大火颠锅翻炒1分钟断生入味起锅。",
        timerSeconds: 60,
        chefTip: "苦菜微苦回甘，酸菜开胃生津，二者碰撞产生奇妙回味。"
      }
    ],
    tips: "云南民间祛火清心经典小炒！俗话说“苦菜回甘，酸菜提神”，苦菜的清甘遇上酸菜的酸爽，配着肉末的油润，清热下火解腻舒爽。",
    tags: ["云南", "滇菜", "苦菜炒肉末", "云南酸菜", "清热祛火", "开胃回甘"]
  },
  {
    id: "rec_prov_091",
    name: "昆明农家老奶洋芋焦香版",
    region: "云南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 210,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "黄心沙质大洋芋(蒸熟压粗泥保留颗粒)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "云南特产老坛发酵水酸菜末", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "小香葱花与青蒜白碎", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "现磨糊辣椒面", amount: 10, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟猪油(灵魂底油)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "现磨白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "土豆蒸透趁热压成粗泥",
        instruction: "土豆带皮蒸透去皮，趁热用勺子压成粗土豆泥，保留少许大颗粒增加咀嚼层次感。",
        timerSeconds: 300,
        chefTip: "不可打成细腻糊状，粗泥与土豆碎块结合口感最佳。"
      },
      {
        stepIndex: 2,
        title: "猪油热化煸炒水酸菜与葱蒜",
        instruction: "铁锅烧热化开纯猪油，下入葱蒜碎与云南水酸菜末中小火翻炒出浓郁酸香油脂香气。",
        timerSeconds: 90,
        chefTip: "猪油是做老奶洋芋无可替代的灵魂，赋予土豆细腻柔滑与浓醇脂香。"
      },
      {
        stepIndex: 3,
        title: "下土豆泥按压慢焙出焦黄锅巴",
        instruction: "倒入土豆泥中小火不断翻炒按压，调入盐、白胡椒粉与糊辣椒面，平铺在锅底慢焙，焙出底部金黄焦脆锅巴翻面撒葱花出锅。",
        timerSeconds: 240,
        chefTip: "煎出底部金黄焦壳最是销魂，外脆内绵软酸香微辣。"
      }
    ],
    tips: "老少皆宜入口化渣的昆明家常名吃！传闻连没牙齿的老奶奶也能吃得津津有味。土豆泥绵软粉沙，带着水酸菜的酸爽与焦香锅巴的香脆，好吃到舔盘。",
    tags: ["云南", "滇菜", "老奶洋芋", "水酸菜", "猪油焦香", "入口化渣"]
  },
  {
    id: "rec_prov_092",
    name: "贵州农家折耳根炒烟熏腊肉",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 330,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "贵州农家柏树枝烟熏五花腊肉(煮透切薄片)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜鲜脆脆折耳根(鱼腥草去细须摘寸段)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "本地青蒜苗段", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "干红辣椒节与生姜丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟菜籽油(微量润锅)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "优质酿造生抽", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯白砂糖提鲜", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "腊肉煮透切薄片煸出透明亮油",
        instruction: "腊肉煮透刮净切大薄片。热锅下腊肉片中小火慢煸出油，至肥肉透明微卷如灯盏窝，盛出部分多余油脂。",
        timerSeconds: 180,
        chefTip: "贵州柴火烟熏腊肉香气深沉，煸透后油脂清亮不腻。"
      },
      {
        stepIndex: 2,
        title: "下姜丝干椒青蒜白爆香",
        instruction: "锅中留底油，爆香干辣椒节、姜丝与青蒜白段，炒出干椒香气。",
        timerSeconds: 45,
        chefTip: "干辣椒与蒜白打底，能柔和折耳根特有的草本辛香。"
      },
      {
        stepIndex: 3,
        title: "折耳根下锅猛火极速翻炒出锅",
        instruction: "倒入折耳根寸段、青蒜叶与腊肉片，调入生抽与微量白糖，大火剧烈颠翻20秒至折耳根断生立刻出锅。",
        timerSeconds: 30,
        chefTip: "折耳根绝不可久炒，断生保持脆白多汁，炒软则风味尽失。"
      }
    ],
    tips: "黔味极具性格代表的魔性美味！烟熏腊肉脂香浓烈软糯甘甜，折耳根脆嫩爽口鲜脆多汁，草本辛香与浓郁烟熏交汇，越吃越上瘾。",
    tags: ["贵州", "黔菜", "折耳根", "烟熏腊肉", "蒜苗炒腊肉", "黔味特色"]
  },
  {
    id: "rec_prov_093",
    name: "贵州家常糟辣椒炒土鸡蛋",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 5,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "散养新鲜土鸡蛋打散", amount: 4, unit: "个", type: "main", isCore: true },
      { name: "贵州特产老坛发酵红糟辣椒(鲜红带酸微辣)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩青葱花", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯白细砂糖(平衡酸辣)", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "食用精制细盐(微量)", baseAmount: 1, unit: "g", amountText: "1g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "土鸡蛋打散大火热油滑炒膨松盛出",
        instruction: "鸡蛋加少许盐打匀。锅中烧热菜籽油至七成热，倒入蛋液大火快速划炒蓬松起泡，嫩熟即盛出备用。",
        timerSeconds: 60,
        chefTip: "热油旺火炒蛋才能蓬松多孔吸汁，八成熟即可盛出防老。"
      },
      {
        stepIndex: 2,
        title: "热油慢炒糟辣椒激发出酸香红油",
        instruction: "锅中留少许底油，倒入老坛糟辣椒小火慢慢翻炒1分钟，炒出红亮辣椒油与独特发酵酸甜果酒香气。",
        timerSeconds: 60,
        chefTip: "糟辣椒加白酒发酵而成，炒透后酒香与酸辣彻底释放。"
      },
      {
        stepIndex: 3,
        title: "滑蛋回锅加白糖大火翻匀出锅",
        instruction: "倒入炒好的鸡蛋块，调入白糖与少许葱花，大火快速颠锅翻炒15秒使红亮糟辣汁渗入蓬松蛋块起锅。",
        timerSeconds: 20,
        chefTip: "白糖是调和糟辣椒酸辣的妙手，蛋块吸饱红亮酸辣汤汁。"
      }
    ],
    tips: "贵州人家家家常备的五分钟神仙快手菜！老坛糟辣椒酸鲜甘爽，红亮油润，鸡蛋蓬松软嫩吸饱了酸甜开胃的酱汁，无论拌饭还是拌面都绝美。",
    tags: ["贵州", "黔菜", "糟辣椒炒蛋", "土鸡蛋", "开胃快手", "酸辣鲜美"]
  },
  {
    id: "rec_prov_094",
    name: "贵州特色糊辣椒爆炒猪板筋",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜新鲜猪板筋(通脊内侧一层嫩筋肉)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "贵州现烤手工焦香糊辣椒面", amount: 20, unit: "g", type: "main", isCore: true },
      { name: "本地嫩芹菜段与青红线椒段", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜粒拍碎与生姜片", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯压榨熟菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "生抽酱油与香醋", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "黄酒与生粉(抓腌板筋)", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "白糖与食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "猪板筋去筋膜改花刀切大片抓匀",
        instruction: "猪板筋撕去外层白膜，表面交叉打上密十字花刀切大薄片，加黄酒、盐、生粉抓匀封油。",
        timerSeconds: 180,
        chefTip: "猪板筋一头猪仅有一小块，打花刀能让其遇热迅速卷曲成脆嫩鲍鱼花状。"
      },
      {
        stepIndex: 2,
        title: "猛火热油滑炒板筋变色卷花即盛",
        instruction: "炒锅大火烧热倒油，下入板筋大火极速滑炒15秒至卷花变白立即沥油盛出。",
        timerSeconds: 30,
        chefTip: "火候一定要极快，慢了板筋就会发硬老韧失去脆嫩爽弹。"
      },
      {
        stepIndex: 3,
        title: "爆香姜蒜辣椒下板筋大火翻颠出锅",
        instruction: "底油爆香姜蒜、青红椒与芹菜，倒入板筋与大量糊辣椒面，烹生抽、香醋、糖与盐，大火剧烈颠翻10秒出锅。",
        timerSeconds: 20,
        chefTip: "糊辣椒焦香与醋香在锅边瞬间升华，脆弹爆汁辣而不燥。"
      }
    ],
    tips: "贵阳夜市大排档的头牌爆炒！猪板筋脆嫩弹牙爽口爆汁，打花刀后紧锁酱香，焦香扑鼻的糊辣椒与爽脆芹菜相融，下酒极品神肴。",
    tags: ["贵州", "黔菜", "爆炒板筋", "猪板筋", "糊辣椒", "脆嫩弹牙"]
  },
  {
    id: "rec_prov_095",
    name: "贵州酸豇豆肉末爆炒野山椒",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 230,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "老坛自腌酸脆长豇豆(切细小圆粒)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "新鲜鲜猪肉末", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "本地泡野山椒碎与红小米椒圈", amount: 25, unit: "g", type: "secondary", isCore: true },
      { name: "大蒜末与小葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "酿造特级生抽", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯白砂糖(提鲜平衡酸度)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "现磨白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "酸豇豆温水快洗切细碎小丁",
        instruction: "老坛酸豇豆温水冲洗去浮盐，挤干水份顶刀切成小芝麻粒大小的细丁碎。",
        timerSeconds: 120,
        chefTip: "切得越细越入味，吃起来每一勺都能均匀混合肉汁与米饭。"
      },
      {
        stepIndex: 2,
        title: "肉末大火煸干水分吐油焦香",
        instruction: "热锅倒油滑入肉末大火翻炒，将肉末炒干水份至滋滋吐油边缘微焦，下蒜末与野山椒碎爆香。",
        timerSeconds: 120,
        chefTip: "肉末一定要煸干水汽，油脂与泡椒酸辣融合后香气四溢。"
      },
      {
        stepIndex: 3,
        title: "酸豇豆下锅大火干煸调味出锅",
        instruction: "倒入酸豇豆碎，大火快速翻炒干煸炒干豆角水份，调入生抽、白糖与胡椒粉，大火颠锅翻炒1分钟撒葱花起锅。",
        timerSeconds: 60,
        chefTip: "大火炒干水分后酸豆角极其脆嫩酸爽，白糖化解刺激提鲜回甘。"
      }
    ],
    tips: "黔湘滇大地永不落幕的下饭第一神菜！酸豇豆酸脆爽口嘎嘣脆，野山椒酸辣开胃直透天灵盖，肉末油润咸香，只要有它在，电饭煲必见底。",
    tags: ["贵州", "黔菜", "酸豇豆肉末", "野山椒", "老坛酸菜", "下饭必备"]
  },
  {
    id: "rec_prov_096",
    name: "贵州盐菜炒五花肉末焦香碎",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 280,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "贵州特产农家蒸晒黑油盐菜(切细碎末)", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "土猪肥三瘦七五花肉末", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "新鲜青红尖椒碎粒", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "生姜末与大蒜末", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油(微量润锅)", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白糖提鲜回甘", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "盐菜淘洗挤干细切",
        instruction: "贵州黑油盐菜用清水漂洗除去细沙，用力攥干水分切成细碎末备用。",
        timerSeconds: 120,
        chefTip: "贵州盐菜经九蒸九晒，油亮发黑，带有特有的发酵干醇甜香。"
      },
      {
        stepIndex: 2,
        title: "五花肉末慢煸出纯猪油焦香",
        instruction: "锅中下少许油，倒入五花肉碎中小火慢煸，煸出油脂至肉末颗粒微焦金黄、散发焦香。",
        timerSeconds: 180,
        chefTip: "肉末煸得酥脆喷香，猪油正好给干燥嗜油的盐菜吸收滋润。"
      },
      {
        stepIndex: 3,
        title: "盐菜下锅合炒青红椒起锅",
        instruction: "倒入姜蒜末与盐菜碎大火翻炒2分钟使盐菜吸足猪脂，加入青红椒粒、生抽与白糖快速翻炒均匀出锅。",
        timerSeconds: 90,
        chefTip: "白糖是点睛之笔，使干咸盐菜化作浓郁甘甜回味。"
      }
    ],
    tips: "贵州农家经典传家宝配饭菜！盐菜色泽黑褐油润吸足了五花肉的醇香脂油，肉末焦香酥脆，咸甜适口越嚼越香，拌饭、夹馒头无上妙品。",
    tags: ["贵州", "黔菜", "黑油盐菜", "盐菜肉末", "九蒸九晒", "干香回甘"]
  },
  {
    id: "rec_prov_097",
    name: "贵阳现炸豆腐圆子灌酸辣汁",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 220,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "传统微发酵老豆腐泥加碱水捏椭圆球", amount: 8, unit: "个", type: "main", isCore: true },
      { name: "贵阳灵魂酸辣蘸水(折耳根、糊辣椒、酸萝卜丁、香菜、生抽香醋)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "小香葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟菜籽油(油炸用)", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true },
      { name: "食用食用碱水", baseAmount: 2, unit: "ml", amountText: "2ml", isPantryStaple: false },
      { name: "精制食盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "老豆腐压泥加微碱水揉捏成球",
        instruction: "老豆腐沥干水分捣成细腻豆腐泥，加入微量碱水与盐拌匀，戴手套搓捏成椭圆形橄榄状圆子。",
        timerSeconds: 300,
        chefTip: "加极微量碱水能促使豆腐在高温油炸时内部分解膨胀形成中空蜂窝。"
      },
      {
        stepIndex: 2,
        title: "热油炸制外壳褐色坚硬中空鼓胀",
        instruction: "菜籽油烧至六成热下入豆腐圆子，中火慢炸至外壳膨胀鼓起，表面呈褐金黄色硬壳捞出控油。",
        timerSeconds: 360,
        chefTip: "炸至外壳硬脆如脆皮，内部却呈蜂窝中空海绵状。"
      },
      {
        stepIndex: 3,
        title: "筷子撕开小口灌入折耳根酸辣汁",
        instruction: "趁热用筷子在圆子顶部戳开一个开口，舀上一大勺装满折耳根碎与糊辣椒的酸辣调料汁直接灌入内部，一口整吞。",
        timerSeconds: 60,
        chefTip: "外壳焦脆内部软嫩，酸辣汁在口中爆开，热辣滚烫奇香无比。"
      }
    ],
    tips: "贵阳街头最震撼味蕾的非遗名小吃！外壳炸得深褐酥脆咔嚓作响，内里中空软嫩如棉花，灌入满满一勺折耳根糊辣酸汁，咬开爆汁满口喷香。",
    tags: ["贵州", "黔菜", "豆腐圆子", "雷家豆腐圆子", "外焦里嫩", "折耳根爆汁"]
  },
  {
    id: "rec_prov_098",
    name: "贵阳传统丝娃娃配时蔬丝",
    region: "贵州",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "蒸",
    calories: 160,
    prepTimeMinutes: 25,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "巴掌大薄如蝉翼手工米面皮", amount: 10, unit: "张", type: "main", isCore: true },
      { name: "时令时蔬切细丝(折耳根、黄瓜、胡萝卜、海带、脆哨、莴笋)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "香脆黄豆粒与熟花生碎", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "特制贵阳凉拌酸辣脆酸汤灌汁", amount: 80, unit: "ml", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "贵州现磨糊辣椒面", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "纯正粮食香醋生抽清汤调汁", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "纯芝麻香油与白糖", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "时令脆爽时蔬全部切极细长丝",
        instruction: "将折耳根、黄瓜、胡萝卜、莴笋等十余种时蔬切成整齐细发丝状，分别码在小碟中琳琅满目。",
        timerSeconds: 600,
        chefTip: "丝娃娃精髓在于丝细如发，品种越丰富口感层次越美妙。"
      },
      {
        stepIndex: 2,
        title: "取薄面皮包裹时蔬如襁褓婴儿",
        instruction: "取一张薄如宣纸的透亮面皮摊在手心，各夹少许时蔬丝、脆哨与酥黄豆放在中央，卷成襁褓中裹着婴儿的圆锥形状。",
        timerSeconds: 120,
        chefTip: "面皮薄韧不断，形似襁褓中的婴儿，因而得名丝娃娃。"
      },
      {
        stepIndex: 3,
        title: "舀一勺糊辣酸爽汁灌入一口包揽",
        instruction: "用小勺舀一满勺调好的酸辣糊辣椒汤汁，顺着丝娃娃敞开口缓缓注入其中，立刻整口送入口中咀嚼。",
        timerSeconds: 60,
        chefTip: "酸甜清脆、鲜香热辣、爽口爆汁在唇齿间炸裂，清爽怡人。"
      }
    ],
    tips: "贵阳街头最清爽缤纷的国民名小吃！薄如蝉翼的米面皮裹着十余种五彩脆爽时蔬丝，灌上一勺酸辣醇香的糊辣红汁，脆爽清凉酸辣生津，健康解暑。",
    tags: ["贵州", "黔菜", "丝娃娃", "薄面皮", "五彩时蔬", "街头极味"]
  }
];
