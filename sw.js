const CACHE_NAME = 'portfolio-v5'
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
      .then(cache => {
        return cache.addAll(urlsToCache).catch(err => {
          console.warn('Cache addAll failed:', err)
        })
      })
  )
})

self.addEventListener('activate', event => {
  // Delete ALL old caches that don't match the current version
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('Deleting old cache:', name)
            return caches.delete(name)
          })
      )
    }).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  // Network-first for JS/CSS assets (hashed filenames change each build)
  // Cache-first only for static assets like icons
  const url = new URL(event.request.url)
  const isAsset = url.pathname.includes('/assets/')

  if (isAsset) {
    // Assets are hashed — always fetch fresh, don't serve stale
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    )
  } else {
    // For everything else: cache-first with network fallback
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request)
      })
    )
  }
})
