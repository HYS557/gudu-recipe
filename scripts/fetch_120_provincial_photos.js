const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const dishes = [
  // 一、湖南湘菜 (30道)
  // 大菜名馔 (15道)
  { id: 'rec_prov_001', name: '湘派国宴头牌毛氏红烧肉', search: '毛氏红烧肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_002', name: '湘潭传统双色剁椒蒸大鱼头', search: '剁椒鱼头', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_003', name: '永州名门东安子鸡', search: '东安子鸡', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_004', name: '衡东土菜头牌黄贡椒炒脆肚', search: '黄贡椒脆肚', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_005', name: '长沙老街秘制紫苏口味虾', search: '口味虾', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_006', name: '长沙经典香辣紫苏口味蟹', search: '口味蟹', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_007', name: '常德传统茶油谷鸭钵', search: '谷鸭钵', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_008', name: '常德传统红油肥肠钵', search: '干锅肥肠', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_009', name: '常德传统红煨甲鱼土鸡钵', search: '甲鱼烧鸡', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_010', name: '长沙老街灌汁臭豆腐', search: '长沙臭豆腐', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_011', name: '长沙大排档金牌麻辣烤猪手', search: '烤猪蹄', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_012', name: '浏阳传统豆豉蒸农家五花腊肉', search: '豆豉蒸腊肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_013', name: '浏阳传统蒸手撕刁子鱼干', search: '蒸刁子鱼', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_014', name: '湖南传统秘制红煨甲鱼', search: '红煨甲鱼', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_015', name: '常德正宗红油黄牛肉米粉', search: '常德牛肉粉', region: '湖南', sub: 'hunan' },
  // 家常小炒 (15道)
  { id: 'rec_prov_016', name: '湘味正宗小炒黄牛肉', search: '小炒黄牛肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_017', name: '湖南农家大椒炒肉拌饭汁', search: '辣椒炒肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_018', name: '湘西农家土匪猪肝', search: '土匪猪肝', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_019', name: '湖南金牌酸辣鸡杂', search: '酸辣鸡杂', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_020', name: '金牌小炒拆骨肉荷包蛋', search: '拆骨肉荷包蛋', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_021', name: '大蒜叶炒烟熏腊牛肉', search: '蒜苗炒腊牛肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_022', name: '邵阳传统猪血丸子炒腊肉', search: '猪血丸子炒腊肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_023', name: '湖南农家青椒紫苏煎黄瓜', search: '紫苏煎黄瓜', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_024', name: '湖南农家擂辣椒茄子皮蛋', search: '擂辣椒茄子皮蛋', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_025', name: '湘味老坛酸豆角肉末', search: '酸豆角炒肉末', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_026', name: '韭菜紫苏爆炒小河虾', search: '韭菜炒河虾', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_027', name: '攸县香干炒五花肉丝', search: '攸县香干炒肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_028', name: '湘西老坛萝卜干炒腊肉丁', search: '萝卜干炒腊肉', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_029', name: '猪油渣爆炒大蒜手撕包菜', search: '手撕包菜', region: '湖南', sub: 'hunan' },
  { id: 'rec_prov_030', name: '湖南农家腊八豆炒土鸡蛋', search: '腊八豆炒鸡蛋', region: '湖南', sub: 'hunan' },

  // 二、安徽徽派皖韵 (22道)
  // 大菜名馔 (10道)
  { id: 'rec_prov_031', name: '徽州传统红烧臭鳜鱼', search: '臭鳜鱼', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_032', name: '徽州传统两面煎毛豆腐配辣酱', search: '煎毛豆腐', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_033', name: '徽州问政山笋煨刀板香', search: '问政山笋煨刀板香', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_034', name: '徽州传统绩溪一品锅', search: '绩溪一品锅', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_035', name: '淮南正宗牛肉汤配葱油烧饼', search: '淮南牛肉汤', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_036', name: '安徽宿州符离集五香烧鸡', search: '符离集烧鸡', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_037', name: '皖北传统炭火地锅鸡配贴饼', search: '地锅鸡', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_038', name: '皖北传统铁锅炖地锅羊肉', search: '地锅羊肉', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_039', name: '合肥官府名菜李鸿章大杂烩', search: '李鸿章大杂烩', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_040', name: '徽州名山珍品农家石耳炖土鸡', search: '石耳炖鸡', region: '安徽', sub: 'anhui' },
  // 家常小炒 (12道)
  { id: 'rec_prov_041', name: '徽州传统腊八豆腐炒香肠', search: '腊八豆腐炒香肠', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_042', name: '绩溪传统徽州肉末炒粉丝', search: '徽州炒粉丝', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_043', name: '皖南农家蒜苗炒刀板香腊肉', search: '蒜苗炒腊肉', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_044', name: '徽州雪菜毛豆肉丝炒鲜笋', search: '雪菜毛豆肉丝', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_045', name: '皖北农家干豆角烧五花肉', search: '干豆角烧肉', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_046', name: '徽州农家青椒炒野生葛粉皮', search: '炒葛粉皮', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_047', name: '徽州生煎臭豆腐炒青红椒', search: '炒臭豆腐', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_048', name: '皖中家常芹菜炒香干肉丝', search: '芹菜炒香干肉丝', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_049', name: '徽州梅干菜肉末炒小河鱼', search: '梅干菜炒小鱼', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_050', name: '皖南农家咸菜炒苦瓜薄片', search: '咸菜炒苦瓜', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_051', name: '皖北传统水烙馍卷馓子卤肉', search: '水烙馍', region: '安徽', sub: 'anhui' },
  { id: 'rec_prov_052', name: '徽州家常浓酱煨冬瓜块', search: '红烧冬瓜', region: '安徽', sub: 'anhui' },

  // 三、大西北丝路塞外 (新疆/甘肃/宁夏/青海 · 22道)
  // 大菜名馔 (10道)
  { id: 'rec_prov_053', name: '新疆炭火红柳生烤羊肉串', search: '红柳羊肉串', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_054', name: '沙湾正宗爆炒大盘土鸡配皮带面', search: '大盘鸡', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_055', name: '新疆传统白水煮手抓羊肉', search: '手抓羊肉', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_056', name: '乌鲁木齐传统馕坑肉烤包子', search: '烤包子', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_057', name: '新疆传统手撕冷浸椒麻鸡', search: '新疆椒麻鸡', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_058', name: '新疆传统羊排手抓饭', search: '抓饭', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_059', name: '兰州传统白条手抓羊肉配蒜汁', search: '兰州手抓羊肉', region: '甘肃', sub: 'xibei' },
  { id: 'rec_prov_060', name: '甘肃靖远正宗黄焖羊肉', search: '靖远黄焖羊肉', region: '甘肃', sub: 'xibei' },
  { id: 'rec_prov_061', name: '宁夏正宗盐池手抓滩羊肉', search: '盐池手抓羊肉', region: '宁夏', sub: 'xibei' },
  { id: 'rec_prov_062', name: '青海传统高原紫铜锅土火锅', search: '青海土火锅', region: '青海', sub: 'xibei' },
  // 家常小炒与名吃 (12道)
  { id: 'rec_prov_063', name: '新疆正宗家常辣皮子炒米粉', search: '新疆炒米粉', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_064', name: '新疆辣皮子大火炒嫩羊肉片', search: '辣皮子炒肉', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_065', name: '新疆孜然洋葱爆炒羊肉粒', search: '孜然羊肉', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_066', name: '新疆西红柿青椒炒烤肉盖馕', search: '炒烤肉抓饼', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_067', name: '新疆家常蒜苔炒风干牛肉', search: '蒜苔炒风干牛肉', region: '新疆', sub: 'xibei' },
  { id: 'rec_prov_068', name: '甘肃传统酸辣洋芋擦擦小炒', search: '洋芋擦擦', region: '甘肃', sub: 'xibei' },
  { id: 'rec_prov_069', name: '兰州红根韭黄肉丝小炒', search: '韭黄炒肉丝', region: '甘肃', sub: 'xibei' },
  { id: 'rec_prov_070', name: '敦煌传统胡羊焖薄面饼', search: '胡羊焖饼', region: '甘肃', sub: 'xibei' },
  { id: 'rec_prov_071', name: '青海干煸手揪面片炒羊肉', search: '炒面片', region: '青海', sub: 'xibei' },
  { id: 'rec_prov_072', name: '青海青椒爆炒牦牛干巴肉', search: '炒牦牛肉', region: '青海', sub: 'xibei' },
  { id: 'rec_prov_073', name: '宁夏家常洋葱爆炒羊杂碎', search: '爆炒羊杂', region: '宁夏', sub: 'xibei' },
  { id: 'rec_prov_074', name: '兰州地道高担酿皮浇香醋辣油', search: '高担酿皮', region: '甘肃', sub: 'xibei' },

  // 四、西南滇黔秘境 (云南/贵州 · 24道)
  // 大菜名馔 (10道)
  { id: 'rec_prov_075', name: '贵州凯里正宗红酸汤江团鱼', search: '凯里酸汤鱼', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_076', name: '贵州凯里传统红酸汤软烂猪手煲', search: '酸汤猪脚', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_077', name: '贵州遵义传统虾子羊肉粉', search: '遵义羊肉粉', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_078', name: '贵阳传统青岩古镇卤猪脚', search: '青岩卤猪脚', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_079', name: '云南宜良传统松毛炭烤麻鸭', search: '宜良烤鸭', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_080', name: '建水古城传统炭火烤小豆腐', search: '建水烤豆腐', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_081', name: '大理传统瓦片烤白族纯乳扇', search: '烤乳扇', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_082', name: '西双版纳傣味香茅草烤罗非鱼', search: '香茅草烤鱼', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_083', name: '腾冲传统大救驾炒饵块', search: '大救驾', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_084', name: '云南红河哈尼蘸水白斩土鸡', search: '哈尼蘸水鸡', region: '云南', sub: 'dianqian' },
  // 家常小炒与小吃 (14道)
  { id: 'rec_prov_085', name: '云南经典下饭招牌黑三剁', search: '黑三剁', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_086', name: '云南酸甜清爽家常红三剁', search: '红三剁', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_087', name: '云南鲜薄荷爆炒鲜嫩牛肉', search: '薄荷炒牛肉', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_088', name: '宣威火腿炒春嫩青蚕豆', search: '火腿炒蚕豆', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_089', name: '云南皱皮椒炒洋芋厚片', search: '皱皮椒炒洋芋', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_090', name: '云南苦菜炒酸菜肉末', search: '苦菜炒肉沫', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_091', name: '昆明农家老奶洋芋焦香版', search: '老奶洋芋', region: '云南', sub: 'dianqian' },
  { id: 'rec_prov_092', name: '贵州农家折耳根炒烟熏腊肉', search: '折耳根炒腊肉', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_093', name: '贵州家常糟辣椒炒土鸡蛋', search: '糟辣椒炒蛋', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_094', name: '贵州特色糊辣椒爆炒猪板筋', search: '爆炒板筋', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_095', name: '贵州酸豇豆肉末爆炒野山椒', search: '酸豇豆炒肉末', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_096', name: '贵州盐菜炒五花肉末焦香碎', search: '盐菜炒肉末', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_097', name: '贵阳现炸豆腐圆子灌酸辣汁', search: '豆腐圆子', region: '贵州', sub: 'dianqian' },
  { id: 'rec_prov_098', name: '贵阳传统丝娃娃配时蔬丝', search: '丝娃娃', region: '贵州', sub: 'dianqian' },

  // 五、三晋晋冀中原 (山西/河南/天津/河北 · 22道)
  // 大菜名馔 (10道)
  { id: 'rec_prov_099', name: '山西正宗传统名菜过油肉', search: '山西过油肉', region: '山西', sub: 'zhongyuan' },
  { id: 'rec_prov_100', name: '平遥传统冠云五香牛肉块', search: '平遥牛肉', region: '山西', sub: 'zhongyuan' },
  { id: 'rec_prov_101', name: '定襄传统名席土豆蒸肉', search: '定襄蒸肉', region: '山西', sub: 'zhongyuan' },
  { id: 'rec_prov_102', name: '开封传统黄河鲤鱼焙面', search: '鲤鱼焙面', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_103', name: '洛阳水席头牌牡丹燕菜', search: '牡丹燕菜', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_104', name: '河南道口传统世传五香烧鸡', search: '道口烧鸡', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_105', name: '信阳传统固始大铁锅地锅鸡', search: '固始地锅鸡', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_106', name: '天津老字号金黄带鳞罾蹦鲤鱼', search: '罾蹦鲤鱼', region: '天津', sub: 'zhongyuan' },
  { id: 'rec_prov_107', name: '天津传统名菜八大碗老爆三', search: '天津老爆三', region: '天津', sub: 'zhongyuan' },
  { id: 'rec_prov_108', name: '天津传统八大碗之红烧独面筋', search: '独面筋', region: '天津', sub: 'zhongyuan' },
  // 家常小炒与名吃 (12道)
  { id: 'rec_prov_109', name: '山西五台山野山台蘑炒肉片', search: '台蘑炒肉片', region: '山西', sub: 'zhongyuan' },
  { id: 'rec_prov_110', name: '山西正宗宁化府陈醋溜土豆丝', search: '醋溜土豆丝', region: '山西', sub: 'zhongyuan' },
  { id: 'rec_prov_111', name: '山西大葱花蒜薹炒黄牛里脊', search: '葱爆牛肉', region: '山西', sub: 'zhongyuan' },
  { id: 'rec_prov_112', name: '山西传统尖椒大火爆炒干豆腐', search: '尖椒干豆腐', region: '山西', sub: 'zhongyuan' },
  { id: 'rec_prov_113', name: '河南五花肉豆角传统蒸卤面', search: '河南蒸卤面', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_114', name: '河南传统十三香鸡蛋炒红薯凉粉', search: '炒凉粉', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_115', name: '河南荆芥大蒜汁凉拌嫩黄瓜', search: '荆芥拌黄瓜', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_116', name: '河南农家蒜苔炒五花肉丝', search: '蒜苔炒肉丝', region: '河南', sub: 'zhongyuan' },
  { id: 'rec_prov_117', name: '保定传统槐茂甜面酱炒肉丝', search: '京酱肉丝', region: '河北', sub: 'zhongyuan' },
  { id: 'rec_prov_118', name: '河北正定传统热切丸子炒青蒜', search: '热切丸子', region: '河北', sub: 'zhongyuan' },
  { id: 'rec_prov_119', name: '唐山传统小火炉棋子烧饼夹肉', search: '棋子烧饼', region: '河北', sub: 'zhongyuan' },
  { id: 'rec_prov_120', name: '天津正宗纯绿豆面煎饼馃子', search: '天津煎饼果子', region: '天津', sub: 'zhongyuan' }
];

const recipesContent = fs.readFileSync(path.join(__dirname, '../js/data/recipes.js'), 'utf8');
const fn = new Function('window', recipesContent + '\nreturn window.RECIPES_DATA;');
const existingRecipes = fn({});
const existingUrls = new Set(existingRecipes.map(r => r.photoUrl || r.image).filter(Boolean));

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function searchChuimg(keyword) {
  try {
    const searchUrl = `https://www.xiachufang.com/search/?keyword=${encodeURIComponent(keyword)}&cat=1001`;
    const html = await fetchUrl(searchUrl);
    const regex = /https:\/\/i\d*\.chuimg\.com\/[a-zA-Z0-9_]+\.jpg/g;
    const matches = html.match(regex) || [];
    const filtered = matches.filter(url => !url.includes('placeholder') && !url.includes('avatar'));
    return Array.from(new Set(filtered));
  } catch (err) {
    return [];
  }
}

async function run() {
  console.log(`Starting to fetch real photos for ${dishes.length} provincial dishes...`);
  const results = {};
  const chosenUrls = new Set(existingUrls);

  for (let i = 0; i < dishes.length; i++) {
    const item = dishes[i];
    console.log(`[${i + 1}/${dishes.length}] Searching for: ${item.name} (${item.search})...`);
    let urls = await searchChuimg(item.search);
    let selected = null;
    for (const u of urls) {
      if (!chosenUrls.has(u)) {
        selected = u;
        chosenUrls.add(u);
        break;
      }
    }
    if (!selected) {
      urls = await searchChuimg(item.name);
      for (const u of urls) {
        if (!chosenUrls.has(u)) {
          selected = u;
          chosenUrls.add(u);
          break;
        }
      }
    }
    results[item.id] = {
      name: item.name,
      search: item.search,
      region: item.region,
      sub: item.sub,
      photoUrl: selected || null,
      candidatesCount: urls.length
    };
    console.log(`  -> Result: ${selected ? 'FOUND' : 'NOT FOUND'} (${selected || 'none'})`);
    await new Promise(r => setTimeout(r, 450));
  }

  fs.writeFileSync(path.join(__dirname, 'provincial_120_photos.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log('Saved all photo search results to scripts/provincial_120_photos.json');
}

run();
