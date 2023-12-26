type SocialItem = {
  url: string;
  title: string;
  icon: string;
  comment: string;
};

export const SNS_LIST: SocialItem[] = [
  {
    title: "fedibird(Mastodon)",
    url: "https://fedibird.com/@thetalemon",
    icon: "/social/mastodon.svg",
    comment: "だいたいここにいる。雑多アカウント。",
  },
  {
    title: "Threads",
    url: "https://www.threads.net/@manasas.photo",
    icon: "/social/threads.svg",
    comment: "ご飯と空ばかり上げてる写真アカウント",
  },
  {
    title: "ブクログ",
    url: "https://booklog.jp/users/manasas",
    icon: "/social/books.svg",
    comment: "本の感想とか",
  },
  {
    title: "日記",
    url: "https://day.manasas.dev",
    icon: "/social/book.svg",
    comment: "日記",
  },
  {
    title: "しずかなインターネット",
    url: "https://sizu.me/manasas",
    icon: "/social/fukidashi.svg",
    comment: "とりとめもないことを呟いてる",
  },
  {
    title: "アルバム",
    url: "https://photo.manasas.dev",
    icon: "/social/photo.svg",
    comment: "過去の写真とか",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/manasas.photo",
    icon: "/social/instagram.svg",
    comment: "そろそろ動かしたい",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/thetalemon",
    icon: "/social/twitter.svg",
    comment: "あまり見てない。エンジニアアカウント",
  },
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/manasas.dev",
    icon: "/social/bluesky.png",
    comment: "あまり見てない",
  },
];
