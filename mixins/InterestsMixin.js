const _interests = [
  {
    name: '知らないことを知る',
    img: '',
    text: '乱読も開拓も散策も、知らないことに出会うため'
  }, {
    name: 'マクロ写真撮影',
    img: '',
    text: '肉眼ではそう見えないのが面白いんです'
  }, {
    name: '広角レンズ',
    img: 'sky.jpg',
    text: '世界の広さを感じていたい'
  }, {
    name: 'Pinterestでかわいいを集める',
    img: '',
    text: 'かわいいを集めてるといつのまにかデザインのコツの記事にたどり着くのは運命かもしれない'
  }, {
    name: 'かわいいを描く',
    img: 'kawaii.png',
    text: 'かわいいを模索する日々'
  }, {
    name: '好きな音楽を聞く',
    img: '',
    text: 'ロックからボカロまでなんでも'
  }, {
    name: 'ひとりカラオケ',
    img: '',
    text: '肺活量の限界を超えたい'
  }, {
    name: '脳内妄想MV生成',
    img: '',
    text: '本物の動画にしたい野望はいつも胸の中'
  }, {
    name: '音楽開拓',
    img: '',
    text: '新しい曲に出会う時も、好きな曲の新しい面に出会う時もある'
  }, {
    name: 'カフェ開拓',
    img: 'googlemap.png',
    text: '行きたいところリスト消化仲間募集中。'
  }, {
    name: '乱読',
    img: '',
    text: 'noteのおかげであとで読むリストが潤沢'
  }, {
    name: '水引細工',
    img: '',
    text: '水引の存在をみんなに気付かせ隊'
  }, {
    name: 'レジンに封入',
    img: '',
    text: 'きれいのかたまりをつくってる'
  }
]

export default {
  computed: {
    interests: () => _interests
  }
}
