const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const adbPath = 'C:\\Users\\Admin1\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe';
const desktopDir = 'C:\\Users\\Admin1\\Desktop';
const rootDir = path.resolve(__dirname, '..');

const masterIconPath = path.join(desktopDir, '咕嘟食谱_终极大厨版_完美猫猫搅汤(推荐).png');

if (!fs.existsSync(masterIconPath)) {
  console.error(`Master icon not found at ${masterIconPath}`);
  process.exit(1);
}

const tempDir = path.join(__dirname, 'temp_resize');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// 目标尺寸配置表
const targetSizes = [
  { size: 512, targets: [
    path.join(rootDir, 'icons', 'icon-512.png'),
    path.join(rootDir, 'android_build', 'assets', 'icons', 'icon-512.png')
  ]},
  { size: 192, targets: [
    path.join(rootDir, 'icons', 'icon-192.png'),
    path.join(rootDir, 'android_build', 'assets', 'icons', 'icon-192.png'),
    path.join(rootDir, 'android_build', 'res', 'mipmap-xxxhdpi', 'ic_launcher.png'),
    path.join(rootDir, 'android_build', 'res', 'mipmap-xxxhdpi', 'ic_launcher_round.png')
  ]},
  { size: 144, targets: [
    path.join(rootDir, 'android_build', 'res', 'mipmap-xxhdpi', 'ic_launcher.png'),
    path.join(rootDir, 'android_build', 'res', 'mipmap-xxhdpi', 'ic_launcher_round.png')
  ]},
  { size: 96, targets: [
    path.join(rootDir, 'android_build', 'res', 'mipmap-xhdpi', 'ic_launcher.png'),
    path.join(rootDir, 'android_build', 'res', 'mipmap-xhdpi', 'ic_launcher_round.png')
  ]},
  { size: 72, targets: [
    path.join(rootDir, 'android_build', 'res', 'mipmap-hdpi', 'ic_launcher.png'),
    path.join(rootDir, 'android_build', 'res', 'mipmap-hdpi', 'ic_launcher_round.png')
  ]},
  { size: 48, targets: [
    path.join(rootDir, 'android_build', 'res', 'mipmap-mdpi', 'ic_launcher.png'),
    path.join(rootDir, 'android_build', 'res', 'mipmap-mdpi', 'ic_launcher_round.png')
  ]}
];

// 使用 base64 嵌入图片，避免本地跨域 file:// 协议加载延迟
const imgBase64 = fs.readFileSync(masterIconPath).toString('base64');
const imgSrc = `data:image/png;base64,${imgBase64}`;

console.log('🎨 正在生成各尺寸极速高清图标资源...');

for (const config of targetSizes) {
  const { size, targets } = config;
  console.log(`⏳ 正在切制 ${size}x${size} 图标...`);

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width: ${size}px;
    height: ${size}px;
    overflow: hidden;
    background: transparent;
  }
  canvas {
    width: ${size}px;
    height: ${size}px;
    display: block;
  }
</style>
</head>
<body>
<canvas id="cv" width="${size}" height="${size}"></canvas>
<script>
  const img = new Image();
  img.onload = () => {
    const canvas = document.getElementById('cv');
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, ${size}, ${size});
  };
  img.src = "${imgSrc}";
</script>
</body>
</html>`;

  const htmlPath = path.join(tempDir, `resize_${size}.html`);
  const pngPath = path.join(tempDir, `resize_${size}.png`);
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu --screenshot="${pngPath}" --window-size=${size},${size} --default-background-color=00000000 "${fileUrl}"`;
  execSync(cmd, { stdio: 'ignore' });

  for (const target of targets) {
    const parentDir = path.dirname(target);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    fs.copyFileSync(pngPath, target);
    console.log(`  -> 写入: ${path.relative(rootDir, target)}`);
  }
}

console.log('✅ 所有规格图标资源切图并同步完成！');
