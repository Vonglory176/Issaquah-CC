const CACHE_NAME = 'my-site-cache-v2'
const urlsToCache = [
  '/',

  './index.html',
  './404.html',
  './manifest.json',
  './robots.txt',

  '../src/index.css',
  '../src/index.js',

  '../src/assets/images/logos/logo9.webp',

  // Add other assets you want to cache
]

// Install event - cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
      .catch(error => console.error('Failed to open cache:', error))
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Fetch event - serve cached content
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  // Skip caching for unsupported schemes
  if (!url.protocol.startsWith('http')) return

  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then(response => {
        return response || fetch(event.request)
      })
    )
    return
  }

  if (event.request.method !== 'GET' ||
    url.href.includes("google.com/recaptcha") ||
    url.href.includes("index.css")) {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        return fetch(event.request).then(fetchResponse => {
          if (fetchResponse.ok) {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchResponse.clone())
              return fetchResponse
            })
          }
          return fetchResponse
        })
      })
      .catch(error => console.error('Fetch failed:', error))
  )
})