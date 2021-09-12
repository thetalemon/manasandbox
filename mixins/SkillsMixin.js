const _skills = {
  devs: [
    {
      name: 'Vue.js',
      level: '★★★',
      img: 'vuejs.svg',
      text: '2019~。メイン。だいたいなんとかなる。このサイトはNuxt.js製。',
      related: ['Nuxt.js', 'Vuetify', 'webpack', 'HTML', 'CSS', 'scss', 'Cypress', 'Storybook']
    },
    {
      name: 'React',
      level: '★',
      img: 'react.svg',
      text: '2020~。絶賛勉強中。基本的なことは書けるようになった。ブログはNext.js製品。',
      related: ['Next.js']
    },
    {
      name: 'Python',
      level: '★★',
      img: 'python.svg',
      text: '2016~。研究や仕事で断続的に利用。FlaskでREST APIが作ったり、簡単な集計処理とか機械学習とか。',
      related: ['Flask', 'Flask-RESTPlus', 'SQLAlchemy', 'pytest', 'Chainer', 'OpenCV']
    },
    {
      name: 'Java',
      level: '★★',
      img: 'java.svg',
      text: '2018~2019。昔のメイン。Springを使ったREST APIが作れる。',
      related: ['Spring Framework', 'junit']
    },
    {
      name: 'C++',
      level: '★',
      img: 'c-plusplus.svg',
      text: '2016~2018。動画から楽曲を自動生成するプログラムを作成。',
      related: ['C', 'Qt', 'OpenCV', 'OpenMIDI']
    }
  ],
  other: [
    {
      name: 'Illustrator',
      level: '★',
      img: 'illustrator.svg',
      text: '2014~。faviconアザラシはイラレ製。',
      related: ['InDesign', 'CLIP STUDIO']
    },
    {
      name: 'AfterEffects',
      level: '★',
      img: 'ae.svg',
      text: '2014~。学生時代アニメ作ってた。'
    },
    {
      name: '設計、文書',
      level: '★★',
      img: 'doc.svg',
      text: '2018~。基本のREST APIの設計をしたり、RDB設計したり、クラス図やシーケンス図を書いたり。仕様を文書にするの大好きの民。',
      related: ['plant UML', 'フローチャート図やシーケンス図などの書き方']
    },
    {
      name: 'SQL',
      level: '★★',
      img: 'sql.svg',
      text: '2018~2019。JOINしたり何したり。最近はORMが優秀になったので、書く機会がない。',
      related: ['正規化を考慮したDB設計']
    },
    {
      name: 'Docker',
      level: '★★',
      img: 'docker-icon.svg',
      text: '2018~。断続的に。docker-composeを利用することが多い。FlaskとVue.jsを繋ぐとかFEとBEを繋ぐ系はわりとできる。'
    },
    {
      name: 'Figma',
      level: '★★',
      img: 'figma.svg',
      text: '2020~。1ヶ月くらいメインだった。プロトタイプ作れる。デザインは勉強中。'
    },
    {
      name: 'Ubuntu Server',
      level: '★★',
      img: 'ubuntu.svg',
      text: '2018~。定時でサーバ内の状況を見て色々起動するシェルとか、出力ファイルの突合するシェルとかを作成。',
      related: ['vim', 'Shell Script']
    },
    {
      name: 'Firebase',
      level: '★★',
      img: 'firebase.svg',
      text: '2020~。趣味。読書の進捗管理するアプリ作ったり、スタンプラリーアプリ作ったり。',
      related: ['Firestore', 'Authentication', 'Firebase-hosting', 'GoogleMapAPI']
    }
  ]
}

export default {
  computed: {
    skills: () => _skills
  }
}
