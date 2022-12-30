<template>
  <div class="tableFourSection">
    <p class="tableYTitle" v-text="titles.top" />
    <div class="skillGraphCenterArea">
      <Tategaki class="tableXTitle" :text="titles.left" center />
      <table class="skillGraph">
        <tbody>
          <tr>
            <td>
              <IconWithTextFlexList :list="leftUpperItemList" @click="clickData" />
            </td>
            <td>
              <IconWithTextFlexList :list="rightUpperItemList" @click="clickData" />
            </td>
          </tr>
          <tr>
            <td>
              <IconWithTextFlexList :list="leftBottomItemList" @click="clickData" />
            </td>
            <td>
              <IconWithTextFlexList :list="rightBottomItemList" @click="clickData" />
            </td>
          </tr>
        </tbody>
      </table>
      <Tategaki class="tableXTitle" :text="titles.right" center />
    </div>
    <p class="tableYTitle" v-text="titles.bottom" />
  </div>
</template>

<script>
import IconWithTextFlexList from '~/components/molecules/IconWithTextFlexList.vue'
import Tategaki from '~/components/atoms/text/Tategaaki.vue'

export default {
  components: {
    IconWithTextFlexList,
    Tategaki
  },
  props: {
    titles: {
      type: Object,
      required: true
    },
    leftUpperItemList: {
      type: Array,
      required: true
    },
    rightUpperItemList: {
      type: Array,
      required: true
    },
    leftBottomItemList: {
      type: Array,
      required: true
    },
    rightBottomItemList: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickData (payload) {
      this.$emit('click', payload)
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
  }
  .skillGraph {
    border: 1px solid #4682B4;
    background: #4682B4;
    width: calc(100% - 40px);
    td {
      width: 50%;
      padding: 8px;
      background: white;
    }
  }
}
</style>
