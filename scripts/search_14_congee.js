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

const targets = [
  { id: 'rec_congee_35', name: '泥鳅砂锅粥', search: ['泥鳅粥', '砂锅泥鳅粥'] },
  { id: 'rec_congee_37', name: '虾滑鲜贝砂锅粥', search: ['虾滑鲜贝粥', '虾滑海鲜粥', '虾滑砂锅粥', '鲜贝粥'] },
  { id: 'rec_congee_47', name: '红豆薏米芡实茯苓粥', search: ['红豆薏米芡实粥 砂锅', '红豆薏米粥', '茯苓薏米赤小豆粥'] },
  { id: 'rec_congee_55', name: '莲子绿豆粥', search: ['百合莲子绿豆粥', '莲子绿豆粥', '绿豆莲子粥'] },
  { id: 'rec_congee_56', name: '红薯南瓜麦仁粥', search: ['南瓜红薯粥', '红薯南瓜粥', '麦仁南瓜粥'] },
  { id: 'rec_congee_62', name: '泉州海蛎咸稀饭', search: ['海蛎干贝粥', '海蛎咸粥', '牡蛎粥', '海蛎鲜粥'] },
  { id: 'rec_congee_68', name: '香辣牛肉末皮蛋粥', search: ['牛肉末皮蛋粥', '香辣牛肉粥', '肉末皮蛋粥', '牛肉皮蛋粥'] },
  { id: 'rec_congee_71', name: '松茸火腿香米粥', search: ['松茸火腿粥', '松茸粥', '火腿粥'] },
  { id: 'rec_congee_70', name: '糜子米红枣稠饭米汤', search: ['糜子粥', '糜子稠饭', '黄米红枣粥', '大黄米红枣粥'] },
  { id: 'rec_congee_72', name: '酸汤鱼片生滚粥', search: ['酸汤鱼片粥', '番茄鱼片粥', '酸汤粥'] },
  { id: 'rec_congee_75', name: '银鱼菠菜嫩豆腐泥辅食粥', search: ['银鱼菠菜粥', '银鱼豆腐粥', '银鱼辅食粥'] },
  { id: 'rec_congee_77', name: '鸡胸肉芦笋荷兰豆减脂粥', search: ['鸡胸肉芦笋粥', '鸡肉蔬菜减脂粥', '鸡肉芦笋粥', '鸡丝青菜减脂粥'] },
  { id: 'rec_congee_79', name: '荷叶冬瓜生滚里脊去水肿轻润粥', search: ['冬瓜荷叶瘦肉粥', '冬瓜瘦肉粥', '荷叶瘦肉粥'] },
  { id: 'rec_congee_80', name: '白萝卜丝生姜鲜肉丝暖身粥', search: ['萝卜丝瘦肉粥', '白萝卜瘦肉粥', '萝卜丝肉丝粥'] }
];

async function main() {
  const allResults = {};
  for (const t of targets) {
    console.log(`Searching for ${t.id} (${t.name})...`);
    let found = [];
    for (const kw of t.search) {
      const res = await searchCandidates(kw);
      found = found.concat(res);
      await new Promise(r => setTimeout(r, 350));
    }
    // Deduplicate
    const seen = new Set();
    const unique = [];
    for (const item of found) {
      if (!seen.has(item.url)) {
        seen.add(item.url);
        unique.push(item);
      }
    }
    allResults[t.id] = unique.slice(0, 10);
  }

  fs.writeFileSync(path.join(__dirname, 'candidates_14_congee.json'), JSON.stringify(allResults, null, 2), 'utf8');
  console.log('Done searching candidates for 14 congee recipes!');
}

main();
