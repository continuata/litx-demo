importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

workbox.core.setCacheNameDetails({ prefix: 'pwa_todos' });

workbox.routing.registerRoute(
  /https:\/\/unpkg.com\/.+\.(?:js|js`?module)/,
  new workbox.strategies.CacheFirst({
    cacheName: 'assets',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 1800,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:html|css|js|json)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 1800,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:png|svg|jpeg|gif|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 1800,
      }),
    ],
  })
);

// workbox.precaching.precacheAndRoute([self.__WB_MANIFEST]);
