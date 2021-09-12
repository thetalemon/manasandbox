const _certs = [
  {
    name: '基本情報処理技術者　合格',
    year: '2016年'
  }, {
    name: 'TOEIC 730',
    year: '2017年'
  }, {
    name: '応用情報処理技術者試験　合格',
    year: '2018年'
  }, {
    name: 'G検定　合格',
    year: '2020年'
  }
]

export default {
  computed: {
    certs: () => _certs
  }
}
