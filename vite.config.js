import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import injectExternals from 'vite-plugin-inject-externals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    injectExternals({
      modules: [
        {
          name: 'vue',
          global: 'Vue',
          path: 'https://unpkg.com/vue@3/dist/vue.global.prod.js'
        },
      ],
    }),
  ],
  base: '/VueBoom/',
  build: {
    outDir: 'docs',
  },
})
