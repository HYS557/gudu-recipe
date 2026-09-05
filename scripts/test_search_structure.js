const https = require('https');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', () => resolve(''));
  });
}

async function test() {
  const kw = encodeURIComponent('皮蛋瘦肉粥');
  const html = await fetch(`https://www.xiachufang.com/search/?keyword=${kw}&cat=1001`);
  
  let count = 0;
  console.log('HTML length:', html.length);
  
  const imgTagRegex = /<img[^>]+>/g;
  let imgM;
  while ((imgM = imgTagRegex.exec(html)) && count < 20) {
    const tag = imgM[0];
    if (tag.includes('chuimg.com')) {
      const srcMatch = tag.match(/(?:src|data-src)="([^"]+)"/);
      const altMatch = tag.match(/alt="([^"]*)"/);
      console.log(`[${count+1}] Alt: "${altMatch ? altMatch[1] : ''}" | Src: ${srcMatch ? srcMatch[1] : ''}`);
      count++;
    }
  }
}

test();
