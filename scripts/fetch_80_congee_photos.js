const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const congeeDishes = [
  // 一、两广早茶与顺德水乡生滚肉禽粥 (20道)
  { id: 'rec_congee_01', name: '经典传统老火皮蛋瘦肉生滚粥', search: '皮蛋瘦肉粥', group: '广府生滚' },
  { id: 'rec_congee_02', name: '窝蛋滑嫩生滚牛肉香米粥', search: '窝蛋牛肉粥', group: '广府生滚' },
  { id: 'rec_congee_03', name: '香菇滑鸡生滚金牌香米粥', search: '香菇滑鸡粥', group: '广府生滚' },
  { id: 'rec_congee_04', name: '传统广府状元及第生滚粥', search: '及第粥', group: '广府生滚' },
  { id: 'rec_congee_05', name: '西关老字号正宗艇仔名粥', search: '艇仔粥', group: '广府生滚' },
  { id: 'rec_congee_06', name: '顺德拆鱼骨香煎鲜滑鱼茸粥', search: '拆鱼粥', group: '广府生滚' },
  { id: 'rec_congee_07', name: '清甜菜心粒肉碎生滚明火粥', search: '菜心粒肉碎粥', group: '广府生滚' },
  { id: 'rec_congee_08', name: '鲜嫩猪肝枸杞叶养血生滚粥', search: '猪肝枸杞叶粥', group: '广府生滚' },
  { id: 'rec_congee_09', name: '咸鸭蛋黄水瓜肉片生滚粥', search: '水瓜肉片粥', group: '广府生滚' },
  { id: 'rec_congee_10', name: '芥菜丝鲜肉片生滚清润粥', search: '芥菜瘦肉粥', group: '广府生滚' },
  { id: 'rec_congee_11', name: '鲜滑鲩鱼片生姜丝生滚粥', search: '鱼片粥', group: '广府生滚' },
  { id: 'rec_congee_12', name: '猪腰麦穗花刀生滚补虚粥', search: '猪腰粥', group: '广府生滚' },
  { id: 'rec_congee_13', name: '手打马蹄鲜猪肉丸浓香晨粥', search: '肉丸粥', group: '广府生滚' },
  { id: 'rec_congee_14', name: '咸鸡生姜丝砂锅温补生滚粥', search: '咸鸡粥', group: '广府生滚' },
  { id: 'rec_congee_15', name: '鲜鸽脯肉末枸杞子温润粥', search: '乳鸽粥', group: '广府生滚' },
  { id: 'rec_congee_16', name: '润燥鲜鸭血嫩豆腐碎生滚粥', search: '鸭血粥', group: '广府生滚' },
  { id: 'rec_congee_17', name: '鲜粉肠白灼生姜丝生滚粥', search: '生滚粉肠粥', group: '广府生滚' },
  { id: 'rec_congee_18', name: '铁棍淮山药排骨浓稠香米粥', search: '山药排骨粥', group: '广府生滚' },
  { id: 'rec_congee_19', name: '顺德水牛初乳甜润水牛奶粥', search: '水牛奶生滚粥', group: '广府生滚' },
  { id: 'rec_congee_20', name: '顺德明火慢熬开花大米白粥', search: '明火白粥', group: '广府生滚' },

  // 二、潮汕与沿海渔港砂锅海鲜流派 (20道)
  { id: 'rec_congee_21', name: '潮汕正宗膏蟹鲜虾砂锅粥', search: '膏蟹鲜虾砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_22', name: '潮汕瑶柱干贝基围虾砂锅粥', search: '干贝鲜虾砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_23', name: '沿海肥美生蚝白贝海鲜砂锅粥', search: '生蚝海鲜粥', group: '潮汕海鲜' },
  { id: 'rec_congee_24', name: '鲜活黄鳝生姜丝保温砂锅粥', search: '黄鳝砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_25', name: '鲜活鲍鱼鲜虾海皇滋补砂锅粥', search: '鲍鱼鲜虾粥', group: '潮汕海鲜' },
  { id: 'rec_congee_26', name: '鲜带子瑶柱鲜鱿双拼砂锅粥', search: '海鲜带子粥', group: '潮汕海鲜' },
  { id: 'rec_congee_27', name: '海参鲜虾深海砂锅御品稠粥', search: '海参大虾粥', group: '潮汕海鲜' },
  { id: 'rec_congee_28', name: '鲜活花蛤冬菜生滚清甜砂锅粥', search: '花蛤砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_29', name: '深海墨鱼须鲜虾脆爽砂锅粥', search: '鱿鱼虾砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_30', name: '潮汕九肚鱼生滚入口即化砂锅粥', search: '豆腐鱼砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_31', name: '沿海海虾皮白菜心生滚海味粥', search: '虾皮白菜粥', group: '潮汕海鲜' },
  { id: 'rec_congee_32', name: '鲜甜海鲈鱼片砂锅生滚白汤粥', search: '鲈鱼片砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_33', name: '象拔蚌鲜片砂锅生滚脆甜海鲜粥', search: '象拔蚌海鲜粥', group: '潮汕海鲜' },
  { id: 'rec_congee_34', name: '大蛏子皇芹菜粒砂锅鲜滚稠粥', search: '蛏子砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_35', name: '鲜活泥鳅老姜枸杞砂锅温阳粥', search: '泥鳅砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_36', name: '浓香鲍汁螺片生鲜砂锅咸鲜粥', search: '螺片砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_37', name: '手打虾滑鲜贝双鲜生滚砂锅粥', search: '虾滑鲜贝砂锅粥', group: '潮汕海鲜' },
  { id: 'rec_congee_38', name: '青蟹冬笋干贝砂锅节令鲜粥', search: '青蟹冬笋粥', group: '潮汕海鲜' },
  { id: 'rec_congee_39', name: '鲜虾滑蛋丝砂锅儿童补钙粥', search: '鲜虾滑蛋粥', group: '潮汕海鲜' },
  { id: 'rec_congee_40', name: '潮汕老菜脯鲜肉干贝砂锅古早粥', search: '老菜脯砂锅粥', group: '潮汕海鲜' },

  // 三、二十四节气与五谷杂粮药膳流派 (20道)
  { id: 'rec_congee_41', name: '金陵经典民国滋补美龄粥', search: '美龄粥', group: '五谷药膳' },
  { id: 'rec_congee_42', name: '金黄小米山药红枣健脾养胃粥', search: '小米山药红枣粥', group: '五谷药膳' },
  { id: 'rec_congee_43', name: '传统经典腊八八宝滋补甜粥', search: '腊八八宝粥', group: '五谷药膳' },
  { id: 'rec_congee_44', name: '补气养血红豆红枣花生黑米粥', search: '红豆黑米粥', group: '五谷药膳' },
  { id: 'rec_congee_45', name: '润肺安神银耳百合雪梨莲子羹粥', search: '银耳百合雪梨粥', group: '五谷药膳' },
  { id: 'rec_congee_46', name: '黑芝麻核桃黑豆黑米乌发滋补粥', search: '黑芝麻黑豆黑米粥', group: '五谷药膳' },
  { id: 'rec_congee_47', name: '芡实茯苓薏米赤小豆健脾去湿粥', search: '红豆薏米芡实粥', group: '五谷药膳' },
  { id: 'rec_congee_48', name: '老南瓜燕麦高纤低卡刮油暖粥', search: '南瓜燕麦粥', group: '五谷药膳' },
  { id: 'rec_congee_49', name: '桂圆枸杞莲子安神红枣糯米粥', search: '桂圆红枣莲子粥', group: '五谷药膳' },
  { id: 'rec_congee_50', name: '绿豆百合薄荷盛夏清热解暑清粥', search: '绿豆百合粥', group: '五谷药膳' },
  { id: 'rec_congee_51', name: '糙米胚芽苦荞降糖高纤健康粥', search: '苦荞糙米胚芽粥', group: '五谷药膳' },
  { id: 'rec_congee_52', name: '黄芪党参红枣乌鸡药膳滋补温粥', search: '黄芪乌鸡药膳粥', group: '五谷药膳' },
  { id: 'rec_congee_53', name: '当归生姜红糖羊肉暖宫驱寒冬粥', search: '当归羊肉生姜粥', group: '五谷药膳' },
  { id: 'rec_congee_54', name: '桂花糖芋头红豆沙温润秋蜜粥', search: '糖芋头红豆粥', group: '五谷药膳' },
  { id: 'rec_congee_55', name: '莲子心绿豆清心安神败火夏粥', search: '莲子绿豆清火粥', group: '五谷药膳' },
  { id: 'rec_congee_56', name: '麦仁红薯老南瓜粗粮农家甜粥', search: '麦仁红薯南瓜粥', group: '五谷药膳' },
  { id: 'rec_congee_57', name: '葛根粉山药百合清润健脾稠粥', search: '葛根山药百合粥', group: '五谷药膳' },
  { id: 'rec_congee_58', name: '茯苓白术炒薏仁祛湿温脾养生粥', search: '茯苓薏仁健脾粥', group: '五谷药膳' },
  { id: 'rec_congee_59', name: '玉米糁高粱米北方地道黄金棒子面粥', search: '玉米糁黄金粥', group: '五谷药膳' },
  { id: 'rec_congee_60', name: '紫薯芋头西米露清甜养颜温粥', search: '紫薯芋头西米露粥', group: '五谷药膳' },

  // 四、华夏地标名粥与生活调理流派 (20道)
  { id: 'rec_congee_61', name: '厦门老字号经典卤鸭肉米粥', search: '厦门鸭肉粥', group: '地标调理' },
  { id: 'rec_congee_62', name: '闽南泉州高汤干贝海蛎咸稀饭', search: '泉州海蛎干贝咸粥', group: '地标调理' },
  { id: 'rec_congee_63', name: '河南开封八宝牛肉五香咸稠粥', search: '牛肉咸粥', group: '地标调理' },
  { id: 'rec_congee_64', name: '老北京地道油茶面茶麻酱芝麻盐粥', search: '老北京面茶', group: '地标调理' },
  { id: 'rec_congee_65', name: '山东临沂牛羊肉糊嘟糁汤稠粥', search: '临沂糁汤肉粥', group: '地标调理' },
  { id: 'rec_congee_66', name: '上海荠菜冬笋鲜肉黄豆咸香菜粥', search: '上海青菜咸肉粥', group: '地标调理' },
  { id: 'rec_congee_67', name: '苏州清香荷叶莲子鸡头米夏令粥', search: '鸡头米莲子荷叶粥', group: '地标调理' },
  { id: 'rec_congee_68', name: '四川香辣牛肉末皮蛋特色风味粥', search: '香辣牛肉皮蛋粥', group: '地标调理' },
  { id: 'rec_congee_69', name: '东北大碴子红小豆柴火铁锅稠粘粥', search: '东北大碴子红豆粥', group: '地标调理' },
  { id: 'rec_congee_70', name: '陕北延安糜子米红枣稠饭米汤', search: '陕北糜子米红枣稠饭', group: '地标调理' },
  { id: 'rec_congee_71', name: '云南松茸鲜火腿生滚山珍香米粥', search: '松茸火腿香米粥', group: '地标调理' },
  { id: 'rec_congee_72', name: '贵州苗家酸汤鲜鱼片开胃生滚粥', search: '酸汤鱼片生滚粥', group: '地标调理' },
  { id: 'rec_congee_73', name: '台湾地瓜白米香甜古早味稀饭', search: '地瓜白米稀饭', group: '地标调理' },
  { id: 'rec_congee_74', name: '黄金甜玉米粒鲜虾碎菜儿童长高粥', search: '玉米鲜虾碎菜粥', group: '地标调理' },
  { id: 'rec_congee_75', name: '银鱼碎菠菜嫩豆腐泥婴幼辅食补钙粥', search: '银鱼菠菜豆腐辅食粥', group: '地标调理' },
  { id: 'rec_congee_76', name: '苹果胡萝卜肉泥开胃健脾消食儿童粥', search: '苹果胡萝卜猪肉粥', group: '地标调理' },
  { id: 'rec_congee_77', name: '鸡胸肉芦笋荷兰豆高蛋白低卡减脂粥', search: '鸡胸肉芦笋减脂粥', group: '地标调理' },
  { id: 'rec_congee_78', name: '魔芋燕麦奇亚籽低GI高饱腹刮油轻体粥', search: '奇亚籽燕麦魔芋粥', group: '地标调理' },
  { id: 'rec_congee_79', name: '荷叶冬瓜生滚里脊去水肿排毒轻润粥', search: '冬瓜荷叶瘦肉粥', group: '地标调理' },
  { id: 'rec_congee_80', name: '白萝卜丝生姜鲜肉丝化痰止咳暖身粥', search: '萝卜丝生姜瘦肉粥', group: '地标调理' }
];

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
  global.window = global;
  require('../js/data/recipes.js');
  const existingUrls = new Set(window.RECIPES_DATA.map(r => r.image));
  
  // 加上已确定的10个替换新URL
  const replaced10 = [
    'https://i2.chuimg.com/03bb7e748bb711e6b87c0242ac110003_1614w_1080h.jpg',
    'https://i2.chuimg.com/c9f34fd8c91a496fadf9c40442d4e789_1280w_960h.jpg',
    'https://i2.chuimg.com/85ad33d0e8bb41f6ae91f037370b8b83_1440w_1080h.jpg',
    'https://i2.chuimg.com/d6c1b5de4e0843fdb310939e82433534_1280w_855h.jpg',
    'https://i2.chuimg.com/7841df375d6148c496c8a881c7c6c580_1280w_960h.jpg',
    'https://i2.chuimg.com/afb11460844b4bc8922d6de295af9429_7952w_5304h.jpg',
    'https://i2.chuimg.com/e3fedf6939194cd5a79454aab216c2c4_1050w_1050h.jpg',
    'https://i2.chuimg.com/d1357ede2eea4a40b21e3dec606c67ef_1280w_960h.jpg',
    'https://i2.chuimg.com/7d2d49245673496c9a465432976cc0e9_1280w_960h.jpg',
    'https://i2.chuimg.com/1bf412c05aaf49abb82fbf6c47fa10f2_1080w_864h.jpg'
  ];
  replaced10.forEach(u => existingUrls.add(u));

  console.log(`全库已存在 URL 数: ${existingUrls.size}`);
  console.log(`开始为 80 道营养粥品检索真实高清成菜图片...`);

  const results = {};
  const chosenUrls = new Set(existingUrls);

  for (let i = 0; i < congeeDishes.length; i++) {
    const item = congeeDishes[i];
    console.log(`[${i + 1}/${congeeDishes.length}] 检索: ${item.name} (关键词: ${item.search})...`);
    let urls = await searchChuimg(item.search);
    let selected = null;
    for (const u of urls) {
      if (!chosenUrls.has(u)) {
        selected = u;
        chosenUrls.add(u);
        break;
      }
    }
    // 降级扩展搜索词
    if (!selected) {
      const fallbackSearch = item.search.replace(/砂锅|生滚|老火|传统|名/g, '');
      urls = await searchChuimg(fallbackSearch);
      for (const u of urls) {
        if (!chosenUrls.has(u)) {
          selected = u;
          chosenUrls.add(u);
          break;
        }
      }
    }
    // 二次降级搜索
    if (!selected) {
      urls = await searchChuimg(item.name.slice(0, 5));
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
      group: item.group,
      photoUrl: selected || null,
      candidatesCount: urls.length
    };
    console.log(`  -> 结果: ${selected ? '成功获取' : '未直接获取'} (${selected || '无'})`);
    await new Promise(r => setTimeout(r, 450));
  }

  const outputPath = path.join(__dirname, 'congee_80_photos.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`检索完成，结果已保存至: ${outputPath}`);

  const total = Object.keys(results).length;
  const missing = Object.values(results).filter(x => !x.photoUrl).length;
  console.log(`总数: ${total}, 缺少图片数: ${missing}`);
}

run();
