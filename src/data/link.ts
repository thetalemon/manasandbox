type LinkItem = {
  name: string
  img: string
  url: string
  alt: string
  width: number
  height: number
}

export const LINK_LIST:LinkItem[] = [
  {
    name: 'note',
    img: 'note.svg',
    url: 'https://note.com/thetalemon',
    alt: 'note',
    width: 50,
    height: 60
  },
  {
    name: 'zenn',
    img: 'zenn.svg',
    url: 'https://zenn.dev/thetalemon',
    alt: 'zenn',
    width: 80,
    height: 65
  },
  {
    name: 'github',
    img: 'github.svg',
    url: 'https://github.com/thetalemon',
    alt: 'github',
    width: 50,
    height: 30
  },
  {
    name: 'mastodon',
    img: 'mastodon.svg',
    url: 'https://fedibird.com/@thetalemon',
    alt: 'mastodon',
    width: 50,
    height: 30
  }
]
  