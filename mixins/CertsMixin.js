const _certs = [
  {
    name: '基本情報',
    year: '2016年',
    text: 'Vue.js'
  }, {
    name: 'TOEIC 730',
    year: '2017年',
    text: '業務で1ヶ月ほど利用。勉強中'
  }, {
    name: '応用情報',
    year: '2018年',
    text: '業務で1ヶ月ほど利用。勉強中'
  }, {
    name: 'G検定',
    year: '2020年',
    text: '業務で利用。'
  }
]

export default {
  computed: {
    certs: () => _certs
  }
}
