/** 第二批来源复核：20 道西北、新疆及东北菜。 */
(function () {
  const reviewedAt = "2026-09-12";
  const S = (title, instruction, seconds, chefTip) => ({ title, instruction, detail: instruction, timerSeconds: seconds, chefTip });
  const src = (title, url, role = "关键原料与工艺依据") => ({ title, url, role });
  const C = {
    rec_gudu_0027: { prepTimeMinutes: 20, cookTimeMinutes: 35, steps: [
      S("制作肉臊子", "五花肉切小丁，先煸肥肉再下瘦肉；加姜、五香粉和辣椒面炒香，烹入岐山醋，小火煨至肉熟、油色红亮。", 1500, "肉臊子不加水，酸香主要来自醋。"),
      S("准备底菜酸汤", "豆腐、木耳、黄花菜和胡萝卜切小丁炒熟。另锅加高汤、醋、盐和辣椒油烧热，保持汤味酸、辣、香。", 600, "汤要宽而热，底菜切小才能与细面协调。"),
      S("煮面装碗", "细面煮熟后每碗只捞少量，浇入热酸汤，加入肉臊子和底菜，撒蛋皮、韭菜或蒜苗。", 180, "面条讲究薄、筋、光，现煮现浇。")
    ], sourceReview:{status:"reviewed",reviewedAt,sources:[src("岐山臊子面有了制作标准","https://www.sxdaily.com.cn/2024-11/03/content_10925341.html","地方标准及用量框架"),src("岐山臊子面（西安科普网）","https://www.xakpw.com/single/17771","传统风味与原料交叉验证")]}},
    rec_gudu_0028: { prepTimeMinutes: 30, cookTimeMinutes: 150, steps: [
      S("熬羊肉汤", "羊骨冷水下锅焯洗，加入羊肉、葱姜和适量香料，添足清水；烧开撇沫后小火炖至肉熟汤浓，捞出羊肉切片。", 7200, "持续撇净浮沫，汤味应以羊肉本香为主。"),
      S("掰馍煮馍", "饦饦馍掰成黄豆至指甲盖大小，放入锅中，加适量羊肉汤、粉丝和木耳煮至馍粒吸汤但仍有筋性。", 480, "馍粒大小尽量一致，避免部分软烂、部分夹生。"),
      S("装碗配食", "加入羊肉片再次煮热，调盐后装碗，配糖蒜、香菜和辣椒酱食用。", 120, "泡馍应汤浓、肉烂、馍筋而不糊。")
    ], sourceReview:{status:"reviewed",reviewedAt,sources:[src("牛羊肉泡馍食品安全地方标准编制说明","https://sxwjw.shaanxi.gov.cn/hdjl/dczj/202412/P020241223635101402485.pdf","菜品定义与构成依据")]}},
    rec_gudu_0029: { prepTimeMinutes: 25, cookTimeMinutes: 20, steps: [
      S("处理凉皮", "成品凉皮切成宽度均匀的条；面筋切块，豆芽焯熟过凉，黄瓜切丝。", 300, "凉皮开封后按包装要求保存，避免长时间常温放置。"),
      S("调蒜水和料汁", "蒜泥加凉开水和盐调成蒜水；另将香醋、生抽、芝麻酱和少量糖调匀。", 300, "调味汁使用凉开水，不直接使用生水。"),
      S("现拌食用", "凉皮、面筋、豆芽和黄瓜装碗，加入蒜水、料汁和秦椒油泼辣子，充分拌匀后立即食用。", 120, "先少量加辣椒油和醋，尝味后再补。")
    ], sourceReview:{status:"reviewed",reviewedAt,sources:[src("陕西省食品安全地方标准《凉皮》修订说明","https://sxwjw.shaanxi.gov.cn/hdjl/dczj/202511/P020251103589745415792.pdf","成品构成及主要风味依据")]}},
    rec_gudu_0030: { prepTimeMinutes: 35, cookTimeMinutes: 12, steps: [
      S("调牛肉馅包饺子", "牛肉馅分次加入葱姜水搅至吸收，加盐、酱油和香油调味，拌入大葱；包入饺子皮并捏紧。", 1800, "牛肉馅始终冷藏操作，包好尽快煮。"),
      S("调酸汤", "碗中放香醋、生抽、油泼辣子、虾皮、紫菜、熟芝麻和香菜，舀入滚热饺子汤冲开。", 120, "酸汤先少量调味，避免醋和盐一次过量。"),
      S("煮熟入汤", "饺子入沸水，分次点水煮至鼓起且馅心完全熟透，捞入酸汤碗中。", 480, "肉馅饺子必须熟透后食用。")
    ], sourceReview:{status:"reviewed",reviewedAt,sources:[src("西安市莲湖区志","https://dfz.shaanxi.gov.cn/zslm/fzzlk/xbsxsxz/xbsxz/xas_16198/201405/P020240923623187634840.pdf","酸汤水饺传统配料依据")]}},
    rec_gudu_0031: { prepTimeMinutes: 10, cookTimeMinutes: 8, steps: [
      S("煮饸饹", "荞麦饸饹下入足量沸水，轻轻拨散，按粗细煮至无硬芯后捞出沥水。", 300, "不要久泡在煮面水中，以免失去筋性。"),
      S("码入调料", "面上依次放盐、蒜泥、葱花、辣椒面和熟芝麻，醋和生抽沿碗边加入。", 60, "辣椒面放在最上层，便于热油激香。"),
      S("泼油拌匀", "菜籽油烧至出现轻微油纹，分次泼在辣椒面和葱蒜上，趁热拌匀。", 60, "泼油时远离水滴并使用耐热容器，防止飞溅。")
    ], sourceReview:{status:"reviewed",reviewedAt,sources:[src("陕西面食文化资料","https://www.ishaanxi.net/html/meishi/647.html","陕西面食风味框架与油泼技法交叉参考")]}},
    rec_gudu_0032: { prepTimeMinutes: 25, cookTimeMinutes: 120, steps: [
      S("清煮整鸡", "整鸡处理干净后保持外形完整，冷水入锅，加葱姜和香料；烧开撇沫，小火煮至基本成熟。", 2400, "避免大火翻滚造成鸡皮破损。"),
      S("笼蒸入味", "捞出整鸡沥水，放入容器加少量原汤和调味料，上汽后蒸至鸡肉酥软、形体仍完整。", 3600, "蒸制是酥烂入味的关键，不可省略。"),
      S("油炸定型", "取出鸡并彻底沥干表面水分，放入热油中炸至外皮金黄酥脆，沥油后配椒盐。", 300, "入油前必须沥干，操作时注意热油飞溅。")
    ], sourceReview:{status:"reviewed",reviewedAt,sources:[src("DB61/T 1264.1-2019 葫芦鸡","https://www.bzxz.net/bzxz/6bc1998891cd17268.html","清煮、笼蒸、油炸三道核心工序")]}},
    rec_gudu_0033: { name:"西宁手抓羊肉", prepTimeMinutes:15,cookTimeMinutes:90,steps:[
      S("浸洗羊肉", "羊肋排或羊腿肉斩大块，用冷水浸洗血水后冷水入锅，烧开并撇净浮沫。", 900, "选新鲜羊肉，浸洗和撇沫能使汤味清爽。"),
      S("清水慢煮", "加入姜、葱和少量花椒，小火保持微沸，煮至羊肉熟透且可轻松离骨。", 4200, "香料宜少，避免盖住羊肉本味。"),
      S("切块蘸食", "羊肉捞出稍晾，顺骨切块，撒盐或配蒜片、椒盐食用；原汤可另行调味。", 180, "切开确认中心熟透后再上桌。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("宁夏手抓羊肉制作技艺","https://www.ihchina.cn/project_details/23799.html","非遗技艺与传统工艺依据"),src("手抓羊肉（宁夏政府）","https://www.nx.gov.cn/ssjn/rwnx/pxms/202303/t20230307_3986877.html","菜品身份交叉验证")]}},
    rec_gudu_0035: { prepTimeMinutes:20,cookTimeMinutes:70,steps:[
      S("羊肉焯洗", "滩羊肉斩块，冷水下锅烧开，撇去浮沫后捞出洗净并沥干。", 600, "焯洗后不要长时间暴露，尽快开始焖制。"),
      S("炒香焖煮", "锅中少量油炒香葱姜和花椒，下羊肉翻炒；加酱油上色后注入热水，小火焖至接近软烂。", 3000, "中途需要补水时加热水。"),
      S("加入配菜收汁", "加入土豆块继续焖至羊肉和土豆熟透，最后放洋葱、青红椒，调盐并收浓汤汁。", 900, "土豆后放，避免过早碎化。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("宁夏黄焖羊肉调味料规范资料","https://wsjk.gansu.gov.cn/wsjk/c113471/202311/173802852/files/d0e20447346a484499ed0e7c9f0a5ced.pdf","传统香辛料体系参考")]}},
    rec_gudu_0037: { name:"新疆手抓饭",prepTimeMinutes:35,cookTimeMinutes:45,steps:[
      S("浸米切配", "长粒米淘洗后浸泡约30分钟并沥干；羊肉切块，洋葱切丝，胡萝卜切粗条。", 1800, "米要充分沥水，胡萝卜不要切得过细。"),
      S("炒肉和胡萝卜", "锅中油热后炒洋葱至金黄，下羊肉煎炒上色，再放胡萝卜、盐和孜然翻炒。", 720, "先把肉和蔬菜炒出香气，再加水。"),
      S("铺米焖熟", "加热水煮开，均匀铺入米但不搅底料；水分将收干时扎孔，加盖小火焖至米熟，最后翻拌均匀。", 1800, "水量按米的吸水性调整，焖制阶段避免频繁开盖。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("抓饭（克州文化体育广播电视和旅游局）","https://www.xjkz.gov.cn/xjkz/c124094/202412/4e838796d2764451bb6ee687074de4e3.shtml","炒洋葱、胡萝卜、羊肉后铺米焖蒸的工艺依据")]}},
    rec_gudu_0038: { prepTimeMinutes:45,cookTimeMinutes:25,steps:[
      S("调制羊肉馅", "羊肉和羊尾油切小丁，与洋葱碎、孜然、黑胡椒和盐拌匀，冷藏腌15分钟。", 900, "使用刀切肉丁能保留汁水，馅料保持低温。"),
      S("包成长方形", "冷水面团醒好后分剂擀薄，放入羊肉馅，四边折叠封严，收口朝下摆入烤盘。", 1200, "封口处压紧，防止烘烤时肉汁流失。"),
      S("高温烤熟", "表面刷蛋液并撒芝麻，放入充分预热的烤箱，高温烤至表皮金黄、馅心完全熟透。", 1200, "家庭烤箱存在温差，以馅心熟透为准。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("哈密美食（哈密市人民政府）","https://www.hami.gov.cn/hami/c120163/hmms.shtml","新疆烤包子地域身份与核心原料依据")]}},
    rec_gudu_0039: { prepTimeMinutes:20,cookTimeMinutes:40,steps:[
      S("煮熟鸡肉", "鸡冷水入锅，加葱姜和少量花椒，烧开撇沫后小火煮至中心熟透；关火浸泡片刻。", 1800, "避免持续大火，防止鸡肉发柴。"),
      S("放凉手撕", "鸡肉捞出晾至不烫手，沿肌肉纹理撕成粗条；洋葱和大葱切丝。", 420, "手撕粗条比刀切更容易挂汁。"),
      S("调椒麻汁拌匀", "青花椒油、生抽、醋、盐和少量鸡汤调匀，加入葱丝、洋葱丝和鸡肉充分拌匀。", 180, "花椒油分次加入，避免麻味压住鸡香。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("难忘美食椒麻鸡","https://www.gzszx.gov.cn/gzzxb/web/doc/detail/2485/B4","鸡肉腌煮、煨熟和椒麻风味依据")]}},
    rec_gudu_0043: { prepTimeMinutes:20,cookTimeMinutes:15,steps:[
      S("肉段挂糊", "里脊切粗条，加盐和料酒腌10分钟；土豆淀粉加水沉淀后倒去浮水，与肉段抓成稠糊。", 900, "糊要能均匀包住肉段，不能像水一样流淌。"),
      S("两次炸制", "油温约六成热时逐块下肉，炸至定型捞出；升高油温复炸至外壳金黄酥脆。", 300, "分批下锅并注意热油安全。"),
      S("调汁溜炒", "锅留底油炒香葱蒜和青椒，加入生抽、糖、盐及少量水，水淀粉勾薄芡；倒入肉段快速翻匀出锅。", 120, "肉段入汁后只需快速挂芡，久炒会回软。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("东北菜传统技法资料","https://zh.wikipedia.org/wiki/%E4%B8%9C%E5%8C%97%E8%8F%9C","菜系与溜炒技法交叉参考")]}},
    rec_gudu_0044: { prepTimeMinutes:25,cookTimeMinutes:65,steps:[
      S("泡发榛蘑", "干榛蘑用温水泡软，剪去硬根并反复淘洗泥沙；泡蘑菇的上层清液过滤备用。", 1200, "榛蘑容易夹沙，必须逐朵检查。"),
      S("煸炒鸡块", "鸡块焯水洗净；锅中油热后炒香葱姜和八角，下鸡块煸至表面微黄，加酱油翻匀。", 600, "鸡块先煸香，炖出的汤味更浓。"),
      S("加蘑菇炖熟", "加入榛蘑、过滤的泡菇水和热水，烧开后小火炖至鸡肉熟软；如加粉条，在出锅前按其成熟时间放入。", 2700, "粉条吸汤，后放并注意补充热水。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("小鸡炖蘑菇做法","https://m.meishichina.com/recipe/372947/","榛蘑清洗、鸡块煸炒和粉条后放依据")]}},
    rec_gudu_0045: { prepTimeMinutes:20,cookTimeMinutes:110,steps:[
      S("浸泡焯骨", "猪脊骨或棒骨用冷水浸泡出血水，冷水入锅焯开，撇沫后捞出洗净。", 1200, "充分去血水能减少腥味和杂沫。"),
      S("炒酱上色", "锅中少量油炒香葱姜、八角和桂皮，加入东北大酱炒出酱香，再放骨头翻匀。", 300, "大酱用小火炒，避免焦煳发苦。"),
      S("小火酱炖", "加入热水没过骨头，调入酱油和少量糖；烧开后小火炖至肉软、骨髓熟透，最后开盖收浓。", 5400, "盐度在收汁前再确定，大酱本身已有咸味。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("东北菜传统菜品资料","https://zh.wikipedia.org/wiki/%E4%B8%9C%E5%8C%97%E8%8F%9C","酱炖技法与地域菜系交叉验证")]}},
    rec_gudu_0046: { name:"排骨炖油豆角",prepTimeMinutes:20,cookTimeMinutes:55,ingredients:[
      {name:"猪肋排",amount:500,unit:"克（斩段）",type:"main"},{name:"东北油豆角",amount:500,unit:"克（去筋掰段）",type:"main"},{name:"葱、姜、蒜",amount:35,unit:"克",type:"secondary"}
    ],steps:[
      S("排骨焯洗", "排骨冷水下锅，烧开撇沫，捞出用温水洗净并沥干。", 600, "焯水后用温水冲洗，避免肉质骤冷。"),
      S("炒香炖排骨", "锅中油热后炒香葱姜和八角，下排骨翻炒，加酱油和热水，小火炖约30分钟。", 1800, "先把排骨炖至接近软熟，再加豆角。"),
      S("加油豆角炖透", "放入去筋油豆角，加盖继续炖至豆角完全熟透、排骨软烂，最后加蒜末并调盐。", 1200, "豆角必须彻底加热熟透，不可追求脆生口感。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("油豆角家常做法资料","https://m.meishichina.com/ingredient/youdoujiao/2/","排骨、油豆角及炖制配料依据")]}},
    rec_gudu_0047: { prepTimeMinutes:20,cookTimeMinutes:5,steps:[
      S("处理拉皮配菜", "拉皮按包装说明冲洗或焯烫，过凉后沥水；黄瓜、胡萝卜和紫甘蓝切细丝，整齐码盘。", 600, "拉皮拌前充分沥水，避免稀释料汁。"),
      S("炒肉帽", "瘦肉切丝，以少量生抽和淀粉抓匀；热锅下油快速炒熟，调入少量酱油后盛在拉皮上。", 180, "肉丝必须完全熟透。"),
      S("调麻酱拌食", "芝麻酱用凉开水调开，加蒜泥、生抽、香醋、糖和辣椒油，淋在拉皮和蔬菜上，食用前拌匀。", 120, "料汁分次加入，避免过咸。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("五彩大拉皮制作资料","https://www.douyin.com/shipin/7644380695418390555","拉皮、配菜与麻酱汁结构参考")]}},
    rec_gudu_0048: { prepTimeMinutes:25,cookTimeMinutes:65,steps:[
      S("煮白肉", "带皮五花肉冷水入锅，加葱姜，烧开撇沫后小火煮至六七成熟；捞出放凉切薄片，肉汤留用。", 2400, "白肉放凉后更容易切薄。"),
      S("炖酸菜白肉", "酸菜冲洗后切细丝并攥去多余水分，放入肉汤煮开，加入白肉片小火炖至酸菜柔软、汤味融合。", 1500, "酸菜咸酸度不同，调盐前先尝汤。"),
      S("最后汆血肠", "血肠切厚片，在出锅前放入汤中，用小火加热至完全热透后立即关火。", 300, "血肠久煮容易破裂，使用来源可靠的熟制或可加热产品。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("辽宁日报：东北酸菜与白肉","https://epaper.lnd.com.cn/lnrbepaper/pc/att/202301/19/96501fc4-3c02-4b44-ae51-7f9f0ff67a95.pdf","白肉成熟度、切片和酸菜炖制依据"),src("东北菜资料","https://zh.wikipedia.org/wiki/%E4%B8%9C%E5%8C%97%E8%8F%9C","血肠组合交叉验证")]}},
    rec_gudu_0049: { prepTimeMinutes:20,cookTimeMinutes:60,steps:[
      S("煮肉切片", "五花肉冷水入锅，加葱姜烧开并撇沫，小火煮至六七成熟；捞出放凉后切成薄片，原汤过滤备用。", 2400, "肉片尽量薄且厚度一致。"),
      S("处理酸菜", "酸菜切细丝，按酸度用清水快速漂洗，攥干后抖散。", 300, "不要长时间浸泡，以免风味全部流失。"),
      S("合锅汆煮", "原汤烧开后放酸菜和白肉片，小火炖至酸菜柔软、肉片熟透，尝味后加盐和白胡椒。", 1200, "保持小火，避免汤汁浑浊、肉片散碎。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("人民网：酸菜白肉·东北滋味","https://travel.people.com.cn/n/2015/1128/c41570-27866350.html","传统食材组合依据"),src("辽宁日报：东北酸菜","https://epaper.lnd.com.cn/lnrbepaper/pc/att/202301/19/96501fc4-3c02-4b44-ae51-7f9f0ff67a95.pdf","白肉处理和炖制依据")]}},
    rec_gudu_0050: { prepTimeMinutes:10,cookTimeMinutes:18,steps:[
      S("炸熟地瓜", "地瓜去皮切滚刀块并擦干。油温约五至六成热时下锅，中火炸至内部熟软、表面金黄，捞出沥油。", 600, "地瓜表面必须擦干，防止热油飞溅。"),
      S("熬糖", "净锅放白糖和少量水，小火加热；先不要频繁搅动，待糖液由大泡转小泡、呈浅琥珀色。", 300, "糖色过深会发苦，达到浅琥珀色立即进入下一步。"),
      S("裹糖拔丝", "迅速倒入热地瓜翻匀，使糖浆均匀包裹，立即装入薄薄抹油的盘中，配凉开水蘸食。", 60, "糖浆温度很高，入口前蘸凉开水并避免儿童直接夹食。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("拔丝地瓜资料","https://zh.wikipedia.org/wiki/%E6%8B%94%E7%B5%B2%E5%9C%B0%E7%93%9C","拔丝特征及凉水蘸食依据")]}},
    rec_gudu_0051: { name:"尖椒干豆腐",prepTimeMinutes:10,cookTimeMinutes:10,ingredients:[
      {name:"东北干豆腐（千张）",amount:300,unit:"克（切菱形片）",type:"main"},{name:"尖椒",amount:120,unit:"克（切块）",type:"main"},{name:"葱、蒜",amount:20,unit:"克",type:"secondary"}
    ],steps:[
      S("焯干豆腐", "干豆腐切菱形片，沸水中焯约1分钟，捞出沥水；尖椒切块。", 90, "焯水可去豆腥并让干豆腐更柔软。"),
      S("加水煨软", "锅中油热后炒香葱蒜，加入干豆腐、生抽和少量热水，中火煨约3至5分钟。", 300, "这道菜并非单纯干炒，少量水煨能改善口感。"),
      S("下尖椒勾芡", "放入尖椒快速翻炒至断生，调盐后淋入水淀粉，使薄芡均匀包裹食材。", 120, "尖椒后放保持颜色和清香，芡汁不宜过厚。")
    ],sourceReview:{status:"reviewed",reviewedAt,sources:[src("东北尖椒干豆腐","https://home.meishichina.com/recipe-309245.html","焯煮、加水煨制和勾芡依据"),src("东北尖椒干豆腐交叉验证","https://m.xiachufang.com/recipe/17962/","肉片可选及尖椒后放依据")]} }
  };
  if (!Array.isArray(window.RECIPES_DATA)) return;
  window.RECIPES_DATA.forEach(recipe => {
    const correction = C[recipe.id];
    if (!correction) return;
    correction.steps = correction.steps.map((step, index) => Object.assign({ stepIndex:index + 1 }, step));
    Object.assign(recipe, correction, { contentReviewStatus:"source-reviewed", contentReviewVersion:"2026-09-12-v5" });
  });
})();
