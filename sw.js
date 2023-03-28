
self.addEventListener('install', function(event) {
    // Perform installation process
    event.waitUntil(
      caches.open("static").then(cache =>{
        return cache.addAll([
          "/", "./src/master.css", "./images/alex-shuper-JA14fUcNKFE-unsplash.jpg"
      })
    );
  })