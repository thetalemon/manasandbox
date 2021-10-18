<template>
  <port-card-template title="to do">
    <template slot="content">
      <p>テクノロジーで、日々をちょっぴり快適に。</p>
      <p>『日々の暮らしのちょっとしたストレスを軽減』を目指して、色々造っています。</p>
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
