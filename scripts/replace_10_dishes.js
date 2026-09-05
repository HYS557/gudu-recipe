const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const targets = [
  { id: 'rec_gudu_0067', name: '经典剁椒鱼头', search: '剁椒鱼头' },
  { id: 'rec_gudu_0072', name: '红煨甲鱼', search: '红煨甲鱼' },
  { id: 'rec_gudu_0107', name: '沙县扁肉', search: '沙县扁肉' },
  { id: 'rec_seafood_32', name: '渤海香煎针亮鱼', search: '香煎针亮鱼' },
  { id: 'rec_staple_16', name: '门框胡同老北京牛肉褡裢火烧', search: '褡裢火烧' },
  { id: 'rec_prov_121', name: '国宴川菜头牌传统开水白菜', search: '开水白菜' },
  { id: 'rec_prov_162', name: '松花江得莫利大铁锅炖鱼', search: '得莫利炖鱼' },
  { id: 'rec_prov_183', name: '东北老式溜蒜香猪腰花', search: '溜腰花' },
  { id: 'rec_gudu_0122', name: '杭州开水白烫酸甜西湖醋鱼', search: '西湖醋鱼' },
  { id: 'rec_prov_234', name: '杭州清明前龙井新茶炒虾仁', search: '龙井虾仁' }
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

async function main() {
  global.window = global;
  require('../js/data/recipes.js');
  const allExistingUrls = new Set(window.RECIPES_DATA.map(r => r.image));
  console.log(`现有全库图片数: ${allExistingUrls.size}`);

  const candidatesMap = {};
  for (const t of targets) {
    console.log(`正在为 ${t.name} (关键词: ${t.search}) 检索候选图片...`);
    let urls = await searchChuimg(t.search);
    if (urls.length === 0 && t.search.length > 4) {
      urls = await searchChuimg(t.search.slice(0, 4));
    }
    // 过滤掉已经在库中的URL
    const valid = urls.filter(u => !allExistingUrls.has(u));
    candidatesMap[t.id] = {
      name: t.name,
      search: t.search,
      candidates: valid.slice(0, 8)
    };
    console.log(`  找到 ${valid.length} 张未被占用的候选成菜图片`);
    await new Promise(r => setTimeout(r, 500));
  }

  fs.writeFileSync(path.join(__dirname, 'candidates_10_dishes.json'), JSON.stringify(candidatesMap, null, 2), 'utf8');
  console.log('候选图片检索完成，保存至 candidates_10_dishes.json');
}

main();
