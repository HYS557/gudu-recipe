const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// 方案 1: 咕嘟煲小萌厨 (Kawaii Anime Pot Chef)
const htmlAnime1 = `<!DOCTYPE html>
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
</style>
</head>
<body>
<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 背景超温润爱马仕暖阳渐变 -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFA86B"/>
      <stop offset="45%" stop-color="#FF7B42"/>
      <stop offset="100%" stop-color="#E8501E"/>
    </linearGradient>

    <!-- 柔和内发光 -->
    <radialGradient id="innerGlow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFF3EB" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#FF7B42" stop-opacity="0"/>
    </radialGradient>

    <!-- 砂锅奶陶渐变 -->
    <linearGradient id="potGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="60%" stop-color="#F7ECE1"/>
      <stop offset="100%" stop-color="#E5D1BE"/>
    </linearGradient>

    <!-- 浓金美味高汤渐变 -->
    <linearGradient id="soupGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFE066"/>
      <stop offset="50%" stop-color="#FFB703"/>
      <stop offset="100%" stop-color="#FB8500"/>
    </linearGradient>

    <!-- 腮红径向渐变 -->
    <radialGradient id="blush" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF6B8B" stop-opacity="0.85"/>
      <stop offset="70%" stop-color="#FF6B8B" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#FF6B8B" stop-opacity="0"/>
    </radialGradient>

    <!-- 阴影滤镜 -->
    <filter id="appShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#801C00" flood-opacity="0.32"/>
    </filter>
    <filter id="potShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#9C3A00" flood-opacity="0.28"/>
    </filter>
    <filter id="steamGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#FFFFFF" flood-opacity="0.8"/>
    </filter>
  </defs>

  <!-- iOS App Icon 圆角主背景容器 (1024x1024) -->
  <g filter="url(#appShadow)">
    <rect x="32" y="32" width="960" height="960" rx="240" fill="url(#bgGrad)"/>
    <rect x="32" y="32" width="960" height="960" rx="240" fill="url(#innerGlow)"/>
  </g>

  <!-- 背景治愈小星星闪光 -->
  <g fill="#FFFFFF" opacity="0.65">
    <path d="M 220 200 Q 220 225 195 225 Q 220 225 220 250 Q 220 225 245 225 Q 220 225 220 200 Z" />
    <path d="M 810 260 Q 810 280 790 280 Q 810 280 810 300 Q 810 280 830 280 Q 810 280 810 260 Z" />
    <circle cx="280" cy="300" r="8"/>
    <circle cx="760" cy="180" r="10"/>
    <circle cx="160" cy="450" r="6"/>
  </g>

  <!-- 升腾的梦幻蒸汽云与爱心 (咕嘟热气) -->
  <g filter="url(#steamGlow)">
    <!-- 左侧热气 -->
    <path d="M 370 290 C 330 240, 350 170, 400 130 C 420 110, 410 80, 390 65" 
          fill="none" stroke="#FFFFFF" stroke-width="26" stroke-linecap="round" opacity="0.85"/>
    <!-- 中间爱心热气 -->
    <path d="M 512 240 C 490 180, 520 140, 512 100" 
          fill="none" stroke="#FFFFFF" stroke-width="28" stroke-linecap="round" opacity="0.95"/>
    <!-- 爱心气泡 -->
    <path d="M 512 75 C 500 50, 460 55, 460 85 C 460 115, 512 145, 512 150 C 512 145, 564 115, 564 85 C 564 55, 524 50, 512 75 Z"
          fill="#FF4D6D" opacity="0.92"/>
    <!-- 右侧热气 -->
    <path d="M 640 280 C 680 230, 660 165, 620 125 C 605 110, 615 80, 635 65" 
          fill="none" stroke="#FFFFFF" stroke-width="24" stroke-linecap="round" opacity="0.85"/>
  </g>

  <!-- 砂锅主体萌物 (Gudu Pot) -->
  <g filter="url(#potShadow)">
    <!-- 砂锅左右两只圆滚滚的小耳朵 -->
    <ellipse cx="200" cy="590" rx="42" ry="26" fill="#E8DACB" stroke="#D3BCA6" stroke-width="8"/>
    <ellipse cx="824" cy="590" rx="42" ry="26" fill="#E8DACB" stroke="#D3BCA6" stroke-width="8"/>
    
    <!-- 砂锅圆滚滚大身体 -->
    <path d="M 230 520 
             C 210 730, 340 850, 512 850 
             C 684 850, 814 730, 794 520 
             Z" 
          fill="url(#potGrad)"/>

    <!-- 锅沿圆润厚唇 -->
    <ellipse cx="512" cy="520" rx="290" ry="68" fill="#FFFDF9" stroke="#E2CFBE" stroke-width="8"/>

    <!-- 锅内金灿灿冒泡高汤 -->
    <ellipse cx="512" cy="524" rx="270" ry="52" fill="url(#soupGrad)"/>

    <!-- 高汤里的美味食材 (日漫经典：鸣门卷小旋涡 + 胡萝卜星 + 嫩豆腐 + 翠绿香葱) -->
    <!-- 嫩豆腐块 -->
    <rect x="360" y="500" width="46" height="34" rx="8" fill="#FFFFFF" opacity="0.95" transform="rotate(-10, 360, 500)"/>
    <!-- 鸣门卷粉红小旋涡 -->
    <circle cx="450" cy="525" r="26" fill="#FFFFFF"/>
    <path d="M 450 514 A 11 11 0 0 1 458 528 A 6 6 0 0 1 448 528" fill="none" stroke="#FF5C8A" stroke-width="6" stroke-linecap="round"/>
    <!-- 翠绿葱花 -->
    <ellipse cx="560" cy="515" rx="14" ry="9" fill="#52B788" transform="rotate(15, 560, 515)"/>
    <ellipse cx="610" cy="530" rx="12" ry="8" fill="#52B788" transform="rotate(-25, 610, 530)"/>
    <!-- 橙色胡萝卜五角星 -->
    <path d="M 520 520 L 524 532 L 536 532 L 526 540 L 530 552 L 520 544 L 510 552 L 514 540 L 504 532 L 516 532 Z" fill="#FF7B00"/>
    
    <!-- 浓汤翻滚咕嘟咕嘟小气泡 -->
    <circle cx="400" cy="535" r="8" fill="#FFF" opacity="0.8"/>
    <circle cx="490" cy="505" r="7" fill="#FFF" opacity="0.75"/>
    <circle cx="580" cy="538" r="9" fill="#FFF" opacity="0.8"/>
    <circle cx="650" cy="518" r="6" fill="#FFF" opacity="0.7"/>
  </g>

  <!-- 砂锅正面：超级萌的动漫治愈表情 (Kawaii Smiling Face) -->
  <!-- 左眼：动漫星光闪闪大眼 -->
  <g transform="translate(385, 620)">
    <ellipse cx="0" cy="0" rx="22" ry="28" fill="#3D2619"/>
    <circle cx="6" cy="-8" r="10" fill="#FFFFFF"/>
    <circle cx="-6" cy="10" r="5" fill="#FFFFFF"/>
  </g>

  <!-- 右眼：动漫星光闪闪大眼 -->
  <g transform="translate(639, 620)">
    <ellipse cx="0" cy="0" rx="22" ry="28" fill="#3D2619"/>
    <circle cx="6" cy="-8" r="10" fill="#FFFFFF"/>
    <circle cx="-6" cy="10" r="5" fill="#FFFFFF"/>
  </g>

  <!-- 粉嘟嘟的大腮红 (Blushing Cheeks) -->
  <circle cx="340" cy="655" r="36" fill="url(#blush)"/>
  <circle cx="684" cy="655" r="36" fill="url(#blush)"/>

  <!-- 可爱猫咪元气笑嘴 (ω 弯弯嘴) -->
  <path d="M 482 660 C 496 685, 510 680, 512 668 C 514 680, 528 685, 542 660" 
        fill="none" stroke="#3D2619" stroke-width="9" stroke-linecap="round"/>

  <!-- 吐出的可爱小舌头 -->
  <path d="M 502 675 C 502 692, 522 692, 522 675 Z" fill="#FF5C8A"/>

  <!-- 俏皮歪戴在砂锅上方的白色小厨师帽 (Chef Hat) -->
  <g transform="translate(320, 240) rotate(-16)">
    <!-- 帽子底座红缎带 -->
    <rect x="50" y="170" width="160" height="34" rx="14" fill="#E63946"/>
    <!-- 蓬松的厨师云朵帽顶 -->
    <path d="M 40 175 
             C 10 130, 40 70, 90 75 
             C 100 25, 160 20, 180 65 
             C 230 45, 270 100, 240 150 
             C 255 170, 230 185, 210 175 
             Z" 
          fill="#FFFFFF" filter="url(#potShadow)"/>
    <path d="M 80 110 Q 130 140 130 170" stroke="#E5E5E5" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 160 90 Q 175 130 180 170" stroke="#E5E5E5" stroke-width="6" fill="none" stroke-linecap="round"/>
  </g>

  <!-- 锅盖像翘起的小耳朵倚靠在旁边 -->
  <g transform="translate(680, 400) rotate(35)" filter="url(#potShadow)">
    <ellipse cx="0" cy="0" rx="130" ry="38" fill="#FFFDF9" stroke="#E2CFBE" stroke-width="8"/>
    <!-- 锅盖顶端金色手柄小球 -->
    <circle cx="0" cy="-35" r="24" fill="#F4A261"/>
    <circle cx="-5" cy="-40" r="7" fill="#FFE3D1"/>
  </g>

</svg>
</body>
</html>`;

// 方案 2: 日漫温馨餐桌 · 治愈炊烟 (Studio Ghibli Cozy Stew Pot)
const htmlAnime2 = `<!DOCTYPE html>
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
</style>
</head>
<body>
<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 背景：温柔奶杏色日系暖阳渐变 -->
    <linearGradient id="bgGhibli" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF5EB"/>
      <stop offset="60%" stop-color="#FED7AA"/>
      <stop offset="100%" stop-color="#FDBA74"/>
    </linearGradient>

    <!-- 原木餐桌质感 -->
    <linearGradient id="tableGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E2B27E"/>
      <stop offset="100%" stop-color="#BA8448"/>
    </linearGradient>

    <!-- 日式深釉陶瓷砂锅 (深蓝靛青/复古朱红) -->
    <linearGradient id="potDonabe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="70%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#9A3412"/>
    </linearGradient>

    <!-- 醇厚奶白浓郁高汤 -->
    <radialGradient id="soupRich" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#FFFDF0"/>
      <stop offset="60%" stop-color="#FDE68A"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </radialGradient>

    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#7C2D12" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- iOS App Icon 外框 (1024x1024) -->
  <g filter="url(#cardShadow)">
    <rect x="32" y="32" width="960" height="960" rx="240" fill="url(#bgGhibli)"/>
  </g>

  <!-- 温暖木桌台面 -->
  <path d="M 32 720 Q 512 700 992 720 L 992 992 L 32 992 Z" fill="url(#tableGrad)"/>
  <!-- 桌布格纹装饰 (小清新) -->
  <line x1="32" y1="730" x2="992" y2="730" stroke="#FDE68A" stroke-width="6" stroke-dasharray="16 12" opacity="0.6"/>

  <!-- 飘逸的吉卜力画风蒸汽 (飘出快乐的笑脸与星尘) -->
  <g fill="none" stroke="#FFFFFF" stroke-linecap="round" opacity="0.95">
    <path d="M 360 380 C 280 280, 360 160, 460 100" stroke-width="26"/>
    <path d="M 520 340 C 580 240, 500 140, 520 60" stroke-width="32"/>
    <path d="M 660 380 C 740 280, 680 160, 580 90" stroke-width="24"/>
  </g>
  <!-- 蒸汽顶端可爱的治愈小笑脸 -->
  <circle cx="520" cy="50" r="28" fill="#FFFFFF"/>
  <path d="M 510 46 Q 514 42 518 46" stroke="#C2410C" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 522 46 Q 526 42 530 46" stroke="#C2410C" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 514 54 Q 520 60 526 54" stroke="#C2410C" stroke-width="4" fill="none" stroke-linecap="round"/>

  <!-- 散落的微光治愈星尘 -->
  <circle cx="320" cy="200" r="10" fill="#FBBF24"/>
  <circle cx="420" cy="130" r="8" fill="#FFF"/>
  <circle cx="680" cy="180" r="12" fill="#FBBF24"/>
  <circle cx="780" cy="260" r="9" fill="#FFF"/>

  <!-- 砂锅底座与深釉煲身 -->
  <g>
    <!-- 砂锅两耳 -->
    <rect x="150" y="550" width="70" height="34" rx="17" fill="#7C2D12"/>
    <rect x="804" y="550" width="70" height="34" rx="17" fill="#7C2D12"/>

    <!-- 砂锅主体 -->
    <path d="M 190 480 
             C 170 750, 320 830, 512 830 
             C 704 830, 854 750, 834 480 
             Z" 
          fill="url(#potDonabe)"/>

    <!-- 砂锅釉面高光线条 (立体手绘质感) -->
    <path d="M 230 520 C 215 690, 300 780, 440 810" stroke="#FB923C" stroke-width="12" fill="none" opacity="0.65" stroke-linecap="round"/>

    <!-- 锅口金色浓汤 -->
    <ellipse cx="512" cy="480" rx="310" ry="76" fill="#7C2D12"/>
    <ellipse cx="512" cy="482" rx="290" ry="64" fill="url(#soupRich)"/>

    <!-- 丰富治愈的日漫美食原料盛宴 -->
    <!-- 十字花刀鲜香菇 -->
    <circle cx="380" cy="470" r="38" fill="#854D0E"/>
    <line x1="380" y1="440" x2="380" y2="500" stroke="#FEF08A" stroke-width="7" stroke-linecap="round"/>
    <line x1="350" y1="470" x2="410" y2="470" stroke="#FEF08A" stroke-width="7" stroke-linecap="round"/>

    <!-- 鲜嫩小白菜心 -->
    <path d="M 430 460 C 450 430, 490 435, 480 470 C 470 495, 440 485, 430 460 Z" fill="#84CC16"/>
    <path d="M 455 455 C 470 440, 495 445, 490 475" fill="#4D7C0F"/>

    <!-- 鸣门卷 (拉面经典粉白旋涡鱼板) -->
    <circle cx="560" cy="465" r="32" fill="#FFFFFF"/>
    <path d="M 560 452 A 13 13 0 0 1 570 468 A 7 7 0 0 1 558 468" fill="none" stroke="#F43F5E" stroke-width="7" stroke-linecap="round"/>

    <!-- 鲜大虾仁红尾 -->
    <path d="M 640 465 C 670 435, 710 455, 680 485 C 655 510, 625 490, 640 465 Z" fill="#F87171"/>
    <path d="M 690 445 L 715 435 L 705 460" fill="#EF4444"/>

    <!-- 咕嘟翻滚小气泡 -->
    <circle cx="480" cy="505" r="10" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="515" cy="465" r="8" fill="#FFFFFF" opacity="0.85"/>
    <circle cx="600" cy="500" r="12" fill="#FFFFFF" opacity="0.9"/>
  </g>

  <!-- 锅身上手绘温暖小脸 (眨眼比耶超级治愈) -->
  <g transform="translate(512, 650)">
    <!-- 眨眼 (左眼wink，右眼笑成弯月) -->
    <path d="M -130 -15 L -90 10 L -130 35" fill="none" stroke="#FFF" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 90 20 C 105 -5, 135 -5, 150 20" fill="none" stroke="#FFF" stroke-width="12" stroke-linecap="round"/>

    <!-- 脸蛋大红晕 -->
    <ellipse cx="-110" cy="50" rx="34" ry="22" fill="#FF85A1" opacity="0.75"/>
    <ellipse cx="120" cy="50" rx="34" ry="22" fill="#FF85A1" opacity="0.75"/>

    <!-- 开心大笑嘴 -->
    <path d="M -30 25 Q 0 75 30 25 Z" fill="#FFFFFF"/>
    <path d="M -15 48 Q 0 65 15 48 Z" fill="#FF4365"/>
  </g>

  <!-- 砂锅旁半掀起的大陶盖 -->
  <g transform="translate(680, 360) rotate(28)">
    <ellipse cx="0" cy="0" rx="140" ry="42" fill="#C2410C" stroke="#7C2D12" stroke-width="10"/>
    <ellipse cx="0" cy="-6" rx="120" ry="32" fill="#EA580C"/>
    <!-- 盖顶把手圆珠 -->
    <circle cx="0" cy="-45" r="26" fill="#FBBF24"/>
    <circle cx="-6" cy="-52" r="8" fill="#FFF"/>
  </g>

</svg>
</body>
</html>`;

const tempDir = path.join(__dirname, '../scratch');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const html1Path = path.join(tempDir, 'anime1.html');
const html2Path = path.join(tempDir, 'anime2.html');

fs.writeFileSync(html1Path, htmlAnime1, 'utf8');
fs.writeFileSync(html2Path, htmlAnime2, 'utf8');

const out1Png = path.join(tempDir, 'anime1.png');
const out2Png = path.join(tempDir, 'anime2.png');

console.log('Rendering Anime Icon 1 (咕嘟煲小萌厨)...');
execSync(`"${edgePath}" --headless --screenshot="${out1Png}" --window-size=1024,1024 --default-background-color=00000000 "${html1Path}"`);

console.log('Rendering Anime Icon 2 (日漫吉卜力·咕嘟暖心煲)...');
execSync(`"${edgePath}" --headless --screenshot="${out2Png}" --window-size=1024,1024 --default-background-color=00000000 "${html2Path}"`);

// 拷贝到用户桌面供审核
const desktop1 = 'C:\\Users\\Admin1\\Desktop\\咕嘟食谱_动漫温馨图标方案1_小萌厨.png';
const desktop2 = 'C:\\Users\\Admin1\\Desktop\\咕嘟食谱_动漫温馨图标方案2_吉卜力暖心煲.png';

fs.copyFileSync(out1Png, desktop1);
fs.copyFileSync(out2Png, desktop2);

console.log('Successfully saved to desktop:');
console.log('-', desktop1);
console.log('-', desktop2);
