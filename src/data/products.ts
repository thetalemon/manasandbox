import DiaryImage from '@/img/products/diary.png'
import CreativeCodingImage from '@/img/products/creativeCoding.webp'
import NovelImage from '@/img/products/novel.png'
import PortfolioImage from '@/img/products/portfolio.png'
import TaskBotImage from '@/img/products/taskBot.webp'
import MusicGeneratorImage from '@/img/products/musicGenerator.webp'
import AiRuinImage from '@/img/products/aiRuin.webp'
import EyeCatchImage from '@/img/products/eyecatch.webp'

type ProductItem = {
  title: string
  comment: string
  github: string
  url?: string
  image: {
    src: ImageMetadata
    width: number
    height: number
  }
}

export const PRODUCT_LIST: ProductItem[] = [
  {
    title: 'あいきゃっちじぇねれーた',
    comment:
      '記事投稿する時のアイキャッチ作るやつ。Next.js + HTML5のcanvas機能。',
    image: {
      src: EyeCatchImage,
      width: EyeCatchImage.width,
      height: EyeCatchImage.height,
    },
    github: 'https://github.com/thetalemon/eye-catch-creator',
    url: 'https://eyecatch.manasas.dev/',
  },
  {
    title: 'taskBot',
    comment: 'TodoistのタスクをLineに毎日通知するやつ。Go製。停止しました。',
    image: {
      src: TaskBotImage,
      width: TaskBotImage.width,
      height: TaskBotImage.height,
    },
    github: 'https://github.com/thetalemon/todoist-line-bot',
  },
  {
    title: 'みゅーじっくじぇねれーた',
    comment:
      '制作停止中。動画の特徴情報をとりだして音楽を生成するデスクトップアプリ。Electron + Next.js + Python。',
    image: {
      src: MusicGeneratorImage,
      width: MusicGeneratorImage.width,
      height: MusicGeneratorImage.height,
    },
    github: 'https://github.com/thetalemon/movie2music',
  },
  {
    title: '日記',
    comment:
      'CMSのサービス終了に伴い公開終了。節目にしか書かない日記。Next.js(App Router) + Newt。',
    image: {
      src: DiaryImage,
      width: DiaryImage.width,
      height: DiaryImage.height,
    },
    github: 'https://github.com/thetalemon/manasblog',
  },
  {
    title: 'AI Ruin',
    comment:
      'WEBでZINEを作る試みとして作成。stableDiffusionで画像生成して加筆し、横スクロールで閲覧できるサイトにしました。',
    image: {
      src: AiRuinImage,
      width: AiRuinImage.width,
      height: AiRuinImage.height,
    },
    github: 'https://github.com/thetalemon/web-zine',
    url: 'https://ruin.manasas.dev',
  },
  {
    title: 'creative coding gallery',
    comment: 'クリエイティブコーディング練習用の砂場',
    image: {
      src: CreativeCodingImage,
      width: CreativeCodingImage.width,
      height: CreativeCodingImage.height,
    },
    github: 'https://github.com/thetalemon/creative-gallery',
    url: 'https://creative-gallery.manasas.dev',
  },
  {
    title: '創作サイト',
    comment: 'ゆるやかに運営してる創作サイト',
    image: {
      src: NovelImage,
      width: NovelImage.width,
      height: NovelImage.height,
    },
    github: 'https://github.com/thetalemon/novel',
    url: 'https://novel.manasas.dev',
  },
  {
    title: 'ポートフォリオ',
    comment: 'このサイト。現在はAstro製。2022年以前はVue.js製。',
    image: {
      src: PortfolioImage,
      width: PortfolioImage.width,
      height: PortfolioImage.height,
    },
    github: 'https://github.com/thetalemon/manasandbox',
    url: '',
  },
]
