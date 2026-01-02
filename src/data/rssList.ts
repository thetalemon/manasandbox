export type RssTargetItem = {
  url: string
  title: string
  link: string
}

export const NOTE: RssTargetItem = {
  title: 'note',
  url: 'https://note.com/thetalemon/rss',
  link: 'https://note.com/thetalemon',
}

export const BLOG: RssTargetItem = {
  title: 'そらとぶアザラシ（雑記）',
  url: 'https://blog.manasas.dev/feed',
  link: 'https://blog.manasas.dev',
}

export const DIARY_LIST: RssTargetItem = {
  title: 'まなさす 日記',
  url: 'https://day.manasas.dev/feed',
  link: 'https://day.manasas.dev',
}
