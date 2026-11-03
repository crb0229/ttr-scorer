// Saves the app's files on the phone so it runs with no internet.
// App files refresh in the background whenever the phone is online, so updates
// arrive on the next launch. Change VERSION only if a file is removed or renamed.
const VERSION='ttr-v1';
const FILES=['./','index.html','manifest.json','hero.jpg','usa_tracks.json','usa_empty.json','usa_routes.json','usa_tickets.json',
  'icons/icon-180.png','icons/icon-192.png','icons/icon-512.png',
  'fonts/rye-latin-400-normal.woff2','fonts/roboto-slab-latin-600-normal.woff2','fonts/roboto-slab-latin-700-normal.woff2',
  'ocr/tesseract.min.js','ocr/worker.min.js','ocr/tesseract-core-simd-lstm.wasm.js','ocr/tesseract-core-lstm.wasm.js','ocr/eng.traineddata.gz'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==VERSION).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(caches.open(VERSION).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true});
    if(hit&&u.pathname.includes('/ocr/'))return hit; // ticket reader files never change; don't re-download 11 MB
    const net=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net;
  }));
});
