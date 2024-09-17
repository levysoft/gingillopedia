const CACHE_NAME = 'gingillopedia-cache-v1';
const CACHE_TIMEOUT = 7 * 24 * 60 * 60 * 1000; // 7 giorni in millisecondi

const URLS_TO_CACHE = [
  '/gingillopedia/', // URL della home page
  '/gingillopedia/index.html',
  '/gingillopedia/favicon.ico',
  '/gingillopedia/android-chrome-192x192.png',
  '/gingillopedia/android-chrome-512x512.png',
  '/gingillopedia/apple-touch-icon.png',
  '/gingillopedia/favicon-16x16.png',
  '/gingillopedia/favicon-32x32.png',
  // Aggiungi altri asset statici necessari
];

const CSV_URL = '/gingillopedia/DB/db_gingilli.csv'; // Percorso del file CSV

// Evento di installazione per popolare la cache iniziale
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Evento di fetch per gestire le richieste
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Se la richiesta di rete ha successo, aggiorna la cache e restituisci la risposta
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => {
        // Se la richiesta di rete fallisce (offline), cerca nella cache
        return caches.match(event.request);
      })
  );
});

// Evento di attivazione per gestire la pulizia della cache
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});