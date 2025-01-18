'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90d1bab07e7dd1fafdb796ffd2eef186",
"version.json": "2ccde5110703d50580c25ed4647df613",
"index.html": "f6a3b21bb92bd3ffbcfc452d4a07dd8c",
"/": "f6a3b21bb92bd3ffbcfc452d4a07dd8c",
"main.dart.js": "7dad6062d16b7c97c5c6b06d683284d5",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da0c7105a6278484692779439e6dbef9",
".git/config": "7b54aff7d0d7f09dd2f83af26746878e",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/3e/c706991b8a3329c368ada6344a967031267134": "e099a098390c83a5f2e4c7eb3614d5d5",
".git/objects/04/32ed97469e6269675728645f3aadbac57648fa": "8828f38608afd6014f1714a1e2713581",
".git/objects/3c/cff4e8a32afae4c46953735996c902feecccad": "d96d3e07e2deddb3535c7b839c335101",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/51/901e9996fa3a321605737ef40fc7378369125f": "4d3897b379c4bda8a6f43846969add6d",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/94/0fef4067d7aa4212bb4d769075e801d71856e6": "34754e133815f2fe0eda823862b333d6",
".git/objects/34/e569dce1470af1e42a66605289037dfe567070": "56a8cf3a712a5cf56b84992dd1b3976c",
".git/objects/5f/8761e0469fb3260f80290ec0d700bd002657e3": "57651a7741e5b1205ac01d61020c50e6",
".git/objects/05/d42ad058e66640d9915c3e0232ec2051b91cad": "414c579d0b6104d1356d2df2824afd6f",
".git/objects/9d/465c00052afc84016c3e2a0ce6350af98f278f": "7acf22f5a912959502d05f0fd9958b81",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/ac/58a0ddd29bca91e68c18061ce46b3d455dd68d": "e82b0e7c599473a1da437f05f0ecfaf7",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/648640909958686ca6959ad4406ef18089e70c": "8eebd0becc8f1cf8ce5f6168f09285b0",
".git/objects/f3/98d186f588df9142115773dd91c5d7ea2055de": "124b97d372a7ea5eba1a91a7452fa5f8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/c1/063e84df51932ba0ddb34d862105fce30a9589": "4a2cd2e341c9990c3e9061333a4986b0",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/ac3d18c9f889a17fee05fd95fcb0c76991d329": "9b20442c629e731a2cbb74d548f4bb4f",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/02af4f4693592b1604feaa10f7ccfd1cc61720": "63687a3af3a67f94440f0a8fc844e85d",
".git/objects/4d/74560f5084dc0c6758088fcc687112c3fa08dd": "765f65fb885d7ea21a8671d07085d553",
".git/objects/44/d296ad4bcb33d827dd39927c1b4198162cd959": "afd81f674fdd70274e36bccf7ef1c6e8",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/43/9d16b4256ea205071f6175125d87447ea16942": "bcef0ed9e599202fd03024ce9a294647",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/765a1fc0a81fa589649a4f91d4ab6fabd4a7b5": "ddf4b823cfa7f30c341d8ea02f9be48b",
".git/objects/07/2f33248d5bea60e048115b97cc9fe9de79e8ef": "0c3691f6bc72bd850d1400ee7c1d0ddb",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/9a/4590ac9b97060ada8f883036543bd4a6975374": "f784227c52a618135c0ff88aff5db71b",
".git/objects/36/ecd406ab78aa0d272d37ca727a88b8e78b57e5": "ae3ef607dec6abd6e3a9df91f3e453c2",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5b/d2e66ae36660c4b9f290a4e02b861520048f1e": "947e343912d7fadeaa010d1d898187df",
".git/objects/5b/a48e518a95611e03302dfa28e0d85d2d2edadb": "3590d6f7c18e3f48f616d4ee1b480b2f",
".git/objects/08/b5cdcf97edf5315b1e81145cd6d2e92b5ad6f0": "5e2a9df7f4098e55b6582c448fe8cc46",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/e5dc9af6e1093966c5cd42d608fd6fbb6a0c59": "769bbf0edfb872ed024f198c9d8d02c4",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/b6/5164de707ffeaf0adfca5fca65532bf97e6903": "b0c794f74453ae77a83e942b9d58d94f",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/aa/2e0e1b4b3cdcfda47dcc5bc00be462183b3a09": "e8710ada15bedb7fd31013bbafb14509",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b8cb6b5e65cfc20e41a2a5310f392b415255c5": "c8955169edefde0aa25fc8b56f2c4b47",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/f3f9b150b1ac6b30bb2f0209536e88ef97f7ae": "2c0723cd24fc91af24311e75900ce368",
".git/objects/ef/4ca308ec330d23a5c96d807a58ce303ecf22fe": "9f0b18acc9e5709b47d11400a1c5e9e2",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/e6/ceae8b41a497ed557309c22e8af49347bc0885": "25dd510b0e64a8eb2c2442ac9a5c5cfe",
".git/objects/f9/7efcf4adacf18b4eac2bc5ab081cc85f699b75": "cc3f6104b2d7c854f15a139160b9675c",
".git/objects/f0/9afde8e883ec19c257141e66b36c08bb6cb885": "1d67caf43c1ba87a9ff859fb71e67fbd",
".git/objects/c5/f53e78e0af2a90cafa5d3c1e67f8448750466a": "0ba0e31ceeb434224b790e573e5dbde8",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/f8/f2f28dbb57b6c2402014606d66b75800dda142": "32555d763f21e0ccbd199a6f58ff42ff",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/e0/ad32a234e426bfd25538338f4105c64528705f": "562204313cf73e7b8aa9c07862a12684",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1e/20835b074e3f27a9e2778bd1a44878f276c487": "cdda4bbc41c561237dc91f92b09d1a26",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/4f/52529cb2985cf4290d38d130b6481d73b0e6aa": "f10864dc07334a518b08f5dd58689817",
".git/objects/8d/24f1405eee2f40bdbd074bb7f5f3ec4c9b5765": "8de397d259d3902a0d24eab672dd2597",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/25/f10b68b1eb5a1da7bca11bd8b1ff719d751b35": "466597df5af861ae7f2330a72aceae2c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "27548fa3aec375b7b7649c31731bdc59",
".git/logs/refs/heads/master": "27548fa3aec375b7b7649c31731bdc59",
".git/logs/refs/remotes/origin/master": "6863fadd600b1a7b589552a500811bf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "0be9dd2dba3f720f74c9d5bed902e1c7",
".git/refs/remotes/origin/master": "0be9dd2dba3f720f74c9d5bed902e1c7",
".git/index": "d6a7a7dcb328a9846a7a86d5738d9ce1",
".git/COMMIT_EDITMSG": "2a364b44b2b8e8b4a8a610b0f1ce6566",
"assets/AssetManifest.json": "b2839dfaf5fba4c718efea8c0e4d430f",
"assets/NOTICES": "e20e8b2545ff40f4ff2e81bb4daa60b3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "816171812f32721be66f86fd588ed1d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "064471c9810cf5d652055cfbd64c3851",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4569f8248bdadfa1d148dc6bda6cc88b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c4f84971509c13d22c40bb2fbfc23111",
"assets/fonts/MaterialIcons-Regular.otf": "852f553945ae7208e8e27e2f87834a48",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/dogs.png": "01dbefac9b5486ae79f04cccc4d6807c",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/fishs.png": "2ee3a46fc5db178de971418661eee2e5",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/sola.png": "643618f6a0c830744856fe480be749a6",
"assets/assets/images/parrots.png": "af63283cb3c1cc72402931ebd47d41db",
"assets/assets/images/Paw_Print.svg": "ed5fe8fa38650fb69ad0740f0b65fe42",
"assets/assets/animation/loading.zip": "4946293f035b91dcf20e421c473130c1",
"assets/assets/animation/no-data.zip": "664fb820a5b0a64aa6d21d773dfcb4f0",
"assets/assets/icon/icon.jpg": "0743f6505927177b4001fddde80c60d2",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
