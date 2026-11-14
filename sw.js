/* Service Worker: legt die App ins Geraet, damit sie ohne Netz startet.
   Nach einer Aenderung an der App die VERSION erhoehen - sonst halten die
   Handys die alte Fassung fest. */

const VERSION = "1";
const SPEICHER = "workout-" + VERSION;

const DATEIEN = [
  "./",
  "./index.html",
  "./Workout-Generator.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(SPEICHER)
      .then((speicher) => speicher.addAll(DATEIEN))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(
        namen.filter((n) => n !== SPEICHER).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const anfrage = e.request;
  if (anfrage.method !== "GET") return;

  e.respondWith(
    caches.match(anfrage, { ignoreSearch: true }).then((treffer) => {
      if (treffer) return treffer;

      return fetch(anfrage).then((antwort) => {
        /* Nur eigene, erfolgreiche Antworten nachtragen. */
        if (antwort.ok && new URL(anfrage.url).origin === self.location.origin) {
          const kopie = antwort.clone();
          caches.open(SPEICHER).then((speicher) => speicher.put(anfrage, kopie));
        }
        return antwort;
      }).catch(() => {
        /* Ohne Netz: Seitenaufrufe aus dem Speicher bedienen. */
        if (anfrage.mode === "navigate") {
          return caches.match("./Workout-Generator.html");
        }
        return Response.error();
      });
    })
  );
});
