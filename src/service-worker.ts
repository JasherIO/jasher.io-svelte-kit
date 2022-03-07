import { build, files, prerendered, version } from '$service-worker';
declare var self: ServiceWorkerGlobalScope;

const name = `jasher-cache-v${version}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(name)
      .then(function(cache) {
        return cache.addAll([ ...build, ...files, ...prerendered ]);
      })
  );
});