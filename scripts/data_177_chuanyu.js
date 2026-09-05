// scripts/data_177_chuanyu.js
// 川渝巴蜀 37道名菜名肴与市井下饭小炒 (rec_prov_121 ~ rec_prov_157)
module.exports = [
  {
    id: "rec_prov_121",
    name: "国宴川菜头牌传统开水白菜",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "soup",
    cookingMethod: "煮",
    calories: 120,
    prepTimeMinutes: 30,
    cookTimeMinutes: 60,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "北方黄芽白菜极嫩菜心", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "老母鸡老母鸭排骨金华火腿吊制清高汤", amount: 800, unit: "ml", type: "main", isCore: true },
      { name: "纯瘦猪肉茸与鸡胸肉茸(红白两稍扫汤)", amount: 150, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "绍兴陈年花雕酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "天然食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "现磨极细白胡椒粒", baseAmount: 1, unit: "g", amountText: "1g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "红白双稍古法极细扫汤清澈如茶",
        instruction: "母鸡火腿浓汤大火烧开，先下猪肉茸(红稍)吸附杂质，再下鸡肉茸(白稍)二次吸脂净汤，反复提滤至汤色清澈透亮宛如金黄绿茶，不见一丝浮油与肉渣。",
        timerSeconds: 1800,
        chefTip: "扫汤是川菜高级清汤的绝技，肉茸入微滚汤中能如磁铁般吸尽浮末杂质。"
      },
      {
        stepIndex: 2,
        title: "大叶黄芽白菜心修整扎针焯水",
        instruction: "白菜剥至最内部嫩黄菜心，用银针或竹签在菜梗密扎细孔方便入味，在沸水中加少许盐快速焯烫30秒至断生捞出过冷开水挤干。",
        timerSeconds: 180,
        chefTip: "扎孔能使看似清淡的白菜内部在短时间内饱吸鲜浓高汤。"
      },
      {
        stepIndex: 3,
        title: "滚烫特级开水清汤反复淋烫上席",
        instruction: "将菜心立于大汤盅中央呈含苞待放状，用滚沸的顶级清高汤由上至下反复浇淋烫熟菜心，最后注满清汤加盖微焖2分钟上桌。",
        timerSeconds: 300,
        chefTip: "清澈看似无油如白水，实则融汇母鸡蹄髈火腿万千鲜华，入口醇鲜清甜震撼味蕾。"
      }
    ],
    tips: "国宴川菜巅峰代表神作！毛主席周总理极其赞誉的传世名馔。视之如白水初沸，食之则回甘至鲜，大羹不和至简至美，彻底颠覆川菜只有麻辣的世俗偏见。",
    tags: ["四川", "川菜", "开水白菜", "国宴名菜", "清汤巅峰", "传统名馔"]
  },
  {
    id: "rec_prov_122",
    name: "眉州传统名门东坡肘子",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "蒸",
    calories: 460,
    prepTimeMinutes: 25,
    cookTimeMinutes: 90,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "带皮新鲜农家猪前肘(刮洗净整只)", amount: 1000, unit: "g", type: "main", isCore: true },
      { name: "四川特产白雪豆(温水提前泡发软透)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "老生姜块与大葱白", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "眉州秘制复合红油豆瓣姜葱汁", amount: 60, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "四川优质纯红油辣椒与豆瓣酱", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "酿造特级生抽与保宁醋", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "纯白细砂糖与熟芝麻香油", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "铁锅火炙猪皮刮洗焯透去腥",
        instruction: "肘子皮在烧热铁锅上干烙至微焦除去细毛，温水泡软用钢丝球刮白洗净，冷水加葱姜料酒焯透捞出。",
        timerSeconds: 400,
        chefTip: "炙皮是肘子皮糯有嚼劲、彻底消除腥臊油脂味的必经工序。"
      },
      {
        stepIndex: 2,
        title: "砂锅铺雪豆文火慢煨两小时至酥糯",
        instruction: "砂锅底层铺满泡好的白雪豆与姜葱，放入肘子，倒入山泉水大火烧沸撇净浮沫，加盖转微火慢煨2小时至筷子轻轻一扎即穿透、皮糯肉烂。",
        timerSeconds: 5400,
        chefTip: "雪豆吸足肘子油脂变得沙糯绵甜，原汤奶白醇厚浓稠。"
      },
      {
        stepIndex: 3,
        title: "捞出原只码盘浇盖酸辣红油姜汁",
        instruction: "将整只软烂肘子捞出盛入深盘，将雪豆捞出围在四周。用炒锅炒香豆瓣酱、生抽、保宁醋、白糖与红油姜末调成红亮鱼香酸辣汁趁热浇盖。",
        timerSeconds: 300,
        chefTip: "原汁白炖保留纯鲜，淋上红油酸辣姜汁，肥而不腻粑糯黏唇。"
      }
    ],
    tips: "苏东坡故里四川眉州绝世佳品！肥而不腻，粑而不烂，雪豆绵沙，肘子皮肉如脂玉般软糯黏唇，红油酸辣汁化解所有油脂，醇美至极。",
    tags: ["四川", "川菜", "东坡肘子", "眉州名菜", "肥而不腻", "软烂粑糯"]
  },
  {
    id: "rec_prov_123",
    name: "四川正宗麻辣水煮牛肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 380,
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜嫩黄牛里脊或后腿肉(顶刀大薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "鲜青脆莴笋尖或芹菜段与凤尾菜", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "四川汉源红袍花椒与干红辣椒(刀口辣椒)", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "大蒜泥与老生姜末", amount: 35, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "郫县正宗红油豆瓣酱(细细剁碎)", baseAmount: 35, unit: "g", amountText: "35g", isPantryStaple: true },
      { name: "纯正熟菜籽油(分次使用)", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "红薯淀粉蛋清料酒(抓上厚浆)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "清高汤或热水", baseAmount: 400, unit: "ml", amountText: "400ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "小火干焙花椒干椒铡成刀口辣椒",
        instruction: "干红辣椒段与花椒入无油净锅，中小火慢焙至酥脆棕红香气溢出，倒在案板上用菜刀铡成粗细均匀的刀口辣椒碎备用。",
        timerSeconds: 300,
        chefTip: "刀口辣椒是水煮牛肉的魂魄，现炒现铡才能散发出浓烈的麻辣焦香。"
      },
      {
        stepIndex: 2,
        title: "油炒垫底素菜断生码大碗底层",
        instruction: "热锅倒少许菜籽油，下入莴笋尖、芹菜段与凤尾大火快炒断生，撒微量盐，盛入大深碗底部垫底。",
        timerSeconds: 120,
        chefTip: "垫底蔬菜大火断生即可保持爽脆多汁，吸收上层红油汤汁。"
      },
      {
        stepIndex: 3,
        title: "红油汤底滑熟牛肉大勺滚油现泼刀口椒",
        instruction: "锅底倒油下豆瓣酱姜末炒出红油，加高汤生抽烧沸。将上厚红薯粉浆的牛肉片逐片展开滑入微滚汤中煮至变色嫩熟(约40秒)，连汤倒入蔬菜碗中。铺上大量刀口辣椒与蒜泥，烧滚八成热菜籽油猛烈浇淋激出雷鸣轰响与扑鼻麻香。",
        timerSeconds: 180,
        chefTip: "牛肉不可久煮，肉片厚浆锁水极其滑嫩，滚油现泼麻辣直透云霄。"
      }
    ],
    tips: "自贡盐帮走出的川菜图腾！麻辣浓烈，肉片滑嫩如豆腐化渣，垫底芹菜莴笋吸满红油爽脆解腻，刀口辣椒现泼焦香四溢，汗流浃背大呼过瘾。",
    tags: ["四川", "川菜", "水煮牛肉", "刀口辣椒", "麻辣鲜香", "盐帮名菜"]
  },
  {
    id: "rec_prov_124",
    name: "乐山非遗正宗跷脚牛肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 260,
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜牛黄瓜条里脊牛肉(顶刀切大薄片)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "熟鲜牛舌牛心牛肚切薄片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩青脆芹菜段与香菜碎", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "乐山正宗特调干辣椒面蘸料(海椒面配细盐花生碎)", amount: 30, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "乐山苏稽传统二十三味天然草药香料老汤", baseAmount: 800, unit: "ml", amountText: "800ml", isPantryStaple: false },
      { name: "牛骨髓与老姜大葱熬制底味", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "食用精制细盐与白胡椒粉", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "草药老骨汤文火熬出色清味甘",
        instruction: "牛棒骨敲断，加八角、肉桂、白芷、草果、丁香等二十余味药膳香料包与老生姜，大火滚沸撇净浮沫，小火慢煨使汤色呈清亮微黄草药甘香。",
        timerSeconds: 1800,
        chefTip: "跷脚牛肉汤看似清淡，实则富含草药清芬，健脾去湿回味甘甜醇和。"
      },
      {
        stepIndex: 2,
        title: "竹篓装鲜牛肉沸汤中快涮十五秒",
        instruction: "将切如纸薄的鲜牛肉片与熟牛杂放入竹篾竹漏勺中，沉入滚沸的草药牛肉老汤中快速抖散烫烫约15秒断生立即提起沥干。",
        timerSeconds: 30,
        chefTip: "牛肉片切极薄且在滚汤中极速氽烫，肉质粉嫩多汁弹爽绝不老韧。"
      },
      {
        stepIndex: 3,
        title: "装入小碗冲入滚汤配红艳海椒干碟",
        instruction: "将烫熟牛肉牛杂装碗，撒青芹菜段与香菜碎，冲入滚烫牛肉草药原汤，配特制海椒面干碟趁热蘸食。",
        timerSeconds: 60,
        chefTip: "一口滚烫清甜牛肉汤，一口蘸满香辣干碟的嫩牛肉，神清气爽回味无穷。"
      }
    ],
    tips: "乐山苏稽古镇百年非遗传奇！相传古时食客坐在桌旁长凳上一只脚跷在横木上享用而得名。汤清味鲜带草药甘甜，牛肉细嫩如脂，干辣椒碟鲜香热辣。",
    tags: ["四川", "川菜", "跷脚牛肉", "乐山非遗", "草药清汤", "干海椒碟"]
  },
  {
    id: "rec_prov_125",
    name: "宜宾南溪豆腐干红烧肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 420,
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "精选三层带皮土猪五花肉块", amount: 400, unit: "g", type: "main", isCore: true },
      { name: "宜宾南溪特产五香豆腐干(切厚菱形块)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "大红袍花椒粒与八角生姜", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "大葱段与小青蒜花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯白细砂糖(炒红亮糖色)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "纯正熟菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "特级生抽老抽与黄酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "开水或鲜肉骨汤", baseAmount: 450, unit: "ml", amountText: "450ml", isPantryStaple: false },
      { name: "食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "五花肉切大麻将块干煸炒糖色",
        instruction: "五花肉切3厘米见方大块焯水沥干。铁锅烧热下少许油与白糖炒至枣红微泡，下入肉块大火翻炒裹满红亮糖色并煸出部分猪油焦香。",
        timerSeconds: 300,
        chefTip: "糖色给红烧肉红润自然的琉璃亮泽，比单纯酱油上色更红艳甘甜。"
      },
      {
        stepIndex: 2,
        title: "下香料酱汁加高汤焖烧二十分钟",
        instruction: "投入葱姜、八角与花椒炒香，烹入黄酒生抽老抽，倒入开水没过肉块，大火烧沸改中小火加盖焖炖20分钟。",
        timerSeconds: 1200,
        chefTip: "五花肉先炖至半熟软糯，再下入豆干吸收汤中浓油赤酱。"
      },
      {
        stepIndex: 3,
        title: "下南溪豆腐干合烧收浓汁油亮出锅",
        instruction: "倒入南溪五香豆干块，继续微火慢煨15分钟使豆干吸透肉香，大火收至汤汁浓稠油润裹满肉块与豆干，撒青蒜出锅。",
        timerSeconds: 900,
        chefTip: "南溪豆腐干紧实韧香久炖不烂，吸饱五花肉肉汁比肉更抢手。"
      }
    ],
    tips: "长江首城宜宾的下饭硬菜双绝！南溪豆腐干已有数百年历史，质地细腻紧致越嚼越香，吸饱了五花肉的丰腴脂油与焦糖酱汁，肥肉软糯不腻，豆香肉香兼备。",
    tags: ["四川", "川菜", "红烧肉", "南溪豆腐干", "肥而不腻", "浓油赤酱"]
  },
  {
    id: "rec_prov_126",
    name: "重庆老字号地道毛血旺",
    region: "重庆",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 410,
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜滑嫩纯鸭血(切大厚片焯水)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜牛毛肚切宽片与鲜牛黄喉片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "去骨鲜鳝鱼段与优质午餐肉厚片", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "鲜青黄豆芽垫底(大火干煸断生)", amount: 150, unit: "g", type: "secondary", isCore: false },
      { name: "干红辣椒段与四川红袍花椒", amount: 35, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "重庆地道老牛油火锅底料", baseAmount: 50, unit: "g", amountText: "50g", isPantryStaple: true },
      { name: "郫县红油豆瓣酱与生姜大蒜末", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "纯菜籽油(最后泼油用)", baseAmount: 45, unit: "ml", amountText: "45ml", isPantryStaple: true },
      { name: "老母鸡高汤或骨汤", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: false },
      { name: "生抽老抽白糖与白芝麻", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "黄豆芽干锅煸炒断生铺底",
        instruction: "净热锅不加油下黄豆芽大火干煸炒干水汽断生，盛入大深海碗中作为垫底吸汁。",
        timerSeconds: 120,
        chefTip: "黄豆芽干煸后清脆甜嫩，不会因水汽稀释红汤滋味。"
      },
      {
        stepIndex: 2,
        title: "牛油豆瓣炒红亮浓汤下荤料烫熟",
        instruction: "热锅倒油溶化牛油火锅底料，下豆瓣酱蒜姜末炒出红亮辣椒油，注入高汤烧沸调味。先下鸭血、鳝鱼段、午餐肉煮2分钟，最后下毛肚与黄喉大火烫30秒立即关火倒入大碗。",
        timerSeconds: 240,
        chefTip: "毛肚与黄喉只能在滚汤中七上八下烫几十秒，久煮则硬柴失去脆爽。"
      },
      {
        stepIndex: 3,
        title: "铺满干椒花椒蒜泥泼滚沸热油作响",
        instruction: "汤面铺满大量干红辣椒节、红花椒、蒜泥、白芝麻与香葱段，锅中把菜籽油烧至八成滚热冒烟，猛烈浇泼在辣椒花椒上激出轰鸣声与浓郁麻辣香。",
        timerSeconds: 60,
        chefTip: "红油浮面，汤汁红亮滚烫，麻辣鲜香烫五味俱全。"
      }
    ],
    tips: "重庆磁器口古镇诞生的江湖菜无上鼻祖！鸭血嫩如凝脂，毛肚黄喉脆爽弹牙，鳝段滑软，牛油红亮香气扑鼻，麻辣鲜香烫直击灵魂，过瘾之极。",
    tags: ["重庆", "川菜", "毛血旺", "磁器口江湖菜", "麻辣鲜香", "经典名肴"]
  },
  {
    id: "rec_prov_127",
    name: "重庆歌乐山正宗辣子鸡",
    region: "重庆",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 390,
    prepTimeMinutes: 25,
    cookTimeMinutes: 15,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "散养当年跑地小公鸡(剁指甲盖小丁)", amount: 600, unit: "g", type: "main", isCore: true },
      { name: "特级贵州石柱红与子弹头干辣椒段", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "四川汉源优质大红袍花椒", amount: 25, unit: "g", type: "main", isCore: true },
      { name: "拍生大蒜瓣与老姜片", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "熟白芝麻与小香葱段", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油(油炸与炒制)", baseAmount: 80, unit: "ml", amountText: "80ml", isPantryStaple: true },
      { name: "特级生抽酱油与黄酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯细白砂糖(点睛提鲜)", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "食用精盐与五香粉", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鸡块剁极小拇指丁加料抓腌",
        instruction: "小公鸡斩成指甲盖大小均匀小碎块，加料酒、生抽、少许盐、五香粉抓匀腌制20分钟入味。",
        timerSeconds: 1200,
        chefTip: "鸡丁必须切得极小，才能在短时间高温复炸中外酥里嫩、骨头都炸香炸酥。"
      },
      {
        stepIndex: 2,
        title: "高温两度油炸至金黄焦脆收干水分",
        instruction: "菜籽油烧至六成热下入鸡丁炸定型捞出，油温升至八成热复炸1分钟至外壳金黄棕红干香酥脆捞出控油。",
        timerSeconds: 300,
        chefTip: "复炸是保持鸡丁表面香脆掉渣、内部依然带有肉汁的关键。"
      },
      {
        stepIndex: 3,
        title: "满锅干辣椒花椒中大火爆炒出锅",
        instruction: "锅中留少许底油爆香姜蒜片，倒入如山的干辣椒段与大红袍花椒慢火煸出红油香辣，倒入炸好的鸡丁大火翻炒，加白糖盐炒匀撒芝麻葱段起锅。",
        timerSeconds: 180,
        chefTip: "在辣椒海里找鸡丁是歌乐山辣子鸡的标志性乐趣，麻辣咸甜焦脆过瘾。"
      }
    ],
    tips: "重庆歌乐山享誉全国的经典江湖硬菜！外表焦脆金黄内里鲜嫩干香，红艳艳的辣椒与麻香四溢的花椒满盘堆叠，麻辣醇香酥脆诱人，下酒神作。",
    tags: ["重庆", "川菜", "歌乐山辣子鸡", "麻辣酥香", "江湖名菜", "辣椒找鸡"]
  },
  {
    id: "rec_prov_128",
    name: "自贡盐帮绝味仔姜鲜锅兔",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 330,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜嫩小兔肉(剔骨斩指甲小丁)", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "当季脆嫩鲜仔姜(切极细长丝)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜红绿二荆条与小米辣圈", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣拍碎与香葱段", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "自贡井盐与红薯水淀粉上浆", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "浓香纯菜籽油", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "正宗自贡七星椒红油豆瓣与老抽", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "高汤或开水", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: false },
      { name: "纯白砂糖与花椒油", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "嫩兔丁切小丁红薯厚浆抓透",
        instruction: "新鲜兔肉斩小丁，加料酒、自贡井盐、生抽与红薯淀粉抓匀上厚浆，封少许菜籽油锁水。",
        timerSeconds: 300,
        chefTip: "兔肉无脂肪极易变柴，红薯淀粉厚浆能在热油中牢牢锁住兔肉鲜汁。"
      },
      {
        stepIndex: 2,
        title: "大火热油滑炒兔丁变白即盛",
        instruction: "大铁锅烧热倒菜籽油，大火将兔丁滑入锅中快翻划散约20秒变白断生立即沥油捞出。",
        timerSeconds: 30,
        chefTip: "自贡菜讲究急火短炒，二十秒内定嫩度。"
      },
      {
        stepIndex: 3,
        title: "大量仔姜鲜椒大火烧汤回兔肉出锅",
        instruction: "锅底留油下豆瓣酱蒜末炒出红油，倒入半碗高汤烧沸，下入如山般的嫩仔姜细丝与鲜小米辣圈煮出清香辛辣，倒入滑熟兔丁大火滚煮40秒收浓红汁，淋花椒油装盘。",
        timerSeconds: 90,
        chefTip: "鲜仔姜丝清脆多汁辛甜扑鼻，辣中带鲜，兔丁嫩如凝脂。"
      }
    ],
    tips: "自贡盐帮菜最具代表性的暴烈极味！没有一只兔子能活着离开四川。鲜仔姜丝清香脆爽，小米辣鲜烈跳跃，兔肉滑嫩多汁入口即融，鲜辣浓郁汗如雨下。",
    tags: ["四川", "川菜", "鲜锅兔", "自贡盐帮菜", "仔姜", "鲜辣爽滑"]
  },
  {
    id: "rec_prov_129",
    name: "四川传统樟茶鸭",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 360,
    prepTimeMinutes: 30,
    cookTimeMinutes: 60,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "当年散养优质肥嫩仔秋鸭(整只净膛)", amount: 1000, unit: "g", type: "main", isCore: true },
      { name: "天然新鲜樟树叶与茉莉花茶叶", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "纯天然柏树锯末与红糖(熏烤用)", amount: 80, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "大红袍花椒炒香与川盐(炒热擦鸭)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "绍兴花雕酒与老生姜葱白", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "炸制纯菜籽油", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "热花椒盐揉搓鸭体内外腌透去水",
        instruction: "花椒粒与川盐小火炒香炒黄趁热擦遍全鸭身与腹腔，淋花雕酒加葱姜腌渍4小时使肉质紧致入味，开水焯皮烫紧晾干。",
        timerSeconds: 600,
        chefTip: "热擦椒盐能深度去腥赋香，使鸭肉肌理咸香透骨。"
      },
      {
        stepIndex: 2,
        title: "樟树叶花茶柏木微火生烟熏黄",
        instruction: "熏炉底部铺柏树锯末、红糖、干樟树叶与茉莉花茶，架上鸭子，微火慢烤熏制20分钟至鸭皮通体呈均匀浅金黄色、吸透樟茶雅香。",
        timerSeconds: 1200,
        chefTip: "樟树叶与茉莉花茶的烟熏香气高贵清雅，赋予鸭皮迷人茶色与木香。"
      },
      {
        stepIndex: 3,
        title: "上笼汽蒸蒸烂大火热油冲炸酥脆",
        instruction: "将熏好的鸭子上锅大火蒸40分钟至肉酥烂，取出控干水份。下入八成热菜籽油锅中，勺淋热油快速冲炸2分钟至表皮枣红酥脆出锅斩件。",
        timerSeconds: 2600,
        chefTip: "经腌、熏、蒸、炸四道严密古法，鸭皮酥脆如纸，鸭肉软嫩茶香四溢。"
      }
    ],
    tips: "四川传统筵席四大名鸭之首！成菜色泽金红枣润，外皮酥脆香浓，内里肉质细嫩多汁，带有樟树叶与茉莉花茶天然的馥郁清香，回味高雅绵长。",
    tags: ["四川", "川菜", "樟茶鸭", "传统筵席", "外酥里嫩", "非遗名吃"]
  },
  {
    id: "rec_prov_130",
    name: "乐山正宗红油藤椒钵钵鸡",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 280,
    prepTimeMinutes: 25,
    cookTimeMinutes: 25,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "散养当年三黄土公鸡肉(煮熟切薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新鲜鸡胗、鸡心、藕片、木耳、竹笋条(穿竹签)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "熟白芝麻粒(大量铺面)", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "四川洪雅天然鲜藤椒与藤椒油", amount: 20, unit: "ml", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "土鸡清汤熬制底汤", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: false },
      { name: "特级红油辣椒加生抽白糖调味", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "食用精盐与白胡椒粉", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "土鸡鸡杂焯熟冰水浸凉改刀穿签",
        instruction: "整鸡入开水锅加葱姜小火慢浸熟透，捞出立即投入冰水冰镇紧肤切大薄片。鸡杂与蔬菜焯水沥干，整齐穿在竹签上备用。",
        timerSeconds: 1200,
        chefTip: "冰水激凉使鸡皮紧致Q弹微脆，鸡肉细嫩爽滑。"
      },
      {
        stepIndex: 2,
        title: "特制鸡汤红油藤椒灵魂冷浸料汁",
        instruction: "大钵中注入放凉的鲜鸡汤，加入纯正红油辣椒、鲜藤椒油、生抽、盐与白糖调成麻辣清爽红亮料汁，撒满厚厚一层炒熟白芝麻。",
        timerSeconds: 300,
        chefTip: "白芝麻能粘附在串串上增加浓郁坚果香，藤椒油带来清冽跳跃的清麻感。"
      },
      {
        stepIndex: 3,
        title: "荤素竹签浸泡入红油大钵入味享用",
        instruction: "将穿好的鸡肉串、鸡胗串与蔬菜串整齐插入盛满红亮料汁的大陶土钵中，静置浸泡15分钟充分入味即可拿起大口撸串。",
        timerSeconds: 900,
        chefTip: "冷浸入味，皮脆肉嫩，汤汁红艳清澈麻辣甘爽，越吃越停不下手。"
      }
    ],
    tips: "乐山街头名震大江南北的市井传奇！陶钵里红油漂浮白芝麻如星罗棋布，荤素竹签浸润其中，鸡皮脆弹鸡肉滑嫩，藤椒清香与红油麻辣交相辉映。",
    tags: ["四川", "川菜", "钵钵鸡", "乐山名吃", "藤椒红油", "市井冷串"]
  },
  {
    id: "rec_prov_131",
    name: "巫山正宗万州炭火烤鱼",
    region: "重庆",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 390,
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "鲜活肥美鮰鱼或江团鱼(背部对剖展开)", amount: 800, unit: "g", type: "main", isCore: true },
      { name: "青脆黄豆芽、芹菜段、魔芋豆腐块", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "重庆牛油火锅香辣底料块", amount: 50, unit: "g", type: "secondary", isCore: true },
      { name: "四川干红辣椒段与汉源花椒粒", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "熟油酥花生米与鲜香菜段", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油(分烤鱼与炒料)", baseAmount: 45, unit: "ml", amountText: "45ml", isPantryStaple: true },
      { name: "生抽老抽与陈年黄酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "高汤或沸水", baseAmount: 300, unit: "ml", amountText: "300ml", isPantryStaple: false },
      { name: "食用精盐与孜然粉", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鱼身背部剖开双面花刀刷油炭火烤脆",
        instruction: "鮰鱼从背部剖开压平划花刀，抹盐、料酒与孜然粉腌制10分钟。夹入双面烤网置于旺炭火上翻转烘烤，两面刷油，烤至鱼皮金黄焦脆肉熟(约12分钟)放入长方形铁烤盘中。",
        timerSeconds: 720,
        chefTip: "高温炭火快速烤脆鱼皮并锁住内部蒜瓣肉汁，自带迷人炭火焦香。"
      },
      {
        stepIndex: 2,
        title: "牛油豆瓣炒香浓热辣料汁下配菜",
        instruction: "炒锅热菜籽油化开牛油底料，下蒜姜、干辣椒、花椒爆出浓郁香辣，倒入黄豆芽、芹菜与魔芋块加高汤生抽翻炒入味，连汤带菜浇在烤鱼四周与表面。",
        timerSeconds: 240,
        chefTip: "红亮汤汁浸润烤鱼下半部，使焦脆外皮慢慢吸透香辣汤汁越煨越入味。"
      },
      {
        stepIndex: 3,
        title: "点火边煨边吃撒花生酥粒香菜",
        instruction: "烤盘下方点固体酒精炉微火慢煨，鱼身上撒满油酥花生碎与香菜段，汤汁咕嘟翻滚，鱼肉外焦里嫩越煮越入味。",
        timerSeconds: 300,
        chefTip: "一烤二炖复合工艺，先吃焦脆鱼皮，再吃吸饱红油蒜瓣嫩肉，魔芋配菜绝香。"
      }
    ],
    tips: "风靡大江南北的长江三峡风味传奇！一烤二炖两道绝活，外皮焦香酥脆肉质雪白无刺，牛油红亮香辣浓郁，热气蒸腾越煮越香浓，聚会宵夜顶流。",
    tags: ["重庆", "川菜", "万州烤鱼", "炭火烤鱼", "一烤二炖", "香辣浓郁"]
  },
  {
    id: "rec_prov_132",
    name: "成都传统名门神仙鸡豆花",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "soup",
    cookingMethod: "煮",
    calories: 140,
    prepTimeMinutes: 30,
    cookTimeMinutes: 20,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜嫩鸡脯肉(剔净白筋剁极细肉茸)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "新鲜土鸡蛋清", amount: 3, unit: "个", type: "main", isCore: true },
      { name: "特制老母鸡金华火腿清亮高汤", amount: 600, unit: "ml", type: "main", isCore: true },
      { name: "金华火腿熟瘦肉细末", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "水豆粉(纯红薯水淀粉)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "冷清鸡汤(兑入鸡泥)", baseAmount: 100, unit: "ml", amountText: "100ml", isPantryStaple: false },
      { name: "绍兴陈年黄酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用精制细盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "现磨纯白胡椒粉", baseAmount: 1, unit: "g", amountText: "1g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鸡脯肉刀背反复捶茸挑尽筋膜",
        instruction: "鸡胸肉剔净筋膜，用刀背反复捶砸成极细鸡肉泥，加入冷鸡汤、蛋清、水豆粉顺一个方向轻柔搅打成细腻白如牛奶的稀糊浆。",
        timerSeconds: 600,
        chefTip: "吃鸡不见鸡的刀工精髓，去尽筋膜捶打成茸才能成菜细滑如豆腐脑。"
      },
      {
        stepIndex: 2,
        title: "微温清高汤文火慢冲凝成白雪豆花",
        instruction: "锅中清高级鸡汤烧至微沸(九十度无滚泡)，将鸡肉糊浆缓缓沿锅边滑入汤中，微火慢温，鸡浆受热逐渐凝结膨胀成雪白大块完整豆花漂浮汤面。",
        timerSeconds: 300,
        chefTip: "水温切忌大滚大沸，微火温浸才能让鸡肉蛋白凝结出豆腐花般至嫩质感。"
      },
      {
        stepIndex: 3,
        title: "盛入大汤盅撒金红火腿细末上席",
        instruction: "用漏勺将凝成雪白豆花的鸡肉轻轻捞入汤盅，注入清澈如茶的滚烫高级鸡汤，顶端洒上一小撮嫣红火腿末点缀上桌。",
        timerSeconds: 60,
        chefTip: "入口即化，口感嫩滑胜似水豆腐，清鲜醇美直透心脾。"
      }
    ],
    tips: "川菜以荤托素的鬼斧神工代表！“吃鸡不见鸡，豆花似雪飞”。雪白如玉宛若水豆腐花，入口软嫩化渣，清鲜回甜高雅脱俗，国宴级川菜清鲜巅峰。",
    tags: ["四川", "川菜", "鸡豆花", "传统名菜", "以荤托素", "至味清鲜"]
  },
  {
    id: "rec_prov_133",
    name: "川味经典青椒蒜苗回锅肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 380,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "优质二刀肉(坐墩肉带皮半肥瘦切薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新鲜嫩青蒜苗(斜切马蹄段)", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "本地脆嫩青尖椒块", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "老生姜片与大红袍花椒(煮肉用)", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "郫县红油豆瓣酱(细细剁碎)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "四川永川老黑豆豉粒", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "正宗保宁甜面酱", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "纯熟菜籽油(微量润锅)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯细白砂糖提鲜", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "二刀肉煮至八成熟放凉切薄片",
        instruction: "带皮二刀肉冷水下锅加姜葱花椒黄酒煮约15分钟至筷子可扎入无血水，捞出彻底放凉，切成肥瘦相间薄片。",
        timerSeconds: 900,
        chefTip: "必须放凉后切薄片，切厚了煸不出灯盏窝，热切容易碎烂。"
      },
      {
        stepIndex: 2,
        title: "热铁锅煸炒肉片出油呈灯盏窝",
        instruction: "铁锅烧热下少许油润锅，下肉片中小火不断煸炒，把多余猪油逼出，肉片表面微卷、肥肉透明呈窝状(灯盏窝)。",
        timerSeconds: 180,
        chefTip: "灯盏窝是回锅肉火候合格的标志，倒出多余猪油炒菜清爽不腻。"
      },
      {
        stepIndex: 3,
        title: "下豆瓣豆豉甜面酱爆香下蒜苗出锅",
        instruction: "肉拨至一侧，下剁细豆瓣酱、甜面酱与黑豆豉炒出红油酱香，加少许白糖，投入青蒜白与青椒块大火爆炒10秒，最后撒蒜叶翻两下出锅。",
        timerSeconds: 60,
        chefTip: "豆瓣、豆豉、甜面酱三酱合璧是回锅肉精魂，蒜苗见热即出锅蒜香扑鼻。"
      }
    ],
    tips: "川菜首席头牌家常第一神菜！肥肉焦香透明不腻，瘦肉酥软入味，豆瓣酱与豆豉酱香浓郁，青蒜清香爽脆，每一口都是天府之国最纯正的故乡烟火气。",
    tags: ["四川", "川菜", "回锅肉", "二刀肉", "灯盏窝", "第一家常"]
  },
  {
    id: "rec_prov_134",
    name: "红白生炒五花盐煎肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 360,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "土猪去皮带膘五花肉(生切大薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新鲜嫩青蒜苗(斜切段)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "鲜红二荆条辣椒斜切片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "郫县红油豆瓣酱", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "四川传统黑豆豉粒", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "纯熟菜籽油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "酿造特级生抽与白糖", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "生五花肉去皮切薄片",
        instruction: "去皮五花肉直接切成厚薄均匀大薄片，无需水煮，控干水分备用。",
        timerSeconds: 150,
        chefTip: "与回锅肉不同，盐煎肉生肉直接下锅，肉香更原汁原味干香有嚼劲。"
      },
      {
        stepIndex: 2,
        title: "铁锅大火生煸肉片出油干香",
        instruction: "热锅倒少许菜籽油，下入生肉片大火翻炒煸炒，逼出猪肉肥油至边缘金黄卷起微焦香。",
        timerSeconds: 150,
        chefTip: "生煸把多余油脂完全煸出，干香扑鼻且不柴。"
      },
      {
        stepIndex: 3,
        title: "下豆豉豆瓣炒出红油蒜苗急翻起锅",
        instruction: "加入剁碎豆瓣酱与黑豆豉大火炒出红亮红油酱香，调入生抽与白糖，下青蒜苗段大火急炒15秒断生出锅。",
        timerSeconds: 45,
        chefTip: "蒜苗遇大火出甜香，肉片焦香咸鲜红润油亮。"
      }
    ],
    tips: "回锅肉的孪生神作！生肉直接下锅干煸出油，焦香干爽更胜一筹，黑豆豉与豆瓣酱浓香交融，青蒜爽脆甜辣，配米饭绝妙神品。",
    tags: ["四川", "川菜", "盐煎肉", "生煸五花", "永川豆豉", "家常小炒"]
  },
  {
    id: "rec_prov_135",
    name: "川味传统纯正鱼香肉丝",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 290,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "优质鲜猪里脊肉(顺纹切粗细均匀肉丝)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "四川老坛红泡二荆条辣椒(细细剁茸)", amount: 35, unit: "g", type: "main", isCore: true },
      { name: "大葱白(剖开切粗葱花)", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "老生姜末与大蒜泥", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正保宁醋与白糖(黄金荔枝糖醋比)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "红薯水淀粉与蛋清(抓肉丝与对芡)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "纯熟菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "特级生抽酱油与高汤", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "里脊顺纹切丝抓红薯淀粉薄浆",
        instruction: "里脊肉顺纹切成三毫米粗细长丝，加料酒、少许盐、蛋清与红薯水淀粉抓匀上浆，封少许油备用。",
        timerSeconds: 180,
        chefTip: "纯正川味鱼香肉丝绝无木耳胡萝卜笋丝，纯靠肉丝、泡椒与大葱白。"
      },
      {
        stepIndex: 2,
        title: "黄金比例调制鱼香小碗汁",
        instruction: "碗中放入白糖15g、保宁醋15ml、生抽10ml、高汤20ml与红薯水淀粉调和成酸甜适口的鱼香滋汁。",
        timerSeconds: 60,
        chefTip: "糖醋比例约为1:1稍偏甜，提前兑汁能确保大火热锅4秒钟内瞬间成芡。"
      },
      {
        stepIndex: 3,
        title: "滑油炒泡椒茸大葱下碗汁急翻成菜",
        instruction: "热锅倒油滑散肉丝变白划到一边，下泡椒茸、姜蒜末炒出红亮油色，下葱白花与鱼香碗汁，旺火剧烈颠翻4秒芡亮出锅。",
        timerSeconds: 40,
        chefTip: "见油不见汤，亮油包汁，泡椒姜蒜挥发出奇异鱼香咸甜酸辣荔枝味。"
      }
    ],
    tips: "川菜二十四味型中的无上冠冕！纯正川式鱼香，没有一滴鱼却散发出天然鱼鲜香气，肉丝滑嫩如绢，泡椒红艳透亮，葱香浓郁酸甜咸鲜微辣。",
    tags: ["四川", "川菜", "鱼香肉丝", "正宗川派", "荔枝味型", "泡红辣椒"]
  },
  {
    id: "rec_prov_136",
    name: "极速大火爆炒麦穗腰花",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 240,
    prepTimeMinutes: 15,
    cookTimeMinutes: 3,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜新鲜猪腰两只(剖开彻底片去腰臊打麦穗花刀)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "鲜脆木耳与青笋片", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "老坛泡红椒段与泡老姜丝", amount: 25, unit: "g", type: "secondary", isCore: true },
      { name: "大蒜片与大葱马蹄段", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟菜籽油", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "红薯水淀粉与料酒(抓腰花)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "特级生抽、保宁醋与白糖(对滋汁)", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯香油淋明油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "精细剔除腰臊打细密麦穗花刀",
        instruction: "猪腰平剖两半，斜刀彻底片去深红骚腺，正面先斜切密刀不切断，再直切三刀一断成麦穗花刀，加黄酒盐水淀粉抓匀。",
        timerSeconds: 300,
        chefTip: "腰臊必须片得干干净净一点不留，麦穗刀受热瞬间卷曲成麦穗状。"
      },
      {
        stepIndex: 2,
        title: "提前调好咸鲜酸甜爆炒碗芡",
        instruction: "碗中放生抽、保宁醋、白糖、高汤与水淀粉调匀对成碗汁备用。",
        timerSeconds: 45,
        chefTip: "极速爆炒时间以秒计算，绝不可临锅一样样加调料。"
      },
      {
        stepIndex: 3,
        title: "旺火热油极速爆炒七秒断生起锅",
        instruction: "大铁锅烧至冒青烟倒油，滑入腰花旺火快划5秒卷曲变白，立即倒入泡椒姜蒜配菜与碗芡，猛颠两下淋香油出锅。",
        timerSeconds: 15,
        chefTip: "全程仅用七八秒，多一秒则老韧出水，脆嫩多汁爽弹如脆笋。"
      }
    ],
    tips: "川菜火候爆炒技法天花板！麦穗花刀卷曲如绽放花朵，腰花入口极脆无一丝腥臊，泡椒酸辣爽口，亮油包芡，极度脆嫩爽口。",
    tags: ["四川", "川菜", "火爆腰花", "麦穗花刀", "脆嫩爆汁", "极速火候"]
  },
  {
    id: "rec_prov_137",
    name: "川味市井镬气火爆肥肠",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 380,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜熟猪大肠(切两厘米滚刀斜块)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "本地脆嫩青红尖椒片与洋葱块", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "老坛泡生姜丝与整瓣拍大蒜", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "大红袍花椒与干红辣椒节", amount: 15, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "郫县红油豆瓣酱", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "特级生抽老抽与料酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "熟肥肠斜切厚块热油大火干煸",
        instruction: "煮熟大肠切斜块，热锅下菜籽油，大火倒入肥肠快速煸炒2分钟，把大肠内部多余油脂煸出至表面焦黄微脆卷曲。",
        timerSeconds: 150,
        chefTip: "煸干肥肠内部油脂是口感焦脆外皮弹牙、毫无油腻感的关键。"
      },
      {
        stepIndex: 2,
        title: "下花椒干椒豆瓣炒出红亮辣油",
        instruction: "肥肠拨边，下花椒、干红辣椒、蒜瓣与豆瓣酱炒出红亮红油与浓烈麻辣香气，烹入黄酒生抽上酱色。",
        timerSeconds: 60,
        chefTip: "红油彻底浸润焦香肥肠，去腥提醇。"
      },
      {
        stepIndex: 3,
        title: "青红椒洋葱猛火颠翻出锅",
        instruction: "倒入青红椒片与洋葱块，大火剧烈颠翻20秒断生，调入微糖与胡椒粉颠匀出锅装盘。",
        timerSeconds: 30,
        chefTip: "洋葱青椒清脆解腻，肥肠外焦里糯越嚼越香。"
      }
    ],
    tips: "川味街头苍蝇馆子点击率第一爆炒！大肠外皮焦香金黄微脆，内里软糯醇厚，青红尖椒辛辣爽脆，镬气十足下酒下饭至极。",
    tags: ["四川", "川菜", "火爆肥肠", "焦香微脆", "江湖下酒", "镬气十足"]
  },
  {
    id: "rec_prov_138",
    name: "川菜家常双拼肝腰合炒",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "鲜猪肝切柳叶薄片与新鲜猪腰麦穗花刀片", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "老坛泡红辣椒碎与泡生姜丝", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "脆芹菜段与蒜苗马蹄段", amount: 80, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟菜籽油", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "红薯水淀粉与绍兴黄酒抓浆", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "特级生抽保宁醋白糖滋汁", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肝腰切片抓红薯粉薄浆",
        instruction: "猪肝切柳叶薄片，猪腰片去腰臊打麦穗花刀，加黄酒、盐与红薯水淀粉抓匀上浆。",
        timerSeconds: 180,
        chefTip: "猪肝嫩、腰花脆，两种不同口感在同一个锅中完美相会。"
      },
      {
        stepIndex: 2,
        title: "对调糖醋老抽咸鲜酸辣碗汁",
        instruction: "碗中对入生抽、老抽、白糖、保宁醋、高汤与水淀粉调和均匀成芡汁。",
        timerSeconds: 45,
        chefTip: "碗芡必须提前调好，大火快炒一气呵成。"
      },
      {
        stepIndex: 3,
        title: "旺火热油合滑八秒碗汁急裹出锅",
        instruction: "大铁锅烧大热倒油，下肝腰大火极速划散6秒至卷曲变色，下泡椒蒜苗与碗汁，大火颠锅3秒芡紧出锅。",
        timerSeconds: 15,
        chefTip: "猪肝嫩滑如豆腐，腰花爽脆弹牙，一菜双绝镬气逼人。"
      }
    ],
    tips: "川菜小炒馆子里考教厨师颠勺火候的经典考题！猪肝滑嫩无丝毫不柴，腰花爽脆爆汁，泡椒酸辣清爽，双重口感交融神作。",
    tags: ["四川", "川菜", "肝腰合炒", "一菜双绝", "火候极致", "泡椒风味"]
  },
  {
    id: "rec_prov_139",
    name: "宜宾碎米芽菜炒肉末",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 280,
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "宜宾特产叙府传统老糟碎米芽菜", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "肥三瘦七鲜土猪肉细肉末", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "青红尖椒碎粒与大蒜末", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "纯细白砂糖(中和咸酸)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肉末热锅煸干水分出猪油焦香",
        instruction: "锅中倒少许油下猪肉末大火翻炒，将肉末炒干水份至滋滋吐油边缘微焦黄。",
        timerSeconds: 120,
        chefTip: "肉末煸干水汽带焦香，才能与干燥嗜油的芽菜完美融合。"
      },
      {
        stepIndex: 2,
        title: "下芽菜大火干煸炒干香气",
        instruction: "倒入宜宾碎米芽菜大火翻炒2分钟，让芽菜吸足肉脂，炒出浓郁酱香与发酵甜香。",
        timerSeconds: 120,
        chefTip: "宜宾芽菜经九道传统工序发酵，炒热后干香醇厚无比。"
      },
      {
        stepIndex: 3,
        title: "加青红椒蒜末白糖颠匀出锅",
        instruction: "加入青红椒粒与大蒜末，调入白糖与少许生抽，大火颠锅翻匀15秒断生盛出。",
        timerSeconds: 30,
        chefTip: "白糖提鲜解咸，拌米饭、拌面、夹馒头无上妙品。"
      }
    ],
    tips: "四川人永远吃不腻的下饭神酱菜！宜宾芽菜黑亮油润，吸足猪肉末的鲜浓油脂，咸甜适口焦香四溢，一勺盖在白米饭上香飘满屋。",
    tags: ["四川", "川菜", "碎米芽菜", "芽菜肉末", "米饭杀手", "宜宾名产"]
  },
  {
    id: "rec_prov_140",
    name: "老坛泡酸豇豆炒烂肉末",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 240,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "四川老坛自然泡酸脆豇豆(切细小圆碎丁)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "土猪前夹肉剁细烂肉碎", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "新鲜红小米椒圈与大蒜碎", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯熟菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯白砂糖(提鲜中和乳酸)", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "现磨白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "酸豇豆切细芝麻粒挤干",
        instruction: "老坛酸豇豆洗净挤干水份，顶刀切成小颗粒细丁。",
        timerSeconds: 120,
        chefTip: "切得越碎越入味，吃起来每一口都均匀裹满肉末。"
      },
      {
        stepIndex: 2,
        title: "烂肉末大火煸干吐油金黄",
        instruction: "热锅倒菜籽油，下入肉末大火煸炒至金黄吐油，下蒜末与小米椒圈爆出辣香。",
        timerSeconds: 90,
        chefTip: "肉末煸透出猪油，让酸豇豆吸足油水不寡淡。"
      },
      {
        stepIndex: 3,
        title: "酸豇豆下锅大火干煸加白糖出锅",
        instruction: "倒入酸豇豆大火快速翻炒干煸炒干水份，调入生抽、白糖与胡椒粉，大火颠锅1分钟起锅。",
        timerSeconds: 60,
        chefTip: "炒干多余水分豆角爽脆酸香，白糖带来悠长回甘。"
      }
    ],
    tips: "巴蜀寻常巷陌电饭煲第一克星！自制泡菜坛里的酸豇豆爽脆酸香嘎嘣脆，烂肉末焦香油润，酸辣适口回味生津，只要有它两碗米饭起步。",
    tags: ["四川", "川菜", "烂肉豇豆", "老坛酸豇豆", "酸脆下饭", "市井家常"]
  },
  {
    id: "rec_prov_141",
    name: "川味传统干煸四季豆",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "鲜嫩四季豆(去筋掰成寸段洗净控干)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "土猪肥瘦肉末", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "宜宾碎米芽菜碎", amount: 30, unit: "g", type: "secondary", isCore: true },
      { name: "大红袍花椒与干红辣椒节", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜碎与老姜末", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "四季豆小火干煸至皮起虎皮皱纹",
        instruction: "锅中倒油烧热，下入控干水分的四季豆，中火慢慢煸炒，用锅铲不断按压翻动，至四季豆表皮起均匀虎皮皱纹、彻底熟透变软盛出。",
        timerSeconds: 300,
        chefTip: "四季豆必须彻底煸透煸熟起皱纹，豆香浓郁且无豆腥毒素。"
      },
      {
        stepIndex: 2,
        title: "煸炒肉末芽菜花椒干辣椒出香",
        instruction: "锅中留少许油下肉末煸干吐油，下花椒、干辣椒、蒜末与宜宾芽菜炒出干香咸浓。",
        timerSeconds: 90,
        chefTip: "芽菜与肉末干炒是赋予四季豆复合香气的秘诀。"
      },
      {
        stepIndex: 3,
        title: "四季豆回锅大火翻炒收干出锅",
        instruction: "倒入四季豆大火翻炒，调入生抽、盐与白糖提鲜，大火翻颠均匀出锅。",
        timerSeconds: 45,
        chefTip: "盘底无汤无油，四季豆外皱内嫩，干香脆甜微麻微辣。"
      }
    ],
    tips: "川味经典素菜代表作！四季豆外皮起皱焦香内部清甜多汁，宜宾芽菜与肉末干香浓郁，花椒微麻，干香微辣回味无穷。",
    tags: ["四川", "川菜", "干煸四季豆", "宜宾芽菜", "虎皮皱纹", "干香下饭"]
  },
  {
    id: "rec_prov_142",
    name: "川味干煸苦瓜豆豉肉丝",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 180,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "翠绿苦瓜(剖开刮净白膜切薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "五花猪肉切细丝", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "四川永川黑豆豉粒", amount: 15, unit: "g", type: "secondary", isCore: true },
      { name: "红泡椒丝与蒜片", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯细白砂糖(中和苦味出甘甜)", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "净锅无油大火干煸苦瓜薄片",
        instruction: "净铁锅不加油烧热，下入苦瓜薄片用锅铲反复按压中火干煸，煸出水汽至苦瓜稍微软化变色盛出。",
        timerSeconds: 120,
        chefTip: "无油干煸能逼出苦瓜多余苦涩汁水，保留清脆爽甜。"
      },
      {
        stepIndex: 2,
        title: "热油煸炒五花肉丝与黑豆豉",
        instruction: "锅中下油烧热，倒入五花肉丝煸炒出油，加入蒜片、泡椒丝与黑豆豉大火炒出浓郁酱香。",
        timerSeconds: 90,
        chefTip: "永川豆豉的咸香能完美衬托苦瓜的甘苦。"
      },
      {
        stepIndex: 3,
        title: "下苦瓜大火快炒白糖提鲜起锅",
        instruction: "倒入干煸好的苦瓜片，调入生抽与白糖，大火颠锅翻炒30秒即可盛盘。",
        timerSeconds: 30,
        chefTip: "大火快翻苦尽甘来，咸香豉汁包裹苦瓜，清凉消暑。"
      }
    ],
    tips: "巴蜀盛夏消暑祛火名炒！苦瓜经无油干煸去涩，配以五花肉的脂润与永川黑豆豉的咸香，在白糖的调和下化作悠长回甘，脆嫩多汁绝妙爽口。",
    tags: ["四川", "川菜", "干煸苦瓜", "永川豆豉", "苦尽甘来", "清暑祛热"]
  },
  {
    id: "rec_prov_143",
    name: "川味浓郁下饭鱼香茄子煲",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 290,
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "鲜嫩紫茄子(去皮切一指宽粗长条)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "土猪肥瘦相间肉末", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "老坛泡红辣椒剁细茸", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "老姜末、蒜末与大葱花", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油(茄子过油与炒制)", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "保宁醋、生抽、白糖黄金鱼香汁", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "红薯水淀粉薄芡", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "茄子粗长条高油温过油至软捞出",
        instruction: "茄子条拍少许干淀粉防吸油，六成热油锅快速滑炸1分钟至茄条软糯微黄立即捞出控油。",
        timerSeconds: 90,
        chefTip: "高油温快炸锁住茄肉水分且不吸油，内部软嫩化渣。"
      },
      {
        stepIndex: 2,
        title: "煸炒肉末泡椒茸出红油鱼香",
        instruction: "锅中留少许油炒散肉末吐油，下入泡椒茸、姜蒜末大火炒出红润油亮香气，倒入鱼香调料汁烧沸。",
        timerSeconds: 90,
        chefTip: "泡椒与姜蒜的天然发酵香气是川味鱼香的灵魂。"
      },
      {
        stepIndex: 3,
        title: "下茄子煨煮入砂锅淋葱花咕嘟上桌",
        instruction: "倒入炸好的茄子条翻炒焖烧1分钟吸饱红亮鱼香浓汁，勾入水淀粉薄芡，趁热倒入烧热的砂煲中撒大葱花上席。",
        timerSeconds: 90,
        chefTip: "砂锅保温蓄热，茄子软烂浓香烫嘴，鱼香汁拌饭天下无双。"
      }
    ],
    tips: "砂锅咕嘟作响的川味米饭杀手！茄子软糯多汁入口即化，吸饱了红亮透光的鱼香酸甜肉汁，葱香蒜香四溢，汤汁浇饭让人停不下筷子。",
    tags: ["四川", "川菜", "鱼香茄子", "砂锅煲", "酸甜微辣", "软糯化渣"]
  },
  {
    id: "rec_prov_144",
    name: "红泡椒大火爆炒鸡杂碎",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "鲜鸡胗切十字菊花花刀、鸡心鸡肠切段", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "老坛泡红二荆条辣椒与野山椒段", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "本地嫩芹菜段与老泡姜丝", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜片与香葱段", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "料酒生抽红薯淀粉抓浆", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯细白砂糖与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鸡胗打深十字花刀鸡杂上浆",
        instruction: "鸡胗刮净打深十字菊花刀切厚片，与鸡心鸡肠加黄酒、盐、红薯淀粉抓匀上浆。",
        timerSeconds: 180,
        chefTip: "打花刀能让紧实的鸡胗在短时间内熟透且极度爽脆。"
      },
      {
        stepIndex: 2,
        title: "大铁锅热油爆香泡椒泡姜",
        instruction: "大铁锅烧冒烟倒菜籽油，下入泡红椒段、野山椒、泡姜丝与蒜片大火爆出酸辣呛鼻香气。",
        timerSeconds: 45,
        chefTip: "老坛泡椒的天然酸辣能彻底消除鸡杂异味。"
      },
      {
        stepIndex: 3,
        title: "鸡杂下锅猛火极速翻炒芹菜起锅",
        instruction: "倒入鸡杂大火极速划散翻炒30秒菊花绽开，投入芹菜段，烹入生抽白糖，颠锅10秒出锅装盘。",
        timerSeconds: 45,
        chefTip: "火候要快，鸡胗脆嫩爆汁，酸辣爽口。"
      }
    ],
    tips: "巴蜀江湖大排档永远的台柱子！菊花鸡胗极度脆嫩爽口，鸡肠Q弹，老坛泡椒与野山椒的酸辣直透天灵盖，爽脆多汁痛快淋漓。",
    tags: ["四川", "川菜", "泡椒鸡杂", "酸辣脆爽", "菊花鸡胗", "江湖爆炒"]
  },
  {
    id: "rec_prov_145",
    name: "经典蒜泥白肉卷黄瓜片",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 310,
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "肥四瘦六优质二刀坐墩肉(煮透切透明大薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "带刺脆嫩青黄瓜(刨长薄宽片)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜独蒜或紫皮大蒜(蒜臼子捣极细泥)", amount: 40, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "秘制熟菜籽油炼红油辣椒", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "四川复制红酱油(加红糖八角熬制)", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "纯芝麻香油与白糖", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "煮肉原汤", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: false }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "二刀肉温水慢煮至透切薄如纸片",
        instruction: "二刀肉加葱姜花椒慢火微沸煮20分钟至刚熟无血水，捞出稍凉，顺纹片成巴掌大透光大薄片。",
        timerSeconds: 1200,
        chefTip: "片肉要薄如纸张透明，入口才能肥而不腻软滑化渣。"
      },
      {
        stepIndex: 2,
        title: "黄瓜刨长片卷入肉片中整齐码盘",
        instruction: "黄瓜用刮皮刀刮成透光长薄片，取一片薄肉卷上一片黄瓜长条，卷成紧实圆筒整齐排入大盘中。",
        timerSeconds: 300,
        chefTip: "黄瓜清脆多汁，与软糯肥美白肉互补。"
      },
      {
        stepIndex: 3,
        title: "调制浓稠红油蒜泥汁均匀浇淋",
        instruction: "蒜泥加入复制红酱油、原肉汤、香油与大量红油辣椒调成浓稠红亮酱汁，大勺均匀淋在肉卷上。",
        timerSeconds: 120,
        chefTip: "蒜香浓郁，复制红酱油咸甜醇厚，红油香辣爽口。"
      }
    ],
    tips: "川菜凉菜之王！薄如蝉翼的白肉包裹爽脆多汁的黄瓜片，浸透在红亮浓稠的蒜泥红酱油之中，入口蒜香直击鼻腔，咸甜微辣软糯爽脆绝妙体验。",
    tags: ["四川", "川菜", "蒜泥白肉", "二刀肉", "复制酱油", "经典凉菜"]
  },
  {
    id: "rec_prov_146",
    name: "自贡传统红油冷吃牛肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 340,
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "精选新鲜黄牛后腿腱子肉(顺纹切指粗长条)", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "四川特级七星椒与二荆条干辣椒剪丝", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "汉源大红袍花椒粒与陈皮丝", amount: 20, unit: "g", type: "secondary", isCore: true },
      { name: "熟白芝麻粒", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "浓香纯熟菜籽油", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true },
      { name: "自贡井盐与天然纯冰糖", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "特级酿造生抽老抽与黄酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "五香粉与香油", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "牛肉条加香料慢煮至八成熟放凉",
        instruction: "牛肉条顺纹切条，加姜葱花椒黄酒煮约15分钟至断生，捞出彻底放凉收紧肌肉纤维。",
        timerSeconds: 900,
        chefTip: "顺着纹路切长条，越嚼越香不碎散。"
      },
      {
        stepIndex: 2,
        title: "多油慢火干煸牛肉条收干水分",
        instruction: "炒锅倒大量菜籽油，下入牛肉条中小火慢煸10分钟，将牛肉内部水份彻底煸干至表面红亮微焦硬。",
        timerSeconds: 600,
        chefTip: "小火慢煸收干水分是冷吃牛肉干香有嚼劲、久放不坏的绝技。"
      },
      {
        stepIndex: 3,
        title: "下陈皮干辣椒花椒冰糖炒出红油放凉",
        instruction: "下入干辣椒丝、陈皮、花椒粒、冰糖与生抽老抽，小火翻炒至红油泛亮、辣椒酥香，撒熟芝麻装盘自然放凉享用。",
        timerSeconds: 300,
        chefTip: "完全放凉后吃风味更佳，麻辣醇香耐嚼越嚼越出牛肉天然香气。"
      }
    ],
    tips: "自贡盐帮天下闻名的夜宵之王！牛肉条干香红润紧致有韧劲，陈皮果香与花椒辣椒在红油慢煸中渗入肉丝深处，越嚼越香，下酒追剧无敌神器。",
    tags: ["四川", "川菜", "冷吃牛肉", "自贡盐帮", "干香耐嚼", "夜宵之王"]
  },
  {
    id: "rec_prov_147",
    name: "川西连山传统大片回锅肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 420,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "特选肥瘦均匀大块坐墩肉(切巴掌大长薄片)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "本地鲜脆青尖椒块与青蒜苗", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "生姜片与花椒粒(煮肉用)", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "郫县红油豆瓣酱与黑豆豉", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "甜面酱与生抽老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯菜籽油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖提鲜", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "大块煮熟放凉切巴掌长薄大片",
        instruction: "大肉块煮透放凉，刀工要求极高，一刀拉到底片成一拃长、半掌宽的完整长薄大片。",
        timerSeconds: 900,
        chefTip: "连山回锅肉以肉片硕大无朋著称，片大如手掌而薄厚均匀不破。"
      },
      {
        stepIndex: 2,
        title: "铁锅大火生煸大片出油微卷",
        instruction: "热锅下大肉片，大火不断挑翻煸炒，让大片五花肉在锅底舒展煸出油花边缘微卷。",
        timerSeconds: 180,
        chefTip: "大肉片受热后舒展翻腾，气势恢宏。"
      },
      {
        stepIndex: 3,
        title: "酱香包裹下青椒蒜苗大火颠起",
        instruction: "下豆瓣、豆豉与甜面酱炒出红亮酱汁包裹整片大肉，倒入青椒蒜苗大火猛翻两把盛盘。",
        timerSeconds: 60,
        chefTip: "一片肉能盖满整碗米饭，大口吃肉豪气冲天。"
      }
    ],
    tips: "广汉连山镇独步川西的豪迈硬菜！肉片巴掌大小薄厚均匀，肥而不腻瘦而不柴，酱香醇厚浓油赤酱，一片肉裹着白米饭塞入口中，满足感爆棚。",
    tags: ["四川", "川菜", "连山回锅肉", "大片肉", "豪迈硬菜", "红亮酱香"]
  },
  {
    id: "rec_prov_148",
    name: "青椒大蒜爆炒煎虎皮蛋",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "传统无铅松花皮蛋(剥壳入锅煎出虎皮)", amount: 4, unit: "个", type: "main", isCore: true },
      { name: "鲜脆青螺丝椒斜切圈", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "新鲜大蒜瓣拍碎", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "特级酿造生抽老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "保宁醋烹锅", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "纯细白砂糖", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "皮蛋切大瓣热油慢煎起金黄虎皮",
        instruction: "皮蛋每枚切四瓣，下入热油锅中中小火慢煎，煎至蛋白表面起一层金黄焦香小起泡的虎皮壳盛出。",
        timerSeconds: 180,
        chefTip: "煎出虎皮不仅去除了皮蛋的碱涩味，而且孔隙极易吸附酱汁。"
      },
      {
        stepIndex: 2,
        title: "青螺丝椒大蒜干煸出焦香",
        instruction: "锅中留底油，下青椒圈与拍大蒜大火按压煸炒，炒出青椒虎皮纹与浓烈蒜香。",
        timerSeconds: 90,
        chefTip: "青椒煸出香味微带焦斑，辣香扑鼻。"
      },
      {
        stepIndex: 3,
        title: "皮蛋回锅烹生抽老醋大火颠翻",
        instruction: "倒入虎皮皮蛋，烹入生抽、老抽、微量醋与白糖，大火快速颠锅翻炒15秒让酱汁挂满皮蛋起锅。",
        timerSeconds: 30,
        chefTip: "急火快翻防止蛋黄散开，外皮焦香内里溏心软糯。"
      }
    ],
    tips: "巴蜀寻常百姓家最爱的一道神仙素炒！皮蛋煎出金黄虎皮孔隙吸透了蒜香与青椒鲜辣，溏心蛋黄油润浓滑，酸甜微辣层次丰富极度下饭。",
    tags: ["四川", "川菜", "虎皮皮蛋", "青椒炒皮蛋", "焦香下饭", "家常快手"]
  },
  {
    id: "rec_prov_149",
    name: "红泡椒大火急炒鲜黄喉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 210,
    prepTimeMinutes: 15,
    cookTimeMinutes: 3,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜牛黄喉(撕去白筋打斜十字花刀切片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "老坛红泡二荆条辣椒与野山椒段", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "本地脆嫩芹菜段与蒜薹段", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜片与泡生姜丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "黄酒盐生粉抓匀", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "生抽老抽白糖滋汁", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "黄喉撕去油膜打密十字花刀",
        instruction: "牛黄喉撕净内侧筋膜，表面打密十字花刀切大片，料酒盐抓匀备用。",
        timerSeconds: 180,
        chefTip: "去膜切花刀使黄喉在高温油爆下卷曲成脆嫩鲍鱼花。"
      },
      {
        stepIndex: 2,
        title: "爆香泡椒野山椒泡姜",
        instruction: "大火热油，爆香泡红椒、野山椒、泡姜丝与蒜片出酸辣呛香。",
        timerSeconds: 45,
        chefTip: "酸辣底味能彻底激发水产脏器的爽脆天然口感。"
      },
      {
        stepIndex: 3,
        title: "黄喉下锅极速翻炒十五秒出锅",
        instruction: "倒入黄喉与芹菜大火极速翻炒15秒卷曲变白断生，烹入滋汁颠翻起锅。",
        timerSeconds: 20,
        chefTip: "动作快如闪电，极度脆爽弹牙，咬下爆汁。"
      }
    ],
    tips: "火锅之外更胜一筹的爆炒极味！牛黄喉极度脆嫩爽口如白玉脆骨，老坛泡椒野山椒酸辣刺激，芹菜清香，咀嚼声咔嚓作响快感无限。",
    tags: ["四川", "川菜", "火爆黄喉", "牛黄喉", "脆嫩爽口", "酸辣过瘾"]
  },
  {
    id: "rec_prov_150",
    name: "青红椒爆炒脆嫩猪肚丝",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 230,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜熟猪肚切匀称细长条", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜脆青红尖椒切斜粗丝", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "老坛泡老姜丝与大蒜瓣", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "小香葱花", amount: 10, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "特级生抽酱油与料酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯细白砂糖与白胡椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "熟肚丝沸水焯烫沥干",
        instruction: "熟肚丝入沸水烫20秒沥干水份备用。",
        timerSeconds: 60,
        chefTip: "沸水快焯去冷凝油脂，炒出来清爽利落。"
      },
      {
        stepIndex: 2,
        title: "大火热油爆香泡姜与青红椒丝",
        instruction: "铁锅倒菜籽油爆香泡姜蒜片，下青红椒丝大火翻炒断生。",
        timerSeconds: 60,
        chefTip: "大火炒出青椒辛香辣气。"
      },
      {
        stepIndex: 3,
        title: "肚丝下锅大火极速翻炒调味出锅",
        instruction: "倒入肚丝，烹入生抽、料酒、糖与胡椒粉，旺火快速翻炒30秒撒葱花出锅。",
        timerSeconds: 40,
        chefTip: "急火短炒保持肚丝软韧弹牙有嚼劲。"
      }
    ],
    tips: "巴蜀市井饭馆百吃不厌的招牌热炒！猪肚丝软韧弹牙越嚼越香，青红尖椒脆甜微辣，泡姜去腥提神，咸香适口极其下饭。",
    tags: ["四川", "川菜", "爆炒肚丝", "猪肚", "弹牙爽脆", "家常小炒"]
  },
  {
    id: "rec_prov_151",
    name: "红油豆瓣生煎家常豆腐",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 210,
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "传统石膏老豆腐(切半指厚三角形块)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "土猪五花肉薄小片", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "本地青蒜苗斜切马蹄段", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "木耳片与蒜片", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "郫县红油豆瓣酱", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "纯菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "生抽老抽与白糖", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "清骨汤或热水", baseAmount: 200, unit: "ml", amountText: "200ml", isPantryStaple: false },
      { name: "水淀粉勾薄芡", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "老豆腐切三角片两面慢煎金黄焦壳",
        instruction: "老豆腐切三角形块，热油锅平铺慢煎，煎至两面金黄微焦起硬壳捞出。",
        timerSeconds: 300,
        chefTip: "煎出金黄蜂窝硬壳，内里依然柔嫩且极易吸汁。"
      },
      {
        stepIndex: 2,
        title: "炒香五花肉片豆瓣加汤下豆腐焖煨",
        instruction: "锅中煸香五花肉出油，下豆瓣酱炒出红油，倒入高汤生抽烧沸，下煎好的豆腐块微火煨炖5分钟吸足汤汁。",
        timerSeconds: 300,
        chefTip: "煨炖使豆腐内部吸满鲜辣红油肉汤。"
      },
      {
        stepIndex: 3,
        title: "青蒜下锅勾薄芡大火翻匀出锅",
        instruction: "投入木耳与青蒜苗段，淋水淀粉大火收成浓稠亮汁，颠翻出锅。",
        timerSeconds: 60,
        chefTip: "红亮油润，外焦里嫩爆汁，蒜香扑鼻。"
      }
    ],
    tips: "四川千家万户炉灶上的永恒经典！三角形豆腐外焦里嫩孔隙吸足红油肉汁，青蒜苗清香提神，浓郁咸鲜微辣，下饭神器。",
    tags: ["四川", "川菜", "家常豆腐", "外焦里嫩", "红油豆瓣", "老豆腐"]
  },
  {
    id: "rec_prov_152",
    name: "青红鲜椒大火生炒仔排",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 360,
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜鲜嫩猪精小排(剁一指节小方块)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "鲜青红小米椒圈与二荆条圈", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "大蒜粒拍碎与老生姜丁", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "特级生抽老抽与陈年黄酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "白糖盐与香醋烹锅", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "排骨剁指节小丁生煸出油微焦",
        instruction: "小排骨剁极小块控干，下热油锅大火翻炒生煸5分钟，煸干水分出油至表面金黄微焦。",
        timerSeconds: 300,
        chefTip: "剁小丁才能在锅中直接煸熟炸香，外酥里嫩干香透骨。"
      },
      {
        stepIndex: 2,
        title: "加姜蒜黄酒生抽焖炒入味",
        instruction: "下姜蒜大火炒香，烹黄酒生抽老抽上色，加两勺热水盖焖3分钟让排骨内部熟透酥软。",
        timerSeconds: 180,
        chefTip: "微焖确保骨肉熟透分离。"
      },
      {
        stepIndex: 3,
        title: "倾入如山鲜椒大火极速翻炒干香出锅",
        instruction: "倒入如山青红鲜椒圈，调入盐、白糖与锅边少许香醋，大火猛颠翻炒1分钟断生出锅。",
        timerSeconds: 60,
        chefTip: "鲜辣热烈扑鼻，排骨焦香弹牙。"
      }
    ],
    tips: "巴蜀大排档热烈奔放的招牌硬炒！小排剁小丁干煸至焦香酥脆，鲜青红椒热辣刺激，干香爽脆不油腻，吮骨嚼肉过瘾至极。",
    tags: ["四川", "川菜", "生炒排骨", "鲜椒仔排", "干香焦脆", "热辣过瘾"]
  },
  {
    id: "rec_prov_153",
    name: "四川农家尖椒炒老腊肉",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 340,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "四川柏树枝熏制五花腊肉(煮熟切大薄片)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "本地脆爽青尖椒斜切厚片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣拍碎与老生姜片", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油(微量润锅)", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯白砂糖提鲜", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "腊肉煮熟切大薄片煸出透明亮油",
        instruction: "熏腊肉煮透洗净切大薄片，热锅下少许油，下腊肉中小火煸炒至肥肉透明微卷如小灯盏。",
        timerSeconds: 180,
        chefTip: "煸出多余猪油，腊肉肥而不腻晶莹剔透。"
      },
      {
        stepIndex: 2,
        title: "下姜蒜青尖椒大火翻炒断生",
        instruction: "倒入蒜瓣姜片与青尖椒厚片大火猛烈翻炒，激发出青椒清甜辣香。",
        timerSeconds: 60,
        chefTip: "青椒吸饱腊肉油脂爽脆多汁。"
      },
      {
        stepIndex: 3,
        title: "调入白糖生抽大火颠翻盛盘",
        instruction: "调入生抽与少许白糖，大火颠锅翻匀15秒即可盛出装盘。",
        timerSeconds: 20,
        chefTip: "腊肉自带咸鲜，白糖中和腊味更显醇香。"
      }
    ],
    tips: "大巴山老乡家里的待客第一香！柏树枝熏腊肉片片晶莹透明肥而不腻，青尖椒脆辣爆汁，烟熏香气弥漫满屋，下饭神器。",
    tags: ["四川", "川菜", "老腊肉", "尖椒炒腊肉", "柏树熏香", "农家土菜"]
  },
  {
    id: "rec_prov_154",
    name: "川味芹菜泡椒炒牛肉丝",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 12,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "鲜嫩牛里脊肉(顺纹切细丝抓水浆)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "本地脆嫩芹菜段切细段", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "老坛泡红椒切细丝与泡姜丝", amount: 30, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "生粉料酒生抽抓浆", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "生抽老抽白糖滋汁", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "牛肉顺纹切丝抓水上浆",
        instruction: "牛里脊切细丝加料酒、生抽、水抓匀吸水，封生粉油腌制5分钟。",
        timerSeconds: 150,
        chefTip: "抓足水分使牛肉丝嫩滑不干柴。"
      },
      {
        stepIndex: 2,
        title: "旺火滑油牛肉丝变白盛出",
        instruction: "热锅大火倒油，滑入肉丝快速划散15秒断生捞出。",
        timerSeconds: 20,
        chefTip: "高温快滑保留肉汁。"
      },
      {
        stepIndex: 3,
        title: "爆香泡椒芹菜回肉丝急翻出锅",
        instruction: "底油爆香泡椒泡姜，倒入芹菜与牛肉丝，烹滋汁大火颠翻10秒出锅。",
        timerSeconds: 20,
        chefTip: "芹菜脆嫩清香，牛肉滑爽酸辣开胃。"
      }
    ],
    tips: "巴蜀家常经典快手小炒！牛肉细嫩爽滑，芹菜清香脆嫩，泡椒酸辣提神，三鲜交融，清爽不油腻。",
    tags: ["四川", "川菜", "芹菜炒牛肉", "泡椒牛肉", "滑嫩爽口", "快手小炒"]
  },
  {
    id: "rec_prov_155",
    name: "野山椒大火爆炒小墨鱼",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 200,
    prepTimeMinutes: 10,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜小墨鱼仔(剖开洗净焯透)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "老坛泡野山椒段加野山椒水", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "本地脆芹菜段与青红尖椒片", amount: 80, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "生抽黄酒与白糖", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "小墨鱼开水焯烫卷曲沥干",
        instruction: "小墨鱼沸水中焯水20秒至卷曲开花捞出控干。",
        timerSeconds: 60,
        chefTip: "焯透断生去除水分防止炒时出水。"
      },
      {
        stepIndex: 2,
        title: "爆香野山椒与蒜片芹菜",
        instruction: "大火热油爆香野山椒段、蒜片与芹菜段出酸辣香气。",
        timerSeconds: 45,
        chefTip: "野山椒水带来醇厚酸辣底蕴。"
      },
      {
        stepIndex: 3,
        title: "墨鱼下锅大火急炒调味出锅",
        instruction: "下墨鱼仔，烹生抽料酒白糖，旺火颠翻15秒出锅。",
        timerSeconds: 20,
        chefTip: "墨鱼Q弹脆爽爆汁，酸辣过瘾。"
      }
    ],
    tips: "巴蜀水产热炒一绝！墨鱼仔Q弹紧致鲜脆，野山椒酸辣刺激直冲脑门，芹菜爽脆，下酒佐餐绝佳佳品。",
    tags: ["四川", "川菜", "爆炒墨鱼仔", "野山椒", "Q弹脆爽", "酸辣鲜美"]
  },
  {
    id: "rec_prov_156",
    name: "农家干豆角烧五花肉丁",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 370,
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "五花猪肉切一厘米方丁", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "农家干豆角(温水泡发切小段)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "青红尖椒粒与蒜片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "生抽老抽白糖与豆瓣酱", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "五花肉丁大火煸出焦香油脂",
        instruction: "肉丁下锅煸炒至金黄微焦出油。",
        timerSeconds: 150,
        chefTip: "煸出猪油滋润干豆角。"
      },
      {
        stepIndex: 2,
        title: "下豆瓣生抽加水慢煨干豆角",
        instruction: "下豆瓣酱与生抽老抽炒香，加一杯水和干豆角焖煨15分钟吸足肉汁。",
        timerSeconds: 900,
        chefTip: "干豆角吸饱肉汁软韧咸香。"
      },
      {
        stepIndex: 3,
        title: "大火收浓汁撒青椒粒起锅",
        instruction: "开大火收干汤汁，撒入青椒粒翻匀出锅。",
        timerSeconds: 60,
        chefTip: "肉丁软糯，豆角比肉还香。"
      }
    ],
    tips: "四川农家经典传家下饭菜！干豇豆经日光晾晒自带陈香，吸足了五花肉丁的醇香油脂，软韧鲜浓越嚼越香，配饭神物。",
    tags: ["四川", "川菜", "干豆角烧肉", "五花肉丁", "农家土菜", "软韧醇香"]
  },
  {
    id: "rec_prov_157",
    name: "川味凉拌红油椒麻鸡丝",
    region: "四川",
    cuisineCategory: "川菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 220,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "煮熟散养老公鸡胸肉(手撕细长丝)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "鲜青大葱白切细丝", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "熟白芝麻粒与花生碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级红油辣椒与鲜花椒油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "复制红酱油、香醋与白糖", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鸡肉煮熟过冰水顺纹手撕细丝",
        instruction: "鸡肉煮熟冰镇，顺纹手撕成长丝。",
        timerSeconds: 600,
        chefTip: "手撕肉丝比刀切更吸料汁。"
      },
      {
        stepIndex: 2,
        title: "调制红油藤椒红酱油怪味汁",
        instruction: "碗中调入红油、花椒油、复制酱油、香醋、糖与芝麻拌匀。",
        timerSeconds: 60,
        chefTip: "麻辣甜咸酸五味协调。"
      },
      {
        stepIndex: 3,
        title: "加入葱丝拌匀装盘",
        instruction: "鸡丝、葱丝与调味汁抓拌均匀，撒芝麻上桌。",
        timerSeconds: 60,
        chefTip: "清麻跳跃，麻辣爽口开胃之极。"
      }
    ],
    tips: "巴蜀盛夏无敌开胃凉拌！鸡丝软嫩吸饱麻辣红油与清香藤椒，大葱丝脆甜爽口，五味调和神清气爽。",
    tags: ["四川", "川菜", "椒麻鸡丝", "手撕鸡", "麻辣开胃", "经典凉拌"]
  }
];
