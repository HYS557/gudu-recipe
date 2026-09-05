const fs = require('fs');
const path = require('path');

const updates = {
  'rec_gudu_0122': 'https://i2.chuimg.com/309cf5b990234abca2ae6a2c5556556d_3000w_2000h.jpg?imageView2/2/w/660/interlace/1/q/90',
  'rec_gudu_0398': 'https://i2.chuimg.com/c5ad541c600f4706ac3dfa4fe9842b56_1024w_689h.png?imageView2/2/w/660/interlace/1/q/90'
};

function updateFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const fn = new Function('window', code + '\nreturn window.RECIPES_DATA;');
  const recipes = fn({});
  
  recipes.forEach(r => {
    if (updates[r.id]) {
      r.photoUrl = updates[r.id];
      console.log(`Updated ${r.name} (${r.id}) to ${updates[r.id]}`);
    }
  });
  
  const newContent = `/**\n * 咕嘟食谱 - 407道全域中华与环球精选食谱数据库\n */\nwindow.RECIPES_DATA = ${JSON.stringify(recipes, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Saved ${filePath}`);
}

updateFile(path.join(__dirname, '../js/data/recipes.js'));
const androidFile = path.join(__dirname, '../android_build/assets/js/data/recipes.js');
if (fs.existsSync(androidFile)) {
  updateFile(androidFile);
}
