const fs = require('fs');
const path = require('path');
const https = require('https');

const cacheFile = path.join(__dirname, 'photos_cache.json');
let photoCache = {};
if (fs.existsSync(cacheFile)) {
  try {
    photoCache = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
  } catch (e) {
    photoCache = {};
  }
}

function searchRealDishPhoto(query) {
  return new Promise((resolve) => {
    if (photoCache[query]) {
      return resolve(photoCache[query]);
    }

    const searchKw = query.replace(/[()（）·]/g, ' ') + ' 美食 菜谱 实拍';
    const url = 'https://cn.bing.com/images/async?q=' + encodeURIComponent(searchKw) + '&first=1&count=8&scenario=ImageBasicHover&datsrc=N_I&layout=RowBased&cortas=5';
    
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 8000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+)&quot;/g)];
        if (matches && matches.length > 0) {
          for (let m of matches) {
            const u = m[1];
            if (u.startsWith('http') && !u.includes('placeholder')) {
              photoCache[query] = u;
              return resolve(u);
            }
          }
        }
        resolve(null);
      });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => {
      req.destroy();
      resolve(null);
    });
  });
}

const { MEGA_DISHES } = require('./mega_expansion.js');
const { SPECIFIC_DISH_RECIPES } = require('./update_recipe_engine.js');

async function main() {
  const allNames = Object.keys(SPECIFIC_DISH_RECIPES);
  console.log('Total dishes to check photos for:', allNames.length);

  let missing = allNames.filter(n => !photoCache[n]);
  console.log('Dishes missing photos in cache:', missing.length);

  let successCount = 0;
  for (let i = 0; i < missing.length; i += 5) {
    const batch = missing.slice(i, i + 5);
    await Promise.all(batch.map(async (name) => {
      const url = await searchRealDishPhoto(name);
      if (url) {
        successCount++;
        console.log(`[+] ${name} -> ${url.substring(0, 60)}...`);
      } else {
        console.log(`[-] ${name} failed to fetch`);
      }
    }));
    fs.writeFileSync(cacheFile, JSON.stringify(photoCache, null, 2), 'utf-8');
  }

  console.log(`Finished fetching photos! Added: ${successCount}`);
}

main();
