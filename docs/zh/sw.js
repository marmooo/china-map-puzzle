const CACHE_NAME="2023-10-28 23:10",urlsToCache=["/china-map-puzzle/","/china-map-puzzle/en/","/china-map-puzzle/index.js","/china-map-puzzle/map.svg","/china-map-puzzle/data/zh.lst","/china-map-puzzle/mp3/decision50.mp3","/china-map-puzzle/mp3/correct1.mp3","/china-map-puzzle/mp3/correct3.mp3","/china-map-puzzle/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/fabric@5.3.0/dist/fabric.min.js","https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})