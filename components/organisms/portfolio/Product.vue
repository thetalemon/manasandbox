<template>
  <PortCardTemplate title="制作物">
    <template slot="content">
      個人の製作物です
      <div class="cardAreaWrapper">
        <ProductItem
          v-for="(item, i) in products"
          :key="i"
          :item="item"
        />
      </div>
    </template>
  </PortCardTemplate>
</template>

<script>
import products from '@/mixins/ProductsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'
import ProductItem from '~/components/molecules/ProductItem.vue'

export default {
  components: {
    PortCardTemplate,
    ProductItem
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
