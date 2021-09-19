<template>
  <div class="topWrapper">
    <img class="topImg" src="/aza156-2.png">
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
    color: white;
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
  }
}
</style>
