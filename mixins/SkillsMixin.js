const _skills = [
  {
    name: 'Nuxt.js',
    level: '★★★',
    img: 'nuxt-icon.svg',
    text: `Vue.jsを半年くらいやって、最近Nuxt.jsに進化しました。<br>
    webpackやCSS修行中`,
    related: ['Vue.js', 'Vuetify', 'webpack', 'HTML', 'CSS', 'scss', 'Cypress']
  }, {
    name: 'Python',
    level: '★★',
    img: 'python.svg',
    text: 'DBのデータを返すAPIと、簡単な集計処理がかけます。',
    related: ['Flask', 'Flask-RESTPlus', 'SQLAlchemy', 'pytest', 'Chainer', 'OpenCV']
  }, {
    name: 'Docker',
    level: '★',
    img: 'docker-icon.svg',
    text: 'Vue.jsやFlaskを包むコンテナを作れる。composeも頑張ればできる。'
  }, {
    name: 'Firebase',
    level: '☆☆',
    img: 'firebase.svg',
    text: `読書進捗具合を入力/管理するアプリをVue.js + Firebaseで作れる。<br>
    GoogleMapAPIを使って簡単なGooleMapクローンとかも作れる。`,
    related: ['Firestore', 'Authentication', 'Firebase-hosting', 'GoogleMapAPI']
  }, {
    name: 'Figma',
    level: '★',
    img: 'figma.svg',
    text: 'プロトタイプ作れる。'
  }, {
    name: 'Illustrator',
    level: '☆',
    img: 'illustrator.svg',
    text: '簡単なベジェ絵くらいなら。',
    related: ['InDesign', 'CLIP STUDIO']
  }, {
    name: 'AfterEffects',
    level: '☆',
    img: 'ae.svg',
    text: 'パペットピンツールを利用した簡単なアニメが作れる。'
  }, {
    name: 'Java',
    level: '★★',
    img: 'java.svg',
    text: 'Springを使ったREST APIが作れる。',
    related: ['Spring Framework', 'junit']
  }, {
    name: 'C++',
    level: '★',
    img: 'c-plusplus.svg',
    text: '動画から楽曲を自動生成するアプリを作れる。<br>書かなくなって長いのでそろそろ怪しい。',
    related: ['C', 'Qt', 'OpenCV', 'OpenMIDI']
  }, {
    name: 'Ubuntu Server',
    level: '★',
    img: 'ubuntu.svg',
    text: '昔の自分のHPはUbuntu Serverで立てて管理してました。',
    related: ['vim', 'Shell Script']
  }, {
    name: 'SQL',
    level: '★',
    text: 'hogehoge?',
    related: ['正規化を考慮したDB設計']
  }, {
    name: 'PlantUML',
    level: '★',
    text: '設計書書いたりは結構好きです',
    related: ['フローチャート図やシーケンス図などの書き方']
  }
]

export default {
  computed: {
    skills: () => _skills
  }
}
