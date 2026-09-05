const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const os = require('os');
const BUILD_DIR = path.join(os.tmpdir(), 'gudu_android_build');
const SDK_DIR = 'C:\\Users\\Admin1\\AppData\\Local\\Android\\Sdk';
const BUILD_TOOLS_DIR = path.join(SDK_DIR, 'build-tools', '35.0.0');
const PLATFORM_JAR = path.join(SDK_DIR, 'platforms', 'android-35', 'android.jar');

console.log('🚀 开始构建「咕嘟食谱」Android 原生 APK...');

// 1. 清理或重建目录
if (fs.existsSync(BUILD_DIR)) {
  fs.rmSync(BUILD_DIR, { recursive: true, force: true });
}
fs.mkdirSync(BUILD_DIR, { recursive: true });

const srcDir = path.join(BUILD_DIR, 'src', 'com', 'gudurecipe', 'app');
const resDir = path.join(BUILD_DIR, 'res');
const valuesDir = path.join(resDir, 'values');
const mipmapDir = path.join(resDir, 'mipmap-xxhdpi');
const assetsDir = path.join(BUILD_DIR, 'assets');
const objDir = path.join(BUILD_DIR, 'obj');

fs.mkdirSync(srcDir, { recursive: true });
fs.mkdirSync(valuesDir, { recursive: true });
fs.mkdirSync(mipmapDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });
fs.mkdirSync(objDir, { recursive: true });

// 2. 拷贝资源到 assets
console.log('📦 正在打包 Web 资源到 assets...');
fs.copyFileSync(path.join(ROOT_DIR, 'index.html'), path.join(assetsDir, 'index.html'));

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDirRecursive(path.join(ROOT_DIR, 'css'), path.join(assetsDir, 'css'));
copyDirRecursive(path.join(ROOT_DIR, 'js'), path.join(assetsDir, 'js'));
copyDirRecursive(path.join(ROOT_DIR, 'icons'), path.join(assetsDir, 'icons'));
if (fs.existsSync(path.join(ROOT_DIR, 'images'))) {
  copyDirRecursive(path.join(ROOT_DIR, 'images'), path.join(assetsDir, 'images'));
}

// 拷贝全套 Android mipmap 高清图标资源
if (fs.existsSync(path.join(ROOT_DIR, 'android_build', 'res'))) {
  copyDirRecursive(path.join(ROOT_DIR, 'android_build', 'res'), resDir);
} else {
  fs.copyFileSync(path.join(ROOT_DIR, 'icons', 'icon-192.png'), path.join(mipmapDir, 'ic_launcher.png'));
}

// 3. 创建 strings.xml
fs.writeFileSync(path.join(valuesDir, 'strings.xml'), `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">咕嘟食谱</string>
</resources>
`);

// 4. 创建 AndroidManifest.xml
const manifestContent = `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.gudurecipe.app"
    android:versionCode="8"
    android:versionName="2.4.0">

    <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="35" />

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher"
        android:roundIcon="@mipmap/ic_launcher"
        android:hardwareAccelerated="true"
        android:usesCleartextTraffic="true"
        android:theme="@android:style/Theme.NoTitleBar">
        <activity
            android:name=".MainActivity"
            android:configChanges="orientation|screenSize|keyboardHidden"
            android:windowSoftInputMode="adjustResize"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
`;
fs.writeFileSync(path.join(BUILD_DIR, 'AndroidManifest.xml'), manifestContent);

// 5. 创建 MainActivity.java
const mainActivityContent = `package com.gudurecipe.app;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.view.KeyEvent;
import android.graphics.Color;
import android.view.Window;
import android.view.WindowManager;

public class MainActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 状态栏美化 (Apple 风格极简无缝状态栏)
        Window window = getWindow();
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(Color.parseColor("#F5F5F7"));
        window.getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);

        webView = new WebView(this);
        webView.setFitsSystemWindows(true);
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }
        });

        webView.setWebChromeClient(new android.webkit.WebChromeClient() {
            @Override
            public boolean onConsoleMessage(android.webkit.ConsoleMessage cm) {
                android.util.Log.d("GUDU_JS", cm.message() + " [" + cm.sourceId() + ":" + cm.lineNumber() + "]");
                return true;
            }
            @Override
            public boolean onJsAlert(WebView view, String url, String message, android.webkit.JsResult result) {
                new android.app.AlertDialog.Builder(view.getContext())
                    .setTitle("咕嘟食谱")
                    .setMessage(message)
                    .setPositiveButton("确定", new android.content.DialogInterface.OnClickListener() {
                        public void onClick(android.content.DialogInterface d, int w) { result.confirm(); }
                    })
                    .setOnCancelListener(new android.content.DialogInterface.OnCancelListener() {
                        public void onCancel(android.content.DialogInterface d) { result.cancel(); }
                    })
                    .show();
                return true;
            }
            @Override
            public boolean onJsPrompt(WebView view, String url, String message, String defaultValue, android.webkit.JsPromptResult result) {
                final android.widget.EditText input = new android.widget.EditText(view.getContext());
                input.setText(defaultValue);
                new android.app.AlertDialog.Builder(view.getContext())
                    .setTitle(message)
                    .setView(input)
                    .setPositiveButton("确定", new android.content.DialogInterface.OnClickListener() {
                        public void onClick(android.content.DialogInterface d, int w) { result.confirm(input.getText().toString()); }
                    })
                    .setNegativeButton("取消", new android.content.DialogInterface.OnClickListener() {
                        public void onClick(android.content.DialogInterface d, int w) { result.cancel(); }
                    })
                    .show();
                return true;
            }
        });

        webView.loadUrl("file:///android_asset/index.html");
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
}
`;
fs.writeFileSync(path.join(srcDir, 'MainActivity.java'), mainActivityContent);

// 6. 执行编译管线
console.log('⚙️ 正在执行 AAPT2 资源编译...');
const aapt2 = path.join(BUILD_TOOLS_DIR, 'aapt2.exe');
const zipalign = path.join(BUILD_TOOLS_DIR, 'zipalign.exe');
const apksigner = path.join(BUILD_TOOLS_DIR, 'apksigner.bat');
const d8 = path.join(BUILD_TOOLS_DIR, 'd8.bat');

execSync(`"${aapt2}" compile --dir "${resDir}" -o "${BUILD_DIR}\\res.zip"`);
execSync(`"${aapt2}" link -o "${BUILD_DIR}\\app.unaligned.apk" -I "${PLATFORM_JAR}" --manifest "${BUILD_DIR}\\AndroidManifest.xml" "${BUILD_DIR}\\res.zip" --java "${BUILD_DIR}\\src" --auto-add-overlay`);

console.log('⚙️ 正在执行 javac 编译 Java 代码...');
const javaFiles = [
  path.join(srcDir, 'MainActivity.java'),
  path.join(srcDir, 'R.java')
].map(p => `"${p}"`).join(' ');

execSync(`javac -encoding UTF-8 -d "${objDir}" -cp "${PLATFORM_JAR}" ${javaFiles}`);

console.log('⚙️ 正在执行 D8 生成 DEX...');
const classFiles = [];
function collectClasses(dir) {
  for (let f of fs.readdirSync(dir)) {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) collectClasses(p);
    else if (p.endsWith('.class')) classFiles.push(`"${p}"`);
  }
}
collectClasses(objDir);

execSync(`"${d8}" --output "${BUILD_DIR}" --lib "${PLATFORM_JAR}" ${classFiles.join(' ')}`);

console.log('⚙️ 正在组装 APK (添加 classes.dex 与 assets)...');
// 使用 jar 或 zip 将 dex 与 assets 放入 apk
const jarExe = 'jar';
execSync(`jar -uf "${BUILD_DIR}\\app.unaligned.apk" -C "${BUILD_DIR}" classes.dex`);
execSync(`jar -uf "${BUILD_DIR}\\app.unaligned.apk" -C "${BUILD_DIR}" assets`);

console.log('⚙️ 正在进行 zipalign 4字节对齐...');
const alignedApk = path.join(ROOT_DIR, 'gudu-recipe.apk');
if (fs.existsSync(alignedApk)) fs.unlinkSync(alignedApk);
execSync(`"${zipalign}" -v -p 4 "${BUILD_DIR}\\app.unaligned.apk" "${alignedApk}"`);

console.log('⚙️ 正在生成签名并对 APK 签名...');
const keystorePath = path.join(ROOT_DIR, 'scripts', 'debug.keystore');
if (!fs.existsSync(keystorePath)) {
  execSync(`keytool -genkey -v -keystore "${keystorePath}" -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US"`);
}
execSync(`"${apksigner}" sign --ks "${keystorePath}" --ks-pass pass:android --key-pass pass:android --ks-key-alias androiddebugkey "${alignedApk}"`);

console.log(`\n🎉 构建成功！最终 APK 位于: ${alignedApk}`);

const desktopApk = 'C:\\Users\\Admin1\\Desktop\\咕嘟食谱_终极大厨版.apk';
fs.copyFileSync(alignedApk, desktopApk);
console.log(`📁 已同步生成 APK 到桌面: ${desktopApk}`);

const adbPath = 'C:\\Users\\Admin1\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe';
try {
  const devicesOutput = execSync(`"${adbPath}" devices`).toString();
  if (devicesOutput.includes('device') && !devicesOutput.includes('offline')) {
    console.log('📲 检测到已连接的 Android 手机，正在自动安装最新 APK...');
    execSync(`"${adbPath}" install -r "${alignedApk}"`, { stdio: 'inherit' });
    console.log('🚀 正在启动应用...');
    execSync(`"${adbPath}" shell am start -n com.gudurecipe.app/.MainActivity`, { stdio: 'inherit' });
    console.log('✅ 安装并启动成功！');
  }
} catch (e) {
  console.log('⚠️ 自动推送到设备提示: ' + e.message);
}
