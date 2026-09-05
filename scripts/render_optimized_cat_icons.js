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

// Common helper functions
const commonHelpers = `
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
`;

// =============================================================================
// 方案 A-1: 【纯净雪白萌猫大厨 · 金星主厨帽】 (Pure White Kitty Chef - Clean & Kawaii)
// =============================================================================
const scriptA1 = `
  ${commonHelpers}

  const lineCol = '#422513';
  const catWhite = '#FFFFFF';
  const earPink = '#FFAAA6';

  // 1. App Icon Squircle Background (Creamy butter-honey to warm apricot)
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

  // Warm ambient sunlit radial aura
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  const sunGlow = ctx.createRadialGradient(512, 400, 60, 512, 400, 520);
  sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
  sunGlow.addColorStop(0.5, 'rgba(255, 240, 210, 0.4)');
  sunGlow.addColorStop(1, 'rgba(255, 130, 60, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(32, 32, 960, 960);

  // Twinkling stars & floating bokeh bubbles
  drawAnimeStar(190, 190, 28, '#FFFFFF');
  drawAnimeStar(830, 200, 30, '#FFFFFF');
  drawAnimeStar(220, 440, 18, '#FFF4D6');
  drawAnimeStar(820, 440, 20, '#FFF4D6');
  drawAnimeStar(710, 130, 18, '#FFFFFF');
  drawAnimeStar(310, 130, 16, '#FFFFFF');

  // Floating gentle hearts
  drawAnimeHeart(250, 290, 0.8, 'rgba(255, 89, 123, 0.7)');
  drawAnimeHeart(780, 290, 0.9, 'rgba(255, 89, 123, 0.7)');

  // 2. Rising Warm Silk Steam with Glowing Heart
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
  ctx.lineWidth = 20;
  ctx.lineCap = 'round';
  ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
  ctx.shadowBlur = 20;

  // Left steam swirl
  ctx.beginPath();
  ctx.moveTo(330, 230);
  ctx.bezierCurveTo(270, 150, 335, 100, 385, 75);
  ctx.stroke();

  // Right steam swirl
  ctx.beginPath();
  ctx.moveTo(694, 230);
  ctx.bezierCurveTo(754, 150, 689, 100, 639, 75);
  ctx.stroke();

  // Center steam
  ctx.beginPath();
  ctx.moveTo(512, 160);
  ctx.bezierCurveTo(485, 115, 535, 85, 512, 60);
  ctx.stroke();

  // Top Glowing Heart
  drawAnimeHeart(512, 50, 1.4, '#FF4D6D');
  ctx.restore();

  // 3. Cat Mascot: Pure Snow-White Anime Kitty Chef (No weird orange patch!)
  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // Ears: Soft rounded anime triangle ears
  // Left Ear
  ctx.beginPath();
  ctx.moveTo(360, 345);
  ctx.lineTo(315, 200);
  ctx.quadraticCurveTo(365, 210, 420, 270);
  ctx.closePath();
  ctx.fillStyle = catWhite;
  ctx.fill();
  ctx.stroke();

  // Left Ear Inner Pink
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
  ctx.fillStyle = catWhite;
  ctx.fill();
  ctx.stroke();

  // Right Ear Inner Pink
  ctx.beginPath();
  ctx.moveTo(662, 325);
  ctx.lineTo(689, 225);
  ctx.quadraticCurveTo(654, 233, 619, 273);
  ctx.closePath();
  ctx.fillStyle = earPink;
  ctx.fill();

  // Cat Head Body: Plump, fluffy, perfectly round and snowy white!
  ctx.beginPath();
  ctx.ellipse(512, 390, 192, 162, 0, 0, Math.PI * 2);
  ctx.fillStyle = catWhite;
  ctx.fill();
  ctx.stroke();

  // Fluffy cheek tufts on sides
  ctx.beginPath();
  ctx.moveTo(325, 410); ctx.lineTo(305, 425); ctx.lineTo(325, 435);
  ctx.moveTo(699, 410); ctx.lineTo(719, 425); ctx.lineTo(699, 435);
  ctx.stroke();

  // Upgraded Puffy Chef Hat with Golden Five-Point Star Badge!
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.2)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 10;
  // Hat Band (Warm Rose Pink)
  roundRect(ctx, 435, 215, 154, 40, 15);
  ctx.fillStyle = '#FF597B';
  ctx.fill();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 10;
  ctx.stroke();

  // Golden Star Badge in Center of Band
  drawAnimeStar(512, 235, 15, '#FFD166');
  ctx.beginPath();
  ctx.arc(512, 235, 6, 0, Math.PI * 2);
  ctx.fillStyle = '#FFF';
  ctx.fill();

  // Hat Puffy Dome
  ctx.beginPath();
  ctx.moveTo(435, 215);
  ctx.bezierCurveTo(390, 190, 400, 125, 455, 120);
  ctx.bezierCurveTo(480, 75, 544, 75, 569, 120);
  ctx.bezierCurveTo(624, 125, 634, 190, 589, 215);
  ctx.closePath();
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.stroke();

  // Subtle hat fold shadow lines
  ctx.strokeStyle = 'rgba(230, 220, 210, 0.9)';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(475, 135); ctx.quadraticCurveTo(485, 175, 480, 210);
  ctx.moveTo(545, 135); ctx.quadraticCurveTo(535, 175, 540, 210);
  ctx.stroke();
  ctx.restore();

  // Sparkling Anime Cat Eyes (Warm Amber-Honey Jewels)
  function drawCatAnimeEye(ex, ey, isLeft) {
    ctx.save();
    // Base dark outline
    ctx.beginPath();
    ctx.ellipse(ex, ey, 27, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2C160B';
    ctx.fill();

    // Warm amber gradient iris
    const eyeGrad = ctx.createLinearGradient(ex, ey - 30, ex, ey + 30);
    eyeGrad.addColorStop(0, '#502812');
    eyeGrad.addColorStop(0.65, '#C46D29');
    eyeGrad.addColorStop(1, '#FFAE3D');
    ctx.beginPath();
    ctx.ellipse(ex, ey + 4, 24, 28, 0, 0, Math.PI * 2);
    ctx.fillStyle = eyeGrad;
    ctx.fill();

    // Pupil
    ctx.beginPath();
    ctx.ellipse(ex, ey + 4, 14, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#180B04';
    ctx.fill();

    // Big starry highlight
    ctx.beginPath(); ctx.arc(ex - 8, ey - 10, 10, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    // Little sparkle highlight
    ctx.beginPath(); ctx.arc(ex + 8, ey + 12, 5.5, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    // Lower crescent light catch
    ctx.beginPath();
    ctx.arc(ex, ey + 16, 12, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 230, 180, 0.8)';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Soft curved anime eyelash
    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.beginPath();
    if (isLeft) {
      ctx.arc(ex, ey, 31, -Math.PI * 0.78, -Math.PI * 0.18);
    } else {
      ctx.arc(ex, ey, 31, -Math.PI * 0.82, -Math.PI * 0.22);
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

  // W-mouth :3 Smiling Cat Face
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(512, 427);
  ctx.moveTo(486, 429); ctx.quadraticCurveTo(499, 445, 512, 427);
  ctx.quadraticCurveTo(525, 445, 538, 429);
  ctx.stroke();

  // Cute pink tongue
  ctx.beginPath();
  ctx.arc(512, 436, 9, 0, Math.PI);
  ctx.fillStyle = '#FF758F';
  ctx.fill();
  ctx.stroke();

  // Rosy cheeks with anime blush streaks (///)
  function drawCatBlush(bx, by) {
    ctx.save();
    const blushGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 36);
    blushGrad.addColorStop(0, 'rgba(255, 105, 140, 0.85)');
    blushGrad.addColorStop(1, 'rgba(255, 105, 140, 0)');
    ctx.fillStyle = blushGrad;
    ctx.beginPath(); ctx.ellipse(bx, by, 36, 24, 0, 0, Math.PI * 2); ctx.fill();

    ctx.strokeStyle = 'rgba(255, 50, 95, 0.8)';
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

  // Symmetrical Pot Ear Handles (Independently rendered!)
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

  // 5. Ghibli-Style Anime Food Delicacies inside the Pot
  // Halved Soft-boiled Egg (Ajitsuke Tamago)
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
  // Glossy reflection
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
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 10;
    ctx.stroke();

    // Pink Paw Beans
    ctx.fillStyle = '#FFAAA6';
    ctx.beginPath(); ctx.ellipse(px, py + 8, 14, 10, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  drawCatPaw(320, 550);
  drawCatPaw(704, 550);

  // 7. Pot Belly Design: Warm Ceramic Heart Emblem
  ctx.save();
  // Gold & Coral Heart Badge on Pot
  drawAnimeHeart(512, 730, 1.2, '#FF597B');
  // Decorative warm glaze arc
  ctx.strokeStyle = 'rgba(255, 245, 235, 0.8)';
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(512, 760, 80, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();

  // Subtle cute blush spots on pot
  ctx.fillStyle = 'rgba(255, 110, 110, 0.35)';
  ctx.beginPath(); ctx.arc(395, 755, 16, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(629, 755, 16, 0, Math.PI * 2); ctx.fill();
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
// 方案 A-2: 【焦糖暖耳猫猫大厨 · 暖红爱心领巾】 (Soft Caramel-Tipped Ears & Red Scarf)
// =============================================================================
const scriptA2 = `
  ${commonHelpers}

  const lineCol = '#422513';
  const catWhite = '#FFFFFF';
  const earPink = '#FFAAA6';

  // 1. App Icon Squircle Background
  ctx.save();
  ctx.shadowColor = 'rgba(215, 85, 20, 0.35)';
  ctx.shadowBlur = 48;
  ctx.shadowOffsetY = 24;
  roundRect(ctx, 32, 32, 960, 960, 220);
  const bgGrad = ctx.createLinearGradient(0, 32, 0, 992);
  bgGrad.addColorStop(0, '#FFFDF8');
  bgGrad.addColorStop(0.35, '#FFEBD9');
  bgGrad.addColorStop(0.75, '#FFC298');
  bgGrad.addColorStop(1, '#FF8A4E');
  ctx.fillStyle = bgGrad;
  ctx.fill();
  ctx.restore();

  // Warm ambient sunlit radial aura
  ctx.save();
  roundRect(ctx, 32, 32, 960, 960, 220);
  ctx.clip();
  const sunGlow = ctx.createRadialGradient(512, 400, 60, 512, 400, 520);
  sunGlow.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
  sunGlow.addColorStop(0.5, 'rgba(255, 240, 210, 0.4)');
  sunGlow.addColorStop(1, 'rgba(255, 130, 60, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(32, 32, 960, 960);

  // Twinkling stars & floating sparkles
  drawAnimeStar(190, 190, 28, '#FFFFFF');
  drawAnimeStar(830, 200, 30, '#FFFFFF');
  drawAnimeStar(220, 440, 18, '#FFF4D6');
  drawAnimeStar(820, 440, 20, '#FFF4D6');
  drawAnimeStar(710, 130, 18, '#FFFFFF');
  drawAnimeStar(310, 130, 16, '#FFFFFF');

  // Floating gentle hearts
  drawAnimeHeart(250, 290, 0.8, 'rgba(255, 89, 123, 0.7)');
  drawAnimeHeart(780, 290, 0.9, 'rgba(255, 89, 123, 0.7)');

  // 2. Rising Warm Silk Steam with Glowing Heart
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

  // 3. Cat Mascot: Soft Caramel-Tipped Ears Kitty
  ctx.save();
  ctx.strokeStyle = lineCol;
  ctx.lineWidth = 14;
  ctx.lineJoin = 'round';

  // Ears: with soft caramel tips (natural, soft, like a roasted marshmallow!)
  // Left Ear
  ctx.beginPath();
  ctx.moveTo(360, 345);
  ctx.lineTo(315, 200);
  ctx.quadraticCurveTo(365, 210, 420, 270);
  ctx.closePath();
  ctx.fillStyle = catWhite;
  ctx.fill();
  ctx.stroke();

  // Soft caramel gradient tip on left ear
  ctx.save();
  ctx.clip();
  const earGrad = ctx.createLinearGradient(315, 200, 360, 270);
  earGrad.addColorStop(0, '#FFA552');
  earGrad.addColorStop(0.7, '#FFD4A3');
  earGrad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = earGrad;
  ctx.fillRect(300, 190, 120, 90);
  ctx.restore();

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
  ctx.fillStyle = catWhite;
  ctx.fill();
  ctx.stroke();

  // Soft caramel gradient tip on right ear
  ctx.save();
  ctx.clip();
  const earGradR = ctx.createLinearGradient(709, 200, 664, 270);
  earGradR.addColorStop(0, '#FFA552');
  earGradR.addColorStop(0.7, '#FFD4A3');
  earGradR.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = earGradR;
  ctx.fillRect(600, 190, 120, 90);
  ctx.restore();

  // Right Inner Pink
  ctx.beginPath();
  ctx.moveTo(662, 325);
  ctx.lineTo(689, 225);
  ctx.quadraticCurveTo(654, 233, 619, 273);
  ctx.closePath();
  ctx.fillStyle = earPink;
  ctx.fill();

  // Cat Head Body
  ctx.beginPath();
  ctx.ellipse(512, 390, 192, 162, 0, 0, Math.PI * 2);
  ctx.fillStyle = catWhite;
  ctx.fill();
  ctx.stroke();

  // Fluffy cheek tufts
  ctx.beginPath();
  ctx.moveTo(325, 410); ctx.lineTo(305, 425); ctx.lineTo(325, 435);
  ctx.moveTo(699, 410); ctx.lineTo(719, 425); ctx.lineTo(699, 435);
  ctx.stroke();

  // Chef Hat with Tiny Golden Spoon motif
  ctx.save();
  ctx.shadowColor = 'rgba(66, 37, 19, 0.2)';
  ctx.shadowBlur = 18; ctx.shadowOffsetY = 10;
  roundRect(ctx, 435, 215, 154, 40, 15);
  ctx.fillStyle = '#FF597B';
  ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();

  // Tiny Golden Wooden Spoon badge
  ctx.save();
  ctx.translate(512, 235);
  ctx.rotate(0.4);
  roundRect(ctx, -3, -12, 6, 24, 3);
  ctx.fillStyle = '#FFD166'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(0, 12, 8, 6, 0, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  // Hat Puffy Dome
  ctx.beginPath();
  ctx.moveTo(435, 215);
  ctx.bezierCurveTo(390, 190, 400, 125, 455, 120);
  ctx.bezierCurveTo(480, 75, 544, 75, 569, 120);
  ctx.bezierCurveTo(624, 125, 634, 190, 589, 215);
  ctx.closePath();
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Sparkling Anime Eyes
  function drawCatAnimeEye(ex, ey, isLeft) {
    ctx.save();
    ctx.beginPath(); ctx.ellipse(ex, ey, 27, 36, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2C160B'; ctx.fill();

    const eyeGrad = ctx.createLinearGradient(ex, ey - 30, ex, ey + 30);
    eyeGrad.addColorStop(0, '#502812');
    eyeGrad.addColorStop(0.65, '#C46D29');
    eyeGrad.addColorStop(1, '#FFAE3D');
    ctx.beginPath(); ctx.ellipse(ex, ey + 4, 24, 28, 0, 0, Math.PI * 2);
    ctx.fillStyle = eyeGrad; ctx.fill();

    ctx.beginPath(); ctx.ellipse(ex, ey + 4, 14, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#180B04'; ctx.fill();

    ctx.beginPath(); ctx.arc(ex - 8, ey - 10, 10, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.beginPath(); ctx.arc(ex + 8, ey + 12, 5.5, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();

    ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.beginPath();
    if (isLeft) {
      ctx.arc(ex, ey, 31, -Math.PI * 0.78, -Math.PI * 0.18);
    } else {
      ctx.arc(ex, ey, 31, -Math.PI * 0.82, -Math.PI * 0.22);
    }
    ctx.stroke();
    ctx.restore();
  }
  drawCatAnimeEye(440, 380, true);
  drawCatAnimeEye(584, 380, false);

  // Nose
  ctx.save();
  ctx.fillStyle = '#FF758F';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(503, 403);
  ctx.quadraticCurveTo(512, 400, 521, 403);
  ctx.closePath();
  ctx.fill();

  // W-mouth
  ctx.strokeStyle = lineCol; ctx.lineWidth = 7; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(512, 415); ctx.lineTo(512, 427);
  ctx.moveTo(486, 429); ctx.quadraticCurveTo(499, 445, 512, 427);
  ctx.quadraticCurveTo(525, 445, 538, 429);
  ctx.stroke();

  // Tongue
  ctx.beginPath(); ctx.arc(512, 436, 9, 0, Math.PI); ctx.fillStyle = '#FF758F'; ctx.fill(); ctx.stroke();

  // Blush (///)
  function drawCatBlush(bx, by) {
    ctx.save();
    const blushGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 36);
    blushGrad.addColorStop(0, 'rgba(255, 105, 140, 0.85)');
    blushGrad.addColorStop(1, 'rgba(255, 105, 140, 0)');
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

  // Golden Delicious Broth
  ctx.beginPath(); ctx.ellipse(512, 579, 270, 54, 0, 0, Math.PI * 2);
  const soupGrad = ctx.createLinearGradient(0, 525, 0, 633);
  soupGrad.addColorStop(0, '#FFE26A'); soupGrad.addColorStop(0.5, '#FFAC00'); soupGrad.addColorStop(1, '#E85800');
  ctx.fillStyle = soupGrad; ctx.fill();
  ctx.restore();

  // 5. Anime Food Delicacies
  // Egg
  ctx.save();
  ctx.translate(415, 567); ctx.rotate(-0.12);
  ctx.beginPath(); ctx.ellipse(0, 0, 52, 40, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFDF2'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  const yolkGrad = ctx.createRadialGradient(-4, -4, 5, 0, 0, 27);
  yolkGrad.addColorStop(0, '#FFF587'); yolkGrad.addColorStop(0.4, '#FFA000'); yolkGrad.addColorStop(1, '#E85800');
  ctx.beginPath(); ctx.arc(0, 0, 27, 0, Math.PI * 2); ctx.fillStyle = yolkGrad; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-8, -8, 8, 5, -0.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; ctx.fill();
  ctx.restore();

  // Narutomaki Swirl
  ctx.save();
  ctx.translate(585, 571);
  ctx.beginPath(); ctx.arc(0, 0, 36, 0, Math.PI * 2); ctx.fillStyle = '#FFFFFF'; ctx.fill();
  ctx.strokeStyle = lineCol; ctx.lineWidth = 8; ctx.stroke();
  ctx.strokeStyle = '#FF5C8A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, 0, 20, 0, Math.PI * 1.6); ctx.stroke();
  ctx.restore();

  // Shiitake Mushroom
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

  // Scallion Negi
  function drawNegi(nx, ny, rot) {
    ctx.save(); ctx.translate(nx, ny); ctx.rotate(rot);
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

  // 6. Cute White Cat Paws
  function drawCatPaw(px, py) {
    ctx.save();
    ctx.shadowColor = 'rgba(66, 37, 19, 0.22)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;
    ctx.beginPath(); ctx.ellipse(px, py, 38, 28, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF'; ctx.fill();
    ctx.strokeStyle = lineCol; ctx.lineWidth = 10; ctx.stroke();
    ctx.fillStyle = '#FFAAA6'; ctx.beginPath(); ctx.ellipse(px, py + 8, 14, 10, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  drawCatPaw(320, 550);
  drawCatPaw(704, 550);

  // 7. Sweet Ceramic Motif on Pot
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
    name: '咕嘟食谱_方案A1_纯白萌猫大厨(推荐).png',
    script: scriptA1,
    artifact: 'cat_chef_opt_A1.png'
  },
  {
    name: '咕嘟食谱_方案A2_焦糖暖耳猫大厨.png',
    script: scriptA2,
    artifact: 'cat_chef_opt_A2.png'
  }
];

const tempDir = path.join(__dirname, 'temp_render');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

console.log('Rendering optimized Plan A Cat Chef icons...');

concepts.forEach((concept, index) => {
  const htmlContent = createHtml(concept.script);
  const tempHtmlPath = path.join(tempDir, `cat_opt_${index}.html`);
  const tempPngPath = path.join(tempDir, `cat_opt_${index}.png`);
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

console.log('Optimized Cat Chef icons generated successfully!');
