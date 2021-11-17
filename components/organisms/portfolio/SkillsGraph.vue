<template>
  <PortCardTemplate title="技術">
    <template slot="content">
      <TableFourSection
        :titles="{
          top:'仕事',
          bottom:'趣味',
          left:'わかる',
          right:'教えられる'
        }"
        :left-upper-item-list="LeftUpper"
        :left-bottom-item-list="LeftBottom"
        :right-upper-item-list="RightUpper"
        :right-bottom-item-list="RightBottom"
        @click="clickData"
      />
      <v-dialog
        v-model="isDialogOpen"
        max-width="290"
      >
        <div class="dialog">
          <p v-text="dialogText" />
          <div v-if="relatedList.length !== 0">
            <h5 v-text="'利用可能な関連技術'" />
            <TextList :list="relatedList" />
          </div>
        </div>
      </v-dialog>
    </template>
  </PortCardTemplate>
</template>

<script>
import skills from '@/mixins/SkillsMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'
import TableFourSection from '~/components/molecules/TableFourSection.vue'
import TextList from '~/components/molecules/TextList.vue'

export default {
  components: {
    PortCardTemplate,
    TableFourSection,
    TextList
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
    LeftBottom () {
      return this.skills.filter(skill => skill.isWork === false && skill.isAbleToTeach === false)
    },
    RightBottom () {
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
