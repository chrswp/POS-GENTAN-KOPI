const CACHE_NAME = 'gentan-kopi-pos-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Tambahkan file CSS atau JS lain jika ada, contoh:
  // './style.css',
  // './app.js'
];

// Install Service Worker dan Cache file penting
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Ambil dari Cache saat offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
