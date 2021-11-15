<template>
  <PortCardTemplate title="技術">
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
              <SkillItems :list="LeftUpper" @click="clickData" />
            </td>
            <td>
              <SkillItems :list="RightUpper" @click="clickData" />
            </td>
          </tr>
          <tr>
            <td>
              <SkillItems :list="LeftLower" @click="clickData" />
            </td>
            <td>
              <SkillItems :list="RightLower" @click="clickData" />
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
        <div class="dialog">
          <p>
            {{ dialogText }}
          </p>
          <div v-if="relatedList.length !== 0">
            <h5>
              利用可能な関連技術
            </h5>
            <p>
              <span
                v-for="(item, i) in relatedList"
                :key="i"
              >
                <template v-if="relatedList.length-1 !== i">{{ item }}, </template>
                <template v-else>{{ item }}</template>
              </span>
            </p>
          </div>
        </div>
      </v-dialog>
    </template>
  </PortCardTemplate>
</template>

<script>
import skills from '@/mixins/SkillsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'
import SkillItems from '~/components/molecules/SkillItems.vue'

export default {
  components: {
    PortCardTemplate,
    SkillItems
  },
  mixins: [skills],
  data () {
    return {
      isDialogOpen: false,
      dialogText: undefined,
      relatedList: []
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
      this.relatedList = !payload.related ? [] : payload.related
    },
    closeModal () {
      this.isDialogOpen = false
      this.dialogText = undefined
      this.relatedList = []
    }
  }
}
</script>

<style lang="scss" scoped>
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
.dialog {
  background: white;
  padding: 16px 8px;
  z-index: 2;
  p {
    margin: 0;
  }
  h5 {
    margin-top: 16px;
  }
}
</style>
