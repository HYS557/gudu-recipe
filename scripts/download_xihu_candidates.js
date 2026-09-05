const fs = require('fs');
const path = require('path');

const candidates = [
  { name: 'cand1_c5ad541c', url: 'https://i2.chuimg.com/c5ad541c600f4706ac3dfa4fe9842b56_1024w_689h.png?imageView2/2/w/660/interlace/1/q/90' },
  { name: 'cand2_309cf5b9', url: 'https://i2.chuimg.com/309cf5b990234abca2ae6a2c5556556d_3000w_2000h.jpg?imageView2/2/w/660/interlace/1/q/90' },
  { name: 'cand3_2c56de3e', url: 'https://i2.chuimg.com/2c56de3e7d5f4ff38a0464117bab74f9_1280w_1024h.jpg?imageView2/2/w/660/interlace/1/q/90' },
  { name: 'cand4_7d2d4924', url: 'https://i2.chuimg.com/7d2d49245673496c9a465432976cc0e9_1280w_960h.jpg?imageView2/2/w/660/interlace/1/q/90' },
  { name: 'cand5_5dd55508', url: 'https://i2.chuimg.com/5dd55508884011e6b87c0242ac110003_800w_531h.jpg?imageView2/2/w/660/interlace/1/q/90' }
];

async function download() {
  for (const c of candidates) {
    const res = await fetch(c.url);
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = c.url.includes('.png') ? '.png' : '.jpg';
    const filePath = path.join('C:/Users/Admin1/.gemini/antigravity-ide/brain/40299256-41c6-4b7f-b665-d7dd9d38d2ec', c.name + ext);
    fs.writeFileSync(filePath, buf);
    console.log(`Saved ${c.name} (${buf.length} bytes) to ${filePath}`);
  }
}

download();
