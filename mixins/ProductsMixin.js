const _products = [
  {
    name: 'ポートフォリオ',
    img: 'portfolio',
    url: 'https://manasas.dev/',
    github: 'https://github.com/thetalemon/manasandbox',
    text: 'このサイト。Nuxt.js製。'
  },
  {
    name: 'ブログ',
    img: 'blog',
    url: 'https://blog.manasas.dev/',
    github: 'https://github.com/thetalemon/manasblog',
    text: 'Next.js + microCMS。'
  },
  {
    name: 'あいきゃっちじぇねれーた',
    img: 'eyecatch',
    url: 'https://eyecatch.manasas.dev/',
    github: 'https://github.com/thetalemon/eye-catch-creator',
    text: '記事投稿する時のアイキャッチ作るやつ。Next.js + HTML5のcanvas機能。'
  }
]

export default {
  computed: {
    products: () => _products
  }
}
