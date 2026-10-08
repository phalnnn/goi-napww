self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Cho phép app tải dữ liệu Supabase online bình thường
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
