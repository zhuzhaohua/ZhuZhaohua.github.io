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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e3d9b90378154eb0c77cd6b65cda6e2c"
  },
  {
    "url": "about/index.html",
    "revision": "814341c1870cc5d6996f48d461494cb8"
  },
  {
    "url": "assets/css/0.styles.a936f6f1.css",
    "revision": "11a849a97d2c5c12aac9e6063d8a6f0e"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/1.fa8e63b8.png",
    "revision": "fa8e63b8bddeaa7c4876ced44df08d69"
  },
  {
    "url": "assets/img/2.0ddf8fa9.png",
    "revision": "0ddf8fa97e7c821fc0af4e8222516893"
  },
  {
    "url": "assets/img/3.4595f9d7.png",
    "revision": "4595f9d79fe63229978f44c3d607b8ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.14a4f126.js",
    "revision": "3b80c2ea16d323f758ff0dda28640522"
  },
  {
    "url": "assets/js/11.2993392d.js",
    "revision": "21f8c7dcf750b6526fbf1a7d3d89b505"
  },
  {
    "url": "assets/js/12.002c1f44.js",
    "revision": "dbf3b8d3531d222f5dcbc15523fbb7e7"
  },
  {
    "url": "assets/js/13.842be568.js",
    "revision": "641d6e1cb8e0bd8443b550b17142930c"
  },
  {
    "url": "assets/js/14.3a2e76f1.js",
    "revision": "d8d095ac57f533a4b95811342328f118"
  },
  {
    "url": "assets/js/15.5437f5a0.js",
    "revision": "148f067b147d988ba0a325698af61153"
  },
  {
    "url": "assets/js/16.c0a1c580.js",
    "revision": "74b3611d966594d2239e8a595c2bfec1"
  },
  {
    "url": "assets/js/17.c0880455.js",
    "revision": "55e6ae5af88fe1efc04d49f1fa79ce65"
  },
  {
    "url": "assets/js/18.c1b334fb.js",
    "revision": "d8fa91f0bad5af42cd321a2db8d3556a"
  },
  {
    "url": "assets/js/19.2295615c.js",
    "revision": "da62a8c02c1d8dadd06673c10f1e089c"
  },
  {
    "url": "assets/js/2.12226995.js",
    "revision": "207093e5c74d9952e6348c95cd53ed29"
  },
  {
    "url": "assets/js/20.ad17e7cd.js",
    "revision": "39fd7fb00742aec9a0c2295ece8bb018"
  },
  {
    "url": "assets/js/21.b20bdff7.js",
    "revision": "3b77a71c15d0548b5912ba9f9fa4b73f"
  },
  {
    "url": "assets/js/22.fdd83b9e.js",
    "revision": "f8447b0d6af40d5de0287ac7c4803a46"
  },
  {
    "url": "assets/js/23.40ea8278.js",
    "revision": "7ceb193ca203a71ebfadd196e9c622a6"
  },
  {
    "url": "assets/js/24.c4daf250.js",
    "revision": "7414b58943709cc6eb0959f9fbece41a"
  },
  {
    "url": "assets/js/25.e5f4ff8b.js",
    "revision": "d74ed314b993597df31f5bfde0c58a77"
  },
  {
    "url": "assets/js/26.69714f88.js",
    "revision": "35b0f64019feeece68d05878e04d8851"
  },
  {
    "url": "assets/js/27.661aefec.js",
    "revision": "d3a3fe333a27e7528687fa64a61396fd"
  },
  {
    "url": "assets/js/3.1db7d2c3.js",
    "revision": "496ff22e8bfd81bb373dbf3ad66b45a9"
  },
  {
    "url": "assets/js/4.810532ad.js",
    "revision": "2d3d9b533e68882ec3c779eb62cfd887"
  },
  {
    "url": "assets/js/5.5d2b6eba.js",
    "revision": "659cd1988065bf9d7a41ef6610a56c3e"
  },
  {
    "url": "assets/js/6.4f7f1c8b.js",
    "revision": "81d70ba11bf4ebb813bb7ef74a89b895"
  },
  {
    "url": "assets/js/7.299ef908.js",
    "revision": "6b110efbe718647e677c0fbede227dde"
  },
  {
    "url": "assets/js/8.a5946d57.js",
    "revision": "f589411770b4fdcaaff9500fb2949550"
  },
  {
    "url": "assets/js/9.17470fb0.js",
    "revision": "0269982124372e407bbc116070b39484"
  },
  {
    "url": "assets/js/app.0d82a377.js",
    "revision": "b160c5888d6d16f916f578964f02ed80"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "d76114559a4051b25790e629b997acbb"
  },
  {
    "url": "index.html",
    "revision": "d216f986d409133a632ef0544783e767"
  },
  {
    "url": "life/2019-05-26.html",
    "revision": "eb1a091cda87d2926b9e530ee9c3682b"
  },
  {
    "url": "life/index.html",
    "revision": "28122c5527cbecdd90ec78be45277a5c"
  },
  {
    "url": "massage/index.html",
    "revision": "b214d77462680eacdce71e518acf9f38"
  },
  {
    "url": "ponder/index.html",
    "revision": "310465d2b3ef0629721515e880a526b4"
  },
  {
    "url": "tags/index.html",
    "revision": "a6eefc1a76756c7b94b9455a5a0f7468"
  },
  {
    "url": "technology/index.html",
    "revision": "71fc96b7f9436740b813e4e515a343cd"
  },
  {
    "url": "technology/java/sc_01.html",
    "revision": "daec26158a8e013013b6efc159786a0f"
  },
  {
    "url": "technology/java/sc_02.html",
    "revision": "c91784755c575d6f26e4656083996750"
  },
  {
    "url": "technology/java/sc_03.html",
    "revision": "28730e2b3d68f8dec92eb955a1558521"
  },
  {
    "url": "technology/java/sc_04.html",
    "revision": "9ad7ca36f6297fd469fddd6e5ee1d74d"
  },
  {
    "url": "technology/java/sc_05.html",
    "revision": "e378c4c9c62554f2b681ffb01aac52a8"
  },
  {
    "url": "technology/other/20190915_前后端分离.html",
    "revision": "bda3b8a7d08a175b9c1501e5760bccb2"
  },
  {
    "url": "technology/other/20190915_spa_ssr.html",
    "revision": "bfebcceb2126827f4e697690bd24c66d"
  },
  {
    "url": "technology/vue/20190915_myblog.html",
    "revision": "db8758e1edd532f41d93b76f5d94757c"
  },
  {
    "url": "timeLine/index.html",
    "revision": "42581c250110a7d138af9f1708b4b2b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
