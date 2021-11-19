<template>
  <div
    class="iconWithText"
    @click="clickData"
  >
    <img
      :src="src"
      width="80px"
      height="50px"
      :alt="text"
    >
    <p v-text="text" />
  </div>
</template>

<script>
export default {
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
  height: 100px;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  img {
    margin: 0 auto;
    margin-bottom: 8px;
    object-fit: contain;
    max-width: 80px;
    max-height: 50px;
  }
  p {
    font-size: 12px;
  }
  &:hover {
    background-color: #e6f9ff;
  }
}
</style>
