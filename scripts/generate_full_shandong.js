// scripts/generate_full_shandong.js
const fs = require('fs');
const path = require('path');

const shandongRecipes = [
  // 10道大菜名肴 (rec_prov_193 ~ rec_prov_202)
  {
    id: "rec_prov_193",
    name: "国宴鲁菜宗师浓油葱烧海参",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 180,
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "水发上等辽刺参或胶东刺参", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "章丘大葱白(切长段)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "老母鸡排骨慢煨清浓高汤", amount: 300, unit: "ml", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "自制慢炼浓香葱油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "生抽酱油与酿造老抽", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "绍兴陈年花雕酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "冰糖与食用精盐", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "纯淀粉水(勾厚芡)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "大葱白慢火炸透炸成金黄葱油葱段",
        instruction: "章丘大葱白切5厘米长段，宽油入锅微火慢炸8-10分钟，至葱白外表金黄微焦、内里软甜，滤出金黄葱油，葱段留用。",
        timerSeconds: 600,
        chefTip: "小火慢炸才能把大葱的甜香完全提炼入油，葱段软而不烂。"
      },
      {
        stepIndex: 2,
        title: "海参高汤煨透去腥入味捞出",
        instruction: "水发海参斜切大片，投入沸水加料酒葱姜焯透；放入加少许高汤与精盐的小锅微火慢煨3分钟捞出沥干。",
        timerSeconds: 240,
        chefTip: "海参先煨入高汤底味，去除海腥味并使其吸饱底鲜。"
      },
      {
        stepIndex: 3,
        title: "浓汁慢烧入味大火淋明葱油包汁",
        instruction: "锅中下两勺自熬葱油，烹花雕酒生抽老抽高汤与冰糖烧开，下海参与炸好的葱段，中小火烧至汤汁浓郁入味，水淀粉勾浓芡，出锅前淋一勺滚烫葱油。",
        timerSeconds: 300,
        chefTip: "出锅淋生葱油使整盘菜红亮油润，葱香极其浓烈持久。"
      }
    ],
    tips: "八大菜系之首鲁菜的最高峰国宴代表！海参软糯滑润微带筋道，大葱焦黄甘甜透骨，浓油赤酱芡汁如镜，葱香扑鼻天下无双。",
    tags: ["山东", "鲁菜", "葱烧海参", "国宴头牌", "八大菜系首", "软糯浓郁"]
  },
  {
    id: "rec_prov_194",
    name: "济南名门五味俱全九转大肠",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 320,
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    difficulty: "进阶",
    portion: 3,
    ingredients: [
      { name: "熟大肠头(套叠套肠切圆墩)", amount: 400, unit: "g", type: "main", isCore: true },
      { name: "大葱末、生姜末、大蒜末", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "熟白芝麻与香菜末", amount: 10, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "镇江香醋与陈醋", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "冰糖与白糖", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "酿造酱油与花雕酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "肉桂粉、白胡椒粉、花椒油", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "食用油(炸制用)", baseAmount: 300, unit: "ml", amountText: "300ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "大肠套叠紧实切圆截温油炸至金红",
        instruction: "大肠头多层套叠紧实，煮熟定型后切成2.5厘米厚圆截段；油烧六成热下锅炸至外皮红润紧实微脆捞出。",
        timerSeconds: 300,
        chefTip: "套叠切段的大肠层次丰富，外微脆内软糯。"
      },
      {
        stepIndex: 2,
        title: "炒糖色烹料酒醋酱油五味调和煨烧",
        instruction: "锅底留少许油炒融冰糖至枣红色，下葱姜蒜末，烹花雕酒、醋、酱油和少许清汤，下入大肠段中火烧透入味。",
        timerSeconds: 420,
        chefTip: "调味融汇酸、甜、苦(肉桂)、辣(胡椒)、咸五味，达到极致平衡。"
      },
      {
        stepIndex: 3,
        title: "文火收汁紧裹肠段撒肉桂胡椒花椒油",
        instruction: "汤汁转微火慢慢晃锅收至极其浓稠红亮如琥珀，紧紧包在每一块大肠段表面，撒入肉桂粉、白胡椒粉，淋花椒油起锅。",
        timerSeconds: 180,
        chefTip: "九转大肠不用勾芡，全凭糖质与大肠胶质自来芡，汁亮醇厚。"
      }
    ],
    tips: "济南九华楼百年传世绝活！道家九炼金丹之名，大肠肥嫩软糯，酸、甜、香、辣、咸五味融为一体，层次百转千回，惊艳舌尖。",
    tags: ["山东", "鲁菜", "九转大肠", "济南传统名菜", "五味俱全", "传世名馔"]
  },
  {
    id: "rec_prov_195",
    name: "济南传统糖醋金黄黄河鲤鱼",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "炸",
    calories: 270,
    prepTimeMinutes: 20,
    cookTimeMinutes: 18,
    difficulty: "进阶",
    portion: 3,
    ingredients: [
      { name: "活黄河赤尾鲤鱼", amount: 750, unit: "g", type: "main", isCore: true },
      { name: "特制湿淀粉糊", amount: 150, unit: "g", type: "secondary", isCore: true },
      { name: "葱姜蒜碎末", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "洛口老醋或保宁醋", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true },
      { name: "白糖", baseAmount: 70, unit: "g", amountText: "70g", isPantryStaple: true },
      { name: "生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "花生油(炸制用)", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鲤鱼双面瓦垄花刀挂蛋糊提尾入油",
        instruction: "鱼身两面剖瓦垄花刀，抹少许盐与料酒抓匀；挂上浓稠湿淀粉糊；手提鱼尾鱼头朝下，勺舀滚油反复浇淋花刀使其炸开张扬成翘头扬尾姿态。",
        timerSeconds: 400,
        chefTip: "淋油定型使鱼身各瓣张开如菊，呈飞跃龙门之势。"
      },
      {
        stepIndex: 2,
        title: "浸入热油炸至金黄酥透外壳如瓦",
        instruction: "待形状定型后将整鱼滑入油锅，中大火慢炸5分钟至里外酥透，最后大火冲炸20秒逼油捞出摆盘。",
        timerSeconds: 360,
        chefTip: "外壳炸至金黄坚硬，敲打有硬壳脆响，鱼肉仍细嫩多汁。"
      },
      {
        stepIndex: 3,
        title: "熬制糖醋清芡滚沸浇淋鱼身吱吱作响",
        instruction: "锅中下少许油爆葱姜蒜，下醋、糖、生抽和水煮沸，水淀粉勾成琉璃亮芡，淋热花生油激亮，趁热从头至尾浇淋在鱼身上。",
        timerSeconds: 120,
        chefTip: "芡汁浇在滚烫鱼身上发出清脆吱吱声，外皮经久不软。"
      }
    ],
    tips: "济南黄河名门头牌！鱼身头尾翘起宛如鲤鱼跃龙门，外焦脆内鲜嫩，酸甜适口浓郁醇厚，百年大宴必点吉祥名品。",
    tags: ["山东", "鲁菜", "糖醋鲤鱼", "济南传统名菜", "鲤鱼跃龙门", "酸甜酥脆"]
  },
  {
    id: "rec_prov_196",
    name: "鲁菜绝技沸油极速爆双脆",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "爆",
    calories: 210,
    prepTimeMinutes: 20,
    cookTimeMinutes: 3,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜猪肚尖(去筋留纯嫩尖)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜鸡胗或鸭胗(切十字花刀)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "蒜瓣片、大葱末", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "一品鲜生抽与清高汤", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "绍兴花雕酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白胡椒粉与精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "纯淀粉与花生油", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "肚尖切十字密刀鸡胗切菊花花刀",
        instruction: "猪肚尖彻底剥去内外层老筋，切细密十字花刀再切方块；鸡胗平剖去硬筋切十字菊形花刀，沥极干水抓极薄湿淀粉。",
        timerSeconds: 360,
        chefTip: "刀工必须极深极密，受热瞬间才能开花卷起脆嫩。"
      },
      {
        stepIndex: 2,
        title: "八成滚沸极热油滑爆仅五秒捞出",
        instruction: "花生油烧至八成热(210度)，将双脆猛然倒入沸油中，手腕迅速画圈散开，仅4-5秒见花刀彻底炸开卷起立即倒出控油。",
        timerSeconds: 15,
        chefTip: "鲁菜油爆巅峰功力，油温极高动作极快，多一秒则如橡皮，少一秒不熟。"
      },
      {
        stepIndex: 3,
        title: "碗芡热锅猛火一颠即起装盘",
        instruction: "锅底仅留数滴底油爆蒜葱，迅速倒入清汤生抽料酒糖盐水淀粉调好的极淡碗芡，沸腾瞬间倒入双脆，颠翻两下即刻出盘。",
        timerSeconds: 15,
        chefTip: "出锅盘中绝无一丝余汁，全部紧贴在双脆花纹之间，脆响震齿。"
      }
    ],
    tips: "鲁菜刀工火候天花板绝技！传世百年极品油爆，肚尖与胗花如初绽秋菊，入口爽脆脆声在齿间爆响，咸鲜纯正令人拍案叫绝。",
    tags: ["山东", "鲁菜", "油爆双脆", "鲁菜火候天花板", "极致脆嫩", "刀工绝技"]
  },
  {
    id: "rec_prov_197",
    name: "山东德州传统五香脱骨扒鸡",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 290,
    prepTimeMinutes: 25,
    cookTimeMinutes: 90,
    difficulty: "进阶",
    portion: 4,
    ingredients: [
      { name: "山东散养活童子土鸡", amount: 1000, unit: "g", type: "main", isCore: true },
      { name: "麦芽糖水(上色用)", amount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "老葱结、生姜拍松", amount: 50, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "德州百年老汤香料包(八角桂皮砂仁草果等十六味)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "传统酿造黄豆酱油", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "纯粮料酒", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "盘鸡造型双腿别入腹中刷蜜炸金红",
        instruction: "光鸡洗净，两腿盘曲别入腹内成优美卧鸭状，控干表面涂抹一层稀麦芽糖水；入热花生油炸至全身枣红皮亮捞出。",
        timerSeconds: 420,
        chefTip: "造型是德州扒鸡传统标志，刷糖油炸锁皮定色。"
      },
      {
        stepIndex: 2,
        title: "投入十六味草本老汤大火烧开微火慢扒",
        instruction: "老汤中加入葱姜料酒酱油及十六味五香料包，下入炸好的扒鸡，大火煮沸后改极微小文火慢扒焖煨2小时。",
        timerSeconds: 7200,
        chefTip: "扒即微火慢焖，保持汤面微沸不翻滚，鸡肉酥烂而外皮丝毫不破。"
      },
      {
        stepIndex: 3,
        title: "原汤浸泡慢放凉透皮骨轻松自脱",
        instruction: "关火后在原五香浓汤中浸泡40分钟让香料药性透入骨髓，捞出时用双手微提鸡腿，骨肉自然分离脱落。",
        timerSeconds: 2400,
        chefTip: "热吃香气扑鼻，冷吃筋道回甘，骨酥肉烂无须吐骨。"
      }
    ],
    tips: "中华老字号非遗扒鸡至尊！十六种天然香料透骨入髓，色泽枣红油亮，肉嫩味纯骨肉脱化，抖一抖骨肉自然分离，回味无穷。",
    tags: ["山东", "鲁菜", "德州扒鸡", "中华老字号", "脱骨五香", "非遗传承"]
  },
  {
    id: "rec_prov_198",
    name: "传统香糟卤温油溜黑鱼片",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "溜",
    calories: 190,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "鲜活黑鱼无刺净鱼肉片", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "水发黑木耳与鲜笋片", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "蛋清与纯土豆湿淀粉", amount: 35, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "传统正宗陈年糟卤汁", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "清鸡汤或温水", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "白糖与精盐", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "水淀粉与猪油(滑油)", baseAmount: 200, unit: "ml", amountText: "200ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "黑鱼片薄片蛋清湿淀粉上厚浆",
        instruction: "鱼肉斜刀片成夹刀蝴蝶片，加盐白胡椒料酒抓透，加蛋清与纯土豆淀粉抓上乳白厚浆，封熟猪油冷藏片刻。",
        timerSeconds: 300,
        chefTip: "蛋清上浆使鱼片在油中滑出如白玉般滑嫩的质感。"
      },
      {
        stepIndex: 2,
        title: "三成温油慢滑至鱼片洁白如雪浮起",
        instruction: "熟猪油与花生油混合烧至三四成温热(110度)，下鱼片用筷子轻轻滑散，见鱼片变雪白发亮、自然漂浮立刻捞出沥油。",
        timerSeconds: 60,
        chefTip: "温油滑熟，绝不可让鱼肉变老或变色，保持洁白如玉。"
      },
      {
        stepIndex: 3,
        title: "糟卤清汤熬亮琉璃薄芡推鱼入盘",
        instruction: "锅中倒入高汤、香糟卤汁、少许白糖盐煮开，淋水淀粉推匀成极薄琉璃芡，下木耳笋片与鱼片，轻轻晃锅推匀出锅。",
        timerSeconds: 60,
        chefTip: "糟香清雅扑鼻，鱼片滑嫩到入口即化，酸甜微咸糟香深沉。"
      }
    ],
    tips: "鲁派传统宴席清溜绝品！香糟卤芳香四溢、酒香沉醉，鱼片洁白如玉光润透亮，入口滑嫩无匹，糟香经久不散。",
    tags: ["山东", "鲁菜", "糟溜鱼片", "糟香浓郁", "洁白如玉", "滑嫩清雅"]
  },
  {
    id: "rec_prov_199",
    name: "大明湖鲜鲜浓奶汤煨蒲菜",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "soup",
    cookingMethod: "煮",
    calories: 140,
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "鲜嫩湖水蒲菜嫩芯", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "金华火腿切细丝", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "水发开洋(小海米)与冬菇片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "大火熬煮浓白猪骨鸡浓奶汤", baseAmount: 600, unit: "ml", amountText: "600ml", isPantryStaple: true },
      { name: "熟猪油", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "绍兴花雕酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用精盐与白胡椒粉", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鲜嫩蒲菜切寸段沸水微焯沥干",
        instruction: "蒲菜剥除老皮取洁白内芯，切成3厘米长段；沸水中加少许盐焯水20秒去除涩味，捞出冷水浸泡沥干。",
        timerSeconds: 150,
        chefTip: "蒲菜极嫩多汁，焯水不可过久以保清甜爽脆。"
      },
      {
        stepIndex: 2,
        title: "熟猪油化开爆开洋火腿丝下奶汤",
        instruction: "热锅化开熟猪油，下海米葱姜丝爆香，倒入大火熬制的醇厚奶白高汤，大火猛滚2分钟至汤色雪白如牛乳。",
        timerSeconds: 180,
        chefTip: "纯正大火熬出的原汁奶汤，不加任何牛奶淀粉，汤色天然如奶。"
      },
      {
        stepIndex: 3,
        title: "下蒲菜冬菇慢煨三分钟调味装盅",
        instruction: "下蒲菜段、冬菇片和火腿丝，中小火煨煮3分钟让蒲菜吸透奶汤鲜味，调入盐与白胡椒粉盛入汤盅。",
        timerSeconds: 200,
        chefTip: "蒲菜清脆甘甜，奶汤醇厚鲜美，相得益彰。"
      }
    ],
    tips: "济南大明湖天下第一名汤！奶汤白如牛乳，蒲菜脆嫩多汁，金华火腿与海米吊出极致山海珍鲜，清淡高雅百喝不厌。",
    tags: ["山东", "鲁菜", "奶汤蒲菜", "济南第一汤", "浓郁醇厚", "清鲜爽口"]
  },
  {
    id: "rec_prov_200",
    name: "鲁菜传统蛋浆金黄塌老豆腐",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "煨",
    calories: 220,
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "纯卤水北豆腐(切长厚方块)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "新鲜笨鸡蛋打成均匀蛋浆", amount: 2, unit: "个", type: "main", isCore: true },
      { name: "面粉与干淀粉", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "大葱丝、生姜丝、蒜片", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "高汤或鸡汤", baseAmount: 200, unit: "ml", amountText: "200ml", isPantryStaple: true },
      { name: "生抽酱油与料酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯芝麻香油", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "精盐与白胡椒粉", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "花生油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "老豆腐切厚片扑薄粉裹金黄蛋浆",
        instruction: "豆腐切成1厘米厚方块撒少许盐；两面拍薄薄干面粉，再放入打散的蛋浆中完全浸裹。",
        timerSeconds: 180,
        chefTip: "拍面粉能让蛋液牢牢挂在豆腐表面，煎时不脱皮。"
      },
      {
        stepIndex: 2,
        title: "平底锅慢火煎至两面金黄微鼓起",
        instruction: "平底锅倒花生油，下豆腐块中小火慢煎，倒少许余下蛋液淋在缝隙中，煎至两面金黄焦香定型。",
        timerSeconds: 300,
        chefTip: "慢火烘煎，外蛋皮金黄焦脆，内豆腐嫩水充盈。"
      },
      {
        stepIndex: 3,
        title: "下葱姜丝高汤慢塌微火收汁包香",
        instruction: "拨开豆腐下葱姜丝爆香，倒入高汤、生抽、料酒，微火慢煨(塌)4分钟至汤汁完全渗入豆腐内部收浓，淋香油出锅。",
        timerSeconds: 240,
        chefTip: "塌法使煎好的豆腐重新饱吸鲜美高汤，软糯多汁。"
      }
    ],
    tips: "鲁派传统经典烹饪技法塌的鼻祖之作！外层蛋皮焦黄软韧，内芯老豆腐吸饱浓汤嫩如凝脂，葱香扑鼻咸鲜多汁。",
    tags: ["山东", "鲁菜", "锅塌豆腐", "传统塌法", "金黄软嫩", "老少皆宜"]
  },
  {
    id: "rec_prov_201",
    name: "博山传统砂锅荤素大酥锅",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 280,
    prepTimeMinutes: 30,
    cookTimeMinutes: 120,
    difficulty: "进阶",
    portion: 5,
    ingredients: [
      { name: "新鲜带皮五花肉块与猪蹄段", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新鲜海带卷与卤水炸豆腐块", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "大白菜整叶与炸小草鱼/酥鱼", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "生姜大葱拍松整把", amount: 50, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "洛口老陈醋", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true },
      { name: "传统黄豆酱油", baseAmount: 60, unit: "ml", amountText: "60ml", isPantryStaple: true },
      { name: "红糖与白糖", baseAmount: 40, unit: "g", amountText: "40g", isPantryStaple: true },
      { name: "绍兴料酒与大料花椒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "大砂锅底铺白菜梆层层码放荤素料",
        instruction: "大砂锅底铺厚厚一层白菜梆防糊，依次层层码入海带卷、炸豆腐、猪蹄五花肉、酥鱼，最顶层铺满大葱生姜和白菜叶压实。",
        timerSeconds: 600,
        chefTip: "荤素层层交叠，高温下肉脂渗入海带豆腐中，互为吸纳。"
      },
      {
        stepIndex: 2,
        title: "醋糖酱油黄金比例调卤汁淋入锅中",
        instruction: "老陈醋、酱油、红糖、料酒依博山秘传比例调成酸甜浓汁，均匀淋遍全锅，不加一滴额外清水，完全依靠白菜自身出水。",
        timerSeconds: 300,
        chefTip: "大量的陈醋在慢煨中能彻底软化鱼骨肉皮，酸味挥发留下浓郁复合香。"
      },
      {
        stepIndex: 3,
        title: "大火沸腾转微火慢焐整整三小时酥烂",
        instruction: "大火烧开出水，转极小微火加盖慢煨2-3小时，待鱼骨酥烂成泥、海带如羊脂、肉皮化胶，自然放凉切片冷食。",
        timerSeconds: 7200,
        chefTip: "放凉后汤汁凝为红亮肉冻，冷吃酸甜咸香骨肉皆酥。"
      }
    ],
    tips: "淄博博山过年必制家肥家润传世名锅！荤素十余样食材在一锅老醋浓油中极火慢煨，鱼刺化渣骨酥肉烂，海带软糯豆腐吸香，酸甜醇厚百味尽收。",
    tags: ["山东", "鲁菜", "博山酥锅", "淄博传统名菜", "酥烂醇厚", "年味非遗"]
  },
  {
    id: "rec_prov_202",
    name: "胶东正宗鲜韭菜鲅鱼大水饺",
    region: "山东",
    cuisineCategory: "鲁菜",
    categoryType: "dish",
    cookingMethod: "煮",
    calories: 230,
    prepTimeMinutes: 30,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 3,
    ingredients: [
      { name: "新鲜东海大鲅鱼(刮取纯白鱼肉茸)", amount: 400, unit: "g", type: "main", isCore: true },
      { name: "三肥七瘦肥猪五花肉泥", amount: 100, unit: "g", type: "secondary", isCore: true },
      { name: "早春鲜细韭菜末", amount: 80, unit: "g", type: "secondary", isCore: true },
      { name: "手擀大水饺皮", amount: 300, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "花椒水与生姜葱白水", baseAmount: 180, unit: "ml", amountText: "180ml", isPantryStaple: true },
      { name: "纯花生油与芝麻香油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "铁勺轻刮纯白鲅鱼肉顺方向打花椒水",
        instruction: "鲅鱼平剖去大骨，用不锈钢勺顺鱼纹刮取雪白鱼肉；分多次倒入温热花椒葱姜水，顺一个方向死劲搅打300次至鱼肉膨大成轻盈白胶泥。",
        timerSeconds: 900,
        chefTip: "鲅鱼极其喜水，必须打入足量花椒水，鱼馅才能达到多汁滑弹如果冻的效果。"
      },
      {
        stepIndex: 2,
        title: "拌入肥肉泥锁花生油最后加嫩韭菜",
        instruction: "加入五花肉泥增加油润，加盐胡椒粉搅匀，淋入花生油锁水；临包水饺前再倒入切碎的细韭菜末轻轻拌匀。",
        timerSeconds: 300,
        chefTip: "韭菜最后放防止杀水，少许韭菜只为提鲜不夺鱼味。"
      },
      {
        stepIndex: 3,
        title: "皮薄如纸大馅包成月牙沸水三开浮起",
        instruction: "面皮擀薄，包入饱满大馅捏紧；沸水下锅，点三次凉水，煮至饺子鼓胀如球、肚白朝上浮起即捞出。",
        timerSeconds: 300,
        chefTip: "咬开一汪清鲜鱼汁喷溅，滑嫩多汁鲜美至极。"
      }
    ],
    tips: "胶东半岛海边人世代相传的灵魂美食！鲅鱼肉经过千百次搅打如雪花膏般细腻，咬开饺皮汤汁四溢，鲜甜多汁无一丝鱼腥，天下第一饺。",
    tags: ["山东", "鲁菜", "鲅鱼水饺", "胶东海鲜", "鲜嫩多汁", "传统面点"]
  }
];

// 写入中间文件以便查看
console.log(`生成前10道鲁菜大菜...`);
fs.writeFileSync(path.join(__dirname, 'temp_shandong_part1.json'), JSON.stringify(shandongRecipes, null, 2), 'utf8');
