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
    title: "CoffeeBreak(別館)",
    url: "https://annex.coffee-break.cc/@thetalemon",
    icon: "/social/firefish.ico",
    comment: "日記を書いている時もある。",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/thetalemon",
    icon: "/social/twitter.svg",
    comment: "あまり見てない。エンジニアアカウント。",
  },
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/manasas.dev",
    icon: "/social/bluesky.png",
    comment: "あまり見てない。期待はしてる。",
  },
];
