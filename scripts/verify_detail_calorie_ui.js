const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const artifactDir = 'C:\\Users\\Admin1\\.gemini\\antigravity-ide\\brain\\40299256-41c6-4b7f-b665-d7dd9d38d2ec';
const screenshotPath = path.join(artifactDir, 'recipe_detail_calorie_preview.png');
const rootDir = path.resolve(__dirname, '..');

const testHtmlPath = path.join(rootDir, 'temp_calorie_test.html');
const originalHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

// In HTML, we open the detail immediately when DOM loads
const injectedHtml = originalHtml.replace('</body>', `
<script>
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      App.openRecipeDetail('rec_gudu_0001', 2);
    }, 50);
  });
</script>
</body>
`);

fs.writeFileSync(testHtmlPath, injectedHtml, 'utf8');

const fileUrl = 'file:///' + testHtmlPath.replace(/\\/g, '/');

// Edge headless flag: --virtual-time-budget=2000 makes it run for 2 seconds before screenshot!
const cmd = `"${edgePath}" --headless --disable-gpu --virtual-time-budget=2500 --screenshot="${screenshotPath}" --window-size=430,932 "${fileUrl}"`;

console.log('Capturing Recipe Detail Calorie Preview with virtual-time-budget...');
execSync(cmd, { stdio: 'inherit' });

if (fs.existsSync(testHtmlPath)) fs.unlinkSync(testHtmlPath);
console.log(`[Success] Saved screenshot to: ${screenshotPath}`);
