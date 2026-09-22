/**
 * 咕嘟食谱 - Service Worker
 */
const CACHE_NAME = 'gudu-recipe-v3.8.2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/index.css',
  './css/lifestyle-preview.css',
  './js/data/seasons.js',
  './js/data/ingredients.js',
  './js/data/recipes-canonical.js',
  './js/share.js',
  './js/updater.js',
  './js/recipe-details.js',
  './js/app.js',
  './manifest.json',
  './updates/manifest.json',
  './updates/recipe-update-2026.09.20.3.json',
  './icons/icon.svg',
  './icons/icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(ASSETS_TO_CACHE))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.map(key => key === CACHE_NAME ? undefined : caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || event.request.url.includes('index.html')) {
    event.respondWith(fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
