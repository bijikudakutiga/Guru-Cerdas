// Service worker sederhana: hanya agar aplikasi bisa dipasang. Tidak menyimpan cache, jadi pembaruan selalu langsung terlihat.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
