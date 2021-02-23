const _skills = [
  {
    name: 'Nuxt.js',
    level: '★★★',
    img: 'nuxt-icon.svg',
    text: `Vue.jsを半年くらいやって、最近Nuxt.jsに進化しました。
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
    level: '★★',
    img: 'firebase.svg',
    text: `読書進捗具合を入力/管理するアプリをVue.js + Firebaseで作れる。
    GoogleMapAPIを使って簡単なGooleMapクローンとかも作れる。`,
    related: ['Firestore', 'Authentication', 'Firebase-hosting', 'GoogleMapAPI']
  }, {
    name: 'Figma',
    level: '★★',
    img: 'figma.svg',
    text: 'プロトタイプ作れる。デザインは勉強中。'
  }, {
    name: 'Illustrator',
    level: '★',
    img: 'illustrator.svg',
    text: '簡単なベジェ絵くらいなら。',
    related: ['InDesign', 'CLIP STUDIO']
  }, {
    name: 'AfterEffects',
    level: '★',
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
    text: '動画から楽曲を自動生成するアプリを作れる。書かなくなって長いのでそろそろ怪しい。',
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
    img: 'sql.svg',
    text: '左右にJOINができる。',
    related: ['正規化を考慮したDB設計']
  }, {
    name: '設計、文書',
    level: '★★',
    img: 'doc.svg',
    text: '基本のREST APIの設計をしたり、RDB設計したり、クラス図やシーケンス図を書いたり。その他、情報をわかりやすく表などにするのも得意で好きです。',
    related: ['plant UML', 'フローチャート図やシーケンス図などの書き方']
  }
]

export default {
  computed: {
    skills: () => _skills
  }
}
