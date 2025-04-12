self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('taskmaster-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          // أضف باقي الملفات مثل CSS و JS والصور
        ]);
      })
    );
  });
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  
