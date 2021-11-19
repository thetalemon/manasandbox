<template>
  <div class="topWrapper">
    <FulWidthImg
      image-path-with-out-ext="/top/aza2109"
      :width="840"
      :height="420"
      alt="トップ画像"
    />
    <div class="titleTextArea">
      <h1>なじませクリエイター</h1>
      <h2>まなさす</h2>
    </div>
  </div>
</template>

<script>
import FulWidthImg from '~/components/atoms/Img/FulWidthImg.vue'

export default {
  components: {
    FulWidthImg
  }
}
</script>

<style lang="scss" scoped>
.topWrapper {
  position: relative;
  line-height: 0;

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 16px;
    }
    h2 {
      font-size: 14px;
    }
  }

  .titleTextArea {
    line-height: 1.2;
    word-wrap: normal;
    width: 55%;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 30%;
    left: 35%;
    transform: translate(-50%, -50%);
  }
}
</style>
