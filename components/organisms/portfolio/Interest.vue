<template>
  <port-card-template title="興味">
    <template slot="content">
      <v-row>
        <v-card
          v-for="(item, i) in interests"
          :key="i"
          class="ma-2 text-center rounded-xl"
          tile
          width="145px"
          @click="clickData(item)"
        >
          <v-img class="mb-1 rounded-xl" src="/interest/sky.jpg" contain max-width="145px" />
          <p class="mr-2 ml-2" v-html="item.name" />
        </v-card>
      </v-row>

      <v-dialog
        v-model="isDialogOpen"
        max-width="290"
      >
        <v-card>
          <v-card-title />
          <v-card-text>
            <p v-html="dialogText" />
          </v-card-text>
        </v-card>
      </v-dialog>
    </template>
  </port-card-template>
</template>

<script>
import interests from '@/mixins/InterestsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate
  },
  mixins: [interests],
  data () {
    return {
      isDialogOpen: false,
      dialogText: undefined
    }
  },
  methods: {
    clickData (row) {
      this.isDialogOpen = true
      this.dialogText = row.text
    },
    closeModal () {
      this.isDialogOpen = false
      this.dialogText = undefined
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
