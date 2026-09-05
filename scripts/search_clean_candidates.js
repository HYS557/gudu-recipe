const https = require('https');
const fs = require('fs');

async function searchCandidates(kw) {
  const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(kw) + '&cat=1001';
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        const regex = /<img[^>]*data-src="([^"]+)"[^>]*alt="([^"]*)"/g;
        const list = [];
        let m;
        while ((m = regex.exec(d))) {
          const u = m[1].split('?')[0];
          if (!u.includes('placeholder') && !u.includes('avatar') && !u.endsWith('.gif')) {
            list.push({ alt: m[2], url: u });
          }
        }
        resolve(list);
      });
    });
  });
}

async function dl(u, f) {
  return new Promise(r => {
    https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      res.pipe(fs.createWriteStream(f)).on('finish', r);
    });
  });
}

const args = process.argv.slice(2);
(async () => {
  if (args[0] === 'dl' && args[1] && args[2]) {
    await dl(args[1], args[2]);
    console.log('Downloaded ' + args[2]);
    return;
  }
  const qList = args.length > 0 ? args : ['红枣小米粥', '陕北小米红枣粥', '红枣枸杞小米粥'];
  for (const q of qList) {
    const res = await searchCandidates(q);
    console.log('=== ' + q + ' ===');
    res.slice(0, 6).forEach((r, i) => console.log('  [' + i + '] ' + r.alt + ' -> ' + r.url));
  }
})();
