const fs = require('fs');
const path = require('path');

const dessertDishes = [
  { name: '冰糖雪梨百合银耳羹', kw: '银耳雪梨羹' },
  { name: '广式海带陈皮清凉绿豆沙', kw: '陈皮绿豆沙' },
  { name: '现磨香滑黑芝麻糊汤圆', kw: '黑芝麻糊汤圆' },
  { name: '生姜红糖番薯暖身糖水', kw: '番薯糖水' },
  { name: '潮汕清心丸绿豆爽', kw: '潮汕绿豆爽' },
  { name: '冰糖川贝炖雪梨盅', kw: '川贝炖雪梨' },
  { name: '古法熬制冰镇酸梅汤', kw: '冰镇酸梅汤' },
  { name: '香浓破壁机鲜榨玉米汁', kw: '奶香玉米汁' },
  { name: '传统手工甜酒酿发酵米酒', kw: '自制甜酒酿' },
  { name: '椰香紫米芋圆捞', kw: '紫米芋圆' },
  { name: '广式传统白果腐竹薏米糖水', kw: '白果腐竹薏米糖水' },
  { name: '港式香浓生磨核桃露', kw: '生磨核桃露' },
  { name: '鸭屎香暴打手槌香水柠檬茶', kw: '手打柠檬茶' },
  { name: '生椰拿铁家庭简易版', kw: '生椰拿铁' },
  { name: '满杯红柚百香果四季春果茶', kw: '满杯红柚' },
  { name: '现熬黑糖波霸厚鲜奶', kw: '黑糖珍珠鲜奶' },
  { name: '生打酪酪抹茶拿铁', kw: '抹茶拿铁' },
  { name: '荔枝玫瑰乌龙冰茶', kw: '荔枝乌龙茶' },
  { name: '金陵名小吃桂花糖芋苗', kw: '桂花糖芋苗' },
  { name: '南京传统赤豆酒酿小元宵', kw: '赤豆酒酿元宵' },
  { name: '老北京传统杏仁豆腐', kw: '杏仁豆腐' },
  { name: '北京传统拔丝苹果', kw: '拔丝苹果' },
  { name: '传统广式茶楼红糖马拉糕', kw: '红糖马拉糕' },
  { name: '自制江南桂花定胜糕', kw: '定胜糕' },
  { name: '空气炸锅巴斯克焦香芝士蛋糕', kw: '巴斯克芝士蛋糕' },
  { name: '平底锅云朵舒芙蕾松饼', kw: '舒芙蕾松饼' },
  { name: '港式冰凉芒果班戟', kw: '芒果班戟' },
  { name: '软糯拉丝芒果雪媚娘', kw: '芒果雪媚娘' },
  { name: '经典葡式焦糖蛋挞', kw: '葡式蛋挞' },
  { name: '法式焦糖苹果派', kw: '焦糖苹果派' }
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
  for (let i = 0; i < dessertDishes.length; i++) {
    const item = dessertDishes[i];
    console.log(`[${i+1}/${dessertDishes.length}] Searching for: ${item.name} (${item.kw})...`);
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

  console.log(`\nDone! Successfully matched ${results.length}/${dessertDishes.length} dishes.`);
  fs.writeFileSync(path.join(__dirname, 'new_dessert_photos.json'), JSON.stringify(results, null, 2));
}

run();
