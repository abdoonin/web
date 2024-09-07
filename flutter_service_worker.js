'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "b9528b93d7bb3ad1864765ef5142010d",
".git/COMMIT_EDITMSG": "238d667d1356b17883711e0d92caae88",
".git/config": "cad35f19bc55e069b47d2c71fb8e54a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f31ae136d3cc90a4e6ce2ae384155d56",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "808c5b24d03290db3c8cf5ae6c0e6da1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "963430b016a730b63078e73a9af24654",
".git/logs/refs/heads/main": "a59710130d6360338cb21364c4a50039",
".git/logs/refs/remotes/origin/main": "b872b98f4506b0a19c80ff1e6b84d6bb",
".git/MERGE_HEAD": "255b6d450e8b6d95e6d71d8f1b8ed6b5",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "6a47c7d3be663fb9559de264bf850283",
".git/objects/01/c63a2f790acd554ef02b5417ef741999439071": "537d799a073ecf363fddaaeaae3abffb",
".git/objects/0c/94f8ed6cb0ac955b3b59a2ba0e788f5c4173bb": "8e3d2948434e1f19d1e65bc5846da2f6",
".git/objects/0c/b91b5cef3f954b4883086e10ab766b687bf492": "882fe59e6a3e1ae6ebb78e2fa4e66be1",
".git/objects/0e/a66924bae9e5e7a46c1cfba06a6720067d5f2f": "6f9f76c3d32fb8f2277506ae05f6f86b",
".git/objects/0f/17c260427877a71dd0b9100234a81103f961f6": "dce57ee4b98384c7c7b386118a04462c",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/52c7c28a18ddc64e7e1468f9d1da5a9a8768ab": "b74a316766129286a4768cc1b4b3b8a9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/203151d3f74b590ba96fad6ca88e73cdefdaaf": "336a0a9ec76914239f46f613871b1ea9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/57d6a457699edcdbd7cf7cfe07024c973327e1": "ff4f6f63ad1e9b8e1c7e763bc1988acd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/2235c96fc62cd73cb3b82103e850d0b496ac24": "accb5e3d1bdae4fc70843a3415b4d68b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/a9a3fbb0d25a8f1d1d00a08d400b0a247ae4ea": "cfde070c81311b2cb1deb55d584988a0",
".git/objects/22/f151f5a5e15c31be38379cef1cdcff2522615b": "b408170726b6eb9a0d8bc3ea60714bc5",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/bd2d220a71605bf329391c35c362c459409a33": "9bbeffb0eea86d7972818e8690d8814a",
".git/objects/28/475594c316917c141f3d2b218d5598531fd384": "575c96652a52ca48ab8cb6570004e1e0",
".git/objects/2d/21b2498e95fc1cfe22c8256f7354477d5ccdf8": "2daaf228fc8c07a3b20bd37e549c06fa",
".git/objects/2e/540e6e399d4ecd4327f5ac514e4030da5d95b8": "675483a356b2034fc9891e8b8adf599c",
".git/objects/2f/9812ada1c5b6ea6c70375f284048be1737d512": "9dc7fe36e4688fb8bc6a224232fb771c",
".git/objects/30/7d123ed37fd40e61ab1f2f7dfc1d52184f9a21": "24a8c44d72943e6c46a00fad0c51aa17",
".git/objects/30/8598fedd5d8d9c84522311a9dc408798243f7d": "8be66d4bffbbfac93eadeefc2cce6e31",
".git/objects/31/b8f569b54a919889d3b8f0048c9fe15241ccbc": "488abf027a8a783538992851f320bb1b",
".git/objects/34/8adce9a6855cf7d839565b311eca574c24b770": "67c8689d318e65003273d88280c1ff5e",
".git/objects/3e/6842ee3158a085c120e1fed28b797a0c91827a": "c359015c39dd2de293688c9a63ae68f4",
".git/objects/41/e033e83fdf53a2b771e0e6b66588e075d8a58f": "b472c7674d2e2a889857c9101a1bac4e",
".git/objects/43/e8c9f2a3637186f5e94ecf9088ed49ff314534": "847fdc38856ad6110490466e6c23a6eb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/0c32839de4faae8b7c270661f5cf876d815fce": "40743e7cb7770df107fb1cae1e1c4e1d",
".git/objects/4c/fb2ac7aed263aea3ad1ed79e5b9ac40cfc4191": "03417906e354990cbf26d79ffa8a89e7",
".git/objects/4d/672867a4bf387aaba53ff2455ed55a05a9275d": "c108a53535eaa260d1fff2a24b31fffd",
".git/objects/4e/e0aa1b1dbf3644e1853315be9288f5b1b5abe9": "39d4e4e1626aad22366538ff78e8aadf",
".git/objects/53/e5e9bf1e8c6af7ed36c932d30fc2bf95ef5562": "e86c803a5f4c80e85d0011ba2707a4b4",
".git/objects/54/9f8dcc17084836f79fa5b2a3fec7c39962bef8": "11cfbeb0d3c763189026745a19bc198e",
".git/objects/56/1c9d4267d09d506e55c1228f4d66d995270585": "aefb1ea8cebe7216aadc75393396b44b",
".git/objects/56/faaf45a1bbf6172ece4fc21e2afbed1d00b062": "2b9ec7d60405cd67d7839dd7c71806f1",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/1e8122dfa6fa42be7a1f7d4f9439eed78d6690": "4a60e39efd34763ed0eef4ba1429e6e8",
".git/objects/5d/dbd6179c0d3e9df327ff49228440963e4e3fd9": "2638fad34d38b1e6ad89602adc564152",
".git/objects/5e/fe9a653600f8f69e61e3a64b24a5e09e184ae1": "5c0a03572400e124002ddfb90f7385d8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/1576db8e5d6a141e5ae10e99cb0041acc21c85": "58ebbb1bec797181b8b63c745224d10d",
".git/objects/69/2fab5e4d787f47248aa7873a2a5addcd12f8e0": "f7f3db045666c2a6be57ed2335710cc9",
".git/objects/69/e8ffbc8d8ed352989893de0f71fdf6b3d53c8e": "484aae6e66656246117edff73bdd2037",
".git/objects/6b/f85e44a5cc9e9c91df39dd24e58876f877f34e": "8140f2a6ae7c24fa22fc1c7be1e84d32",
".git/objects/6d/2678d694f2cf82cfadafacd031623da904cb43": "65f749d3a2d4b4997e1974ec1eb5c87e",
".git/objects/6e/3bbddd0d4f94ff84d95e543f121c7094585165": "d467a46f0206bfff6b7bd61fbd76f9ef",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/acd4b843a2922a8c93905e77e45e4eeb423ea1": "f181e384f52b67ec26ece854b10c89b6",
".git/objects/76/0568a668f3f6408d82a2265032b544790325ce": "2600091800d4d001a62b23cfc6515b7a",
".git/objects/77/d17dba21430f14c012ecc263c058615ab00697": "4f5c52a27724a93936be5b778f7bcb26",
".git/objects/7a/36ffa490fd29431ab6d21b2864cd15611ed076": "49c059d0a525eb2ed4ace6bfbb5ae093",
".git/objects/7f/ea9dc33beb5c9806458ad91e7e8a790002b47d": "291d8b1f8cdfe8abc198716e97728e82",
".git/objects/81/8667bb3dffc9537020f52baedde1734c11561c": "300f0a625d247306e35b7e262dc046d9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/6ceffd950f9681fc9d32de08a2a1036994529b": "abeef2abbcb4622810464b8c6e076329",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/779574e9d892e60276656ab6e7100839251e8d": "d0842dcd48856bb21cb968b1c685fde4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/54179107a6ca42e8c70aecdbb85256fc8c5a41": "9cbbc9457c33c3baa54e1bb972c47230",
".git/objects/94/f69be0565d63ac15d29f2cab68cb93d623acae": "37269efc519984019ecda297d0e0d9c1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/e4e89251fa31eb9fc2d14eb6fe61a6f5189efb": "0c955094f361f4a2696c23b83948c548",
".git/objects/9c/7749fc3aac06544a581e4eb00296cd14f23577": "2699b927ec5e9c86888f02ef3dcad5b7",
".git/objects/a0/00133c33755a15beed54d70be065a155b010ba": "39507da41668bf27f27b576f3580d8b6",
".git/objects/a1/e6fd1c60c46fb705bf5399fbe34fb3264aef16": "9405ac5a326fbe1fc66d9a96dab3afa9",
".git/objects/a4/9e3e659bbfd985f1e0408e36f389a7f3d1bec7": "2427de60148a033f26c3b3c811bb57f9",
".git/objects/a5/06362ca07c9c5038717dc4216efa3ce011b413": "062a78774fb5252ba6ce05e2583eec1c",
".git/objects/a5/f57ecec99db82c29de4676dbd328b40924dbab": "443202c8af5a13d926b97e3feca624dc",
".git/objects/a9/5533cb4d008a2bd47fe4fc39ff9943daf76f11": "7006f9eb51b2c6256a80590a8e396508",
".git/objects/ab/e2877cf0e3c9bd62c65363a998c6da510261d1": "c5d3fc2d891ed32c71120d756dcc2016",
".git/objects/ad/8af00a2038a15d7b0534ef86e29b4ff8513660": "9210179f446d5a38acd73229a8cfb0cd",
".git/objects/b0/84be950d2fa17879349a98ba2d2823f4e9d074": "15f16d53d58dd8ef4a5314039549718a",
".git/objects/b1/94b998963c22d8c37f7ccbfc21062524f006b2": "77fdc9faaf9b21c57d3e63e0116c8d97",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/cb8ad32167da3ae71bdacad1747f54a2f2b880": "7bb4bb93f8ec5b767e691877c81a9a93",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b2c7f0530852c656f879ef1bb4e53dc71af192": "a98cd0cdf1fd5156aee9d94868cb2b88",
".git/objects/b8/f5bcebb13fbb3be5b1d72151800e9fe4c25d55": "92ee494c5e0bf1425ef89b745df646b8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2856ff003392fac1d0d1cc8e3e3dc0bb1851a5": "26c12ce7efddbea58bf87c115c9dd737",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/ffc49c07ccec42b4acccf6a3d2701f7601ff5e": "ea4b5d72ef440e4b63e2c1412f3f80b4",
".git/objects/c2/21eadba031fe03f02783e04a657cb3316a0795": "88d77c2abfb5cabeeba111d753d55c36",
".git/objects/c5/29d4001505c21c9832353ace5f715a55ba3d0a": "40000bd25e35a61a79adaf6f403dcd08",
".git/objects/c8/33f7ecaeb4ff4ec43b8d1c3ba68f6baade17ce": "f6a29ca906a15ad517d44bd038a3961d",
".git/objects/c8/8e3076b1e662e968ee2b031d978363dff373a6": "a47c8b2851d765b6bd38ef1321b10724",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/b61588cdacd7c441d6049627f43af4ac10768d": "2ebf4484c24ea9a9de0f4e651c83b7a3",
".git/objects/cf/15e3e8bf239842730a8115907e00eb9809259e": "177ed7ce802f2be3c0eb593941ce7fba",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/7d5a8ea627f296eebdbab2734025460452ea83": "d5db3f280bee817ea7508161c514dcd9",
".git/objects/de/b14e4845404a0a18c121d88be7fe8814fe479e": "860a1d74f8dad290acc5a7fa06b3c88e",
".git/objects/df/0f1aff1923d3201e77e4c700a0e429c97c4adb": "1b29effdd40de3efbb7ac968f7f73f93",
".git/objects/e8/b1b316cac8cbb39408f8fb73d0a37f3bbeefc4": "273cefbb0cecc643863d8b2ce3a0086f",
".git/objects/ea/1889f1f72f37dbdab5bc8f2920abe99b2b8c42": "f6de8c70251669001102b48fdf168e73",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/87aa04070c6631d403cf119161e03e17d4410e": "74c9db429d41b767b0385f4c94f423b5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/c2aadc2895a55764082a280d464f205a0e0dd5": "c786d51108e4989fd627d5405278beb7",
".git/objects/fe/5972365d9df0f855f0f7ed2b98baf51fb055ba": "154fdfaf439191375c6a1a00f92f6321",
".git/ORIG_HEAD": "84375dc8f59b5672de386a9e8b7a5015",
".git/refs/heads/main": "84375dc8f59b5672de386a9e8b7a5015",
".git/refs/remotes/origin/main": "255b6d450e8b6d95e6d71d8f1b8ed6b5",
"assets/AssetManifest.bin": "2bcf49ed8df93c424dfd7d28c3109ee8",
"assets/AssetManifest.bin.json": "8e4dfd9bb8e0dc91fc3fc1b4d7558fc1",
"assets/AssetManifest.json": "f27179ea68260e89cd2a1b09fb82f491",
"assets/assets/icons/check.svg": "dd735539b67e97568c995e71b425c523",
"assets/assets/icons/download.svg": "85409fc366bce11d88e301d19f0cb83c",
"assets/assets/icons/dribble.svg": "afe18831fbd18995b8414abc50dd1c3f",
"assets/assets/icons/github.svg": "fbee22e344e5baf90c46325fc6f0fe3f",
"assets/assets/icons/linkedin.svg": "c94cf806f5fccbdb0cd138f73214951f",
"assets/assets/icons/twitter.svg": "96281107839e6dd7eae214fc2b3d0f79",
"assets/assets/icons/web.png": "273dd293f5cebd1dadb83a630e36db8d",
"assets/assets/images/background.jpg": "6c30401cffa8c55fcb28461ad9871eae",
"assets/assets/images/client-01.jpg": "a8cf784c0b156eca9abc445bda2b60ce",
"assets/assets/images/client-02.jpg": "ae275e44e888e08805acc21b28a3db93",
"assets/assets/images/client-03.jpg": "1c40bab606aefabf545df0f535107dcd",
"assets/assets/images/logo.png": "85f483b926b14da6a87ed097761ae50f",
"assets/assets/images/project-01.jpg": "9732f3ae219a179802313b0c6d592d52",
"assets/assets/images/project-02.jpg": "dc60d019ee7f5546d8b815ce9ca837fa",
"assets/assets/images/project-03.jpg": "ad46b01c47af2cd3d1431e06494caffc",
"assets/assets/images/project-04.jpg": "54d3c3cacbe54c6acf176e6bc0ef0e9c",
"assets/assets/images/project-05.jpg": "3b8a778a22ef08e5bab2ed9c41749be1",
"assets/assets/images/project-06.jpg": "69c1835b11602d73f02f10a2238ca881",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7f8372be70fd0f0de55d27699419ad39",
"assets/NOTICES": "9ddddec60e3775868e138879865d7132",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"canvaskit/canvaskit.js": "4d65242fccdb38953e45f906580087a5",
"canvaskit/canvaskit.js.symbols": "68b4c27088ca664bd398c84602f6de11",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "9fc614fc55d9c852d4cb69570e9eb2fa",
"canvaskit/chromium/canvaskit.js.symbols": "6d72c539b91c938625180cd26d5af7c7",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "01111146932af09cee166932d1a83d3c",
"canvaskit/skwasm.js.symbols": "ae71f1f1dabb12c89961a6be7d646b79",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5bc83814f3f68c3e5f8f6b6bdeab1f50",
"flutter_bootstrap.js": "beacdc498b594e957545e65bd42b42e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1d8af5659798efa2fae9915c5cbb5182",
"/": "1d8af5659798efa2fae9915c5cbb5182",
"main.dart.js": "72ebaf1ea072a25501ce9d03a4e3c8a1",
"manifest.json": "64bd767f91d735ceee1745b57784828a",
"README.md": "2e7d58d069dcf84f3decca78db0df3f9",
"version.json": "84996003fcbf1fe4e97a738dd6380cc6"};
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
