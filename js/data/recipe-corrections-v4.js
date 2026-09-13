/** 第一批来源复核：只覆盖已有明确工艺依据的 5 道菜。 */
(function () {
  const reviewedAt = "2026-09-12";
  const corrections = {
    rec_gudu_0001: {
      cookTimeMinutes: 8,
      steps: [
        { stepIndex: 1, title: "辣椒干煸", instruction: "余干辣椒洗净擦干、切斜段。净锅烧热后下辣椒和少量盐，中火煸至表皮微皱、香气明显，盛出。", detail: "余干辣椒洗净擦干、切斜段。净锅烧热后下辣椒和少量盐，中火煸至表皮微皱、香气明显，盛出。", timerSeconds: 120, chefTip: "余干辣椒是主角，不用花椒等重香料遮盖本味。" },
        { stepIndex: 2, title: "煸炒猪肉", instruction: "锅中放少量油，先下五花肉片煸出油脂，再放姜蒜炒香；肉片变色、边缘微卷时调入生抽。", detail: "锅中放少量油，先下五花肉片煸出油脂，再放姜蒜炒香；肉片变色、边缘微卷时调入生抽。", timerSeconds: 180, chefTip: "先煸出猪肉油脂，让辣椒吸收肉香。" },
        { stepIndex: 3, title: "合炒出锅", instruction: "倒回辣椒，旺火快速翻炒约1分钟；尝味后补盐，锅内无明显汤汁时立即出锅。", detail: "倒回辣椒，旺火快速翻炒约1分钟；尝味后补盐，锅内无明显汤汁时立即出锅。", timerSeconds: 60, chefTip: "保持辣椒柔脆，避免久炒出水。" }
      ],
      sourceReview: { status: "reviewed", reviewedAt, sources: [
        { title: "DB36/T 1915—2023 赣菜基础味型术语与定义", url: "https://dbba.sacinfo.org.cn/attachment/downloadStdFile?pk=a3886549a9496a5a9cdcadb8547a2b32c37357fe38273058c518b4fb6d33cc65", role: "菜系与代表菜依据" },
        { title: "江西菜经典菜肴介绍：余干辣椒炒肉", url: "https://exp.lnc.edu.cn/suite/portal/res?key=42882512", role: "核心食材与风味依据" }
      ]}
    },
    rec_gudu_0009: {
      prepTimeMinutes: 25, cookTimeMinutes: 125,
      steps: [
        { stepIndex: 1, title: "清洗焯水", instruction: "牛肚、牛肠等牛杂分别用盐和面粉揉洗，再用清水冲净；沸水下锅焯约2分钟，捞出洗净后切小段。", detail: "牛肚、牛肠等牛杂分别用盐和面粉揉洗，再用清水冲净；沸水下锅焯约2分钟，捞出洗净后切小段。", timerSeconds: 120, chefTip: "牛杂必须来自合规渠道并彻底清洗。" },
        { stepIndex: 2, title: "加料慢煮", instruction: "牛杂入锅，加姜、米酒、鲜辣椒和干辣椒，注入没过食材的热水；烧开后转小火保持微沸。", detail: "牛杂入锅，加姜、米酒、鲜辣椒和干辣椒，注入没过食材的热水；烧开后转小火保持微沸。", timerSeconds: 300, chefTip: "辣度按家庭承受程度调整。" },
        { stepIndex: 3, title: "炖至熟软", instruction: "加盖小火炖约2小时，期间检查水量；至牛杂熟透且仍有韧爽口感，最后以盐调味。", detail: "加盖小火炖约2小时，期间检查水量；至牛杂熟透且仍有韧爽口感，最后以盐调味。", timerSeconds: 7200, chefTip: "不同部位成熟时间不同，先熟的可先捞出，避免口感过软。" }
      ],
      sourceReview: { status: "reviewed", reviewedAt, sources: [
        { title: "临川牛杂（鲜辣牛杂）", url: "https://www.douguo.com/cookbook/1476427.html", role: "原料处理、调味和炖煮时间依据" }
      ]}
    },
    rec_gudu_0012: {
      cookTimeMinutes: 12,
      steps: [
        { stepIndex: 1, title: "切鱼腌制", instruction: "草鱼处理干净后取肉切成长条块，加盐、少量酱油和料酒抓匀，腌约5分钟，再薄薄裹匀红薯淀粉。", detail: "草鱼处理干净后取肉切成长条块，加盐、少量酱油和料酒抓匀，腌约5分钟，再薄薄裹匀红薯淀粉。", timerSeconds: 300, chefTip: "鱼块大小尽量一致，裹粉不宜过厚。" },
        { stepIndex: 2, title: "过油定型", instruction: "锅中油烧热，分批下鱼块炸至表面金黄、内部熟透，捞出沥油。", detail: "锅中油烧热，分批下鱼块炸至表面金黄、内部熟透，捞出沥油。", timerSeconds: 240, chefTip: "不要一次放得过满，以免油温骤降、鱼块粘连。" },
        { stepIndex: 3, title: "酸辣合炒", instruction: "锅留底油，爆香姜蒜和青红椒，烹入米酒或米醋、生抽及少量水；倒入鱼块快速翻匀，收汁后撒葱段出锅。", detail: "锅留底油，爆香姜蒜和青红椒，烹入米酒或米醋、生抽及少量水；倒入鱼块快速翻匀，收汁后撒葱段出锅。", timerSeconds: 180, chefTip: "合炒要快，保留鱼肉外香内嫩和微酸风味。" }
      ],
      sourceReview: { status: "reviewed", reviewedAt, sources: [
        { title: "赣南小炒鱼做法", url: "https://m.xiachufang.com/recipe/103500525/", role: "切配、腌制、过油与合炒依据" },
        { title: "赣南小炒鱼介绍", url: "https://xiachuyi.com/recipe/277785/gannan-xiaochao-yu", role: "传统原料与酸香风味交叉验证" }
      ]}
    },
    rec_gudu_0014: {
      name: "广西柠檬鸭", prepTimeMinutes: 20, cookTimeMinutes: 35,
      ingredients: [
        { name: "麻鸭", amount: 750, unit: "克（斩块）", type: "main" },
        { name: "酸柠檬", amount: 35, unit: "克（去籽切碎）", type: "secondary" },
        { name: "酸荞头、酸姜、酸辣椒", amount: 100, unit: "克（切碎）", type: "secondary" },
        { name: "生姜、大蒜", amount: 30, unit: "克", type: "secondary" }
      ],
      steps: [
        { stepIndex: 1, title: "鸭块煸香", instruction: "鸭块洗净沥干。锅烧热后下鸭块煸炒，炒出水汽和部分鸭油，至表面微黄。", detail: "鸭块洗净沥干。锅烧热后下鸭块煸炒，炒出水汽和部分鸭油，至表面微黄。", timerSeconds: 600, chefTip: "沥干再下锅，避免大量出水影响香气。" },
        { stepIndex: 2, title: "焖至熟透", instruction: "加入姜蒜炒香，调入生抽和适量热水；加盖中小火焖至鸭肉熟透，期间翻动并检查水量。", detail: "加入姜蒜炒香，调入生抽和适量热水；加盖中小火焖至鸭肉熟透，期间翻动并检查水量。", timerSeconds: 1200, chefTip: "以鸭肉完全熟透为准，时间随鸭龄和块大小调整。" },
        { stepIndex: 3, title: "加入酸料收汁", instruction: "加入酸荞头、酸姜和酸辣椒翻炒入味；酸柠檬去籽切碎，在收汁阶段加入，翻匀后尝味出锅。", detail: "加入酸荞头、酸姜和酸辣椒翻炒入味；酸柠檬去籽切碎，在收汁阶段加入，翻匀后尝味出锅。", timerSeconds: 300, chefTip: "酸柠檬不宜过早久煮，去籽可减少苦味。" }
      ],
      sourceReview: { status: "reviewed", reviewedAt, sources: [
        { title: "T/GXAS 846—2024 广西柠檬鸭烹饪技术规程", url: "https://guangxibiaoxie.com/uploads/20240708/5918b931e4d13499fd6f531c981bd23e.pdf", role: "菜品定义、原料与炒制程序依据" }
      ]}
    },
    rec_gudu_0015: {
      prepTimeMinutes: 25, cookTimeMinutes: 6,
      steps: [
        { stepIndex: 1, title: "分部位处理猪杂", instruction: "猪腰剔净白色筋膜后切花刀；猪肝切片浸洗血水；粉肠去多余油脂并冲洗。分别用姜、米酒、盐和少量淀粉抓匀，腌10分钟。", detail: "猪腰剔净白色筋膜后切花刀；猪肝切片浸洗血水；粉肠去多余油脂并冲洗。分别用姜、米酒、盐和少量淀粉抓匀，腌10分钟。", timerSeconds: 600, chefTip: "内脏必须新鲜并彻底清洁，砧板和刀具注意生熟分开。" },
        { stepIndex: 2, title: "炒香老友料", instruction: "锅烧热下油，先爆香蒜末和豆豉，再下酸笋炒去水汽，加入酸辣椒和少量米醋炒出酸辣香气。", detail: "锅烧热下油，先爆香蒜末和豆豉，再下酸笋炒去水汽，加入酸辣椒和少量米醋炒出酸辣香气。", timerSeconds: 90, chefTip: "酸笋先炒香，是老友风味的关键。" },
        { stepIndex: 3, title: "按成熟速度旺火快炒", instruction: "先下较耐熟的肉片，再下猪腰和猪肝，最后下粉肠；全程旺火快速翻炒，所有猪杂完全断生后立即出锅。", detail: "先下较耐熟的肉片，再下猪腰和猪肝，最后下粉肠；全程旺火快速翻炒，所有猪杂完全断生后立即出锅。", timerSeconds: 180, chefTip: "必须保证内脏熟透；同时避免长时间加热导致口感变硬。" }
      ],
      sourceReview: { status: "reviewed", reviewedAt, sources: [
        { title: "老友炒猪杂", url: "https://www.xiachufang.com/recipe/107101340/", role: "猪杂处理、老友料构成及下锅次序依据" }
      ]}
    }
  };

  if (!Array.isArray(window.RECIPES_DATA)) return;
  window.RECIPES_DATA.forEach(recipe => {
    const correction = corrections[recipe.id];
    if (!correction) return;
    Object.assign(recipe, correction, {
      contentReviewStatus: "source-reviewed",
      contentReviewVersion: "2026-09-12-v4"
    });
  });
})();
