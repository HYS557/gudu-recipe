const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const desktopDir = 'C:\\Users\\Admin1\\Desktop';
const artifactDir = 'C:\\Users\\Admin1\\.gemini\\antigravity-ide\\brain\\40299256-41c6-4b7f-b665-d7dd9d38d2ec';

function createHtml(canvasScript) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width: 1024px;
    height: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    overflow: hidden;
  }
  canvas {
    width: 1024px;
    height: 1024px;
  }
</style>
</head>
<body>
<canvas id="cv" width="1024" height="1024"></canvas>
<script>
  const canvas = document.getElementById('cv');
  const ctx = canvas.getContext('2d');
  ${canvasScript}
</script>
</body>
</html>`;
}

const scriptSeamlessStir = `
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawAnimeStar(cx, cy, size, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(cx, cy - size);
    ctx.quadraticCurveTo(cx, cy, cx + size, cy);
    ctx.quadraticCurveTo(cx, cy, cx + size, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy + size);
    ctx.quadraticCurveTo(cx, cy, cx - size, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy - size);
    ctx.fill();
    ctx.restore();
  }

  function drawAnimeHeart(hx, hy, scale, color) {
    ctx.save();
    ctx.translate(hx, hy);
    ctx.scale(scale, scale);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-14, -14, -28, 6, 0, 24);
    ctx.bezierCurveTo(28, 6, 14, -14, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  const lineCol = '#422513';
  const catWhite = '#FFFFFF';
  const earPink = '#FFAAA6';

  // 1. App Icon Rounded Background (Warm apricot & honey)
  ctx.save();
  ctx.shadowColor = 'rgba(215, 85, 20, 0.35)';
  ctx.shadowBlur = 48;
  ctx.shadowOffsetY = 24;
  roundRect(ctx, 32, 32, 960, 960, 220);
  const bgGrad = ctx.createLinearGradient(0, 32, 0, 992);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.35, '#FFEAD9');
  bgGrad.addColorStop(0.75, '#FFC298');
  bgGrad.addColorStop(1, '#FF8A4E');
  ctx.fillStyle = bgGrad;
  ctx.fill();
  ctx.restore();

  // Ambient aura
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  const sunGlow = ctx.createRadialGradient(512, 400, 60, 512, 400, 520);
  sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
  sunGlow.addColorStop(0.5, 'rgba(255, 240, 210, 0.4)');
  sunGlow.addColorStop(1, 'rgba(255, 130, 60, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(32, 32, 960, 960);

  // Sparkles & floating music notes
  drawAnimeStar(190, 190, 28, '#FFFFFF');
  drawAnimeStar(830, 200, 30, '#FFFFFF');
  drawAnimeStar(220, 440, 18, '#FFF4D6');
  drawAnimeStar(820, 440, 20, '#FFF4D6');
  drawAnimeStar(710, 130, 18, '#FFFFFF');
  drawAnimeStar(310, 130, 16, '#FFFFFF');

  ctx.fillStyle = '#FF597B';
  ctx.font = 'bold 44px sans-serif';
  ctx.fillText('♪', 240, 310);
  ctx.fillText('♫', 770, 310);
  drawAnimeHeart(250, 260, 0.8, 'rgba(255, 89, 123, 0.75)');
  drawAnimeHeart(780, 260, 0.9, 'rgba(255, 89, 123, 0.75)');

  // 2. Rising Warm Silk Steam with Heart
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
  ctx.shadowBlur = 20;

  ctx.beginPath();
  ctx.moveTo(330, 230);
  ctx.bezierCurveTo(270, 150, 335, 100, 385, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(694, 230);
  ctx.bezierCurveTo(754, 150, 689, 100, 639, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(512, 160);
  ctx.bezierCurveTo(485, 115, 535, 85, 512, 60);
  ctx.stroke();

  drawAnimeHeart(512, 50, 1.4, '#FF4D6D');
  ctx.restore();

  // 3. Cat Mascot: Head, Ears, Hat & Cute Expression
  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // Left Ear
  ctx.beginPath();
  ctx.moveTo(360, 345);
  ctx.lineTo(315, 200);
  ctx.quadraticCurveTo(365, 210, 420, 270);
  ctx.closePath();
  ctx.fillStyle = catWhite; ctx.fill(); ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(362, 325);
  ctx.lineTo(335, 225);
  ctx.quadraticCurveTo(370, 233, 405, 273);
  ctx.closePath();
  ctx.fillStyle = earPink; ctx.fill();

  // Right Ear
  ctx.beginPath();
  ctx.moveTo(664, 345);
  ctx.lineTo(709, 200);
  ctx.quadraticCurveTo(659, 210, 604, 270);
  ctx.closePath();
  ctx.fillStyle = catWhite; ctx.fill(); ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(662, 325);
  ctx.lineTo(689, 225);
  ctx.quadraticCurveTo(654, 233, 619, 273);
  ctx.closePath();
  ctx.fillStyle = earPink; ctx.fill();

  // Cat Head Body
  ctx.beginPath();
  ctx.ellipse(512, 390, 192, 162, 0, 0, Math.PI * 2);
  ctx.fillStyle = catWhite; ctx.fill(); ctx.stroke();

  // Cheek fluff
  ctx.beginPath();
  ctx.moveTo(325, 410); ctx.lineTo(305, 425); ctx.lineTo(325, 435);
  ctx.moveTo(699, 410); ctx.lineTo(719, 425); ctx.lineTo(699, 435);
  ctx.stroke();

  // Chef Hat
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.2)';
  ctx.shadowBlur = 18; ctx.shadowOffsetY = 10;
  roundRect(ctx, 435, 215, 154, 40, 15);
  ctx.fillStyle = '#FF597B'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();

  drawAnimeStar(512, 235, 15, '#FFD166');
  ctx.beginPath(); ctx.arc(512, 235, 6, 0, Math.PI * 2); ctx.fillStyle = '#FFF'; ctx.fill();

  ctx.beginPath();
  ctx.moveTo(435, 215);
  ctx.bezierCurveTo(390, 190, 400, 125, 455, 120);
  ctx.bezierCurveTo(480, 75, 544, 75, 569, 120);
  ctx.bezierCurveTo(624, 125, 634, 190, 589, 215);
  ctx.closePath();
  ctx.fillStyle = '#FFFFFF'; ctx.fill(); ctx.stroke();
  ctx.restore();

  // Anime Eyes looking down at soup
  function drawCatAnimeEye(ex, ey, isLeft) {
    ctx.save();
    ctx.beginPath(); ctx.ellipse(ex, ey, 27, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2C160B'; ctx.fill();

    const eyeGrad = ctx.createLinearGradient(ex, ey - 30, ex, ey + 30);
    eyeGrad.addColorStop(0, '#502812'); eyeGrad.addColorStop(0.65, '#C46D29'); eyeGrad.addColorStop(1, '#FFAE3D');
    ctx.beginPath(); ctx.ellipse(ex, ey + 4, 24, 28, 0, 0, Math.PI * 2); ctx.fillStyle = eyeGrad; ctx.fill();

    ctx.beginPath(); ctx.ellipse(ex, ey + 7, 14, 17, 0, 0, Math.PI * 2); ctx.fillStyle = '#180B04'; ctx.fill();

    ctx.beginPath(); ctx.arc(ex - 8, ey - 6, 10, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.beginPath(); ctx.arc(ex + 8, ey + 14, 5.5, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();

    ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.beginPath();
    if (isLeft) { ctx.arc(ex, ey, 31, -Math.PI * 0.78, -Math.PI * 0.18); }
    else { ctx.arc(ex, ey, 31, -Math.PI * 0.82, -Math.PI * 0.22); }
    ctx.stroke();
    ctx.restore();
  }
  drawCatAnimeEye(440, 380, true);
  drawCatAnimeEye(584, 380, false);

  // Nose
  ctx.save();
  ctx.fillStyle = '#FF758F';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(503, 403); ctx.quadraticCurveTo(512, 400, 521, 403);
  ctx.closePath(); ctx.fill();

  // W-mouth :3
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(512, 427);
  ctx.moveTo(486, 429); ctx.quadraticCurveTo(499, 445, 512, 427);
  ctx.quadraticCurveTo(525, 445, 538, 429);
  ctx.stroke();

  // Tongue
  ctx.beginPath(); ctx.arc(512, 436, 9, 0, Math.PI); ctx.fillStyle = '#FF758F'; ctx.fill(); ctx.stroke();

  // Blush
  function drawCatBlush(bx, by) {
    ctx.save();
    const blushGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 36);
    blushGrad.addColorStop(0, 'rgba(255, 105, 140, 0.85)'); blushGrad.addColorStop(1, 'rgba(255, 105, 140, 0)');
    ctx.fillStyle = blushGrad;
    ctx.beginPath(); ctx.ellipse(bx, by, 36, 24, 0, 0, Math.PI * 2); ctx.fill();

    ctx.strokeStyle = 'rgba(255, 50, 95, 0.8)';
    ctx.lineWidth = 4.5; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(bx - 14, by - 6); ctx.lineTo(bx - 6, by + 8);
    ctx.moveTo(bx, by - 6); ctx.lineTo(bx + 8, by + 8);
    ctx.moveTo(bx + 14, by - 6); ctx.lineTo(bx + 22, by + 8);
    ctx.stroke();
    ctx.restore();
  }
  drawCatBlush(405, 420);
  drawCatBlush(619, 420);
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 4. 砂锅外壁与锅耳
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.shadowColor = 'rgba(90, 35, 10, 0.35)'; ctx.shadowBlur = 35; ctx.shadowOffsetY = 22;

  // 锅耳
  function drawEarHandle(hx, hy) {
    ctx.save();
    roundRect(ctx, hx, hy, 90, 58, 26);
    ctx.fillStyle = '#D47E45'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 14; ctx.stroke();
    ctx.restore();
  }
  drawEarHandle(155, 630);
  drawEarHandle(779, 630);

  // 锅腹主体
  ctx.beginPath();
  ctx.moveTo(225, 575);
  ctx.bezierCurveTo(200, 795, 325, 900, 512, 900);
  ctx.bezierCurveTo(699, 900, 824, 795, 799, 575);
  ctx.closePath();
  const potGrad = ctx.createLinearGradient(0, 575, 0, 900);
  potGrad.addColorStop(0, '#FFF5EB');
  potGrad.addColorStop(0.5, '#F9DEC9');
  potGrad.addColorStop(1, '#E69E7B');
  ctx.fillStyle = potGrad; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 15; ctx.lineJoin = 'round'; ctx.stroke();

  // 锅腹爱心徽章与微笑纹样
  drawAnimeHeart(512, 730, 1.2, '#FF597B');
  ctx.strokeStyle = 'rgba(255, 245, 235, 0.8)';
  ctx.lineWidth = 8; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(512, 760, 80, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
  ctx.fillStyle = 'rgba(255, 110, 110, 0.35)';
  ctx.beginPath(); ctx.arc(395, 755, 16, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(629, 755, 16, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 5. 锅口内部高汤与食材
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  ctx.clip();

  // 高汤液面
  const soupGrad = ctx.createLinearGradient(0, 525, 0, 633);
  soupGrad.addColorStop(0, '#FFE26A');
  soupGrad.addColorStop(0.5, '#FFAC00');
  soupGrad.addColorStop(1, '#E85800');
  ctx.fillStyle = soupGrad;
  ctx.fillRect(200, 510, 624, 140);

  // 食材：溏心蛋 (左侧)
  ctx.save();
  ctx.translate(365, 575); ctx.rotate(-0.18);
  ctx.beginPath(); ctx.ellipse(0, 0, 48, 36, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFDF2'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  const yolkGrad = ctx.createRadialGradient(-3, -3, 4, 0, 0, 24);
  yolkGrad.addColorStop(0, '#FFF587'); yolkGrad.addColorStop(0.4, '#FFA000'); yolkGrad.addColorStop(1, '#E85800');
  ctx.beginPath(); ctx.arc(0, 0, 24, 0, Math.PI * 2); ctx.fillStyle = yolkGrad; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-7, -7, 7, 4, -0.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; ctx.fill();
  ctx.restore();

  // 食材：鸣门卷 (右侧)
  ctx.save();
  ctx.translate(650, 575); ctx.rotate(0.2);
  ctx.beginPath(); ctx.arc(0, 0, 34, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, 0, 18, 0, Math.PI * 1.6); ctx.stroke();
  ctx.restore();

  // 食材：十字星香菇
  ctx.save();
  ctx.translate(435, 605);
  ctx.beginPath(); ctx.ellipse(0, 0, 34, 25, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#6E4933'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.stroke();
  ctx.strokeStyle = '#FFEAD9'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-14, -8); ctx.lineTo(14, 8); ctx.moveTo(-14, 8); ctx.lineTo(-14, -8);
  ctx.stroke();
  ctx.restore();

  // 葱花
  function drawNegi(nx, ny, rot) {
    ctx.save(); ctx.translate(nx, ny); ctx.rotate(rot);
    ctx.beginPath(); ctx.ellipse(0, 0, 15, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#52B788'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 5; ctx.stroke();
    ctx.restore();
  }
  drawNegi(335, 560, 0.4);
  drawNegi(690, 565, -0.3);
  ctx.restore(); // 结束高汤底绘制

  // ---------------------------------------------------------------------------
  // 6. 【一笔成型完全贯穿】：一整根木质长勺从猫爪直通汤底
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.translate(510, 480);
  ctx.rotate(0.18);

  // 整根勺柄（无断层无缝贯穿）
  roundRect(ctx, -11, -50, 22, 160, 11);
  const fullWoodGrad = ctx.createLinearGradient(0, -50, 0, 110);
  fullWoodGrad.addColorStop(0, '#F7B06D');
  fullWoodGrad.addColorStop(0.5, '#E28637');
  fullWoodGrad.addColorStop(1, '#B55A1A');
  ctx.fillStyle = fullWoodGrad; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();

  // 紧密连接的木质圆勺头
  ctx.beginPath();
  ctx.ellipse(0, 100, 36, 26, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#9C4A11'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 7. 【自然浸入折射】：给浸没在汤内的下半截勺头覆盖半透明金黄汤汁与涟漪
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  ctx.clip();

  const stirWaterCover = ctx.createRadialGradient(530, 575, 5, 530, 575, 55);
  stirWaterCover.addColorStop(0, 'rgba(255, 172, 0, 0.75)');
  stirWaterCover.addColorStop(0.7, 'rgba(240, 130, 0, 0.45)');
  stirWaterCover.addColorStop(1, 'rgba(232, 88, 0, 0)');
  ctx.fillStyle = stirWaterCover;
  ctx.beginPath(); ctx.arc(530, 575, 55, 0, Math.PI * 2); ctx.fill();

  // 水面扁平椭圆水纹微澜
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.ellipse(530, 575, 32, 10, 0.15, 0.1 * Math.PI, 1.2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(530, 575, 58, 16, 0.15, 0.7 * Math.PI, 1.8 * Math.PI);
  ctx.stroke();

  function drawLiquidBubble(bx, by, r) {
    ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE066'; ctx.fill();
    ctx.beginPath(); ctx.arc(bx - r * 0.3, by - r * 0.3, r * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF'; ctx.fill();
  }
  drawLiquidBubble(515, 565, 5);
  drawLiquidBubble(555, 570, 5);
  drawLiquidBubble(535, 590, 4);
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 8. 锅沿厚唇（Lip of the Pot）：只压在锅口下半段前壁
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI * 2);
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI);
  ctx.lineWidth = 18;
  ctx.strokeStyle = '#FFF8F0';
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI);
  ctx.lineWidth = 14;
  ctx.strokeStyle = lineCol;
  ctx.stroke();
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 9. 猫猫两只雪白小爪爪握在勺柄上方
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.25)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;

  // 左爪
  ctx.beginPath(); ctx.ellipse(476, 472, 32, 25, -0.22, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  ctx.fillStyle = '#FFAAA6'; ctx.beginPath(); ctx.ellipse(474, 478, 12, 8, -0.22, 0, Math.PI * 2); ctx.fill();

  // 右爪
  ctx.beginPath(); ctx.ellipse(538, 482, 32, 25, 0.22, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  ctx.fillStyle = '#FFAAA6'; ctx.beginPath(); ctx.ellipse(540, 488, 12, 8, 0.22, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // 10. Top Glass Reflection on App Icon
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  ctx.beginPath(); ctx.ellipse(512, 110, 600, 200, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; ctx.fill();
  ctx.restore();
`;

const tempDir = path.join(__dirname, 'temp_render');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const htmlContent = createHtml(scriptSeamlessStir);
const tempHtmlPath = path.join(tempDir, 'seamless_stir.html');
const tempPngPath = path.join(tempDir, 'seamless_stir.png');
const desktopPath = path.join(desktopDir, '咕嘟食谱_方案S_真·汤内严密搅动(完美版).png');
const artifactPath = path.join(artifactDir, 'cat_chef_clipped_stir.png');

fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

const fileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
const cmd = `"${edgePath}" --headless --disable-gpu --screenshot="${tempPngPath}" --window-size=1024,1024 --default-background-color=00000000 "${fileUrl}"`;

console.log('Rendering seamless in-pot stirring icon...');
execSync(cmd, { stdio: 'inherit' });

fs.copyFileSync(tempPngPath, desktopPath);
console.log(`[Success] Saved to Desktop: ${desktopPath}`);

fs.copyFileSync(tempPngPath, artifactPath);
console.log(`[Success] Saved to Artifact: ${artifactPath}`);

console.log('Seamless in-pot stirring icon generated successfully!');
