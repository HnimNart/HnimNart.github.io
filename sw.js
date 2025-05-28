var cacheName = 'egui-template-pwa';
var filesToCache = [
  './',
  './index.html',
  './simulator-cf5c8e2f368fd043.js',
  './simulator-cf5c8e2f368fd043_bg.wasm',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
