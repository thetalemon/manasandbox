type SocialItem = {
  url: string
  title: string
  icon: string
  comment?: string
}

export const SNS_LIST: SocialItem[] = [
  {
    title: 'Bluesky',
    url: 'https://bsky.app/profile/manasas.dev',
    icon: '/social/bluesky.svg',
    comment: '最近はここが本拠',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/manasas.photo',
    icon: '/social/ig.svg',
    comment: '推し活したり制作したりしてるアカウント',
  },
  {
    title: 'Threads（更新終了）',
    url: 'https://www.threads.net/@manasas.photo',
    icon: '/social/threads.svg',
    comment: 'お絵描きアカウント',
  },
  {
    title: 'ブクログ',
    url: 'https://booklog.jp/users/manasas',
    icon: '/social/books.svg',
    comment: '本の感想とか',
  },
  {
    title: 'らくがき置場',
    url: 'https://doodle.manasas.dev/',
    icon: '/social/photo.svg',
  },
  {
    title: '日記',
    url: 'https://day.manasas.dev',
    icon: '/social/book.svg',
  },
  {
    title: 'しずかなインターネット',
    url: 'https://sizu.me/manasas',
    icon: '/social/fukidashi.svg',
    comment: 'とりとめもないことを呟いてる',
  },
  {
    title: 'アルバム',
    url: 'https://photo.manasas.dev',
    icon: '/social/photo.svg',
    comment: '過去の写真とか',
  },
]
