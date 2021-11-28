const _skills = [
  {
    name: 'Vue.js',
    isWork: true,
    isAbleToTeach: true,
    img: 'vuejs.svg',
    color: '#4FC08D',
    text: '2019~。メイン。だいたいなんとかなる。',
    related: ['Nuxt.js', 'Vuetify', 'webpack', 'HTML', 'CSS', 'scss', 'Cypress', 'Storybook']
  },
  {
    name: 'Nuxt.js',
    isWork: true,
    isAbleToTeach: true,
    img: 'nuxtjs.svg',
    color: '#00DC82',
    text: 'このサイトはNuxt.js製。'
  },
  {
    name: 'Webpack',
    isWork: true,
    isAbleToTeach: true,
    img: 'webpack.svg',
    color: '#8DD6F9',
    text: 'だいたいの基本的なカスタムはできる'
  },
  {
    name: 'React',
    isWork: true,
    isAbleToTeach: false,
    img: 'react.svg',
    color: '#61DAFB',
    text: '2020~。絶賛勉強中。基本的なことは書けるようになった。',
    related: ['Next.js']
  },
  {
    name: 'Next.js',
    isWork: true,
    isAbleToTeach: false,
    img: 'nextjs.svg',
    color: '#000000',
    text: '2020~。絶賛勉強中。基本的なことは書けるようになった。ブログと開発中のアプリがNext.js製。'
  },
  {
    name: 'Python',
    isWork: true,
    isAbleToTeach: false,
    img: 'python.svg',
    color: '#3776AB',
    text: '2016~。研究や仕事で断続的に利用。FlaskでREST APIが作ったり、簡単な集計処理とか機械学習とか。開発中のアプリのバックエンドはPython。',
    related: ['Flask', 'Flask-RESTPlus', 'SQLAlchemy', 'pytest', 'Chainer', 'OpenCV']
  },
  {
    name: 'Flask',
    isWork: true,
    isAbleToTeach: false,
    img: 'flask.svg',
    color: '#000000',
    text: '2019~。仕事で利用'
  },
  {
    name: 'Java',
    isWork: true,
    isAbleToTeach: true,
    img: 'spring.svg',
    color: '#007396',
    text: '2018~2019。昔のメイン。Springを使ったREST APIが作れる。',
    related: ['Spring Framework', 'junit']
  },
  {
    name: 'Spring',
    isWork: true,
    isAbleToTeach: true,
    img: 'java.svg',
    color: '#6DB33F',
    text: '2018~2019。昔のメイン。Springを使ったREST APIが作れる。',
    related: ['Spring Framework', 'junit']
  },
  {
    name: 'C++',
    isWork: false,
    isAbleToTeach: false,
    img: 'c-plusplus.svg',
    color: '#00599C',
    text: '2016~2018。動画から楽曲を自動生成するプログラムを作成。',
    related: ['C', 'Qt', 'OpenCV', 'OpenMIDI']
  },
  {
    name: 'OpenCV',
    isWork: false,
    isAbleToTeach: false,
    img: 'opencv.svg',
    color: '#5C3EE8',
    text: '2016~2018。動画から楽曲を自動生成するプログラムや動画の印象推定などで利用'
  },
  {
    name: 'MIDI',
    isWork: false,
    isAbleToTeach: false,
    img: 'opencv.svg',
    color: '#000000',
    text: '2016~楽曲制作へのあくなき夢により触り続けてる。'
  },
  {
    name: 'Illustrator',
    isWork: false,
    isAbleToTeach: true,
    img: 'illustrator.svg',
    color: '#FF9A00',
    text: '2014~。faviconアザラシはイラレ製。',
    related: ['InDesign', 'CLIP STUDIO']
  },
  {
    name: 'Electron',
    isWork: false,
    isAbleToTeach: true,
    img: 'electron.svg',
    color: '#47848F',
    text: '2019~。仕事ですこし＋アプリ作るのに利用'
  },
  {
    name: 'After Effects',
    isWork: false,
    isAbleToTeach: false,
    img: 'ae.svg',
    color: '#9999FF',
    text: '2014~。学生時代アニメ作ってた。'
  },
  // {
  //   name: '設計、文書',
  //   isWork: true,
  //   isAbleToTeach: true,
  //   img: 'doc.svg',
  //   color: '#4FC08D',
  //   text: '2018~。基本のREST APIの設計をしたり、RDB設計したり、クラス図やシーケンス図を書いたり。仕様を文書にするの大好きの民。',
  //   related: ['plant UML', 'フローチャート図やシーケンス図などの書き方']
  // },
  // {
  //   name: 'SQL',
  //   isWork: true,
  //   isAbleToTeach: false,
  //   img: 'sql.svg',
  //   color: '#4FC08D',
  //   text: '2018~2019。JOINしたり何したり。最近はORMが優秀になったので、書く機会がない。',
  //   related: ['正規化を考慮したDB設計']
  // },
  {
    name: 'Docker',
    isWork: true,
    isAbleToTeach: true,
    img: 'docker.svg',
    color: '#2496ED',
    text: '2018~。断続的に。docker-composeを利用することが多い。FlaskとVue.jsを繋ぐとかFEとBEを繋ぐ系はわりとできる。'
  },
  {
    name: 'Figma',
    isWork: true,
    isAbleToTeach: false,
    img: 'figma.svg',
    color: '#F24E1E',
    text: '2020~。1ヶ月くらいメインだった。プロトタイプ作れる。デザインは勉強中。'
  },
  {
    name: 'Ubuntu Server',
    isWork: true,
    isAbleToTeach: false,
    img: 'ubuntu.svg',
    color: '#E95420',
    text: '2018~。定時でサーバ内の状況を見て色々起動するシェルとか、出力ファイルの突合するシェルとかを作成。',
    related: ['vim', 'Shell Script']
  },
  {
    name: 'Firebase',
    isWork: false,
    isAbleToTeach: true,
    img: 'firebase.svg',
    color: '#FFCA28',
    text: '2020~。趣味。読書の進捗管理するアプリ作ったり、スタンプラリーアプリ作ったり。',
    related: ['Firestore', 'Authentication', 'Firebase-hosting', 'GoogleMapAPI']
  },
  {
    name: 'Google Maps',
    isWork: false,
    isAbleToTeach: true,
    img: 'googlemaps.svg',
    color: '#4285F4',
    text: '2020~。スタンプゲーっぽいものを作ってた'
  }
]

export default {
  computed: {
    skills: () => _skills
  }
}
