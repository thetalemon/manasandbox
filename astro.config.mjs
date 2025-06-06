import { defineConfig } from 'astro/config'

export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  site: 'https://manasas.dev',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
