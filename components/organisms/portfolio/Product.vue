<template>
  <port-card-template title="制作物">
    <template slot="content">
      個人の製作物です
      <div class="cardAreaWrapper">
        <ProductCard
          v-for="(item, i) in products"
          :key="i"
          :item="item"
        />
      </div>
    </template>
  </port-card-template>
</template>

<script>
import products from '@/mixins/ProductsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'
import ProductCard from '~/components/organisms/portfolio/card/Product.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate,
    ProductCard
  },
  mixins: [products],
  data () {
    return {
      isDialogOpen: false,
      dialogText: undefined,
      relatedList: undefined
    }
  },
  methods: {
    clickData (payload) {
      this.isDialogOpen = true
      this.dialogText = payload.text
      this.relatedList = payload.related
    },
    closeModal () {
      this.isDialogOpen = false
      this.dialogText = undefined
      this.relatedList = undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.cardAreaWrapper {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(260px, auto));
  margin-top: 16px;
  margin-bottom: 24px;
}

</style>
