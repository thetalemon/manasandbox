<template>
  <div
    class="iconWithText"
    @click="clickData"
  >
    <IconSvg
      :type="text"
    />
    <p v-text="text" />
  </div>
</template>

<script>
import IconSvg from './IconSvg.vue'

export default {
  components: {
    IconSvg
  },
  props: {
    src: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    clickData () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.iconWithText{
  padding: 4px;
  border-radius: 6px;
  text-align: center;
  width: 100px;
  margin: auto;
  border: 2px solid #fff;
  p {
    font-size: 12px;
    margin-bottom: 0;
  }
  &:hover {
    border: 2px solid #add8e6;
    cursor: pointer;
  }
}
</style>
