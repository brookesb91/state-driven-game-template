const version = 'v1.0.0';
const key = `sw-cache:${version}`;

const assets = [
  // HTML
  '/index.html',
  // JS
  '/bundle.js',
];

function onInstall(event) {
  event.waitUntil(caches.open(key).then((cache) => cache.addAll(assets)));
}

function onActivate() {
  caches
    .keys()
    .then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name.indexOf(key) !== 0)
          .map((name) => caches.delete(name))
      )
    );
}

function onFetch(event) {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request)
        .then(handleNetworkResponse)
        .catch(() => caches.match('/offline'));
    })
  );

  function handleNetworkResponse(response) {
    const clone = response.clone();
    if (isSecure(event.request.url)) {
      caches.open(key).then((cache) => cache.put(event.request, clone));
    }
    return response;
  }
}

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);

function isSecure(url) {
  return /^https?:$/i.test(new URL(url).protocol);
}
