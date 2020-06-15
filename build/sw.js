importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([
  [
    { revision: 'd8eba417f17136bdf52fcc87495813d9', url: 'index.html' },
    { revision: 'ce70fc7d712dff68dc51bb69b3acb429', url: 'index.js' },
    { revision: '9c0a0f06c455d7ae07e9abba2ab532f8', url: 'model/index.js' },
    { revision: '551f8ae6a5ac1660f75a48934aa6a9ac', url: 'model/todo.js' },
    { revision: 'e3f880465d8e3db8902fbdae437ae805', url: 'model/todoList.js' },
    {
      revision: 'a656961d15374386bba5e1d8e484c7bb',
      url: 'pages/help/index.js',
    },
    {
      revision: 'f0cb2ac8e0c03aef3b541b5c4dc11279',
      url: 'pages/todos/add-todo.js',
    },
    {
      revision: 'c0d9a953df5c45dbcc3a2c87310be718',
      url: 'pages/todos/index.js',
    },
    { revision: 'b9a212a985155fa1ff973466edfe61cb', url: 'pages/todos/svg.js' },
    {
      revision: '45c02fc334757195e216af263fe82037',
      url: 'pages/todos/todo.js',
    },
    { revision: '076ecaedf57749eb68e67cd8b91a2fc0', url: 'router.js' },
    { revision: '6f9d9fe46e6c38c011aeff23795c7b29', url: 'styles.css' },
  ],
]);
