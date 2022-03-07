import { build, files, prerendered, version } from '$service-worker';
declare var self: ServiceWorkerGlobalScope;

const cache_name = `jasher-cache-v${version}`;

// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers#lifecycle_of_a_service_worker
self.addEventListener('install', (event) => {
  event.waitUntil(async () => {
    const cache = await caches.open(cache_name);
    await cache.addAll([ ...build, ...files, ...prerendered]);
  });
});

// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers#responding_to_fetches
self.addEventListener('fetch', (event) => {
  event.respondWith(async () => {
    const cache_response = await caches.match(event.request);
    
    if (cache_response)
      return cache_response;

    const fetch_response = await fetch(event.request);
    const cache = await caches.open(cache_name);
    cache.put(event.request, fetch_response.clone());
    
    return fetch_response;
  });
});

const clean = (key) => {
  if (key === cache_name)
    return;
  
  return caches.delete(key);
}

// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers#clearing_the_cache
self.addEventListener('activate', (event) => {
  event.waitUntil(async () => {
    const keys = await caches.keys();
    return Promise.all(keys.map(clean));
  });
});