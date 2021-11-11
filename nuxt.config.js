// import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:image', property: 'og:image', content: 'https://manassandboxx.web.app/aza166.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mylogo.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // '@assets/variables.scss',
    '@assets/pattern.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // { src: '~/plugins/vue-apexchart.js', ssr: false },
    // { src: '@/plugins/vue-chartjs', ssr: false },
    // { src: '~plugins/vue-plotly', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  webfontloader: {
    google: {
      families: ['Mplus 1p', 'M PLUS Rounded 1c']
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  storybook: {
    // 追加のアドオンなどあれば
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-notes'
    ],
    // ポート指定
    port: 5555,
    // ストーリーの親に要素など追加しcssなど設定できる
    // 背景色や表示位置、デバイスの設定など
    parameters: {
      // 背景色：デフォルトの色を使う場合
      backgrounds: {
        default: 'dark' // light or dark
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true
      },
      // 表示位置
      layout: 'centered' // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
    }
  }
}
