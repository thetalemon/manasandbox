const _social = [
  {
    name: 'note',
    img: 'note.svg',
    url: 'https://note.com/thetalemon',
    width: 50,
    height: 50
  },
  {
    name: 'zenn',
    img: 'zenn.svg',
    url: 'https://zenn.dev/thetalemon',
    alt: 'zenn',
    width: 80,
    height: 63
  },
  {
    name: 'github',
    img: 'github.svg',
    url: 'https://github.com/thetalemon',
    alt: 'github',
    width: 50,
    height: 33
  },
  {
    name: 'twitter',
    img: 'twitter.svg',
    url: 'https://twitter.com/thetalemon',
    alt: 'twitter',
    width: 50,
    height: 35
  },
  {
    name: 'blog',
    img: 'blog.svg',
    url: 'https://manasblog.vercel.app/',
    alt: 'ブログ',
    width: 50,
    height: 36
  }
]

export default {
  computed: {
    social: () => _social
  }
}
