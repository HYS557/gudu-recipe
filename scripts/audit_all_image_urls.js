const https = require('https');
const http = require('http');
const fs = require('fs');

global.window = {};
require('../js/data/recipes.js');
const recipes = window.RECIPES_DATA;

function checkUrl(url) {
  return new Promise(resolve => {
    if (!url || !url.startsWith('http')) {
      return resolve({ status: 'INVALID', url });
    }
    try {
      const u = new URL(url);
      const mod = u.protocol === 'https:' ? https : http;
      const req = mod.request(u, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      }, res => {
        // Drain data to close socket
        res.on('data', () => {});
        res.on('end', () => resolve({ status: res.statusCode, url }));
      });
      req.on('error', e => resolve({ status: 'ERR', error: e.message, url }));
      req.setTimeout(3500, () => {
        req.destroy();
        resolve({ status: 'TIMEOUT', url });
      });
      req.end();
    } catch(e) {
      resolve({ status: 'INVALID', url });
    }
  });
}

async function runAudit() {
  console.log('Auditing ' + recipes.length + ' recipes images...');
  const results = [];
  const concurrency = 25;
  
  for (let i = 0; i < recipes.length; i += concurrency) {
    const batch = recipes.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(async r => {
      const res = await checkUrl(r.image);
      return { id: r.id, name: r.name, status: res.status, url: r.image };
    }));
    results.push(...batchResults);
    process.stdout.write(`Progress: ${Math.min(i + concurrency, recipes.length)}/${recipes.length}\r`);
  }
  
  console.log('\nAudit complete.');
  const bad = results.filter(r => r.status !== 200 && r.status !== 301 && r.status !== 302 && r.status !== 307);
  console.log('Total non-200/redirect images:', bad.length);
  fs.writeFileSync('scripts/bad_images_report.json', JSON.stringify(bad, null, 2), 'utf8');
  console.log('Report saved to scripts/bad_images_report.json');
}

runAudit();
