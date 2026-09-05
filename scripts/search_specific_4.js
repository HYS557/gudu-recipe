const https = require('https');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(d));
    }).on('error', () => resolve(''));
  });
}

async function searchCandidates(keyword) {
  const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(keyword) + '&cat=1001';
  const html = await fetch(url);
  const regex = /<img[^>]*data-src="([^"]+)"[^>]*alt="([^"]*)"/g;
  const list = [];
  let m;
  while ((m = regex.exec(html))) {
    const cleanUrl = m[1].split('?')[0];
    if (!cleanUrl.includes('placeholder') && !cleanUrl.includes('avatar') && !cleanUrl.endsWith('.gif')) {
      list.push({ alt: m[2], url: cleanUrl });
    }
  }
  return list;
}

async function main() {
  const specific = [
    { id: 'rec_congee_68', q: '皮蛋牛肉粥' },
    { id: 'rec_congee_71', q: '松茸粥' },
    { id: 'rec_congee_75', q: '银鱼粥' },
    { id: 'rec_congee_79', q: '冬瓜瘦肉粥' }
  ];

  for (const item of specific) {
    const res = await searchCandidates(item.q);
    console.log(`=== ${item.id} ${item.q} ===`);
    res.slice(0, 6).forEach((r, idx) => {
      console.log(`  [${idx}] ${r.alt} -> ${r.url}`);
    });
  }
}

main();
