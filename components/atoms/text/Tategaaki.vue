<template>
  <p class="tategaki" :class="{center: center}">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    center: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .tategaki {
    width: 20px;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    margin-left: 2px;
    &.center {
      text-align: center;
    }
  }
</style>
