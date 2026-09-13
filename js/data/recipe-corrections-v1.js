/**
 * 咕嘟食谱第一批内容核验修订（试点）
 * 原则：家庭可复现、用料与步骤一致、时间口径一致；热量仅标估算值。
 */
(function () {
  const corrections = {
    rec_gudu_0052: {
      name: "麻婆豆腐（家庭复刻版）",
      subtitle: "参考川味传统技法：豆瓣、豆豉、牛肉末与花椒构成麻辣鲜香，分次勾芡让豆腐入味不碎",
      difficulty: "中等",
      prepTimeMinutes: 15,
      cookTimeMinutes: 15,
      servings: 2,
      calories: 620,
      caloriePerServing: 310,
      ingredients: [
        { name: "嫩豆腐", amount: 400, unit: "克（切2厘米方块）", type: "main" },
        { name: "牛肉末", amount: 80, unit: "克", type: "main" },
        { name: "蒜苗", amount: 30, unit: "克（切段）", type: "secondary" },
        { name: "姜末", amount: 5, unit: "克", type: "secondary" },
        { name: "蒜末", amount: 5, unit: "克", type: "secondary" }
      ],
      seasonings: [
        { name: "郫县豆瓣酱", amount: 25, unit: "克（剁细）" },
        { name: "豆豉", amount: 8, unit: "克（剁碎）" },
        { name: "辣椒粉", amount: 3, unit: "克" },
        { name: "花椒粉", amount: 2, unit: "克（出锅前用）" },
        { name: "生抽", amount: 5, unit: "毫升" },
        { name: "水淀粉", amount: 45, unit: "毫升（分3次加入）" },
        { name: "食用油", amount: 25, unit: "毫升" },
        { name: "清水或无盐高汤", amount: 180, unit: "毫升" }
      ],
      steps: [
        { stepIndex: 1, title: "豆腐焯水", instruction: "豆腐切块。锅中水微沸，加少量盐，放入豆腐小火焯约2分钟，连水保温备用；捞取时用漏勺，避免弄碎。", detail: "豆腐切块。锅中水微沸，加少量盐，放入豆腐小火焯约2分钟，连水保温备用；捞取时用漏勺，避免弄碎。", timerSeconds: 120, chefTip: "水保持微沸即可，猛烈翻滚容易把豆腐冲碎。" },
        { stepIndex: 2, title: "炒香牛肉末和底料", instruction: "锅烧热放油，下牛肉末炒散至水汽收干、边缘微酥；加入豆瓣酱、豆豉、姜蒜末和辣椒粉，用中小火炒出红油。", detail: "锅烧热放油，下牛肉末炒散至水汽收干、边缘微酥；加入豆瓣酱、豆豉、姜蒜末和辣椒粉，用中小火炒出红油。", timerSeconds: 240, chefTip: "豆瓣和豆豉本身含盐，先不要额外加盐。" },
        { stepIndex: 3, title: "烧豆腐并分次勾芡", instruction: "加入清水或高汤烧开，放入豆腐和生抽，小火烧5分钟。水淀粉搅匀后分3次加入，每次轻推锅铲，待芡汁变亮再加下一次。", detail: "加入清水或高汤烧开，放入豆腐和生抽，小火烧5分钟。水淀粉搅匀后分3次加入，每次轻推锅铲，待芡汁变亮再加下一次。", timerSeconds: 420, chefTip: "不要大力翻炒；分次勾芡能让味汁逐层包住豆腐。" },
        { stepIndex: 4, title: "撒蒜苗和花椒粉", instruction: "加入蒜苗段轻推至断生，关火装盘，最后均匀撒花椒粉。尝味后再决定是否补盐。", detail: "加入蒜苗段轻推至断生，关火装盘，最后均匀撒花椒粉。尝味后再决定是否补盐。", timerSeconds: 120, chefTip: "花椒粉久煮香气会散，适合出锅前后加入。" }
      ],
      chefTips: ["家庭复刻版本并非唯一地方做法。", "豆瓣和豆豉含盐，调味应先尝后补。", "热量为按所列食材估算的整道菜数值，实际会随用油和品牌变化。"],
      tags: ["川味", "家庭复刻", "已核验试点", "下饭菜"]
    },
    rec_gudu_0122: {
      name: "西湖醋鱼（家庭复刻版）",
      subtitle: "草鱼以沸水汆熟，利用原汤调制糖醋芡汁；不煎、不炸，突出鲜嫩与酸甜",
      difficulty: "中等",
      prepTimeMinutes: 20,
      cookTimeMinutes: 12,
      servings: 3,
      calories: 900,
      caloriePerServing: 300,
      ingredients: [
        { name: "鲜活草鱼", amount: 900, unit: "克（去鳞鳃内脏，对剖改刀）", type: "main" },
        { name: "姜末", amount: 25, unit: "克", type: "secondary" }
      ],
      seasonings: [
        { name: "香醋", amount: 45, unit: "毫升" },
        { name: "白糖", amount: 30, unit: "克" },
        { name: "酱油", amount: 15, unit: "毫升" },
        { name: "绍兴黄酒", amount: 15, unit: "毫升" },
        { name: "盐", amount: 2, unit: "克（按口味调整）" },
        { name: "水淀粉", amount: 35, unit: "毫升" }
      ],
      steps: [
        { stepIndex: 1, title: "处理草鱼", instruction: "草鱼清理干净后沿脊骨片成两片，带骨一片在厚肉处斜切花刀但不切断。冲净血水，沥干备用。", detail: "草鱼清理干净后沿脊骨片成两片，带骨一片在厚肉处斜切花刀但不切断。冲净血水，沥干备用。", timerSeconds: 300, chefTip: "鱼必须新鲜；改刀是为使厚薄部位同步成熟。" },
        { stepIndex: 2, title: "沸水汆熟", instruction: "宽锅加足量水和一半姜末烧开，先放带骨鱼片，再放另一片，保持微沸约4分钟；鱼肉刚熟即轻轻捞出，皮面朝上装盘。", detail: "宽锅加足量水和一半姜末烧开，先放带骨鱼片，再放另一片，保持微沸约4分钟；鱼肉刚熟即轻轻捞出，皮面朝上装盘。", timerSeconds: 240, chefTip: "不要煎炸，也不要猛烈沸腾，避免鱼肉变老或破碎。" },
        { stepIndex: 3, title: "原汤调糖醋芡", instruction: "锅中保留约200毫升汆鱼原汤，加入黄酒、酱油、白糖、香醋、盐和剩余姜末煮沸，边搅拌边淋入水淀粉，煮至能薄薄挂勺。", detail: "锅中保留约200毫升汆鱼原汤，加入黄酒、酱油、白糖、香醋、盐和剩余姜末煮沸，边搅拌边淋入水淀粉，煮至能薄薄挂勺。", timerSeconds: 180, chefTip: "先保留一部分醋，出锅前补入可让酸香更清晰。" },
        { stepIndex: 4, title: "浇汁上桌", instruction: "将热糖醋芡均匀浇在鱼身上，立即上桌。", detail: "将热糖醋芡均匀浇在鱼身上，立即上桌。", timerSeconds: 60, chefTip: "家庭灶具火力不同，以鱼肉刚熟、筷子可轻松刺入厚处为准。" }
      ],
      chefTips: ["参考央视公开演示的汆鱼与原汤糖醋勾芡方法，调整为家庭用量。", "这是家庭复刻版本，不宣称代表唯一传统流派。", "热量为整道菜估算值。"],
      tags: ["浙江", "糖醋", "家庭复刻", "已核验试点"]
    },
    rec_gudu_0106: {
      name: "佛跳墙（家庭简化复刻版）",
      subtitle: "传统佛跳墙工艺复杂且需多日发料；本版本使用已泡发食材和预制高汤，保留分料处理、坛罐慢煨的核心思路",
      difficulty: "困难",
      prepTimeMinutes: 90,
      cookTimeMinutes: 240,
      servings: 4,
      calories: 2400,
      caloriePerServing: 600,
      ingredients: [
        { name: "已泡发海参", amount: 200, unit: "克", type: "main" },
        { name: "已泡发花胶", amount: 150, unit: "克", type: "main" },
        { name: "鲜鲍鱼", amount: 4, unit: "只（去内脏刷净）", type: "main" },
        { name: "干贝", amount: 40, unit: "克（提前泡软）", type: "main" },
        { name: "猪蹄筋", amount: 150, unit: "克（熟制）", type: "secondary" },
        { name: "鸡腿肉", amount: 250, unit: "克", type: "secondary" },
        { name: "金华火腿", amount: 40, unit: "克", type: "secondary" },
        { name: "花菇", amount: 6, unit: "朵（泡发）", type: "secondary" },
        { name: "鹌鹑蛋", amount: 8, unit: "个（煮熟去壳）", type: "secondary" }
      ],
      seasonings: [
        { name: "无盐鸡高汤", amount: 1200, unit: "毫升" },
        { name: "福建老酒或绍兴花雕", amount: 120, unit: "毫升" },
        { name: "姜", amount: 20, unit: "克" },
        { name: "葱", amount: 30, unit: "克" },
        { name: "盐", amount: 3, unit: "克（最后按味调整）" }
      ],
      steps: [
        { stepIndex: 1, title: "确认干货已安全泡发", instruction: "海参、花胶、干贝和花菇须分别按各自要求在冷藏条件下提前泡发并彻底清洗。本食谱时间不包含数日泡发过程；来源不明或有异味的干货不要使用。", detail: "海参、花胶、干贝和花菇须分别按各自要求在冷藏条件下提前泡发并彻底清洗。本食谱时间不包含数日泡发过程；来源不明或有异味的干货不要使用。", timerSeconds: 600, chefTip: "传统版本的前处理可能持续数日，不能把它包装成十几分钟快手菜。" },
        { stepIndex: 2, title: "分别焯水去腥", instruction: "海参、花胶、鲍鱼、鸡肉和蹄筋按原料分别用姜葱水短暂焯烫，撇去浮沫后沥干；火腿切片，花菇去蒂。", detail: "海参、花胶、鲍鱼、鸡肉和蹄筋按原料分别用姜葱水短暂焯烫，撇去浮沫后沥干；火腿切片，花菇去蒂。", timerSeconds: 1200, chefTip: "不同原料成熟度不同，应分别处理，不能一锅同时焯。" },
        { stepIndex: 3, title: "入罐加汤和酒", instruction: "耐热砂锅或带盖炖盅底部先放鸡肉、蹄筋、火腿和花菇，再放花胶、干贝、鲍鱼与海参，加入高汤和酒；液体以基本没过食材为准。", detail: "耐热砂锅或带盖炖盅底部先放鸡肉、蹄筋、火腿和花菇，再放花胶、干贝、鲍鱼与海参，加入高汤和酒；液体以基本没过食材为准。", timerSeconds: 900, chefTip: "容器不要装得过满，需留出受热沸腾空间。" },
        { stepIndex: 4, title: "密封慢煨", instruction: "加盖后以极小火保持轻微沸腾，或放入蒸箱慢蒸约3小时。期间检查水量和容器安全，避免烧干；最后30分钟加入鹌鹑蛋。", detail: "加盖后以极小火保持轻微沸腾，或放入蒸箱慢蒸约3小时。期间检查水量和容器安全，避免烧干；最后30分钟加入鹌鹑蛋。", timerSeconds: 10800, chefTip: "家庭制作不建议用棉绳、荷叶直接靠近明火。" },
        { stepIndex: 5, title: "调味并确认熟度", instruction: "确认鸡肉和蹄筋熟透、汤汁醇厚后尝味，按需少量加盐。海参与鲍鱼不宜无限久煮，若使用易老的品种可后段加入。", detail: "确认鸡肉和蹄筋熟透、汤汁醇厚后尝味，按需少量加盐。海参与鲍鱼不宜无限久煮，若使用易老的品种可后段加入。", timerSeconds: 600, chefTip: "不同干货品质和泡发程度差异很大，以实际熟度为准。" }
      ],
      chefTips: ["该版本是家庭简化复刻，不等同于聚春园非遗技艺的完整配方。", "传统工艺包含多种原料的长时间发制和高汤制作。", "热量为整锅粗略估算值，实际差异较大。"],
      tags: ["闽菜", "家庭简化版", "慢煨", "已核验试点"]
    },
    rec_gudu_0390: {
      name: "文思豆腐羹（家庭练习版）",
      subtitle: "以细切豆腐丝和清汤薄芡呈现淮扬刀工；家庭版降低刀工门槛，不使用无依据的宴会背书",
      difficulty: "困难",
      prepTimeMinutes: 30,
      cookTimeMinutes: 12,
      servings: 4,
      calories: 520,
      caloriePerServing: 130,
      ingredients: [
        { name: "嫩豆腐", amount: 350, unit: "克", type: "main" },
        { name: "熟鸡胸肉", amount: 40, unit: "克（切细丝）", type: "secondary" },
        { name: "火腿", amount: 20, unit: "克（切细丝）", type: "secondary" },
        { name: "香菇", amount: 2, unit: "朵（泡发后切细丝）", type: "secondary" },
        { name: "青菜叶", amount: 20, unit: "克（切细丝）", type: "secondary" }
      ],
      seasonings: [
        { name: "无盐鸡清汤", amount: 900, unit: "毫升" },
        { name: "盐", amount: 3, unit: "克（按汤底咸度调整）" },
        { name: "白胡椒粉", amount: 0.5, unit: "克" },
        { name: "水淀粉", amount: 40, unit: "毫升" },
        { name: "香油", amount: 3, unit: "毫升（可选）" }
      ],
      steps: [
        { stepIndex: 1, title: "豆腐切细丝", instruction: "豆腐修去外皮，先切约1毫米薄片，再切成尽量均匀的细丝。将豆腐丝轻轻推入清水中散开，换水一次去除碎屑。", detail: "豆腐修去外皮，先切约1毫米薄片，再切成尽量均匀的细丝。将豆腐丝轻轻推入清水中散开，换水一次去除碎屑。", timerSeconds: 1200, chefTip: "家庭练习不必追求夸张的‘穿针’，均匀、不碎更重要；务必使用锋利厨刀并注意手指安全。" },
        { stepIndex: 2, title: "清汤调味勾薄芡", instruction: "鸡清汤烧至微沸，加入盐和白胡椒粉。水淀粉搅匀后缓慢淋入，边淋边搅，使汤略有承托力但仍可流动。", detail: "鸡清汤烧至微沸，加入盐和白胡椒粉。水淀粉搅匀后缓慢淋入，边淋边搅，使汤略有承托力但仍可流动。", timerSeconds: 240, chefTip: "芡太厚会让豆腐丝结团，宁可先薄，必要时再补。" },
        { stepIndex: 3, title: "下配料和豆腐丝", instruction: "先放香菇丝、鸡丝和火腿丝煮2分钟，再将豆腐丝连少量清水轻轻滑入锅中，用勺背缓慢推动，保持微沸。", detail: "先放香菇丝、鸡丝和火腿丝煮2分钟，再将豆腐丝连少量清水轻轻滑入锅中，用勺背缓慢推动，保持微沸。", timerSeconds: 240, chefTip: "不要用锅铲来回翻动，以免切断豆腐丝。" },
        { stepIndex: 4, title: "加入青菜丝出锅", instruction: "加入青菜丝煮约30秒，尝味后关火；可淋少量香油，立即盛入汤碗。", detail: "加入青菜丝煮约30秒，尝味后关火；可淋少量香油，立即盛入汤碗。", timerSeconds: 60, chefTip: "成品应汤清芡薄、豆腐丝分明。" }
      ],
      chefTips: ["原步骤中的程序文本碎片已清除。", "刀工操作有割伤风险，新手可先切较粗丝练习。", "热量为整锅估算值。"],
      tags: ["淮扬风味", "刀工练习", "汤羹", "已核验试点"]
    },
    rec_gudu_0040: {
      name: "老式锅包肉（家庭复刻版）",
      subtitle: "里脊挂土豆淀粉湿糊，两次油炸后以糖醋汁快速烹裹；给出可执行比例与油温提示",
      difficulty: "困难",
      prepTimeMinutes: 25,
      cookTimeMinutes: 20,
      servings: 3,
      calories: 1650,
      caloriePerServing: 550,
      ingredients: [
        { name: "猪里脊", amount: 350, unit: "克（切约3毫米厚片）", type: "main" },
        { name: "土豆淀粉", amount: 120, unit: "克（加水沉淀后取湿糊）", type: "main" },
        { name: "葱白", amount: 20, unit: "克（切丝）", type: "secondary" },
        { name: "姜", amount: 10, unit: "克（切丝）", type: "secondary" },
        { name: "胡萝卜", amount: 20, unit: "克（切丝）", type: "secondary" },
        { name: "香菜", amount: 10, unit: "克（切段）", type: "secondary" }
      ],
      seasonings: [
        { name: "白糖", amount: 45, unit: "克" },
        { name: "米醋", amount: 45, unit: "毫升" },
        { name: "生抽", amount: 5, unit: "毫升（可选，用于底色）" },
        { name: "料酒", amount: 10, unit: "毫升" },
        { name: "盐", amount: 2, unit: "克" },
        { name: "炸制用油", amount: 1000, unit: "毫升（实际吸收量远低于此）" }
      ],
      steps: [
        { stepIndex: 1, title: "泡淀粉并腌肉", instruction: "土豆淀粉加足量水搅匀，静置至少20分钟后倒去上层清水，留下湿淀粉。里脊片加盐和料酒抓匀，腌10分钟。", detail: "土豆淀粉加足量水搅匀，静置至少20分钟后倒去上层清水，留下湿淀粉。里脊片加盐和料酒抓匀，腌10分钟。", timerSeconds: 1200, chefTip: "湿淀粉应能厚厚挂住肉片；太稀会脱糊。" },
        { stepIndex: 2, title: "挂糊初炸", instruction: "肉片逐片裹匀湿淀粉。油加热至约170℃，逐片下锅，分批炸至定型、浅金黄后捞出，约2至3分钟。", detail: "肉片逐片裹匀湿淀粉。油加热至约170℃，逐片下锅，分批炸至定型、浅金黄后捞出，约2至3分钟。", timerSeconds: 180, chefTip: "不要一次下太多，否则油温骤降、外壳吸油。" },
        { stepIndex: 3, title: "升温复炸", instruction: "油温升至约190℃，将肉片回锅复炸约30至45秒，至外壳金黄酥脆，立即捞出控油。", detail: "油温升至约190℃，将肉片回锅复炸约30至45秒，至外壳金黄酥脆，立即捞出控油。", timerSeconds: 45, chefTip: "高温油炸有烫伤和起火风险；锅边保持干燥，油锅起火不可泼水。" },
        { stepIndex: 4, title: "调糖醋汁", instruction: "白糖、米醋和生抽提前混合搅至糖基本溶解。锅中留约10毫升底油，炒香葱姜和胡萝卜丝，倒入糖醋汁煮至出现密集大泡。", detail: "白糖、米醋和生抽提前混合搅至糖基本溶解。锅中留约10毫升底油，炒香葱姜和胡萝卜丝，倒入糖醋汁煮至出现密集大泡。", timerSeconds: 120, chefTip: "糖醋汁必须提前调好，肉片回锅后没有时间再称量。" },
        { stepIndex: 5, title: "快速烹裹出锅", instruction: "倒入复炸肉片和香菜，大火快速翻匀，使表面薄薄挂汁，10秒内关火装盘。", detail: "倒入复炸肉片和香菜，大火快速翻匀，使表面薄薄挂汁，10秒内关火装盘。", timerSeconds: 10, chefTip: "不是炖煮；裹汁时间越长，外壳越容易回软。" }
      ],
      chefTips: ["这是偏哈尔滨老式风味的家庭复刻版本，不代表东北所有流派。", "涉及高温油炸，不建议儿童独立操作。", "热量为整道菜粗略估算；炸制实际吸油量会显著影响结果。"],
      tags: ["东北风味", "糖醋", "油炸", "家庭复刻", "已核验试点"]
    }
  };

  if (!Array.isArray(window.RECIPES_DATA)) return;
  window.RECIPES_DATA.forEach((recipe) => {
    const correction = corrections[recipe.id];
    if (!correction) return;
    Object.assign(recipe, correction, {
      image: recipe.photoUrl,
      contentReviewStatus: "source-reviewed-pilot",
      contentReviewVersion: "2026-09-08-v1",
      calorieLevel: "估算",
      calorieBurnTip: "热量为食材用量的粗略估算，不用于医疗或减重诊断。"
    });
  });
})();
