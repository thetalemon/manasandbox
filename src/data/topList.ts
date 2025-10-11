type SocialItem = {
  url: string
  icon: string
  text: string
}
type LinkCategoryItem = {
  category: string
  itemList: SocialItem[]
}

export const TOP_LIST: LinkCategoryItem[] = [
  {
    category: '自サイト',
    itemList: [
      {
        url: 'https://novel.manasas.dev/',
        icon: '/social/novel.png',
        text: '小説置場',
      },
      {
        url: 'https://doodle.manasas.dev/',
        icon: '/social/doodle.svg',
        text: 'らくがき置場',
      },
      {
        url: 'https://photo.manasas.dev',
        icon: '/social/photo.png',
        text: 'アルバムサイト',
      },
    ],
  },

  {
    category: 'SNS',
    itemList: [
      {
        url: 'https://bsky.app/profile/manasas.dev',
        icon: '/social/bluesky.svg',
        text: 'おは空',
      },
      {
        url: 'https://www.instagram.com/manasas.photo',
        icon: '/social/ig.svg',
        text: 'カフェと御朱印',
      },
      {
        url: 'https://www.threads.net/@manasas.photo',
        icon: '/social/threads.svg',
        text: 'らくがき',
      },
    ],
  },

  {
    category: '記録等',
    itemList: [
      {
        url: 'https://booklog.jp/users/manasas',
        icon: '/social/books.svg',
        text: '本の感想',
      },
    ],
  },
  {
    category: 'links',
    itemList: [
      {
        url: '/resume',
        icon: '/social/resume.svg',
        text: '経歴など',
      },
      {
        url: 'https://github.com/thetalemon/',
        icon: '/social/github.svg',
        text: 'Github',
      },
      {
        url: '/social',
        icon: '/social/social.svg',
        text: 'その他SNS',
      },
    ],
  },
]
