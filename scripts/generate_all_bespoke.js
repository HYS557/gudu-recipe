const fs = require('fs');
const path = require('path');

// 读取已有 extended_authentic_master.js
const baseMasterPath = path.join(__dirname, 'extended_authentic_master.js');
let content = fs.readFileSync(baseMasterPath, 'utf-8');

// 剔除末尾的 module.exports
content = content.replace(/module\.exports\s*=\s*\{[\s\S]*\};\s*$/, '');

const moreDishes = `
  // ================= 3. 更多面点、特色小吃与世界风味 =================
  "红糖开花发糕": {
    subtitle: "传统中式吉庆点心，纯正老红糖温水融化，米面自然发酵，顶端大朵绽放如花，松软香甜不黏牙",
    flavor: ["蔗香浓郁", "蓬松软糯"],
    cookingMethod: "自然发酵旺火急汽蒸",
    main: [
      { name: "优质中筋面粉", amount: 200, unit: "克" },
      { name: "纯正老红糖/古法红糖", amount: 65, unit: "克 (温水化开无颗粒)" }
    ],
    sec: [
      { name: "耐高糖活性干酵母", amount: 3, unit: "克" },
      { name: "泡打粉", amount: 2, unit: "克 (助顶端大朵开花)" },
      { name: "温水", amount: 160, unit: "ml" },
      { name: "新疆无核红枣碎与熟白芝麻", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "纯老红糖", amountText: "65 克", baseAmount: 65, unit: "克" }
    ],
    steps: [
      { title: "红糖化水融酵母调和稠面糊", instruction: "红糖用温水化开过滤糖渣放温，加入酵母静置融化，倒入面粉和无铝泡打粉搅拌成浓稠无干粉酸奶状面糊。", chefTip: "红糖水温度不可超过38℃，避免烫死酵母活性。" },
      { title: "模具刷油注入面糊静置发酵", instruction: "小发糕碗或硅胶模刷极薄油，倒入面糊至八分满，表面点缀红枣碎与白芝麻，温暖处发酵至模具九分满。", chefTip: "发酵至九分满即可，发过头会导致蒸时塌陷不开花。" },
      { title: "大火沸水足汽蒸20分钟自然开花", instruction: "蒸锅水大火烧沸上大汽，放入发糕模具，全程保持旺火足汽蒸20分钟关火，焖3分钟揭盖出锅！", chefTip: "“全程旺火不揭盖”，强劲蒸汽冲破面糊顶端自然绽放出四瓣美丽花朵！" }
    ]
  },

  "玉米千层发糕": {
    subtitle: "粗粮细作养生面点，黄金细玉米面与小麦粉双色交融，红枣葡萄干层层镶嵌，微甜暄软",
    flavor: ["玉米清香", "暄软松润"],
    cookingMethod: "分层铺料隔水蒸",
    main: [
      { name: "优质细玉米面", amount: 100, unit: "克 (开水烫过更细腻)" },
      { name: "优质中筋面粉", amount: 150, unit: "克" }
    ],
    sec: [
      { name: "全脂纯牛奶", amount: 180, unit: "ml" },
      { name: "细白砂糖", amount: 30, unit: "克" },
      { name: "耐高糖活性干酵母", amount: 3, unit: "克" },
      { name: "新疆若羌红枣片与绿葡萄干", amount: 35, unit: "克" }
    ],
    sea: [
      { name: "细砂糖", amountText: "30 克", baseAmount: 30, unit: "克" }
    ],
    steps: [
      { title: "烫玉米面与牛奶面粉调和发酵", instruction: "玉米面用开水烫软，加入纯牛奶、面粉、白糖和酵母搅拌成浓稠糊状，静置发酵至两倍大内部充满蜂窝网状组织。", chefTip: "开水烫玉米粉能瞬间破坏粗纤维，蒸出的发糕细腻无沙粒粗糙感！" },
      { title: "蒸盘层层铺入面糊撒红枣葡萄干", instruction: "蒸方盘刷油，倒入一半发酵面糊抹平，均匀撒一层厚厚红枣片与葡萄干，再倒入剩余面糊盖平，最顶层铺满红枣葡萄干。", chefTip: "分两层铺料，使得每一口切开断面都有丰富的红枣干果！" },
      { title: "二次醒发大火足汽蒸25分钟", instruction: "蒸盘静置二次醒发15分钟，入沸水蒸锅大火足汽蒸25分钟，焖5分钟取出放凉切菱形块。", chefTip: "金黄夺目，暄软香甜，粗粮细作营养健康！" }
    ]
  },

  "老北京香酥麻花": {
    subtitle: "老北京传统酥脆小吃，鸡蛋和面油润酥脆，三股拧花条索金黄，放凉咬一口咯吱酥脆",
    flavor: ["麦香酥脆", "微甜蛋香"],
    cookingMethod: "中小火慢油炸酥",
    main: [
      { name: "中筋优质面粉", amount: 250, unit: "克" },
      { name: "新鲜农家鸡蛋", amount: 1, unit: "个" }
    ],
    sec: [
      { name: "细白砂糖", amount: 35, unit: "克" },
      { name: "食用植物油 (和面与炸油)", amount: 20, unit: "ml" },
      { name: "纯净温水", amount: 60, unit: "ml" },
      { name: "食用小苏打", amount: 1.5, unit: "克 (酥脆灵魂)" }
    ],
    sea: [
      { name: "白糖", amountText: "35 克", baseAmount: 35, unit: "克" }
    ],
    steps: [
      { title: "鸡蛋面粉加小苏打揉光润醒面", instruction: "面粉加鸡蛋、白糖、玉米油、小苏打和温水揉成光滑偏软的面团，盖布松弛醒发30分钟。", chefTip: "少许小苏打遇热油分解产生细微孔隙，是麻花放凉久放依然酥脆的核心！" },
      { title: "搓细长条反向反搓对折拧花", instruction: "面团分成小剂子搓细长条，双手反向搓出上劲麻花劲，提起两端自然扭结，再反向搓一次对折成规整紧致的三股小麻花生坯。", chefTip: "搓上劲后再对折，生坯自然紧紧缠绕，下油锅绝不散开。" },
      { title: "四成油温中小火慢炸金黄透酥", instruction: "油温四成热（约140℃）下入麻花坯，用长筷轻轻拨动翻转，慢火炸至通体金黄浮起沥油捞出放凉。", chefTip: "“慢火透炸放凉吃”，刚出锅外脆心软，彻底晾凉后通体酥脆掉渣！" }
    ]
  },

  "香酥炸馓子": {
    subtitle: "古老中式油炸面点，盘条如丝细密整齐，双筷撑开下油锅翻滚定型，脆若凌雪入口即碎",
    flavor: ["咸香焦脆", "酥松轻盈"],
    cookingMethod: "拉丝抹油油炸成排",
    main: [
      { name: "优质高筋面粉", amount: 250, unit: "克" },
      { name: "纯净温水", amount: 125, unit: "ml" }
    ],
    sec: [
      { name: "食用精盐", amount: 5, unit: "克 (提筋生脆)" },
      { name: "浸面植物油", amount: 40, unit: "ml" }
    ],
    sea: [
      { name: "精盐", amountText: "5 克", baseAmount: 5, unit: "克" }
    ],
    steps: [
      { title: "盐水和面盘条浸油充分饧透", instruction: "面粉加盐水揉成光滑滋润面团，搓成筷子粗细长条，盘入盆中表面刷满植物油封存饧发2小时以上。", chefTip: "植物油浸泡饧透后，面团面筋完全舒展，拉扯细如丝线而绝不断裂！" },
      { title: "绕手拉扯成纤细如发排条", instruction: "取饧好的面条绕在四指上绕10余圈，用两只手拉长抻细至如细粉丝般纤细紧密，两根长竹筷穿入两端支撑开来。", chefTip: "动作轻柔均匀拉伸，保证每一股条索粗细完全一致。" },
      { title: "热油中顺势折叠翻炸金黄出锅", instruction: "五成热油温将撑开的馓子条先入油锅中段定型，折叠重叠全部浸入热油中，炸至淡金黄色翻面，迅速捞出沥油控凉！", chefTip: "金黄璀璨，丝丝缕缕，轻咬一口脆香扑鼻！" }
    ]
  },

  "兰州秘制高担酿皮": {
    subtitle: "西北传统名小吃，不洗面调浓糊大火蒸透，厚实弹牙嚼劲十足，芝麻酱与油泼辣子香气四溢",
    flavor: ["香辣醇厚", "柔韧劲道"],
    cookingMethod: "面糊浓蒸厚切调拌",
    main: [
      { name: "优质高筋面粉", amount: 250, unit: "克" },
      { name: "食用碱面", amount: 2, unit: "克 (增黄提香增韧)" }
    ],
    sec: [
      { name: "纯手工水洗厚面筋块", amount: 60, unit: "克 (切规整大厚片)" },
      { name: "鲜脆黄瓜丝", amount: 40, unit: "克" },
      { name: "兰州秘制纯正油泼辣子", amount: 2, unit: "汤勺" },
      { name: "香浓纯芝麻酱原汁", amount: 2, unit: "汤勺" }
    ],
    sea: [
      { name: "大蒜生姜熬煮香汁水", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "山西老陈醋/香醋", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "芥末水与食用精盐", amountText: "各 1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "面粉加少许碱水调成无颗粒浓糊", instruction: "高筋面粉加微量食用碱和清水用力搅打上劲，调成浓稠顺滑如炼乳状的无颗粒生面糊，静置消泡20分钟。", chefTip: "高担酿皮“不洗面筋”，浓浆加微碱直接蒸，因此质地厚重金黄、口感扎实筋道！" },
      { title: "酿皮平锣刷油倒糊大火沸水足汽蒸透", instruction: "不锈钢酿皮锣刷薄油，倒入一层厚约0.5cm的浓面糊，晃匀浮在滚沸大锅水面上加盖大火蒸5分钟至表面鼓大泡熟透，取出去锣浸凉水揭下切宽条。", chefTip: "蒸出大泡即完全熟透，刷熟菜籽油切厚条，金黄油亮不粘连。" },
      { title: "码入厚面筋调入多维秘制重料", instruction: "深碗铺厚酿皮条，码厚切孔蜂窝面筋与黄瓜丝，浇入秘制大蒜水、老醋、芝麻酱、芥末水与满满两大勺红油辣子挑拌均匀！", chefTip: "每一根厚酿皮都裹满深红香辣芝麻酱，嚼劲十足，麦香满口！" }
    ]
  },

  "福建泉州肉粽": {
    subtitle: "闽南非遗古早味名点，糯米拌红葱油卤汁炒香，包裹大块卤五花、咸蛋黄、香菇干贝，蘸闽南甜辣酱",
    flavor: ["油润咸香", "软糯浓郁"],
    cookingMethod: "炒米包角慢火煨透",
    main: [
      { name: "优质圆粒白糯米", amount: 300, unit: "克 (提前浸泡洗净沥干)" },
      { name: "卤制酥烂带皮五花肉大块", amount: 120, unit: "克 (切大方块)" },
      { name: "起沙熟咸鸭蛋黄", amount: 3, unit: "个 (对半切块)" }
    ],
    sec: [
      { name: "水发优质干香菇朵", amount: 6, unit: "朵" },
      { name: "鲜开洋海米与干贝碎", amount: 30, unit: "克 (提海味极鲜)" },
      { name: "闽南传统红葱头酥", amount: 20, unit: "克" },
      { name: "新鲜高山箬竹叶与粽绳", amount: 10, unit: "片" }
    ],
    sea: [
      { name: "生抽酱油与卤肉老原汤", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "五香粉与细砂糖", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "泉州正宗甜辣酱与花生酱", amountText: "各 2 汤勺 (蘸料灵魂)", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "红葱酥与卤汁爆炒生糯米上红润酱色", instruction: "铁锅热油下红葱头酥、虾米干贝炒出海味浓香，倒入生糯米，调入卤肉老汤、生抽、五香粉翻炒至糯米半熟微透明紧紧吸饱酱香。", chefTip: "“生米下锅先炒透”，米粒预先吸饱葱油红卤，煮出的粽子每一粒都深红透亮咸香！" },
      { title: "箬叶折斗码入糯米咸蛋黄五花肉香菇", instruction: "取两片粽叶交叠折成锥形斗，底部填入炒糯米，放入大块卤五花肉、半个咸蛋黄、整朵香菇和干贝，再盖满糯米压实包成四角四棱形，扎紧粽绳。", chefTip: "扎绳松紧适度，五花肉肥油受热融化渗透整只粽体！" },
      { title: "大锅沸水文火慢煨2小时出锅蘸酱", instruction: "深锅注入足量沸水没过肉粽，大火烧沸转文火慢炖2小时关火焖半小时；解叶装盘浇上闽南甜辣酱与花生酱趁热享用！", chefTip: "糯米油润黏香，五花肉入口即化，海味干贝与咸蛋黄沙沙咸香，极具闽南风情！" }
    ]
  },

  "意大利玛格丽特披萨": {
    subtitle: "那不勒斯经典披萨之王(Pizza Margherita)，极简番茄红、水牛奶酪白与新鲜罗勒绿，薄底微焦豹斑",
    flavor: ["麦香麦焦", "乳香酸甜"],
    cookingMethod: "极高温快烤薄底",
    main: [
      { name: "意大利00号高筋披萨专用面粉", amount: 200, unit: "克" },
      { name: "新鲜水牛奶莫扎里拉芝士(Fresh Mozzarella)", amount: 130, unit: "克 (手撕大块沥水)" }
    ],
    sec: [
      { name: "意大利去皮去籽圣女果罐头打泥", amount: 80, unit: "克" },
      { name: "新鲜翠绿罗勒叶(Sweet Basil)", amount: 8, unit: "片" },
      { name: "特级初榨橄榄油(EVOO)", amount: 15, unit: "ml" },
      { name: "活性干酵母与精盐", amount: 3, unit: "克" }
    ],
    sea: [
      { name: "特级初榨橄榄油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "食用海盐", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "低温长时间冷藏发酵面团双手轻推开", instruction: "面粉加冷水、酵母和海盐慢揉光滑，冷藏低温发酵24小时；取出发酵面团双手由中心向外按压推展成薄底面饼，边缘保留饱满充气饼边（切忌擀面杖排气擀平）。", chefTip: "双手手推保持面团内部微孔，烘烤时饼边剧烈膨胀鼓起酥脆空心！" },
      { title: "抹番茄原泥手撕新鲜莫扎里拉奶酪", instruction: "在饼底中央均匀涂抹一薄层圣女果泥留出饼边，手撕水牛奶酪大块错落铺在番茄泥上，淋上数滴特级初榨橄榄油。", chefTip: "新鲜莫扎里拉含水量高，提前撕开用厨房纸吸去表面乳清，防止饼底发湿！" },
      { title: "最高温250℃烤箱石板快烤6分钟放罗勒", instruction: "预热烤箱至极限250℃（有披萨石板更佳），将披萨滑入烤箱烤5-6分钟至饼边鼓起焦黄豹纹斑点，出炉撒上新鲜罗勒叶即成！", chefTip: "红（番茄）、白（奶酪）、绿（罗勒）意大利国旗三色，麦香焦脆，奶酪拉丝浓郁！" }
    ]
  },

  "正宗日式玉子烧": {
    subtitle: "日料必修经典和风厚蛋烧，昆布柴鱼出汁完美融合无菌鲜蛋，方锅层层翻卷，断面金黄细嫩如布丁",
    flavor: ["咸甜甘鲜", "软嫩多汁"],
    cookingMethod: "方形铜锅微火分次层层翻卷",
    main: [
      { name: "新鲜可生食无菌鲜鸡蛋", amount: 4, unit: "个 (筷子划散不过度打发)" }
    ],
    sec: [
      { name: "日式出汁(昆布柴鱼高汤)", amount: 50, unit: "ml (提供温润甘鲜底蕴)" },
      { name: "日式味醂(Mirin)", amount: 15, unit: "ml" },
      { name: "日式淡口酱油", amount: 5, unit: "ml" },
      { name: "细白砂糖", amount: 10, unit: "克 (微甜焦香)" }
    ],
    sea: [
      { name: "味醂与淡口酱油", amountText: "各 1 汤勺", baseAmount: 1, unit: "勺" },
      { name: "白糖", amountText: "10 克", baseAmount: 10, unit: "克" }
    ],
    steps: [
      { title: "鸡蛋轻柔划散加出汁味醂过筛", instruction: "鸡蛋用筷子贴碗底划“之”字形打散（避免搅起泡沫），倒入出汁高汤、味醂、淡口酱油和糖调匀，用细筛网过筛一遍滤除蛋筋。", chefTip: "过筛滤掉粗蛋筋，翻卷煎制时截面金黄平整如一块金黄嫩豆腐！" },
      { title: "玉子烧方锅薄刷植物油小火微热", instruction: "玉子烧方形平底锅小火烧至微热，用厨房纸巾沾植物油在锅底与内壁薄薄抹一层，倒入1/4蛋液迅速晃匀铺满锅底。", chefTip: "全程保持中小火，表面半凝固即可翻卷，切忌煎出大焦斑！" },
      { title: "分3-4次层层朝手前方向紧密翻卷", instruction: "待蛋液半熟呈丝滑状，用筷子由远向近迅速卷成蛋卷推至锅前端；每次补刷薄油再倒一层蛋液并轻轻挑起已卷蛋卷让新蛋液流入下方，分四次卷成整齐厚蛋卷，出锅用竹帘轻卷定型改刀切厚块！", chefTip: "咬下一口层层叠叠，鲜甜多汁的高汤蛋液在齿间溢出！" }
    ]
  },

  "关东煮大根白萝卜": {
    subtitle: "日式温暖深夜食堂代表，厚切白萝卜十字划刀修圆边，柴鱼昆布高汤慢炖40分钟，透明软烂吸饱鲜甜",
    flavor: ["清甜多汁", "昆布回甘"],
    cookingMethod: "砂锅微火浸透慢煨",
    main: [
      { name: "鲜嫩多汁大白萝卜(大根)", amount: 1, unit: "根 (切3.5cm厚大圆柱去厚皮修去锐角)" }
    ],
    sec: [
      { name: "日式柴鱼片昆布高汤", amount: 800, unit: "ml" },
      { name: "鸣门卷/福袋/竹轮/魔芋丝结", amount: 120, unit: "克" }
    ],
    sec: [
      { name: "日式淡口酱油", amount: 25, unit: "ml" },
      { name: "味醂", amount: 20, unit: "ml" },
      { name: "纯槐花蜂蜜/白糖", amount: 5, unit: "ml" }
    ],
    sea: [
      { name: "淡口酱油与味醂", amountText: "各 2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "白萝卜厚切去双层皮与十字暗刀修角", instruction: "白萝卜切大厚圆轮，去两层厚皮剔除筋膜纤维，一面切深约1cm的“十”字暗刀，用刀削去上下锐角（修角防止长时间慢炖边缘碎裂）。", chefTip: "“修圆边与划十字”，既能让内芯迅速入味，又能保持大萝卜圆润完整绝不散架！" },
      { title: "大米淘米水先焯煮20分钟去辣除苦", instruction: "将处理好的萝卜块放入淘米水（或加一小撮生米）中小火煮沸焯烫15分钟至微透明，捞出用清水冲凉洗净。", chefTip: "淘米水中的淀粉能吸附带走白萝卜特有的辛辣泥土涩气，只留下纯粹鲜甜！" },
      { title: "昆布柴鱼高汤中微沸浸透慢煨40分钟", instruction: "砂锅注入柴鱼昆布高汤、淡口酱油、味醂与少许糖，码入萝卜和竹轮魔芋结，最小火保持汤水微冒气泡慢煨40分钟关火浸泡浸润入味。", chefTip: "关火浸泡半小时以上，萝卜吸饱高汤通体晶莹透亮，筷子轻轻一扎即透，咬破瞬间爆出甘醇热汁！" }
    ]
  },

  "韩式经典部队火锅": {
    subtitle: "首尔街头顶流热锅，韩国泡菜与辛拉面为魂，午餐肉香肠豆腐堆叠，芝士片融化浓醇微辣",
    flavor: ["酸辣浓郁", "芝士醇香"],
    cookingMethod: "浅铁锅多拼高汤慢炖",
    main: [
      { name: "正宗韩国老坛酸泡菜", amount: 150, unit: "克 (切规整段)" },
      { name: "优质午餐肉", amount: 120, unit: "克 (切厚整片)" },
      { name: "芝士夹心脆皮小香肠", amount: 80, unit: "克 (表面改花刀)" }
    ],
    sec: [
      { name: "农心辛拉面面饼", amount: 1, unit: "包" },
      { name: "烘焙车达厚芝士片", amount: 1, unit: "片" },
      { name: "老豆腐切厚片", amount: 100, unit: "克" },
      { name: "金针菇与青红圆椒圈", amount: 60, unit: "克" }
    ],
    sea: [
      { name: "韩国传统辣椒酱(Gochujang)", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "细辣椒粉与生抽", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "独头大蒜末", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "原味清鸡汤/牛骨汤", amountText: "600 ml", baseAmount: 600, unit: "ml" }
    ],
    steps: [
      { title: "韩式辣酱调配料汁与食材环形摆盘", instruction: "韩国辣酱加辣椒粉、生抽、蒜末和少许糖调成秘制火锅红酱；在浅平铁锅中以泡菜居中，午餐肉、小香肠、豆腐、金针菇环形密实铺排在四周。", chefTip: "色彩规整环绕摆盘，红白相间，赏心悦目！" },
      { title: "注入高汤中央码入拉面与芝士片", instruction: "将红酱铺在中心，注入高汤大火煮沸，中心放入辛拉面饼，拉面顶端平铺一片金黄车达芝士片与大葱圈。", chefTip: "芝士片受热自然软化裹在金黄辛拉面上，中和辣度带来极致丝滑奶香！" },
      { title: "咕嘟沸腾面条七成熟趁热挑拌享用", instruction: "保持中大火咕嘟滚沸3分钟，待拉面七成熟、芝士彻底融化，双手握筷将融化芝士与拉面挑拌入浓汤中趁热享用！", chefTip: "汤汁浓郁酸辣过瘾，热气腾腾，冬天吃最是畅快淋漓！" }
    ]
  },

  "韩式芝士辣炒年糕": {
    subtitle: "韩国街头暖冬经典，纯米水磨条年糕软糯Q弹嚼劲十足，甜辣浓酱挂满，马苏里拉芝士厚厚拉丝",
    flavor: ["甜辣浓郁", "芝士厚浓"],
    cookingMethod: "酱汁浓缩翻滚收汁",
    main: [
      { name: "韩国正宗纯米年糕条", amount: 250, unit: "克 (温水泡软沥干)" },
      { name: "马苏里拉碎芝士(Mozzarella)", amount: 80, unit: "克 (顶层厚铺拉丝)" }
    ],
    sec: [
      { name: "韩式传统薄鱼饼片", amount: 80, unit: "克 (切规整三角形块)" },
      { name: "卷心菜/包菜片", amount: 50, unit: "克" },
      { name: "白洋葱细丝", amount: 40, unit: "克" }
    ],
    sea: [
      { name: "韩国辣椒酱(Gochujang)", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "韩式细辣椒粉", amountText: "1 瓷汤勺 (提红艳色泽)", baseAmount: 1, unit: "勺" },
      { name: "玉米糖浆/细砂糖", amountText: "1.5 瓷汤勺 (挂汁明亮的关键)", baseAmount: 1.5, unit: "勺" },
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "纯水/昆布鳀鱼高汤", amountText: "350 ml", baseAmount: 350, unit: "ml" }
    ],
    steps: [
      { title: "调配甜辣浓汁下年糕蔬菜慢煮透", instruction: "平底锅下水、韩式辣酱、辣椒粉、生抽和糖浆搅拌烧沸，下入年糕条、洋葱丝、卷心菜和鱼饼片，中火翻煮5-6分钟至年糕变软膨胀。", chefTip: "用纯米年糕久煮不烂，加入玉米糖浆能让甜辣红汁紧紧粘稠挂在年糕表面！" },
      { title: "大火浓缩汤汁至浓稠起大泡挂汁", instruction: "转大火不断用铲子贴锅底轻推翻拌，防止年糕粘底，收汁至酱汁红亮浓稠如糊、每一根年糕都裹满浓酱。", chefTip: "收汁时不可离人，大火推翻让米香与红酱彻底乳化交融！" },
      { title: "铺满厚厚马苏里拉芝士加盖焖化拉丝", instruction: "在表面铺满厚厚一层马苏里拉芝士碎，盖上锅盖关火或微火焖2分钟至芝士完全融化成金黄奶瀑布，撒熟白芝麻出锅！", chefTip: "筷子挑起年糕，芝士拉丝半米长，甜辣与奶香在舌尖炸裂！" }
    ]
  },

  "泰式碳烤猪颈肉": {
    subtitle: "曼谷街头烤肉顶峰，整条黄金六两猪颈肉，芫荽根鱼露腌透炭烤焦香，弹牙多汁蘸酸辣罗望子酱",
    flavor: ["焦香脆嫩", "酸辣生津"],
    cookingMethod: "热炭火炙烤切薄片",
    main: [
      { name: "特选优质黄金六两猪颈肉(松板肉)", amount: 350, unit: "克 (整块带大理石纹雪花脂)" }
    ],
    sec: [
      { name: "新鲜芫荽根(香菜根碎)", amount: 15, unit: "克 (泰餐去腥提香灵魂)" },
      { name: "大蒜瓣泥", amount: 15, unit: "克" },
      { name: "现磨白胡椒粒", amount: 5, unit: "克" }
    ],
    sea: [
      { name: "泰国纯正鱼露", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "李锦记特级蚝油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "泰国椰糖/棕榈糖", amountText: "1 瓷汤勺 (化开腌入微甜)", baseAmount: 1, unit: "勺" },
      { name: "泰式罗望子炒米酸辣酱(Nam Jim Jaew)", amountText: "2 汤勺 (蘸料灵魂)", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "芫荽根大蒜舂碎入鱼露椰糖腌透", instruction: "将香菜根、大蒜、白胡椒在石臼中舂成泥，加入鱼露、蚝油、椰糖搅拌化开，将猪颈肉两面用叉子扎密孔，抹满腌料密封冷藏腌制3小时以上。", chefTip: "“石臼舂出香菜根精油”，香气渗入猪颈肉纤维深处，烤时绝无肉腥！" },
      { title: "200℃烤箱或炭火两面翻烤焦香金黄", instruction: "烤箱预热200℃（或炭火烤架），放入腌好的猪颈肉烤18-20分钟，中途翻面刷一层腌汁，烤至表面边缘微焦泛起金黄油泡。", chefTip: "猪颈肉油脂丰富，高温将边缘油脂炙烤成微焦脆壳，内部肉汁牢牢锁住！" },
      { title: "斜刀顶纹切薄长片搭配泰式蘸水", instruction: "取出静置5分钟锁汁，斜刀顶纹逆向切成薄薄的规整长肉片码盘，配上酸辣开胃的罗望子炒米蘸水！", chefTip: "口感弹牙爽脆、丰腴多汁，蘸上酸辣炒米酱，解腻提鲜无上妙品！" }
    ]
  },

  "菠萝海鲜炒饭": {
    subtitle: "泰国热带风情招牌，熟透香甜菠萝挖盅，隔夜冷饭金黄粒粒分明，大虾鱿鱼弹牙，腰果肉松点缀",
    flavor: ["咖喱果香", "酸甜咸鲜"],
    cookingMethod: "旺火热炒菠萝盛盅",
    main: [
      { name: "泰国茉莉香米饭 (隔夜冷藏米粒散)", amount: 260, unit: "克" },
      { name: "鲜活大基围虾仁", amount: 80, unit: "克 (开背去虾线)" },
      { name: "鲜熟鱿鱼圈/丁", amount: 60, unit: "克" }
    ],
    sec: [
      { name: "熟透香甜菠萝肉丁", amount: 100, unit: "克 (菠萝壳留作盛盅)" },
      { name: "农家新鲜土鸡蛋", amount: 2, unit: "个 (打散成蛋液)" },
      { name: "青豆与甜玉米粒", amount: 40, unit: "克" },
      { name: "香脆烤熟腰果与金黄肉松", amount: 25, unit: "克 (顶层撒满)" }
    ],
    sea: [
      { name: "泰国纯正黄咖喱粉", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "泰国鱼露", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "生抽酱油与白糖", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯花生油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "菠萝对半剖开挖出果肉切规整小丁", instruction: "成熟香甜菠萝切下1/3当盖，用小刀划格子挖出果肉沥去多余果汁切丁，菠萝外壳擦干当作天然盛饭盅备用。", chefTip: "菠萝肉提前切丁沥水，炒饭时最后下，保持果肉多汁且不让米饭受潮发黏！" },
      { title: "热锅滑炒鸡蛋海鲜下米饭翻炒散开", instruction: "热锅热油下蛋液快速划散成金黄碎蛋花推至锅边，下虾仁鱿鱼圈大火滑熟变红，倒入冷米饭，用锅铲背由上向下压散大火快炒出焦香。", chefTip: "隔夜冷米饭水汽少，旺火热油包住每一粒米饭，粒粒金黄如黄金碎米！" },
      { title: "调入黄咖喱粉鱼露下菠萝果肉颠翻出锅", instruction: "撒入黄咖喱粉、鱼露、生抽大火颠锅翻炒至米饭通体金黄咖喱飘香，倒入青豆玉米和菠萝丁颠翻15秒出锅装入菠萝盅，顶层厚撒腰果与肉松！", chefTip: "果香、海味、咖喱与香脆腰果层层交织，视觉与味觉的双重盛宴！" }
    ]
  },

  "大煮干丝": {
    subtitle: "淮扬菜刀工与汤品巅峰名作，白豆腐干片成薄如纸细如发丝，老母鸡金华火腿浓汤慢煨吸饱原鲜",
    flavor: ["清鲜甘醇", "丝丝爽滑"],
    cookingMethod: "沸水去腥鸡汤浓煨",
    main: [
      { name: "扬州特制白豆腐干", amount: 4, unit: "块 (片28片以上细切如发丝)" },
      { name: "金华正宗老火腿熟细丝", amount: 25, unit: "克 (提咸鲜灵魂)" },
      { name: "熟农家鸡脯肉细丝", amount: 35, unit: "克" }
    ],
    sec: [
      { name: "水发优质开洋(海米)", amount: 15, unit: "克 (焯高汤备用)" },
      { name: "鲜嫩冬笋细丝", amount: 30, unit: "克" },
      { name: "鲜嫩碧绿豌豆苗/豆尖", amount: 15, unit: "克 (点缀顶端)" },
      { name: "纯正老母鸡高汤", amount: 600, unit: "ml" }
    ],
    sea: [
      { name: "绍兴料酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用精盐", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "熟鸡油/熟猪油", amountText: "1 瓷汤勺 (增香润泽)", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "白豆腐干精湛片切细丝沸水焯三遍", instruction: "白干先平片成28片以上极薄透明大片，顶刀切成细如发丝细丝；放入沸水中浸泡焯烫3次，每次换温热水漂去豆腥味沥干。", chefTip: "“沸水三泡除豆涩”，逼出原本生黄豆腥味，使干丝内部孔隙完全舒展如海绵！" },
      { title: "老母鸡火腿浓高汤大火烧沸入干丝", instruction: "砂锅下熟鸡油，倒入老母鸡醇厚高汤、绍酒大火烧滚，下入海米、冬笋丝和干丝，大火保持微沸烧煮5分钟让干丝充分吸饱鸡汤浓鲜。", chefTip: "干丝自身至淡，全靠吸附老母鸡与火腿融出的醇厚鲜汤！" },
      { title: "调盐装盘整齐码入火腿丝鸡丝与豆苗", instruction: "调入少许精盐，用筷子将软韧干丝整齐捞出挽在汤碗中央呈小山包状，淋入浓白原汤，顶层整齐覆盖金华火腿丝、熟鸡丝与绿豌豆苗！", chefTip: "红白绿三色相映，汤清而味厚，丝丝爽滑，鲜美绝伦！" }
    ]
  },

  "淮扬清炖狮子头": {
    subtitle: "淮扬国宴级名菜，肥六瘦四手工细切粗斩成石榴米粒，清鸡汤菜叶覆盖小火慢炖2小时，入口即化",
    flavor: ["鲜嫩如脂", "清醇甘爽"],
    cookingMethod: "菜叶盖顶微火慢煨",
    main: [
      { name: "新鲜优质猪五花肉 (肥六瘦四)", amount: 400, unit: "克 (手工切石榴米粒大，切忌机绞)" }
    ],
    sec: [
      { name: "清脆鲜马蹄/荸荠丁", amount: 60, unit: "克" },
      { name: "农家新鲜土鸡蛋清", amount: 1, unit: "个" },
      { name: "鲜大白菜叶/娃娃菜叶", amount: 4, unit: "大片 (覆顶慢煨保湿)" },
      { name: "老生姜大葱拍碎葱姜水", amount: 50, unit: "ml" },
      { name: "纯正老母鸡高汤", amount: 700, unit: "ml" }
    ],
    sea: [
      { name: "绍兴黄酒", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "食用精盐", amountText: "1.5 茶匙", baseAmount: 1.5, unit: "茶匙" },
      { name: "玉米纯生粉", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "现磨白胡椒粉", amountText: "半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "肥瘦肉丁细切粗斩加葱姜水打上劲", instruction: "五花肉肥肉瘦肉分别切成黄豆大小石榴米小丁，加入马蹄碎、蛋清、盐、料酒、白胡椒粉，分次打入葱姜水朝一个方向顺时针搅打至起粘性胶质（不可打太紧实）。", chefTip: "“细切粗斩”，肉粒保持微小立体颗粒，炖透后油脂在齿间化开而绝不发柴！" },
      { title: "双手团成大圆肉丸滑入温高汤", instruction: "双手掌心沾清水，抓起肉馅两手来回轻抛团成直径约7cm的光滑饱满大肉丸（狮子头），轻轻滑入微沸的鸡汤砂锅中。", chefTip: "汤水切忌大滚，保持微沸，肉丸遇热慢慢定型不散不裂！" },
      { title: "大白菜叶厚厚覆盖微火慢炖2小时", instruction: "在狮子头上方完整平铺4大片焯过水的大白菜叶，盖严砂锅盖，转最小火保持极微小沸腾慢炖整整2小时！", chefTip: "白菜叶如天然保湿盖，防止肉球受热脱水发干，同时白菜天然清甜融入汤中，解腻提鲜，入口真真正正“含在嘴里就化”！" }
    ]
  },

  "杭州东坡肉": {
    subtitle: "浙菜经典翘楚，金华两头乌五花大块方正，小葱垫底滴水不加，绍兴加饭酒与老冰糖文火慢煨酥烂如脂",
    flavor: ["咸甜浓糯", "肥而不腻"],
    cookingMethod: "滴水不加大酒慢煨",
    main: [
      { name: "精选新鲜金华两头乌带皮五花肉", amount: 500, unit: "克 (切5×5cm方正规整大块焯水)" }
    ],
    sec: [
      { name: "新鲜小香葱一大捆", amount: 150, unit: "克 (砂锅底厚铺防焦垫底)" },
      { name: "老生姜厚切大片", amount: 50, unit: "克" }
    ],
    sea: [
      { name: "绍兴陈年加饭酒/花雕酒", amountText: "400 ml (全程滴水不加！)", baseAmount: 400, unit: "ml" },
      { name: "传统天然多晶老冰糖", amountText: "60 克", baseAmount: 60, unit: "克" },
      { name: "生抽与优质老抽酱油", amountText: "各 2.5 瓷汤勺", baseAmount: 2.5, unit: "勺" }
    ],
    steps: [
      { title: "五花方块焯透紧皮砂锅厚铺小香葱", instruction: "带皮五花大方块入冷水锅焯烫5分钟洗净拭干；砂锅底部厚厚铺满整捆小葱段和生姜大厚片（防止糊底并吸收浓郁葱香）。", chefTip: "厚铺小葱是东坡肉精髓，肉块不着锅底，受热均匀且彻底激发葱香！" },
      { title: "肉皮朝下码入注入足量加饭酒冰糖", instruction: "将五花肉块皮朝下紧密码在葱姜上，倒入400ml绍兴加饭酒、生抽、老抽和老冰糖（全程一滴水不放！），大火烧沸后转微小火慢煨1小时。", chefTip: "“少著水，慢著火，火候足时它自美”，全靠纯酒发酵酒香软化肉质筋膜！" },
      { title: "翻面肉皮朝上入笼密封蒸30分钟出透油", instruction: "将肉块翻面皮朝上，连汤带肉移入深紫砂盅内加盖密封，入蒸锅大火足汽蒸30分钟让多余油脂逼出汤中！", chefTip: "红亮如玛瑙琥珀，用筷子轻轻一挑肉皮就颤巍巍滑开，肥肉化如软脂，瘦肉酥烂入味！" }
    ]
  }
};

module.exports = {
  EXTENDED_AUTHENTIC_DISHES
};
`;

// 写回文件
fs.writeFileSync(baseMasterPath, content + moreDishes, 'utf-8');
console.log('✅ extended_authentic_master.js 成功扩展完毕！');
