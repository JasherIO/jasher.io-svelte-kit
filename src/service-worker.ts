import { build, files, prerendered, version } from '$service-worker';
declare var self: ServiceWorkerGlobalScope;

const name = `jasher-cache-v${version}`;

self.addEventListener('install', (event) => {
  event.waitUntil(async () => {
    const cache = await caches.open(name);
    await cache.addAll([ ...build, ...files, ...prerendered]);
  });
});