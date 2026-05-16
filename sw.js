// ════════════════════════════════════════════════════
// SERVICE WORKER — Theamah+ Streaming
// Cache les fichiers essentiels pour la lecture hors-ligne
// ════════════════════════════════════════════════════

const CACHE_NAME = 'theamah-v1';
const STATIC_ASSETS = [
  './theamah-streaming.html',
  './index.html',
  './bibliotheque.js',
  './manifest.json',
  './icon.svg',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) { return cache.addAll(STATIC_ASSETS); })
      .then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  if (!e.request.url.startsWith('http')) return;
  // Ne pas intercepter les requêtes API TMDB (toujours fraîches)
  if (e.request.url.includes('api.themoviedb.org') || e.request.url.includes('emailjs')) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(resp) {
        // Cache les ressources statiques dynamiquement
        if (resp && resp.status === 200 && resp.type === 'basic') {
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function(c) { c.put(e.request, clone); });
        }
        return resp;
      }).catch(function() {
        // Fallback hors-ligne → page principale
        return caches.match('./theamah-streaming.html');
      });
    })
  );
});
