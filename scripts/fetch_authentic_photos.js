const fs = require('fs');
const path = require('path');

const targets = JSON.parse(fs.readFileSync(path.join(__dirname, 'targets_to_fetch.json'), 'utf8'));

// Load all recipes
const recipesFile = path.join(__dirname, '../js/data/recipes.js');
const code = fs.readFileSync(recipesFile, 'utf8');
const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
const allRecipes = fn({});

// Used URLs set to prevent ANY duplicate across the entire database
const usedUrls = new Set();
allRecipes.forEach(r => {
  // If this recipe is NOT one of our targets to replace, protect its URL from being taken
  const isTarget = targets.some(t => t.id === r.id);
  if (!isTarget && r.photoUrl) {
    usedUrls.add(r.photoUrl);
  }
});

console.log(`Initialized with ${usedUrls.size} existing protected URLs.`);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchXiachufang(keyword) {
  const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(keyword);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const text = await res.text();
  
  // Extract recipe items
  const items = [];
  const itemRegex = /<div class="recipe[^"]*"[\s\S]*?<\/li>/g;
  const matches = text.match(itemRegex) || [];
  
  for (const m of matches) {
    const nameMatch = m.match(/<p class="name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
    const imgMatch = m.match(/data-src="([^"]+)"/) || m.match(/src="([^"]+)"/);
    if (nameMatch && imgMatch) {
      const title = nameMatch[1].replace(/<[^>]+>/g, '').trim();
      let img = imgMatch[1];
      // upgrade to high resolution standard format
      img = img.replace(/\?imageView[^\s"'>]*/, '?imageView2/2/w/660/interlace/1/q/90');
      items.push({ title, img });
    }
  }
  return items;
}

async function checkUrlAccessible(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.ok;
  } catch (e) {
    return false;
  }
}

// Check semantic relevancy of title to dish keyword
function isTitleRelevant(title, keyword) {
  if (!keyword || keyword.length === 0) return true;
  // If keyword has 2 chars like "生蚝", "羊肉", check if title contains it
  if (keyword.length <= 3) {
    return title.includes(keyword);
  }
  // If keyword has 4 chars like "手抓羊肉", check if title has at least 2 key characters or substrings
  const sub1 = keyword.slice(0, 2);
  const sub2 = keyword.slice(-2);
  return title.includes(keyword) || (title.includes(sub1) && title.includes(sub2)) || title.includes(sub1) || title.includes(sub2);
}

async function run() {
  const results = {};
  const failed = [];
  
  console.log(`Starting fetch for ${targets.length} target dishes...`);
  
  for (let i = 0; i < targets.length; i++) {
    const item = targets[i];
    console.log(`[${i + 1}/${targets.length}] Fetching: ${item.name} (KW: "${item.searchKeyword}")...`);
    
    let foundUrl = null;
    let chosenTitle = '';
    
    try {
      const candidates = await searchXiachufang(item.searchKeyword);
      
      // Step 1: look for candidates matching keyword semantically AND not used
      for (const cand of candidates) {
        if (!cand.img.startsWith('https://i2.chuimg.com') && !cand.img.startsWith('https://i1.chuimg.com')) continue;
        if (usedUrls.has(cand.img)) continue;
        if (!isTitleRelevant(cand.title, item.searchKeyword)) continue;
        
        const ok = await checkUrlAccessible(cand.img);
        if (ok) {
          foundUrl = cand.img;
          chosenTitle = cand.title;
          usedUrls.add(foundUrl);
          break;
        }
      }
      
      // Step 2: if not found, relax title match but still require unique URL
      if (!foundUrl) {
        for (const cand of candidates) {
          if (!cand.img.startsWith('https://i2.chuimg.com') && !cand.img.startsWith('https://i1.chuimg.com')) continue;
          if (usedUrls.has(cand.img)) continue;
          const ok = await checkUrlAccessible(cand.img);
          if (ok) {
            foundUrl = cand.img;
            chosenTitle = cand.title;
            usedUrls.add(foundUrl);
            break;
          }
        }
      }
      
      // Step 3: fallback to searching with dish name itself
      if (!foundUrl && item.searchKeyword !== item.name) {
        await sleep(200);
        const candidates2 = await searchXiachufang(item.name.slice(0, 4));
        for (const cand of candidates2) {
          if (!cand.img.startsWith('https://i2.chuimg.com') && !cand.img.startsWith('https://i1.chuimg.com')) continue;
          if (usedUrls.has(cand.img)) continue;
          const ok = await checkUrlAccessible(cand.img);
          if (ok) {
            foundUrl = cand.img;
            chosenTitle = cand.title;
            usedUrls.add(foundUrl);
            break;
          }
        }
      }
    } catch (err) {
      console.error(`Error searching for ${item.name}:`, err.message);
    }
    
    if (foundUrl) {
      results[item.id] = {
        id: item.id,
        name: item.name,
        searchKeyword: item.searchKeyword,
        chosenTitle,
        photoUrl: foundUrl
      };
      console.log(`  -> SUCCESS: "${chosenTitle}" => ${foundUrl.slice(0, 70)}...`);
    } else {
      console.warn(`  -> FAILED: No unique valid image for ${item.name}`);
      failed.push(item);
    }
    
    await sleep(200);
  }
  
  fs.writeFileSync(path.join(__dirname, 'authentic_photos_map.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n==============================================`);
  console.log(`Fetch Complete!`);
  console.log(`Successfully matched: ${Object.keys(results).length}/${targets.length}`);
  console.log(`Failed count: ${failed.length}`);
  if (failed.length > 0) {
    fs.writeFileSync(path.join(__dirname, 'failed_fetch.json'), JSON.stringify(failed, null, 2), 'utf8');
    console.log('Failed dishes:', failed.map(f => f.name));
  }
}

run();
