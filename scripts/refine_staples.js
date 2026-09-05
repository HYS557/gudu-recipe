const fs = require('fs');
const path = require('path');

const usedPhotos = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_staple_photos.json'), 'utf8'));

async function searchXiachufang(kw) {
  const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(kw);
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
  });
  const text = await res.text();
  const items = [];
  const matches = text.match(/<div class="recipe[^"]*"[\s\S]*?<\/li>/g) || [];
  for (const m of matches) {
    const nameMatch = m.match(/<p class="name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
    const imgMatch = m.match(/data-src="([^"]+)"/) || m.match(/src="([^"]+)"/);
    if (nameMatch && imgMatch) {
      const title = nameMatch[1].replace(/<[^>]+>/g, '').trim();
      let img = imgMatch[1].replace(/\?imageView[^\s"'>]*/, '?imageView2/2/w/660/interlace/1/q/90');
      items.push({ title, img });
    }
  }
  return items;
}

async function fix() {
  const fixes = [
    { dishName: '天津传统狗不理水馅包子', kw: '天津包子' },
    { dishName: '东北传统酸菜猪肉手工水饺', kw: '酸菜水饺' },
    { dishName: '陕西油泼大宽BiangBiang面', kw: '裤带面' }
  ];

  for (const f of fixes) {
    console.log('Searching refined for:', f.dishName, f.kw);
    const results = await searchXiachufang(f.kw);
    const found = results.find(r => r.img.startsWith('https://i2.chuimg.com') || r.img.startsWith('https://i1.chuimg.com'));
    if (found) {
      console.log('  Matched:', found.title, found.img);
      const target = usedPhotos.find(p => p.dishName === f.dishName);
      if (target) {
        target.searchedTitle = found.title;
        target.photoUrl = found.img;
      }
    } else {
      console.log('  Not found for', f.kw);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'new_staple_photos.json'), JSON.stringify(usedPhotos, null, 2));
  console.log('Updated new_staple_photos.json successfully!');
}

fix();
