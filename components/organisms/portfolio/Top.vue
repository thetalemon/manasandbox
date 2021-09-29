<template>
  <div class="topWrapper">
    <img class="topImg" src="/top/aza2109.png">
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
    width: 100%;
    border-radius: 5px;
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
