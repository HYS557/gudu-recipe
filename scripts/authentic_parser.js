// authentic_parser.js
// 针对 328 道菜品库中所有知名大菜、特色名吃与特殊命名的精确食材、辅料、调料与保姆级做法

const SPECIFIC_DISH_RECIPES = {
  // ================= 1. 江西菜系 =================
  "余干辣椒炒肉": {
    subtitle: "赣菜头牌代表，皮薄微皱的枫树辣焦香四溢，五花肉肥而不腻",
    flavor: ["鲜辣焦香", "油润回甘"],
    cookingMethod: "旺火生炒",
    main: [
      { name: "江西余干枫树辣/螺丝椒", amount: 250, unit: "克 (切斜块)", substitutes: ["线椒", "薄皮青椒"] },
      { name: "农家冷鲜带皮五花肉", amount: 250, unit: "克 (肥瘦切薄片)" }
    ],
    sec: [
      { name: "紫皮大蒜瓣", amount: 5, unit: "瓣 (切碎)" },
      { name: "老生姜片", amount: 10, unit: "克 (切丝)" },
      { name: "江西农家黑豆豉", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "纯猪油", amountText: "1 瓷汤勺 (煸炒增香)", baseAmount: 1, unit: "勺" },
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "老抽酱油", amountText: "半茶匙 (上色)", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "干锅慢煸辣椒出虎皮香气", instruction: "净锅不放油，直接下辣椒块和半茶匙盐，锅铲用力压炒至表皮起微虎皮皱斑盛出备用。", chefTip: "干锅煸辣椒能快速去除多余水气，锁住香辣爽脆。" },
      { title: "猪油煸五花肉出天然油脂", instruction: "锅下猪油，先下肥五花肉煸至微卷金黄，再下瘦肉片大火炒散，下豆豉和姜蒜爆出浓烈香气。", chefTip: "五花肉必须煸出油脂，肉香与猪油豆豉交融才最正宗。" },
      { title: "合锅大火颠翻收汁出锅", instruction: "倒入炒好的辣椒，调入生抽老抽和剩余盐，全程旺火翻炒1分钟紧紧裹汁出锅！", chefTip: "成菜不可有多余汤汁，干爽油润为佳！" }
    ]
  },
  "南昌瓦罐肉饼汤": {
    subtitle: "南昌慢煨经典，肉饼鲜嫩如凝脂，汤清澈透亮极为滋润",
    flavor: ["清鲜醇厚", "原汁原味"],
    cookingMethod: "隔水慢煨",
    main: [
      { name: "三肥七瘦鲜猪肉馅", amount: 200, unit: "克 (手工剁细肉茸)" },
      { name: "农家土鸡蛋", amount: 1, unit: "枚 (卧在肉饼中央)" }
    ],
    sec: [
      { name: "优质小干香菇", amount: 4, unit: "朵 (泡发切片)" },
      { name: "老姜丝与葱花", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "纯净水/高汤", amountText: "400 ml", baseAmount: 400, unit: "ml" },
      { name: "现磨白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "调制嫩滑肉饼底胚", instruction: "肉馅加葱姜水、生抽、盐、白胡椒粉顺向搅打起胶，团成1.5cm厚肉饼平铺瓦罐底部。", chefTip: "搅打时少量多次加入葱姜水，肉饼蒸后鲜嫩爆汁。" },
      { title: "磕入鸡蛋注入纯净水", instruction: "肉饼中间磕入一枚土鸡蛋，四周摆香菇片，沿边缘缓缓注入清水浸没肉饼。", chefTip: "轻缓倒水避免冲散肉饼。" },
      { title: "加盖隔水文火慢煨", instruction: "小火隔水慢煨1.5小时，出锅撒入小香葱碎与白胡椒粉即可享用！", chefTip: "密封慢蒸让蒸汽回流，汤体清澈甘醇。" }
    ]
  },
  "莲花血鸭": {
    subtitle: "萍乡莲花县传世名菜，鸭血与米酒融合红润滑糯，鸭肉碎香鲜辣入骨",
    flavor: ["鲜辣爽滑", "香浓入骨"],
    cookingMethod: "生炒烩血",
    main: [
      { name: "本地嫩麻鸭肉", amount: 450, unit: "克 (斩均匀小拇指大丁)" },
      { name: "鲜鸭血 (加少许米酒白醋溶和)", amount: 100, unit: "ml (防凝固成液状)" }
    ],
    sec: [
      { name: "鲜青红朝天椒", amount: 6, unit: "根 (切小段)" },
      { name: "鲜嫩仔姜丝", amount: 25, unit: "克" },
      { name: "大蒜瓣", amount: 6, unit: "瓣 (切粒)" }
    ],
    sea: [
      { name: "江西纯茶油", amountText: "2 瓷汤勺 (地道灵魂用油)", baseAmount: 2, unit: "勺" },
      { name: "客家水酒/黄酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "鸭丁精切与鲜鸭血调配", instruction: "麻鸭洗净沥干斩成小拇指大的小丁；新鲜鸭血盛入碗中加2勺米酒和少许盐搅拌均匀防凝固备用。", chefTip: "鸭块一定要切得小而均匀，才能在极短时间内爆炒入味。" },
      { title: "茶油热锅大火爆炒出骨香", instruction: "锅中烧热茶油，下鸭肉丁大火爆炒至水分收干表皮微卷焦黄，烹入米酒，下姜丝蒜末朝天椒大火爆出浓辣香气。", chefTip: "用本地茶油爆炒是莲花血鸭骨香浓郁的绝技。" },
      { title: "淋入鸭血迅速翻炒抱汁", instruction: "调小火淋入调好的红鸭血，迅速用锅铲不停翻炒，使每一颗鸭肉丁均匀裹上一层紫红油润的血浆芡汁，大火收干即成！", chefTip: "淋鸭血时火候要温和快速颠锅，让鸭血受热凝成顺滑薄壳包裹肉丁，绝不能炒老脱壳。" }
    ]
  },
  "井冈山豆皮炒肉": {
    subtitle: "井冈山天然有机烟笋豆皮，豆香浓郁有嚼劲，吸收肉香咸鲜适口",
    flavor: ["咸鲜微辣", "豆香醇厚"],
    cookingMethod: "家常快炒",
    main: [
      { name: "井冈山特产纯手工豆皮", amount: 200, unit: "克 (温水泡软切斜片)", substitutes: ["油豆腐皮", "腐竹"] },
      { name: "农家土猪五花肉", amount: 150, unit: "克 (切薄片)" }
    ],
    sec: [
      { name: "青蒜苗段", amount: 3, unit: "根 (切马蹄段)" },
      { name: "红线椒丝", amount: 2, unit: "根" },
      { name: "大蒜片", amount: 3, unit: "瓣" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "蚝油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯菜籽油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" }
    ],
    steps: [
      { title: "豆皮泡发改刀与五花肉切片", instruction: "豆皮温水泡软后切成条或菱形片；五花肉切薄片；青蒜苗洗净拍扁切斜段备齐。", chefTip: "豆皮不可泡过久，保持微弹韧性口感最佳。" },
      { title: "煸香五花肉与下豆皮吸油脂", instruction: "热锅少油下五花肉煸炒出油脂，下蒜片和红椒丝炒香，倒入豆皮大火翻炒，调入少许高汤或清水煨1分钟让豆皮吸饱肉汁。", chefTip: "豆皮极易吸收汤汁中的猪油肉香，成菜格外油润。" },
      { title: "调味收汁与投入青蒜苗出锅", instruction: "加入生抽、蚝油、盐快速翻炒均匀，最后撒入青蒜苗段大火颠锅翻炒10秒断生出锅！", chefTip: "蒜苗受热后香气浓郁，起锅前放能保持翠绿挺拔。" }
    ]
  },
  "家常南昌拌粉": {
    subtitle: "南昌街头早餐招牌，米粉爽滑Q弹，裹满香辣油泼辣子与蒜水",
    flavor: ["香辣爽滑", "蒜香浓郁"],
    cookingMethod: "沸水煮拌",
    main: [{ name: "江西早稻优质干米粉", amount: 200, unit: "克 (煮透无硬心)", substitutes: ["桂林干米粉", "手工湿米粉"] }],
    sec: [
      { name: "酥脆油炸花生米", amount: 30, unit: "克" },
      { name: "老坛酸辣萝卜干碎", amount: 25, unit: "克" },
      { name: "江西雪菜末/咸菜碎", amount: 20, unit: "克" },
      { name: "小香葱碎", amount: 15, unit: "克" },
      { name: "生蒜泥汁水", amount: 2, unit: "瓷汤勺" }
    ],
    sea: [
      { name: "南昌风味油泼辣子", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "老抽酱油", amountText: "半茶匙 (上色)", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯香小磨芝麻油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "现磨白胡椒粉", amountText: "半茶匙 (灵魂提鲜)", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用精盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "沸水大火煮粉与过温凉水", instruction: "水沸下干米粉中火煮8-10分钟至无硬芯，捞出过温凉水冲净浮浆彻底沥干入碗。", chefTip: "煮粉水一定要宽，过水去除米浆后米粉极弹牙。" },
      { title: "铺码经典小料配菜与大蒜水", instruction: "在粉表面铺上花生米、萝卜干丁、雪菜末、葱花，均匀淋入2勺大蒜水。", chefTip: "大蒜加温水化开调成蒜水，比干蒜末更易渗透每一根米粉。" },
      { title: "淋入酱汁红油双手高挑拌匀", instruction: "加生抽、老抽、白胡椒粉、香麻油和红亮油泼辣子，双手握筷高挑拌匀即食！", chefTip: "白胡椒粉与香油是南昌拌粉不可缺少的灵魂风味。" }
    ]
  },
  "南昌辣椒炒藕片": {
    subtitle: "南昌街头绝味辣炒，藕片透亮薄脆，鲜辣爆香镬气十足",
    flavor: ["香辣爽脆", "鲜咸回甘"],
    cookingMethod: "旺火爆炒",
    main: [{ name: "九孔粉脆鲜莲藕", amount: 350, unit: "克 (切0.3cm薄片浸白醋水)", substitutes: ["嫩藕尖", "脆藕"] }],
    sec: [
      { name: "鲜红小米椒与青线椒", amount: 4, unit: "根 (切斜圈)" },
      { name: "江西农家黑豆豉", amount: 15, unit: "克" },
      { name: "紫皮大蒜瓣", amount: 5, unit: "瓣 (切蒜末)" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "老抽酱油", amountText: "半茶匙 (上微色)", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "白砂糖", amountText: "半茶匙 (合味提鲜)", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯压榨菜籽油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "切薄片与浸泡酸醋水防氧化", instruction: "莲藕刮皮切0.3cm薄片，立即入加了白醋的清水抓洗泡出淀粉沥干；辣椒切斜圈，蒜切碎。", chefTip: "泡酸醋水既防氧化发黑，又使藕片炒出惊人脆度！" },
      { title: "猛火热油爆香豆豉与辣椒", instruction: "铁锅烧热下菜籽油，大火爆香黑豆豉、蒜末和青红辣椒圈，散发浓郁辣香味。", chefTip: "豆豉爆香动作要快，避免焦黑发苦。" },
      { title: "旺火颠炒与烹锅边水出锅", instruction: "倒入藕片全程大火快炒1.5分钟至断生，淋入生抽、老抽、盐、糖，沿锅边喷入1勺水激出锅气出锅！", chefTip: "全程不盖盖，旺火急炒保持爽脆多汁！" }
    ]
  },

  // ================= 2. 湖北菜特色 =================
  "洪湖排骨煨藕汤": {
    subtitle: "湖北荆楚第一名汤，洪湖九孔野藕粉糯拉丝，猪骨慢煨汤甜浓润",
    flavor: ["粉糯清甜", "浓郁醇香"],
    cookingMethod: "黑陶罐慢煨",
    main: [
      { name: "洪湖粉糯九孔老莲藕", amount: 500, unit: "克 (滚刀大块撒少许盐抓透)", substitutes: ["湖北野藕", "粉藕"] },
      { name: "新鲜猪大筒骨与小肋排", amount: 500, unit: "克 (斩大块焯水)" }
    ],
    sec: [
      { name: "老生姜块", amount: 35, unit: "克 (拍裂去皮)" },
      { name: "香葱花与枸杞", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "纯净水", amountText: "1800 ml", baseAmount: 1800, unit: "ml" },
      { name: "料酒", amountText: "1 瓷汤勺 (焯水用)", baseAmount: 1, unit: "勺" },
      { name: "现磨白胡椒粉", amountText: "1 茶匙 (去腥提鲜)", baseAmount: 1, unit: "茶匙" },
      { name: "食用精盐", amountText: "1.5 茶匙 (出锅前15分钟放)", baseAmount: 1.5, unit: "茶匙" }
    ],
    steps: [
      { title: "筒骨焯水去血沫与莲藕腌盐", instruction: "排骨筒骨冷水下锅焯水5分钟撇沫冲净；莲藕去皮切大滚刀块，撒半茶匙盐抓匀腌制10分钟出粉。", chefTip: "切好的莲藕撒少许盐抓透，煨出来更容易软烂粉糯，汤色微红清润！" },
      { title: "砂锅一次性加足热水大火烧沸", instruction: "砂锅或陶罐注入足量热水，放入焯好的骨头和拍姜，大火煮沸转文火慢炖1小时至汤体微白。", chefTip: "必须一次性加足开水，中途加水会冲淡肉汤原汁。" },
      { title: "下入粉藕文火慢煨出浓香", instruction: "倒入莲藕块，继续小火慢煨1.5小时至藕块粉糯绵密，出锅前调入精盐和白胡椒粉撒香葱！", chefTip: "煨足火候的洪湖藕咬下去拉丝粉糯，胡椒粉提鲜暖胃，喝一口满嘴留香！" }
    ]
  },
  "黄陂三鲜": {
    subtitle: "武汉黄陂传统非遗筵席头菜，鱼圆鲜嫩如雪、肉圆焦香酥软、肉糕滑弹如脂",
    flavor: ["鲜嫩软滑", "醇厚鲜美"],
    cookingMethod: "高汤烩煮",
    main: [
      { name: "纯手工新鲜雪白鱼圆", amount: 120, unit: "克 (草鱼肉手工打制)" },
      { name: "酥炸黄陂农家鲜肉圆", amount: 120, unit: "克" },
      { name: "传统黄陂蒸肉糕厚片", amount: 120, unit: "克 (金黄边缘滑嫩)" }
    ],
    sec: [
      { name: "水发黑木耳与黄花菜", amount: 30, unit: "克" },
      { name: "嫩青菜心/娃娃菜叶", amount: 50, unit: "克" },
      { name: "大蒜片与生姜丝", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "老母鸡浓鲜高汤", amountText: "450 ml", baseAmount: 450, unit: "ml" },
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "三鲜备料切配与时蔬焯水", instruction: "肉糕切厚片，鱼圆肉圆备齐；黑木耳黄花菜青菜心洗净焯水沥干备用。", chefTip: "三鲜兼备鱼香、肉香与糕香，缺一不可。" },
      { title: "高汤下锅慢火微沸煨炖", instruction: "锅中倒入老母鸡鲜高汤大火烧开，下姜丝蒜片，倒入鱼圆、肉圆和肉糕片转中小火慢烩5分钟入味。", chefTip: "微沸慢煨能让鱼丸和肉糕吸透高汤，且不易散烂破相。" },
      { title: "投入时蔬调和胡椒粉出锅", instruction: "加入焯好的木耳黄花菜和青菜，调入盐生抽和白胡椒粉，大火滚沸1分钟连汤倒入大汤钵中享用！", chefTip: "出锅撒少许白胡椒粉，汤清味厚，入口如脂！" }
    ]
  },
  "武汉经典热干面": {
    subtitle: "大武汉过早第一招牌，掸油碱面筋道弹牙，醇厚芝麻酱浓稠如流沙裹满面身",
    flavor: ["醇香浓稠", "麻香微辣"],
    cookingMethod: "掸水拌面",
    main: [{ name: "武汉特制高筋碱水粗圆面", amount: 200, unit: "克 (水煮八分熟掸油吹凉)" }],
    sec: [
      { name: "正宗纯芝麻酱(小磨香油化开)", amount: 3, unit: "瓷汤勺 (稠如流沙)" },
      { name: "老坛酸辣萝卜干碎", amount: 20, unit: "克" },
      { name: "爽口酸豆角碎", amount: 20, unit: "克" },
      { name: "小香葱花", amount: 15, unit: "克" },
      { name: "生蒜水", amount: 1, unit: "瓷汤勺" }
    ],
    sea: [
      { name: "秘制卤牛肉水/复合生抽", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "红亮油泼辣子", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "镇江老香醋", amountText: "半茶匙 (解腻和味)", baseAmount: 0.5, unit: "茶匙" },
      { name: "现磨白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "传统掸面与沸水回锅烫透", instruction: "碱水面提早煮八成熟捞出拌菜籽油用风扇吹凉成掸面；吃前放入沸水竹笊篱中快速烫热5-8秒沥干入碗。", chefTip: "“掸水不过十秒”，快速烫透热面才能保持面条内部骨力和劲道！" },
      { title: "芝麻酱香油调配成顺滑流沙", instruction: "纯芝麻酱少量多次加入小磨芝麻香油用力朝一个方向化开，调至用勺舀起呈丝滑瀑布流沙状。", chefTip: "切忌用水化麻酱！用纯香油化开才能保持极致浓郁香气且不水散。" },
      { title: "重料浇顶大筷光速挑拌", instruction: "面条趁滚烫浇上大勺芝麻酱、卤水、蒜水、辣萝卜丁、酸豆角、红油和葱花，双手握筷急速自底向上高挑拌匀！", chefTip: "吃热干面讲究“快拌快吃”，趁热让每一根金黄面条包裹厚厚一层浓香芝麻酱！" }
    ]
  },

  // ================= 3. 广东与港澳台特色 =================
  "广式白切鸡": {
    subtitle: "粤菜至高境界，清远三黄鸡皮脆肉滑骨带微血，沙姜葱油蘸料点石成金",
    flavor: ["皮脆肉嫩", "骨香鲜美"],
    cookingMethod: "浸熟冰镇",
    main: [{ name: "清远走地纯种三黄母鸡", amount: 1, unit: "只 (净重约1000克，毛孔细小皮金黄)" }],
    sec: [
      { name: "新鲜沙姜末", amount: 25, unit: "克 (地道蘸料灵魂)" },
      { name: "鲜小香葱白细末", amount: 30, unit: "克" },
      { name: "老生姜细蓉", amount: 20, unit: "克" },
      { name: "纯净冰水", amount: 1, unit: "大盆 (加大量冰块)" }
    ],
    sea: [
      { name: "纯正压榨花生油", amountText: "4 瓷汤勺 (烧滚泼沙姜葱茸)", baseAmount: 4, unit: "勺" },
      { name: "特级生抽酱油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "食用粗海盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "三提三浸与微沸文火慢浸熟", instruction: "大锅烧足量水加葱姜料酒微沸，拎鸡头将鸡身浸入热水烫5秒提离水面沥水，重复三次使内外温度一致；转最小火微沸浸煮25分钟至竹签扎腿无血水。", chefTip: "“三提三浸，慢火微浸”是广式白切鸡鸡皮紧致滑润、鸡肉鲜嫩多汁的秘诀！" },
      { title: "立刻捞出投入冰水冰镇爽脆", instruction: "煮熟鸡只迅速捞起，立即沉入准备好的大盆冰水中完全浸透冰镇15分钟，捞出沥干，表皮薄薄刷一层熟花生油斩件摆盘。", chefTip: "热胀冷缩瞬间让鸡皮与鸡肉之间结出一层晶莹剔透的皮冻胶质，皮脆爽弹！" },
      { title: "热油激泼沙姜葱茸调配蘸汁", instruction: "小碗放入沙姜碎、葱白末、姜蓉和盐，将纯花生油烧至青烟升腾滚烫浇淋激出浓香，调入生抽即可开蘸！", chefTip: "沙姜独特的浓郁芳香是广府白切鸡的绝对灵魂，去腥提鲜无人能及！" }
    ]
  },
  "广式腊味煲仔饭": {
    subtitle: "老广州街头烟火代表，丝苗米油润甘香，广式甜腊肠焦脆金黄锅巴嘎嘣脆",
    flavor: ["腊香扑鼻", "金黄焦脆"],
    cookingMethod: "传统砂锅焖焗",
    main: [
      { name: "广东优质丝苗米", amount: 200, unit: "克 (洗净浸泡30分钟沥干)" },
      { name: "广式皇上皇甜味特级腊肠", amount: 2, unit: "根 (切薄斜片)" },
      { name: "广式五花腊肉", amount: 50, unit: "克 (切薄大片)" }
    ],
    sec: [
      { name: "鲜嫩广东菜心", amount: 4, unit: "棵 (开水焯熟)" },
      { name: "农家土鸡蛋", amount: 1, unit: "枚" },
      { name: "小香葱碎", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "自调煲仔饭甜豉油(生抽+白糖+水+洋葱煮香)", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "纯猪油/花生油", amountText: "1 瓷汤勺 (沿砂锅壁淋入出脆锅巴)", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "丝苗米浸泡与砂锅煮饭起虾眼眼孔", instruction: "砂锅内壁刷薄油，倒入泡好的大米加水约高出米面1厘米，大火煮沸转中火，煮至米饭表面水分收干、出现一个个小孔眼。", chefTip: "米提前浸泡30分钟，煮出的米饭粒粒挺拔饱满、吸收腊油更透彻。" },
      { title: "均匀铺排腊味焖焗出油脂", instruction: "迅速在米饭表面平铺满切薄片的腊肠腊肉片，中间磕入1枚土鸡蛋，加盖转最小火顺着砂锅边沿慢慢转锅焖煮8分钟。", chefTip: "腊味切薄片铺在饭上，渗出的天然甘甜腊油会顺着小孔渗透整个米饭，饭粒油润透亮！" },
      { title: "沿锅边淋油起金黄锅巴淋甜豉油", instruction: "揭盖沿锅沿四周淋入1勺纯猪油，盖盖大火转圈烘烤2分钟烤出金黄锅巴，关火焖5分钟，开盖摆上菜心淋入甜豉油拌匀开吃！", chefTip: "转圈烘锅底让边缘受热均匀，翻开锅底是金黄整块、酥脆化渣的黄金焦脆锅巴！" }
    ]
  },
  "台式传统香菇卤肉饭": {
    subtitle: "台湾街头古早味之王，手切带皮五花肉胶质爆满，红葱酥浓香四溢拌饭神物",
    flavor: ["酱香浓郁", "软糯化渣胶质足"],
    cookingMethod: "小火慢卤焖煨",
    main: [{ name: "精选带皮猪五花肉", amount: 450, unit: "克 (手工切0.8cm见方长肉丁)" }],
    sec: [
      { name: "台湾正宗自制油葱酥", amount: 40, unit: "克 (红葱头炸至金黄焦脆)" },
      { name: "优质小干香菇", amount: 6, unit: "朵 (泡发切小方丁)" },
      { name: "白煮土鸡蛋", amount: 4, unit: "枚 (剥壳入锅同卤)" },
      { name: "新鲜小油菜/腌黄萝卜条", amount: 50, unit: "克" }
    ],
    sea: [
      { name: "金兰酱油/优质生抽", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "老抽酱油", amountText: "1 瓷汤勺 (上红黑油润色)", baseAmount: 1, unit: "勺" },
      { name: "台湾米酒/绍酒", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "老冰糖", amountText: "25 克 (炒糖色提甜亮)", baseAmount: 25, unit: "克" },
      { name: "正宗十三香/五香粉", amountText: "半茶匙 (灵魂香料)", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "五花肉切小肉丁与煸出油脂", instruction: "五花肉煮至五成熟捞出，手切成0.8cm见方的细长丁；热锅不放油下肉丁小火煸炒至出油微黄收缩。", chefTip: "切忌用绞肉馅！必须纯手切肉丁，带皮慢炖才能释出胶原蛋白，形成浓稠汤汁。" },
      { title: "下香菇丁油葱酥炒出复合香气", instruction: "倒入切好的香菇丁和冰糖小火翻炒化开上糖色，烹入米酒、生抽、老抽、五香粉，倒入大量黄金油葱酥大火炒匀。", chefTip: "自炸红葱头酥是台式卤肉饭不可替代的香气灵魂！" },
      { title: "加入香菇水慢炖1小时同卤鸡蛋", instruction: "倒入过滤后的浸香菇水和温水没过肉丁，放入剥壳白水蛋，加盖转微火慢炖1小时至肉丁软烂如胶，大火收至汤浓浇在热米饭上！", chefTip: "汤汁要熬到充满粘唇的天然肉胶感，浇在白米饭上，每一粒米裹满深红油润卤汁！" }
    ]
  },

  // ================= 4. 西北特色名吃 =================
  "陕西油泼扯面": {
    subtitle: "关中老陕面食霸主，宽如裤带劲道弹牙，热油泼在秦椒蒜末上滋啦作响",
    flavor: ["酸辣咸香", "麦香劲道镬气足"],
    cookingMethod: "手工扯面热油泼",
    main: [{ name: "高筋特制醒发扯面坯", amount: 250, unit: "克 (抹油醒透手扯宽裤带面)" }],
    sec: [
      { name: "鲜嫩青菜心", amount: 3, unit: "棵" },
      { name: "脆嫩黄豆芽", amount: 40, unit: "克" },
      { name: "细碎大蒜末", amount: 20, unit: "克" },
      { name: "新鲜小香葱花", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "陕西地道秦椒细辣椒面", amountText: "2 瓷汤勺 (红润香浓不干辣)", baseAmount: 2, unit: "勺" },
      { name: "陕西岐山香醋/老陈醋", amountText: "1.5 瓷汤勺 (沿碗边淋入)", baseAmount: 1.5, unit: "勺" },
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用精盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯菜籽油/亚麻籽油", amountText: "3 瓷汤勺 (烧冒烟滚烫浇泼)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "双手甩扯裤带面下沸水锅", instruction: "面剂子两手捏住两头顺势在案板上摔打弹拉，扯成食指三指宽的薄长面条顺势撕开，大锅宽水沸腾投入青菜豆芽和扯面大火煮沸捞出。", chefTip: "面坯抹油醒透至少1小时，扯面才能薄而不破、滑爽筋道！" },
      { title: "沥干面条码放蒜末秦椒面", instruction: "面条控干水分放入大老碗中，表面中央聚拢堆放大量鲜蒜末、葱花和厚厚一层红艳秦椒辣椒面、盐。", chefTip: "大蒜和辣椒面一定要堆在最顶端，等待热油集中洗礼。" },
      { title: "八成热滚烫热油激泼滋啦作响", instruction: "菜籽油烧至青烟升腾滚烫，分次淋浇在辣椒面和蒜泥上，瞬间激发出震慑全屋的焦香辣气，沿碗边烹入香醋生抽挑拌即食！", chefTip: "油一定要烧到足够热！“滋啦”一声响，将蒜辣香味逼出渗透整碗面条！" }
    ]
  },
  "白吉馍腊汁肉夹馍": {
    subtitle: "三秦传统肉夹馍，白吉馍虎皮铁圈菊花心外脆里空，老汤腊汁肉酥烂化渣流汁",
    flavor: ["咸香浓郁", "外皮焦脆肉酥软"],
    cookingMethod: "老汤慢煨烘烤",
    main: [
      { name: "精选肥三瘦七带皮猪五花肉", amount: 400, unit: "克 (老卤香料慢炖3小时)" },
      { name: "手工发酵白吉馍生胚", amount: 4, unit: "个 (无油平底锅烙出菊花心)" }
    ],
    sec: [
      { name: "青圆椒/青尖椒", amount: 1, unit: "个 (依口味可与肉同剁)" },
      { name: "醇香老卤肉原汤", amount: 4, unit: "瓷汤勺 (夹好后灌入)" }
    ],
    sea: [
      { name: "传统十六味香料包(八角桂皮草果丁香等)", amountText: "1 份", baseAmount: 1, unit: "份" },
      { name: "生抽与老抽", amountText: "各 2 瓷汤勺", baseAmount: 4, unit: "勺" },
      { name: "老冰糖", amountText: "20 克 (慢煨红亮)", baseAmount: 20, unit: "克" },
      { name: "食用精盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" }
    ],
    steps: [
      { title: "老汤香料慢火慢煨腊汁肉", instruction: "五花肉大块焯水，投入加了香料包、生抽老抽冰糖盐的大锅老汤中，大火烧开转极小火慢炖3小时至用筷子一碰即散化渣。", chefTip: "“肥肉吃了不腻口，瘦肉无渣满口香”，火候一定要足！" },
      { title: "平底锅慢烙白吉馍出菊花心", instruction: "面团卷起按成碗状擀开，平底锅不放油慢火烘烙，烙至两面结出“虎皮斑、铁圈、菊花心”三色，趁热横切开大口备用。", chefTip: "白吉馍讲究外脆里空，刚出锅麦香扑鼻。" },
      { title: "手剁软烂腊汁肉灌入热汤", instruction: "捞出热气腾腾的五花肉，在砧板上粗粗剁碎，夹入滚烫脆壳的白吉馍中，舀入一勺滚烫老汤浇淋在肉碎上即食！", chefTip: "“热馍夹凉肉，或是热馍夹热肉”，老卤汁渗入馍皮，一口爆汁！" }
    ]
  },
  "新疆大盘鸡": {
    subtitle: "丝路天山豪迈第一菜，土鸡香浓土豆沙软，宽面皮带面吸尽香辣浓汤",
    flavor: ["麻辣鲜香", "土豆软糯面筋道"],
    cookingMethod: "大锅红烧裹面",
    main: [
      { name: "天山散养新鲜三黄土鸡", amount: 600, unit: "克 (大块剁斩控水)" },
      { name: "新疆沙地黄心大土豆", amount: 2, unit: "个 (去皮切大滚刀块)" },
      { name: "手工宽皮带面拉条子", amount: 200, unit: "克 (煮熟过凉水)" }
    ],
    sec: [
      { name: "新疆特产铁板青红线椒", amount: 4, unit: "根 (切大斜块)" },
      { name: "紫皮大蒜瓣整粒", amount: 8, unit: "瓣" },
      { name: "鲜老姜厚片", amount: 25, unit: "克" },
      { name: "新疆大葱白段", amount: 2, unit: "根" }
    ],
    sea: [
      { name: "乌苏啤酒/清爽啤酒", amountText: "330 ml (整罐注入慢烧)", baseAmount: 330, unit: "ml" },
      { name: "新疆安集海辣皮子/干辣椒", amountText: "20 克 (剪段)", baseAmount: 20, unit: "克" },
      { name: "纯白砂糖/冰糖", amountText: "1.5 瓷汤勺 (炒出红亮糖色)", baseAmount: 1.5, unit: "勺" },
      { name: "郫县豆瓣酱", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "生抽与老抽", amountText: "各 1.5 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "食用盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" }
    ],
    steps: [
      { title: "炒糖色下鸡块大火煸香", instruction: "热锅倒油加冰糖小火熬出红亮焦糖小泡，倒入鸡块大火爆炒上色锁水，下姜葱蒜瓣、豆瓣酱和辣皮子大火爆炒出浓烈香辣气。", chefTip: "糖色不仅给鸡肉挂上诱人焦黄色，更能激发肉质复合香气！" },
      { title: "整罐啤酒慢烧投入大土豆块", instruction: "倒入整罐啤酒大火烧开去腥，加生抽老抽和盐，倒入土豆大块加盖中火慢炖15分钟至土豆软烂化沙。", chefTip: "啤酒代替水炖鸡，不仅肉质鲜嫩无腥，还能让汤汁更加浓醇！" },
      { title: "青红椒断生起锅铺入皮带面", instruction: "开盖下青红椒大块大火收汁至汤浓，倒在大盘中，趁滚烫将煮好的手工皮带面直接拌入盘底吸饱红润汤汁享用！", chefTip: "皮带面拌入沙软土豆和香辣鸡汁，每一根裹满浓汁，越嚼越香！" }
    ]
  },

  // ================= 5. 川湘滇黔招牌 =================
  "剁椒鱼头": {
    subtitle: "湘菜镇席头牌，鲜活大胖头鱼头肉质娇嫩，浏阳茶油手工剁辣椒红亮鲜辣",
    flavor: ["鲜辣爽滑", "酸辣生津"],
    cookingMethod: "大火沸水旺蒸",
    main: [{ name: "鲜活大花鲢胖头鱼头", amount: 1, unit: "个 (净重约800克，沿下巴劈开铺平)" }],
    sec: [
      { name: "湖南浏阳特产纯手工剁红辣椒", amount: 100, unit: "克 (茶油炒香微透酸辣)" },
      { name: "鲜野山椒碎", amount: 20, unit: "克 (提升层次感)" },
      { name: "老生姜片与紫皮大蒜蓉", amount: 40, unit: "克" },
      { name: "细小香葱花", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "湖南正宗纯茶油", amountText: "3 瓷汤勺 (热油激香出镬气)", baseAmount: 3, unit: "勺" },
      { name: "特级蒸鱼豉油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "绍兴料酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "食用精盐", amountText: "半茶匙 (腌底味)", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "鱼头彻底清洗与姜葱料酒腌底味", instruction: "鱼头彻底刮洗干净黑膜，背部肉厚处划两刀抹上料酒少许盐，盘底垫姜葱架起鱼头。", chefTip: "撕干净内部黑膜是鱼头清甜无土腥味的关键第一步。" },
      { title: "厚铺炒香剁椒大火旺蒸锁嫩", instruction: "将炒制过的剁椒、野山椒蒜蓉均匀厚厚铺满鱼头两半，大火水烧大滚上汽入锅，全程最高火蒸10分钟关火虚蒸2分钟。", chefTip: "剁椒先用少许油炒一下挥发多余水汽，香气更浓；大火旺蒸保证鱼肉如豆腐般娇嫩！" },
      { title: "撒小葱花泼滚烫纯茶油", instruction: "出锅倒掉部分蒸水，沿盘边淋蒸鱼豉油，撒满翠绿小葱花，用烧至青烟滚烫的纯茶油浇泼在葱花剁椒上！", chefTip: "茶油沸油浇淋激发出剁椒酸辣与葱香，连汤汁拌手工面条都堪称一绝！" }
    ]
  },
  "农家小炒肉": {
    subtitle: "湘菜国民代表，土猪肉肥瘦相间煸出油香，螺丝椒翠绿爽脆辣味浓烈",
    flavor: ["香辣干爽", "焦香下饭"],
    cookingMethod: "旺火热爆",
    main: [
      { name: "农家冷鲜带皮五花肉与前腿肉", amount: 350, unit: "克 (肥肉瘦肉分开切薄片)" },
      { name: "湖南本地鲜螺丝椒", amount: 200, unit: "克 (滚刀切斜马蹄片)" }
    ],
    sec: [
      { name: "紫皮大蒜瓣", amount: 5, unit: "瓣 (拍扁)" },
      { name: "湖南浏阳黑豆豉", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "纯熟猪油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "特级生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "老抽酱油", amountText: "半茶匙 (上微黄色)", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "干锅不放油慢煸螺丝椒出虎皮", instruction: "净锅烧热直接倒入螺丝椒和半茶匙盐，锅铲用力压炒煸出虎皮斑与焦辣香盛出。", chefTip: "干煸去水汽使辣椒皮脆焦香，湘味炒肉正宗做法！" },
      { title: "先下肥肉煸出猪油再下瘦肉", instruction: "锅下少许猪油，先下肥肉片慢煸出天然明亮猪油微卷焦黄，再下瘦肉片大火炒散变色，下大蒜黑豆豉爆香。", chefTip: "肥肉煸至透明微黄，肉香与豆豉交织最是勾魂！" },
      { title: "合锅大火颠翻收汁装盘", instruction: "倒入炒好的螺丝椒，加入生抽老抽和盐，旺火连续颠锅翻炒30秒裹匀立即装盘！", chefTip: "不可久炒，干香油亮无水汤，拌饭能吃三大碗！" }
    ]
  },
  "小炒黄牛肉": {
    subtitle: "湘菜经典快炒极品，鲜黄牛里脊嫩滑多汁，野山椒与青线椒火辣直击味蕾",
    flavor: ["香辣鲜嫩", "大火镬气足"],
    cookingMethod: "急火快炒",
    main: [{ name: "新鲜黄牛吊龙/牛里脊肉", amount: 300, unit: "克 (顶刀切薄透大片上浆)" }],
    sec: [
      { name: "湖南红泡野山椒碎", amount: 20, unit: "克 (提酸辣度)" },
      { name: "青线椒段", amount: 3, unit: "根" },
      { name: "紫皮大蒜瓣与生姜丝", amount: 25, unit: "克" },
      { name: "新鲜香菜段", amount: 20, unit: "克 (出锅提香)" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "蚝油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "玉米淀粉与鸡蛋清", amountText: "各 1 份 (牛肉抓匀封油)", baseAmount: 1, unit: "份" },
      { name: "纯菜籽油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "牛肉逆纹精切与抓水上浆", instruction: "黄牛肉顶刀切薄大片，少量多次抓入葱姜水至吸饱，加生抽淀粉蛋清抓匀，淋油封层腌制10分钟。", chefTip: "横切牛羊，打足水分，下锅才能极致滑嫩！" },
      { title: "热锅宽油快速滑炒变色盛出", instruction: "锅中热油烧至七成热倒入牛肉，大火快速滑散翻炒20秒变色立刻盛出备用。", chefTip: "滑炒牛肉千万不能超时，八成熟立刻捞出控油。" },
      { title: "爆香野山椒大火合炒撒香菜", instruction: "锅留底油爆香姜蒜、青线椒和野山椒，倒入牛肉大火颠翻，调入蚝油生抽，下香菜段5秒关火出锅！", chefTip: "全程保持最大火力，镬气十足，牛肉嫩滑香辣过瘾！" }
    ]
  },
  "贵州苗家酸汤鱼": {
    subtitle: "黔东南苗岭风情名馔，凯里野生小番茄自然发酵红酸汤，木姜子油灵魂幽香",
    flavor: ["酸爽鲜辣", "木姜子清香"],
    cookingMethod: "原汤滚煮火锅",
    main: [{ name: "鲜活稻田鲤鱼/乌江鱼", amount: 1, unit: "条 (约750克斩厚块抹少许盐)" }],
    sec: [
      { name: "贵州凯里野生毛辣果天然红酸汤", amount: 150, unit: "ml" },
      { name: "鲜木姜子油", amount: 1, unit: "茶匙 (苗家特有灵魂奇香)" },
      { name: "鲜嫩黄豆芽与金针菇", amount: 150, unit: "克 (铺底垫菜)" },
      { name: "熟西红柿块与蒜苗段", amount: 60, unit: "克" }
    ],
    sea: [
      { name: "特制高汤/纯净水", amountText: "800 ml", baseAmount: 800, unit: "ml" },
      { name: "贵州糟辣椒", amountText: "2 瓷汤勺 (炒出红润酸香)", baseAmount: 2, unit: "勺" },
      { name: "米酒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "食用精盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" }
    ],
    steps: [
      { title: "鱼块洗净沥干与蔬菜铺底", instruction: "活鱼宰杀斩大块抹少许料酒盐；砂锅底部铺上黄豆芽、金针菇和西红柿块备用。", chefTip: "铺底豆芽吸收酸汤极脆爽。" },
      { title: "炒香糟辣椒与红酸汤熬汤底", instruction: "热锅倒油下糟辣椒爆香，倒入红酸汤大火翻炒激发出天然醇酸果香，加入高汤烧开煮沸5分钟。", chefTip: "野生小番茄发酵的红酸汤遇热翻炒，酸香浓郁自然生津！" },
      { title: "下鱼块滚熟出锅淋木姜子油", instruction: "将滚烫酸汤倒入砂锅铺在鱼块上，大火煮沸6分钟至鱼肉熟透，关火前滴入木姜子油撒蒜苗段！", chefTip: "木姜子油必须出锅前关火点入几滴，幽香直透心脾，鱼肉鲜滑酸爽无腥！" }
    ]
  },
  "云南汽锅鸡": {
    subtitle: "滇菜养生头牌，建水紫陶汽锅蒸馏凝汽成汤，不加一滴水纯鸡肉原汁",
    flavor: ["清鲜醇和", "原汁甘甜润喉"],
    cookingMethod: "紫陶汽锅蒸馏",
    main: [{ name: "云南散养武定壮母鸡", amount: 600, unit: "克 (洗净斩均匀小方块)" }],
    sec: [
      { name: "云南宣威三年火腿厚片", amount: 40, unit: "克 (增咸鲜底香)" },
      { name: "云南文山特产三七/天麻片", amount: 10, unit: "克" },
      { name: "老生姜片与新鲜葱结", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "绍兴黄酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用海盐", amountText: "1 茶匙 (出锅前依味微调)", baseAmount: 1, unit: "茶匙" },
      { name: "现磨白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "鸡块精斩焯水码入汽锅", instruction: "鸡块冷水焯烫30秒洗净骨渣擦干；将鸡块、宣威火腿片、天麻片整齐码在建水紫陶汽锅四周，中间空出蒸汽喷嘴。", chefTip: "鸡肉切块不可过大，利于受热均匀。" },
      { title: "绝不加水加盖置于大汤锅蒸馏", instruction: "汽锅内绝不加一滴水，加盖后将汽锅严密架在一只盛满沸水的大汤锅上，缝隙用纱布封严，旺火持续蒸制2.5-3小时。", chefTip: "蒸汽顺着中心气嘴喷入锅中冷凝成极清澈浓郁的纯正原鸡汤，这就是汽锅鸡的精妙绝伦之处！" },
      { title: "出锅撒微盐胡椒粉品纯鲜", instruction: "端下汽锅揭盖，鸡肉软烂酥离骨，汤清如镜无油腻杂味，调入少许盐撒香葱即可趁热品尝！", chefTip: "鸡汤全由蒸汽凝结，入口清甜无比，温补养颜！" }
    ]
  },
  "过桥米线": {
    subtitle: "蒙自传世百年名吃，厚鸡油锁住滚烫高汤，生肉鲜片烫至软嫩入神",
    flavor: ["高汤鲜醇", "生烫滑嫩爽口"],
    cookingMethod: "原汁滚烫生烫",
    main: [
      { name: "蒙自传统酸浆鲜米线", amount: 250, unit: "克 (沸水烫热盛碗)" },
      { name: "老母鸡筒骨金华火腿醇浓高汤", amount: 700, unit: "ml (带一层厚厚老鸡油保温)" }
    ],
    sec: [
      { name: "鲜黑鱼片/里脊肉极薄生片", amount: 60, unit: "克 (薄如蝉翼生烫)" },
      { name: "鲜鹌鹑生蛋", amount: 1, unit: "枚" },
      { name: "鲜豆皮薄丝与豌豆尖", amount: 40, unit: "克" },
      { name: "香葱碎与熟鸡肉丝", amount: 30, unit: "克" }
    ],
    sea: [
      { name: "白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "食用盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "准备滚烫高汤带厚鸡油", instruction: "砂锅高汤大火烧至滚沸冒泡倒入大瓷碗中，表面厚厚一层老鸡油封锁温度达90℃以上看似无热气实则极其滚烫。", chefTip: "厚厚的天然鸡油层能牢牢锁住高汤温度，这就是瞬间烫熟生肉的玄机！" },
      { title: "按生后熟顺序依次下入食材", instruction: "先磕入生鹌鹑蛋，迅速夹入生鱼片、生肉片用筷子在汤中划散烫至雪白卷曲；再下豆皮、豌豆尖焯烫断生。", chefTip: "“先肉后菜，轻划即熟”，肉片切薄如纸，遇滚汤几秒即熟脆嫩至极！" },
      { title: "滑入米线拌匀痛快大口嗦", instruction: "最后将烫好的整碗酸浆米线顺碗沿滑入高汤中挑拌，撒胡椒粉，大口开吃！", chefTip: "高汤鲜美滚烫，米线爽滑Q弹，全身通泰舒坦！" }
    ]
  },

  // ================= 6. 东南亚与日韩特色 =================
  "泰式冬阴功海鲜大虾汤": {
    subtitle: "世界十大名汤之一，沼虾头煎出红亮虾油，香茅南姜柠檬叶酸辣浓滑极开胃",
    flavor: ["酸辣浓郁", "香茅椰香四溢"],
    cookingMethod: "海鲜浓汤慢熬",
    main: [
      { name: "新鲜鲜活罗氏大沼虾/黑虎虾", amount: 8, unit: "只 (开背去虾线，保留虾头红膏)", substitutes: ["基围虾"] },
      { name: "鲜草菇/白玉菇", amount: 120, unit: "克 (对半切开)" }
    ],
    sec: [
      { name: "新鲜香茅草段", amount: 2, unit: "根 (拍裂切斜段)" },
      { name: "泰国南姜厚片", amount: 4, unit: "片" },
      { name: "新鲜青柠檬叶", amount: 6, unit: "片 (手撕出香)" },
      { name: "泰国红鸟眼辣椒", amount: 3, unit: "根 (切碎)" },
      { name: "新鲜小青柠", amount: 2, unit: "个 (压榨新鲜纯汁)" }
    ],
    sea: [
      { name: "泰式冬阴功原酱", amountText: "2 大瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "泰国纯天然纯鱼露", amountText: "2 瓷汤勺 (咸鲜调味绝对灵魂)", baseAmount: 2, unit: "勺" },
      { name: "无糖浓滑椰浆/淡奶", amountText: "60 ml (汤体奶香顺滑关键)", baseAmount: 60, unit: "ml" },
      { name: "高汤/清水", amountText: "700 ml", baseAmount: 700, unit: "ml" }
    ],
    steps: [
      { title: "大虾开背与小火煎出金黄虾油", instruction: "大虾剪去须足开背，锅中少油放入虾小火慢煎，用铲轻压虾头榨出金黄红亮的天然虾脑油盛出备用。", chefTip: "煎出虾头虾油是冬阴功汤色泽鲜红透亮、汤体极鲜的头号秘诀！" },
      { title: "倒入高汤煮沸香茅南姜柠檬叶", instruction: "在虾油锅中倒入高汤煮沸，下香茅草、南姜片、柠檬叶和草菇大火煮沸5分钟充分煮出芳香精油。", chefTip: "柠檬叶一定要用手撕碎再下锅，才能彻底释放清爽的柑橘幽香。" },
      { title: "调入冬阴功酱鱼露椰浆与青柠汁", instruction: "加入冬阴功酱、鱼露、椰浆大火化开，投入煎好的大虾煮2分钟熟透，关火后挤入新鲜青柠檬汁搅匀出锅！", chefTip: "青柠汁必须关火出锅后挤入！高温久煮会破坏青柠檬的天然清酸并产生苦味！" }
    ]
  },
  "经典泰式芒果糯米饭": {
    subtitle: "泰国国民甜品天花板，长粒白糯米吸饱微咸甜椰浆，大块水仙芒果甜如蜜",
    flavor: ["椰香浓郁", "软糯甜润微咸"],
    cookingMethod: "蒸制浇淋",
    main: [
      { name: "泰国特级长粒圆糯米", amount: 200, unit: "克 (浸泡4小时蒸透软糯)" },
      { name: "超甜熟透水仙芒/金煌芒", amount: 1, unit: "个 (去核厚切大整片)" }
    ],
    sec: [
      { name: "纯天然浓稠厚椰浆", amount: 150, unit: "ml" },
      { name: "香脆脱皮熟绿豆仁", amount: 10, unit: "克 (撒在顶层添脆感)" }
    ],
    sea: [
      { name: "纯椰子糖/细白砂糖", amountText: "30 克 (煮椰浆汁)", baseAmount: 30, unit: "克" },
      { name: "食用海盐", amountText: "半茶匙 (灵魂微咸解甜腻)", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "糯米浸泡沥干大火蒸熟", instruction: "糯米浸泡4小时沥干，蒸笼垫纱布倒入糯米大火蒸25分钟至粒粒晶莹软糯熟透入大碗。", chefTip: "米一定要泡透再蒸，蒸出的糯米粒粒分明有嚼劲。" },
      { title: "小火熬煮微咸甜浓厚椰浆汁", instruction: "小锅倒入椰浆、白糖和半茶匙海盐，小火加热搅拌至糖融化微沸关火，留出一小勺最后淋面，其余趁热全部倒入刚出锅的糯米饭中拌匀，加盖静置吸收20分钟。", chefTip: "少许海盐是灵魂！咸甜交织不仅不腻，更能激发出椰浆的浓郁奶香！" },
      { title: "装盘搭配大块甜芒果浇汁", instruction: "将吸饱椰浆的糯米饭用小碗塑形倒扣盘中，旁边码上整齐厚切的香甜芒果片，表面淋剩余浓椰浆，撒一把酥脆绿豆仁！", chefTip: "一口温热奶香软糯的米饭，一口冰甜多汁的芒果，绝配无双！" }
    ]
  },
  "日式寿喜烧牛肉锅": {
    subtitle: "日式传统暖心火锅，M5雪花肥牛吸饱甘甜寿喜汁，蘸可生食无菌蛋液顺滑如丝",
    flavor: ["咸甜适口", "牛肉鲜嫩顺滑"],
    cookingMethod: "关东慢炖焖煮",
    main: [
      { name: "日式M5雪花肥牛卷/牛上脑薄片", amount: 300, unit: "克 (大片薄切纹理如大理石)" },
      { name: "日式可生食无菌鲜鸡蛋", amount: 2, unit: "枚 (搅打作灵魂蘸料)" }
    ],
    sec: [
      { name: "双面微煎老豆腐块", amount: 150, unit: "克" },
      { name: "鲜香菇", amount: 4, unit: "朵 (切十字漂亮花刀)" },
      { name: "魔芋结与鲜娃娃菜", amount: 150, unit: "克" },
      { name: "日式甜大葱白段", amount: 1, unit: "根 (斜切大厚段)" }
    ],
    sea: [
      { name: "日式正宗寿喜烧汁(日式酱油+味霖+清酒+糖)", amountText: "150 ml", baseAmount: 150, unit: "ml" },
      { name: "优质动物黄油小块", amountText: "10 克 (润锅煎大葱增香)", baseAmount: 10, unit: "克" },
      { name: "木鱼花昆布高汤/清水", amountText: "100 ml", baseAmount: 100, unit: "ml" }
    ],
    steps: [
      { title: "黄油润铸铁浅锅煎香大葱段", instruction: "平底浅铁锅融化黄油，放入大葱段小火煎至两面金黄微焦释放焦甜香气，铺入两片肥牛轻煎出油。", chefTip: "黄油煎大葱是寿喜烧香气瞬间爆发的灵魂前奏！" },
      { title: "整齐码放配菜注入寿喜烧汁", instruction: "将煎豆腐、香菇、魔芋结、娃娃菜和葱段整齐分区码在锅中，注入寿喜烧汁和少量高汤中小火焖煮沸腾。", chefTip: "食材一定要分类整齐码放，展现日料精致的秩序感。" },
      { title: "轻涮雪花牛肉蘸无菌蛋液", instruction: "在沸腾汤汁中铺入大片雪花牛肉轻烫15秒至变粉红八成熟，捞出裹满充分搅打的无菌蛋液即刻入口！", chefTip: "蛋液能瞬间为滚烫牛肉降温，蛋香与肉汁交融，丝滑软嫩到仿佛在舌尖融化！" }
    ]
  }
};

module.exports = {
  SPECIFIC_DISH_RECIPES
};
