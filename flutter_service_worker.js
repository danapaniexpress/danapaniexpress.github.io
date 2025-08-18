'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2416c2520ea41d00593e3a6693126d99",
"version.json": "f6e10581f1ac83910f7c0c0780c5ee9a",
"index.html": "bae27a9839c146dcc8640fe05bd0e4d8",
"/": "bae27a9839c146dcc8640fe05bd0e4d8",
"main.dart.js": "11559a8380313d31f7cd291b89fe9c6a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "960d5f25ca2cddd7595dffa2e167c246",
"assets/AssetManifest.json": "9a443696b0bd0d4fc8ec49cd4f91284d",
"assets/loading.gif": "65ed9f3ed2359657ea81b0ba9dc6374b",
"assets/NOTICES": "316e8807f28fe8786b0225e8601d06de",
"assets/FontManifest.json": "c995b78e13342d83a1252ac95f05e33f",
"assets/AssetManifest.bin.json": "73979f67ca00d49c8675253968b96542",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d55cd7f2c363a9f49322998c77d907df",
"assets/fonts/Nunito-Medium.ttf": "5f504c0f28f0bbbb9ea94cd0b23aef34",
"assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/fonts/Oswald-SemiBold.ttf": "32e8a52171da183dfb2e3a7c73b90ed5",
"assets/fonts/Inter-Regular.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/fonts/Alvi-Nastaleeq-Regular.ttf": "e8cfe56ccaa6ebf71d57fd3173ee4183",
"assets/fonts/Nunito-SemiBold.ttf": "89a76cea4a0f0e2eeaaccaf2afbad11b",
"assets/fonts/Oswald-Regular.ttf": "b299a657c45aa257f1458b327f491bfb",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "5059d18c44fc6afb6345bcbd8db6ef2a",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/prod/images/img_wave_light.svg": "4dd3ea45f06a5f22c800ef98a82748e6",
"assets/assets/prod/images/img_fast_delivery_startup.jpeg": "6bb8c5262ebd301e0f3af84eceb00c7d",
"assets/assets/prod/images/img_main_logo.png": "a2ea4888eb0af3205ade408941961d25",
"assets/assets/prod/images/img_login_screen.png": "95ea3a0b2fc885d9f63e99ea5e82ef5a",
"assets/assets/prod/images/img_fresh_products_startup.jpeg": "e67ce15a8df6de11bb90127376c3cd0f",
"assets/assets/prod/images/img_welcome_startup.jpeg": "c1add674420fe0b631ae6311a159c43f",
"assets/assets/prod/images/img_trusted_by_families_startup.jpeg": "e6ad6e702074a8ed1c17cbaca2f7cf23",
"assets/assets/prod/anims/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/prod/anims/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/prod/anims/anim_notification_light.json": "9ccee9b16b7a4b1686f70637912efae6",
"assets/assets/prod/anims/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/rider/images/img_wave_light.svg": "4dd3ea45f06a5f22c800ef98a82748e6",
"assets/assets/rider/images/img_fast_delivery_startup.jpeg": "6bb8c5262ebd301e0f3af84eceb00c7d",
"assets/assets/rider/images/img_main_logo.png": "a2ea4888eb0af3205ade408941961d25",
"assets/assets/rider/images/img_login_screen.png": "95ea3a0b2fc885d9f63e99ea5e82ef5a",
"assets/assets/rider/images/img_fresh_products_startup.jpeg": "e67ce15a8df6de11bb90127376c3cd0f",
"assets/assets/rider/images/img_welcome_startup.jpeg": "c1add674420fe0b631ae6311a159c43f",
"assets/assets/rider/images/img_trusted_by_families_startup.jpeg": "e6ad6e702074a8ed1c17cbaca2f7cf23",
"assets/assets/rider/anims/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/rider/anims/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/rider/anims/anim_notification_light.json": "9ccee9b16b7a4b1686f70637912efae6",
"assets/assets/rider/anims/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/common/images/img_error_light.png": "406358a245c7ccc6fd8bc866e81bac3d",
"assets/assets/common/images/img_error_dark.png": "cb80d2e4c7abaea35d6028974a308e05",
"assets/assets/common/images/img_account_bg_1.jpg": "98e87164c1f9c5052bbd43cbce9a1d60",
"assets/assets/common/images/img_account_bg_2.jpg": "26993404719f5380643151b61b9c8d40",
"assets/assets/common/images/img_sale.png": "4084968d90de66e9d514337833b7bdc0",
"assets/assets/common/images/img_product_background.jpg": "2f0656371709b722a8aeece0357933c2",
"assets/assets/common/anims/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/common/anims/anim_loading_light.json": "8ce126b60a2b98b5f79d1d5e36757f06",
"assets/assets/common/anims/anim_empty_box_light.json": "082e4d489696c4f66ca16c0d4b0b44e9",
"assets/assets/common/anims/anim_no_internet.json": "ab1ab14dc7169f11392bedba2243f38f",
"assets/assets/common/anims/anim_loading_dark.json": "4347f372bfdc1f8a0ffe204b2ea5f33c",
"assets/assets/common/anims/anim_confetti.json": "4f5b0580c3f7acbf4d4d40773d898695",
"assets/assets/common/anims/anim_empty_box_dark.json": "9a0983a5cd27ec5700d1fd4515645c35",
"assets/assets/common/anims/anim_logo_bg_light.json": "7d3c3de8b70b5086266b88dacb71359d",
"assets/assets/common/anims/anim_error_light.json": "438b1b98a51c10be2afc553228eb6870",
"assets/assets/common/anims/anim_error_dark.json": "152dc355c05eb7620028deaa12c4101e",
"assets/assets/common/anims/anim_empty_cart_light.json": "5807998d5018425b6634acf7b45a8507",
"assets/assets/common/anims/anim_search.json": "667354c259569d343e23903bd00115d2",
"assets/assets/common/anims/anim_empty_favorites_light.json": "e0b7b462c0aa008ab122bc3cc1d7655d",
"assets/assets/common/anims/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/common/anims/anim_notification_light.json": "9ccee9b16b7a4b1686f70637912efae6",
"assets/assets/common/anims/anim_logo_bg_dark.json": "c4363cba291088924a6491f5b52cc853",
"assets/assets/common/anims/anim_empty_favorites_dark.json": "6f0353967aa1da3bfd34bbd3751817f9",
"assets/assets/common/anims/anim_logo_bg.json": "1084cfd75481f06c418749469e889b68",
"assets/assets/common/anims/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"assets/assets/common/anims/anim_loading_light_2.json": "b587eb9497ef585745a915c1ce78975b",
"assets/assets/common/anims/anim_loading_dark_2.json": "fadf3335fdc3ceaf5bc3ae51631afe46",
"assets/assets/common/anims/anim_empty_cart_dark.json": "e6db9388085a5b0342831e10dbefd2ec",
"assets/assets/common/icons/ic_google.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/common/icons/ic_favorite.svg": "bd047930bfc3cc1fb072e80f4e20374f",
"assets/assets/common/icons/ic_admins.png": "3404af44efdde05f823b5cb040fbfe33",
"assets/assets/common/icons/ic_profile_fill.svg": "4ed3d0f9feb9aef6d87a73bb5d9f52ea",
"assets/assets/common/icons/ic_share.svg": "0b7c7804c0d2631b74e5dab882bf3787",
"assets/assets/common/icons/ic_profile.svg": "4e89fb87fefde91ee9e31f4c432cec09",
"assets/assets/common/icons/ic_legal.png": "4be41973709f93315b8a3d252632a0bf",
"assets/assets/common/icons/ic_font_size.png": "1fdded402cd08649f3c61548457668c9",
"assets/assets/common/icons/ic_home_filled.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/common/icons/ic_favorite_fill.svg": "052490339be373322f4effa2528b2e48",
"assets/assets/common/icons/ic_like.png": "70ceb45259253443c195c2976a82b222",
"assets/assets/common/icons/ic_dislike_filled.png": "957cae0674e63c372ad8da2cc80dda63",
"assets/assets/common/icons/ic_heart_filled.png": "11c3f8375ea7f41541fbc3bd9ac88347",
"assets/assets/common/icons/ic_empty_image_placeholder.png": "6efb8f39993cc5fc0f60a9369e3bb206",
"assets/assets/common/icons/ic_arrow_left_small.svg": "e081e697a85eeb7d4354bc057ceb1214",
"assets/assets/common/icons/ic_home.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/common/icons/ic_premium.png": "e1c872bd88f0b99b7f0f25a632996dd8",
"assets/assets/common/icons/ic_heart.png": "8091eaf160f5c9ebfba9d43d0674bdce",
"assets/assets/common/icons/ic_order_placed_light.png": "c3b0e2fe7d537aad9829e6abaef26139",
"assets/assets/common/icons/ic_check_update.png": "4ab2f34ef9709bccdfed054d6ddd157e",
"assets/assets/common/icons/ic_minus.png": "49689b3e1dc8503664d8f130c9ac8f4d",
"assets/assets/common/icons/ic_social_whatsapp.svg": "4f8f476860245ec15d7d943c0d6d224c",
"assets/assets/common/icons/ic_download_fill.svg": "d5dfabacce5f83645d8980d28497eeb8",
"assets/assets/common/icons/ic_good.png": "271ae19d9fa06d3cf017646ee72432de",
"assets/assets/common/icons/ic_plus.png": "87169803b0985e216e34b418e49ce2f9",
"assets/assets/common/icons/ic_notification.svg": "dbcc68e1bd1e1b0a3d030730f92ced80",
"assets/assets/common/icons/ic_order_active.png": "724451c08267e1ef5d22c066dab72e5b",
"assets/assets/common/icons/ic_delete.png": "eb8684228e581738cb7640b0e89502c2",
"assets/assets/common/icons/ic_delete_cart.png": "64335fe75d7c8b7faaef15dc0484294b",
"assets/assets/common/icons/ic_cart_filled.png": "dbd934fe8097895fb0391fce453f725a",
"assets/assets/common/icons/ic_logo_o5studio.png": "7245e91bd1ed9f58d22d9203ad5bf701",
"assets/assets/common/icons/ic_arrow_left.svg": "1c709f27a9587984ef6baf27354ba41a",
"assets/assets/common/icons/ic_very_poor.png": "6433330d04e33edad17ac490d9486d0a",
"assets/assets/common/icons/ic_social_facebook.svg": "644f40fe95020f0b66fedacc09cc638c",
"assets/assets/common/icons/ic_social_twitter.svg": "370a3cdb3945792412804343e50d33dc",
"assets/assets/common/icons/ic_excellent.png": "7da79d025be28d28588f8bdc23c1456e",
"assets/assets/common/icons/ic_arrow_right.svg": "8aa7095308be228b1e9a2568acddcc20",
"assets/assets/common/icons/ic_social_instagram.svg": "faaafd979461a36a6509d26a4934b903",
"assets/assets/common/icons/ic_in_app_purchase.png": "ed0891b2c1186aabef870eeb9a2d40f8",
"assets/assets/common/icons/ic_like_filled.png": "c10317b566b7946eb0f6e593b21b4118",
"assets/assets/common/icons/ic_cart.png": "bea1e091321e347f9670071825aa88b1",
"assets/assets/common/icons/ic_account_filled.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/common/icons/ic_sub_categories.png": "6747f42f364385fbfc9ad62ec15b7340",
"assets/assets/common/icons/ic_order_placed_dark.png": "b15b882e8c71eb8f5d5ba0a53310ccf5",
"assets/assets/common/icons/ic_flash_sale.png": "c9a379af2e3183444b52520ab51ee32b",
"assets/assets/common/icons/ic_order_completed.png": "8f2b2385556c37f733195973218842c1",
"assets/assets/common/icons/ic_faded_admins_logo.gif": "0a7a6e98691dc0918bf52892f3a87be5",
"assets/assets/common/icons/ic_order_confirmed.png": "ac2974eb199afce549cf83300e57d8e5",
"assets/assets/common/icons/ic_account.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/common/icons/ic_arrow_right_small.svg": "1b4362d2cde6a79ff97b680076ce0e25",
"assets/assets/common/icons/ic_email.png": "46c64308a7986469ed799277497c9f81",
"assets/assets/common/icons/ic_neutral.png": "5518e764c6bbce8ae4e1134e2c79a6c8",
"assets/assets/common/icons/ic_order_cancel.png": "7ea3b6db61d4d89399844ce404ecb0a6",
"assets/assets/common/icons/ic_download.svg": "9b26b0ddb79242f29bcbe7ec2660abc4",
"assets/assets/common/icons/ic_radio_button.svg": "fd8efdbd215188aa38c03adc621ca4c3",
"assets/assets/common/icons/ic_categories_filled.png": "be66198dbe96e8d9ebdac8db782ae661",
"assets/assets/common/icons/ic_copy.svg": "36fdc0d1b2f06752929c04b42414eb20",
"assets/assets/common/icons/ic_search.svg": "f8b462113c007351253a6a9ebcf74abf",
"assets/assets/common/icons/ic_radio_button_selected.svg": "3de18e529970f89ed722cffe933e1610",
"assets/assets/common/icons/ic_dislike.png": "054dd52b44b89a5148349be86d88bf30",
"assets/assets/common/icons/ic_star.svg": "1c4ba40a842065f8083ae65209023b7b",
"assets/assets/common/icons/ic_categories.png": "0d4410fb3eed5e2c311fcaf95f87808a",
"assets/assets/common/icons/ic_poor.png": "6e0ac0d5e8b61274199e225a229209fa",
"assets/assets/json/categories.json": "5616f09815d220d498a1928ff0976148",
"assets/assets/json/single_banner_home_one.json": "bf5895add293995f0574d33ced006f62",
"assets/assets/json/ordered_products.json": "6bcbcecac6881311bdc64fa2928b025e",
"assets/assets/json/body_pager.json": "4b2b0402f3b7bea66a789e2f54b4519e",
"assets/assets/json/cover_images.json": "7787ab385adf6dd7d4b3b3d55cbdadb9",
"assets/assets/json/marquee.json": "353d8ec73d32d14ba7c86c2451f1b869",
"assets/assets/json/slots.json": "543351a93ffa59edecdd499a5108f3f8",
"assets/assets/json/cart.json": "ebb18e5baec276c570ad7533cc437153",
"assets/assets/json/appbar_pager.json": "5f4440676d955eff774b6f92e1256c32",
"assets/assets/json/orders.json": "195f068c7cc4b44e1cacc7efbd6a147c",
"assets/assets/json/users.json": "1e0c1bdbe2ca874741b2aa0f5f03e600",
"assets/assets/json/products.json": "307df37530c6c9c674551839156ae040",
"assets/assets/json/favorites.json": "f2787d7d5e8236d62a90fc9d227bf699",
"assets/assets/json/flash_sale.json": "e9fad5a9c889450c05e08f1e3b421dff",
"assets/assets/json/service_area.json": "9a5d6897ee74cd9fcc96def9c5bc3dc5",
"assets/assets/json/order_feedback.json": "90e4185312d823d0d8bd0bf45455840f",
"assets/assets/json/featured_products.json": "8123f04d3fe405f5976535cf4cc0d231",
"assets/assets/json/rider.json": "8d5f5731afb320a1792801dab73ea9ff",
"assets/assets/json/single_banner_home_two.json": "a1c996a264a5da3283e2ce6bf1e7e740",
"assets/assets/dev/images/img_wave_light.svg": "4dd3ea45f06a5f22c800ef98a82748e6",
"assets/assets/dev/images/img_fast_delivery_startup.jpeg": "6bb8c5262ebd301e0f3af84eceb00c7d",
"assets/assets/dev/images/img_main_logo.png": "a2ea4888eb0af3205ade408941961d25",
"assets/assets/dev/images/img_login_screen.png": "95ea3a0b2fc885d9f63e99ea5e82ef5a",
"assets/assets/dev/images/img_fresh_products_startup.jpeg": "e67ce15a8df6de11bb90127376c3cd0f",
"assets/assets/dev/images/img_welcome_startup.jpeg": "c1add674420fe0b631ae6311a159c43f",
"assets/assets/dev/images/img_trusted_by_families_startup.jpeg": "e6ad6e702074a8ed1c17cbaca2f7cf23",
"assets/assets/dev/anims/anim_notification_dark.json": "f88616ce1af50c2741919e0a664d6731",
"assets/assets/dev/anims/anim_light_mode_loading.json": "68718c249484f0b9a221a63c4fb06dbb",
"assets/assets/dev/anims/anim_notification_light.json": "9ccee9b16b7a4b1686f70637912efae6",
"assets/assets/dev/anims/anim_dark_mode_loading.json": "00faed1ced4ebfd04d0b78587fa40342",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
