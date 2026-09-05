const fs = require('fs');
const path = require('path');

const stapleDishes = [
  { name: '新疆正宗过油肉拌面', kw: '过油肉拌面' },
  { name: '陕西油泼大宽BiangBiang面', kw: 'biangbiang面' },
  { name: '杭州正宗雪菜笋肉片儿川', kw: '片儿川' },
  { name: '镇江传统跳面锅盖面', kw: '镇江锅盖面' },
  { name: '苏式枫镇大面', kw: '枫镇大面' },
  { name: '成都纯手工甜水面', kw: '甜水面' },
  { name: '广府大火镬气干炒牛河', kw: '干炒牛河' },
  { name: '广式鲜虾竹升云吞面', kw: '鲜虾云吞面' },
  { name: '湖南常德红油牛肉米粉', kw: '常德牛肉粉' },
  { name: '贵阳老素粉', kw: '贵阳老素粉' },
  { name: '天津传统狗不理水馅包子', kw: '狗不理包子' },
  { name: '广式早茶松软蜜汁叉烧包', kw: '叉烧包' },
  { name: '焦脆冰花底猪肉韭菜水煎包', kw: '冰花水煎包' },
  { name: '靖江皮薄如纸蟹黄大汤包', kw: '蟹黄汤包' },
  { name: '东北传统酸菜猪肉手工水饺', kw: '酸菜猪肉水饺' },
  { name: '门框胡同老北京牛肉褡裢火烧', kw: '褡裢火烧' },
  { name: '山东老面手揉起层戗面大馒头', kw: '戗面馒头' },
  { name: '西安牛肉水盆配香酥月牙饼', kw: '水盆牛肉' },
  { name: '缙云炭烤梅干菜五花肉烧饼', kw: '缙云烧饼' },
  { name: '江苏泰兴传统黄桥烧饼', kw: '黄桥烧饼' },
  { name: '老北京千层麻酱红糖大花卷', kw: '麻酱红糖花卷' },
  { name: '陕西乾县古法干硬大锅盔', kw: '乾县锅盔' },
  { name: '扬州传统细密千层油糕', kw: '千层油糕' },
  { name: '胶东金黄发丝油旋饼', kw: '济南油旋' },
  { name: '广式正宗双喜腊味煲仔饭', kw: '腊味煲仔饭' },
  { name: '台湾正宗古早味手切香菇卤肉饭', kw: '古早味卤肉饭' },
  { name: '潮汕芥菜海鲜五花肉咸饭', kw: '潮汕咸饭' },
  { name: '陕西地道洋芋擦擦', kw: '洋芋擦擦' }
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
  for (let i = 0; i < stapleDishes.length; i++) {
    const item = stapleDishes[i];
    console.log(`[${i+1}/${stapleDishes.length}] Searching for: ${item.name} (${item.kw})...`);
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

    if (!chosen && candidates.length > 0) {
      for (const c of candidates) {
        if (usedUrls.has(c.img)) continue;
        chosen = c;
        usedUrls.add(c.img);
        break;
      }
    }

    if (chosen) {
      console.log(`  ✓ Found: ${chosen.title} -> ${chosen.img}`);
      results.push({
        dishName: item.name,
        searchedTitle: chosen.title,
        photoUrl: chosen.img
      });
    } else {
      console.error(`  ✗ Failed to find image for: ${item.name}`);
    }
  }

  console.log(`\nDone! Successfully matched ${results.length}/${stapleDishes.length} dishes.`);
  fs.writeFileSync(path.join(__dirname, 'new_staple_photos.json'), JSON.stringify(results, null, 2));
}

run();
