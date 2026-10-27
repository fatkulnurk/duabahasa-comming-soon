import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// lerd's host proxy injects PORT/HOST and forwards https://<site>.test to it.
const port = Number(process.env.PORT) || 3006

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    host: true,
    port,
    strictPort: true,
    allowedHosts: ['.test'],
    hmr: { protocol: 'wss', clientPort: 443 },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
