const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Develop\\React Gatsby\\Terasology\\poc-terasology\\src\\pages\\index.js"))),
  "component---src-pages-player-js": hot(preferDefault(require("C:\\Develop\\React Gatsby\\Terasology\\poc-terasology\\src\\pages\\player.js"))),
  "component---src-pages-player-multiplayer-js": hot(preferDefault(require("C:\\Develop\\React Gatsby\\Terasology\\poc-terasology\\src\\pages\\player\\multiplayer.js"))),
  "component---src-pages-player-multiplayer-host-js": hot(preferDefault(require("C:\\Develop\\React Gatsby\\Terasology\\poc-terasology\\src\\pages\\player\\multiplayer\\host.js"))),
  "component---src-pages-player-multiplayer-join-server-js": hot(preferDefault(require("C:\\Develop\\React Gatsby\\Terasology\\poc-terasology\\src\\pages\\player\\multiplayer\\join-server.js"))),
  "component---src-pages-player-singleplayer-js": hot(preferDefault(require("C:\\Develop\\React Gatsby\\Terasology\\poc-terasology\\src\\pages\\player\\singleplayer.js"))),
  "component---src-pages-player-singleplayer-templates-js": hot(preferDefault(require("C:\\Develop\\React Gatsby\\Terasology\\poc-terasology\\src\\pages\\player\\singleplayer\\templates.js")))
}

