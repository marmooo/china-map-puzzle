const cacheName = "2026-01-24 00:00";
const urlsToCache = [
  "/china-map-puzzle/index.js",
  "/china-map-puzzle/map.svg",
  "/china-map-puzzle/data/en.lst",
  "/china-map-puzzle/mp3/decision50.mp3",
  "/china-map-puzzle/mp3/correct1.mp3",
  "/china-map-puzzle/mp3/correct3.mp3",
  "/china-map-puzzle/favicon/favicon.svg",
];

async function preCache() {
  const cache = await caches.open(cacheName);
  await Promise.all(
    urlsToCache.map((url) =>
      cache.add(url).catch((err) => console.warn("Failed to cache", url, err))
    ),
  );
  self.skipWaiting();
}

async function handleFetch(event) {
  const cached = await caches.match(event.request);
  return cached || fetch(event.request);
}

async function cleanOldCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map((name) => name !== cacheName ? caches.delete(name) : null),
  );
  self.clients.claim();
}

self.addEventListener("install", (event) => {
  event.waitUntil(preCache());
});
self.addEventListener("fetch", (event) => {
  event.respondWith(handleFetch(event));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(cleanOldCaches());
});
