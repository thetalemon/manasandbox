<template>
  <port-card-template title="技術">
    <template slot="content">
      <v-row>
        <v-card
          v-for="(item, i) in skills"
          :key="i"
          class="ma-2 pa-2 text-center rounded-xl"
          tile
          width="145px"
          height="200px"
          @click="clickData(item)"
        >
          <v-card-text>
            <p>{{ item.name }}</p>
            <v-img class="mb-5" :src="convert2Path(item.img)" contain max-width="100px" height="80px" />
            <p>{{ item.level }}</p>
          </v-card-text>
        </v-card>
      </v-row>

      <v-dialog
        v-model="isDialogOpen"
        max-width="290"
      >
        <v-card>
          <v-card-title />
          <v-card-text>
            <p>
              {{ dialogText }}
            </p>
            <v-card-subtitle>利用可能な関連技術</v-card-subtitle>
            <v-card-text>
              <span
                v-for="(item, i) in relatedList"
                :key="i"
              >
                {{ item }}、
              </span>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-dialog>
    </template>
  </port-card-template>
</template>

<script>
import skills from '@/mixins/SkillsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate
  },
  mixins: [skills],
  data () {
    return {
      isDialogOpen: false,
      dialogText: undefined,
      relatedList: undefined
    }
  },
  methods: {
    convert2Path (filename) {
      const prefix = '/tech-logo/'
      return prefix + filename
    },
    clickData (row) {
      this.isDialogOpen = true
      this.dialogText = row.text
      this.relatedList = row.related
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

</style>
