<template>
  <PortCardTemplate title="制作物">
    <template slot="content">
      個人の製作物です
      <div class="cardAreaWrapper">
        <CardWithImage
          v-for="(item, i) in products"
          :key="i"
          :item="item"
          :img="convert2Path(item.img)"
        />
      </div>
    </template>
  </PortCardTemplate>
</template>

<script>
import products from '@/mixins/ProductsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'
import CardWithImage from '~/components/molecules/CardWithImage.vue'

export default {
  components: {
    PortCardTemplate,
    CardWithImage
  },
  mixins: [products],
  methods: {
    convert2Path (filename) {
      return '/product/' + filename
    }
  }
}
</script>

<style lang="scss" scoped>
.cardAreaWrapper {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: 16px;
  margin-bottom: 24px;
}
</style>
