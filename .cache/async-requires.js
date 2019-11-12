// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-player-js": () => import("../src/pages/player.js" /* webpackChunkName: "component---src-pages-player-js" */),
  "component---src-pages-player-multiplayer-js": () => import("../src/pages/player/multiplayer.js" /* webpackChunkName: "component---src-pages-player-multiplayer-js" */),
  "component---src-pages-player-multiplayer-host-js": () => import("../src/pages/player/multiplayer/host.js" /* webpackChunkName: "component---src-pages-player-multiplayer-host-js" */),
  "component---src-pages-player-multiplayer-join-server-js": () => import("../src/pages/player/multiplayer/join-server.js" /* webpackChunkName: "component---src-pages-player-multiplayer-join-server-js" */),
  "component---src-pages-player-singleplayer-js": () => import("../src/pages/player/singleplayer.js" /* webpackChunkName: "component---src-pages-player-singleplayer-js" */),
  "component---src-pages-player-singleplayer-templates-js": () => import("../src/pages/player/singleplayer/templates.js" /* webpackChunkName: "component---src-pages-player-singleplayer-templates-js" */)
}

