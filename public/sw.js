const CACHE_NAME = "examiq-pwa-v2";
const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/logo.svg",
  "/logo.jpg",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-icon.png",
  "/offline.html",
];

// ─── Install ────────────────────────────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// ─── Activate ───────────────────────────────────────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  // Register periodic sync if supported
  self.registration.periodicSync
    ?.register("update-quiz-content", { minInterval: 24 * 60 * 60 * 1000 })
    .catch(() => {});
  self.clients.claim();
});

// ─── Fetch (Network-First + Cache Fallback) ─────────────────────────────────
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse?.status === 200 && networkResponse.type === "basic") {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(() =>
        caches.match(event.request).then(
          (cached) => cached || (event.request.mode === "navigate" ? caches.match("/offline.html") : Response.error())
        )
      )
  );
});

// ─── Background Sync ────────────────────────────────────────────────────────
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-progress") {
    event.waitUntil(syncProgressData());
  }
  if (event.tag === "sync-bookmarks") {
    event.waitUntil(syncBookmarks());
  }
});

async function syncProgressData() {
  try {
    const cache = await caches.open("examiq-offline-data");
    const pendingReqs = await cache.keys();
    for (const req of pendingReqs) {
      if (req.url.includes("pending-progress")) {
        const data = await (await cache.match(req)).json();
        await fetch("/api/sync-progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        await cache.delete(req);
      }
    }
  } catch (_) {}
}

async function syncBookmarks() {
  try {
    // Sync any queued bookmark saves from offline mode
    const db = await openDB();
    const pending = await getPendingBookmarks(db);
    if (pending?.length) {
      await fetch("/api/sync-bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pending),
      });
    }
  } catch (_) {}
}

// ─── Periodic Sync ──────────────────────────────────────────────────────────
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-quiz-content") {
    event.waitUntil(updateQuizContent());
  }
});

async function updateQuizContent() {
  try {
    const cache = await caches.open(CACHE_NAME);
    // Pre-fetch the home page to keep it fresh
    const response = await fetch("/");
    if (response.ok) {
      await cache.put("/", response);
    }
  } catch (_) {}
}

// ─── Push Notifications ─────────────────────────────────────────────────────
self.addEventListener("push", (event) => {
  let data = { title: "ExamiQ", body: "New quiz content is ready! 🎓", icon: "/icon-192.png", badge: "/icon-192.png" };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch (_) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      tag: "examiq-notification",
      renotify: true,
      vibrate: [100, 50, 100],
      data: { url: data.url || "/" },
      actions: [
        { action: "open", title: "Open ExamiQ" },
        { action: "dismiss", title: "Dismiss" },
      ],
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  if (event.action === "dismiss") return;

  const targetUrl = event.notification.data?.url || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      const existing = list.find((c) => c.url.includes(self.location.origin));
      if (existing) return existing.focus();
      return clients.openWindow(targetUrl);
    })
  );
});

// ─── Share Target ────────────────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === "/share-target" && event.request.method === "POST") {
    event.respondWith(
      (async () => {
        const formData = await event.request.formData();
        const title = formData.get("title") || "";
        const text = formData.get("text") || "";
        const sharedUrl = formData.get("url") || "";
        const combined = [title, text, sharedUrl].filter(Boolean).join(" ");
        return Response.redirect(`/?shortcut=ai-quiz&prompt=${encodeURIComponent(combined)}`, 303);
      })()
    );
  }
});

// ─── Helpers (lightweight IndexedDB stubs) ──────────────────────────────────
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("examiq-db", 1);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onupgradeneeded = (e) => {
      e.target.result.createObjectStore("bookmarks", { keyPath: "id" });
    };
  });
}

function getPendingBookmarks(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction("bookmarks", "readonly");
    const req = tx.objectStore("bookmarks").getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
