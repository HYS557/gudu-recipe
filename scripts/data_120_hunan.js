// 湖南湘菜帝国：15道传世硬菜名席 + 15道绝味下饭小炒 (30道)
module.exports = [
  // 15道传世硬菜名席
  {
    id: "rec_prov_001",
    name: "湘派国宴头牌毛氏红烧肉",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 450,
    prepTimeMinutes: 20,
    cookTimeMinutes: 60,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "宁乡黑猪带皮三层五花肉", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "老生姜厚片", amount: 25, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜香葱结", amount: 2, unit: "根", type: "secondary", isCore: false },
      { name: "八角与桂皮香叶", amount: 10, unit: "g", type: "secondary", isCore: false },
      { name: "干红朝天椒(微量提香)", amount: 3, unit: "根", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯白砂糖(古法炒糖色灵魂)", baseAmount: 40, unit: "g", amountText: "40g", isPantryStaple: true },
      { name: "优质浏阳纯粮糯米酒或花雕酒", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯正花生油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "沸水", baseAmount: 600, unit: "ml", amountText: "600ml", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "炙皮焯水切大方块", instruction: "五花肉皮朝下在烧热铁锅上干烙至微焦除去毛腥，刷净后冷水下锅焯透撇沫，捞出顶刀切成3厘米见方大麻将块。", timerSeconds: 360, chefTip: "五花肉必须烙皮洗净，切大方块才能耐炖且成品饱满方正。" },
      { stepIndex: 2, title: "慢火干煸逼出多余油脂", instruction: "锅内不加油，倒入肉块中小火煸炒5分钟，煸出约两汤匙肥猪油倒出留用，肉块微显金黄捞出。", timerSeconds: 300, chefTip: "先煸油可使肥肉肥而不腻，软糯爽口的关键步骤。" },
      { stepIndex: 3, title: "纯白糖慢火熬制琥珀糖色", instruction: "净锅倒少许油和白糖，极小火慢炒至白糖融化起大泡转微细红棕色小泡，立即烹入少许开水激出亮红糖色。", timerSeconds: 240, chefTip: "毛氏红烧肉绝不加酱油，全靠纯糖色着色，色泽呈透亮玛瑙红。" },
      { stepIndex: 4, title: "入肉文火慢烧焖透收汁", instruction: "倒入煸好的肉块翻炒挂匀糖色，加黄酒、姜葱、八角、干椒与沸水，大火烧开转文火盖盖慢煨45分钟至酥软，大火收浓汁成胶裹肉。", timerSeconds: 2700, chefTip: "出锅前落盐，糖色自成浓浆紧紧包裹肉块，入口即化。" }
    ],
    tips: "湘派国宴头牌。毛主席生平挚爱，全靠糖色生色，成菜色泽红亮，肉皮糯滑，肥瘦相间，咸鲜微甘，百吃不厌。",
    tags: ["湖南", "湘菜", "毛氏红烧肉", "糖色红亮", "肥而不腻", "国宴名肴"]
  },
  {
    id: "rec_prov_002",
    name: "湘潭传统双色剁椒蒸大鱼头",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "蒸",
    calories: 380,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "千岛湖野生鲜活大鳙鱼头", amount: 1, unit: "个(约1000g)", type: "main", isCore: true },
      { name: "湖南正宗自制红剁椒", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "湖南农家鲜制黄贡椒/野山椒碎", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "新鲜小香葱碎与青蒜叶", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜蓉与老生姜末", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "传统特制碱水细面或手擀面", amount: 150, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯粮蒸鱼豉油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "湖南高粱白酒或料酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯正花生油与芝麻香油", baseAmount: 35, unit: "ml", amountText: "35ml(泼油灵魂)", isPantryStaple: true },
      { name: "白胡椒粉与精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "鱼头彻底去黑膜牙齿劈开腌制", instruction: "大鱼头去鳃刮净腹内黑膜，剔除咽喉齿，从下巴劈开平铺于大盘。抹少许盐、白胡椒粉和白酒腌制10分钟去腥。", timerSeconds: 300, chefTip: "鱼头黑膜和咽喉齿必须剔净，肉质只有纯粹鲜甜无土腥。" },
      { stepIndex: 2, title: "金银蒜油分别炒透双色剁椒", instruction: "热锅倒油爆香姜蒜末，分两锅分别炒香红剁椒和黄贡椒，各淋入少许豉油提鲜起香。", timerSeconds: 240, chefTip: "生剁椒水汽重，先用蒜油炒熟炒干水汽，剁椒香气更深厚甘辣。" },
      { stepIndex: 3, title: "红黄太极覆铺旺火急蒸10分钟", instruction: "盘底垫大葱姜片，鱼头两边分别铺满厚厚红剁椒与黄贡椒。大蒸锅上汽后入锅，全程猛火暴蒸10分钟出锅，倒掉多余蒸鱼腥水。", timerSeconds: 600, chefTip: "必须水大沸腾后入锅大火急蒸，鱼肉如蒜瓣般嫩滑多汁。" },
      { stepIndex: 4, title: "撒满香葱热油滚沸泼响", instruction: "在鱼头表面淋蒸鱼豉油，堆上厚厚一把青翠香葱碎，热花生油烧至八成热（冒青烟），均匀浇泼在葱花剁椒上激发浓香，余汁拌面爽翻。", timerSeconds: 120, chefTip: "热油必须滚烫，瞬间泼出葱香与椒香，汤汁拌上手擀面是湘菜至高享受。" }
    ],
    tips: "湘菜全国知名度第一招牌。双色剁椒一酸辣一咸鲜，鱼肉肥美娇嫩，红黄交映如太极，拌上一碗光头面，连汤带面吃得底朝天。",
    tags: ["湖南", "湘菜", "双色剁椒", "剁椒鱼头", "鲜辣过瘾", "拌面神器"]
  },
  {
    id: "rec_prov_003",
    name: "永州名门东安子鸡",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 340,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "嫩子鸡或三黄仔鸡", amount: 1, unit: "只(约750g)", type: "main", isCore: true },
      { name: "新鲜嫩红线椒切细丝", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "老生姜切极细丝", amount: 35, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切厚片", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜大葱切细丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "湖南纯正香醋或保宁醋", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯粮清香花雕酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "熟猪油与茶油(混炒灵魂)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "花椒粒微碎", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "精制食盐与鲜鸡高汤", baseAmount: 150, unit: "ml", amountText: "150ml高汤+3g盐", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "仔鸡整只微煮八成熟冰镇", instruction: "子鸡洗净整只入沸水锅加葱姜小火煮12分钟至八分熟（骨见微红），捞出浸入冰水迅速冷却，斩成长方形小块。", timerSeconds: 720, chefTip: "先煮八分熟再斩块，肉质极其紧实皮脆，炒时不柴不碎。" },
      { stepIndex: 2, title: "猪油茶油爆香大量姜丝花椒", instruction: "铁锅烧热下熟猪油与茶油，下入花椒粒、大量生姜细丝、蒜片小火煸炒出复合姜椒香气。", timerSeconds: 180, chefTip: "东安鸡重用生姜，姜丝切细入油炒透，带有独特的辛香。" },
      { stepIndex: 3, title: "下鸡块大火爆炒烹入香醋", instruction: "倒入鸡块猛火翻炒出香，烹入花雕酒与15ml香醋，加盐翻炒均匀让酸香紧紧裹住鸡皮。", timerSeconds: 240, chefTip: "分两次加醋：前期加醋去腥入味，出锅前加醋提神增香。" },
      { stepIndex: 4, title: "注入鲜汤微焖入红椒丝葱丝出锅", instruction: "倒入原煮鸡高汤150ml，加盖小火焖煮5分钟，倒入红椒丝、葱丝，淋入剩余15ml香醋与熟猪油大火翻亮出锅。", timerSeconds: 300, chefTip: "成菜汁芡明亮，鸡皮黄白相间，红椒丝碧葱点缀，酸辣醇美。" }
    ],
    tips: "国宴名菜，中国八大名鸡之首。成菜色泽鲜艳，酸辣清鲜，鸡肉脆嫩脱骨，食之肥而不腻，食欲大开。",
    tags: ["湖南", "湘菜", "东安子鸡", "酸辣鲜嫩", "名鸡之首", "非遗名馔"]
  },
  {
    id: "rec_prov_004",
    name: "衡东土菜头牌黄贡椒炒脆肚",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 290,
    prepTimeMinutes: 20,
    cookTimeMinutes: 5,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜优质生猪肚尖", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "衡东特产黄贡椒(酸辣腌制)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "青红线椒圈", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜瓣切厚片与生姜丝", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜青蒜苗切斜段", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽与纯粮米醋", baseAmount: 15, unit: "ml", amountText: "生抽10ml+米醋5ml", isPantryStaple: true },
      { name: "纯粮高度白酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯熟茶油或菜籽油(猛火)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "白胡椒粉与精制食盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "肚尖剔膜打极密十字花刀切细丝", instruction: "选用最厚嫩的生猪肚尖，刮净黏液与油脂，内壁打极密集麦穗花刀，切成薄细条，加白酒、少许盐和淀粉抓匀上浆。", timerSeconds: 360, chefTip: "衡东脆肚必须用生肚尖现切现爆，打密花刀能让肚丝在接触滚油瞬间极速卷曲起脆。" },
      { stepIndex: 2, title: "黄贡椒切碎大火干锅煸香出汁", instruction: "黄贡椒斜切段，干热锅不下油煸炒半分钟逼出酸辣气味与多余水分，盛出备用。", timerSeconds: 60, chefTip: "黄贡椒先干煸可激发出独特的果酸香气与金黄诱人色泽。" },
      { stepIndex: 3, title: "热锅宽油15秒猛火爆炒生肚丝", instruction: "铁锅烧至冒浓烟，倒入足量茶油烧至八成热，下姜蒜与肚丝，大火猛翻爆炒仅15秒至肚丝瞬间受热卷曲断生。", timerSeconds: 45, chefTip: "油温必须极高、翻炒动作极快，多炒5秒肚丝即老如橡皮，15秒内出脆如海蜇。" },
      { stepIndex: 4, title: "入黄贡椒青蒜调味颠锅出盘", instruction: "立即倒入黄贡椒、青蒜苗、生抽、米醋、白胡椒粉，大火翻炒5次完全颠匀出镬气，立即装盘享用绝顶爽脆。", timerSeconds: 30, chefTip: "米醋沿锅边烹入激发酸香，成菜金黄透亮，酸辣脆爽爽口到飞起。" }
    ],
    tips: "中国土菜之乡衡东镇馆之宝。肚丝爽脆到咬下去弹牙爆汁，黄贡椒酸辣甘甜，脆嫩爽辣，天下无双。",
    tags: ["湖南", "衡东土菜", "黄贡椒", "炒脆肚", "极速爆炒", "爽脆绝伦"]
  },
  {
    id: "rec_prov_005",
    name: "长沙老街秘制紫苏口味虾",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 360,
    prepTimeMinutes: 30,
    cookTimeMinutes: 20,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "鲜活青壳小龙虾(剪头抽虾线开背)", amount: 1000, unit: "g", type: "main", isCore: true },
      { name: "新鲜紫苏叶(掐碎)", amount: 50, unit: "g", type: "main", isCore: true },
      { name: "湖南特辣干红朝天椒碎", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "整头大蒜拍碎与老姜片", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "大葱段与青红线椒圈", amount: 40, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "自制湖南香辣高汤膏或豆瓣酱", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "优质啤酒", baseAmount: 330, unit: "ml", amountText: "1听(330ml)", isPantryStaple: true },
      { name: "菜籽油(宽油炸虾)", baseAmount: 50, unit: "ml", amountText: "50ml", isPantryStaple: true },
      { name: "生抽、蚝油与白糖", baseAmount: 20, unit: "ml", amountText: "生抽15ml+蚝油10ml+糖5g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "小龙虾刷净去头剪背挑虾线", instruction: "小龙虾用刷子反复刷洗腹部，剪去头部沙囊留虾黄，剪开虾背壳抽掉虾线，沥干水分。", timerSeconds: 600, chefTip: "剪开背壳能让浓郁的紫苏辣汁完全渗透进饱满虾肉中。" },
      { stepIndex: 2, title: "热油大火过油锁鲜肉质弹牙", instruction: "锅内多倒菜籽油烧至八成热，下小龙虾大火翻炸20秒至虾壳通红弯曲迅速捞出控油。", timerSeconds: 120, chefTip: "高温过油让虾肉瞬间紧缩锁水，壳肉分离极好剥壳。" },
      { stepIndex: 3, title: "蒜姜干椒香辣料爆出红油红汁", instruction: "锅留底油下大蒜、姜片、干红椒碎、香辣酱中火炒出浓郁红油香气，下小龙虾翻炒裹匀酱汁。", timerSeconds: 180, chefTip: "大蒜多放拍碎，蒜香与红油交织是长沙口味虾精髓。" },
      { stepIndex: 4, title: "倾入啤酒大火烧透收汁撒紫苏", instruction: "倒入整罐啤酒、生抽、蚝油、糖，大火烧开转中火焖烧8分钟入味，最后倒入大量掐碎鲜紫苏与青椒圈，大火收浓汤汁出锅。", timerSeconds: 600, chefTip: "新鲜紫苏出锅前最后两分钟放，香气最浓郁扑鼻，汤汁保留小半碗用于蘸虾肉吃。" }
    ],
    tips: "长沙夏夜南门口排档无可替代的统治级神菜。紫苏特有的奇香压住荤腥，红油辣烈鲜甜，剥开虾壳先嗦一口鲜浓汤汁，再嚼紧实甜弹虾肉。",
    tags: ["湖南", "长沙", "口味虾", "紫苏霸主", "夜市顶流", "麻辣鲜香"]
  },
  {
    id: "rec_prov_006",
    name: "长沙经典香辣紫苏口味蟹",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 380,
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "鲜活肉蟹或母膏蟹", amount: 3, unit: "只(约700g)", type: "main", isCore: true },
      { name: "新鲜紫苏叶大把", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "干红辣椒段与野山椒", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣拍碎与老姜片", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "干玉米淀粉(封蟹黄用)", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "湖南香辣豆瓣酱", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "优质啤酒", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: true },
      { name: "特级生抽与白糖", baseAmount: 15, unit: "ml", amountText: "15ml生抽+5g糖", isPantryStaple: true },
      { name: "菜籽油", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "鲜蟹剖半粘淀粉封牢蟹黄", instruction: "活蟹刷洗干净揭去蟹盖去鳃胃，斩成两半，蟹螯拍裂便于入味，切面均匀沾上干淀粉。", timerSeconds: 360, chefTip: "切口拍淀粉可在下油锅时瞬间锁住丰腴金黄的蟹黄不流失。" },
      { stepIndex: 2, title: "油锅半煎半炸封汁锁金黄", instruction: "热油烧热，将蟹切口朝下煎至定型金黄，翻炒两分钟至整只蟹壳红艳捞出。", timerSeconds: 180, chefTip: "煎炸透的蟹壳香酥脆硬，蟹肉鲜甜多汁。" },
      { stepIndex: 3, title: "辣酱生姜大蒜炒香爆出红油", instruction: "留底油爆香干红椒、野山椒、大蒜生姜与辣酱出红亮浓油，倒入炸好的螃蟹大火翻炒。", timerSeconds: 120, chefTip: "野山椒带有的酸辣发酵风味能进一步激发蟹鲜。" },
      { stepIndex: 4, title: "啤酒煨煮收汁撒满新鲜紫苏", instruction: "倒入啤酒、生抽、糖，大火烧沸焖煮6分钟让辣汁完全渗入蟹肉，出锅前投入满满一大碗紫苏叶翻炒收浓汁起锅。", timerSeconds: 420, chefTip: "紫苏与浓油红汤收成稠酱紧贴蟹壳，吮指香浓。" }
    ],
    tips: "秋风起，长沙老街家家户户必吃金牌口味蟹。紫苏独特的芳香与蟹肉的甘甜在热辣红油中激烈碰撞，嗦一口蟹黄满嘴浓香。",
    tags: ["湖南", "长沙", "口味蟹", "紫苏香浓", "肉满膏肥", "香辣鲜爽"]
  },
  {
    id: "rec_prov_007",
    name: "常德传统茶油谷鸭钵",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 410,
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "湖南常德农家放养仔谷鸭", amount: 0.5, unit: "只(约750g)", type: "main", isCore: true },
      { name: "本地青红线椒切厚段", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣整粒与老姜厚片", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜紫苏叶", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "湖南纯正农家压榨茶籽油", baseAmount: 40, unit: "ml", amountText: "40ml(茶油是常德钵子灵魂)", isPantryStaple: true },
      { name: "常德农家特制豆豉与红油豆瓣", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "纯粮高度白酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "生抽、老抽与精盐", baseAmount: 15, unit: "ml", amountText: "生抽10ml+老抽5ml+盐3g", isPantryStaple: true },
      { name: "沸水", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "仔鸭斩小块直接入锅干煸", instruction: "嫩谷鸭洗净剁成小块。净铁锅烧热不放油，下入鸭块与姜片中火煸炒8分钟，将鸭皮中多余油水煸出倒掉，鸭肉紧致微黄焦香盛出。", timerSeconds: 480, chefTip: "常德名师经验：谷鸭肉嫩但带水汽，彻底干煸出油脂才能吸入浓郁茶油香。" },
      { stepIndex: 2, title: "农家茶油爆香豆豉蒜瓣", instruction: "锅内倒入醇香茶油烧至冒微烟，下整粒蒜瓣、豆豉、豆瓣酱小火炒出红润酱油香。", timerSeconds: 120, chefTip: "茶油不油不腻、清香醇厚，能极大提升野禽肉质的香味。" },
      { stepIndex: 3, title: "大火翻炒鸭块烹酒加沸水煨炖", instruction: "倒入鸭块大火狂翻，烹入白酒激香，加生抽老抽炒匀上色，注入500ml沸水，大火烧开转中火盖盖慢煨20分钟。", timerSeconds: 1200, chefTip: "加沸水使鸭汤浓郁，常德钵子菜追求微浓汤汁持续保温。" },
      { stepIndex: 4, title: "转砂钵架小火炉下青红椒紫苏", instruction: "将鸭肉与浓汤移入陶土砂钵，铺入青红线椒段与紫苏叶，架在小卡式炉或炭火上，微沸咕嘟边滚边吃。", timerSeconds: 300, chefTip: "常德俗语‘不愿下桌常德钵’，汤水始终在钵内咕嘟冒小泡，越煮越入味。" }
    ],
    tips: "常德非遗钵子菜名录头牌。纯茶油与谷鸭肉交织出极高香气，汤汁浓红，鸭肉香辣酥软，在微火慢滚中香气持续四溢。",
    tags: ["湖南", "常德", "钵子菜", "茶油谷鸭", "越煮越香", "非遗风味"]
  },
  {
    id: "rec_prov_008",
    name: "常德传统红油肥肠钵",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 430,
    prepTimeMinutes: 30,
    cookTimeMinutes: 35,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜熟卤猪大肠(切滚刀块)", amount: 400, unit: "g", type: "main", isCore: true },
      { name: "老坛酸菜或酸豇豆", amount: 100, unit: "g", type: "secondary", isCore: false },
      { name: "青红线椒段与小米辣", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣整粒拍扁与大葱段", amount: 40, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "湖南纯正红油豆瓣与辣妹子辣酱", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "纯粮高度白酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "生抽、白糖与精盐", baseAmount: 15, unit: "ml", amountText: "生抽10ml+糖3g+盐2g", isPantryStaple: true },
      { name: "骨汤或沸水", baseAmount: 400, unit: "ml", amountText: "400ml", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "肥肠焯水切大厚斜段", instruction: "卤肥肠切2厘米斜刀厚段；老坛酸菜切碎洗净挤干水分。", timerSeconds: 240, chefTip: "酸菜是中和肥肠油腻的最佳搭档，挤干水分炒出来更干香脆爽。" },
      { stepIndex: 2, title: "干煸酸菜断生逼出酸香", instruction: "铁锅烧热不下油，先下酸菜碎干炒2分钟至香气扑鼻盛出。", timerSeconds: 120, chefTip: "干炒酸菜可彻底去除生水味，酸脆可口。" },
      { stepIndex: 3, title: "煸炒肥肠至表面金黄微焦逼油", instruction: "热锅倒少许油，下入肥肠块大火翻炒3分钟，煸至表面微现焦脆、多余肠脂析出，烹入白酒除杂味。", timerSeconds: 180, chefTip: "肥肠一定要煸至起微微焦斑，嚼起来才会外脆里糯软嫩流油。" },
      { stepIndex: 4, title: "炒出红油入汤倒入砂钵慢煨滚沸", instruction: "下大蒜、姜片、豆瓣辣酱炒出红油，倒入煸好的酸菜、骨汤400ml，调入生抽白糖烧沸转入陶钵，撒青红椒段，小火滚煮上桌。", timerSeconds: 600, chefTip: "肥肠在红油酸菜汤中持续微滚，辣中带酸，越吃越香。" }
    ],
    tips: "湖南人下酒聚会必点之霸王钵。肥肠软糯带焦边，酸菜解腻生津，汤底红油翻滚，辣意十足，拌饭可连吃三碗。",
    tags: ["湖南", "常德", "肥肠钵", "红油浓郁", "酸菜解腻", "砂钵慢滚"]
  },
  {
    id: "rec_prov_009",
    name: "常德传统红煨甲鱼土鸡钵",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 460,
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "鲜活优质生态汉寿甲鱼", amount: 1, unit: "只(约750g)", type: "main", isCore: true },
      { name: "散养走地土公鸡", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "独头大蒜整粒(去皮)", amount: 15, unit: "粒", type: "main", isCore: true },
      { name: "老生姜切厚块", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "青红朝天椒段", amount: 40, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "常德秘制酱汁与特级老抽生抽", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯粮高度白酒", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "熟猪油与菜籽油(各半混合)", baseAmount: 40, unit: "g", amountText: "40g", isPantryStaple: true },
      { name: "纯净沸水", baseAmount: 600, unit: "ml", amountText: "600ml", isPantryStaple: true },
      { name: "白胡椒粉与精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "甲鱼开水烫泡撕净白砂膜斩块", instruction: "甲鱼宰杀斩件，入80度热水浸泡30秒捞出，仔细撕净表面一层透明白砂薄膜，剁大块焯水洗净。", timerSeconds: 420, chefTip: "甲鱼壳裙边的白膜是腥味根源，必须彻底剥净。" },
      { stepIndex: 2, title: "土鸡斩块与甲鱼沥干水分", instruction: "土鸡剁小块焯水洗净，与甲鱼块一同控干水分备用。", timerSeconds: 240, chefTip: "鸡肉与甲鱼同煨，鸡鲜与胶原甲鱼互补，形成双重复合鲜。" },
      { stepIndex: 3, title: "猪油混合热锅炸香整蒜粒与姜块", instruction: "热锅倒猪油与菜籽油，放入整粒独头蒜与姜块小火慢炸至金黄表皮微起皱捞出。", timerSeconds: 240, chefTip: "整蒜炸至起虎皮，炖煮时不烂成泥且蒜香极浓。" },
      { stepIndex: 4, title: "大火爆炒甲鱼土鸡入沸水转砂钵深煨", instruction: "锅内油烧热倒入甲鱼与鸡块大火狂翻煸干水汽，烹入大量白酒激香，加酱油炒出红润浓酱，倒入炸蒜与沸水600ml，转砂钵大火烧开转中火煨炖25分钟至裙边软糯胶原粘稠。", timerSeconds: 1500, chefTip: "出锅前放白胡椒粉和青红椒圈，汤汁收至浓胶挂勺，拌饭绝顶。" }
    ],
    tips: "湖南最高规格霸王宴席名馔。甲鱼裙边软糯Q弹、胶原蛋白满溢粘唇，土鸡肉香透骨，汤汁浓稠金红，尊贵滋补无与伦比。",
    tags: ["湖南", "常德", "甲鱼烧鸡", "裙边胶原", "土鸡鲜醇", "豪横大菜"]
  },
  {
    id: "rec_prov_010",
    name: "长沙老街灌汁臭豆腐",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "snack",
    cookingMethod: "炸",
    calories: 280,
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "长沙传统正宗黑豆腐生胚", amount: 12, unit: "块", type: "main", isCore: true },
      { name: "特制蒜蓉泥与红油辣椒酱", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "湖南香脆榨菜碎与酸豆角丁", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜香菜碎与小葱花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "鲜猪骨鸡高汤(灌汁灵魂底)", baseAmount: 150, unit: "ml", amountText: "150ml", isPantryStaple: true },
      { name: "纯正生抽与香醋", baseAmount: 20, unit: "ml", amountText: "生抽15ml+醋5ml", isPantryStaple: true },
      { name: "熟纯菜籽油(油炸用)", baseAmount: 500, unit: "ml", amountText: "宽油", isPantryStaple: true },
      { name: "孜然粉与白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "调配老街秘制热灌汁", instruction: "小锅内倒入高汤150ml、生抽、蒜泥、榨菜丁、红油辣子、少许醋与胡椒粉，大火烧开保持微热保温备用。", timerSeconds: 240, chefTip: "灌汁必须带有温热高汤底，咸鲜酸辣，才能瞬间融化在豆腐内芯。" },
      { stepIndex: 2, title: "大火宽油炸至黑豆腐鼓包焦脆", instruction: "深锅倒入宽油烧至七成热（下木筷立即冒大泡），下入黑豆腐生胚，中大火炸约3-4分钟，至豆腐表面鼓起大包、表皮焦脆硬挺捞出沥油。", timerSeconds: 240, chefTip: "油温必须高，外壳快速炸脆变硬，而内部受热产生大量蒸汽膨胀形成中空蜂窝结构。" },
      { stepIndex: 3, title: "筷子扎破外壳狠灌热汤汁", instruction: "炸好的豆腐趁极度滚烫装碗，用筷子从正中心用力扎破一个洞，用小勺舀入满满一勺滚烫红油高汤蒜蓉汁狠灌入内芯。", timerSeconds: 120, chefTip: "趁热瞬间灌汁，中空的海绵组织如海绵吸水般瞬间把鲜辣汤汁吸满。" },
      { stepIndex: 4, title: "撒香菜葱花榨菜碎趁热爆浆", instruction: "在豆腐表面撒满榨菜丁、酸豆角、香菜葱花，夹起整块一口塞入嘴中，体验外焦内嫩、爆汁喷香的无敌快感。", timerSeconds: 60, chefTip: "闻着臭、吃着香，焦脆与汁水在口腔瞬间炸裂。" }
    ],
    tips: "长沙城市味觉名片。焦脆如纸，细嫩如脂，初闻臭气扑鼻，细嚼满口喷香，灌汁热辣滚烫，凡到长沙者无人不为之倾倒。",
    tags: ["湖南", "长沙", "老街臭豆腐", "一口爆汁", "非遗小吃", "香辣爽脆"]
  },
  {
    id: "rec_prov_011",
    name: "长沙大排档金牌麻辣烤猪手",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烤",
    calories: 420,
    prepTimeMinutes: 30,
    cookTimeMinutes: 50,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜优质土猪前蹄", amount: 2, unit: "只(切半约800g)", type: "main", isCore: true },
      { name: "特制五香老卤汁(八角桂皮草果丁香)", amount: 1000, unit: "ml", type: "main", isCore: true },
      { name: "香葱花与熟白芝麻", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特调烧烤辣粉(辣椒面、花椒粉、孜然粉、花生碎)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "特级麦芽糖或蜂蜜水(刷皮用)", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "红油与熟猪油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "猪蹄火烧去毛焯水劈开", instruction: "猪蹄喷枪烧焦表皮刮洗干净，劈成长半片，冷水下锅焯透洗净。", timerSeconds: 300, chefTip: "前蹄肉多骨细胶原丰富，烧皮去毛可去腥起脆。" },
      { stepIndex: 2, title: "五香老卤锅文火卤制40分钟至软烂", instruction: "猪蹄放入老卤锅中，加葱姜料酒冰糖生抽，小火慢卤40分钟至筷子可轻松插透皮肉，捞出沥干晾凉收紧表皮。", timerSeconds: 2400, chefTip: "卤至八九分烂即可，切忌卤化烂散，晾干表皮才能烤出脆皮。" },
      { stepIndex: 3, title: "刷蜂蜜红油炭火或烤箱高温炙烤", instruction: "猪蹄两面均匀刷薄薄一层麦芽糖水与红油。放入220度烤箱或炭火烤架，大火烤10分钟至猪皮滋滋冒油、起焦香金泡。", timerSeconds: 600, chefTip: "高温炙烤将多余油脂逼出，皮脂瞬间形成微焦韧脆外壳，内里胶原黏糯化水。" },
      { stepIndex: 4, title: "密撒香辣花生孜然面撒葱出炉", instruction: "出炉趁热两面均匀厚撒特调辣椒粉、孜然粉、熟芝麻与香葱，撕咬大嚼胶原粘唇。", timerSeconds: 120, chefTip: "辣香扑鼻，外焦里糯，软烂脱骨，夜市配冰啤酒封神绝配。" }
    ],
    tips: "长沙化龙池与冬瓜山夜市霸主。先卤后烤，外皮香脆带焦斑，内里满满胶原蛋白糯到粘嘴，麻辣鲜香直透骨髓。",
    tags: ["湖南", "长沙", "夜市小吃", "烤猪蹄", "外焦里糯", "胶原爆棚"]
  },
  {
    id: "rec_prov_012",
    name: "浏阳传统豆豉蒸农家五花腊肉",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "蒸",
    calories: 390,
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "湘西柏树枝烟熏农家五花腊肉", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "湖南浏阳特产纯黑豆豉", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "湖南干红辣椒粗碎粉", amount: 15, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切碎末", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜大蒜叶切碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯粮米酒或料酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯正茶油或花生油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白糖(提鲜中和咸辣)", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "腊肉温水刷洗刮净皮脂切薄透大片", instruction: "腊肉用温水刷洗干净表面烟熏浮灰，煮锅小火煮10分钟去多余咸味捞出，顶刀切成薄如蝉翼的整齐大片。", timerSeconds: 600, chefTip: "先煮透再切薄片，咸度适中，油脂呈半透明琥珀色。" },
      { stepIndex: 2, title: "大碗内整齐码放腊肉片", instruction: "将切好的五花腊肉片肥瘦相间、层层叠叠整齐码放在土瓷蒸碗底部。", timerSeconds: 180, chefTip: "皮朝下整齐码盘，蒸透倒扣或直接端出极具农家美感。" },
      { stepIndex: 3, title: "铺满浏阳黑豆豉与蒜末干椒面", instruction: "在腊肉表面均匀铺上厚厚一层浏阳黑豆豉、大蒜碎末、干辣椒碎，淋入米酒、少许糖和几滴茶油。", timerSeconds: 120, chefTip: "浏阳黑豆豉带有特殊的醇香咸甘，高温蒸制下能将腊肉油脂彻底吸附转化。" },
      { stepIndex: 4, title: "大火上汽暴蒸25分钟出锅撒蒜叶", instruction: "蒸锅水烧滚沸，放入蒸碗盖严大火蒸25分钟至肉片透明卷曲、豆豉泛出油光。出锅撒上青翠大蒜叶拌匀即可大口干饭。", timerSeconds: 1500, chefTip: "热气腾腾出锅，腊肉肥肉晶莹透光肥而不腻，豆豉香气四溢，下饭一绝。" }
    ],
    tips: "国家级非遗浏阳蒸菜之至尊王者。肉片晶亮透明，熏香扑鼻，豆豉鲜醇咸润，辣椒干香透味，吃一块腊肉能扒下半碗米饭。",
    tags: ["湖南", "浏阳蒸菜", "烟熏腊肉", "黑豆豉", "下饭神器", "非遗名菜"]
  },
  {
    id: "rec_prov_013",
    name: "浏阳传统蒸手撕刁子鱼干",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "蒸",
    calories: 260,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "洞庭湖新鲜晾晒半干刁子鱼", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "湖南青红朝天椒碎", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "浏阳黑豆豉", amount: 20, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切碎末与老姜丝", amount: 25, unit: "g", type: "secondary", isCore: false },
      { name: "香葱花与香菜", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "熟纯猪油(增润灵魂)", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "纯粮米酒与生抽", baseAmount: 15, unit: "ml", amountText: "米酒10ml+生抽5ml", isPantryStaple: true },
      { name: "香醋", baseAmount: 3, unit: "ml", amountText: "3ml", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "刁子鱼温水稍泡撕去背刺骨头", instruction: "半干刁子鱼温水快速冲洗5秒捞出沥干，手撕去头去尾排在大碗中。", timerSeconds: 240, chefTip: "不可久泡，保留微干韧劲嚼劲方为地道。" },
      { stepIndex: 2, title: "盖满蒜姜豆豉与朝天椒碎", instruction: "将生姜丝、大蒜碎、豆豉、厚厚一层青红椒碎铺在鱼干表面。", timerSeconds: 120, chefTip: "辣酱与豆豉铺满盖严鱼干，使鱼肉充分吸透辛香。" },
      { stepIndex: 3, title: "淋入猪油与米酒生抽上汽暴蒸", instruction: "在表面挖上一大勺熟猪油，淋米酒与生抽，入大汽蒸锅中大火蒸15分钟。", timerSeconds: 900, chefTip: "熟猪油遇热融化缓缓渗入干鱼肉纤维中，鱼肉立刻油润软化，咸香浓郁。" },
      { stepIndex: 4, title: "出锅拌匀连刺带肉越嚼越香", instruction: "出锅前滴几滴香醋，撒葱花拌匀，鱼肉韧香无腥，咸辣适口。", timerSeconds: 60, chefTip: "佐餐下酒绝品，咸辣鲜韧。" }
    ],
    tips: "湘江与洞庭渔家祖传蒸菜。干鱼吸收了猪油与豆豉的精华，油润鲜亮，咸辣扑鼻，越嚼越有滋味，下酒极品。",
    tags: ["湖南", "浏阳蒸菜", "刁子鱼干", "下酒绝配", "油润咸香", "湘味特色"]
  },
  {
    id: "rec_prov_014",
    name: "湖南传统秘制红煨甲鱼",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "烧",
    calories: 430,
    prepTimeMinutes: 25,
    cookTimeMinutes: 40,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "鲜活汉寿水系生态甲鱼", amount: 1, unit: "只(约700g)", type: "main", isCore: true },
      { name: "猪五花肉丁(煸油提香)", amount: 100, unit: "g", type: "secondary", isCore: false },
      { name: "整瓣大蒜头(去皮油炸起皱)", amount: 20, unit: "瓣", type: "main", isCore: true },
      { name: "新鲜红朝天椒段与青蒜苗", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "生姜切厚片", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "自制红煨酱与特级生抽老抽", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "纯粮高度白酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯正熟猪油", baseAmount: 30, unit: "g", amountText: "30g", isPantryStaple: true },
      { name: "高汤或沸水", baseAmount: 500, unit: "ml", amountText: "500ml", isPantryStaple: true },
      { name: "白胡椒粉与精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "甲鱼烫皮除白砂膜剁大块", instruction: "甲鱼热水烫皮撕净外层透明白膜，剁成大块洗净血水控干。", timerSeconds: 360, chefTip: "裙边和甲鱼四爪必须仔细搓洗干净。" },
      { stepIndex: 2, title: "猪油炒香五花肉煸出荤香", instruction: "热锅下猪油，放入五花肉丁煸炒至微焦出油，下姜片与蒜瓣爆香。", timerSeconds: 180, chefTip: "五花肉丁的油脂与猪油混合，给甲鱼增添醇厚的动物荤脂香气。" },
      { stepIndex: 3, title: "甲鱼块猛火急翻出香烹入白酒", instruction: "倒入甲鱼块大火狂翻爆炒3分钟至表皮紧缩，烹入白酒激出浓香，调入生抽老抽炒出红润酱色。", timerSeconds: 240, chefTip: "大火猛炒紧缩甲鱼表层胶质，锁住鲜汁。" },
      { stepIndex: 4, title: "入高汤慢煨至裙边软糯收汁", instruction: "倒入沸水高汤500ml烧开转中小火盖盖焖煨25分钟至肉酥烂裙边软糯，下炸蒜瓣、红椒圈大火收浓汁成胶，撒白胡椒粉青蒜出锅。", timerSeconds: 1500, chefTip: "汤汁浓稠挂勺，裙边入口黏嘴，浓油赤酱红润诱人。" }
    ],
    tips: "传统湘菜头牌名菜。重油重色，醇浓胶滑，裙边厚糯滑爽，肉质细嫩胜似小牛肉，浓汁拌饭乃天下第一等绝味。",
    tags: ["湖南", "湘菜", "红煨甲鱼", "裙边软糯", "胶滑粘唇", "豪气名菜"]
  },
  {
    id: "rec_prov_015",
    name: "常德正宗红油黄牛肉米粉",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "staple",
    cookingMethod: "煮",
    calories: 450,
    prepTimeMinutes: 25,
    cookTimeMinutes: 90,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "优质早稻米常德圆形鲜米粉", amount: 400, unit: "g", type: "main", isCore: true },
      { name: "牛腱子肉或牛肋条肉", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "牛大骨浓汤底", amount: 1000, unit: "ml", type: "main", isCore: true },
      { name: "常德油炸香脆花生碎", amount: 30, unit: "g", type: "secondary", isCore: false },
      { name: "特制酸豆角与老坛剁椒", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜香菜碎与青葱花", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "常德红油牛肉秘制香料辣油(牛油炒香料与辣椒面)", baseAmount: 40, unit: "ml", amountText: "40ml", isPantryStaple: true },
      { name: "纯粮生抽、老抽与冰糖", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "精制食盐与现磨花椒粉", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "牛腱肉切大块老卤焖炖酥烂切片", instruction: "牛腱肉焯透洗净，放入牛骨高汤加八角桂皮香叶草果红油豆瓣慢火焖煮70分钟至酥软入味，捞出顶刀切成大块厚片做浇头。", timerSeconds: 4200, chefTip: "牛腱肉炖至八九分酥软切片，肉质带筋爽滑弹牙。" },
      { stepIndex: 2, title: "调制常德招牌浓香牛油红汤底", instruction: "大碗底放入一勺厚重牛油红油、生抽、蒜水、少许胡椒粉，舀入两勺滚沸滚烫的牛骨原汤冲开。", timerSeconds: 120, chefTip: "常德米粉必须用纯牛油熬制的红油，浮在汤面锁温聚香，嗦粉时粉挂满红油。" },
      { stepIndex: 3, title: "沸水滚烫快速汆烫鲜米粉30秒", instruction: "大锅水烧至滚沸，将常德圆米粉放入竹捞篱中浸入开水轻轻抖动汆烫30秒，粉软透无硬心立刻捞起沥干，倒入汤碗中。", timerSeconds: 60, chefTip: "鲜圆粉切勿久煮，烫30秒即可保留纯米粉筋道滑爽的最佳口感。" },
      { stepIndex: 4, title: "铺满厚厚牛肉片撒酸豆角花生", instruction: "在米粉上铺满大片红油软烂牛肉浇头，撒上酸豆角、脆花生、油辣子与葱花香菜，大口嗦粉吸汁过瘾至极。", timerSeconds: 60, chefTip: "米粉圆润顺滑，红油火辣鲜浓，牛肉酱香软烂。" }
    ],
    tips: "湖南米粉界的无冕之王。常德圆粉滑爽不断，牛油红汤浮油锁热，大片黄牛肉软烂酥香，嗦上一碗大汗淋漓酣畅痛快。",
    tags: ["湖南", "常德米粉", "黄牛肉粉", "红油浓汤", "早点江湖", "嗦粉圣品"]
  },

  // 15道下饭小炒天花板
  {
    id: "rec_prov_016",
    name: "湘味正宗小炒黄牛肉",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 320,
    prepTimeMinutes: 15,
    cookTimeMinutes: 3,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "黄牛里脊肉或吊龙伴", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "新鲜红色小米辣圈", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "老坛泡野山椒碎", amount: 20, unit: "g", type: "main", isCore: true },
      { name: "新鲜大蒜叶切小段", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切厚片", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "嫩生姜切细丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽酱油与老抽", baseAmount: 15, unit: "ml", amountText: "生抽12ml+老抽3ml", isPantryStaple: true },
      { name: "纯红薯淀粉与食用油(上浆锁水)", baseAmount: 15, unit: "ml", amountText: "淀粉5g+植物油10ml", isPantryStaple: true },
      { name: "纯正菜籽油(大火宽油爆炒)", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "精制食盐与白胡椒粉", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "顶刀快刀切极薄片轻柔上浆", instruction: "黄牛肉逆着纹理顶刀切成薄透大片。加少许盐、胡椒粉、生抽、干淀粉抓匀至起胶，最后淋上一勺植物油封住水分冷藏10分钟。", timerSeconds: 300, chefTip: "牛肉必须顶刀横切断纤维，油封上浆能让牛肉入锅瞬间锁住肉汁滑嫩爆汁。" },
      { stepIndex: 2, title: "猛火热锅热油将小米辣野山椒炒出辣香", instruction: "铁锅烧至剧烈冒青烟，倒菜籽油烧热，先下蒜片姜丝、小米辣、野山椒碎大火爆炒10秒逼出酸辣烈香。", timerSeconds: 30, chefTip: "野山椒与小米辣双椒合璧，野山椒提酸爽，小米辣提辛烈，层次极其丰富。" },
      { stepIndex: 3, title: "下牛肉片大火急翻15秒瞬间滑熟", instruction: "迅速倒入上好浆的牛肉片，全程猛火以最快速度滑散颠翻15秒，肉片由红转褐断生立即上老抽调色。", timerSeconds: 30, chefTip: "铁律：牛肉翻炒绝不可超过20秒，炒久即老如橡皮，急火断生最滑嫩多汁。" },
      { stepIndex: 4, title: "投入大蒜叶颠锅5次立即出锅", instruction: "立即撒入大蒜叶段，大火颠锅翻炒5次让大蒜叶受热断生香气迸发，关火装盘趁滚烫享用。", timerSeconds: 20, chefTip: "大蒜叶断生即可，带着微焦蒜香和热辣汁水，拌入热米饭一盘干掉三碗。" }
    ],
    tips: "各大湘菜馆无可撼动的下饭神菜之王。牛肉鲜嫩化渣，野山椒酸辣开胃，大蒜叶清香四溢，镬气十足，香辣狂野。",
    tags: ["湖南", "湘菜", "小炒黄牛肉", "下饭神菜", "急火爆炒", "香辣爆汁"]
  },
  {
    id: "rec_prov_017",
    name: "湖南农家大椒炒肉拌饭汁",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 340,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜土猪前腿前夹肉(肥瘦分开切薄片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "湖南正宗皮薄肉脆螺丝椒", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "整瓣大蒜拍碎", amount: 20, unit: "g", type: "secondary", isCore: false },
      { name: "浏阳豆豉", amount: 10, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽与老抽酱油", baseAmount: 20, unit: "ml", amountText: "生抽15ml+老抽5ml", isPantryStaple: true },
      { name: "纯粮料酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "骨汤或清水(提拌饭浓汁)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "螺丝椒刀背拍裂滚刀切斜块", instruction: "螺丝椒洗净用刀面用力拍裂，斜切成大段；肥肉切薄片，瘦肉切薄片加少许生抽油拌匀。", timerSeconds: 240, chefTip: "辣椒拍扁能打破细胞壁，让青椒汁液在干煸时更快渗出形成虎皮焦香。" },
      { stepIndex: 2, title: "干锅不放油煸炒青椒出虎皮微软", instruction: "净铁锅烧热不放油，倒入青椒段和半茶匙盐，用锅铲用力按压煸炒2分钟，至表面起微焦虎皮变软盛出。", timerSeconds: 150, chefTip: "先擂炒青椒逼出水汽，青椒焦香扑鼻辣而不燥。" },
      { stepIndex: 3, title: "肥肉慢火煸出透亮猪油下瘦肉", instruction: "锅内下肥肉片小火煸炒出大量天然透明猪油，下大蒜瓣和豆豉炒香，下瘦肉片大火滑炒至变色。", timerSeconds: 180, chefTip: "纯猪油是湖南辣椒炒肉好吃的灵魂密码。" },
      { stepIndex: 4, title: "倒回青椒淋酱油和少许水出浓油汤汁", instruction: "倒回煸好的青椒，淋入生抽老抽料酒，倒入30ml水或高汤大火翻炒沸腾收汁出浓红润汤汁起锅。", timerSeconds: 90, chefTip: "留少许浓郁红润的猪油酱油肉汁，浇在热米饭上每一粒米饭都裹满咸鲜肉香。" }
    ],
    tips: "三湘四水千家万户每天都在吃的灵魂第一菜。猪油焦香，瘦肉滑嫩，青椒微焦皮脆，那一勺油润的酱汁淋在饭上，神仙也挡不住。",
    tags: ["湖南", "辣椒炒肉", "国民家常", "拌饭神器", "猪油焦香", "镬气十足"]
  },
  {
    id: "rec_prov_018",
    name: "湘西农家土匪猪肝",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 280,
    prepTimeMinutes: 15,
    cookTimeMinutes: 3,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜粉嫩新鲜猪肝", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "老坛泡生姜片与老坛泡红椒", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "大蒜叶切小长段", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切厚片", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯红薯淀粉与植物油(上浆锁水)", baseAmount: 15, unit: "ml", amountText: "淀粉5g+油10ml", isPantryStaple: true },
      { name: "生抽、老抽与香醋", baseAmount: 15, unit: "ml", amountText: "生抽10ml+老抽3ml+醋2ml", isPantryStaple: true },
      { name: "纯正熟菜籽油", baseAmount: 35, unit: "ml", amountText: "35ml", isPantryStaple: true },
      { name: "白胡椒粉与精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "猪肝快刀切大柳叶厚片浸泡漂洗", instruction: "猪肝切成3毫米厚的大柳叶薄片，在流动清水中浸泡抓洗去血沫，厨房纸彻底吸干表面水分。", timerSeconds: 300, chefTip: "彻底洗净血沫并吸干水分，猪肝才毫无苦腥气。" },
      { stepIndex: 2, title: "淀粉酱油轻柔上浆加油封住", instruction: "加入少许盐、胡椒粉、料酒、生抽、淀粉抓匀起浆，最后封入植物油锁紧肉汁。", timerSeconds: 180, chefTip: "油封上浆能让猪肝在高温油温中极速定型滑嫩。" },
      { stepIndex: 3, title: "大火宽油爆炒泡姜泡椒出酸辣香", instruction: "铁锅烧热下足量菜籽油烧至八成热，下蒜片、老坛泡姜泡红椒大火爆炒10秒。", timerSeconds: 30, chefTip: "老坛泡菜的乳酸香气能瞬间去除内脏腥气。" },
      { stepIndex: 4, title: "滑入猪肝颠翻15秒下大蒜叶出锅", instruction: "下猪肝大火狂翻15秒至断生变色，下大蒜叶、生抽老抽几滴香醋，大火颠锅5次立即盛盘。", timerSeconds: 30, chefTip: "全程不超过30秒，猪肝嫩如豆腐滑润爽脆，入口即化。" }
    ],
    tips: "湘西民间土菜一绝。大片猪肝爽滑鲜嫩如豆腐，泡姜泡椒酸辣过瘾，大蒜叶清香解腻，镬气冲天。",
    tags: ["湖南", "湘西", "土匪猪肝", "脆嫩滑爽", "泡椒酸辣", "快手小炒"]
  },
  {
    id: "rec_prov_019",
    name: "湖南金牌酸辣鸡杂",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 20,
    cookTimeMinutes: 5,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "新鲜鸡胗与鸡心鸡肠", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "老坛酸豇豆(洗净切碎粒)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "红朝天椒圈与泡野山椒碎", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切碎末与老姜丝", amount: 25, unit: "g", type: "secondary", isCore: false },
      { name: "新鲜小香芹碎", amount: 30, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽与老抽", baseAmount: 15, unit: "ml", amountText: "生抽12ml+老抽3ml", isPantryStaple: true },
      { name: "纯粮高度白酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "菜籽油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "白胡椒粉与白糖", baseAmount: 3, unit: "g", amountText: "胡椒粉1g+糖2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "鸡胗切精细十字花刀切薄片", instruction: "鸡胗刮净黄油，内壁打极密十字花刀切薄片；鸡心对半剖开洗净血块；加白酒淀粉抓匀。", timerSeconds: 360, chefTip: "密织花刀使鸡胗在滚油中受热爆出无数脆花，极易入味且脆度暴增。" },
      { stepIndex: 2, title: "干锅先煸炒酸豇豆粒逼出酸香", instruction: "热锅不下油下酸豆角粒干炒1分钟至水分收干、酸香扑鼻盛出。", timerSeconds: 90, chefTip: "酸豆角干煸可去生涩水气，更加爽脆。" },
      { stepIndex: 3, title: "热锅宽油大火爆炒鸡杂卷花断生", instruction: "大火热油下姜蒜末、野山椒碎，倒入鸡杂大火猛爆20秒至鸡胗爆开成卷花迅速断生。", timerSeconds: 45, chefTip: "猛火快翻保持鸡杂极其脆嫩不老。" },
      { stepIndex: 4, title: "倒回酸豆角红椒香芹急火颠出", instruction: "倒回酸豇豆、红椒圈、香芹碎，调入生抽老抽白糖白胡椒，大火翻炒10秒颠锅出盘。", timerSeconds: 30, chefTip: "酸脆、爽辣、脆弹，每一勺送入嘴里都在咔哧作响。" }
    ],
    tips: "湖南大排档翻台率最高的第一下饭热炒。鸡胗脆嫩爆汁，酸豆角开胃生津，酸辣爽脆交织，就着米饭让人欲罢不能。",
    tags: ["湖南", "酸辣鸡杂", "酸豆角", "爽脆弹牙", "极速快炒", "开胃神菜"]
  },
  {
    id: "rec_prov_020",
    name: "金牌小炒拆骨肉荷包蛋",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 380,
    prepTimeMinutes: 15,
    cookTimeMinutes: 8,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "大骨头上剔下的熟拆骨肉(带筋膜软骨)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜农家土鸡蛋", amount: 3, unit: "个", type: "main", isCore: true },
      { name: "青红杭椒切斜圈", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "浏阳黑豆豉与蒜末", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽酱油与老抽", baseAmount: 15, unit: "ml", amountText: "生抽12ml+老抽3ml", isPantryStaple: true },
      { name: "纯正熟猪油或菜油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "骨汤或清水", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "多油煎出金黄焦边溏心荷包蛋", instruction: "热锅倒油打入3个鸡蛋，中小火煎至蛋白边缘焦脆金黄、蛋黄微溏心，盛出用刀铲切成大块。", timerSeconds: 180, chefTip: "荷包蛋必须煎出金黄焦脆金边，才能吸附肉汁汤汁。" },
      { stepIndex: 2, title: "大火煸炒拆骨肉逼出焦香味", instruction: "锅内留底油下拆骨肉片大火翻炒2分钟，煸出表面焦香脆皮盛出。", timerSeconds: 120, chefTip: "大骨肉带筋带软骨，煸出焦香嚼劲十足。" },
      { stepIndex: 3, title: "炒香青红椒蒜末豆豉", instruction: "下蒜末、豆豉、青红椒圈大火煸炒出浓郁豆豉香辣味。", timerSeconds: 60, chefTip: "青红椒断生起辣意。" },
      { stepIndex: 4, title: "倒入拆骨肉荷包蛋淋汁合炒收汁", instruction: "倒回拆骨肉和切块荷包蛋，淋生抽老抽与少许骨汤，大火猛翻颠锅让鸡蛋完全吸透咸香肉汁，出锅装盘。", timerSeconds: 90, chefTip: "荷包蛋孔洞吸足肉香浓汁，一口咬下去爆汁下饭。" }
    ],
    tips: "长沙夜宵街头点击率最高的当红炸子鸡。焦香的鸡蛋裹满带筋软烂的骨边肉汁，豆豉咸鲜青椒鲜辣，绝世下饭组合。",
    tags: ["湖南", "夜市顶流", "拆骨肉荷包蛋", "焦香浓郁", "超级下饭", "市井风味"]
  },
  {
    id: "rec_prov_021",
    name: "大蒜叶炒烟熏腊牛肉",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 330,
    prepTimeMinutes: 20,
    cookTimeMinutes: 8,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "湘西柴火烟熏农家老腊牛肉", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜大蒜叶(青白相间切斜段)", amount: 80, unit: "g", type: "main", isCore: true },
      { name: "湖南干红朝天椒段", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "大蒜瓣切片与老姜片", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯粮米酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "纯正熟茶油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "生抽与白糖", baseAmount: 10, unit: "ml", amountText: "生抽8ml+白糖2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "腊牛肉水煮去浮灰透软切极薄大片", instruction: "腊牛肉温水刷洗干净，入沸水锅中火煮15分钟至肉软透捞出，逆着牛肉纹理顶刀切成薄如蝉翼的大片。", timerSeconds: 900, chefTip: "腊牛肉质地干硬紧实，先煮透软再切极薄片，吃起来越嚼越香绝不塞牙。" },
      { stepIndex: 2, title: "茶油煸香姜蒜干红椒", instruction: "铁锅倒茶油烧热，下入蒜片姜片和干红椒段小火煸出浓郁辣油香。", timerSeconds: 60, chefTip: "茶油与腊牛肉是绝配，催发出浓郁松柏木熏香。" },
      { stepIndex: 3, title: "下腊牛肉大火快炒烹米酒", instruction: "倒入薄切腊牛肉大火快速翻炒1分钟，烹入米酒激出香气，加少许生抽白糖调味。", timerSeconds: 60, chefTip: "翻炒动作要快，让肉片受热微卷起香。" },
      { stepIndex: 4, title: "入大蒜叶段急火翻匀出锅", instruction: "投入青翠大蒜叶，大火颠锅翻炒10秒让大蒜叶断生溢香，立即装盘。", timerSeconds: 20, chefTip: "大蒜叶不可炒软，微脆带着蒜香，搭配干香腊肉最绝。" }
    ],
    tips: "湘西年节餐桌上的贵宾名菜。松柏熏烤的腊牛肉香浓无比，大蒜叶清香四溢，干红椒火辣呛口，越嚼越甘香，极品下酒菜。",
    tags: ["湖南", "湘西", "腊牛肉", "大蒜叶", "柴火烟熏", "越嚼越香"]
  },
  {
    id: "rec_prov_022",
    name: "邵阳传统猪血丸子炒腊肉",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 360,
    prepTimeMinutes: 20,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "邵阳传统烟熏猪血丸子", amount: 1, unit: "个(约200g)", type: "main", isCore: true },
      { name: "湘西农家五花腊肉", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜大蒜苗切斜段", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "红泡椒碎或干红椒段", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "老生姜片", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯粮米酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "菜籽油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "生抽与精盐", baseAmount: 10, unit: "ml", amountText: "生抽8ml+盐1g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "猪血丸子与腊肉煮透切大薄片", instruction: "猪血丸子与腊肉洗净入水锅中火煮15分钟至软，捞出顶刀切成3毫米厚的大片。", timerSeconds: 900, chefTip: "邵阳猪血丸子由水豆腐、猪血、肥瘦肉泥搓丸熏成，煮透后切片不易散。" },
      { stepIndex: 2, title: "小火煸出五花腊肉天然油脂", instruction: "热锅下少许油，放入五花腊肉片煸炒至表面微卷出油，下姜片炒香。", timerSeconds: 120, chefTip: "腊肉油脂润滑锅底，带出浓郁熏香。" },
      { stepIndex: 3, title: "倒入猪血丸子片两面慢煎吸油", instruction: "倒入猪血丸子片，中火翻炒慢煎2分钟，让豆腐猪血丸子充分吸足腊肉的脂香。", timerSeconds: 120, chefTip: "丸子吸油后外焦里糯，豆腐干香四溢。" },
      { stepIndex: 4, title: "撒红椒蒜苗颠锅大火出盘", instruction: "倒入大蒜苗段、红椒碎、烹入米酒和少许生抽，大火翻炒15秒蒜香扑鼻即可出锅。", timerSeconds: 30, chefTip: "蒜苗青翠，丸子黑褐微红，腊肉晶亮，传统邵阳年味。" }
    ],
    tips: "湖南邵阳最具标志性的非遗传统美味。豆腐与鲜猪血经柏枝熏透，干香紧实，与五花腊肉双鲜合炒，越嚼越香醇浓郁。",
    tags: ["湖南", "邵阳", "猪血丸子", "非遗风味", "熏香干醇", "老家年味"]
  },
  {
    id: "rec_prov_023",
    name: "湖南农家青椒紫苏煎黄瓜",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 180,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "新鲜嫩黄瓜(去瓤切厚块)", amount: 2, unit: "根(约400g)", type: "main", isCore: true },
      { name: "新鲜紫苏叶大把(切粗丝)", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "湖南青红螺丝椒圈", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切片", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正菜籽油与熟猪油(混炒更香)", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "特级生抽与蚝油", baseAmount: 15, unit: "ml", amountText: "生抽10ml+蚝油5ml", isPantryStaple: true },
      { name: "精制食盐与白糖", baseAmount: 3, unit: "g", amountText: "盐2g+糖1g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "黄瓜去瓤拍裂切厚滚刀块", instruction: "黄瓜洗净去瓤，用刀背稍稍拍裂，切成约3厘米长的厚块；紫苏洗净撕碎。", timerSeconds: 180, chefTip: "去瓤能防止黄瓜下锅出太多汤水，拍裂更容易吸收焦香与调料。" },
      { stepIndex: 2, title: "多油热锅慢煎黄瓜两面起微焦皱皮", instruction: "锅内下猪油和菜油烧热，放入黄瓜块中火煎制3分钟，煎至黄瓜两面泛起微黄焦斑、表皮发皱变软盛出。", timerSeconds: 180, chefTip: "先煎是湘派独门绝活！黄瓜煎去生水气，产生迷人焦香，口感软中带韧脆。" },
      { stepIndex: 3, title: "蒜片青红椒爆炒出辛辣香气", instruction: "留底油爆香蒜片、青红椒圈至椒皮微起皱出辣味。", timerSeconds: 60, chefTip: "青红椒断生起香辣。" },
      { stepIndex: 4, title: "倒回黄瓜下紫苏生抽大火合炒出镬气", instruction: "倒回煎好的黄瓜块，撒入大量紫苏叶，淋入生抽、蚝油、盐和糖，大火猛颠翻炒15秒让紫苏香气彻底渗入黄瓜，立即装盘。", timerSeconds: 30, chefTip: "紫苏特有的芳香与焦香黄瓜融为一体，比肉菜还抢手。" }
    ],
    tips: "湘菜里最令人惊艳的素炒天花板。普通黄瓜经油煎焦香，吸饱紫苏的奇香与青椒的微辣，软韧多汁，甘爽解腻至极。",
    tags: ["湖南", "家常素炒", "紫苏煎黄瓜", "软韧多汁", "清凉开胃", "湘派独门"]
  },
  {
    id: "rec_prov_024",
    name: "湖南农家擂辣椒茄子皮蛋",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "凉拌",
    calories: 190,
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "湖南本地农家青线椒或二荆条", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "新鲜紫皮长茄子", amount: 1, unit: "根(约250g)", type: "main", isCore: true },
      { name: "无铅优质溏心松花皮蛋", amount: 2, unit: "个", type: "main", isCore: true },
      { name: "新鲜大蒜瓣(多放拍碎)", amount: 30, unit: "g", type: "main", isCore: true }
    ],
    seasonings: [
      { name: "纯正芝麻香油或熟茶油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "特级生抽与纯粮香醋", baseAmount: 20, unit: "ml", amountText: "生抽15ml+香醋5ml", isPantryStaple: true },
      { name: "精制食盐与天然鸡精", baseAmount: 3, unit: "g", amountText: "盐2g+鸡精1g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "长茄子蒸熟蒸软撕长条", instruction: "长茄子洗净切段入蒸锅大火蒸8分钟至软烂如泥，取出晾凉用手撕成长细条放凉。", timerSeconds: 480, chefTip: "蒸透的茄子肉质绵软，极能吸收蒜香与辣椒汁。" },
      { stepIndex: 2, title: "干铁锅小火慢擂辣椒出黑虎皮", instruction: "净铁锅不放一滴油，倒入青椒用锅铲用力反复按压擂扁，小火慢擂至两面遍布黑褐色焦斑、完全发软变塌，捞出去掉黑焦皮撕成长条。", timerSeconds: 300, chefTip: "擂焦的辣椒带有极其浓郁的柴火焦香与温热辣意。" },
      { stepIndex: 3, title: "入传统擂钵下大蒜捣碎成泥", instruction: "将烤好的辣椒条、撕碎茄子、生大蒜瓣一起放入石臼或木擂钵中，加盐，用擂木用力舂捣成泥。", timerSeconds: 120, chefTip: "大蒜在生舂过程中释放极强蒜辣素，与焦椒茄泥完全融合。" },
      { stepIndex: 4, title: "加入剥壳溏心皮蛋合力擂匀淋香油", instruction: "投入2个剥皮松花皮蛋，加入生抽、香醋、香油，继续用力舂捣，将皮蛋黄融化在茄椒泥中，装碗即成。", timerSeconds: 60, chefTip: "溏心皮蛋黄化为浓稠天然酱汁，包裹着香辣的椒泥与绵软茄肉，拌热饭绝顶。" }
    ],
    tips: "风靡全国的湘派凉菜封神之作。炭火焦香、皮蛋醇香、大蒜生辛与茄子软糯四位一体，酸辣开胃，拌在热饭上一秒扒光。",
    tags: ["湖南", "擂辣椒皮蛋", "下饭神菜", "焦香浓郁", "开胃生津", "家常凉拌"]
  },
  {
    id: "rec_prov_025",
    name: "湘味老坛酸豆角肉末",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 260,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "老坛自制爽脆酸豇豆(洗净切小粒)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜土猪前腿前夹肉末", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "鲜红朝天椒碎", amount: 20, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切碎末与老生姜末", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽与老抽酱油", baseAmount: 15, unit: "ml", amountText: "生抽10ml+老抽5ml", isPantryStaple: true },
      { name: "纯粮白酒", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "纯正菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "白糖(柔和酸度关键)", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "酸豆角切极细碎粒干锅煸炒去水", instruction: "酸豆角洗净挤干，切成芝麻大的碎粒。净锅不下油大火翻炒2分钟烘干水汽出酸香盛出。", timerSeconds: 120, chefTip: "酸豆角干煸后颗粒分明爽脆，毫无酸水味。" },
      { stepIndex: 2, title: "猪肉末大火煸炒出油润焦香", instruction: "热锅倒油，下猪肉末大火翻炒至肉粒变白散开，煸炒出少许油脂，加姜蒜末白酒生抽上色。", timerSeconds: 120, chefTip: "肉末煸香微脆更具嚼劲。" },
      { stepIndex: 3, title: "下红朝天椒碎爆出香辣气", instruction: "倒入红朝天椒碎翻炒出鲜亮辣油，与肉末翻匀。", timerSeconds: 30, chefTip: "红椒提辣提色，红绿相映。" },
      { stepIndex: 4, title: "倒回酸豆角大火猛翻撒糖出锅", instruction: "倒回酸豆角碎粒，大火猛翻合炒1分钟，调入白糖中和酸辣，翻匀装盘。", timerSeconds: 60, chefTip: "加少许白糖可使酸味转为圆润甘爽，拿大勺舀着拌饭天下无敌。" }
    ],
    tips: "湖南每一个游子念念不忘的传家菜。酸豆角爽脆酸香，肉末焦香油润，一勺盖在米饭上，酸辣脆爽三味齐发，食欲爆棚。",
    tags: ["湖南", "酸豆角肉末", "下饭神器", "爽脆酸辣", "超级开胃", "家常小炒"]
  },
  {
    id: "rec_prov_026",
    name: "韭菜紫苏爆炒小河虾",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 240,
    prepTimeMinutes: 15,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "鲜活野生青壳小河虾", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜嫩紫苏叶(掐碎)", amount: 30, unit: "g", type: "main", isCore: true },
      { name: "鲜嫩红根头茬韭菜(切小段)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "青红小米辣圈与大蒜碎", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟茶油或菜籽油(宽油旺火)", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "纯粮高度白酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "生抽与精制食盐", baseAmount: 10, unit: "ml", amountText: "生抽8ml+盐2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "小河虾清洗彻底沥干水份", instruction: "小河虾剪去长须，清水多洗两遍，用厨房纸彻底吸干表面水分。", timerSeconds: 180, chefTip: "小河虾吸干水分入热油才不会炸锅，且能瞬间炸酥。" },
      { stepIndex: 2, title: "大火宽油爆炒河虾至通红酥脆", instruction: "锅内多倒茶油烧至八成热，倒入小河虾大火翻炒1分钟，烹入白酒，炒至虾壳通红酥脆捞出。", timerSeconds: 60, chefTip: "高温快爆使外壳香脆甚至无需剥壳直接咀嚼。" },
      { stepIndex: 3, title: "留底油爆香蒜末红椒与紫苏", instruction: "留底油下蒜末、红椒圈、紫苏碎大火爆炒出紫苏特有清香。", timerSeconds: 30, chefTip: "紫苏与韭菜的复合清香能彻底带出河鲜的极致鲜甜。" },
      { stepIndex: 4, title: "倒入酥河虾韭菜段颠锅5次立即起锅", instruction: "倒入炸好的酥河虾与嫩韭菜段，加盐和生抽，全程大火颠锅翻炒15秒，韭菜一受热变绿立即装盘。", timerSeconds: 20, chefTip: "韭菜断生即熟，虾壳酥脆香甜，带着紫苏草本清芬，下酒封神。" }
    ],
    tips: "洞庭湖与湘江流域初夏必吃第一鲜。河虾外壳酥脆带钙，韭菜鲜嫩多汁，紫苏香气扑鼻，连壳带肉整勺大嚼，鲜到舌根发颤。",
    tags: ["湖南", "小河虾", "韭菜炒河虾", "紫苏提香", "香酥补钙", "下酒极品"]
  },
  {
    id: "rec_prov_027",
    name: "攸县香干炒五花肉丝",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 310,
    prepTimeMinutes: 15,
    cookTimeMinutes: 5,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "湖南攸县特产柴火老香干", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜土猪带皮五花肉(切细丝)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "青红尖椒圈", amount: 40, unit: "g", type: "main", isCore: true },
      { name: "新鲜小香芹切小段", amount: 40, unit: "g", type: "secondary", isCore: false },
      { name: "生姜丝与大蒜瓣", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽与老抽", baseAmount: 15, unit: "ml", amountText: "生抽12ml+老抽3ml", isPantryStaple: true },
      { name: "骨汤或清水", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true },
      { name: "菜籽油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "攸县香干切薄片入盐水汆烫", instruction: "攸县香干切成0.3厘米厚的大片，入淡盐沸水中焯烫30秒捞出沥干。", timerSeconds: 120, chefTip: "焯水能使豆干内部发软更有弹性，炒时不碎且易入味。" },
      { stepIndex: 2, title: "小火煸出五花肉油脂下姜蒜", instruction: "热锅下少许油，放入五花肉丝小火煸炒至出油微卷，下生姜丝大蒜片炒香。", timerSeconds: 120, chefTip: "五花肉丝煸香出猪油，豆干吸油最香。" },
      { stepIndex: 3, title: "倒入香干大火翻炒注入少许高汤", instruction: "倒入香干片，大火翻炒，淋生抽老抽上色，倒入30ml高汤焖炒1分钟让豆干充分吸饱肉汁。", timerSeconds: 60, chefTip: "加微量高汤让豆干表面油润多汁，口感细腻如肉。" },
      { stepIndex: 4, title: "下青红椒香芹大火翻炒出镬气", instruction: "倒入青红椒圈、香芹段，撒少许盐，大火猛颠翻炒15秒断生出锅。", timerSeconds: 30, chefTip: "香芹提脆生香，豆干咸香软滑，每一片都透着柴火豆香。" }
    ],
    tips: "湖南非遗名吃攸县香干名扬天下。攸县天然矿泉水与古法柴火熏制豆干，滑嫩细腻，久炒不碎，与五花肉芹菜合炒，清香扑鼻下饭绝伦。",
    tags: ["湖南", "攸县香干", "非遗小炒", "豆香浓郁", "超级下饭", "家常小炒"]
  },
  {
    id: "rec_prov_028",
    name: "湘西老坛萝卜干炒腊肉丁",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 320,
    prepTimeMinutes: 20,
    cookTimeMinutes: 6,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "湘西农家自制老坛香脆萝卜干", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "湘西烟熏五花腊肉(切小丁)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "新鲜红朝天椒碎", amount: 20, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切碎末与青葱花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "特级生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "纯粮白酒", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "菜籽油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖(提鲜柔和咸味)", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "萝卜干温水浸泡切小丁干锅煸香", instruction: "萝卜干温水泡发10分钟洗净挤干水分，切成小指丁。净铁锅不放油干炒2分钟至干爽发香盛出。", timerSeconds: 180, chefTip: "萝卜干不可久泡以免失去爽脆筋道，干煸去生水味更脆韧。" },
      { stepIndex: 2, title: "腊肉丁慢火煸出透明油脂", instruction: "热锅倒少许油，放入五花腊肉丁小火煸炒至出油微焦，下蒜末姜末炒香。", timerSeconds: 120, chefTip: "腊肉丁被煸成金黄小脆丁，油脂充分滋润萝卜干。" },
      { stepIndex: 3, title: "倒回萝卜干红椒大火狂翻", instruction: "倒入煸香的萝卜干丁和红朝天椒碎，烹入白酒生抽白糖，大火猛翻2分钟让油脂与酱味完全浸透。", timerSeconds: 120, chefTip: "白糖能中和腌制咸度，激发甘甜回味。" },
      { stepIndex: 4, title: "撒葱花出锅干香油亮", instruction: "撒入葱花翻匀装盘，干香扑鼻，色泽油红亮丽。", timerSeconds: 20, chefTip: "放凉吃依然爽脆有嚼头，佐粥配饭绝品。" }
    ],
    tips: "湘西山寨千百年流传的下饭法宝。萝卜干脆生生咯吱响，腊肉丁油亮咸香，干红椒辣意扑鼻，越嚼越香越开胃。",
    tags: ["湖南", "湘西", "萝卜干炒腊肉", "嘎嘣脆", "下饭神器", "干香油润"]
  },
  {
    id: "rec_prov_029",
    name: "猪油渣爆炒大蒜手撕包菜",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 3,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "鲜嫩脆甜圆白菜(手撕大片去硬梗)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "现熬香脆猪油渣丁", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "干红朝天椒段", amount: 15, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切厚片", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正熟猪油(猛火爆香)", baseAmount: 25, unit: "g", amountText: "25g", isPantryStaple: true },
      { name: "纯粮酿造香醋", baseAmount: 15, unit: "ml", amountText: "15ml(沿锅边烹入)", isPantryStaple: true },
      { name: "特级生抽与白糖", baseAmount: 15, unit: "ml", amountText: "生抽12ml+白糖3g", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "包菜必须纯手工撕大片沥干", instruction: "圆白菜用手撕成约4-5厘米的不规则大片，坚决去除粗硬白菜梗，清水冲洗后彻底甩干水分。", timerSeconds: 180, chefTip: "铁律：包菜必须手撕而切忌刀切！手撕断面粗糙，能挂住酱汁，水份必须彻底甩干否则变水煮包菜。" },
      { stepIndex: 2, title: "熟猪油下锅爆香猪油渣干红椒", instruction: "铁锅烧至剧烈冒青烟，下熟猪油融化，放入猪油渣丁、大蒜片、干红椒段中火爆炒出浓烈焦香。", timerSeconds: 45, chefTip: "猪油配猪油渣是这道菜脆甜焦香的灵魂支柱。" },
      { stepIndex: 3, title: "倒入包菜大火猛翻颠锅断生", instruction: "迅速倒入甩干水分的包菜片，全程大火以最快速度猛翻爆炒40秒至包菜边缘微现焦黄色断生。", timerSeconds: 40, chefTip: "大火猛炒爆出镬气，包菜受热膨胀保持爽脆。" },
      { stepIndex: 4, title: "沿锅边烹入香醋生抽盐糖出锅", instruction: "沿极烫的锅边淋入香醋激发出浓郁醋香（锅边烹醋），撒生抽、盐、白糖，大火颠锅5次立即出锅。", timerSeconds: 20, chefTip: "锅边烹醋能让醋酸遇高温瞬间挥发留下纯粹果酸香，包菜脆嫩清甜毫无生味。" }
    ],
    tips: "湘菜馆翻台必点的大众神菜。纯手工手撕，猪油渣焦香爽脆，包菜清甜多汁带脆火气，酸辣开胃停不下来。",
    tags: ["湖南", "湘菜", "手撕包菜", "猪油渣", "锅边烹醋", "爽脆清甜"]
  },
  {
    id: "rec_prov_030",
    name: "湖南农家腊八豆炒土鸡蛋",
    region: "湖南",
    cuisineCategory: "中华各省",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 10,
    cookTimeMinutes: 4,
    difficulty: "简单",
    portion: 2,
    ingredients: [
      { name: "湖南特产传统发酵腊八豆", amount: 60, unit: "g", type: "main", isCore: true },
      { name: "新鲜农家散养土鸡蛋", amount: 4, unit: "个", type: "main", isCore: true },
      { name: "青红朝天椒碎", amount: 20, unit: "g", type: "main", isCore: true },
      { name: "新鲜小香葱花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "纯正菜籽油或熟猪油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true },
      { name: "纯粮米酒", baseAmount: 5, unit: "ml", amountText: "5ml", isPantryStaple: true },
      { name: "特级生抽酱油", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "精制食盐", baseAmount: 1, unit: "g", amountText: "1g(腊八豆已有咸鲜)", isPantryStaple: true }
    ],
    steps: [
      { stepIndex: 1, title: "土鸡蛋打散加少许米酒盐调匀", instruction: "鸡蛋打入碗中，加一勺米酒和少许盐充分搅打起大泡沫备用。", timerSeconds: 120, chefTip: "加少许米酒能让炒出来的鸡蛋更加蓬松滑嫩无腥味。" },
      { stepIndex: 2, title: "热油先炒香腊八豆与青红椒碎", instruction: "锅内倒油烧热，先下腊八豆与青红椒碎中小火煸炒1分钟，激发出腊八豆独特的浓郁发酵酱香。", timerSeconds: 60, chefTip: "腊八豆经油煸炒后，发酵的氨基酸鲜味彻底释放。" },
      { stepIndex: 3, title: "淋入蛋液大火翻炒至凝固成大块", instruction: "将搅打好的蛋液均匀淋在炒香的腊八豆上，待底部定型微凝固时，用锅铲由四周向中心轻轻推炒成大块金黄蛋块。", timerSeconds: 60, chefTip: "推炒出蓬松大蛋块，每一口都裹着香浓的腊八豆粒。" },
      { stepIndex: 4, title: "淋少许生抽撒葱花出锅", instruction: "淋几滴生抽提鲜，撒满翠绿葱花翻匀起锅，色泽金黄红绿，酱香扑鼻。", timerSeconds: 20, chefTip: "鸡蛋蓬松金黄，腊八豆浓香软烂，下饭一绝。" }
    ],
    tips: "湖南民间独有的传统酵香神菜。腊八豆经微生物发酵鲜美超越豆豉，炒入嫩滑土鸡蛋中，香气浓醇开胃，老少皆爱。",
    tags: ["湖南", "家常快手", "腊八豆炒蛋", "蓬松金黄", "发酵酵香", "超级下饭"]
  }
];
