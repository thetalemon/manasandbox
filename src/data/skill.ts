export type SkillItem = {  
  name: string
  isWork: boolean
  isAbleToTeach: boolean
  text: string
  related?: string[],
  color: string
  src: string
}

export const SKILL_LIST:SkillItem[] = [
  {
    name: 'Vue.js',
    isWork: true,
    isAbleToTeach: true,
    text: '2019~。メイン。だいたいなんとかなる。',
    related: ['Nuxt.js', 'Vuetify', 'webpack', 'HTML', 'CSS', 'scss', 'Cypress', 'Storybook'],
    color: '#4FC08D',
    src: 'vuejs.svg'
  },
  {
    name: 'Nuxt.js',
    isWork: true,
    isAbleToTeach: false,
    text: 'このサイトはNuxt.js製でした。今はAstroにのせかえ済。',
    color: '#00DC82',
    src: 'nuxt.svg'
  },
  {
    name: 'Webpack',
    isWork: true,
    isAbleToTeach: false,
    text: 'だいたいの基本的なカスタムはできる',
    color: '#8DD6F9',
    src: 'webpack.svg'
  },
  {
    name: 'React',
    isWork: true,
    isAbleToTeach: true,
    text: '2020~。絶賛勉強中。基本的なことは書けるようになった。',
    related: ['Next.js'],
    color: '#61DAFB',
    src: 'react.svg'
  },
  {
    name: 'Next.js',
    isWork: false,
    isAbleToTeach: true,
    text: '2020~。絶賛勉強中。基本的なことは書けるようになった。ブログと開発中のアプリがNext.js製。',
    color: '#00DC82',
    src: 'nextjs.svg'
  },
  {
    name: 'Python',
    isWork: true,
    isAbleToTeach: false,
    text: '2016~。研究や仕事で断続的に利用。FlaskでREST APIが作ったり、簡単な集計処理とか機械学習とか。開発中のアプリのバックエンドはPython。',
    related: ['Flask', 'Flask-RESTPlus', 'SQLAlchemy', 'pytest', 'Chainer', 'OpenCV'],
    color: '#3776AB',
    src: 'python.svg'
  },
  {
    name: 'Flask',
    isWork: true,
    isAbleToTeach: false,
    text: '2019~。仕事で利用',
    color: '#000000',
    src: 'flask.svg'
  },
  {
    name: 'Java',
    isWork: true,
    isAbleToTeach: true,
    text: '2018~2019。昔のメイン。Springを使ったREST APIが作れる。',
    related: ['Spring Framework', 'junit'],
    color: '#007396',
    src: 'java.svg'
  },
  {
    name: 'Spring',
    isWork: true,
    isAbleToTeach: false,
    text: '2018~2019。昔のメイン。Springを使ったREST APIが作れる。',
    related: ['Spring Framework', 'junit'],
    color: '#6DB33F',
    src: 'spring.svg'
  },
  {
    name: 'C++',
    isWork: false,
    isAbleToTeach: false,
    text: '2016~2018。動画から楽曲を自動生成するプログラムを作成。',
    related: ['C', 'Qt', 'OpenCV', 'OpenMIDI'],
    color: '#00599C',
    src: 'cpp.svg'
  },
  {
    name: 'OpenCV',
    isWork: false,
    isAbleToTeach: false,
    text: '2016~2018。動画から楽曲を自動生成するプログラムや動画の印象推定などで利用',
    color: '#5C3EE8',
    src: 'opencv.svg'
  },
  {
    name: 'MIDI',
    isWork: false,
    isAbleToTeach: false,
    text: '2016~楽曲制作へのあくなき夢により触り続けてる。',
    color: '#000000',
    src: 'midi.svg'
  },
  {
    name: 'Illustrator',
    isWork: false,
    isAbleToTeach: false,
    text: '2014~。faviconアザラシはイラレ製。',
    related: ['InDesign', 'CLIP STUDIO'],
    color: '#FF9A00',
    src: 'illustrator.svg'
  },
  {
    name: 'Electron',
    isWork: false,
    isAbleToTeach: true,
    text: '2019~。仕事ですこし＋アプリ作るのに利用',
    color: '#47848F',
    src: 'electron.svg'
  },
  {
    name: 'After Effects',
    isWork: false,
    isAbleToTeach: false,
    text: '2014~。学生時代アニメ作ってた。',
    color: '#9999FF',
    src: 'ae.svg'
  },
  {
    name: 'Docker',
    isWork: true,
    isAbleToTeach: false,
    text: '2018~。断続的に。docker-composeを利用することが多い。FlaskとVue.jsを繋ぐとかFEとBEを繋ぐ系はわりとできる。',
    color: '#2496ED',
    src: 'docker.svg'
  },
  {
    name: 'Figma',
    isWork: false,
    isAbleToTeach: true,
    text: '2020~。1ヶ月くらいメインだった。プロトタイプ作れる。デザインは勉強中。',
    color: '#F24E1E',
    src: 'figma.svg'
  },
  {
    name: 'Ubuntu Server',
    isWork: false,
    isAbleToTeach: false,
    text: '2018~。定時でサーバ内の状況を見て色々起動するシェルとか、出力ファイルの突合するシェルとかを作成。',
    related: ['vim', 'Shell Script'],
    color: '#E95420',
    src: 'ubuntu.svg'
  },
  {
    name: 'Firebase',
    isWork: false,
    isAbleToTeach: true,
    text: '2020~。趣味。読書の進捗管理するアプリ作ったり、スタンプラリーアプリ作ったり。',
    related: ['Firestore', 'Authentication', 'Firebase-hosting', 'GoogleMapAPI'],
    color: '#FFCA28',
    src: 'firebase.svg'
  },
  {
    name: 'Google Maps',
    isWork: false,
    isAbleToTeach: true,
    text: '2020~。スタンプゲーっぽいものを作ってた',
    color: '#4285F4',
    src: 'googlemaps.svg'
  }
]
  