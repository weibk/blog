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
    "revision": "6fab020f732d9bb734a19f019087c6e7"
  },
  {
    "url": "about/index.html",
    "revision": "6b64b7ca8967c32d65e8c3edbf6a6b7d"
  },
  {
    "url": "assets/css/0.styles.63789891.css",
    "revision": "a04225d274b0fdb90d0a224912560515"
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
    "url": "assets/js/4.42e0646c.js",
    "revision": "69b1671b5cd839c83634a50335a7932d"
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
    "url": "assets/js/5.3b6eca39.js",
    "revision": "10fea0ca48b99dee1790d2d632cdbaa2"
  },
  {
    "url": "assets/js/6.748f61a4.js",
    "revision": "d024d38e8f63daee065313c9313d664e"
  },
  {
    "url": "assets/js/7.3a4c8c7d.js",
    "revision": "dfedb734a3f2db492e12f9c3e305b9e3"
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
    "url": "assets/js/app.06b8e6b7.js",
    "revision": "68561c558b6e90717a7bf05ecfa45a40"
  },
  {
    "url": "bg.jpg",
    "revision": "20fe7986595a4a613e591ccbeafcc6fc"
  },
  {
    "url": "blogs/html/2018/121502.html",
    "revision": "e18b39389b7d1e60b3ee3014ab178198"
  },
  {
    "url": "blogs/html/2019/092301.html",
    "revision": "01b50e0b8a560adc873647222073e2e8"
  },
  {
    "url": "blogs/JavaScript/2019/012001.html",
    "revision": "5571c421313f4a0b52852820090dd879"
  },
  {
    "url": "blogs/JavaScript/2019/012101.html",
    "revision": "0d75540614021725a9ed443d700f5b5c"
  },
  {
    "url": "blogs/JavaScript/2019/012301.html",
    "revision": "69fdcbfbdf22ca97cb6da9e737d95b19"
  },
  {
    "url": "blogs/JavaScript/2019/012501.html",
    "revision": "c30ff09de575b21016773a4b95d9ceea"
  },
  {
    "url": "blogs/JavaScript/2019/012502.html",
    "revision": "ee573b56ddbac6fb50e9e6708de55da8"
  },
  {
    "url": "blogs/JavaScript/2019/012601.html",
    "revision": "70940a52c5a0c36bbe4c4abf9ba62970"
  },
  {
    "url": "blogs/JavaScript/2019/020101.html",
    "revision": "4cee1eb42549ba1f0b7ba31292d56e1d"
  },
  {
    "url": "blogs/JavaScript/2019/020201.html",
    "revision": "7632d15d08bcb0c6131625e7c3ed95de"
  },
  {
    "url": "blogs/JavaScript/2019/020401.html",
    "revision": "162ff484cc8446864e93568f47e80bbd"
  },
  {
    "url": "blogs/JavaScript/2019/020801.html",
    "revision": "0fd35bd8191b799cec080a79074fb197"
  },
  {
    "url": "blogs/JavaScript/2019/021001.html",
    "revision": "1fc04bcf7d7d2aec3e5f111e5c89f64b"
  },
  {
    "url": "blogs/JavaScript/2019/Eventlistener.html",
    "revision": "465afe0825e74ff9147e03b7a3da3e6e"
  },
  {
    "url": "blogs/JavaScript/2019/Math.html",
    "revision": "83ac899f76565ed0043e0b7a3c7ee3e1"
  },
  {
    "url": "blogs/JavaScript/2019/String.html",
    "revision": "83f59c7e10cf951173b528ac5b2aa434"
  },
  {
    "url": "blogs/JavaScript/2020/010101.html",
    "revision": "2f299e382f4c619f12266d3558a67a08"
  },
  {
    "url": "blogs/JavaScript/ES6/es601.html",
    "revision": "e44998c22862a9697695f7799c94c8c7"
  },
  {
    "url": "blogs/JavaScript/ES6/es602.html",
    "revision": "1fcd2c9326d31dc0752e74a8be1d5da8"
  },
  {
    "url": "blogs/JavaScript/ES6/es603.html",
    "revision": "80e2abad13d3438b674500bf5933b3a7"
  },
  {
    "url": "blogs/JavaScript/ES6/es604.html",
    "revision": "6a196f76386fa0774699ff64e46af51a"
  },
  {
    "url": "blogs/JavaScript/ES6/es605.html",
    "revision": "8c837238bd5aaafc8dfb3c7b083a41a1"
  },
  {
    "url": "blogs/JavaScript/ES6/es606.html",
    "revision": "1378cebe01eee5b4a36d356768aa1ce0"
  },
  {
    "url": "blogs/JQuery/2020/010201.html",
    "revision": "3d893202e64648cbdb111356decc2e46"
  },
  {
    "url": "blogs/JQuery/2020/010202.html",
    "revision": "777e8fa047f6e167199c4b890343304d"
  },
  {
    "url": "blogs/JQuery/2020/010302.html",
    "revision": "4ba1f4098cbbd38d5474ebad15cb664e"
  },
  {
    "url": "blogs/JQuery/2020/010401.html",
    "revision": "c78123dbb92a4f359636130b2b07b0ff"
  },
  {
    "url": "blogs/vue/vue01.html",
    "revision": "770181088765ae8079fce04f10e7ba74"
  },
  {
    "url": "blogs/vue/vue02.html",
    "revision": "d8d184b0d201a8b253d6e436fa71d888"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "b47e1eaf69155a34bd994fe3640742a2"
  },
  {
    "url": "categories/html/index.html",
    "revision": "c67c85485b47234dc1e846dfcab56823"
  },
  {
    "url": "categories/index.html",
    "revision": "522763c9d802d50a2a17cb47708a320e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "09f5b1be98530fc8ac030454f06f509e"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "c1f0a6a4c0b63dc4af60b3fb53bc8a69"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "cce9a257c2271f4a813da41e9f7e373f"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "26933ec5ffe2a1551ee7fced30ea8165"
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
    "revision": "38ff1a8ddb7136ca70f708693469bbf6"
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
    "revision": "4cd12abd61d1cffb35e79c4cef42225e"
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
    "revision": "5c104f65f2cd76fb41e05bed7533dbd0"
  },
  {
    "url": "tag/Date对象/index.html",
    "revision": "74fdcafa27b7916506b9fd9db2cc1cc1"
  },
  {
    "url": "tag/DOM事件/index.html",
    "revision": "23abff9e0c4a8a8ff74f80cb4ab4b4dd"
  },
  {
    "url": "tag/DOM操作/index.html",
    "revision": "76c70212f657614e9826cd49db1f0c6c"
  },
  {
    "url": "tag/ES5/index.html",
    "revision": "2fc88f5efdc0a83975f90b81c3b3b2a2"
  },
  {
    "url": "tag/ES6对象方法/index.html",
    "revision": "0600ead3f176f5eb64ab4d9b0d3033e7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "58a8eb84343a4b9a017fa58ed7823dca"
  },
  {
    "url": "tag/HTML元素对象/index.html",
    "revision": "81a5e12493db0a32228a564d7de1c925"
  },
  {
    "url": "tag/index.html",
    "revision": "3a7966f4b556da2f25d172aab7a7386c"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "2b464b7ab40126e5a2a50e10e8c33bfa"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "bf4b6d4718a2cb394e8f559b2cd09ddf"
  },
  {
    "url": "tag/Javascript/page/2/index.html",
    "revision": "464d80a36ace67a294072ab2a95d241f"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "904e5484fd365d5041ead8d0112d2e00"
  },
  {
    "url": "tag/jQuery效果/index.html",
    "revision": "46e7b7bfb6d70875e0f338755b3641be"
  },
  {
    "url": "tag/let、const/index.html",
    "revision": "55bbecb396bf87c8b13eeb03c0e0b4f5"
  },
  {
    "url": "tag/Math对象/index.html",
    "revision": "3322396b2729eba226cff55a8adf6b08"
  },
  {
    "url": "tag/Object/index.html",
    "revision": "96f7c8d8f85db56476978896bb5c2fe5"
  },
  {
    "url": "tag/rest参数/index.html",
    "revision": "57f7c380dda8b63c5e375c1669c536f4"
  },
  {
    "url": "tag/String类型/index.html",
    "revision": "91aa586e452edd707b7d1542918111d8"
  },
  {
    "url": "tag/super/index.html",
    "revision": "4a7149151200bd97084a536534fa4603"
  },
  {
    "url": "tag/事件方法/index.html",
    "revision": "ca81e4e1e0abbe21c46769d4b2a17e8e"
  },
  {
    "url": "tag/函数/index.html",
    "revision": "c3f960361485c8f30fac7646dc1c6152"
  },
  {
    "url": "tag/对象/index.html",
    "revision": "d619c63bdde86c099a74333c53bdc230"
  },
  {
    "url": "tag/扩展运算符/index.html",
    "revision": "e30c453719ad40a2a5365f90c4c88cf0"
  },
  {
    "url": "tag/指令/index.html",
    "revision": "0593d67cd6b3d29d25ad67826de67a20"
  },
  {
    "url": "tag/操作符/index.html",
    "revision": "10177177e0d86405014b3f99f5b9195b"
  },
  {
    "url": "tag/数据类型/index.html",
    "revision": "84772aff5d0f496b3fc04881a20f8b3c"
  },
  {
    "url": "tag/数组/index.html",
    "revision": "66d92272ec38d1a3f6f3d9f3ff565e9f"
  },
  {
    "url": "tag/模版语法/index.html",
    "revision": "b45a50bd1f3b49b90c7fd1891bc47fdb"
  },
  {
    "url": "tag/正则表达/index.html",
    "revision": "7aae420d3e1a57479c53a268d1d29725"
  },
  {
    "url": "tag/箭头函数/index.html",
    "revision": "80f97d60ed60c8190d15baea2041a8f1"
  },
  {
    "url": "tag/组件化/index.html",
    "revision": "ceaf082bc3c86f5f30ec27b89bdad0bf"
  },
  {
    "url": "tag/节点操作/index.html",
    "revision": "e408e503b029ea17fd1f6aa42d209258"
  },
  {
    "url": "tag/解构/index.html",
    "revision": "f731dc8d8e90282fdc98ac3ae527a5b0"
  },
  {
    "url": "tag/选择器/index.html",
    "revision": "da1acb53377b868bfba950a548a27aa5"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e89f2d26b4b9d3c570f09ce21b9416e"
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
