const CACHE_NAME="2023-09-02 11:30",urlsToCache=["/china-map-puzzle/","/china-map-puzzle/en/","/china-map-puzzle/index.js","/china-map-puzzle/map.svg","/china-map-puzzle/data/en.lst","/china-map-puzzle/mp3/decision50.mp3","/china-map-puzzle/mp3/correct1.mp3","/china-map-puzzle/mp3/correct3.mp3","/china-map-puzzle/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/fabric@5.3.0/dist/fabric.min.js","https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm"];self.addEventListener("install",a=>{a.waitUntil(caches.open(CACHE_NAME).then(a=>a.addAll(urlsToCache)))}),self.addEventListener("fetch",a=>{a.respondWith(caches.match(a.request).then(b=>b||fetch(a.request)))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(a=>Promise.all(a.filter(a=>a!==CACHE_NAME).map(a=>caches.delete(a)))))})