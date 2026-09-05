const fs = require('fs');
const code = fs.readFileSync('js/data/recipes.js', 'utf8');
const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
const recipes = fn({});

const urlMap = new Map();
recipes.forEach(r => {
  if (!r.photoUrl) return;
  if (!urlMap.has(r.photoUrl)) urlMap.set(r.photoUrl, []);
  urlMap.get(r.photoUrl).push(r.name);
});

const duplicates = [];
urlMap.forEach((names, url) => {
  if (names.length > 1) {
    duplicates.push({ count: names.length, names, url });
  }
});

duplicates.sort((a, b) => b.count - a.count);
console.log('Total recipes:', recipes.length);
console.log('Total unique URLs:', urlMap.size);
console.log('Total duplicated URL groups:', duplicates.length);
duplicates.forEach(d => {
  console.log(`[${d.count} dishes share URL: ${d.url}] ->`, d.names.join(' | '));
});
