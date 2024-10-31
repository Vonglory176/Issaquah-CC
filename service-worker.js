// The appropriate cache TTL (Time To Live) for your service worker depends on the specific needs of your application and how frequently the cached resources are expected to change. Here are some general guidelines:

// 1. Static Assets (e.g., images, CSS, JS): If these assets don't change often, you can set a longer TTL, such as 30 days or more. This reduces the need for users to re-download unchanged assets, improving load times.

// 2. Dynamic Content (e.g., API responses): For content that changes frequently, a shorter TTL, such as 5 to 10 minutes, might be more appropriate to ensure users receive the most up-to-date information.

// 3. HTML Pages: If your HTML content changes frequently, consider a TTL of 1 hour to 1 day, depending on how critical it is for users to see the latest version.

// In your current setup, you have a TTL of 600 seconds (10 minutes) for cached responses. This is a reasonable default for dynamic content. If you want to adjust this, you can modify the maxAge parameter in the isResponseFresh function:

const CACHE_NAME = 'my-site-cache-v9'
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

// Function to add a timestamp to the cache
function addToCacheWithTimestamp(cache, request, response) {
  const clonedResponse = response.clone()
  const headers = new Headers(clonedResponse.headers)
  headers.append('sw-cache-timestamp', Date.now().toString())

  const responseWithTimestamp = new Response(clonedResponse.body, {
    status: clonedResponse.status,
    statusText: clonedResponse.statusText,
    headers: headers
  })

  return cache.put(request, responseWithTimestamp)
}

// Function to check if the cached response is still valid
function isResponseFresh(response, maxAge) {
  const timestamp = response.headers.get('sw-cache-timestamp')
  if (!timestamp) return false

  const age = (Date.now() - parseInt(timestamp, 10)) / 1000
  return age < maxAge
}

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
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        if (cachedResponse && isResponseFresh(cachedResponse, 600)) { // 600 seconds = 10 minutes
          return cachedResponse
        }

        return fetch(event.request).then(fetchResponse => {
          if (fetchResponse.ok) {
            addToCacheWithTimestamp(cache, event.request, fetchResponse)
          }
          return fetchResponse
        })
      })
    }).catch(error => console.error('Fetch failed:', error))
  )
})

//   event.respondWith(
//     caches.match(event.request)
//       .then(cachedResponse => {
//         if (cachedResponse) return cachedResponse

//         return fetch(event.request).then(fetchResponse => {
//           if (fetchResponse.ok) {
//             return caches.open(CACHE_NAME).then(cache => {
//               cache.put(event.request, fetchResponse.clone())
//               return fetchResponse
//             })
//           }
//           return fetchResponse
//         })
//       })
//       .catch(error => console.error('Fetch failed:', error))
//   )
// })