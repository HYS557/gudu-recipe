// 五谷药膳与名家调理粥 (41 - 60)
module.exports = [
  {
    id: 'rec_congee_41',
    name: '金陵经典民国滋补美龄粥',
    subtitle: '浓醇鲜豆浆与糯米粳米慢煲，铁棍山药压泥融入，丝滑奶白润肤养颜',
    region: '江苏南京',
    cookingMethod: '慢熬慢煨',
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    difficulty: '简单',
    servings: 2,
    calories: 235,
    protein: 11.5,
    fat: 3.5,
    carbs: 39.0,
    ratio: '纯鲜豆浆600ml:清水200ml:双米60g',
    tags: ['金陵名吃', '民国美龄', '豆浆山药', '润肤美白'],
    ingredients: [
      { name: '现磨浓鲜豆浆 (无糖)', amount: 600, unit: 'ml', type: 'main' },
      { name: '铁棍山药 (蒸熟压泥)', amount: 120, unit: '克', type: 'main' },
      { name: '圆粒糯米', amount: 35, unit: '克', type: 'main' },
      { name: '优质粳米/珍珠米', amount: 25, unit: '克', type: 'main' },
      { name: '鲜百合瓣', amount: 20, unit: '克', type: 'secondary' },
      { name: '宁夏枸杞', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '太古单晶冰糖', amountText: '25克 (清甜甘润)', baseAmount: 25, unit: '克', isPantryStaple: true },
      { name: '食用精盐', amountText: '指尖微量 (0.5g 激发豆香)', baseAmount: 0.5, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '山药蒸透压成细腻稠泥',
        instruction: '铁棍山药削皮切段，放入蒸锅大火蒸15分钟至筷子一扎即透，取出放入大碗中用压泥器趁热捣成毫无颗粒的细腻山药泥。',
        timerSeconds: 900,
        chefTip: '必须将山药蒸至极软并压得极其细腻，这样与豆浆米浆融合后才能达到天鹅绒般的丝滑口感。'
      },
      {
        stepIndex: 2,
        title: '双米拼配温水浸泡出胶',
        instruction: '糯米与粳米按3:2混合淘净，加入温水浸泡30分钟，沥干水分备用。',
        timerSeconds: 1800,
        chefTip: '糯米提供黏糯挂唇的稠度，粳米提供馥郁的纯正米香，二者混合浸透煮出的美龄粥稠而不滞。'
      },
      {
        stepIndex: 3,
        title: '清浆同沸下米防糊底',
        instruction: '砂锅中倒入200ml清水与300ml豆浆烧沸，倒入泡好的双米，大火煮沸后立刻转小火慢熬20分钟，中途需每隔3分钟顺时针顺锅底搅动一次。',
        timerSeconds: 1200,
        chefTip: '豆浆极易糊锅假沸，前期兑少量水且必须小火慢熬、勤快搅底，严防沉底焦化。'
      },
      {
        stepIndex: 4,
        title: '补入余下鲜豆浆与山药泥',
        instruction: '待米粒开花软烂，倒入剩余300ml鲜豆浆与山药泥、鲜百合瓣，加入冰糖与指尖细盐，小火继续煨煮10分钟至汤色奶白如乳。',
        timerSeconds: 600,
        chefTip: '分两次加入豆浆是美龄粥豆香浓郁的秘诀；山药泥的加入起到天然增稠效果，粥体洁白胜雪。'
      },
      {
        stepIndex: 5,
        title: '撒枸杞加盖微焖起锅',
        instruction: '出锅前撒入枸杞点缀，关火加盖焖2分钟即可起锅盛入白瓷碗中温食。',
        timerSeconds: 120,
        chefTip: '奶白温润中点缀红宝石般的枸杞，香甜滑顺，健脾润肤。'
      }
    ],
    chefTips: [
      '铁棍山药蒸透彻底压成极细无颗粒泥状。',
      '糯米粳米3:2混合，兼具黏糯与米香。',
      '豆浆分两次下，小火慢煨勤搅底严防糊锅。',
      '加入微量食盐引出豆浆与山药的清甜。'
    ],
    proTips: '铁棍山药蒸透压细腻山药泥，与鲜豆浆、糯米粳米小火慢煲，分次加浆勤搅底防焦，奶白如玉、甘润滑喉、养颜极品。',
    nutritionHighlights: '富含大豆异黄酮、优质植物蛋白与山药黏液质，润肺养胃、美白肌肤、健脾生津，深受女士青睐。'
  },
  {
    id: 'rec_congee_42',
    name: '金黄小米山药红枣健脾养胃粥',
    subtitle: '山西沁州黄小米熬出厚厚金黄米油，山药粉糯红枣甘甜，养胃第一汤',
    region: '华北/山西',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    difficulty: '新手友好',
    servings: 2,
    calories: 220,
    protein: 6.5,
    fat: 2.2,
    carbs: 43.0,
    ratio: '1:10 (小米80g:水800ml)',
    tags: ['养胃圣品', '金黄米油', '补中益气', '产后调养'],
    ingredients: [
      { name: '优质山西沁州黄小米', amount: 80, unit: '克', type: 'main' },
      { name: '正宗铁棍山药', amount: 100, unit: '克', type: 'main' },
      { name: '若羌灰枣/金丝小枣', amount: 6, unit: '枚', type: 'main' },
      { name: '宁夏枸杞', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯正老红糖', amountText: '15克 (可按需选择添加)', baseAmount: 15, unit: '克', isPantryStaple: true },
      { name: '纯香磨芝麻油', amountText: '2滴 (出米油秘诀)', baseAmount: 2, unit: '滴', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '黄小米轻柔淘洗保留米脂',
        instruction: '选用新季金黄沁州黄小米，用凉水轻轻淘洗一遍沥干，切忌双手用力揉搓，防止将小米外层的天然米脂搓掉。',
        timerSeconds: 120,
        chefTip: '小米表面微黄的皮层富含胡萝卜素与不饱和脂肪酸，用力搓洗会搓失米油精髓。'
      },
      {
        stepIndex: 2,
        title: '山药去皮切厚块红枣去核',
        instruction: '戴手套将铁棍山药去皮切成2cm滚刀块；红枣洗净温水浸泡10分钟，去核切成两半。',
        timerSeconds: 240,
        chefTip: '红枣去核能防止多食上火燥热，浸泡后甜味释放更均匀。'
      },
      {
        stepIndex: 3,
        title: '开水下小米滴香油大沸',
        instruction: '砂锅注入800ml清水大火烧沸，下入黄小米与2滴芝麻油，保持大火翻滚沸腾10分钟，顺时针搅动几次防溢。',
        timerSeconds: 600,
        chefTip: '沸水下小米米粒瞬间受热激出米香，滴入2滴芝麻油不仅能防止沸水溢锅，更能加速熬出厚厚的金黄米油。'
      },
      {
        stepIndex: 4,
        title: '下山药红枣慢火熬出金油',
        instruction: '放入铁棍山药块与去核红枣，转中小火加盖留缝慢熬20分钟，煮至小米完全开花软糯，汤汁浓稠挂勺。',
        timerSeconds: 1200,
        chefTip: '中小火慢煲是小米多糖充分析出的过程，砂锅周围会形成一层金灿灿的米油圈。'
      },
      {
        stepIndex: 5,
        title: '下枸杞关火静置起金油皮',
        instruction: '撒入枸杞拌匀，关火离灶，静置5分钟，粥面遇冷空气会迅速凝结出一层厚厚的黄金米油皮即可温食。',
        timerSeconds: 300,
        chefTip: '这层厚厚的黄金米油被称为“代参汤”，是修复胃黏膜与调补中气的天然养分。'
      }
    ],
    chefTips: [
      '新季小米轻柔淘洗一次，绝不搓洗掉米脂。',
      '沸水下小米，滴2滴植物油防溢且加速出米油。',
      '红枣去核性温不上火。',
      '关火静置5分钟，表面自然凝出金黄厚米油。'
    ],
    proTips: '小米轻淘不搓皮，开水下锅滴油防溢，与铁棍山药去核红枣同煲30分钟，离火静置出厚层金黄米油，温和养胃第一。',
    nutritionHighlights: '小米富含多种维生素B1、B2与色氨酸，山药含黏液质保护胃壁，红枣补血，极适宜慢性胃炎、虚弱失眠与坐月子者。'
  },
  {
    id: 'rec_congee_43',
    name: '传统经典腊八八宝滋补甜粥',
    subtitle: '红豆黑米桂圆莲子八味和合，文火慢炖豆烂如沙，腊八传统祥瑞温养',
    region: '华北/传统节令',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 30,
    cookTimeMinutes: 60,
    difficulty: '简单',
    servings: 2,
    calories: 285,
    protein: 8.5,
    fat: 3.0,
    carbs: 56.0,
    ratio: '1:9 (杂粮80g:水720ml)',
    tags: ['腊八节令', '八宝丰收', '豆烂米糯', '五谷杂粮'],
    ingredients: [
      { name: '东北圆粒糯米', amount: 30, unit: '克', type: 'main' },
      { name: '红小豆/赤小豆', amount: 15, unit: '克', type: 'main' },
      { name: '优质绿豆', amount: 15, unit: '克', type: 'main' },
      { name: '东北精选黑米', amount: 15, unit: '克', type: 'main' },
      { name: '干莲子肉 (去芯)', amount: 10, unit: '克', type: 'secondary' },
      { name: '红皮生花生米', amount: 10, unit: '克', type: 'secondary' },
      { name: '莆田桂圆干肉', amount: 8, unit: '枚', type: 'secondary' },
      { name: '若羌红枣', amount: 5, unit: '枚', type: 'secondary' }
    ],
    seasonings: [
      { name: '多晶老黄冰糖', amountText: '30克 (按甜度喜好增减)', baseAmount: 30, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '耐煮豆类提前温水浸泡',
        instruction: '红小豆、绿豆、黑米与花生米质地坚硬，洗净后加温水提前浸泡2小时以上让豆粒充分吸水膨胀。',
        timerSeconds: 7200,
        chefTip: '硬质豆类提前吸足水分，入锅后才能与糯米同频煮至开花起沙，否则米已化水而豆依然坚硬。'
      },
      {
        stepIndex: 2,
        title: '糯米莲子淘净备用',
        instruction: '糯米洗净，莲子去苦芯洗净，红枣温水泡软去核切小瓣备用。',
        timerSeconds: 300,
        chefTip: '糯米是整锅八宝粥粘稠顺滑的粘结剂，煮透后胶质包裹杂粮。'
      },
      {
        stepIndex: 3,
        title: '硬质豆类先下锅熬煮20分钟',
        instruction: '砂锅注入720ml清水大火烧沸，先下入浸泡好的红小豆、黑米、花生米和莲子，中火先煲煮20分钟至豆粒微裂。',
        timerSeconds: 1200,
        chefTip: '分批下料是煲八宝粥的秘诀，先煮硬豆20分钟，再下糯米，能保证各种食材同熟同酥。'
      },
      {
        stepIndex: 4,
        title: '下糯米红枣桂圆慢煲成沙',
        instruction: '下入淘洗好的糯米、绿豆、红枣和桂圆干，大火煮沸后转中小火加盖慢熬30分钟，豆粒爆开发沙，米汁浓稠如锦缎。',
        timerSeconds: 1800,
        chefTip: '桂圆红枣后下能防止久煮酸败，慢熬让豆沙融于糯米浆中，香气浓郁。'
      },
      {
        stepIndex: 5,
        title: '下黄冰糖融化温食',
        instruction: '调入老黄冰糖，搅拌3分钟至冰糖完全融化，关火焖5分钟即可起锅盛入大瓷碗。',
        timerSeconds: 180,
        chefTip: '黄冰糖甘温润喉，熬出的八宝粥红亮透光、豆沙浓糯。'
      }
    ],
    chefTips: [
      '红小豆黑米花生提前浸泡2小时。',
      '硬豆类先入锅煮20分钟再下糯米。',
      '糯米作为天然增稠剂提供丝滑质感。',
      '出锅前下黄冰糖调和甘润，甜香四溢。'
    ],
    proTips: '硬豆提前浸透先煲20分钟，再下糯米桂圆红枣同炖至豆烂起沙，黄冰糖调甜，八味和合、软糯香甜。',
    nutritionHighlights: '集合豆类、杂粮、坚果多重膳食纤维、花青素与矿物质，益气补中、健脾开胃、温暖御寒。'
  },
  {
    id: 'rec_congee_44',
    name: '补气养血红豆红枣花生黑米粥',
    subtitle: '四红四黑双重滋补，红豆起沙红枣甘甜，花生香浓黑米墨玉气血双补',
    region: '华北/传统药膳',
    cookingMethod: '慢火煲炖',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: '新手友好',
    servings: 2,
    calories: 260,
    protein: 8.0,
    fat: 4.5,
    carbs: 48.0,
    ratio: '1:9 (五谷70g:水630ml)',
    tags: ['气血双补', '养颜红润', '四红四黑', '暖宫驱寒'],
    ingredients: [
      { name: '优质红小豆', amount: 25, unit: '克', type: 'main' },
      { name: '东北有机黑米', amount: 25, unit: '克', type: 'main' },
      { name: '红皮带衣花生米', amount: 15, unit: '克', type: 'main' },
      { name: '若羌大红枣', amount: 6, unit: '枚', type: 'main' },
      { name: '宁夏枸杞', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '云南古法老红糖', amountText: '20克 (温通活血)', baseAmount: 20, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '红豆黑米浸泡吸水',
        instruction: '红小豆与黑米洗净，用温水浸泡2小时；红皮花生米温水洗净（保留红衣）。',
        timerSeconds: 7200,
        chefTip: '花生红衣（外皮）富含凝血因子与白藜芦醇，是补血的关键，绝对不可剥除。'
      },
      {
        stepIndex: 2,
        title: '大枣去核剪条',
        instruction: '精选大红枣洗净，用去核器剔除内部硬核，用厨房剪刀剪成细长红枣条，温水浸润5分钟备用。',
        timerSeconds: 180,
        chefTip: '剪条去核更易将果糖与环磷酸腺苷融入粥汤中，且温而不燥。'
      },
      {
        stepIndex: 3,
        title: '砂锅足水先下豆米大火沸腾',
        instruction: '砂锅水滚，下入红小豆、黑米与红衣花生，大火翻滚沸腾15分钟，转中火煲煮20分钟。',
        timerSeconds: 1200,
        chefTip: '黑米花青素融于水呈深紫红色，红豆逐渐煮至皮破出沙。'
      },
      {
        stepIndex: 4,
        title: '下红枣慢煲至汤汁浓稠',
        instruction: '放入剪好的红枣片，转小火慢炖15分钟，红豆彻底起沙，汤汁醇稠如紫玉红泥。',
        timerSeconds: 900,
        chefTip: '慢熬能使豆沙与黑米黏质完全融合，挂勺拉丝。'
      },
      {
        stepIndex: 5,
        title: '化入古法老红糖温服',
        instruction: '调入云南古法红糖与枸杞子，搅拌2分钟至红糖完全融化即可出锅温服。',
        timerSeconds: 120,
        chefTip: '老红糖性温味甘，散寒温经，整碗粥暖甜香醇。'
      }
    ],
    chefTips: [
      '红皮花生务必保留红衣外皮，补血核心所在。',
      '红小豆与黑米提前温水浸泡发软。',
      '红枣去核剪条，释放甘甜不易上火。',
      '古法老红糖温通经脉，趁热温食。'
    ],
    proTips: '保留花生红衣，红豆黑米充分浸泡同煲至起沙，调入古法老红糖与去核大红枣，暖宫散寒、益气生血、面色红润。',
    nutritionHighlights: '富含天然花青素、多酚抗氧化物、植物血红素铁与蛋白质，特别适宜气血不足、手脚冰凉者日常调理。'
  },
  {
    id: 'rec_congee_45',
    name: '润肺安神银耳百合雪梨莲子羹粥',
    subtitle: '通江段木银耳慢炖出丰沛胶质，雪梨清润百合安神，润肺止咳秋润甘露',
    region: '全国/江南药膳',
    cookingMethod: '温火慢炖',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: '简单',
    servings: 2,
    calories: 195,
    protein: 4.5,
    fat: 0.8,
    carbs: 45.0,
    ratio: '1:12 (银耳雪梨食材500g:水600ml)',
    tags: ['清肺润燥', '银耳出胶', '百合安神', '秋季滋阴'],
    ingredients: [
      { name: '通江段木干银耳', amount: 15, unit: '克', type: 'main' },
      { name: '鲜砀山酥梨/雪梨', amount: 1, unit: '个 (约200g)', type: 'main' },
      { name: '兰州新鲜甜百合', amount: 30, unit: '克', type: 'main' },
      { name: '湖南建莲莲子 (去芯)', amount: 15, unit: '克', type: 'secondary' },
      { name: '宁夏枸杞', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '多晶老冰糖', amountText: '25克 (甘凉清润)', baseAmount: 25, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '银耳温水泡发撕极小碎朵',
        instruction: '干银耳加温水泡发30分钟，剪去底部发黄硬蒂，用手尽量将银耳撕成如指甲盖大小的细小碎朵。',
        timerSeconds: 1800,
        chefTip: '撕得越碎出胶截面积越大，是银耳在短短半小时内炖出拉丝浓稠胶质的第一奥秘。'
      },
      {
        stepIndex: 2,
        title: '雪梨带皮切丁莲子去芯',
        instruction: '雪梨用盐搓洗干净外皮，带皮切成小丁块；干莲子温水泡软掰开去苦芯；鲜百合掰瓣洗净。',
        timerSeconds: 300,
        chefTip: '雪梨皮富含鞣酸与类黄酮，带皮煮止咳润肺功效更佳，清甜渗入汤中。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火剧烈翻滚撞出胶',
        instruction: '砂锅注入700ml清水大火煮沸，倒入碎银耳与莲子，保持大火持续沸腾撞击翻滚15分钟。',
        timerSeconds: 900,
        chefTip: '前期大火剧烈翻滚能使水分子撞击银耳细胞壁，迫使植物多糖迅速溶出，汤水肉眼可见变稠。'
      },
      {
        stepIndex: 4,
        title: '下雪梨丁百合慢煨出糖',
        instruction: '转小火加盖，放入雪梨丁与鲜百合瓣，小火慢煨20分钟，银耳完全软糯融化，汤汁拉丝粘勺。',
        timerSeconds: 1200,
        chefTip: '百合与雪梨受热软熟，清甜天然果糖完全释放，与银耳胶质融为一体。'
      },
      {
        stepIndex: 5,
        title: '下老冰糖枸杞温润出锅',
        instruction: '下入冰糖与枸杞子，搅拌2分钟至冰糖融化，关火焖5分钟出锅温食或冷藏冰镇。',
        timerSeconds: 120,
        chefTip: '汤汁莹润浓稠，入口丝滑清甘，干咳燥热一扫而空。'
      }
    ],
    chefTips: [
      '银耳撕成指甲盖极小碎块，出胶速度翻倍。',
      '雪梨洗净带皮切丁，止咳化痰功效倍增。',
      '前15分钟大火剧烈翻滚撞击出胶质。',
      '鲜百合后下保持清脆甘甜，老冰糖润喉。'
    ],
    proTips: '银耳剪碎大火剧烈沸滚撞出浓稠胶质，雪梨带皮与兰州鲜百合同煨，晶莹剔透拉丝顺滑，润肺止咳、滋阴生津。',
    nutritionHighlights: '银耳富含丰富银耳酸性异多糖与微量元素，具有天然植物胶原蛋白美誉，清肺润肠、降火安神。'
  },
  {
    id: 'rec_congee_46',
    name: '黑芝麻核桃黑豆黑米乌发滋补粥',
    subtitle: '黑豆醇厚黑米粘糯，熟黑芝麻核桃粉生香，中医黑色入肾乌发强本',
    region: '华夏传统药膳',
    cookingMethod: '慢熬慢炖',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: '简单',
    servings: 2,
    calories: 295,
    protein: 11.5,
    fat: 9.5,
    carbs: 42.0,
    ratio: '1:9 (杂粮80g:水720ml)',
    tags: ['黑色入肾', '乌发养颜', '坚果浓香', '固本培元'],
    ingredients: [
      { name: '优质黑小豆/乌豆', amount: 20, unit: '克', type: 'main' },
      { name: '东北黑米', amount: 30, unit: '克', type: 'main' },
      { name: '炒香熟纯黑芝麻 (现磨碎)', amount: 20, unit: '克', type: 'main' },
      { name: '新鲜原味核桃仁', amount: 20, unit: '克 (切碎)', type: 'main' },
      { name: '圆粒糯米', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '老黄冰糖/红糖', amountText: '20克 (清甜甘润)', baseAmount: 20, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '黑豆黑米温水浸泡2小时',
        instruction: '黑小豆与黑米淘洗干净，加温水浸泡2小时至豆粒吸水胀大；核桃仁掰成小块。',
        timerSeconds: 7200,
        chefTip: '黑豆皮紧致致密，必须提前泡透，不然煮不烂影响肠胃消化。'
      },
      {
        stepIndex: 2,
        title: '熟黑芝麻现研磨出香油',
        instruction: '熟黑芝麻用石臼或研磨机轻轻捣碎至半粉碎状态，释放出浓烈纯正的芝麻油香。',
        timerSeconds: 120,
        chefTip: '整颗黑芝麻外壳坚硬肠胃难以吸收，捣破表面油囊后香味瞬间喷发，营养吸收率提高数倍。'
      },
      {
        stepIndex: 3,
        title: '砂锅水滚下黑豆黑米与糯米',
        instruction: '砂锅注入720ml水大沸，下入浸透的黑豆、黑米与糯米，大火保持翻滚15分钟，转中火慢炖20分钟。',
        timerSeconds: 1200,
        chefTip: '加入少许糯米能起到调和顺滑的作用，避免杂粮粥口感粗粝。'
      },
      {
        stepIndex: 4,
        title: '下核桃碎与黑芝麻粉同融',
        instruction: '豆粒软烂开花时，倒入核桃仁碎与磨好的黑芝麻粉，顺时针搅拌均匀，小火慢煨8分钟。',
        timerSeconds: 480,
        chefTip: '黑芝麻与核桃含丰富不饱和植物油，融入米粥后汤色黝黑发亮、油润喷香。'
      },
      {
        stepIndex: 5,
        title: '调入冰糖温润出锅',
        instruction: '调入老黄冰糖搅拌融化，关火加盖焖3分钟，香气浓醇诱人即可温食。',
        timerSeconds: 180,
        chefTip: '坚果香与米香交织，口感软糯香醇，回味无穷。'
      }
    ],
    chefTips: [
      '黑豆黑米必须提前温水浸透。',
      '熟黑芝麻现捣半碎，释放核心卵磷脂与香气。',
      '加入少量糯米使粥底浓稠挂勺不粗糙。',
      '核桃与黑芝麻后下慢煨，保留天然坚果油香。'
    ],
    proTips: '黑豆提前泡透，熟黑芝麻现研半碎激发出植物油脂，与核桃黑米糯米同煲，漆黑如墨油润生香，乌发强肾之圣品。',
    nutritionHighlights: '中医“黑色入肾”，黑芝麻与核桃富含优质天然维生素E、卵磷脂、不饱和脂肪酸与花青素，养肾补脑、乌发防脱。'
  },
  {
    id: 'rec_congee_47',
    name: '芡实茯苓薏米赤小豆健脾去湿粥',
    subtitle: '无油干炒去寒散焦香，茯苓芡实砂锅慢煲出沙，健脾利水不伤阳气',
    region: '华南/国医验方',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    difficulty: '简单',
    servings: 2,
    calories: 210,
    protein: 7.5,
    fat: 1.8,
    carbs: 42.0,
    ratio: '1:10 (药膳料80g:水800ml)',
    tags: ['健脾祛湿', '国医古方', '炒薏仁去寒', '排浊轻身'],
    ingredients: [
      { name: '贵州优质生薏苡仁 (炒黄)', amount: 25, unit: '克', type: 'main' },
      { name: '细长粒中药赤小豆', amount: 25, unit: '克', type: 'main' },
      { name: '优质中药白茯苓丁', amount: 15, unit: '克', type: 'main' },
      { name: '正品干芡实米/鸡头米', amount: 15, unit: '克', type: 'main' },
      { name: '无硫新会陈皮丝', amount: 3, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '太古纯正黄冰糖', amountText: '15克 (可不放，依个人口味)', baseAmount: 15, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '生薏米小火干炒去寒生香',
        instruction: '生薏米放入无油无水干净热锅中，保持小火慢慢翻炒5分钟至表面微黄透出焦香味，盛出过凉备用。',
        timerSeconds: 300,
        chefTip: '生薏米微寒，脾胃虚弱者久服易腹泻，干炒至微黄焦香能改变药性转为温和健脾，这是老中医祛湿不伤阳的核心秘诀。'
      },
      {
        stepIndex: 2,
        title: '辨明赤小豆与红豆温水浸泡',
        instruction: '选用细长质地紧硬的“中药赤小豆”而非圆胖红豆，与干芡实、茯苓丁一同用温水浸泡2小时。',
        timerSeconds: 7200,
        chefTip: '赤小豆利水消肿力量远强于红豆，外形细长紧硬，必须充分浸润软化。'
      },
      {
        stepIndex: 3,
        title: '新会陈皮泡软刮去白囊',
        instruction: '新会老陈皮用温水泡软5分钟，用小刀轻轻刮去内壁白色的橘络（白囊），切成极细陈皮丝。',
        timerSeconds: 180,
        chefTip: '刮去内壁白囊能彻底消除苦涩口感，保留纯正柑香，行气理气助化湿。'
      },
      {
        stepIndex: 4,
        title: '砂锅武火沸腾文火慢煲40分钟',
        instruction: '砂锅注入800ml水烧沸，下入炒薏米、赤小豆、茯苓丁、芡实与陈皮丝，大火沸滚10分钟，转小火慢煲40分钟至赤小豆起沙。',
        timerSeconds: 2400,
        chefTip: '砂锅传热均匀温和，长时间小火慢熬促使茯苓多糖与芡实淀粉完全释放。'
      },
      {
        stepIndex: 5,
        title: '下微量黄冰糖离火温服',
        instruction: '尝味可不加糖直接原味饮用，亦可加少许黄冰糖调和，关火焖5分钟温服。',
        timerSeconds: 120,
        chefTip: '汤色澄红清亮，散发淡淡陈皮焦香，利水清爽，神清气爽。'
      }
    ],
    chefTips: [
      '薏米必须无油小火炒至微黄焦香消除寒性。',
      '认准细长颗粒的“赤小豆”利水祛湿效果最好。',
      '陈皮泡软必须刮去内壁白囊防止汤头发苦。',
      '原味温服最佳，脾胃虚寒者亦可安心长期调理。'
    ],
    proTips: '薏米干炒微黄去寒转温，赤小豆浸透与茯苓芡实陈皮同煲40分钟至豆软出沙，理气行水、健脾温阳，祛湿而不伤正气。',
    nutritionHighlights: '经典的国医祛湿利水名方，富含茯苓多糖、薏苡仁酯与三萜类化合物，除体内湿浊、利水消肿、轻身健脾。'
  },
  {
    id: 'rec_congee_48',
    name: '老南瓜燕麦高纤低卡刮油暖粥',
    subtitle: '红皮老南瓜甜软融化入汤，厚卷燕麦胶质粘稠饱腹，高纤低卡轻体必备',
    region: '全国/减脂轻食',
    cookingMethod: '温火慢熬',
    prepTimeMinutes: 12,
    cookTimeMinutes: 25,
    difficulty: '新手友好',
    servings: 2,
    calories: 165,
    protein: 5.5,
    fat: 2.0,
    carbs: 32.0,
    ratio: '老南瓜200g:燕麦片40g:水500ml',
    tags: ['低卡饱腹', '高膳食纤维', '天然甘甜', '减脂刮油'],
    ingredients: [
      { name: '成熟红皮老南瓜/贝贝南瓜', amount: 200, unit: '克', type: 'main' },
      { name: '传统纯燕麦厚片', amount: 40, unit: '克', type: 'main' },
      { name: '优质大米/胚芽米', amount: 20, unit: '克', type: 'main' },
      { name: '熟奇亚籽', amount: 5, unit: '克 (出锅点缀)', type: 'secondary' },
      { name: '熟南瓜籽仁', amount: 5, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '肉桂粉', amountText: '1捏 (指尖微量，可选调味)', baseAmount: 0.2, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '老南瓜去皮切小丁块',
        instruction: '精选金红老南瓜刨去外皮，切成约1.5cm的小丁块备用。',
        timerSeconds: 180,
        chefTip: '切小丁易熟易捣碎，南瓜自身的天然果糖在水煮中能迅速焦糖化释放甘甜，完全不需要额外加白糖。'
      },
      {
        stepIndex: 2,
        title: '大米南瓜大火同煮软烂',
        instruction: '锅中注入500ml清水烧沸，下入胚芽大米与南瓜丁，大火煮沸后转中小火煮15分钟，至南瓜彻底酥烂。',
        timerSeconds: 900,
        chefTip: '加少量大米能为南瓜汤提供细腻的淀粉糊基底。'
      },
      {
        stepIndex: 3,
        title: '勺背压碎南瓜染金黄底色',
        instruction: '用木勺或硅胶铲顺着锅底将酥烂的南瓜丁大半压碎成泥，让金黄的南瓜泥均匀融进沸水中，整锅水转为浓郁金黄色。',
        timerSeconds: 120,
        chefTip: '保留少许小南瓜块保留咀嚼趣味，南瓜泥使汤水自然稠滑。'
      },
      {
        stepIndex: 4,
        title: '倒入传统厚燕麦片慢熬出胶',
        instruction: '倒入传统纯燕麦厚片，中小火继续翻滚慢煮5分钟，燕麦β-葡聚糖迅速水解出黏润拉丝的厚胶质。',
        timerSeconds: 300,
        chefTip: '一定要选需要煮的大燕麦片而非即食麦片，厚片富含可溶性膳食纤维，抗饿饱腹达4小时以上。'
      },
      {
        stepIndex: 5,
        title: '撒奇亚籽南瓜仁出锅',
        instruction: '出锅盛入宽口大碗，表面撒上熟奇亚籽与香脆南瓜籽仁，金黄油亮即可开吃。',
        timerSeconds: 20,
        chefTip: '奇亚籽遇水膨胀提供持久饱腹感，坚果仁增加酥脆层次。'
      }
    ],
    chefTips: [
      '选熟透红皮老南瓜，自带高天然甜度无需加糖。',
      '勺背压碎南瓜泥形成天然金黄稠滑底浆。',
      '选用纯传统厚燕麦片，出胶丰富高饱腹。',
      '撒奇亚籽南瓜仁，增加健康不饱和脂肪酸。'
    ],
    proTips: '老南瓜煮烂后勺背压碎染金整锅粥，下厚燕麦片煮5分钟析出浓稠β-葡聚糖，天然甘甜无需放糖，低卡高纤刮油饱腹。',
    nutritionHighlights: '老南瓜富含果胶与胡萝卜素，燕麦富含可溶性β-葡聚糖，促进肠道蠕动、平稳餐后血糖、减脂轻体。'
  },
  {
    id: 'rec_congee_49',
    name: '桂圆枸杞莲子安神红枣糯米粥',
    subtitle: '莆田桂圆肉醇香四溢，莲子酥软红枣甘润，糯米黏唇养心安神助眠',
    region: '华东/福建',
    cookingMethod: '慢火煲煮',
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    difficulty: '新手友好',
    servings: 2,
    calories: 255,
    protein: 6.0,
    fat: 1.5,
    carbs: 55.0,
    ratio: '1:10 (糯米70g:水700ml)',
    tags: ['养心安神', '助眠补气', '桂圆清甜', '冬夜温养'],
    ingredients: [
      { name: '优质圆粒糯米', amount: 70, unit: '克', type: 'main' },
      { name: '福建莆田干桂圆肉', amount: 12, unit: '枚', type: 'main' },
      { name: '湖南去芯白莲子', amount: 15, unit: '克', type: 'main' },
      { name: '优质新疆灰枣', amount: 6, unit: '枚', type: 'main' },
      { name: '宁夏枸杞', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '老黄冰糖', amountText: '20克 (甘润润喉)', baseAmount: 20, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '莲子浸泡去芯糯米淘净',
        instruction: '干莲子温水浸泡30分钟，掰开确保无绿色苦芯；圆糯米淘洗干净沥水。',
        timerSeconds: 1800,
        chefTip: '莲子必须确保无苦芯，苦芯大苦且性寒，去芯后莲子肉温和甘平、健脾益肾。'
      },
      {
        stepIndex: 2,
        title: '红枣去核桂圆冲净',
        instruction: '红枣去核切小瓣，桂圆干肉温水冲洗去表面微尘。',
        timerSeconds: 180,
        chefTip: '红枣去核能消除燥烈之气，温和补血不上火。'
      },
      {
        stepIndex: 3,
        title: '砂锅水滚下糯米与莲子',
        instruction: '砂锅注入700ml水大沸，下入糯米与泡好的白莲子，大火保持翻滚沸腾15分钟，米粒爆花汤色转白。',
        timerSeconds: 900,
        chefTip: '糯米在沸水中剧烈碰撞糊化，提供丝滑浓稠的口感基底。'
      },
      {
        stepIndex: 4,
        title: '下桂圆肉红枣慢煲20分钟',
        instruction: '下入桂圆肉与红枣块，转中小火慢煲20分钟，煮至莲子酥软起粉，桂圆肉吸水胀大如鲜果般圆润。',
        timerSeconds: 1200,
        chefTip: '桂圆肉经过慢煲，其独特的浓郁果香完全渗透入米浆中。'
      },
      {
        stepIndex: 5,
        title: '下黄冰糖枸杞温热享用',
        instruction: '调入黄冰糖与洗净枸杞子，顺时针搅拌至糖化，关火焖3分钟出锅。',
        timerSeconds: 180,
        chefTip: '睡前1小时温温服下一小碗，香甜甘润，能有效缓解心烦难眠。'
      }
    ],
    chefTips: [
      '干莲子温水泡发彻底剥去发苦绿芯。',
      '大红枣去核切块温补不上火。',
      '桂圆肉慢煲20分钟吸水鼓胀如鲜果。',
      '糯米为底出厚米脂，温暖脾胃安神助眠。'
    ],
    proTips: '无苦芯白莲子与糯米同煲出稠浆，下莆田桂圆大红枣慢煲至莲子酥粉、桂圆饱满，睡前温服一碗，安心定志。',
    nutritionHighlights: '桂圆与大枣富含易吸收单糖、有机酸与多种维生素，莲子含丰富生物碱，具有补心脾、益气血、安神助眠之效。'
  },
  {
    id: 'rec_congee_50',
    name: '绿豆百合薄荷盛夏清热解暑清粥',
    subtitle: '绿豆急冻极速开花起沙，鲜百合甘甜解热，鲜薄荷叶清凉提神消暑',
    region: '华南/岭南',
    cookingMethod: '明火快煲',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: '新手友好',
    servings: 2,
    calories: 190,
    protein: 7.0,
    fat: 0.8,
    carbs: 41.0,
    ratio: '1:11 (绿豆大米70g:水770ml)',
    tags: ['清热解暑', '绿豆起沙', '薄荷清凉', '伏天必备'],
    ingredients: [
      { name: '优质明绿豆 (冷冻破壁)', amount: 40, unit: '克', type: 'main' },
      { name: '优质大米/粳米', amount: 30, unit: '克', type: 'main' },
      { name: '兰州新鲜甜百合', amount: 25, unit: '克', type: 'main' },
      { name: '新鲜薄荷嫩叶', amount: 6, unit: '片', type: 'secondary' }
    ],
    seasonings: [
      { name: '太古单晶冰糖', amountText: '25克 (甘凉清心)', baseAmount: 25, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '绿豆冷水浸泡急冻20分钟',
        instruction: '绿豆洗净后加刚好没过豆面的少量清水，放冰箱冷冻室冷冻20分钟至结冰块。',
        timerSeconds: 1200,
        chefTip: '水结冰膨胀撑裂绿豆坚硬的外壳，投入沸水中冷热温差瞬间爆开，10分钟即可煮出豆沙。'
      },
      {
        stepIndex: 2,
        title: '沸水下冰冻绿豆大火开花',
        instruction: '砂锅注入770ml清水大火烧至大滚，直接倒入结冰的绿豆块与淘净大米，大火保持剧烈翻滚沸腾10分钟，绿豆瞬间炸裂开花。',
        timerSeconds: 600,
        chefTip: '一定要大火沸腾下冻绿豆，绿豆受热剧烈膨胀脱皮起沙，汤色碧绿清亮。'
      },
      {
        stepIndex: 3,
        title: '投入鲜百合慢火煲沙',
        instruction: '加入洗净掰瓣的鲜百合，转中小火慢煲10分钟，绿豆沙融入米浆中，百合转为半透明酥软。',
        timerSeconds: 600,
        chefTip: '鲜百合清脆甘甜，久煮则化，10分钟刚好断生酥软入味。'
      },
      {
        stepIndex: 4,
        title: '下单晶冰糖搅拌融化',
        instruction: '倒入单晶冰糖，顺时针搅拌2分钟至冰糖完全溶化于绿豆沙中，关火。',
        timerSeconds: 120,
        chefTip: '冰糖性凉，能增强绿豆清热解暑生津的功效。'
      },
      {
        stepIndex: 5,
        title: '投入新鲜薄荷叶微焖起锅',
        instruction: '关火后立即投入洗净的新鲜薄荷嫩叶，加盖焖30秒激出清凉薄荷脑香气，捞出薄荷叶盛出常温或冰镇享用。',
        timerSeconds: 30,
        chefTip: '薄荷叶千万不能下锅沸煮，沸煮会发苦变黑，关火利用余热焖30秒，清凉精油瞬间散逸全锅。'
      }
    ],
    chefTips: [
      '绿豆带微量水冷冻成冰，入沸水10分钟极速开花起沙。',
      '鲜百合后下10分钟保持完整软糯。',
      '关火后投入鲜薄荷叶焖30秒，清香四溢绝不煮苦。',
      '冷藏后冰镇饮用，消夏解渴圣品。'
    ],
    proTips: '绿豆冷冻后沸水下锅10分钟瞬间爆裂起沙，与大米百合慢煨，关火投入鲜薄荷叶余温焖30秒，冰凉透心、消暑解渴。',
    nutritionHighlights: '绿豆富含大量黄酮类物质、多糖与植物多酚，清热解毒、利水利尿，薄荷提神醒脑，盛夏三伏解暑第一。'
  },
  {
    id: 'rec_congee_51',
    name: '糙米胚芽苦荞降糖高纤健康粥',
    subtitle: '全谷物胚芽米留存全营养，高山苦荞麦降糖降脂，粗粮低升糖控卡首选',
    region: '华北/健康食养',
    cookingMethod: '慢熬慢焖',
    prepTimeMinutes: 30,
    cookTimeMinutes: 45,
    difficulty: '新手友好',
    servings: 2,
    calories: 185,
    protein: 6.0,
    fat: 2.0,
    carbs: 36.0,
    ratio: '1:10 (全谷物70g:水700ml)',
    tags: ['低GI控糖', '全谷物营养', '高膳食纤维', '三高调理'],
    ingredients: [
      { name: '优质红糙米/三色糙米', amount: 30, unit: '克', type: 'main' },
      { name: '活化留胚米/胚芽大米', amount: 25, unit: '克', type: 'main' },
      { name: '高山优质黑苦荞麦粒', amount: 15, unit: '克', type: 'main' },
      { name: '精选燕麦仁 (整粒)', amount: 15, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯净水', amountText: '700ml', baseAmount: 700, unit: 'ml', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '全谷物糙米温水浸泡激活',
        instruction: '三色糙米、燕麦仁与苦荞麦粒洗净，加温水浸泡2小时以上使皮层充分吸收水分变软。',
        timerSeconds: 7200,
        chefTip: '糙米带有完整的皮层与糊粉层，硬度高，提前浸泡能软化外壳并激活胚芽中的活性酶。'
      },
      {
        stepIndex: 2,
        title: '砂锅水沸下糙米大火沸煮',
        instruction: '砂锅注入700ml水大火烧沸，下入泡好的全谷杂粮，大火保持翻滚沸腾15分钟。',
        timerSeconds: 900,
        chefTip: '开水下杂粮米不易沉底粘锅，强对流翻滚加速皮层破裂。'
      },
      {
        stepIndex: 3,
        title: '小火慢煲40分钟皮破出浆',
        instruction: '转微小火加盖慢煲40分钟，中途每隔10分钟搅锅一次，直至糙米粒开裂开花、苦荞释放坚果麦香。',
        timerSeconds: 2400,
        chefTip: '全谷物淀粉缓慢释放，汤汁粘稠但升糖指数（GI）显著低于白米粥。'
      },
      {
        stepIndex: 4,
        title: '关火不揭盖焖透10分钟',
        instruction: '煮好后关火，切勿立即揭盖，利用砂锅保温蓄热焖透10分钟，让糙米麦仁彻底回软适口。',
        timerSeconds: 600,
        chefTip: '“煮四分焖六分”是煮硬谷物的古法，余热焖软能彻底消除粗粝割喉感。'
      },
      {
        stepIndex: 5,
        title: '原汁原味起锅享用',
        instruction: '不加任何糖分，直接盛出温食，麦香浓郁、越嚼越甘甜。',
        timerSeconds: 20,
        chefTip: '入口麦香纯粹，粗粮嚼劲饱满，清肠利胃。'
      }
    ],
    chefTips: [
      '全谷物糙米燕麦仁温水浸透2小时。',
      '开水下锅大火沸滚15分钟破皮。',
      '关火后加盖闭气焖透10分钟彻底回软。',
      '原味不加糖，控制餐后血糖波动。'
    ],
    proTips: '三色糙米与高山苦荞浸透慢火煲40分钟，关火加盖焖透10分钟回软消除粗粝感，原味麦香甘醇，高纤低GI控糖佳品。',
    nutritionHighlights: '苦荞富含芦丁（维生素P）与生物类黄酮，糙米富含B族维生素与谷维素，软化血管、调节血脂、平稳血糖。'
  },
  {
    id: 'rec_congee_52',
    name: '黄芪党参红枣乌鸡药膳滋补温粥',
    subtitle: '黑骨乌鸡剁块焯透骨肉香醇，党参黄芪药包出浓汤，补中益气大补元气',
    region: '华夏传统药膳',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    difficulty: '中等',
    servings: 2,
    calories: 275,
    protein: 21.0,
    fat: 6.5,
    carbs: 32.0,
    ratio: '1:10 (米80g:药膳高汤800ml)',
    tags: ['大补元气', '黄芪党参', '乌鸡药膳', '气血亏虚'],
    ingredients: [
      { name: '新鲜散养乌鸡肉块', amount: 180, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '正品甘肃陇西黄芪片', amount: 10, unit: '克', type: 'main' },
      { name: '正品党参切段', amount: 10, unit: '克', type: 'main' },
      { name: '大红枣', amount: 5, unit: '枚', type: 'secondary' },
      { name: '生姜片', amount: 10, unit: '克', type: 'secondary' },
      { name: '枸杞子', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '绍兴料酒 (焯水用)', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '优质白胡椒粉', amountText: '半茶匙 (2g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '乌鸡剁小块冷水焯透去浮沫',
        instruction: '散养乌鸡剁成约2.5cm小骨块，冷水下锅加入料酒与姜片，大火烧开撇净黑色血沫，焯水2分钟捞出温水冲净沥干。',
        timerSeconds: 300,
        chefTip: '乌鸡必须彻底焯净血水，煲出的药膳粥汤色才金黄清澈、无禽腥味。'
      },
      {
        stepIndex: 2,
        title: '黄芪党参温水清洗装煲汤袋',
        instruction: '黄芪片与党参段用清水冲去表面浮尘，装入干净食品级煲汤纱布袋中绑紧。',
        timerSeconds: 120,
        chefTip: '装入煲汤袋可以充分析出有效药膳成分，同时避免药渣木质纤维混入粥中影响顺滑口感。'
      },
      {
        stepIndex: 3,
        title: '乌鸡与药材先煲出浓香药汤',
        instruction: '砂锅注入800ml清水烧沸，下入焯好的乌鸡块、药膳包、生姜片与去核大红枣，中火先煲煮20分钟激出浓郁药膳鸡汤。',
        timerSeconds: 1200,
        chefTip: '鸡肉与党参黄芪先煮20分钟，骨肉初熟、药性完全溶入汤水。'
      },
      {
        stepIndex: 4,
        title: '下大米慢火熬至骨酥肉烂',
        instruction: '取出药膳袋，倒入淘洗好的大米，大火煮沸后转中小火慢煲25分钟，至米粒爆花融化、乌鸡肉质酥烂脱骨。',
        timerSeconds: 1500,
        chefTip: '米粒完全吸收了药膳鸡汤的全部精华，香醇扑鼻。'
      },
      {
        stepIndex: 5,
        title: '下枸杞调盐胡椒温补出锅',
        instruction: '出锅前撒入枸杞，调入食用盐与白胡椒粉拌匀，加盖关火焖2分钟即可盛出温服。',
        timerSeconds: 120,
        chefTip: '汤色醇厚药香适口，温热喝下腹部泛起融融暖意。'
      }
    ],
    chefTips: [
      '乌鸡必须冷水下锅彻底焯水去净浮沫。',
      '党参黄芪装入煲汤袋防药渣散落。',
      '乌鸡与药包先煲20分钟出底汤再加大米。',
      '白胡椒调味温中散寒、提鲜去异。'
    ],
    proTips: '乌鸡焯透与黄芪党参药包先煲20分钟出金黄药汤，捞包下米慢熬至骨肉酥烂，气血双补、大补元气、温和不燥。',
    nutritionHighlights: '乌鸡富含黑色素、蛋白质与18种氨基酸，搭配黄芪党参补中益气、健脾养胃，对久病体虚、气血两亏者有显著补益功效。'
  },
  {
    id: 'rec_congee_53',
    name: '当归生姜红糖羊肉暖宫驱寒冬粥',
    subtitle: '张仲景千古名方当归生姜羊肉汤化裁，羊肉细切焯透软烂，冬令驱寒暖宫',
    region: '华北/甘肃药膳',
    cookingMethod: '砂锅慢熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 50,
    difficulty: '中等',
    servings: 2,
    calories: 310,
    protein: 22.0,
    fat: 9.0,
    carbs: 34.0,
    ratio: '1:10 (米80g:羊肉高汤800ml)',
    tags: ['张仲景名方', '暖宫驱寒', '温补气血', '数九寒冬'],
    ingredients: [
      { name: '新鲜纯羊腿肉/羊里脊', amount: 150, unit: '克', type: 'main' },
      { name: '东北大米', amount: 80, unit: '克', type: 'main' },
      { name: '岷县当归切片', amount: 6, unit: '克', type: 'main' },
      { name: '老生姜 (切大量粗丝)', amount: 20, unit: '克', type: 'secondary' },
      { name: '大红枣', amount: 5, unit: '枚', type: 'secondary' },
      { name: '香葱段', amount: 10, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '高度白酒/料酒', amountText: '1 汤匙 (15ml)', baseAmount: 1, unit: '汤匙', isPantryStaple: true },
      { name: '古法老红糖', amountText: '15克 (温经活血)', baseAmount: 15, unit: '克', isPantryStaple: true },
      { name: '现磨白胡椒粉', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true },
      { name: '食用精盐', amountText: '半茶匙 (3g)', baseAmount: 0.5, unit: '茶匙', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '羊肉顺丝切薄片冷水焯透',
        instruction: '新鲜羊后腿肉剔除筋膜切成2毫米厚片，冷水下锅加入高度料酒与拍松生姜，大火煮沸撇尽浮沫焯烫1分钟捞出温水冲净。',
        timerSeconds: 300,
        chefTip: '羊肉切薄片焯透能彻底除去膻味浮沫，同时保持肉质嫩滑多汁。'
      },
      {
        stepIndex: 2,
        title: '当归生姜片煎出清香药汤',
        instruction: '砂锅中注入800ml水，放入当归片、大量生姜片和去核红枣，大火煮沸后转小火先煎煮15分钟析出当归有效精油。',
        timerSeconds: 900,
        chefTip: '源自医圣张仲景《金匮要略》之经典配伍，生姜与当归同煎能温阳活血、消除羊膻。'
      },
      {
        stepIndex: 3,
        title: '捞出当归片下大米同煲',
        instruction: '捞出当归片（避免久煮苦涩过重），下入淘洗好的大米，大火煮沸后转中火慢熬20分钟至米粒碎化开花。',
        timerSeconds: 1200,
        chefTip: '当归煮15分钟药力已尽数进入汤中，捞去当归片能保持粥汤清香不苦。'
      },
      {
        stepIndex: 4,
        title: '下羊肉片大火生滚慢煨',
        instruction: '转大火沸滚，下入焯好的薄羊肉片与老姜细丝，大火沸煮3分钟至羊肉完全软烂入味。',
        timerSeconds: 180,
        chefTip: '羊肉薄片下锅3分钟即可软熟断生，肉香浸入药膳米浆中。'
      },
      {
        stepIndex: 5,
        title: '化入红糖胡椒起锅',
        instruction: '调入老红糖、盐与大量现磨白胡椒粉，撒入葱花离火焖半分钟温食。',
        timerSeconds: 30,
        chefTip: '喝下一碗浑身发汗、寒气消散，是冬日温阳第一神仙汤。'
      }
    ],
    chefTips: [
      '羊肉切薄片焯透去净膻味浮沫。',
      '当归生姜先煎15分钟后捞去当归片防苦。',
      '大量老生姜丝配合白胡椒粉祛除风寒。',
      '加入老红糖温通经脉，特别适宜体寒女性。'
    ],
    proTips: '张仲景当归生姜羊肉汤化裁为粥，当归煎透去渣下米与薄羊肉片慢滚，调入老红糖老姜丝，温阳通经、驱尽冬寒。',
    nutritionHighlights: '羊肉性大温，富含高品质蛋白质与血红素铁，配合当归生姜活血行气、散寒止痛，是治疗体寒宫寒、手足不温的千古名方。'
  },
  {
    id: 'rec_congee_54',
    name: '桂花糖芋头红豆沙温润秋蜜粥',
    subtitle: '江南红香芋酥糯滑口，红小豆文火慢熬成细腻红豆沙，金桂飘香秋令至味',
    region: '江苏无锡/南京',
    cookingMethod: '文火慢煨',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: '简单',
    servings: 2,
    calories: 265,
    protein: 7.0,
    fat: 1.2,
    carbs: 56.0,
    ratio: '芋头红豆250g:大米40g:水600ml',
    tags: ['江南名点', '金陵风味', '糖芋头红豆沙', '金桂飘香'],
    ingredients: [
      { name: '新鲜小红香芋/毛芋头', amount: 150, unit: '克', type: 'main' },
      { name: '优质红小豆', amount: 40, unit: '克', type: 'main' },
      { name: '圆粒糯米/粳米', amount: 30, unit: '克', type: 'main' },
      { name: '新鲜干金桂花', amount: 2, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '太古多晶老红糖', amountText: '25克 (增色出沙)', baseAmount: 25, unit: '克', isPantryStaple: true },
      { name: '食用小苏打', amountText: '0.5克 (促芋头软糯赤红)', baseAmount: 0.5, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '红香芋削皮切滚刀块微煮',
        instruction: '小芋头戴手套削去毛皮，洗净切成约2.5cm的滚刀块；加水煮沸加0.5g食用小苏打微煮2分钟捞出冲水。',
        timerSeconds: 300,
        chefTip: '小苏打能破坏芋头表层硬胶质，不仅使芋头极易酥糯融化，更能促使芋头在红糖中呈现传统老字号特有的诱人赤红色。'
      },
      {
        stepIndex: 2,
        title: '红豆提前浸泡慢煲成沙',
        instruction: '红小豆洗净温水浸泡2小时，放入砂锅加600ml清水大火煮沸，转中小火慢煲25分钟至豆粒开花发沙。',
        timerSeconds: 1500,
        chefTip: '红豆一定要先煲到爆裂出沙，红豆沙融化在汤里成为浓稠红色底露。'
      },
      {
        stepIndex: 3,
        title: '下糯米与焯好的红香芋同煨',
        instruction: '倒入淘净的糯米与小芋头块，继续加盖小火慢煨20分钟，中途顺时针轻搅防止糯米糊底。',
        timerSeconds: 1200,
        chefTip: '芋头在红豆沙与糯米浆中煨至外层微融、内里粉糯如板栗。'
      },
      {
        stepIndex: 4,
        title: '下老红糖煮至赤红粘稠',
        instruction: '调入古法老红糖，搅拌3分钟使糖分完全渗透入芋头芯中，汤色转为深亮赤红，浓香扑鼻。',
        timerSeconds: 180,
        chefTip: '红糖能让芋头由白转为红亮，糖香与豆香交融。'
      },
      {
        stepIndex: 5,
        title: '撒金桂花起锅装白瓷碗',
        instruction: '盛入瓷碗，在表面均匀洒落金黄干桂花，香气袭人趁热舀食。',
        timerSeconds: 20,
        chefTip: '江南秋季头牌甜粥，芋头软糯拉丝，红豆沙绵密细腻。'
      }
    ],
    chefTips: [
      '芋头微焯加极微量小苏打，软糯赤红。',
      '红小豆先煲25分钟彻底起沙。',
      '糯米增加顺滑稠度防分层。',
      '出锅必撒干金桂花，花香四溢解甜腻。'
    ],
    proTips: '红豆慢煲出沙，小芋头微碱处理煮至酥糯赤红，调入老红糖同煨，撒金黄干桂花，香甜软糯、秋意浓郁。',
    nutritionHighlights: '芋头富含优质黏液蛋白与钾元素，红小豆清热利湿健脾，老红糖活血暖宫，润燥安神。'
  },
  {
    id: 'rec_congee_55',
    name: '莲子心绿豆清心安神败火夏粥',
    subtitle: '绿豆冷冻破壁极速起沙，莲子去芯留微苦清心火，盛夏败火安眠妙品',
    region: '华南/民间验方',
    cookingMethod: '明火大沸',
    prepTimeMinutes: 15,
    cookTimeMinutes: 28,
    difficulty: '新手友好',
    servings: 2,
    calories: 195,
    protein: 7.5,
    fat: 0.8,
    carbs: 42.0,
    ratio: '1:10 (豆米70g:水700ml)',
    tags: ['清心火', '败火解热', '失眠心烦', '盛夏经典'],
    ingredients: [
      { name: '优质明绿豆 (冷冻破壁)', amount: 40, unit: '克', type: 'main' },
      { name: '东北大米', amount: 25, unit: '克', type: 'main' },
      { name: '干白莲子', amount: 15, unit: '克 (留微量莲心)', type: 'main' },
      { name: '鲜百合瓣', amount: 20, unit: '克', type: 'secondary' }
    ],
    seasonings: [
      { name: '单晶冰糖', amountText: '20克 (甘凉调和)', baseAmount: 20, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '绿豆带微量水冷冻破壳',
        instruction: '绿豆淘洗干净，加刚好没过豆子的少量凉水冷冻20分钟至结成硬冰块。',
        timerSeconds: 1200,
        chefTip: '冰晶膨胀撑裂豆皮，投入沸水10分钟极速爆开出沙，省时省火。'
      },
      {
        stepIndex: 2,
        title: '莲子温水泡发挑留微芯',
        instruction: '白莲子温水泡发30分钟，大多数莲子去芯，特意保留3-4颗微苦绿芯。',
        timerSeconds: 1800,
        chefTip: '民间名方妙在“去芯留其精”，全去芯则败火无力，全留芯则苦涩难咽，保留几颗微芯刚好产生清心安神、苦尽甘来的绝妙层次。'
      },
      {
        stepIndex: 3,
        title: '沸水大火狂滚下冻绿豆大米',
        instruction: '砂锅注入700ml水大沸，倒入结冰绿豆、大米与处理好的莲子，保持大火持续剧烈沸腾翻滚12分钟。',
        timerSeconds: 720,
        chefTip: '大火沸滚对流，绿豆沙迅速溢出融化于米浆中。'
      },
      {
        stepIndex: 4,
        title: '下鲜百合中小火慢煲成沙',
        instruction: '转中小火加入掰好的鲜百合，慢煮10分钟至百合变透明软烂，汤色微黄碧绿。',
        timerSeconds: 600,
        chefTip: '鲜百合甘凉柔润，中和莲心的清苦，使汤汁甘爽。'
      },
      {
        stepIndex: 5,
        title: '调入单晶冰糖融化温服',
        instruction: '调入单晶冰糖搅拌至融化，关火加盖焖2分钟即可起锅温服或冷藏冰镇。',
        timerSeconds: 120,
        chefTip: '微苦回甘，清心除烦，对夏季口舌生疮、心烦失眠效果极佳。'
      }
    ],
    chefTips: [
      '绿豆冷冻后入沸水10分钟极速爆开成沙。',
      '莲子大部分去芯，特意留3-4枚微芯清心火。',
      '鲜百合后下保持软烂清甜。',
      '冰糖调和甘凉，苦甘平衡最为爽喉。'
    ],
    proTips: '冷冻绿豆入沸水极速爆开，莲子去大芯留微量莲心，与鲜百合大米慢熬成沙调冰糖，苦甘适度、清心泻火、安神助眠。',
    nutritionHighlights: '莲子心含莲心碱、异莲心碱，强心降压、清心热，配伍绿豆百合，是夏季清热除烦、失眠盗汗的最佳药膳。'
  },
  {
    id: 'rec_congee_56',
    name: '麦仁红薯老南瓜粗粮农家甜粥',
    subtitle: '整粒去皮小麦仁麦香浓郁，农家红薯粉糯，老南瓜化成金亮蜜羹',
    region: '华北/中原农家',
    cookingMethod: '柴火慢煲',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: '新手友好',
    servings: 2,
    calories: 230,
    protein: 6.5,
    fat: 1.5,
    carbs: 48.0,
    ratio: '1:9 (粗粮80g:水720ml)',
    tags: ['粗粮农家', '天然蜜甜', '麦仁Q弹', '排毒养胃'],
    ingredients: [
      { name: '优质整粒脱皮麦仁/麦豆', amount: 35, unit: '克', type: 'main' },
      { name: '农家蜜甜红薯/地瓜', amount: 100, unit: '克', type: 'main' },
      { name: '红皮老南瓜', amount: 100, unit: '克', type: 'main' },
      { name: '东北大米', amount: 25, unit: '克', type: 'main' }
    ],
    seasonings: [
      { name: '纯净水', amountText: '720ml (天然红薯南瓜蜜甜，无需放糖)', baseAmount: 720, unit: 'ml', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '去皮小麦仁温水浸透',
        instruction: '选用农家去皮麦仁洗净，加温水浸泡1小时充分吸水软化。',
        timerSeconds: 3600,
        chefTip: '小麦仁质地致密，浸泡后下锅才能煮至爆开炸裂，咀嚼时爽脆Q弹、麦香醇正。'
      },
      {
        stepIndex: 2,
        title: '红薯南瓜去皮切滚刀块',
        instruction: '红薯与老南瓜削皮，切成约2cm均匀滚刀块备用。',
        timerSeconds: 240,
        chefTip: '选用红心蜜薯和老南瓜，自带极高糖分，煮透后甜汁完全融入麦浆，根本无需加糖。'
      },
      {
        stepIndex: 3,
        title: '砂锅水沸下麦仁大米煮沸',
        instruction: '砂锅注入720ml水大沸，下入泡透的麦仁与大米，大火保持剧烈翻滚15分钟。',
        timerSeconds: 900,
        chefTip: '麦仁与大米同翻滚，大火促使麦仁外壳破裂，释放天然麦香。'
      },
      {
        stepIndex: 4,
        title: '下红薯南瓜慢熬至酥烂化羹',
        instruction: '放入红薯块与老南瓜块，转中小火加盖慢熬25分钟，南瓜大部分化为金黄稠泥，红薯粉糯如糖心。',
        timerSeconds: 1500,
        chefTip: '南瓜化泥成金汤包裹着粒粒弹牙的麦仁，口感极其丰富。'
      },
      {
        stepIndex: 5,
        title: '关火离灶焖透出锅享用',
        instruction: '关火加盖离灶焖5分钟，开盖金黄满溢，香气四溢趁热享用。',
        timerSeconds: 300,
        chefTip: '天然红薯与南瓜的浓郁甘甜，麦仁粒粒筋道，原汁原味的农家质朴美味。'
      }
    ],
    chefTips: [
      '整粒麦仁温水浸泡1小时吸水回软。',
      '选用农家蜜红薯与红皮老南瓜，天然甘甜不需加糖。',
      '麦仁大米大火翻滚15分钟破皮。',
      '南瓜慢炖化泥成金黄稠羹，麦仁Q弹筋道。'
    ],
    proTips: '去皮小麦仁温水泡透，与红心蜜薯、老南瓜块慢火同熬至南瓜化泥、红薯粉糯，麦仁Q弹筋道，无需加糖自带浓郁天然农家甜香。',
    nutritionHighlights: '小麦仁富含B族维生素、膳食纤维与植物蛋白质，红薯南瓜富含胡萝卜素与果胶，润肠通便、健脾益胃、益气养身。'
  },
  {
    id: 'rec_congee_57',
    name: '葛根粉山药百合清润健脾稠粥',
    subtitle: '野生葛根粉开水冲调晶莹如玉，铁棍山药粉糯百合清心，解肌生津清润',
    region: '华中/湖北',
    cookingMethod: '慢熬勾芡',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '简单',
    servings: 2,
    calories: 215,
    protein: 5.5,
    fat: 1.0,
    carbs: 46.0,
    ratio: '1:10 (大米山药80g:水800ml)',
    tags: ['解肌生津', '清热润燥', '野生葛根粉', '脾胃调理'],
    ingredients: [
      { name: '优质野生纯葛根粉', amount: 25, unit: '克', type: 'main' },
      { name: '正品温县铁棍山药', amount: 100, unit: '克', type: 'main' },
      { name: '东北珍珠大米', amount: 60, unit: '克', type: 'main' },
      { name: '鲜甜百合瓣', amount: 20, unit: '克', type: 'secondary' },
      { name: '枸杞子', amount: 10, unit: '粒', type: 'secondary' }
    ],
    seasonings: [
      { name: '单晶冰糖', amountText: '20克', baseAmount: 20, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '铁棍山药切丁百合洗净',
        instruction: '铁棍山药去皮切成1cm见方小丁；鲜百合洗净掰成小瓣备用。',
        timerSeconds: 180,
        chefTip: '切小丁的山药容易在粥中受热透心，粉糯适口。'
      },
      {
        stepIndex: 2,
        title: '葛根粉凉白开化水调匀',
        instruction: '取纯葛根粉加入50ml凉开水充分搅拌化开成均匀无颗粒的乳白粉浆备用。',
        timerSeconds: 120,
        chefTip: '葛根粉必须用凉水彻底化匀，绝不能直接下沸水，否则结成黏疙瘩无法化开。'
      },
      {
        stepIndex: 3,
        title: '砂锅慢熬大米山药稠粥',
        instruction: '砂锅水滚下大米与山药丁，大火保持翻滚沸腾18分钟，转中火煮至米花大开、山药酥软。',
        timerSeconds: 1080,
        chefTip: '山药与大米熬煮出天然稠滑米汤。'
      },
      {
        stepIndex: 4,
        title: '下百合淋入葛根粉浆勾芡',
        instruction: '加入鲜百合与冰糖煮2分钟；将火调小，一边顺时针快速搅动粥汤，一边缓缓淋入调匀的葛根粉浆。',
        timerSeconds: 180,
        chefTip: '小火慢淋快速搅拌，葛根粉遇热瞬间糊化，整锅粥转为晶莹剔透、温润如玉的拉丝稠羹。'
      },
      {
        stepIndex: 5,
        title: '撒枸杞关火出锅温饮',
        instruction: '撒入枸杞，关火加盖焖1分钟即可盛碗温食。',
        timerSeconds: 60,
        chefTip: '晶莹透明，入口细腻滑糯，甘润生津。'
      }
    ],
    chefTips: [
      '葛根粉务必先用凉开水完全调匀成粉浆。',
      '小火慢淋边倒边顺时针快速搅动，晶莹出胶。',
      '山药切小方丁易熟透粉糯。',
      '鲜百合后下保持脆爽甘甜。'
    ],
    proTips: '纯葛根粉凉水化开，趁粥热小火淋入顺搅至晶莹如玉，搭配铁棍山药与鲜百合，清凉生津、解肌退热、健脾止泻。',
    nutritionHighlights: '葛根富含葛根素与大豆苷元，能解肌生津、扩张冠状血管、降血糖降血压，配伍山药百合，调和阴阳润五脏。'
  },
  {
    id: 'rec_congee_58',
    name: '茯苓白术炒薏仁祛湿温脾养生粥',
    subtitle: '国医经典健脾三剑客，炒薏仁白术除寒湿，茯苓淡渗利湿温润脾阳',
    region: '华东/中医名方',
    cookingMethod: '慢火细熬',
    prepTimeMinutes: 20,
    cookTimeMinutes: 45,
    difficulty: '简单',
    servings: 2,
    calories: 215,
    protein: 6.5,
    fat: 1.5,
    carbs: 44.0,
    ratio: '1:10 (食材80g:水800ml)',
    tags: ['国医验方', '健脾三剑客', '温脾祛湿', '不伤脾阳'],
    ingredients: [
      { name: '炒薏米/炒薏苡仁', amount: 25, unit: '克', type: 'main' },
      { name: '正品白茯苓片/块', amount: 15, unit: '克', type: 'main' },
      { name: '炒白术薄片', amount: 8, unit: '克', type: 'main' },
      { name: '优质粳米/大米', amount: 40, unit: '克', type: 'main' },
      { name: '若羌大红枣', amount: 4, unit: '枚', type: 'secondary' }
    ],
    seasonings: [
      { name: '纯净水', amountText: '800ml', baseAmount: 800, unit: 'ml', isPantryStaple: true },
      { name: '单晶冰糖', amountText: '10克 (微甘提味)', baseAmount: 10, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '炒白术茯苓片装料包',
        instruction: '炒白术与茯苓洗净，装入干净无纺布料包中绑紧。',
        timerSeconds: 180,
        chefTip: '白术性温苦燥，装入料包煮出药力后捞除，能防止药渣粗纤维混入粥中，保留醇香底味。'
      },
      {
        stepIndex: 2,
        title: '炒薏仁与大米温水浸泡',
        instruction: '微焦黄的炒薏仁与大米淘净，温水浸泡30分钟备用。',
        timerSeconds: 1800,
        chefTip: '炒薏仁去除了生薏米的寒凉，温脾健胃效果倍增。'
      },
      {
        stepIndex: 3,
        title: '砂锅大火下药包与米粒同沸',
        instruction: '砂锅注入800ml水大沸，下入料包、炒薏米、大米与去核红枣，大火保持沸腾15分钟。',
        timerSeconds: 900,
        chefTip: '大火对流促使白术挥发油与茯苓多糖均匀释放于米浆中。'
      },
      {
        stepIndex: 4,
        title: '转小火慢熬30分钟米花化开',
        instruction: '转微小火加盖慢煲30分钟，煮至炒薏仁开花软熟，米汤浓稠挂勺。',
        timerSeconds: 1800,
        chefTip: '红枣的甘甜能很好地压制白术的微苦，药香温醇适口。'
      },
      {
        stepIndex: 5,
        title: '捞出药包调味出锅温服',
        instruction: '捞去药包，调入少许冰糖调和，关火焖2分钟盛入瓷碗温服。',
        timerSeconds: 120,
        chefTip: '甘香温厚，专调脾虚湿重、神疲乏力、舌苔厚腻。'
      }
    ],
    chefTips: [
      '炒白术装料包同煲，煮好捞除口感更佳。',
      '薏仁必须用炒薏仁，祛湿而不伤脾阳。',
      '加入去核红枣中和中药微苦，入口回甘。',
      '砂锅小火慢煲45分钟，药性与米油完全交融。'
    ],
    proTips: '炒白术茯苓料包与炒薏仁、大米红枣同煲45分钟，捞包调微甜，白术燥湿健脾，茯苓淡渗利湿，温和强健脾胃。',
    nutritionHighlights: '经典“四君子汤”与健脾利水古法化裁，茯苓多糖与白术挥发油协同作用，健脾燥湿、生津益气、消除水肿。'
  },
  {
    id: 'rec_congee_59',
    name: '玉米糁高粱米北方地道黄金棒子面粥',
    subtitle: '老石磨金黄玉米糁，红高粱米粒粒劲道，柴火慢熬出金亮糊香厚米油',
    region: '华北/东北',
    cookingMethod: '大火沸熬',
    prepTimeMinutes: 10,
    cookTimeMinutes: 30,
    difficulty: '新手友好',
    servings: 2,
    calories: 195,
    protein: 6.0,
    fat: 2.2,
    carbs: 40.0,
    ratio: '1:10 (粗粮70g:水700ml)',
    tags: ['北方地道', '黄金棒子面', '粗粮糊香', '质朴养胃'],
    ingredients: [
      { name: '农家现磨中粒金黄玉米糁', amount: 50, unit: '克', type: 'main' },
      { name: '脱壳红高粱米', amount: 20, unit: '克', type: 'main' },
      { name: '纯净水/井水', amount: 700, unit: 'ml', type: 'main' }
    ],
    seasonings: [
      { name: '食用小苏打', amountText: '指尖微量 (0.3g 促稠与释放烟酸)', baseAmount: 0.3, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '红高粱米温水浸泡软化',
        instruction: '红高粱米淘净，温水浸泡1小时吸水软化；玉米糁过细箩去浮尘备用。',
        timerSeconds: 3600,
        chefTip: '高粱米质地较硬需要提前泡透，与玉米糁同煮才能软烂适口。'
      },
      {
        stepIndex: 2,
        title: '玉米糁凉水调成稀玉米糊',
        instruction: '取小碗放玉米糁，加100ml凉水调匀成稀薄无干粉团的玉米流糊。',
        timerSeconds: 120,
        chefTip: '玉米糁必须先用冷水调匀再下滚水锅，绝不能直接倒干粉，否则瞬间结成夹生大疙瘩。'
      },
      {
        stepIndex: 3,
        title: '沸水下高粱米先滚煮10分钟',
        instruction: '铁锅或砂锅注入600ml水大沸，下入泡透的高粱米，大火煮10分钟至高粱微胀。',
        timerSeconds: 600,
        chefTip: '高粱米耐火，先煮10分钟打底。'
      },
      {
        stepIndex: 4,
        title: '淋入玉米糊加微量碱面顺搅',
        instruction: '将火调微小，一边用勺子顺时针用力搅锅，一边缓缓淋入玉米糊，加入指尖大小食用小苏打（0.3g），立刻大火滚沸。',
        timerSeconds: 180,
        chefTip: '北方老师傅绝技：微量小苏打能破坏玉米坚硬的外壁，将结合型烟酸（维生素PP）彻底释放出来，整锅粥瞬间稠如锦缎、金黄喷香。'
      },
      {
        stepIndex: 5,
        title: '中小火顺搅10分钟出糊香',
        instruction: '转中小火保持咕嘟微滚状态煮10分钟，不停顺时针搅底防焦，煮至汤如金胶、糊香四溢即可出锅。',
        timerSeconds: 600,
        chefTip: '表面凝出一层厚厚的金黄油皮，配咸菜热饼，北方地道大美。'
      }
    ],
    chefTips: [
      '玉米糁先用凉水调成糊再入沸锅绝不起疙瘩。',
      '指尖微量食用碱面促进烟酸释放、黏稠金黄。',
      '高粱米提前泡透增加嚼劲层次。',
      '全程勤顺时针搅锅底防粘，熬出纯正地道糊香。'
    ],
    proTips: '玉米糁凉水调糊入沸锅，加指尖微量小苏打彻底释放结合型烟酸，顺搅至金黄如胶、糊香弥漫，原汁原味北方农家魂。',
    nutritionHighlights: '玉米糁富含玉米黄素、叶黄素与膳食纤维，微碱性环境下烟酸完全游离吸收，护眼明目、润肠降脂。'
  },
  {
    id: 'rec_congee_60',
    name: '紫薯芋头西米露清甜养颜温粥',
    subtitle: '富硒紫薯如紫霞染透米露，荔浦芋头粉糯香滑，晶莹西米清甜养颜',
    region: '华南/港式甜品',
    cookingMethod: '温火慢煨',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: '简单',
    servings: 2,
    calories: 240,
    protein: 4.5,
    fat: 2.0,
    carbs: 52.0,
    ratio: '食材300g:大米20g:水600ml',
    tags: ['港式甜水', '梦幻紫薯', '荔浦芋头', '西米Q弹'],
    ingredients: [
      { name: '新鲜富硒紫薯', amount: 100, unit: '克', type: 'main' },
      { name: '正宗荔浦芋头', amount: 100, unit: '克', type: 'main' },
      { name: '泰国小西米', amount: 30, unit: '克', type: 'main' },
      { name: '圆粒糯米/大米', amount: 20, unit: '克', type: 'secondary' },
      { name: '全脂纯牛奶/椰浆', amount: 100, unit: 'ml', type: 'secondary' }
    ],
    seasonings: [
      { name: '单晶老冰糖', amountText: '25克 (甘润清甜)', baseAmount: 25, unit: '克', isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: '西米大火沸煮焖至透明',
        instruction: '小锅大火水沸倒入干西米，大火滚煮10分钟（中间尚存白芯），关火加盖焖15分钟至全透明，捞出过凉开水沥干。',
        timerSeconds: 1500,
        chefTip: '西米切忌冷水下锅，沸水下锅煮10分钟后加盖焖透，再过冷开水，颗颗晶莹剔透如水晶弹珠。'
      },
      {
        stepIndex: 2,
        title: '紫薯芋头切均匀小方丁',
        instruction: '紫薯与荔浦芋头削皮，切成约1.5cm均匀方丁备用。',
        timerSeconds: 240,
        chefTip: '切丁大小一致，在粥中受热均匀，紫薯软糯化沙，芋头粉香可口。'
      },
      {
        stepIndex: 3,
        title: '砂锅慢熬紫薯芋头米粥',
        instruction: '砂锅注入500ml水烧沸，下入糯米、紫薯丁与芋头丁，大火煮沸后转中小火慢煲20分钟至紫薯软烂出沙。',
        timerSeconds: 1200,
        chefTip: '紫薯花青素充分释放，将整锅米露染成诱人的梦幻深紫色。'
      },
      {
        stepIndex: 4,
        title: '注入纯牛奶冰糖调和奶香',
        instruction: '倒入100ml纯牛奶或椰浆，加入单晶冰糖，小火慢煨3分钟至冰糖融化，汤色变为柔和奶紫色。',
        timerSeconds: 180,
        chefTip: '牛奶最后加入，小火微温融合，保持奶香纯正。'
      },
      {
        stepIndex: 5,
        title: '倒入Q弹西米起锅装碗',
        instruction: '将过凉透彻的水晶西米倒入锅中推匀，关火即可盛出。',
        timerSeconds: 30,
        chefTip: '西米晶莹弹牙，芋头粉糯拉丝，奶香浓郁，冷热皆宜。'
      }
    ],
    chefTips: [
      '西米大火煮10分钟关火焖15分钟至全透明过凉水。',
      '紫薯切丁慢熬出深紫花青素天然色素。',
      '牛奶椰浆最后调入保持浓郁乳香。',
      'Q弹西米最后入锅，颗颗饱满弹滑。'
    ],
    proTips: '西米煮透冰镇保持水晶Q弹，紫薯芋头慢煲成梦幻紫色稠露，兑入浓纯牛奶，芋头粉糯、西米爆弹、甜美温润。',
    nutritionHighlights: '紫薯富含大量原花青素、硒元素与膳食纤维，抗氧化衰老，芋头健脾润肠，西米清润开胃，颜值与营养兼备。'
  }
];
