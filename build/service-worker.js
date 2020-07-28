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

// workbox.precaching.precacheAndRoute([[{"revision":"50ebbc58c1b235212e6859190a703a4f","url":"index.html"},{"revision":"21cdcf8011040c0ebbc765a1c4f0193d","url":"index.js"},{"revision":"c3d3d286153b75ab9533cb6b5dc977c5","url":"manifest.json"},{"revision":"9c0a0f06c455d7ae07e9abba2ab532f8","url":"model/index.js"},{"revision":"a862e51ee6567862149334d98d54d0ad","url":"model/todo.js"},{"revision":"f7142863a0f86e98be04b644828b6adc","url":"model/todoList.js"},{"revision":"314b01abf6dc6770fa763ba965fbc07e","url":"pages/help/index.js"},{"revision":"9d919f682dd77478a7d8aa5fc065c5d0","url":"pages/todos/add-todo.js"},{"revision":"3c2e6348c48484fe48615a2b1b2227ea","url":"pages/todos/index.js"},{"revision":"7564b61dfc1719dc8f51204b56d96741","url":"pages/todos/svg.js"},{"revision":"208da2c1beb864988193c8b1f669500d","url":"pages/todos/todo.js"},{"revision":"05c1564486713f679aa23a104699a5a6","url":"router.js"},{"revision":"6f9d9fe46e6c38c011aeff23795c7b29","url":"styles.css"}]]);
