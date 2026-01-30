const CACHE_NAME = 'bus-283-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.PNG'
];

// Встановлення: завантажуємо файли в пам'ять
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Робота офлайн: беремо файли з пам'яті, якщо немає мережі
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
