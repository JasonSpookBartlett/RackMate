const CACHE='rackmate-v2.78-beta';
const STATIC_ASSETS=[
  './manifest.webmanifest',
  './assets/rackmate-master-background.webp',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(STATIC_ASSETS.map(url=>url+'?v=2.78'));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING') self.skipWaiting();});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const request=event.request; const url=new URL(request.url);
  if(request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/')){
    event.respondWith(fetch(request,{cache:'no-store'}).catch(()=>caches.match('./index.html'))); return;
  }
  event.respondWith((async()=>{try{const response=await fetch(request,{cache:'no-store'});if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(request,response.clone());}return response;}catch(_){return (await caches.match(request))||(await caches.match(url.pathname+'?v=2.78'));}})());
});
