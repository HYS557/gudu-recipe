(function () {
  "use strict";
  const CONFIG = {
    appVersion: "3.6.0", versionCode: 360, bundledDataVersion: "2026.09.13.1",
    publicBaseUrl: "https://hys557.github.io/gudu-recipe/",
    cacheKey: "GUDU_RECIPE_UPDATE_PACKAGE_V1", checkKey: "GUDU_RECIPE_UPDATE_LAST_CHECK",
    checkIntervalMs: 6 * 60 * 60 * 1000
  };
  function compareVersion(a,b){const aa=String(a||"").split(/[.-]/).map(x=>Number(x)||0),bb=String(b||"").split(/[.-]/).map(x=>Number(x)||0);for(let i=0;i<Math.max(aa.length,bb.length);i++){if((aa[i]||0)!==(bb[i]||0))return(aa[i]||0)-(bb[i]||0)}return 0}
  function remoteUrl(path){if(/^https?:\/\//i.test(path||""))return path;const base=(location.protocol==="http:"||location.protocol==="https:")?new URL("./",location.href):new URL(CONFIG.publicBaseUrl);return new URL(path||"",base).href}
  async function sha256(value){if(!globalThis.crypto||!crypto.subtle)return"";const hash=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value));return Array.from(new Uint8Array(hash)).map(x=>x.toString(16).padStart(2,"0")).join("")}
  function applyPackage(pkg){if(!pkg||!Array.isArray(window.RECIPES_DATA))return false;const map=new Map(window.RECIPES_DATA.map(r=>[r.id,r]));(pkg.patches||[]).forEach(c=>{if(c&&c.id&&map.has(c.id))Object.assign(map.get(c.id),c.fields||{})});(pkg.upserts||[]).forEach(r=>{if(!r||!r.id)return;if(map.has(r.id))Object.assign(map.get(r.id),r);else{window.RECIPES_DATA.push(r);map.set(r.id,r)}});if(Array.isArray(pkg.removeIds)&&pkg.removeIds.length){const remove=new Set(pkg.removeIds);window.RECIPES_DATA=window.RECIPES_DATA.filter(r=>!remove.has(r.id))}return true}
  function loadCachedPackage(){try{const pkg=JSON.parse(localStorage.getItem(CONFIG.cacheKey)||"null");if(pkg&&compareVersion(pkg.dataVersion,CONFIG.bundledDataVersion)>0){applyPackage(pkg);return pkg.dataVersion}}catch(_){}return CONFIG.bundledDataVersion}
  const state={dataVersion:loadCachedPackage(),programUpdate:null,checking:false};
  async function fetchManifest(){const response=await fetch(remoteUrl("updates/manifest.json")+"?t="+Date.now(),{cache:"no-store"});if(!response.ok)throw new Error("更新清单请求失败");return response.json()}
  async function downloadDataPackage(manifest){const response=await fetch(remoteUrl(manifest.dataUrl)+"?v="+encodeURIComponent(manifest.dataVersion),{cache:"no-store"});if(!response.ok)throw new Error("食谱数据包下载失败");const value=await response.text();if(manifest.dataSha256){const actual=await sha256(value);if(actual&&actual.toLowerCase()!==String(manifest.dataSha256).toLowerCase())throw new Error("食谱数据包校验失败")}const pkg=JSON.parse(value);if(pkg.dataVersion!==manifest.dataVersion)throw new Error("食谱数据版本不一致");localStorage.setItem(CONFIG.cacheKey,value);return pkg}
  async function check(options){const manual=!!(options&&options.manual);if(state.checking)return;state.checking=true;try{const manifest=await fetchManifest();localStorage.setItem(CONFIG.checkKey,String(Date.now()));if(Number(manifest.versionCode||0)>CONFIG.versionCode&&manifest.apkUrl)state.programUpdate=manifest;if(compareVersion(manifest.dataVersion,state.dataVersion)>0){await downloadDataPackage(manifest);if(manual)alert("食谱数据已更新，点击确定后重新载入。");location.reload();return}if(state.programUpdate){if(manual&&confirm("发现咕嘟食谱 "+state.programUpdate.appVersion+" 新版本，是否立即下载更新？"))location.href=remoteUrl(state.programUpdate.apkUrl);else if(!manual&&window.App&&App.showToast)App.showToast("发现新版本，可在“关于咕嘟”中更新");return}if(manual)alert("当前已是最新版本。\n程序："+CONFIG.appVersion+"\n食谱数据："+state.dataVersion)}catch(error){if(manual)alert("暂时无法检查更新，请确认网络连接后重试。");console.warn("[GuduUpdater]",error)}finally{state.checking=false}}
  function autoCheck(){const last=Number(localStorage.getItem(CONFIG.checkKey)||0);if(Date.now()-last>=CONFIG.checkIntervalMs)check({manual:false})}
  window.GuduUpdater={config:CONFIG,state,manualCheck:()=>check({manual:true}),autoCheck};
  window.addEventListener("load",()=>setTimeout(autoCheck,800));
})();
