const fs = require('fs');
const path = require('path');
const { buildFoundationRecipes } = require('./lib/foundation-recipes');

const outputFile = path.join(__dirname, 'data', 'foundation-photos.json');
const reportFile = path.join(__dirname, 'data', 'foundation-photo-report.json');
const current = fs.existsSync(outputFile) ? JSON.parse(fs.readFileSync(outputFile, 'utf8')) : {};
const used = new Set(Object.values(current).map(item => item.photoUrl));
const recipes = buildFoundationRecipes();
const SEARCH_ALIASES = {
  '港式甜酱': ['港式甜面酱', '甜面酱'],
  '东北大酱蘸汁': ['东北大酱', '鸡蛋焖子蘸酱'],
  '天津麻酱汁': ['天津麻酱', '麻酱蘸料'],
  '西式烧汁': ['西餐烧汁', '西式肉汁'],
  '苏式酱菜': ['苏州酱菜', '苏式腌菜', '苏州萝卜干', '苏州乳黄瓜酱菜'],
  '墨西哥腌墨西哥椒': ['墨西哥腌辣椒', '腌墨西哥辣椒'],
  '中式浓鸡高汤': ['浓鸡汤', '鸡高汤'],
  '法式鱼高汤': ['鱼高汤', '法式鱼汤'],
  '粤式精卤水': ['广东卤水', '粤式卤水'],
  '川味辣卤水': ['四川辣卤', '川味辣卤'],
  '素卤水': ['素食卤水', '卤素菜']
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const decode = value => value
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<[^>]+>/g, '').trim();

function meaningfulParts(name) {
  const noise = /家庭版|通用|基础|预腌|标准|中式|西式|广式|粤式|港式|川味|重庆|四川|贵州|云南|广西|桂林|江西|湖南|东北|北京|老北京|天津|山东|山西|陕西|河南|新疆|内蒙古|潮汕|客家|福建|浙江|杭州|上海|江苏|苏式|扬州|朝鲜族|韩式|日式|泰式|越南|新加坡|马来西亚|马来|印尼|菲律宾|印度|中东|墨西哥|意式|法式|美式|希腊|土耳其|古巴|牙买加|巴西/g;
  const suffix = /蘸汁|蘸酱|腌料|腌汁|卤水|卤汁|底料|汤底|高汤|清汤|白汤|酱料|酱|汁|馅料|馅$/g;
  const clean = name.replace(noise, '').replace(suffix, '');
  const parts = [name, clean];
  for (let i = 0; i < clean.length - 1; i++) parts.push(clean.slice(i, i + 2));
  return [...new Set(parts.filter(part => part.length >= 2))];
}

function relevant(title, name) {
  const compact = title.replace(/\s+/g, '');
  return meaningfulParts(name).some(part => compact.includes(part));
}

async function searchXiachufang(query) {
  const url = `https://www.xiachufang.com/search/?keyword=${encodeURIComponent(query)}`;
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36' } });
  if (!response.ok) throw new Error(`搜索 HTTP ${response.status}`);
  const html = await response.text();
  const blocks = html.match(/<li>[\s\S]*?<div class="recipe[\s\S]*?<\/li>/g) || [];
  return blocks.map(block => {
    const title = block.match(/<p class="name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/)?.[1];
    const image = block.match(/data-src="([^"]+)"/)?.[1] || block.match(/<img[^>]+src="([^"]+)"/)?.[1];
    if (!title || !image) return null;
    return { title: decode(title), photoUrl: decode(image).replace(/\?imageView[^\s"'>]*/, '?imageView2/2/w/660/interlace/1/q/88') };
  }).filter(Boolean);
}

async function accessible(url) {
  try {
    const response = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-2047', 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(12000) });
    const type = response.headers.get('content-type') || '';
    return response.ok && type.startsWith('image/');
  } catch { return false; }
}

async function findPhoto(recipe) {
  const aliases = SEARCH_ALIASES[recipe.name] || [];
  const queries = [recipe.name, ...aliases, recipe.name.replace(/家庭版|通用|基础|预腌|标准/g, ''), ...meaningfulParts(recipe.name).slice(1, 3)];
  for (const query of [...new Set(queries)]) {
    let candidates = [];
    for (let attempt = 0; attempt < 3; attempt++) {
      try { candidates = await searchXiachufang(query); break; }
      catch (error) { if (attempt === 2) throw error; await sleep(500 * (attempt + 1)); }
    }
    for (const candidate of candidates) {
      if (!candidate.photoUrl.startsWith('https://') || used.has(candidate.photoUrl)) continue;
      if (![recipe.name, query, ...aliases].some(term => relevant(candidate.title, term))) continue;
      if (await accessible(candidate.photoUrl)) return { ...candidate, query, source: '下厨房搜索' };
    }
  }
  return null;
}

async function main() {
  const pending = recipes.filter(recipe => !current[recipe.id]);
  console.log(`待匹配 ${pending.length}，已有 ${recipes.length - pending.length}`);
  const failures = [];
  for (let index = 0; index < pending.length; index++) {
    const recipe = pending[index];
    try {
      const match = await findPhoto(recipe);
      if (match) {
        used.add(match.photoUrl);
        current[recipe.id] = { id: recipe.id, name: recipe.name, categoryType: recipe.categoryType, ...match };
      } else failures.push({ id: recipe.id, name: recipe.name, reason: '没有找到标题相关且可访问的唯一图片' });
    } catch (error) {
      failures.push({ id: recipe.id, name: recipe.name, reason: error.message });
    }
    if ((index + 1) % 10 === 0 || index + 1 === pending.length) {
      fs.mkdirSync(path.dirname(outputFile), { recursive: true });
      fs.writeFileSync(outputFile, `${JSON.stringify(current, null, 2)}\n`);
      console.log(`${index + 1}/${pending.length}，累计匹配 ${Object.keys(current).length}/${recipes.length}，本轮失败 ${failures.length}`);
    }
    await sleep(120);
  }
  const report = { generatedAt: new Date().toISOString(), total: recipes.length, matched: Object.keys(current).length, failed: failures.length, failures };
  fs.writeFileSync(reportFile, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
  if (failures.length) process.exitCode = 2;
}

main();
