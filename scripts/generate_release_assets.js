const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const { execSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const desktopDir = 'C:\\Users\\Admin1\\Desktop';
const huashuDir = path.join(desktopDir, '话术');
const rootDir = path.resolve(__dirname, '..');

if (!fs.existsSync(huashuDir)) {
  fs.mkdirSync(huashuDir, { recursive: true });
}

const localIp = '192.168.1.56';
const localPort = 8080;
const localDownloadUrl = `http://${localIp}:${localPort}/download.html`;
const localApkUrl = `http://${localIp}:${localPort}/gudu-recipe.apk`;

// =============================================================================
// 1. 生成桌面【话术文件夹】内的苹果安装文案及全套分享话术
// =============================================================================
const appleGuideContent = `================================================================================
           🍲《咕嘟食谱》苹果 iPhone / iPad 专属安装指南与微信分享话术
================================================================================

【为什么苹果用户不用下载大安装包？】
《咕嘟食谱》针对 iOS 深度适配了苹果官方标准的 PWA（渐进式原生应用）技术。
无需繁琐的 App Store 审核，无需下载几百兆安装包，在 Safari 中只需【轻点两下】，
手机桌面就会永久生成一个带【猫猫大厨图标】的独立 App！
打开全屏沉浸无网址栏，支持断网离线查菜谱，体验与 App Store 下载的原生 App 完全一致！

--------------------------------------------------------------------------------
📱【一键复制给朋友的微信私聊话术】（直接复制下方内容发给 iPhone 朋友）：
--------------------------------------------------------------------------------

嗨！给你安利一个我最近在用的宝藏做菜神器「咕嘟食谱」🍲
涵盖中华34省地道家常、慢熬靓汤、减脂餐和面食大观，还能智能查冰箱剩菜、一键把买菜清单同步微信！

👉 苹果手机极速安装只要2步（无需下载大安装包）：
1. 用 Safari 浏览器打开这个链接：
   ${localDownloadUrl}
2. 点击屏幕底部中间的【分享按钮 ⎋】，往下滑选择【添加到主屏幕 ⊞】。

搞定！你手机桌面上就会多出一个超萌的「猫猫大厨」图标，点开就是全屏独立 App，断网也能看，赶紧试试看今晚做啥好吃的！😋

--------------------------------------------------------------------------------
✨【适合发朋友圈 / 家人微信群的话术】（直接复制）：
--------------------------------------------------------------------------------

唯有美食与爱不可辜负！🍲
整理了好久的私房做菜神器《咕嘟食谱》终于打包好了～
从国宴名菜到老火靓汤，甚至连你家冰箱还剩两根葱都能反向查出拿手好菜，再也不用为“今天吃什么”发愁了！

📱 苹果 iPhone 用户安装：
点击链接在 Safari 打开 -> 点底部分享 -> 选择【添加到主屏幕】即可在桌面生成独立 App！
🔗 安装链接：${localDownloadUrl}

🤖 安卓用户直接安装：
直接扫码或向我索取安装包（APK），几秒钟就能装好。
做饭从此不翻车，快来一起咕嘟咕嘟吧！👨‍🍳

--------------------------------------------------------------------------------
💡【公网云端长久部署建议（免开电脑）】
--------------------------------------------------------------------------------
上述链接为当前局域网极速直连地址（手机与电脑连接同一 Wi-Fi 时秒开秒装）。
如果您希望以后无论走到哪里、任何外网朋友随时随地都能安装：
只需将本项目文件夹上传至任何免费静态托管平台（如 Vercel、Cloudflare Pages 或腾讯云/阿里云对象存储）：
1. 免费开通 Vercel 或 Cloudflare Pages；
2. 关联文件夹后会自动生成一个永久有效的 https://gudu-recipe.vercel.app 域名；
3. 将上述话术中的链接替换为该域名，全国各地的苹果用户即可随时随地添加到手机主屏幕！

================================================================================
`;

const huashuFilePath = path.join(huashuDir, '咕嘟食谱_苹果iPhone用户安装指南与微信分享话术.txt');
fs.writeFileSync(huashuFilePath, appleGuideContent, 'utf8');
console.log(`[Success] 苹果用户安装话术已保存在: ${huashuFilePath}`);

const huashuMdPath = path.join(huashuDir, '咕嘟食谱_苹果iPhone用户安装指南与微信分享话术.md');
fs.writeFileSync(huashuMdPath, appleGuideContent, 'utf8');
console.log(`[Success] 苹果用户安装话术(Markdown)已保存在: ${huashuMdPath}`);


// =============================================================================
// 2. 生成桌面【咕嘟食谱_安卓安装二维码.png】（商业级精装发布海报卡）
// =============================================================================
async function generateQrPoster() {
  console.log('🎨 正在生成安卓安装高精度二维码...');

  // 生成纯二维码的 Data URL (高容错率以容纳中央 Logo)
  const qrDataUrl = await QRCode.toDataURL(localDownloadUrl, {
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 500,
    color: {
      dark: '#261208',
      light: '#FFFFFF'
    }
  });

  const catIconPath = path.join(desktopDir, '咕嘟食谱_终极大厨版_完美猫猫搅汤(推荐).png');
  const catIconBase64 = fs.readFileSync(catIconPath).toString('base64');
  const catIconSrc = `data:image/png;base64,${catIconBase64}`;

  const tempHtml = path.join(__dirname, 'temp_qr_poster.html');
  const targetPoster = path.join(desktopDir, '咕嘟食谱_安卓安装二维码.png');

  const posterHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width: 800px;
    height: 1040px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  }
  .card {
    width: 760px;
    height: 1000px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFF9F3 55%, #FFEFE3 100%);
    border-radius: 40px;
    border: 2px solid #F5D5C0;
    box-shadow: 0 20px 60px rgba(220, 80, 20, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 44px 36px;
    position: relative;
    overflow: hidden;
  }
  .top-badge {
    background: #FFF0E6;
    color: #FF5A26;
    font-size: 15px;
    font-weight: 800;
    padding: 6px 20px;
    border-radius: 20px;
    margin-bottom: 18px;
    letter-spacing: 1px;
    border: 1px solid #FFD8C2;
  }
  .header-row {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 22px;
  }
  .app-logo {
    width: 88px;
    height: 88px;
    border-radius: 22px;
    box-shadow: 0 8px 24px rgba(255, 107, 53, 0.32);
  }
  .title-group {
    text-align: left;
  }
  .main-title {
    font-size: 34px;
    font-weight: 900;
    color: #23160F;
    line-height: 1.2;
  }
  .sub-title {
    font-size: 15px;
    color: #8C705F;
    margin-top: 4px;
    font-weight: 600;
  }
  .qr-wrapper {
    background: #FFFFFF;
    padding: 24px;
    border-radius: 32px;
    box-shadow: 0 12px 36px rgba(100, 40, 10, 0.12);
    border: 2px solid #F7E4D5;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }
  .qr-img {
    width: 380px;
    height: 380px;
    display: block;
  }
  .qr-center-logo {
    position: absolute;
    width: 84px;
    height: 84px;
    border-radius: 20px;
    border: 4px solid #FFFFFF;
    box-shadow: 0 4px 16px rgba(0,0,0,0.22);
  }
  .scan-tip {
    font-size: 18px;
    font-weight: 800;
    color: #D9441E;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .scan-desc {
    font-size: 14px;
    color: #7A6252;
    text-align: center;
    line-height: 1.6;
    max-width: 580px;
  }
  .feature-pills {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }
  .pill {
    background: #FFFFFF;
    border: 1px solid #ECD7C7;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    color: #594334;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  }
  .footer-hint {
    margin-top: auto;
    font-size: 12px;
    color: #A89384;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="top-badge">🌟 官方正式版 · 极速扫码安装</div>

    <div class="header-row">
      <img class="app-logo" src="${catIconSrc}" alt="咕嘟食谱">
      <div class="title-group">
        <div class="main-title">咕嘟食谱</div>
        <div class="sub-title">旬味寻真 · 四季风物 · 智能食谱与买菜清单</div>
      </div>
    </div>

    <div class="qr-wrapper">
      <img class="qr-img" src="${qrDataUrl}" alt="二维码">
      <img class="qr-center-logo" src="${catIconSrc}" alt="Logo">
    </div>

    <div class="scan-tip">
      <span>📲</span> 微信 / 手机浏览器 扫一扫立即安装
    </div>

    <div class="scan-desc">
      安卓手机扫码即刻下载安装包 (APK) · 苹果手机扫码支持一秒添加到主屏幕
    </div>

    <div class="feature-pills">
      <div class="pill">🍲 中华34省地道家常</div>
      <div class="pill">🛒 微信买菜清单合并</div>
      <div class="pill">🧊 冰箱反向智能清库</div>
      <div class="pill">⚡ 离线秒开</div>
    </div>

    <div class="footer-hint">
      局域网服务地址: ${localDownloadUrl}
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(tempHtml, posterHtml, 'utf8');

  const fileUrl = 'file:///' + tempHtml.replace(/\\/g, '/');
  const cmd = `"${edgePath}" --headless --disable-gpu --screenshot="${targetPoster}" --window-size=800,1040 --default-background-color=00000000 "${fileUrl}"`;

  execSync(cmd, { stdio: 'inherit' });
  console.log(`[Success] 安卓安装二维码海报已保存在: ${targetPoster}`);
}

generateQrPoster().catch(console.error);
