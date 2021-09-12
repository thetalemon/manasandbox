<template>
  <port-card-template title="技術">
    <template slot="content">
      <skill-card-list title="実装" :list="skills.devs" />
      <skill-card-list title="その他開発周辺スキル" :list="skills.other" />
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
            <p class="dialogTitle">
              利用可能な関連技術
            </p>
            <p>
              <span
                v-for="(item, i) in relatedList"
                :key="i"
              >
                <span v-if="relatedList.length-1 !== i">{{ item }}、</span>
                <span v-else>{{ item }}</span>
              </span>
            </p>
          </v-card-text>
        </v-card>
      </v-dialog>
    </template>
  </port-card-template>
</template>

<script>
import skills from '@/mixins/SkillsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'
import SKillCardList from '~/components/organisms/portfolio/SkillCardList.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate,
    'skill-card-list': SKillCardList
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
.cardsWrapper {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 140px));
  margin-top: 16px;
  margin-bottom: 24px;

  .skillCard{
    width: 125px;
    height: 180px;
    border-radius: 6px;
    border: solid 2px #fff;
    text-align: center;
    .img {
      margin: 0 auto;
    }
    &:hover {
      border: solid 2px #add8e6;
    }
  }
}

.dialogTitle {
  margin: 0;
}
</style>
