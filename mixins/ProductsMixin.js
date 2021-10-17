const _products = [
  {
    name: 'ポートフォリオ',
    img: 'portfolio.png',
    url: 'https://manasas.dev/',
    github: 'https://github.com/thetalemon/manasandbox',
    skill: ['vuejs.svg']
  },
  {
    name: 'ブログ',
    img: 'blog.png',
    url: 'https://blog.manasas.dev/',
    github: 'https://github.com/thetalemon/manasblog',
    skill: ['react.svg']
  },
  {
    name: 'あいきゃっちじぇねれーた',
    img: 'eyecatch.png',
    url: 'https://eyecatch.manasas.dev/',
    github: 'https://github.com/thetalemon/eye-catch-creator',
    skill: ['react.svg']
  }
]

export default {
  computed: {
    products: () => _products
  }
}
