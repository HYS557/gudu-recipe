const https = require('https');
const fs = require('fs');
const path = require('path');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(d));
    }).on('error', () => resolve(''));
  });
}

async function searchCandidates(keyword) {
  const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(keyword) + '&cat=1001';
  const html = await fetch(url);
  const regex = /<img[^>]*data-src="([^"]+)"[^>]*alt="([^"]*)"/g;
  const list = [];
  let m;
  while ((m = regex.exec(html))) {
    const cleanUrl = m[1].split('?')[0];
    if (!cleanUrl.includes('placeholder') && !cleanUrl.includes('avatar') && !cleanUrl.endsWith('.gif')) {
      list.push({ alt: m[2], url: cleanUrl });
    }
  }
  return list;
}

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    }).on('error', () => resolve(false));
  });
}

const targetQueries = {
  rec_congee_35: ['泥鳅粥'],
  rec_congee_37: ['海鲜砂锅粥', '生滚海鲜粥'],
  rec_congee_47: ['赤小豆薏米芡实粥', '赤豆薏米芡实粥', '薏米红豆粥'],
  rec_congee_55: ['莲子绿豆百合粥', '莲子绿豆粥'],
  rec_congee_56: ['南瓜红薯小黄米粥', '南瓜红薯粥'],
  rec_congee_62: ['干贝海蛎干瘦肉粥', '海蛎干瘦肉粥'],
  rec_congee_68: ['皮蛋牛肉粥'],
  rec_congee_70: ['糯小米红枣芝麻粥', '黄小米红枣银耳枸杞粥', '小米红枣稠饭'],
  rec_congee_71: ['松茸粥'],
  rec_congee_72: ['番茄鱼片粥', '番茄生滚鱼片粥'],
  rec_congee_75: ['银鱼菠菜粥', '银鱼蔬菜粥', '银鱼碎菜粥'],
  rec_congee_77: ['虾仁芦笋鸡胸肉营养粥', '鸡胸肉蔬菜粥'],
  rec_congee_79: ['冬瓜瘦肉粥', '冬瓜肉末粥'],
  rec_congee_80: ['白萝卜瘦肉粥', '萝卜丝瘦肉粥']
};

async function run() {
  const outDir = 'C:/Users/Admin1/.gemini/antigravity-ide/brain/40299256-41c6-4b7f-b665-d7dd9d38d2ec/inspect_final_14';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const picked = {};
  for (const [id, queries] of Object.entries(targetQueries)) {
    console.log('Searching for ' + id + '...');
    let candidates = [];
    for (const q of queries) {
      const c = await searchCandidates(q);
      candidates = candidates.concat(c);
      await new Promise(r => setTimeout(r, 200));
    }
    const seen = new Set();
    const unique = candidates.filter(c => {
      if (seen.has(c.url)) return false;
      seen.add(c.url);
      return true;
    });

    picked[id] = unique.slice(0, 5);
    for (let i = 0; i < Math.min(3, unique.length); i++) {
      const item = unique[i];
      const filename = id + '_cand_' + i + '.jpg';
      await downloadFile(item.url, path.join(outDir, filename));
    }
  }

  fs.writeFileSync(path.join(outDir, 'candidates.json'), JSON.stringify(picked, null, 2), 'utf8');
  console.log('All downloaded and recorded to candidates.json');
}

run();
