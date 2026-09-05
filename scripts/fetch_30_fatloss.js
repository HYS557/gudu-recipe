const fs = require('fs');
const path = require('path');

const fatlossDishes = [
  { name: '香煎黑椒多汁嫩鸡胸', kw: '黑椒鸡胸肉' },
  { name: '茄汁金针菇焖鸡胸肉', kw: '茄汁金针菇鸡胸肉' },
  { name: '低脂黄瓜木耳炒鸡胸肉', kw: '黄瓜木耳炒鸡胸肉' },
  { name: '越式鲜虾鸡丝低卡米纸卷', kw: '鲜虾米纸卷' },
  { name: '减脂彩椒孜然鸡肉串', kw: '彩椒鸡胸肉串' },
  { name: '低卡无油蒜香彩蔬鸡肉丸', kw: '鸡肉丸' },
  { name: '黑椒彩椒滑牛柳粒', kw: '黑椒彩椒牛肉粒' },
  { name: '芦笋清炒滑牛柳丝', kw: '芦笋炒牛肉' },
  { name: '鲜嫩冬瓜手打纯牛肉丸煲', kw: '冬瓜牛肉丸汤' },
  { name: '无米燕麦滑蛋低卡肥牛饭', kw: '滑蛋肥牛饭' },
  { name: '酸辣柠檬鲜虾凉拌荞麦面', kw: '酸辣柠檬鲜虾荞麦面' },
  { name: '减脂鲜虾生菜全麦卷饼', kw: '鲜虾全麦卷饼' },
  { name: '虾仁西兰花炒口蘑', kw: '虾仁西兰花炒口蘑' },
  { name: '滑蛋鲜虾抱嫩豆腐', kw: '滑蛋虾仁抱豆腐' },
  { name: '无油香煎三文鱼配海盐黑胡椒', kw: '香煎三文鱼' },
  { name: '蒜蓉荷兰豆清炒虾仁', kw: '荷兰豆炒虾仁' },
  { name: '低脂金枪鱼彩虹藜麦沙拉', kw: '金枪鱼藜麦沙拉' },
  { name: '白灼海虾配秘制生抽姜丝汁', kw: '白灼虾' },
  { name: '花椰菜碎彩蔬低卡炒饭', kw: '花椰菜炒饭' },
  { name: '贝贝南瓜紫薯鸡胸温沙拉', kw: '南瓜鸡胸肉温沙拉' },
  { name: '低卡韩式泡菜凉拌荞麦面', kw: '韩式凉拌荞麦面' },
  { name: '意式黑麦烤时蔬牛油果波奇碗', kw: '波奇碗' },
  { name: '无油菠菜口蘑厚蛋烧', kw: '菠菜厚蛋烧' },
  { name: '酸辣魔芋丝凉拌鸡丝', kw: '魔芋丝拌鸡丝' },
  { name: '低卡酸辣番茄魔芋结老豆腐煲', kw: '番茄魔芋结豆腐煲' },
  { name: '白灼秋葵配秘制低脂料汁', kw: '白灼秋葵' },
  { name: '降脂凉拌木耳洋葱腐竹', kw: '凉拌木耳洋葱' },
  { name: '蚝油手撕杏鲍菇', kw: '手撕杏鲍菇' },
  { name: '裙带菜番茄虾仁无油鲜汤', kw: '裙带菜番茄虾仁汤' },
  { name: '鲜甜丝瓜蛤蜊高钙清汤', kw: '丝瓜蛤蜊汤' }
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
  for (let i = 0; i < fatlossDishes.length; i++) {
    const item = fatlossDishes[i];
    console.log(`[${i+1}/${fatlossDishes.length}] Searching for: ${item.name} (${item.kw})...`);
    let candidates = await searchXiachufang(item.kw);
    let chosen = null;
    for (const c of candidates) {
      if (!c.img.startsWith('https://i2.chuimg.com') && !c.img.startsWith('https://i1.chuimg.com')) continue;
      if (usedUrls.has(c.img)) continue;
      
      try {
        const check = await fetch(c.img, { method: 'HEAD' });
        if (check.ok) {
          chosen = c;
          usedUrls.add(c.img);
          break;
        }
      } catch (e) {}
    }

    // fallback with simplified keyword if needed
    if (!chosen && item.kw.length > 3) {
      const shortKw = item.kw.slice(0, 3);
      candidates = await searchXiachufang(shortKw);
      for (const c of candidates) {
        if (!c.img.startsWith('https://i2.chuimg.com') && !c.img.startsWith('https://i1.chuimg.com')) continue;
        if (usedUrls.has(c.img)) continue;
        try {
          const check = await fetch(c.img, { method: 'HEAD' });
          if (check.ok) {
            chosen = c;
            usedUrls.add(c.img);
            break;
          }
        } catch (e) {}
      }
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
  
  fs.writeFileSync(path.join(__dirname, 'new_fatloss_photos.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log(`Finished! Total fetched: ${results.length}/${fatlossDishes.length}`);
}

run();
