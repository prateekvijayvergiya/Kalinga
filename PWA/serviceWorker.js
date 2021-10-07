const CACHE_DATA = 'nameCache';
let cacheUrl = [
    '/',
    '/index.html',
    '/index.js',
    'https://dev-my-cars-api.azurewebsites.net/api/carModels'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_DATA)
        .then(function(cache) {
            return cache.addAll(cacheUrl);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if(response) {
                return response
            }
            return fetch(event.request);
        })

        .catch(() => {
            if(event.request.mode == 'navigate'){
                return caches.match('/index.html')
            }
        })
    )
})