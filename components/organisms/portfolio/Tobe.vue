<template>
  <PortCardTemplate title="to be">
    <template slot="content">
      <p>テクノロジーを使って何か作る人。</p>
      <p>最近は動画を基にした自動作曲を作ってます。</p>
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
