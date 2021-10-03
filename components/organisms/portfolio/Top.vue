<template>
  <div class="topWrapper">
    <picture>
      <source type="image/webp" srcset="/top/aza2109.webp">
      <img class="topImg" width="820" height="420" alt="トップ画像" src="/top/aza2109.png">
    </picture>
    <div class="titleTextArea">
      <h1>なじませクリエイター</h1>
      <h2>まなさす</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topWrapper {
  position: relative;

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

  .topImg {
    border-radius: 5px;
    max-width: 100%;
    height: auto;
  }
  .titleTextArea {
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
