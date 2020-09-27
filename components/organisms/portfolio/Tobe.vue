<template>
  <port-card-template title="To be...">
    <template slot="content">
      <p>画面をぱっと開いた時に、なんとなく使い方がわかるような、</p>
      <p>毎日使う時に、ストレスがないような、</p>
      <p>そんな『日々の暮らしに馴染む』を、目指して造っています。</p>
    </template>
  </port-card-template>
</template>

<script>
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate
  }
}
</script>
