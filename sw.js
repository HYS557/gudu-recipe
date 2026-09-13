/**
 * 🍲 咕嘟食谱 - Service Worker (PWA 离线缓存与秒开引擎)
 */

const CACHE_NAME = 'gudu-recipe-v3.6.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/index.css',
  './js/data/seasons.js',
  './js/data/ingredients.js',
  './js/data/recipes.js',
  './js/data/recipe-corrections-v1.js',
  './js/data/recipe-corrections-v2.js',
  './js/data/recipe-corrections-v3.js',
  './js/data/recipe-corrections-v4.js',
  './js/data/recipe-corrections-v5.js',
  './js/data/recipe-corrections-v6.js',
  './js/data/recipe-corrections-v7.js',
  './js/data/recipe-corrections-v8.js',
  './js/data/recipe-corrections-v9.js',
  './js/data/recipe-corrections-v10.js',
  './js/data/recipe-corrections-v11.js',
  './js/data/recipe-corrections-v12.js',
  './js/data/recipe-corrections-v13.js',
  './js/data/recipe-corrections-v14.js',
  './js/data/recipe-corrections-v15.js',
  './js/data/recipe-corrections-v16.js',
  './js/data/recipe-corrections-v17.js',
  './js/data/recipe-corrections-v18.js',
  './js/data/recipe-corrections-v19.js',
  './js/data/recipe-corrections-v20.js',
  './js/data/recipe-corrections-v21.js',
  './js/data/recipe-corrections-v22.js',
  './js/data/recipe-corrections-v23.js',
  './js/data/recipe-corrections-v24.js',
  './js/data/recipe-corrections-v25.js',
  './js/data/recipe-corrections-v26.js',
  './js/data/recipe-corrections-v27.js',
  './js/data/recipe-corrections-v28.js',
  './js/data/recipe-corrections-v29.js',
  './js/data/recipe-corrections-v30.js',
  './js/data/recipe-corrections-v31.js',
  './js/data/recipe-corrections-v32.js',
  './js/data/recipe-corrections-v33.js',
  './js/data/recipe-corrections-v34.js',
  './js/data/recipe-corrections-v35.js',
  './js/data/recipe-corrections-v36.js',
  './js/data/recipe-corrections-v37.js',
  './js/data/recipe-corrections-v38.js',
  './js/data/recipe-corrections-v39.js',
  './js/data/recipe-corrections-v40.js',
  './js/data/recipe-corrections-v41.js',
  './js/data/recipe-corrections-v42.js',
  './js/data/recipe-corrections-v43.js',
  './js/data/recipe-corrections-v44.js',
  './js/data/recipe-corrections-v45.js',
  './js/data/recipe-corrections-v46.js',
  './js/data/recipe-corrections-v47.js',
  './js/data/recipe-corrections-v48.js',
  './js/data/recipe-corrections-v49.js',
  './js/data/recipe-corrections-v50.js',
  './js/data/recipe-corrections-v51.js',
  './js/data/recipe-corrections-v52.js',
  './js/data/recipe-corrections-v53.js',
  './js/data/recipe-corrections-v54.js',
  './js/data/recipe-metadata-corrections-v1.js',
  './js/data/recipe-metadata-corrections-v2.js',
  './js/data/recipe-metadata-corrections-v3.js',
  './js/data/recipe-allergens-v1.js',
  './js/data/recipe-nutrition-corrections-v1.js',
  './js/data/recipe-nutrition-corrections-v2.js',
  './js/data/recipe-nutrition-corrections-v3.js',
  './js/data/recipe-nutrition-corrections-v4.js',
  './js/data/recipe-nutrition-corrections-v5.js',
  './js/data/recipe-nutrition-corrections-v6.js',
  './js/data/recipe-nutrition-corrections-v7.js',
  './js/data/recipe-nutrition-corrections-v8.js',
  './js/data/recipe-nutrition-corrections-v9.js',
  './js/data/recipe-nutrition-corrections-v10.js',
  './js/data/recipe-nutrition-corrections-v11.js',
  './js/data/recipe-nutrition-corrections-v12.js',
  './js/data/recipe-nutrition-corrections-v13.js',
  './js/data/recipe-nutrition-corrections-v14.js',
  './js/data/recipe-nutrition-corrections-v15.js',
  './js/data/recipe-nutrition-corrections-v16.js',
  './js/data/recipe-nutrition-corrections-v17.js',
  './js/data/recipe-nutrition-corrections-v18.js',
  './js/data/recipe-nutrition-corrections-v19.js',
  './js/data/recipe-nutrition-corrections-v20.js',
  './js/data/recipe-nutrition-corrections-v21.js',
  './js/data/recipe-nutrition-corrections-v22.js',
  './js/data/recipe-nutrition-corrections-v23.js',
  './js/data/recipe-nutrition-corrections-v24.js',
  './js/data/recipe-nutrition-corrections-v25.js',
  './js/data/recipe-nutrition-corrections-v26.js',
  './js/data/recipe-nutrition-corrections-v27.js',
  './js/data/recipe-nutrition-corrections-v28.js',
  './js/data/recipe-nutrition-corrections-v29.js',
  './js/data/recipe-nutrition-corrections-v30.js',
  './js/data/recipe-nutrition-corrections-v31.js',
  './js/data/recipe-nutrition-corrections-v32.js',
  './js/data/recipe-nutrition-corrections-v33.js',
  './js/data/recipe-nutrition-corrections-v34.js',
  './js/data/recipe-nutrition-corrections-v35.js',
  './js/data/recipe-nutrition-corrections-v36.js',
  './js/data/recipe-nutrition-corrections-v37.js',
  './js/data/recipe-nutrition-corrections-v38.js',
  './js/data/recipe-nutrition-corrections-v39.js',
  './js/data/recipe-nutrition-corrections-v40.js',
  './js/data/recipe-nutrition-corrections-v41.js',
  './js/data/recipe-nutrition-corrections-v42.js',
  './js/data/recipe-nutrition-corrections-v43.js',
  './js/data/recipe-nutrition-corrections-v44.js',
  './js/data/recipe-nutrition-corrections-v45.js',
  './js/data/recipe-nutrition-corrections-v46.js',
  './js/data/recipe-nutrition-corrections-v47.js',
  './js/data/recipe-nutrition-corrections-v48.js',
  './js/data/recipe-nutrition-corrections-v49.js',
  './js/share.js',
  './js/updater.js',
  './js/app.js',
  './manifest.json',
  './updates/manifest.json',
  './updates/recipe-update-2026.09.13.1.json',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' || event.request.url.includes('index.html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
