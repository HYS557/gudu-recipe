const fs = require('fs');
const path = require('path');

const seafoodDishes = [
  { name: '舟山野生红膏呛蟹', kw: '红膏呛蟹' },
  { name: '宁波雪菜大汤黄鱼', kw: '雪菜大汤黄鱼' },
  { name: '温州特色江蟹生', kw: '江蟹生' },
  { name: '舟山干炸带鱼段', kw: '干炸带鱼' },
  { name: '象山清蒸深海大米鱼', kw: '清蒸米鱼' },
  { name: '浙江家常红烧安康鱼', kw: '红烧安康鱼' },
  { name: '温州三鲜炒粉干', kw: '温州炒粉干' },
  { name: '舟山野生椒盐富贵皮皮虾', kw: '椒盐富贵虾' },
  { name: '温州传统倒笃白蟹', kw: '倒笃蟹' },
  { name: '宁波传统冰糖甲鱼', kw: '冰糖甲鱼' },
  { name: '潮汕正宗生腌三目膏蟹', kw: '生腌膏蟹' },
  { name: '潮汕生腌基围虾', kw: '潮汕生腌虾' },
  { name: '潮汕正宗膏蟹鲜虾砂锅粥', kw: '膏蟹海鲜砂锅粥' },
  { name: '湛江炭烤蒜蓉金牌大生蚝', kw: '炭烤生蚝' },
  { name: '潮汕金不换爆炒薄壳', kw: '金不换炒薄壳' },
  { name: '顺德生焗深海海鲈鱼腩', kw: '生焗鲈鱼腩' },
  { name: '潮州普宁豆酱煮剥皮鱼', kw: '普宁豆酱剥皮鱼' },
  { name: '广式传统鲍汁扣鲜鲍配西兰花', kw: '鲍汁扣鲜鲍' },
  { name: '港式避风塘炒波士顿龙虾', kw: '避风塘炒波士顿龙虾' },
  { name: '潮汕生焗极品脆皮白鳝', kw: '生焗白鳝' },
  { name: '广式蒜蓉粉丝蒸大红魔虾', kw: '蒜蓉粉丝蒸红魔虾' },
  { name: '潮汕酸梅煮海午笋鱼', kw: '酸梅午笋鱼' },
  { name: '胶东原汁铁锅蒸杂色蛤', kw: '铁锅蒸杂色蛤' },
  { name: '大连温拌葱油海螺片', kw: '温拌海螺' },
  { name: '胶东清蒸野生黑头鱼', kw: '清蒸黑头鱼' },
  { name: '大连原汁海胆蒸水蛋', kw: '海胆蒸蛋' },
  { name: '胶东手打鲅鱼氽丸子清汤', kw: '鲅鱼汆丸子' },
  { name: '烟台酸辣捞汁活鸟贝', kw: '捞汁鸟贝' },
  { name: '胶东辣炒海天鹅蛋', kw: '辣炒天鹅蛋' },
  { name: '大连蒜蓉粉丝蒸夏夷大扇贝', kw: '蒜蓉粉丝蒸夏夷贝' },
  { name: '胶东传统红烧大对虾', kw: '油焖大对虾' },
  { name: '渤海香煎针亮鱼', kw: '香煎针亮鱼' },
  { name: '闽南正宗香脆海蛎煎', kw: '闽南海蛎煎' },
  { name: '厦门沙茶爆炒鲜活鱿鱼管', kw: '沙茶炒鱿鱼' },
  { name: '闽南红蟳香米糕', kw: '红蟳米糕' },
  { name: '东山岛白灼小管配生抽酱油水', kw: '白灼小管' },
  { name: '厦门沙茶海鲜一锅鲜', kw: '沙茶海鲜煲' },
  { name: '台湾三杯小管', kw: '三杯小管' },
  { name: '新加坡黑胡椒炒肉蟹', kw: '黑胡椒炒肉蟹' },
  { name: '西班牙蒜香橄榄油慢浸大虾', kw: '蒜香橄榄油虾' },
  { name: '泰式青柠酸辣清蒸海鲈鱼', kw: '泰式柠檬蒸海鲈鱼' },
  { name: '美式路易斯安那卡真海鲜大烩桶', kw: '卡真海鲜桶' },
  { name: '法式香煎银鳕鱼配白葡萄酒柠檬汁', kw: '香煎银鳕鱼柠檬' }
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
  for (let i = 0; i < seafoodDishes.length; i++) {
    const item = seafoodDishes[i];
    console.log(`[${i+1}/${seafoodDishes.length}] Searching for: ${item.name} (${item.kw})...`);
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

  console.log(`\nDone! Successfully matched ${results.length}/${seafoodDishes.length} dishes.`);
  fs.writeFileSync(path.join(__dirname, 'new_seafood_photos.json'), JSON.stringify(results, null, 2));
}

run();
