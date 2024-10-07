import { defineConfig } from 'astro/config'

export default defineConfig({
  image: {
    domains: ['manas-portfolio.assets.newt.so'],
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
