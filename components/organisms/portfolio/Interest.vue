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
          height="150px"
          @click="clickData(item)"
        >
          <v-img class="mb-1 rounded-xl" :src="convert2Path(item.img)" contain max-width="145px" />
          <p class="mr-2 ml-2" v-html="item.name" />
        </v-card>
      </v-row>

      <v-dialog
        v-model="isDialogOpen"
        class="rounded-xl"
        max-width="350"
      >
        <v-card class="text-center rounded-xl">
          <!-- <v-card-title /> -->
          <v-img class="mb-5 rounded-xl" :src="convert2Path(selectImg)" contain width="350px" />
          <v-card-text>
            <p v-html="dialogText" />
          </v-card-text>
          <v-card-text>
            <div @click="closeModal">
              とじる
            </div>
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
      dialogText: undefined,
      selectImg: undefined
    }
  },
  methods: {
    convert2Path (filename) {
      const prefix = '/interest/'
      return prefix + filename
    },
    clickData (row) {
      this.isDialogOpen = true
      this.dialogText = row.text
      this.selectImg = row.img
    },
    closeModal () {
      this.isDialogOpen = false
      this.dialogText = undefined
      this.selectImg = undefined
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
