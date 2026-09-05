// 潮汕海鲜与膏蟹砂锅粥 (21 - 40)
module.exports = [
  {
    id: 'rec_congee_21',
    name: '潮汕正宗膏蟹鲜虾砂锅粥',
    subtitle: '红膏满溢母膏蟹，基围虾煎出红润虾油，冬菜芹菜普宁豆酱潮香扑鼻',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 295,
    protein: 23.5,
    fat: 7.8,
    carbs: 32.0,
    ratio: '1:12 (珍珠米80g:高汤960ml)',
    tags: ['潮汕砂锅粥', '海鲜极品', '红膏流油', '深夜宵夜'],
    ingredients: [
      { name: '新鲜红膏蟹', amount: 1, unit: '只 (约250g)', type: 'main' },
      { name: '鲜活基围虾', amount: 150, unit: '克 (约8只)', type: 'main' },
      { name: '东北珍珠米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '潮汕地道冬菜', amount: 15, unit: '克', type: 'secondary' },
      { name: '水芹菜末与香菜', amount: 20, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '潮州普宁豆酱', amountText: '1 汤匙 (15g 潮汕灵魂)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '纯正花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '膏蟹斩块基围虾开背煎油',
        instruction: '膏蟹刷净揭盖，去除心肺胃切成4大块，切口沾少许干淀粉锁住红膏；鲜虾剪须去虾线对半剖开（留虾头），锅中下花生油将虾头虾身慢火煸煎出红亮虾油盛出备用。',
        timerSeconds: 300,
        chefTip: '切口沾生粉能防止丰腴的蟹膏在滚沸时散失；煸炒出的红亮虾油是整锅粥金红油亮、鲜香扑鼻的灵魂之源。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火开水煲米粒',
        instruction: '大号潮汕砂锅注入清水烧沸，倒入淘洗好的大米与姜丝，大火保持剧烈沸腾翻滚15分钟，煮至米粒刚爆开花（约七分熟状态）。',
        timerSeconds: 900,
        chefTip: '潮汕砂锅粥讲究“水米交融而米粒仍具米形”，切不可像广府粥那样煮成全烂米糊，七成熟正是下海鲜的最佳时机。'
      },
      {
        stepIndex: 3,
        title: '注入红虾油下蟹块同煲',
        instruction: '将煸好的虾油与膏蟹块倒入砂锅中，大火滚煮3分钟，蟹肉熟透转为诱人的艳红色，蟹膏甘香完全渗透入米汤中。',
        timerSeconds: 200,
        chefTip: '蟹壳坚硬需先下滚煮3分钟，煮至蟹油与虾油完全被米浆乳化，汤汁转为金黄色。'
      },
      {
        stepIndex: 4,
        title: '下开背虾与潮汕冬菜',
        instruction: '倒入开背鲜虾、切碎的潮汕冬菜与1汤匙普宁豆酱，保持大火翻滚沸腾2分钟，虾肉卷曲变红断生。',
        timerSeconds: 120,
        chefTip: '鲜虾肉质娇嫩，下锅2分钟即熟；普宁豆酱发酵咸鲜，与海鲜是绝配，放了豆酱后盐要少放。'
      },
      {
        stepIndex: 5,
        title: '撒水芹菜末胡椒粉离火',
        instruction: '调入少许盐与现磨白胡椒粉，关火前撒入大量切碎的水芹菜粒与香菜末，连砂锅端上桌，砂锅离火后仍持续咕嘟冒泡。',
        timerSeconds: 30,
        chefTip: '水芹菜独特的天然芳香是潮汕砂锅粥的身份印记，既能解海鲜腥腻，又能激发出蟹肉的深层鲜甜。'
      }
    ],
    chefTips: [
      '膏蟹切口蘸少许干淀粉，红膏完整不散。',
      '鲜虾小火煸出红虾油，赋予米粥天然金色光泽。',
      '米粒七分熟即下海鲜，保留潮汕砂锅粥米粒质感。',
      '普宁豆酱与冬菜是提鲜增香的核心潮汕配料。',
      '起锅必撒大量细水芹菜末解腻提香。'
    ],
    proTips: '鲜虾煸出红亮虾油先入粥底，膏蟹蘸粉锁膏后大滚3分钟，佐以普宁豆酱、潮汕冬菜与水芹菜，鲜掉眉毛。',
    nutritionHighlights: '富含优质海洋蛋白质、甲壳素、虾青素及多种微量元素，滋阳补虚、元气充沛。'
  },
  {
    id: 'rec_congee_22',
    name: '潮汕瑶柱干贝基围虾砂锅粥',
    subtitle: '黄金瑶柱丝鲜甜醇厚，鲜活对虾开背起胶，米糯汤甘金牌搭配',
    region: '广东潮汕',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '简单',
    servings: 2,
    calories: 260,
    protein: 21.0,
    fat: 5.5,
    carbs: 31.5,
    ratio: '1:11 (米80g:水880ml)',
    tags: ['潮汕风味', '瑶柱浓香', '虾肉弹牙', '四季皆宜'],
    ingredients: [
      { name: '鲜活基围虾', amount: 180, unit: '克', type: 'main' },
      { name: '优质淡干瑶柱/干贝', amount: 20, unit: '克', type: 'main' },
      { name: '东北珍珠米', amount: 80, unit: '克', type: 'main' },
      { name: '生姜切细丝', amount: 12, unit: '克', type: 'secondary' },
      { name: '潮汕冬菜末', amount: 10, unit: '克', type: 'secondary' },
      { name: '鲜水芹菜碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '花生油', amountText: '1 汤匙 (12ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '普宁豆酱', amountText: '半汤匙 (8g)', baseAmount: 0.5, unit: '汤匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '瑶柱温水泡发手撕细丝',
        instruction: '优质淡干瑶柱洗去表面盐霜，加温水泡发20分钟，用手顺着肌理撕成细发丝状，泡瑶柱的水留用。',
        timerSeconds: 600,
        chefTip: '干贝必须撕成细丝，细丝表面积大能将谷氨酸钠鲜味源源不断融入米浆中，且每一口都有干贝香。'
      },
      {
        stepIndex: 2,
        title: '鲜虾开背煸炒红润虾油',
        instruction: '鲜虾去虾线，背部剖开深至2/3；锅中放油小火将虾头与虾壳煸出红亮香浓的虾油备用。',
        timerSeconds: 240,
        chefTip: '虾背剖深不仅入味快，熟透后受热会翻卷成漂亮的虾球，脆爽可口。'
      },
      {
        stepIndex: 3,
        title: '瑶柱丝与大米砂锅同煲',
        instruction: '砂锅水沸，倒入浸泡瑶柱的原汁、撕好的干贝丝与洗净大米，大火滚沸15分钟熬煮至米粒开花呈稠粥状。',
        timerSeconds: 900,
        chefTip: '瑶柱耐煮，先下锅同米慢煲15分钟，咸鲜底味完全进入米粒芯中。'
      },
      {
        stepIndex: 4,
        title: '注入虾油下鲜虾生滚',
        instruction: '大火沸滚状态下，倒入红亮虾油与开背虾，加入潮汕冬菜与半勺豆酱，翻滚滚煮2分钟至虾肉完全变红熟透。',
        timerSeconds: 120,
        chefTip: '大火生滚2分钟虾肉刚好断生，肉质脆嫩鲜甜，千万不可久煮过火。'
      },
      {
        stepIndex: 5,
        title: '撒水芹白胡椒出锅',
        instruction: '调入少许盐和白胡椒粉，撒入切碎的水芹菜末与香葱粒，离火焖1分钟即可开动。',
        timerSeconds: 30,
        chefTip: '白胡椒与水芹末能激发出干贝与鲜虾的双重鲜甜，回味无穷。'
      }
    ],
    chefTips: [
      '瑶柱温水泡发彻底撕成极细发丝状。',
      '泡干贝的头道清汤直接倒入砂锅同煲。',
      '鲜虾开背2/3，熟后翻卷成饱满虾球。',
      '虾肉滚煮2分钟断生即停，肉脆不老。'
    ],
    proTips: '瑶柱手撕细丝与大米同煲煮出醇厚底鲜，鲜虾开背煸出红虾油生滚2分钟断生，双鲜交汇、咸鲜顺滑。',
    nutritionHighlights: '干贝与鲜虾富含高蛋白质、牛磺酸与锌元素，易消化好吸收，是极好的体能复原养生膳。'
  },
  {
    id: 'rec_congee_23',
    name: '沿海肥美生蚝白贝海鲜砂锅粥',
    subtitle: '乳山大生蚝肥如白玉，鲜白贝爆开口涌出清甜汁水，海之清鲜',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '中等',
    servings: 2,
    calories: 240,
    protein: 20.0,
    fat: 5.2,
    carbs: 28.0,
    ratio: '1:11 (米80g:水880ml)',
    tags: ['海洋鲜甜', '生蚝肥嫩', '白贝开口', '补锌极品'],
    ingredients: [
      { name: '新鲜肥嫩生蚝肉', amount: 150, unit: '克 (约6-8只)', type: 'main' },
      { name: '鲜活白贝/沙白', amount: 200, unit: '克', type: 'main' },
      { name: '东北珍珠米', amount: 80, unit: '克', type: 'main' },
      { name: '老姜切细丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '鲜嫩水芹菜粒', amount: 15, unit: '克', type: 'secondary' },
      { name: '细香葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '生粉 (抓洗生蚝)', amountText: '1 汤匙 (15g)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '生粉抓洗生蚝净黏液',
        instruction: '新鲜生蚝肉加1汤匙干淀粉轻轻抓拌1分钟，吸附黏液与细碎残壳，用细流水冲洗干净捞出沥干。',
        timerSeconds: 180,
        chefTip: '生粉抓洗是洗净生蚝而不破坏其肥美蚝肚的最好方法，洗净后蚝肉晶莹剔透无泥沙无腥气。'
      },
      {
        stepIndex: 2,
        title: '白贝盐水吐沙清洗',
        instruction: '白贝刷净外壳，用淡盐水浸泡让其吐净泥沙，冲净沥干备用。',
        timerSeconds: 120,
        chefTip: '新鲜白贝本身带有极高天然海盐与清甜贝汁，下锅煮开后汁水融入粥中极为鲜美。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬煮米花白粥',
        instruction: '砂锅加水大火煮沸，下入洗净珍珠米与姜丝，大火保持翻滚沸腾18分钟至米粒完全爆开花。',
        timerSeconds: 1080,
        chefTip: '贝类生蚝下锅后会吐出水分，粥底需要熬得相对浓稠，中和水分后浓淡恰好。'
      },
      {
        stepIndex: 4,
        title: '先下白贝煮至尽数开口',
        instruction: '调大火让粥剧烈沸腾，倒入沥干的白贝，大火煮约2分钟，见白贝一个个张开外壳、吐出清甜原汁。',
        timerSeconds: 120,
        chefTip: '白贝一开口说明肉已熟透，贝汁融入米浆，切勿久煮否则贝肉收缩脱水变韧。'
      },
      {
        stepIndex: 5,
        title: '下生蚝大火生滚1分钟关火',
        instruction: '白贝开口后立即倒入洗净的生蚝肉，用勺轻推翻滚，大火生滚1分钟见蚝肚鼓起圆润即刻熄火，调入盐、白胡椒、水芹粒与香油。',
        timerSeconds: 60,
        chefTip: '生蚝严格滚煮不超过1分钟，断生圆润饱满，咬开满嘴鲜甜爆汁，久煮会缩水变小成干瘪硬块。'
      }
    ],
    chefTips: [
      '用生粉轻柔抓拌生蚝洗净泥沙与粘液。',
      '白贝开口即可，鲜甜贝汁瞬间融入粥汤。',
      '生蚝下锅生滚严格控制在1分钟以内。',
      '生蚝蚝肚鼓起即关火，肥嫩爆汁无腥气。'
    ],
    proTips: '生粉抓洗净生蚝，白贝先入锅煮至刚刚开口释放贝汁，下生蚝大火生滚60秒蚝肚鼓起即刻关火，原汁原味肥嫩多汁。',
    nutritionHighlights: '生蚝是天然含锌之冠，搭配白贝的高蛋白低脂肪，强健体魄、滋阴补血、增强机体免疫力。'
  },
  {
    id: 'rec_congee_24',
    name: '鲜活黄鳝生姜丝保温砂锅粥',
    subtitle: '肥美秋黄鳝去骨划丝，老生姜浓烈辟腥，鳝肉弹牙鲜美温肾益气',
    region: '广东顺德/潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '高阶精烹',
    servings: 2,
    calories: 270,
    protein: 22.0,
    fat: 6.5,
    carbs: 29.5,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['顺德名吃', '温肾补虚', '鳝肉弹嫩', '秋冬温补'],
    ingredients: [
      { name: '活杀鲜黄鳝肉', amount: 160, unit: '克', type: 'main' },
      { name: '优质丝苗米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜 (切大量粗丝)', amount: 20, unit: '克', type: 'secondary' },
      { name: '鲜嫩小葱花', amount: 15, unit: '克', type: 'secondary' },
      { name: '炒香熟白芝麻', amount: 5, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东双蒸米酒', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (5g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (4g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯压榨花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '黄鳝沸水微烫抹去涎水',
        instruction: '活杀黄鳝剔骨取肉，放入盆中淋入80℃热水微烫5秒捞出，用布轻轻抹去表面白色黏液（滑涎），斜刀切成3cm鳝鱼段。',
        timerSeconds: 180,
        chefTip: '黄鳝表面滑涎土腥重，热水微烫即可轻易擦去白膜，是黄鳝鲜而不腥的核心技法。'
      },
      {
        stepIndex: 2,
        title: '米酒生姜生抽浆腌上味',
        instruction: '黄鳝段加双蒸米酒、生抽、姜丝、白胡椒粉、淀粉抓拌均匀，最后淋入半汤匙花生油锁住肉汁。',
        timerSeconds: 300,
        chefTip: '黄鳝肉质坚韧，先用花生油与米酒腌制，下锅不易散、肉嫩弹牙。'
      },
      {
        stepIndex: 3,
        title: '砂锅明火煲浓白大米粥',
        instruction: '砂锅水滚后倒入淘洗好的大米，大火保持翻滚沸腾18分钟，煮成米汤粘稠如脂的白粥底。',
        timerSeconds: 1080,
        chefTip: '黄鳝味道浓烈，粥底米油越厚，越能包裹住黄鳝的甘香。'
      },
      {
        stepIndex: 4,
        title: '大火生滚黄鳝段2分钟',
        instruction: '砂锅大火剧烈翻滚，下入腌好的黄鳝段与大量姜丝，用长筷快速划散，中大火滚煮2分钟至黄鳝肉变白蜷曲断生。',
        timerSeconds: 150,
        chefTip: '黄鳝肉比普通鱼肉稍厚实，需保持沸滚2分钟才能确保骨软肉熟、寄生虫彻底灭活。'
      },
      {
        stepIndex: 5,
        title: '调味撒胡椒香葱出锅',
        instruction: '调入食用盐与大量白胡椒粉，撒入香葱碎与炒香白芝麻，加盖关火焖半分钟即可起锅。',
        timerSeconds: 30,
        chefTip: '老姜丝与白胡椒粉是黄鳝粥的双壁，辛香祛寒，整碗粥温阳力量十足。'
      }
    ],
    chefTips: [
      '80度热水微烫5秒抹净黄鳝表皮白黏膜。',
      '大量老生姜丝米酒腌制彻底去泥土腥。',
      '大火保持滚沸2分钟确保肉熟弹韧。',
      '白胡椒粉加足量，辛香温胃驱寒气。'
    ],
    proTips: '热水烫除表面白黏膜去土腥，加米酒姜丝腌透，砂锅大滚煮2分钟断生蜷曲，肉质紧致弹韧、温肾通络。',
    nutritionHighlights: '黄鳝含丰富特种“黄鳝素”、DHA、卵磷脂与高质量动物蛋白，温中益气、祛湿强筋骨。'
  },
  {
    id: 'rec_congee_25',
    name: '鲜活鲍鱼鲜虾海皇滋补砂锅粥',
    subtitle: '六头大连鲜鲍改十字花刀，鲜虾虾油双融，海中极品至尊享受',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 280,
    protein: 24.0,
    fat: 6.0,
    carbs: 30.0,
    ratio: '1:11 (米80g:水880ml)',
    tags: ['海皇砂锅粥', '鲍鱼弹牙', '尊贵宴客', '滋阴养颜'],
    ingredients: [
      { name: '鲜活六头大鲍鱼', amount: 3, unit: '只', type: 'main' },
      { name: '鲜活对虾/基围虾', amount: 150, unit: '克', type: 'main' },
      { name: '东北珍珠米', amount: 80, unit: '克', type: 'main' },
      { name: '生姜切细丝', amount: 12, unit: '克', type: 'secondary' },
      { name: '潮汕冬菜与水芹粒', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '料酒', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鲍鱼刷净改深十字花刀',
        instruction: '鲜鲍鱼用软毛刷刷净四周黑膜与泥污，去内脏及嘴部硬齿，在肉面切密集的十字花刀（深度为2/3），加少许料酒姜丝抓匀。',
        timerSeconds: 300,
        chefTip: '切深花刀能让紧实的鲍鱼肉极速受热熟透，受热后如花苞绽放，外脆内嫩绝无皮筋感。'
      },
      {
        stepIndex: 2,
        title: '鲜虾开背煸出红润虾油',
        instruction: '鲜虾剪须去线开背，取少许花生油将虾头煸出金红浓香虾油备用。',
        timerSeconds: 180,
        chefTip: '虾油为整锅粥打上诱人金红底色，虾油与鲍鱼的浓郁鲜味相得益彰。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬好珍珠米粥',
        instruction: '砂锅水滚下大米，大火滚沸18分钟至米花爆开、汤色白浓稠润。',
        timerSeconds: 1080,
        chefTip: '米粒八分熟即可准备下高档海鲜，保持中火滚沸。'
      },
      {
        stepIndex: 4,
        title: '下入花刀鲍鱼与鲜虾生滚',
        instruction: '砂锅大火鼎沸，倒入红虾油，下入花刀鲍鱼与开背鲜虾，中大火保持滚沸2分半钟，鲍鱼花刀舒展卷起、虾肉变红断生。',
        timerSeconds: 150,
        chefTip: '鲍鱼下锅切忌长时间焖煮，2分半钟断生最脆嫩，久煮肉质紧缩如橡皮。'
      },
      {
        stepIndex: 5,
        title: '下冬菜水芹调味出锅',
        instruction: '放入潮汕冬菜末，调入盐、白胡椒粉、香油，撒水芹菜粒与香葱，关火焖半分钟即可享受海皇尊品。',
        timerSeconds: 30,
        chefTip: '水芹与白胡椒提鲜解腻，整锅鲍鱼鲜甜不凡。'
      }
    ],
    chefTips: [
      '用牙刷仔细刷净鲍鱼边缘黑色素。',
      '表面切深十字花刀，受热卷起脆嫩化渣。',
      '鲜虾煸出虾油提色增香。',
      '鲍鱼生滚2分半钟断生即关火，绝不煮老。'
    ],
    proTips: '鲍鱼彻底洗刷黑膜改密集深花刀，生滚2分半钟花刀绽开即熟，肉质弹脆鲜美，搭配鲜虾与红虾油，金红富贵。',
    nutritionHighlights: '鲍鱼含丰富鲍灵素、二十种氨基酸与胶原蛋白，滋阴清热、补肝明目，是极为名贵的温补珍品。'
  },
  {
    id: 'rec_congee_26',
    name: '鲜带子瑶柱鲜鱿双拼砂锅粥',
    subtitle: '大颗鲜甜带子柱，金黄瑶柱丝与现切鱿鱼圈，三鲜会聚脆弹爆汁',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 250,
    protein: 23.0,
    fat: 5.0,
    carbs: 29.0,
    ratio: '1:11 (米80g:水880ml)',
    tags: ['潮汕风味', '带子鲜甜', '鱿鱼脆弹', '海鲜双拼'],
    ingredients: [
      { name: '鲜甜海带子肉/鲜贝柱', amount: 100, unit: '克', type: 'main' },
      { name: '新鲜鱿鱼筒 (切鱿鱼圈)', amount: 120, unit: '克', type: 'main' },
      { name: '优质瑶柱干贝丝', amount: 15, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '鲜老生姜丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '香芹菜末与细葱花', amount: 20, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '花生油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '潮汕冬菜', amountText: '10克', baseAmount: 10, unit: '克', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鲜带子横切厚片鱿鱼切圈',
        instruction: '鲜带子吸干水分，横切成两半厚片；鲜鱿鱼撕去外皮紫膜切成约1cm宽的鱿鱼圈，加米酒与姜丝轻抓腌制5分钟。',
        timerSeconds: 240,
        chefTip: '鱿鱼撕去外皮能消除韧皮口感与腥气，切圈受热会缩成白嫩小圆圈，爽脆无比。'
      },
      {
        stepIndex: 2,
        title: '砂锅水滚下米与瑶柱丝',
        instruction: '砂锅注水大沸，下入淘净大米与手撕瑶柱丝，大火保持剧烈沸腾18分钟，熬煮出瑶柱鲜香底味浓郁的白粥。',
        timerSeconds: 1080,
        chefTip: '瑶柱丝奠定厚重的海鲜底味，为后下的鲜带子和鱿鱼圈提供深厚风味支撑。'
      },
      {
        stepIndex: 3,
        title: '大火沸腾下滑入鱿鱼圈',
        instruction: '砂锅大火剧烈翻滚，先下入鱿鱼圈与姜丝，煮约1分钟见鱿鱼变白卷挺。',
        timerSeconds: 60,
        chefTip: '鱿鱼稍耐煮一点，先下锅滚1分钟释放鲜味。'
      },
      {
        stepIndex: 4,
        title: '投入鲜带子厚片生滚1分钟',
        instruction: '倒入鲜带子厚片与潮汕冬菜，用勺子推匀，大火沸滚1分钟，带子肉呈乳白色、断生半透明即刻关火。',
        timerSeconds: 60,
        chefTip: '带子极其娇嫩，大火生滚1分钟关火，利用砂锅保温余热烫透，入口软嫩化汁。'
      },
      {
        stepIndex: 5,
        title: '撒香芹与胡椒起锅',
        instruction: '调入盐与白胡椒粉，撒入切碎的香芹粒与葱花，淋几滴熟花生油即可起锅盛碗。',
        timerSeconds: 30,
        chefTip: '香芹粒与白胡椒是压制海产腥气、提升甘甜的黄金搭档。'
      }
    ],
    chefTips: [
      '鱿鱼撕去外层紫皮切均匀圈段。',
      '带子肉横向片厚片，滚煮1分钟即熟。',
      '瑶柱丝先煮出醇厚鲜味底汤。',
      '香芹粒关火前撒入保持爽脆清香。'
    ],
    proTips: '撕去鱿鱼紫皮切圈，鲜带子横切厚片，大火生滚仅需1分钟断生关火，带子鲜甜化汁、鱿鱼脆爽弹牙。',
    nutritionHighlights: '带子与鱿鱼富含牛磺酸、高质量蛋白质与微量元素硒，降胆固醇、缓解疲劳。'
  },
  {
    id: 'rec_congee_27',
    name: '海参鲜虾深海砂锅御品稠粥',
    subtitle: '温润辽参切段软糯弹滑，鲜虾提鲜红亮虾油，滋阴补气顶级食补',
    region: '广东潮汕/山东',
    cookingMethod: '砂锅慢煨',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 275,
    protein: 22.5,
    fat: 5.5,
    carbs: 31.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['宫廷御品', '辽参软糯', '高蛋白零胆固醇', '温阳补虚'],
    ingredients: [
      { name: '纯净泡发优质海参/辽参', amount: 2, unit: '只 (约150g)', type: 'main' },
      { name: '鲜活基围虾', amount: 120, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '鲜老姜丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '嫩香葱段与葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯正花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '发制海参切滚刀厚段',
        instruction: '取完全泡发透彻的优质辽参，洗净内壁筋膜与沙嘴，斜刀切成约1.5cm厚的饱满参段。',
        timerSeconds: 180,
        chefTip: '海参切厚段在滚粥中受热不易融化，咀嚼时口感Q弹软糯，胶质丰厚。'
      },
      {
        stepIndex: 2,
        title: '鲜虾剥壳煸出红亮虾油',
        instruction: '基围虾去头壳留虾仁开背，取虾头用少许花生油小火慢煸出金红浓香虾油，滤出虾头留虾油备用。',
        timerSeconds: 180,
        chefTip: '海参本身味淡无脂，借助鲜虾油的油润与浓烈虾香，能将海参的鲜度彻底激发出来。'
      },
      {
        stepIndex: 3,
        title: '砂锅慢煲出浓滑白粥',
        instruction: '砂锅沸水倒入大米与姜丝，中火熬煮18分钟至米粒碎化开花、汤汁浓稠挂勺。',
        timerSeconds: 1080,
        chefTip: '粥底必须煮得稠滑细腻，米脂包裹海参更加甘润。'
      },
      {
        stepIndex: 4,
        title: '海参鲜虾红虾油同煨3分钟',
        instruction: '大火使粥沸腾，倒入红虾油、海参段与开背虾仁，推匀后中火煨煮3分钟，让海参完全吸收虾味与米香。',
        timerSeconds: 180,
        chefTip: '海参本已熟透，下锅煨煮3分钟让其吸收鲜咸汤汁并变得更加软糯即可，不可长时间大滚以防化水。'
      },
      {
        stepIndex: 5,
        title: '调盐胡椒香葱装碗',
        instruction: '调入生抽、盐与现磨白胡椒粉，撒入葱花滴香油，加盖离火焖1分钟即可盛碗温食。',
        timerSeconds: 30,
        chefTip: '白胡椒温中散寒，衬托出海参的极致软滑。'
      }
    ],
    chefTips: [
      '泡透海参切1.5cm饱满厚段保留胶质嚼劲。',
      '鲜虾头煸出红亮虾油为海参增脂赋香。',
      '海参煨煮3分钟软糯即可，避免煮过化水。',
      '白胡椒与生姜丝调和寒性温中健脾。'
    ],
    proTips: '海参切厚段配以现炼鲜红虾油同煨3分钟，海参吸透鲜浓米浆软滑弹牙，虾仁脆甜多汁，滋阴补肾、贵气十足。',
    nutritionHighlights: '海参富含刺参酸性粘多糖、海参皂苷与硫酸软骨素，低脂肪零胆固醇，抗疲劳、增强体质、延缓衰老。'
  },
  {
    id: 'rec_congee_28',
    name: '鲜活花蛤冬菜生滚清甜砂锅粥',
    subtitle: '肥美花蛤吐沙干净，爆开吐出纯海甜鲜汁，冬菜提味咸香清爽',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 215,
    protein: 17.5,
    fat: 4.2,
    carbs: 27.0,
    ratio: '1:11 (米80g:水880ml)',
    tags: ['平价海鲜', '清甜鲜美', '花蛤开口', '快手宵夜'],
    ingredients: [
      { name: '新鲜花蛤/花蚬', amount: 300, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '潮汕地道冬菜', amount: 15, unit: '克', type: 'secondary' },
      { name: '老生姜细丝', amount: 12, unit: '克', type: 'secondary' },
      { name: '鲜水芹菜末', amount: 15, unit: '克', type: 'secondary' },
      { name: '香葱粒', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '食用精盐 (吐沙用)', amountText: '1 汤匙 (15g)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '料酒', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '温盐水静置花蛤吐沙',
        instruction: '新鲜花蛤放温淡盐水中，滴两滴食用油，静置吐沙1小时，双手搓洗外壳洗净泥沙沥干。',
        timerSeconds: 300,
        chefTip: '盐水模拟海水浓度加几滴油隔绝空气，花蛤会大口吐水排沙，确保吃粥时绝无碜牙沙粒。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火熬煮大米粥底',
        instruction: '砂锅加水烧沸下大米，大火翻滚熬制18分钟至米花大开、米汤白稠。',
        timerSeconds: 1080,
        chefTip: '花蛤本身水气多，熬粥底时水量稍减，留出容纳花蛤鲜汁的空间。'
      },
      {
        stepIndex: 3,
        title: '大火沸粥下花蛤与冬菜',
        instruction: '大火使白粥剧烈沸腾翻浪，倒入洗净的花蛤、姜丝与潮汕冬菜末，大火滚煮1分半钟至花蛤张壳。',
        timerSeconds: 100,
        chefTip: '大火沸腾能让花蛤在高温下迅速受热壳肉分离并张开口，壳一张开清甜的汁水即刻融入粥中。'
      },
      {
        stepIndex: 4,
        title: '见贝壳尽数张开即关火',
        instruction: '看到锅中花蛤全部张口，肉质饱满断生，立即关火，切勿多煮哪怕半分钟。',
        timerSeconds: 30,
        chefTip: '贝肉极易脱水缩小，张开即熟，关火利用余热完全足够。'
      },
      {
        stepIndex: 5,
        title: '撒水芹胡椒滴香油起锅',
        instruction: '撒入切细的水芹末、香葱粒与白胡椒粉，淋入几滴香油，香气喷薄而出。',
        timerSeconds: 20,
        chefTip: '冬菜自带咸鲜，汤底通常无需再加多余食盐，尝味即可。'
      }
    ],
    chefTips: [
      '温淡盐水加几滴油促使花蛤充分吐尽泥沙。',
      '大火鼎沸下花蛤，1分半钟全部开口立即离火。',
      '冬菜咸香浓郁，无需额外加多盐。',
      '水芹菜末与白胡椒粉是绝妙提鲜去腥拍档。'
    ],
    proTips: '彻底吐净泥沙的花蛤入大滚白粥1分半钟张开即关火，冬菜激发天然海盐风味，清甜无比、极速出锅。',
    nutritionHighlights: '花蛤富含丰富微量元素锌、铁、硒与牛磺酸，低脂清淡、利水消肿，是老少皆宜的健康平价美馔。'
  },
  {
    id: 'rec_congee_29',
    name: '深海墨鱼须鲜虾脆爽砂锅粥',
    subtitle: '墨鱼须切段脆如白笋，鲜虾仁肉紧弹牙，鲜香脆韧双重嚼劲',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 245,
    protein: 21.0,
    fat: 5.0,
    carbs: 28.5,
    ratio: '1:11 (米80g:水880ml)',
    tags: ['脆爽弹牙', '墨鱼须鲜', '基围虾甜', '风味小海鲜'],
    ingredients: [
      { name: '新鲜深海墨鱼须/乌贼触须', amount: 150, unit: '克', type: 'main' },
      { name: '鲜基围虾', amount: 120, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '潮汕冬菜末', amount: 10, unit: '克', type: 'secondary' },
      { name: '水芹粒与香葱', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '花生油', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '墨鱼须洗净吸盘切段',
        instruction: '墨鱼须在加少许盐的面粉水中用力揉搓洗去吸盘中的泥沙硬壳，冲净后切成约3cm的小段，吸干水分加米酒姜丝抓匀。',
        timerSeconds: 240,
        chefTip: '墨鱼须吸盘内极易残留沙粒，用面粉水搓洗吸附力极强，洗得干干净净、入口绝不碜牙。'
      },
      {
        stepIndex: 2,
        title: '鲜虾开背煸出红润虾油',
        instruction: '鲜虾去须挑虾线开背，锅中少许花生油小火把虾头虾壳煸出红亮虾油。',
        timerSeconds: 180,
        chefTip: '红虾油是提香增色的秘密，让墨鱼须更加油润光亮。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬好大米稠粥',
        instruction: '砂锅水滚下大米，大火煲沸18分钟熬成米花绽开、浓稠喷香的白粥底。',
        timerSeconds: 1080,
        chefTip: '米粒在砂锅中充分碰撞糊化，熬出醇厚白米浆。'
      },
      {
        stepIndex: 4,
        title: '下墨鱼须与鲜虾生滚2分钟',
        instruction: '大火鼎沸翻滚，倒入红虾油，下入墨鱼须段、开背鲜虾与冬菜，保持中大火沸腾2分钟至墨鱼须紧缩蜷曲、鲜虾变红卷曲。',
        timerSeconds: 120,
        chefTip: '墨鱼须大火滚2分钟受热卷曲断生，口感最为爽脆弹牙，久煮则硬如橡皮筋。'
      },
      {
        stepIndex: 5,
        title: '撒水芹胡椒出锅上桌',
        instruction: '调入少许盐与现磨白胡椒粉，撒入水芹菜末与细葱花，关火离灶，趁滚烫温食。',
        timerSeconds: 30,
        chefTip: '墨鱼须咯吱脆弹，鲜虾多汁，双重嚼感令人欲罢不能。'
      }
    ],
    chefTips: [
      '面粉盐水揉搓墨鱼须彻底洗净吸盘泥沙。',
      '墨鱼须切3cm短段，滚熟紧缩刚好一口一个。',
      '大火生滚2分钟断生蜷曲，口感脆如鲜笋。',
      '撒水芹菜粒与白胡椒粉祛除海洋生冷。'
    ],
    proTips: '面粉水洗净墨鱼须吸盘泥沙，鲜虾开背炒出红虾油，大火生滚2分钟蜷曲断生，爽脆脆嫩弹牙、鲜汁横溢。',
    nutritionHighlights: '墨鱼须与基围虾富含蛋白质、多不饱和脂肪酸与磷钙微量元素，低热量高营养，是健康的解馋靓粥。'
  },
  {
    id: 'rec_congee_30',
    name: '潮汕九肚鱼生滚入口即化砂锅粥',
    subtitle: '潮汕特产豆腐鱼，身软如脂无硬刺，热滚直烫入口如豆花般化开',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 12,
    cookTimeMinutes: 25,
    difficulty: '中等',
    servings: 2,
    calories: 205,
    protein: 16.0,
    fat: 4.5,
    carbs: 26.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['潮汕特色', '入口即化', '九肚鱼/豆腐鱼', '鲜嫩极致'],
    ingredients: [
      { name: '新鲜九肚鱼/龙头鱼/豆腐鱼', amount: 200, unit: '克', type: 'main' },
      { name: '东北大米', amount: 70, unit: '克', type: 'main' },
      { name: '生姜极细丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '潮汕冬菜粒', amount: 10, unit: '克', type: 'secondary' },
      { name: '鲜嫩葱花与香菜末', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级花生油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '优质白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '九肚鱼去头内脏切厚段',
        instruction: '鲜九肚鱼剪去头部和内脏，轻轻洗净，切成约4cm的厚段，加少许米酒、姜丝与花生油极轻柔地拌匀。',
        timerSeconds: 180,
        chefTip: '九肚鱼肉质极娇嫩如豆腐脑，中间只有一根软软的软骨，切勿用力挤压或翻拌，切厚段不易碎化。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火煲煮稠白粥底',
        instruction: '砂锅水滚下大米，大火沸煮18分钟熬成米花全开、汤如白玉的稠滑白粥。',
        timerSeconds: 1080,
        chefTip: '九肚鱼含水量高，下锅后会释放水分，粥底必须比平时熬得更稠。'
      },
      {
        stepIndex: 3,
        title: '大滚沸粥轻推下鱼段',
        instruction: '砂锅大火剧烈翻滚，下入大量姜丝与冬菜，将九肚鱼段轻轻顺锅边滑入粥中，用勺背贴锅底轻轻推散，严禁拿勺猛搅。',
        timerSeconds: 40,
        chefTip: '九肚鱼下锅严禁用勺子大力搅动，否则整块鱼肉会被打散溶化进粥里，只能用勺背轻推防粘底。'
      },
      {
        stepIndex: 4,
        title: '大火生滚1分半钟鱼肉变白即熄火',
        instruction: '保持大火沸滚1分半钟，看鱼肉由半透明转为纯白凝脂，立即关火离灶。',
        timerSeconds: 90,
        chefTip: '滚煮时间切忌超过2分钟，鱼肉受热刚刚凝固时口感最妙，入口不用嚼便如温热豆花般融化在舌尖。'
      },
      {
        stepIndex: 5,
        title: '撒白胡椒葱花起锅',
        instruction: '调入食用盐与足量白胡椒粉，撒入葱花香菜，趁热舀食。',
        timerSeconds: 20,
        chefTip: '中间软骨温软无刺可直接吞咽，白胡椒提味去腥，鲜嫩绝顶。'
      }
    ],
    chefTips: [
      '九肚鱼肉质极其娇嫩切4cm厚段。',
      '用勺背轻推下锅，绝对不可猛烈搅拌。',
      '大火生滚90秒鱼身变白断生立即关火。',
      '骨软无刺入口即化，老人幼童极易享用。'
    ],
    proTips: '潮汕特色九肚鱼切厚段轻柔下锅，用勺背轻推防粘，大火生滚90秒通体变白即熄火，入口如豆花般顺喉滑化。',
    nutritionHighlights: '九肚鱼含水率高热量极低，富含软骨素、多不饱和脂肪酸与优质蛋白，生津润燥、滑肠通便。'
  },
  {
    id: 'rec_congee_31',
    name: '沿海海虾皮白菜心生滚海味粥',
    subtitle: '淡干金钩海虾皮油煎透亮，黄芽白菜心清甜多汁，素中藏鲜暖胃晨饮',
    region: '华南沿海',
    cookingMethod: '生滚',
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 190,
    protein: 12.0,
    fat: 3.8,
    carbs: 27.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['沿海家常', '快手开胃', '白菜清甜', '平价补钙'],
    ingredients: [
      { name: '优质淡干海虾皮/金钩虾皮', amount: 30, unit: '克', type: 'main' },
      { name: '嫩黄芽白菜心 (切小段)', amount: 120, unit: '克', type: 'main' },
      { name: '东北大米', amount: 70, unit: '克', type: 'main' },
      { name: '生姜丝', amount: 8, unit: '克', type: 'secondary' },
      { name: '细香葱花', amount: 10, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '芝麻纯香油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯花生油 (煎虾皮用)', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '虾皮小火油煸金黄焦香',
        instruction: '小锅放半勺花生油，下入洗净沥干的淡干海虾皮与姜丝，小火慢慢煸炒至虾皮微黄酥脆、释放浓烈虾鲜味备用。',
        timerSeconds: 180,
        chefTip: '虾皮千万不要直接水煮，先用少许油煸出金黄焦香，能把虾皮中的三甲胺腥味挥发干净，留下纯正虾油鲜香。'
      },
      {
        stepIndex: 2,
        title: '白菜心切细段冰水拔脆',
        instruction: '选用嫩黄芽白菜心，菜梗与菜叶切成约1.5cm的小细段备用。',
        timerSeconds: 120,
        chefTip: '白菜心脆甜多汁，煮透后甘甜完全融进汤水，中和虾皮的干香味。'
      },
      {
        stepIndex: 3,
        title: '砂锅熬煮大米出米浆',
        instruction: '砂锅水滚下大米，大火保持翻滚18分钟，煮至米花全部爆裂、汤汁稠白。',
        timerSeconds: 1080,
        chefTip: '米汤煮稠才能将煸好的虾皮油脂充分乳化。'
      },
      {
        stepIndex: 4,
        title: '倒入焦香虾皮白菜心同滚',
        instruction: '大火沸粥中倒入煸香的虾皮（带底油）与白菜心段，大火滚煮2分钟，白菜梗变透明软熟。',
        timerSeconds: 120,
        chefTip: '白菜煮至半透明刚刚变软时鲜甜度最高，汤色瞬间转为微黄鲜亮。'
      },
      {
        stepIndex: 5,
        title: '调盐胡椒香油出锅',
        instruction: '尝一下咸淡补少许盐，撒入现磨白胡椒粉、葱花并淋芝麻香油，温润起锅。',
        timerSeconds: 20,
        chefTip: '虾皮带天然微咸，加盐要谨慎克制。'
      }
    ],
    chefTips: [
      '优质淡干虾皮先小火油煸至金黄焦脆。',
      '选脆嫩黄芽白菜心切细段。',
      '虾皮带底油入粥大火滚沸乳化汤色。',
      '白菜心滚煮2分钟透明即食清甜润喉。'
    ],
    proTips: '海虾皮用花生油小火慢煸出金黄酥脆焦香再入滚粥，搭配清甜黄芽白菜心滚煮2分钟，汤清味浓、补钙健胃。',
    nutritionHighlights: '虾皮是天然高钙宝库，搭配白菜心的粗纤维与维生素C，助消化、促排便、老少咸宜。'
  },
  {
    id: 'rec_congee_32',
    name: '鲜甜海鲈鱼片砂锅生滚白汤粥',
    subtitle: '海鲈鱼肉洁白如蒜瓣无肌间刺，生姜去腥生滚鲜甜，醇厚润肺',
    region: '广东沿海',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '中等',
    servings: 2,
    calories: 225,
    protein: 20.0,
    fat: 5.0,
    carbs: 25.5,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['海鲈鲜嫩', '无肌间刺', '清甜补血', '病后初愈'],
    ingredients: [
      { name: '新鲜海鲈鱼柳片', amount: 150, unit: '克', type: 'main' },
      { name: '优质丝苗香米', amount: 70, unit: '克', type: 'main' },
      { name: '生姜细丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '嫩香葱段与葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '纯正花生油', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '海鲈鱼柳斜切薄片',
        instruction: '选用鲜活海鲈鱼中段纯鱼柳，剔除鱼皮与白膜，斜刀45度片成2毫米厚的薄片，吸干表面水分。',
        timerSeconds: 300,
        chefTip: '海鲈鱼肉质紧密呈蒜瓣状且完全无乱刺，斜切薄片受热后洁白卷曲，鲜脆兼备。'
      },
      {
        stepIndex: 2,
        title: '薄浆锁水花生油封油',
        instruction: '鱼片加米酒、少许白胡椒粉、盐和薄薄一层淀粉抓匀上浆，最后淋入半汤匙花生油封住肉汁静置5分钟。',
        timerSeconds: 300,
        chefTip: '花生油封油能让鱼片下锅快速滑散，淀粉糊化保护水分绝不流失。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬好浓滑粥底',
        instruction: '砂锅水滚下大米，大火保持剧烈沸腾翻滚18分钟，煮至米花大开、米浆顺滑挂勺。',
        timerSeconds: 1080,
        chefTip: '生滚海鲈鱼对粥底温度要求极高，必须砂锅鼎沸状态下入。'
      },
      {
        stepIndex: 4,
        title: '大火生滚鱼片30秒关火',
        instruction: '砂锅大火翻浪，撒入大量生姜丝，下入腌好的海鲈鱼片迅速划散，看到鱼片由透明转为雪白卷挺（约30秒）立刻停火。',
        timerSeconds: 45,
        chefTip: '海鲈鱼片不可久煮，30秒断生关火，靠砂锅余热焖熟，口感如豆腐般鲜嫩。'
      },
      {
        stepIndex: 5,
        title: '撒葱花白胡椒装碗',
        instruction: '调入食用盐与白胡椒粉，撒入葱花淋少许香油，趁滚烫温食。',
        timerSeconds: 20,
        chefTip: '海鲈鱼鲜甜纯净，白胡椒增鲜去腥。'
      }
    ],
    chefTips: [
      '选用海鲈鱼纯鱼柳，斜刀切2毫米薄片。',
      '薄淀粉加花生油封油保护鱼肉水分。',
      '大火生滚30秒雪白挺立立刻关火。',
      '无肌间刺，老人幼童可安心食用。'
    ],
    proTips: '海鲈鱼纯鱼柳无刺蒜瓣肉，斜切薄片油封，大火生滚30秒挺拔雪白即停火，肉质极其细腻鲜甜。',
    nutritionHighlights: '海鲈鱼富含高品质易消化动物蛋白、维生素A与铜铁锌钙，补肝肾、益脾胃、化痰止咳。'
  },
  {
    id: 'rec_congee_33',
    name: '象拔蚌鲜片砂锅生滚脆甜海鲜粥',
    subtitle: '加拿大活象拔蚌现片薄晶片，滚烫米汤一冲断生，脆爽爆汁奢华名品',
    region: '广东潮汕/香港',
    cookingMethod: '生滚冲烫',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    difficulty: '高阶精烹',
    servings: 2,
    calories: 235,
    protein: 21.5,
    fat: 4.8,
    carbs: 27.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['顶级海鲜', '象拔蚌脆甜', '刺身级品质', '奢华名粥'],
    ingredients: [
      { name: '活象拔蚌蚌肉 (刺身级薄片)', amount: 120, unit: '克', type: 'main' },
      { name: '优质丝苗大米', amount: 70, unit: '克', type: 'main' },
      { name: '老生姜 (切极细姜丝)', amount: 15, unit: '克', type: 'secondary' },
      { name: '潮汕冬菜粒', amount: 10, unit: '克', type: 'secondary' },
      { name: '鲜水芹菜末与细香葱', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '特级花生油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '广东双蒸米酒', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '优质现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '象拔蚌剥皮切极薄透明晶片',
        instruction: '鲜活象拔蚌蚌鼻在85℃热水烫5秒剥去粗糙外皮，冰水镇凉拔脆，斜刀片成约1毫米厚的半透明轻薄晶片。',
        timerSeconds: 300,
        chefTip: '象拔蚌务必切极薄片并在冰水中镇透，这样蚌肉组织紧实，遇滚水瞬间卷缩爽脆无比。'
      },
      {
        stepIndex: 2,
        title: '极少许花生油米酒抓拌',
        instruction: '蚌片用厨房纸吸干水分，加几滴米酒与几滴花生油抓拌均匀，严禁加淀粉。',
        timerSeconds: 120,
        chefTip: '象拔蚌是顶级刺身级食材，切忌上厚淀粉，薄油锁鲜即可，品尝的是纯正自然的脆甜感。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬煮清澈浓粥底',
        instruction: '砂锅足水下大米与冬菜，大火沸煮18分钟熬成米花全开、汤如脂露的白粥。',
        timerSeconds: 1080,
        chefTip: '粥底必须大沸鼎滚，为后续冲烫蚌片提供足够热能。'
      },
      {
        stepIndex: 4,
        title: '滚沸下蚌片大火汆烫15秒',
        instruction: '粥底大火狂滚翻腾，下入姜丝，将象拔蚌片均匀撒入锅中，用长筷快速划散，蚌片微微卷曲（仅需15秒）立刻关火起锅。',
        timerSeconds: 30,
        chefTip: '象拔蚌生滚只需15秒！多滚5秒肉质就会缩紧发韧，15秒刚断生最为爽脆甘甜。'
      },
      {
        stepIndex: 5,
        title: '撒水芹白胡椒趁热享用',
        instruction: '调入少许盐与现磨白胡椒粉，撒入水芹粒与香葱末盛出大瓷碗温食。',
        timerSeconds: 20,
        chefTip: '象拔蚌肉质嘎嘣脆甜，清鲜满口，为粤港澳大名鼎鼎的至尊豪粥。'
      }
    ],
    chefTips: [
      '象拔蚌热水微烫剥皮后必须冰水镇透。',
      '斜刀切1毫米极薄半透明片。',
      '严禁上厚淀粉，薄油抓匀保持原鲜。',
      '滚粥中大火汆烫15秒卷起立刻关火。'
    ],
    proTips: '刺身级象拔蚌切1毫米薄片冰水拔脆，大滚沸粥大火汆烫仅15秒微卷即刻关火，嘎嘣脆甜爆汁、鲜绝天下。',
    nutritionHighlights: '象拔蚌富含高活性胶原蛋白、铁、核黄素与多种微量元素，低脂肪高营养，壮阳补阴、美白肌肤。'
  },
  {
    id: 'rec_congee_34',
    name: '大蛏子皇芹菜粒砂锅鲜滚稠粥',
    subtitle: '肥硕蛏子皇开背取肉鲜嫩饱满，爽脆水芹解腻，砂锅生滚原汁原鲜',
    region: '广东沿海',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 220,
    protein: 18.5,
    fat: 4.5,
    carbs: 27.5,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['蛏子肥美', '水芹清香', '沿海家常', '快手极鲜'],
    ingredients: [
      { name: '新鲜活蛏子皇/竹蛏', amount: 250, unit: '克', type: 'main' },
      { name: '东北大米', amount: 70, unit: '克', type: 'main' },
      { name: '生姜丝', amount: 12, unit: '克', type: 'secondary' },
      { name: '鲜嫩水芹菜粒', amount: 20, unit: '克', type: 'secondary' },
      { name: '香葱粒', amount: 12, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '料酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '纯芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '蛏子皇淡盐水吐沙剥壳',
        instruction: '鲜活蛏子皇放淡盐水中吐净泥沙，开水中烫10秒至微张壳，剥出肥厚蛏肉，撕去边缘黑膜与内脏沙袋洗净。',
        timerSeconds: 300,
        chefTip: '蛏子皇边缘有一圈黑膜和腹部黑色沙包，必须撕干净，否则不仅发苦还会带有沙粒感。'
      },
      {
        stepIndex: 2,
        title: '蛏肉剖开姜酒上浆',
        instruction: '清理干净的蛏肉对半剖开，加少许料酒、姜丝和白胡椒粉拌匀静置。',
        timerSeconds: 180,
        chefTip: '对半剖开更易在滚粥中均匀受热断生，保持软弹多汁。'
      },
      {
        stepIndex: 3,
        title: '砂锅熬煮大米粥底',
        instruction: '砂锅水滚下大米，大火保持翻滚沸腾18分钟熬成浓稠挂勺的白粥底。',
        timerSeconds: 1080,
        chefTip: '大米彻底爆开花，米浆才能完美裹住蛏肉。'
      },
      {
        stepIndex: 4,
        title: '大火生滚蛏肉1分钟',
        instruction: '砂锅大火沸腾，倒入腌好的蛏肉，用勺顺时针推散，保持大滚煮1分钟至蛏肉饱满挺立。',
        timerSeconds: 60,
        chefTip: '蛏肉肥厚，滚煮1分钟刚好断生弹嫩，久煮肉质收缩变韧失去汁水。'
      },
      {
        stepIndex: 5,
        title: '撒水芹菜碎出锅',
        instruction: '调入食用盐与白胡椒粉，撒入切碎的水芹菜粒与香葱，淋几滴芝麻油即刻关火出锅。',
        timerSeconds: 30,
        chefTip: '水芹独特的野趣香气与蛏子的浓郁海味相辅相成。'
      }
    ],
    chefTips: [
      '蛏子微烫去壳后彻底撕去黑膜与沙囊。',
      '蛏肉对半剖开，受热均匀嫩弹。',
      '大火生滚1分钟挺立饱满立即起锅。',
      '水芹菜末多加，清香扑鼻解腥腻。'
    ],
    proTips: '撕净蛏子黑膜沙囊对半剖开，大滚白粥中快烫1分钟，撒入大量水芹碎，蛏肉肥厚弹嫩无沙，鲜美爽口。',
    nutritionHighlights: '蛏子皇富含碘、硒、锌与高质量贝类蛋白质，清热解毒、利水消肿、滋阴润燥。'
  },
  {
    id: 'rec_congee_35',
    name: '鲜活泥鳅老姜枸杞砂锅温阳粥',
    subtitle: '粗盐抓洗去尽滑涎苦胆，姜片油煎两面金黄激出奶白浓汤，大补阳气',
    region: '广东/四川',
    cookingMethod: '砂锅煲煨',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    difficulty: '中等',
    servings: 2,
    calories: 265,
    protein: 21.0,
    fat: 6.8,
    carbs: 29.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['温阳补肾', '水中人参', '老火温补', '老姜散寒'],
    ingredients: [
      { name: '鲜活小泥鳅', amount: 150, unit: '克', type: 'main' },
      { name: '东北优质珍珠米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜 (切厚片与细丝)', amount: 20, unit: '克', type: 'secondary' },
      { name: '宁夏优质枸杞子', amount: 15, unit: '粒', type: 'secondary' },
      { name: '细香葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '粗盐/面粉 (洗泥鳅用)', amountText: '2 汤匙 (30g)', baseAmount: 2, unit: '汤匙', isPantryStaple: true },
      { name: '纯正花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '高度米酒/料酒', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '粗盐面粉干抓洗净滑涎',
        instruction: '将鲜活泥鳅放盆中，撒入2汤匙粗盐或面粉，快速加盖焖1分钟至泥鳅静止，双手用力抓揉2分钟将体表粘稠滑涎完全揉出，用温水彻底冲洗干净；剪开腹部去除内脏与苦胆。',
        timerSeconds: 300,
        chefTip: '泥鳅体表滑涎与腹内苦胆是土腥苦涩的根源，粗盐能彻底破坏并洗净黏液，苦胆务必挑除干净绝不可弄破。'
      },
      {
        stepIndex: 2,
        title: '老姜厚片油煎至两面焦黄',
        instruction: '热锅下花生油，爆香老姜厚片，下入洗净沥干的泥鳅，中小火慢煎至两面金黄微焦，淋入1汤匙米酒激出香气。',
        timerSeconds: 300,
        chefTip: '煎透泥鳅能使鱼肉蛋白质定型锁住肉汁，更能在后续水煮时激发出奶白浓香的鲜鱼汤。'
      },
      {
        stepIndex: 3,
        title: '砂锅加沸水煲出奶白鱼汤',
        instruction: '将煎好的泥鳅与姜片倒入砂锅，注入800ml沸水，大火猛滚煮8分钟，汤汁迅速转为浓白如奶。',
        timerSeconds: 480,
        chefTip: '高温大滚是煎鱼产生乳化奶白汤的关键，此鱼汤为砂锅粥奠定了极为醇厚的鲜香底蕴。'
      },
      {
        stepIndex: 4,
        title: '下大米与姜丝慢火同煲',
        instruction: '倒入淘洗好的大米与大量细生姜丝，大火煮沸后转中小火慢煲20分钟，直至米粒开花融化，泥鳅肉酥软离骨。',
        timerSeconds: 1200,
        chefTip: '泥鳅与大米同煲，骨酥肉烂，全部钙质与营养尽数融入米浆中。'
      },
      {
        stepIndex: 5,
        title: '下枸杞调味撒葱花起锅',
        instruction: '出锅前5分钟撒入洗净的宁夏枸杞子，调入食用精盐与足量白胡椒粉，撒入葱花焖1分钟即可起锅。',
        timerSeconds: 120,
        chefTip: '枸杞红亮甘甜，白胡椒与老姜双重温中发散，趁热喝下一碗浑身发暖。'
      }
    ],
    chefTips: [
      '用粗盐干抓彻底去净表面泥滑黏液，剪净苦胆。',
      '两面慢火煎至金黄焦香，去腥锁鲜。',
      '沸水大火猛煮8分钟激出奶白浓汤。',
      '与大米同煲20分钟至骨肉酥软融于粥汤。',
      '放足老姜丝与白胡椒粉，温阳驱寒效果倍增。'
    ],
    proTips: '粗盐洗净滑涎挑去苦胆，入锅双面煎黄，加开水大火滚出奶白原汤再下大米同煲，骨肉酥软、老姜枸杞温补暖阳。',
    nutritionHighlights: '泥鳅素有“水中人参”之美誉，富含高生物价优质蛋白质、铁、磷及微量元素锌，温中益气、祛湿强阳、补肾壮骨。'
  },
  {
    id: 'rec_congee_36',
    name: '浓香鲍汁螺片生鲜砂锅咸鲜粥',
    subtitle: '肥厚响螺片刀切薄片爽脆弹牙，浓香鲍汁煨出金亮咸鲜高汤',
    region: '广东潮汕',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 255,
    protein: 20.5,
    fat: 5.5,
    carbs: 30.0,
    ratio: '1:10 (米80g:高汤800ml)',
    tags: ['鲍汁醇香', '螺肉脆爽', '港风名宴', '鲜咸浓郁'],
    ingredients: [
      { name: '新鲜红螺/响螺肉片', amount: 150, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 12, unit: '克', type: 'secondary' },
      { name: '鲜嫩水芹菜末', amount: 15, unit: '克', type: 'secondary' },
      { name: '香葱碎', amount: 12, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '优质金牌鲍汁', amountText: '2 汤匙 (30ml)', baseAmount: 2, unit: '汤匙', isPantryStaple: true },
      { name: '生抽', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '料酒', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '螺肉加盐揉搓斜片薄片',
        instruction: '鲜螺肉用粗盐和面粉用力揉搓洗去粘液，冲洗干净，斜刀切成约1.5毫米的薄片，加料酒姜丝抓匀。',
        timerSeconds: 240,
        chefTip: '螺肉肉质紧密韧性足，必须斜刀切极薄片，受热后才能产生脆爽若鲍鱼的弹牙口感。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火熬煮大米白粥',
        instruction: '砂锅水滚下大米，大火保持翻滚沸腾18分钟熬成米花大开的浓白粥底。',
        timerSeconds: 1080,
        chefTip: '大米熬开花出稠米油，准备融入醇厚鲍汁。'
      },
      {
        stepIndex: 3,
        title: '融入金牌鲍汁调和金汤',
        instruction: '将2汤匙浓香鲍汁与少许生抽倒入粥底中充分顺时针搅匀，白粥底瞬间转为金红油润的鲍汁高汤色。',
        timerSeconds: 120,
        chefTip: '鲍汁先下锅中火微滚，让醇香的海味素与米淀粉彻底交融。'
      },
      {
        stepIndex: 4,
        title: '大火沸滚下螺片1分钟',
        instruction: '大火使鲍汁粥剧烈沸腾翻滚，倒入薄螺片迅速划散，保持中大火滚煮1分钟至螺片卷挺微蜷即刻关火。',
        timerSeconds: 60,
        chefTip: '生鲜螺片切忌长时间烹煮，1分钟断生保持脆韧弹牙，煮久则坚硬难嚼。'
      },
      {
        stepIndex: 5,
        title: '撒水芹胡椒滴香油出锅',
        instruction: '调入食用盐与白胡椒粉，撒入水芹菜粒与香葱，淋芝麻油，热气腾腾出锅享用。',
        timerSeconds: 20,
        chefTip: '鲍汁醇香、螺片爽脆，满口鲜咸甘美。'
      }
    ],
    chefTips: [
      '螺肉加粗盐揉搓去净体表粘液。',
      '斜刀切1.5毫米薄片保证脆爽不硬。',
      '浓鲍汁先融入米粥调出金红高汤底。',
      '螺片下锅大火生滚1分钟断生即关火。'
    ],
    proTips: '螺肉去粘液斜切薄片，熬好白粥调入浓香金牌鲍汁，大火生滚螺片60秒即熟，浓油赤酱、螺肉脆若鲍鱼。',
    nutritionHighlights: '螺肉高蛋白极低脂肪，富含维生素A、无机盐与铁锌微量元素，清热明目、开胃滋阴。'
  },
  {
    id: 'rec_congee_37',
    name: '手打虾滑鲜贝双鲜生滚砂锅粥',
    subtitle: '青虾仁手剁粗粒顺搅上劲成脆虾滑，鲜干贝丝提甘生滚，鲜美爆汁',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 235,
    protein: 21.0,
    fat: 4.8,
    carbs: 27.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['手打纯虾滑', '鲜贝爆汁', '双重极鲜', '老少皆爱'],
    ingredients: [
      { name: '新鲜青虾仁', amount: 160, unit: '克', type: 'main' },
      { name: '鲜扇贝肉/鲜贝柱', amount: 80, unit: '克', type: 'main' },
      { name: '东北大米', amount: 70, unit: '克', type: 'main' },
      { name: '鲜老生姜丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '香芹菜末与细葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '无菌蛋清', amountText: '半个', baseAmount: 0.5, unit: '个', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (5g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '虾仁刀背捶压保留粗颗粒',
        instruction: '鲜虾仁吸干表面水分，用刀背拍扁后粗粗剁几下保留大颗粒感；鲜贝柱撕去外侧黑边，厚块对半切开备用。',
        timerSeconds: 300,
        chefTip: '切勿用绞肉机打成烂虾蓉，刀背捶压保留粗虾粒，做出的虾滑在咀嚼时能明显感到虾肉的脆弹与爆汁感。'
      },
      {
        stepIndex: 2,
        title: '蛋清淀粉顺时针打胶摔打',
        instruction: '虾仁粒加蛋清半个、盐半茶匙、白胡椒粉和淀粉，用筷子顺同一方向用力搅打2分钟起胶，抓起在碗中摔打15次增加紧致弹性。',
        timerSeconds: 300,
        chefTip: '纯手打上劲是虾滑脆嫩弹牙的唯一秘诀，摔打排出空气，煮熟后紧密弹滑如乒乓球。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬煮顺滑白粥底',
        instruction: '砂锅加水烧沸下大米，大火保持剧烈翻滚18分钟，煮出米花碎化、洁白细腻的浓粥底。',
        timerSeconds: 1080,
        chefTip: '粥底保持大沸，准备下勺成团滑入。'
      },
      {
        stepIndex: 4,
        title: '勺舀虾滑与鲜贝同入滚粥',
        instruction: '大火沸粥中加入姜丝，用小铁勺将打好的虾滑一勺一团滑入沸粥中，同时下入鲜贝柱块，大火滚煮2分钟至虾滑全部浮起变粉红。',
        timerSeconds: 120,
        chefTip: '勺子沾少许清水再舀虾滑，虾滑遇滚烫米粥瞬间受热定型滑落，滚煮2分钟浮起即熟，极为脆嫩。'
      },
      {
        stepIndex: 5,
        title: '调味撒水芹胡椒出锅',
        instruction: '调入食用精盐、现磨白胡椒粉与香油，撒入香芹末与葱花，趁热盛入大碗享用。',
        timerSeconds: 20,
        chefTip: '纯虾滑脆爽弹牙，鲜贝多汁甘甜，水芹增香，百吃不厌。'
      }
    ],
    chefTips: [
      '刀背拍压虾仁保留颗粒咀嚼感。',
      '加蛋清顺时针快速打至起胶拉丝，摔打15次。',
      '勺子蘸水舀滑入沸粥，受热定型圆润。',
      '大火生滚2分钟虾滑浮起即熟，弹牙爆汁。'
    ],
    proTips: '纯青虾仁手打摔打起胶做成颗粒虾滑，与鲜扇贝柱同滚2分钟浮起即关火，不加一滴添加剂，纯正天然脆嫩爆汁。',
    nutritionHighlights: '富含高浓度优质海洋球蛋白、镁、磷与微量元素锌，易于吸收转化，是儿童成长与术后复原的极品美食。'
  },
  {
    id: 'rec_congee_38',
    name: '青蟹冬笋干贝砂锅节令鲜粥',
    subtitle: '肥满青蟹斩块肉肥膏满，冬笋清脆解腻干贝提鲜，秋冬砂锅绝味',
    region: '广东潮汕/浙江',
    cookingMethod: '砂锅生滚慢煲',
    prepTimeMinutes: 20,
    cookTimeMinutes: 32,
    difficulty: '中等',
    servings: 2,
    calories: 285,
    protein: 22.0,
    fat: 7.2,
    carbs: 31.0,
    ratio: '1:11 (米80g:水880ml)',
    tags: ['时令冬珍', '青蟹膏肥', '冬笋清脆', '暖身极品'],
    ingredients: [
      { name: '新鲜肥美青蟹', amount: 1, unit: '只 (约250g)', type: 'main' },
      { name: '时令鲜冬笋', amount: 60, unit: '克', type: 'main' },
      { name: '优质淡干干贝/瑶柱', amount: 15, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '鲜小葱碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '冬笋切薄片焯水去草酸',
        instruction: '新鲜冬笋剥去硬壳，切成透亮薄片，入沸水锅加少许盐焯烫2分钟捞出过凉水沥干。',
        timerSeconds: 240,
        chefTip: '冬笋含有草酸与轻微涩味，焯水2分钟能完全除涩，保留冬笋特有的松脆甘甜。'
      },
      {
        stepIndex: 2,
        title: '青蟹宰杀斩块拍裂蟹螯',
        instruction: '青蟹刷净揭盖去鳃胃斩成四大块，蟹螯用刀背轻轻拍裂外壳，切口沾少许干淀粉锁住蟹汁。',
        timerSeconds: 300,
        chefTip: '蟹螯拍出裂纹可以让热力和米汤浸入蟹肉内部，食用时也极为容易剥壳取肉。'
      },
      {
        stepIndex: 3,
        title: '干贝丝大米同煲稠粥底',
        instruction: '砂锅水滚下淘洗大米与撕好的干贝丝，大火保持翻滚18分钟熬出瑶柱底鲜浓厚的白粥。',
        timerSeconds: 1080,
        chefTip: '干贝丝与米同熬奠定浓郁深海底味。'
      },
      {
        stepIndex: 4,
        title: '下青蟹冬笋大火滚煲4分钟',
        instruction: '转大火沸滚，下入青蟹块、冬笋片与大量姜丝，淋入米酒，大火翻滚沸腾4分钟至蟹壳通红、蟹肉熟透。',
        timerSeconds: 240,
        chefTip: '青蟹与冬笋同滚，冬笋吸收蟹膏油脂变得丰腴脆美，蟹汤也因冬笋清甜而毫无腻滞。'
      },
      {
        stepIndex: 5,
        title: '调味撒葱花白胡椒离火',
        instruction: '调入食用盐与白胡椒粉，撒入葱花滴花生油，连砂锅滚烫上桌。',
        timerSeconds: 30,
        chefTip: '秋冬时令极品，鲜美透骨。'
      }
    ],
    chefTips: [
      '冬笋切薄片焯水2分钟去除草酸苦涩。',
      '青蟹螯用刀背拍出裂纹入味易剥。',
      '蟹块冬笋同滚4分钟鲜香完全交融。',
      '出锅加足白胡椒粉温中提鲜。'
    ],
    proTips: '冬笋焯水去涩切薄片，青蟹拍裂大螯锁膏，与干贝白粥同滚4分钟，冬笋清脆吸鲜，青蟹肉肥膏红，时令绝配。',
    nutritionHighlights: '青蟹富含甲壳素与优质蛋白质，冬笋富含植物纤维与氨基酸，开胃下气、强壮体格。'
  },
  {
    id: 'rec_congee_39',
    name: '鲜虾滑蛋丝砂锅儿童补钙粥',
    subtitle: '鲜海虾仁剔透弹牙，慢火烘出金黄滑嫩蛋丝，高蛋白易消化补钙佳品',
    region: '广东潮汕',
    cookingMethod: '砂锅生滚',
    prepTimeMinutes: 12,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 225,
    protein: 18.0,
    fat: 6.0,
    carbs: 26.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['儿童长高', '补钙养胃', '鲜虾滑蛋', '温和营养'],
    ingredients: [
      { name: '新鲜大青虾仁', amount: 120, unit: '克', type: 'main' },
      { name: '土鸡蛋', amount: 2, unit: '枚', type: 'main' },
      { name: '优质大米', amount: 70, unit: '克', type: 'main' },
      { name: '嫩玉米粒', amount: 20, unit: '克', type: 'secondary' },
      { name: '嫩小葱花', amount: 10, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鲜虾去线切小粒轻腌',
        instruction: '鲜虾仁去除虾线，切成约1cm大小的虾粒，加入极少许盐与淀粉抓匀上浆。',
        timerSeconds: 180,
        chefTip: '儿童食用切成小粒更易咀嚼消化，薄浆锁水保持Q弹。'
      },
      {
        stepIndex: 2,
        title: '土鸡蛋摊成薄蛋皮切丝',
        instruction: '鸡蛋打散加少许水淀粉，平底锅微油摊成薄薄金黄蛋皮，取出卷起切成细蛋皮丝备用。',
        timerSeconds: 240,
        chefTip: '切细蛋丝比直接淋蛋液更美观且久煮不散，金黄如金丝般漂浮在白粥中极能吸引孩子食欲。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬煮甜香米粥',
        instruction: '砂锅水滚下大米与嫩玉米粒，大火保持翻滚18分钟熬成米花绽开的清甜白粥。',
        timerSeconds: 1080,
        chefTip: '加入嫩玉米粒同熬，米汤自带淡淡天然谷物清甜，孩子极爱喝。'
      },
      {
        stepIndex: 4,
        title: '下鲜虾粒滚煮1分半钟',
        instruction: '大火沸滚状态下入腌好的鲜虾粒，用勺推散，滚煮1分半钟至虾粒变粉红断生。',
        timerSeconds: 90,
        chefTip: '小虾粒熟得极快，1分半钟刚好熟透弹嫩。'
      },
      {
        stepIndex: 5,
        title: '撒入金黄蛋丝葱花起锅',
        instruction: '倒入切好的金黄蛋丝推匀，调入少许盐与香油，撒上细葱花关火出锅。',
        timerSeconds: 30,
        chefTip: '蛋丝金黄、虾粒粉红、粥底莹白，清淡鲜甜。'
      }
    ],
    chefTips: [
      '鲜虾去背线切1cm小丁，方便幼童咀嚼。',
      '摊薄蛋皮切细丝，金黄美观久煮不烂。',
      '加甜玉米粒同熬粥底天然回甘。',
      '调味以少盐清淡为主，呵护幼童娇嫩肠胃。'
    ],
    proTips: '虾仁切丁薄上浆，蛋液摊薄皮切金黄蛋丝，与甜玉米大米同熬滚烫出锅，蛋香虾鲜、清甜补钙，孩子百喝不厌。',
    nutritionHighlights: '富含易消化海洋优质蛋白质、卵磷脂、天然钙与磷元素，温和调理脾胃，助力儿童骨骼生长。'
  },
  {
    id: 'rec_congee_40',
    name: '潮汕老菜脯鲜肉干贝砂锅古早粥',
    subtitle: '陈年黑金老菜脯醇厚咸香，干贝提鲜前尖肉碎润燥，潮汕古早味',
    region: '广东潮汕',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '简单',
    servings: 2,
    calories: 250,
    protein: 17.0,
    fat: 6.5,
    carbs: 31.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['潮汕老菜脯', '古早家传', '消食开胃', '陈香四溢'],
    ingredients: [
      { name: '正宗潮汕陈年老菜脯 (切碎粒)', amount: 25, unit: '克', type: 'main' },
      { name: '新鲜前夹猪瘦肉碎', amount: 100, unit: '克', type: 'main' },
      { name: '优质瑶柱干贝丝', amount: 15, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '生姜碎', amount: 8, unit: '克', type: 'secondary' },
      { name: '鲜嫩香葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '生抽', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '黑金老菜脯切细丁油爆出香',
        instruction: '选用发酵五年以上黑亮油润的潮汕老菜脯，清水洗去表面浮灰切成小细丁；锅中加花生油，小火将老菜脯丁爆炒出醇厚的陈年酱香味。',
        timerSeconds: 240,
        chefTip: '老菜脯俗称“潮汕黑金”，年份越久药用越佳，切丁先用油爆香是激发出独特陈香、消除杂味的核心手法。'
      },
      {
        stepIndex: 2,
        title: '前尖肉碎调味打水',
        instruction: '前尖肉剁成粗肉碎，加少许生抽、姜碎与淀粉抓捏匀。',
        timerSeconds: 180,
        chefTip: '肉碎带点油星，煮进粥里能润滑老菜脯的咸甘。'
      },
      {
        stepIndex: 3,
        title: '干贝老菜脯大米同煲粥底',
        instruction: '砂锅水滚，下入大米、手撕干贝丝与爆香的老菜脯丁，大火翻沸18分钟，熬至汤色泛微黄、浓郁陈香扑鼻。',
        timerSeconds: 1080,
        chefTip: '老菜脯与干贝同煲，干贝的鲜与老菜脯的醇香完全渗入米花中。'
      },
      {
        stepIndex: 4,
        title: '下肉碎大火生滚1分钟',
        instruction: '调大火让砂锅大滚，倒入肉碎快速划散成小颗粒，滚煮1分钟至肉碎变白断生。',
        timerSeconds: 60,
        chefTip: '肉碎下锅快速划散断生即熟，吸饱了老菜脯的陈年风味。'
      },
      {
        stepIndex: 5,
        title: '调味撒葱花白胡椒起锅',
        instruction: '尝味（老菜脯本身咸香十足通常不用额外加盐），撒入白胡椒粉、香葱花并滴入芝麻香油即可起锅。',
        timerSeconds: 20,
        chefTip: '一碗下肚舒畅通气，是潮汕游子心中最温暖的家乡味道。'
      }
    ],
    chefTips: [
      '选发酵黑润的陈年老菜脯切细丁。',
      '老菜脯先用花生油小火爆香激发陈香。',
      '干贝与老菜脯同熬奠定浓醇底味。',
      '老菜脯自带足量咸味，通常无需再加食盐。'
    ],
    proTips: '五年陈年黑金老菜脯用花生油爆出陈醇酱香，与干贝大米同煲成微黄浓稠老火粥，下肉碎滑熟，消食解积、甘润落胃。',
    nutritionHighlights: '潮汕陈年老菜脯含丰富活性酶与有机酸，有消食健胃、顺气解郁、降脂下气之独特食疗功效。'
  }
];
