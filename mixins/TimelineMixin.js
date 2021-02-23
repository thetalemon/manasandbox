const _years = [
  {
    color: 'cyan',
    year: '大学',
    title: '動画から音楽を自動生成する研究',
    text: '動画内のモノの動きや色の温度に基づいて音楽を自動生成するシステムを作成し、『生成された音楽が動画に合っている』と感じられるかという研究をしていました',
    tech: 'C, C++, Qt, OpenCV, OpenMIDI'
  },
  {
    color: 'green',
    year: '大学院',
    title: '自然っぽさ/人工っぽさという指標で、画像と音楽を対応づける研究',
    text: '写真と音楽を『自然的な感じがする』か『人工的な感じがする』か点数づけするシステムを作成して、点数が近い写真と音楽をマッチングさせた時に、『写真と音楽が合っている』と感じられるかという研究をしていました。',
    tech: 'Chainer, Python'
  },
  {
    color: 'pink',
    year: '1社目',
    title: '受託開発',
    text: '大手SESで決済系システムのバックエンドの詳細設計〜テスト作成を行っていました。',
    process: 'バックエンド / 詳細設計、実装、テスト作成',
    tech: 'Java, Junit, SQL, Ubuntu, Shell Script, Plant UML, Confluence'

  },
  {
    color: 'amber',
    year: '2社目（現職）',
    title: 'Webアプリ開発',
    process: 'フロントメイン、時々バックとインフラ / 画面設計、概要設計、詳細設計、実装、テスト作成',
    text: 'AI関連のWebアプリサービスをしています。半年ほどtoCアプリを作成し、その後はtoBアプリを作成。主にフロントエンドですが、たまにバックエンドもインフラもやっています。',
    tech: 'Vue.js / Nuxt.js / Python / Flask / Figma'
  }
]

export default {
  computed: {
    years: () => _years
  }
}
