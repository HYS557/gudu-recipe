const fs = require('fs');
const https = require('https');
const http = require('http');

const soupNames = [
  { id: 'rec_soup_01', name: '江南传统名汤腌笃鲜', search: '腌笃鲜' },
  { id: 'rec_soup_02', name: '客家正宗胡椒猪肚鸡汤', search: '胡椒猪肚鸡' },
  { id: 'rec_soup_03', name: '山东单县传统全羊汤', search: '单县羊肉汤' },
  { id: 'rec_soup_04', name: '陕西关中水盆羊肉清汤', search: '水盆羊肉' },
  { id: 'rec_soup_05', name: '四川简阳正宗羊肉汤', search: '简阳羊肉汤' },
  { id: 'rec_soup_06', name: '广东五指毛桃土茯苓煲猪骨汤', search: '五指毛桃土茯苓骨头汤' },
  { id: 'rec_soup_07', name: '顺德花胶鲜鲍乌鸡滋补汤', search: '花胶鲍鱼乌鸡汤' },
  { id: 'rec_soup_08', name: '广式经典苦瓜黄豆排骨汤', search: '苦瓜黄豆排骨汤' },
  { id: 'rec_soup_09', name: '新会陈皮老鸭慢炖汤', search: '陈皮老鸭汤' },
  { id: 'rec_soup_10', name: '云南野生菌竹荪汽锅土鸡', search: '汽锅鸡' },
  { id: 'rec_soup_11', name: '云南松茸羊肚菌鲜鸡汤', search: '松茸菌菇土鸡汤' },
  { id: 'rec_soup_12', name: '广式响螺花胶老鸡汤', search: '响螺花胶鸡汤' },
  { id: 'rec_soup_13', name: '贵州天麻枸杞炖乳鸽', search: '天麻炖乳鸽' },
  { id: 'rec_soup_14', name: '砂锅天目湖白汤大鱼头', search: '天目湖砂锅鱼头' },
  { id: 'rec_soup_15', name: '传统当归生姜羊肉汤', search: '当归生姜羊肉汤' },
  { id: 'rec_soup_16', name: '河南信阳瓦罐炖老鸭汤', search: '信阳老鸭汤' },
  { id: 'rec_soup_17', name: '客家正宗车前草黄豆煲猪横脷', search: '车前草煲猪横脷' },
  { id: 'rec_soup_18', name: '淮扬神仙鸭子汤', search: '神仙鸭子' },
  { id: 'rec_soup_19', name: '杭州西湖莼菜鲈鱼羹', search: '西湖莼菜鲈鱼羹' },
  { id: 'rec_soup_20', name: '广式原盅原汁椰子炖竹丝鸡', search: '原只椰子炖鸡' },
  { id: 'rec_soup_21', name: '海底椰无花果百合瘦肉汤', search: '海底椰无花果瘦肉汤' },
  { id: 'rec_soup_22', name: '虫草花西洋参老鸽慢炖汤', search: '虫草花西洋参鸽子汤' },
  { id: 'rec_soup_23', name: '湖北蔡甸野莲藕慢煨筒子骨汤', search: '排骨藕汤' },
  { id: 'rec_soup_24', name: '福州海蚌煨清鸡汤', search: '海蚌煨清鸡汤' },
  { id: 'rec_soup_25', name: '霸王花干罗汉果煲猪肺汤', search: '霸王花罗汉果煲猪肺' },
  { id: 'rec_soup_26', name: '菌皇羊肚菌排骨山药汤', search: '羊肚菌排骨山药汤' },
  { id: 'rec_soup_27', name: '台湾正宗胡麻油老姜米酒鸡汤', search: '台湾麻油鸡' },
  { id: 'rec_soup_28', name: '传统砂锅老豆腐炖海捕大虾汤', search: '大虾炖豆腐' },
  { id: 'rec_soup_29', name: '江南荠菜白玉豆腐黄鱼汤', search: '荠菜黄鱼羹' },
  { id: 'rec_soup_30', name: '竹荪羊肚菌玉米马蹄素鲜汤', search: '竹荪素鲜汤' }
];

const code = fs.readFileSync('js/data/recipes.js', 'utf8');
const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
const recipes = fn({});
const existingUrls = new Set(recipes.map(r => r.photoUrl || r.image).filter(Boolean));

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
  console.log(`Starting to fetch real photos for ${soupNames.length} soups...`);
  const results = {};
  const chosenUrls = new Set(existingUrls);

  for (let i = 0; i < soupNames.length; i++) {
    const item = soupNames[i];
    console.log(`[${i + 1}/${soupNames.length}] Searching for: ${item.name} (${item.search})...`);
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
      // Try with name
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
      photoUrl: selected || null,
      candidatesCount: urls.length
    };
    console.log(`  -> Result: ${selected ? 'FOUND' : 'NOT FOUND'} (${selected || 'none'})`);
    await new Promise(r => setTimeout(r, 600));
  }

  fs.writeFileSync('scripts/soup_photos_found.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('Results saved to scripts/soup_photos_found.json');
}

run();
