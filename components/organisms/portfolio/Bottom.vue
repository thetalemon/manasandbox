<template>
  <FulWidthImg
    src="/aza166.webp"
    srcset="/aza166.png"
    :width="840"
    :height="410"
    alt="自己紹介画像"
  />
</template>

<script>
import FulWidthImg from '~/components/atoms/Img/FulWidthImg.vue'

export default {
  components: {
    FulWidthImg
  }
}
</script>
