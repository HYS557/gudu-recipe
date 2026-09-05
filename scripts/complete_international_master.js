// scripts/complete_international_master.js
// 国际料理与特色大菜极精细大厨级配方库

const INTERNATIONAL_MASTER = {
  "西班牙海鲜饭(Paella)": {
    subtitle: "瓦伦西亚世界名饭，吸饱海鲜浓汁的金黄米粒微带锅巴，鲜虾、青口贝、鱿鱼丰润交融，西班牙辣肠提香",
    flavor: ["藏红花清香", "海鲜浓郁鲜甜", "焦香底壳锅巴"],
    cookingMethod: "浅底平底锅慢煨微焦",
    main: [
      { name: "西班牙吸汁短粒米(Bomba或优质丝苗米)", amount: 250, unit: "克 (免淘洗直接炒香吸汁)" },
      { name: "活海白虾/黑虎虾", amount: 8, unit: "只 (开背去虾线，留头提鲜)" },
      { name: "鲜活青口贝/文蛤", amount: 8, unit: "个 (刷净外壳去足丝)" },
      { name: "鲜嫩鱿鱼圈", amount: 120, unit: "克 (洗净切圈)" }
    ],
    sec: [
      { name: "西班牙风干辣肠(Chorizo)/鸡腿肉丁", amount: 80, unit: "克 (正统提香增鲜辅料，煸出红油芳香)" },
      { name: "红甜椒丁与洋葱碎", amount: 80, unit: "克 (意式西式料理蔬菜底)" },
      { name: "成熟红番茄", amount: 100, unit: "克 (擦成新鲜番茄泥)" },
      { name: "甜青豆", amount: 30, unit: "克" },
      { name: "新鲜黄柠檬", amount: 1, unit: "个 (切四瓣，吃时挤汁增鲜解腻)" }
    ],
    sea: [
      { name: "西班牙藏红花(Saffron)", amountText: "一小撮 (约0.3克，温水或热高汤浸泡出金黄色)", baseAmount: 0.3, unit: "克" },
      { name: "西班牙甜椒粉(Pimentón)", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "特级初榨橄榄油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "干白葡萄酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "自制浓郁海鲜鲜高汤", amountText: "600 ml (虾头虾壳煎香熬出的高汤)", baseAmount: 600, unit: "ml" },
      { name: "海盐与现磨黑胡椒", amountText: "适量", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      {
        title: "煸炒海鲜与香肠激发出底油",
        instruction: "平底双耳大浅锅烧热倒入橄榄油，下大虾、鱿鱼两面各煎1分钟至微焦变色盛出；锅底留油下西班牙风干辣肠丁和洋葱碎、甜椒丁炒至软烂泛出天然香气红油。",
        chefTip: "海鲜千万不要煎太老，八成熟先捞出，最后再铺回饭上，才能保持极脆嫩多汁！"
      },
      {
        title: "炒香生米充分吸饱番茄与白酒",
        instruction: "倒入擦好的番茄泥翻炒出浓郁沙感，倒入西班牙甜椒粉炒匀，倒入干大米翻炒2分钟，使每一粒米都均匀裹上红亮油脂，烹入白葡萄酒大火蒸发酒精挥发出醇香。",
        chefTip: "米粒先下锅用油脂翻炒包裹，是煮出粒粒分明、吸收高汤而不糊烂的关键秘诀！"
      },
      {
        title: "注入藏红花高汤铺排海鲜慢煨",
        instruction: "注入浸泡了藏红花的沸腾海鲜高汤，调入海盐黑胡椒，轻轻平铺米粒（此后切勿频繁翻动米饭！）。大火煮沸5分钟转中小火慢煨12分钟，将煎好的大虾、鱿鱼圈、青口贝和青豆美观铺于饭面。",
        chefTip: "加汤后切忌搅拌！西班牙海鲜饭讲究米粒平展自然吸水，搅拌会释放过多淀粉导致发黏。"
      },
      {
        title: "大火烘出焦香Socarrat锅巴",
        instruction: "最后转大火加热60秒，听到锅底发出轻微噼啪声且闻到焦香味立即离火，盖上铝箔纸或干净口布静置5分钟让水汽自然回落，四周饰以黄柠檬角即可上桌！",
        chefTip: "底部那层金黄微焦、香脆咔嚓的锅巴（Socarrat）是正统西班牙海鲜饭的至高精髓！"
      }
    ]
  },

  "传统意大利肉酱面(Bolognese)": {
    subtitle: "博洛尼亚世纪名作，三宝蔬菜底慢熬浓郁红酒牛肉肉酱，紧紧裹覆筋道意面，撒满现磨帕玛森干酪",
    flavor: ["番茄酸甜浓郁", "牛肉醇香多汁", "意式香草与干酪复合香"],
    cookingMethod: "慢熬肉酱配意面热拌",
    main: [
      { name: "传统意大利长面(Spaghetti No.5)", amount: 200, unit: "克 (耐煮有嚼劲)" },
      { name: "优质牛绞肉与猪绞肉(8:2比例)", amount: 250, unit: "克 (粗绞带油脂，肉香更醇)" }
    ],
    sec: [
      { name: "意大利去皮整番茄罐头/成熟红番茄", amount: 200, unit: "克 (手工捏碎)" },
      { name: "洋葱碎、胡萝卜碎、西芹碎(Soffritto底料)", amount: 100, unit: "克 (各约30克，切极细碎)" },
      { name: "紫皮大蒜碎", amount: 15, unit: "克" },
      { name: "现磨帕玛森干酪粉(Parmigiano-Reggiano)", amount: 25, unit: "克 (最后撒面增厚奶香)" },
      { name: "新鲜罗勒嫩叶", amount: 6, unit: "片" }
    ],
    sea: [
      { name: "特级初榨橄榄油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "干红葡萄酒", amountText: "4 瓷汤勺 (博洛尼亚肉酱醇香灵魂)", baseAmount: 4, unit: "勺" },
      { name: "意式番茄膏(Tomato Paste)", amountText: "1.5 瓷汤勺 (增色增浓)", baseAmount: 1.5, unit: "勺" },
      { name: "全脂纯牛奶", amountText: "50 ml (意式传统软化肉质秘方)", baseAmount: 50, unit: "ml" },
      { name: "香叶(月桂叶)", amountText: "1 片", baseAmount: 1, unit: "片" },
      { name: "海盐与现磨黑胡椒", amountText: "适量", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      {
        title: "小火煸炒意式Soffritto蔬菜底",
        instruction: "厚底深平底锅倒入橄榄油烧至微热，下洋葱碎、胡萝卜碎、西芹碎和小蒜末，用极小火慢炒8分钟至蔬菜完全软烂透明、释放出天然清甜。",
        chefTip: "洋葱西芹胡萝卜是正统意式肉酱的基石蔬菜底，小火慢煸才能产生复合甘甜！"
      },
      {
        title: "大火下肉糜煸炒出油脂与焦香",
        instruction: "转中大火倒入牛猪混合绞肉，用木勺快速压散，充分煸炒至水分收干、肉粒泛出金黄焦香油脂，烹入干红葡萄酒大火翻炒至酒气完全挥发。",
        chefTip: "红酒必须完全挥发收汁，只保留葡萄果香与酒酸，去腥增香效果绝佳！"
      },
      {
        title: "注入牛奶与番茄慢火炖熬",
        instruction: "倒入纯牛奶翻炒至肉末吸收柔润，加入番茄膏与捏碎的去皮番茄罐头、月桂叶，大火煮沸后盖上小火微沸慢熬30分钟至酱汁浓稠发亮，加盐黑胡椒调味。",
        chefTip: "传统博洛尼亚配方加入少许全脂牛奶，能中和番茄尖锐酸度并使肉质极为细嫩！"
      },
      {
        title: "煮面与锅中乳化裹酱出盘",
        instruction: "大锅水沸加适量海盐，下意面煮8分钟至内芯微有硬度（Al Dente），捞出直接投入肉酱锅中，加入2勺煮面水大火翻炒30秒乳化挂汁，装盘撒现磨帕玛森干酪与罗勒叶！",
        chefTip: "千万不要把面捞到盘子里再浇酱！面条必须和肉酱在锅里乳化翻滚，酱汁才能完全包裹面体！"
      }
    ]
  },

  "西班牙蒜香橄榄油虾(Gambas al Ajillo)": {
    subtitle: "西班牙Tapas下酒之王，滚烫橄榄油中蒜片金黄焦脆，虾仁鲜甜脆弹，法棍蘸满浓香蒜油令人欲罢不能",
    flavor: ["浓郁蒜香", "橄榄油果香", "微辣鲜甜"],
    cookingMethod: "陶锅热油浸炸",
    main: [
      { name: "新鲜海白虾仁/黑虎虾仁", amount: 300, unit: "克 (开背吸干表面水分)" }
    ],
    sec: [
      { name: "紫皮大蒜", amount: 1, unit: "整头 约40克，切薄厚均匀蒜片" },
      { name: "干红朝天椒碎", amount: 3, unit: "根 (切碎圈)" },
      { name: "新鲜欧芹碎(Parsley)", amount: 10, unit: "克 (切细末)" },
      { name: "法式法棍面包", amount: 4, unit: "厚片 (烤至香脆配餐)" }
    ],
    sea: [
      { name: "优质特级初榨橄榄油", amountText: "100 ml (足量浸润)", baseAmount: 100, unit: "ml" },
      { name: "干白葡萄酒", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "精制海盐与现磨黑胡椒", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      {
        title: "冷油下蒜片极小火温润浸香",
        instruction: "西班牙陶锅或厚底小平底锅倒入足量初榨橄榄油，冷油直接下蒜片和干辣椒碎，开极小火慢慢升温，让大蒜香气完全渗入橄榄油中，直到蒜片边缘微微泛浅金黄。",
        chefTip: "蒜片绝不能大火炸糊！冷油慢浸才能逼出大蒜的甜香与橄榄油的果香！"
      },
      {
        title: "投入虾仁旺火急烹锁住鲜嫩",
        instruction: "转中大火油温升起，立即滑入吸干水分的虾仁，平铺翻动烹入白葡萄酒与海盐，加热约90秒至虾身完全蜷曲变红、肉质弹牙变白。",
        chefTip: "虾仁下锅前务必用厨房纸吸得极干，避免油溅并保持脆爽弹牙！"
      },
      {
        title: "离火撒欧芹沸油直接上桌",
        instruction: "关火撒入新鲜欧芹碎与黑胡椒，用余温继续翻滚10秒即可连锅端上餐桌，趁热用酥脆法棍大口蘸取锅底金黄蒜香橄榄油享用！",
        chefTip: "这道菜的灵魂不仅是虾，那浸透了虾鲜与蒜甜的滚烫初榨橄榄油，蘸法棍堪称绝味！"
      }
    ]
  },

  "泰式冬阴功海鲜大虾汤": {
    subtitle: "世界十大名汤之冠，香茅、南姜、柠檬叶与浓椰浆完美交织，大虾鲜甜爆汁，酸辣醒胃回甘生津",
    flavor: ["酸辣浓醇", "香茅南姜复合草本香", "椰浆丝滑乳香"],
    cookingMethod: "慢熬海鲜汤",
    main: [
      { name: "鲜活大罗氏虾/黑虎虾", amount: 8, unit: "只 (剪须开背，虾头虾膏留用)" },
      { name: "鲜活花甲/白贝", amount: 200, unit: "克 (吐沙洗净)" },
      { name: "鲜鱿鱼圈", amount: 100, unit: "克" }
    ],
    sec: [
      { name: "新鲜香茅(柠檬草)", amount: 3, unit: "根 (拍散切斜段)" },
      { name: "新鲜泰国南姜", amount: 30, unit: "克 (切薄片)" },
      { name: "新鲜泰国柠檬叶(马蜂橙叶)", amount: 6, unit: "片 (手撕去中脉撕碎)" },
      { name: "新鲜草菇/口蘑", amount: 100, unit: "克 (对半切开)" },
      { name: "新鲜小红朝天椒", amount: 4, unit: "根 (轻拍微裂)" },
      { name: "新鲜青柠", amount: 2, unit: "个 (挤出新鲜青柠汁)" }
    ],
    sea: [
      { name: "正宗泰国冬阴功辣酱", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "泰国纯正浓椰浆", amountText: "80 ml", baseAmount: 80, unit: "ml" },
      { name: "正宗泰国鱼露", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "泰国棕榈糖/白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯净水/骨汤", amountText: "800 ml", baseAmount: 800, unit: "ml" }
    ],
    steps: [
      {
        title: "热油煎炒虾头熬出天然红亮虾油",
        instruction: "锅内下少许油，下虾头中火慢慢翻炒按压，炒出浓郁红亮虾油，注入800ml沸水煮沸成天然鲜美高汤底。",
        chefTip: "虾头虾膏是冬阴功红润汤色与极致鲜甜的源头，先炒虾油汤味立刻升华！"
      },
      {
        title: "下三剑客香料释放草本芬芳",
        instruction: "加入香茅段、南姜片、手撕柠檬叶、小米辣和草菇，转中火滚煮5分钟，让异域草本植物精油充分融入汤中。",
        chefTip: "柠檬叶一定要用手撕碎并去掉中间粗叶脉，香气才会瞬间爆发！"
      },
      {
        title: "融化冬阴功酱并滑入生猛海鲜",
        instruction: "调入冬阴功酱、鱼露和少许白糖拌匀至汤体红亮诱人，下入大虾身、花甲贝和鱿鱼圈大火煮2分钟至贝壳张开、虾身转红。",
        chefTip: "海鲜极易熟，沸汤下锅煮2分钟即可关火，保持虾肉爽脆弹牙！"
      },
      {
        title: "离火淋入新鲜青柠汁与椰浆",
        instruction: "关火！最后淋入纯浓椰浆与新鲜现挤青柠汁拌匀，撒新鲜香菜叶即可盛碗享用！",
        chefTip: "青柠汁必须关火离火后再挤！高温久煮会使青柠发苦变涩破坏清香！"
      }
    ]
  },

  "泰式打抛猪肉碎拌饭": {
    subtitle: "曼谷街头超人气下饭神菜，脆香肉碎与九层塔打抛叶爆炒，酱香鲜辣微甜，配一颗金黄流心脆边煎蛋",
    flavor: ["香辣浓烈", "罗勒芳香", "焦脆金黄"],
    cookingMethod: "猛火热爆配盖饭",
    main: [
      { name: "新鲜猪梅花肉/前腿肉", amount: 250, unit: "克 (粗斩成有颗粒感肉碎)" },
      { name: "泰国香米饭", amount: 1, unit: "大碗 (刚出锅热腾腾米饭)" }
    ],
    sec: [
      { name: "新鲜打抛叶/九层塔罗勒", amount: 30, unit: "克 (新鲜嫩叶，洗净沥干)" },
      { name: "新鲜长豇豆/四季豆", amount: 60, unit: "克 (切小颗粒，增添清脆口感)" },
      { name: "红绿小米辣与大蒜瓣", amount: 30, unit: "克 (石臼捣碎成香辛料碎)" },
      { name: "土鸡蛋", amount: 1, unit: "个 (宽油煎炸出金黄脆边流心蛋)" }
    ],
    sea: [
      { name: "泰国鱼露", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "蚝油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "泰国老抽/黑酱油", amountText: "半茶匙 (上色焦香)", baseAmount: 0.5, unit: "茶匙" },
      { name: "白砂糖", amountText: "半茶匙 (中和辣度提鲜)", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯植物油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      {
        title: "捣碎蒜辣并煎炸金黄流心脆边蛋",
        instruction: "蒜瓣和小米辣放入石臼捣碎；锅内热宽油，打入鸡蛋大火煎炸至蛋白边缘金黄焦脆、蛋黄依然溏心流汁，盛出待用。",
        chefTip: "泰国大排档标准是脆边蛋（Khai Dao），蛋白焦香香脆，蛋黄拌饭绝配！"
      },
      {
        title: "爆香蒜辣碎猛火煸炒肉末与豆角",
        instruction: "锅留底油下蒜辣碎大火爆出呛鼻浓香，倒入肉末大火快速划散翻炒至油脂渗出、肉粒微焦泛白，加入豆角碎翻炒30秒。",
        chefTip: "猪肉不要买现成泥状肉馅，自己切成小肉碎才会有极佳的颗粒肉汁嚼劲！"
      },
      {
        title: "调入鱼露蚝油并投入打抛叶出锅",
        instruction: "调入鱼露、蚝油、黑酱油和白糖颠锅翻炒均匀裹上浓郁酱色，关火立即投入九层塔打抛叶，利用余热翻炒10秒盛盖于热香米饭上，扣上煎蛋！",
        chefTip: "打抛叶切忌久炒！关火用余温翻拌变软即可，这样才能锁住浓烈特殊的精油芳香！"
      }
    ]
  },

  "经典泰式炒河粉(Pad Thai)": {
    subtitle: "泰国国宝级名面，米粉Q弹爽滑吸收罗望子酸甜酱汁，大虾金黄，豆干、虾米、豆芽与烤花生碎口感极丰富",
    flavor: ["酸甜爽口", "花生香脆", "虾香浓郁"],
    cookingMethod: "猛火快炒",
    main: [
      { name: "泰国干米粉/特制宽河粉", amount: 150, unit: "克 (温水浸泡软透沥干)" },
      { name: "鲜活海白虾", amount: 6, unit: "只 (开背去壳留尾)" }
    ],
    sec: [
      { name: "老豆腐/五香豆干丁", amount: 50, unit: "克 (切细条煎香)" },
      { name: "新鲜绿绿豆芽", amount: 80, unit: "克" },
      { name: "新鲜青韭菜段", amount: 30, unit: "克" },
      { name: "红葱头与蒜末", amount: 25, unit: "克" },
      { name: "新鲜鸡蛋", amount: 1, unit: "个" },
      { name: "现烤香脆花生碎", amount: 20, unit: "克" },
      { name: "新鲜青柠檬", amount: 1, unit: "瓣" }
    ],
    sea: [
      { name: "正宗罗望子酱(酸角膏)", amountText: "2 瓷汤勺 (天然柔和酸味灵魂)", baseAmount: 2, unit: "勺" },
      { name: "椰糖/棕榈糖", amountText: "1.5 瓷汤勺 (温润清甜)", baseAmount: 1.5, unit: "勺" },
      { name: "泰国鱼露", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "食用油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      {
        title: "小锅调制正统Pad Thai酸甜酱汁",
        instruction: "小锅中加入罗望子酸角膏、椰糖、鱼露和2勺清水微火熬煮至糖融化浓稠，试味酸甜咸平衡即可离火。",
        chefTip: "正统Pad Thai的酸味来自于天然罗望子，比白醋或柠檬汁更为醇厚果香！"
      },
      {
        title: "爆香红葱头虾仁与煎香豆腐丁",
        instruction: "大火热锅滑油，下红葱头碎和虾仁煎熟盛出，下豆干丁煎至四周金黄，倒入打散的鸡蛋快速划炒成碎蛋块推至锅边。",
        chefTip: "鸡蛋推在锅边让蛋白蛋黄微焦，能为米粉增添天然蛋香！"
      },
      {
        title: "下河粉泼入酸甜酱汁大火颠翻",
        instruction: "下泡软的米粉倒入调好的罗望子酱汁大火快速翻炒，让米粉均匀吸收红润酸甜汁并炒至软糯弹牙，倒入虾仁、豆芽、韭菜大火颠锅15秒。",
        chefTip: "米粉温水泡软即可，不要水煮！靠锅中酱汁的高温汽化将米粉焖熟最Q弹入味！"
      },
      {
        title: "装盘配花生碎与青柠角享用",
        instruction: "出锅装盘，在盘边码上现捣香脆花生碎、新鲜生绿豆芽与青柠角，吃前挤入青柠汁拌匀！",
        chefTip: "花生碎与鲜脆豆芽增添了绝妙的酥脆层次，与酸甜Q滑河粉相映成趣！"
      }
    ]
  },

  "菠萝海鲜炒饭": {
    subtitle: "热带海岛风情盛宴，金黄菠萝肉与咖喱香米炒得粒粒分明，鲜虾仁、腰果与肉松铺展，酸甜开胃香气扑鼻",
    flavor: ["咖喱果香", "酸甜脆爽", "鲜美松软"],
    cookingMethod: "大火干香炒饭",
    main: [
      { name: "隔夜冷藏泰国茉莉香米饭", amount: 1, unit: "大碗 约300克 (粒粒分明抓松)" },
      { name: "鲜活大虾仁与鲜鱿鱼丁", amount: 120, unit: "克 (焯水过凉沥干)" }
    ],
    sec: [
      { name: "成熟新鲜甜菠萝肉/凤梨", amount: 150, unit: "克 (切小丁，留菠萝壳做盛器)" },
      { name: "香脆原味腰果仁", amount: 30, unit: "克 (小火烘香)" },
      { name: "优质金黄海苔肉松", amount: 20, unit: "克" },
      { name: "青红甜椒丁与洋葱丁", amount: 60, unit: "克" },
      { name: "新鲜土鸡蛋", amount: 2, unit: "个 (打散)" }
    ],
    sea: [
      { name: "特级黄咖喱粉", amountText: "1 茶匙 (金黄底色与异域香气)", baseAmount: 1, unit: "茶匙" },
      { name: "泰国鱼露", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "生抽酱油", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯植物油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      {
        title: "菠萝开壳取肉与海鲜滑油",
        instruction: "菠萝横切三分之一掏出果肉切丁，菠萝壳烤箱预热烘干多余水分做盛器；虾仁鱿鱼快速滑油变色盛出。",
        chefTip: "菠萝肉最好用淡盐水稍稍浸泡去涩，炒出来的果味更加清甜爽脆！"
      },
      {
        title: "金黄蛋液炒香碎块下入香米",
        instruction: "热锅倒油倒入蛋液快速划炒成碎蛋金花，倒入抓散的冷米饭大火颠锅翻炒3分钟，炒至米粒在锅中欢快跳动。",
        chefTip: "必须用隔夜冷饭并提前戴手套把米粒捏松，大火才能炒出每一粒米都裹着蛋香的黄金炒饭！"
      },
      {
        title: "撒入黄咖喱粉与鱼露爆炒增色",
        instruction: "撒入黄咖喱粉、鱼露和生抽，大火快速颠翻使米饭均匀裹上璀璨的金黄咖喱色，倒入洋葱、甜椒丁和海鲜丁翻炒均匀。",
        chefTip: "咖喱粉通过热锅颠炒，香料中的脂溶性香味才能完全被米饭吃透！"
      },
      {
        title: "投入菠萝肉与腰果装壳出盘",
        instruction: "最后投入菠萝丁大火翻炒15秒立刻离火，盛入烤好的菠萝壳内，表面铺上香脆腰果与厚厚一层海苔肉松即可上桌！",
        chefTip: "菠萝肉一定要最后离火前放！翻炒时间过长会出水弄湿炒饭影响干爽口感。"
      }
    ]
  },

  "日式寿喜烧牛肉锅": {
    subtitle: "东京传统风物诗，雪花霜降牛肉在牛油煎香后倒入秘制割下甘醇酱汁，裹上鲜生食鸡蛋液柔滑甜美至极",
    flavor: ["甜咸浓醇", "牛油焦香", "蛋液顺滑温润"],
    cookingMethod: "铸铁浅锅煎煮",
    main: [
      { name: "优质雪花肥牛片/安格斯牛上脑", amount: 300, unit: "克 (薄切大片雪花纹理)" },
      { name: "日式可生食无菌鲜鸡蛋", amount: 2, unit: "个 (打入小碗轻轻搅散三下做蘸料)" }
    ],
    sec: [
      { name: "老豆腐/烤豆腐", amount: 150, unit: "克 (平底锅两面煎出焦斑)" },
      { name: "新鲜大葱/京葱", amount: 1, unit: "根 (斜切大厚段)" },
      { name: "新鲜香菇与金针菇", amount: 100, unit: "克 (香菇顶打十字花刀)" },
      { name: "娃娃菜/白菜叶", amount: 150, unit: "克" },
      { name: "魔芋结", amount: 6, unit: "个" },
      { name: "茼蒿菜(春菊)", amount: 50, unit: "克" }
    ],
    sea: [
      { name: "日式清酒", amountText: "50 ml", baseAmount: 50, unit: "ml" },
      { name: "日式味醂(Mirin)", amountText: "50 ml (自然甜糯光泽)", baseAmount: 50, unit: "ml" },
      { name: "日式浓口酱油", amountText: "50 ml", baseAmount: 50, unit: "ml" },
      { name: "白砂糖/三温糖", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "牛油块", amountText: "1 小块 (润锅起香极品)", baseAmount: 1, unit: "块" }
    ],
    steps: [
      {
        title: "牛油润铁锅爆香大葱煎牛肉",
        instruction: "铸铁平底锅加热，放入一小块牛油在锅底涂抹融化，下大葱段煎出微焦葱香，平铺入大片牛肉煎至八成熟变色。",
        chefTip: "关东先煮汤，关西先煎肉。关西风先用牛油煎肉撒糖，肉香与焦糖香浓烈得多！"
      },
      {
        title: "烹入割下酱汁调和咸甜底蕴",
        instruction: "在煎好的牛肉上淋入清酒、味醂、酱油和白糖调和的寿喜烧秘制酱汁，滚沸10秒，趁热先夹出第一片牛肉蘸蛋液品尝！",
        chefTip: "第一口牛肉在浓汁中瞬间吸味，裹上生蛋液温度降至适口，入口如丝绸般滑爽化渣！"
      },
      {
        title: "码入豆腐菌菇时蔬文火慢煨",
        instruction: "锅内按区域依次整齐码入煎豆腐、香菇、娃娃菜、魔芋结和茼蒿，盖盖中小火焖煮5分钟，蔬菜会渗出清甜水分与酱汁完美交融，随煮随吃！",
        chefTip: "魔芋丝含有碱性物质，尽量不要紧挨着牛肉煮，蔬菜自带的丰沛甜汁是最好的天然高汤！"
      }
    ]
  },

  "日式蒲烧鳗鱼饭": {
    subtitle: "江户前百年传承，活鳗烤至皮酥肉嫩油脂丰盈，层层刷上浓醇焦香蒲烧汁，铺在浸透酱汁的热米饭上，入口即化",
    flavor: ["甜咸酱香", "炭火焦香", "鳗鱼腴嫩肥美"],
    cookingMethod: "蒸烤刷汁配盖饭",
    main: [
      { name: "新鲜处理好的河鳗/深海活鳗鱼肉", amount: 1, unit: "条 约350克 (去骨开背)" },
      { name: "越光米/优质东北大米饭", amount: 1, unit: "大碗" }
    ],
    sec: [
      { name: "白芝麻", amount: 5, unit: "克 (烘香撒面)" },
      { name: "日式山椒粉", amount: 1, unit: "茶匙 (解腻点睛奇香)" },
      { name: "海苔细丝", amount: 5, unit: "克" }
    ],
    sea: [
      { name: "日式浓口酱油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "日式味醂", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "日式清酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "冰糖/麦芽糖", amountText: "1.5 瓷汤勺 (熬至浓稠起亮胶)", baseAmount: 1.5, unit: "勺" }
    ],
    steps: [
      {
        title: "小火熬制浓郁拉丝蒲烧鳗鱼汁",
        instruction: "小锅中倒入酱油、清酒、味醂与冰糖，小火慢熬8分钟至水分收浓、铲起能顺滑挂壁微拉丝，倒出待用。",
        chefTip: "熬蒲烧汁火候一定要小，浓缩出的胶质才能在高温下迅速结成琥珀色脆皮！"
      },
      {
        title: "先蒸后烤去除多余腥腻油脂",
        instruction: "鳗鱼切大段皮朝下放入蒸锅大火蒸8分钟让肉质松化多余油脂析出；放入烤箱200度先烤5分钟烤干表面水分。",
        chefTip: "关东烤鳗讲究先蒸后烤，蒸能去除土腥并使肉质极为柔嫩如豆腐！"
      },
      {
        title: "反复三次刷酱烘烤上色焦香",
        instruction: "取出鳗鱼双面刷上厚厚一层蒲烧酱，入烤箱烤3分钟；取出再次刷酱复烤，重复3次，直到鳗鱼表面泛起诱人琥珀焦香气泡。",
        chefTip: "多重反复刷酱，酱汁层层焦糖化渗透，才能烤出外皮酥糯、内里多汁的大师级口感！"
      },
      {
        title: "淋汁热米饭铺鳗撒山椒粉享用",
        instruction: "热米饭盛入碗中淋上一圈蒲烧酱汁，铺上整条金红油亮的蒲烧鳗鱼，撒熟白芝麻、海苔丝与少许山椒粉趁热享用！",
        chefTip: "山椒粉微带柑橘香与麻感，是品尝鳗鱼饭无可替代的解腻绝配！"
      }
    ]
  },

  "日式照烧鸡腿排": {
    subtitle: "外皮焦脆如薄纸，鸡肉多汁鲜嫩，浓郁照烧甜咸汁完美挂芡，家庭快手顶流硬菜",
    flavor: ["甜咸适口", "外脆里嫩", "照烧焦香"],
    cookingMethod: "平底锅香煎挂汁",
    main: [
      { name: "新鲜大鸡全腿", amount: 2, unit: "只 (去骨留皮展开，划刀断筋)" }
    ],
    sec: [
      { name: "老生姜片与蒜瓣", amount: 15, unit: "克" },
      { name: "熟白芝麻", amount: 5, unit: "克" },
      { name: "西兰花朵", amount: 4, unit: "朵 (焯水配盘)" }
    ],
    sea: [
      { name: "日式浓口酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "日式味醂", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "日式清酒/料酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白砂糖", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      {
        title: "断筋划刀并鸡皮朝下干煎出油",
        instruction: "去骨鸡腿肉在内侧肉厚处划几刀防止回缩；平底锅不放油，鸡皮朝下放入中小火慢煎5分钟，用铲子用力按压，逼出多余鸡油并使鸡皮酥脆金黄。",
        chefTip: "鸡肉自身油脂丰富，不放油直接干煎皮面，能把皮下脂肪完全逼出，外皮才能薄脆不腻！"
      },
      {
        title: "翻面煎透倒出多余油脂",
        instruction: "鸡皮金黄结壳后翻面再煎3分钟至鸡肉八成熟，倒出锅内多余油脂，用厨房纸擦干锅底。",
        chefTip: "倒掉多余鸡油，后续照烧汁才能纯净挂在肉排上，而不是油腻分离。"
      },
      {
        title: "倒入照烧汁大火收浓挂芡装盘",
        instruction: "倒入调匀的酱油、味醂、料酒与糖，大火煮沸收汁，不断把浓汁淋在鸡皮上，直到酱汁浓稠起大泡挂满肉排，盛出切块撒白芝麻即可！",
        chefTip: "收汁时必须频繁浇汁，让照烧糖分在鸡皮上瞬间亮起镜面光泽！"
      }
    ]
  },

  "经典黑椒菲力牛排": {
    subtitle: "西餐皇冠极品，菲力全牛最嫩部位，黄油迷迭香高温煎出深褐美拉德焦壳，内里粉嫩爆汁，黑椒汁浓醇辛香",
    flavor: ["外焦里嫩", "黑椒辛香", "奶香蒜香复合香"],
    cookingMethod: "厚底铸铁锅高温香煎",
    main: [
      { name: "安格斯谷饲原切菲力牛排(厚切3cm)", amount: 1, unit: "块 约220克 (常温回温30分钟)" }
    ],
    sec: [
      { name: "紫皮大蒜", amount: 4, unit: "瓣 (带皮压扁)" },
      { name: "新鲜迷迭香与百里香", amount: 2, unit: "枝" },
      { name: "优质动物黄油", amount: 25, unit: "克" },
      { name: "小番茄与芦笋", amount: 4, unit: "根 (牛排锅余油煎香)" }
    ],
    sea: [
      { name: "现磨大颗粒黑胡椒碎", amountText: "1 茶匙 (现磨香气最烈)", baseAmount: 1, unit: "茶匙" },
      { name: "天然海盐/喜马拉雅粉盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "特级初榨橄榄油/高烟点牛油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" }
    ],
    steps: [
      {
        title: "回温吸干水分与临下锅调味",
        instruction: "牛排提前从冰箱取出回温30分钟至室温，用厨房纸彻底吸干表面血水；下锅前1分钟两面均匀抹上橄榄油、撒足量海盐与现磨黑胡椒。",
        chefTip: "必须回温！冰凉的牛排下锅会导致锅温骤降无法形成焦壳，内生外糊！盐必须临下锅再撒，过早撒会脱水。"
      },
      {
        title: "高温炙烤锁住肉汁两面美拉德焦化",
        instruction: "厚底铸铁锅大火烧至冒青烟，放入牛排放手不要翻动，高温煎90秒结出深褐色焦壳，翻面同样煎90秒并封煎四周侧面。",
        chefTip: "必须烧到极高温！厚底铸铁锅的储热能瞬间锁住肉汁，产生诱人的美拉德焦香反应！"
      },
      {
        title: "黄油香草Arrosé淋油与静置醒肉",
        instruction: "转小火下黄油块、大蒜和迷迭香，黄油融化起坚果香气泡后斜锅用铁勺不断把滚烫黄油浇淋在牛排上约1分钟；盛出放在温热木板上静置静养5分钟后再切！",
        chefTip: "醒肉（Resting）是牛排成败的核心！出锅后静置5分钟，紧绷的肌肉纤维放松，肉汁重新均匀分布回肉体，切开绝不流血水，口口爆汁！"
      }
    ]
  },

  "韩式传统泡菜海鲜豆腐汤": {
    subtitle: "韩剧经典暖胃神汤，老泡菜炒出酸辣浓汁，配嫩滑豆腐、鲜虾花甲，汤头浓郁滚烫，一口暖透心窝",
    flavor: ["酸辣鲜美", "泡菜醇正", "豆腐滑嫩"],
    cookingMethod: "陶锅热炖",
    main: [
      { name: "传统绢豆腐/嫩豆腐", amount: 1, unit: "盒 约300克 (切厚大块)" },
      { name: "鲜活海虾与花甲", amount: 150, unit: "克 (洗净处理)" }
    ],
    sec: [
      { name: "正宗韩式老坛发酵辣白菜", amount: 150, unit: "克 (带汁切小段)" },
      { name: "五花肉薄片", amount: 50, unit: "克 (煸炒出天然油脂底香)" },
      { name: "西葫芦与洋葱片", amount: 80, unit: "克" },
      { name: "鲜青红线椒与大葱花", amount: 20, unit: "克" },
      { name: "土鸡蛋", amount: 1, unit: "个" }
    ],
    sea: [
      { name: "韩式粗辣椒粉", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "韩式大酱/海鲜酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "纯芝麻油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "淘米水/鲜鳀鱼昆布高汤", amountText: "500 ml", baseAmount: 500, unit: "ml" }
    ],
    steps: [
      {
        title: "芝麻油煸香五花肉与老泡菜",
        instruction: "石锅烧热倒芝麻油，下五花肉薄片煸炒出油，倒入老泡菜大火翻炒2分钟至泡菜酸香浓烈出红油，撒韩式辣椒粉炒香。",
        chefTip: "一定要用自然发酵微酸的老泡菜，用芝麻油充分炒透，汤底才会浓厚醇厚没有生酸感！"
      },
      {
        title: "注入淘米水与调味大火滚沸",
        instruction: "注入第二次沉淀的淘米水500ml，调入韩式大酱或生抽酱油大火煮沸，加入洋葱、西葫芦片中火煮3分钟。",
        chefTip: "淘米水含有微量淀粉，能让汤底更醇厚乳化，锁住海鲜与泡菜鲜味！"
      },
      {
        title: "滑入嫩豆腐与海鲜打入生蛋",
        instruction: "滑入大块嫩豆腐和鲜虾花甲，中小火炖煮3分钟至花甲完全开口，离火前磕入一枚生鸡蛋撒青红椒圈大葱，直接滚烫上桌！",
        chefTip: "嫩豆腐不要用勺子乱搅，大块完整滑入锅中，吃时伴着微融的蛋黄与热辣汤汁，滑嫩至极！"
      }
    ]
  },

  "泰式青木瓜沙拉(Som Tum)": {
    subtitle: "泰国东北依善风味灵魂，青木瓜丝爽脆冰凉，石臼捣入鱼露、青柠汁与鸟眼辣椒，酸甜鲜辣瞬间引爆味蕾",
    flavor: ["酸辣爽口", "清甜嘎嘣脆", "坚果香浓"],
    cookingMethod: "石臼捶捣凉拌",
    main: [
      { name: "新鲜青木瓜(未熟绿色硬木瓜)", amount: 1, unit: "个 约250克 (去皮擦粗丝冰镇)" }
    ],
    sec: [
      { name: "长豇豆段", amount: 40, unit: "克 (生切寸段，石臼微捣)" },
      { name: "圣女果/小番茄", amount: 6, unit: "个 (对半切开)" },
      { name: "现烤熟花生碎", amount: 25, unit: "克" },
      { name: "泰国干虾米", amount: 15, unit: "克 (温水泡发沥干)" },
      { name: "大蒜瓣与红色鸟眼椒", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "新鲜青柠檬汁", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "正宗泰国鱼露", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "泰国椰糖/棕榈糖", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" }
    ],
    steps: [
      {
        title: "青木瓜擦丝冰镇保持嘎嘣脆",
        instruction: "青木瓜削去绿皮，用刀尖或专用擦丝器擦成略带厚度的粗丝，放入加了冰块的冰水中浸泡10分钟后捞出甩干水分。",
        chefTip: "冰水浸泡是青木瓜丝保持长时间爽脆、咬下去咔嚓咔嚓作响的秘密！"
      },
      {
        title: "木臼先捣香料再捣调味汁",
        instruction: "大木臼中先放入大蒜、鸟眼椒轻轻捣碎出辣汁，加入泡发虾米和椰糖捣化，加入长豇豆轻捣，倒入鱼露和青柠汁搅拌化开。",
        chefTip: "泰国木臼（Krok）是靠捣压挤出食材本身的汁水，而不是用刀切碎，香气完全不同！"
      },
      {
        title: "加入木瓜丝与番茄轻捣拌匀",
        instruction: "倒入冰镇青木瓜丝和小番茄，一手用木杵轻捣，一手拿勺子由下往上翻拌约30秒让酱汁完全吃透，撒花生碎装盘！",
        chefTip: "捣木瓜丝动作要轻柔，使其稍稍变软吸汁即可，千万不要捣得太烂失去脆度！"
      }
    ]
  },

  "泰式芒果白糯米饭": {
    subtitle: "曼谷甜品皇冠，温热咸甜椰浆浸透弹糯白糯米，配整颗冰凉多汁水仙芒，撒金黄香脆炸绿豆仁，浓郁甘美",
    flavor: ["椰香浓郁", "咸甜丝滑", "芒果清甜"],
    cookingMethod: "蒸糯米拌热椰浆",
    main: [
      { name: "优质圆白糯米", amount: 200, unit: "克 (冷水浸泡4小时以上)" },
      { name: "成熟水仙芒/鹰嘴芒", amount: 1, unit: "个 (去皮切厚片冰镇)" }
    ],
    sec: [
      { name: "香脆去皮炸绿豆仁", amount: 10, unit: "克 (泰国传统撒面提脆)" },
      { name: "新鲜香兰叶", amount: 3, unit: "片 (打结蒸米增香)" }
    ],
    sea: [
      { name: "正宗泰国浓椰浆", amountText: "200 ml (分拌饭汁与淋面咸浓汁)", baseAmount: 200, unit: "ml" },
      { name: "白砂糖", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "食用盐", amountText: "1 茶匙 (咸味能极大激发椰奶与芒果甘甜)", baseAmount: 1, unit: "茶匙" },
      { name: "玉米淀粉", amountText: "半茶匙 (熬稠淋面汁)", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      {
        title: "香兰叶蒸熟Q弹晶莹糯米",
        instruction: "泡好的糯米沥干铺在蒸布上，放上打结的香兰叶，大火足汽蒸25分钟至糯米晶莹通透、软糯有嚼劲，盛入大碗趁热待用。",
        chefTip: "一定要趁糯米刚出锅滚烫时拌椰浆！米粒温度高才能充分把椰浆吃透吃饱！"
      },
      {
        title: "小火煮融甜椰浆拌入热糯米焖透",
        instruction: "小锅倒入150ml椰浆加2勺白糖和半茶匙盐，微火加热至糖融化关火；分次浇入热糯米饭中拌匀，盖上保鲜膜静置保温焖20分钟让米饭完全吸饱椰浆。",
        chefTip: "一开始拌入会显得椰浆很多像稀饭，不用担心，焖20分钟后米粒会完全吸收，变得饱满油亮！"
      },
      {
        title: "熬制咸浓淋面椰浆淋酱装盘",
        instruction: "剩余50ml椰浆加半茶匙盐和水淀粉小火微沸熬成浓稠挂勺的咸甜淋面酱；盘中扣入温热糯米饭，码上冰芒果片，淋上浓椰浆，撒脆绿豆仁！",
        chefTip: "正统泰式精髓在于那一口微咸的厚椰浆，咸中带甜能将芒果的鲜果香衬托到极致！"
      }
    ]
  },

  "意大利千层面(Lasagna)": {
    subtitle: "意式家庭烤箱巨著，一层筋道千层面、一层浓醇波隆那肉酱、一层顺滑贝夏梅尔白酱、一层拉丝马苏里拉，层层浓香",
    flavor: ["奶香四溢", "番茄肉香浓郁", "芝士金黄拉丝"],
    cookingMethod: "烤箱烘烤",
    main: [
      { name: "传统意大利千层面皮(波浪形)", amount: 8, unit: "张 (沸水煮6分钟断生捞出过冷水吸干)" },
      { name: "传统意大利自制波隆那肉酱", amount: 400, unit: "克" }
    ],
    sec: [
      { name: "自制贝夏梅尔白酱(Béchamel黄油面粉牛奶)", amount: 250, unit: "克" },
      { name: "马苏里拉芝士碎(Mozzarella)", amount: 150, unit: "克 (厚铺金黄拉丝)" },
      { name: "帕玛森干酪粉", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "特级初榨橄榄油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "肉豆蔻粉(Nutmeg)", amountText: "一小撮 (白酱灵魂香料)", baseAmount: 0.2, unit: "克" },
      { name: "黑胡椒碎与海盐", amountText: "适量", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      {
        title: "小火熬制经典Béchamel丝滑白酱",
        instruction: "小奶锅融化30克黄油，倒入30克面粉小火炒出坚果香味，分次缓缓注入250ml纯牛奶不断搅拌至顺滑浓稠，加入一小撮肉豆蔻粉和盐调味。",
        chefTip: "肉豆蔻粉是白酱的点睛之笔，带来温暖的木质香气与醇厚奶感！"
      },
      {
        title: "烤盘层层铺排面皮肉酱与芝士",
        instruction: "深烤盘底刷橄榄油，先抹一层白酱，铺一张面皮，铺厚厚一层牛肉肉酱，抹白酱撒芝士碎；如此重复铺叠4-5层，最顶层铺满马苏里拉芝士与帕玛森干酪粉。",
        chefTip: "底部一定要抹一层白酱垫底，防止底层面皮受热过干过硬！"
      },
      {
        title: "烤箱高温烘烤至金黄起焦泡",
        instruction: "烤箱预热200度，放入千层面烤22分钟，至表面芝士完全融化、泛起诱人的金黄微焦气泡，取出静置10分钟让结构稳定后再切块分盘！",
        chefTip: "刚出炉不要马上切，静置10分钟让奶酪和酱汁微冷凝固，切出来的切面层次才会立体分明、不松垮流淌！"
      }
    ]
  },

  "泰式黄咖喱炒蟹": {
    subtitle: "普吉岛海鲜餐厅头牌，肥美活肉蟹切块炸香，浸入金黄浓稠的黄咖喱蛋液滑蛋酱汁中，拌饭无敌美味",
    flavor: ["浓郁咖喱", "蟹肉清甜", "滑蛋柔嫩浓香"],
    cookingMethod: "过油大火滑炒",
    main: [
      { name: "新鲜活梭子蟹/肉蟹", amount: 2, unit: "只 约650克 (洗净去鳃去内脏，切4大块，切口拍干淀粉)" }
    ],
    sec: [
      { name: "新鲜鸡蛋", amount: 2, unit: "个 (打散)" },
      { name: "洋葱块与青红甜椒块", amount: 80, unit: "克" },
      { name: "新鲜香芹段与大葱段", amount: 30, unit: "克" },
      { name: "红小米辣圈", amount: 2, unit: "根" }
    ],
    sea: [
      { name: "泰国黄咖喱粉", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "正宗泰国辣椒膏(Chili Paste in Oil)", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "正宗浓椰浆", amountText: "100 ml", baseAmount: 100, unit: "ml" },
      { name: "泰国鱼露", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "纯植物油", amountText: "足量煎炸", baseAmount: 150, unit: "ml" }
    ],
    steps: [
      {
        title: "蟹块切口拍粉高油温锁住蟹膏",
        instruction: "蟹块切口处沾满生粉，入七成热油锅炸90秒至蟹壳鲜红、切口肉质金黄封壳，捞出控油。",
        chefTip: "拍生粉封口能锁住蟹肉水分和蟹黄，防止鲜味在炒制中流失！"
      },
      {
        title: "调制浓醇黄金咖喱蛋液酱",
        instruction: "大碗中打入鸡蛋、椰浆、黄咖喱粉、泰国辣椒膏、鱼露、白糖，用打蛋器充分搅打均匀成金黄丝滑的蛋液调味汁。",
        chefTip: "椰浆与鸡蛋的黄金配比是这道菜滑嫩如布丁、浓而不腻的精髓！"
      },
      {
        title: "爆香洋葱投入蟹块淋蛋液出锅",
        instruction: "锅留底油爆香洋葱、辣椒，投入炸好的蟹块颠炒，烹入2勺高汤盖焖1分钟；转中小火画圈淋入咖喱蛋液，快速轻推至蛋液呈半凝固嫩豆腐滑蛋状，撒芹菜关火装盘！",
        chefTip: "淋入蛋液后必须转中小火轻轻推动，切忌大火把蛋炒老！半熟滑嫩状态裹在蟹壳上最美味！"
      }
    ]
  },

  "日式亲子丼": {
    subtitle: "东京传统家庭暖心盖饭，鲜嫩鸡腿肉与清甜洋葱在柴鱼高汤中煨煮，滑入半凝固金黄蛋液，盖在热米饭上，甜咸多汁",
    flavor: ["甜咸鲜香", "蛋液嫩滑", "鸡肉多汁"],
    cookingMethod: "浅平底亲子锅焖煮",
    main: [
      { name: "新鲜鸡腿肉", amount: 200, unit: "克 (去骨去多余油脂，切一口大小块)" },
      { name: "新鲜土鸡蛋", amount: 2, unit: "个 (轻敲筷子粗略划破蛋黄，保留黄白分明)" },
      { name: "热米饭", amount: 1, unit: "大碗" }
    ],
    sec: [
      { name: "甜洋葱", amount: 0.5, unit: "个 约80克 (顺纹切细丝)" },
      { name: "海苔碎/三叶芹嫩叶", amount: 5, unit: "克 (出锅点缀)" }
    ],
    sea: [
      { name: "日式柴鱼昆布高汤(Dashi)", amountText: "80 ml", baseAmount: 80, unit: "ml" },
      { name: "日式浓口酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "日式味醂", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "白砂糖", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      {
        title: "平底锅下洋葱丝与柴鱼高汤慢煮",
        instruction: "小单柄平底锅倒入高汤、酱油、味醂与糖煮沸，平铺入洋葱丝中火煮2分钟至洋葱半透明变甜。",
        chefTip: "洋葱顺纹切丝不易煮烂，煮出天然甘甜是酱汁柔和的源泉！"
      },
      {
        title: "放入鸡腿肉块煮至刚刚变白断生",
        instruction: "将鸡肉块皮朝下均匀码在洋葱上，中小火加盖煮3分钟，翻面再煮1分钟至鸡肉全熟依然柔嫩多汁。",
        chefTip: "不要大火狂滚，文火煨熟的鸡肉纤维松软吸汁。"
      },
      {
        title: "分两次淋入蛋液造就绝妙双层口感",
        instruction: "先画圈淋入三分之二蛋液加盖焖15秒至底层微凝固；揭盖淋入剩余三分之一蛋液立刻关火！滑盖在热米饭上撒海苔丝！",
        chefTip: "分两次淋蛋是神仙操作！第一次蛋液定型成底，第二次蛋液保持生润流心，双重质感！"
      }
    ]
  }
};

module.exports = { INTERNATIONAL_MASTER };
