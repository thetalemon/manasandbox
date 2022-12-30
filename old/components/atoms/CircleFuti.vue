<template>
  <div class="circle" :style="{ background: color }" />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.circle {
  border: #fff 1px solid;
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  border-radius: 50%;
}
</style>
