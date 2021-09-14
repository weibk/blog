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
    "revision": "989c3714b39f1ebf0fe883f7e06fe8fd"
  },
  {
    "url": "about/index.html",
    "revision": "cec74922f8972dca51ae04363175f53f"
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
    "url": "assets/js/app.964c7780.js",
    "revision": "a91573e16b5be775003697634ee322e0"
  },
  {
    "url": "bg.jpg",
    "revision": "20fe7986595a4a613e591ccbeafcc6fc"
  },
  {
    "url": "blogs/html/2018/121502.html",
    "revision": "a149a2667b42be6b9854767ea549d3d0"
  },
  {
    "url": "blogs/html/2019/092301.html",
    "revision": "bd01ca6b870223beafa13154c379eeef"
  },
  {
    "url": "blogs/JavaScript/2019/012001.html",
    "revision": "45f4cae15c744d976dc81c93d7a70666"
  },
  {
    "url": "blogs/JavaScript/2019/012101.html",
    "revision": "c7f7e22f21d62f41150c2c85d34f1b4e"
  },
  {
    "url": "blogs/JavaScript/2019/012301.html",
    "revision": "d110cd6ae9262b8b666f7db989290fca"
  },
  {
    "url": "blogs/JavaScript/2019/012501.html",
    "revision": "ac0a9be33fbc14d90406585b84fab595"
  },
  {
    "url": "blogs/JavaScript/2019/012502.html",
    "revision": "5d16b596bcf6d4436ac78d7270940c32"
  },
  {
    "url": "blogs/JavaScript/2019/012601.html",
    "revision": "c5a1c2779ba3d751d8d196329af8a036"
  },
  {
    "url": "blogs/JavaScript/2019/020101.html",
    "revision": "22bf575671ef05eddca16ba382f848c8"
  },
  {
    "url": "blogs/JavaScript/2019/020201.html",
    "revision": "373b26ff6f7817c10c8b98c7ca0f1867"
  },
  {
    "url": "blogs/JavaScript/2019/020401.html",
    "revision": "52ca993b060346306f6fc27398f83e78"
  },
  {
    "url": "blogs/JavaScript/2019/020801.html",
    "revision": "6e46b2d20fed29bf20e8b322e82d7b98"
  },
  {
    "url": "blogs/JavaScript/2019/021001.html",
    "revision": "05f1772fb9ad6cd7d0e357ca86478822"
  },
  {
    "url": "blogs/JavaScript/2019/Eventlistener.html",
    "revision": "f74a75f6fc2174650e6d0e1707e796b2"
  },
  {
    "url": "blogs/JavaScript/2019/Math.html",
    "revision": "ec2d348e42221a2af0d1b02c1119718a"
  },
  {
    "url": "blogs/JavaScript/2019/String.html",
    "revision": "ef513e200d71fc2a0c26286d4d7845b9"
  },
  {
    "url": "blogs/JavaScript/2020/010101.html",
    "revision": "48dea13806dd5d4c0a10bd3ef5303f0c"
  },
  {
    "url": "blogs/JavaScript/ES6/es601.html",
    "revision": "5ac13cdbaedae5472f85ecafa45ecaf8"
  },
  {
    "url": "blogs/JavaScript/ES6/es602.html",
    "revision": "cc283e269e2eedd143a79313b0d58cce"
  },
  {
    "url": "blogs/JavaScript/ES6/es603.html",
    "revision": "847802ee884f831b044137578cd92690"
  },
  {
    "url": "blogs/JavaScript/ES6/es604.html",
    "revision": "2093a220b10e80231d723d5b935aeb2d"
  },
  {
    "url": "blogs/JavaScript/ES6/es605.html",
    "revision": "bbb889959d4b20844fc9d571260ed3f1"
  },
  {
    "url": "blogs/JavaScript/ES6/es606.html",
    "revision": "6fa1dc82a948789c267149f35dd0cd43"
  },
  {
    "url": "blogs/JQuery/2020/010201.html",
    "revision": "d885509e34810e037fc02acab69915d5"
  },
  {
    "url": "blogs/JQuery/2020/010202.html",
    "revision": "18e0c2bcface535460922ea476bc4e63"
  },
  {
    "url": "blogs/JQuery/2020/010302.html",
    "revision": "56cb0d342bda26abf0baef4a733774bf"
  },
  {
    "url": "blogs/JQuery/2020/010401.html",
    "revision": "c6ad64dae6445d6f322fa90436d973ed"
  },
  {
    "url": "blogs/vue/vue01.html",
    "revision": "5bed78b8d0c5803fca0071e95bda6666"
  },
  {
    "url": "blogs/vue/vue02.html",
    "revision": "ed940f063d5d6d852ded7e54c562a3a7"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "8effb7d6915132c818b072dd74db077f"
  },
  {
    "url": "categories/html/index.html",
    "revision": "f8c02ad8edf6ca95ed54fbb795a428c0"
  },
  {
    "url": "categories/index.html",
    "revision": "bf5366917da834b1fc244303b2f8a790"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "29890baeeb71134bd69fb6da58f0a02f"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "7726af1854e270bed32ab20cc996c4cb"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "70b0bbac13769d440fe73028c268b3de"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "65a3ebf1b5a5ea152af4573b47297d2f"
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
    "revision": "7ac3dad6dfe0f3bf876145c46ecdca13"
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
    "revision": "54678b0eb9a652517fc5e8517cc1e2ef"
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
    "revision": "38700da329b88803fb5979db4cc93e87"
  },
  {
    "url": "tag/Date对象/index.html",
    "revision": "32f5cc07ee0f2b293252ccdf9f181988"
  },
  {
    "url": "tag/DOM事件/index.html",
    "revision": "c69493966266f2be6ef2b7cfdabd4092"
  },
  {
    "url": "tag/DOM操作/index.html",
    "revision": "48c7f5a0b3de08c593b03734b40dc539"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "f04058ea139191438a9bc381acdd5a0f"
  },
  {
    "url": "tag/ES6对象方法/index.html",
    "revision": "8b750db30ee07547fad3be2612779210"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4a2038c21fc4df05773b34aefaa3bdfc"
  },
  {
    "url": "tag/HTML元素对象/index.html",
    "revision": "e6fa53c1a700d9e626cdea85209c515b"
  },
  {
    "url": "tag/index.html",
    "revision": "89eb53728fc1d486ad0452311686782e"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "b27df281fce679879b65f2393aec8699"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "837724ff56a1473ab639302498c198db"
  },
  {
    "url": "tag/Javascript/page/2/index.html",
    "revision": "1c05623560e15fe4e27aa2a9433b7f13"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "371f188287378d6960c458f60af48304"
  },
  {
    "url": "tag/jQuery效果/index.html",
    "revision": "24847a77bfb5d0ea77a867a0b97c0e8f"
  },
  {
    "url": "tag/let、const/index.html",
    "revision": "e21236c6e4ac57c7d2b151b709819624"
  },
  {
    "url": "tag/Math对象/index.html",
    "revision": "ea0b449680ece9faf9b8a1ea923d7bd1"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "9180df3699e5e0cbe5b8e462b5f800b6"
  },
  {
    "url": "tag/rest参数/index.html",
    "revision": "59b90ba4d66fc836f8d15a9a85615bbc"
  },
  {
    "url": "tag/String类型/index.html",
    "revision": "3ae40979f2d74127899172f6680a57f6"
  },
  {
    "url": "tag/super/index.html",
    "revision": "adaea6fe07882ab387c4543fa723626a"
  },
  {
    "url": "tag/事件方法/index.html",
    "revision": "0bda0875d5432beb6eb216ec62e9a314"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "dcc0bf02a5c643c3d535c2f5f2152378"
  },
  {
    "url": "tag/对象/index.html",
    "revision": "abb9c05bbce7de112d8e8aa215fe5774"
  },
  {
    "url": "tag/扩展运算符/index.html",
    "revision": "53a2ba46fc00013e6359201b34cf54e0"
  },
  {
    "url": "tag/指令/index.html",
    "revision": "69e131bad719984405df2de62dc7bebb"
  },
  {
    "url": "tag/操作符/index.html",
    "revision": "63f02206b4742b0e33fb3238ef4534b6"
  },
  {
    "url": "tag/数据类型/index.html",
    "revision": "f9f64f41fa206b054cc401f04362d02e"
  },
  {
    "url": "tag/数组/index.html",
    "revision": "489b45bd451bec81ec5c181f65e2a7b4"
  },
  {
    "url": "tag/模版语法/index.html",
    "revision": "b7e979bdbbd5a621013045ce867eb769"
  },
  {
    "url": "tag/正则表达/index.html",
    "revision": "f521d1e326f99a71c6a00df478d3f8af"
  },
  {
    "url": "tag/箭头函数/index.html",
    "revision": "2c4c305f63e768ea6244526eaa7c307b"
  },
  {
    "url": "tag/组件化/index.html",
    "revision": "992776be5d3bd1348a36b45847f8dea1"
  },
  {
    "url": "tag/节点操作/index.html",
    "revision": "e5a473b4fa496e6767dcca3af7b6e382"
  },
  {
    "url": "tag/解构/index.html",
    "revision": "c1d968f699f16b816800cd156bfa7006"
  },
  {
    "url": "tag/选择器/index.html",
    "revision": "1c1420b63191493203c85e2e4d953dd2"
  },
  {
    "url": "timeline/index.html",
    "revision": "5fad657ae9f14ec5e2c6e6b7ba939a7c"
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
