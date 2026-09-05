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

async function main() {
  const refinedQueries = {
    'rec_congee_35': ['泥鳅粥', '砂锅泥鳅粥'],
    'rec_congee_37': ['虾滑海鲜粥', '虾仁海鲜砂锅粥', '鲜贝粥', '虾滑粥'],
    'rec_congee_47': ['红豆薏米芡实粥', '薏米红豆粥', '赤小豆薏米粥'],
    'rec_congee_55': ['百合莲子绿豆粥', '绿豆莲子粥'],
    'rec_congee_56': ['红薯南瓜粥', '南瓜红薯小米粥'],
    'rec_congee_62': ['海蛎干瘦肉粥', '干贝海蛎粥', '海蛎干贝粥'],
    'rec_congee_68': ['香辣牛肉粥', '肉末皮蛋粥', '牛肉末青菜粥', '牛肉末粥'],
    'rec_congee_71': ['松茸鸡汤粥', '松茸鲜鸡肉粥', '香菇火腿菜粥', '松茸肉丝粥'],
    'rec_congee_70': ['黄小米红枣粥', '陕北糜子粥', '大黄米红枣稠饭', '小米红枣稠饭'],
    'rec_congee_72': ['番茄鱼片粥', '酸汤鱼片粥', '番茄生滚鱼片粥'],
    'rec_congee_75': ['银鱼菠菜碎菜粥', '银鱼碎菜辅食粥', '银鱼蔬菜粥', '银鱼青菜粥'],
    'rec_congee_77': ['虾仁芦笋鸡胸肉营养粥', '鸡胸肉蔬菜减脂粥', '鸡丝芦笋粥', '鸡胸肉燕麦减脂粥'],
    'rec_congee_79': ['冬瓜肉末生滚粥', '冬瓜排骨粥', '冬瓜瘦肉粥 砂锅', '荷叶冬瓜薏米粥'],
    'rec_congee_80': ['白萝卜瘦肉粥', '萝卜丝瘦肉粥', '白萝卜丝生姜瘦肉粥']
  };

  const results = {};
  for (const [id, kwList] of Object.entries(refinedQueries)) {
    let pool = [];
    for (const kw of kwList) {
      const c = await searchCandidates(kw);
      pool = pool.concat(c);
      await new Promise(r => setTimeout(r, 250));
    }
    const seen = new Set();
    results[id] = pool.filter(x => {
      if (seen.has(x.url)) return false;
      seen.add(x.url);
      return true;
    }).slice(0, 8);
  }

  fs.writeFileSync(path.join(__dirname, 'refined_14_candidates.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log('Saved refined candidates.');
}

main();
