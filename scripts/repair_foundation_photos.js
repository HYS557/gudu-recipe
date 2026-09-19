const fs = require('fs');
const path = require('path');

const mapFile = path.join(__dirname, 'data', 'foundation-photos.json');
const photos = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
const entries = Object.values(photos);
const used = new Set(entries.map(item => item.photoUrl));
const noise = /家庭版|通用|基础|预腌|标准|中式|西式|广式|粤式|港式|川味|重庆|四川|贵州|云南|广西|桂林|江西|湖南|东北|北京|老北京|天津|山东|山西|陕西|河南|河北|宁夏|甘肃|新疆|内蒙古|潮汕|客家|福建|浙江|杭州|上海|江苏|苏式|扬州|朝鲜族|韩式|日式|泰式|越南|新加坡|马来西亚|马来|印尼|菲律宾|印度|中东|东南亚|墨西哥|意式|法式|美式|希腊|土耳其|古巴|牙买加|巴西/g;
const suffix = /蘸汁|蘸酱|腌料|腌汁|卤水|卤汁|底料|汤底|高汤|清汤|白汤|酱料|馅料/g;

function core(name) { return name.replace(noise, '').replace(suffix, ''); }
function score(title, name) {
  const chars = [...new Set(core(name).replace(/[酱汁馅汤]/g, ''))];
  if (!chars.length) return title.includes(name) ? 1 : 0;
  return chars.filter(char => title.includes(char)).length / chars.length;
}
function decode(value) {
  return value.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
async function bing(query) {
  const url = `https://cn.bing.com/images/async?q=${encodeURIComponent(`"${query}" 自制 美食`)}&first=1&count=20&scenario=ImageBasicHover`;
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36' }, signal: AbortSignal.timeout(15000) });
  const html = await response.text();
  return [...html.matchAll(/m="({&quot;[^"]+)"/g)].map(match => {
    try {
      const data = JSON.parse(decode(match[1]));
      return { title: data.t || data.desc || '', photoUrl: data.murl, sourcePage: data.purl };
    } catch { return null; }
  }).filter(Boolean);
}
async function accessible(url) {
  try {
    const response = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-2047', 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(10000) });
    return response.ok && (response.headers.get('content-type') || '').startsWith('image/');
  } catch { return false; }
}

async function main() {
  const targets = entries.filter(item => score(item.title, item.name) < 0.67);
  let improved = 0;
  for (let index = 0; index < targets.length; index++) {
    const item = targets[index];
    const oldScore = score(item.title, item.name);
    try {
      const candidates = await bing(item.name);
      candidates.sort((a, b) => score(b.title, item.name) - score(a.title, item.name));
      for (const candidate of candidates) {
        const newScore = score(candidate.title, item.name);
        if (!candidate.photoUrl?.startsWith('http') || used.has(candidate.photoUrl) || newScore < Math.max(0.67, oldScore + 0.15)) continue;
        if (!(await accessible(candidate.photoUrl))) continue;
        used.delete(item.photoUrl);
        used.add(candidate.photoUrl);
        photos[item.id] = { ...item, ...candidate, query: item.name, source: '必应图片完整名称复核', matchScore: Number(newScore.toFixed(2)) };
        improved++;
        break;
      }
    } catch (error) {
      console.warn(`${item.name}: ${error.message}`);
    }
    if ((index + 1) % 10 === 0 || index + 1 === targets.length) {
      fs.writeFileSync(mapFile, `${JSON.stringify(photos, null, 2)}\n`);
      console.log(`${index + 1}/${targets.length}，已改善 ${improved}`);
    }
  }
  console.log(`二次复核完成：目标 ${targets.length}，改善 ${improved}`);
}

main();
