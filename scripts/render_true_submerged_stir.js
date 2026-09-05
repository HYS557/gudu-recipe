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

// -----------------------------------------------------------------------------
// 深度重构：真正的“勺在汤中搅，汤面起漩涡，小猫双手握柄用力搅动”
// -----------------------------------------------------------------------------
const scriptDeepStir = `
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

  // Sparkles & floating hearts/notes
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

  // 3. Cat Mascot: Pure Snow-White Anime Kitty Head & Ears (in background)
  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // Ears
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

  // Cat Focused Happy Cooking Eyes (looking down at the delicious soup they are stirring!)
  function drawCatAnimeEye(ex, ey, isLeft) {
    ctx.save();
    ctx.beginPath(); ctx.ellipse(ex, ey, 27, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2C160B'; ctx.fill();

    const eyeGrad = ctx.createLinearGradient(ex, ey - 30, ex, ey + 30);
    eyeGrad.addColorStop(0, '#502812'); eyeGrad.addColorStop(0.65, '#C46D29'); eyeGrad.addColorStop(1, '#FFAE3D');
    ctx.beginPath(); ctx.ellipse(ex, ey + 4, 24, 28, 0, 0, Math.PI * 2); ctx.fillStyle = eyeGrad; ctx.fill();

    // Pupil looking slightly downward towards the soup
    ctx.beginPath(); ctx.ellipse(ex, ey + 7, 14, 17, 0, 0, Math.PI * 2); ctx.fillStyle = '#180B04'; ctx.fill();

    // Highlights
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

  // 4. Symmetrical Earthen Stew Pot (Foreground)
  ctx.save();
  ctx.shadowColor = 'rgba(90, 35, 10, 0.35)'; ctx.shadowBlur = 35; ctx.shadowOffsetY = 22;

  function drawEarHandle(hx, hy) {
    ctx.save();
    roundRect(ctx, hx, hy, 90, 58, 26);
    ctx.fillStyle = '#D47E45'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 14; ctx.stroke();
    ctx.restore();
  }
  drawEarHandle(155, 630);
  drawEarHandle(779, 630);

  // Pot Belly Body
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

  // Pot Rim Lip
  ctx.beginPath(); ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFF8F0'; ctx.fill(); ctx.stroke();

  // 5. Rich Golden Delicious Broth (The liquid layer)
  ctx.beginPath(); ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  const soupGrad = ctx.createLinearGradient(0, 525, 0, 633);
  soupGrad.addColorStop(0, '#FFE26A'); soupGrad.addColorStop(0.5, '#FFAC00'); soupGrad.addColorStop(1, '#E85800');
  ctx.fillStyle = soupGrad; ctx.fill();
  ctx.restore();

  // 6. Food Ingredients in Broth
  // Egg (Ajitsuke Tamago) on left
  ctx.save();
  ctx.translate(370, 575); ctx.rotate(-0.2);
  ctx.beginPath(); ctx.ellipse(0, 0, 48, 36, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFDF2'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  const yolkGrad = ctx.createRadialGradient(-3, -3, 4, 0, 0, 24);
  yolkGrad.addColorStop(0, '#FFF587'); yolkGrad.addColorStop(0.4, '#FFA000'); yolkGrad.addColorStop(1, '#E85800');
  ctx.beginPath(); ctx.arc(0, 0, 24, 0, Math.PI * 2); ctx.fillStyle = yolkGrad; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-7, -7, 7, 4, -0.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; ctx.fill();
  ctx.restore();

  // Narutomaki on right
  ctx.save();
  ctx.translate(650, 575); ctx.rotate(0.2);
  ctx.beginPath(); ctx.arc(0, 0, 34, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, 0, 18, 0, Math.PI * 1.6); ctx.stroke();
  ctx.restore();

  // Shiitake Mushroom near bottom center
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

  // Negi Slices
  function drawNegi(nx, ny, rot) {
    ctx.save(); ctx.translate(nx, ny); ctx.rotate(rot);
    ctx.beginPath(); ctx.ellipse(0, 0, 15, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#52B788'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 5; ctx.stroke();
    ctx.restore();
  }
  drawNegi(335, 560, 0.4);
  drawNegi(690, 565, -0.3);

  // ---------------------------------------------------------------------------
  // 7. 【核心改动】：勺子深深插进汤里（勺头在汤下搅拌，只露出的部分被汤水浸没）
  // ---------------------------------------------------------------------------
  // (A) 绘制插在汤深处的木勺柄与浸入部分
  ctx.save();
  // 倾斜角度：勺柄从猫猫爪子(512, 470) 一路向下深入锅底(535, 595)
  ctx.beginPath();
  // 勺柄阴影
  ctx.shadowColor = 'rgba(66, 37, 19, 0.3)';
  ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;

  // 绘制长木勺柄
  ctx.save();
  ctx.translate(510, 470);
  ctx.rotate(0.22); // 优雅的右斜入汤角度

  // 木勺手柄（向上延伸供猫猫握住）
  roundRect(ctx, -12, -40, 24, 150, 12);
  const woodGrad = ctx.createLinearGradient(0, -40, 0, 110);
  woodGrad.addColorStop(0, '#F7B06D');
  woodGrad.addColorStop(1, '#CF7530');
  ctx.fillStyle = woodGrad; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();

  // 潜入汤中的椭圆勺头（大部分在深处被汤浸润）
  ctx.beginPath();
  ctx.ellipse(0, 105, 42, 30, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#BC6420'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.restore();
  ctx.restore();

  // (B) 盖在勺子入水点上方的【真实金黄浓汤液面与动态漩涡】！
  // 这样勺子就真正“插进汤水里”，被浓汤自然盖住！
  ctx.save();
  // 浸水处的金色高汤半透明遮罩
  const stirWaterGrad = ctx.createRadialGradient(535, 575, 5, 535, 575, 75);
  stirWaterGrad.addColorStop(0, 'rgba(255, 172, 0, 0.95)');
  stirWaterGrad.addColorStop(0.5, 'rgba(240, 140, 0, 0.85)');
  stirWaterGrad.addColorStop(1, 'rgba(232, 88, 0, 0)');
  ctx.fillStyle = stirWaterGrad;
  ctx.beginPath();
  ctx.arc(535, 575, 75, 0, Math.PI * 2);
  ctx.fill();

  // 强劲动态旋转水涡（Swirling Eddies & Ripples Around Spoon）
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';

  // 漩涡螺旋 1
  ctx.beginPath();
  ctx.arc(535, 578, 28, 0.1 * Math.PI, 1.2 * Math.PI);
  ctx.stroke();

  // 漩涡螺旋 2
  ctx.beginPath();
  ctx.arc(535, 578, 48, 0.7 * Math.PI, 1.8 * Math.PI);
  ctx.stroke();

  // 漩涡外圈微波 3
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(535, 578, 72, 1.2 * Math.PI, 2.3 * Math.PI);
  ctx.stroke();

  // 搅动带起的金灿灿高汤水珠与微泡 (Bubbles & Splashes)
  function drawStirBubble(bx, by, r) {
    ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE066'; ctx.fill();
    ctx.beginPath(); ctx.arc(bx - r * 0.3, by - r * 0.3, r * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF'; ctx.fill();
  }
  drawStirBubble(510, 560, 6);
  drawStirBubble(570, 570, 7);
  drawStirBubble(525, 600, 5);
  drawStirBubble(555, 595, 6);
  drawStirBubble(485, 580, 5);
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 8. 猫咪两只小雪爪：紧紧握住立于汤面上方的勺柄，正在用心搅拌！
  // ---------------------------------------------------------------------------
  // 左爪（握住勺柄左侧）
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.25)';
  ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;
  ctx.beginPath();
  ctx.ellipse(478, 465, 34, 26, -0.25, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  // 粉红肉垫
  ctx.fillStyle = '#FFAAA6';
  ctx.beginPath(); ctx.ellipse(476, 471, 13, 9, -0.25, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // 右爪（握住勺柄右侧）
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.25)';
  ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;
  ctx.beginPath();
  ctx.ellipse(540, 478, 34, 26, 0.25, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  // 粉红肉垫
  ctx.fillStyle = '#FFAAA6';
  ctx.beginPath(); ctx.ellipse(542, 484, 13, 9, 0.25, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // 9. Pot Belly Decor: Ceramic Heart & Smile
  ctx.save();
  drawAnimeHeart(512, 730, 1.2, '#FF597B');
  ctx.strokeStyle = 'rgba(255, 245, 235, 0.8)';
  ctx.lineWidth = 8; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(512, 760, 80, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();

  ctx.fillStyle = 'rgba(255, 110, 110, 0.35)';
  ctx.beginPath(); ctx.arc(395, 755, 16, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(629, 755, 16, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // Top gloss
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  ctx.beginPath(); ctx.ellipse(512, 110, 600, 200, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; ctx.fill();
  ctx.restore();
`;

// -----------------------------------------------------------------------------
// 方案 2：一手扶锅沿 + 一手执木勺深入锅底大圈搅拌（更具大厨气魄与动态）
// -----------------------------------------------------------------------------
const scriptStirOneHand = `
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

  // 1. App Icon Rounded Background
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

  // Sparkles & notes
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

  // 3. Cat Mascot: Head & Ears
  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // Ears
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

  // Eyes looking down at spoon in soup
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

  // W-mouth
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

  // 4. Pot Base
  ctx.save();
  ctx.shadowColor = 'rgba(90, 35, 10, 0.35)'; ctx.shadowBlur = 35; ctx.shadowOffsetY = 22;

  function drawEarHandle(hx, hy) {
    ctx.save();
    roundRect(ctx, hx, hy, 90, 58, 26);
    ctx.fillStyle = '#D47E45'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 14; ctx.stroke();
    ctx.restore();
  }
  drawEarHandle(155, 630);
  drawEarHandle(779, 630);

  // Pot Belly Body
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

  // Pot Rim Lip
  ctx.beginPath(); ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFF8F0'; ctx.fill(); ctx.stroke();

  // Golden Delicious Broth
  ctx.beginPath(); ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  const soupGrad = ctx.createLinearGradient(0, 525, 0, 633);
  soupGrad.addColorStop(0, '#FFE26A'); soupGrad.addColorStop(0.5, '#FFAC00'); soupGrad.addColorStop(1, '#E85800');
  ctx.fillStyle = soupGrad; ctx.fill();
  ctx.restore();

  // Left Paw Resting on Pot Rim (安定感)
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.22)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;
  ctx.beginPath(); ctx.ellipse(320, 550, 38, 28, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  ctx.fillStyle = '#FFAAA6'; ctx.beginPath(); ctx.ellipse(320, 558, 14, 10, 0, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // Ingredients: Egg & Narutomaki
  ctx.save();
  ctx.translate(390, 580); ctx.rotate(-0.15);
  ctx.beginPath(); ctx.ellipse(0, 0, 46, 34, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFDF2'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  const yolkGrad = ctx.createRadialGradient(-3, -3, 4, 0, 0, 23);
  yolkGrad.addColorStop(0, '#FFF587'); yolkGrad.addColorStop(0.4, '#FFA000'); yolkGrad.addColorStop(1, '#E85800');
  ctx.beginPath(); ctx.arc(0, 0, 23, 0, Math.PI * 2); ctx.fillStyle = yolkGrad; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-7, -7, 7, 4, -0.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; ctx.fill();
  ctx.restore();

  // Narutomaki
  ctx.save();
  ctx.translate(670, 575);
  ctx.beginPath(); ctx.arc(0, 0, 34, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, 0, 18, 0, Math.PI * 1.6); ctx.stroke();
  ctx.restore();

  // Shiitake Mushroom
  ctx.save();
  ctx.translate(470, 605);
  ctx.beginPath(); ctx.ellipse(0, 0, 34, 25, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#6E4933'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.stroke();
  ctx.strokeStyle = '#FFEAD9'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-14, -8); ctx.lineTo(14, 8); ctx.moveTo(-14, 8); ctx.lineTo(-14, -8);
  ctx.stroke();
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 5. 木勺从右上右手倾斜深入汤底中心旋转
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.translate(560, 520);
  ctx.rotate(-0.35); // 从右上斜插向左下深处

  // 勺柄
  roundRect(ctx, -12, -70, 24, 150, 12);
  ctx.fillStyle = '#E68A3D'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();

  // 潜入汤底的勺头
  ctx.beginPath();
  ctx.ellipse(0, 100, 42, 30, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#BF6822'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.restore();

  // 汤液遮罩盖住下半部分勺子
  ctx.save();
  const stirWaterGrad2 = ctx.createRadialGradient(530, 580, 5, 530, 580, 85);
  stirWaterGrad2.addColorStop(0, 'rgba(255, 172, 0, 0.95)');
  stirWaterGrad2.addColorStop(0.5, 'rgba(240, 140, 0, 0.85)');
  stirWaterGrad2.addColorStop(1, 'rgba(232, 88, 0, 0)');
  ctx.fillStyle = stirWaterGrad2;
  ctx.beginPath(); ctx.arc(530, 580, 85, 0, Math.PI * 2); ctx.fill();

  // 搅动水涡弧线
  ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(530, 582, 30, 0.2 * Math.PI, 1.3 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.arc(530, 582, 54, 0.8 * Math.PI, 1.9 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.arc(530, 582, 80, 1.3 * Math.PI, 2.3 * Math.PI); ctx.stroke();

  // 汤滴水泡
  function drawStirBubble(bx, by, r) {
    ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE066'; ctx.fill();
    ctx.beginPath(); ctx.arc(bx - r * 0.3, by - r * 0.3, r * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF'; ctx.fill();
  }
  drawStirBubble(500, 570, 7);
  drawStirBubble(565, 575, 7);
  drawStirBubble(540, 605, 6);
  ctx.restore();

  // 右手雪白猫爪稳稳握住勺柄上部
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.25)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;
  ctx.beginPath();
  ctx.ellipse(585, 490, 36, 28, 0.3, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  ctx.fillStyle = '#FFAAA6';
  ctx.beginPath(); ctx.ellipse(587, 496, 13, 9, 0.3, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // 6. Pot Belly Decor
  ctx.save();
  drawAnimeHeart(512, 730, 1.2, '#FF597B');
  ctx.strokeStyle = 'rgba(255, 245, 235, 0.8)';
  ctx.lineWidth = 8; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(512, 760, 80, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();

  ctx.fillStyle = 'rgba(255, 110, 110, 0.35)';
  ctx.beginPath(); ctx.arc(395, 755, 16, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(629, 755, 16, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // Top gloss
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  ctx.beginPath(); ctx.ellipse(512, 110, 600, 200, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; ctx.fill();
  ctx.restore();
`;

const concepts = [
  {
    name: '咕嘟食谱_方案S1_真·入汤深入搅动(强烈推荐).png',
    script: scriptDeepStir,
    artifact: 'cat_chef_deep_stir.png'
  },
  {
    name: '咕嘟食谱_方案S2_单手入汤大圈搅拌.png',
    script: scriptStirOneHand,
    artifact: 'cat_chef_one_hand_deep_stir.png'
  }
];

const tempDir = path.join(__dirname, 'temp_render');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

console.log('Rendering true submerged stirring spoon concepts...');

concepts.forEach((concept, index) => {
  const htmlContent = createHtml(concept.script);
  const tempHtmlPath = path.join(tempDir, `true_stir_${index}.html`);
  const tempPngPath = path.join(tempDir, `true_stir_${index}.png`);
  const desktopPath = path.join(desktopDir, concept.name);
  const artifactPath = path.join(artifactDir, concept.artifact);

  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  const fileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu --screenshot="${tempPngPath}" --window-size=1024,1024 --default-background-color=00000000 "${fileUrl}"`;
  
  execSync(cmd, { stdio: 'inherit' });

  // Copy to Desktop
  fs.copyFileSync(tempPngPath, desktopPath);
  console.log(`[Success] Saved to Desktop: ${desktopPath}`);

  // Copy to Artifacts
  fs.copyFileSync(tempPngPath, artifactPath);
  console.log(`[Success] Saved to Artifact: ${artifactPath}`);
});

console.log('True submerged stirring spoon concepts rendered successfully!');
