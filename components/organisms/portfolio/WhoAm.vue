<template>
  <PortCardTemplate title="who am i">
    <template slot="content">
      <p>フロントエンドよりフルスタックアザラシ。</p>
      <p>WEBフロントエンドが軸で機械学習, firebase, デスクトップアプリ開発、わりとなんでもやります。</p>
      <p>今のお仕事は教育系サービスのフロントエンドエンジニア。</p>
      <p>最近のプライベートは動画に合う自動作曲アプリ開発と旅。</p>
    </template>
  </PortCardTemplate>
</template>

<script>
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    PortCardTemplate
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 4px;
}
</style>
