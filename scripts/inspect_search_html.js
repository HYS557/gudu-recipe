async function inspectSearchHtml(keyword) {
  const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(keyword);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const text = await res.text();
  // match recipes info
  // Find pattern around recipe link and image
  const regex = /<p class="name">[\s\S]*?<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?src="([^"]+)"/g;
  let match;
  const results = [];
  // Also alternate pattern where img comes before p.name
  const regex2 = /<div class="recipe[^"]*"[\s\S]*?<\/li>/g;
  const items = text.match(regex2) || [];
  console.log(`Keyword: ${keyword}, items found: ${items.length}`);
  for (let i = 0; i < Math.min(5, items.length); i++) {
    const item = items[i];
    const nameMatch = item.match(/<p class="name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
    const imgMatch = item.match(/data-src="([^"]+)"/) || item.match(/src="([^"]+)"/);
    const title = nameMatch ? nameMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    const img = imgMatch ? imgMatch[1] : '';
    console.log(`- Title: "${title}" => Img: ${img}`);
  }
}

async function run() {
  await inspectSearchHtml('蒜蓉生蚝');
  await inspectSearchHtml('清蒸斗鲳');
  await inspectSearchHtml('金不换白鲳鱼');
}

run();
