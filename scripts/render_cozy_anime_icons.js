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
// 方案 A: 【治愈猫猫大厨 · 暖心咕嘟煲】 (Cozy Anime Cat Chef & Bubbling Donabe)
// =============================================================================
const scriptConceptA = `
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

  // 1. App Icon Squircle Background (Creamy honey to soft warm coral)
  ctx.save();
  ctx.shadowColor = 'rgba(210, 80, 20, 0.35)';
  ctx.shadowBlur = 45;
  ctx.shadowOffsetY = 24;
  roundRect(ctx, 32, 32, 960, 960, 220);
  const bgGrad = ctx.createLinearGradient(0, 32, 0, 992);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.35, '#FFEAD9');
  bgGrad.addColorStop(0.75, '#FFC49A');
  bgGrad.addColorStop(1, '#FF8A50');
  ctx.fillStyle = bgGrad;
  ctx.fill();
  ctx.restore();

  // Background warm ambient glow
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  const sunGlow = ctx.createRadialGradient(512, 400, 60, 512, 400, 500);
  sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
  sunGlow.addColorStop(0.5, 'rgba(255, 240, 210, 0.4)');
  sunGlow.addColorStop(1, 'rgba(255, 130, 60, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(32, 32, 960, 960);

  // Twinkling stars & floating bokeh
  drawAnimeStar(190, 190, 26, '#FFFFFF');
  drawAnimeStar(830, 200, 28, '#FFFFFF');
  drawAnimeStar(220, 440, 18, '#FFF4D6');
  drawAnimeStar(820, 440, 20, '#FFF4D6');
  drawAnimeStar(710, 130, 16, '#FFFFFF');
  drawAnimeStar(310, 130, 15, '#FFFFFF');

  // 2. Rising Warm Steam with Glowing Heart
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
  ctx.shadowBlur = 18;

  ctx.beginPath();
  ctx.moveTo(330, 230);
  ctx.bezierCurveTo(275, 150, 335, 100, 385, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(694, 230);
  ctx.bezierCurveTo(749, 150, 689, 100, 639, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(512, 160);
  ctx.bezierCurveTo(485, 115, 535, 85, 512, 60);
  ctx.stroke();

  // Steam heart
  ctx.fillStyle = '#FF597B';
  ctx.beginPath();
  const hx = 512, hy = 50;
  ctx.moveTo(hx, hy);
  ctx.bezierCurveTo(hx - 20, hy - 20, hx - 40, hy + 8, hx, hy + 32);
  ctx.bezierCurveTo(hx + 40, hy + 8, hx + 20, hy - 20, hx, hy);
  ctx.fill();
  ctx.restore();

  // 3. Anime Mascot: Cute White & Calico Cat Chef
  const lineCol = '#422513';
  const catCream = '#FFFDF7';
  const earPink = '#FFAAA6';

  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // Ears
  // Left Ear
  ctx.beginPath();
  ctx.moveTo(360, 345);
  ctx.lineTo(315, 200);
  ctx.quadraticCurveTo(365, 210, 420, 270);
  ctx.closePath();
  ctx.fillStyle = catCream;
  ctx.fill();
  ctx.stroke();

  // Left Inner Pink
  ctx.beginPath();
  ctx.moveTo(362, 325);
  ctx.lineTo(335, 225);
  ctx.quadraticCurveTo(370, 233, 405, 273);
  ctx.closePath();
  ctx.fillStyle = earPink;
  ctx.fill();

  // Right Ear
  ctx.beginPath();
  ctx.moveTo(664, 345);
  ctx.lineTo(709, 200);
  ctx.quadraticCurveTo(659, 210, 604, 270);
  ctx.closePath();
  ctx.fillStyle = catCream;
  ctx.fill();
  ctx.stroke();

  // Right Inner Pink
  ctx.beginPath();
  ctx.moveTo(662, 325);
  ctx.lineTo(689, 225);
  ctx.quadraticCurveTo(654, 233, 619, 273);
  ctx.closePath();
  ctx.fillStyle = earPink;
  ctx.fill();

  // Cat Head Round Body
  ctx.beginPath();
  ctx.ellipse(512, 390, 190, 160, 0, 0, Math.PI * 2);
  ctx.fillStyle = catCream;
  ctx.fill();
  ctx.stroke();

  // Calico Orange Spot on Forehead
  ctx.beginPath();
  ctx.moveTo(365, 265);
  ctx.quadraticCurveTo(455, 305, 445, 370);
  ctx.quadraticCurveTo(355, 390, 330, 325);
  ctx.closePath();
  ctx.fillStyle = '#FFA756';
  ctx.fill();

  // Chef Hat
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.2)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 10;
  roundRect(ctx, 440, 220, 144, 38, 14);
  ctx.fillStyle = '#FF597B';
  ctx.fill();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 10;
  ctx.stroke();

  // Hat Puff
  ctx.beginPath();
  ctx.moveTo(440, 220);
  ctx.bezierCurveTo(395, 195, 405, 130, 460, 125);
  ctx.bezierCurveTo(485, 80, 540, 80, 565, 125);
  ctx.bezierCurveTo(620, 130, 630, 195, 584, 220);
  ctx.closePath();
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Sparkling Anime Cat Eyes
  function drawCatAnimeEye(ex, ey, isLeft) {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(ex, ey, 26, 35, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#301A0E';
    ctx.fill();

    const eyeGrad = ctx.createLinearGradient(ex, ey - 30, ex, ey + 30);
    eyeGrad.addColorStop(0, '#542E15');
    eyeGrad.addColorStop(0.65, '#BF6B28');
    eyeGrad.addColorStop(1, '#FFAE3D');
    ctx.beginPath();
    ctx.ellipse(ex, ey + 4, 23, 27, 0, 0, Math.PI * 2);
    ctx.fillStyle = eyeGrad;
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(ex, ey + 4, 14, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#1D0E07';
    ctx.fill();

    // Specular shine highlights
    ctx.beginPath(); ctx.arc(ex - 8, ey - 10, 10, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.beginPath(); ctx.arc(ex + 8, ey + 12, 5.5, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();

    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.beginPath();
    if (isLeft) {
      ctx.arc(ex, ey, 30, -Math.PI * 0.78, -Math.PI * 0.18);
    } else {
      ctx.arc(ex, ey, 30, -Math.PI * 0.82, -Math.PI * 0.22);
    }
    ctx.stroke();
    ctx.restore();
  }
  drawCatAnimeEye(440, 380, true);
  drawCatAnimeEye(584, 380, false);

  // Tiny Pink Heart Nose
  ctx.save();
  ctx.fillStyle = '#FF758F';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(503, 403);
  ctx.quadraticCurveTo(512, 400, 521, 403);
  ctx.closePath();
  ctx.fill();

  // W-mouth :3
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(512, 427);
  ctx.moveTo(486, 429); ctx.quadraticCurveTo(499, 445, 512, 427);
  ctx.quadraticCurveTo(525, 445, 538, 429);
  ctx.stroke();

  // Tongue
  ctx.beginPath();
  ctx.arc(512, 436, 9, 0, Math.PI);
  ctx.fillStyle = '#FF758F';
  ctx.fill();
  ctx.stroke();

  // Rosy cheeks (///)
  function drawCatBlush(bx, by) {
    ctx.save();
    const blushGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 35);
    blushGrad.addColorStop(0, 'rgba(255, 105, 140, 0.8)');
    blushGrad.addColorStop(1, 'rgba(255, 105, 140, 0)');
    ctx.fillStyle = blushGrad;
    ctx.beginPath(); ctx.ellipse(bx, by, 35, 24, 0, 0, Math.PI * 2); ctx.fill();

    ctx.strokeStyle = 'rgba(255, 50, 95, 0.75)';
    ctx.lineWidth = 4.5;
    ctx.lineCap = 'round';
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
  ctx.shadowColor = 'rgba(90, 35, 10, 0.35)';
  ctx.shadowBlur = 35;
  ctx.shadowOffsetY = 22;

  // Symmetrical Pot Ear Handles (Independently filled and stroked!)
  function drawEarHandle(hx, hy) {
    ctx.save();
    roundRect(ctx, hx, hy, 90, 58, 26);
    ctx.fillStyle = '#D47E45';
    ctx.fill();
    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 14;
    ctx.stroke();
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
  ctx.fillStyle = potGrad;
  ctx.fill();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 15;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Pot Rim Lip
  ctx.beginPath();
  ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFF8F0';
  ctx.fill();
  ctx.stroke();

  // Golden Delicious Broth
  ctx.beginPath();
  ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  const soupGrad = ctx.createLinearGradient(0, 525, 0, 633);
  soupGrad.addColorStop(0, '#FFE26A');
  soupGrad.addColorStop(0.5, '#FFAC00');
  soupGrad.addColorStop(1, '#E85800');
  ctx.fillStyle = soupGrad;
  ctx.fill();
  ctx.restore();

  // 5. Anime Food Delicacies inside the Pot
  // Halved Soft-boiled Egg
  ctx.save();
  ctx.translate(415, 567);
  ctx.rotate(-0.12);
  ctx.beginPath(); ctx.ellipse(0, 0, 52, 40, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFDF2'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  const yolkGrad = ctx.createRadialGradient(-4, -4, 5, 0, 0, 27);
  yolkGrad.addColorStop(0, '#FFF587');
  yolkGrad.addColorStop(0.4, '#FFA000');
  yolkGrad.addColorStop(1, '#E85800');
  ctx.beginPath(); ctx.arc(0, 0, 27, 0, Math.PI * 2); ctx.fillStyle = yolkGrad; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-8, -8, 8, 5, -0.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; ctx.fill();
  ctx.restore();

  // Pink Narutomaki Swirl
  ctx.save();
  ctx.translate(585, 571);
  ctx.beginPath(); ctx.arc(0, 0, 36, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, 0, 20, 0, Math.PI * 1.6); ctx.stroke();
  ctx.restore();

  // Shiitake Mushroom with star score
  ctx.save();
  ctx.translate(500, 591);
  ctx.beginPath(); ctx.ellipse(0, 0, 38, 28, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#6E4933'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.stroke();
  ctx.strokeStyle = '#FFEAD9'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-16, -10); ctx.lineTo(16, 10);
  ctx.moveTo(-16, 10); ctx.lineTo(16, -10);
  ctx.stroke();
  ctx.restore();

  // Emerald Scallion slices
  function drawNegi(nx, ny, rot) {
    ctx.save();
    ctx.translate(nx, ny);
    ctx.rotate(rot);
    ctx.beginPath(); ctx.ellipse(0, 0, 16, 10, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#52B788'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 5; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(0, 0, 9, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#D8F3DC'; ctx.fill();
    ctx.restore();
  }
  drawNegi(340, 575, 0.4);
  drawNegi(665, 577, -0.3);
  drawNegi(540, 550, 0.2);

  // Simmer bubbles
  function drawBubble(bx, by, r) {
    ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)'; ctx.fill();
    ctx.beginPath(); ctx.arc(bx - r * 0.3, by - r * 0.3, r * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF'; ctx.fill();
  }
  drawBubble(375, 601, 10);
  drawBubble(630, 597, 8);
  drawBubble(460, 610, 7);

  // 6. Cute White Cat Paws holding the Pot Rim!
  function drawCatPaw(px, py) {
    ctx.save();
    ctx.shadowColor = 'rgba(66, 37, 19, 0.22)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 6;
    ctx.beginPath();
    ctx.ellipse(px, py, 38, 28, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFDF7';
    ctx.fill();
    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 10;
    ctx.stroke();

    ctx.fillStyle = '#FFAAA6';
    ctx.beginPath(); ctx.ellipse(px, py + 8, 14, 10, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  drawCatPaw(320, 550);
  drawCatPaw(704, 550);

  // 7. Sweet Heart & Smiling Motif on the Pot Belly
  ctx.save();
  ctx.fillStyle = '#FF597B';
  ctx.beginPath();
  const phx = 512, phy = 730;
  ctx.moveTo(phx, phy);
  ctx.bezierCurveTo(phx - 18, phy - 18, phx - 36, phy + 6, phx, phy + 28);
  ctx.bezierCurveTo(phx + 36, phy + 6, phx + 18, phy - 18, phx, phy);
  ctx.fill();

  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(430, 745, 18, Math.PI, 0); ctx.stroke();
  ctx.beginPath(); ctx.arc(594, 745, 18, Math.PI, 0); ctx.stroke();

  ctx.fillStyle = 'rgba(255, 110, 110, 0.45)';
  ctx.beginPath(); ctx.arc(395, 760, 16, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(629, 760, 16, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // Top gloss reflection
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  ctx.beginPath();
  ctx.ellipse(512, 110, 600, 200, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.fill();
  ctx.restore();
`;

// =============================================================================
// 方案 B: 【吉卜力森林小柴犬大厨 · 暖心砂锅】 (Cozy Anime Shiba Inu Chef)
// =============================================================================
const scriptConceptB = `
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

  // 1. App Icon Rounded Square Background
  ctx.save();
  ctx.shadowColor = 'rgba(215, 90, 25, 0.35)';
  ctx.shadowBlur = 45;
  ctx.shadowOffsetY = 24;
  roundRect(ctx, 32, 32, 960, 960, 220);
  const bgGrad = ctx.createLinearGradient(0, 32, 0, 992);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.35, '#FFE9D5');
  bgGrad.addColorStop(0.75, '#FFBF8C');
  bgGrad.addColorStop(1, '#FF8545');
  ctx.fillStyle = bgGrad;
  ctx.fill();
  ctx.restore();

  // Warm sunlit ambient aura
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  const sunGlow = ctx.createRadialGradient(512, 380, 60, 512, 380, 500);
  sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
  sunGlow.addColorStop(0.5, 'rgba(255, 235, 200, 0.38)');
  sunGlow.addColorStop(1, 'rgba(255, 120, 50, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(32, 32, 960, 960);

  // Sparkles & music notes
  drawAnimeStar(190, 180, 26, '#FFF');
  drawAnimeStar(830, 190, 28, '#FFF');
  drawAnimeStar(210, 430, 16, '#FFE8C2');
  drawAnimeStar(830, 440, 18, '#FFE8C2');

  ctx.fillStyle = '#FF597B';
  ctx.font = 'bold 44px sans-serif';
  ctx.fillText('♪', 240, 320);
  ctx.fillText('♫', 770, 320);

  // 2. Thick Billowing Anime Steam Swirls with Golden Sparkles
  ctx.save();
  ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
  ctx.shadowBlur = 22;
  function drawSteamPuff(sx, sy, scale) {
    ctx.save();
    ctx.translate(sx, sy);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.arc(0, 0, 42, 0, Math.PI * 2);
    ctx.arc(-35, 15, 30, 0, Math.PI * 2);
    ctx.arc(35, 15, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
    ctx.fill();
    ctx.restore();
  }
  drawSteamPuff(360, 170, 1.0);
  drawSteamPuff(660, 170, 1.0);
  drawSteamPuff(512, 110, 1.25);

  // Golden heart
  ctx.fillStyle = '#FF597B';
  ctx.beginPath();
  const hx = 512, hy = 50;
  ctx.moveTo(hx, hy);
  ctx.bezierCurveTo(hx - 20, hy - 20, hx - 40, hy + 8, hx, hy + 32);
  ctx.bezierCurveTo(hx + 40, hy + 8, hx + 20, hy - 20, hx, hy);
  ctx.fill();
  ctx.restore();

  // 3. Anime Mascot: Chubby Shiba Inu Chef (小柴犬大厨)
  const lineCol = '#422513';
  const shibaGold = '#E8984E';
  const shibaWhite = '#FFFDF5';

  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // Shiba Triangular Ears
  // Left Ear
  ctx.beginPath();
  ctx.moveTo(355, 335);
  ctx.lineTo(320, 195);
  ctx.quadraticCurveTo(375, 205, 425, 265);
  ctx.closePath();
  ctx.fillStyle = shibaGold;
  ctx.fill();
  ctx.stroke();

  // Left Ear Inner Cream
  ctx.beginPath();
  ctx.moveTo(358, 315);
  ctx.lineTo(340, 220);
  ctx.quadraticCurveTo(375, 230, 410, 270);
  ctx.closePath();
  ctx.fillStyle = '#FFDEC2';
  ctx.fill();

  // Right Ear
  ctx.beginPath();
  ctx.moveTo(669, 335);
  ctx.lineTo(704, 195);
  ctx.quadraticCurveTo(649, 205, 599, 265);
  ctx.closePath();
  ctx.fillStyle = shibaGold;
  ctx.fill();
  ctx.stroke();

  // Right Ear Inner Cream
  ctx.beginPath();
  ctx.moveTo(666, 315);
  ctx.lineTo(684, 220);
  ctx.quadraticCurveTo(649, 230, 614, 270);
  ctx.closePath();
  ctx.fillStyle = '#FFDEC2';
  ctx.fill();

  // Shiba Head Round Body
  ctx.beginPath();
  ctx.ellipse(512, 380, 195, 165, 0, 0, Math.PI * 2);
  ctx.fillStyle = shibaGold;
  ctx.fill();
  ctx.stroke();

  // White Muzzle
  ctx.beginPath();
  ctx.ellipse(512, 420, 115, 95, 0, 0, Math.PI * 2);
  ctx.fillStyle = shibaWhite;
  ctx.fill();

  // Shiba Iconic White Eyebrow Dots (Maro-mayu)
  ctx.beginPath(); ctx.ellipse(435, 325, 18, 14, -0.2, 0, Math.PI * 2); ctx.fillStyle = shibaWhite; ctx.fill();
  ctx.beginPath(); ctx.ellipse(589, 325, 18, 14, 0.2, 0, Math.PI * 2); ctx.fillStyle = shibaWhite; ctx.fill();

  // Chef Headband Bandana (White with red circle sun)
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.2)';
  ctx.shadowBlur = 15;
  roundRect(ctx, 420, 235, 184, 34, 12);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 9;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(512, 252, 11, 0, Math.PI * 2);
  ctx.fillStyle = '#FF4D6D';
  ctx.fill();
  ctx.restore();

  // Glistening Anime Puppy Eyes
  function drawShibaEye(ex, ey) {
    ctx.save();
    ctx.beginPath(); ctx.ellipse(ex, ey, 25, 33, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2B170B'; ctx.fill();

    const eyeGrad = ctx.createLinearGradient(ex, ey - 25, ex, ey + 25);
    eyeGrad.addColorStop(0, '#4E2A14');
    eyeGrad.addColorStop(0.7, '#A55720');
    eyeGrad.addColorStop(1, '#FFA63D');
    ctx.beginPath(); ctx.ellipse(ex, ey + 3, 22, 26, 0, 0, Math.PI * 2); ctx.fillStyle = eyeGrad; ctx.fill();

    ctx.beginPath(); ctx.ellipse(ex, ey + 3, 13, 17, 0, 0, Math.PI * 2); ctx.fillStyle = '#1A0C05'; ctx.fill();

    // Highlights
    ctx.beginPath(); ctx.arc(ex - 7, ey - 9, 9, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.beginPath(); ctx.arc(ex + 8, ey + 11, 5, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.restore();
  }
  drawShibaEye(442, 370);
  drawShibaEye(582, 370);

  // Black Button Nose
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(512, 400, 18, 13, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#2B170B';
  ctx.fill();
  ctx.beginPath(); ctx.ellipse(508, 397, 6, 3, -0.3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; ctx.fill();
  ctx.restore();

  // Happy Shiba Smiling Mouth with Pink Tongue
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(512, 413); ctx.lineTo(512, 423);
  ctx.moveTo(486, 423); ctx.quadraticCurveTo(500, 439, 512, 423);
  ctx.quadraticCurveTo(524, 439, 538, 423);
  ctx.stroke();

  // Open happy tongue
  ctx.beginPath();
  ctx.arc(512, 432, 11, 0, Math.PI);
  ctx.fillStyle = '#FF758F';
  ctx.fill();
  ctx.stroke();

  // Pink cheeks
  function drawShibaBlush(bx, by) {
    ctx.save();
    const blushGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 32);
    blushGrad.addColorStop(0, 'rgba(255, 90, 125, 0.75)');
    blushGrad.addColorStop(1, 'rgba(255, 90, 125, 0)');
    ctx.fillStyle = blushGrad;
    ctx.beginPath(); ctx.arc(bx, by, 32, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  drawShibaBlush(405, 410);
  drawShibaBlush(619, 410);
  ctx.restore();

  // 4. Symmetrical Earthen Donabe Pot (Foreground)
  ctx.save();
  ctx.shadowColor = 'rgba(90, 35, 10, 0.35)';
  ctx.shadowBlur = 35;
  ctx.shadowOffsetY = 22;

  // Symmetrical Handles (Independently drawn)
  function drawDonabeHandle(hx, hy) {
    ctx.save();
    roundRect(ctx, hx, hy, 90, 58, 26);
    ctx.fillStyle = '#4A2E1E';
    ctx.fill();
    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 14;
    ctx.stroke();
    ctx.restore();
  }
  drawDonabeHandle(155, 630);
  drawDonabeHandle(779, 630);

  // Pot Body
  ctx.beginPath();
  ctx.moveTo(225, 575);
  ctx.bezierCurveTo(200, 795, 325, 900, 512, 900);
  ctx.bezierCurveTo(699, 900, 824, 795, 799, 575);
  ctx.closePath();
  const potGrad = ctx.createLinearGradient(0, 575, 0, 900);
  potGrad.addColorStop(0, '#FFF5EB');
  potGrad.addColorStop(0.3, '#EAD1BB');
  potGrad.addColorStop(0.7, '#A56B48');
  potGrad.addColorStop(1, '#5C3822');
  ctx.fillStyle = potGrad;
  ctx.fill();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 15;
  ctx.lineJoin = 'round';
  ctx.stroke();

  // Traditional Donabe stripe
  ctx.beginPath();
  ctx.ellipse(512, 665, 275, 45, 0, 0, Math.PI);
  ctx.strokeStyle = '#3E2415';
  ctx.lineWidth = 14;
  ctx.stroke();

  // Pot Rim Lip
  ctx.beginPath();
  ctx.ellipse(512, 575, 295, 68, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFF8F0';
  ctx.fill();
  ctx.stroke();

  // Golden Delicious Broth
  ctx.beginPath();
  ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  const soupGrad = ctx.createLinearGradient(0, 525, 0, 633);
  soupGrad.addColorStop(0, '#FFE26A');
  soupGrad.addColorStop(0.5, '#FFAC00');
  soupGrad.addColorStop(1, '#E85800');
  ctx.fillStyle = soupGrad;
  ctx.fill();
  ctx.restore();

  // 5. Anime Food Delicacies
  // Golden Fried Ebi Tempura
  ctx.save();
  ctx.translate(370, 560);
  ctx.rotate(-0.3);
  ctx.fillStyle = '#FF597B'; ctx.strokeStyle = lineCol; ctx.lineWidth = 7;
  ctx.beginPath(); ctx.moveTo(-85, 0); ctx.lineTo(-115, -20); ctx.lineTo(-100, 0); ctx.lineTo(-115, 20); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, 0, 90, 32, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFB703'; ctx.fill(); ctx.stroke();
  ctx.restore();

  // Soft Boiled Egg
  ctx.save();
  ctx.translate(545, 567);
  ctx.beginPath(); ctx.ellipse(0, 0, 50, 38, 0.2, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFDF5'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  const yolkGrad = ctx.createRadialGradient(-3, -3, 4, 0, 0, 26);
  yolkGrad.addColorStop(0, '#FFF587'); yolkGrad.addColorStop(0.4, '#FFA000'); yolkGrad.addColorStop(1, '#E85800');
  ctx.beginPath(); ctx.arc(0, 0, 26, 0, Math.PI * 2); ctx.fillStyle = yolkGrad; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-8, -8, 8, 5, -0.5, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.restore();

  // Narutomaki Swirl
  ctx.save();
  ctx.translate(660, 575);
  ctx.beginPath(); ctx.arc(0, 0, 36, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, 0, 20, 0, Math.PI * 1.6); ctx.stroke();
  ctx.restore();

  // Shiitake Mushroom
  ctx.save();
  ctx.translate(460, 591);
  ctx.beginPath(); ctx.ellipse(0, 0, 36, 26, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#5A3825'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.stroke();
  ctx.strokeStyle = '#FFEAD9'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(-15, -9); ctx.lineTo(15, 9);
  ctx.moveTo(-15, 9); ctx.lineTo(15, -9);
  ctx.stroke();
  ctx.restore();

  // Scallion Negi Slices
  function drawNegi(nx, ny, rot) {
    ctx.save(); ctx.translate(nx, ny); ctx.rotate(rot);
    ctx.beginPath(); ctx.ellipse(0, 0, 15, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#52B788'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 5; ctx.stroke();
    ctx.restore();
  }
  drawNegi(510, 553, 0.3);
  drawNegi(615, 550, -0.2);

  // 6. Shiba Paws Resting on Pot Rim!
  function drawShibaPaw(px, py) {
    ctx.save();
    ctx.shadowColor = 'rgba(66, 37, 19, 0.22)';
    ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;
    ctx.beginPath(); ctx.ellipse(px, py, 38, 28, 0, 0, Math.PI * 2);
    ctx.fillStyle = shibaWhite; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
    ctx.restore();
  }
  drawShibaPaw(315, 550);
  drawShibaPaw(709, 550);

  // 7. Sweet Chibi Smiling Face on Pot
  ctx.save();
  ctx.strokeStyle = '#FFEAD9';
  ctx.lineWidth = 9;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(435, 765, 18, Math.PI, 0); ctx.stroke();
  ctx.beginPath(); ctx.arc(589, 765, 18, Math.PI, 0); ctx.stroke();
  ctx.beginPath(); ctx.arc(512, 785, 15, 0, Math.PI); ctx.stroke();
  ctx.fillStyle = 'rgba(255, 107, 139, 0.7)';
  ctx.beginPath(); ctx.arc(395, 780, 18, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(629, 780, 18, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // Top gloss
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  ctx.beginPath(); ctx.ellipse(512, 110, 600, 200, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; ctx.fill();
  ctx.restore();
`;

// =============================================================================
// 方案 C: 【软萌咕嘟煲灵 · 治愈拟人萌宠】 (Chibi Living Pot Mascot with Spoon)
// =============================================================================
const scriptConceptC = `
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

  // 1. App Icon Rounded Square Background
  ctx.save();
  ctx.shadowColor = 'rgba(225, 95, 25, 0.35)';
  ctx.shadowBlur = 45;
  ctx.shadowOffsetY = 24;
  roundRect(ctx, 32, 32, 960, 960, 220);
  const bgGrad = ctx.createLinearGradient(0, 32, 0, 992);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.35, '#FFEBD9');
  bgGrad.addColorStop(0.75, '#FFBD8E');
  bgGrad.addColorStop(1, '#FF8545');
  ctx.fillStyle = bgGrad;
  ctx.fill();
  ctx.restore();

  // Warm aura
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  const sunGlow = ctx.createRadialGradient(512, 450, 70, 512, 450, 500);
  sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.75)');
  sunGlow.addColorStop(0.5, 'rgba(255, 230, 195, 0.35)');
  sunGlow.addColorStop(1, 'rgba(255, 120, 50, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(32, 32, 960, 960);

  // Sparkles & Hearts
  drawAnimeStar(190, 190, 26, '#FFF');
  drawAnimeStar(830, 200, 28, '#FFF');
  drawAnimeStar(210, 440, 18, '#FFF2D6');
  drawAnimeStar(820, 450, 20, '#FFF2D6');

  // 2. Rising Puffy Steam Spirit Cloud with Happy Closed-Eye Smile
  ctx.save();
  ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
  ctx.shadowBlur = 22;

  ctx.beginPath();
  ctx.arc(512, 190, 68, 0, Math.PI * 2);
  ctx.arc(435, 210, 50, 0, Math.PI * 2);
  ctx.arc(589, 210, 50, 0, Math.PI * 2);
  ctx.arc(375, 240, 38, 0, Math.PI * 2);
  ctx.arc(649, 240, 38, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.fill();

  // Steam Spirit Smiling Face (^ ‿ ^)
  const lineCol = '#422513';
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(485, 185, 12, Math.PI, 0); ctx.stroke();
  ctx.beginPath(); ctx.arc(539, 185, 12, Math.PI, 0); ctx.stroke();
  ctx.beginPath(); ctx.arc(512, 200, 8, 0, Math.PI); ctx.stroke();
  ctx.fillStyle = '#FFAAA6';
  ctx.beginPath(); ctx.arc(465, 195, 8, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(559, 195, 8, 0, Math.PI * 2); ctx.fill();

  // Steam Floating Hearts
  ctx.fillStyle = '#FF597B';
  function drawHeart(hx, hy, scale) {
    ctx.save(); ctx.translate(hx, hy); ctx.scale(scale, scale);
    ctx.beginPath(); ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-14, -14, -28, 5, 0, 24);
    ctx.bezierCurveTo(28, 5, 14, -14, 0, 0);
    ctx.fill(); ctx.restore();
  }
  drawHeart(512, 70, 1.2);
  drawHeart(390, 120, 0.85);
  drawHeart(634, 115, 0.9);
  ctx.restore();

  // 3. Jaunty Tilted Pot Lid on Head (Like a cute beret)
  ctx.save();
  ctx.translate(512, 310);
  ctx.rotate(-0.16);
  ctx.shadowColor = 'rgba(66, 37, 19, 0.22)';
  ctx.shadowBlur = 18; ctx.shadowOffsetY = 10;
  // Lid knob
  ctx.beginPath(); ctx.arc(0, -75, 26, 0, Math.PI * 2);
  ctx.fillStyle = '#945D3B'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
  // Lid dome
  ctx.beginPath(); ctx.ellipse(0, -25, 220, 60, 0, Math.PI, 0); ctx.closePath();
  const lidGrad = ctx.createLinearGradient(0, -85, 0, -25);
  lidGrad.addColorStop(0, '#FFEAD9'); lidGrad.addColorStop(1, '#DCA280');
  ctx.fillStyle = lidGrad; ctx.fill(); ctx.stroke();
  // Lid rim
  ctx.beginPath(); ctx.ellipse(0, -25, 230, 22, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#C88661'; ctx.fill(); ctx.stroke();
  ctx.restore();

  // 4. Plump Pot Mascot Body (Centered, Symmetrical, Squishy)
  ctx.save();
  ctx.shadowColor = 'rgba(100, 40, 15, 0.35)';
  ctx.shadowBlur = 40; ctx.shadowOffsetY = 24;

  // Symmetrical Handles (Independently drawn)
  function drawPotMascotEar(hx, hy) {
    ctx.save();
    roundRect(ctx, hx, hy, 90, 58, 26);
    ctx.fillStyle = '#D9824C';
    ctx.fill();
    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 14;
    ctx.stroke();
    ctx.restore();
  }
  drawPotMascotEar(150, 545);
  drawPotMascotEar(784, 545);

  // Pot Body
  ctx.beginPath();
  ctx.moveTo(220, 460);
  ctx.bezierCurveTo(190, 750, 310, 880, 512, 880);
  ctx.bezierCurveTo(714, 880, 834, 750, 804, 460);
  ctx.closePath();
  const potGrad = ctx.createLinearGradient(0, 440, 0, 880);
  potGrad.addColorStop(0, '#FFFDF8');
  potGrad.addColorStop(0.5, '#FCEEE2');
  potGrad.addColorStop(1, '#F3D2BB');
  ctx.fillStyle = potGrad; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 16; ctx.lineJoin = 'round'; ctx.stroke();

  // Pot Top Opening Rim
  ctx.beginPath(); ctx.ellipse(512, 455, 290, 62, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFF3E8'; ctx.fill(); ctx.stroke();

  // Bubbling stew inside rim
  ctx.beginPath(); ctx.ellipse(512, 458, 270, 48, 0, 0, Math.PI * 2);
  const soupGrad = ctx.createLinearGradient(0, 410, 0, 506);
  soupGrad.addColorStop(0, '#FFE373'); soupGrad.addColorStop(0.5, '#FFAB00'); soupGrad.addColorStop(1, '#E85D04');
  ctx.fillStyle = soupGrad; ctx.fill();

  // Ingredients peeking out
  ctx.save();
  ctx.beginPath(); ctx.arc(430, 450, 26, 0, Math.PI * 2); ctx.fillStyle = '#FFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 6; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 7; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(430, 450, 14, 0, Math.PI * 1.5); ctx.stroke();
  ctx.restore();

  // Star carrot
  ctx.save();
  ctx.translate(585, 455);
  ctx.fillStyle = '#FF7B00';
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 22, -Math.sin((18 + i * 72) * Math.PI / 180) * 22);
    ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 11, -Math.sin((54 + i * 72) * Math.PI / 180) * 11);
  }
  ctx.closePath(); ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 5; ctx.stroke();
  ctx.restore();
  ctx.restore();

  // 5. Pot Mascot's SUPER CUTE Anime Star Eyes!
  function drawChibiStarEye(ex, ey) {
    ctx.save();
    ctx.beginPath(); ctx.ellipse(ex, ey, 28, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#321B0E'; ctx.fill();

    const irisGrad = ctx.createLinearGradient(ex, ey - 30, ex, ey + 30);
    irisGrad.addColorStop(0, '#562E16'); irisGrad.addColorStop(0.7, '#BD692B'); irisGrad.addColorStop(1, '#FFAC38');
    ctx.beginPath(); ctx.ellipse(ex, ey + 4, 25, 29, 0, 0, Math.PI * 2); ctx.fillStyle = irisGrad; ctx.fill();

    drawAnimeStar(ex - 6, ey - 10, 12, '#FFFFFF');
    ctx.beginPath(); ctx.arc(ex + 9, ey + 12, 6, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();

    ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(ex, ey, 32, -Math.PI * 0.8, -Math.PI * 0.2); ctx.stroke();
    ctx.restore();
  }
  drawChibiStarEye(405, 580);
  drawChibiStarEye(619, 580);

  // Open mouth with tongue
  ctx.save();
  ctx.beginPath(); ctx.arc(512, 610, 24, 0, Math.PI); ctx.closePath();
  ctx.fillStyle = '#8B182B'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.beginPath(); ctx.arc(512, 622, 16, Math.PI * 0.9, Math.PI * 2.1);
  ctx.fillStyle = '#FF758F'; ctx.fill();
  ctx.restore();

  // Rosy cheeks with blush strokes (///)
  function drawChibiBlush(bx, by) {
    ctx.save();
    const blushGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 36);
    blushGrad.addColorStop(0, 'rgba(255, 95, 130, 0.8)');
    blushGrad.addColorStop(1, 'rgba(255, 95, 130, 0)');
    ctx.fillStyle = blushGrad;
    ctx.beginPath(); ctx.arc(bx, by, 36, 0, Math.PI * 2); ctx.fill();

    ctx.strokeStyle = 'rgba(255, 40, 80, 0.85)';
    ctx.lineWidth = 5; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(bx - 14, by - 8); ctx.lineTo(bx - 6, by + 10);
    ctx.moveTo(bx, by - 8); ctx.lineTo(bx + 8, by + 10);
    ctx.moveTo(bx + 14, by - 8); ctx.lineTo(bx + 22, by + 10);
    ctx.stroke();
    ctx.restore();
  }
  drawChibiBlush(335, 610);
  drawChibiBlush(689, 610);

  // 6. Cute Hands Hugging a Smooth Honey Wooden Ladle
  ctx.save();
  ctx.translate(512, 730);
  ctx.rotate(0.32);
  roundRect(ctx, -14, -130, 28, 200, 14);
  ctx.fillStyle = '#E29547'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, 70, 48, 38, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#E29547'; ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, 70, 36, 26, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFAA00'; ctx.fill();
  ctx.restore();

  // Stubby little round mascot hands
  function drawChibiHand(hx, hy) {
    ctx.save();
    ctx.shadowColor = 'rgba(66, 37, 19, 0.2)'; ctx.shadowBlur = 10;
    ctx.beginPath(); ctx.arc(hx, hy, 36, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFDF8'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
    ctx.restore();
  }
  drawChibiHand(415, 725);
  drawChibiHand(605, 725);

  // Cute red bow ribbon
  ctx.save();
  ctx.fillStyle = '#FF597B'; ctx.strokeStyle = lineCol; ctx.lineWidth = 8;
  ctx.beginPath(); ctx.moveTo(512, 510); ctx.lineTo(470, 495); ctx.lineTo(470, 525); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(512, 510); ctx.lineTo(554, 495); ctx.lineTo(554, 525); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(512, 510, 14, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.restore();

  // Top gloss
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  ctx.beginPath(); ctx.ellipse(512, 110, 600, 200, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; ctx.fill();
  ctx.restore();
`;

// Build and render each concept
const concepts = [
  {
    name: '咕嘟食谱_动漫温馨方案A_治愈猫猫大厨.png',
    script: scriptConceptA,
    artifact: 'anime_cozy_concept_A.png'
  },
  {
    name: '咕嘟食谱_动漫温馨方案B_吉卜力柴犬大厨.png',
    script: scriptConceptB,
    artifact: 'anime_cozy_concept_B.png'
  },
  {
    name: '咕嘟食谱_动漫温馨方案C_软萌咕嘟煲灵.png',
    script: scriptConceptC,
    artifact: 'anime_cozy_concept_C.png'
  }
];

const tempDir = path.join(__dirname, 'temp_render');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

console.log('Rendering 3 newly refined anime cozy icon concepts...');

concepts.forEach((concept, index) => {
  const htmlContent = createHtml(concept.script);
  const tempHtmlPath = path.join(tempDir, `concept_${index}.html`);
  const tempPngPath = path.join(tempDir, `concept_${index}.png`);
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

console.log('All 3 newly refined anime cozy icon concepts generated successfully!');
