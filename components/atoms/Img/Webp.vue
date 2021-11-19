<template>
  <picture>
    <source type="image/webp" :srcset="webpFullPath">
    <img :width="width" :height="height" :alt="alt" :src="pngFullPath">
  </picture>
</template>

<script>
export default {
  props: {
    imagePathWithOutExt: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  computed: {
    webpFullPath () {
      return this.imagePathWithOutExt + '.webp'
    },
    pngFullPath () {
      return this.imagePathWithOutExt + '.png'
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
