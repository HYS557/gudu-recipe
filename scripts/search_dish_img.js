async function searchXiachufang(keyword) {
  try {
    const url = 'https://www.xiachufang.com/search/?keyword=' + encodeURIComponent(keyword);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });
    console.log(`Keyword: ${keyword}, status: ${res.status}`);
    const text = await res.text();
    // Search for recipe cover images on xiachufang: https://i2.chuimg.com/...
    const matches = text.match(/https:\/\/i[12]\.chuimg\.com\/[a-zA-Z0-9_]+\.(jpg|jpeg|png)(\?imageView[^\s"'>]+)?/g);
    if (matches && matches.length > 0) {
      // deduplicate
      const unique = [...new Set(matches)];
      console.log(`Found ${unique.length} chuimg covers for ${keyword}:`, unique.slice(0, 3));
      return unique[0];
    } else {
      console.log(`No chuimg matches found in HTML for ${keyword}`);
      // let's see snippet of html
      console.log('HTML snippet:', text.slice(0, 500));
    }
  } catch (err) {
    console.error(`Error searching for ${keyword}:`, err.message);
  }
  return null;
}

async function run() {
  await searchXiachufang('蒜蓉生蚝');
  await searchXiachufang('手抓羊肉');
  await searchXiachufang('黄焖羊肉');
}

run();
