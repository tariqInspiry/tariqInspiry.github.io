var CACHE_NAME = 'Tariq-Khan-Site-Cache-v1';
var urlsToCache = [
    '/',
    '/css/main.css',
    '/js/jquery.min.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});