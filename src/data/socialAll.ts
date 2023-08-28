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
    comment: "1番いる日常アカウント",
  },
  {
    title: "Threads",
    url: "https://www.threads.net/@manasas.photo",
    icon: "/social/threads.svg",
    comment: "ご飯と空ばかり上げてる写真アカウント",
  },
  {
    title: "CoffeeBreak(Firefish)",
    url: "https://annex.coffee-break.cc/@thetalemon",
    icon: "/social/firefish.ico",
    comment: "映画の感想や短編を呟いている時もある",
  },
  {
    title: "sealdolphin(めいどるふぃん・自鯖）",
    url: "https://sealdolphin.manasas.dev",
    icon: "/social/dolphin.svg",
    comment: "Fediverse界の自鯖、たまにブログの更新通知をしたりする。",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/thetalemon",
    icon: "/social/twitter.svg",
    comment: "利用してません。跡地です。",
  },
];
