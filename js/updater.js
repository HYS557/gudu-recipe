(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root && root.document) api.bootstrap(root);
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const CONFIG = {
    appVersion: '3.8.0', versionCode: 380, bundledDataVersion: '2026.09.20.2',
    publicBaseUrl: 'https://hys557.github.io/gudu-recipe/',
    cacheKey: 'GUDU_RECIPE_UPDATE_PACKAGE_V1', checkKey: 'GUDU_RECIPE_UPDATE_LAST_CHECK',
    checkIntervalMs: 6 * 60 * 60 * 1000
  };
  function compareVersion(a, b) {
    const aa = String(a || '').split(/[.-]/).map(x => Number(x) || 0);
    const bb = String(b || '').split(/[.-]/).map(x => Number(x) || 0);
    for (let i = 0; i < Math.max(aa.length, bb.length); i++) {
      if ((aa[i] || 0) !== (bb[i] || 0)) return (aa[i] || 0) - (bb[i] || 0);
    }
    return 0;
  }
  function isEnrichedRecipe(recipe) {
    return !!(recipe && typeof recipe.id === 'string' && recipe.id &&
      recipe.nutrition && recipe.nutrition.total && recipe.nutrition.perServing && recipe.nutrition.per100g &&
      recipe.timeBreakdown && Number.isFinite(recipe.timeBreakdown.totalElapsedMinutes) &&
      recipe.scaling && Array.isArray(recipe.scaling.supportedServings) &&
      recipe.alternatives && recipe.storage && Array.isArray(recipe.storage.reheatingMethods));
  }
  function validatePackage(pkg, recipes) {
    const errors = [];
    if (!pkg || typeof pkg !== 'object') errors.push('package must be an object');
    if (!pkg || typeof pkg.dataVersion !== 'string' || !pkg.dataVersion) errors.push('dataVersion is required');
    for (const key of ['patches', 'upserts', 'removeIds']) {
      if (pkg && pkg[key] !== undefined && !Array.isArray(pkg[key])) errors.push(`${key} must be an array`);
    }
    const recipeMap = new Map((Array.isArray(recipes) ? recipes : []).filter(Boolean).map(recipe => [recipe.id, recipe]));
    const known = new Set(recipeMap.keys());
    for (const item of (pkg && Array.isArray(pkg.patches) ? pkg.patches : [])) {
      if (!item || !known.has(item.id) || !item.fields || typeof item.fields !== 'object') errors.push(`unknown or invalid patch id: ${item && item.id}`);
      else if (!isEnrichedRecipe({ ...recipeMap.get(item.id), ...item.fields })) errors.push(`patch removes required enriched fields: ${item.id}`);
    }
    for (const recipe of (pkg && Array.isArray(pkg.upserts) ? pkg.upserts : [])) {
      if (!isEnrichedRecipe(recipe)) errors.push(`invalid enriched recipe: ${recipe && recipe.id}`);
    }
    for (const id of (pkg && Array.isArray(pkg.removeIds) ? pkg.removeIds : [])) {
      if (typeof id !== 'string' || !known.has(id)) errors.push(`unknown remove id: ${id}`);
    }
    return { valid: errors.length === 0, errors };
  }
  function applyPackageToRecipes(recipes, pkg) {
    const validation = validatePackage(pkg, recipes);
    if (!validation.valid) throw new Error(`Invalid update package: ${validation.errors.join('; ')}`);
    const result = recipes.map(recipe => ({ ...recipe }));
    const map = new Map(result.map(recipe => [recipe.id, recipe]));
    for (const item of (pkg.patches || [])) Object.assign(map.get(item.id), item.fields);
    for (const recipe of (pkg.upserts || [])) {
      if (map.has(recipe.id)) Object.assign(map.get(recipe.id), recipe);
      else { const copy = { ...recipe }; result.push(copy); map.set(copy.id, copy); }
    }
    const remove = new Set(pkg.removeIds || []);
    return remove.size ? result.filter(recipe => !remove.has(recipe.id)) : result;
  }
  function bootstrap(win) {
    function remoteUrl(path) {
      if (/^https?:\/\//i.test(path || '')) return path;
      const base = (win.location.protocol === 'http:' || win.location.protocol === 'https:')
        ? new URL('./', win.location.href) : new URL(CONFIG.publicBaseUrl);
      return new URL(path || '', base).href;
    }
    async function sha256(value) {
      if (!win.crypto || !win.crypto.subtle) return '';
      const hash = await win.crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
      return Array.from(new Uint8Array(hash)).map(x => x.toString(16).padStart(2, '0')).join('');
    }
    function loadCachedPackage() {
      try {
        const pkg = JSON.parse(win.localStorage.getItem(CONFIG.cacheKey) || 'null');
        if (pkg && compareVersion(pkg.dataVersion, CONFIG.bundledDataVersion) > 0) {
          win.RECIPES_DATA = applyPackageToRecipes(win.RECIPES_DATA, pkg);
          return pkg.dataVersion;
        }
      } catch (error) {
        win.localStorage.removeItem(CONFIG.cacheKey);
        console.warn('[GuduUpdater] 已丢弃无效本地更新包', error);
      }
      return CONFIG.bundledDataVersion;
    }
    const state = { dataVersion: loadCachedPackage(), programUpdate: null, checking: false };
    async function fetchManifest() {
      const response = await win.fetch(remoteUrl('updates/manifest.json') + '?t=' + Date.now(), { cache: 'no-store' });
      if (!response.ok) throw new Error('更新清单请求失败');
      return response.json();
    }
    async function downloadDataPackage(manifest) {
      const response = await win.fetch(remoteUrl(manifest.dataUrl) + '?v=' + encodeURIComponent(manifest.dataVersion), { cache: 'no-store' });
      if (!response.ok) throw new Error('食谱数据包下载失败');
      const value = await response.text();
      if (manifest.dataSha256) {
        const actual = await sha256(value);
        if (actual && actual.toLowerCase() !== String(manifest.dataSha256).toLowerCase()) throw new Error('食谱数据包校验失败');
      }
      const pkg = JSON.parse(value);
      if (pkg.dataVersion !== manifest.dataVersion) throw new Error('食谱数据版本不一致');
      const validation = validatePackage(pkg, win.RECIPES_DATA);
      if (!validation.valid) throw new Error(`食谱数据结构无效：${validation.errors.join('；')}`);
      win.localStorage.setItem(CONFIG.cacheKey, value);
      return pkg;
    }
    async function check(options) {
      const manual = !!(options && options.manual);
      if (state.checking) return;
      state.checking = true;
      try {
        const manifest = await fetchManifest();
        win.localStorage.setItem(CONFIG.checkKey, String(Date.now()));
        if (Number(manifest.versionCode || 0) > CONFIG.versionCode && manifest.apkUrl) state.programUpdate = manifest;
        if (compareVersion(manifest.dataVersion, state.dataVersion) > 0) {
          await downloadDataPackage(manifest);
          if (manual) win.alert('食谱数据已更新，点击确定后重新载入。');
          win.location.reload(); return;
        }
        if (state.programUpdate) {
          if (manual && win.confirm(`发现咕嘟食谱 ${state.programUpdate.appVersion} 新版本，是否立即下载更新？`)) win.location.href = remoteUrl(state.programUpdate.apkUrl);
          else if (!manual && win.App && win.App.showToast) win.App.showToast('发现新版本，可在“关于咕嘟”中更新');
          return;
        }
        if (manual) win.alert(`当前已是最新版本。\n程序：${CONFIG.appVersion}\n食谱数据：${state.dataVersion}`);
      } catch (error) {
        if (manual) win.alert('暂时无法检查更新，请确认网络连接后重试。');
        console.warn('[GuduUpdater]', error);
      } finally { state.checking = false; }
    }
    function autoCheck() {
      const last = Number(win.localStorage.getItem(CONFIG.checkKey) || 0);
      if (Date.now() - last >= CONFIG.checkIntervalMs) check({ manual: false });
    }
    win.GuduUpdater = { config: CONFIG, state, manualCheck: () => check({ manual: true }), autoCheck };
    win.addEventListener('load', () => win.setTimeout(autoCheck, 800));
  }
  return { CONFIG, compareVersion, isEnrichedRecipe, validatePackage, applyPackageToRecipes, bootstrap };
});
