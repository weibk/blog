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
    "revision": "73d097d39c0a1b885147fec7ba8b287b"
  },
  {
    "url": "about/index.html",
    "revision": "f1137ca3ac106e422ead5c4efc100071"
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
    "url": "assets/js/app.20163438.js",
    "revision": "0116076207d676deef1b182b7b3dc3b0"
  },
  {
    "url": "bg.jpg",
    "revision": "20fe7986595a4a613e591ccbeafcc6fc"
  },
  {
    "url": "blogs/html/2018/121502.html",
    "revision": "ed93f5248dd709324f2e6be8dc07a7df"
  },
  {
    "url": "blogs/html/2019/092301.html",
    "revision": "6f0ec0f1883ade6282d30c3a79fe1c2a"
  },
  {
    "url": "blogs/JavaScript/2019/012001.html",
    "revision": "9fec02a391eb263d5b36bc7f68388a32"
  },
  {
    "url": "blogs/JavaScript/2019/012101.html",
    "revision": "e78ef1ec8e2215aa9d70b342bddcaddf"
  },
  {
    "url": "blogs/JavaScript/2019/012301.html",
    "revision": "f593d09291401063e9939132a501e208"
  },
  {
    "url": "blogs/JavaScript/2019/012501.html",
    "revision": "6e1bf8544af9a15e1154d25ec452ba43"
  },
  {
    "url": "blogs/JavaScript/2019/012502.html",
    "revision": "f73bfdd7225ea1d03cc1163e6189ce3a"
  },
  {
    "url": "blogs/JavaScript/2019/012601.html",
    "revision": "994184488b7e644d37c811d471e54588"
  },
  {
    "url": "blogs/JavaScript/2019/020101.html",
    "revision": "2d8ff35a00eebbc6066d5d7ee1a5ff25"
  },
  {
    "url": "blogs/JavaScript/2019/020201.html",
    "revision": "93dddfb81293b5436dc8efaa5b0fb14c"
  },
  {
    "url": "blogs/JavaScript/2019/020401.html",
    "revision": "88448d3ea0a9afe791ecd568970339f7"
  },
  {
    "url": "blogs/JavaScript/2019/020801.html",
    "revision": "4a1a864b7bd9c7450356848ce904c53c"
  },
  {
    "url": "blogs/JavaScript/2019/021001.html",
    "revision": "278007c2b917e0809b91883cc4a92dd6"
  },
  {
    "url": "blogs/JavaScript/2019/Eventlistener.html",
    "revision": "6c1d87b462058cc437b74b31e5852699"
  },
  {
    "url": "blogs/JavaScript/2019/Math.html",
    "revision": "8b32bf924e99c89781900e8d4e72a6c3"
  },
  {
    "url": "blogs/JavaScript/2019/String.html",
    "revision": "8c42118c764d36ae2bebb2d79af95bc7"
  },
  {
    "url": "blogs/JavaScript/2020/010101.html",
    "revision": "5c43c90f7ff5e178a5027e49582f9fe7"
  },
  {
    "url": "blogs/JavaScript/ES6/es601.html",
    "revision": "1d4ea8949690ddd45b658a513dc30c7d"
  },
  {
    "url": "blogs/JavaScript/ES6/es602.html",
    "revision": "ab29923bd996b7d57a5d9fb66dcf395b"
  },
  {
    "url": "blogs/JavaScript/ES6/es603.html",
    "revision": "a0563366674ea7b40523ef257a1eff1b"
  },
  {
    "url": "blogs/JavaScript/ES6/es604.html",
    "revision": "ff88cb8bd8633aa9eb470b1fddb6bf7d"
  },
  {
    "url": "blogs/JavaScript/ES6/es605.html",
    "revision": "2ec7f1171532ac94ff5ec53925e8b54f"
  },
  {
    "url": "blogs/JavaScript/ES6/es606.html",
    "revision": "7d933bd32e74aeb001be69c12ba9e255"
  },
  {
    "url": "blogs/JQuery/2020/010201.html",
    "revision": "cf56129bbff8e15ca2cfeb56dae48ae2"
  },
  {
    "url": "blogs/JQuery/2020/010202.html",
    "revision": "130150684a4c89f4bf3316382b753182"
  },
  {
    "url": "blogs/JQuery/2020/010302.html",
    "revision": "23d2ea48c51c53f74c0ca81f80c8d67c"
  },
  {
    "url": "blogs/JQuery/2020/010401.html",
    "revision": "d09b867417b9b087cb7db68fa9ec77a9"
  },
  {
    "url": "blogs/vue/vue01.html",
    "revision": "283dbf20e8a1518c50eb84bcb4fa00b0"
  },
  {
    "url": "blogs/vue/vue02.html",
    "revision": "d524d25a5aab01b9a6ef7180a5a3b781"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "1499f8fbfcfd778f1362993bb9c5785c"
  },
  {
    "url": "categories/html/index.html",
    "revision": "822fe4709bdf6016173be1b7217bff6c"
  },
  {
    "url": "categories/index.html",
    "revision": "4327db01075d42b630ae1e34bf5ba180"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "c0f8de6cb2354cd70a36f03fafe599f5"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "3df7c4eccc9d1f14f50670012e0b7597"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "f2cb9ea69a087672205c4b8bfa50040a"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "fbaabf2d15face31fa47c9a4f8412870"
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
    "revision": "13602498eb7771fdb0e017ad288fcc57"
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
    "revision": "420e5b94b2b3dc47418a382157425ffc"
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
    "revision": "dda47ef31534e82cb938cdeaffe7208e"
  },
  {
    "url": "tag/Date对象/index.html",
    "revision": "6618f6cf34d3dcde4e7d43d92b9f9664"
  },
  {
    "url": "tag/DOM事件/index.html",
    "revision": "7e846ce968bd91d8f63ca16a50de0e44"
  },
  {
    "url": "tag/DOM操作/index.html",
    "revision": "714f5d01343be79a13f34e0dec3da837"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "e7f9ab8284b31e3f6bef79355d589e7f"
  },
  {
    "url": "tag/ES6对象方法/index.html",
    "revision": "6375e1264dc820bf254f67e3b5ab5fbc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "49a8287a8fd5f2896addfe8a80c698ac"
  },
  {
    "url": "tag/HTML元素对象/index.html",
    "revision": "972e8fdac4c74ded4d3cee0d8f7d96e3"
  },
  {
    "url": "tag/index.html",
    "revision": "92c8c7a6034b9d442ab55ddd27243c82"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "b49a6b61408ef524ac2f5e72ed558d69"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3d63fe2df7ed64069e46ef1398324449"
  },
  {
    "url": "tag/Javascript/page/2/index.html",
    "revision": "98e5e6449ba8e28a7f0c77d21b37790b"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "5a9a376438e0787bab551e2a5da900ce"
  },
  {
    "url": "tag/jQuery效果/index.html",
    "revision": "fdd8cff87a42d7ff3791c0848ed6338b"
  },
  {
    "url": "tag/let、const/index.html",
    "revision": "8777a987290c2643b1d410cbe841cc56"
  },
  {
    "url": "tag/Math对象/index.html",
    "revision": "5b1d87201e99bc7fafc94e34a923a141"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "d3f3af36aa5c007b8d5c1c633290f99f"
  },
  {
    "url": "tag/rest参数/index.html",
    "revision": "a9dd587623611562b555f3096ea5a970"
  },
  {
    "url": "tag/String类型/index.html",
    "revision": "82999e273ed782cbef43d9f609755335"
  },
  {
    "url": "tag/super/index.html",
    "revision": "1edc7ce996e65689c32288f8794d9281"
  },
  {
    "url": "tag/事件方法/index.html",
    "revision": "1d9ce927c29dc40429bb76d3f931a068"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "b210068f082ca2917988958a31dc3383"
  },
  {
    "url": "tag/对象/index.html",
    "revision": "311396736f866906735f588663c890f2"
  },
  {
    "url": "tag/扩展运算符/index.html",
    "revision": "3ca0cbe29a693bd9bbb8f56b847fe786"
  },
  {
    "url": "tag/指令/index.html",
    "revision": "e07f81eac69b0bff128c6cad1609599f"
  },
  {
    "url": "tag/操作符/index.html",
    "revision": "523cc5a4433bae8aee84a56786e0a855"
  },
  {
    "url": "tag/数据类型/index.html",
    "revision": "d52c976c58f4fdbf884553cebe09d380"
  },
  {
    "url": "tag/数组/index.html",
    "revision": "7aec6e7ad834d70da115120f407387ce"
  },
  {
    "url": "tag/模版语法/index.html",
    "revision": "7967e526b3dca7d232166953de9aafda"
  },
  {
    "url": "tag/正则表达/index.html",
    "revision": "b97ec6aeb36d9bc29efe6a10f229923a"
  },
  {
    "url": "tag/箭头函数/index.html",
    "revision": "96067f2fcf3d766981e07edc11937a13"
  },
  {
    "url": "tag/组件化/index.html",
    "revision": "2fdd7f5bca7aee0e030f6806c52cd251"
  },
  {
    "url": "tag/节点操作/index.html",
    "revision": "6ff2b6714d6ddac73890d38d285d52e3"
  },
  {
    "url": "tag/解构/index.html",
    "revision": "6dd2247585cd407919c3835e2447fc8e"
  },
  {
    "url": "tag/选择器/index.html",
    "revision": "aced2eee84e776176db21564b4751d61"
  },
  {
    "url": "timeline/index.html",
    "revision": "06c7e44d0cc6bdfa902331d86906dab6"
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
