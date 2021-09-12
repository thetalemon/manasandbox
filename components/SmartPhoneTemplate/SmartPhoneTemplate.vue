<template>
  <div class="sp-template">
    <div class="sp-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss'>
.sp-template{
  @media (min-width: 450px) {
    background-color: rgb(117, 117, 117);
    height: 650px;
    width: 330px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-left: 10px;
    margin-bottom: 50px;
    &::after {
      content: '';
      margin: 10px auto;
      border: rgb(182, 182, 182) 1px solid;
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
  }
  .sp-inner {
    text-align: center;
    padding-top: 250px;
    margin: 40px auto 0;
    background-color: lightgreen;
    height: 568px;
    width: 320px;
    @media (max-width: 449px) {
      top: auto;
      width: 100vw;
      margin-bottom: 50px;
    }
  }
}
</style>
