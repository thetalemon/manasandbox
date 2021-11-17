<template>
  <div class="iconWithTextFlexList">
    <IconWithText
      v-for="(item, i) in list"
      :key="i"
      :src="convert2Path(item.img)"
      :text="item.name"
      @click="clickData(item)"
    />
  </div>
</template>

<script>
import IconWithText from '~/components/atoms/IconWithText.vue'

export default {
  components: {
    IconWithText
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    convert2Path (filename) {
      const prefix = '/tech-logo/'
      return prefix + filename
    },
    clickData (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.iconWithTextFlexList {
  display: grid;
  grid-row-gap: 16px;
  grid-column-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
</style>
