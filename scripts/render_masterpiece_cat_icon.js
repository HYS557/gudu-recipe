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

// =============================================================================
// 终极大师版：【单体贯通木勺 · 沉浸锅中搅动 · 纯净猫咪大厨 · 商业级顶级质感】
// =============================================================================
const scriptMasterpiece = `
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

  const lineCol = '#3D200F';
  const catWhite = '#FFFFFF';
  const earPink = '#FFAAA6';

  // 1. App Icon 圆角背景（温暖柔和的蜜桃晨曦渐变，极具食欲与亲和力）
  ctx.save();
  ctx.shadowColor = 'rgba(215, 85, 20, 0.35)';
  ctx.shadowBlur = 48;
  ctx.shadowOffsetY = 24;
  roundRect(ctx, 32, 32, 960, 960, 220);
  const bgGrad = ctx.createLinearGradient(0, 32, 0, 992);
  bgGrad.addColorStop(0, '#FFFDF9');
  bgGrad.addColorStop(0.35, '#FFEBD9');
  bgGrad.addColorStop(0.75, '#FFC298');
  bgGrad.addColorStop(1, '#FF8847');
  ctx.fillStyle = bgGrad;
  ctx.fill();
  ctx.restore();

  // 背景环境光环
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  const sunGlow = ctx.createRadialGradient(512, 380, 50, 512, 380, 540);
  sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.88)');
  sunGlow.addColorStop(0.5, 'rgba(255, 240, 210, 0.45)');
  sunGlow.addColorStop(1, 'rgba(255, 130, 60, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(32, 32, 960, 960);

  // 灵动烘托星芒与音乐音符（代表快乐烹饪）
  drawAnimeStar(185, 185, 28, '#FFFFFF');
  drawAnimeStar(835, 195, 30, '#FFFFFF');
  drawAnimeStar(210, 440, 18, '#FFF4D6');
  drawAnimeStar(825, 435, 20, '#FFF4D6');
  drawAnimeStar(720, 125, 18, '#FFFFFF');
  drawAnimeStar(305, 125, 16, '#FFFFFF');

  ctx.fillStyle = '#FF597B';
  ctx.font = 'bold 44px sans-serif';
  ctx.fillText('♪', 235, 305);
  ctx.fillText('♫', 775, 305);
  drawAnimeHeart(245, 255, 0.8, 'rgba(255, 89, 123, 0.75)');
  drawAnimeHeart(785, 255, 0.9, 'rgba(255, 89, 123, 0.75)');

  // 2. 升腾的温馨白蒸汽与爱心
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.94)';
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
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

  // 3. 猫咪大厨（唯一真正主角）：头部、耳朵、大厨帽、萌态五官
  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // 左耳
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

  // 右耳
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

  // 猫咪圆润雪白大脸
  ctx.beginPath();
  ctx.ellipse(512, 390, 192, 162, 0, 0, Math.PI * 2);
  ctx.fillStyle = catWhite; ctx.fill(); ctx.stroke();

  // 脸颊软萌小毛撮
  ctx.beginPath();
  ctx.moveTo(325, 410); ctx.lineTo(305, 425); ctx.lineTo(325, 435);
  ctx.moveTo(699, 410); ctx.lineTo(719, 425); ctx.lineTo(699, 435);
  ctx.stroke();

  // 厨师高帽
  ctx.save();
  ctx.shadowColor = 'rgba(61, 32, 15, 0.2)';
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

  // 水汪汪动漫大眼（充满爱意俯视锅中美食）
  function drawCatAnimeEye(ex, ey, isLeft) {
    ctx.save();
    ctx.beginPath(); ctx.ellipse(ex, ey, 27, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#261208'; ctx.fill();

    const eyeGrad = ctx.createLinearGradient(ex, ey - 30, ex, ey + 30);
    eyeGrad.addColorStop(0, '#502812'); eyeGrad.addColorStop(0.65, '#C46D29'); eyeGrad.addColorStop(1, '#FFAE3D');
    ctx.beginPath(); ctx.ellipse(ex, ey + 4, 24, 28, 0, 0, Math.PI * 2); ctx.fillStyle = eyeGrad; ctx.fill();

    ctx.beginPath(); ctx.ellipse(ex, ey + 7, 14, 17, 0, 0, Math.PI * 2); ctx.fillStyle = '#140803'; ctx.fill();

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

  // 小粉鼻
  ctx.save();
  ctx.fillStyle = '#FF758F';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(503, 403); ctx.quadraticCurveTo(512, 400, 521, 403);
  ctx.closePath(); ctx.fill();

  // 经典萌猫 :3 开口欢笑嘴巴与小粉舌（完全舒展、清晰无遮挡！）
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(512, 427);
  ctx.moveTo(486, 429); ctx.quadraticCurveTo(499, 445, 512, 427);
  ctx.quadraticCurveTo(525, 445, 538, 429);
  ctx.stroke();

  ctx.beginPath(); ctx.arc(512, 436, 9, 0, Math.PI); ctx.fillStyle = '#FF758F'; ctx.fill(); ctx.stroke();

  // 少女心粉嫩腮红
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
  // 4. 砂锅后半部及主体轮廓（日式土陶和风温润质感，双色釉面）
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.shadowColor = 'rgba(80, 30, 10, 0.35)'; ctx.shadowBlur = 35; ctx.shadowOffsetY = 22;

  // 砂锅把手（左 & 右）
  function drawEarHandle(hx, hy) {
    ctx.save();
    roundRect(ctx, hx, hy, 90, 58, 26);
    const earGrad = ctx.createLinearGradient(hx, hy, hx, hy + 58);
    earGrad.addColorStop(0, '#E89058');
    earGrad.addColorStop(1, '#BD6530');
    ctx.fillStyle = earGrad; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 14; ctx.stroke();
    ctx.restore();
  }
  drawEarHandle(155, 630);
  drawEarHandle(779, 630);

  // 砂锅腹身
  ctx.beginPath();
  ctx.moveTo(225, 575);
  ctx.bezierCurveTo(200, 795, 325, 900, 512, 900);
  ctx.bezierCurveTo(699, 900, 824, 795, 799, 575);
  ctx.closePath();
  const potGrad = ctx.createLinearGradient(0, 575, 0, 900);
  potGrad.addColorStop(0, '#FFF6EE');
  potGrad.addColorStop(0.55, '#F5D7C0');
  potGrad.addColorStop(1, '#DC8F68');
  ctx.fillStyle = potGrad; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 15; ctx.lineJoin = 'round'; ctx.stroke();

  // 和风陶器两段式优雅腰线
  ctx.beginPath();
  ctx.ellipse(512, 695, 275, 42, 0, 0.05 * Math.PI, 0.95 * Math.PI);
  ctx.strokeStyle = '#D47E45';
  ctx.lineWidth = 8;
  ctx.stroke();

  // 砂锅中央：“咕嘟食谱”经典朱红金边爱心御守印章（纯净雅致，无冲突第二张人脸！）
  ctx.save();
  roundRect(ctx, 474, 725, 76, 76, 20);
  const stampGrad = ctx.createLinearGradient(474, 725, 550, 801);
  stampGrad.addColorStop(0, '#FF5E7E');
  stampGrad.addColorStop(1, '#E63956');
  ctx.fillStyle = stampGrad;
  ctx.fill();
  ctx.strokeStyle = '#FFE3A8';
  ctx.lineWidth = 5;
  ctx.stroke();

  // 印章内部纯白小爱心
  drawAnimeHeart(512, 755, 0.92, '#FFFFFF');
  ctx.restore();
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 5. 锅口内部高汤与美食食材
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  ctx.clip(); // 严格限定在高汤池内

  // 金黄诱人的咕嘟高汤
  const soupGrad = ctx.createLinearGradient(0, 525, 0, 633);
  soupGrad.addColorStop(0, '#FFE473');
  soupGrad.addColorStop(0.48, '#FFAE00');
  soupGrad.addColorStop(1, '#E65600');
  ctx.fillStyle = soupGrad;
  ctx.fillRect(200, 510, 624, 140);

  // 食材 1：日式流心溏心蛋（左侧大符号，视觉极具食欲）
  ctx.save();
  ctx.translate(365, 575); ctx.rotate(-0.16);
  ctx.beginPath(); ctx.ellipse(0, 0, 52, 38, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFDF2'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  const yolkGrad = ctx.createRadialGradient(-4, -4, 4, 0, 0, 26);
  yolkGrad.addColorStop(0, '#FFF587'); yolkGrad.addColorStop(0.4, '#FFA000'); yolkGrad.addColorStop(1, '#E85800');
  ctx.beginPath(); ctx.arc(0, 0, 26, 0, Math.PI * 2); ctx.fillStyle = yolkGrad; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-8, -8, 8, 4.5, -0.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 255, 255, 0.92)'; ctx.fill();
  ctx.restore();

  // 食材 2：粉白鸣门卷（右侧大符号，经典动漫拉面标志）
  ctx.save();
  ctx.translate(650, 575); ctx.rotate(0.18);
  ctx.beginPath(); ctx.arc(0, 0, 36, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, 0, 20, 0, Math.PI * 1.6); ctx.stroke();
  ctx.restore();

  // 食材 3：日式花椎茸（十字花刀，精美地道）
  ctx.save();
  ctx.translate(435, 606);
  ctx.beginPath(); ctx.ellipse(0, 0, 36, 26, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#6B422B'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.stroke();
  ctx.strokeStyle = '#FFEBDD'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-14, 0); ctx.lineTo(14, 0);
  ctx.moveTo(0, -10); ctx.lineTo(0, 10);
  ctx.stroke();
  ctx.restore();

  // 食材 4：翡翠翠绿葱花
  function drawNegi(nx, ny, rot) {
    ctx.save(); ctx.translate(nx, ny); ctx.rotate(rot);
    ctx.beginPath(); ctx.ellipse(0, 0, 16, 10, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#48B27A'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 5; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(0, 0, 9, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#D8F3DC'; ctx.fill();
    ctx.restore();
  }
  drawNegi(335, 560, 0.4);
  drawNegi(690, 565, -0.3);
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 6. 锅口边缘立体外唇（Lip）- 前沿与后沿的深度分层
  // ---------------------------------------------------------------------------
  ctx.save();
  // 锅沿底线
  ctx.beginPath();
  ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI * 2);
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.stroke();

  // 锅口前沿（亮色陶瓷厚唇，呈现出锅的景深立体感）
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
  // 7. 【核心关键！一笔贯通式整木长勺（Masterpiece Continuous Wooden Spoon）】
  // 绝对零断裂、零缝隙、一整块实木从爪心直插高汤深处！
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.translate(515, 485); // 旋转中心设在两爪交汇处
  ctx.rotate(0.22);

  // 单一完整连续路径：从勺把顶端圆角 -> 笔直握柄 -> 流线型优雅过渡 -> 饱满舀汤勺斗
  ctx.beginPath();
  ctx.arc(0, -22, 12, Math.PI, 0, false); // 勺柄顶端圆润收口（完全避开小猫嘴巴，留出充足空间）
  ctx.lineTo(12, 75);
  // 右侧自然弧度展开成勺斗
  ctx.bezierCurveTo(15, 90, 38, 92, 38, 110);
  ctx.bezierCurveTo(38, 134, 0, 140, 0, 140);
  // 左侧对称收拢回勺柄
  ctx.bezierCurveTo(0, 140, -38, 134, -38, 110);
  ctx.bezierCurveTo(-38, 92, -15, 90, -12, 75);
  ctx.lineTo(-12, -22);
  ctx.closePath();

  // 整木温润蜂蜜橡木渐变（色泽纯正、浑然一体）
  const fullWoodGrad = ctx.createLinearGradient(0, -22, 0, 140);
  fullWoodGrad.addColorStop(0, '#F8B674');
  fullWoodGrad.addColorStop(0.45, '#E28434');
  fullWoodGrad.addColorStop(0.85, '#B75A18');
  fullWoodGrad.addColorStop(1, '#98440E');
  ctx.fillStyle = fullWoodGrad;
  ctx.fill();

  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 8.5;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // 勺斗内部微凹质感（内凹暗部，产生真实舀汤木勺立体深度）
  ctx.beginPath();
  ctx.ellipse(0, 112, 26, 18, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#82370A';
  ctx.fill();

  // 勺柄高光木纹细线
  ctx.beginPath();
  ctx.moveTo(-3, -12); ctx.lineTo(-3, 72);
  ctx.strokeStyle = 'rgba(255, 235, 205, 0.45)';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.restore();

  // ---------------------------------------------------------------------------
  // 8. 汤面半透明金汤浸润与水面微澜（精准限定在汤池内）
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  ctx.clip(); // 确保绝不会溢出到锅外！

  // 勺头沉浸在高汤之中的金红泛光覆盖
  const stirWaterCover = ctx.createRadialGradient(538, 584, 5, 538, 584, 62);
  stirWaterCover.addColorStop(0, 'rgba(255, 172, 0, 0.70)');
  stirWaterCover.addColorStop(0.7, 'rgba(238, 120, 0, 0.38)');
  stirWaterCover.addColorStop(1, 'rgba(230, 80, 0, 0)');
  ctx.fillStyle = stirWaterCover;
  ctx.beginPath(); ctx.arc(538, 584, 62, 0, Math.PI * 2); ctx.fill();

  // 锅中搅汤产生的优雅白色涟漪
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.lineWidth = 5.5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.ellipse(538, 584, 38, 13, 0.20, 0.08 * Math.PI, 1.25 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(538, 584, 66, 20, 0.20, 0.65 * Math.PI, 1.85 * Math.PI);
  ctx.stroke();

  // 咕嘟咕嘟小金泡
  function drawLiquidBubble(bx, by, r) {
    ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE26E'; ctx.fill();
    ctx.beginPath(); ctx.arc(bx - r * 0.3, by - r * 0.3, r * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF'; ctx.fill();
  }
  drawLiquidBubble(518, 572, 5.5);
  drawLiquidBubble(565, 577, 5);
  drawLiquidBubble(544, 600, 4);
  ctx.restore();

  // ---------------------------------------------------------------------------
  // 9. 猫猫雪白软萌小肉爪握住勺柄（层级压在勺柄之上，完全不挡嘴巴！）
  // ---------------------------------------------------------------------------
  ctx.save();
  ctx.shadowColor = 'rgba(61, 32, 15, 0.25)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;

  // 左爪
  ctx.beginPath(); ctx.ellipse(480, 480, 31, 24, -0.20, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  ctx.fillStyle = '#FFAAA6'; ctx.beginPath(); ctx.ellipse(478, 486, 12, 8, -0.20, 0, Math.PI * 2); ctx.fill();

  // 右爪
  ctx.beginPath(); ctx.ellipse(540, 488, 31, 24, 0.24, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  ctx.fillStyle = '#FFAAA6'; ctx.beginPath(); ctx.ellipse(542, 494, 12, 8, 0.24, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // 10. App 图标顶部玻璃质感透亮反光弧（商业大厂级 UI 质感）
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  ctx.beginPath(); ctx.ellipse(512, 110, 600, 200, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.22)'; ctx.fill();
  ctx.restore();
`;

const tempDir = path.join(__dirname, 'temp_render');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const htmlContent = createHtml(scriptMasterpiece);
const tempHtmlPath = path.join(tempDir, 'masterpiece_stir.html');
const tempPngPath = path.join(tempDir, 'masterpiece_stir.png');
const desktopPath = path.join(desktopDir, '咕嘟食谱_终极大厨版_完美猫猫搅汤(推荐).png');
const artifactPath = path.join(artifactDir, 'cat_chef_masterpiece.png');

fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

const fileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
const cmd = `"${edgePath}" --headless --disable-gpu --screenshot="${tempPngPath}" --window-size=1024,1024 --default-background-color=00000000 "${fileUrl}"`;

console.log('Rendering Masterpiece Stirring Cat Chef icon...');
execSync(cmd, { stdio: 'inherit' });

fs.copyFileSync(tempPngPath, desktopPath);
console.log(`[Success] Saved to Desktop: ${desktopPath}`);

fs.copyFileSync(tempPngPath, artifactPath);
console.log(`[Success] Saved to Artifact: ${artifactPath}`);

console.log('Masterpiece Stirring Cat Chef icon generated successfully!');
