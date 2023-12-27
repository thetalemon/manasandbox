type RssItem = {
  url: string;
  title: string;
  icon: string;
};

export const RSS_LIST: RssItem[] = [
  {
    title: "開発日誌",
    url: "https://journal.manasas.dev/feed",
    icon: "/social/books.svg",
  },
  {
    title: "そらとぶアザラシ（雑記）",
    url: "https://blog.manasas.dev/feed",
    icon: "/social/books.svg",
  },
  {
    title: "note",
    url: "https://note.com/thetalemon/rss",
    icon: "/social/books.svg",
  },
  {
    title: "読書・映画感想ブログ",
    url: "https://read.manasas.dev/rss",
    icon: "/social/books.svg",
  },
  {
    title: "Zenn",
    url: "https://zenn.dev/thetalemon/feed",
    icon: "/social/books.svg",
  },
  {
    title: "まなさす 日記",
    url: "https://day.manasas.dev/feed",
    icon: "/social/books.svg",
  },
  {
    title: "節目に書く日記",
    url: "https://diary.manasas.dev/feed",
    icon: "/social/books.svg",
  },
];
