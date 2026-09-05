const fs = require('fs');
const path = require('path');

const photoMap = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_snacks_photos.json'), 'utf8'));
const pMap = {};
photoMap.forEach(p => { pMap[p.name] = p.photoUrl; });

const newRecipes = [
  {
    id: "rec_snack_08",
    name: "经典五香酱牛肉",
    subtitle: "牛腱带筋切薄片，五香醇厚筋道紧实，下酒桌上的定海神针",
    photoUrl: pMap["经典五香酱牛肉"],
    region: "北方经典",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["酱香浓郁", "五香醇厚", "筋道有嚼劲"],
    cookingMethod: "慢火酱卤",
    difficulty: "需要耐心",
    prepTimeMinutes: 30,
    cookTimeMinutes: 90,
    servings: 4,
    calories: 260,
    ingredients: [
      { name: "牛腱子肉/金钱腱", amount: "1000g", category: "肉禽" },
      { name: "黄豆酱/甜面酱", amount: "3大勺", category: "调料" },
      { name: "生抽", amount: "50ml", category: "调料" },
      { name: "老抽", amount: "20ml", category: "调料" },
      { name: "冰糖", amount: "20g", category: "调料" },
      { name: "料酒", amount: "40ml", category: "调料" },
      { name: "大葱段、老姜片", amount: "各30g", category: "蔬菜" },
      { name: "香料包(八角/桂皮/香叶/草果/花椒/小茴香)", amount: "1份", category: "干货香料" }
    ],
    steps: [
      "牛腱子洗净，用竹签扎孔，加入生抽、葱姜浸泡腌制冷藏4小时以上入味。",
      "锅中足量冷水，放入牛腱子焯水，撇去全部浮沫后捞出温水冲净。",
      "锅中加少量油炒香黄豆酱与冰糖至起泡，加入足量开水，放入香料包、生抽、老抽、料酒与大葱老姜。",
      "大火烧沸后下入牛腱子，转小火慢炖90分钟，用筷子能扎透即可关火。",
      "关火后牛腱子不要立即捞出，在卤汁中浸泡浸凉6小时以上，捞出冷藏后切薄片，搭配蒜醋油辣子装盘。"
    ],
    tips: "牛肉必须在卤汁中自然冷却并冷藏充分定型后再切，刀工切极薄，带透明牛筋才最具风味。"
  },
  {
    id: "rec_snack_09",
    name: "川味红油脆肚丝",
    subtitle: "金钱肚脆嫩爽口，鲜辣红油与熟芝麻包裹，佐酒一绝",
    photoUrl: pMap["川味红油脆肚丝"],
    region: "四川",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["红油香辣", "麻鲜酸爽", "爽脆弹牙"],
    cookingMethod: "凉拌熟调",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 3,
    calories: 220,
    ingredients: [
      { name: "熟牛肚/鲜金钱肚", amount: "350g", category: "肉禽" },
      { name: "黄瓜丝", amount: "100g", category: "蔬菜" },
      { name: "新鲜香菜段、香葱碎", amount: "各20g", category: "蔬菜" },
      { name: "炸花生碎、熟白芝麻", amount: "各15g", category: "坚果" },
      { name: "红油辣椒油", amount: "3大勺", category: "调料" },
      { name: "花椒油", amount: "1茶匙", category: "调料" },
      { name: "生抽、陈醋、蒜泥、白糖", amount: "各适量", category: "调料" }
    ],
    steps: [
      "牛肚洗净，加入葱姜料酒煮至软熟适口捞出，迅速投凉切成细长肚丝。",
      "黄瓜切细丝铺在盘底垫底，肚丝均匀铺在黄瓜丝上方。",
      "碗中调制红油料汁：放入蒜泥、生抽、陈醋、少许盐、白糖、红油辣椒油、花椒油与少许煮肚清汤搅拌均匀。",
      "将调好的红油汁均匀淋在肚丝上，撒上香菜段、葱花、熟白芝麻与酥脆花生碎即可上桌拌匀享用。"
    ],
    tips: "肚丝焯熟后立即过冰水，能锁住水分并使肚丝极脆弹。"
  },
  {
    id: "rec_snack_10",
    name: "柠檬酸辣无骨鸡爪",
    subtitle: "去骨鸡爪Q弹筋道，果香酸爽小米辣过瘾，越嚼越香停不下来",
    photoUrl: pMap["柠檬酸辣无骨鸡爪"],
    region: "夜市江湖",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["青柠酸香", "香辣爽口", "Q弹爽脆"],
    cookingMethod: "白灼浸渍",
    difficulty: "新手友好",
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    servings: 4,
    calories: 210,
    ingredients: [
      { name: "去骨鸡爪/凤爪", amount: "500g", category: "肉禽" },
      { name: "鲜柠檬", amount: "1个(切片去籽)", category: "果蔬" },
      { name: "小米辣圈", amount: "30g", category: "蔬菜" },
      { name: "大蒜碎、香菜段", amount: "各30g", category: "蔬菜" },
      { name: "生抽", amount: "60ml", category: "调料" },
      { name: "香醋/米醋", amount: "50ml", category: "调料" },
      { name: "白糖", amount: "25g", category: "调料" },
      { name: "香油/花椒油", amount: "各1茶匙", category: "调料" }
    ],
    steps: [
      "鸡爪冷水下锅，加姜片、料酒大火煮沸焯水12分钟断生。",
      "捞出鸡爪立即投入准备好的冰水中冰镇浸泡15分钟，使胶质紧实爽脆。",
      "大碗中混合生抽、香醋、白糖、蒜泥、小米辣圈、花椒油、香油与柠檬片（柠檬一定要去籽防止发苦）。",
      "将沥干水分的鸡爪倒入调料汁中充分拌匀，撒入新鲜香菜段。",
      "盖上保鲜膜放入冰箱冷藏腌制3小时以上，中途翻动一次使各部位完全吸收酸辣果香。"
    ],
    tips: "柠檬切片后务必挑出里面的柠檬籽，否则泡久了会析出苦味。"
  },
  {
    id: "rec_snack_11",
    name: "经典皮蛋拌豆腐",
    subtitle: "滑嫩内酯豆腐配流心松花皮蛋，红油生抽葱花，清爽解腻解酒气",
    photoUrl: pMap["经典皮蛋拌豆腐"],
    region: "家常经典",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["鲜咸油润", "滑嫩软糯", "清爽利口"],
    cookingMethod: "清凉拌制",
    difficulty: "新手友好",
    prepTimeMinutes: 5,
    cookTimeMinutes: 0,
    servings: 2,
    calories: 140,
    ingredients: [
      { name: "盒装内酯豆腐", amount: "1盒(350g)", category: "豆制品" },
      { name: "无铅溏心松花皮蛋", amount: "2枚", category: "蛋类" },
      { name: "香葱花", amount: "15g", category: "蔬菜" },
      { name: "红油辣椒", amount: "1大勺", category: "调料" },
      { name: "特级生抽", amount: "2大勺", category: "调料" },
      { name: "香麻油", amount: "1茶匙", category: "调料" },
      { name: "蒜蓉", amount: "1茶匙", category: "蔬菜" }
    ],
    steps: [
      "盒装内酯豆腐撕去封口，底部四角各剪小孔透气，完整倒扣在盘中央，用小刀划成整齐小方块。",
      "皮蛋剥壳，刀刃抹少许凉水或香油，将皮蛋切成小丁块。",
      "将切好的皮蛋丁均匀码在内酯豆腐四周和顶部。",
      "小碗中混合生抽、蒜泥、红油辣椒、香油和少许凉开水调匀成味汁。",
      "上桌前将味汁均匀淋在皮蛋豆腐上，撒满翠绿香葱花，吃时用勺子拌匀即可。"
    ],
    tips: "切皮蛋时刀刃蘸点凉水或香油，皮蛋蛋黄不沾刀，切面光洁齐整。"
  },
  {
    id: "rec_snack_12",
    name: "爽脆老醋海蜇头",
    subtitle: "海蜇头肉质厚实嘎嘣脆，陈年老醋生抽糖油炝拌，开胃爽口下热酒",
    photoUrl: pMap["爽脆老醋海蜇头"],
    region: "江浙沿海",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["酸甜爽脆", "微麻开胃", "清凉爽口"],
    cookingMethod: "温烫炝拌",
    difficulty: "需要诀窍",
    prepTimeMinutes: 20,
    cookTimeMinutes: 1,
    servings: 2,
    calories: 110,
    ingredients: [
      { name: "盐渍海蜇头", amount: "300g", category: "海鲜水产" },
      { name: "黄瓜条/白菜芯丝", amount: "80g", category: "蔬菜" },
      { name: "香菜段", amount: "15g", category: "蔬菜" },
      { name: "镇江老陈醋", amount: "3大勺", category: "调料" },
      { name: "生抽", amount: "1.5大勺", category: "调料" },
      { name: "白糖", amount: "1.5大勺", category: "调料" },
      { name: "蒜泥、香油", amount: "各1茶匙", category: "调料" }
    ],
    steps: [
      "海蜇头提前用清水反复冲洗并浸泡3小时以上，中途换水3次脱去多余盐分与涩味，切成适口小块。",
      "锅中烧水至75℃左右（锅底刚冒密集小泡微沸），下入海蜇头迅速烫5秒立刻捞出，绝对不能久煮以免缩成橡胶。",
      "烫好的海蜇头立即投入冰水中冰镇10分钟，沥干水分备用。",
      "调料汁：陈醋、生抽、白糖、蒜泥、香油充分搅拌至糖完全融化。",
      "将黄瓜段垫底，摆上海蜇头，淋上老醋汁，撒上香菜拌匀即成。"
    ],
    tips: "焯烫海蜇头水温切忌滚沸，70~75度烫5秒即刻出水冰镇，才能保留晶莹弹牙的极脆口感。"
  },
  {
    id: "rec_snack_13",
    name: "绝味香辣卤鸭掌",
    subtitle: "酱红油亮皮韧骨酥，浓郁香料小火焖透，下酒聊天绝配小食",
    photoUrl: pMap["绝味香辣卤鸭掌"],
    region: "湘鄂经典",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["酱香浓郁", "皮糯肉香", "微辣过瘾"],
    cookingMethod: "慢火酱卤",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    servings: 3,
    calories: 230,
    ingredients: [
      { name: "鲜鸭掌", amount: "500g", category: "肉禽" },
      { name: "干红辣椒、花椒", amount: "各15g", category: "干货香料" },
      { name: "八角/桂皮/香叶/草果", amount: "适量", category: "干货香料" },
      { name: "生抽、老抽、料酒", amount: "各30ml", category: "调料" },
      { name: "冰糖", amount: "20g", category: "调料" },
      { name: "葱段、生姜", amount: "各20g", category: "蔬菜" }
    ],
    steps: [
      "鸭掌剪去脚趾甲，洗净，冷水入锅加姜片、料酒大火煮沸焯水5分钟捞出冲洗。",
      "锅中倒少许底油，下冰糖小火炒至枣红色起小泡，加入热水化开糖色。",
      "放入香料、干辣椒、花椒、葱姜、生抽、老抽和料酒，烧开熬出香气。",
      "放入鸭掌，转中小火慢卤35分钟，关火后浸泡2小时以上使皮肉吸满卤汁。",
      "捞出装盘，可趁温热吃软糯，也可冷藏后吃Q弹筋道。"
    ],
    tips: "卤好后不要急于捞出，关火浸泡2小时，卤香能浸透到骨头缝里。"
  },
  {
    id: "rec_snack_14",
    name: "香辣爆炒花甲",
    subtitle: "颗颗开口鲜甜多汁，大火爆出镬气与豆瓣蒜香，大排档点单头牌",
    photoUrl: pMap["香辣爆炒花甲"],
    region: "大排档江湖",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["鲜辣浓醇", "蒜香扑鼻", "镬气十足"],
    cookingMethod: "大火生炒",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    servings: 2,
    calories: 160,
    ingredients: [
      { name: "鲜活花甲/花蛤", amount: "600g", category: "海鲜水产" },
      { name: "郫县豆瓣酱/红油豆瓣", amount: "1大勺", category: "调料" },
      { name: "大蒜粒、老姜丝", amount: "各20g", category: "蔬菜" },
      { name: "青红线椒圈", amount: "30g", category: "蔬菜" },
      { name: "香葱段", amount: "20g", category: "蔬菜" },
      { name: "生抽、料酒、蚝油", amount: "各1大勺", category: "调料" }
    ],
    steps: [
      "花甲在淡盐水中加几滴香油静置吐沙2小时，洗净沥干。",
      "沸水锅中下料酒，倒入花甲大火烫约30秒，见花甲刚一张口立即捞出沥水（未开口的丢弃）。",
      "热锅宽油，爆香蒜粒、姜丝、青红线椒圈与豆瓣酱，煸炒出红油与浓香。",
      "倒入焯烫好的花甲，烹入料酒、生抽、蚝油与少许白糖，大火猛烈翻炒20秒包裹酱汁。",
      "撒入香葱段，翻颠两下锅气立起，出锅装盘。"
    ],
    tips: "焯水时只要开口就迅速捞出，炒制必须大火快翻，防止贝肉缩水变老。"
  },
  {
    id: "rec_snack_15",
    name: "干锅千页豆腐",
    subtitle: "千叶豆腐吸满腊五花肉香，焦香微辣在小铁锅中翻滚，下酒极佳",
    photoUrl: pMap["干锅千页豆腐"],
    region: "湘菜经典",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["焦香鲜辣", "软弹入味", "腊香浓郁"],
    cookingMethod: "干锅煎炒",
    difficulty: "新手友好",
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    servings: 3,
    calories: 240,
    ingredients: [
      { name: "千叶豆腐", amount: "350g", category: "豆制品" },
      { name: "五花肉/农家腊肉薄片", amount: "100g", category: "肉禽" },
      { name: "洋葱条", amount: "80g", category: "蔬菜" },
      { name: "青红椒切片", amount: "50g", category: "蔬菜" },
      { name: "干辣椒段、蒜片、姜丝", amount: "各15g", category: "干货香料" },
      { name: "生抽、老抽、蚝油、糖", amount: "各适量", category: "调料" }
    ],
    steps: [
      "千叶豆腐切成5毫米厚适口小片，洋葱切条铺在干锅或深盘底部垫底。",
      "锅中倒少许油，下入千叶豆腐中小火煎制两面微焦起小泡，捞出控油。",
      "锅内留底油，下五花肉片慢慢煸炒出多余猪油至肉片微焦卷曲。",
      "下蒜片、姜丝、干辣椒段爆香，倒入青红椒片与千叶豆腐大火翻炒。",
      "调入生抽、蚝油、少许老抽上色和白糖提鲜，大火翻炒均匀，倒入铺好洋葱的干锅即可上桌。"
    ],
    tips: "千叶豆腐一定要先煎至微起泡，才能在后续炒制中像海绵一样饱吸腊肉油脂与调味酱汁。"
  },
  {
    id: "rec_snack_16",
    name: "湘西风味牙签牛肉",
    subtitle: "外焦里嫩孜然香辣，牙签穿起一口一串，大火油炸出的夜市香气",
    photoUrl: pMap["湘西风味牙签牛肉"],
    region: "湖南湘西",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["孜然焦香", "香辣微麻", "外酥里嫩"],
    cookingMethod: "高温酥炸",
    difficulty: "需要耐心",
    prepTimeMinutes: 25,
    cookTimeMinutes: 5,
    servings: 3,
    calories: 280,
    ingredients: [
      { name: "牛里脊肉", amount: "400g", category: "肉禽" },
      { name: "纯竹牙签", amount: "约40根", category: "辅料" },
      { name: "孜然粒/孜然粉", amount: "2大勺", category: "干货香料" },
      { name: "粗辣椒面、熟白芝麻", amount: "各1.5大勺", category: "调料" },
      { name: "生抽、蚝油、料酒、淀粉", amount: "各适量", category: "调料" }
    ],
    steps: [
      "牙签提前用沸水浸泡10分钟消毒擦干备用。",
      "牛里脊切成薄小长片，加入生抽、蚝油、料酒、白糖、姜汁与少许玉米淀粉抓匀腌制20分钟。",
      "取一片牛肉用牙签串起，串牢成紧凑肉串。",
      "油锅烧至六成热（约170℃），下入串好的牙签牛肉大火炸约1.5分钟至表面微焦定型立即捞出。",
      "升高油温至八成热复炸20秒逼出油脂并增脆，捞出沥油倒入大盆，撒足量孜然粒、辣椒面与熟白芝麻颠匀装盘。"
    ],
    tips: "牛肉切薄片炸制时间切勿过长，大火快炸复炸20秒，外层焦香扑鼻，内部肉质依旧滑嫩多汁。"
  },
  {
    id: "rec_snack_17",
    name: "酸豆角爆炒鸡胗",
    subtitle: "鸡胗十字花刀爽脆弹牙，农家酸豆角酸辣开胃，佐酒醒胃最过瘾",
    photoUrl: pMap["酸豆角爆炒鸡胗"],
    region: "湘鄂家常",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["酸辣爽脆", "爆炒镬气", "嘎嘣脆响"],
    cookingMethod: "旺火急炒",
    difficulty: "需要火候",
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    servings: 2,
    calories: 190,
    ingredients: [
      { name: "鲜鸡胗", amount: "300g", category: "肉禽" },
      { name: "农家腌制酸豆角", amount: "120g", category: "蔬菜" },
      { name: "野山椒碎/小米辣圈", amount: "25g", category: "蔬菜" },
      { name: "大蒜片、生姜末", amount: "各15g", category: "蔬菜" },
      { name: "生抽、老抽、料酒、蚝油", amount: "各适量", category: "调料" }
    ],
    steps: [
      "鸡胗洗净去筋膜，在内侧打细密十字花刀，然后改刀切小薄块。",
      "切好的鸡胗加入少许料酒、姜丝、生抽和淀粉抓匀腌制10分钟。",
      "酸豆角洗净切碎丁，先不放油倒入热锅中干煸炒干水分出酸香，盛出备用。",
      "热锅宽油烧至八成热，下入鸡胗大火滑炒20秒至花刀卷起绽开，立即捞出控油。",
      "锅留底油爆香蒜末、生姜碎与野山椒，倒入酸豆角和鸡胗，加入生抽、蚝油、少许老抽，大火猛炒20秒翻匀出锅。"
    ],
    tips: "酸豆角先下热干锅干煸出香气，鸡胗一定要大火猛油滑炒，受热花刀瞬间盛开，口感才会极致爽脆。"
  },
  {
    id: "rec_snack_18",
    name: "紫苏辣炒田螺",
    subtitle: "清香紫苏吸入浓辣螺肉，吸吮嘬汁停不下来，夜宵排档下酒神物",
    photoUrl: pMap["紫苏辣炒田螺"],
    region: "南方夜市",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["紫苏异香", "鲜辣浓郁", "吸汁嘬鲜"],
    cookingMethod: "大火生爆",
    difficulty: "需要耐心",
    prepTimeMinutes: 30,
    cookTimeMinutes: 8,
    servings: 3,
    calories: 170,
    ingredients: [
      { name: "鲜活田螺/螺蛳", amount: "800g", category: "海鲜水产" },
      { name: "新鲜紫苏叶", amount: "30g", category: "蔬菜" },
      { name: "豆瓣酱/辣椒酱", amount: "1大勺", category: "调料" },
      { name: "干红辣椒段、花椒", amount: "各10g", category: "干货香料" },
      { name: "蒜瓣、姜丝、葱花", amount: "各20g", category: "蔬菜" },
      { name: "啤酒", amount: "100ml", category: "调料" }
    ],
    steps: [
      "田螺在清水中加香油吐净泥沙，用钳子剪去田螺尾部尖端，洗刷干净外壳。",
      "沸水锅中加姜片料酒，倒入田螺焯烫1分钟捞出冲净浮沫。",
      "锅中热油，下蒜瓣、姜丝、干辣椒、花椒与豆瓣酱炒出红油浓香。",
      "倒入田螺大火翻炒1分钟，烹入啤酒、生抽、老抽、白糖翻炒均匀。",
      "盖上锅盖焖煮3分钟使汤汁渗透螺壳，揭盖倒入新鲜洗净切碎的紫苏叶，大火收汁至微浓稠即可出锅装大盆。"
    ],
    tips: "剪去螺蛳尾尖是嘬出螺肉的关键，紫苏叶在出锅前1分钟加入，清香最浓郁。"
  },
  {
    id: "rec_snack_19",
    name: "椒盐香酥小河虾",
    subtitle: "带壳整虾高温炸至金黄通体酥脆，椒盐香葱调味，连壳带肉整只嚼",
    photoUrl: pMap["椒盐香酥小河虾"],
    region: "江浙经典",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["椒盐咸香", "外酥里鲜", "酥脆无比"],
    cookingMethod: "高温酥炸",
    difficulty: "新手友好",
    prepTimeMinutes: 10,
    cookTimeMinutes: 3,
    servings: 2,
    calories: 220,
    ingredients: [
      { name: "鲜活小河虾", amount: "300g", category: "海鲜水产" },
      { name: "玉米淀粉", amount: "30g", category: "调料" },
      { name: "椒盐粉", amount: "1.5茶匙", category: "调料" },
      { name: "小葱花、红椒碎", amount: "各10g", category: "蔬菜" },
      { name: "料酒、白胡椒粉", amount: "各少许", category: "调料" }
    ],
    steps: [
      "小河虾洗净沥干水分，挑除杂质，加入少许料酒和白胡椒粉抓匀腌制5分钟。",
      "用厨房纸彻底吸干小河虾表面的多余水分（防油爆），撒入玉米淀粉抖匀，使每只小虾薄薄挂上一层干粉。",
      "油锅烧至七成热（放入筷子冒密集小泡），分批撒入小河虾大火炸约1.5分钟至虾壳通红变脆捞出。",
      "大火升高油温至八成热，倒入小河虾复炸20秒逼油增脆，捞出沥净油。",
      "锅留微量底油，下葱花红椒碎略煸炒，倒入炸酥的小河虾，均匀撒入椒盐粉迅速颠匀出锅。"
    ],
    tips: "小河虾水分必须吸干再拍薄粉，高温复炸使虾壳彻底酥化，连虾头虾壳都能一起吃下。"
  },
  {
    id: "rec_snack_20",
    name: "金牌蒜香椒盐排骨",
    subtitle: "蒜汁深度腌渍炸至金黄焦脆，外皮酥香内里多汁，肉食老饕下酒最爱",
    photoUrl: pMap["金牌蒜香椒盐排骨"],
    region: "粤式大排档",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["浓郁蒜香", "咸香焦脆", "肉香四溢"],
    cookingMethod: "生炸椒盐",
    difficulty: "需要火候",
    prepTimeMinutes: 30,
    cookTimeMinutes: 10,
    servings: 3,
    calories: 330,
    ingredients: [
      { name: "精选小肋排段", amount: "500g", category: "肉禽" },
      { name: "大蒜瓣(捣碎打成浓蒜汁)", amount: "50g", category: "蔬菜" },
      { name: "生抽、料酒、生粉、蛋黄", amount: "各适量", category: "调料" },
      { name: "椒盐粉、辣椒粉", amount: "各1茶匙", category: "调料" },
      { name: "红椒粒、葱花", amount: "各15g", category: "蔬菜" }
    ],
    steps: [
      "小肋排斩成3厘米短小块，清水浸泡反复清洗除去血水后充分吸干水分。",
      "大蒜捣碎加少许水挤出浓厚蒜汁，排骨加入蒜汁、生抽、料酒、白糖、一个蛋黄与适量生粉抓捏均匀腌制30分钟以上。",
      "起油锅烧至五成温热（约150℃），逐块放入排骨，小火慢炸约6分钟至排骨熟透呈浅金黄色捞出。",
      "大火升高油温至八成热，投入排骨高温复炸40秒至外皮金黄酥脆焦硬，捞出控油。",
      "锅留底油爆香红椒粒与葱花，下入炸排骨撒入椒盐粉翻颠均匀装盘。"
    ],
    tips: "大蒜用料理机打成蒜汁腌制，比蒜末更能深入排骨纤维，且炸制时不会因表面沾蒜粒而发焦变苦。"
  },
  {
    id: "rec_snack_21",
    name: "避风塘香酥鱿鱼圈",
    subtitle: "金黄炸蒜蓉裹满酥脆鱿鱼圈，外脆里嫩弹牙无比，港式排档经典名品",
    photoUrl: pMap["避风塘香酥鱿鱼圈"],
    region: "港式经典",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["炸蒜浓香", "金黄香酥", "鲜甜弹牙"],
    cookingMethod: "酥炸避风塘",
    difficulty: "需要火候",
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    servings: 2,
    calories: 250,
    ingredients: [
      { name: "鲜鱿鱼圈", amount: "300g", category: "海鲜水产" },
      { name: "自制炸金蒜碎", amount: "40g", category: "辅料" },
      { name: "面包糠", amount: "30g", category: "干货香料" },
      { name: "干红辣椒段、葱花", amount: "各15g", category: "蔬菜" },
      { name: "椒盐粉", amount: "1茶匙", category: "调料" },
      { name: "酥炸裹粉/淀粉", amount: "适量", category: "调料" }
    ],
    steps: [
      "鱿鱼圈撕去外皮洗净吸干水分，加料酒、白胡椒粉和少许盐腌制10分钟。",
      "锅中倒油，中小火慢炸蒜蓉至金黄酥脆捞出沥干即成金蒜，面包糠也微炒至金黄酥香。",
      "鱿鱼圈均匀裹上一层脆浆或干淀粉。",
      "油温烧至七成热，下入鱿鱼圈炸至定型变硬微金黄捞出，再升高油温复炸20秒捞出沥油。",
      "锅底留底油爆香干辣椒段与葱花，倒入炸鱿鱼圈、金蒜与面包糠，撒入椒盐粉大火翻颠均匀出锅。"
    ],
    tips: "炸蒜蓉火候要掌握好，七成黄时立刻关火捞出，余温会使蒜色变金黄，过火则会发苦。"
  },
  {
    id: "rec_snack_22",
    name: "老酒馆酥脆炸花生米",
    subtitle: "慢油温炸透至颗颗红亮酥脆，出锅喷白酒撒细盐，放三天依旧酥香",
    photoUrl: pMap["老酒馆酥脆炸花生米"],
    region: "老字号酒馆",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["原香酥脆", "咸香微咸", "越嚼越香"],
    cookingMethod: "冷油炸香",
    difficulty: "需要耐心",
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    servings: 4,
    calories: 320,
    ingredients: [
      { name: "优质红皮花生米", amount: "350g", category: "坚果" },
      { name: "高度白酒", amount: "1茶匙", category: "调料" },
      { name: "精细食用盐", amount: "1茶匙", category: "调料" },
      { name: "花生油/食用油", amount: "适量", category: "食用油" }
    ],
    steps: [
      "红皮花生挑除坏豆，用温水冲洗一遍沥干水分并充分用厨房纸擦干（洗去灰尘且防止油炸外焦里生）。",
      "凉锅冷油下入花生米，油量没过花生米表面即可，开中小火慢慢升温加热。",
      "炸制过程中用锅铲持续轻柔翻动，当油温升高听见锅内噼啪爆裂声频繁响起，花生颜色由浅红变深红时立即关火。",
      "关火利用余温再翻炸30秒，用漏勺捞出花生米沥油装在大平盘中摊开散温。",
      "趁热喷洒入一茶匙高度白酒翻匀（白酒挥发能带走多余水分使花生格外酥脆），待温度降至温热时撒入细盐翻匀放凉即可。"
    ],
    tips: "冷油下锅、中小火慢升温是炸花生的核心秘诀；出锅趁热喷一勺高度白酒，放三天都保持嘎嘣脆。"
  },
  {
    id: "rec_snack_23",
    name: "秘制麻辣干锅鸭头",
    subtitle: "卤后对半切开大火干锅炸透，干辣椒花椒孜然爆炒，酥烂入骨麻辣过瘾",
    photoUrl: pMap["秘制麻辣干锅鸭头"],
    region: "北方江湖",
    cuisineCategory: "微醺下酒",
    categoryType: "dish",
    isDrinkingSnack: true,
    flavor: ["麻辣焦酥", "酱香入骨", "干香浓郁"],
    cookingMethod: "干锅爆炒",
    difficulty: "需要火候",
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 3,
    calories: 270,
    ingredients: [
      { name: "熟卤鸭头", amount: "6个(纵向对半剖开)", category: "肉禽" },
      { name: "干红辣椒段、青红花椒", amount: "各25g", category: "干货香料" },
      { name: "炸土豆条/藕条", amount: "100g", category: "蔬菜" },
      { name: "洋葱块、芹菜段", amount: "各50g", category: "蔬菜" },
      { name: "大蒜瓣、姜片", amount: "各20g", category: "蔬菜" },
      { name: "干锅酱/麻辣香锅底料", amount: "1.5大勺", category: "调料" },
      { name: "白芝麻、熟花生碎", amount: "各10g", category: "坚果" }
    ],
    steps: [
      "熟鸭头顺着中间缝隙纵向劈成两半，用厨房纸吸干表面卤汁。",
      "油锅烧至七成热，下入鸭头大火炸约2分钟至外皮干香微脆焦硬捞出沥油。",
      "锅留底油爆香大蒜瓣、姜片、花椒与干辣椒段，加入干锅酱小火煸炒出红油。",
      "下入洋葱块、芹菜段、炸好的藕条/土豆条和炸鸭头，大火猛烈翻炒2分钟使干锅酱汁完全裹住鸭头。",
      "撒入少许孜然粉和白糖提味，翻匀后装入干锅中，表面撒熟白芝麻与香菜即可上桌小火慢煨。"
    ],
    tips: "鸭头必须先卤入味再对半切开油炸，这样鸭脑、鸭下巴骨头都能炸得酥脆焦香，一咬即碎。"
  }
];

// Now load existing recipes and append
const webFile = path.join(__dirname, '../js/data/recipes.js');
const androidFile = path.join(__dirname, '../android_build/assets/js/data/recipes.js');

function updateFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
  const existing = fn({});
  
  // Check if any snack already present to avoid duplication
  const existingIds = new Set(existing.map(r => r.id));
  const toAdd = newRecipes.filter(r => !existingIds.has(r.id));
  
  const combined = existing.concat(toAdd);
  const newContent = `/**\n * 咕嘟食谱 - ${combined.length}道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ${JSON.stringify(combined, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated ${filePath}: Total recipes now = ${combined.length} (+${toAdd.length} new)`);
}

updateFile(webFile);
if (fs.existsSync(androidFile)) {
  updateFile(androidFile);
}
