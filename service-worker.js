self.addEventListener("install", e => {

  e.waitUntil(

    caches.open("trex-calculator").then(cache => {

      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/script.js",
        "/manifest.json"
      ]);

    })

  );

});