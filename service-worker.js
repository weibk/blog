/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68a9dfd8706f4f9b692038a9f2422de9"
  },
  {
    "url": "about/index.html",
    "revision": "226a93b8299e4d60b3afdd46189f9fb9"
  },
  {
    "url": "assets/css/0.styles.e1f44cb3.css",
    "revision": "05350b0dcfe6b5b6c5eae409cf5aff2e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.d1dd58f4.js",
    "revision": "cced7be7b90aac8d85d8ef7a357adecc"
  },
  {
    "url": "assets/js/10.5014239b.js",
    "revision": "3592cdcac0850dc4ae98027c7db3caab"
  },
  {
    "url": "assets/js/11.ac8c9778.js",
    "revision": "ebfd6ca8a353206e91f279e2aabfd0dc"
  },
  {
    "url": "assets/js/12.c2ccecdd.js",
    "revision": "45abbe26b40bf867975beb43f7c0c207"
  },
  {
    "url": "assets/js/13.5e5c1d2e.js",
    "revision": "c88021c3c582d6cb97c4d3a0b0b2d0fa"
  },
  {
    "url": "assets/js/14.601da206.js",
    "revision": "fe5a3acd71acf588accba48e0dbcf0a4"
  },
  {
    "url": "assets/js/15.4a7b6b29.js",
    "revision": "b5ecb9aec0c7de57552df5120e0fe907"
  },
  {
    "url": "assets/js/16.4e83269f.js",
    "revision": "04ba8d84976a200873ccc05bd49940f8"
  },
  {
    "url": "assets/js/17.65951b8c.js",
    "revision": "f20fe016b4fbab802ccfa77ec3016bce"
  },
  {
    "url": "assets/js/18.01f91a2e.js",
    "revision": "cdc04dbc42c8f0b5f3ff0a3a2994e57f"
  },
  {
    "url": "assets/js/19.66161830.js",
    "revision": "c6d6b3735b4b85207384480f5b6011cb"
  },
  {
    "url": "assets/js/2.59f49ccb.js",
    "revision": "76b4ba25fe56299343c104403bc9a623"
  },
  {
    "url": "assets/js/20.0fc42d86.js",
    "revision": "84b16d665414ca7b35f27b1642ef2638"
  },
  {
    "url": "assets/js/21.989b5157.js",
    "revision": "37884d0a1054771a1cacb9954df0fa53"
  },
  {
    "url": "assets/js/22.bf2c04af.js",
    "revision": "104979ee792ed6e3651e0b9539dabd0c"
  },
  {
    "url": "assets/js/23.16190286.js",
    "revision": "1679fac075bf6db7d7d03c2451001c30"
  },
  {
    "url": "assets/js/24.60ddbf90.js",
    "revision": "c760a452ba3c05850170a6acc8a3ddcf"
  },
  {
    "url": "assets/js/25.3eac6dc9.js",
    "revision": "19445aa1e6bef7a61cff9e89f860026a"
  },
  {
    "url": "assets/js/26.c4ab5aaf.js",
    "revision": "d0331664b43221dc8a15751d9e225ced"
  },
  {
    "url": "assets/js/27.aa8c52c1.js",
    "revision": "373a1d04fc94d9d0d0e0c3b04f951de2"
  },
  {
    "url": "assets/js/28.71aa1121.js",
    "revision": "8395189c2189319e6b5a246a3ccb562d"
  },
  {
    "url": "assets/js/29.9b620c91.js",
    "revision": "f49a72af563c3e8df1c928de894865f8"
  },
  {
    "url": "assets/js/30.12ffb360.js",
    "revision": "2b685ddb281a4dfcdcc95d29e9dc962a"
  },
  {
    "url": "assets/js/31.2e71d601.js",
    "revision": "ae08ce947736009ae5e212cd424e9097"
  },
  {
    "url": "assets/js/32.43ae534d.js",
    "revision": "d4b83a2ed0080ea622081082f33e48d1"
  },
  {
    "url": "assets/js/33.c3808773.js",
    "revision": "3f5bfcf1d4e4593f4c2a8454097d67a7"
  },
  {
    "url": "assets/js/34.54161fb4.js",
    "revision": "eb66bdeed34768d4921f56a39084fcc5"
  },
  {
    "url": "assets/js/35.0473b8ed.js",
    "revision": "f660119d99b7640887ab6d5ebf6d9af3"
  },
  {
    "url": "assets/js/36.199de1ca.js",
    "revision": "d0720c88b33992de2e0bf4b957545e8d"
  },
  {
    "url": "assets/js/37.fcd0d849.js",
    "revision": "4bf4b4a47621f13e0d90ae911a6807e2"
  },
  {
    "url": "assets/js/38.bab98915.js",
    "revision": "324737a5cb6bd226a59829a96a11354d"
  },
  {
    "url": "assets/js/39.ae682659.js",
    "revision": "ac6ca222d106651a22ed8d63fef86b01"
  },
  {
    "url": "assets/js/4.bffea6d3.js",
    "revision": "c32e559d4eb87c02b2c74b40ab78eb10"
  },
  {
    "url": "assets/js/40.1bf61abd.js",
    "revision": "cb115930d6d8f528770bf2489eddee1f"
  },
  {
    "url": "assets/js/41.b6a663cc.js",
    "revision": "bae63cbaa75e0b1de1df332c8435a858"
  },
  {
    "url": "assets/js/42.a5b0bb8c.js",
    "revision": "9bae7724249702be4d37b798cf8d82c4"
  },
  {
    "url": "assets/js/43.22da5a7e.js",
    "revision": "79fd068171a22421b58856d061af5092"
  },
  {
    "url": "assets/js/44.a9e0cf5e.js",
    "revision": "a9c4047b6893912374771452fd181ced"
  },
  {
    "url": "assets/js/5.087df553.js",
    "revision": "bd1a2008d4e767fdee1bc3b898ada6b7"
  },
  {
    "url": "assets/js/6.9b040cd0.js",
    "revision": "10eb1e2f0a3da2af69ecbb46552d8968"
  },
  {
    "url": "assets/js/7.15c8f07d.js",
    "revision": "668fe03be42aca826d290eaba845a70f"
  },
  {
    "url": "assets/js/8.a0c0aed1.js",
    "revision": "474278fd6a62f2dc38aa8f5e3e62538b"
  },
  {
    "url": "assets/js/9.c21a52b4.js",
    "revision": "6d666da04a4a11cb597fce7fd7cb6de5"
  },
  {
    "url": "assets/js/app.48ea5cf1.js",
    "revision": "0a2ab42eba5f5fa73e2e7b674c698409"
  },
  {
    "url": "bg.jpg",
    "revision": "20fe7986595a4a613e591ccbeafcc6fc"
  },
  {
    "url": "blogs/html/2018/121502.html",
    "revision": "208a95d9f48ca20b42a4ce6b0ccb3ace"
  },
  {
    "url": "blogs/html/2019/092301.html",
    "revision": "9246d00af6210f3d513714f9352c5328"
  },
  {
    "url": "blogs/JavaScript/2019/012001.html",
    "revision": "94352bebc64fa9b7b2c222589a797af8"
  },
  {
    "url": "blogs/JavaScript/2019/012101.html",
    "revision": "463281cb4eac4f7e0113f664fc28c42c"
  },
  {
    "url": "blogs/JavaScript/2019/012301.html",
    "revision": "ce7280f394a400ff87cba4c5be82c9fb"
  },
  {
    "url": "blogs/JavaScript/2019/012501.html",
    "revision": "59089b1462eb60f7ba03b9ef6a88c038"
  },
  {
    "url": "blogs/JavaScript/2019/012502.html",
    "revision": "22124a05850cc52c1802146f14b20639"
  },
  {
    "url": "blogs/JavaScript/2019/012601.html",
    "revision": "f49b04450c60c80b9d86214e79c75a10"
  },
  {
    "url": "blogs/JavaScript/2019/020101.html",
    "revision": "77690b44934faf9fecefe1ca22d4b141"
  },
  {
    "url": "blogs/JavaScript/2019/020201.html",
    "revision": "4afda9650eaf7c12e2f69fd854b825e2"
  },
  {
    "url": "blogs/JavaScript/2019/020401.html",
    "revision": "cd4141d1e3c05b8491ce853515aa060f"
  },
  {
    "url": "blogs/JavaScript/2019/020801.html",
    "revision": "d4abbc13417c7f0abf74d3c6b4ac39c3"
  },
  {
    "url": "blogs/JavaScript/2019/021001.html",
    "revision": "0d6bac85ebbacda51c75535d01775840"
  },
  {
    "url": "blogs/JavaScript/2019/Eventlistener.html",
    "revision": "848f0b7b3d75d5cf5eaa2bac167801bf"
  },
  {
    "url": "blogs/JavaScript/2019/Math.html",
    "revision": "2a8657bc59c20d020636b2951441d48f"
  },
  {
    "url": "blogs/JavaScript/2019/String.html",
    "revision": "30aaadd998644e920bab58f4f0fcaec3"
  },
  {
    "url": "blogs/JavaScript/2020/010101.html",
    "revision": "1fbbe1b3043e6b4a21b3672caeb323c5"
  },
  {
    "url": "blogs/JavaScript/ES6/es601.html",
    "revision": "83fe7b40a091d0f364a6bbdcdd725f32"
  },
  {
    "url": "blogs/JavaScript/ES6/es602.html",
    "revision": "f32a7e162b6b846449993e7d9d6c441e"
  },
  {
    "url": "blogs/JavaScript/ES6/es603.html",
    "revision": "c924d3fef0fecf2b4373cd6c2949ca46"
  },
  {
    "url": "blogs/JavaScript/ES6/es604.html",
    "revision": "5e1375baa51f2811b6adb12840d7c251"
  },
  {
    "url": "blogs/JavaScript/ES6/es605.html",
    "revision": "dfb51748a4e7547d9cb6ca3e788f1ff6"
  },
  {
    "url": "blogs/JavaScript/ES6/es606.html",
    "revision": "76ac3f342e50941f7854e5453bf01a70"
  },
  {
    "url": "blogs/JQuery/2020/010201.html",
    "revision": "186093f1c9adeac35172faee498400f2"
  },
  {
    "url": "blogs/JQuery/2020/010202.html",
    "revision": "8ca607a4523934b2f2f7ecf23ae3817f"
  },
  {
    "url": "blogs/JQuery/2020/010302.html",
    "revision": "9963113f132085293804ae3c1769effe"
  },
  {
    "url": "blogs/JQuery/2020/010401.html",
    "revision": "b2a217b7d7af351956a5bebf7fb9f1f8"
  },
  {
    "url": "blogs/vue/vue01.html",
    "revision": "1dbc7955fd6eaff694bfc135157c114c"
  },
  {
    "url": "blogs/vue/vue02.html",
    "revision": "c67ed845975298b2969e4db1a7f60f31"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "25f77df693d12bcd2e4657bb090760ea"
  },
  {
    "url": "categories/html/index.html",
    "revision": "177c57f2fd53d3f07af1c0717b4386ed"
  },
  {
    "url": "categories/index.html",
    "revision": "f65d1e638f9a12bc24a02add3de18d06"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "9c56f6a21842785a9520cb8cdafc10a3"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "c0af2a8be3f430b0bd9f33a926b880dc"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "99cbf5036c44f996ac7d3520f71ad55b"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "00c881605828407a5fcb1b88a454f1dc"
  },
  {
    "url": "css/animate.min.css",
    "revision": "55009d64191e6f9e712a841773ee6611"
  },
  {
    "url": "css/live2d.css",
    "revision": "0696324c9436b00134a887fa07df2482"
  },
  {
    "url": "index.html",
    "revision": "a75c56a985297908cbce34a652807a6a"
  },
  {
    "url": "js/ecisp.js",
    "revision": "46181429ab1218d44413297aed48d9b1"
  },
  {
    "url": "js/wow.min.js",
    "revision": "4b253cabaafa86647183695c4c4365e7"
  },
  {
    "url": "js/wow1.js",
    "revision": "e52349c92d9c5d60645eee2ba3e4b279"
  },
  {
    "url": "liuyan/index.html",
    "revision": "5f1fbafb9cedf7be2c6133fd5809ee76"
  },
  {
    "url": "logo.jpg",
    "revision": "bb18d976886bd7c6e9746ae9f9884d01"
  },
  {
    "url": "mine.png",
    "revision": "a5c33cc762007a297c4461c705321901"
  },
  {
    "url": "tag/Array/index.html",
    "revision": "8a67460fb05ef236f45db0e977984ed3"
  },
  {
    "url": "tag/Date对象/index.html",
    "revision": "38c4f12c203a0d5f23c86b1cd73d44bf"
  },
  {
    "url": "tag/DOM事件/index.html",
    "revision": "433f1130c9973863c2880e08e9bed83f"
  },
  {
    "url": "tag/DOM操作/index.html",
    "revision": "a543f90f769299a5724e7b99811945ab"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "7b9cd5ced238a1025b21b25feac59906"
  },
  {
    "url": "tag/ES6对象方法/index.html",
    "revision": "a0cc39b7c9112c87c351475a46b9d97d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "fb3ef49a27d0fb5aba0bae261d267464"
  },
  {
    "url": "tag/HTML元素对象/index.html",
    "revision": "d0bc1a3d0e611c71cb69cda1c0b307da"
  },
  {
    "url": "tag/index.html",
    "revision": "5927b00262b860efc9196e06ed9e4573"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "2796cece0c9f096e691f41752cb83abc"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "0e3474319822e3d2f73ad403780b4dd4"
  },
  {
    "url": "tag/Javascript/page/2/index.html",
    "revision": "80e6979cce4aed85934651b8524daf5b"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "9abd0c23f0e8446e5a8487f2f98c7798"
  },
  {
    "url": "tag/jQuery效果/index.html",
    "revision": "8711dd397cf5635eb04d2c841b2ca933"
  },
  {
    "url": "tag/let、const/index.html",
    "revision": "3bf851799358328ebc659c1036e8cccb"
  },
  {
    "url": "tag/Math对象/index.html",
    "revision": "2cab56d3cbd29ebf5aace7a027050c6a"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "96e360e1785b8f44709ce7b333f9e7ec"
  },
  {
    "url": "tag/rest参数/index.html",
    "revision": "ac7a8c38bd14b36a490bc04c1e6796bd"
  },
  {
    "url": "tag/String类型/index.html",
    "revision": "4dcc35e5a5171423ef1e56f8a58f4573"
  },
  {
    "url": "tag/super/index.html",
    "revision": "6189054fe4323a736af7d4c8eeae94c4"
  },
  {
    "url": "tag/事件方法/index.html",
    "revision": "a84af48da69dc3d1b482b860a32f9e6b"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "e0b6c750acc27aaff97a93ffa6022221"
  },
  {
    "url": "tag/对象/index.html",
    "revision": "e7102c8a0748138fc64bf1c529ca507c"
  },
  {
    "url": "tag/扩展运算符/index.html",
    "revision": "af4ce08dce630b329bb6f47c8f75bed6"
  },
  {
    "url": "tag/指令/index.html",
    "revision": "047e401605070995221bbb5193adc4ab"
  },
  {
    "url": "tag/操作符/index.html",
    "revision": "180b5091ddd58de6a08a005f422e4eea"
  },
  {
    "url": "tag/数据类型/index.html",
    "revision": "36d9651bcaa2c75da0ec37b7dfc9a249"
  },
  {
    "url": "tag/数组/index.html",
    "revision": "55f04aedbf26f2f41ed32f7e4483f5cb"
  },
  {
    "url": "tag/模版语法/index.html",
    "revision": "bdb45034af17c959c03ca9a881ea45ff"
  },
  {
    "url": "tag/正则表达/index.html",
    "revision": "044a739d466b366150fb37f3ad339f34"
  },
  {
    "url": "tag/箭头函数/index.html",
    "revision": "b666d96b95c7d55dc4bf66b93ddbf151"
  },
  {
    "url": "tag/组件化/index.html",
    "revision": "5590e88d69d2492e2ce81426419589c1"
  },
  {
    "url": "tag/节点操作/index.html",
    "revision": "5a93ecbccb2154d52a6d5d66b8d11f11"
  },
  {
    "url": "tag/解构/index.html",
    "revision": "a00f8f5547f58a3fe01201a7b77118d7"
  },
  {
    "url": "tag/选择器/index.html",
    "revision": "8b62582f66a8c7f8ae3b5a740b08b384"
  },
  {
    "url": "timeline/index.html",
    "revision": "a15a96db662a3be3e0149a16d5e5011c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
