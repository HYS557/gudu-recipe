const fs = require('fs');
const path = require('path');

const photos = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_seafood_photos.json'), 'utf8'));
const photoMap = {};
photos.forEach(p => {
  photoMap[p.dishName] = p.photoUrl;
});

const newSeafoodRecipes = [
  // 1. 东海·舟山/宁波/温州渔港 (10道)
  {
    id: "rec_seafood_01",
    name: "舟山野生红膏呛蟹",
    subtitle: "东海舟山渔民传世生腌名作，活梭子蟹红膏如凝脂果冻，咸鲜透骨，冷盘极品",
    calories: "135 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "生腌",
    season: ["autumn", "winter"],
    cookTime: "18小时腌制",
    difficulty: "时令绝活",
    image: photoMap["舟山野生红膏呛蟹"],
    photoUrl: photoMap["舟山野生红膏呛蟹"],
    ingredients: [
      { name: "舟山鲜活深海红膏梭子蟹(母蟹)", amount: "2只(约800g)" },
      { name: "纯净水/凉白开", amount: "1200ml" },
      { name: "老生姜片", amount: "20g" }
    ],
    seasonings: [
      { name: "纯海盐/粗盐", amount: "280g(盐水浮鸡蛋黄金比例)" },
      { name: "高度纯粮白酒/二锅头", amount: "50ml" }
    ],
    steps: [
      { title: "调配天然浮蛋饱和盐水", detail: "取大盆倒入1200ml纯净水，分次加入海盐搅拌溶解，放入一枚洗净生鸡蛋，直至鸡蛋露出水面如一元硬币大小，倒入50ml高度白酒和姜片彻底晾凉。", timerSeconds: 600 },
      { title: "活蟹刷洗速冻杀菌", detail: "鲜活红膏蟹用牙刷将蟹壳、脐部、蟹足死角彻底刷净，放入冰箱冷冻室急冻15分钟让其自然晕厥且肉质紧缩。", timerSeconds: 900 },
      { title: "蟹脐朝上浸没饱和卤水", detail: "将梭子蟹肚子（蟹脐）朝上平整码入无菌坛中，压上一只重盘防止蟹漂浮，倒入完全凉透的白酒饱和盐水，确保蟹身全部浸没。", timerSeconds: 300 },
      { title: "冷藏密封浸透切块", detail: "加盖密封放入冰箱冷藏室（0-4℃）腌制16-18小时；取出斩开蟹壳，橘红蟹膏晶莹如果冻，蟹肉如丝缎滑嫩，蘸少许米醋享用，咸鲜回甘透骨。", timerSeconds: 57600 }
    ],
    tips: "盐水一定要做到‘浮起一枚硬币大小的鸡蛋’，这是舟山渔家祖传的天然保鲜防腐咸度；浸泡时蟹脐朝上可防止鲜红蟹膏外流溶入盐水中。",
    tags: ["海鲜", "东海第一鲜", "生腌", "冷盘名菜"]
  },
  {
    id: "rec_seafood_02",
    name: "宁波雪菜大汤黄鱼",
    subtitle: "甬菜传统十大名菜天花板，邱隘老雪菜提鲜，野生大黄鱼熬出浓如白乳的原汤，鲜而不腥",
    calories: "140 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "慢熬",
    season: ["autumn", "winter", "spring"],
    cookTime: "25分钟",
    difficulty: "经典名菜",
    image: photoMap["宁波雪菜大汤黄鱼"],
    photoUrl: photoMap["宁波雪菜大汤黄鱼"],
    ingredients: [
      { name: "鲜活野生大黄鱼", amount: "1条(约600g)" },
      { name: "宁波邱隘特级雪里蕻咸菜", amount: "80g(切碎末)" },
      { name: "冬笋/春笋片", amount: "40g" },
      { name: "生姜片与香葱结", amount: "适量" },
      { name: "纯沸水", amount: "900ml" }
    ],
    seasonings: [
      { name: "纯猪油", amount: "20g" },
      { name: "绍兴花雕酒", amount: "20ml" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "精盐", amount: "2g(雪菜已有咸味，轻盐)" }
    ],
    steps: [
      { title: "黄鱼两面划十字花刀", detail: "大黄鱼刮鳞去鳃剖洗干净，擦干表面水分，鱼身两侧各划三刀斜十字，抹极少许盐和花雕酒腌制5分钟。", timerSeconds: 300 },
      { title: "猪油煎鱼两面微黄", detail: "铁锅烧热下入化开的熟猪油，投入姜片爆香，轻轻滑入黄鱼，中火慢煎至两面鱼皮微焦金黄、鱼眼凸起。", timerSeconds: 300 },
      { title: "冲入大滚沸水激出奶汤", detail: "烹入20ml花雕酒去腥，立即顺着锅边冲入900ml滚烫开水，全程保持大火翻滚沸腾8分钟，汤水瞬间乳化成如牛奶般纯白浓汤。", timerSeconds: 480 },
      { title: "下雪菜笋片合煨出锅", detail: "下入洗净挤干的邱隘雪菜末与鲜笋片，转中火继续煮5分钟，让雪菜特有的发酵乳酸与海鱼鲜味彻底交融，撒白胡椒粉和葱段盛大汤碗。", timerSeconds: 300 }
    ],
    tips: "大汤黄鱼熬出奶白汤的真谛：一是必须用融化猪油煎透，二是必须冲入滚烫沸水，三是前8分钟保持大火剧烈翻滚乳化。",
    tags: ["海鲜", "宁波名菜", "雪菜黄鱼", "鲜掉眉毛"]
  },
  {
    id: "rec_seafood_03",
    name: "温州特色江蟹生",
    subtitle: "瓯菜生食传世绝活，鲜活梭子蟹生斩浸入秘制酱油醋，酸、甜、鲜、辣、麻五味俱全",
    calories: "120 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "生拌",
    season: ["autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "瓯菜代表",
    image: photoMap["温州特色江蟹生"],
    photoUrl: photoMap["温州特色江蟹生"],
    ingredients: [
      { name: "鲜活东海梭子蟹", amount: "2只(约600g)" },
      { name: "生姜极细末", amount: "25g" },
      { name: "紫皮独蒜末", amount: "20g" },
      { name: "鲜红小米辣圈", amount: "2根" }
    ],
    seasonings: [
      { name: "温州特产双鹿米醋", amount: "45ml" },
      { name: "传统酿造生抽", amount: "35ml" },
      { name: "白砂糖", amount: "25g" },
      { name: "胡椒粉与小磨香油", amount: "各少许" },
      { name: "高度白酒", amount: "10ml" }
    ],
    steps: [
      { title: "活蟹速冻与分解斩件", detail: "鲜活梭子蟹洗净放冷冻室20分钟微冻定型，掰开蟹壳去除蟹鳃、心、胃，蟹身对半切开，每一只足顺着关节顺畅斩成小块，蟹鳌拍裂。", timerSeconds: 1200 },
      { title: "白酒杀菌防腐", detail: "将斩好的透明蟹肉装入盘中，淋入10ml高度白酒抓匀静置3分钟杀菌，倒掉渗出的水汽。", timerSeconds: 180 },
      { title: "调配温州灵魂酱油醋", detail: "碗中混合米醋、生抽、白糖、姜末、蒜末、小米辣、胡椒粉和香油，搅拌至白糖彻底融化，调出酸甜中带微辣鲜浓的灵魂味汁。", timerSeconds: 120 },
      { title: "浇淋拌匀即食", detail: "将调好的酱油醋均匀浇淋在蟹肉块上，轻拌两下让每一块半透明的蟹肉充分吸饱料汁，入口冰爽甘甜，酸甜解腻回甘无穷。", timerSeconds: 60 }
    ],
    tips: "温州江蟹生要用活蟹现杀，速冻20分钟既好切块又能让肉质紧缩如凝脂；温州米醋微甜多酸，是去腥生津的无上妙品。",
    tags: ["海鲜", "温州名菜", "生拌江蟹", "酸甜鲜辣"]
  },
  {
    id: "rec_seafood_04",
    name: "舟山干炸带鱼段",
    subtitle: "舟山雷达网小眼睛带鱼，金黄酥脆外壳裹挟如嫩豆腐般白嫩多汁鱼肉，骨酥喷香",
    calories: "185 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "干炸",
    season: ["winter", "autumn"],
    cookTime: "20分钟",
    difficulty: "家常下酒",
    image: photoMap["舟山干炸带鱼段"],
    photoUrl: photoMap["舟山干炸带鱼段"],
    ingredients: [
      { name: "舟山野生鲜活小眼睛带鱼", amount: "2条(约500g)" },
      { name: "葱姜丝", amount: "适量" },
      { name: "玉米淀粉/面粉", amount: "40g" }
    ],
    seasonings: [
      { name: "花雕酒", amount: "15ml" },
      { name: "精盐", amount: "3g" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "五香粉", amount: "0.5g" },
      { name: "菜籽油", amount: "适量(煎炸用)" }
    ],
    steps: [
      { title: "带鱼去脏洗净切段", detail: "带鱼剪去鱼鳍，掏净内脏并刮净腹腔内黑膜（保留表皮银脂，银脂富含卵磷脂），切成约6厘米长的小段，两面划斜刀花。", timerSeconds: 300 },
      { title: "葱姜黄酒腌透入味", detail: "带鱼段中放入葱姜丝、花雕酒、精盐、白胡椒粉和五香粉，用手抓匀腌制15分钟入味，沥干腌汁。", timerSeconds: 900 },
      { title: "轻拍干淀粉锁水", detail: "将带鱼段在干淀粉中薄薄滚上一圈，抖掉多余干粉，薄粉能在入油锅瞬间形成保护壳，锁住带鱼内部充沛汁水。", timerSeconds: 180 },
      { title: "六成油温初炸八成复炸", detail: "油温升至160℃下入带鱼中小火慢炸3分钟定型浅黄捞出；升高油温至190℃大火复炸30秒至金黄酥脆捞出控油，外脆里嫩热气腾腾。", timerSeconds: 240 }
    ],
    tips: "带鱼表面的银亮鳞膜不是真正的鳞，富含健康不饱和脂肪酸，切勿刮除；复炸30秒能逼出多余油脂，外皮持久酥脆掉渣。",
    tags: ["海鲜", "干炸带鱼", "舟山特产", "酥香多汁"]
  },
  {
    id: "rec_seafood_05",
    name: "象山清蒸深海大米鱼",
    subtitle: "东海特产高档白花鱼，肉质洁白细嫩如豆腐脑，唯葱姜原汁清蒸，原汁原味鲜冠群鱼",
    calories: "105 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "清蒸",
    season: ["spring", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "原汁原味",
    image: photoMap["象山清蒸深海大米鱼"],
    photoUrl: photoMap["象山清蒸深海大米鱼"],
    ingredients: [
      { name: "新鲜象山大米鱼(鮸鱼/白花鱼)", amount: "1条(约650g)" },
      { name: "红椒细丝与葱白细丝", amount: "各15g" },
      { name: "老姜薄片与葱段", amount: "各10g" }
    ],
    seasonings: [
      { name: "蒸鱼豉油", amount: "30ml" },
      { name: "高档花生油/猪油", amount: "30ml" },
      { name: "绍兴米酒", amount: "10ml" }
    ],
    steps: [
      { title: "米鱼改刀与垫葱防粘", detail: "米鱼处理干净擦干，鱼身划一字斜刀；蒸盘底部斜铺几根大葱段垫起鱼身，让蒸汽上下穿透对流。", timerSeconds: 240 },
      { title: "淋米酒铺姜片", detail: "鱼身内外淋少许米酒，刀口处夹入老姜片，鱼身表面抹一层薄花生油锁水。", timerSeconds: 60 },
      { title: "大火沸水足汽蒸8分钟", detail: "蒸锅水大火烧开，上汽后放入蒸盘，全程大火蒸8分钟，关火虚蒸2分钟取出。", timerSeconds: 600 },
      { title: "倒腥水铺葱丝泼滚油", detail: "倒掉盘中蒸出的腥水，挑出熟姜片，铺上细嫩红椒丝与大量葱白细丝，淋入蒸鱼豉油，用烧至冒青烟的热油泼香激发出鱼肉至鲜。", timerSeconds: 60 }
    ],
    tips: "蒸海鱼蒸出的盘底水带有重腥气，出锅后必须立刻倒掉；盘底垫葱能让高温蒸汽均匀环绕鱼腹，受热一致肉质如豆腐细嫩。",
    tags: ["海鲜", "清蒸米鱼", "象山渔港", "至鲜本味"]
  },
  {
    id: "rec_seafood_06",
    name: "浙江家常红烧安康鱼",
    subtitle: "胶原蛋白丰厚爆棚的深海丑鱼，鱼皮肥厚弹牙如海参，鱼肉雪白蒜瓣似龙虾，浓油赤酱下饭绝品",
    calories: "115 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "红烧",
    season: ["winter", "autumn", "spring"],
    cookTime: "25分钟",
    difficulty: "地道渔家",
    image: photoMap["浙江家常红烧安康鱼"],
    photoUrl: photoMap["浙江家常红烧安康鱼"],
    ingredients: [
      { name: "新鲜深海安康鱼", amount: "1条(约800g)" },
      { name: "蒜瓣(整粒)", amount: "10瓣" },
      { name: "生姜厚片", amount: "15g" },
      { name: "大葱段", amount: "20g" },
      { name: "干红辣椒", amount: "3根" }
    ],
    seasonings: [
      { name: "红烧酱油/老抽", amount: "15ml" },
      { name: "生抽", amount: "25ml" },
      { name: "绍兴黄酒", amount: "30ml" },
      { name: "冰糖", amount: "15g" },
      { name: "香醋", amount: "5ml" }
    ],
    steps: [
      { title: "安康鱼切块快速焯水", detail: "安康鱼洗净掏出鱼肝（鱼肝是极品美味），斩成大块，入沸水锅快速焯水30秒去除表面多余粘液，捞出温水洗净沥干。", timerSeconds: 180 },
      { title: "葱姜蒜爆锅出香", detail: "热锅倒油，下入整粒大蒜、姜片、葱段和干辣椒小火煸炒至蒜瓣表面金黄起皱、香气浓郁。", timerSeconds: 120 },
      { title: "下鱼块烹酒上色", detail: "倒入焯好的安康鱼块和大块鱼肝，烹入30ml黄酒去腥，加入生抽、红烧酱油和冰糖翻炒上色。", timerSeconds: 120 },
      { title: "加开水慢烧中火收浓汁", detail: "加入热开水微没过鱼身，大火烧沸后转中小火炖15分钟，安康鱼皮出大量胶质汤水变浓稠，转大火淋少许香醋收干汤汁呈油亮焦糖红。", timerSeconds: 900 }
    ],
    tips: "安康鱼焯水切勿过久，烫掉表面粘液即可；炖煮时鱼皮会析出极厚天然胶原蛋白，无需勾芡汤汁便能自然浓稠挂勺。",
    tags: ["海鲜", "红烧安康鱼", "胶原蛋白", "渔家下饭菜"]
  },
  {
    id: "rec_seafood_07",
    name: "温州三鲜炒粉干",
    subtitle: "瓯越平原与东海渔港的完美融合，海虾干、鳗鱼干与鲜肉丝大火爆炒，细粉干油润松散镬气冲天",
    calories: "380 kcal/份",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "大火爆炒",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "控火镬气",
    image: photoMap["温州三鲜炒粉干"],
    photoUrl: photoMap["温州三鲜炒粉干"],
    ingredients: [
      { name: "温州细米粉干", amount: "150g(温水浸透沥干)" },
      { name: "东海野生海虾干", amount: "20g(温水泡软)" },
      { name: "风干鳗鱼干/目鱼干丝", amount: "20g" },
      { name: "五花肉丝", amount: "40g" },
      { name: "卷心菜/包菜丝", amount: "50g" },
      { name: "鸡蛋", amount: "1个" }
    ],
    seasonings: [
      { name: "纯猪油", amount: "25g" },
      { name: "鲜味酱油", amount: "15ml" },
      { name: "绍兴老酒", amount: "10ml" },
      { name: "小葱段", amount: "2根" }
    ],
    steps: [
      { title: "粉干温水泡发控水", detail: "细粉干用温水浸泡15分钟至软化无硬芯，捞出放入沥水篮彻底控干表面水分（水分太足炒出来易粘坨发烂）。", timerSeconds: 900 },
      { title: "猪油煸炒海鲜海味干货", detail: "铁锅烧热下猪油化开，倒入肉丝煸出猪油，下入泡好的海虾干、鳗鱼干和包菜丝大火爆炒出猛烈海味干香，烹入老酒。", timerSeconds: 120 },
      { title: "下粉干双手抖散大火翻炒", detail: "倒入彻底沥干的细粉干，改用大火，一手握锅铲一手拿长筷子，快速将粉干挑起抖散，让粉干吸收锅内海味油脂。", timerSeconds: 180 },
      { title: "淋酱油烹香出锅", detail: "顺锅边淋入鲜味酱油，打入滑炒好的鸡蛋碎和青葱段，大火爆炒翻颠，粉干条条分明油亮、镬气四溢出锅。", timerSeconds: 90 }
    ],
    tips: "炒粉干的关键是用‘猪油’与‘长筷子挑炒’，猪油让米粉干香润滑爽，筷子挑散防止把细粉干铲断成碎屑。",
    tags: ["海鲜", "温州炒粉干", "地方名吃", "镬气十足"]
  },
  {
    id: "rec_seafood_08",
    name: "舟山野生椒盐富贵皮皮虾",
    subtitle: "深海带膏富贵皮皮虾，高温宽油炸至金黄酥脆，椒盐蒜香浓郁，虾壳酥化虾肉清甜鲜美",
    calories: "165 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "香酥炸炒",
    season: ["spring", "autumn"],
    cookTime: "15分钟",
    difficulty: "大排档王牌",
    image: photoMap["舟山野生椒盐富贵皮皮虾"],
    photoUrl: photoMap["舟山野生椒盐富贵皮皮虾"],
    ingredients: [
      { name: "鲜活东海富贵皮皮虾(皮皮虾)", amount: "500g" },
      { name: "紫皮蒜碎", amount: "30g" },
      { name: "红青尖椒碎", amount: "各15g" },
      { name: "香葱花", amount: "10g" }
    ],
    seasonings: [
      { name: "特级现磨花椒盐", amount: "5g" },
      { name: "料酒", amount: "10ml" },
      { name: "食用植物油", amount: "适量(炸制用)" }
    ],
    steps: [
      { title: "皮皮虾洗净沥透水", detail: "活皮皮虾用流水快速冲洗干净，用厨房纸巾反复吸干表面全部水分（水分擦干入油锅才不炸油且外壳极脆）。", timerSeconds: 180 },
      { title: "七成高温油温定型", detail: "宽油大火烧至七成热（约180℃，插筷子冒密集大泡），滑入皮皮虾大火炸1分钟，外壳变红变挺迅速捞出。", timerSeconds: 90 },
      { title: "八成热油极速复炸透脆", detail: "升温至八成热（约200℃），下入皮皮虾复炸30秒至虾壳酥脆透亮、边缘发硬，捞出沥干余油。", timerSeconds: 60 },
      { title: "爆香蒜粒撒椒盐颠翻", detail: "锅留少许底油，小火爆香蒜碎、青红椒粒至金黄，倒入炸酥的皮皮虾，均匀撒入特级椒盐，大火快速颠锅翻炒出锅。", timerSeconds: 60 }
    ],
    tips: "高温复炸是皮皮虾外壳酥脆到能直接嚼着吃的秘密；炸前必须彻底用纸巾吸干虾壳水分，外壳才会脆而不韧。",
    tags: ["海鲜", "椒盐皮皮虾", "排档招牌", "下酒神器"]
  },
  {
    id: "rec_seafood_09",
    name: "温州传统倒笃白蟹",
    subtitle: "不加一滴水，梭子蟹倒扣碗中以纯姜酒蒸汽蒸透，鲜美蟹汁全部回流凝固于蟹斗，原汁绝伦",
    calories: "125 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "倒笃清蒸",
    season: ["autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "原汁绝活",
    image: photoMap["温州传统倒笃白蟹"],
    photoUrl: photoMap["温州传统倒笃白蟹"],
    ingredients: [
      { name: "鲜活东海白蟹(梭子蟹)", amount: "2只(约650g)" },
      { name: "生姜薄片", amount: "20g" }
    ],
    seasonings: [
      { name: "绍兴老黄酒/温州老酒汗", amount: "30ml" },
      { name: "细盐", amount: "2g" }
    ],
    steps: [
      { title: "活蟹刷净对半斩开", detail: "梭子蟹用刷子洗净，蟹壳不拆，在蟹脐中间竖向一刀切成两半，截面抹上极薄一层细盐锁住蟹黄。", timerSeconds: 180 },
      { title: "倒笃摆碗（刀口向下）", detail: "取两只深小碗，碗底各铺3片生姜，将半只梭子蟹‘蟹壳朝上、切口朝下’倒扣紧贴在碗底（这就是温州方言的倒笃），淋入老黄酒。", timerSeconds: 120 },
      { title: "大火沸水足汽蒸10分钟", detail: "蒸锅上汽大火烧开，将两只倒笃蟹碗放入蒸屉，盖严锅盖大火足汽猛蒸10分钟后关火虚蒸2分钟。", timerSeconds: 720 },
      { title: "取出品味碗底琼浆", detail: "端出小碗，掀开蟹壳，蟹肉结实饱满如蒜瓣，碗底积蓄的由蟹黄、蟹膏与黄酒交融析出的金黄原汁浓稠鲜甜，蘸肉吃至美至纯。", timerSeconds: 60 }
    ],
    tips: "‘倒笃’是温州渔民的智慧，切面朝下贴碗底，受热时鲜美的蟹汁不会流失在蒸盘上，而是汇聚在碗底形成原汁蟹汤。",
    tags: ["海鲜", "倒笃白蟹", "温州传统", "不加一滴水"]
  },
  {
    id: "rec_seafood_10",
    name: "宁波传统冰糖甲鱼",
    subtitle: "甬菜天下第一名菜，优质野生甲鱼配老冰糖慢火煨炖，浓油赤酱，裙边肥厚糯烂粘唇，咸甜交融",
    calories: "175 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "浙江",
    cookingMethod: "慢煨",
    season: ["autumn", "winter"],
    cookTime: "50分钟",
    difficulty: "非遗经典",
    image: photoMap["宁波传统冰糖甲鱼"],
    photoUrl: photoMap["宁波传统冰糖甲鱼"],
    ingredients: [
      { name: "鲜活野生甲鱼", amount: "1只(约800g)" },
      { name: "熟猪肥膘肉丁", amount: "30g" },
      { name: "整瓣紫皮蒜", amount: "12瓣" },
      { name: "老姜块与大葱结", amount: "各20g" }
    ],
    seasonings: [
      { name: "天然老冰糖", amount: "60g" },
      { name: "绍兴加饭酒", amount: "50ml" },
      { name: "传统酿造酱油/老抽", amount: "25ml" },
      { name: "精制香醋", amount: "10ml" }
    ],
    steps: [
      { title: "甲鱼宰杀烫撕黑膜", detail: "甲鱼宰杀斩块，入80℃热水中烫30秒，捞出仔细撕去甲壳边缘与四肢表面的灰黑薄皮死膜（彻底去腥关键），斩成核桃大块。", timerSeconds: 600 },
      { title: "猪油煸炒大蒜上色", detail: "锅下熟猪油和肥膘丁煸香，投入整蒜瓣和姜片炸至金黄，倒入甲鱼块大火煸炒3分钟至水分收干、油脂清亮。", timerSeconds: 180 },
      { title: "烹酒调味加开水慢煨", detail: "烹入50ml绍兴加饭酒，加入酱油和30g冰糖翻炒上色，注入滚烫开水漫过甲鱼，大火烧开转微小火加盖慢煨35分钟至甲鱼裙边软糯透胶。", timerSeconds: 2100 },
      { title: "入余下冰糖香醋收浓芡", detail: "投入剩余30g冰糖，转大火不断用勺子舀汤汁浇淋在甲鱼块表面，烹入少许香醋提亮，汤汁自然浓稠拉丝呈红亮玛瑙色即可装盘。", timerSeconds: 300 }
    ],
    tips: "甲鱼表面的黑膜一定要趁热水彻底撕净，否则泥腥味极重；收汁时后下的冰糖会让成菜泛出水晶般的玻璃亮光，裙边粘唇甘甜。",
    tags: ["海鲜", "冰糖甲鱼", "宁波十大名菜", "浓油赤酱"]
  },

  // 2. 南海·潮汕/湛江/广府渔港 (12道)
  {
    id: "rec_seafood_11",
    name: "潮汕正宗生腌三目膏蟹",
    subtitle: "被誉为‘潮汕毒药’的极致诱惑，新鲜三目蟹红膏爆满，生抽蒜蓉香菜淬炼成冰淇淋口感",
    calories: "145 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "生腌",
    season: ["autumn", "winter"],
    cookTime: "6小时腌制",
    difficulty: "潮汕绝味",
    image: photoMap["潮汕正宗生腌三目膏蟹"],
    photoUrl: photoMap["潮汕正宗生腌三目膏蟹"],
    ingredients: [
      { name: "鲜活三目膏蟹(满黄母蟹)", amount: "2只(约600g)" },
      { name: "大蒜瓣切碎", amount: "40g" },
      { name: "鲜嫩芫荽(香菜连根)", amount: "30g" },
      { name: "鲜红小米椒圈", amount: "4根" },
      { name: "潮汕南姜碎/生姜末", amount: "25g" }
    ],
    seasonings: [
      { name: "特级生抽酱油", amount: "120ml" },
      { name: "纯净水/凉白开", amount: "80ml" },
      { name: "纯粮高度白酒", amount: "30ml" },
      { name: "天然蜂蜜/白糖", amount: "20g" },
      { name: "新鲜青柠檬汁", amount: "15ml" }
    ],
    seasonings: [],
    steps: [
      { title: "活蟹清洗并白酒杀菌", detail: "三目膏蟹刷洗干净，用高度白酒浸泡15分钟杀菌醉晕，掰开蟹斗去除蟹心和蟹鳃，切掉蟹脐，将蟹身一分为四斩小块。", timerSeconds: 900 },
      { title: "调制潮汕生腌灵魂汁", detail: "深玻璃保鲜盒中倒入生抽、纯净水、南姜碎、大蒜碎、香菜碎、小米椒圈、白糖、柠檬汁与白酒，充分搅拌让白糖融化。", timerSeconds: 180 },
      { title: "蟹肉浸没生腌汁冷藏", detail: "将斩好的膏蟹块与蟹斗全部浸入料汁中，确保每一处蟹膏与蟹肉被浸没，加盖密封入冰箱冷藏室（0-3℃）腌制4-6小时。", timerSeconds: 21600 },
      { title: "冰爽开吃如吸冰淇淋", detail: "腌好后直接端出，蟹膏深橘红如布丁凝脂，用勺子一挖或直接嘴吸，滑糯咸香、鲜辣清甜，让人一吃上瘾欲罢不能。", timerSeconds: 60 }
    ],
    tips: "潮汕生腌的核心灵魂是‘南姜’和‘香菜根’，南姜特有的木质香气和辛甜能彻底压住生海鲜腥味；必须选用鲜活母蟹冷藏腌制。",
    tags: ["海鲜", "潮汕毒药", "生腌膏蟹", "鲜甜如蜜"]
  },
  {
    id: "rec_seafood_12",
    name: "潮汕生腌基围虾",
    subtitle: "鲜活九节基围虾现开现腌，虾肉晶莹剔透如羊脂白玉，入口冰凉弹牙粘糯，鲜美直击灵魂",
    calories: "110 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "生腌",
    season: ["summer", "autumn", "spring"],
    cookTime: "4小时腌制",
    difficulty: "潮汕名菜",
    image: photoMap["潮汕生腌基围虾"],
    photoUrl: photoMap["潮汕生腌基围虾"],
    ingredients: [
      { name: "鲜活基围虾/九节虾", amount: "400g" },
      { name: "蒜末与香菜碎", amount: "各30g" },
      { name: "新鲜小米辣圈", amount: "3根" },
      { name: "潮汕南姜末", amount: "20g" }
    ],
    seasonings: [
      { name: "特级生抽酱油", amount: "100ml" },
      { name: "纯净凉开水", amount: "60ml" },
      { name: "高度白酒", amount: "25ml" },
      { name: "白糖", amount: "15g" },
      { name: "青柠薄片", amount: "3片" }
    ],
    steps: [
      { title: "活虾剪须开背挑虾线", detail: "鲜活大虾剪去虾枪、虾须，用小刀从背部划开浅口挑去泥肠虾线，冰水洗净沥干，倒入高度白酒抓匀浸泡5分钟消毒醉晕。", timerSeconds: 300 },
      { title: "调配冰爽生腌酱汁", detail: "容器中混合生抽、凉白开、南姜碎、大蒜蓉、香菜、小米辣、青柠片与白糖调匀成酸辣鲜甜的生腌汁。", timerSeconds: 120 },
      { title: "浸入料汁冷藏入味", detail: "将大虾彻底浸入生腌汁中加盖密封，移入冰箱冷藏室腌制3-4小时至虾肉呈现半透明琥珀色。", timerSeconds: 14400 },
      { title: "剥壳品味粘糯弹牙", detail: "捏住虾尾轻轻一扯便脱壳，虾肉晶莹Q弹，口感软糯带有自然果冻弹力，鲜辣甘香溢满齿颊。", timerSeconds: 60 }
    ],
    tips: "开背能让生腌汁快速渗入虾肉深处，腌制时间不宜超过6小时，3-4小时肉质最为脆弹粘糯不软化。",
    tags: ["海鲜", "潮汕生腌", "生腌虾", "鲜美Q弹"]
  },
  {
    id: "rec_seafood_13",
    name: "潮汕正宗膏蟹鲜虾砂锅粥",
    subtitle: "潮汕夜市暖胃招牌，生米砂锅慢煲出黏糯米油，母膏蟹流金开背鲜虾浸透，冬菜普宁豆酱提魂",
    calories: "220 kcal/碗",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "生滚砂锅粥",
    season: ["autumn", "winter", "spring"],
    cookTime: "30分钟",
    difficulty: "家常必学",
    image: photoMap["潮汕正宗膏蟹鲜虾砂锅粥"],
    photoUrl: photoMap["潮汕正宗膏蟹鲜虾砂锅粥"],
    ingredients: [
      { name: "东北圆粒大米/泰国香米", amount: "120g(淘洗后少许油浸)" },
      { name: "鲜活红膏母蟹", amount: "1只(切块约300g)" },
      { name: "鲜活基围虾", amount: "10只(对半开背)" },
      { name: "潮汕正宗冬菜", amount: "10g" },
      { name: "生姜切细丝", amount: "15g" },
      { name: "纯净水", amount: "1400ml" }
    ],
    seasonings: [
      { name: "普宁黄豆酱", amount: "15g" },
      { name: "白胡椒粉", amount: "2g" },
      { name: "花生酱/芝麻酱(潮汕秘方)", amount: "半小勺(5g提香增稠)" },
      { name: "芹菜粒与香菜末", amount: "适量" }
    ],
    steps: [
      { title: "生米下砂锅熬出米油", detail: "砂锅加1400ml水大火烧开，倒入淘洗干净拌了少许食用油的大米，大火翻滚沸腾，用勺子顺时针不停搅动15分钟，米粒绽开泛出浓稠奶白米油。", timerSeconds: 900 },
      { title: "下姜丝冬菜与膏蟹块", detail: "保持中大火，下入切好的生姜丝、潮汕冬菜和斩大块的母红膏蟹，蟹黄融进滚烫白粥中，米汤瞬间转为诱人的金黄色。", timerSeconds: 300 },
      { title: "下开背鲜虾与调料", detail: "倒入开背大虾、半勺花生酱与普宁豆酱，煮2分钟至大虾蜷曲变红熟透。", timerSeconds: 120 },
      { title: "关火撒白胡椒与芹菜粒", detail: "调入白胡椒粉去腥增香，关火后砂锅余温仍在剧烈咕嘟翻滚，撒入一把清脆的芹菜碎与香菜，香气直冲头顶，暖胃至极。", timerSeconds: 60 }
    ],
    tips: "加一小勺花生酱和潮汕冬菜是潮汕老粥铺的独门秘方，提香增稠毫无突兀感；必须米粥完全开花熬稠后再下海鲜猛火生滚2分钟出锅，虾肉脆嫩蟹黄流脂。",
    tags: ["海鲜", "潮汕砂锅粥", "海鲜粥", "深夜食堂"]
  },
  {
    id: "rec_seafood_14",
    name: "湛江炭烤蒜蓉金牌大生蚝",
    subtitle: "中国蚝乡湛江官渡生蚝，蚝肉肥硕如牛奶滑腻，金银蒜蓉滋滋冒油，炭火焦香蚝汁丰腴滚烫",
    calories: "85 kcal/只",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "炭烤/烤箱",
    season: ["autumn", "winter", "summer"],
    cookTime: "15分钟",
    difficulty: "烧烤王者",
    image: photoMap["湛江炭烤蒜蓉金牌大生蚝"],
    photoUrl: photoMap["湛江炭烤蒜蓉金牌大生蚝"],
    ingredients: [
      { name: "湛江鲜活官渡大生蚝", amount: "8只(个大肥美)" },
      { name: "大蒜瓣切细碎末", amount: "80g(生熟金银蒜比例1:1)" },
      { name: "红小米辣碎", amount: "10g" },
      { name: "香葱花", amount: "15g" }
    ],
    seasonings: [
      { name: "耗油", amount: "15ml" },
      { name: "生抽", amount: "20ml" },
      { name: "白糖", amount: "5g" },
      { name: "花生油", amount: "40ml" }
    ],
    steps: [
      { title: "生蚝撬壳刷洗干净", detail: "用生蚝刀从生蚝边缘缝隙插入割断闭壳肌，掀开平壳，保留盛装原汁的深碗凹壳，流水轻轻冲掉残余碎泥沙，原汁尽量保留。", timerSeconds: 300 },
      { title: "炒制金银蒜蓉灵魂酱", detail: "热锅倒花生油，下入2/3蒜末小火慢炸至微金黄飘出浓郁焦香（金蒜），关火倒入剩下的1/3生蒜末（银蒜）和小米辣，调入生抽、蚝油、白糖拌匀。", timerSeconds: 180 },
      { title: "铺蒜蓉上烤架/烤箱", detail: "在每一只肥美生蚝肉上铺上厚厚一大勺金银蒜蓉酱，码入炭烤炉上或烤箱200℃烤盘中。", timerSeconds: 120 },
      { title: "高温烤至蚝汁沸腾冒泡", detail: "大火炭烤6-8分钟，蚝壳内部乳白原汁咕嘟咕嘟剧烈沸腾、蒜香四溢，撒入翠绿葱花即可趁热端下，先喝一口滚烫原汤再吞蚝肉，爽滑至极。", timerSeconds: 420 }
    ],
    tips: "生蒜与熟金蒜按1:2混合成‘金银蒜’，既有熟蒜的浓郁焦香，又有生蒜的提鲜辛甜；烤时汁水沸腾即可出炉，千万不要烤老缩水。",
    tags: ["海鲜", "炭烤生蚝", "湛江生蚝", "夜市烧烤"]
  },
  {
    id: "rec_seafood_15",
    name: "潮汕金不换爆炒薄壳",
    subtitle: "夏秋潮汕最当令街头海鲜，肉嫩鲜甜的海瓜子配潮汕九层塔（金不换），大火猛炒1分钟壳张肉肥",
    calories: "75 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "猛火爆炒",
    season: ["summer", "autumn"],
    cookTime: "5分钟",
    difficulty: "极速秒杀",
    image: photoMap["潮汕金不换爆炒薄壳"],
    photoUrl: photoMap["潮汕金不换爆炒薄壳"],
    ingredients: [
      { name: "潮汕鲜活薄壳(海瓜子)", amount: "500g(脱丝洗净)" },
      { name: "潮汕金不换(罗勒九层塔嫩叶)", amount: "一大把(约20g)" },
      { name: "蒜末与生姜丝", amount: "各15g" },
      { name: "红辣椒丝", amount: "1根" }
    ],
    seasonings: [
      { name: "普宁黄豆酱/鱼露", amount: "10ml" },
      { name: "生抽", amount: "15ml" },
      { name: "米酒", amount: "15ml" },
      { name: "花生油", amount: "20ml" }
    ],
    steps: [
      { title: "薄壳摘丝淘洗干净", detail: "薄壳摘去丝足泥线，放入淡盐水中轻轻淘洗两遍，沥干水分备用。", timerSeconds: 180 },
      { title: "热油爆香葱姜蒜辣椒", detail: "铁锅烧至滚烫冒烟，倒入花生油下入蒜末、姜丝、红椒丝猛火爆出香味。", timerSeconds: 30 },
      { title: "倾入薄壳猛火颠翻烹酒", detail: "将薄壳瞬间倒入锅中，马上烹入15ml米酒，用锅铲或大颠锅快速翻炒20秒，薄壳贝壳逐渐崩开。", timerSeconds: 30 },
      { title: "撒入灵魂金不换调味出锅", detail: "调入普宁黄豆酱和生抽，扔入洗净的整把金不换叶，大火颠翻5秒让香草香气瞬间包裹薄壳，贝壳全开立即装盘（全程不超1分钟）。", timerSeconds: 30 }
    ],
    tips: "炒薄壳讲究‘火要大、手要快’，整道菜下锅到出锅绝不能超过60秒，翻炒过久肉质脱壳缩水变韧便失了鲜甜脆嫩。",
    tags: ["海鲜", "潮汕炒薄壳", "金不换", "快手小海鲜"]
  },
  {
    id: "rec_seafood_16",
    name: "顺德生焗深海海鲈鱼腩",
    subtitle: "顺德名馔砂锅生焗大法，大蒜老姜铺底，鲜滑海鲈鱼腩酱汁腌透生焗8分钟，焦香四溢皮脆肉弹",
    calories: "145 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "砂锅生焗",
    season: ["autumn", "winter", "spring"],
    cookTime: "15分钟",
    difficulty: "顺德火候",
    image: photoMap["顺德生焗深海海鲈鱼腩"],
    photoUrl: photoMap["顺德生焗深海海鲈鱼腩"],
    ingredients: [
      { name: "鲜活海鲈鱼腩(带皮鱼腩厚块)", amount: "450g" },
      { name: "紫皮独蒜瓣(整粒剥皮)", amount: "15粒" },
      { name: "生姜切厚块", amount: "30g" },
      { name: "红葱头/洋葱块", amount: "40g" },
      { name: "青红椒块", amount: "各20g" }
    ],
    seasonings: [
      { name: "海鲜酱与柱候酱", amount: "各10g" },
      { name: "生抽", amount: "15ml" },
      { name: "蚝油", amount: "10ml" },
      { name: "广东米酒/花雕", amount: "30ml(淋锅盖沿用)" },
      { name: "玉米淀粉", amount: "10g" },
      { name: "花生油", amount: "25ml" }
    ],
    steps: [
      { title: "鱼腩切厚块腌制上浆", detail: "海鲈鱼腩切成2厘米厚的长方块，放入生抽、蚝油、海鲜酱、柱候酱、少许白糖抓匀入味5分钟，加入玉米淀粉锁水，最后封一勺花生油防粘。", timerSeconds: 300 },
      { title: "砂锅热油爆香姜蒜垫底", detail: "取传统广式砂锅大火烧热，倒入花生油，下入整粒大蒜、姜块、红葱头，小火慢煸至蒜粒微金黄、香气扑鼻并平铺锅底。", timerSeconds: 180 },
      { title: "平铺鱼腩加盖生焗", detail: "将腌好的鱼腩块平铺在香料垫底上（切勿重叠，让鱼块均匀受热），撒上青红椒块，盖紧砂锅盖。", timerSeconds: 60 },
      { title: "大火生焗沿盖淋酒", detail: "转中大火生焗6分钟，顺着锅盖边缘缝隙缓缓淋入30ml高度花雕酒，酒精受热挥发渗入锅中激发出强烈焦香，关火焖2分钟开盖拌匀享用。", timerSeconds: 480 }
    ],
    tips: "顺德生焗的精髓在于‘不加一滴水’，利用底层蒜姜焦化释放出的香气与水分，将鱼腩在密闭高温蒸汽中迅速焖熟，皮Q肉嫩焦香扑鼻。",
    tags: ["海鲜", "顺德生焗", "海鲈鱼腩", "砂锅煲仔"]
  },
  {
    id: "rec_seafood_17",
    name: "潮州普宁豆酱煮剥皮鱼",
    subtitle: "潮汕传统打冷档必点经典海杂鱼煮法，普宁豆酱天然咸鲜发酵风味，衬托深海剥皮鱼紧实蒜瓣肉",
    calories: "95 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "酱煮",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "地道渔家",
    image: photoMap["潮州普宁豆酱煮剥皮鱼"],
    photoUrl: photoMap["潮州普宁豆酱煮剥皮鱼"],
    ingredients: [
      { name: "新鲜深海剥皮鱼(马面鲀/迪仔鱼)", amount: "3条(约400g)" },
      { name: "潮汕老姜片", amount: "15g" },
      { name: "青葱段与红椒丝", amount: "各15g" },
      { name: "高汤/热水", amount: "150ml" }
    ],
    seasonings: [
      { name: "潮汕普宁黄豆酱", amount: "25g" },
      { name: "白糖", amount: "3g" },
      { name: "花生油", amount: "15ml" }
    ],
    steps: [
      { title: "剥皮鱼撕皮去脏", detail: "剥皮鱼撕去硬皮，去除内脏清洗干净，鱼身两面轻轻划两道一字刀花方便入味。", timerSeconds: 180 },
      { title: "热锅煎姜片煎香鱼身", detail: "平底锅烧热花生油，下入姜片爆香，下入剥皮鱼，中火将两面微煎1分钟至定型。", timerSeconds: 120 },
      { title: "下普宁豆酱与热水煮焖", detail: "调入25g普宁豆酱和少许白糖，倒入150ml热水，大火煮沸后加盖转中小火焖煮6分钟，让豆酱特有的酱鲜充分渗入鱼肉纤维。", timerSeconds: 360 },
      { title: "撒葱段红椒收微汁", detail: "开盖撒入青葱段和红椒丝，稍微大火收稠汤汁即可装盘，鱼肉如蒜瓣洁白紧致，蘸盘底豆酱汤吃极其甘鲜。", timerSeconds: 60 }
    ],
    tips: "普宁黄豆酱咸鲜味足，煮这道鱼完全不需要加盐或酱油；剥皮鱼本身刺少肉厚，是潮汕人最爱的下酒配饭杂鱼。",
    tags: ["海鲜", "普宁豆酱", "剥皮鱼", "潮汕地道"]
  },
  {
    id: "rec_seafood_18",
    name: "广式传统鲍汁扣鲜鲍配西兰花",
    subtitle: "老火母鸡金华火腿浓汁煨炖溏心鲜鲍，扣在鲜甜西兰花上，浓油亮芡，宴席尊贵头牌大菜",
    calories: "110 kcal/只",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "慢煨收汁",
    season: ["winter", "autumn", "spring"],
    cookTime: "25分钟",
    difficulty: "国宴名菜",
    image: photoMap["广式传统鲍汁扣鲜鲍配西兰花"],
    photoUrl: photoMap["广式传统鲍汁扣鲜鲍配西兰花"],
    ingredients: [
      { name: "鲜活特大鲜鲍鱼(八头鲍)", amount: "6只" },
      { name: "翠绿西兰花朵", amount: "150g" },
      { name: "老母鸡金华火腿高汤/鲍汁原汤", amount: "250ml" },
      { name: "葱段与生姜片", amount: "各10g" }
    ],
    seasonings: [
      { name: "李锦记特级鲍汁", amount: "30ml" },
      { name: "蚝油", amount: "15ml" },
      { name: "花雕酒", amount: "10ml" },
      { name: "冰糖粉", amount: "5g" },
      { name: "纯水淀粉", amount: "15ml(琉璃芡)" }
    ],
    steps: [
      { title: "鲜鲍刷洗划十字花刀", detail: "用小勺将鲍鱼肉完整挖出，去掉黑色内脏与沙嘴，用小牙刷仔细刷净鲍鱼裙边黑色粘膜；在鲍鱼肉表面划深约一半的细密十字花刀。", timerSeconds: 300 },
      { title: "鲍鱼快速焯水定型", detail: "锅中烧热水加葱姜花雕酒，放入鲍鱼烫15秒至花刀自然卷曲开花立即捞出，入冷水中保持紧致弹牙。", timerSeconds: 60 },
      { title: "高汤煨炖鲍鱼入味", detail: "小锅倒入高汤、鲍汁、蚝油、冰糖粉，下入焯好的鲍鱼，微小火加盖煨炖15分钟，让鲜鲍彻底吸足浓香复合鲍汁。", timerSeconds: 900 },
      { title: "西兰花围边淋琉璃浓芡", detail: "西兰花盐水焯熟围在盘周，将煨好的鲍鱼夹在正中央；锅内剩余鲍汁大火煮沸，淋入水淀粉收成浓稠光亮的玻璃芡汁，均匀浇淋在鲍鱼上即可上桌。", timerSeconds: 120 }
    ],
    tips: "鲜鲍鱼焯水切忌超过20秒，微卷即捞；小火慢煨能让弹韧的鲜鲍变身犹如溏心干鲍般的软糯润滑口感。",
    tags: ["海鲜", "鲍汁鲜鲍", "宴席大菜", "排面之王"]
  },
  {
    id: "rec_seafood_19",
    name: "港式避风塘炒波士顿龙虾",
    subtitle: "香港铜锣湾避风塘镇港神作，金黄焦香面包糠蒜酥堆叠如山，波士顿龙虾肉大块紧实爆汁",
    calories: "175 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "香酥爆炒",
    season: ["summer", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "宴客王牌",
    image: photoMap["港式避风塘炒波士顿龙虾"],
    photoUrl: photoMap["港式避风塘炒波士顿龙虾"],
    ingredients: [
      { name: "鲜活波士顿龙虾", amount: "1只(约700g)" },
      { name: "特级原味黄面包糠", amount: "100g" },
      { name: "金蒜碎与银生蒜碎", amount: "各40g" },
      { name: "干豆豉碎", amount: "10g" },
      { name: "干红辣椒段", amount: "10g" },
      { name: "玉米淀粉", amount: "30g" }
    ],
    seasonings: [
      { name: "白胡椒粉", amount: "2g" },
      { name: "生抽", amount: "10ml" },
      { name: "白糖", amount: "5g" }
    ],
    steps: [
      { title: "波龙宰杀斩大块", detail: "龙虾头部一分为二，去鳃和沙包，龙虾身顺关节斩大块，两只大螯用刀背用力拍裂方便受热入味，肉切面拍上一层干淀粉。", timerSeconds: 300 },
      { title: "高温宽油锁住肉汁", detail: "宽油烧至七成热（180℃），下入龙虾块猛火油炸1.5分钟至虾壳通红、肉质收紧变白，迅速捞出沥油。", timerSeconds: 120 },
      { title: "慢火炒出金黄酥脆蒜蓉碎", detail: "锅留底油下入生熟蒜碎、豆豉碎和干辣椒段小火慢炒出香，倒入面包糠，以中小火持续翻炒5分钟至面包糠变得极度金黄酥脆如金沙。", timerSeconds: 300 },
      { title: "下龙虾大火合炒出锅", detail: "倒入炸好的龙虾块，撒白胡椒粉、生抽和少许白糖，大火快速颠锅翻炒20秒，让金黄蒜酥均匀包裹每一块龙虾肉，出锅堆成金山。", timerSeconds: 40 }
    ],
    tips: "面包糠与蒜蓉一定要小火慢炒至水分全干、金黄松脆；龙虾螯拍裂能让内部厚肉在极短油炸时间内熟透而不发柴。",
    tags: ["海鲜", "避风塘炒龙虾", "波士顿龙虾", "经典港味"]
  },
  {
    id: "rec_seafood_20",
    name: "潮汕生焗极品脆皮白鳝",
    subtitle: "深海天然极品白鳝（乌耳鳗），高温砂锅激出鳗鱼皮下天然油脂，外皮焦脆，鱼肉滑润软糯粘唇",
    calories: "195 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "砂锅生焗",
    season: ["autumn", "winter"],
    cookTime: "20分钟",
    difficulty: "名贵硬菜",
    image: photoMap["潮汕生焗极品脆皮白鳝"],
    photoUrl: photoMap["潮汕生焗极品脆皮白鳝"],
    ingredients: [
      { name: "新鲜深海白鳝/活海鳗", amount: "1条(约600g)" },
      { name: "紫皮独蒜瓣(整粒)", amount: "15粒" },
      { name: "生姜切厚片", amount: "30g" },
      { name: "大葱白段", amount: "20g" }
    ],
    seasonings: [
      { name: "海鲜酱与叉烧酱", amount: "各15g" },
      { name: "潮汕普宁豆酱", amount: "10g" },
      { name: "生抽", amount: "15ml" },
      { name: "高度白酒/花雕酒", amount: "30ml" },
      { name: "玉米淀粉", amount: "10g" }
    ],
    steps: [
      { title: "热水烫去白鳝粘液切厚段", detail: "白鳝用热水浇淋表面迅速用刀刮去一层白滑粘液，剖腹洗净，切成2厘米厚的连刀厚片（骨断肉连），用厨房纸吸干水分。", timerSeconds: 300 },
      { title: "秘制酱料抓匀腌透", detail: "白鳝段加入海鲜酱、叉烧酱、普宁豆酱、生抽和少许白糖抓拌均匀腌制10分钟，撒入玉米淀粉抓匀上浆封汁。", timerSeconds: 600 },
      { title: "砂锅热油煸香姜蒜铺底", detail: "砂锅烧热下花生油，倒入整粒大蒜、姜厚片和大葱段，小火慢煸至蒜瓣金黄起虎皮香气溢出。", timerSeconds: 180 },
      { title: "平铺白鳝大火生焗沿边烹酒", detail: "将白鳝块整齐平铺在姜蒜上，盖上砂锅盖中大火生焗7分钟，锅盖沿淋入30ml高度花雕酒激发焦香，关火焖3分钟开盖撒葱花。", timerSeconds: 600 }
    ],
    tips: "白鳝表面的白膜必须用开水烫刮干净才无腥味；白鳝本身富含大量天然油脂，生焗时自身油脂渗出将外皮煎至焦脆金黄，口感妙不可言。",
    tags: ["海鲜", "生焗白鳝", "脆皮海鳗", "潮菜名馔"]
  },
  {
    id: "rec_seafood_21",
    name: "广式蒜蓉粉丝蒸大红魔虾",
    subtitle: "深海大红魔虾开背展翅，双拼金银蒜蓉清蒸，晶亮粉丝吸饱虾脑红油与至纯原汁，鲜甜爆汁",
    calories: "115 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "清蒸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "新手友好",
    image: photoMap["广式蒜蓉粉丝蒸大红魔虾"],
    photoUrl: photoMap["广式蒜蓉粉丝蒸大红魔虾"],
    ingredients: [
      { name: "深海大红魔虾/斑节大对虾", amount: "8只(个大红亮)" },
      { name: "优质绿豆粉丝", amount: "1把(温水泡软约50g)" },
      { name: "金银双拼蒜蓉酱", amount: "60g" },
      { name: "香葱花", amount: "15g" }
    ],
    seasonings: [
      { name: "特级蒸鱼豉油", amount: "25ml" },
      { name: "热花生油", amount: "20ml" }
    ],
    steps: [
      { title: "粉丝垫底铺盘", detail: "绿豆粉丝温水泡软剪成适口长段，拌入一勺蒸鱼豉油垫在深蒸盘底部。", timerSeconds: 300 },
      { title: "红魔虾开背压平展翅", detail: "大红虾剪去长须，用锋利小刀从虾背正中剖开至深约2/3处（腹部肉相连切勿切断），剔除虾线，用刀背轻敲两下让虾身平整趴在粉丝上展开如蝴蝶翅膀。", timerSeconds: 300 },
      { title: "铺金银蒜蓉上汽蒸", detail: "在每一只开背虾肉上满满铺上一大勺金银蒜蓉酱，蒸锅水大火烧开足汽，放入蒸盘大火猛蒸5分钟即可关火。", timerSeconds: 300 },
      { title: "撒葱花泼滚烫热油", detail: "取出撒上翠绿葱花，沿盘周淋入蒸鱼豉油，烧滚两勺热花生油泼在葱花与蒜蓉上滋滋作响，虾肉脆嫩弹牙，粉丝鲜入肺腑。", timerSeconds: 60 }
    ],
    tips: "大虾开背蒸只要大火足汽5分钟即可，切忌蒸超时导致虾肉缩水变老；粉丝必须事先拌一点酱油底味，蒸好后吸饱虾汁才不会寡淡。",
    tags: ["海鲜", "蒜蓉粉丝大虾", "红魔虾", "经典粤菜"]
  },
  {
    id: "rec_seafood_22",
    name: "潮汕酸梅煮海午笋鱼",
    subtitle: "普宁盐渍老酸梅生津开胃，海中极品午笋鱼（马友鱼）油脂丰厚如羊脂，酸咸鲜甘回味无穷",
    calories: "125 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "广东",
    cookingMethod: "酸梅水煮",
    season: ["spring", "summer", "autumn"],
    cookTime: "12分钟",
    difficulty: "潮汕经典",
    image: photoMap["潮汕酸梅煮海午笋鱼"],
    photoUrl: photoMap["潮汕酸梅煮海午笋鱼"],
    ingredients: [
      { name: "新鲜野生海午笋鱼(马友鱼)", amount: "2条(约400g)" },
      { name: "潮汕普宁盐浸老酸梅", amount: "3颗(用勺压碎)" },
      { name: "生姜细丝", amount: "15g" },
      { name: "青葱段与芹菜粒", amount: "各15g" },
      { name: "清水", amount: "200ml" }
    ],
    seasonings: [
      { name: "纯正鱼露", amount: "10ml" },
      { name: "白糖", amount: "5g(中和酸味带出甘润)" },
      { name: "花生油", amount: "15ml" }
    ],
    steps: [
      { title: "午笋鱼洗净划花刀", detail: "午笋鱼去鳃去内脏洗净擦干，鱼身两侧轻轻各划两道浅花刀以便酸梅汁渗透进鱼身内部。", timerSeconds: 180 },
      { title: "压碎老酸梅调汤汁", detail: "小碗中将3颗老酸梅用勺背压烂成果肉泥，加入200ml清水、鱼露和5g白糖搅拌均匀。", timerSeconds: 60 },
      { title: "爆香姜丝下酸梅汤烧沸", detail: "锅热倒少许花生油下生姜丝小火爆出香气，倒入调好的酸梅汤大火烧至完全沸腾。", timerSeconds: 60 },
      { title: "下午笋鱼中小火煮6分钟", detail: "轻轻滑入午笋鱼，转中小火加盖焖煮5-6分钟，期间用勺子舀两次热酸梅汤浇在鱼身上，撒入青葱段与芹菜粒即可关火盛盘。", timerSeconds: 360 }
    ],
    tips: "俗话说‘一午二红衫三鯧四马鲛’，午笋鱼油脂最为肥腴鲜美；配上普宁酸梅的微酸与咸甘，完美化解鱼肉天然丰腴油脂，生津开胃。",
    tags: ["海鲜", "酸梅鱼", "午笋鱼", "潮汕老味道"]
  },

  // 3. 黄渤海·胶东/大连/天津渔港 (10道)
  {
    id: "rec_seafood_23",
    name: "胶东原汁铁锅蒸杂色蛤",
    subtitle: "胶东渔家最地道吃法，不加一滴水，大铁锅干烧自然开壳，原汁原味鲜咸甘甜，汤清肉肥",
    calories: "65 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "山东",
    cookingMethod: "干烧原汁蒸",
    season: ["summer", "autumn", "spring"],
    cookTime: "8分钟",
    difficulty: "零失败",
    image: photoMap["胶东原汁铁锅蒸杂色蛤"],
    photoUrl: photoMap["胶东原汁铁锅蒸杂色蛤"],
    ingredients: [
      { name: "胶东鲜活花蛤/杂色蛤(吐净泥沙)", amount: "750g" },
      { name: "生姜切薄片", amount: "15g" },
      { name: "香葱小段", amount: "15g" }
    ],
    seasonings: [
      { name: "清香二锅头/料酒", amount: "15ml" }
    ],
    steps: [
      { title: "海蛤盐水静养吐沙", detail: "花蛤放入淡盐水中（加两滴油）静养2小时彻底吐净腹中泥沙，用双手用力相互揉搓清洗表面贝壳泥污沥干。", timerSeconds: 3600 },
      { title: "铁锅干烧铺姜片", detail: "取干净大铁锅烧干烧热，锅底不放油不放水，平铺上姜片和少许葱段。", timerSeconds: 60 },
      { title: "倒入海蛤盖锅盖大火焖", detail: "直接将控干水的海蛤倒在铁锅中，淋入15ml料酒，立即盖严沉重的铁锅盖，开大火干烧。", timerSeconds: 30 },
      { title: "开壳即停撒葱出锅", detail: "大火焖烧3-4分钟，听到锅内噼里啪啦贝壳张开声，开盖见海蛤全部张开如花朵，锅底沉淀满满一层天然乳白海蛤原汤，撒葱花直接连锅上桌。", timerSeconds: 240 }
    ],
    tips: "绝对不要加一滴水！新鲜蛤蜊受热会自动释放体内充沛的天然鲜海水，这是世界上最原汁原味的鲜汤，蛤肉饱满多汁不缩水。",
    tags: ["海鲜", "胶东原汁蛤蜊", "渔家原汁", "鲜美下酒"]
  },
  {
    id: "rec_seafood_24",
    name: "大连温拌葱油海螺片",
    subtitle: "深海大红螺煮至刚断生切极薄蝉翼片，滚烫葱油泼香，爽脆弹牙到极致，北方名贵凉菜",
    calories: "90 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "辽宁",
    cookingMethod: "温拌泼油",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "控温刀工",
    image: photoMap["大连温拌葱油海螺片"],
    photoUrl: photoMap["大连温拌葱油海螺片"],
    ingredients: [
      { name: "新鲜大连深海红螺/大响螺", amount: "3只(约700g)" },
      { name: "大葱白(切极细葱丝)", amount: "40g" },
      { name: "红辣椒丝", amount: "10g" },
      { name: "生姜丝", amount: "10g" }
    ],
    seasonings: [
      { name: "特级蒸鱼豉油", amount: "25ml" },
      { name: "一品鲜生抽", amount: "15ml" },
      { name: "香醋", amount: "5ml" },
      { name: "纯正花生油", amount: "35ml" }
    ],
    steps: [
      { title: "煮海螺刚断生", detail: "深海海螺洗净，冷水下锅加大葱生姜和黄酒，大火烧开煮沸后改中火煮4分钟至螺肉刚刚断生，立即捞出过冰水冷却。", timerSeconds: 300 },
      { title: "挑肉切薄如蝉翼片", detail: "用竹签挑出整只螺肉，去除苦胆与肝脏部分，留紧致螺头肉，用锋利斜刀切成薄如蝉翼的透亮螺片。", timerSeconds: 300 },
      { title: "螺片热水极速过水温热", detail: "切好的薄螺片放入漏勺，在滚热水中轻轻晃荡两秒（过水复热防过生，切勿煮熟），迅速沥干装盘。", timerSeconds: 20 },
      { title: "堆葱丝泼滚烫葱油", detail: "将大量极细大葱丝堆在温螺片上，淋入蒸鱼豉油与生抽；小锅将花生油烧至八成热（冒微青烟），分次泼在葱丝上，葱香四溢，爽脆惊艳。", timerSeconds: 60 }
    ],
    tips: "海螺肉必须‘大火煮至刚断生’，老一秒就会坚韧如橡皮；刀工要极薄，温拌泼油能让螺片保持爽脆如马蹄的天然嚼劲。",
    tags: ["海鲜", "大连海螺", "温拌海螺片", "极致脆爽"]
  },
  {
    id: "rec_seafood_25",
    name: "胶东清蒸野生黑头鱼",
    subtitle: "北方沿海第一岩礁鱼（黑鲪），肉质洁白如蒜瓣极度紧致，清蒸淋生抽热油，鲜香甘甜",
    calories: "100 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "山东",
    cookingMethod: "清蒸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "原汁原味",
    image: photoMap["胶东清蒸野生黑头鱼"],
    photoUrl: photoMap["胶东清蒸野生黑头鱼"],
    ingredients: [
      { name: "鲜活胶东黑头鱼(黑鲪鱼)", amount: "1条(约600g)" },
      { name: "大葱白(细切长丝)", amount: "25g" },
      { name: "老生姜片与细丝", amount: "各15g" }
    ],
    seasonings: [
      { name: "鲁味一品鲜/蒸鱼豉油", amount: "25ml" },
      { name: "花生油", amount: "30ml" },
      { name: "料酒", amount: "10ml" }
    ],
    steps: [
      { title: "黑头鱼改刀垫葱", detail: "黑头鱼去鳞去内脏洗净，鱼背肉厚处各划两道深一字刀，盘底垫大葱姜片架起鱼身。", timerSeconds: 180 },
      { title: "大火足汽蒸8分钟", detail: "蒸锅大火将水烧开上足汽，滑入鱼盘加盖，全程保持大火猛蒸8分钟，关火虚蒸2分钟。", timerSeconds: 600 },
      { title: "倒净盘底蒸鱼水", detail: "端出蒸盘，务必将盘内蒸出的腥水倒尽，挑掉蒸软的旧姜葱片。", timerSeconds: 30 },
      { title: "铺葱丝淋豉油泼热油", detail: "在鱼身铺上厚厚一层新鲜葱姜细丝，沿鱼边淋入蒸鱼豉油，烧滚两勺花生油泼在葱丝上激发出纯正海味鲜香。", timerSeconds: 60 }
    ],
    tips: "黑头鱼生活在北方礁石区，肉质极其紧实有弹性，清蒸是检验其鲜度的最高标准，蒸好后倒掉原盘水是去腥关键。",
    tags: ["海鲜", "清蒸黑头鱼", "胶东海鲜", "蒜瓣肉"]
  },
  {
    id: "rec_seafood_26",
    name: "大连原汁海胆蒸水蛋",
    subtitle: "深海野生紫海胆天然甘甜融于土鸡蛋水蛋中，金黄滑嫩如布丁，入口化甘，鲜美绝伦",
    calories: "95 kcal/碗",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "辽宁",
    cookingMethod: "隔水蒸蛋",
    season: ["spring", "summer"],
    cookTime: "15分钟",
    difficulty: "极简高级",
    image: photoMap["大连原汁海胆蒸水蛋"],
    photoUrl: photoMap["大连原汁海胆蒸水蛋"],
    ingredients: [
      { name: "鲜开野生大连紫海胆肉", amount: "6瓣(或带壳鲜海胆2只)" },
      { name: "新鲜土鸡蛋", amount: "2个" },
      { name: "温水(约40℃)", amount: "180ml(蛋水比1:1.5)" }
    ],
    seasonings: [
      { name: "蒸鱼豉油", amount: "10ml" },
      { name: "小磨芝麻香油", amount: "数滴" },
      { name: "细盐", amount: "1g" },
      { name: "小香葱碎", amount: "适量" }
    ],
    steps: [
      { title: "打散鸡蛋加温水过筛", detail: "土鸡蛋加1g盐打散，倒入1.5倍的温水轻轻搅匀，用细筛网过筛两次滤去浮沫气泡，获得极度顺滑蛋液。", timerSeconds: 180 },
      { title: "盖保鲜膜蒸定型", detail: "碗口包上耐高温保鲜膜并扎两个小排气孔，蒸锅水烧开，入蒸锅中小火蒸7分钟至蛋液表面凝固结皮。", timerSeconds: 420 },
      { title: "铺上鲜甜海胆肉续蒸", detail: "揭开保鲜膜，小心将金黄鲜嫩的海胆肉轻摆在半熟蛋羹表面，重新盖上保鲜膜，继续蒸3分钟至海胆刚断生成熟。", timerSeconds: 180 },
      { title: "淋豉油香油出锅", detail: "出锅撕掉保鲜膜，淋上少许蒸鱼豉油和几滴香油，点缀葱花，蛋羹滑若凝脂，海胆膏浓郁回甘。", timerSeconds: 60 }
    ],
    tips: "海胆切勿一开始就混在蛋液里久蒸，否则会过熟变老失了甘甜；在蛋羹蒸至七成熟结皮时再放入海胆蒸3分钟，海胆甘甜爆浆、蛋羹嫩滑无蜂窝。",
    tags: ["海鲜", "海胆蒸蛋", "大连海味", "鲜嫩滑口"]
  },
  {
    id: "rec_seafood_27",
    name: "胶东手打鲅鱼氽丸子清汤",
    subtitle: "新鲜深海鲅鱼肉剔骨排斩，手打上劲氽成雪白浮水丸子，配一把顶鲜韭菜，汤清味美极度解腻",
    calories: "105 kcal/碗",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "山东",
    cookingMethod: "生氽丸子",
    season: ["spring", "autumn", "winter"],
    cookTime: "25分钟",
    difficulty: "胶东绝活",
    image: photoMap["胶东手打鲅鱼氽丸子清汤"],
    photoUrl: photoMap["胶东手打鲅鱼氽丸子清汤"],
    ingredients: [
      { name: "鲜活深海鲅鱼(去骨纯肉)", amount: "350g" },
      { name: "五花肉馅(增添滑润油脂)", amount: "50g" },
      { name: "鲜嫩青韭菜碎", amount: "30g" },
      { name: "花椒水/葱姜水", amount: "100ml" },
      { name: "鸡蛋清", amount: "1个" }
    ],
    seasonings: [
      { name: "白胡椒粉", amount: "2g" },
      { name: "精盐", amount: "4g" },
      { name: "玉米淀粉", amount: "15g" },
      { name: "芝麻香油", amount: "5ml" }
    ],
    steps: [
      { title: "刮取鲅鱼纯肉", detail: "鲅鱼剖开去内脏大骨，用金属铁勺顺着鱼刺方向轻轻将细腻鱼肉刮下（避开暗红色红肉去腥），在案板上用刀背排斩成细腻鱼蓉。", timerSeconds: 300 },
      { title: "加水搅拌至摔打上劲", detail: "鱼肉加入五花肉末、蛋清、盐和胡椒粉，顺一个方向死劲搅打，分四次淋入100ml花椒葱姜水让鱼肉吃饱水分，直至鱼胶粘稠发亮、摔打上劲成团（丢入凉水能漂浮即成）。", timerSeconds: 600 },
      { title: "温水下锅氽丸子", detail: "锅中烧水至微开小泡（不沸腾），左手虎口挤出圆润鱼丸，右手拿小勺蘸凉水挖下入锅，鱼丸遇温水迅速定型洁白浮起。", timerSeconds: 300 },
      { title: "下韭菜调清汤盛碗", detail: "待丸子全部浮起煮开2分钟，撇去表面浮沫，下入鲜嫩韭菜碎，调入少许盐、白胡椒粉和香油，出锅盛大汤碗，丸子如雪花般弹嫩，汤鲜直透骨髓。", timerSeconds: 120 }
    ],
    tips: "刮鱼肉时避开鱼皮与中间黑红肉可保丸子通体雪白不腥；‘鲅鱼跳龙门、一把青韭菜’，出锅前撒一把鲜韭菜是胶东鲜味的灵魂画笔。",
    tags: ["海鲜", "鲅鱼丸子", "胶东名汤", "鲜美清润"]
  },
  {
    id: "rec_seafood_28",
    name: "烟台酸辣捞汁活鸟贝",
    subtitle: "胶东深海红宝活鸟贝开壳断生3秒，投入冰镇秘制酸辣捞汁中，爽脆无渣爆汁开胃",
    calories: "70 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "山东",
    cookingMethod: "极速焯水冰镇",
    season: ["spring", "summer", "autumn"],
    cookTime: "10分钟",
    difficulty: "极速秒杀",
    image: photoMap["烟台酸辣捞汁活鸟贝"],
    photoUrl: photoMap["烟台酸辣捞汁活鸟贝"],
    ingredients: [
      { name: "鲜活烟台鸟贝肉", amount: "350g" },
      { name: "黄瓜丝与木耳丝", amount: "各30g(垫底)" },
      { name: "蒜碎与小米辣圈", amount: "各15g" },
      { name: "香菜段", amount: "10g" }
    ],
    seasonings: [
      { name: "秘制捞汁/苹果醋", amount: "40ml" },
      { name: "海鲜生抽", amount: "25ml" },
      { name: "青芥末/芥末油", amount: "2g(轻微提神提香)" },
      { name: "白糖", amount: "10g" },
      { name: "纯净冰块", amount: "适量" }
    ],
    seasonings: [],
    steps: [
      { title: "活鸟贝揉洗去粘液", detail: "鸟贝肉挑开去除内脏泥沙，加少许盐和生粉轻轻抓洗掉表面粘液，用清水反复冲洗至洁净脆生沥干。", timerSeconds: 180 },
      { title: "调制冰镇酸辣捞汁", detail: "碗中混合捞汁、生抽、青芥末、蒜末、小米椒、香菜与白糖搅拌均匀，加入纯净冰块调和冰镇备用。", timerSeconds: 120 },
      { title: "沸水大火极速焯烫3秒", detail: "锅中烧滚开沸水加少许料酒，倒入鸟贝肉，数‘一、二、三’（仅需3-5秒，鸟贝稍一蜷缩打卷立即捞出），迅速投进冰水中极速冰镇镇脆。", timerSeconds: 60 },
      { title: "捞出浸入捞汁享用", detail: "盘底铺上清脆黄瓜丝，摆上冰镇爽脆的鸟贝肉，浇上冰凉酸辣捞汁，入口脆嫩多汁，微酸微辣伴随芥末通透，夏日第一解馋下酒小鲜。", timerSeconds: 60 }
    ],
    tips: "鸟贝焯水必须以‘秒’计算（3至5秒足矣），捞出必须‘秒进冰水’，否则贝肉缩水老化，失去脆嫩如瓜果的绝品口感。",
    tags: ["海鲜", "捞汁鸟贝", "烟台海鲜", "冰镇脆爽"]
  },
  {
    id: "rec_seafood_29",
    name: "胶东辣炒海天鹅蛋",
    subtitle: "深海大紫石房蛤肉质肥厚远胜鲍鱼，韭菜青椒大火猛火快炒，红白相间，鲜嫩弹滑多汁",
    calories: "85 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "山东",
    cookingMethod: "大火辣炒",
    season: ["spring", "summer", "autumn"],
    cookTime: "10分钟",
    difficulty: "大火快炒",
    image: photoMap["胶东辣炒海天鹅蛋"],
    photoUrl: photoMap["胶东辣炒海天鹅蛋"],
    ingredients: [
      { name: "鲜活海天鹅蛋肉(紫石房蛤)", amount: "4只(取净肉约300g切厚片)" },
      { name: "头刀鲜韭菜段", amount: "50g" },
      { name: "青红尖椒片", amount: "各20g" },
      { name: "生姜丝与蒜片", amount: "各10g" }
    ],
    seasonings: [
      { name: "鲁味一品鲜生抽", amount: "15ml" },
      { name: "蚝油", amount: "10ml" },
      { name: "料酒", amount: "10ml" },
      { name: "水淀粉", amount: "10ml" },
      { name: "花生油", amount: "20ml" }
    ],
    steps: [
      { title: "天鹅蛋取肉切斜厚片", detail: "天鹅蛋撬开取肉去泥肠，洗净沥干，用刀片成厚薄均匀的斜大片（肉质极厚，片开才入味脆嫩）。", timerSeconds: 180 },
      { title: "滚水快速焯烫3秒", detail: "锅中烧滚水，下入天鹅蛋肉片翻烫3秒变色捞出沥水，不可久烫。", timerSeconds: 30 },
      { title: "热锅炝香姜蒜尖椒", detail: "铁锅烧热下花生油，爆香蒜片、姜丝和青红尖椒片出辣香味。", timerSeconds: 30 },
      { title: "下天鹅蛋韭菜大火颠翻", detail: "倒入焯好的天鹅蛋片和鲜韭菜段，烹入料酒、生抽和蚝油，淋水淀粉，大火快速翻炒15秒断生出锅，汤汁紧紧包裹贝肉，鲜香脆嫩。", timerSeconds: 30 }
    ],
    tips: "天鹅蛋学名紫石房蛤，肉质极肥脆，炒制必须全程大火快速颠翻，韭菜刚断生即刻出锅，保持贝肉的鲜嫩脆汁。",
    tags: ["海鲜", "辣炒天鹅蛋", "胶东名菜", "鲜甜弹牙"]
  },
  {
    id: "rec_seafood_30",
    name: "大连蒜蓉粉丝蒸夏夷大扇贝",
    subtitle: "深海天然野生大夏夷贝，贝柱比鸡蛋黄还要肥厚，金银蒜蓉清蒸，粉丝吸足甘甜贝髓原汤",
    calories: "90 kcal/只",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "辽宁",
    cookingMethod: "清蒸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "12分钟",
    difficulty: "新手友好",
    image: photoMap["大连蒜蓉粉丝蒸夏夷大扇贝"],
    photoUrl: photoMap["大连蒜蓉粉丝蒸夏夷大扇贝"],
    ingredients: [
      { name: "大连深海新鲜夏夷大扇贝", amount: "4只(贝壳大肉厚)" },
      { name: "绿豆粉丝", amount: "40g(温水泡软)" },
      { name: "金银双拼蒜蓉酱", amount: "50g" },
      { name: "香葱花与红椒碎", amount: "各10g" }
    ],
    seasonings: [
      { name: "特级蒸鱼豉油", amount: "20ml" },
      { name: "热花生油", amount: "20ml" }
    ],
    steps: [
      { title: "刷洗扇贝处理贝肉", detail: "用小刀将扇贝壳撬开，取有肉的一半贝壳刷净做容器；贝肉切掉黑色内脏包，保留白嫩大贝柱和橙红贝黄，轻轻划十字花刀。", timerSeconds: 240 },
      { title: "粉丝垫底铺大贝肉", detail: "泡软粉丝在贝壳上绕成鸟巢窝状，将大贝肉安放在粉丝中央，在表面铺满厚厚一层金银蒜蓉酱。", timerSeconds: 120 },
      { title: "大火沸水足汽蒸5分钟", detail: "蒸锅大火将水烧开上汽，放入夏夷贝蒸盘，加盖大火猛蒸5分钟关火。", timerSeconds: 300 },
      { title: "出锅撒葱泼热油", detail: "端出撒上葱花红椒碎，沿盘周淋蒸鱼豉油，烧滚热花生油泼在葱蒜上滋滋炸响，贝肉硕大饱满甘甜多汁，粉丝鲜美胜肉。", timerSeconds: 60 }
    ],
    tips: "夏夷贝贝柱硕大肥厚，清蒸时间以5分钟为黄金分割点，出锅肉质充盈多汁不缩水，底下的粉丝吸收贝柱滴落的原汁最为鲜甜。",
    tags: ["海鲜", "大连夏夷贝", "蒜蓉粉丝蒸扇贝", "肥美多汁"]
  },
  {
    id: "rec_seafood_31",
    name: "胶东传统红烧大对虾",
    subtitle: "经典国宴鲁菜油焖大对虾，煸出红润虾脑油，大对虾两面金黄透亮，虾壳酥脆虾肉甜弹醇厚",
    calories: "145 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "山东",
    cookingMethod: "油焖红烧",
    season: ["autumn", "winter", "spring"],
    cookTime: "15分钟",
    difficulty: "经典鲁菜",
    image: photoMap["胶东传统红烧大对虾"],
    photoUrl: photoMap["胶东传统红烧大对虾"],
    ingredients: [
      { name: "渤海湾新鲜大对虾/斑节对虾", amount: "8只(个大体肥)" },
      { name: "老生姜片与姜丝", amount: "20g" },
      { name: "大葱段", amount: "20g" }
    ],
    seasonings: [
      { name: "绍兴花雕酒", amount: "20ml" },
      { name: "特级酿造生抽", amount: "20ml" },
      { name: "白砂糖", amount: "15g(提鲜出红润焦糖色)" },
      { name: "精盐", amount: "2g" },
      { name: "高汤/热水", amount: "80ml" },
      { name: "花生油", amount: "30ml" }
    ],
    steps: [
      { title: "对虾修剪与挑虾线", detail: "对虾剪去虾枪、虾须、虾足，从虾背第二节用牙签挑出虾线，洗净用厨房纸吸干表面水分。", timerSeconds: 180 },
      { title: "轻按虾头煸出诱人红油", detail: "热锅下花生油烧热，下入大对虾两面微煎，用锅铲轻按压虾头虾脑部位，挤出天然虾脑红油，油色瞬间变为明亮金红。", timerSeconds: 180 },
      { title: "下姜葱烹黄酒调味", detail: "放入姜丝和葱段爆香，烹入20ml花雕酒去腥，加入生抽、白糖、少许盐和80ml热水大火烧沸。", timerSeconds: 60 },
      { title: "加盖油焖大火收浓汁", detail: "加盖中火油焖3分钟让大虾充分吸味，揭盖转大火收汁，快速颠翻颠锅让浓稠红亮的虾油糖汁紧紧包裹在每一只大虾表面出锅。", timerSeconds: 240 }
    ],
    tips: "油焖大对虾的关键动作是‘拿锅铲轻轻按压虾头’，挤出橘红虾脑油，整锅汤色自然红润发亮，无需加任何色素酱油，虾肉鲜甜醇美。",
    tags: ["海鲜", "油焖大对虾", "经典鲁菜", "色泽红亮"]
  },
  {
    id: "rec_seafood_32",
    name: "渤海香煎针亮鱼",
    subtitle: "渤海渔民传统风物，针亮鱼骨绿肉白，少刺肉紧，两面慢火煎至金黄酥香微泛金黄，沿海第一下酒菜",
    calories: "130 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "山东",
    cookingMethod: "香煎",
    season: ["spring", "summer", "autumn"],
    cookTime: "15分钟",
    difficulty: "极简下酒",
    image: photoMap["渤海香煎针亮鱼"],
    photoUrl: photoMap["渤海香煎针亮鱼"],
    ingredients: [
      { name: "新鲜渤海针亮鱼(针鱼)", amount: "4条(约400g)" },
      { name: "葱段与生姜片", amount: "各15g" }
    ],
    seasonings: [
      { name: "精盐", amount: "3g" },
      { name: "料酒", amount: "15ml" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "花生油", amount: "25ml" }
    ],
    steps: [
      { title: "针鱼去腮内脏切段", detail: "针亮鱼去掉长嘴尖，剖腹洗净（其骨骼天然呈翠绿色，是天然特征），擦干水分切成约8厘米长段，两面划斜刀。", timerSeconds: 180 },
      { title: "少许盐和料酒腌制风干", detail: "抹上精盐、白胡椒粉和料酒抓匀腌制10分钟，用纸巾彻底吸干表面水分（鱼身干燥煎时才不破皮粘底）。", timerSeconds: 600 },
      { title: "热锅冷油慢火香煎", detail: "平底锅烧热倒花生油，滑入针鱼段，中火慢煎3分钟，待底面定型金黄后再轻轻翻面。", timerSeconds: 240 },
      { title: "双面煎酥出锅", detail: "两面持续中小火煎至金黄酥脆，骨酥肉嫩，直接装盘趁热抓着吃，刺少肉香，麦香扑鼻，下酒无敌。", timerSeconds: 180 }
    ],
    tips: "针亮鱼肉质天生紧致白嫩，骨头泛绿是其体内天然胆绿素沉淀，属天然无害特征；煎前吸干水分是外皮焦酥、鱼肉不碎的诀窍。",
    tags: ["海鲜", "香煎针亮鱼", "渤海特产", "酥香下酒"]
  },

  // 4. 闽台·东山岛/厦门/基隆港 (6道)
  {
    id: "rec_seafood_33",
    name: "闽南正宗香脆海蛎煎",
    subtitle: "闽南与台湾名吃蚵仔煎天花板，东山岛小珠蛎调地瓜粉浆青蒜苗煎透，磕入土鸡蛋，外脆内嫩蘸甜辣酱",
    calories: "180 kcal/份",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "福建",
    cookingMethod: "香煎",
    season: ["winter", "autumn", "spring"],
    cookTime: "12分钟",
    difficulty: "家常经典",
    image: photoMap["闽南正宗香脆海蛎煎"],
    photoUrl: photoMap["闽南正宗香脆海蛎煎"],
    ingredients: [
      { name: "东海新鲜小珠蛎/海蛎", amount: "200g" },
      { name: "纯正红薯淀粉(地瓜粉)", amount: "40g" },
      { name: "清水", amount: "60ml" },
      { name: "鲜嫩青蒜苗(切小细段)", amount: "40g" },
      { name: "土鸡蛋", amount: "2个(打散)" }
    ],
    seasonings: [
      { name: "纯猪油/花生油", amount: "25ml" },
      { name: "特制厦门甜辣酱", amount: "适量(佐餐蘸料)" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "鱼露/盐", amount: "半小勺" }
    ],
    steps: [
      { title: "海蛎淘洗裹地瓜粉浆", detail: "海蛎轻柔抓洗挑出残余碎壳沥干，加入切碎的青蒜苗、白胡椒粉和半勺鱼露抓匀；红薯粉加60ml水调成细腻浓稠粉浆，倒入海蛎中拌匀挂糊。", timerSeconds: 180 },
      { title: "热油煎定型海蛎糊", detail: "平底锅下猪油烧热，将裹好粉浆的海蛎均匀平铺倒入锅中，中小火慢煎2分钟至底部粉浆凝固呈半透明金黄焦脆脆壳。", timerSeconds: 120 },
      { title: "淋入蛋液翻面煎金黄", detail: "将打散的土鸡蛋液均匀浇淋在海蛎表面，待蛋液半凝固后快速翻面，继续煎1-2分钟至两面金黄酥脆、蛋香扑鼻。", timerSeconds: 120 },
      { title: "出锅搭配厦门甜辣酱", detail: "铲出装盘，旁边挤上一碟红亮酸甜微辣的厦门甜辣酱，夹起一块蘸酱入口，海蛎爆浆鲜嫩，粉皮Q弹酥脆，绝美享受。", timerSeconds: 30 }
    ],
    tips: "海蛎一定要选肉粒紧实的小珠蛎；地瓜粉调浆切忌太稀，刚好包裹住海蛎为准；煎制用猪油香气比普通油提升数倍。",
    tags: ["海鲜", "闽南海蛎煎", "蚵仔煎", "街头名小吃"]
  },
  {
    id: "rec_seafood_34",
    name: "厦门沙茶爆炒鲜活鱿鱼管",
    subtitle: "厦门老街大排档招牌，鲜活鱿鱼切麦穗花刀，厦门沙茶酱浓郁微辣复合香气，爽脆爆汁锅气十足",
    calories: "120 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "福建",
    cookingMethod: "大火爆炒",
    season: ["summer", "autumn", "spring"],
    cookTime: "10分钟",
    difficulty: "排档镬气",
    image: photoMap["厦门沙茶爆炒鲜活鱿鱼管"],
    photoUrl: photoMap["厦门沙茶爆炒鲜活鱿鱼管"],
    ingredients: [
      { name: "新鲜深海鱿鱼管", amount: "2只(约400g)" },
      { name: "青红彩椒块", amount: "各30g" },
      { name: "洋葱片与蒜末", amount: "各20g" }
    ],
    seasonings: [
      { name: "厦门正宗沙茶酱", amount: "35g" },
      { name: "特级生抽", amount: "10ml" },
      { name: "绍兴米酒", amount: "10ml" },
      { name: "白糖", amount: "3g" },
      { name: "花生油", amount: "20ml" }
    ],
    steps: [
      { title: "鱿鱼撕膜打麦穗花刀", detail: "鱿鱼管撕去外表紫红薄膜，剖开平铺在案板上，内部朝上用刀呈45度交叉划出细密网格麦穗花刀，改刀成适口长方块。", timerSeconds: 180 },
      { title: "沸水极速焯烫卷花", detail: "锅中烧大滚开水加料酒，下入鱿鱼块翻烫5秒钟，鱿鱼遇热瞬间卷成美丽立体的麦穗卷花，立即捞出沥干水。", timerSeconds: 30 },
      { title: "热油爆香沙茶酱底料", detail: "铁锅大火热油，爆香蒜末与洋葱块，加入35g沙茶酱小火快速煸炒出浓郁沙茶花生复合辛香红油。", timerSeconds: 60 },
      { title: "下鱿鱼大火颠翻秒杀出锅", detail: "倒入卷花鱿鱼和青红彩椒块，烹入米酒、生抽和少许白糖，开大火极速翻炒15秒让沙茶酱汁挂满花刀缝隙，出锅装盘。", timerSeconds: 30 }
    ],
    tips: "鱿鱼麦穗花刀必须打在内壁（内脏面），受热才会自然向外翻卷；沙茶酱要先用小火在油中炒散炒香，再大火下鱿鱼快炒。",
    tags: ["海鲜", "沙茶炒鱿鱼", "厦门风味", "大排档下酒"]
  },
  {
    id: "rec_seafood_35",
    name: "闽南红蟳香米糕",
    subtitle: "闽台宴席压轴名品，肥美红蟳（红膏母青蟹）切块铺在香菇肉丝糯米油饭上蒸透，蟹膏融进米粒中甘香馥郁",
    calories: "280 kcal/碗",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "福建",
    cookingMethod: "原汁同蒸",
    season: ["autumn", "winter"],
    cookTime: "35分钟",
    difficulty: "宴席大菜",
    image: photoMap["闽南红蟳香米糕"],
    photoUrl: photoMap["闽南红蟳香米糕"],
    ingredients: [
      { name: "鲜活红蟳(满黄青蟹/膏蟹)", amount: "1只(约400g)" },
      { name: "优质圆糯米", amount: "200g(提前浸泡4小时)" },
      { name: "干香菇丝", amount: "4朵(泡发)" },
      { name: "海金钩干虾米", amount: "20g" },
      { name: "五花肉丝", amount: "50g" },
      { name: "红葱头碎", amount: "30g" }
    ],
    seasonings: [
      { name: "纯黑麻油", amount: "20ml" },
      { name: "酿造酱油/膏油", amount: "20ml" },
      { name: "米酒", amount: "15ml" },
      { name: "白胡椒粉", amount: "1g" },
      { name: "香菜段", amount: "少许" }
    ],
    steps: [
      { title: "炒制香浓糯米油饭底", detail: "黑麻油热锅爆香红葱头碎出金黄葱油酥，下五花肉丝、香菇丝和虾米煸炒出香，倒入沥干的生糯米翻炒，调入酱油、米酒和白胡椒粉炒至米粒半透明半熟。", timerSeconds: 300 },
      { title: "米糕装入蒸竹笼平铺", detail: "将炒香的糯米油饭盛入铺好蒸布的浅竹笼或深盘中，整平表面。", timerSeconds: 60 },
      { title: "红蟳切块铺在米糕上", detail: "红蟳刷洗干净，掰开蟹斗去除鳃胃，斩成大块，红膏朝上整齐码在糯米油饭表面，蟹壳盖在最中央。", timerSeconds: 180 },
      { title: "大火足汽蒸透开盖", detail: "蒸锅水大火烧开，上汽后放入竹笼，全程大火蒸20分钟，蟹肉鲜甜汁液与橘红蟹膏完全融化渗透进底下的糯米饭中，撒香菜出锅，米香蟹浓。", timerSeconds: 1200 }
    ],
    tips: "红蟳即母青蟹，蟹黄硬结甘香；先将糯米与香菇虾米炒出油饭底再同蟹蒸，米粒吸饱蟹汁粒粒分明油亮，是闽台喜庆宴席首选。",
    tags: ["海鲜", "红蟳米糕", "闽台风味", "满堂红硬菜"]
  },
  {
    id: "rec_seafood_36",
    name: "东山岛白灼小管配生抽酱油水",
    subtitle: "东山岛灯捕野生鲜活小管，白灼50秒变身微红透亮，蘸一碟红椒蒜末酱油水，爽脆弹牙爆墨汁",
    calories: "85 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "福建",
    cookingMethod: "白灼",
    season: ["summer", "autumn"],
    cookTime: "8分钟",
    difficulty: "极简至鲜",
    image: photoMap["东山岛白灼小管配生抽酱油水"],
    photoUrl: photoMap["东山岛白灼小管配生抽酱油水"],
    ingredients: [
      { name: "东山岛鲜活小管(小鱿鱼)", amount: "350g" },
      { name: "大葱段与生姜片", amount: "各15g" }
    ],
    seasonings: [
      { name: "特级生抽酱油", amount: "30ml" },
      { name: "红小米辣圈与蒜末", amount: "各10g" },
      { name: "白糖", amount: "3g" },
      { name: "香醋", amount: "5ml" },
      { name: "热花生油", amount: "10ml" }
    ],
    steps: [
      { title: "整条洗净保留墨囊", detail: "新鲜小管流水冲洗干净，保留体内墨囊与背部透明软骨（东山岛传统吃法不剖肚，整条白灼最保原汁原味）。", timerSeconds: 120 },
      { title: "调配闽南酱油水蘸汁", detail: "小碗中放入蒜末、小米椒圈，淋滚油泼香，调入生抽、香醋和少许白糖调成鲜咸微酸辣的酱油水。", timerSeconds: 60 },
      { title: "大滚水加姜葱白灼50秒", detail: "锅中烧大滚开水放入葱姜和少许盐料酒，倒入整只小管，大火翻滚沸腾50秒，见小管身躯圆润鼓胀、通体呈现粉红微卷立即捞出。", timerSeconds: 60 },
      { title: "沥水装盘趁热蘸食", detail: "捞出迅速沥干装盘，整只送入口中咬下，表皮爽脆脆响爆出鲜甜墨汁与浓郁海味，至纯至真。", timerSeconds: 30 }
    ],
    tips: "白灼小管的秘诀唯在‘火候与时间’，沸水下锅50秒断生立刻捞出，肉质最是脆嫩化渣，超时十秒便老如皮筋。",
    tags: ["海鲜", "东山岛小管", "白灼海鲜", "脆嫩爆汁"]
  },
  {
    id: "rec_seafood_37",
    name: "厦门沙茶海鲜一锅鲜",
    subtitle: "鲜活海虾、花蛤、鱿鱼圈与手工鱼丸浸在浓郁椰香沙茶高汤中，鲜香微辣，汤浓味浓",
    calories: "210 kcal/份",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "福建",
    cookingMethod: "砂锅浓汤煲",
    season: ["autumn", "winter", "spring"],
    cookTime: "20分钟",
    difficulty: "家庭海鲜锅",
    image: photoMap["厦门沙茶海鲜一锅鲜"],
    photoUrl: photoMap["厦门沙茶海鲜一锅鲜"],
    ingredients: [
      { name: "鲜活基围虾", amount: "8只" },
      { name: "花蛤/文蛤(吐净泥沙)", amount: "150g" },
      { name: "深海鲜鱿鱼圈", amount: "100g" },
      { name: "手工Q弹鱼丸", amount: "4粒" },
      { name: "老豆腐块/油豆泡", amount: "80g" },
      { name: "大骨高汤/热水", amount: "650ml" }
    ],
    seasonings: [
      { name: "正宗厦门沙茶酱", amount: "45g" },
      { name: "浓椰浆/花生酱", amount: "20ml" },
      { name: "生抽", amount: "15ml" },
      { name: "蒜末与红葱头碎", amount: "各15g" }
    ],
    steps: [
      { title: "热油炒香沙茶浓酱", detail: "砂锅热油，爆香蒜末和红葱头碎，倒入45g沙茶酱中小火炒出浓郁金红油脂，倒入20ml椰浆融合提香。", timerSeconds: 90 },
      { title: "注入高汤煨煮豆制品", detail: "倒入650ml大骨高汤煮沸，下入老豆腐块和手工鱼丸，盖盖慢煨5分钟让豆制品饱吸沙茶浓汁。", timerSeconds: 300 },
      { title: "铺上海虾花蛤与鱿鱼圈", detail: "转大火，平铺放入大虾、花蛤和鱿鱼圈，加盖焖煮3分钟至花蛤全开、大虾变红蜷曲。", timerSeconds: 180 },
      { title: "撒芹菜香菜滚烫上桌", detail: "调入少许生抽调味，撒入一把青芹菜粒与香菜段，整锅砂锅端上桌，热气腾腾，汤浓鲜美，泡饭吃一流。", timerSeconds: 60 }
    ],
    tips: "沙茶酱加一点椰浆能中和辛香并带来丝滑奶香，海鲜易熟，最后几分钟下锅焖煮能锁住大虾与鱿鱼的弹嫩水分。",
    tags: ["海鲜", "沙茶海鲜煲", "厦门味道", "暖胃一锅鲜"]
  },
  {
    id: "rec_seafood_38",
    name: "台湾三杯小管",
    subtitle: "黑麻油、老姜厚片、米酒与新鲜九层塔快炒鲜小管，浓油赤酱焦糖回甘，酱香扑鼻台湾夜市霸主",
    calories: "140 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "港澳台",
    cookingMethod: "三杯生炒",
    season: ["summer", "autumn", "spring"],
    cookTime: "15分钟",
    difficulty: "台式热炒",
    image: photoMap["台湾三杯小管"],
    photoUrl: photoMap["台湾三杯小管"],
    ingredients: [
      { name: "鲜活小管/鲜鱿鱼", amount: "350g(切厚圈)" },
      { name: "鲜嫩九层塔(罗勒叶)", amount: "一大把(约25g)" },
      { name: "老姜切整齐薄片", amount: "30g" },
      { name: "整粒剥皮大蒜", amount: "10瓣" },
      { name: "红辣椒斜段", amount: "1根" }
    ],
    seasonings: [
      { name: "传统纯黑麻油(第一杯)", amount: "30ml" },
      { name: "台湾米酒(第二杯)", amount: "30ml" },
      { name: "酿造酱油膏/生抽老抽(第三杯)", amount: "30ml" },
      { name: "天然冰糖", amount: "15g" }
    ],
    steps: [
      { title: "小管切圈焯水定型", detail: "小管洗净切成厚圆圈，沸水焯烫10秒迅速捞出沥干（必须沥透水，否则三杯炒出汤汁不干香）。", timerSeconds: 120 },
      { title: "黑麻油煸香老姜大蒜", detail: "砂锅或铁锅下入第一杯黑麻油，小火将姜片慢慢煸至边缘卷曲起皱（煸透老姜是三杯香气的源头），下入整粒大蒜煸至金黄。", timerSeconds: 180 },
      { title: "下小管与酱油冰糖大火翻炒", detail: "倒入小管圈，倒入第三杯酱油膏与冰糖大火快速翻炒上色，炒至酱汁起大泡浓稠挂汁。", timerSeconds: 60 },
      { title: "烹米酒抛九层塔焖香出锅", detail: "烹入第二杯台湾米酒，投入整把新鲜九层塔和辣椒段，大火快速颠翻加盖焖15秒关火，九层塔受热释放出浓烈独特的异香，令人食欲大开。", timerSeconds: 45 }
    ],
    tips: "正宗三杯即‘一杯黑麻油、一杯米酒、一杯酱油膏’；黑麻油要小火慢煸老姜至干瘪微焦，九层塔关火前下锅翻匀即出，香气才最饱满清冽。",
    tags: ["海鲜", "三杯小管", "台式热炒", "浓香下饭"]
  },

  // 5. 世界名港·异域风情海鲜大菜 (5道)
  {
    id: "rec_seafood_39",
    name: "新加坡黑胡椒炒肉蟹",
    subtitle: "新加坡国菜殿堂级代表作，现磨黑胡椒配黄油浓汁裹紧肥硕大肉蟹，辛香霸道浓烈过瘾",
    calories: "185 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "海外名菜",
    cookingMethod: "浓汁爆炒",
    season: ["autumn", "winter", "summer"],
    cookTime: "20分钟",
    difficulty: "国宴名菜",
    image: photoMap["新加坡黑胡椒炒肉蟹"],
    photoUrl: photoMap["新加坡黑胡椒炒肉蟹"],
    ingredients: [
      { name: "鲜活特大青蟹/肉蟹(斯里兰卡肉蟹)", amount: "1只(约700g)" },
      { name: "粗粒现磨纯黑胡椒碎", amount: "20g" },
      { name: "蒜末与红葱头碎", amount: "各25g" },
      { name: "干红辣椒碎", amount: "1根" }
    ],
    seasonings: [
      { name: "优质动物黄油", amount: "25g" },
      { name: "特级黑酱油/老抽", amount: "15ml" },
      { name: "蚝油", amount: "20ml" },
      { name: "白糖", amount: "15g" },
      { name: "鱼露", amount: "10ml" },
      { name: "高汤/水", amount: "100ml" }
    ],
    steps: [
      { title: "肉蟹宰杀斩块拍裂蟹钳", detail: "肉蟹洗净去鳃去沙囊，一分为四斩大块，两只大蟹螯用刀背用力拍裂方便受热吸汁，切口处拍少许干淀粉。", timerSeconds: 240 },
      { title: "热油快炸锁住肉汁", detail: "锅中热油至七成热，下入肉蟹块大火炸2分钟至蟹壳通红熟化，捞出控干油分。", timerSeconds: 120 },
      { title: "黄油炒香黑胡椒碎与料头", detail: "锅中融化黄油，下入蒜末、红葱头碎小火慢炒出香，下入现磨粗粒黑胡椒碎翻炒出霸气浓烈的辛香胡椒油。", timerSeconds: 120 },
      { title: "下蟹块高汤焖汁收浓裹黑浆", detail: "倒入炸好的蟹块，加入高汤、蚝油、黑酱油、鱼露和白糖，大火收汁翻炒2分钟，让黏稠发黑的浓郁黑胡椒酱汁紧紧包裹在每一寸蟹肉上，装盘吮指回味。", timerSeconds: 150 }
    ],
    tips: "必须使用‘粗粒现磨黑胡椒’，比成品胡椒粉香气强十倍；黄油与黑胡椒是天作之合，白糖用以柔和辛辣，浓醇酱汁拌炸馒头绝配。",
    tags: ["海鲜", "新加坡黑胡椒蟹", "南洋风味", "硬核大菜"]
  },
  {
    id: "rec_seafood_40",
    name: "西班牙蒜香橄榄油慢浸大虾",
    subtitle: "西班牙经典Tapas（Gambas al Ajillo），特级初榨橄榄油慢煨蒜片干椒，海虾脆嫩油润，法棍蘸油绝配",
    calories: "170 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "海外名菜",
    cookingMethod: "慢火油浸",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "12分钟",
    difficulty: "西餐快手",
    image: photoMap["西班牙蒜香橄榄油慢浸大虾"],
    photoUrl: photoMap["西班牙蒜香橄榄油慢浸大虾"],
    ingredients: [
      { name: "鲜大虾仁/开背基围虾", amount: "12只(开背去肠泥)" },
      { name: "紫皮大蒜切厚片", amount: "8瓣" },
      { name: "干红辣椒剪小段", amount: "2根" },
      { name: "新鲜欧芹碎/法香", amount: "一大把(约10g)" },
      { name: "现烤法棍面包切片", amount: "数片(佐餐主食)" }
    ],
    seasonings: [
      { name: "特级初榨橄榄油(EVOO)", amount: "80ml" },
      { name: "白葡萄酒", amount: "15ml" },
      { name: "海盐", amount: "2g" },
      { name: "黑胡椒碎", amount: "适量" }
    ],
    steps: [
      { title: "大虾开背吸干水分", detail: "大虾仁洗净，厨房纸巾反复吸干水分，用少许海盐和黑胡椒抓匀腌制5分钟。", timerSeconds: 300 },
      { title: "橄榄油小火慢煸蒜片红椒", detail: "取小铸铁锅或厚底平底锅，倒入80ml特级初榨橄榄油，放入蒜片和干红辣椒段，极小火慢煨2分钟，看蒜片在油中缓缓冒出细密微泡并泛出微金黄色。", timerSeconds: 120 },
      { title: "滑入大虾烹白葡萄酒", detail: "转中火滑入大虾，烹入15ml白葡萄酒，大虾在温热橄榄油中两面各煎翻1分钟至变红卷曲刚断生。", timerSeconds: 120 },
      { title: "撒欧芹碎趁热上桌蘸法棍", detail: "关火撒入一大把新鲜欧芹碎，整锅端上桌，油温仍在滋滋轻微翻滚，虾肉脆嫩弹爽，用烤得香脆的法棍面包蘸浸饱虾鲜蒜香的橄榄油吃，惊艳至极。", timerSeconds: 60 }
    ],
    tips: "蒜片切忌大火炸焦，必须用低温橄榄油慢煨出蒜油香；浸虾的蒜香橄榄油是整道菜的灵魂精华，用法棍蘸着吃才是西班牙当地人的地道吃法。",
    tags: ["海鲜", "西班牙大虾", "Tapas经典", "橄榄油大虾"]
  },
  {
    id: "rec_seafood_41",
    name: "泰式青柠酸辣清蒸海鲈鱼",
    subtitle: "新鲜香茅草、鲜榨青柠檬汁、天然鱼露与小米辣调汁，海鲈鱼清蒸浇汁，酸辣开胃越煮越香",
    calories: "105 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "海外名菜",
    cookingMethod: "酸辣蒸煮",
    season: ["summer", "spring", "autumn"],
    cookTime: "15分钟",
    difficulty: "泰式经典",
    image: photoMap["泰式青柠酸辣清蒸海鲈鱼"],
    photoUrl: photoMap["泰式青柠酸辣清蒸海鲈鱼"],
    ingredients: [
      { name: "鲜活深海海鲈鱼", amount: "1条(约600g)" },
      { name: "新鲜香茅草(拍扁切段)", amount: "2根" },
      { name: "鲜榨青柠檬原汁", amount: "45ml" },
      { name: "鲜大蒜瓣碎", amount: "25g" },
      { name: "新鲜红绿指天椒碎", amount: "15g" },
      { name: "芫荽碎(香菜连根)", amount: "15g" },
      { name: "青柠檬片", amount: "3片(装饰)" }
    ],
    seasonings: [
      { name: "特级泰国鱼露", amount: "35ml" },
      { name: "椰糖/白砂糖", amount: "20g" },
      { name: "温热清高汤", amount: "60ml" }
    ],
    steps: [
      { title: "海鲈鱼改刀塞香茅", detail: "海鲈鱼洗净在鱼身划几道深刀口，鱼腹内塞入拍裂的香茅草段，鱼身底下垫两根大葱架起。", timerSeconds: 180 },
      { title: "调制泰式酸辣灵魂淋汁", detail: "小碗中混合鲜榨青柠汁、鱼露、椰糖、蒜碎、小米椒碎和高汤，搅拌至椰糖彻底融化，调出酸辣甘鲜的泰式金牌料汁。", timerSeconds: 120 },
      { title: "大火沸水足汽蒸鱼", detail: "大火将蒸锅水烧开，入鲈鱼大火蒸6分钟，开盖倒掉盘底析出的腥水。", timerSeconds: 360 },
      { title: "浇淋泰式酸辣汁续蒸出锅", detail: "将调好的泰式酸辣汁均匀浇淋在鱼身上，摆上新鲜青柠檬片，继续大火蒸2分钟，撒上香菜碎，连同蒸鱼底盘小酒精炉保温上桌，越煨越酸辣入味。", timerSeconds: 120 }
    ],
    tips: "青柠檬汁必须现挤才清香，不能用黄柠檬代替；中途倒掉蒸鱼第一道水再浇泰式汁，能让鱼肉彻底摆脱泥腥、纯吸柠檬香料至鲜。",
    tags: ["海鲜", "泰式柠檬鱼", "酸辣海鲈鱼", "清爽开胃"]
  },
  {
    id: "rec_seafood_42",
    name: "美式路易斯安那卡真海鲜大烩桶",
    subtitle: "美式南部海港豪迈盛宴，卡真香料黄油爆炒大虾、皮皮虾、玉米段与脆皮肠，整桶倒桌上抓着吃氛围感爆棚",
    calories: "260 kcal/份",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "海外名菜",
    cookingMethod: "烩炒手抓",
    season: ["summer", "autumn"],
    cookTime: "25分钟",
    difficulty: "聚会神菜",
    image: photoMap["美式路易斯安那卡真海鲜大烩桶"],
    photoUrl: photoMap["美式路易斯安那卡真海鲜大烩桶"],
    ingredients: [
      { name: "新鲜鲜活基围大虾", amount: "300g" },
      { name: "富贵皮皮虾/小龙虾", amount: "300g" },
      { name: "甜玉米段", amount: "1根(切圆段)" },
      { name: "美式脆皮烟熏香肠片", amount: "100g" },
      { name: "小土豆块", amount: "150g" },
      { name: "整头大蒜碎", amount: "50g" }
    ],
    seasonings: [
      { name: "无盐动物黄油", amount: "60g" },
      { name: "美式卡真综合香料粉(Cajun Seasoning)", amount: "25g" },
      { name: "红椒粉(Paprika)", amount: "10g" },
      { name: "黑胡椒碎与粗海盐", amount: "各3g" },
      { name: "老柠檬切块", amount: "半个" }
    ],
    steps: [
      { title: "玉米土豆香肠先煮熟", detail: "大汤锅中加水烧开，放入玉米段、小土豆块和香肠片大火煮10分钟至土豆软烂捞出备用。", timerSeconds: 600 },
      { title: "大虾皮皮虾快速焯熟", detail: "利用同一锅开水，下入基围虾和皮皮虾大火焯水2分钟至全熟捞出沥干。", timerSeconds: 120 },
      { title: "黄油炒香大蒜卡真酱汁", detail: "大炒锅中融化60g黄油，下入满满一大碗大蒜碎小火慢炒出浓香，倒入卡真香料粉、红椒粉、黑胡椒粉和海盐翻炒成红亮浓稠的卡真黄油酱汁。", timerSeconds: 120 },
      { title: "倒入海鲜配料整桶摇匀", detail: "倒入全部海鲜、玉米、土豆与香肠，挤入新鲜柠檬汁，大火快速颠锅翻炒1分钟让所有食材裹满红亮蒜香黄油，倒入镀锌小桶中倒扣上桌，戴手套抓着吃狂欢至极。", timerSeconds: 90 }
    ],
    tips: "卡真香料（Cajun）是美国新奥尔良灵魂调料，黄油用量一定要足，浓稠红润的蒜香黄油辣酱包裹海鲜与香甜玉米，风味浓郁绝伦。",
    tags: ["海鲜", "卡真海鲜桶", "美式海鲜", "手抓海鲜聚会"]
  },
  {
    id: "rec_seafood_43",
    name: "法式香煎银鳕鱼配白葡萄酒柠檬汁",
    subtitle: "深海大西洋银鳕鱼外酥里嫩肉质雪白如蒜瓣，柠檬白葡萄酒黄油汁解腻提鲜，米其林法餐经典",
    calories: "175 kcal/100g",
    categoryType: "seafood",
    cuisineCategory: "海鲜盛宴",
    isSeafood: true,
    region: "海外名菜",
    cookingMethod: "香煎",
    season: ["spring", "summer", "autumn", "winter"],
    cookTime: "15分钟",
    difficulty: "西餐经典",
    image: photoMap["法式香煎银鳕鱼配白葡萄酒柠檬汁"],
    photoUrl: photoMap["法式香煎银鳕鱼配白葡萄酒柠檬汁"],
    ingredients: [
      { name: "原切深海银鳕鱼厚排", amount: "2块(约350g)" },
      { name: "新鲜芦笋嫩尖", amount: "4根(焯水摆盘)" },
      { name: "新鲜迷迭香/百里香", amount: "2枝" },
      { name: "紫皮大蒜瓣(轻拍裂)", amount: "2瓣" }
    ],
    seasonings: [
      { name: "动物黄油", amount: "25g" },
      { name: "特级初榨橄榄油", amount: "15ml" },
      { name: "干白葡萄酒", amount: "30ml" },
      { name: "新鲜柠檬汁", amount: "15ml" },
      { name: "黑胡椒碎与海盐", amount: "各2g" }
    ],
    steps: [
      { title: "银鳕鱼排吸干水分腌制", detail: "银鳕鱼自然解冻，用厨房纸巾彻底吸干表面水分（水分吸干是煎出金黄酥脆焦壳的唯一诀窍），两面撒少许海盐与黑胡椒粒轻揉腌制5分钟。", timerSeconds: 300 },
      { title: "橄榄油中火煎定型焦壳", detail: "平底铸铁锅热透倒入橄榄油，放入银鳕鱼排，保持中火慢煎2.5分钟，鱼肉底部逐渐金黄微焦且表层鱼肉变白，用锅铲小心翻面。", timerSeconds: 150 },
      { title: "下黄油香草勺淋黄油汁", detail: "转小火，下入黄油块、迷迭香与拍裂大蒜，黄油融化起绵密泡沫并带有坚果香，倾斜平底锅，用汤勺不断舀起滚烫的香草黄油汁反复淋在银鳕鱼表面煎熟（法式Basting浇淋技法）。", timerSeconds: 120 },
      { title: "烹白葡萄酒柠檬汁收盘", detail: "将煎至两面金黄外酥内嫩的鱼排夹入热盘中，锅内余油烹入干白葡萄酒与柠檬汁大火收成微酸浓稠黄油柠檬酱汁，淋在鱼身两侧，点缀焯水芦笋优雅上桌。", timerSeconds: 60 }
    ],
    tips: "银鳕鱼油脂极其丰厚细腻，煎制时切勿频繁翻面，单面煎透再翻面；用汤勺舀融化的香草黄油不断浇淋鱼排表面，能使鱼肉均匀受热、鲜嫩多汁如蒜瓣融化。",
    tags: ["海鲜", "法式香煎鳕鱼", "米其林经典", "低卡高蛋白"]
  }
];

function updateFile(filePath) {
  const fullPath = path.resolve(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Append new seafood recipes before closing bracket
  const lastBracketIndex = content.lastIndexOf('];');
  if (lastBracketIndex === -1) {
    throw new Error('Could not find closing bracket ]; in ' + filePath);
  }

  const before = content.slice(0, lastBracketIndex).trimEnd();
  const needsComma = !before.endsWith(',');
  const newEntriesJson = newSeafoodRecipes.map(r => JSON.stringify(r, null, 2)).join(',\n');
  
  const updated = before + (needsComma ? ',\n' : '\n') + newEntriesJson + '\n];\n';
  fs.writeFileSync(fullPath, updated, 'utf8');
  console.log(`Updated ${fullPath}: Appended 43 coastal seafood recipes.`);
}

updateFile('../js/data/recipes.js');
updateFile('../android_build/assets/js/data/recipes.js');
