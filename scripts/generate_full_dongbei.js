// scripts/generate_full_dongbei.js
const fs = require('fs');
const path = require('path');

// 导入已有的前8道大菜与部分小炒
const part1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp_dongbei_part1.json'), 'utf8'));

// 添加剩余东北小炒 rec_prov_176 ~ rec_prov_192
const part2 = [
  {
    id: "rec_prov_176",
    name: "东北大院红烧溜肥肠段",
    region: "辽宁",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "溜",
    calories: 330,
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: "中等",
    portion: 2,
    ingredients: [
      { name: "熟猪大肠(斜切厚段)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "青红椒菱形片与洋葱块", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "蒜瓣碎末与大葱段", amount: 25, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "生抽与红烧老抽", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "陈醋", baseAmount: 8, unit: "ml", amountText: "8ml", isPantryStaple: true },
      { name: "料酒", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "白糖与精盐", baseAmount: 6, unit: "g", amountText: "6g", isPantryStaple: true },
      { name: "水淀粉(薄芡)", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "熟肥肠斜切厚段热油过油去腻焦边",
        instruction: "熟肥肠斜刀切马蹄段；热油烧至六成热，下肥肠大火冲炸20秒逼出油脂、表皮焦缩微脆时迅速捞出沥油。",
        timerSeconds: 120,
        chefTip: "过高油温快炸能去除油腻，大肠表皮微脆内里软弹。"
      },
      {
        stepIndex: 2,
        title: "爆香葱蒜配料烹陈醋生抽红油汁",
        instruction: "锅底留少许油，下大葱蒜末爆出香气，下青红椒洋葱翻炒断生，烹入生抽、老抽、料酒和一茶匙陈醋去膻提香。",
        timerSeconds: 90,
        chefTip: "微烹香醋挥发带走异味，酱色红润。"
      },
      {
        stepIndex: 3,
        title: "倒入肥肠极速勾芡挂满油亮芡汁",
        instruction: "倒回复炸好的肥肠，大火翻匀淋入水淀粉推成薄琉璃芡，撒入余下生蒜末出锅。",
        timerSeconds: 60,
        chefTip: "浓汁包油，入口毫无膻腥，肥香软糯。"
      }
    ],
    tips: "东北老牌大院名菜！肥肠处理得极干净，外皮微焦软弹柔韧，蒜香与红烧浓汁交融，下酒极佳。",
    tags: ["东北", "东北菜", "溜肥肠", "老菜馆硬菜", "软糯浓郁", "经典下酒"]
  },
  {
    id: "rec_prov_177",
    name: "东北沙瓤西红柿炒卷心菜",
    region: "黑龙江",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 120,
    prepTimeMinutes: 8,
    cookTimeMinutes: 6,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北沙瓤大西红柿(切大块)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "新鲜牛心甘蓝(卷心菜手撕大片)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "蒜片与葱花", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "白糖", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "甘蓝手撕大块西红柿切厚块",
        instruction: "卷心菜洗净去粗梗，用手撕成手掌大片沥干水；西红柿切滚刀块。",
        timerSeconds: 150,
        chefTip: "手撕比刀切断面更粗糙，能更好地饱吸西红柿浓汁。"
      },
      {
        stepIndex: 2,
        title: "热油先炒西红柿出浓郁红沙茄汁",
        instruction: "油热爆香葱蒜，下西红柿中火翻炒加半勺白糖，按压炒出浓稠酸甜红沙汤汁。",
        timerSeconds: 180,
        chefTip: "糖能加速西红柿出沙，酸甜适口。"
      },
      {
        stepIndex: 3,
        title: "倒入卷心菜大火狂翻断生即刻起锅",
        instruction: "倒入甘蓝大火旺翻45秒，加盐调味，见卷心菜变软塌微透明即刻关火出锅。",
        timerSeconds: 60,
        chefTip: "卷心菜不可久炒，保留清脆爽甜的汁水。"
      }
    ],
    tips: "东北家常菜里的清新救星！红沙酸甜的自然茄汁浸润每一片脆甜卷心菜，酸甜开胃生津，解腻第一名。",
    tags: ["东北", "东北菜", "西红柿炒甘蓝", "酸甜爽脆", "低卡开胃", "家常快手"]
  },
  {
    id: "rec_prov_178",
    name: "农家脆嫩蒜苔炒五花肉丝",
    region: "吉林",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 240,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "鲜嫩青蒜苔(切段)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "农家五花猪肉丝", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "干辣椒段、生姜丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "黄豆酱油或老抽", baseAmount: 4, unit: "ml", amountText: "4ml", isPantryStaple: true },
      { name: "精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "东北大豆油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "蒜苔切一寸长段肉丝抓浆底味",
        instruction: "蒜苔去头尾切3厘米段；五花肉切丝加少许生抽料酒抓匀。",
        timerSeconds: 150,
        chefTip: "蒜苔切段后可以用淡盐水浸泡几分钟，炒时易入味且色泽青翠。"
      },
      {
        stepIndex: 2,
        title: "五花肉丝煸出猪油爆干椒生姜",
        instruction: "热锅少油下五花肉丝煸至吐油微卷，下姜丝干辣椒爆香，烹生抽炒匀上色。",
        timerSeconds: 120,
        chefTip: "肉丝炒出油脂包裹蒜苔，香味浓厚。"
      },
      {
        stepIndex: 3,
        title: "倒入蒜苔旺火急炒断生喷水汽出锅",
        instruction: "下蒜苔大火猛翻1分半钟，沿锅边烹入一勺清水激发出蒸汽加快熟化，加盐翻匀起锅。",
        timerSeconds: 90,
        chefTip: "少许锅边水汽能让蒜苔保持清脆水灵，绝不发干干瘪。"
      }
    ],
    tips: "东北大地最为经典的荤素炒作！蒜苔脆嫩辛甜，五花肉咸香油润，锅气十足，拌饭绝顶过瘾。",
    tags: ["东北", "东北菜", "蒜苔炒肉", "经典家常", "脆嫩鲜美", "下饭必备"]
  },
  {
    id: "rec_prov_179",
    name: "东北夜市洋葱孜然煸实蚕",
    region: "辽宁",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北特产新鲜蚕蛹实蚕(切厚片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "紫洋葱丝与青椒丝", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "整颗大蒜末与白芝麻", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "粗粒孜然粒与孜然粉", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "细辣椒面", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "实蚕切厚片中火煎至两面起脆硬壳",
        instruction: "实蚕清洗沥干斜切厚片；平底锅多倒油，下实蚕片中火慢煎2-3分钟至切面金黄微焦起硬壳盛出。",
        timerSeconds: 180,
        chefTip: "必须煎出焦脆硬壳，口感才外焦里弹软糯多汁。"
      },
      {
        stepIndex: 2,
        title: "爆香洋葱青椒丝下蒜末炒出镬气",
        instruction: "锅底余油下洋葱丝青椒丝和大蒜末大火猛爆30秒至洋葱散开释放天然甜香。",
        timerSeconds: 60,
        chefTip: "洋葱爆出焦香与孜然是夜市烧烤风味的灵魂搭配。"
      },
      {
        stepIndex: 3,
        title: "倒回实蚕撒足量孜然辣椒面翻匀",
        instruction: "倒回实蚕片，喷入少许生抽与盐，撒入大量孜然粒、孜然粉、辣椒面和白芝麻，大火爆翻15秒出锅。",
        timerSeconds: 45,
        chefTip: "孜然要粗细结合，粗粒增嚼劲碎末提浓香。"
      }
    ],
    tips: "东北街头夜市大排档顶流下酒神馔！外皮焦香焦脆，内芯紧韧弹牙，孜然辣椒香气四溢，配冰镇啤酒绝杀全场。",
    tags: ["东北", "东北菜", "干煸实蚕", "夜市顶流", "孜然干香", "绝配下酒"]
  },
  {
    id: "rec_prov_180",
    name: "东北大白菜丝炒细红薯粉",
    region: "黑龙江",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 190,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北黄心大白菜(切细丝)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "泡发红薯细粉条", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "五花肉丝", amount: 50, unit: "g", type: "secondary", isCore: false },
      { name: "葱花、干辣椒", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油与老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "白菜帮叶分开切细丝粉条煮软",
        instruction: "白菜帮刀片薄再切细丝，叶切丝分开放；粉条焯水煮至软滑透亮捞出沥干。",
        timerSeconds: 150,
        chefTip: "先炒帮后炒叶，菜帮清脆多汁不软烂。"
      },
      {
        stepIndex: 2,
        title: "五花肉煸油先下白菜帮大火急炒",
        instruction: "热锅煸炒五花肉丝至出油，下葱干椒爆香，先下菜帮大火翻炒1分钟，再下菜叶翻软出汁。",
        timerSeconds: 120,
        chefTip: "白菜受热渗出的天然甜菜汁正好供粉条吸收。"
      },
      {
        stepIndex: 3,
        title: "倒入粉条淋老抽吸干菜汁起锅",
        instruction: "倒入粉条，淋入生抽、老抽上色，加盐调味，大火狂翻至粉条将白菜甜汁尽数吸干，油亮滑爽出锅。",
        timerSeconds: 90,
        chefTip: "粉条充分吸饱白菜原汁，极其软滑入味。"
      }
    ],
    tips: "东北冬日老百姓家家户户离不开的家常温情！白菜清甜多汁，细粉滑溜爽口裹满菜香，清淡却极有滋味。",
    tags: ["东北", "东北菜", "白菜炒粉条", "冬日家常", "滑爽清甜", "平民美食"]
  },
  {
    id: "rec_prov_181",
    name: "东北大平房油豆角炒肉段",
    region: "黑龙江",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 260,
    prepTimeMinutes: 12,
    cookTimeMinutes: 12,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北特产黄金钩油豆角(撕筋掰段)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "猪五花肉厚片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣片、大葱段", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "东北黄豆酱油或生抽", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "精盐与白糖", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "开水", baseAmount: 100, unit: "ml", amountText: "100ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "油豆角撕去老筋掰两段肉切片",
        instruction: "黄金钩油豆角撕去两侧豆筋，手掰成两截洗净；五花肉切成3毫米厚片。",
        timerSeconds: 150,
        chefTip: "必须彻底撕去侧筋，口感才软嫩无渣。"
      },
      {
        stepIndex: 2,
        title: "五花肉煸焦香下油豆角猛煸翠绿",
        instruction: "锅中下少许油，下五花肉片慢慢煸至微卷焦黄，下葱花蒜片，倒入油豆角大火猛煸2分钟至豆皮起泡翠绿。",
        timerSeconds: 180,
        chefTip: "油豆角先煸去生涩生青气，豆角起虎皮更易入味。"
      },
      {
        stepIndex: 3,
        title: "烹入酱油加少许水焖透熟透起锅",
        instruction: "烹入酱油、盐、少许糖，倒入半碗开水，加盖中小火焖煮5分钟至豆角软糯熟透，大火收浓汁撒蒜末出锅。",
        timerSeconds: 360,
        chefTip: "油豆角含有皂苷，必须彻底焖熟焖透才能安全食用，口感绵软如油脂。"
      }
    ],
    tips: "东北黑土地独有的特产珍味！黄金钩油豆角皮厚肉实、豆粒饱满，五花油脂焖入豆荚中软糯化渣，油润醇香无可匹敌。",
    tags: ["东北", "东北菜", "油豆角炒肉", "黑土地特产", "软糯油润", "家常小炒"]
  },
  {
    id: "rec_prov_182",
    name: "老腌雪里蕻炖大豆腐肉末",
    region: "吉林",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炖",
    calories: 200,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "老腌雪里蕻(切极细末)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "东北卤水老豆腐(切厚方块)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "肥三瘦七猪肉末", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "葱姜末、红辣椒圈", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "白胡椒粉", baseAmount: 1, unit: "g", amountText: "1g", isPantryStaple: true },
      { name: "精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "清水或高汤", baseAmount: 300, unit: "ml", amountText: "300ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "雪里蕻漂洗去多余咸味挤干切碎",
        instruction: "腌雪里蕻清水浸泡10分钟淘洗去涩咸，攥干水分切细碎末；老豆腐切成麻将块焯盐水沥出。",
        timerSeconds: 300,
        chefTip: "豆腐焯淡盐水不仅能去除豆腥，还能紧致蛋白质不易炖碎。"
      },
      {
        stepIndex: 2,
        title: "肉末炒香爆雪里蕻碎出特殊咸鲜",
        instruction: "热锅下油煸香肉末至出油发白，下葱姜末炒香，倒入雪里蕻碎大火煸炒出特殊的腌渍咸鲜香气。",
        timerSeconds: 150,
        chefTip: "雪里蕻一定要在油锅中充分煸炒，酸咸香气才会完全释放。"
      },
      {
        stepIndex: 3,
        title: "推入豆腐块添高汤小火咕嘟入味",
        instruction: "倒入豆腐块，加高汤或开水没过半面，烹生抽、白胡椒粉，中小火慢煨8分钟让豆腐气孔吸满咸鲜汤汁，稍收汁出锅。",
        timerSeconds: 500,
        chefTip: "老豆腐炖出小孔吸饱雪里蕻汁水，鲜美胜似蟹肉。"
      }
    ],
    tips: "东北老百姓冬春交际百吃不厌的开胃饭搭子！卤水老豆腐吸满雪里蕻独特的发酵咸香与肉汁，豆腐软嫩多汁，咸鲜适口极度下饭。",
    tags: ["东北", "东北菜", "雪里蕻炖豆腐", "咸香入味", "市井家常", "老少皆宜"]
  },
  {
    id: "rec_prov_183",
    name: "东北老式溜蒜香猪腰花",
    region: "辽宁",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "溜",
    calories: 250,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜猪腰两只(去净腰臊)", amount: 300, unit: "g", type: "main", isCore: true },
      { name: "青红椒片、黑木耳", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "大量大蒜瓣末与大葱花", amount: 35, unit: "g", type: "secondary", isCore: true }
    ],
    seasonings: [
      { name: "一品鲜生抽与老抽", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "陈醋", baseAmount: 6, unit: "ml", amountText: "6ml", isPantryStaple: true },
      { name: "白糖与食用精盐", baseAmount: 5, unit: "g", amountText: "5g", isPantryStaple: true },
      { name: "水淀粉", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "大豆油(滑油用)", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "猪腰彻底片除白臊打麦穗花刀",
        instruction: "猪腰对半剖开，刀平放将内部白色骚筋彻底片除干净；表面先斜切密刀不切断，再直刀切断成麦穗块，上浆抓水淀粉。",
        timerSeconds: 300,
        chefTip: "去净白臊是腰花无膻气的前提，花刀切深才能卷曲脆嫩。"
      },
      {
        stepIndex: 2,
        title: "高油温快速滑油十秒卷曲脆嫩",
        instruction: "油烧至七成热(200度)，将腰花迅速滑入油锅，10秒内翻滚定型卷成麦穗花立刻捞出控油。",
        timerSeconds: 30,
        chefTip: "滑油温度一定要高、动作要快，保持腰花极致的爽脆鲜嫩。"
      },
      {
        stepIndex: 3,
        title: "蒜末爆锅烹酸咸汁极速包芡起锅",
        instruction: "锅底余油爆香葱花与半份蒜末，下木耳配料，倒入调好的生抽陈醋糖盐芡汁，翻滚浓稠下腰花猛颠两锅撒生蒜末出锅。",
        timerSeconds: 60,
        chefTip: "东北溜腰花讲究蒜香浓郁微带香醋提香，汁紧包肉不泄水。"
      }
    ],
    tips: "东北老派鲁菜系技艺的硬派传承！腰花麦穗卷曲，脆嫩弹牙毫无异味，浓油赤酱中蒜香与锅气猛烈喷薄，豪迈下饭。",
    tags: ["东北", "东北菜", "溜腰花", "麦穗花刀", "脆嫩弹牙", "大火爆炒"]
  },
  {
    id: "rec_prov_184",
    name: "东北尖椒两面煎土豆厚片",
    region: "黑龙江",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北黄心沙土豆(切厚片)", amount: 350, unit: "g", type: "main", isCore: true },
      { name: "农家青尖椒(切滚刀块)", amount: 120, unit: "g", type: "main", isCore: true },
      { name: "大蒜片与葱花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "土豆切铜钱厚片浸水洗淀粉沥干",
        instruction: "土豆去皮切成3毫米厚片，清水淘洗两遍去除多余表面淀粉，用布擦干水分。",
        timerSeconds: 150,
        chefTip: "洗掉浮粉能防止下锅粘连糊锅，煎出平整金黄外壳。"
      },
      {
        stepIndex: 2,
        title: "平底锅少油中火慢煎两面金黄起泡",
        instruction: "平底锅倒入大豆油，将土豆片平铺在锅底，中火慢慢煎至底面金黄起焦斑，翻面继续煎至两面焦黄、内芯用铲可轻易按软盛出。",
        timerSeconds: 300,
        chefTip: "煎透的土豆片外焦韧内绵软，比直接炒好吃数倍。"
      },
      {
        stepIndex: 3,
        title: "爆香葱蒜尖椒倒回土豆大火合炒",
        instruction: "锅底余油爆香葱蒜，下尖椒块大火翻出辣香，倒回煎好的土豆片，烹入生抽和盐，猛火快颠20秒出锅。",
        timerSeconds: 60,
        chefTip: "尖椒的鲜辣与煎土豆的焦香结合，干爽香糯。"
      }
    ],
    tips: "东北老百姓百吃不厌的朴素神仙小炒！土豆片两面煎至金黄虎皮，外焦韧内绵软，尖椒鲜辣脆口，大米饭的绝对克星。",
    tags: ["东北", "东北菜", "尖椒土豆片", "外焦内糯", "干香下饭", "家常必备"]
  },
  {
    id: "rec_prov_185",
    name: "青红尖椒煸干香风干小肠",
    region: "黑龙江",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 280,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北特产风干小肠(切薄斜片)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "青尖椒与红尖椒段", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣切片、生姜丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 2, unit: "g", amountText: "2g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "风干肠上锅微蒸斜切硬薄片",
        instruction: "风干肠上汽蒸5分钟稍回软，放凉斜切成透明薄片；青红尖椒切滚刀段。",
        timerSeconds: 300,
        chefTip: "微蒸回软更好下刀，切薄片下锅更易煸出焦香油脂。"
      },
      {
        stepIndex: 2,
        title: "小火干煸风干肠逼出透亮红油",
        instruction: "热锅加几滴油，下风干肠小火慢煸，至香肠边缘焦脆卷曲、肉质变得透亮并析出自带油脂。",
        timerSeconds: 150,
        chefTip: "风干肠自含咸甜与香料味，慢慢逼油滋味更浓。"
      },
      {
        stepIndex: 3,
        title: "下青红椒大蒜猛火快翻出镬气",
        instruction: "转大火下蒜片和青红椒，利用风干肠的油脂大火狂翻1分钟至辣椒表皮起虎皮，烹入少许生抽调味出锅。",
        timerSeconds: 60,
        chefTip: "辣椒吸透腊肠油香，香辣干香。"
      }
    ],
    tips: "东北经典腊味小炒！独特的风干肠越嚼越香，咸中带甜微带酒香，配上火辣青红椒旺火急炒，干香扑鼻越吃越上瘾。",
    tags: ["东北", "东北菜", "风干肠", "干香扑鼻", "越嚼越香", "下酒绝品"]
  },
  {
    id: "rec_prov_186",
    name: "绿芹菜细粉条炒猪肉碎",
    region: "吉林",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 8,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北本地实心小绿芹菜(切碎段)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "泡发红薯细粉条(剪短)", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "猪肉末", amount: 100, unit: "g", type: "main", isCore: true },
      { name: "葱花、干辣椒碎", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油与老抽", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "实心绿芹切细段粉条焯软剪短",
        instruction: "绿芹菜洗净摘去老叶切成小丁段；细粉条开水泡软剪成半拃长段。",
        timerSeconds: 150,
        chefTip: "实心绿芹菜香味比西芹更浓郁清冽。"
      },
      {
        stepIndex: 2,
        title: "肉末煸香爆葱椒下芹菜翻炒出香",
        instruction: "热油煸炒猪肉末变白出香，下葱花干椒碎，倒入芹菜丁大火猛翻40秒释放清脆香气。",
        timerSeconds: 90,
        chefTip: "芹菜受热迅速散发芳香烃，不可过火翻炒。"
      },
      {
        stepIndex: 3,
        title: "倒入粉条淋酱油大火翻至油亮",
        instruction: "倒入粉条，淋入生抽与老抽上色，大火狂颠收汁，加盐调味至粉条透亮出锅。",
        timerSeconds: 60,
        chefTip: "粉条裹满肉末与芹菜清香，滑爽筋道。"
      }
    ],
    tips: "东北家常又一绝配！芹菜爽脆芳香去腻，肉末鲜美，细粉条吸足滋味滑溜顺口，拌在热米饭上连吃三大碗。",
    tags: ["东北", "东北菜", "芹菜炒粉", "家常小炒", "滑爽清香", "拌饭神器"]
  },
  {
    id: "rec_prov_187",
    name: "滑嫩咸鲜老式溜猪肝尖",
    region: "黑龙江",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "溜",
    calories: 230,
    prepTimeMinutes: 15,
    cookTimeMinutes: 6,
    difficulty: "进阶",
    portion: 2,
    ingredients: [
      { name: "新鲜新鲜猪柳叶肝尖(切柳叶薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "青椒片、木耳、胡萝卜菱形片", amount: 60, unit: "g", type: "secondary", isCore: false },
      { name: "葱花与蒜片", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油与料酒", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "老抽酱油", baseAmount: 3, unit: "ml", amountText: "3ml", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "纯土豆淀粉", baseAmount: 20, unit: "g", amountText: "20g", isPantryStaple: true },
      { name: "大豆油(滑油用)", baseAmount: 250, unit: "ml", amountText: "250ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "猪肝切柳叶薄片漂洗抓匀水淀粉浆",
        instruction: "新鲜猪肝切成2毫米厚柳叶片，清水浸漂冲净血水挤干；加料酒、少许盐和纯水淀粉抓匀上浆，滴几滴油封住。",
        timerSeconds: 300,
        chefTip: "漂净血水是猪肝清爽无腥的前提，上厚浆锁住内部水分。"
      },
      {
        stepIndex: 2,
        title: "热锅宽油极速滑散仅十秒捞出",
        instruction: "油温烧至六成热，下猪肝片用筷子迅速划散，见猪肝变色边缘微挺立即捞出控油，全程不过12秒。",
        timerSeconds: 30,
        chefTip: "时间多一秒则老，少一秒则生，刚断生时最嫩如凝脂。"
      },
      {
        stepIndex: 3,
        title: "碗芡沸腾推入肝尖颠翻两下起锅",
        instruction: "锅底余油爆葱蒜配料，倒入生抽老抽糖盐水淀粉调匀的芡汁烧沸明亮，倒入猪肝大火颠翻挂满浓汁出锅。",
        timerSeconds: 45,
        chefTip: "红亮油润，芡汁紧裹，上桌滑嫩无渣。"
      }
    ],
    tips: "东北老馆子考验刀工火候的招牌大作！猪肝片薄如柳叶，入口滑润鲜嫩毫无颗粒感，咸鲜咸香酱汁浓厚，滋味极妙。",
    tags: ["东北", "东北菜", "溜肝尖", "老菜馆名品", "滑嫩无腥", "火候功夫"]
  },
  {
    id: "rec_prov_188",
    name: "东北大香菜爆炒黄牛肉",
    region: "辽宁",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 250,
    prepTimeMinutes: 12,
    cookTimeMinutes: 5,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "新鲜牛里脊肉(顶丝切薄片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "东北本地大叶香菜(切长段)", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "红泡椒或干辣椒丝", amount: 15, unit: "g", type: "secondary", isCore: false },
      { name: "蒜末与生姜丝", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油与蚝油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true },
      { name: "纯粮料酒", baseAmount: 10, unit: "ml", amountText: "10ml", isPantryStaple: true },
      { name: "黑胡椒碎与食用精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "玉米淀粉", baseAmount: 8, unit: "g", amountText: "8g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "牛肉顶刀切薄片抓水淀粉封油",
        instruction: "牛里脊逆着纹理切薄片，加料酒、生抽、黑胡椒、少许水抓至起胶，加淀粉和食用油锁住肉汁；香菜切3指长段。",
        timerSeconds: 300,
        chefTip: "逆纹切断牛肉纤维，抓水上浆能保证牛肉炒出来滑嫩如丝。"
      },
      {
        stepIndex: 2,
        title: "热锅凉油猛火滑炒牛肉变色盛出",
        instruction: "铁锅烧热多倒油润锅，下牛肉片大火快速滑散，至八成熟变色立刻捞出控油。",
        timerSeconds: 45,
        chefTip: "猛火快滑避免牛肉出汤变老。"
      },
      {
        stepIndex: 3,
        title: "爆香姜蒜辣椒下香菜牛肉狂翻起锅",
        instruction: "锅底余油爆香姜蒜辣椒丝，下香菜梗段和牛肉片，烹入蚝油、生抽、少许盐，大火狂颠10秒关火撒香菜叶出锅。",
        timerSeconds: 30,
        chefTip: "香菜叶借余热变软，香菜梗保持爽脆芬芳。"
      }
    ],
    tips: "东北大火爆炒的硬核代表！本地大叶香菜香气霸道浓烈，与滑嫩多汁的黄牛肉片在烈火锅气中融合，香气直冲脑门。",
    tags: ["东北", "东北菜", "香菜炒牛肉", "香气扑鼻", "鲜嫩爽滑", "大火爆炒"]
  },
  {
    id: "rec_prov_189",
    name: "螺丝椒大铁锅炒金黄土蛋",
    region: "黑龙江",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 210,
    prepTimeMinutes: 8,
    cookTimeMinutes: 6,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北深绿皮皮螺丝椒或尖椒", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "东北农家笨鸡蛋", amount: 4, unit: "个", type: "main", isCore: true },
      { name: "大蒜片", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 12, unit: "ml", amountText: "12ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "纯正大豆油", baseAmount: 25, unit: "ml", amountText: "25ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "螺丝椒用刀拍裂切滚刀块鸡蛋打散",
        instruction: "螺丝椒刀背拍扁切斜块；笨鸡蛋加盐打散备用。",
        timerSeconds: 120,
        chefTip: "拍裂辣椒破坏表皮，炒时更易吸收蛋香和调味。"
      },
      {
        stepIndex: 2,
        title: "热油先炒鸡蛋金黄微焦大块盛出",
        instruction: "大豆油热透倒入蛋液，大火煎至两面金黄微焦有蛋香味成大块盛出。",
        timerSeconds: 90,
        chefTip: "火大油热，炒出的鸡蛋香气更足。"
      },
      {
        stepIndex: 3,
        title: "干锅煸螺丝椒出虎皮倒回鸡蛋合炒",
        instruction: "锅底余油爆蒜片下螺丝椒大火煸出虎皮微变软，倒回鸡蛋块烹入生抽和精盐，快炒20秒出锅。",
        timerSeconds: 60,
        chefTip: "螺丝椒炒出焦斑虎皮，鲜辣焦香。"
      }
    ],
    tips: "东北大平房家常灶台最接地气的家常香！螺丝椒的鲜辣虎皮与金黄笨鸡蛋的焦香蛋块完美交融，干香热辣下饭极妙。",
    tags: ["东北", "东北菜", "尖椒炒鸡蛋", "焦香下饭", "家常快手", "鲜辣过瘾"]
  },
  {
    id: "rec_prov_190",
    name: "鲜黄瓜片快炒五花猪肉片",
    region: "吉林",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 230,
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "东北旱黄瓜或带刺青黄瓜(切菱形片)", amount: 250, unit: "g", type: "main", isCore: true },
      { name: "带皮五花猪肉薄片", amount: 150, unit: "g", type: "main", isCore: true },
      { name: "大蒜瓣片、大葱花", amount: 20, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "食用精盐", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "黄瓜斜切马蹄再切菱形片五花肉切薄",
        instruction: "黄瓜洗净去头尾斜刀切段再立切菱形片；五花肉切成2毫米厚薄片。",
        timerSeconds: 150,
        chefTip: "黄瓜不可切太薄，保持厚度炒后才有脆甜多汁的口感。"
      },
      {
        stepIndex: 2,
        title: "五花肉片慢煸吐油微焦爆香葱蒜",
        instruction: "热锅微油下五花肉片中火煸炒，至肥肉透明出油边缘焦香，下葱花蒜片炒香，烹入生抽酱油炒匀。",
        timerSeconds: 120,
        chefTip: "五花肉出油浸润黄瓜片，去腻添香。"
      },
      {
        stepIndex: 3,
        title: "倒入黄瓜片旺火急翻仅半分钟出锅",
        instruction: "转大火倒入黄瓜片，加盐调味，旺火急翻30秒至黄瓜略微软挺即刻关火出锅。",
        timerSeconds: 40,
        chefTip: "黄瓜绝不可久炒，受热出清香即停火，口感清脆无比。"
      }
    ],
    tips: "东北夏季极其舒爽的快手清炒！爽脆多汁的青黄瓜吸附了五花猪肉煸出的纯净脂香，肉香中有黄瓜清冽，清爽解腻。",
    tags: ["东北", "东北菜", "黄瓜炒肉片", "清爽解腻", "脆甜爽口", "快手家常"]
  },
  {
    id: "rec_prov_191",
    name: "沈阳街头孜然香辣煸鸡架",
    region: "辽宁",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 270,
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "新鲜白条鸡骨架(剁适口大块)", amount: 500, unit: "g", type: "main", isCore: true },
      { name: "生洋葱碎与青红椒圈", amount: 80, unit: "g", type: "secondary", isCore: false },
      { name: "熟白芝麻与大量蒜末", amount: 25, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "粗粒孜然粉与孜然粒", baseAmount: 15, unit: "g", amountText: "15g", isPantryStaple: true },
      { name: "东北特调烧烤辣椒面", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "白糖", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "生抽与陈醋", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "精盐", baseAmount: 4, unit: "g", amountText: "4g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 30, unit: "ml", amountText: "30ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "鸡架剁块焯水大火慢煸至金黄焦脆",
        instruction: "鸡架洗净剁小块焯水沥干；锅中多倒油，下鸡架中火慢煸5分钟，直至肉骨收缩紧致、表面泛出金黄焦斑盛出沥油。",
        timerSeconds: 360,
        chefTip: "煸干水分煸出鸡油，鸡骨头啃起来焦香酥脆。"
      },
      {
        stepIndex: 2,
        title: "爆香洋葱蒜末青椒烹生抽陈醋",
        instruction: "锅底余油下洋葱碎蒜末青红椒大火爆香，烹生抽与一勺陈醋，加白糖与精盐炒出甜酸复合底汁。",
        timerSeconds: 90,
        chefTip: "沈阳炒鸡架的精髓就在于甜口与微酸的糖醋回味。"
      },
      {
        stepIndex: 3,
        title: "倒回鸡架大火撒孜然辣椒面翻匀",
        instruction: "倒回鸡架，撒入大量孜然粒、烧烤辣椒面和白芝麻，大火快速颠翻30秒使调料紧紧包裹鸡架骨出锅。",
        timerSeconds: 60,
        chefTip: "调料裹满每一处骨缝，吮指回味无穷。"
      }
    ],
    tips: "沈阳闻名全国的灵魂街头城市名片！鸡架骨焦香耐啃，甜辣孜然香气层层递进，嘬骨吮肉回味无穷，配老雪花啤酒天下一绝。",
    tags: ["东北", "东北菜", "沈阳鸡架", "辣炒鸡架", "夜市灵魂", "吮指留香"]
  },
  {
    id: "rec_prov_192",
    name: "大叶香菜嫩梗猛火炒肉丝",
    region: "辽宁",
    cuisineCategory: "东北菜",
    categoryType: "dish",
    cookingMethod: "炒",
    calories: 220,
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    difficulty: "初级",
    portion: 2,
    ingredients: [
      { name: "猪里脊肉丝", amount: 180, unit: "g", type: "main", isCore: true },
      { name: "东北本地大叶香菜嫩梗(摘去大叶)", amount: 200, unit: "g", type: "main", isCore: true },
      { name: "生姜细丝与红干椒丝", amount: 15, unit: "g", type: "secondary", isCore: false }
    ],
    seasonings: [
      { name: "生抽酱油", baseAmount: 15, unit: "ml", amountText: "15ml", isPantryStaple: true },
      { name: "陈醋", baseAmount: 4, unit: "ml", amountText: "4ml", isPantryStaple: true },
      { name: "食用精盐与白糖", baseAmount: 3, unit: "g", amountText: "3g", isPantryStaple: true },
      { name: "水淀粉", baseAmount: 10, unit: "g", amountText: "10g", isPantryStaple: true },
      { name: "大豆油", baseAmount: 20, unit: "ml", amountText: "20ml", isPantryStaple: true }
    ],
    steps: [
      {
        stepIndex: 1,
        title: "里脊切细丝上浆香菜摘叶留梗切段",
        instruction: "里脊切火柴棍粗细丝加少许盐、生抽、水淀粉抓匀上浆；香菜摘去老叶仅留粗嫩脆梗，切成3厘米长段。",
        timerSeconds: 180,
        chefTip: "纯用香菜嫩梗，炒制时脆爽无残渣，出水极少。"
      },
      {
        stepIndex: 2,
        title: "滑油热锅滑熟肉丝变白断生",
        instruction: "热锅凉油下肉丝快速划散至变白断生盛出；底油爆香姜丝与干辣椒丝。",
        timerSeconds: 90,
        chefTip: "肉丝滑油保持细嫩。"
      },
      {
        stepIndex: 3,
        title: "倒入香菜梗肉丝大火急烹香醋出锅",
        instruction: "倒入香菜梗和肉丝，烹入生抽、几滴香醋、盐，大火狂翻15秒起锅。",
        timerSeconds: 30,
        chefTip: "微烹香醋激发香菜芬芳，极速出锅保证香菜梗脆甜爆汁。"
      }
    ],
    tips: "东北老牌传统清口小炒！纯取大叶香菜嫩梗，与滑嫩肉丝大火急翻，香菜梗清脆爆汁清香扑鼻，清新解腻极具风味。",
    tags: ["东北", "东北菜", "香菜炒肉丝", "清脆多汁", "大火急炒", "传统老味"]
  }
];

// 合并所有 35 道菜
const fullDongbei = [...part1, ...part2];
console.log(`东北菜生成完毕，总计: ${fullDongbei.length} 道菜 (预期35道)`);
if (fullDongbei.length !== 35) {
  throw new Error(`东北菜数量不符: ${fullDongbei.length}`);
}

const fileContent = `// scripts/data_177_dongbei.js\n// 关东黑土东北菜 35道名菜名肴与市井下饭小炒 (rec_prov_158 ~ rec_prov_192)\nmodule.exports = ${JSON.stringify(fullDongbei, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'data_177_dongbei.js'), fileContent, 'utf8');
console.log(`成功写入 scripts/data_177_dongbei.js!`);
