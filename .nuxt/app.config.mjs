
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "dev"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "C:/Users/tarde/Documents/Desarrollos/infoMaps/citySights/app.config.ts"
import cfg1 from "C:/Users/tarde/Documents/Desarrollos/infoMaps/citySights/node_modules/.pnpm/@nuxt-awesome+theme@2.0.12_nuxt@3.10.1_vite@5.1.1_vue@3.4.18/node_modules/@nuxt-awesome/theme/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, inlineConfig)
