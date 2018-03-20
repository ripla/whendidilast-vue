/* eslint-disable no-undef */
workbox.skipWaiting();
workbox.clientsClaim();

// TODO
// workbox.routing.registerRoute(
//   new RegExp('https://some-backend-call'),
//   workbox.strategies.staleWhileRevalidate(),
// );

/* eslint-disable no-underscore-dangle */
workbox.precaching.precacheAndRoute(self.__precacheManifest);
