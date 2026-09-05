async function search() {
  const res = await fetch('https://www.xiachufang.com/search/?keyword=' + encodeURIComponent('西湖醋鱼'));
  const text = await res.text();
  const itemRegex = /<div class="recipe[^"]*"[\s\S]*?<\/li>/g;
  const matches = text.match(itemRegex) || [];
  console.log('Matches count:', matches.length);
  for (const m of matches) {
    const nameMatch = m.match(/<p class="name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
    const imgMatch = m.match(/data-src="([^"]+)"/) || m.match(/src="([^"]+)"/);
    if (nameMatch && imgMatch) {
      let img = imgMatch[1].replace(/\?imageView[^\s"'>]*/, '?imageView2/2/w/660/interlace/1/q/90');
      console.log(nameMatch[1].replace(/<[^>]+>/g, '').trim(), '=>', img);
    }
  }
}
search();
