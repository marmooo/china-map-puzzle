const CACHE_NAME = "2023-09-28 10:00";
const urlsToCache = [
  "/china-map-puzzle/",
  "/china-map-puzzle/en/",
  "/china-map-puzzle/index.js",
  "/china-map-puzzle/map.svg",
  "/china-map-puzzle/data/en.lst",
  "/china-map-puzzle/mp3/decision50.mp3",
  "/china-map-puzzle/mp3/correct1.mp3",
  "/china-map-puzzle/mp3/correct3.mp3",
  "/china-map-puzzle/favicon/favicon.svg",
  "https://cdn.jsdelivr.net/npm/fabric@5.3.0/dist/fabric.min.js",
  "https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
