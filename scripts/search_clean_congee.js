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
    const rawSrc = m[1];
    const alt = m[2];
    const cleanUrl = rawSrc.split('?')[0];
    if (!cleanUrl.includes('placeholder') && !cleanUrl.includes('avatar') && !cleanUrl.endsWith('.gif')) {
      list.push({ alt, url: cleanUrl });
    }
  }
  return list;
}

async function checkDishes() {
  const queries = [
    { id: 'rec_congee_12_clean', q: '猪腰瘦肉粥' },
    { id: 'rec_congee_12_clean2', q: '麦穗腰花粥' }
  ];

  for (const item of queries) {
    const res = await searchCandidates(item.q);
    console.log(`=== ${item.id} ${item.q} ===`);
    res.slice(0, 5).forEach((r, idx) => {
      console.log(`  [${idx}] ${r.alt} -> ${r.url}`);
    });
    await new Promise(r => setTimeout(r, 400));
  }
}

checkDishes();
