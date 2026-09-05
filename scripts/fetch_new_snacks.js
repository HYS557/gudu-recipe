const fs = require('fs');
const path = require('path');

const newSnacks = [
  { name: '经典五香酱牛肉', kw: '酱牛肉' },
  { name: '川味红油脆肚丝', kw: '红油肚丝' },
  { name: '柠檬酸辣无骨鸡爪', kw: '柠檬无骨鸡爪' },
  { name: '经典皮蛋拌豆腐', kw: '皮蛋拌豆腐' },
  { name: '爽脆老醋海蜇头', kw: '老醋蜇头' },
  { name: '绝味香辣卤鸭掌', kw: '卤鸭掌' },
  { name: '香辣爆炒花甲', kw: '辣炒花甲' },
  { name: '干锅千页豆腐', kw: '干锅千页豆腐' },
  { name: '湘西风味牙签牛肉', kw: '牙签牛肉' },
  { name: '酸豆角爆炒鸡胗', kw: '酸豆角炒鸡胗' },
  { name: '紫苏辣炒田螺', kw: '紫苏炒田螺' },
  { name: '椒盐香酥小河虾', kw: '炸河虾' },
  { name: '金牌蒜香椒盐排骨', kw: '蒜香排骨' },
  { name: '避风塘香酥鱿鱼圈', kw: '炸鱿鱼圈' },
  { name: '老酒馆酥脆炸花生米', kw: '油炸花生米' },
  { name: '秘制麻辣干锅鸭头', kw: '干锅鸭头' }
];

// Load current used URLs in recipes.js to prevent any duplicate
const code = fs.readFileSync(path.join(__dirname, '../js/data/recipes.js'), 'utf8');
const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
const existingRecipes = fn({});
const usedUrls = new Set(existingRecipes.map(r => r.photoUrl).filter(Boolean));

async function searchXiachufang(kw) {
  const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(kw);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const text = await res.text();
  const items = [];
  const itemRegex = /<div class="recipe[^"]*"[\s\S]*?<\/li>/g;
  const matches = text.match(itemRegex) || [];
  
  for (const m of matches) {
    const nameMatch = m.match(/<p class="name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
    const imgMatch = m.match(/data-src="([^"]+)"/) || m.match(/src="([^"]+)"/);
    if (nameMatch && imgMatch) {
      const title = nameMatch[1].replace(/<[^>]+>/g, '').trim();
      let img = imgMatch[1];
      img = img.replace(/\?imageView[^\s"'>]*/, '?imageView2/2/w/660/interlace/1/q/90');
      items.push({ title, img });
    }
  }
  return items;
}

async function run() {
  const results = [];
  for (const item of newSnacks) {
    console.log(`Searching for: ${item.name} (${item.kw})...`);
    const candidates = await searchXiachufang(item.kw);
    let chosen = null;
    for (const c of candidates) {
      if (!c.img.startsWith('https://i2.chuimg.com') && !c.img.startsWith('https://i1.chuimg.com')) continue;
      if (usedUrls.has(c.img)) continue;
      
      // verify url accessible
      try {
        const check = await fetch(c.img, { method: 'HEAD' });
        if (check.ok) {
          chosen = c;
          usedUrls.add(c.img);
          break;
        }
      } catch (e) {}
    }
    
    if (chosen) {
      console.log(`  -> Found: "${chosen.title}" => ${chosen.img}`);
      results.push({
        name: item.name,
        kw: item.kw,
        chosenTitle: chosen.title,
        photoUrl: chosen.img
      });
    } else {
      console.error(`  -> FAILED to find image for ${item.name}`);
    }
    await new Promise(r => setTimeout(r, 200));
  }
  
  fs.writeFileSync(path.join(__dirname, 'new_snacks_photos.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log(`Finished! Total fetched: ${results.length}/${newSnacks.length}`);
}

run();
