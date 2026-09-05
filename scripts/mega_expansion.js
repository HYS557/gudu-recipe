// scripts/mega_expansion.js
// 超级扩充：海鱼全矩阵 + 国宴硬席 + 时令蔬菜 + 饮品 + 甜品 + 靓汤 + 面食 全品类大扩张

const MEGA_DISHES = {

  // ====================== 一、海鱼全矩阵 ======================

  "潮汕传统金不换煮白鲳鱼": {
    subtitle: "潮汕渔家宴席珍品，九层塔金不换与普宁豆酱慢煮，鱼肉极柔嫩、酱香与鱼鲜绝妙融合",
    flavor: ["酱香鲜甜","九层塔芳香"],
    cookingMethod: "砂锅生煮",
    main: [
      { name: "新鲜活白鲳鱼(斗鲳)", amount: 1, unit: "条 约600克，打鳞去鳃去内脏洗净" }
    ],
    sec: [
      { name: "新鲜九层塔(金不换)", amount: 30, unit: "克，嫩梢" },
      { name: "普宁传统豆腐酱", amount: 40, unit: "克" },
      { name: "老生姜厚片", amount: 20, unit: "克" },
      { name: "青红小米辣", amount: 3, unit: "根" }
    ],
    sea: [
      { name: "鱼露", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "清水", amountText: "150 ml", baseAmount: 150, unit: "ml" }
    ],
    steps: [
      { title: "热锅底油煎香姜片铺底", instruction: "砂锅烧热下花生油，放入姜片小火煎出焦香味，铺底防止鱼皮粘锅。', chefTip: '姜片煎香是防腥增香的关键第一步！" },
      { title: "下普宁豆酱炒香出红油", instruction: "下普宁豆腐酱小火翻炒至红油渗出，豆酱焦香四溢。', chefTip: '豆酱充分炒香，鲜味与酱香才能完全激发！" },
      { title: "入鲳鱼加水加鱼露焖煮", instruction: "整条鲳鱼放入砂锅，加入鱼露、白糖和150ml清水，盖盖中火煮8分钟至汤汁浓稠，撒九层塔嫩梢和辣椒收汁出锅。', chefTip: '九层塔最后放，遇热瞬间释放浓烈芳香，是潮汕风味点睛之笔！" }
    ]
  },

  "江南家常葱油清蒸斗鲳": {
    subtitle: "江南宴客佳品，肉厚刺少，入口即化，葱油滚泼鲜甜清香，鱼肉如脂如玉",
    flavor: ["清鲜甜美","葱香扑鼻"],
    cookingMethod: "旺火足汽清蒸",
    main: [
      { name: "新鲜活斗鲳鱼", amount: 1, unit: "条 约500克，去鳃去内脏打花刀" }
    ],
    sec: [
      { name: "新鲜大葱段与姜丝", amount: 30, unit: "克，铺底入腔" },
      { name: "红小米椒细丝", amount: 1, unit: "根，点色" }
    ],
    sea: [
      { name: "蒸鱼豉油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "绍兴花雕酒", amountText: "1 瓷汤勺(腌鱼去腥)", baseAmount: 1, unit: "勺" },
      { name: "食用盐", amountText: "少许(薄抹鱼身)", baseAmount: 0.3, unit: "茶匙" },
      { name: "纯花生油", amountText: "3 瓷汤勺(烧滚泼香)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "腌鱼去腥入盘", instruction: "鲳鱼两面打花刀，薄抹少许盐和花雕酒腌5分钟，盘底铺葱段姜丝垫高，鱼身上再搭葱丝姜丝。', chefTip: '葱姜垫高让蒸汽四面环绕，鱼身受热均匀极鲜嫩！" },
      { title: "旺火足汽蒸7分钟", instruction: "蒸锅水大火烧沸冒足汽，放入鱼盘大火蒸7-8分钟（500克以内），立即出锅倒掉盘中蒸鱼水。', chefTip: '倒掉蒸鱼水！蒸出来的水有腥味，是清蒸鱼鲜甜的关键秘诀！" },
      { title: "浇豉油泼滚烫葱油", instruction: "鱼身摆上葱丝椒丝，淋蒸鱼豉油，另起锅将花生油烧至冒烟，猛地泼向葱丝！葱香瞬间激发扑鼻。', chefTip: '油必须烧到冒青烟，泼下的瞬间滋滋作响，香气冲天！" }
    ]
  },

  "上海老饭店本帮烟熏鲳鱼": {
    subtitle: "上海本帮冷盘头牌，糖与茶叶烟熏着色，外酥脆里嫩鲜，卤香甜鲜江南经典",
    flavor: ["烟熏甜鲜","外酥里嫩"],
    cookingMethod: "卤制烟熏",
    main: [
      { name: "新鲜鲳鱼", amount: 2, unit: "条 约600克，打花刀" }
    ],
    sec: [
      { name: "红茶茶叶(烟熏用)", amount: 30, unit: "克" },
      { name: "白砂糖(烟熏上色)", amount: 40, unit: "克" },
      { name: "白大米(烟熏底料)", amount: 50, unit: "克" }
    ],
    sea: [
      { name: "老抽酱油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "生抽酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "冰糖", amountText: "30 克", baseAmount: 30, unit: "克" },
      { name: "八角、桂皮、香叶", amountText: "各 2 粒/片", baseAmount: 1, unit: "份" },
      { name: "绍兴黄酒", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "鲳鱼炸至金黄", instruction: "鲳鱼用老抽、黄酒腌20分钟，入七成热油炸至两面金黄定形捞出。', chefTip: '炸至皮硬定形，才能在卤制时不碎烂。" },
      { title: "配料卤汁慢卤入味", instruction: "锅中加老抽、生抽、冰糖、黄酒和香料，加水没过鱼身，中火卤制20分钟，关火浸泡30分钟。', chefTip: '关火浸泡更入味，是本帮菜'焖卤'精髓！" },
      { title: "锡纸锅烟熏上色出香", instruction: "锅铺锡纸，放入白米、红茶和白糖，架上蒸架放卤好的鱼，盖盖中火烟熏3分钟至茶香浓郁外表深红。', chefTip: '烟熏是老上海冷盘绝技，茶香糖香赋予鱼表层独特迷人深棕色泽！" }
    ]
  },

  "川式老坛酸菜滑海鲈鱼片": {
    subtitle: "川菜水滑名技加持，无刺海鲈鱼片水滑如缎，老坛酸菜金汤鲜爽开胃，下饭汤汁令人欲罢不能",
    flavor: ["酸辣鲜爽","鱼片嫩滑"],
    cookingMethod: "水滑汆煮",
    main: [
      { name: "新鲜海鲈鱼", amount: 1, unit: "条 约700克，取两面鱼肉斜切3mm厚薄片" }
    ],
    sec: [
      { name: "四川老坛天然发酵酸菜", amount: 150, unit: "克，切小段" },
      { name: "黄灯笼辣椒酱", amount: 30, unit: "克" },
      { name: "老生姜片与蒜片", amount: 20, unit: "克" },
      { name: "野山椒", amount: 5, unit: "个" }
    ],
    sea: [
      { name: "鸡蛋清与玉米淀粉", amountText: "1枚蛋清+2勺生粉(鱼片上浆)", baseAmount: 1, unit: "份" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "高汤或清水", amountText: "500 ml", baseAmount: 500, unit: "ml" }
    ],
    steps: [
      { title: "鱼片上浆腌制水滑准备", instruction: "鱼片加盐、白胡椒、蛋清和生粉用手顺方向抓浆至黏滑，最后淋少许油封面，腌制15分钟。', chefTip: '水滑上浆是鱼片如绸如缎绝嫩口感的核心！顺方向抓匀不破坏肌肉纤维。" },
      { title: "爆香酸菜煮出金汤底", instruction: "热锅下油爆香姜蒜，放入酸菜段大火翻炒出酸香，加500ml高汤和野山椒煮沸5分钟成浓郁金汤，调入盐和黄灯笼辣椒酱。', chefTip: '酸菜炒透才够香，金汤底决定整道菜的鲜酸程度！" },
      { title: "鱼片逐片滑入汤中轻推熟透", instruction: "转小火，将鱼片逐片推入微沸汤中，用筷子轻轻拨散，约30秒鱼片变白透熟即可关火盛入深碗。', chefTip: '小火推入防止鱼片碎烂，30秒即熟！绝不能大火沸腾，否则鱼片老硬。" }
    ]
  },

  "经典清蒸鲜嫩海鲈鱼": {
    subtitle: "家常宴客必做，肉质白嫩刺少，蒸鱼豉油滚油泼香，清鲜甜美原汁原味",
    flavor: ["清鲜甜美","原汁原味"],
    cookingMethod: "旺火清蒸",
    main: [
      { name: "鲜活海鲈鱼(花鲈)", amount: 1, unit: "条 约600克，去鳃去内脏，鱼身划花刀" }
    ],
    sec: [
      { name: "葱白细丝", amount: 20, unit: "克" },
      { name: "嫩姜细丝", amount: 15, unit: "克" },
      { name: "红小米椒丝", amount: 1, unit: "根" }
    ],
    sea: [
      { name: "蒸鱼豉油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "花雕酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用盐", amountText: "少许薄抹", baseAmount: 0.3, unit: "茶匙" },
      { name: "热花生油", amountText: "3 瓷汤勺(滚烫泼葱丝)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "腌鱼铺盘旺火上汽", instruction: "鲈鱼打花刀，抹盐和花雕酒腌10分钟，腹腔内塞葱姜，盘底筷子架起，蒸锅大火烧沸。', chefTip: '腹腔内塞葱姜，鱼身悬空四面受蒸汽，内外同时熟透！" },
      { title: "旺火蒸8分钟精准出锅", instruction: "放入鱼盘旺火蒸8分钟（根据鱼厚度），精准计时，立即出锅倒掉盘中腥水，摆上葱丝椒丝。', chefTip: '宁可稍生补蒸，绝不能过火！蒸过了鱼肉就老了。" },
      { title: "热豉油滚油爆香", instruction: "蒸鱼豉油直接浇在葱丝上，另烧一勺滚烫花生油猛泼葱丝，葱香油香扑鼻，立即上桌！', chefTip: '油温越高越香，泼油时滋滋声越响越好！" }
    ]
  },

  "舟山渔港原汁清蒸鲜带鱼": {
    subtitle: "舟山渔港鲜家做法，银鳞宽厚油带鱼仅用葱姜花雕清蒸，油润至极脂香扑鼻",
    flavor: ["鲜甜油润","清香微腥"],
    cookingMethod: "清蒸原汁",
    main: [
      { name: "舟山新鲜宽体带鱼段", amount: 500, unit: "克，洗净斜切8cm段" }
    ],
    sec: [
      { name: "老生姜厚片", amount: 20, unit: "克" },
      { name: "大葱段", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "绍兴花雕酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯猪油或花生油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "带鱼腌制去腥", instruction: "带鱼段洗净用厨房纸吸干，加盐、白胡椒粉、花雕酒和姜片腌制15分钟入味去腥。', chefTip: '舟山带鱼新鲜度是关键，银鳞完整、鱼身发硬者最鲜！" },
      { title: "铺盘大火足汽蒸12分钟", instruction: "盘底铺葱段姜片，带鱼段排入盘中淋猪油，蒸锅大火足汽蒸12分钟。', chefTip: '猪油代替花生油，带鱼油脂与猪油相得益彰，鲜味加倍！" },
      { title: "出锅保留原汁享用", instruction: "出锅无需倒掉蒸鱼水（带鱼原汁极鲜！），撒嫩葱花即可上桌。', chefTip: '带鱼蒸出的汤汁鲜美无比，不同于海鲈要倒掉蒸水，舟山带鱼原汁要留下！" }
    ]
  },

  "江南传统香酥干煎带鱼段": {
    subtitle: "江南居家下酒极品，外皮金黄如铠甲，内部肉质细白多汁，撒椒盐鲜香无敌",
    flavor: ["香酥金黄","椒盐鲜香"],
    cookingMethod: "腌制香煎",
    main: [
      { name: "新鲜宽体带鱼段", amount: 500, unit: "克，洗净擦干腌制" }
    ],
    sec: [
      { name: "面粉与淀粉混合(7:3)", amount: 60, unit: "克，裹粉用" },
      { name: "老生姜末与葱花", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "花椒盐", amountText: "1 茶匙(成品撒面)", baseAmount: 1, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙(腌制)", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "绍兴黄酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "纯花生油", amountText: "足量煎炸用", baseAmount: 200, unit: "ml" }
    ],
    steps: [
      { title: "腌制带鱼去腥入味", instruction: "带鱼段加盐、白胡椒、黄酒、姜末腌制20分钟，用厨房纸彻底吸干水分（这一步决定是否酥脆！）。', chefTip: '水分一定要完全吸干！带鱼残留水分是导致煎不脆、溅油的根本原因。" },
      { title: "薄拍混合粉全面均匀裹覆", instruction: "腌好的带鱼两面均匀拍上面粉+淀粉混合粉，轻轻抖去多余粉末。', chefTip: '面粉+淀粉是黄金比例！纯面粉外皮厚重，纯淀粉易脱落。7:3最完美。" },
      { title: "中火热油煎至两面金黄酥脆", instruction: "平底锅下宽油烧至六成热，带鱼段排入不要翻动，中火煎3-4分钟至底面深黄定壳，翻面再煎3分钟，出锅撒花椒盐。', chefTip: '入锅后不要翻动！等底面完全金黄结壳再翻，皮壳才能完整酥脆！" }
    ]
  },

  "国宴名作清蒸鲜活红东星斑": {
    subtitle: "国宴指定珍贵海鱼，鱼皮弹胶厚实，肉质雪白清甜，蒸鱼豉油滚油泼香，奢华简约两相宜",
    flavor: ["鲜甜清雅","胶原丰富"],
    cookingMethod: "旺火精准清蒸",
    main: [
      { name: "鲜活红东星斑/石斑鱼", amount: 1, unit: "条 约700克，宰杀去鳃去内脏" }
    ],
    sec: [
      { name: "陈年花雕酒", amount: 30, unit: "ml，腌鱼去腥" },
      { name: "嫩姜丝与葱白细丝", amount: 30, unit: "克，各15g铺面" },
      { name: "红小米椒细丝", amount: 5, unit: "克，点红色" }
    ],
    sea: [
      { name: "优质蒸鱼豉油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "食用盐", amountText: "少许(鱼腔内薄抹)", baseAmount: 0.3, unit: "茶匙" },
      { name: "澳洲特级初榨橄榄油或花生油", amountText: "3 瓷汤勺(滚烫泼香)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "东星斑腌制摆盘", instruction: "东星斑内外薄抹少许盐，腹腔塞入姜片，淋花雕酒腌10分钟；深盘底部用筷子架起鱼身，腹腔撑开。', chefTip: '国宴规格：鱼身完整无破损，鱼眼清澈透明，是新鲜度的金标准。" },
      { title: "旺火精确蒸9分钟", instruction: "蒸锅提前大火烧沸冒足汽，送入鱼盘旺火蒸9分钟（700克以内），即刻出锅。', chefTip: '精确计时！东星斑肉质细嫩，多蒸1分钟即明显变老，鲜美大打折扣。" },
      { title: "倒腥水摆葱姜泼滚油", instruction: "出锅倒掉盘中腥水，铺上葱丝姜丝椒丝，淋蒸鱼豉油，另起锅烧滚烫花生油，高温猛泼葱丝！', chefTip: '油温要滚烫冒烟，泼下一声巨响，葱香鱼香交融，国宴级别的极致鲜美！" }
    ]
  },

  "顺德名馔砂锅生焗深海石斑鱼腩": {
    subtitle: "顺德厨神绝技，瓦煲蒜子洋葱打底，生焗石斑鱼腩镬气十足，焦香嫩滑皮有弹胶",
    flavor: ["镬气焦香","肉嫩皮弹"],
    cookingMethod: "砂锅干生焗",
    main: [
      { name: "新鲜深海石斑鱼腩段", amount: 500, unit: "克，斜切厚块" }
    ],
    sec: [
      { name: "蒜子(整粒蒜头)", amount: 50, unit: "克" },
      { name: "洋葱切粗丝", amount: 100, unit: "克" },
      { name: "葱白段", amount: 20, unit: "克" },
      { name: "老生姜厚片", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "生抽与老抽", amountText: "各 2 瓷汤勺", baseAmount: 4, unit: "勺" },
      { name: "绍兴花雕酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "鱼腩腌制炙烤蒜子洋葱", instruction: "石斑鱼腩加生抽、老抽、花雕腌15分钟；砂锅烧热下花生油，放蒜子和洋葱丝小火煸至金黄出甜香铺底。', chefTip: '洋葱煸至棕黄甜化，是生焗底味的核心！不可跳过！" },
      { title: "鱼腩皮朝下大火生焗", instruction: "将腌好鱼腩皮朝下码在蒜子洋葱上，大火空烧砂锅，盖盖生焗4分钟至底面焦香，淋入花雕酒激香。', chefTip: '盖盖生焗时不要揭开！焗制的热循环让鱼皮焦而不煳，肉嫩无比！" },
      { title: "翻面收汁焗至熟透", instruction: "翻面再焗3分钟，撒葱段加盖焗30秒，出锅时锅底留有焦香汁液，这是精华！淋在鱼腩上即可上桌。', chefTip: '锅底焦香汁液是顺德生焗最迷人的镬气来源，舀出来淋面！" }
    ]
  },

  "广式葱油清蒸鲜活多宝鱼": {
    subtitle: "广式传统宴客名肴，裙边胶原蛋白厚实丰润，葱丝双椒滚油一泼，鲜甜嫩滑令人难忘",
    flavor: ["清鲜甜嫩","葱油清香"],
    cookingMethod: "旺火清蒸",
    main: [
      { name: "鲜活多宝鱼(比目鱼)", amount: 1, unit: "条 约700克，宰杀去内脏洗净" }
    ],
    sec: [
      { name: "大葱白细丝", amount: 30, unit: "克" },
      { name: "红黄双色甜椒丝", amount: 20, unit: "克" },
      { name: "嫩姜细丝", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "优质蒸鱼豉油", amountText: "4 瓷汤勺", baseAmount: 4, unit: "勺" },
      { name: "绍兴花雕酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用盐", amountText: "少许抹鱼腔内", baseAmount: 0.3, unit: "茶匙" },
      { name: "花生油", amountText: "3 瓷汤勺(滚烫泼)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "多宝鱼腌制架盘", instruction: "多宝鱼鱼背划斜刀，内外薄抹盐和花雕酒腌10分钟，盘底筷子垫高，让四面蒸汽均匀环绕。', chefTip: '多宝鱼裙边是最精华的部位，胶原蛋白极丰富，一定不要切除！" },
      { title: "旺火足汽蒸10分钟", instruction: "蒸锅大火烧沸后放入鱼盘，旺火蒸10分钟（700克规格），立即出锅倒掉蒸鱼腥水。', chefTip: '多宝鱼肉厚需多蒸1-2分钟，但切忌过时，裙边胶质要保持弹嫩不脱落！" },
      { title: "铺葱丝椒丝泼滚油", instruction: "铺上葱白丝、椒丝、姜丝，浇入蒸鱼豉油，另起锅将花生油烧至冒烟，猛然泼在葱丝上！', chefTip: '双色椒丝除了增色，红椒微甜可提升鲜味层次，是视觉与味觉的双重升华！" }
    ]
  },

  "法式香煎多宝鱼配柠檬白葡萄酒汁": {
    subtitle: "法式西餐经典海鱼名作，鱼皮煎至金黄酥脆，配白葡萄酒奶油柠檬黄油汁，高雅精致",
    flavor: ["黄油柠檬香","鱼皮焦酥"],
    cookingMethod: "铸铁锅香煎+白酒汁",
    main: [
      { name: "新鲜多宝鱼排(去头取肉)", amount: 2, unit: "片 各约200克，鱼皮划格纹刀口" }
    ],
    sec: [
      { name: "有盐黄油", amount: 40, unit: "克，分次加入" },
      { name: "新鲜柠檬", amount: 1, unit: "个，取皮屑和汁" },
      { name: "蒜瓣(轻拍)", amount: 2, unit: "瓣" },
      { name: "新鲜百里香枝", amount: 3, unit: "枝" }
    ],
    sea: [
      { name: "法国干白葡萄酒", amountText: "60 ml(炒锅收汁)", baseAmount: 60, unit: "ml" },
      { name: "淡奶油(heavy cream)", amountText: "50 ml", baseAmount: 50, unit: "ml" },
      { name: "海盐与黑胡椒碎", amountText: "各适量", baseAmount: 1, unit: "份" },
      { name: "初榨橄榄油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "鱼排擦干调味煎黄", instruction: "鱼排用厨房纸彻底擦干，鱼皮面撒海盐黑胡椒；铸铁锅大火烧至冒烟下橄榄油，鱼皮朝下中大火煎4分钟至金黄酥脆，翻面煎2分钟。', chefTip: '水分是天敌！鱼排一定要完全擦干，锅要够热，才能煎出餐厅级金黄脆皮！" },
      { title: "加黄油蒜香百里香淋勺", instruction: "鱼翻面后加入黄油、蒜瓣和百里香，倾斜锅面不断将融化黄油舀起浇在鱼身，持续淋勺30秒出锅。', chefTip: ''淋勺(Basting)'是法式煎鱼精髓！黄油不断给鱼增添浓郁焦香与油润感。" },
      { title: "白葡萄酒奶油柠檬汁收汁", instruction: "原锅留底下白葡萄酒大火蒸发酒精，加淡奶油收浓，挤入柠檬汁磨入柠檬皮屑，调盐浇在鱼排旁。', chefTip: '柠檬皮屑是香气炸弹，比柠檬汁香气高10倍，千万不要省略！" }
    ]
  },

  "胶东渔家干烧大鲅鱼": {
    subtitle: "胶东半岛渔家风味，五花肉丁香菇丁合烧，鲅鱼汁浓入骨、肉与鱼融为一体，浓郁鲜醇",
    flavor: ["咸鲜浓郁","肉香鱼鲜"],
    cookingMethod: "旺火干烧",
    main: [
      { name: "新鲜大鲅鱼段", amount: 600, unit: "克，切5cm厚大段，拍干面粉" }
    ],
    sec: [
      { name: "肥瘦五花肉丁", amount: 80, unit: "克" },
      { name: "干香菇泡发切小丁", amount: 40, unit: "克" },
      { name: "大葱段、生姜片、蒜瓣", amount: 30, unit: "克，各10g" }
    ],
    sea: [
      { name: "豆瓣酱", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "生抽与老抽", amountText: "各 1.5 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "绍兴黄酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "纯花生油", amountText: "足量(炸鱼用)", baseAmount: 200, unit: "ml" }
    ],
    steps: [
      { title: "鲅鱼段拍粉炸至定形金黄", instruction: "鲅鱼段擦干拍薄层面粉，下六成热油炸至两面金黄表皮硬化定形捞出控油。', chefTip: '先炸定形，干烧过程中鱼块不碎烂，且能锁住鱼汁精华！" },
      { title: "五花肉丁香菇丁爆香出油", instruction: "锅留底油下五花肉丁煸至出油卷边，加香菇丁爆炒出鲜香，下葱姜蒜和豆瓣酱炒出红油。', chefTip: '五花肉炼出肉油，是干烧汁浓郁鲜香的秘密来源！" },
      { title: "鱼块入锅收干烧汁", instruction: "炸好鱼块下锅，加黄酒、生抽、老抽和白糖，加少量水至鱼腰高，中火收干汁水，大火起锅。', chefTip: '最后大火收汁至鱼块包裹浓厚棕红酱汁，'干烧'的精髓就在收干！" }
    ]
  },

  "半岛老味道茄汁红烧鲅鱼块": {
    subtitle: "胶东半岛家喻户晓，鲅鱼肉紧实如蒜瓣，酸甜番茄浓汁红烧，慢火入味透骨香",
    flavor: ["酸甜浓郁","鱼肉紧实"],
    cookingMethod: "红烧慢煮",
    main: [
      { name: "新鲜胶东大鲅鱼", amount: 600, unit: "克，斜切5cm厚段" }
    ],
    sec: [
      { name: "沙瓤番茄切块", amount: 2, unit: "个" },
      { name: "大葱段与生姜片", amount: 25, unit: "克" },
      { name: "大蒜瓣", amount: 4, unit: "瓣" }
    ],
    sea: [
      { name: "番茄酱", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "生抽与老抽", amountText: "各 2 瓷汤勺", baseAmount: 4, unit: "勺" },
      { name: "白砂糖", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
      { name: "食醋", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "鲅鱼段煎至两面金黄", instruction: "鲅鱼段加盐和黄酒腌10分钟擦干，下热油锅中火煎至两面金黄略硬盛出。', chefTip: '煎硬外皮才能红烧时保持形状不散！" },
      { title: "番茄爆炒出浓汁底", instruction: "下蒜瓣葱姜爆香，加番茄酱炒出红油，放番茄块大火压烂出浓厚番茄沙。', chefTip: '番茄酱+新鲜番茄双番茄是茄汁浓度的秘密，酸甜比例完美！" },
      { title: "鱼块入汁中火慢烧", instruction: "鱼块放入番茄汁中，加生抽老抽白糖醋和少量水，中火慢烧10分钟翻面，大火收浓汁液出锅。', chefTip: '翻面时动作轻柔！鲅鱼肉紧，慢烧才能让茄汁完全渗入鱼肉每个缝隙。" }
    ]
  },

  "潮汕砂锅生焗极品白鳝": {
    subtitle: "潮汕传统顶级食材，活白鳝生抽老抽豆酱生焗，鳝段皮脆肉弹酱香四溢",
    flavor: ["酱香浓郁","皮脆肉弹"],
    cookingMethod: "砂锅生焗",
    main: [
      { name: "鲜活极品白鳝(鳗鱼)", amount: 1, unit: "条 约600克，宰杀去内脏切5cm段" }
    ],
    sec: [
      { name: "普宁豆腐酱", amount: 40, unit: "克" },
      { name: "蒜子(整粒)", amount: 30, unit: "克" },
      { name: "生姜厚片", amount: 20, unit: "克" },
      { name: "葱白段", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "老抽", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "白鳝腌制豆酱调味", instruction: "白鳝段加生抽、老抽、豆酱、白糖腌制20分钟，充分入味着色。', chefTip: '白鳝皮下富含胶原，腌透才能生焗时充分激发，皮弹肉香！" },
      { title: "砂锅油热铺底蒜姜", instruction: "砂锅烧热下花生油，放蒜子和姜片小火煸至金黄香出，铺底形成芳香底味。', chefTip: '砂锅蓄热能力强，比铁锅更适合生焗，温度均匀不燥！" },
      { title: "白鳝段入锅大火生焗", instruction: "腌好白鳝段下砂锅，盖盖大火生焗4分钟，倾斜锅面让腌汁均匀分布，翻面再焗3分钟，撒葱段出锅。', chefTip: '翻面时会看到白鳝皮已呈诱人深棕焦香色，肉质收缩弹性十足！" }
    ]
  },

  "日式蒲烧厚切活海鳗": {
    subtitle: "日式炭火蒲烧传统技艺，厚切活海鳗反复炭烤刷酱，照烧鳗鱼汁油亮浓郁，入口如丝绸",
    flavor: ["照烧甜酱","鳗鱼油脂香"],
    cookingMethod: "炭火反复蒲烧",
    main: [
      { name: "鲜活海鳗(河鳗/海鳗)", amount: 1, unit: "条 约500克，开背去骨" }
    ],
    sec: [
      { name: "日式山椒粉(花山椒)", amount: 1, unit: "克，成品撒面" }
    ],
    sea: [
      { name: "日式浓口酱油", amountText: "60 ml", baseAmount: 60, unit: "ml" },
      { name: "日本味醂", amountText: "60 ml", baseAmount: 60, unit: "ml" },
      { name: "清酒(日本料理酒)", amountText: "40 ml", baseAmount: 40, unit: "ml" },
      { name: "冰糖/砂糖", amountText: "30 克", baseAmount: 30, unit: "克" }
    ],
    steps: [
      { title: "自制蒲烧汁煮至浓稠", instruction: "酱油、味醂、清酒和糖入锅小火慢煮至汤汁减少1/3，用勺划能看到底痕的浓稠状，即为传统蒲烧汁。', chefTip: '正宗蒲烧汁浓稠度是一切的关键！太稀无法挂汁，太稠会焦煳。" },
      { title: "鳗鱼串签先蒸后炭烤", instruction: "开背去骨鳗鱼切段，竹签穿起，先入蒸锅大火蒸10分钟逼出多余脂肪，再入炭炉或烤箱230℃烤5分钟。', chefTip: '先蒸后烤是日本关西鳗鱼流派！去除多余油腻的同时保持肉质极度柔嫩。" },
      { title: "反复刷汁烤制三次", instruction: "烤好鳗鱼刷上厚厚蒲烧汁，再烤2分钟，如此反复三次，让蒲烧汁层层叠叠渗入鱼肉，最后撒山椒粉。', chefTip: '反复三次刷烤是'三刷'精髓，每刷一次鳗鱼表面更加油亮焦糖化，越来越诱人！" }
    ]
  },

  "经典法式香煎银鳕鱼配柠檬黄油": {
    subtitle: "西餐精品，深海银鳕鱼油脂丰润甘甜，表皮煎至金黄焦香，配柠檬白黄油汁优雅清新",
    flavor: ["黄油焦香","鱼肉如雪脂"],
    cookingMethod: "铸铁锅香煎",
    main: [
      { name: "挪威进口银鳕鱼排", amount: 2, unit: "片 各约200克，彻底擦干" }
    ],
    sec: [
      { name: "有盐发酵黄油", amount: 40, unit: "克" },
      { name: "新鲜柠檬", amount: 1, unit: "个" },
      { name: "新鲜欧芹叶切细末", amount: 10, unit: "克" },
      { name: "蒜瓣(轻拍)", amount: 2, unit: "瓣" }
    ],
    sea: [
      { name: "海盐片与现磨黑胡椒", amountText: "各适量(调味)", baseAmount: 1, unit: "份" },
      { name: "初榨橄榄油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "干白葡萄酒", amountText: "30 ml(汁料用)", baseAmount: 30, unit: "ml" }
    ],
    steps: [
      { title: "银鳕鱼擦干调味高温煎皮", instruction: "银鳕鱼用厨房纸彻底吸干水分，两面撒海盐和黑胡椒；铸铁锅大火烧烫下橄榄油，鱼皮朝下放入，中大火煎4分钟不动，至底面金黄酥脆。', chefTip: '银鳕鱼含水量高，彻底擦干是煎出金黄脆皮的绝对前提！" },
      { title: "翻面加黄油蒜香淋勺", instruction: "翻面加入黄油和蒜瓣，倾斜锅面将融化黄油不断舀起浇在鱼身，持续淋勺2分钟，黄油呈坚果棕色香气最浓时出锅。', chefTip: '棕色黄油(Beurre Noisette)比普通融化黄油香10倍，是法式煎鱼的灵魂！" },
      { title: "柠檬黄油汁收汁", instruction: "原锅加干白葡萄酒刮底，挤入半个柠檬汁，磨入柠檬皮屑，加少许黄油晃锅乳化成亮泽浓汁浇鱼，撒欧芹末。', chefTip: '柠檬皮屑的清香精油与黄油焦香完美平衡，酸香油润让人惊艳！" }
    ]
  },

  "广式古法清蒸葱姜银鳕鱼": {
    subtitle: "广式家宴清蒸名法，保留深海优质油脂甘甜，葱丝姜丝蒸鱼豉油滚油泼香，极致鲜纯",
    flavor: ["鲜甜甘润","葱油清香"],
    cookingMethod: "旺火清蒸",
    main: [
      { name: "挪威深海银鳕鱼厚切块", amount: 300, unit: "克(2块)，擦干备用" }
    ],
    sec: [
      { name: "嫩姜细丝", amount: 15, unit: "克" },
      { name: "葱白细丝", amount: 20, unit: "克" },
      { name: "红小米椒丝", amount: 5, unit: "克" }
    ],
    sea: [
      { name: "蒸鱼豉油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "绍兴花雕酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用盐", amountText: "少许(薄抹鱼身)", baseAmount: 0.3, unit: "茶匙" },
      { name: "花生油", amountText: "3 瓷汤勺(滚烫泼)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "银鳕鱼腌制铺盘", instruction: "银鳕鱼薄抹少许盐和花雕酒腌10分钟，盘底放姜片垫高，鱼块摆上，铺姜丝。', chefTip: '银鳕鱼油脂丰富天然去腥，少量花雕提香即可，不需要多。" },
      { title: "旺火蒸8分钟", instruction: "大火烧沸蒸锅，银鳕鱼旺火蒸8分钟（厚切需多1-2分钟），出锅倒掉蒸鱼水。', chefTip: '银鳕鱼蒸好后切面会有珍珠白雪般光泽，用筷子轻一拨会自然层层分开！" },
      { title: "铺葱椒丝淋豉油泼滚油", instruction: "铺上葱白丝、椒丝，淋蒸鱼豉油，烧一勺滚烫花生油高温猛泼葱丝，香气四溢立即上桌。', chefTip: '银鳕鱼肉质嫩滑，入口即化，是老人和小孩最适合的高档海鱼！" }
    ]
  },

  "日式照烧香煎厚切三文鱼排": {
    subtitle: "日式经典照烧料理，三文鱼皮煎至焦脆，甜咸照烧浓汁裹覆，鱼油丰沛橙红如日落",
    flavor: ["照烧甜咸","鱼皮焦脆"],
    cookingMethod: "香煎+照烧收汁",
    main: [
      { name: "挪威三文鱼排(带皮)", amount: 2, unit: "块 各约220克，厚切" }
    ],
    sec: [
      { name: "白芝麻", amount: 5, unit: "克，成品撒面" },
      { name: "葱花", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "日式浓口酱油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "日本味醂", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "清酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "白砂糖", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "煎制三文鱼皮至酥脆", instruction: "三文鱼用厨房纸擦干，撒少许盐；不粘锅中火下油，鱼皮朝下压紧煎4分钟至皮完全焦黄酥脆，翻面煎2分钟盛出。', chefTip: '鱼皮煎时要用铲子轻轻向下压，让鱼皮完全接触锅底，酥脆才能均匀！" },
      { title: "照烧汁在锅中收浓", instruction: "同锅倒入酱油、味醂、清酒和糖，中火加热搅拌煮至汤汁浓稠可挂汁。', chefTip: '照烧汁收至能挂住勺背的程度，裹鱼后才能形成油亮浓厚的照烧色！" },
      { title: "三文鱼裹汁收尾", instruction: "三文鱼入锅翻转裹满照烧汁，撒白芝麻和葱花出锅配米饭。', chefTip: '三文鱼内部保持6-7分熟最美味！橙红色的鱼肉中心是最佳状态。" }
    ]
  },

  "潮菜经典避风塘香酥椒盐九肚鱼": {
    subtitle: "九肚鱼即豆腐鱼，外壳金黄酥化如薄壳，内部如吮吸嫩豆腐，蒜香椒盐绝配下酒",
    flavor: ["椒盐蒜香","外酥内嫩如豆腐"],
    cookingMethod: "高温油炸+避风塘炒",
    main: [
      { name: "新鲜九肚鱼(龙头鱼/豆腐鱼)", amount: 500, unit: "克，清洗去内脏，去头或保留" }
    ],
    sec: [
      { name: "细蒜末炸至金黄(避风塘蒜)", amount: 80, unit: "克，炸酥金黄" },
      { name: "干辣椒碎", amount: 5, unit: "克" },
      { name: "葱花", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "玉米淀粉", amountText: "适量裹鱼", baseAmount: 50, unit: "克" },
      { name: "花椒盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "食用盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "花生油", amountText: "足量炸鱼", baseAmount: 300, unit: "ml" }
    ],
    steps: [
      { title: "九肚鱼拍粉高温炸脆", instruction: "九肚鱼洗净擦干，薄裹一层玉米淀粉，入七成热高温油锅，大火炸2-3分钟至外壳金黄酥脆，捞出控油。', chefTip: '九肚鱼含水量极高，高温快炸才能外脆，温度不够则软塌无力！" },
      { title: "炸香蒜末备用", instruction: "另起锅下大量油，将细蒜末小火慢炸至金黄酥脆（约5分钟），捞出控油成'避风塘蒜'。', chefTip: '避风塘蒜是整道菜的灵魂！慢炸才能金黄不焦苦。" },
      { title: "合炒椒盐蒜香出锅", instruction: "锅留少许油，下干辣椒碎爆香，倒入炸好的九肚鱼和避风塘蒜，撒花椒盐大火颠炒均匀，撒葱花出锅。', chefTip: '吃九肚鱼要整条放进嘴里轻轻一吮，酥壳和嫩肉一起入口，绝妙！" }
    ]
  },

  "潮汕丝瓜滚九肚鱼鲜汤": {
    subtitle: "潮汕渔家清润家常汤，嫩丝瓜与鲜九肚鱼同滚，汤色清澈鲜甜，降火生津消暑",
    flavor: ["清鲜甜润","降火生津"],
    cookingMethod: "旺火滚汤",
    main: [
      { name: "新鲜九肚鱼", amount: 300, unit: "克，洗净" },
      { name: "嫩丝瓜", amount: 1, unit: "条，去皮切滚刀块" }
    ],
    sec: [
      { name: "老生姜片", amount: 15, unit: "克" },
      { name: "枸杞子", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "花生油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "清水", amountText: "700 ml", baseAmount: 700, unit: "ml" }
    ],
    steps: [
      { title: "热锅底油煎香姜片鱼", instruction: "锅烧热下油，放姜片煎香，九肚鱼下锅中火煎30秒至表面微微定形（不需炸透）。', chefTip: '稍微煎一下能让汤色更白更浓，也能有效去除土腥味！" },
      { title: "加水大火烧沸", instruction: "加入700ml清水大火烧沸，汤色变奶白后转中火煮5分钟。', chefTip: '大火沸腾才能让汤色奶白！这是蛋白质乳化的秘密。" },
      { title: "下丝瓜枸杞调味出锅", instruction: "放入丝瓜块中火煮3分钟至丝瓜熟透，撒枸杞子，调盐和白胡椒，趁热享用。', chefTip: '丝瓜不能煮太久，3分钟刚好保持翠绿鲜嫩，煮久了发黄失去清甜！" }
    ]
  },

  "潮汕传统马友鱼脯一夜干香煎": {
    subtitle: "潮汕滩涂独特风味，马友鱼盐渍风干一夜，凝缩油脂鲜味，香煎后外焦里嫩香飘十里",
    flavor: ["咸鲜焦香","油脂凝缩浓郁"],
    cookingMethod: "盐腌风干后香煎",
    main: [
      { name: "新鲜马友鱼(午仔鱼)", amount: 1, unit: "条 约400克，剖开去内脏留完整形" }
    ],
    sec: [
      { name: "粗海盐", amount: 20, unit: "克，均匀抹鱼两面" }
    ],
    sea: [
      { name: "花生油", amountText: "3 瓷汤勺(香煎用)", baseAmount: 3, unit: "勺" },
      { name: "姜片", amountText: "3 片(煎锅去腥)", baseAmount: 15, unit: "克" }
    ],
    steps: [
      { title: "粗盐抹鱼风干一夜", instruction: "马友鱼剖开，两面均匀涂抹粗海盐，不覆保鲜膜，放置冰箱冷藏室风干一整夜（8-12小时）。', chefTip: '盐渍风干是马友鱼的精髓！水分蒸发后油脂与鲜味凝缩，煎后香气是新鲜鱼的数倍！" },
      { title: "冷水冲洗控干备用", instruction: "取出风干马友鱼，用冷水快速冲洗去除表面多余盐分，厨房纸擦干水分。', chefTip: '冲洗去多余盐分，控制咸度，保留恰当的咸鲜底味。" },
      { title: "中小火慢煎至两面焦香", instruction: "平底锅下花生油和姜片烧热，马友鱼皮朝下中小火慢煎5分钟至皮面深黄焦香，翻面再煎4分钟，出锅。', chefTip: '必须中小火慢煎！马友鱼油脂丰富，旺火会外焦里生。慢煎让油脂慢慢渗出，香气悠长！" }
    ]
  },

  "日式盐烤整条秋刀鱼配柠檬萝卜泥": {
    subtitle: "日本秋季传统料理，整条秋刀鱼炭火盐烤，逼出天然鱼油，微苦甘醇配白萝卜泥清口",
    flavor: ["微苦甘醇","鱼油香浓"],
    cookingMethod: "炭火/烤箱盐烤",
    main: [
      { name: "新鲜秋刀鱼", amount: 2, unit: "条，去内脏，不划刀保留完整" }
    ],
    sec: [
      { name: "白萝卜泥(鬼下し)", amount: 100, unit: "克，现磨细腻" },
      { name: "新鲜柠檬切角", amount: 1, unit: "个" },
      { name: "日式淡口酱油(辅助蘸食)", amount: 20, unit: "ml" }
    ],
    sea: [
      { name: "天然粗粒海盐", amountText: "适量均匀撒全身", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "盐均匀撒遍鱼身静置", instruction: "秋刀鱼两面和腹腔均匀撒上粗盐，静置10分钟让盐渗透入味（不用腌太久，秋刀鱼肉薄易入味）。', chefTip: '日式盐烤追求极简，只用盐！优质海盐能激发秋刀鱼最天然的鲜甘苦味。" },
      { title: "炭火/烤箱高温烤制", instruction: "炭炉大火或烤箱250℃预热，将秋刀鱼置烤网上，每面各烤5-6分钟至鱼皮焦香出油，表皮微皱。', chefTip: '秋刀鱼脂肪丰富，高温烤制会滴落大量鱼油，这正是'秋味'精华所在！" },
      { title: "白萝卜泥柠檬汁佐食", instruction: "烤好秋刀鱼配上新鲜磨制白萝卜泥，挤几滴柠檬汁，以少许淡口酱油蘸食。', chefTip: '萝卜泥的辛凉中和秋刀鱼苦脂，柠檬酸香提鲜，这是300年的日式搭配智慧！" }
    ]
  },

  "潮汕豆酱焖剥皮鱼": {
    subtitle: "潮汕民间传统鱼肴，剥皮鱼肉质极有嚼劲，豆酱慢焖浸透鲜甜酱香，下饭一流",
    flavor: ["酱香鲜甜","肉质嚼劲"],
    cookingMethod: "豆酱慢焖",
    main: [
      { name: "新鲜剥皮鱼(马面鲀)", amount: 2, unit: "条 约500克，去皮去内脏切大段" }
    ],
    sec: [
      { name: "普宁豆腐酱", amount: 50, unit: "克" },
      { name: "大蒜瓣", amount: 5, unit: "瓣" },
      { name: "生姜片", amount: 15, unit: "克" },
      { name: "青红辣椒圈", amount: 2, unit: "根" }
    ],
    sea: [
      { name: "鱼露", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "清水", amountText: "100 ml", baseAmount: 100, unit: "ml" }
    ],
    steps: [
      { title: "剥皮鱼先煎定形", instruction: "热锅下花生油，放入剥皮鱼段中火煎至两面微黄定形，约各2分钟，盛出控油。', chefTip: '剥皮鱼肉质细嫩，先煎定形才能慢焖时保持形状完整不碎！" },
      { title: "豆酱蒜姜爆香出红油", instruction: "锅留底油下蒜瓣和姜片爆香，加豆酱小火炒至红油渗出，豆酱酱香浓郁。', chefTip: '普宁豆酱是潮汕第一酱料，慢炒出红油才能激发最深层的发酵鲜香！" },
      { title: "鱼段入锅加水慢焖入味", instruction: "鱼段下锅，加鱼露、糖和100ml清水，加盖中小火焖8分钟，开盖大火收汁，撒辣椒圈出锅。', chefTip: '剥皮鱼肉质本身就有嚼劲，焖入豆酱后鲜甜层次更丰富，配白粥绝配！" }
    ]
  },

  "江南荠菜黄鱼羹": {
    subtitle: "江南春鲜第一羹，荠菜清香配小黄鱼柳，羹汤清鲜透骨，如春日江南水乡氤氲气息",
    flavor: ["清鲜透骨","荠菜清香"],
    cookingMethod: "滑蛋勾芡汆羹",
    main: [
      { name: "新鲜小黄花鱼", amount: 400, unit: "克，取两侧鱼柳斜切薄片" },
      { name: "野生新鲜荠菜", amount: 150, unit: "克，洗净焯水切碎" }
    ],
    sec: [
      { name: "鸡蛋", amount: 2, unit: "枚，打散备用" },
      { name: "老生姜末", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "鸡蛋清+玉米生粉", amountText: "1枚蛋清+2勺生粉(鱼片上浆)", baseAmount: 1, unit: "份" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "玉米淀粉水", amountText: "3 瓷汤勺(勾薄芡)", baseAmount: 3, unit: "勺" },
      { name: "绍兴黄酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "高汤或清水", amountText: "600 ml", baseAmount: 600, unit: "ml" }
    ],
    steps: [
      { title: "鱼柳上浆荠菜焯水备用", instruction: "小黄鱼取鱼柳切薄片，加蛋清生粉抓匀上浆；荠菜焯水30秒捞出，挤干水分切细碎。', chefTip: '荠菜焯水去生涩味，挤干再放汤中才不会使汤浑浊！" },
      { title: "高汤煮沸调味勾薄芡", instruction: "锅中高汤烧沸，加黄酒、盐和白胡椒，用水淀粉勾薄芡使汤变微稠如稀粥质地。', chefTip: '薄芡使羹汤有挂住材料的黏度，鱼片入汤后不会下沉散开。" },
      { title: "鱼柳入羹荠菜合炒打蛋花", instruction: "小黄鱼柳逐片推入微沸汤中，轻推散开30秒变白，加入荠菜碎，缓缓打入鸡蛋液成金花，出锅。', chefTip: '蛋液要细细慢流入，边流边用筷子划圆，蛋花才细腻飘逸如云！" }
    ]
  },

  "面拖香酥小黄鱼": {
    subtitle: "江浙沪经典居家小菜，小黄鱼裹面糊炸至金黄，外壳极其酥脆，连骨头都可咀嚼入味",
    flavor: ["酥脆焦香","骨香鱼鲜"],
    cookingMethod: "面拖油炸",
    main: [
      { name: "新鲜小黄花鱼", amount: 500, unit: "克，去内脏洗净，中小个头最佳" }
    ],
    sec: [
      { name: "普通面粉", amount: 80, unit: "克" },
      { name: "玉米淀粉", amount: 40, unit: "克" },
      { name: "泡打粉", amount: 3, unit: "克(让外壳膨松酥脆)" },
      { name: "葱花与姜末(腌鱼)", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "绍兴黄酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "花椒盐", amountText: "成品撒面", baseAmount: 1, unit: "茶匙" },
      { name: "纯花生油", amountText: "足量炸鱼(约400ml)", baseAmount: 400, unit: "ml" }
    ],
    steps: [
      { title: "小黄鱼腌制入味", instruction: "小黄鱼洗净，加盐、黄酒、葱花、姜末腌制15分钟，用厨房纸擦干水分。', chefTip: '腌鱼去腥入味，擦干水分是裹浆酥脆的前提！" },
      { title: "调制面糊(面粉+淀粉+泡打粉+水)", instruction: "面粉、玉米淀粉、泡打粉混合，加冷水调成浓稠面糊，以能挂住鱼身不滴落为标准，加一勺食用油增脆。', chefTip: '面糊加生油能让外壳更酥脆！冷水比温水更好，低温延缓面筋形成。" },
      { title: "裹糊高温炸至酥脆出锅", instruction: "小黄鱼均匀裹上面糊，入七成热油炸3-4分钟至全身金黄酥脆，捞出控油，复炸30秒更脆，撒花椒盐。', chefTip: '复炸是酥脆的秘密！二次高温让外壳更加坚硬酥化，连小刺都脆如薯片！" }
    ]
  },

  // ====================== 二、国宴硬席名菜扩充 ======================

  "国宴乌鱼蛋汤": {
    subtitle: "钓鱼台国宴第一酸辣汤，乌鱼蛋薄如柳絮，酸辣咸鲜温润醒胃，历届国宴必备头盘",
    flavor: ["酸辣咸鲜","醇厚温润"],
    cookingMethod: "高汤勾芡",
    main: [
      { name: "乌鱼蛋(墨鱼蛋干货)", amount: 100, unit: "克，温水泡发后剥层层片开" }
    ],
    sec: [
      { name: "猪里脊肉细丝", amount: 50, unit: "克，水滑上浆" },
      { name: "竹笋丝", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "老鸡高汤", amountText: "700 ml", baseAmount: 700, unit: "ml" },
      { name: "镇江香醋", amountText: "3 瓷汤勺(关键！)", baseAmount: 3, unit: "勺" },
      { name: "白胡椒粉", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "玉米水淀粉", amountText: "4 瓷汤勺(勾中芡)", baseAmount: 4, unit: "勺" },
      { name: "鸡蛋", amountText: "2 枚(打散成金花)", baseAmount: 2, unit: "枚" }
    ],
    steps: [
      { title: "乌鱼蛋泡发片层", instruction: "乌鱼蛋温水泡发2小时，剥去外膜，轻轻将层层叠叠的蛋衣片成薄如纸的极薄片，入沸水汆30秒去碱味捞出。', chefTip: '乌鱼蛋层层如洋葱，薄如柳絮是国宴厨艺功力的体现，每片须薄而完整！" },
      { title: "高汤煮沸中火加料勾芡", instruction: "老鸡高汤大火烧沸，下肉丝和笋丝煮熟，加入乌鱼蛋片，调入盐和白胡椒，用水淀粉勾厚芡使汤汁浓稠。', chefTip: '芡汁要勾得稍厚，使汤汁呈半流态，让酸辣味充分附着在乌鱼蛋上！" },
      { title: "收尾打蛋花加醋出锅", instruction: "细缓倒入打散蛋液旋转成细腻金花，最后关火加入大量镇江香醋（关火后加醋不挥发！），撒葱花出锅。', chefTip: '醋必须关火后加！高温会使醋酸挥发殆尽，必须关火后才能保留醋香酸气！" }
    ]
  },

  "川味国宴鸡豆花": {
    subtitle: "国宴清汤奇珍，吃鸡不见鸡，鸡胸肉剁泥在高汤中凝成如云朵白玉的豆腐状，清澈若镜",
    flavor: ["清鲜如玉","鸡香浓郁"],
    cookingMethod: "高汤凝形",
    main: [
      { name: "新鲜鸡胸肉", amount: 300, unit: "克，剔净筋膜细剁成极细腻肉泥" }
    ],
    sec: [
      { name: "蛋清", amount: 3, unit: "枚，与鸡泥调和" },
      { name: "熟火腿薄片", amount: 20, unit: "克，成品点缀" },
      { name: "嫩豌豆苗", amount: 20, unit: "克，成品点缀" }
    ],
    sea: [
      { name: "顶级老鸡清汤(澄清两次)", amountText: "800 ml", baseAmount: 800, unit: "ml" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "绍兴花雕酒", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "食用碱少许(可选)", amountText: "少许(让鸡泥更嫩滑)", baseAmount: 0.1, unit: "克" }
    ],
    steps: [
      { title: "鸡胸剁极细泥调入蛋清", instruction: "鸡胸肉反复刀剁或料理机打成极细腻如豆腐状的鸡泥，加入蛋清、盐和花雕酒搅拌至顺滑有黏性，用滤网过滤去粗粒。', chefTip: '鸡泥越细腻，最终成品越光滑似豆腐白玉，这是检验刀工的关键！" },
      { title: "清汤煮沸转小火定温", instruction: "顶级老鸡清汤大火烧沸后关火，等汤温降至80℃（刚停止冒泡），才能下鸡豆花。', chefTip: '80℃是鸡蛋白凝固而不老的最佳温度！温度过高鸡豆花会凝结破碎。" },
      { title: "鸡泥入汤轻推凝成豆花", instruction: "将鸡肉泥缓缓舀入微沸汤中，轻轻推动，约2分钟鸡泥慢慢凝成一朵朵云状白花，用漏勺捞出盛碗，倒入清汤，摆火腿片和豌豆苗。', chefTip: '此时眼睛会看到'吃鸡不见鸡'的奇迹——雪白如豆腐的鸡豆花飘浮于清澈鸡汤中！" }
    ]
  },

  "国宴富贵牡丹海鲈鱼": {
    subtitle: "国宴大师极细刀工旋片成盛放牡丹，酸甜金黄浇汁淋面，刀功菜标志之作，惊艳绝伦",
    flavor: ["酸甜金黄","刀工精绝"],
    cookingMethod: "刀工旋片+挂糊油炸+浇汁",
    main: [
      { name: "鲜活海鲈鱼", amount: 1, unit: "条 约600克，去骨取两面大鱼肉" }
    ],
    sec: [
      { name: "番茄酱", amount: 60, unit: "克" },
      { name: "白醋", amount: 20, unit: "ml" },
      { name: "柠檬汁", amount: 10, unit: "ml" }
    ],
    sea: [
      { name: "面粉+鸡蛋挂糊", amountText: "适量裹鱼片炸制", baseAmount: 1, unit: "份" },
      { name: "白砂糖", amountText: "60 克(糖醋汁用)", baseAmount: 60, unit: "克" },
      { name: "食用盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "高汤", amountText: "60 ml", baseAmount: 60, unit: "ml" },
      { name: "花生油", amountText: "足量油炸", baseAmount: 300, unit: "ml" }
    ],
    steps: [
      { title: "鱼肉旋切成牡丹花瓣片", instruction: "取大块鱼肉用超薄利刀，以45°角旋转推切成花瓣状薄片，顶端不切断，展开后形如盛放牡丹。', chefTip: '这是国宴级刀工的核心！每片如花瓣，薄厚均匀，多练方能精准展开成花。" },
      { title: "挂糊油炸定形", instruction: "鱼花片裹薄层面糊，入六成热油小火慢炸定形，翻面至全身金黄酥脆成形，捞出摆盘。', chefTip: '炸定形时动作要轻，防止牡丹花形破散！成功后的鱼花形似盛放牡丹，极为壮观！" },
      { title: "糖醋汁收稠浇面", instruction: "锅中番茄酱、白糖、白醋、柠檬汁和高汤煮沸收浓，淋少许水淀粉勾薄芡，金黄色糖醋汁直接浇在牡丹鱼花上。', chefTip: '金黄色糖醋汁浇在洁白牡丹鱼花上，色泽对比如同国画！国宴大师的视觉与味觉双重艺术！" }
    ]
  },

  "钓鱼台国宴鲍汁极品刺参配西兰花": {
    subtitle: "钓鱼台国宾馆经典国宴名菜，特级辽参配浓厚老鸡金华火腿高汤鲍汁，沉实厚重奢华",
    flavor: ["鲍汁浓郁","参体软弹"],
    cookingMethod: "浓汤煨参+鲍汁收汁",
    main: [
      { name: "发制好的辽宁顶级灰参", amount: 2, unit: "条 各约80克，已发制好" },
      { name: "新鲜西兰花小朵", amount: 200, unit: "克，焯水备用" }
    ],
    sec: [
      { name: "金华火腿薄片", amount: 30, unit: "克" },
      { name: "鸡油", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "顶级鲍汁(商业浓缩鲍汁)", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "老鸡高汤", amountText: "200 ml", baseAmount: 200, unit: "ml" },
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "老冰糖", amountText: "10 克", baseAmount: 10, unit: "克" },
      { name: "绍兴花雕酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "水淀粉", amountText: "勾薄芡用", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "刺参高汤慢煨入味", instruction: "发制好的刺参加入老鸡高汤、火腿片、花雕酒，小火慢煨30分钟，让海参充分吸收汤鲜。', chefTip: '海参本身无味，全靠高汤慢煨！火腿是增鲜关键，30分钟是最低时限。" },
      { title: "鲍汁浓汤收汁", instruction: "加入鲍汁、生抽和冰糖，中火继续收汁10分钟至汤汁浓稠，裹满海参，用水淀粉勾薄芡增亮。', chefTip: '鲍汁是国宴级重器，浓缩鲍鱼精华，裹住海参后泛着诱人琥珀光泽！" },
      { title: "摆盘造型出菜", instruction: "西兰花围边摆盘，海参居中，鲍汁淋面，鸡油点亮，极致呈现国宴规格。', chefTip: '西兰花须提前焯至碧绿加盐定色，与深色海参的色彩对比是国宴配色美学！" }
    ]
  },

  "开国第一宴扬州文思豆腐羹": {
    subtitle: "淮扬名厨绝技，一整块嫩豆腐以千刀切出数千根细如发丝豆腐丝，入高汤成雪花羹",
    flavor: ["清鲜如玉","豆香细腻"],
    cookingMethod: "千刀切丝+高汤羹",
    main: [
      { name: "内酯豆腐/极嫩南豆腐", amount: 1, unit: "块 约400克" }
    ],
    sec: [
      { name: "熟鸡肉丝", amount: 30, unit: "克" },
      { name: "金华火腿极细丝", amount: 15, unit: "克" },
      { name: "嫩菠菜叶", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "顶级老鸡高汤(澄清)", amountText: "700 ml", baseAmount: 700, unit: "ml" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "绍兴花雕酒", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "玉米水淀粉", amountText: "2 瓷汤勺(轻薄勾芡)", baseAmount: 2, unit: "勺" },
      { name: "鸡油", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "文思刀法切豆腐成丝", instruction: "嫩豆腐切去四棱角，用极薄利刀先竖切0.5mm超薄片，再横切成细如头发丝，轻轻放入清水浸泡定型。', chefTip: '文思刀法是淮扬刀工最高境界！'细如发丝，入水不散'是检验标准，需反复练习！" },
      { title: "高汤调味勾薄芡", instruction: "顶级老鸡清汤烧沸，调入盐和花雕酒，用水淀粉轻薄勾芡（极薄！），使汤微微有流动感。', chefTip: '勾极薄芡才是文思豆腐的精神！太稠会破坏豆腐丝的飘逸动感。" },
      { title: "豆腐丝入汤摆配料", instruction: "将豆腐丝轻轻从水中捞起推入微沸汤中，加鸡肉丝、火腿丝和菠菜叶，淋鸡油出锅。', chefTip: '豆腐丝入汤的瞬间，细如发丝漂浮在清澈高汤中，如雪花飞舞！这是国宴厨艺的诗意境界。" }
    ]
  },

  "开国第一宴清炖大红袍蟹粉狮子头": {
    subtitle: "淮扬最高级狮子头，细切粗斩五花肉配阳澄湖鲜蟹黄，清炖入口即化，汤汁清澈鲜醇",
    flavor: ["蟹香鲜甜","入口即化"],
    cookingMethod: "清炖慢煨",
    main: [
      { name: "精选肥瘦三七比五花肉", amount: 400, unit: "克，细切粗斩(不可绞)" },
      { name: "鲜活阳澄湖大闸蟹蟹黄蟹膏", amount: 2, unit: "只取黄约80克" }
    ],
    sec: [
      { name: "荸荠(马蹄)去皮切末", amount: 50, unit: "克" },
      { name: "嫩姜末与葱花", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
      { name: "绍兴花雕酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "鸡蛋清", amountText: "1 枚", baseAmount: 1, unit: "枚" },
      { name: "玉米淀粉", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "老鸡高汤", amountText: "500 ml", baseAmount: 500, unit: "ml" }
    ],
    steps: [
      { title: "五花肉细切粗斩混入蟹黄", instruction: "五花肉用刀细切成丁再粗斩（绝对不能绞肉机！），加入蟹黄蟹膏、荸荠末、葱姜末、盐、花雕酒、蛋清和生粉，用手顺一方向摔打上劲至黏性。', chefTip: '手工刀切是淮扬狮子头千年坚持！绞肉机破坏肉质纤维，入口不会像丝绸般滑嫩。" },
      { title: "捏成大丸子定形入汤", instruction: "手沾清水，将肉馅分成4份，轻轻捏成光滑大丸子（不要过分按压！），轻放入微沸的老鸡高汤中定形。', chefTip: '轻柔！狮子头是'软丸子'，要以温柔之力成形，粗暴按压会破坏蓬松入口感。" },
      { title: "砂锅清炖两小时", instruction: "连汤转入砂锅，小火慢炖2小时，汤汁清澈如镜，狮子头如云朵漂浮，色白蟹黄金红，放入嫩青菜叶即可。', chefTip: '开国第一宴上，清炖蟹粉狮子头令外国首脑叹为观止，是当之无愧的'国菜'！" }
    ]
  },

  "开国第一宴镇江水晶肴肉配姜丝香醋": {
    subtitle: "镇江四百年金陵春首创名肴，皮白肉红卤冻透明如水晶，姜丝镇江香醋是千年不变的绝配",
    flavor: ["咸鲜清爽","卤冻脆嫩"],
    cookingMethod: "卤制自然冻结",
    main: [
      { name: "猪前蹄(猪手)约2只", amount: 1200, unit: "克，刮净毛烧皮焯水" }
    ],
    sec: [
      { name: "硝盐/食用亚硝酸盐（少量食品级）", amount: 1, unit: "克(护色，可省略)" },
      { name: "老生姜块", amount: 40, unit: "克" },
      { name: "大葱段", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "粗海盐", amountText: "60 克(腌制)", baseAmount: 60, unit: "克" },
      { name: "绍兴黄酒", amountText: "4 瓷汤勺", baseAmount: 4, unit: "勺" },
      { name: "八角、桂皮、丁香、陈皮", amountText: "各适量", baseAmount: 1, unit: "份" },
      { name: "老冰糖", amountText: "20 克", baseAmount: 20, unit: "克" },
      { name: "镇江香醋(蘸食)", amountText: "足量", baseAmount: 60, unit: "ml" },
      { name: "嫩姜细丝(蘸食)", amountText: "适量", baseAmount: 30, unit: "克" }
    ],
    steps: [
      { title: "猪蹄腌制入味", instruction: "猪蹄剁块，加粗盐、黄酒、姜块、葱段，均匀揉擦腌制24小时（冷藏），让盐分充分渗透。', chefTip: '24小时腌制是传统工艺！充分腌制才能让肉质紧实，卤冻后透明如水晶。" },
      { title: "香料水慢卤至酥软", instruction: "腌好猪蹄入清水锅，加八角桂皮丁香陈皮和冰糖，大火烧沸后转小火慢卤2-3小时至皮肉酥软脱骨。', chefTip: '卤汁富含胶原蛋白，这是肴肉能自然冻结为晶莹冻糕的物质基础！" },
      { title: "卤汁连肉装盒冷藏定形", instruction: "将肴肉和浓缩卤汁一起倒入深盘或模具，冷藏过夜使其完全凝固，切片摆盘，配姜丝和镇江香醋。', chefTip: '水晶肴肉切面：猪皮如玛瑙，瘦肉如玫瑰，卤冻如水晶，色泽层次是千年匠心的结晶！" }
    ]
  },

  "闽菜之王聚春园正宗坛煨佛跳墙": {
    subtitle: "闽菜国宝，鲍参翅肚蹄筋十八珍合煨于绍兴酒坛，酒香扑鼻浓醇交融，百年不变的顶级珍肴",
    flavor: ["十八珍鲜","酒香浓醇"],
    cookingMethod: "绍兴酒坛长时煨炖",
    main: [
      { name: "发制好的干鲍鱼片", amount: 4, unit: "片" },
      { name: "发制好的海参段", amount: 2, unit: "条" },
      { name: "发制好的鱼翅(素翅可替代)", amount: 50, unit: "克" },
      { name: "猪蹄筋发制", amount: 100, unit: "克" }
    ],
    sec: [
      { name: "鸭掌(去皮去骨)", amount: 4, unit: "只" },
      { name: "鸡翅中(焯水)", amount: 4, unit: "只" },
      { name: "干贝(瑶柱)", amount: 30, unit: "克" },
      { name: "金华火腿厚片", amount: 50, unit: "克" },
      { name: "冬笋块", amount: 60, unit: "克" },
      { name: "香菇段", amount: 40, unit: "克" }
    ],
    sea: [
      { name: "顶级老鸡老鸭高汤", amountText: "500 ml", baseAmount: 500, unit: "ml" },
      { name: "绍兴陈年花雕酒", amountText: "150 ml", baseAmount: 150, unit: "ml" },
      { name: "生抽与老抽", amountText: "各 2 瓷汤勺", baseAmount: 4, unit: "勺" },
      { name: "老冰糖", amountText: "15 克", baseAmount: 15, unit: "克" },
      { name: "八角、桂皮、丁香", amountText: "各少许", baseAmount: 1, unit: "份" }
    ],
    steps: [
      { title: "各珍品分别处理出味", instruction: "所有干货提前发制好，各自入高汤分别过水烫透；鸡翅鸭掌焯水，金华火腿煎香出油。', chefTip: '佛跳墙精妙在每种食材各自呈现最佳状态后再合炖，相互借味而非掩盖！" },
      { title: "分层码入绍兴酒坛", instruction: "在绍兴老酒坛底铺香菇和冬笋，依次码入猪蹄筋、鸭掌、鸡翅、火腿、海参、鱼翅、鲍鱼，浇入高汤和花雕酒至八成满，荷叶封口坛盖压实。', chefTip: '分层码入有序！重料在下受热，轻料在上保形，花雕酒是灵魂无可替代！" },
      { title: "文火慢煨三小时以上", instruction: "密封酒坛置文火上慢煨3-5小时，开坛时酒香花香食材香扑面而来，此即'佛跳墙，弃禅跑'！', chefTip: '开坛时勿贪快！顺时针慢慢揭盖，让酒香慢慢溢出，这是整道菜的仪式感高光时刻！" }
    ]
  },

  "鲁菜官府名肴经典九转大肠": {
    subtitle: "鲁菜最复杂功夫菜，猪大肠层层套叠反复处理，酸甜苦辣咸五味俱全，堪称中华料理的极致",
    flavor: ["五味俱全","脆嫩弹牙"],
    cookingMethod: "多步复杂处理+红烧",
    main: [
      { name: "新鲜猪大肠", amount: 600, unit: "克，翻面彻底洗净去油去臭" }
    ],
    sec: [
      { name: "葱白段与生姜片", amount: 30, unit: "克" },
      { name: "砂仁末、肉桂末、胡椒末", amount: 1, unit: "克 各少许(点缀五味)" }
    ],
    sea: [
      { name: "山东米醋", amountText: "4 瓷汤勺(五味之酸)", baseAmount: 4, unit: "勺" },
      { name: "白砂糖", amountText: "3 瓷汤勺(五味之甜)", baseAmount: 3, unit: "勺" },
      { name: "山东豆豉酱", amountText: "1 瓷汤勺(五味之苦)", baseAmount: 1, unit: "勺" },
      { name: "红油辣椒", amountText: "1 瓷汤勺(五味之辣)", baseAmount: 1, unit: "勺" },
      { name: "食用盐", amountText: "1 茶匙(五味之咸)", baseAmount: 1, unit: "茶匙" },
      { name: "老抽", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "花生油", amountText: "足量初炸", baseAmount: 300, unit: "ml" }
    ],
    steps: [
      { title: "猪大肠九次处理去臭", instruction: "猪大肠翻面去除所有脂肪，用盐、醋、面粉反复揉洗至无异味，焯水去腥，再次清洗，入清水大火煮1小时至熟软，捞出切5cm段。', chefTip: '大肠清洗须耗时耐心！九转之'九'暗指处理步骤之繁复，洗净无腥是基础！" },
      { title: "大肠段高温油炸起褶", instruction: "大肠段入七成热油炸2分钟至外皮金黄起褶，捞出控油（这一步使大肠皮脆而内嫩）。', chefTip: '油炸使大肠外皮焦香起褶，是九转大肠的标志性外观，也让调料更容易附着。" },
      { title: "五味调料红烧入味", instruction: "锅中下葱姜爆香，依次加醋、糖、豆豉、辣椒、盐五味调料，下大肠段和老抽，加少量水中火煮10分钟收汁，最后撒砂仁肉桂粉。', chefTip: '成品五味层层递进：入口先酸，继而甜，再感辣，咽下后余有苦香，回味是咸鲜！此谓九转！" }
    ]
  },

  "粤菜寿筵头牌鸿运当头金牌烤乳猪": {
    subtitle: "粤式宴席至尊头牌，乳猪整只炭火烤制，片皮上桌玻璃脆壳蘸白糖，中国最隆重的宴席开场",
    flavor: ["猪皮玻璃脆","肉嫩汁香"],
    cookingMethod: "整猪炭火烤制",
    main: [
      { name: "6-8周龄宰杀烤乳猪整只", amount: 1, unit: "只 约5-6公斤，已宰杀处理" }
    ],
    sec: [
      { name: "蒜蓉", amount: 50, unit: "克" },
      { name: "五香粉、八角粉", amount: 10, unit: "克，各5g" },
      { name: "腐乳(南乳)", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "麦芽糖浆", amountText: "100 ml(猪皮涂抹上色)", baseAmount: 100, unit: "ml" },
      { name: "白醋", amountText: "3 瓷汤勺(混合麦芽糖)", baseAmount: 3, unit: "勺" },
      { name: "生抽酱油", amountText: "4 瓷汤勺", baseAmount: 4, unit: "勺" },
      { name: "白砂糖", amountText: "20 克", baseAmount: 20, unit: "克" },
      { name: "食用盐", amountText: "20 克(全身腌抹)", baseAmount: 20, unit: "克" }
    ],
    steps: [
      { title: "乳猪全身腌制入味", instruction: "乳猪腹腔用蒜蓉、腐乳、五香粉、生抽和盐涂抹均匀，腹腔塞入香料，用铁叉穿好固定，冷藏腌制6小时。', chefTip: '腹腔内里调味是内在香气来源！外皮只上色，内腔才是香料味道的核心。" },
      { title: "麦芽糖水反复涂抹猪皮风干", instruction: "麦芽糖加白醋热化稀释，均匀涂抹猪皮，挂于通风处晾干1-2小时，再涂再晾，共3遍。', chefTip: '多次涂抹麦芽糖风干，是形成玻璃脆皮的唯一方法！跳过此步皮不会脆！" },
      { title: "炭火翻转烤制至皮脆红亮", instruction: "炭炉旺火，乳猪皮朝下开始烤，每隔10分钟翻转，全程约60-90分钟，至皮面深红亮如漆、轻叩有空响即熟。', chefTip: '片皮：刀轻划猪皮，蘸白糖入口，脆壳入口即碎如玻璃，油香甜合一，这就是粤式宴席最隆重的时刻！" }
    ]
  },

  // ====================== 三、时令蔬菜 ======================

  "江南家常茭白炒肉丝": {
    subtitle: "江南秋季时令第一菜，太湖茭白鲜嫩爽脆，与猪里脊肉丝旺火快炒，鲜甜清润解腻",
    flavor: ["鲜甜清爽","肉香软嫩"],
    cookingMethod: "旺火热炒",
    main: [
      { name: "新鲜太湖茭白", amount: 300, unit: "克，去外壳斜切细丝" },
      { name: "猪里脊肉丝", amount: 150, unit: "克，顶刀切丝上浆" }
    ],
    sec: [
      { name: "红小米椒圈", amount: 2, unit: "根" },
      { name: "蒜末", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "蚝油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "玉米淀粉水", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "花生油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "肉丝上浆茭白焯水", instruction: "里脊肉丝加生抽、淀粉、少许油抓匀上浆；茭白丝入沸水焯30秒捞出过冷水，保持脆感。', chefTip: '茭白焯水去除草酸和轻微苦涩味，过冷水保持爽脆！" },
      { title: "热油滑炒肉丝断生", instruction: "热锅宽油下肉丝，大火快速划散翻炒至变色，约20秒盛出控油。', chefTip: '肉丝炒至刚变色即出锅，后续再与茭白合炒，防止过老。" },
      { title: "蒜爆茭白合炒调味出锅", instruction: "锅留底油下蒜末和辣椒圈爆香，倒入茭白丝大火翻炒1分钟，加肉丝回锅，调入生抽、蚝油、盐和糖翻匀，勾薄芡出锅。', chefTip: '茭白旺火快炒保脆！糖是提鲜关键，让茭白的天然甜味倍增！" }
    ]
  },

  "广式凉瓜排骨黄豆煲": {
    subtitle: "广东夏日消暑清热名煲，苦瓜(凉瓜)与排骨黄豆同煲，苦尽甘来，清热祛湿不苦不涩",
    flavor: ["苦尽甘来","清热去湿"],
    cookingMethod: "砂锅慢煲",
    main: [
      { name: "新鲜苦瓜(凉瓜)", amount: 2, unit: "条，去瓤切大块，可用盐腌5分钟减苦" },
      { name: "猪排骨", amount: 400, unit: "克，斩小段焯水" }
    ],
    sec: [
      { name: "干黄豆提前泡发", amount: 80, unit: "克" },
      { name: "老生姜块", amount: 20, unit: "克" },
      { name: "陈皮", amount: 5, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
      { name: "清水", amountText: "1200 ml", baseAmount: 1200, unit: "ml" }
    ],
    steps: [
      { title: "苦瓜减苦处理排骨焯水", instruction: "苦瓜切块加盐腌5分钟，冲洗去盐，焯水30秒；排骨冷水下锅焯至出血沫，捞出冲洗干净。', chefTip: '盐腌苦瓜去除大部分苦汁，焯水再去一层，最后清热余韵不会让人皱眉！" },
      { title: "所有食材入砂锅大火烧沸", instruction: "砂锅中放入排骨、黄豆、生姜、陈皮，倒入1200ml清水，大火烧沸撇净浮沫。', chefTip: '陈皮是广式老火汤秘宝！理气健脾，让汤香更丰富且去腥提鲜。" },
      { title: "转小火慢煲90分钟加苦瓜", instruction: "转小火慢煲60分钟后，放入苦瓜块再煲30分钟，至苦瓜变透明微软，调入盐出锅。', chefTip: '苦瓜后放才保留清热功效！煲太久苦瓜会完全失去苦味，清热效果大减。" }
    ]
  },

  "金银蒜粉丝蒸清甜丝瓜": {
    subtitle: "岭南夏季降火名菜，嫩丝瓜清甜爽滑，铺满金银蒜蓉和泡发粉丝，蒸熟浇滚烫豉油热油",
    flavor: ["蒜香浓郁","丝瓜清甜"],
    cookingMethod: "旺火清蒸",
    main: [
      { name: "嫩丝瓜(粤北角丝瓜)", amount: 2, unit: "条，刮皮切段劈开四瓣" }
    ],
    sec: [
      { name: "龙口粉丝", amount: 30, unit: "克，温水泡软" },
      { name: "金蒜(油炸金黄大蒜末)", amount: 30, unit: "克" },
      { name: "银蒜(新鲜生蒜末)", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "蒸鱼豉油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "花生油", amountText: "3 瓷汤勺(滚烫泼蒜)", baseAmount: 3, unit: "勺" },
      { name: "食用盐", amountText: "少许丝瓜撒面", baseAmount: 0.3, unit: "茶匙" }
    ],
    steps: [
      { title: "粉丝铺底丝瓜摆面", instruction: "泡软的粉丝铺在盘底，丝瓜段切面朝上摆在粉丝上，金银蒜蓉混合均匀铺满丝瓜切面，撒少许盐。', chefTip: '金银蒜(一生一熟)是味道层次的秘密！生蒜辛辣清新，熟蒜醇厚焦香，双重蒜香！" },
      { title: "旺火清蒸8分钟", instruction: "蒸锅大火沸腾冒足汽，放入丝瓜盘旺火蒸8分钟，丝瓜变透明软嫩即可出锅。', chefTip: '丝瓜蒸至半透明是最佳状态！过了就变黄软烂，清甜大打折扣。" },
      { title: "浇豉油泼滚油", instruction: "蒸好丝瓜淋上蒸鱼豉油，锅中将花生油烧至冒烟，猛泼蒜蓉！蒜香爆炸式飘散，上桌享用。', chefTip: '滚烫热油泼金银蒜是这道菜的灵魂！瞬间激发的双重蒜香让整个厨房沦陷！" }
    ]
  },

  "湖北洪湖酸辣泡椒藕带炒肉片": {
    subtitle: "湖北夏季当季名菜，洪湖藕带爽脆多汁，酸辣泡椒与五花肉片同炒，开胃爽口无敌下饭",
    flavor: ["酸辣爽脆","泡椒清香"],
    cookingMethod: "旺火热炒",
    main: [
      { name: "新鲜洪湖藕带", amount: 300, unit: "克，斜切3mm厚片" },
      { name: "五花肉薄片", amount: 150, unit: "克" }
    ],
    sec: [
      { name: "泡红辣椒(泡椒)", amount: 3, unit: "根，切段" },
      { name: "泡生姜", amount: 15, unit: "克，切片" },
      { name: "大蒜片", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白砂糖", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "米醋", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "花生油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "藕带焯水保脆五花肉煸香", instruction: "藕带切片入沸水焯30秒捞出过冷水保脆；五花肉片入热锅中火煸至出油卷边微黄。', chefTip: '藕带焯水+过冷水双重保脆法！否则炒制时容易变软褪色。" },
      { title: "泡椒泡姜蒜爆香出酸辣底", instruction: "锅留肉油，下泡椒、泡姜和蒜片大火爆香，激发出浓郁酸辣香气。', chefTip: '泡椒不仅辣，还带发酵酸香！是整道菜区别于普通炒菜的灵魂。" },
      { title: "合炒调味收汁出锅", instruction: "倒入藕带和五花肉大火翻炒2分钟，加盐、生抽、糖和米醋调味，大火翻匀出锅。', chefTip: '最后加米醋是画龙点睛！酸香挥发后留下清新底味，让藕带口感更脆爽！" }
    ]
  },

  "春季头刀鲜香椿芽炒土鸡蛋": {
    subtitle: "中国最珍贵的春季野蔬，头刀香椿芽鲜嫩紫红，与土鸡蛋旺火同炒，椿香浓郁木质气息馥郁",
    flavor: ["椿香馥郁","蛋香软嫩"],
    cookingMethod: "旺火热炒",
    main: [
      { name: "新鲜头刀香椿芽", amount: 150, unit: "克，沸水焯烫10秒保色，切碎" },
      { name: "新鲜散养土鸡蛋", amount: 4, unit: "枚，打散" }
    ],
    sec: [
      { name: "葱花", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "香椿芽沸水焯烫护色", instruction: "香椿芽入沸水焯烫10秒，立即捞出过冷水，颜色从紫红变为翠绿，挤干水分切碎，加少许盐腌出香气。', chefTip: '焯水10秒是护色关键！去除大部分亚硝酸盐，香椿从生涩变为醇香，这步不可省！" },
      { title: "香椿碎混入蛋液", instruction: "香椿碎切细后加入打散的鸡蛋液中，撒盐搅拌均匀，让椿香完全融入蛋液。', chefTip: '香椿与蛋液充分混合！让每一口蛋都裹满香椿的独特木质椿香，是这道菜的精髓。" },
      { title: "热锅宽油大火炒成金花", instruction: "热锅下宽油烧至七成热，倒入香椿蛋液大火快速划散，蛋液半凝固时翻炒成大块金花，撒葱花出锅！', chefTip: '油温要够高！香椿蛋液下锅瞬间膨胀成金黄大块，这道春日最美丽的家常菜就完成了！" }
    ]
  },

  // ====================== 四、靓汤扩充 ======================

  "老广州椰子鸡汤": {
    subtitle: "海南经典名汤，整颗嫩椰子与土鸡同煲，椰水清甜与鸡汤鲜香完美融合，滋阴润燥",
    flavor: ["椰香清甜","鸡鲜滋润"],
    cookingMethod: "砂锅慢煲",
    main: [
      { name: "嫩椰子", amount: 1, unit: "颗，取椰水和嫩椰肉" },
      { name: "文昌鸡或走地鸡半只", amount: 600, unit: "克，斩件焯水" }
    ],
    sec: [
      { name: "老生姜厚片", amount: 20, unit: "克" },
      { name: "红枣", amount: 5, unit: "颗，去核" }
    ],
    sea: [
      { name: "食用盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
      { name: "椰水", amountText: "整颗椰子椰水", baseAmount: 400, unit: "ml" }
    ],
    steps: [
      { title: "鸡件焯水取椰水椰肉", instruction: "鸡件冷水下锅焯至出血沫，捞出冲洗；嫩椰子开顶取椰水备用，刮出嫩椰肉。', chefTip: '椰水不要倒掉！清甜的椰水是整锅汤天然的甜味来源，无可替代。" },
      { title: "椰水鸡件入锅大火烧沸", instruction: "砂锅放入鸡件、生姜、红枣，倒入全部椰水和适量清水大火烧沸，撇净浮沫。', chefTip: '椰水加热后会变成乳白色浑浊，完全正常！这是椰子油脂乳化的表现，更鲜甜。" },
      { title: "小火慢煲90分钟加椰肉", instruction: "转小火慢煲60分钟，加入嫩椰肉再煲30分钟，调入盐出锅。', chefTip: '嫩椰肉后放保持嫩滑口感！若一开始放，久煮后椰肉变老变韧失去嫩滑。" }
    ]
  },

  "当归生姜羊肉汤": {
    subtitle: "千年经典温补药膳，出自《金匮要略》，当归补血生姜驱寒，与羊肉同炖，冬日至补",
    flavor: ["药香甘温","羊肉浓醇"],
    cookingMethod: "砂锅慢炖",
    main: [
      { name: "新鲜带骨羊腩肉/羊排", amount: 500, unit: "克，斩块焯水" }
    ],
    sec: [
      { name: "当归(药用)", amount: 15, unit: "克" },
      { name: "老生姜块", amount: 40, unit: "克，厚切" },
      { name: "黄芪", amount: 15, unit: "克" },
      { name: "枸杞子", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
      { name: "绍兴黄酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "清水", amountText: "1200 ml", baseAmount: 1200, unit: "ml" }
    ],
    steps: [
      { title: "羊肉焯水去腥", instruction: "羊肉冷水下锅加黄酒焯至出血沫，捞出冲洗干净，去除腥膻。', chefTip: '羊肉焯水必须冷水起锅！热水焯水血沫锁在肉里无法去除。" },
      { title: "药材冷水下锅大火烧沸", instruction: "砂锅放入当归、黄芪、生姜块，倒入1200ml清水，大火烧沸出药香。', chefTip: '当归先单独煮10分钟，药气充分释放，整锅汤的药效和香气更浓！" },
      { title: "羊肉入锅转小火慢炖两小时", instruction: "羊肉块入锅，转小火慢炖2小时，最后30分钟加枸杞，调入盐出锅。', chefTip: '炖至羊肉用筷子一捅轻松穿透，汤色金黄浓郁，就是最完美的冬日滋补！" }
    ]
  },

  "广东雪梨百合老鸽汤": {
    subtitle: "岭南秋季滋润名汤，甜雪梨与百合养肺润燥，乳鸽滋补身体，清甜不腻润心肺",
    flavor: ["清甜滋润","梨香鸽鲜"],
    cookingMethod: "砂锅慢煲",
    main: [
      { name: "乳鸽", amount: 1, unit: "只，宰杀洗净斩件焯水" },
      { name: "雪梨", amount: 2, unit: "个，去核切大块保留梨皮" }
    ],
    sec: [
      { name: "新鲜百合", amount: 50, unit: "克，掰瓣洗净" },
      { name: "南北杏仁", amount: 15, unit: "克" },
      { name: "麦冬", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "清水", amountText: "1000 ml", baseAmount: 1000, unit: "ml" }
    ],
    steps: [
      { title: "乳鸽焯水去腥血", instruction: "乳鸽斩件冷水下锅焯至出血沫，捞出冲洗洁净。', chefTip: '乳鸽焯水务必彻底！去除腥血才能让雪梨百合的清甜味道突出。" },
      { title: "全部材料入锅煮沸", instruction: "砂锅放入乳鸽、雪梨块、南北杏、麦冬，加1000ml清水大火烧沸撇浮沫，转小火。', chefTip: '雪梨带皮一起煮！梨皮含有更多润肺成分，且让汤色更清亮。" },
      { title: "慢煲60分钟加百合调盐", instruction: "小火煲60分钟后，加入百合再煲20分钟至百合透明软嫩，调入盐出锅。', chefTip: '百合最后加！百合久煮会变黑失去滑润口感，最后20分钟放是最佳时机。" }
    ]
  },

  "粤式胡椒猪肚鸡": {
    subtitle: "广东传统驱寒暖胃名煲，猪肚包裹嫩滑整鸡，大量白胡椒慢煲，暖胃驱寒汤鲜美绝伦",
    flavor: ["胡椒辛温","汤浓鲜美"],
    cookingMethod: "砂锅慢煲",
    main: [
      { name: "猪肚", amount: 1, unit: "个，反复揉洗极洁净" },
      { name: "三黄鸡", amount: 1, unit: "只 约1.5公斤，整只洗净" }
    ],
    sec: [
      { name: "白胡椒粒(整粒)", amount: 30, unit: "克，轻拍裂开" },
      { name: "老生姜块", amount: 30, unit: "克" },
      { name: "党参", amount: 15, unit: "克" },
      { name: "蜜枣", amount: 3, unit: "颗" }
    ],
    sea: [
      { name: "食用盐", amountText: "2 茶匙", baseAmount: 2, unit: "茶匙" },
      { name: "花生油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "清水", amountText: "1500 ml", baseAmount: 1500, unit: "ml" }
    ],
    steps: [
      { title: "猪肚彻底清洗", instruction: "猪肚翻面，用面粉和盐反复揉搓，清水冲洗，再用醋揉洗，至无异味光滑洁白（至少洗5遍）。', chefTip: '猪肚是最难洗的食材！5遍以上耐心清洗，是整道菜成功与否的基础。" },
      { title: "整鸡塞入猪肚慢煲", instruction: "整鸡塞入猪肚（鸡入肚），开口用牙签封好；砂锅加水、生姜、白胡椒粒、党参、蜜枣，大火烧沸后转小火煲2小时。', chefTip: '鸡塞进猪肚是广东绝技！双重鲜味相互渗透，猪肚弹嫩鸡肉滑嫩，汤鲜无比！" },
      { title: "取出切件回锅调盐", instruction: "取出猪肚和鸡，猪肚切条，鸡切件，回入汤锅，调入盐，撒葱花享用。', chefTip: '猪肚和鸡分别切好再回锅，方便夹取且能充分吸汤！喝汤配米饭，是最舒适的冬日食疗。" }
    ]
  },

  "四川酸菜鱼头豆腐汤": {
    subtitle: "川式家常鲜汤，大鱼头与豆腐老坛酸菜同煮，汤色乳白浓郁，酸辣鲜爽暖身驱寒",
    flavor: ["酸辣鲜爽","汤白如奶"],
    cookingMethod: "慢煮乳白汤",
    main: [
      { name: "大胖头鱼(花鲢)鱼头", amount: 1, unit: "个 约600克，斩半，打花刀" },
      { name: "南豆腐", amount: 300, unit: "克，切厚块" }
    ],
    sec: [
      { name: "四川老坛酸菜", amount: 100, unit: "克，切段" },
      { name: "老生姜厚片", amount: 20, unit: "克" },
      { name: "泡椒", amount: 3, unit: "根" },
      { name: "大葱段", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "绍兴黄酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "花生油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "清水", amountText: "1000 ml", baseAmount: 1000, unit: "ml" }
    ],
    steps: [
      { title: "鱼头煎香出奶白汤底", instruction: "热锅下油烧至六成热，鱼头两面各煎3分钟至金黄，加黄酒激香，倒入1000ml开水（热水！），大火猛煮10分钟，汤色瞬间变奶白。', chefTip: '必须用开水！冷水出白汤需2小时，开水+高温乳化只需10分钟！这是奶白汤的最快方法！" },
      { title: "酸菜泡椒爆香入汤", instruction: "另起锅下油爆香姜片，下酸菜和泡椒中火炒香出酸味，倒入奶白鱼头汤大火合煮10分钟。', chefTip: '酸菜先爆炒再入汤！让酸香充分激发，而非直接入水，味道天壤之别。" },
      { title: "豆腐入锅调味出锅", instruction: "下豆腐块中火煮5分钟入味，调入盐和白胡椒，撒葱段出锅。', chefTip: '豆腐吸满酸辣鱼汤，是比鱼头更受欢迎的食材！入口时汤汁充盈，鲜爽惊艳！" }
    ]
  },

  // ====================== 五、饮品全系 ======================

  "广式传统陈皮普洱暖胃茶": {
    subtitle: "岭南千年养生茶饮，新会陈皮与云南普洱同泡，理气健脾暖胃消食，色深香浓韵悠长",
    flavor: ["陈皮橘香","普洱醇厚"],
    cookingMethod: "煮茶",
    main: [
      { name: "新会十年陈皮", amount: 3, unit: "克，撕碎" },
      { name: "云南陈年普洱茶饼", amount: 5, unit: "克，撬碎" }
    ],
    sec: [
      { name: "老冰糖(可选)", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "清水", amountText: "600 ml", baseAmount: 600, unit: "ml" }
    ],
    steps: [
      { title: "陈皮普洱温水润茶", instruction: "普洱茶和陈皮放入茶壶，倒入95℃热水静置30秒后倒掉（洗茶），再次注入热水正式泡茶。', chefTip: '洗茶步骤去除普洱表面杂质，第二泡才是最醇厚的黄金口感！" },
      { title: "小火煮茶10分钟出深色", instruction: "将润好的茶叶和陈皮倒入小陶壶，加清水小火慢煮10分钟，汤色深红如琥珀，陈皮香气充分释放。', chefTip: '小火慢煮让茶多酚和陈皮精油充分融合，养胃暖身效果倍增！" },
      { title: "过滤倒出加冰糖饮用", instruction: "用茶漏过滤倒出，加入老冰糖至微甜，趁热小口品饮，感受橘香与茶香交融。', chefTip: '冬天喝暖胃驱寒，饭后喝消食理气，是岭南人的千年生活智慧！" }
    ]
  },

  "云南蜂蜜百花玫瑰酿茶": {
    subtitle: "云南高原玫瑰与天然蜂蜜同酿，花香甜润，每口都是山野花海的芬芳",
    flavor: ["玫瑰花香","蜂蜜甘甜"],
    cookingMethod: "冷泡/温泡",
    main: [
      { name: "云南食用玫瑰花蕾(干)", amount: 8, unit: "朵" },
      { name: "云南野生蜂蜜", amount: 20, unit: "克" }
    ],
    sec: [
      { name: "枸杞子", amount: 5, unit: "克" },
      { name: "菊花", amount: 3, unit: "朵" }
    ],
    sea: [
      { name: "温热水(65℃以下)", amountText: "300 ml", baseAmount: 300, unit: "ml" }
    ],
    steps: [
      { title: "玫瑰菊花温水冲泡", instruction: "将玫瑰花蕾和菊花放入玻璃茶具，倒入65℃温水（切忌沸水），静置3分钟待花瓣慢慢舒展。', chefTip: '水温不超过70℃！高温会破坏玫瑰花的香精油和蜂蜜的活性酶，花香会大大减少！" },
      { title: "加蜂蜜枸杞轻搅", instruction: "加入蜂蜜和枸杞子，用竹棒轻轻搅拌至蜂蜜完全溶解，玫瑰花色慢慢渗出成粉红色。', chefTip: '搅拌动作要轻柔，保护舒展的玫瑰花瓣形态，视觉上也是一种享受！" },
      { title: "静置品饮", instruction: "稍候片刻让花香充分融入茶汤，粉红色玫瑰花茶香甜馥郁，是下午茶的最美搭配。', chefTip: '玫瑰花茶调经活血、美容养颜，是女性最适合的日常花茶！" }
    ]
  },

  "台湾传统珍珠奶茶": {
    subtitle: "风靡全球的台湾发明，弹牙黑珍珠粉圆配浓郁奶茶，冷热皆宜，是街头茶饮的永恒经典",
    flavor: ["奶茶浓郁","珍珠弹牙"],
    cookingMethod: "煮珍珠+调制冷饮",
    main: [
      { name: "台湾黑糖木薯粉圆(珍珠)", amount: 80, unit: "克" },
      { name: "台湾阿萨姆红茶茶包", amount: 2, unit: "包" }
    ],
    sec: [
      { name: "全脂鲜牛奶", amount: 200, unit: "ml" },
      { name: "黑糖糖浆", amount: 30, unit: "ml" }
    ],
    sea: [
      { name: "白砂糖", amountText: "2 瓷汤勺(茶糖用)", baseAmount: 2, unit: "勺" },
      { name: "冰块", amountText: "适量", baseAmount: 100, unit: "克" }
    ],
    steps: [
      { title: "煮珍珠至弹牙透明", instruction: "足量水大火烧沸，下黑珍珠粉圆，中大火煮25分钟至中心透明，捞出泡入黑糖糖浆腌10分钟。', chefTip: '珍珠一定要煮足时间！中心不透明则硬而无弹性，泡糖浆是让珍珠甜润光亮的关键。" },
      { title: "浓泡阿萨姆红茶", instruction: "阿萨姆茶包入300ml沸水浸泡5分钟（比普通饮用时间长），取出茶包加糖搅匀，放凉。', chefTip: '浓泡是关键！加入牛奶后茶味不被稀释，保持奶茶浓郁的正宗茶香。" },
      { title: "组合摇匀加冰倒入", instruction: "杯中先放珍珠，加满冰块，倒入浓茶和鲜牛奶，用摇酒器用力摇匀，倒回杯中。', chefTip: '摇匀后奶茶表面会有细密奶泡，口感更丝滑！珍珠沉底，用粗吸管一吸，幸福！" }
    ]
  },

  "广式杏仁花生糊": {
    subtitle: "岭南传统滋润甜品饮，南北杏仁与花生同磨，香浓顺滑如丝，润肺止咳滋养经典",
    flavor: ["杏仁清甜","花生香浓"],
    cookingMethod: "浸泡磨浆煮糊",
    main: [
      { name: "南杏仁", amount: 60, unit: "克，清水浸泡6小时" },
      { name: "北杏仁", amount: 10, unit: "克，浸泡6小时" },
      { name: "去皮花生米", amount: 80, unit: "克，炒香" }
    ],
    sec: [
      { name: "大米(增浓稠度)", amount: 20, unit: "克，浸泡1小时" }
    ],
    sea: [
      { name: "冰糖", amountText: "60 克(按口味调整)", baseAmount: 60, unit: "克" },
      { name: "清水", amountText: "700 ml", baseAmount: 700, unit: "ml" }
    ],
    steps: [
      { title: "浸泡食材打成细腻浆液", instruction: "浸泡好的南北杏仁、花生和大米连同泡水一起放入破壁机，加300ml清水高速搅打3分钟成极细腻浆液，用细密滤网过滤两遍。', chefTip: '过滤两遍！去除粗粒，才能得到如丝般顺滑的杏仁花生糊！" },
      { title: "浆液加水中火慢煮", instruction: "滤好的浆液加入剩余400ml清水入锅，中小火慢慢加热，不断搅拌防止糊底，至微微沸腾变浓稠。', chefTip: '必须全程搅拌！淀粉质浆液极易糊底，一停手就焦！" },
      { title: "加冰糖调甜搅匀出锅", instruction: "加入冰糖，搅拌至完全溶化，调整甜度，盛碗趁热享用，也可冷藏后变成布丁质感冷食。', chefTip: '冷藏后杏仁糊会凝固成布丁状，质感更丰富，冷热两种吃法各有风味！" }
    ]
  },

  "云南酥油普洱奶茶": {
    subtitle: "融合藏式酥油茶与云南普洱的独特茶饮，咸香甜润，高原游牧文化与茶马古道的交汇之味",
    flavor: ["酥油咸香","普洱醇厚"],
    cookingMethod: "煮茶打发",
    main: [
      { name: "云南陈年普洱茶饼", amount: 10, unit: "克，撬碎" },
      { name: "纯天然酥油(yak butter)", amount: 20, unit: "克" }
    ],
    sec: [
      { name: "全脂牛奶或羊奶", amount: 150, unit: "ml" },
      { name: "食用盐", amount: 1, unit: "克(少许)" }
    ],
    sea: [
      { name: "清水", amountText: "300 ml", baseAmount: 300, unit: "ml" }
    ],
    steps: [
      { title: "普洱茶浓煮成浓茶", instruction: "普洱茶加300ml清水小火煮沸，改微火煮10分钟成极浓茶汤，过滤茶叶。', chefTip: '酥油茶要用很浓的茶底！普通饮用浓度的茶加了奶和酥油后味道会被稀释。" },
      { title: "加奶煮沸加酥油", instruction: "浓茶加入牛奶大火烧沸，加入酥油块和少许盐。', chefTip: '盐是酥油茶的秘密！少量盐让咸甜苦香的层次变得无比复杂丰富！" },
      { title: "高速搅打成均匀乳化", instruction: "用打奶泡器或破壁机高速搅打30秒，使酥油完全乳化入茶奶液，变成奶黄色细腻泡沫。', chefTip: '充分打发乳化是酥油茶的关键！打好的茶奶融为一体，不分层，口感丝滑醇香！" }
    ]
  },

  "海南椰青沙冰": {
    subtitle: "海南热带最清爽饮品，嫩椰子椰水加嫩椰肉打成冰沙，椰香纯净清甜，炎夏必备",
    flavor: ["椰香清纯","冰爽沁凉"],
    cookingMethod: "打冰沙",
    main: [
      { name: "嫩椰青椰水", amount: 400, unit: "ml" },
      { name: "嫩椰肉", amount: 80, unit: "克，刮出" }
    ],
    sec: [
      { name: "炼乳", amount: 20, unit: "克(可选，增甜)" },
      { name: "冰块", amount: 150, unit: "克" }
    ],
    sea: [],
    steps: [
      { title: "椰水椰肉冷冻备用", instruction: "将嫩椰水和椰肉提前放入冰箱冷冻30分钟（不要结成冰块，只要冰凉）。', chefTip: '食材预冷后打出来的沙冰更绵密细腻，椰香也更浓郁！" },
      { title: "破壁机高速打成冰沙", instruction: "将椰水、椰肉和冰块放入破壁机，高速搅打30秒至细腻冰沙状，加炼乳调甜度。', chefTip: '冰块不要太多，以椰水为主！水多冰少才能喝到纯正的椰子风味，不是普通刨冰！" },
      { title: "倒入杯中配椰肉享用", instruction: "将椰青沙冰倒入杯中，顶部放几条嫩椰肉丝，撒少许椰蓉点缀，插上吸管即可。', chefTip: '用嫩椰子特有的弧形匙刮椰肉，像一条条白色玉带飘在沙冰顶部，椰香清纯无以比拟！" }
    ]
  },

  "台式杨枝甘露": {
    subtitle: "香港起源风靡两岸三地的顶流甜饮，芒果西柚西米露三重奏，入口如春日和风",
    flavor: ["芒果甜蜜","西柚清酸"],
    cookingMethod: "调制冷饮",
    main: [
      { name: "金煌芒果或吕宋芒", amount: 2, unit: "个，取1.5个打泥，0.5个切小丁" },
      { name: "西柚", amount: 1, unit: "个，取果肉段" }
    ],
    sec: [
      { name: "西米", amount: 50, unit: "克，煮至中心透明" },
      { name: "淡奶油或椰浆", amount: 100, unit: "ml" }
    ],
    sea: [
      { name: "冰糖水", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "冰块", amountText: "适量", baseAmount: 80, unit: "克" }
    ],
    steps: [
      { title: "西米煮透备用", instruction: "西米入大量沸水煮15分钟，关火焖10分钟至完全透明，捞出过冷水备用。', chefTip: '西米焖到100%透明才算好！中间白芯是未熟的，焖足时间才有完美弹牙口感。" },
      { title: "芒果打泥加椰浆调底", instruction: "1.5个芒果切块加椰浆和冰糖水，破壁机打成顺滑金黄芒果泥，过筛去纤维，加冰块搅匀成芒果糊底。', chefTip: '过筛去芒果纤维！让芒果糊丝滑顺喉，这是专业版和家常版的最大区别！" },
      { title: "加西柚芒果丁西米组合", instruction: "杯底放西米，倒入芒果椰浆糊，摆西柚果肉段和芒果丁，撒薄荷叶点缀。', chefTip: '西柚的天然微苦酸能中和芒果的浓甜，让整杯饮品清新不腻！这就是杨枝甘露千年不变的配方智慧！" }
    ]
  },

  "四川传统老冰粉": {
    subtitle: "成都夏日第一街头冷品，冰粉籽天然凝胶，配红糖水、花生碎、蜜饯、醪糟，冰爽消暑解渴",
    flavor: ["红糖甜香","冰爽滑凉"],
    cookingMethod: "天然凝冻",
    main: [
      { name: "冰粉籽(薜荔籽)", amount: 10, unit: "克" },
      { name: "清水", amount: 800, unit: "ml" }
    ],
    sec: [
      { name: "红糖", amount: 50, unit: "克" },
      { name: "碎花生米", amount: 20, unit: "克，炒香" },
      { name: "糖渍玫瑰花酱", amount: 15, unit: "克" },
      { name: "糯米醪糟", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "食用碱/石灰水(凝冻用)", amountText: "少许(1小勺食用碱)", baseAmount: 1, unit: "克" }
    ],
    steps: [
      { title: "冰粉籽装纱布揉出胶质", instruction: "冰粉籽放入细纱布，入800ml清水中反复用力揉搓5-8分钟，至水变为乳白色浓稠状，挤出所有胶质。', chefTip: '揉搓到水完全变成奶白色乳液才算充分！这是冰粉能凝冻的天然植物胶原。" },
      { title: "加食用碱静置凝冻", instruction: "在揉好的冰粉液中加入少许食用碱（或石灰水）迅速搅拌均匀，倒入深盘，静置1小时以上至完全凝固成冻。', chefTip: '碱性环境触发冰粉籽胶质凝冻！用量要精准，太多碱味，太少不凝。" },
      { title: "划块淋红糖水配料", instruction: "将冰粉划成菱形块，盛入碗中，加红糖水、醪糟、碎花生和玫瑰酱，撒芝麻上桌。', chefTip: '红糖水一定要熬浓一点！稀糖水会让冰粉稀释无味，浓红糖汁才是灵魂！" }
    ]
  },

  // ====================== 六、更多甜品 ======================

  "广式椰汁马蹄糕": {
    subtitle: "岭南传统甜品经典，荸荠马蹄磨浆与椰浆层层叠蒸，爽滑弹嫩椰香馥郁，冷热皆宜",
    flavor: ["椰香浓郁","马蹄爽脆"],
    cookingMethod: "层层蒸制",
    main: [
      { name: "新鲜马蹄(荸荠)", amount: 300, unit: "克，去皮一半打浆一半切碎" },
      { name: "马蹄粉", amount: 150, unit: "克" }
    ],
    sec: [
      { name: "椰浆", amount: 400, unit: "ml" },
      { name: "鲜牛奶", amount: 100, unit: "ml" }
    ],
    sea: [
      { name: "白砂糖", amountText: "100 克", baseAmount: 100, unit: "克" },
      { name: "清水", amountText: "300 ml", baseAmount: 300, unit: "ml" }
    ],
    steps: [
      { title: "马蹄浆调制", instruction: "马蹄粉加200ml冷水化开成生粉浆；另将白糖加100ml热水化成糖水，放凉后加入椰浆和牛奶混匀，再与生粉浆合并成马蹄椰浆液，加入马蹄碎粒。', chefTip: '生粉浆要用冷水化开！热水会预先糊化，导致蒸出来的糕体出现夹生粉粒。" },
      { title: "蒸盘刷油小火蒸制", instruction: "蒸盘刷薄油，倒入1cm厚马蹄椰浆液，大火蒸3分钟至刚凝固，再倒第二层，如此叠加3-4层。', chefTip: '薄层多次蒸！每层都要蒸透再加下一层，层次分明，切开后白色透明交叠如玉石。" },
      { title: "冷却切块享用", instruction: "全部蒸好后取出彻底放凉1小时，切成菱形块，冷食爽脆、热食软嫩，各有风味。', chefTip: '马蹄糕一定要放凉后再切！热切会粘刀散形，冷透后切面平整如镜，层次清晰美丽！" }
    ]
  },

  "潮汕芋泥芋甜品": {
    subtitle: "潮汕极致甜品之王，荔浦芋头蒸熟压泥加猪油白糖，乌紫香糯，勺挖入口有芋泥漩涡",
    flavor: ["芋香浓糯","猪油甘香"],
    cookingMethod: "蒸制压泥",
    main: [
      { name: "荔浦香芋", amount: 600, unit: "克，去皮切块蒸熟" }
    ],
    sec: [
      { name: "猪板油炼制的熟猪油", amount: 60, unit: "克" },
      { name: "银耳(熬成水晶羹配食)", amount: 20, unit: "克，泡发" }
    ],
    sea: [
      { name: "白砂糖", amountText: "80 克(按口味)", baseAmount: 80, unit: "克" },
      { name: "葱油(提香)", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "荔浦芋头上锅蒸熟压泥", instruction: "荔浦芋头切大块，入蒸笼旺火蒸25分钟至筷子可轻松穿透，趁热压成极细腻泥状（不留颗粒）。', chefTip: '趁热压泥！冷了芋泥硬化难以压细，且热压出来的芋泥绵软如云！" },
      { title: "加白糖猪油葱油搅拌", instruction: "芋泥中加入白糖和熟猪油，用木铲用力反复搅拌至芋泥变得油亮光滑，飘散猪油甘香。', chefTip: '猪油是潮式芋泥的灵魂！植物油无法复制那种丝滑油润甘香。重要到不可替代！" },
      { title: "银耳羹熬好同上桌", instruction: "银耳小火熬成晶莹水晶羹，加少许冰糖，盛芋泥配银耳羹同上，双重口感绝配。', chefTip: '银耳的清爽胶质与浓厚芋泥形成完美对比！潮汕婚宴上这碗芋泥代表圆满吉祥！" }
    ]
  },

  "北京宫廷豌豆黄": {
    subtitle: "清宫御膳坊传统糕点，豌豆细磨去皮成泥蒸制定形，豆香清甜细腻如凝脂，清雅脱俗",
    flavor: ["豆香清甜","细腻如脂"],
    cookingMethod: "磨泥蒸模",
    main: [
      { name: "干豌豆", amount: 300, unit: "克，清水浸泡12小时" }
    ],
    sec: [
      { name: "糯米粉(增弹性)", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "白砂糖", amountText: "80 克", baseAmount: 80, unit: "克" },
      { name: "桂花蜂蜜", amountText: "20 克(增香)", baseAmount: 20, unit: "克" }
    ],
    steps: [
      { title: "豌豆蒸熟去皮打泥", instruction: "泡发豌豆蒸30分钟至熟烂，趁热去皮（浸冷水后皮自然脱落），加少量水放入破壁机打成极细腻豆泥。', chefTip: '一定要去豌豆皮！留皮则口感粗糙，去皮后豆泥细腻光滑才是宫廷品质。" },
      { title: "豆泥加糖小火炒干", instruction: "豆泥入不粘锅，加白糖和桂花蜜，小火不断翻炒至豆泥与糖完全融合，不粘锅底，可成团。', chefTip: '炒干豆泥水分是定形的关键！炒越干成形后越硬实，切面越光滑如玉。" },
      { title: "模具定形切块", instruction: "趁热倒入铺有保鲜膜的长方形容器，压实抹平，冷藏2小时定形，切成小方块即可享用。', chefTip: '冷藏后豌豆黄颜色会变得更深一些，金黄透亮，清雅如玉。是北京春天最美的伴手礼！" }
    ]
  },

  "四川成都红糖糍粑": {
    subtitle: "川西传统小食，糯米糍粑外皮煎至金黄，蘸红糖熟芝麻花生碎，内软外脆甜蜜无比",
    flavor: ["红糖甜香","外脆内软"],
    cookingMethod: "煎制",
    main: [
      { name: "圆粒糯米", amount: 300, unit: "克，浸泡8小时蒸熟" }
    ],
    sec: [
      { name: "红糖", amount: 60, unit: "克" },
      { name: "熟白芝麻", amount: 20, unit: "克" },
      { name: "熟花生碎", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "食用油", amountText: "3 瓷汤勺(煎制)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "糯米蒸熟趁热捣泥", instruction: "蒸熟糯米趁热放入石臼或厚底碗，用擀面棍用力反复捣打至米粒完全融合成光滑黏糯团状。', chefTip: '趁热捣打！冷了糯米团变硬无法捣烂，必须热打趁热整形，这是成功的关键！" },
      { title: "整形成薄饼煎至金黄", instruction: "手上抹油，取适量糯米团整形成1cm厚小圆饼，平底锅下油中火煎至两面深黄酥脆。', chefTip: '糯米粑黏性极强，手和锅铲都要涂油！煎时不要频繁翻动，等一面完全结壳再翻。" },
      { title: "红糖芝麻花生碎调蘸料", instruction: "红糖加少量热水化成浓稠红糖汁，加入熟芝麻和花生碎调匀成蘸料，煎好糍粑蘸食。', chefTip: '红糖汁要浓！稀了不挂糍粑表面，浓了才能包裹每块糍粑，甜香透骨！" }
    ]
  },

  // ====================== 七、更多面食 ======================

  "广西南宁老友粉": {
    subtitle: "南宁人的早餐灵魂，豆豉酸笋番茄爆炒出滚烫老友汤底，米粉烫透配猪肉片，酸辣鲜爽",
    flavor: ["酸辣鲜香","豆豉浓郁"],
    cookingMethod: "旺火爆炒汤底",
    main: [
      { name: "广西优质细圆米粉", amount: 200, unit: "克，提前泡软" },
      { name: "猪里脊肉薄片", amount: 80, unit: "克，腌制上浆" }
    ],
    sec: [
      { name: "老坛酸笋丝", amount: 60, unit: "克" },
      { name: "沙瓤番茄切块", amount: 1, unit: "个" },
      { name: "豆豉碎", amount: 15, unit: "克" },
      { name: "鲜红辣椒碎", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "花生油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "高汤或清水", amountText: "500 ml", baseAmount: 500, unit: "ml" }
    ],
    steps: [
      { title: "老友底料爆香", instruction: "热锅下油，先下豆豉碎小火爆香，加辣椒碎、酸笋丝大火翻炒至酸味飘出，加番茄块压烂出沙。', chefTip: '豆豉是老友粉的灵魂！必须先单独爆香出豆豉酱香，再加其他配料！" },
      { title: "加汤调味煮沸", instruction: "加入500ml高汤大火烧沸，调入生抽、盐和白胡椒，大火煮5分钟让老友味道充分融合，形成浓郁红色汤底。', chefTip: '老友汤底颜色深红才是正宗！番茄和豆豉的红色是天然色泽，食欲大开！" },
      { title: "肉片烫熟米粉入锅", instruction: "肉片下汤中烫熟，泡好米粉入锅煮2分钟，盛碗时上面摆肉片，浇上老友汤底，撒葱花香菜。', chefTip: '老友粉的灵魂是那口滚烫浓郁的老友汤！米粉只是载体，汤料的味道才是精髓！" }
    ]
  },

  "浙江温州猪脏粉": {
    subtitle: "温州人的宝藏夜宵，米粉配猪小肠卤水翻炒，加鸡蛋韭菜豆芽，鲜香咸辣，俗名不掩其鲜",
    flavor: ["卤香鲜辣","米粉滑嫩"],
    cookingMethod: "旺火干炒",
    main: [
      { name: "温州粗米粉", amount: 200, unit: "克，泡软" },
      { name: "卤熟猪小肠段", amount: 100, unit: "克" }
    ],
    sec: [
      { name: "鸡蛋", amount: 2, unit: "枚" },
      { name: "韭菜段", amount: 50, unit: "克" },
      { name: "绿豆芽", amount: 80, unit: "克" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "老抽", amountText: "1 茶匙(上色)", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "猪油", amountText: "2 瓷汤勺(灵魂!)", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "鸡蛋打散铁锅炒碎", instruction: "铁锅猛火下猪油烧至冒烟，打入鸡蛋大火炒散成碎蛋花，推至锅边。', chefTip: '温州炒粉用猪油是正宗！植物油缺少那种香气，猪油是整道菜最底层的鲜香来源。" },
      { title: "猪肠段和米粉入锅大火翻炒", instruction: "下猪肠段翻炒出香，加米粉大火猛炒，淋入生抽老抽调色，白胡椒粉提香，全程大火颠锅。', chefTip: '大火猛炒是米粉不粘连的秘密！镬气足，粉粒分明，每根都包裹着焦香酱汁！" },
      { title: "加韭菜豆芽快炒出锅", instruction: "下豆芽和韭菜大火快炒30秒，盐调味，出锅前再撒白胡椒，盛碗淋上卤汁。', chefTip: '韭菜和豆芽最后放！爽脆口感是关键，炒久了就软烂了。" }
    ]
  },

  "上海传统葱油拌面": {
    subtitle: "上海人的最爱主食，现炸金黄葱油配猪油拌面，面条热烫拌入浓酱油，鲜甜咸香简单至极",
    flavor: ["葱油鲜香","酱油咸甜"],
    cookingMethod: "葱油炸制+拌面",
    main: [
      { name: "上海细面/阳春面", amount: 150, unit: "克，干面" }
    ],
    sec: [
      { name: "大葱白段", amount: 100, unit: "克，切斜段" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "老抽", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯花生油", amountText: "80 ml(炸葱油)", baseAmount: 80, unit: "ml" }
    ],
    steps: [
      { title: "葱油慢炸至金黄", instruction: "花生油入锅，冷油放入葱白段，小火慢慢加热，待葱白慢慢变金黄焦香，捞出葱渣，留葱油。', chefTip: '冷油冷葱入锅！慢火提葱油是关键。热油入葱直接焦苦，冷油慢炸葱香层层析出！" },
      { title: "酱油糖调成味汁", instruction: "生抽、老抽、白糖加3瓷汤勺热葱油调成浓郁酱汁，备用。', chefTip: '白糖是上海风味的秘密！略带甜味的酱汁让拌面咸甜鲜美，不是普通北方咸鲜。" },
      { title: "面条煮好趁热拌", instruction: "细面煮至适口（约4分钟），捞出不过冷水直接倒入调好的酱汁中，迅速用筷子大力挑拌，淋葱油，撒葱花。', chefTip: '绝对不过冷水！热面吸汁能力最强，每根面条都会裹上厚厚葱油酱汁，香气极致！" }
    ]
  },

  "云南玫瑰鲜花饼": {
    subtitle: "云南高原浪漫特产，新鲜玫瑰花瓣腌制成馅，外层酥皮层层叠叠，花香满溢的传统美食",
    flavor: ["玫瑰花香","酥皮层叠"],
    cookingMethod: "烤箱烤制",
    main: [
      { name: "新鲜食用玫瑰花瓣", amount: 100, unit: "克，洗净控干" },
      { name: "中筋面粉(油皮)", amount: 150, unit: "克" },
      { name: "低筋面粉(油酥)", amount: 100, unit: "克" }
    ],
    sec: [
      { name: "猪油(起酥关键)", amount: 80, unit: "克" }
    ],
    sea: [
      { name: "白砂糖", amountText: "80 克(玫瑰馅糖腌)", baseAmount: 80, unit: "克" },
      { name: "蜂蜜", amountText: "20 克", baseAmount: 20, unit: "克" }
    ],
    steps: [
      { title: "玫瑰花馅腌制", instruction: "玫瑰花瓣撒白糖和蜂蜜，用手轻轻揉捏出玫瑰汁液，静置30分钟成玫瑰馅。', chefTip: '手揉玫瑰是关键！揉出天然玫瑰精油，花香比单纯切碎浓烈数倍！" },
      { title: "油皮油酥制作包叠", instruction: "油皮：面粉+猪油+水揉光滑面团；油酥：低筋粉+猪油混合成酥团；油皮包油酥，三折三叠起层。', chefTip: '猪油是酥饼起层的核心！猪油熔点低，烘烤时层层分离，形成千层酥皮效果！" },
      { title: "包馅整形烤箱烤制", instruction: "酥皮擀圆，包入玫瑰馅，封口捏紧朝下摆盘，刷蛋液撒芝麻，170℃烤20分钟至金黄。", chefTip: "烤出后表皮应是均匀金黄色，轻按有酥皮碎落才是成功！花香在烤制时会充满整个厨房！" }
    ]
  },

  "农家迁西板栗烧土鸡": {
    subtitle: "河北迁西特产油栗粉糯香甜，与散养土鸡浓汁红烧，栗香扑鼻肉嫩汁浓",
    flavor: ["咸甜适口", "栗香软糯"],
    cookingMethod: "砂锅红烧",
    main: [
      { name: "农家新鲜散养走地土鸡", amount: 600, unit: "克 (斩大块焯水)" },
      { name: "河北迁西正宗去壳板栗仁", amount: 250, unit: "克 (开水浸泡剥去内衣)" }
    ],
    sec: [
      { name: "老生姜片与大葱段", amount: 30, unit: "克" },
      { name: "青蒜苗段", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "老冰糖", amountText: "25 克 (炒糖色提鲜)", baseAmount: 25, unit: "克" },
      { name: "生抽酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "优质老抽", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "绍兴黄酒/料酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "纯花生油", amountText: "2.5 瓷汤勺", baseAmount: 2.5, unit: "勺" }
    ],
    steps: [
      { title: "板栗焯水剥衣与鸡肉焯透", instruction: "板栗仁用开水浸泡5分钟剥去内皮备用；土鸡块冷水下锅加料酒焯水洗净沥干。", chefTip: "开水烫泡是完整剥去板栗毛衣的绝技！" },
      { title: "慢火炒出金红冰糖糖色", instruction: "热锅倒油下冰糖小火慢炒至融化起红棕细密泡沫，倒入鸡块大火快速翻炒均匀裹上琥珀色。", chefTip: "炒糖色比老抽上色更红亮晶莹，且带焦糖香！" },
      { title: "合烧板栗转小火慢煨收汁", instruction: "加生抽老抽黄酒、葱姜和大半碗水烧开，倒入板栗仁盖盖小火慢煨25分钟至板栗粉糯，大火收浓汁撒青蒜苗出锅。", chefTip: "板栗吸饱鸡油鸡汁变得极其粉甜绵密，拌米饭绝配！" }
    ]
  },

  "老北京古法糖炒迁西板栗": {
    subtitle: "秋冬老北京街头经典，精选迁西油栗大开口，麦芽糖蜜水慢火翻炒焦香油亮",
    flavor: ["焦香扑鼻", "软糯香甜"],
    cookingMethod: "铁锅古法翻炒",
    main: [
      { name: "河北迁西精选油板栗", amount: 500, unit: "克 (洗净横切一道十字口)" }
    ],
    sec: [
      { name: "麦芽糖/白砂糖", amount: 25, unit: "克" },
      { name: "食用植物油", amount: 10, unit: "ml" }
    ],
    sea: [
      { name: "清水", amountText: "50 ml", baseAmount: 50, unit: "ml" }
    ],
    steps: [
      { title: "板栗洗净开十字防炸", instruction: "板栗洗净擦干，用小刀在每颗板栗圆弧面切一道深达内膜的十字刀口（防受热炸裂）。", chefTip: "十字刀切透外壳，受热自然开口，剥壳极其轻松！" },
      { title: "裹油入锅大火初烘", instruction: "板栗表面拌一层薄植物油，入热锅中火翻炒3分钟至刀口微裂开。", chefTip: "薄油能导热均匀，锁住板栗内部水分，炒出来不会干硬。" },
      { title: "淋麦芽糖水小火慢翻焦香", instruction: "麦芽糖化水淋入锅中，快速持续翻炒至水分收干，糖浆紧紧包裹板栗壳，焦香四溢出锅！", chefTip: "麦芽糖焦糖香气扑鼻，壳脆肉粉，一口一个停不下来！" }
    ]
  },

  "低卡冬瓜荷叶排骨刮油汤": {
    subtitle: "岭南传统经典消脂排湿汤，冬瓜荷叶双重利水刮油，小排焯净油脂清甜不腻",
    flavor: ["清爽甘甜", "暖胃刮油"],
    cookingMethod: "老火慢煲",
    main: [
      { name: "精选新鲜带皮老冬瓜", amount: 400, unit: "克 (带绿皮切大厚块)" },
      { name: "优质小猪肋排骨", amount: 200, unit: "克 (充分焯透洗净多余油脂)" }
    ],
    sec: [
      { name: "干荷叶片", amount: 15, unit: "克 (温水洗净剪小块)" },
      { name: "熟薏米仁", amount: 30, unit: "克 (提前浸泡)" },
      { name: "老生姜片", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙 (出锅前放)", baseAmount: 1, unit: "茶匙" },
      { name: "纯净水", amountText: "1200 ml", baseAmount: 1200, unit: "ml" }
    ],
    steps: [
      { title: "排骨焯水去尽血沫与油脂", instruction: "小排冷水下锅，加姜片黄酒大火烧开撇去浮沫，捞出温水洗净沥干。", chefTip: "去净表面油脂是保持汤清油少的关键！" },
      { title: "荷叶薏米冬瓜慢火煲透", instruction: "砂锅加1200ml水，入排骨、姜片、薏米大火煮沸转小火慢煲30分钟，加入带皮冬瓜块和荷叶继续小火慢煮20分钟。", chefTip: "冬瓜带皮煲汤清热利水效果倍增，皮薄肉厚不易烂成渣！" },
      { title: "关火撒少许盐清甜暖胃", instruction: "出锅前夹出残荷叶，调入1茶匙食盐搅匀即可装碗趁热享用。", chefTip: "绝对不放鸡精味精与油脂，纯靠冬瓜与排骨本味，清爽解腻刮油首选！" }
    ]
  },

  "魔芋丝番茄嫩豆腐减脂汤": {
    subtitle: "超模最爱极低卡饱腹汤，番茄浓汤起沙，魔芋零热量Q弹滑爽，嫩豆腐高蛋白",
    flavor: ["酸甜鲜美", "低卡饱腹"],
    cookingMethod: "浓汤快煮",
    main: [
      { name: "沙瓤熟红番茄", amount: 2, unit: "个 (去皮切碎丁)" },
      { name: "盒装嫩豆腐", amount: 1, unit: "盒 (切2cm小方块)" },
      { name: "新鲜结结魔芋丝", amount: 1, unit: "盒 (约200克)" }
    ],
    sec: [
      { name: "鲜金针菇/白玉菇", amount: 100, unit: "克" },
      { name: "小香葱花", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "橄榄油", amountText: "半茶匙 (微量润锅)", baseAmount: 0.5, unit: "茶匙" },
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白胡椒粉", amountText: "少许 (暖胃驱寒)", baseAmount: 0.2, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "番茄微油煸炒成浓沙红汤", instruction: "锅底仅抹半茶匙薄油，倒入切碎番茄小火翻炒用锅铲压成浓红番茄泥，加清水700ml大火烧沸。", chefTip: "少油慢炒番茄能完全释放番茄红素，浓汤酸爽开胃。" },
      { title: "入豆腐魔芋菌菇同煮入味", instruction: "下入魔芋丝、嫩豆腐方块和白玉菇，中小火煮6分钟至食材吸足番茄酸香浓汤。", chefTip: "魔芋丝膳食纤维丰富、零脂肪饱腹感强，与豆腐搭配植物高蛋白满满！" },
      { title: "白胡椒粉提味暖胃出锅", instruction: "调入生抽、盐和白胡椒粉，撒小葱花出锅。一碗热乎下肚暖透全身却几乎零负担！", chefTip: "白胡椒粉是暖胃点睛之笔，微微辛香加速身体循环代謝！" }
    ]
  },

  "鲜虾白玉冬瓜暖胃清脂汤": {
    subtitle: "高蛋白低热量明星减脂汤，鲜活大虾开背出鲜，冬瓜透亮吸汁，汤鲜味美极度解腻",
    flavor: ["清甜鲜美", "高蛋白轻食"],
    cookingMethod: "鲜汤清滚",
    main: [
      { name: "鲜活基围虾/海白虾", amount: 8, unit: "只 (去头开背挑虾线)" },
      { name: "去皮白玉冬瓜", amount: 350, unit: "克 (切0.5cm薄片)" }
    ],
    sec: [
      { name: "老生姜丝", amount: 10, unit: "克" },
      { name: "枸杞子", amount: 10, unit: "粒" },
      { name: "鲜小葱段", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "香油", amountText: "2 滴 (出锅点缀)", baseAmount: 2, unit: "滴" }
    ],
    steps: [
      { title: "虾头少许煸炒出天然红虾油", instruction: "锅微热放入虾头压出少许虾油，倒入开水600ml撇出虾头弃去，留清亮粉红鲜虾高汤。", chefTip: "不放一滴食用油，靠虾头自身天然虾青素与鲜味做底汤！" },
      { title: "下冬瓜片大火滚煮至透明", instruction: "放入冬瓜薄片和姜丝大火滚煮3分钟至冬瓜片边缘晶莹半透明。", chefTip: "冬瓜薄片极易熟化，保持清脆爽嫩口感。" },
      { title: "放入开背虾肉变红断生起锅", instruction: "倒入鲜虾和枸杞煮1分钟至虾身弯曲变红，加盐、白胡椒粉，关火滴两滴香油装碗。", chefTip: "虾肉久煮会柴，变红蜷曲立即关火，虾仁Q弹紧致！" }
    ]
  },

  "无油六茸菌菇豆腐刮油汤": {
    subtitle: "纯天然山珍真菌植物鲜汤，零油低脂，多种菌菇多糖滋补暖胃，刮油轻盈",
    flavor: ["鲜香甘润", "清肠暖胃"],
    cookingMethod: "无油清炖",
    main: [
      { name: "新鲜白玉菇与蟹味菇", amount: 150, unit: "克 (洗净切除根部)" },
      { name: "鲜嫩滑豆腐", amount: 200, unit: "克 (切小方块)" }
    ],
    sec: [
      { name: "新鲜鹿茸菇/秀珍菇", amount: 80, unit: "克" },
      { name: "鲜香菇", amount: 3, unit: "朵 (切薄片)" },
      { name: "老生姜片与枸杞", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "菌菇干锅干焙激发出菌香", instruction: "无油热锅放入所有杂菌小火干焙1分钟逼出水分与深层菌香。", chefTip: "干锅焙菌菇是不用油也能香气浓郁的星级厨师秘方！" },
      { title: "倒入滚烫开水大火激出奶白浓汤", instruction: "冲入700ml滚水，大火翻滚3分钟，菌菇多糖乳化形成自然微奶白汤底。", chefTip: "沸水冲入干热菌菇瞬间激发出极致鲜甜！" },
      { title: "下豆腐慢煮放盐胡椒出锅", instruction: "放入嫩豆腐块慢煮4分钟，放盐、枸杞和白胡椒粉关火装盘。", chefTip: "完全无油脂添加，富含丰富膳食纤维与微量元素，大餐后清肠第一汤！" }
    ]
  },

  "清润冬瓜薏米瘦肉去湿消肿汤": {
    subtitle: "两广传统祛湿健脾消肿名汤，冬瓜薏米排湿利尿，精瘦肉丝清甜不腻",
    flavor: ["咸鲜清甜", "利水去湿"],
    cookingMethod: "瓦罐清煨",
    main: [
      { name: "农家新鲜老冬瓜", amount: 300, unit: "克" },
      { name: "纯瘦猪里脊肉", amount: 150, unit: "克 (切细肉丝无肥膘)" }
    ],
    sec: [
      { name: "炒薏仁米", amount: 30, unit: "克 (小火微黄炒透去寒)" },
      { name: "赤小豆", amount: 20, unit: "克" },
      { name: "老姜丝", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "薏米赤小豆洗净慢煮起沙", instruction: "炒薏米与赤小豆加水800ml大火烧开慢煮25分钟至开花。", chefTip: "炒过的薏米性温不伤脾胃，祛湿效果更好！" },
      { title: "入冬瓜块与精瘦肉丝", instruction: "加入冬瓜块煮10分钟，最后下入腌少许姜汁的精瘦肉丝滑散变白断生。", chefTip: "纯瘦肉丝不带油脂，最后入锅保持肉质嫩滑不柴。" },
      { title: "加少许盐关火出锅", instruction: "调入少许盐即可，汤色清亮甘爽，去水肿刮油极佳。", chefTip: "无需任何多余调料，原汁原味甘甜爽口。" }
    ]
  },

  "低卡玉米海带排骨清脂汤": {
    subtitle: "深海天然海带多糖吸脂排油，甜玉米自然清甜，减脂期暖胃解馋首选",
    flavor: ["海味鲜甜", "低脂饱腹"],
    cookingMethod: "慢火清炖",
    main: [
      { name: "新鲜深海海带结", amount: 150, unit: "克 (泡发洗净盐分)" },
      { name: "新鲜甜玉米", amount: 1, unit: "根 (剁小轮块)" },
      { name: "猪脊骨/小排骨", amount: 200, unit: "克 (去净多余肥膘并焯透)" }
    ],
    sec: [
      { name: "生姜大片", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "骨头焯净油脂血水洗净", instruction: "排骨加料酒冷水焯透，温水冲洗两遍控干油脂。", chefTip: "彻底冲去浮油浮沫，保证炖出的汤清澈见底。" },
      { title: "加海带玉米慢火熬煮", instruction: "砂锅入排骨、海带结、玉米块与生姜，加1200ml水大火烧开转微火慢炖40分钟至海带软糯玉米出甜香。", chefTip: "海带中海藻胶吸水膨胀，能延缓消化吸收，饱腹感强。" },
      { title: "撒白胡椒与盐出锅趁热喝", instruction: "出锅前调入食盐和少许胡椒粉搅匀装碗享用。", chefTip: "玉米清甜与海带鲜咸交织，热量极低却满满一大碗幸福感！" }
    ]
  },

  "扬州经典碎金翡翠扬州炒饭": {
    subtitle: "淮扬菜国宴经典炒饭，金裹银粒粒分明松散油润，海参火腿鲜虾配青豆香葱",
    flavor: ["鲜咸适口", "颗粒分明软糯"],
    cookingMethod: "金裹银大火炒制",
    main: [
      { name: "隔夜丝苗米饭", amount: 350, unit: "克 (打散无大硬块)" },
      { name: "农家新鲜土鸡蛋黄", amount: 3, unit: "枚 (搅打细腻均匀)" }
    ],
    sec: [
      { name: "鲜活基围虾仁", amount: 50, unit: "克 (焯熟切小丁)" },
      { name: "金华火腿肉丁", amount: 30, unit: "克 (蒸熟切细小方丁)" },
      { name: "鲜甜小青豆与甜玉米粒", amount: 40, unit: "克" },
      { name: "水发小海参丁", amount: 30, unit: "克" },
      { name: "细小香葱花", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "熟猪油与纯植物油", amountText: "各1 瓷汤勺 (混合起锅极香)", baseAmount: 2, unit: "勺" },
      { name: "白胡椒粉", amountText: "少许", baseAmount: 0.2, unit: "茶匙" }
    ],
    steps: [
      { title: "蛋液裹米饭做成金裹银", instruction: "取一半蛋黄液直接倒入冷透米饭中充分抓拌均匀，使每一粒米饭表面都裹上一层薄薄金黄蛋液。", chefTip: "生蛋黄拌冷饭是炒出粒粒金黄不结块的淮扬大厨秘技！" },
      { title: "热锅滑炒配料断生出香", instruction: "锅下少许猪油，下火腿丁、虾仁丁、海参丁、青豆玉米炒香盛出备用。", chefTip: "配料提前快炒控水，防止炒饭湿黏影响干香口感。" },
      { title: "旺火热锅大火跳跃炒散", instruction: "锅下宽油滑热倒出留底油，倒入拌蛋饭旺火快速划散翻炒颠锅至米粒跳跃开花，倒入配料和葱花调盐起锅！", chefTip: "锅气足、手速快，米粒在锅底如碎金跳跃，粒粒喷香！" }
    ]
  },

  "广式腊味排骨煲仔饭": {
    subtitle: "老广州街巷烟火头牌，砂锅底金黄锅巴酥脆咔嚓响，皇上皇腊肠油润豉香浓郁",
    flavor: ["酱香浓郁", "锅巴酥脆脱壳"],
    cookingMethod: "传统砂锅生煲",
    main: [
      { name: "广东丝苗米/油粘米", amount: 200, unit: "克 (清水浸泡30分钟)" },
      { name: "广式皇上皇正宗白条腊肠", amount: 2, unit: "根 (斜切均匀薄片)" },
      { name: "广式精选小排骨", amount: 150, unit: "克 (豆豉蒜末腌入味)" }
    ],
    sec: [
      { name: "鲜嫩广东菜心", amount: 3, unit: "棵 (开水灼烫断生)" },
      { name: "新鲜土鸡蛋", amount: 1, unit: "枚" }
    ],
    sea: [
      { name: "自制秘制煲仔饭酱油汁", amountText: "生抽2勺+老抽半勺+冰糖半勺+水2勺煮沸", baseAmount: 2, unit: "勺" },
      { name: "纯花生油/熟猪油", amountText: "1 瓷汤勺 (沿砂锅边淋出锅巴)", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "砂锅刷油泡米大火煮沸", instruction: "砂锅底刷薄油，倒入泡好的丝苗米和清水（水米比例约1.2:1），大火煮沸至米饭表面收水呈蜂窝小孔。", chefTip: "砂锅刷油防止粘底，同时为金黄脆锅巴做准备。" },
      { title: "码入腊味排骨窝蛋微火焖焗", instruction: "迅速将腊肠片和腌好排骨均匀铺在米饭上，中央打入鸡蛋，盖严锅盖转极小火慢焗10分钟。", chefTip: "腊味油脂在密闭砂锅中层层渗入米粒，饭粒油润生香！" },
      { title: "沿锅边淋油起酥脆金黄锅巴", instruction: "开盖沿锅边内壁淋入一勺花生油，转动砂锅各个角度火烤2分钟起酥壳，关火淋入秘制甜酱油开拌！", chefTip: "淋油听见滋滋响就是金黄锅巴成型信号，整块锅巴酥香脱壳！" }
    ]
  },

  "老上海咸肉菜饭": {
    subtitle: "老上海石库门回忆暖心主食，金华咸肉丁咸香油润，霜打青菜碎碧绿清甜",
    flavor: ["咸鲜清甜", "猪油喷香"],
    cookingMethod: "铁锅传统焖饭",
    main: [
      { name: "优质大米与少许糯米", amount: 300, unit: "克 (掺1/5糯米软糯弹牙)" },
      { name: "江南农家风干咸肉", amount: 120, unit: "克 (温水洗净切0.8cm小方丁)" }
    ],
    sec: [
      { name: "霜打矮脚上海青菜", amount: 300, unit: "克 (洗净切碎丁，菜叶与菜帮分开放)" },
      { name: "传统熬制纯猪油", amount: 25, unit: "克 (菜饭灵魂)" }
    ],
    sea: [
      { name: "食用盐", amountText: "半茶匙 (咸肉已有咸味)", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯净水", amountText: "约 350 ml", baseAmount: 350, unit: "ml" }
    ],
    steps: [
      { title: "猪油煸炒咸肉丁逼出油香", instruction: "锅内下大半勺猪油融化，下咸肉丁小火煸炒至肥肉透明出油微焦香，下青菜帮翻炒30秒。", chefTip: "猪油炒咸肉是上海菜饭不二法门，香气扑鼻！" },
      { title: "淘净米同炒入电饭煲焖熟", instruction: "倒入淘净大米快速翻炒均匀裹上咸肉猪油，倒入电饭煲/砂锅，加正常焖饭水量焖熟。", chefTip: "米粒提前炒过能牢牢锁住油香，粒粒分明韧性十足。" },
      { title: "菜叶猪油快炒出锅前拌入", instruction: "另起锅用少许猪油将青菜叶大火爆炒20秒断生，待饭跳闸后倒入拌匀焖2分钟出锅！", chefTip: "青菜叶最后拌入才能保持碧绿如翡翠，绝不发黄发烂！" }
    ]
  },

  "广式荷香糯米鸡": {
    subtitle: "广东早茶四大天王点心，天然清香干荷叶，软糯浸味糯米包裹滑嫩鸡腿咸蛋黄",
    flavor: ["荷叶清香", "软糯咸香鲜美"],
    cookingMethod: "荷叶蒸制",
    main: [
      { name: "精选长粒优质糯米", amount: 300, unit: "克 (提前冷水浸泡4小时)" },
      { name: "鲜嫩去骨鸡腿肉", amount: 150, unit: "克 (切小丁生抽蚝油腌制)" }
    ],
    sec: [
      { name: "天然干荷叶", amount: 3, unit: "张 (开水烫软擦净剪大方块)" },
      { name: "正宗红油咸蛋黄", amount: 3, unit: "枚 (切对半)" },
      { name: "广式蜜汁叉烧丁", amount: 50, unit: "克" },
      { name: "优质小花菇丁", amount: 4, unit: "朵 (泡发切丁)" }
    ],
    sea: [
      { name: "生抽酱油与蚝油", amountText: "各1.5 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "纯芝麻香油", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "老抽", amountText: "1 茶匙 (糯米上红润酱色)", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "糯米蒸熟拌入秘制酱色", instruction: "泡好的糯米入蒸锅大火蒸20分钟至八成熟，趁热拌入生抽老抽和香油调味上色均匀。", chefTip: "提前拌色让糯米每一口都带有咸甜酱香。" },
      { title: "炒制浓香荷香鸡肉内馅", instruction: "锅下少许油炒香鸡丁、香菇丁和叉烧丁，加蚝油生抽勾薄芡盛出晾凉。", chefTip: "芡汁浓郁能使糯米在蒸制时充分吸收内馅肉汁精华。" },
      { title: "荷叶铺底严实包裹蒸透", instruction: "荷叶平铺，铺一层糯米，放鸡肉馅与半颗咸蛋黄，盖一层糯米包裹成四方方块，蒸锅大火蒸30分钟出炉！", chefTip: "荷叶清香完全渗透进软糯糯米与油润蛋黄中，撕开荷叶香气四溢！" }
    ]
  },

  "传统四川红油抄手": {
    subtitle: "巴蜀经典小吃之王，皮薄如蝉翼透光滑爽，红油香醋蒜水复合浓香直击灵魂",
    flavor: ["麻辣鲜香", "皮薄肉滑酸辣开胃"],
    cookingMethod: "沸水滚煮与调汁挑拌",
    main: [
      { name: "新鲜手工薄抄手皮/馄饨皮", amount: 24, unit: "张 (薄而有筋骨)" },
      { name: "前夹三肥七瘦猪鲜肉馅", amount: 200, unit: "克 (细剁顺向搅打上劲)" }
    ],
    sec: [
      { name: "正宗四川二荆条熟菜籽红油", amount: 2.5, unit: "瓷汤勺" },
      { name: "现压鲜大蒜泥蒜水", amount: 1.5, unit: "瓷汤勺" },
      { name: "熟白芝麻与细香葱花", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "四川保宁醋/陈醋", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "特级酿造生抽", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "白糖", amountText: "1 茶匙 (提鲜回甜中和酸辣)", baseAmount: 1, unit: "茶匙" },
      { name: "汉源大红袍花椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "肉馅加葱姜水顺向搅上劲", instruction: "肉馅少量多次加葱姜水、生抽盐胡椒粉，用力顺一个方向搅至肉茸起胶发亮。", chefTip: "充分打水上劲让抄手肉馅煮熟后紧实弹牙，咬开爆出肉汁！" },
      { title: "元宝包法折角成型", instruction: "皮中放肉馅，对折成梯形，两角在中间交叠沾水捏紧成小元宝状。", chefTip: "捏角紧实不露馅，边缘皮薄在汤汁中如裙摆般飘逸。" },
      { title: "碗底打复合红油汁快煮捞入", instruction: "碗内调入红油、生抽、香醋、糖、蒜水、花椒粉；抄手入宽沸水大火煮至浮起2分钟捞入碗中，撒芝麻葱花！", chefTip: "先调底料后捞抄手，带两勺滚烫原汤快速挑开，麻辣酸甜红亮诱人！" }
    ]
  },

  "正宗重庆酸辣粉": {
    subtitle: "山城大街小巷排队名吃，纯红薯鲜粉晶莹透亮爽滑劲道，酸辣鲜爽嗦粉天花板",
    flavor: ["酸辣爽口", "麻辣鲜香Q弹筋道"],
    cookingMethod: "烫粉调汤",
    main: [
      { name: "正宗纯红薯手工粗湿粉", amount: 200, unit: "克 (温水洗净顺滑)" }
    ],
    sec: [
      { name: "秘制香辣肉酱沫", amount: 40, unit: "克" },
      { name: "老茶馆油炸香脆花生米", amount: 20, unit: "克" },
      { name: "爽口宜宾碎米芽菜/酸豆角", amount: 20, unit: "克" },
      { name: "大蒜水与细小香葱花", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "正宗老陈醋/保宁醋", amountText: "2 瓷汤勺 (酸爽过瘾灵魂)", baseAmount: 2, unit: "勺" },
      { name: "特制红油辣椒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "高汤/鲜汤", amountText: "约 300 ml", baseAmount: 300, unit: "ml" },
      { name: "花椒粉与食用盐", amountText: "各半茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "纯红薯粉沸水烫透煮软", instruction: "红薯粉放入竹笊篱在滚沸高汤中烫煮2-3分钟至粉体通体晶莹剔透，捞出沥水。", chefTip: "纯红薯粉久煮不烂，口感韧劲十足无明矾异味！" },
      { title: "碗内黄金比例打入复合酸辣底料", instruction: "大碗内依次放醋、红油、生抽、蒜水、盐、花椒粉，冲入滚烫原味骨头高汤激出浓郁酸辣香气。", chefTip: "醋要在冲热高汤前加入，热气将酸香与油辣瞬间激发出来！" },
      { title: "挑入鲜粉顶层铺满酥脆料头", instruction: "将烫软红薯粉挑入碗中，淋肉酱沫，铺花生米、芽菜、香菜葱花，筷子一拌大口嗦粉！", chefTip: "酸得开胃，辣得过瘾，粉条哧溜滑入口腔，酣畅淋漓！" }
    ]
  },

  "广式传统陈皮红豆沙": {
    subtitle: "港粤经典传统养生糖水，新会老陈皮慢熬红豆起绵绵细沙，清润化痰甜而不腻",
    flavor: ["陈皮果香", "沙糯清润甘甜"],
    cookingMethod: "砂锅老火慢煨",
    main: [
      { name: "精选优质小红豆", amount: 200, unit: "克 (清水浸泡3小时)" },
      { name: "正宗广东新会老陈皮", amount: 1, unit: "大瓣 (刮去白色内囊苦味)" }
    ],
    sec: [
      { name: "百合干与莲子", amount: 30, unit: "克 (洗净去芯)" }
    ],
    sea: [
      { name: "老黄冰糖", amountText: "40 克 (清润甘甜上色红润)", baseAmount: 40, unit: "克" },
      { name: "纯净水", amountText: "1200 ml", baseAmount: 1200, unit: "ml" }
    ],
    steps: [
      { title: "陈皮温水泡软刮去白囊", instruction: "老陈皮温水泡发10分钟，用小刀轻轻刮净内侧白色橘络。", chefTip: "刮净白囊是陈皮汤甘甜不苦涩的绝招！" },
      { title: "红豆与陈皮莲子大火煮沸转慢熬", instruction: "砂锅倒水倒入红豆陈皮莲子大火烧开，转中小火慢熬45分钟至红豆爆裂开花。", chefTip: "砂锅导热温和，红豆更易熬出天然沙沙的细腻口感。" },
      { title: "勺底轻压起沙加冰糖融化", instruction: "用打蛋器或勺底轻轻顺锅壁碾压部分红豆出沙，加入黄冰糖继续小火搅拌5分钟融化关火。", chefTip: "陈皮芳香醇厚，豆沙如丝绒般滑入咽喉，冷热皆宜！" }
    ]
  },

  "桃胶皂角米炖雪燕": {
    subtitle: "滋润养颜平民燕窝糖水，天然桃胶皂角米晶莹剔透胶质拉丝，清甜爽口润燥滋补",
    flavor: ["晶莹拉丝", "胶质满满清润甘甜"],
    cookingMethod: "隔水炖煮",
    main: [
      { name: "天然野生桃花泪桃胶", amount: 15, unit: "克 (冷水充分泡发12小时洗净杂质)" },
      { name: "优质单荚皂角米", amount: 15, unit: "克 (泡发10小时晶莹透明)" },
      { name: "天然拉丝雪燕", amount: 5, unit: "克 (单独冷水泡发15小时挑选去杂质)" }
    ],
    sec: [
      { name: "红枣去核切片", amount: 4, unit: "枚" },
      { name: "宁夏枸杞子", amount: 10, unit: "粒" },
      { name: "纯牛奶/椰浆", amount: 50, unit: "ml (按需淋入口感更滑)" }
    ],
    sea: [
      { name: "黄冰糖", amountText: "30 克", baseAmount: 30, unit: "克" }
    ],
    steps: [
      { title: "食材充分泡发挑拣干净", instruction: "桃胶、皂角米、雪燕分碗加大量清水泡发膨胀十余倍，仔细剔除微小树皮杂质备用。", chefTip: "雪燕一定单独泡发，充分吸水拉出长长银丝！" },
      { title: "桃胶皂角米红枣隔水炖透", instruction: "炖盅放入桃胶、皂角米、红枣片，加水漫过食材2cm，隔水慢炖35分钟至胶质黏稠拉丝。", chefTip: "皂角米富含天然植物水溶性膳食纤维，炖出浓稠胶质。" },
      { title: "最后10分钟下雪燕与冰糖", instruction: "放入雪燕和黄冰糖、枸杞，继续炖10分钟即可关火，可加入少许椰浆或牛奶增添浓郁奶香。", chefTip: "雪燕不可久炖！超过15分钟雪燕会融化成水，最后10分钟放入拉丝最完美！" }
    ]
  }
};

module.exports = { MEGA_DISHES };
