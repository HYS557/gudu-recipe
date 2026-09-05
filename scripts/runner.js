
const { execSync } = require('child_process');
setTimeout(() => {
  const cmd = `"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --screenshot="C:\Users\Admin1\.gemini\antigravity-ide\brain\40299256-41c6-4b7f-b665-d7dd9d38d2ec\recipe_detail_calorie_preview.png" --window-size=430,932 "file:///C:/Users/Admin1/Desktop/新建文件夹 (3)/temp_calorie_test.html"`;
  execSync(cmd);
  console.log('Screenshot done');
}, 1200);
