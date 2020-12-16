const cacheName = "pwa-first-v2"
const filesToCache = [
    '/index.html',
    '/js/main.js',
    '/about.html',
    'blogg.html',
    './images/chocolatesCoffee.jpg',
    './images/wineChocolate.jpg',
    '/images/chocolateBubbly.jpg'

];

self.addEventListener('install', function (e) {
    console.log('install')
    e.waitUntil(caches.open(cacheName)
        .then(function (cache) {
            return cache.addAll(filesToCache)
        })
    )
})
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request)
        .then(function (res) {
            return res || fetch(e.request)
        }))
})
// Den cachar filerna som angets, service worker mellanlagrar allting utan, den hämtar ifrån cashe först, 'install' körs varje gång appen startar

