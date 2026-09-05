// 广府生滚与顺德水乡粥 (01 - 20)
module.exports = [
  {
    id: 'rec_congee_01',
    name: '经典传统老火皮蛋瘦肉生滚粥',
    subtitle: '广府早茶头牌，米花绽放肉丝嫩滑，皮蛋咸香温润落胃',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    difficulty: '新手友好',
    servings: 2,
    calories: 238,
    protein: 16.5,
    fat: 5.2,
    carbs: 31.8,
    ratio: '1:10 (珍珠米50g:水500ml)',
    tags: ['广式早茶', '经典生滚', '咸香顺滑', '老少皆宜'],
    ingredients: [
      { name: '东北珍珠米', amount: 80, unit: '克', type: 'main' },
      { name: '无铅松花皮蛋', amount: 2, unit: '枚', type: 'main' },
      { name: '新鲜猪里脊肉', amount: 120, unit: '克', type: 'main' },
      { name: '老姜细丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '鲜嫩小葱碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '熟花生油 (拌米用)', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (5g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻纯香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '大米拌油急冻开花',
        instruction: '大米淘净沥干，加花生油5ml与少许食盐抓匀，放入冰箱冷冻室急冻20分钟。冷冻后米粒水分结晶膨胀撑裂米粒表层，下锅遇滚水极速爆开米花。',
        timerSeconds: 1200,
        chefTip: '提前拌油冷冻是广式老茶楼煲粥的秘密武器，不仅省时一半，而且熬出的粥底绵密挂勺、起厚厚一层米油。'
      },
      {
        stepIndex: 2,
        title: '开水下米明火煲底',
        instruction: '砂锅注入800ml清水大火烧沸，倒入冷冻米粒，保持大火持续沸腾翻滚15分钟，转中小火继续慢煲，直至米粒全部爆花化为白玉脂浆。',
        timerSeconds: 900,
        chefTip: '千万不要冷水下米，沸水下米米粒在对流中翻滚撞击，不易沉底粘锅且米香能瞬间被热力激发。'
      },
      {
        stepIndex: 3,
        title: '里脊顺丝切条上浆',
        instruction: '猪里脊剔除筋膜切成火柴棍粗细的肉丝，加入姜丝、生抽、玉米淀粉、白胡椒粉抓捏至黏稠起胶，最后淋少许花生油封住肉汁静置10分钟。',
        timerSeconds: 300,
        chefTip: '淀粉抓匀后再封油，下入滚粥时肉丝才能粒粒滑散，外层淀粉糊化形成保护膜，里脊入口鲜嫩多汁绝不塞牙。'
      },
      {
        stepIndex: 4,
        title: '皮蛋分批下锅释香',
        instruction: '皮蛋切成小丁。在粥底煮至8分熟时先下一半皮蛋丁慢煮5分钟，让皮蛋的碱香充分溶入粥底；留一半等最后出锅前下以保持咀嚼口感。',
        timerSeconds: 300,
        chefTip: '先下一半皮蛋化入粥水是汤色微黄醇香的关键，后下一半则能吃到饱满的溏心颗粒。'
      },
      {
        stepIndex: 5,
        title: '沸滚烫肉秒速出锅',
        instruction: '大火使砂锅粥底剧烈翻滚沸腾，下入剩余皮蛋丁与腌好的肉丝，用筷子快速划散，肉丝变白断生（约40秒）即刻关火，撒葱花与白胡椒粉即可。',
        timerSeconds: 60,
        chefTip: '生滚的核心在“烫”而非“煮”，肉丝下锅超过1分钟就会老化发柴，利用砂锅强劲的保温余温足以让肉丝完全熟透嫩滑。'
      }
    ],
    chefTips: [
      '提前拌油冷冻是广式老茶楼煲粥的秘密武器，出米油极快。',
      '一定要沸水下米，大火翻滚防止沉底焦糊。',
      '肉丝上浆后封入熟油，下锅顺滑不脱浆。',
      '皮蛋分两批下，一半融于粥汤一半保持口感。',
      '肉丝下锅大火划散40秒断生即熄火，肉质极嫩。'
    ],
    proTips: '大米提前拌少许花生油冷冻，煮出来的粥底绵密出油，绝不沉底糊锅；肉丝下锅必须急火快汆40秒断生即关火。',
    nutritionHighlights: '富含优质动物蛋白与卵磷脂，容易消化吸收，适宜晨起暖胃与病后虚弱调养。'
  },
  {
    id: 'rec_congee_02',
    name: '窝蛋滑嫩生滚牛肉香米粥',
    subtitle: '嫩牛肉化渣无筋，趁热打入一颗滑嫩无菌生蛋黄，蛋香交融',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 256,
    protein: 20.2,
    fat: 6.8,
    carbs: 28.5,
    ratio: '1:10 (香米60g:高汤600ml)',
    tags: ['广式生滚', '牛肉鲜美', '蛋香浓郁', '元气早餐'],
    ingredients: [
      { name: '优质丝苗米', amount: 80, unit: '克', type: 'main' },
      { name: '新鲜牛里脊/牛柳', amount: 120, unit: '克', type: 'main' },
      { name: '无菌可生食鸡蛋', amount: 1, unit: '枚', type: 'main' },
      { name: '老生姜切极细丝', amount: 8, unit: '克', type: 'secondary' },
      { name: '香葱段与葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '蚝油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (6g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '食用小苏打', amountText: '0.5克 (嫩肉秘诀)', baseAmount: 0.5, unit: '克', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻油', amountText: '半茶匙 (4ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '牛肉逆纹切薄柳叶片',
        instruction: '牛里脊剃净表面白筋，观察肌肉纹理，务必横着逆纹切成厚约2毫米的薄片，加入少许葱姜水反复抓捏，直到牛肉完全把水分吸收膨胀。',
        timerSeconds: 300,
        chefTip: '切牛肉“横切牛羊竖切猪”，逆纹把长肌纤维彻底切断，牛肉煮熟才不会塞牙且入口化渣。'
      },
      {
        stepIndex: 2,
        title: '微碱锁水与油封上浆',
        instruction: '牛肉片加入指甲盖大小的微量食用小苏打（0.5g）、生抽、蚝油和淀粉抓匀上劲，最后倒入半勺花生油锁住内部水分，腌制15分钟。',
        timerSeconds: 600,
        chefTip: '微量苏打能改变肉质酸碱度软化纤维，但切忌过量否则有碱味；油封是保持肉汁不流失的护城河。'
      },
      {
        stepIndex: 3,
        title: '砂锅明火煲浓郁白粥',
        instruction: '砂锅注水大滚后下入洗净香米，中大火保持咕嘟翻滚20分钟，煮至米粒裂开、汤汁如羊脂白玉般粘稠透亮。',
        timerSeconds: 1200,
        chefTip: '煲粥底中途若汤汁偏干，只能添加沸水，绝不可添冷水，否则米粒收缩无法再出浓浆。'
      },
      {
        stepIndex: 4,
        title: '大滚下牛肉30秒滑散',
        instruction: '粥底大火烧至白浪翻涌，放入姜丝，将腌好的牛肉片均匀撒入锅中，长筷迅速轻柔划散，牛肉颜色转为粉白（约35秒）立即熄火出锅盛碗。',
        timerSeconds: 45,
        chefTip: '牛肉变色断生立即关火，利用余热焖熟，多煮10秒肉质都会变硬。'
      },
      {
        stepIndex: 5,
        title: '卧入无菌生蛋黄提鲜',
        instruction: '在滚烫的牛肉粥碗中央打入一颗新鲜无菌蛋黄，撒葱花与白胡椒粉。食客趁热用瓷勺将蛋黄搅散，借滚粥余温烫化成奶黄色丝滑蛋羹。',
        timerSeconds: 30,
        chefTip: '必须选用标明可生食的无菌蛋；务必趁出锅最烫的前一分钟拌匀，蛋香与肉香才能完美融合。'
      }
    ],
    chefTips: [
      '牛里脊必须逆着纹理横切切断纤维。',
      '加葱姜水吃透水分再加少许苏打，鲜嫩化渣。',
      '沸火生滚牛肉不能超过35秒，断生即起锅。',
      '必须使用无菌可生食鸡蛋保证食品安全。',
      '趁极烫时搅散蛋黄，烫熟成醇厚奶油质感。'
    ],
    proTips: '切牛肉必须逆着肉丝肌理切断纤维；打入窝蛋后要趁极烫时立即搅匀，利用滚粥余温将生蛋化作顺滑蛋花。',
    nutritionHighlights: '高蛋白低脂铁质丰富，蛋黄提供优质卵磷脂，是补充体能与唤醒清晨活力的金牌粥品。'
  },
  {
    id: 'rec_congee_03',
    name: '香菇滑鸡生滚金牌香米粥',
    subtitle: '去骨鸡腿肉弹嫩多汁，香菇浸润出天然醇厚山珍鲜香',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 32,
    difficulty: '简单',
    servings: 2,
    calories: 268,
    protein: 18.0,
    fat: 7.2,
    carbs: 32.5,
    ratio: '1:9 (丝苗米80g:水720ml)',
    tags: ['广式生滚', '山珍鲜鸡', '浓香开胃', '经典夜宵'],
    ingredients: [
      { name: '优质丝苗香米', amount: 80, unit: '克', type: 'main' },
      { name: '新鲜琵琶鸡腿肉', amount: 150, unit: '克', type: 'main' },
      { name: '椴木干香菇', amount: 4, unit: '朵', type: 'secondary' },
      { name: '生姜切丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '宁夏枸杞', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '优质生抽', amountText: '1 汤匙 (12ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '绍兴料酒', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '白砂糖', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (5g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '压榨花生油', amountText: '1 茶匙 (6ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鸡腿剔骨切块腌味',
        instruction: '选用鲜琵琶鸡腿剔除骨头与多余油脂，切成大拇指指甲盖大小的肉丁，加料酒、生抽、姜丝、少许糖和淀粉抓拌均匀，腌制15分钟入味。',
        timerSeconds: 900,
        chefTip: '一定要选鸡腿肉而非鸡胸肉，鸡腿肉筋膜交错、含水量足，久煮依然弹滑有嚼劲。'
      },
      {
        stepIndex: 2,
        title: '温水发香菇留浸泡清汤',
        instruction: '椴木香菇洗去表面浮灰，加温水泡发透彻，捞出挤干切成细丝；沉淀后的香菇水倒出上层清液备用。',
        timerSeconds: 300,
        chefTip: '干香菇的鸟苷酸鲜味远胜鲜香菇，泡菇水上层清液倒入粥中，能起到天然增鲜剂的神奇效果。'
      },
      {
        stepIndex: 3,
        title: '砂锅慢熬明火浓粥底',
        instruction: '砂锅水沸下淘洗好的丝苗米与泡菇清液，大火沸煮18分钟至米粒碎化开花，汤水渐稠呈米白色。',
        timerSeconds: 1080,
        chefTip: '大米中掺入少许糯米（如大米70g加糯米10g）能让粥汤更为细腻黏唇，保温性更强。'
      },
      {
        stepIndex: 4,
        title: '先滚香菇后下滑鸡丁',
        instruction: '先下香菇丝中火煲煮3分钟激发菇香，再调大火让粥大沸，倒入腌制好的滑鸡丁，保持沸腾滚煮2分半钟至鸡肉全熟转白。',
        timerSeconds: 240,
        chefTip: '香菇耐煮需提前下，鸡丁肉块较小不可滚煮超过3分钟，防止鸡肉中可溶性蛋白析出变硬。'
      },
      {
        stepIndex: 5,
        title: '枸杞点缀白胡椒提味',
        instruction: '起锅前调入食盐与现磨白胡椒粉，撒入洗净的枸杞与葱花，关火加盖焖1分钟即可盛碗享用。',
        timerSeconds: 60,
        chefTip: '枸杞不能早下，早下易煮破皮发酸且破坏玉米黄素，出锅前借余热烫软甘甜最为清口。'
      }
    ],
    chefTips: [
      '选用鸡腿肉比鸡胸肉更爽滑多汁。',
      '椴木干香菇沉淀后的头道水是天然鲜味来源。',
      '香菇丝先煮3分钟释放香气再下鸡丁。',
      '鸡丁滚煮2分半钟熟透立即停火。',
      '枸杞出锅前关火焖1分钟，鲜红甘甜不酸口。'
    ],
    proTips: '选用鸡腿肉比鸡胸肉更爽滑多汁；香菇先下锅能让菌菇核苷酸完全融入米汤中，鲜度倍增。',
    nutritionHighlights: '香菇多糖提升抵抗力，鸡腿肉提供丰富必需氨基酸，温和滋补不易上火。'
  },
  {
    id: 'rec_congee_04',
    name: '传统广府状元及第生滚粥',
    subtitle: '新鲜猪肝、猪粉肠、手打肉丸三鲜会聚，鲜爽脆嫩吉祥寓意',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '中等',
    servings: 2,
    calories: 285,
    protein: 22.4,
    fat: 8.5,
    carbs: 30.1,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['广式名吃', '内脏脆嫩', '及第登科', '鲜甜滑爽'],
    ingredients: [
      { name: '精选大米', amount: 80, unit: '克', type: 'main' },
      { name: '新鲜粉嫩猪肝', amount: 50, unit: '克', type: 'main' },
      { name: '新鲜猪粉肠', amount: 50, unit: '克', type: 'main' },
      { name: '手打前夹肉丸', amount: 60, unit: '克', type: 'main' },
      { name: '生姜细丝', amount: 12, unit: '克', type: 'secondary' },
      { name: '嫩香葱粒', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '广东米酒/料酒', amountText: '1 茶匙 (8ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (6g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (4g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '猪杂洗净去腥漂洗',
        instruction: '猪肝切柳叶薄片，放流动清水下漂洗冲洗3遍直至血水排净呈微白色；粉肠用筷子翻洗干净切小段，焯水10秒捞出沥干。',
        timerSeconds: 300,
        chefTip: '猪肝去腥关键在漂去暗红色的残存血水，漂净后再切薄片，煮出来的粥汤才清爽不浑浊、无内脏腥气。'
      },
      {
        stepIndex: 2,
        title: '精准浆腌下料',
        instruction: '猪肝加米酒、生抽、姜丝、白胡椒粉、淀粉抓拌薄浆，猪肉糜加盐姜末沿顺时针搅打上劲捏成3颗小肉丸备用。',
        timerSeconds: 600,
        chefTip: '猪肝上浆必须极薄，粉太重会使粥水变糊，只需薄薄一层锁住脆嫩组织。'
      },
      {
        stepIndex: 3,
        title: '明火大煲状元白粥',
        instruction: '砂锅注入开水下大米，大火煲滚转中火熬制20分钟，煲出米油四溢、汤如凝脂的状元粥底。',
        timerSeconds: 1200,
        chefTip: '白粥底要提前熬好，生滚阶段一气呵成，切不可边下生料边等米熟。'
      },
      {
        stepIndex: 4,
        title: '分批下料精准控温',
        instruction: '大火沸腾，先下入肉丸煮1分钟浮起，再下入粉肠段煮30秒，最后下入腌好的猪肝片用筷子划散，煮25秒看到猪肝变粉红挺立即刻关火。',
        timerSeconds: 120,
        chefTip: '先丸后肠最后猪肝，猪肝在滚沸粥中严格不能超过30秒，全靠滚粥余温焖至全熟，入口才会沙脆无渣。'
      },
      {
        stepIndex: 5,
        title: '碗底垫姜冲滚提香',
        instruction: '碗底预先放少许极细姜丝与胡椒粉，将滚烫的及第粥直接冲入碗中激出姜香，撒香葱粒趁热享用。',
        timerSeconds: 60,
        chefTip: '碗底垫姜丝冲入滚粥是广府老师傅的讲究，姜丝被滚烫米汤瞬间烫熟，辛辣转为甘甜清香。'
      }
    ],
    chefTips: [
      '猪肝切薄片后流动水漂透，去除全部血水。',
      '肉丸先下煮1分钟，粉肠次之，猪肝最后下。',
      '猪肝沸滚25秒立即熄火，余热焖透最嫩脆。',
      '碗底垫少许鲜姜丝直接冲入滚粥提香。'
    ],
    proTips: '猪肝下锅时间严格不能超过30秒，利用滚粥的充沛热量焖透，方能达到入口弹牙脆嫩、毫无粉涩感的极致境界。',
    nutritionHighlights: '含极其丰富的铁元素、维生素A与多种B族维生素，极佳的补血明目补气药膳粥。'
  },
  {
    id: 'rec_congee_05',
    name: '西关老字号正宗艇仔名粥',
    subtitle: '生鱼片、鱿鱼丝、海蜇与炸花生酥香汇聚，荔湾水上风情',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 35,
    difficulty: '中等',
    servings: 2,
    calories: 278,
    protein: 19.5,
    fat: 7.8,
    carbs: 32.0,
    ratio: '1:10 (米80g:大地鱼骨汤800ml)',
    tags: ['荔湾风情', '水乡经典', '丰富口感', '早茶必点'],
    ingredients: [
      { name: '优质丝苗香米', amount: 80, unit: '克', type: 'main' },
      { name: '新鲜生草鱼/鲩鱼片', amount: 60, unit: '克', type: 'main' },
      { name: '水发鱿鱼须丝', amount: 40, unit: '克', type: 'main' },
      { name: '鲜嫩脆海蜇丝', amount: 30, unit: '克', type: 'secondary' },
      { name: '现炸酥脆花生米', amount: 20, unit: '克', type: 'secondary' },
      { name: '老油条段', amount: 1, unit: '根', type: 'secondary' }
    ],
    seasonings: [
      { name: '生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级花生油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '大地鱼骨高汤熬粥底',
        instruction: '取小块烘香大地鱼干或猪筒骨熬制奶白鲜汤，用此高汤下米，明火慢熬25分钟成稠滑滚烫的白粥底。',
        timerSeconds: 1500,
        chefTip: '西关传统艇仔粥粥底必用大地鱼干熬汤，干香浓醇，是普通清水粥无法比拟的鲜味层次。'
      },
      {
        stepIndex: 2,
        title: '生鲜配料铺大瓷碗底',
        instruction: '将新鲜草鱼薄片、水发鱿鱼丝、海蜇丝、细姜丝码在大汤碗底部，淋入少许熟花生油与白胡椒粉拌匀。',
        timerSeconds: 180,
        chefTip: '传统艇仔粥精髓是“生料铺碗底、滚粥直接撞”，千万不要下锅煮，生料下锅一煮鱼片就碎、鱿鱼就老。'
      },
      {
        stepIndex: 3,
        title: '鼎沸滚粥直冲生料撞熟',
        instruction: '砂锅大火把米粥烧至沸腾起白浪，趁达到100℃的一瞬间，一大勺滚粥猛冲入大瓷碗中，利用热力瞬间将生鱼片与鱿鱼丝烫至粉白脆甜。',
        timerSeconds: 45,
        chefTip: '撞粥速度要快、汤温要足够滚烫，冲下后立即用勺子轻划散，鱼片受热均匀，嫩如豆腐。'
      },
      {
        stepIndex: 4,
        title: '顶层铺设香脆老油条',
        instruction: '在烫熟的粥面上迅速铺满现切老油条圈、香脆炸花生米与嫩葱丝，撒现磨白胡椒粉提鲜。',
        timerSeconds: 60,
        chefTip: '油条一定要选用复炸过焦脆的“老油条”，吸附米浆后外软内韧，与脆花生交织成绝佳口感。'
      }
    ],
    chefTips: [
      '用大地鱼干或骨汤熬粥底鲜美无比。',
      '生鱼片鱿鱼丝铺碗底，用滚烫米粥直冲撞烫。',
      '切忌将生料下锅同煮，否则鱼片碎烂鱿鱼发硬。',
      '必须配酥脆老油条段和现炸花生米。'
    ],
    proTips: '传统艇仔粥采用“生料铺碗底、滚粥直接撞烫”的正宗顺德手法，这样鱼片受热最均匀，肉质极鲜极嫩无半点腥气。',
    nutritionHighlights: '高蛋白低饱和脂肪，集合海产与淡水鱼多重不饱和脂肪酸，口感脆嫩丰富。'
  },
  {
    id: 'rec_congee_06',
    name: '顺德拆鱼骨香煎鲜滑鱼茸粥',
    subtitle: '整条鲜鱼两面煎香，剔骨拆肉成嫩鱼茸，鱼骨煨汤米粥乳白',
    region: '广东顺德',
    cookingMethod: '生滚慢熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '高阶精烹',
    servings: 2,
    calories: 235,
    protein: 19.8,
    fat: 6.2,
    carbs: 25.0,
    ratio: '1:10 (珍珠米60g:鱼骨浓汤600ml)',
    tags: ['顺德传统', '大师绝技', '鲜甜无刺', '老幼滋补'],
    ingredients: [
      { name: '新鲜鳙鱼/草鱼肉', amount: 200, unit: '克', type: 'main' },
      { name: '东北珍珠米', amount: 70, unit: '克', type: 'main' },
      { name: '生姜切细片', amount: 15, unit: '克', type: 'secondary' },
      { name: '鲜水瓜丝/丝瓜丝', amount: 30, unit: '克', type: 'secondary' },
      { name: '油炸薄脆碎', amount: 15, unit: '克', type: 'secondary' },
      { name: '细香葱与香菜末', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯正花生油', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '优质白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '整鱼两面微黄煎香',
        instruction: '热锅下花生油滑锅，将整块鲜鱼肉下锅慢火煎至两面金黄焦香，淋入米酒去腥增香后盛出沥油。',
        timerSeconds: 300,
        chefTip: '鱼肉必须煎至表皮微焦，高温煎制不仅去腥，更让鱼肉蛋白质凝固，拆鱼肉时纤维完整不碎烂。'
      },
      {
        stepIndex: 2,
        title: '手工细致拆骨取纯茸',
        instruction: '待鱼肉稍凉，戴上料理手套细致地将大骨、鱼刺全部剥离，顺着鱼肉肌理捻成细腻的熟鱼茸备用。',
        timerSeconds: 600,
        chefTip: '顺德名厨一绝全在手感，拆鱼时务必双手轻捻检查有无细刺，保证老人小孩吞咽无忧。'
      },
      {
        stepIndex: 3,
        title: '拆出鱼骨煎熬奶白浓汤',
        instruction: '拆出的大鱼骨重新回锅，加姜片大火爆炒，注入800ml沸水大火猛煮10分钟，滤去残渣得出一锅浓如豆浆的奶白鱼汤。',
        timerSeconds: 600,
        chefTip: '大火猛滚是鱼汤变白的关键，乳化油脂与骨胶原充分融合，以此汤熬粥香浓扑鼻。'
      },
      {
        stepIndex: 4,
        title: '奶白鱼汤煲大米粥底',
        instruction: '取奶白鱼汤煮沸，下入浸泡过的珍珠米，保持中火滚煲20分钟，直至米花化入浓鱼汤中。',
        timerSeconds: 1200,
        chefTip: '鱼汤本身带有咸鲜，此时不必放盐，待米粥完全融合出稠油即可。'
      },
      {
        stepIndex: 5,
        title: '鱼茸水瓜丝生滚出锅',
        instruction: '调大火让粥大滚，倒入拆好的鱼茸与丝瓜丝滚煮1分钟，调入盐、白胡椒粉，撒上香菜葱花与炸薄脆即可。',
        timerSeconds: 90,
        chefTip: '鱼茸本已熟透，下锅只需翻滚1分钟回温并吸收米香，过久会失却清爽肉质。'
      }
    ],
    chefTips: [
      '鱼身必须煎透煎焦黄，蛋白质凝固更易剔刺。',
      '手工细细捻拆鱼骨，保障纯净无刺。',
      '鱼骨加沸水大火熬出奶白原汤再煲粥。',
      '丝瓜丝清甜吸油，出锅撒薄脆增加层次。'
    ],
    proTips: '顺德拆鱼粥讲究“煎、拆、熬、滚”四部法，鱼骨熬白汤奠定底味，鱼茸回滚保证肉香，层次丰富绝伦。',
    nutritionHighlights: '富含优质鱼肉蛋白、不饱和脂肪酸EPA与DHA，极易消化，是滋养健脑的岭南头牌名粥。'
  },
  {
    id: 'rec_congee_07',
    name: '清甜菜心粒肉碎生滚明火粥',
    subtitle: '广府宁夏菜心清甜爽脆，前夹瘦肉碎粒粒分明鲜润爽口',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 12,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 215,
    protein: 14.5,
    fat: 4.8,
    carbs: 30.0,
    ratio: '1:10 (米70g:清水700ml)',
    tags: ['广式家常', '清甜解腻', '肠胃友好', '快手早餐'],
    ingredients: [
      { name: '优质珍珠米', amount: 70, unit: '克', type: 'main' },
      { name: '新鲜前夹瘦肉碎', amount: 100, unit: '克', type: 'main' },
      { name: '鲜嫩菜心 (切小粒)', amount: 80, unit: '克', type: 'main' },
      { name: '鲜生姜丝', amount: 8, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '前尖肉碎调味打浆',
        instruction: '前尖瘦肉手切细小肉碎，加入姜丝、少许生抽、淀粉与1茶匙清水，顺时针搅打至肉馅发黏抱团。',
        timerSeconds: 180,
        chefTip: '肉碎不要用绞肉机搅得太烂，手切小颗粒煮出来咀嚼感更有弹性。'
      },
      {
        stepIndex: 2,
        title: '菜心切粒冰水拔脆',
        instruction: '选取粗壮鲜嫩的菜心梗与嫩叶，切成半厘米的小粒，浸泡在冷水中备用，保持菜心脆绿多汁。',
        timerSeconds: 120,
        chefTip: '菜心梗爽脆而叶子易软，切小粒能让每一勺粥都兼备米浆与爽脆菜粒的双重质感。'
      },
      {
        stepIndex: 3,
        title: '明火大火煲开花白粥',
        instruction: '砂锅水滚下大米，大火滚煮18分钟至米粒碎裂融化，呈浓稠挂勺的白粥底。',
        timerSeconds: 1080,
        chefTip: '白粥底要保持大火持续沸腾，用勺子顺时针多搅动几十圈，帮助米淀粉充分糊化。'
      },
      {
        stepIndex: 4,
        title: '肉碎下锅筷子迅速划散',
        instruction: '转大火让白粥沸腾翻滚，倒入腌制好的肉碎，迅速用筷子划散成细小颗粒，煮约45秒至肉色变白。',
        timerSeconds: 60,
        chefTip: '肉碎入锅切忌整团不动，用筷子快速划散才能粒粒裹满米浆而不粘连成大块。'
      },
      {
        stepIndex: 5,
        title: '下菜心粒烫30秒即食',
        instruction: '最后下入沥干的菜心粒，轻推均匀烫煮30秒，调入食盐与几滴香油，菜心保持碧绿即刻熄火起锅。',
        timerSeconds: 40,
        chefTip: '绿叶蔬菜久煮发黄发苦，30秒利用滚粥余温刚好吃出菜心的天然甘甜脆爽。'
      }
    ],
    chefTips: [
      '手切前夹肉小肉碎，肉质鲜弹有嚼头。',
      '菜心切0.5cm小粒，吃起来清脆解腻。',
      '肉碎下锅大火划散45秒断生。',
      '菜心粒最后下锅烫30秒保持碧绿甘甜。'
    ],
    proTips: '菜心粒千万不可早下，出锅前最后30秒投入，关火利用砂锅余温烫熟，色泽翠绿如玉、入口清甜爽脆。',
    nutritionHighlights: '富含膳食纤维、维生素C与易消化猪肉蛋白，开胃健脾，是岭南最清润落胃的常备晨粥。'
  },
  {
    id: 'rec_congee_08',
    name: '鲜嫩猪肝枸杞叶养血生滚粥',
    subtitle: '嫩猪肝薄片滑弹鲜甜，枸杞叶清苦回甘，清肝明目温补气血',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '中等',
    servings: 2,
    calories: 228,
    protein: 21.0,
    fat: 5.5,
    carbs: 26.5,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['广式名吃', '清肝明目', '补铁养血', '夜宵滋润'],
    ingredients: [
      { name: '新鲜粉猪肝', amount: 120, unit: '克', type: 'main' },
      { name: '精选大米', amount: 70, unit: '克', type: 'main' },
      { name: '鲜枸杞嫩叶', amount: 40, unit: '克', type: 'main' },
      { name: '生姜细丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '宁夏枸杞子', amount: 8, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (5g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '猪肝切柳叶薄片排血水',
        instruction: '新鲜粉猪肝切成2毫米厚度的柳叶薄片，放入大碗中用流动的冷水轻轻抓洗漂洗3遍，倒去血水至肉色发粉白沥干。',
        timerSeconds: 300,
        chefTip: '切勿省去冲水排血这一步，血水不仅带来腥味，更会使煮出的粥汤发黑浑浊。'
      },
      {
        stepIndex: 2,
        title: '姜酒上浆去腥锁嫩',
        instruction: '漂净的猪肝片加入米酒、生抽、姜丝、白胡椒粉和淀粉抓匀上薄浆，最后封入半茶匙熟花生油静置10分钟。',
        timerSeconds: 600,
        chefTip: '猪肝切记不可腌制过早，下锅前10分钟拌浆最合适，盐分腌制过久会导致猪肝水分析出变硬。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火熬制稠滑白粥',
        instruction: '砂锅加水大沸后下入淘净大米，大火翻滚沸腾18分钟熬成浓稠白粥底备用。',
        timerSeconds: 1080,
        chefTip: '煮好的粥底米粒爆花汤白如浆，保持砂锅大火鼎沸状态准备生滚。'
      },
      {
        stepIndex: 4,
        title: '大火生滚猪肝30秒',
        instruction: '白粥大滚，撒入姜丝，将腌好的猪肝片迅速滑入锅中，用筷子顺时针快速划散，猪肝由粉红转为挺立微卷（约30秒）立即关火。',
        timerSeconds: 40,
        chefTip: '广府生滚猪肝精髓在“生滚不过火”，下锅30秒内关火，利用砂锅巨大的余温焖透，口感如鹅肝般嫩滑。'
      },
      {
        stepIndex: 5,
        title: '投入枸杞叶余温烫熟',
        instruction: '关火后立即投入新鲜枸杞嫩叶和枸杞子，拌入盐、白胡椒粉与香油，利用余温烫10秒，枸杞叶碧绿清爽即可出锅。',
        timerSeconds: 30,
        chefTip: '枸杞叶微带苦甘，千万不要久煮，滚粥余温十秒烫软，清苦中带出回甘最为爽利。'
      }
    ],
    chefTips: [
      '猪肝切柳叶薄片反复漂洗干净血水。',
      '生滚前10分钟再上浆，太早放盐肉质易老。',
      '大火生滚30秒立即关火，靠砂锅余温焖透。',
      '枸杞嫩叶关火后投入余热烫10秒，清苦回甘。'
    ],
    proTips: '猪肝下锅严格控制在30秒内关火，余温焖熟才能保持果冻般的滑弹嫩感；枸杞叶不可久煮，烫至断生最甘香。',
    nutritionHighlights: '猪肝含血红素铁与微量元素，配合枸杞叶的丰富黄酮类与维生素A，养血明目、缓解视力疲劳。'
  },
  {
    id: 'rec_congee_09',
    name: '咸鸭蛋黄水瓜肉片生滚粥',
    subtitle: '出油流沙咸蛋黄捣碎融入白粥，水瓜清甜软糯肉片嫩滑',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 245,
    protein: 15.8,
    fat: 7.5,
    carbs: 29.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['广式生滚', '咸蛋香浓', '水瓜鲜甜', '家常经典'],
    ingredients: [
      { name: '优质丝苗米', amount: 70, unit: '克', type: 'main' },
      { name: '熟咸鸭蛋黄', amount: 2, unit: '枚', type: 'main' },
      { name: '新鲜猪前腿肉片', amount: 80, unit: '克', type: 'main' },
      { name: '广式水瓜/棱角丝瓜', amount: 100, unit: '克', type: 'main' },
      { name: '鲜姜丝', amount: 8, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '生抽', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '花生油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '水瓜去皮切滚刀块',
        instruction: '水瓜（丝瓜）刨去外层硬棱与薄皮，切成均匀滚刀厚块；瘦肉顺丝切薄肉片，加姜丝、少许生抽与淀粉抓匀上浆。',
        timerSeconds: 240,
        chefTip: '水瓜切滚刀厚块耐煮，煮透后外软内糯，甘甜的丝瓜汁融入咸香粥底相得益彰。'
      },
      {
        stepIndex: 2,
        title: '咸蛋黄压碎小火炒沙',
        instruction: '熟咸蛋黄用叉子压成细碎颗粒，锅中放半勺花生油，小火将蛋黄碎煸炒出金黄细腻的丰富泡沫（沙化出香）。',
        timerSeconds: 120,
        chefTip: '咸蛋黄先用油小火炒出流沙再融入粥里，整锅粥呈现诱人的金黄色泽，香气浓烈成倍提升。'
      },
      {
        stepIndex: 3,
        title: '金沙融入大火煲粥底',
        instruction: '砂锅水滚下米，熬煮15分钟至米粒碎化开花，将炒好的金沙咸蛋黄倒入粥底中搅匀，化出金红底色。',
        timerSeconds: 900,
        chefTip: '咸蛋黄带有天然咸味，此时粥底无需加盐，避免过咸。'
      },
      {
        stepIndex: 4,
        title: '水瓜肉片生滚断生',
        instruction: '大火保持沸腾，先下水瓜块煮1分半钟至瓜肉变透明软糯，再倒入腌好的肉片快速划散，滚煮40秒。',
        timerSeconds: 150,
        chefTip: '水瓜先煮透释放清甜，肉片后下保持嫩滑不柴。'
      },
      {
        stepIndex: 5,
        title: '胡椒提鲜起锅上桌',
        instruction: '尝一下咸淡补少许盐，撒现磨白胡椒粉与葱花，金黄油润的水瓜咸蛋肉片粥即可盛出。',
        timerSeconds: 30,
        chefTip: '白胡椒粉是压制蛋黄腥气、提振整碗粥鲜度的点睛之笔。'
      }
    ],
    chefTips: [
      '水瓜切滚刀厚块，久煮软糯不化水。',
      '咸蛋黄压碎小火炒出金黄泡沙，粥色油润金黄。',
      '水瓜先煮1分半钟透明后再下肉片。',
      '咸蛋黄带盐味，出锅前先尝再酌量加盐。'
    ],
    proTips: '咸蛋黄用花生油小火炒出沙沙的泡沫再化入粥底，金红诱人、香飘满屋；水瓜清甜刚好中和蛋黄的油润。',
    nutritionHighlights: '兼具水瓜的丰富水溶性维生素与咸蛋黄的浓郁卵磷脂，甘润不腻，老少咸宜。'
  },
  {
    id: 'rec_congee_10',
    name: '芥菜丝鲜肉片生滚清润粥',
    subtitle: '微苦芥菜开胃利膈，鲜肉片软嫩润滑，苦甘回甘清热生津',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 12,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 210,
    protein: 15.0,
    fat: 4.5,
    carbs: 28.5,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['广式传统', '清热败火', '清爽开胃', '生津止渴'],
    ingredients: [
      { name: '大叶芥菜/水芥菜', amount: 100, unit: '克', type: 'main' },
      { name: '优质丝苗米', amount: 70, unit: '克', type: 'main' },
      { name: '新鲜猪梅花肉/瘦肉片', amount: 100, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 10, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '芥菜洗净切细丝拔苦',
        instruction: '大叶苦芥菜洗净，摘去老筋切成细丝，用淡盐水稍微抓洗沥干水分备用。',
        timerSeconds: 180,
        chefTip: '淡盐水抓洗一下能去掉芥菜过于辛烈冲鼻的苦涩味，保留清凉回甘的独特草本风味。'
      },
      {
        stepIndex: 2,
        title: '瘦肉切薄片姜丝上浆',
        instruction: '梅花肉切均匀薄肉片，加姜丝、少许生抽、淀粉与1勺水抓匀腌制上浆，静置10分钟。',
        timerSeconds: 300,
        chefTip: '选用带一点点油花的梅花肉最嫩，久煮不柴。'
      },
      {
        stepIndex: 3,
        title: '明火大火煲滚稠白粥',
        instruction: '砂锅足水煮沸，下入大米大火煲煮18分钟至米汤浓稠、米花爆开如脂。',
        timerSeconds: 1080,
        chefTip: '一定要大火煲出浓厚米浆，米脂的醇厚能完美包裹芥菜的微苦。'
      },
      {
        stepIndex: 4,
        title: '肉片大火生滚滑散',
        instruction: '粥底大沸，倒入腌好的肉片迅速划散，滚煮40秒至肉片变粉白断生。',
        timerSeconds: 45,
        chefTip: '肉片刚断生肉汁最饱满，切勿久煮。'
      },
      {
        stepIndex: 5,
        title: '芥菜丝下锅烫熟起锅',
        instruction: '放入切好的芥菜丝，大火推匀滚煮30秒，调入盐、白胡椒粉与香油，芥菜转深绿即可关火出锅。',
        timerSeconds: 30,
        chefTip: '芥菜丝只需烫30秒，保持爽脆鲜嫩，久煮叶绿素被破坏发黄变软。'
      }
    ],
    chefTips: [
      '芥菜切细丝淡盐水抓洗，去冲涩留回甘。',
      '选梅花肉切薄片，口感更油润多汁。',
      '肉片滚煮40秒断生即熟。',
      '芥菜丝入锅30秒立即起锅，脆嫩清苦。'
    ],
    proTips: '芥菜微苦却能下气消食，出锅前30秒下锅快汆，微苦后劲回甘极快，是两广地区经典的开胃解热之作。',
    nutritionHighlights: '富含芥子甙与维生素A、C，能生津润燥、宣肺豁痰、消暑清热。'
  },
  {
    id: 'rec_congee_11',
    name: '鲜滑鲩鱼片生姜丝生滚粥',
    subtitle: '活杀脆鲩鱼双飞薄片，晶莹剔透，姜丝辟腥生滚鲜滑弹牙',
    region: '广东顺德',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '中等',
    servings: 2,
    calories: 220,
    protein: 20.5,
    fat: 4.8,
    carbs: 25.5,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['广式经典', '鱼肉嫩滑', '无腥清甜', '原汁原味'],
    ingredients: [
      { name: '活杀草鱼/鲩鱼鱼腩肉', amount: 150, unit: '克', type: 'main' },
      { name: '优质丝苗香米', amount: 70, unit: '克', type: 'main' },
      { name: '鲜老生姜 (切极细姜丝)', amount: 15, unit: '克', type: 'secondary' },
      { name: '鲜细葱花', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东双蒸米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '纯正花生油', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '优质白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鲩鱼片双飞薄片排刺',
        instruction: '选用鲜活鲩鱼脊肉或鱼腩，去净黑膜，斜刀45度片出厚约1.5毫米的“双飞蝴蝶片”，吸干表面水分。',
        timerSeconds: 300,
        chefTip: '双飞片第一刀不切断第二刀切断，摊开如蝴蝶展翅，受热面大且能斩断小细刺。'
      },
      {
        stepIndex: 2,
        title: '薄浆油封极致锁鲜',
        instruction: '鱼片加米酒、白胡椒粉、极少许盐和淀粉抓匀上薄浆，淋入半勺花生油封油静置5分钟。',
        timerSeconds: 300,
        chefTip: '淀粉切不可多，多了会成糊粉汤；花生油锁水能让鱼片入沸水后迅速滑开、肉质弹韧。'
      },
      {
        stepIndex: 3,
        title: '砂锅明火煮沸稠白粥',
        instruction: '砂锅沸水下米，中大火慢煲20分钟熬出细腻香浓的白玉稠粥底。',
        timerSeconds: 1200,
        chefTip: '粥底必须煮得够稠，过稀无法托住鱼片，鱼片受热不均易烂。'
      },
      {
        stepIndex: 4,
        title: '滚沸下姜丝鱼片25秒',
        instruction: '将大量细姜丝先投入滚沸粥底煮15秒激出姜香，随后将鱼片均匀撒入锅中，用筷子快速划散，鱼肉变白卷曲（约25秒）立刻关火。',
        timerSeconds: 40,
        chefTip: '生滚鲩鱼片不可超过30秒，关火后砂锅余温还会继续加热，刚断生的鱼片如凝脂豆腐般嫩滑。'
      },
      {
        stepIndex: 5,
        title: '撒葱白胡椒趁滚烫起锅',
        instruction: '盛入瓷碗，撒入鲜葱花与现磨白胡椒粉，淋入几滴香油，趁滚烫品尝极鲜原味。',
        timerSeconds: 20,
        chefTip: '吃鱼片粥要趁热享用，冷了鱼肉出水鲜度大打折扣。'
      }
    ],
    chefTips: [
      '斜刀切1.5毫米双飞蝴蝶薄片。',
      '极薄淀粉加花生油封锁鱼肉水分。',
      '大量细姜丝先入滚粥激发出醇香。',
      '大火生滚25秒立即熄火，鱼肉滑嫩如雪。'
    ],
    proTips: '顺德鱼片生滚重在“鲜、薄、滚、嫩”，大量细生姜丝先激出香气，鱼片入锅25秒挺立断生即离火。',
    nutritionHighlights: '富含高生物价鱼肉蛋白与不饱和脂肪酸，低脂高蛋白，清淡养胃易吸收。'
  },
  {
    id: 'rec_congee_12',
    name: '猪腰麦穗花刀生滚补虚粥',
    subtitle: '精修麦穗花刀无臊气，滚水烫卷脆爽弹牙，温肾益精滋补晨粥',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    difficulty: '高阶精烹',
    servings: 2,
    calories: 235,
    protein: 22.0,
    fat: 5.8,
    carbs: 25.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['广式名吃', '温肾补虚', '麦穗花刀', '脆爽无臊'],
    ingredients: [
      { name: '新鲜猪腰', amount: 1, unit: '对 (约150g)', type: 'main' },
      { name: '精选大米', amount: 70, unit: '克', type: 'main' },
      { name: '老生姜厚片与细丝', amount: 15, unit: '克', type: 'secondary' },
      { name: '香葱花与香菜', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒/高度白酒', amountText: '2 汤匙 (20ml)', baseAmount: 2, unit: '汤匙', isPantryStaple: true },
      { name: '生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (5g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (4g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '剖切猪腰彻底片去腰臊',
        instruction: '猪腰横向对半片开，用锋利刀具将内部白色的肾盂与淡红色的筋膜彻底片除干净，只留外层暗红色净腰肉。',
        timerSeconds: 300,
        chefTip: '腰臊（白色筋膜腺体）是腥臊味的源头，必须片得干干净净、一丝不留，是成败的关键。'
      },
      {
        stepIndex: 2,
        title: '精改麦穗花刀与姜酒浸泡',
        instruction: '腰肉内侧先切密集斜纹不切断，再呈直角纵向切纹，每隔3刀切断成一块麦穗花块；加葱姜片、米酒抓洗浸泡5分钟沥干。',
        timerSeconds: 400,
        chefTip: '麦穗刀深度为肉厚的五分之四，遇滚汤会迅速受热卷曲如成熟麦穗，受热极均匀脆嫩。'
      },
      {
        stepIndex: 3,
        title: '薄浆腌渍与大火煲粥底',
        instruction: '腰花加姜丝、生抽、白胡椒粉、淀粉抓拌薄浆；砂锅大火将大米熬至米花开满、浓稠顺滑。',
        timerSeconds: 1080,
        chefTip: '腰花质地脆嫩，薄浆能在表面形成微膜，防止内部水分流失变干硬。'
      },
      {
        stepIndex: 4,
        title: '大火沸粥下腰花生滚30秒',
        instruction: '大火使粥沸腾翻白浪，倒入腌好的腰花块，迅速划散，腰花卷曲成麦穗状且断生挺括（约30秒）立刻停火。',
        timerSeconds: 40,
        chefTip: '生滚腰花切记不可超时，30秒关火靠余温烫透，口感脆弹如海参，多滚10秒就变韧发硬。'
      },
      {
        stepIndex: 5,
        title: '撒白胡椒香麻油起锅',
        instruction: '调入盐、大量现磨白胡椒粉、葱花与香油拌匀，香气扑鼻即可装碗趁热享用。',
        timerSeconds: 20,
        chefTip: '腰花粥白胡椒粉用量可稍大，既辟异味又温中下气。'
      }
    ],
    chefTips: [
      '内部白色腰臊必须片除得一干二净。',
      '麦穗刀切深至4/5，下锅瞬间卷曲受热均匀。',
      '大火生滚严格控制在30秒内关火。',
      '加多白胡椒粉温中散寒、提香增鲜。'
    ],
    proTips: '彻底片净白色腰臊加姜酒浸泡彻底去异味；麦穗花刀受热均匀，大火生滚30秒卷曲断生即起锅，脆嫩弹牙。',
    nutritionHighlights: '含丰富铁、锌、核黄素等微量元素，中医认为有温肾补虚、固本强身之效。'
  },
  {
    id: 'rec_congee_13',
    name: '手打马蹄鲜猪肉丸浓香晨粥',
    subtitle: '新鲜脆马蹄碎粒撞入紧实前尖肉糜，肉丸多汁弹牙脆甜开胃',
    region: '广东',
    cookingMethod: '生滚慢熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: '简单',
    servings: 2,
    calories: 260,
    protein: 17.5,
    fat: 7.2,
    carbs: 31.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['广式早茶', '肉丸弹脆', '马蹄清甜', '全家皆爱'],
    ingredients: [
      { name: '新鲜前夹瘦肉 (三肥七瘦)', amount: 150, unit: '克', type: 'main' },
      { name: '削皮鲜马蹄/荸荠', amount: 4, unit: '颗', type: 'main' },
      { name: '优质丝苗香米', amount: 80, unit: '克', type: 'main' },
      { name: '生姜末', amount: 8, unit: '克', type: 'secondary' },
      { name: '细香葱碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '蚝油', amountText: '半茶匙 (5ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (6g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻纯香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '马蹄切脆丁吸干水分',
        instruction: '新鲜荸荠洗净削皮，切成约绿豆大小的清脆小粒，用厨房纸巾吸去多余水分备用。',
        timerSeconds: 180,
        chefTip: '马蹄不要剁得太碎成泥，保留细小颗粒才能在咀嚼弹嫩肉丸时产生脆甜爆汁感。'
      },
      {
        stepIndex: 2,
        title: '肉馅顺时针打水上劲',
        instruction: '前夹肉剁成肉糜，加入生抽、蚝油、生姜末、盐和淀粉，分次加入2汤匙清水，顺时针大力搅拌至肉胶起黏拉丝。',
        timerSeconds: 300,
        chefTip: '打水搅至起胶是肉丸口感Q弹多汁的诀窍，肉糜吃透水分后肉丸绝不松散干硬。'
      },
      {
        stepIndex: 3,
        title: '拌入马蹄丁虎口挤丸',
        instruction: '将马蹄碎倒入肉馅中拌匀，抓起肉馅在碗中摔打数次增加弹性，通过虎口挤出直径约2.5cm的饱满圆肉丸。',
        timerSeconds: 240,
        chefTip: '摔打肉馅能进一步排出空气增加致密弹性，虎口挤丸圆润受热均匀。'
      },
      {
        stepIndex: 4,
        title: '砂锅大沸下肉丸煲熟',
        instruction: '砂锅熬好开花白粥底，大火沸滚状态下逐颗滑入肉丸，转中火滚煮3分钟至肉丸全部浮起变白熟透。',
        timerSeconds: 200,
        chefTip: '肉丸要沸水下锅，表层淀粉蛋白质瞬间受热定型，锁住内部肉汁。'
      },
      {
        stepIndex: 5,
        title: '调味撒葱出锅品尝',
        instruction: '肉丸浮起后调入少许盐、白胡椒粉与香油拌匀，撒入绿葱花关火出锅。',
        timerSeconds: 30,
        chefTip: '马蹄自带甘甜汁水，肉丸咬开鲜汁四溢，白胡椒提味去腥。'
      }
    ],
    chefTips: [
      '选用三肥七瘦前夹肉，手工剁成肉糜。',
      '马蹄切绿豆粒大碎丁，保留脆爽口感。',
      '肉馅分次打水并反复摔打，弹牙多汁。',
      '大火沸滚下肉丸，滚煮3分钟浮起即熟。'
    ],
    proTips: '前夹肉顺时针打足水分起胶后拌入马蹄碎，大火下锅3分钟浮起即熟，丸体弹牙紧致、马蹄爽脆爆汁。',
    nutritionHighlights: '马蹄清热化痰，搭配优质猪肉蛋白与碳水，老少咸宜，适宜做清晨元气早餐。'
  },
  {
    id: 'rec_congee_14',
    name: '咸鸡生姜丝砂锅温补生滚粥',
    subtitle: '传统广式古法腌咸鸡，骨肉咸香入骨，姜丝温中驱寒醇厚老火',
    region: '广东',
    cookingMethod: '生滚慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    difficulty: '简单',
    servings: 2,
    calories: 275,
    protein: 19.0,
    fat: 7.8,
    carbs: 31.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['广式传统', '古法咸鸡', '温中驱寒', '咸香开胃'],
    ingredients: [
      { name: '广式腌咸鸡肉块 (去皮斩块)', amount: 150, unit: '克', type: 'main' },
      { name: '优质丝苗大米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜 (切大量细丝)', amount: 20, unit: '克', type: 'secondary' },
      { name: '鲜嫩香葱段', amount: 15, unit: '克', type: 'secondary' },
      { name: '枸杞子', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '花生油', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '自制/现成咸鸡斩小块',
        instruction: '取粗盐花椒擦匀鸡肉冷藏腌制2天的咸鸡，温水洗净表面多余盐粒，剁成约2.5cm的小肉块。',
        timerSeconds: 300,
        chefTip: '咸鸡经过粗盐腌透，肉质紧密收缩，久煲不柴，骨髓中的咸香滋味在煲煮中源源不断析出。'
      },
      {
        stepIndex: 2,
        title: '老姜切足量细丝去腥',
        instruction: '选用辛辣温补的带皮老姜，切出满满一小碟细姜丝备用。',
        timerSeconds: 180,
        chefTip: '咸鸡粥生姜丝必须放足，姜丝能激发鸡肉风味，同时祛除禽肉异味，温中暖胃。'
      },
      {
        stepIndex: 3,
        title: '咸鸡与大米同煲入味',
        instruction: '砂锅水滚，先下入咸鸡块、姜丝与淘净大米，大火翻滚沸腾15分钟，转中火煲慢煮18分钟至米花大开。',
        timerSeconds: 1200,
        chefTip: '咸鸡不同于滑鸡，咸鸡需随米同煮，让咸鲜风味完全溶入米浆底味中。'
      },
      {
        stepIndex: 4,
        title: '调和咸淡慢火出米油',
        instruction: '待粥浓稠，尝一下咸淡（咸鸡本身带咸通常无需加盐），撒入现磨白胡椒粉与枸杞。',
        timerSeconds: 180,
        chefTip: '咸鸡会释放咸味，切记千万不要盲目提前加盐，煲透后再尝汤定味。'
      },
      {
        stepIndex: 5,
        title: '撒葱花淋香油起锅',
        instruction: '撒入葱白与葱花，淋几滴芝麻纯香油，加盖关火焖半分钟即可出锅享用。',
        timerSeconds: 30,
        chefTip: '关火焖半分钟能让葱香在密闭余热中渗入粥底。'
      }
    ],
    chefTips: [
      '咸鸡温水洗去浮盐，切小块方便出味。',
      '大量老生姜丝随鸡块一同入锅煲煮。',
      '咸鸡自带盐味，煮好后再品尝决定是否补盐。',
      '米花与鸡肉同煲30分钟，汤色白润咸香。'
    ],
    proTips: '咸鸡需与大米同时下锅慢熬，让咸香渗透到每一粒爆开的米花中；老姜丝放足，温中驱寒、香气浓烈。',
    nutritionHighlights: '咸鸡温补气血，老姜散寒祛湿，在秋冬清晨或受凉感冒初起时食用，能迅速温阳暖胃。'
  },
  {
    id: 'rec_congee_15',
    name: '鲜鸽脯肉末枸杞子温润粥',
    subtitle: '一鸽胜九鸡，鲜鸽脯肉质细嫩温补，枸杞点缀明目益气',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '简单',
    servings: 2,
    calories: 230,
    protein: 21.5,
    fat: 5.0,
    carbs: 26.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['广式药膳', '一鸽胜九鸡', '高蛋白滋补', '术后复原'],
    ingredients: [
      { name: '新鲜乳鸽脯肉', amount: 120, unit: '克', type: 'main' },
      { name: '优质丝苗米', amount: 70, unit: '克', type: 'main' },
      { name: '宁夏优质枸杞子', amount: 15, unit: '粒', type: 'secondary' },
      { name: '生姜切细末', amount: 8, unit: '克', type: 'secondary' },
      { name: '鲜葱花', amount: 10, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '料酒', amountText: '1 茶匙 (5ml)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '乳鸽胸肉切细碎肉末',
        instruction: '新鲜乳鸽取两片纯脯肉，剔除筋膜切成小细丁或粗肉末，加入姜末、料酒、生抽和淀粉抓匀上浆。',
        timerSeconds: 300,
        chefTip: '乳鸽肉纤维极细，切粗肉末比整片更易在滚粥中均匀受热熟透，口感细腻。'
      },
      {
        stepIndex: 2,
        title: '砂锅明火熬出稠润粥底',
        instruction: '砂锅沸水下淘洗大米，大火滚沸翻滚18分钟煲成浓郁顺滑的白粥底。',
        timerSeconds: 1080,
        chefTip: '鸽肉清鲜，粥底务必煲足火候，出厚厚米油更能托出鸽肉甘润。'
      },
      {
        stepIndex: 3,
        title: '大火鼎沸下滑散鸽肉末',
        instruction: '砂锅大火翻滚沸腾，倒入腌好的乳鸽肉末，用筷子迅速划散成细碎小颗粒，大火煮约50秒。',
        timerSeconds: 60,
        chefTip: '鸽脯肉质比鸡胸更为娇嫩，大火划散50秒断生即可，煮久易柴。'
      },
      {
        stepIndex: 4,
        title: '下枸杞子提色回甘',
        instruction: '投入洗净的枸杞子轻推均匀，调入食盐与白胡椒粉，关火加盖焖1分钟。',
        timerSeconds: 60,
        chefTip: '枸杞借关火后的余温烫软，清甜释放且不会变酸。'
      },
      {
        stepIndex: 5,
        title: '点缀葱花香油出锅',
        instruction: '撒入鲜葱花，淋几滴芝麻纯香油，装入汤碗温热享用。',
        timerSeconds: 20,
        chefTip: '温热食用最利于脾胃吸收鸽肉营养。'
      }
    ],
    chefTips: [
      '乳鸽脯肉剔除白筋切粗肉末。',
      '生姜末料酒抓匀薄浆锁住肉汁。',
      '大火生滚50秒断生立刻停火。',
      '枸杞关火焖1分钟清甜不酸。'
    ],
    proTips: '乳鸽脯肉低脂高蛋白，切粗肉末上薄浆后大火生滚50秒断生即可，肉汁饱满、温润平补。',
    nutritionHighlights: '民间素有“一鸽胜九鸡”之誉，鸽肉富含优质支链氨基酸与血红素铁，是术后复原、体虚乏力者的滋补上品。'
  },
  {
    id: 'rec_congee_16',
    name: '润燥鲜鸭血嫩豆腐碎生滚粥',
    subtitle: '嫩滑鸭血切丁如红玉，北豆腐切碎吸饱清鲜米浆，清润下火',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 12,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 195,
    protein: 15.0,
    fat: 4.0,
    carbs: 26.0,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['清热解毒', '润肠排毒', '滑润爽口', '素朴家常'],
    ingredients: [
      { name: '新鲜纯鸭血', amount: 120, unit: '克', type: 'main' },
      { name: '嫩豆腐/南豆腐', amount: 100, unit: '克', type: 'main' },
      { name: '精选大米', amount: 70, unit: '克', type: 'main' },
      { name: '老生姜细丝', amount: 10, unit: '克', type: 'secondary' },
      { name: '细香葱与芹菜碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '料酒 (焯水用)', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '纯芝麻香油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '鸭血豆腐切小指甲丁',
        instruction: '新鲜鸭血切成1.5cm的小方丁，嫩豆腐同样切丁；小锅烧热水加料酒和少许盐，下鸭血丁微沸焯水1分钟捞出沥水。',
        timerSeconds: 180,
        chefTip: '鸭血切块后微盐开水焯烫1分钟，既能去净血腥味，又能让鸭血组织更坚挺不易在粥中煮碎。'
      },
      {
        stepIndex: 2,
        title: '砂锅大火煲煮顺滑白粥',
        instruction: '砂锅注入清水烧沸，下入大米大火翻滚熬制18分钟，煮至米粒裂开成洁白米浆。',
        timerSeconds: 1080,
        chefTip: '一定要煮出稠白粥底，豆腐鸭血水分多，稀粥加入豆腐后会更稀。'
      },
      {
        stepIndex: 3,
        title: '下姜丝与鸭血豆腐同滚',
        instruction: '转中大火让粥滚沸，放入大量姜丝，下入焯好的鸭血丁与嫩豆腐块，用勺底轻推晃锅，慢滚3分钟让豆腐吸足米汤。',
        timerSeconds: 180,
        chefTip: '不要用勺子猛搅，用勺背轻轻推底防止糊底即可，保护豆腐鸭血块完整。'
      },
      {
        stepIndex: 4,
        title: '调味提鲜芹菜出香',
        instruction: '调入生抽、盐与现磨白胡椒粉，撒入切碎的芹菜末与香葱末，淋入芝麻香油。',
        timerSeconds: 60,
        chefTip: '加少许水芹菜末是潮广两地的独门配方，芹菜独特的清香能瞬间提升素淡粥品的层次。'
      },
      {
        stepIndex: 5,
        title: '起锅装碗温食润燥',
        instruction: '关火盛入大碗，红白相间如宝石凝脂，温润可口。',
        timerSeconds: 20,
        chefTip: '红鸭血与白豆腐口感滑糯双绝，清热降噪。'
      }
    ],
    chefTips: [
      '鸭血加少许盐和料酒微沸焯水1分钟定型去腥。',
      '勺背轻推锅底，避免搅碎嫩豆腐。',
      '加入芹菜碎提香是两广民间点睛妙法。',
      '出锅多撒现磨白胡椒粉温中提味。'
    ],
    proTips: '鸭血微盐焯烫后定型不碎无腥气，与嫩豆腐同滚3分钟吸透米浆，撒芹菜末白胡椒，清爽嫩滑。',
    nutritionHighlights: '鸭血富含吸收率极高的血红素铁与微量元素，豆腐提供丰富大豆蛋白与钙质，清肺润燥排毒。'
  },
  {
    id: 'rec_congee_17',
    name: '鲜粉肠白灼生姜丝生滚粥',
    subtitle: '鲜嫩粉肠切段微卷，粉嫩带脂粉浆饱满，姜丝葱花激荡甘香',
    region: '广东',
    cookingMethod: '生滚',
    prepTimeMinutes: 20,
    cookTimeMinutes: 28,
    difficulty: '中等',
    servings: 2,
    calories: 265,
    protein: 16.0,
    fat: 9.5,
    carbs: 27.5,
    ratio: '1:10 (米70g:水700ml)',
    tags: ['广式名吃', '粉肠脆嫩', '脂香浓郁', '早茶招牌'],
    ingredients: [
      { name: '新鲜优质猪粉肠', amount: 150, unit: '克', type: 'main' },
      { name: '精选大米', amount: 70, unit: '克', type: 'main' },
      { name: '老生姜 (切极细姜丝)', amount: 15, unit: '克', type: 'secondary' },
      { name: '鲜小葱碎', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '广东米酒', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '特级生抽', amountText: '1 汤匙 (10ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '玉米淀粉', amountText: '1 茶匙 (5g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '芝麻油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '辨识选材与粉肠温和清洗',
        instruction: '挑选肠体饱满内部带淡黄粉浆的新鲜粉肠，洗去表面粘液（切忌过分挤压内部粉浆），切成约3cm的长段。',
        timerSeconds: 300,
        chefTip: '粉肠内部的“粉”是精华所在，切勿粗暴抓洗把粉浆洗空，只需清洗干净外部油脂粘液。'
      },
      {
        stepIndex: 2,
        title: '米酒姜丝淀粉抓浆',
        instruction: '切段的粉肠加米酒、生抽、姜丝、白胡椒粉与淀粉抓拌均匀，最后封入半茶匙花生油腌制10分钟。',
        timerSeconds: 600,
        chefTip: '薄薄一层淀粉保护切口，防止下锅沸煮时内部粉浆流失在汤里。'
      },
      {
        stepIndex: 3,
        title: '砂锅明火煲浓白粥底',
        instruction: '砂锅水沸下大米，大火滚沸18分钟，熬至汤稠若脂、米花爆开的生滚粥底。',
        timerSeconds: 1080,
        chefTip: '粉肠需要剧烈的高温瞬间定型收口，粥底必须大火沸腾。'
      },
      {
        stepIndex: 4,
        title: '大火生滚粉肠45秒',
        instruction: '大火沸腾状态下，投入大量细姜丝与腌好的粉肠段，用筷子迅速推散，粉肠两端受热收缩卷曲，煮约45秒关火。',
        timerSeconds: 60,
        chefTip: '粉肠生滚时间控制在45秒内，关火借余热烫熟，外皮爽脆内里粉润，久煮则韧如皮筋。'
      },
      {
        stepIndex: 5,
        title: '撒葱花白胡椒装碗',
        instruction: '调入盐、白胡椒粉与香油，撒入葱花起锅，盛碗趁热品尝脆弹粉香。',
        timerSeconds: 20,
        chefTip: '白胡椒与生姜能完美带出粉肠特有的甘香。'
      }
    ],
    chefTips: [
      '选带粉浆的优质粉肠，勿过度搓洗内壁。',
      '切口薄淀粉封口防止粉浆流失。',
      '大火生滚45秒收口卷曲立即关火。',
      '趁热大口食用，皮脆粉糯甘香四溢。'
    ],
    proTips: '选带黄粉浆的新鲜粉肠，薄淀粉封切口防流浆，大火生滚45秒两端收缩即刻熄火，爽脆脆弹、脂香满口。',
    nutritionHighlights: '含丰富蛋白质、钙、磷等矿物质，粉浆细腻易消化，是两广早茶经久不衰的经典风味。'
  },
  {
    id: 'rec_congee_18',
    name: '铁棍淮山药排骨浓稠香米粥',
    subtitle: '河南焦作铁棍山药粉糯如栗，精修猪肋排骨肉酥软汤浓甘润',
    region: '广东/河南',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: '简单',
    servings: 2,
    calories: 290,
    protein: 18.5,
    fat: 9.0,
    carbs: 34.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['健脾养胃', '老火慢煲', '温和滋补', '老少咸宜'],
    ingredients: [
      { name: '新鲜猪精排骨', amount: 180, unit: '克', type: 'main' },
      { name: '正宗温县铁棍山药', amount: 150, unit: '克', type: 'main' },
      { name: '东北珍珠米', amount: 80, unit: '克', type: 'main' },
      { name: '老生姜片', amount: 10, unit: '克', type: 'secondary' },
      { name: '宁夏枸杞', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '料酒 (焯水用)', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '1 茶匙 (4g)', baseAmount: 1, unit: '茶匙', isPantryStaple: true },
      { name: '优质白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '葱花', amountText: '适量 (10g)', baseAmount: 1, unit: '汤匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '小排剁小块焯水排血污',
        instruction: '精选猪肋排剁成约2cm的小骨块，冷水下锅加入料酒与姜片大火烧开，撇去浮沫焯水2分钟捞出温水冲净。',
        timerSeconds: 300,
        chefTip: '排骨必须冷水下锅焯水，才能将骨髓深处的血沫完全逼出，煮出的粥汤清白纯正。'
      },
      {
        stepIndex: 2,
        title: '铁棍山药去皮切滚刀块',
        instruction: '戴手套将铁棍山药削皮，切成约3cm滚刀厚块，浸泡在清水中滴少许白醋防止氧化发黑。',
        timerSeconds: 240,
        chefTip: '山药黏液含皂角素致敏易发痒，务必佩戴手套；加少许白醋浸泡能保持山药洁白如玉。'
      },
      {
        stepIndex: 3,
        title: '排骨先煲熬出肉香骨汤',
        instruction: '砂锅加足量清水大火烧沸，下入焯好的小排骨与姜片，中火先煲煮15分钟使肉质微烂、释放肉香骨汤。',
        timerSeconds: 900,
        chefTip: '排骨耐煮，先于大米煲煮15分钟，可以让肉质松软且肉香融进汤水，再下米更易粘糯。'
      },
      {
        stepIndex: 4,
        title: '下大米与山药慢火同煲',
        instruction: '放入淘洗好的大米与山药块，大火滚煮沸腾后转中小火保持微滚状态慢煲25分钟，米粒化为米浆，山药酥软粉糯。',
        timerSeconds: 1500,
        chefTip: '铁棍山药富含多糖与淀粉，与大米同煲会释放大量粘稠胶质，使整锅粥天然浓稠无比。'
      },
      {
        stepIndex: 5,
        title: '撒枸杞调盐出锅温食',
        instruction: '出锅前5分钟调入食用盐与白胡椒粉，撒入洗净的枸杞与嫩葱花，关火焖2分钟即可起锅。',
        timerSeconds: 120,
        chefTip: '排骨肉香醇厚，山药粉糯如板栗，一碗下肚暖流遍布全身。'
      }
    ],
    chefTips: [
      '排骨冷水下锅彻底焯去骨血沫。',
      '削山药戴手套防手痒，泡淡醋水防发黑。',
      '排骨先煲15分钟出骨香再下大米山药。',
      '中小火慢煲25分钟，山药粉糯米浆粘唇。'
    ],
    proTips: '排骨先煮15分钟出肉汤，再加大米与山药同煲25分钟，山药多糖完全溶入米脂中，稠滑粉糯、健脾养胃。',
    nutritionHighlights: '铁棍山药富含黏液蛋白与淀粉酶，排骨提供优质蛋白与钙质，补中益气、滋养肠胃，是脾胃虚弱者极佳的食疗方。'
  },
  {
    id: 'rec_congee_19',
    name: '顺德水牛初乳甜润水牛奶粥',
    subtitle: '顺德大良特产水牛奶，乳脂丰厚奶皮凝脂，奶香米香甜润入心',
    region: '广东顺德',
    cookingMethod: '温火慢煨',
    prepTimeMinutes: 10,
    cookTimeMinutes: 25,
    difficulty: '简单',
    servings: 2,
    calories: 260,
    protein: 14.0,
    fat: 8.5,
    carbs: 33.0,
    ratio: '水米1:8煲稠，后兑1:1纯水牛奶',
    tags: ['顺德甜品', '水牛奶香', '双层奶皮', '温润养颜'],
    ingredients: [
      { name: '顺德新鲜全脂水牛奶', amount: 300, unit: 'ml', type: 'main' },
      { name: '优质丝苗香米', amount: 60, unit: '克', type: 'main' },
      { name: '太古纯正单晶冰糖', amount: 25, unit: '克', type: 'secondary' },
      { name: '干桂花', amount: 1, unit: '克 (点缀提香)', type: 'secondary' }
    ],
    seasonings: [
      { name: '食用精盐', amountText: '极微量 (0.5g 激发甜香)', baseAmount: 0.5, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '少水慢煲浓稠白粥底',
        instruction: '砂锅中加入450ml清水大火煮沸，倒入洗净大米，中小火慢熬20分钟，熬成米粒碎化、水米交融的极浓稠白粥底。',
        timerSeconds: 1200,
        chefTip: '前期水量要少，煮成浓缩稠粥，为后续倒入大量鲜水牛奶预留空间。'
      },
      {
        stepIndex: 2,
        title: '倒入顺德新鲜水牛奶',
        instruction: '将火调至微小微温状态，缓缓倒入300ml顺德水牛奶，顺时针轻轻搅匀，让奶液与浓稠米浆融为一体。',
        timerSeconds: 120,
        chefTip: '水牛奶乳脂含量高达8%以上，倒入时必须调小火，绝不可大火狂滚，否则高温破坏蛋白质形成酸乳絮状物。'
      },
      {
        stepIndex: 3,
        title: '小火微滚融化冰糖',
        instruction: '加入25g单晶冰糖与一小撮指尖细盐（0.5g），保持锅边微滚冒小泡状态小火慢煨3分钟，边煮边顺时针搅动直至冰糖完全溶化。',
        timerSeconds: 180,
        chefTip: '“要想甜加点盐”，指甲盖大小的微盐能极大提振奶香与甜味的醇厚度，甜而不腻。'
      },
      {
        stepIndex: 4,
        title: '关火凝结丰厚奶皮',
        instruction: '煮至奶香四溢、粥体顺滑微稠即刻关火，静置离火静置3分钟，粥面遇冷空气会迅速凝结出一层厚厚的油润双皮奶皮。',
        timerSeconds: 180,
        chefTip: '关火静置静止是出厚奶皮的关键，厚厚一层奶皮是水牛奶品质极致的证明。'
      },
      {
        stepIndex: 5,
        title: '撒干桂花起锅装碗',
        instruction: '在凝结的奶皮上轻轻洒下少许金黄干桂花，清香扑鼻即可温食。',
        timerSeconds: 20,
        chefTip: '干桂花的清幽花香刚好化解高乳脂水牛奶的腻感，余韵悠长。'
      }
    ],
    chefTips: [
      '前期少水熬出浓白稠粥底备用。',
      '水牛奶倒入后必须调极小火，切忌大火狂滚。',
      '加入指尖极微量细盐，提香去腻甜味更纯。',
      '离火静置3分钟，粥面自然结出厚滑奶皮。'
    ],
    proTips: '水牛奶乳脂丰厚，必须微火慢煨绝不大沸以防蛋白质凝结析出；关火离灶静置3分钟，表面自然凝出金牌双层厚奶皮。',
    nutritionHighlights: '水牛奶含丰富天然乳钙、优质酪蛋白与维生素A，养颜润肤、安神助眠，是顺德老字号甜水一绝。'
  },
  {
    id: 'rec_congee_20',
    name: '顺德明火慢熬开花大米白粥',
    subtitle: '大道至简顺德靓粥底，米花全部爆裂融化成浆，挂勺绵密如脂',
    region: '广东顺德',
    cookingMethod: '明火大熬',
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    difficulty: '新手友好',
    servings: 2,
    calories: 180,
    protein: 4.5,
    fat: 1.2,
    carbs: 38.0,
    ratio: '1:10 (米80g:水800ml)',
    tags: ['基础粥底', '明火白粥', '挂勺如脂', '极速养胃'],
    ingredients: [
      { name: '优质东北珍珠米', amount: 60, unit: '克', type: 'main' },
      { name: '优质丝苗香米', amount: 20, unit: '克', type: 'main' },
      { name: '纯净水/山泉水', amount: 800, unit: 'ml', type: 'main' }
    ],
    seasonings: [
      { name: '纯花生油', amountText: '半茶匙 (3ml)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '指尖微量 (0.5g 促爆花)', baseAmount: 0.5, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '双米拼配与油盐抓腌',
        instruction: '将黏润的珍珠米与清香的丝苗米按3:1比例混合淘净，沥干后加入花生油3ml与0.5g细盐拌匀，静置腌渍15分钟。',
        timerSeconds: 900,
        chefTip: '双米拼配集合了珍珠米的胶质糯性与丝苗米的纯正米香；油盐腌米能促使米粒分子内部油脂渗透，遇沸水炸开。'
      },
      {
        stepIndex: 2,
        title: '沸水下米大火鼎沸翻滚',
        instruction: '砂锅注入800ml山泉水大火烧至大滚沸腾，倒入腌制好的米粒，保持大火持续沸腾翻滚15分钟，绝不盖锅盖。',
        timerSeconds: 900,
        chefTip: '“明火白粥”之“明火”意为肉眼可见的滚烫大火翻滚，大火对流使米粒剧烈撞击碎裂，形成乳白水气交融。'
      },
      {
        stepIndex: 3,
        title: '顺时针持续顺搅出胶',
        instruction: '煮至米粒裂开时，用木勺或瓷勺保持同一方向持续顺时针用力搅动3分钟，激出大米直链淀粉。',
        timerSeconds: 180,
        chefTip: '用力搅动能迅速迫使大米淀粉析出糊化，俗称“起胶”，粥底迅速从清汤变为粘稠玉露。'
      },
      {
        stepIndex: 4,
        title: '转中火慢煲米花化茸',
        instruction: '转中小火继续微滚煲煮15分钟，直至每一颗米粒都彻底爆开绽放、米与水再无分界。',
        timerSeconds: 900,
        chefTip: '用勺舀起一勺慢慢倒下，粥汁能够连绵成线顺滑挂在勺背上，即为顶级顺德粥底标准。'
      },
      {
        stepIndex: 5,
        title: '关火起锅得金黄米油',
        instruction: '关火离灶，静置2分钟，粥面上会凝结出一层厚厚的黄金米油层，直接原味热食，或留作各种顶级生滚粥底。',
        timerSeconds: 120,
        chefTip: '白粥最补脾胃，清甜回甘，表面这层米油古称“粥油”，滋阴补气胜似参汤。'
      }
    ],
    chefTips: [
      '珍珠米与丝苗米3:1拼配，兼具浓稠与米香。',
      '淘净后用少许油盐腌渍15分钟，加速爆开米花。',
      '水大沸后下米，大火保持翻滚绝不盖严。',
      '勺子同一方向用力搅动3分钟促进淀粉糊化出胶。',
      '表面一层金黄透亮米油是温润养胃的极品。'
    ],
    proTips: '双米拼配、油盐腌渍、开水下锅、大火明滚、顺搅出胶，是顺德大厨煲出极品白玉粥底的五步心法。',
    nutritionHighlights: '淀粉完全糊化极易被小肠直接吸收，对胃黏膜有天然温和保护作用，是任何生滚粥的灵魂基石。'
  }
];
