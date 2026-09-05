// scripts/batch2_recipes.js
// 进一步扩充经典大菜、江湖名品与国民家常菜的真实专属配方

const BATCH2_AUTHENTIC_DISHES = {
  "正宗佛跳墙": {
    subtitle: "闽菜首席传世名肴，坛启荤香飘四邻，辽参花胶鲍鱼干贝蹄筋慢煨，高汤醇厚金黄如胶",
    flavor: ["浓醇至极", "软糯甘鲜"],
    cookingMethod: "荷叶封坛文火慢煨",
    main: [
      { name: "原只鲜活大鲍鱼", amount: 4, unit: "只 (刷净剖开去内脏焯水)" },
      { name: "优质水发辽刺参", amount: 4, unit: "只 (洗净焯高汤)" },
      { name: "水发优质黄花鱼花胶", amount: 60, unit: "克 (厚实胶质)" },
      { name: "水发干贝(江瑶柱)", amount: 6, unit: "粒" }
    ],
    sec: [
      { name: "精选猪蹄筋/牛蹄筋", amount: 80, unit: "克 (慢炖软糯)" },
      { name: "熟鸽子蛋", amount: 4, unit: "个 (油炸金黄虎皮)" },
      { name: "金华老火腿厚片", amount: 30, unit: "克" },
      { name: "水发花菇朵", amount: 4, unit: "朵" },
      { name: "老母鸡老鸭火腿筒骨浓醇金汤", amount: 800, unit: "ml" }
    ],
    sea: [
      { name: "绍兴陈年加饭花雕酒", amountText: "3 瓷汤勺 (封坛去腥提香)", baseAmount: 3, unit: "勺" },
      { name: "冰糖与食用精盐", amountText: "各 1 茶匙", baseAmount: 1, unit: "茶匙" }
    ],
    steps: [
      { title: "顶级海味干货分别精细发制焯水", instruction: "鲍鱼、海参、花胶、干贝分别用姜葱沸水焯烫沥干，金华火腿切片慢蒸出油，鸽子蛋油炸出金黄虎皮。", chefTip: "“各归其味分别焯”，去除异味保持各自纯粹鲜美质感！" },
      { title: "绍兴酒坛底部铺垫高汤层层码入", instruction: "在绍兴酒坛或紫砂煨罐底部垫竹篾，按蹄筋、火腿、花菇、花胶、鲍鱼、海参、鸽蛋由耐煮到底入味层层码放，注入滚烫金汤和花雕酒。", chefTip: "底层铺蹄筋火腿，慢火融化胶质渗透全坛！" },
      { title: "荷叶棉线封严坛口微火煨炖3小时", instruction: "坛口覆盖新鲜荷叶加盖用棉绳紧紧封扎，入蒸锅或炭火慢煨整整3小时关火焖半小时！", chefTip: "开坛瞬间荤香扑鼻，金汤浓稠挂唇，每一口都是满满胶原蛋白！" }
    ]
  },

  "夫妻肺片": {
    subtitle: "川菜凉菜金字招牌，牛肉牛肚牛舌红油透亮，麻辣浓郁，芹菜末花生碎香气四溢",
    flavor: ["麻辣红亮", "脆嫩化渣"],
    cookingMethod: "香料老卤切薄片红油凉拌",
    main: [
      { name: "卤熟优质黄牛肉片", amount: 100, unit: "克 (顶刀切大薄片)" },
      { name: "卤熟鲜牛肚/金钱肚丝", amount: 80, unit: "克" },
      { name: "卤熟牛舌薄片", amount: 60, unit: "克" },
      { name: "卤熟牛头皮/牛蹄筋薄片", amount: 60, unit: "克" }
    ],
    sec: [
      { name: "香脆油炸熟花生碎", amount: 30, unit: "克" },
      { name: "鲜嫩小芹菜末", amount: 25, unit: "克 (提清香灵魂)" },
      { name: "熟白芝麻", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "四川纯正红油熟辣椒油", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "现磨四川大红袍花椒粉", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "复制甜红酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "牛肉卤原汁", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "大蒜汁与小磨香油", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "牛杂食材精细压片薄切如纸", instruction: "卤透放凉的牛肉、牛肚、牛舌切成6cm长、薄如纸片的大薄片，整齐码入深盘中央。", chefTip: "牛肉牛杂必须彻底冷透再切，才能切得极薄透光，最易吸饱红油调料！" },
      { title: "秘制复制红油花椒复合味汁调和", instruction: "碗中加入牛肉卤原汁、熟油辣椒、花椒粉、复制甜酱油、大蒜汁、香油调匀成色泽深红、麻辣鲜甜的经典复合汁。", chefTip: "复制甜酱油与原卤汁带来醇厚回甘，中和纯辣，麻而不燥！" },
      { title: "调味汁兜头浇下撒满香芹花生碎", instruction: "将调好的红油味汁从上至下均匀浇在牛肉牛杂上，大方撒满香芹末、熟花生碎与白芝麻即可拌食！", chefTip: "拌匀后肉片红润油亮，麻辣浓烈，越嚼越香！" }
    ]
  },

  "毛血旺": {
    subtitle: "重庆江湖菜鼻祖，鲜嫩鸭血如脂滑嫩，牛毛肚黄喉脆爽弹牙，手工牛油刀口辣椒沸腾滚烫",
    flavor: ["麻辣滚烫", "鲜嫩爽脆"],
    cookingMethod: "老火锅红汤煮烫泼热油",
    main: [
      { name: "新鲜滑嫩纯鸭血", amount: 250, unit: "克 (切规整大方片焯水)" },
      { name: "新鲜鲜牛毛肚百叶", amount: 100, unit: "克 (撕大片)" },
      { name: "新鲜爽脆猪黄喉段", amount: 80, unit: "克" }
    ],
    sec: [
      { name: "优质午餐肉厚片", amount: 80, unit: "克" },
      { name: "鲜脆黄豆芽", amount: 100, unit: "克 (垫底脆爽)" },
      { name: "鲜莴笋尖/片", amount: 60, unit: "克" },
      { name: "香葱花与蒜末", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "重庆传统手工纯牛油火锅底料", amountText: "80 克", baseAmount: 80, unit: "克" },
      { name: "正宗郫县豆瓣酱", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "手工干辣椒刀口花椒碎", amountText: "2 瓷汤勺 (顶层泼油)", baseAmount: 2, unit: "勺" },
      { name: "高汤/清汤", amountText: "700 ml", baseAmount: 700, unit: "ml" },
      { name: "纯菜籽油", amountText: "3 瓷汤勺 (泼油灵魂)", baseAmount: 3, unit: "勺" }
    ],
    steps: [
      { title: "黄豆芽莴笋焯烫炒香大碗垫底", instruction: "黄豆芽和莴笋片下热油锅加少许盐大火炒断生，沥干铺入大深碗底部当底菜。", chefTip: "豆芽垫底吸饱浓郁红汤，爽脆解腻！" },
      { title: "牛油豆瓣炒出红汤下鸭血牛杂慢滚入味", instruction: "锅下菜油融化牛油火锅底料和豆瓣酱炒出红油，注入高汤烧沸调味；下鸭血片、午餐肉慢煮2分钟入味，最后下毛肚、黄喉大火烫15秒立刻连汤带料倒入碗中！", chefTip: "毛肚黄喉“七上八下”，烫十来秒刚卷起最是鲜嫩爽脆！" },
      { title: "铺满刀口辣椒花椒蒜末滚热油爆香", instruction: "碗面撒厚厚一层刀口辣椒碎、汉源花椒碎、蒜末和葱花；另起小锅烧至菜油八成热冒青烟，高高淋在辣椒蒜末上，滋啦作响香气冲天！", chefTip: "滚烫热油激发出干辣椒与花椒的焦糊焦麻香，红汤滚烫，麻辣鲜香过瘾！" }
    ]
  },

  "蒜泥白肉": {
    subtitle: "川菜经典凉菜，猪后腿坐臀肉煮透切薄如蝉翼大片，卷清脆黄瓜条，红油生蒜泥汁浓香四溢",
    flavor: ["蒜香浓烈", "红油咸甜回甘"],
    cookingMethod: "原块焯煮薄切红油蒜泥浇拌",
    main: [
      { name: "新鲜带皮猪后腿坐臀肉/二刀肉", amount: 350, unit: "克 (煮透冷透切薄如纸长片)" }
    ],
    sec: [
      { name: "清脆多汁小黄瓜", amount: 1, unit: "根 (用刮皮刀刮成长长薄片)" },
      { name: "老生姜大葱料酒 (煮肉去腥用)", amount: 25, unit: "克" }
    ],
    sea: [
      { name: "新鲜紫皮独头大蒜现捣成泥", amountText: "3 瓷汤勺 (蒜泥浓香灵魂)", baseAmount: 3, unit: "勺" },
      { name: "四川纯正红油辣椒", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" },
      { name: "复制甜红酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "四川保宁香醋", amountText: "1 茶匙", baseAmount: 1, unit: "茶匙" },
      { name: "小磨芝麻香油与食用盐", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" }
    ],
    steps: [
      { title: "坐臀肉加葱姜花椒文火煮断生放凉", instruction: "肉块冷水下锅加葱姜料酒煮25分钟至筷子能插透，捞出浸入冰水中迅速冷却锁住肉汁，捞出擦干。", chefTip: "冰水速冷使外皮微缩弹牙，肉质紧实，极易切出薄如蝉翼的透光大薄片！" },
      { title: "大片肉片包裹清脆黄瓜长条卷起排盘", instruction: "用极其锋利的快刀将肉块切成巴掌大、厚仅1毫米的透明薄片；黄瓜薄片与肉片叠放，由下向上卷成整齐肉卷，一圈圈码在盘中。", chefTip: "内卷清脆黄瓜，清爽解腻，入口层次分明！" },
      { title: "捣细蒜泥加红油甜酱油调汁浇顶", instruction: "大蒜在石臼中捣成极细蒜蓉泥，加入少许肉汤化开，加入红油、复制甜酱油、少许香醋调匀，由中心向四周均匀淋在白肉卷上！", chefTip: "肥肉透明而不腻，瘦肉酥软化渣，蒜香浓厚回甜！" }
    ]
  },

  "蚂蚁上树": {
    subtitle: "川菜传统家常名作，红薯粉丝晶莹顺滑，肉末煸炒微焦紧密附着其上如蚂蚁爬树，咸鲜微辣微麻",
    flavor: ["咸鲜微辣", "爽滑入味"],
    cookingMethod: "肉末干煸高汤煨粉丝",
    main: [
      { name: "优质纯红薯细粉丝", amount: 150, unit: "克 (温水泡软剪短)" },
      { name: "精选猪前腿肥三瘦七肉末", amount: 100, unit: "克 (细切粗斩小粒)" }
    ],
    sec: [
      { name: "小香葱碎", amount: 20, unit: "克" },
      { name: "紫皮大蒜末与老生姜末", amount: 15, unit: "克" }
    ],
    sea: [
      { name: "正宗郫县豆瓣酱", amountText: "1 瓷汤勺 (细细剁成红泥)", baseAmount: 1, unit: "勺" },
      { name: "生抽与优质老抽", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "鲜高汤/纯水", amountText: "200 ml", baseAmount: 200, unit: "ml" },
      { name: "纯菜籽油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "肉末干煸散开炒出焦香油脂", instruction: "热锅下油，倒入肉末中小火慢煸翻炒，将肉末颗粒彻底炒散变白，煸出猪肉油脂与微焦香气。", chefTip: "“肉末必须煸干香”，油脂逼出才不膻不腻，肉碎才能颗颗分明！" },
      { title: "下豆瓣泥葱姜蒜炒红亮红油下高汤", instruction: "下入剁碎的郫县豆瓣酱、姜蒜末炒出深红油与酱香，倒入生抽老抽，注入高汤大火烧沸。", chefTip: "老抽上红润酱色，汤水沸腾调出浓郁底味！" },
      { title: "下泡软粉丝大火翻炒吸干汤汁起锅", instruction: "下入剪短的红薯粉丝，转中大火用筷子和锅铲配合快速挑拌翻炒，让粉丝充分吸尽锅中鲜美浓红汤汁，撒入葱花颠锅出锅！", chefTip: "粉丝吸满肉汤晶莹透亮，小肉末颗颗均匀附着在粉丝上，爽滑筋道，超级下饭！" }
    ]
  },

  "豉汁蒸排骨": {
    subtitle: "广式早茶四大天王之一，前排小肋骨蒜香豆豉腌透，生粉锁住原汁，旺火足汽蒸出嫩滑脱骨",
    flavor: ["豆豉醇香", "鲜嫩滑口"],
    cookingMethod: "旺火足汽快蒸锁汁",
    main: [
      { name: "新鲜精选前排小肋排", amount: 350, unit: "克 (切2.5cm小方块，反复浸漂洗净血水)" }
    ],
    sec: [
      { name: "阳江传统原酿黑豆豉", amount: 20, unit: "克 (刀背略微拍碎出香)" },
      { name: "紫皮大蒜瓣碎", amount: 20, unit: "克" },
      { name: "鲜红椒小圈", amount: 1, unit: "根 (点缀微辣)" }
    ],
    sea: [
      { name: "玉米纯生粉", amountText: "1.5 瓷汤勺 (滑嫩锁水灵魂)", baseAmount: 1.5, unit: "勺" },
      { name: "生抽酱油与料酒", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "特级蚝油", amountText: "半瓷汤勺", baseAmount: 0.5, unit: "勺" },
      { name: "食用白糖与白胡椒粉", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯花生油", amountText: "1 瓷汤勺 (最后封层防脱浆)", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "排骨冷水反复抓洗漂白挤干水分", instruction: "排骨小块入清水中抓洗浸泡30分钟倒去血水，用厨房纸用力吸干表面与内部所有水分。", chefTip: "“吸干水分是关键”，排骨吸饱水气无法吸纳调料且蒸出水气浑浊发柴！" },
      { title: "豆豉蒜末生粉调料充分抓上劲封油", instruction: "排骨加糖、盐、白胡椒、生抽、蚝油顺时针抓至起胶，倒入生粉充分抓匀上浆，倒入豆豉碎和蒜末，最后淋花生油封层腌制20分钟。", chefTip: "生粉抓透牢牢锁住排骨自身汁水，花生油封层下锅受热油润不脱浆！" },
      { title: "浅盘平铺单层旺火足汽蒸8分钟", instruction: "将排骨平铺在耐热浅盘中保持单层不重叠，水烧大沸上大汽放入蒸盘，全程保持最大火足汽蒸整整8分钟关火出锅！", chefTip: "“平铺单层大火蒸8分”，受热均匀迅速熟透，肉质嫩滑多汁，骨肉轻轻一吮即离！" }
    ]
  },

  "蜜汁叉烧": {
    subtitle: "广府烧腊当家名旦，精选肥瘦相间梅花肉，玫瑰露酒叉烧酱腌透烤至微焦，厚刷蜜汁金红油亮",
    flavor: ["蜜甜甘香", "肉香焦脆"],
    cookingMethod: "高温烘烤多次刷蜜",
    main: [
      { name: "优质新鲜猪梅花肉(上肉下肉相间)", amount: 450, unit: "克 (切3cm厚长条肉块)" }
    ],
    sec: [
      { name: "新鲜生姜汁与蒜蓉", amount: 20, unit: "克" },
      { name: "纯天然洋槐蜂蜜/麦芽糖", amount: 40, unit: "克 (出炉刷蜜金红明亮)" }
    ],
    sea: [
      { name: "李锦记特级叉烧酱", amountText: "3 瓷汤勺", baseAmount: 3, unit: "勺" },
      { name: "生抽与特级蚝油", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "正宗广东玫瑰露酒", amountText: "1 瓷汤勺 (去肉腥提芬芳)", baseAmount: 1, unit: "勺" },
      { name: "红腐乳汁", amountText: "1 瓷汤勺 (天然红润与复合醇香)", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "梅花肉长条加叉烧酱玫瑰露酒腌制入味", instruction: "梅花肉洗净拭干切长厚条，加叉烧酱、红腐乳汁、生抽、蚝油、蒜蓉和玫瑰露酒用力抓捏5分钟，密封冷藏腌制整整24小时。", chefTip: "必须选梅花肉！肥肉雪花纹理密布，烤后瘦肉不柴、肥肉融化香甜！" },
      { title: "200℃烤箱中层垫锡纸翻面慢烤", instruction: "烤箱预热200℃，将肉条摆在烤网上，下方烤盘垫锡纸接油；先烤20分钟取出两面刷一层厚厚腌肉酱汁，翻面再烤15分钟至边缘微焦。", chefTip: "高温炙烤将外层糖分焦糖化，结出诱人叉烧黑边焦香！" },
      { title: "出炉趁滚烫两面刷满厚厚天然纯蜂蜜", instruction: "出炉前5分钟两面厚厚刷上一层蜂蜜（或麦芽糖水），入烤箱再烤3分钟锁色微焦出炉；稍放凉斜切厚片装盘！", chefTip: "金红透亮，蜜香浓郁，一口咬下爆出甜蜜肉汁！" }
    ]
  },

  "老茶馆秘制酥脆油炸花生米": {
    subtitle: "国民下酒菜永远的无冕之王，冷油下锅慢火透炸，出锅喷淋高度白酒撒细盐，久放十天嘎嘣脆",
    flavor: ["焦香酥脆", "咸香回甘"],
    cookingMethod: "冷油冷锅中小火透炸",
    main: [
      { name: "新鲜颗粒饱满小红皮花生米", amount: 300, unit: "克 (颗粒均匀无霉坏)" }
    ],
    sec: [
      { name: "52度以上纯粮高度白酒", amount: 10, unit: "ml (防潮回软绝招)" },
      { name: "食用精细盐", amount: 4, unit: "克" }
    ],
    sea: [
      { name: "食用精盐", amountText: "4 克", baseAmount: 4, unit: "克" },
      { name: "压榨纯花生油", amountText: "300 ml (实际耗油微量)", baseAmount: 20, unit: "ml" }
    ],
    steps: [
      { title: "花生米温水极快冲洗擦干水分", instruction: "花生米用温水快速冲洗5秒洗净表面浮尘，立即用厨房纸巾彻底擦干水分表面无水珠。", chefTip: "微潮表皮能防止下油锅时外皮瞬间被炸焦而内部未熟！" },
      { title: "冷油冷锅下花生米全程中小火慢翻", instruction: "将花生米与植物油一同冷油倒入冷锅中（油没过花生米大半），开中小火加热，用铲子持续画圈不停翻动。", chefTip: "“冷油冷锅慢火炸”，热力从外向内缓慢均匀渗透，通体熟透绝无焦苦！" },
      { title: "听见密集噼啪声变小立即出锅喷白酒", instruction: "待锅内密集“噼里啪啦”爆皮声逐渐稀疏、颜色微黄立即关火捞出沥油装盘；趁滚烫迅速喷淋10ml高度白酒翻匀，放温撒入细盐！", chefTip: "“趁热喷白酒”，酒精瞬间蒸发带走花生内部所有残余水汽，久放十天依然酥脆无比！" }
    ]
  },

  "自制五香糟毛豆": {
    subtitle: "江浙夏夜下酒消暑恩物，鲜翠毛豆剪双角入味，八角桂皮香叶老盐水煮透，陈年香糟卤冰镇浸泡透骨香",
    flavor: ["糟香清洌", "清脆咸鲜"],
    cookingMethod: "开盖盐煮老糟卤冰镇浸透",
    main: [
      { name: "鲜嫩翠绿肥硕毛豆荚", amount: 400, unit: "克 (剪去两端尖角入味)" }
    ],
    sec: [
      { name: "正宗宝鼎/古越龙山陈年香糟卤", amount: 250, unit: "ml (冰镇冷藏)" },
      { name: "八角 2个与香叶 2片", amount: 5, unit: "克" },
      { name: "花椒粒与老生姜片", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "食用精盐", amountText: "1.5 瓷汤勺 (煮豆底味)", baseAmount: 1.5, unit: "勺" }
    ],
    steps: [
      { title: "毛豆两端剪角淡盐水搓洗去绒毛", instruction: "毛豆用剪刀剪去两端小尖角便于汤汁渗透，加一勺盐加水用力搓洗揉去表面绒毛冲净沥干。", chefTip: "剪去双角既能让内部豆仁快速入味，又不会煮烂！" },
      { title: "加香料开盖大火沸水煮8分钟锁绿", instruction: "锅中水加盐、八角、香叶、姜片和少许油烧大沸，倒入毛豆全程全程不盖锅盖大火煮8分钟刚断生立刻捞出入冰水拔凉！", chefTip: "“全程开盖加冰水”，叶绿素挥发酸性物质散失，毛豆长久保持翠绿如玉不发黄！" },
      { title: "沥干倒入冰镇香糟卤冷藏浸泡2小时", instruction: "毛豆彻底冰凉捞出沥干水，倒入密封玻璃容器，倒入没过毛豆的冰镇陈年糟卤，入冰箱冷藏浸泡2小时即可捞出食用！", chefTip: "剥开豆荚，糟香扑鼻，豆仁清脆爆汁，甘醇清冽！" }
    ]
  },

  "豉汁蒸凤爪": {
    subtitle: "广府茶楼金牌点心，鸡爪炸出金黄琥珀虎皮冰镇起皱，豆豉柱候酱浸透蒸透，一吮即化皮肉脱骨",
    flavor: ["酱香浓郁", "皮酥骨烂"],
    cookingMethod: "麦芽糖水浸炸虎皮蒸透",
    main: [
      { name: "新鲜肥嫩多肉大鸡爪", amount: 450, unit: "克 (剪去锋利脚趾甲，对半斩断焯水)" }
    ],
    sec: [
      { name: "阳江原酿黑豆豉碎", amount: 20, unit: "克" },
      { name: "紫皮大蒜蓉", amount: 25, unit: "克" },
      { name: "鲜红椒小圈", amount: 1, unit: "根" }
    ],
    sea: [
      { name: "麦芽糖与白米醋", amountText: "各 1 瓷汤勺 (上金红色泽)", baseAmount: 1, unit: "勺" },
      { name: "李锦记柱候酱", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "特级生抽与蚝油", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "纯玉米生粉与白糖", amountText: "各 1 瓷汤勺", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "鸡爪抹麦芽糖醋水热油炸出金黄虎皮", instruction: "鸡爪焯水擦干水分，表面均匀抹一层麦芽糖白醋水，七成热油温下锅加盖炸至通体金黄焦脆起大泡，立刻捞出投入冰水中浸泡2小时至皮质膨胀起厚皱褶（虎皮）。", chefTip: "“热炸冷拔出虎皮”，高温炸脆遇冰水极速膨胀，表皮裂出蜂窝大皱皮，极易吸收浓郁酱汁！" },
      { title: "调配浓香柱候豆豉金酱抓匀上浆", instruction: "捞出沥干的虎皮凤爪加柱候酱、豆豉碎、蒜蓉、生抽、蚝油、糖、白胡椒粉和生粉充分抓拌，使每只凤爪表面裹满红亮厚酱。", chefTip: "生粉锁酱，柱候酱与豆豉带来茶楼地道广式甘香！" },
      { title: "深盘单层平铺旺火足汽蒸25分钟脱骨", instruction: "将凤爪码入深盘，蒸锅大火沸水上足汽，加盖大火蒸25分钟关火焖5分钟；出锅皮质酥烂如凝脂，筷子一夹脱骨！", chefTip: "入口轻轻一吮，皮肉化在舌尖，胶质浓稠，吮指回味！" }
    ]
  },

  "东坡肘子": {
    subtitle: "眉州三苏传世硬菜，整个大肘子文火煨透软烂如豆腐，姜葱豆瓣保宁醋鱼香浓汁浇顶",
    flavor: ["鱼香微酸", "软烂如脂"],
    cookingMethod: "原汁慢火长炖鱼香汁浇淋",
    main: [
      { name: "新鲜带皮猪前肘子", amount: 1100, unit: "克 (烙尽残毛刮洗雪白，焯透去血水)" }
    ],
    sec: [
      { name: "老生姜大厚片与大葱结", amount: 60, unit: "克" },
      { name: "小香葱花", amount: 30, unit: "克 (出锅厚撒)" }
    ],
    sea: [
      { name: "正宗郫县豆瓣酱", amountText: "1.5 瓷汤勺 (剁细成泥)", baseAmount: 1.5, unit: "勺" },
      { name: "四川保宁香醋", amountText: "2 瓷汤勺 (鱼香酸甜灵魂)", baseAmount: 2, unit: "勺" },
      { name: "白糖与生抽", amountText: "各 1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "泡红辣椒碎与生姜蒜末", amountText: "各 20 克", baseAmount: 20, unit: "克" },
      { name: "水淀粉", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "大肘子烙皮刮净砂锅微火炖至极烂", instruction: "猪前肘皮在铁锅烙焦黄刮净除腥焯水，入深砂锅注入足量沸水加葱姜料酒大火烧开，转最小微火慢炖2.5-3小时至筷子轻轻一扎到底、肉烂皮颤。", chefTip: "“慢火长炖白汤如雪”，原汤微火保持胶质锁在肉内，肘子形整而肉酥烂！" },
      { title: "捞出整肘装入大深盘保持形态规整", instruction: "用大漏勺轻柔托出整只软烂大肘子，皮朝上摆入深窝盘中，原汤清甜留用。", chefTip: "托盘捞出切忌弄破外皮，肉皮颤巍巍如温玉！" },
      { title: "热锅炒泡椒豆瓣姜蒜爆鱼香浓汁浇顶", instruction: "热油爆香泡椒碎、豆瓣泥、姜蒜末炒出红油，调入原汤、保宁醋、白糖、生抽勾浓芡，趁滚烫均匀浇满整只肘子，撒满葱花！", chefTip: "红汁挂满白肉，酸甜微辣的鱼香味瞬间化解肥腻，肉香满溢！" }
    ]
  },

  "小炒拆骨肉": {
    subtitle: "湖湘经典小炒代表，猪头大骨熬透剔下的活肉筋膜，湖南红线椒与浏阳豆豉大火爆炒，镬气焦香十足",
    flavor: ["香辣干脆", "焦香下饭"],
    cookingMethod: "旺火热锅大火生炒",
    main: [
      { name: "熟猪头大骨剔下拆骨肉(带筋带软骨)", amount: 300, unit: "克 (切薄大片)" }
    ],
    sec: [
      { name: "新鲜青红线椒圈", amount: 60, unit: "克" },
      { name: "鲜嫩青大蒜叶段", amount: 30, unit: "克" },
      { name: "湖南浏阳黑豆豉", amount: 15, unit: "克" },
      { name: "紫皮大蒜瓣片与姜丝", amount: 20, unit: "克" }
    ],
    sea: [
      { name: "特级生抽酱油", amountText: "1.5 瓷汤勺", baseAmount: 1.5, unit: "勺" },
      { name: "优质老抽酱油", amountText: "半茶匙 (上红润镬气色)", baseAmount: 0.5, unit: "茶匙" },
      { name: "特级蚝油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "纯菜籽油", amountText: "2 瓷汤勺", baseAmount: 2, unit: "勺" }
    ],
    steps: [
      { title: "拆骨肉干锅先煸出油脂焦边", instruction: "铁锅烧热不放油（或极少油），倒入拆骨肉片中大火干煸，煸出肉片部分油脂与微焦焦边倒出备用。", chefTip: "骨边肉带筋带膜，预先干煸逼出焦香，吃起来脆韧不腻！" },
      { title: "热油爆香豆豉双椒蒜片出呛辣香气", instruction: "热锅热油下浏阳豆豉、蒜片、姜丝和青红线椒圈大火爆炒15秒，激发出呛鼻的鲜辣豉香味。", chefTip: "火候要猛，线椒与豆豉在高温下瞬间释放出迷人焦香镬气！" },
      { title: "倒入拆骨肉大蒜叶调味大火颠翻出锅", instruction: "倒入拆骨肉和大蒜叶，调入生抽老抽蚝油，全程最高温旺火暴风颠炒15秒断生出锅！", chefTip: "肉嫩筋脆，辣味直冲，绝对是米饭与冰啤酒的头号杀手！" }
    ]
  },

  "湖南腊肉炒香干": {
    subtitle: "湘西农家年味经典，烟熏土腊肉晶莹剔透瘦肉深红，攸县香干细嫩多孔，红椒大蒜叶热辣生香",
    flavor: ["烟熏咸香", "鲜辣下饭"],
    cookingMethod: "热油煸炒酱香出锅",
    main: [
      { name: "湘西正宗柏树枝烟熏五花腊肉", amount: 200, unit: "克 (煮透切透明薄片)" },
      { name: "湖南攸县特产纯手工香干", amount: 200, unit: "克 (斜切规整薄片)" }
    ],
    sec: [
      { name: "鲜嫩大蒜苗段", amount: 40, unit: "克" },
      { name: "鲜红小米辣圈", amount: 20, unit: "克" },
      { name: "浏阳豆豉", amount: 10, unit: "克" }
    ],
    sea: [
      { name: "生抽酱油", amountText: "1 瓷汤勺", baseAmount: 1, unit: "勺" },
      { name: "白糖与料酒", amountText: "各半茶匙", baseAmount: 0.5, unit: "茶匙" },
      { name: "纯菜籽油", amountText: "1 瓷汤勺 (腊肉出油无需多油)", baseAmount: 1, unit: "勺" }
    ],
    steps: [
      { title: "腊肉温水刷洗煮透切透明大薄片", instruction: "烟熏腊肉用温水刷净表面烟熏浮灰，冷水下锅煮15分钟捞出，顶刀切成薄薄的透明大长片。", chefTip: "“先煮后切薄如纸”，煮透能软化硬皮并排出多余盐分，肥肉透明如琥珀！" },
      { title: "香干切片开水焯烫去豆腥更入味", instruction: "攸县香干切薄片，入加了少许盐的沸水中焯烫30秒捞出沥干。", chefTip: "盐水焯烫后的香干内部孔隙张开，下锅极易吸饱腊肉熏油！" },
      { title: "腊肉煸卷下香干辣椒蒜苗大火翻炒", instruction: "热锅少油下腊肉慢煸至肥肉部分微卷透明，下豆豉、小米椒爆香，倒入香干大火翻炒，调入生抽少许糖，撒入大蒜苗段翻匀出锅！", chefTip: "腊香扑鼻，香干吸足油脂咸香微辣，超级下饭！" }
    ]
  }
};

module.exports = {
  BATCH2_AUTHENTIC_DISHES
};
