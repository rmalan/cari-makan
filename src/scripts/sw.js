import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(
    CacheHelper.cachingAppShell([
      ...assets,
      './',
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css',
    ]),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
