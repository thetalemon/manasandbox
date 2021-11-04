<template>
  <port-card-template title="技術">
    <template slot="content">
      <p class="tableYTitle">
        仕事
      </p>
      <div class="skillGraphCenterArea">
        <p class="tableXTitle">
          わかる
        </p>
        <table class="skillGraph">
          <tr>
            <td>
              <skill-cards :list="LeftUpper" @click="clickData" />
            </td>
            <td>
              <skill-cards :list="RightUpper" @click="clickData" />
            </td>
          </tr>
          <tr>
            <td>
              <skill-cards :list="LeftLower" @click="clickData" />
            </td>
            <td>
              <skill-cards :list="RightLower" @click="clickData" />
            </td>
          </tr>
        </table>
        <p class="tableXTitle">
          教えられる
        </p>
      </div>
      <p class="tableYTitle">
        趣味
      </p>
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
import SKillCards from '~/components/organisms/portfolio/SkillCards.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate,
    'skill-cards': SKillCards
  },
  mixins: [skills],
  data () {
    return {
      isDialogOpen: false,
      dialogText: undefined,
      relatedList: undefined
    }
  },
  computed: {
    LeftUpper () {
      return this.skills.filter(skill => skill.isWork === true && skill.isAbleToTeach === false)
    },
    RightUpper () {
      return this.skills.filter(skill => skill.isWork === true && skill.isAbleToTeach === true)
    },
    LeftLower () {
      return this.skills.filter(skill => skill.isWork === false && skill.isAbleToTeach === false)
    },
    RightLower () {
      return this.skills.filter(skill => skill.isWork === false && skill.isAbleToTeach === true)
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
.cardsWrapper {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 140px));
  margin-top: 16px;
  margin-bottom: 24px;
}

.dialogTitle {
  margin: 0;
}

.tableYTitle {
  text-align: center;
  margin: 0;
}
.skillGraphCenterArea {
  display: flex;
  .tableXTitle {
    width: 20px;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    text-align: center;
  }
  .skillGraph {
    border: 1px solid peachpuff;
      background: peachpuff;
    width: calc(100% - 40px);
    td {
      padding: 8px;
      background: white;
    }
  }
}
</style>
