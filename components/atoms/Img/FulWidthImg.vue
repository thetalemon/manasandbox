<template>
  <picture>
    <source type="image/webp" :srcset="srcset">
    <img class="fullWidthImg" :width="width" :height="height" :alt="alt" :src="src">
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    srcset: {
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
  }
}
</script>

<style lang="scss" scoped>
.fullWidthImg {
  max-width: 100%;
  height: auto;
}
</style>
