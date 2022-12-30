<template>
  <WebpImage
    class="fullWidthImg"
    :image-path-with-out-ext="imagePathWithOutExt"
    :width="width"
    :height="height"
    :alt="alt"
  />
</template>

<script>
import WebpImage from '~/components/atoms/Img/Webp.vue'

export default {
  components: {
    WebpImage
  },
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
  }
}
</script>

<style lang="scss" scoped>
.fullWidthImg {
  max-width: 100%;
  height: auto;
}
</style>
