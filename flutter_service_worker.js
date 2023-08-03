'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "9d991cc90940262aba43873959be9b60",
"assets/AssetManifest.smcbin": "aff42d187bd55732d49a9dda851fe72e",
"assets/assets/documents/Homepage.pdf": "ac784496a72a28ffd73b060058ead643",
"assets/assets/documents/test.pdf": "c7c67fa9539adc0778e30ad77118eafd",
"assets/assets/documents/userManual.pdf": "71755a5e7c401195aa132f0164f2d096",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Whisper-Regular.ttf": "31ff5ec762769cc295fca678de23a35c",
"assets/assets/images/appLogo/BCSC-logo-background-removed.png": "a772b7f73f69f0e5fc0824c86c1d4957",
"assets/assets/images/appLogo/BCSC-logo.jpg": "e06427cdd7a243675422c3d0e6659cc0",
"assets/assets/images/appLogo/BCSC-logo_transparent_icon_only.png": "f9852f81740335ef1278770efc3b9839",
"assets/assets/images/appLogo/breastcancer.png": "1561fe12a7a48a0b32dd137cda36d1d2",
"assets/assets/images/appLogo/formula.png": "d30533ce0624941d39951ba3b2f39bc8",
"assets/assets/images/criteriaNotApplicable/doctor-svgrepo-com.svg": "f04ee754f2a9f7175671f7219d5f2919",
"assets/assets/images/criteriaNotApplicable/medical.svg": "45c4e78f8aec13d7db8a15a0eaee7f3c",
"assets/assets/images/criteriaNotApplicable/microscope.svg": "1f5682376c4e34c2a0678f354129a485",
"assets/assets/images/criteriaNotApplicable/person.svg": "ce6d9489f97896cd8a586d3d94d89ea0",
"assets/assets/images/criteriaNotApplicable/surgery-operation-surgeon-operating-room-svgrepo-com.svg": "715d4693773f77259d1d592bb4773c0b",
"assets/assets/images/criteriaNotApplicable/xray.svg": "cc80126db146d843f0f396fe8cdf270e",
"assets/assets/images/hospital.svg": "844fd7132a7fa441e6ddaca512433027",
"assets/assets/images/mobileDownloadLogo/googlePlay.png": "21a3ef42c43e9abc5c8a855c9e49a8a7",
"assets/assets/images/mobileDownloadLogo/iosStore.png": "4cd4b8556ff39db78b7cf78c7e635fc1",
"assets/assets/images/riskFactors/hierarchy-people-team-svgrepo-com.svg": "adaac633d87266679a05195f319e81f0",
"assets/assets/images/riskFactors/history-svgrepo-com.svg": "8b6a0034361613100c8f515de86c188c",
"assets/assets/images/riskFactors/lactation-svgrepo-com.svg": "e333f4109dc4a926a1b507706d158a03",
"assets/assets/images/riskFactors/medical-history-doctor-svgrepo-com.svg": "ada1c15815bfb4949fe5944a3af2b64c",
"assets/assets/images/riskFactors/people-svgrepo-com.svg": "d4cffd74a633241eca5d6a9a0431e4da",
"assets/assets/images/riskFactors/person.svg": "ce6d9489f97896cd8a586d3d94d89ea0",
"assets/assets/images/riskFactors/scale-weight-svgrepo-com.svg": "d3b47ca50e98f095fcd34c9598dceb59",
"assets/assets/images/riskFactors/user-woman-svgrepo-com.svg": "9eafc0a3ff28f6791ba972780674eacc",
"assets/BCSC-logo_transparent_icon_only.png": "f9852f81740335ef1278770efc3b9839",
"assets/FontManifest.json": "9dc452e6267f5de2fd6572e0e4afb3ad",
"assets/fonts/MaterialIcons-Regular.otf": "200254922dccc17a0495d3b9662153e2",
"assets/NOTICES": "870c3597b7d688da0f0580622cca8886",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "6057627738575633edae0ee5bd0a6f34",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c86310e44b2486e8e33b4ecbdc3f24e5",
"/": "c86310e44b2486e8e33b4ecbdc3f24e5",
"main.dart.js": "79890df066a0ab4e86b5afd21e999f00",
"manifest.json": "c90d92002e1b1e915c55d6890258cf9f",
"version.json": "a47e180c6ea035114d1d8f8cca00d414"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
