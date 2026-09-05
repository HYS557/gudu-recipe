// scripts/generate_full_jiangzhe_all.js
const fs = require('fs');
const path = require('path');

require('./generate_full_jiangzhe.js');
const part1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp_jiangzhe_part1.json'), 'utf8'));

const part2 = [
  // 25道市井下饭小炒 (rec_prov_240 ~ rec_prov_264)
  {
    id: "rec_prov_240",
    name: "江南水乡滚烫猪油响油鳝糊",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 260,
    prepTimeMinutes: 20,
    cookTimeMinutes: 8,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "煮熟划条鲜鳝鱼丝(鳝丝)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣极细碎茸", amount: 40, unit: "g", type: "secondary", isCore: true },
      { name: "嫩大葱白花与香菜末", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "现磨优质白胡椒粉", amount: 3, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "镇江陈年香醋与生抽老抽", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "白糖与绍兴花雕酒", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "熟猪油(炒制与最后泼淋)", baseAmount: 50, unit: "g", amountText: "50g", isPantryStaple: true },
      { name: "水淀粉(薄芡)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鳝丝洗净控干熟猪油爆葱姜大火煸透",
        instruction: "熟鳝丝沥干水；热锅化猪油爆葱姜丝，下鳝丝大火猛翻煸炒出香，烹花雕酒去腥。",
        timerSeconds: 120,
        chefTip: "必须大火煸透让鳝丝完全吸纳猪油醇香。"
      },
      {
        stepIndex: 2,
        title: "浓油赤酱调味水淀粉勾成浓厚鳝糊",
        instruction: "烹生抽老抽、白糖、香醋和少许高汤烧沸，淋水淀粉勾成浓稠鳝糊盛入深盘，中间扒出一小凹坑。",
        timerSeconds: 90,
        chefTip: "芡汁要浓稠能托住顶层的葱蒜末和胡椒粉。"
      },
      {
        stepIndex: 3,
        title: "凹槽填蒜茸胡椒滚烫熟猪油当众泼淋响油",
        instruction: "坑内填满蒜茸、葱花和大量白胡椒粉，热勺将冒青烟的滚烫熟猪油猛泼在蒜末胡椒上，发出清脆哔剥吱吱响声即刻上席。",
        timerSeconds: 30,
        chefTip: "当众泼油，响声清脆，蒜香、胡椒香与猪油香瞬间爆发扑鼻。"
      }
    ],
    tips: "苏沪淮扬天下闻名的宴客名作！当桌浇油吱吱作响，鳝丝滑嫩软糯浓油赤酱，蒜香与白胡椒辛香直冲鼻腔，拌饭无敌。",
    tags: ["江苏", "江浙菜", "响油鳝糊", "苏帮名菜", "滚烫泼油", "浓油赤酱"]
  },
  {
    id: "rec_prov_241",
    name: "江南开春早笋雪菜炒肉丝",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 200,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "新鲜江南冬笋或春笋(切细丝)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "优质老雪里蕻咸菜(切细碎)", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "猪里脊肉丝", amount: 150, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "白糖(提鲜中和咸味)", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "生抽酱油与花雕酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "熟猪油与植物油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鲜笋切细丝沸水焯透肉丝上浆",
        instruction: "春笋切火柴棍粗细丝，沸水加盐焯透去草酸沥干；肉丝上生抽水淀粉浆。",
        timerSeconds: 180,
        chefTip: "笋丝焯水去除涩味，保持清脆爽甜。"
      },
      {
        stepIndex: 2,
        title: "猪油滑熟肉丝下雪菜笋丝同煸",
        instruction: "猪油滑熟肉丝盛出；底油下雪菜末煸出酸香，倒入笋丝大火猛翻2分钟吸收油香。",
        timerSeconds: 150,
        chefTip: "雪菜与笋丝互补，鲜咸与清甘交融。"
      },
      {
        stepIndex: 3,
        title: "倒回肉丝加白糖大火翻炒透亮出锅",
        instruction: "倒回肉丝，加白糖中和咸味提鲜，烹花雕酒大火翻匀出锅。",
        timerSeconds: 60,
        chefTip: "白糖是江浙小炒灵魂，雪菜得糖则鲜美倍增。"
      }
    ],
    tips: "江南老百姓春季家家必吃的鲜味至尊！春笋清脆甘甜，雪菜咸酸回甘，肉丝嫩滑多汁，过泡饭拌面百吃不厌。",
    tags: ["浙江", "江浙菜", "雪菜冬笋炒肉丝", "江南春味", "咸鲜清脆", "极度下饭"]
  },
  {
    id: "rec_prov_242",
    name: "太湖小河虾高油温油爆甜壳",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 230,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "太湖鲜活小河虾", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "大葱段、生姜末", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "绵白糖", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "镇江香醋与酿造生抽", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "绍兴纯花雕酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯芝麻香油与炸油", baseAmount: 300, unit: "ml", amountText: "300ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "活河虾剪须沥干八成热油极速爆炸",
        instruction: "活虾剪去长须吸干水份；油烧至八成热(210度)，倒入河虾大火爆炸仅8-10秒至虾壳与肉脱开、金红酥脆立刻捞出。",
        timerSeconds: 30,
        chefTip: "极高油温瞬间使虾壳膨胀脱离虾肉，壳酥脆肉嫩甜。"
      },
      {
        stepIndex: 2,
        title: "调制江南传统甜酸油爆味汁",
        instruction: "锅底留少许油爆葱姜，倒入白糖、生抽、香醋、花雕酒大火熬至微稠冒细泡。",
        timerSeconds: 60,
        chefTip: "浓稠糖醋汁紧裹虾壳。"
      },
      {
        stepIndex: 3,
        title: "倒入炸虾极速颠翻吸汁淋香油起锅",
        instruction: "倒入炸好的河虾快速颠翻5秒，使糖醋汁瞬间吸入酥壳中，淋香油出锅装盘。",
        timerSeconds: 20,
        chefTip: "整只虾连壳直接嚼食，酥脆酸甜咔嚓作响。"
      }
    ],
    tips: "苏沪本帮传统经典名作！高油温爆出薄脆空心虾壳，吸饱甜酸鲜汁，入口壳脆如纸肉嫩多汁，连壳吞食口齿留香。",
    tags: ["江苏", "江浙菜", "油爆河虾", "本帮经典", "酥壳肉嫩", "甜酸爽口"]
  },
  {
    id: "rec_prov_243",
    name: "春荠菜冬笋片炒水磨白年糕",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "江南手打水磨白年糕(切薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "早春鲜嫩野荠菜(切碎)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "冬笋或春笋切薄片", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "猪肉细丝", amount: 80, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟猪油", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "年糕切薄片温水浸泡荠菜焯水挤干切碎",
        instruction: "水磨年糕切2毫米厚片温水浸泡；荠菜沸水烫10秒过冷水挤干切细碎。",
        timerSeconds: 150,
        chefTip: "荠菜焯水保翠绿，水磨年糕软糯不黏牙。"
      },
      {
        stepIndex: 2,
        title: "熟猪油化开煸炒肉丝笋片下年糕",
        instruction: "熟猪油热锅煸肉丝笋片至变色，倒入年糕片和大半碗高汤加盖焖2分钟至年糕软糯受热。",
        timerSeconds: 150,
        chefTip: "熟猪油是年糕软润透香的绝妙载体。"
      },
      {
        stepIndex: 3,
        title: "倒入荠菜碎调味大火快炒包裹起锅",
        instruction: "倒入翠绿荠菜碎，加盐糖生抽，大火快速翻炒半分钟让荠菜碎均匀包裹在年糕片上出锅。",
        timerSeconds: 40,
        chefTip: "绿白相映，年糕软糯弹牙，荠菜清香满嘴。"
      }
    ],
    tips: "江南早春第一缕清雅！春季野荠菜的天然清香浸润水磨年糕的软糯白嫩，配上爽脆笋片，碧绿白润清甜爽口。",
    tags: ["浙江", "江浙菜", "荠菜炒年糕", "江南春鲜", "软糯清香", "传统名吃"]
  },
  {
    id: "rec_prov_244",
    name: "鲜嫩茭白丝毛豆肉丝水乡炒",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 190,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "江南新鲜太湖茭白(切细丝)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜剥壳青毛豆仁", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "猪里脊肉丝", amount: 100, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "生抽酱油与料酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖与食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "熟猪油与植物油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "茭白切细丝毛豆焯水断生肉丝上浆",
        instruction: "茭白去皮切火柴粗细丝；毛豆仁沸水煮3分钟捞出；肉丝加料酒盐湿淀粉抓匀。",
        timerSeconds: 180,
        chefTip: "毛豆先煮透避免半生夹生。"
      },
      {
        stepIndex: 2,
        title: "肉丝滑油变色下毛豆茭白丝大火炒",
        instruction: "热锅下油滑熟肉丝，倒入毛豆与茭白丝大火猛翻煸炒1分半钟。",
        timerSeconds: 120,
        chefTip: "茭白自身多汁甘甜，受热迅速软化。"
      },
      {
        stepIndex: 3,
        title: "烹生抽加糖盐极速翻匀起锅",
        instruction: "烹生抽少许糖盐，大火快翻20秒裹匀出锅。",
        timerSeconds: 30,
        chefTip: "茭白脆嫩多汁，毛豆软糯，肉丝滑嫩。"
      }
    ],
    tips: "水乡江南夏天最清雅的平民家常！茭白洁白脆甜多汁，青毛豆鲜糯，三丝交融清爽可口，过稀饭绝顶舒适。",
    tags: ["江苏", "江浙菜", "茭白炒毛豆", "水乡三鲜", "清脆甘甜", "家常快炒"]
  },
  {
    id: "rec_prov_245",
    name: "黄鳝丝配火腿笋丝烂糊鳝丝",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "烩",
    calories: 220,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "熟剔黄鳝丝(切长段)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "金华火腿切极细丝", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "鲜冬笋细丝与香菇丝", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜碎末、生姜末", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓白高汤", baseAmount: 150, unit: "ml", amountText: "150ml", isPantryStaple: true },
      { name: "绍兴陈年花雕酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "优质现磨白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "熟猪油与生抽白糖", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "水淀粉(厚芡)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "熟猪油爆葱姜笋丝火腿鳝丝炒透",
        instruction: "锅化熟猪油，下葱姜笋丝火腿丝炒香，倒入鳝丝大火煸透烹花雕酒。",
        timerSeconds: 120,
        chefTip: "猪油提香，鳝丝炒出热力与酒香。"
      },
      {
        stepIndex: 2,
        title: "添高汤小火慢烩至鳝丝软糯化胶",
        instruction: "倒入浓白高汤、生抽、糖、盐，微火慢煨5分钟至鳝丝酥软入味胶质溢出。",
        timerSeconds: 300,
        chefTip: "烂糊的真谛在于慢煨使肉烂成糊，鲜味溶于稠汁。"
      },
      {
        stepIndex: 3,
        title: "勾浓稠玻璃芡撒蒜末白胡椒泼热猪油",
        instruction: "水淀粉勾成浓厚米汤芡，撒入大量蒜茸与白胡椒粉，热勺淋一勺滚油激香出锅。",
        timerSeconds: 40,
        chefTip: "软烂糊润，入口不用嚼自然咽下，醇香扑鼻。"
      }
    ],
    tips: "苏帮菜传世名门功夫烩菜！鳝丝软烂成糊，火腿笋丝提鲜，蒜香与胡椒滚油激烫，糊润滑顺入口即化，老少咸宜。",
    tags: ["江苏", "江浙菜", "烂糊鳝丝", "苏帮名菜", "软糯如糊", "蒜香浓郁"]
  },
  {
    id: "rec_prov_246",
    name: "浓油赤酱晃锅红烧草鱼尾",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 240,
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "鲜活大草鱼尾巴(顺剖四至五瓣成扇形划水)", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "大葱段、老姜厚片", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "青蒜叶段", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "传统浓酿造老抽生抽", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "多晶白冰糖与白糖", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "绍兴纯花雕酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "熟猪油与植物油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "草鱼尾顺划四刀成五瓣扇面不切断",
        instruction: "鱼尾洗净，从尾尖向前顺剖四刀剖成五瓣扇面，尾梢相连；热油两面煎至金黄微硬定型。",
        timerSeconds: 240,
        chefTip: "剖成扇形使鱼尾展开受热均匀入味深透。"
      },
      {
        stepIndex: 2,
        title: "下葱姜花雕酱油冰糖晃锅慢烧",
        instruction: "推入葱姜，烹足量花雕酒、酱油和冰糖，加开水淹没大半，加盖中小火慢烧8分钟，绝不用锅铲翻动，纯靠手腕晃锅防粘。",
        timerSeconds: 480,
        chefTip: "晃锅是红烧划水绝技，保证鱼肉条条完整不散乱。"
      },
      {
        stepIndex: 3,
        title: "转大火大晃锅收浓油糖胶汁下青蒜叶",
        instruction: "揭盖转大火收汁，手腕有节奏大晃锅，糖与胶质收至浓稠如琥珀包裹扇形鱼尾，撒青蒜叶起锅滑入长盘。",
        timerSeconds: 120,
        chefTip: "红润油亮，鱼肉活肉鲜嫩肥美，胶质丰富。"
      }
    ],
    tips: "苏沪本帮极考晃锅功力的头牌鱼馔！鱼尾划水乃鱼身运动最多的活肉，浓油赤酱胶质黏唇，鱼肉细腻肥润滑爽。",
    tags: ["江苏", "江浙菜", "红烧划水", "本帮经典", "浓油赤酱", "晃锅绝技"]
  },
  {
    id: "rec_prov_247",
    name: "早春青蚕豆猪油慢推豆瓣酥",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 180,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "江南新鲜青嫩蚕豆(剥去外皮得纯翠豆瓣)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "老雪里蕻细末", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "小葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟猪油", baseAmount: 35, unit: "g", amountText: "35g", isPantryStaple: true },
      { name: "白糖与食用精盐", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "早春鲜蚕豆剥去两层皮水煮酥烂",
        instruction: "蚕豆剥壳再剥去豆皮得翠绿豆瓣，沸水煮5分钟至彻底酥面软烂捞出。",
        timerSeconds: 300,
        chefTip: "煮至用勺一压即成泥状态。"
      },
      {
        stepIndex: 2,
        title: "熟猪油化开下豆瓣用勺背慢推成泥",
        instruction: "锅中化开熟猪油，下葱白与雪菜末炒香，倒入豆瓣，用勺背慢慢压碎推炒成绵密细腻的半泥半粒状豆瓣酥。",
        timerSeconds: 240,
        chefTip: "猪油渗透进豆沙中，油润泛光无豆涩味。"
      },
      {
        stepIndex: 3,
        title: "调入白糖精盐推炒至起沙抱团出盘",
        instruction: "调入白糖与少许盐，继续推炒至水分收干、豆瓣酥油润起沙合抱成团即可出锅。",
        timerSeconds: 90,
        chefTip: "细腻绵密，入口沙酥，猪油香与蚕豆天然清甜交融。"
      }
    ],
    tips: "江南早春茶饭名门至简珍馐！纯手工剥去双皮的青豆瓣在熟猪油中推至起沙，细腻如膏入口即化，清甜粉糯豆香扑鼻。",
    tags: ["江苏", "江浙菜", "雪菜豆瓣酥", "早春限定", "细腻绵密", "猪油清香"]
  },
  {
    id: "rec_prov_248",
    name: "江南早春草头白酒十秒快翻",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 90,
    prepTimeMinutes: 5,
    cookTimeMinutes: 2,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "江南早春鲜嫩三叶草头(金花菜)", amount: 300, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "优质浓香型高度白酒(或茅台五粮液)", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "白糖", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "纯熟猪油", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鲜嫩草头摘去老梗甩干表面生水",
        instruction: "草头只留最嫩的三叶嫩尖，洗净彻底甩干水分备用。",
        timerSeconds: 120,
        chefTip: "带生水下锅会降温变黑出水，必须彻底甩干。"
      },
      {
        stepIndex: 2,
        title: "熟猪油大火烧至冒青烟下草头狂翻",
        instruction: "大铁锅烧至冒白烟，化开熟猪油，倒入草头极速颠翻两下。",
        timerSeconds: 15,
        chefTip: "油热锅滚，瞬间锁住草头叶绿素。"
      },
      {
        stepIndex: 3,
        title: "沿锅边猛烹高度白酒加白糖十秒起锅",
        instruction: "立刻沿锅边烹入高度白酒激出大火苗，迅速撒糖和盐，狂翻5秒草头变软翠绿即刻关火倒盘。",
        timerSeconds: 15,
        chefTip: "全过程十秒，酒香在高温中挥发带走草腥，留下醉人酒香与清甜。"
      }
    ],
    tips: "苏沪名菜生煸草头最高境界！借高度白酒烈焰瞬间挥发，叶嫩若丝碧绿如翡翠，酒香扑鼻软糯甘甜，春意盎然。",
    tags: ["江苏", "江浙菜", "酒香草头", "本帮名品", "高度白酒", "十秒极速"]
  },
  {
    id: "rec_prov_249",
    name: "江南薄千张裹肉馅红烧百叶包",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 230,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "江南极薄薄百叶(千张皮切小方张)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "三肥七瘦纯猪肉馅", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "荸荠碎丁或马蹄碎", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "大葱生姜细末", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "酿造生抽与老抽酱油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "白糖与绍兴料酒", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "高汤或开水", baseAmount: 200, unit: "ml", amountText: "200ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "百叶切方块卷入肉馅包成整齐扁包",
        instruction: "肉馅加葱姜水料酒马蹄丁盐打上劲；薄百叶切15厘米方片，包入肉馅卷两折收口成枕头状小包。",
        timerSeconds: 300,
        chefTip: "封口朝下码放，煮制时不散开。"
      },
      {
        stepIndex: 2,
        title: "小火慢煎封口烹料酒酱油红烧",
        instruction: "平底锅少油，封口朝下微煎定型，下生抽老抽料酒冰糖和高汤煮沸。",
        timerSeconds: 180,
        chefTip: "微煎百叶皮紧实不易破，更吸汤汁。"
      },
      {
        stepIndex: 3,
        title: "加盖煨炖十分钟百叶吸饱肉汁大火收浓",
        instruction: "加盖中小火焖煮10分钟至肉馅熟透百叶软滑，转大火晃锅收汁至浓汤红亮出盘。",
        timerSeconds: 600,
        chefTip: "百叶层层吸透红烧肉汤，软糯多汁。"
      }
    ],
    tips: "江南水乡老百姓饭桌常驻头牌！薄百叶层层包裹鲜美肉馅，吸饱红烧浓油汤汁软糯鲜甜，咬一口肉汁四溢。",
    tags: ["江苏", "江浙菜", "百叶包肉", "传统家常", "软糯多汁", "下饭必备"]
  },
  {
    id: "rec_prov_250",
    name: "清明鲜水螺蛳肉急炒嫩韭黄",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 150,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "太湖活螺蛳挑出纯嫩螺蛳肉", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "江南鲜嫩金黄韭黄段", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "生姜细丝、红椒丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油与花雕酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "螺蛳肉盐水揉搓去泥膜沸水微烫",
        instruction: "螺肉加少许盐和淀粉揉搓洗去粘液泥膜，沸水加料酒焯烫3秒捞出沥水；韭黄切寸长段。",
        timerSeconds: 150,
        chefTip: "揉洗去泥沙，极速焯水保持螺肉脆嫩。"
      },
      {
        stepIndex: 2,
        title: "熟猪油热锅爆姜丝下螺肉大火煸透",
        instruction: "热锅化熟猪油，下姜丝爆香，倒入螺蛳肉大火翻炒20秒烹花雕酒。",
        timerSeconds: 30,
        chefTip: "猪油完全衬托螺肉的湖水清甜。"
      },
      {
        stepIndex: 3,
        title: "倒入韭黄段大火狂颠十秒即刻出锅",
        instruction: "倒入韭黄段，烹生抽、盐、少许糖，大火狂颠10秒韭黄变软即出盘。",
        timerSeconds: 15,
        chefTip: "韭黄极嫩不可久炒，金黄爽脆螺肉弹牙。"
      }
    ],
    tips: "清明螺赛过鹅！早春螺肉肥嫩无子脆韧弹牙，搭配娇嫩金黄的韭黄极速快炒，脆爽鲜甜扑鼻，春鲜绝配。",
    tags: ["江苏", "江浙菜", "韭黄炒螺蛳肉", "水乡春味", "脆嫩弹牙", "极速鲜香"]
  },
  {
    id: "rec_prov_251",
    name: "江南早春雷笋浓油赤酱焖透",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 140,
    prepTimeMinutes: 12,
    cookTimeMinutes: 15,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "早春江南野生天目雷笋或春笋", amount: 400, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "纯正生抽酱油与酿造老抽", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "白砂糖与冰糖粉", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "纯正芝麻香油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "熟猪油或花生油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "雷笋刀背拍扁切寸长段滚刀块",
        instruction: "雷笋剥壳削去老根，刀面用力拍松切成4厘米长段，拍扁使笋身裂开更吸浓汁。",
        timerSeconds: 150,
        chefTip: "刀拍比纯刀切更能使酱汁渗入笋肉纤维深处。"
      },
      {
        stepIndex: 2,
        title: "多倒熟油中火煸透笋段至微黄起皱",
        instruction: "锅中多倒油，下雷笋中火慢慢煸炒3-4分钟，至笋段水分收缩表面泛出金黄焦斑起微皱。",
        timerSeconds: 240,
        chefTip: "油焖的关键在重油煸透，去青气增油润。"
      },
      {
        stepIndex: 3,
        title: "下生抽老抽白糖微火焖十分钟大火挂汁",
        instruction: "倒入生抽、老抽、足量白糖和少许开水，加盖中小火焖煮8分钟，转大火不断晃锅将糖汁收至红亮如胶裹满春笋，淋香油出锅。",
        timerSeconds: 480,
        chefTip: "甜咸适口，笋脆若肉，浓油赤酱红润发亮。"
      }
    ],
    tips: "江南名菜油焖春笋的正统古法！重油重糖，雷笋脆嫩甘甜无一丝涩渣，浓汁挂壳红润油亮，冷吃热吃皆冠绝江南。",
    tags: ["浙江", "江浙菜", "油焖春笋", "春季限定", "脆嫩甘甜", "浓油赤酱"]
  },
  {
    id: "rec_prov_252",
    name: "水嫩鲜水芹配五香茶干肉丝",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 170,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "江南纯白根鲜水芹菜(切寸段)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "南京老茶干或五香香干(切细丝)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "猪里脊肉细丝", amount: 80, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖与精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "水芹摘叶留白嫩茎切段香干切丝",
        instruction: "水芹摘净叶子，只取白嫩多孔空心茎切寸段；香干切细丝沸水烫软。",
        timerSeconds: 150,
        chefTip: "纯用水芹嫩茎，口感爽脆多汁无残渣。"
      },
      {
        stepIndex: 2,
        title: "熟猪油煸肉丝香干丝炒透",
        instruction: "热锅化熟猪油煸肉丝变白，下香干丝大火煸炒至香干边缘焦香吸收肉脂。",
        timerSeconds: 120,
        chefTip: "香干炒热出豆香五香味。"
      },
      {
        stepIndex: 3,
        title: "倒入水芹狂翻半分钟调味出锅",
        instruction: "倒入水芹段，烹生抽盐少许糖，大火狂颠30秒断生即出盘。",
        timerSeconds: 30,
        chefTip: "水芹极脆多汁，大火急翻保持中空脆嫩爆水。"
      }
    ],
    tips: "江南水乡最地道的清鲜代表！水芹空心清脆爆汁清香扑鼻，五香茶干软韧耐嚼，荤素相宜爽利开胃。",
    tags: ["江苏", "江浙菜", "水芹炒香干", "水乡清香", "空心脆嫩", "家常小炒"]
  },
  {
    id: "rec_prov_253",
    name: "太湖鲜嫩白鱼片快炒青蒜段",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 160,
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "太湖鲜活白鱼(剔取净鱼肉片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "嫩青蒜苗(切斜段)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "生姜细丝", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "蛋清与水淀粉", amount: 25, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "绍兴纯酿料酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "熟猪油与植物油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "太湖白鱼片薄片蛋清淀粉上浆",
        instruction: "白鱼顺刺斜片大薄片加料酒盐白胡椒抓透，加蛋清生粉抓匀封油冷藏。",
        timerSeconds: 240,
        chefTip: "太湖白鱼肉质极娇嫩，上蛋清薄浆锁水。"
      },
      {
        stepIndex: 2,
        title: "温油极速滑散鱼片雪白捞出",
        instruction: "熟猪油温油下鱼片轻轻晃动划散，15秒见鱼片玉白断生捞出控油。",
        timerSeconds: 25,
        chefTip: "温油滑熟，鱼片完整不散、嫩如豆腐。"
      },
      {
        stepIndex: 3,
        title: "青蒜下锅爆香鱼片推入大火颠匀",
        instruction: "底油爆姜丝下青蒜段大火翻炒5秒出香，倒回鱼片烹料酒少许盐，手腕轻颠翻匀起锅。",
        timerSeconds: 25,
        chefTip: "青蒜辛香与鱼片清甜绝配，入口即化。"
      }
    ],
    tips: "太湖三白中白鱼的清爽快炒！白鱼肉嫩如羊脂玉，青蒜苗辛香提鲜，入口清甜爽滑，尽显太湖水色天光之鲜。",
    tags: ["江苏", "江浙菜", "清炒太湖白鱼", "太湖三白", "滑嫩如玉", "清鲜无比"]
  },
  {
    id: "rec_prov_254",
    name: "江南水乡十色时蔬细丝素什锦",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 130,
    prepTimeMinutes: 20,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "冬笋丝、胡萝卜丝、金针菇", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "木耳丝、香菇丝、黄花菜", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "荠菜末、油面筋丝、千张丝、藕丝", amount: 120, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "纯正芝麻香油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "生抽酱油与白糖", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "十样时蔬细致切丝分批焯烫沥干",
        instruction: "所有十种食材切成均匀细长丝，分别焯开水断生过凉水彻底挤干。",
        timerSeconds: 300,
        chefTip: "十色十味，十全十美，挤干水分炒时不泄水。"
      },
      {
        stepIndex: 2,
        title: "大锅下足量芝麻香油大火翻炒",
        instruction: "大铁锅烧热多倒芝麻香油，倒入全部蔬菜丝大火猛翻煸透。",
        timerSeconds: 120,
        chefTip: "纯靠芝麻香油起锅，赋予素菜浓郁脂香。"
      },
      {
        stepIndex: 3,
        title: "生抽白糖调味慢翻至水分收干放凉",
        instruction: "下生抽、白糖、盐，中火慢慢翻炒至汤汁收干，油润透亮盛出自然放凉食用。",
        timerSeconds: 150,
        chefTip: "江南传统素什锦放凉后麻油香更浓郁，爽口无比。"
      }
    ],
    tips: "江南过年与宴席必备十全十美素味名馔！十色细丝脆嫩软韧相间，芝麻香油香浓醇厚，清爽适口解腻无双。",
    tags: ["江苏", "江浙菜", "素什锦", "江南年味", "十全十美", "麻油清香"]
  },
  {
    id: "rec_prov_255",
    name: "清香野荠菜猪油翻炒嫩冬笋",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 120,
    prepTimeMinutes: 12,
    cookTimeMinutes: 5,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "早春野荠菜(洗净挤干切碎)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩冬笋(切薄菱形片)", amount: 200, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "纯熟猪油", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "清鸡汤", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "冬笋切片沸水焯透荠菜烫十秒切碎",
        instruction: "冬笋切薄片沸水焯煮3分钟去涩；荠菜烫10秒过凉水挤干切粗碎。",
        timerSeconds: 180,
        chefTip: "笋片焯透甘甜，荠菜过冷水保翠绿。"
      },
      {
        stepIndex: 2,
        title: "熟猪油化开下笋片中火煸至微焦黄",
        instruction: "锅化熟猪油，下冬笋片中火慢煸1分半钟至表面油润泛微黄出香。",
        timerSeconds: 90,
        chefTip: "猪油渗透进冬笋孔隙，清甜翻倍。"
      },
      {
        stepIndex: 3,
        title: "倒入荠菜碎高汤白糖大火翻匀出锅",
        instruction: "倒入荠菜碎烹清汤、盐、白糖提鲜，大火快炒20秒翻匀即出盘。",
        timerSeconds: 30,
        chefTip: "绿白相间，荠菜香气逼人，冬笋清脆爽甜。"
      }
    ],
    tips: "江南春季山野与水乡的浪漫对话！野生荠菜的独有清芬包裹鲜甜脆嫩的冬笋片，纯熟猪油赋予极致油润，清新可人。",
    tags: ["浙江", "江浙菜", "荠菜炒冬笋", "春鲜雅韵", "脆甜清香", "低卡健康"]
  },
  {
    id: "rec_prov_256",
    name: "宁波深绿深海苔条炸黄鱼柳",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 280,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "鲜活小黄鱼(剔骨取纯净鱼柳条)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "宁波优质深绿干苔条(碾成细绒碎)", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "面粉与纯生粉", amount: 60, unit: "g", type: "secondary", isCore: true },
      { name: "蛋清与清水", amount: 50, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "绍兴纯酿花雕酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "炸油", baseAmount: 400, unit: "ml", amountText: "400ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "小黄鱼剔柳条调拌翠绿苔菜脆糊",
        instruction: "黄鱼剔下无刺鱼柳加料酒盐腌底味；面粉生粉加水蛋清调成脆糊，拌入碾碎的宁波干苔菜绒成翠绿苔糊。",
        timerSeconds: 240,
        chefTip: "苔菜绒均匀散在糊中，炸出来翠绿如玉、海苔香扑鼻。"
      },
      {
        stepIndex: 2,
        title: "鱼柳裹满苔糊六成油温下锅慢炸定型",
        instruction: "鱼柳逐条裹满翠绿苔糊，入六成热油锅炸至外壳硬脆浮起捞出。",
        timerSeconds: 180,
        chefTip: "定型慢炸锁住鱼肉鲜嫩水分。"
      },
      {
        stepIndex: 3,
        title: "七成热油复炸二十秒逼油金绿酥脆",
        instruction: "油温升至七成热复炸20秒捞出沥干摆盘趁热上桌。",
        timerSeconds: 30,
        chefTip: "外壳脆如薄纸，苔香浓郁，鱼肉细嫩若雪无刺。"
      }
    ],
    tips: "宁波四明山海代表性传统名点！深海苔条赋予其天然碧绿翡翠色泽与浓郁海苔清香，外脆内嫩蒜瓣鱼肉，咬下满嘴海味。",
    tags: ["浙江", "江浙菜", "苔条黄鱼", "宁波名吃", "外酥里嫩", "海苔清香"]
  },
  {
    id: "rec_prov_257",
    name: "苏式红曲酱汁肉炒泡天目笋干",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 310,
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "苏式传统红曲酱汁肉切厚片", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "泡发天目山野笋干丝", amount: 180, unit: "g", type: "main", isCore: true },
      { name: "大蒜叶斜段", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "酱汁肉原浓肉汤", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "生抽酱油与白糖", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "天目笋干温水泡透切段焯水",
        instruction: "天目野笋干温水泡发6小时淘洗干净切寸段焯水；红曲酱汁肉切厚片。",
        timerSeconds: 200,
        chefTip: "笋干吸足水份柔韧爽口。"
      },
      {
        stepIndex: 2,
        title: "猪油煸透笋干下酱汁肉原汤慢煨",
        instruction: "热锅猪油下笋干大火煸透出香，倒入酱汁肉原汤与白糖生抽，加盖焖5分钟至笋干吸透红曲肉汁。",
        timerSeconds: 300,
        chefTip: "笋干极其吸油吸味，饱吸肉香后软弹甘美。"
      },
      {
        stepIndex: 3,
        title: "倒入酱汁肉厚片大火颠翻下大蒜叶起锅",
        instruction: "倒入红曲酱汁肉厚片和大蒜叶，大火猛翻40秒挂满红油亮汁出锅。",
        timerSeconds: 60,
        chefTip: "肉红如玛瑙入口即化，笋干脆嫩咸甜。"
      }
    ],
    tips: "苏州春季时令经典老味道！红曲酱汁肉色泽红艳如红珊瑚，肥润软糯，配上吸透肉汁的天目山笋干，回甘无穷。",
    tags: ["江苏", "江浙菜", "酱汁肉", "苏式名品", "红曲原汁", "咸甜酥软"]
  },
  {
    id: "rec_prov_258",
    name: "太湖莼菜白胡椒高汤滑肉丝",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "soup",
    cookingMethod: "煮",
    calories: 130,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "太湖新鲜滑溜嫩莼菜", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "猪里脊肉细丝", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "金华火腿切细丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "清鸡汤高汤", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: true },
      { name: "白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "莼菜清水漂洗沥干肉丝上薄生粉浆",
        instruction: "太湖莼菜用清水轻柔漂洗沥出，保护自带透明天然胶质膜；肉丝加少许盐生粉抓匀上浆。",
        timerSeconds: 150,
        chefTip: "莼菜天然富含胶质多糖，洗涤时不可用力搓揉。"
      },
      {
        stepIndex: 2,
        title: "清鸡汤入锅烧沸滑入肉丝火腿丝",
        instruction: "锅中倒入清高汤烧开，推入肉丝用筷子快速划散变白断生，下火腿丝。",
        timerSeconds: 120,
        chefTip: "肉丝滑熟保持极致软嫩。"
      },
      {
        stepIndex: 3,
        title: "推入莼菜极速沸腾调盐胡椒出盅",
        instruction: "滑入莼菜，汤一沸腾立刻关火，调精盐、白胡椒粉，淋入熟猪油盛入汤盅。",
        timerSeconds: 30,
        chefTip: "莼菜入汤即熟不可久煮，滑溜顺口直滑入喉。"
      }
    ],
    tips: "千里莼羹未下盐！晋代张翰莼鲈之思传世名汤，莼菜外裹天然果冻般透明胶质，入口滑顺爽口，清鲜高雅暖胃润心。",
    tags: ["江苏", "江浙菜", "莼菜肉丝", "莼鲈之思", "滑溜润喉", "江南名汤"]
  },
  {
    id: "rec_prov_259",
    name: "杭州泗乡薄豆腐皮脆炸响铃",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 270,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "杭州富阳泗乡优质特薄豆腐皮", amount: 4, unit: "大张", type: "main", isCore: true },
      { name: "调味鲜猪肉末(加少许虾泥)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "甜面酱与花椒盐(佐蘸料)", amount: 20, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "炸油", baseAmount: 400, unit: "ml", amountText: "400ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "薄豆腐皮铺薄肉馅紧密卷成长筒切段",
        instruction: "豆腐皮微喷水雾回软，一端抹极薄一层肉馅，紧紧卷成长筒，用蛋清封口切成寸长小段。",
        timerSeconds: 240,
        chefTip: "肉馅要少而薄，只为提香，过多则影响油炸膨松脆响。"
      },
      {
        stepIndex: 2,
        title: "五成温油逐个滑入中火炸膨胀金黄",
        instruction: "油温五成热下响铃段，中火炸至豆腐皮膨胀起泡、金黄酥脆浮起捞出。",
        timerSeconds: 150,
        chefTip: "受热膨胀呈空心卷壳状，酥松易碎。"
      },
      {
        stepIndex: 3,
        title: "控油装盘随甜面酱与椒盐上桌",
        instruction: "控干余油装盘，夹起咬下发出清脆如响铃的咔嚓声，蘸甜面酱食之。",
        timerSeconds: 30,
        chefTip: "如铃声般清脆脆响，外壳一触即碎，豆香肉香交织。"
      }
    ],
    tips: "杭帮传统名点脆绝江南！泗乡特薄豆腐皮卷肉炸制，形如马鞍铃铛，入口咔嚓作响如铃声清越，酥松香脆空灵无双。",
    tags: ["浙江", "江浙菜", "干炸响铃", "杭州名点", "酥脆如铃", "豆香四溢"]
  },
  {
    id: "rec_prov_260",
    name: "苏州嫩鸡头米手剥河虾仁",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 140,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "苏州新鲜手剥芡实(嫩鸡头米)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "活太湖小河虾纯手剥虾仁", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "蛋清与纯水淀粉", amount: 20, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "清鸡汤", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "绍兴纯酿花雕酒", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "天然食用精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "熟猪油(滑油用)", baseAmount: 150, unit: "ml", amountText: "150ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "嫩鸡头米沸水微焯手剥虾仁上浆",
        instruction: "新鲜鸡头米沸水加少许糖焯烫40秒沥干；活虾仁挤干上蛋清薄浆冷藏静置。",
        timerSeconds: 150,
        chefTip: "嫩鸡头米不可久煮，保持弹牙软糯如小珍珠。"
      },
      {
        stepIndex: 2,
        title: "三成温油滑熟虾仁粉白浮起",
        instruction: "熟猪油温油下虾仁划散至粉白刚断生捞出沥油。",
        timerSeconds: 20,
        chefTip: "温油快滑保持脆嫩爆汁。"
      },
      {
        stepIndex: 3,
        title: "高汤清汁极薄水淀粉推匀起锅",
        instruction: "锅底余油下清高汤、少许花雕酒和盐，水淀粉勾极薄琉璃芡，推入鸡头米与虾仁晃匀出盘。",
        timerSeconds: 25,
        chefTip: "双白合璧如珍珠玉丸，清淡天然极致鲜甜。"
      }
    ],
    tips: "苏州水八仙与太湖珍宝神仙合璧！嫩鸡头米软糯Q弹嚼劲清甜，河虾仁脆弹爆汁，清淡高雅尽展姑苏风流韵味。",
    tags: ["江苏", "江浙菜", "鸡头米炒虾仁", "苏州水八仙", "软糯Q弹", "极清极鲜"]
  },
  {
    id: "rec_prov_261",
    name: "早春青嫩蚕豆焖炒土鸡蛋",
    region: "浙江",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 190,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "早春青嫩蚕豆(剥除外壳)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "农家散养笨鸡蛋", amount: 3, unit: "个", type: "main", isCore: true },
      { name: "香葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "自榨纯花生油或熟菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "白糖", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "青嫩蚕豆中火焖炒微起虎皮",
        instruction: "嫩蚕豆洗净；热油下蚕豆中火翻炒加两勺水加盖焖2分钟至蚕豆酥软断生表皮微皱。",
        timerSeconds: 150,
        chefTip: "先将蚕豆焖至软糯清甜熟透。"
      },
      {
        stepIndex: 2,
        title: "鸡蛋液打匀加盐倒入锅中抱住蚕豆",
        instruction: "鸡蛋加盐打散，将蛋液淋在受热蚕豆表面，中小火慢慢烘至底部金黄定型。",
        timerSeconds: 90,
        chefTip: "让蛋液包裹住一颗颗圆润青蚕豆。"
      },
      {
        stepIndex: 3,
        title: "翻面大火滑炒大块撒葱花出锅",
        instruction: "轻轻翻面大火划散成金黄大块，撒葱花少许白糖翻匀出锅。",
        timerSeconds: 40,
        chefTip: "蛋香浓郁，蚕豆粉糯清甜，极具春天气息。"
      }
    ],
    tips: "江南水乡农家春季最质朴的清甜！翠绿青蚕豆粉糯绵软，金黄土鸡蛋松软焦香，清甜与蛋香完美交织。",
    tags: ["浙江", "江浙菜", "蚕豆炒鸡蛋", "早春春鲜", "粉糯清甜", "家常快手"]
  },
  {
    id: "rec_prov_262",
    name: "江南野马兰头细碎拌香干麻油",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "拌",
    calories: 110,
    prepTimeMinutes: 15,
    cookTimeMinutes: 3,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "早春江南野生嫩马兰头", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "五香茶干切极细细碎丁", amount: 80, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "纯压榨小磨白芝麻香油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "白糖(提鲜和味)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "野马兰头沸水加盐烫十秒彻底挤干",
        instruction: "野马兰头挑洗干净，沸水加盐焯烫15秒捞出投入冰水浸凉，用双手用力彻底挤干水分成菜团。",
        timerSeconds: 150,
        chefTip: "必须彻底挤干水分，拌入麻油才不会水塌塌。"
      },
      {
        stepIndex: 2,
        title: "马兰头与香干细切成微小细碎粒",
        instruction: "将挤干的马兰头细细切碎成碎末；五香茶干切成比米粒还小的小碎丁。",
        timerSeconds: 180,
        chefTip: "切得极细，两者颗粒均匀交融。"
      },
      {
        stepIndex: 3,
        title: "加盐白糖大量小磨香油拌匀压模造型",
        instruction: "放入碗中，调入精盐、白糖，淋入大量小磨芝麻香油充分拌匀，装入模具压成圆柱形脱模装盘。",
        timerSeconds: 60,
        chefTip: "深绿白黄相映，芝麻油香扑鼻，草本清芬醒脾提神。"
      }
    ],
    tips: "江南早春冷盘头牌清芬至味！野生马兰头的微苦清冽与五香茶干的韧香相拥，纯正小磨香油浇淋拌和，满口春风清爽宜人。",
    tags: ["江苏", "江浙菜", "马兰头拌香干", "春季野菜", "麻油清香", "醒脾爽口"]
  },
  {
    id: "rec_prov_263",
    name: "黄鳝一寸大段带骨大蒜生炒",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "活水黄鳝切寸段(鳝筒带骨)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "整瓣去皮大蒜(整蒜瓣整把)", amount: 60, unit: "g", type: "secondary", isCore: true },
      { name: "青红椒块、姜片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓酱油与生抽", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "绍兴纯酿花雕酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "白糖与食用精盐", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "熟猪油与植物油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "活鳝鱼开膛去内脏切一寸圆段擦干",
        instruction: "黄鳝去内脏洗净切3厘米带骨圆筒段，擦干水分备用。",
        timerSeconds: 180,
        chefTip: "带骨鳝筒生炒，肉质比剔骨鳝丝更紧致弹牙多汁。"
      },
      {
        stepIndex: 2,
        title: "熟猪油慢煎整蒜瓣至金黄软甜",
        instruction: "熟猪油热锅，下整蒜瓣中火慢煎2分钟至表面焦黄、内里熟软如栗子盛出底油留锅。",
        timerSeconds: 120,
        chefTip: "蒜瓣煎透甜而不辣，蒜油浸润全锅。"
      },
      {
        stepIndex: 3,
        title: "鳝筒下锅大火生炒变色煨烧收汁",
        instruction: "下鳝筒大火爆炒至鱼肉泛白微蜷曲，烹入足量花雕酒酱油糖，倒回熟蒜瓣焖烧4分钟至汤汁浓红紧裹鳝筒出锅。",
        timerSeconds: 300,
        chefTip: "生炒收汁油亮红润，肉骨易嚼，大蒜绵软比肉香。"
      }
    ],
    tips: "苏帮水乡渔家传统硬核名炒！黄鳝带骨切筒生炒，肉质紧韧弹牙肉汁丰沛，整头大蒜煨得软糯如栗，酱香浓烈下酒极品。",
    tags: ["江苏", "江浙菜", "生炒鳝筒", "带骨鲜香", "整蒜软糯", "水乡名炒"]
  },
  {
    id: "rec_prov_264",
    name: "太湖鲜嫩河蚌肉片炒金花菜",
    region: "江苏",
    cuisineCategory: "江浙菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 160,
    prepTimeMinutes: 20,
    cookTimeMinutes: 5,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "太湖鲜活大河蚌斧足肉(拍松斜切薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩早春金花菜(草头)", amount: 180, unit: "g", type: "main", isCore: true },
      { name: "生姜细丝、大葱丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "绍兴陈年花雕酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "蚌肉厚边拍松斜刀片薄片沸水闪烫",
        instruction: "河蚌肉洗净，肉厚处用刀背轻轻捶拍断筋，斜切薄片；沸水中加料酒极速焯烫3秒捞出沥干。",
        timerSeconds: 180,
        chefTip: "刀背捶拍能彻底打断蚌肉强韧纤维，炒出来脆嫩不韧不塞牙。"
      },
      {
        stepIndex: 2,
        title: "熟猪油大火爆姜葱下蚌肉急翻",
        instruction: "锅化熟猪油大火烧热爆香姜葱丝，倒入蚌肉片旺火狂翻10秒，烹入花雕酒除腥。",
        timerSeconds: 20,
        chefTip: "大火快翻保持蚌肉爽脆多汁。"
      },
      {
        stepIndex: 3,
        title: "倒入金花菜狂翻十秒烹白酒起锅",
        instruction: "倒入金花菜，加盐白糖提鲜，大火狂颠10秒至金花菜变软翠绿即刻出锅。",
        timerSeconds: 15,
        chefTip: "蚌肉脆甜爆水，金花菜娇嫩芬芳，相映生辉。"
      }
    ],
    tips: "春天江南水乡最难得的乡野至鲜！蚌肉经古法敲松爽脆弹牙爆汁无渣，金花菜嫩如绢帛酒香四溢，清脆与娇嫩的绝美协奏。",
    tags: ["江苏", "江浙菜", "蚌肉炒金花菜", "水乡春鲜", "爽脆弹牙", "极速快炒"]
  }
];

const fullJiangzhe = [...part1, ...part2];
console.log(`江浙菜生成完毕，总计: ${fullJiangzhe.length} 道菜 (预期37道)`);
if (fullJiangzhe.length !== 37) {
  throw new Error(`江浙菜数量不符: ${fullJiangzhe.length}`);
}

const fileContent = `// scripts/data_177_jiangzhe.js\n// 江浙淮扬水韵 37道名菜名肴与市井下饭小炒 (rec_prov_228 ~ rec_prov_264)\nmodule.exports = ${JSON.stringify(fullJiangzhe, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'data_177_jiangzhe.js'), fileContent, 'utf8');
console.log(`成功写入 scripts/data_177_jiangzhe.js!`);
