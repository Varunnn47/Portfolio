const CACHE_NAME = 'portfolio-v6'
const urlsToCache = [
  './',
  './manifest.json',
  './icon-192.png',
]

self.addEventListener('install', event => {
  // Skip waiting so the new SW activates immediately
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.warn('Cache addAll failed:', err))
  )
})

self.addEventListener('activate', event => {
  // Delete ALL old caches that don't match the current version
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    }).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  const { request } = event
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return

  // Network-first for everything: a deploy deletes old hashed assets, so a cached
  // page must never be served while the network is available. The cache is offline-only.
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone()
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy))
        }
        return response
      })
      .catch(async () => {
        const cached = await caches.match(request)
        if (cached) return cached
        if (request.mode === 'navigate') {
          const page = await caches.match('./')
          if (page) return page
        }
        return Response.error()
      })
  )
})
