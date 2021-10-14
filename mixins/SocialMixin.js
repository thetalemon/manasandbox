const _social = [
  // {
  //   name: 'note',
  //   img: 'note.svg',
  //   url: 'https://note.com/thetalemon',
  // },
  {
    name: 'zenn',
    img: 'zenn.svg',
    url: 'https://zenn.dev/thetalemon',
    alt: 'zenn'
  },
  {
    name: 'github',
    img: 'github.svg',
    url: 'https://github.com/thetalemon',
    alt: 'github'
  },
  // {
  //   name: 'twitter',
  //   img: 'twitter.svg',
  //   url: 'https://twitter.com/thetalemon',
  //   size: '50'
  // },
  {
    name: 'blog',
    img: 'blog.svg',
    url: 'https://manasblog.vercel.app/',
    alt: 'ブログ'
  },
  {
    name: 'mail',
    img: 'mail.svg',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSextWHexQaobXuDXoz-_aMgjJLEGU1QwjLVl5diIlEM4k3c9Q/viewform?usp=sf_link',
    alt: 'メール'
  }
]

export default {
  computed: {
    social: () => _social
  }
}
