/**
 * Service Worker Lifecycle: Install Event
 *
 * The 'install' event is the first step in the service worker lifecycle.
 * During this phase, we perform the initial setup, which includes:
 *  - Opening a cache.
 *  - Caching essential assets like HTML, CSS, JavaScript, and image files.
 *  - Ensuring all required assets are cached for offline use.
 *
 * The 'waitUntil' method ensures that the service worker doesn't proceed
 * to the next lifecycle stage until the caching is complete.
 */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("my-cache-name").then(function (cache) {
      cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/script.js",
        "/manifest.json",
        "/favicon.ico",
        "/smu-icon-192x192.png",
      ]);
    })
  );
});

/**
 * Service Worker Lifecycle: Activate Event
 *
 * The 'activate' event is fired when the service worker starts.
 * It's an opportunity to clean up from previous service worker versions
 * (e.g., clearing old caches) and to prepare the service worker for handling
 * fetch events or other tasks.
 */
self.addEventListener("activate", function (event) {
  console.log("Service worker activated", event);
});

/**
 * Fetch Event Handling
 *
 * The 'fetch' event is fired every time the web app requests a resource.
 * This can include HTML pages, images, scripts, and other assets.
 *
 * In this event, we:
 *  - Attempt to match the request with an item in the cache.
 *  - If a match is found, return the cached item.
 *  - If not, the request will proceed to the network as usual.
 *
 * The goal is to allow for efficient loading and offline availability
 * of previously accessed resources.
 */
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (res) {
      return res || fetch(event.request);
    })
  );
});

// For more information on Service Workers, refer to:
// https://developers.google.com/web/fundamentals/primers/service-workers
