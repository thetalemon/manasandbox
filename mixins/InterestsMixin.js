const _interests = [
  {
    name: '知らないことを知る',
    text: '乱読も開拓も散策も、知らないことに出会うため'
  }, {
    name: 'マクロ写真撮影',
    text: '肉眼ではそう見えないのが面白いんです'
  }, {
    name: '空撮影',
    text: '同じ空は2度と撮影できないところに運命を感じられる人間でありたい'
  }, {
    name: 'Pinterestで<br>かわいいを集める',
    text: 'かわいいを集めてるといつのまにかデザインのコツの記事にたどり着くのは運命かもしれない'
  }, {
    name: 'かわいいを描く',
    text: 'もっとかわいくなりたい'
  }, {
    name: '好きな音楽を聞く',
    text: 'ロックからボカロまでなんでも'
  }, {
    name: 'ひとりカラオケ',
    text: '肺活量の限界を超えたい'
  }, {
    name: '脳内妄想MV生成',
    text: '本物の動画にしたい野望はいつも胸の中'
  }, {
    name: '音楽開拓',
    text: '新しい曲に出会う時も、好きな曲の新しい面に出会う時もある'
  }, {
    name: 'GooleMapで<br>飲食店開拓',
    text: '行きたいところリストだけが溜まっていく'
  }, {
    name: '乱読',
    text: 'noteのおかげであとで読むリストが潤沢'
  }, {
    name: '水引細工',
    text: '水引の存在をみんなに気付かせ隊'
  }, {
    name: 'レジンに封入',
    text: 'きれいのかたまりをつくってる'
  }
]

export default {
  computed: {
    interests: () => _interests
  }
}