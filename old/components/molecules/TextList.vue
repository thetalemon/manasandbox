<template>
  <p>
    <span
      v-for="(item, i) in list"
      :key="i"
    >
      <template v-if="list.length-1 !== i">{{ item }}{{ quote }} </template>
      <template v-else>{{ item }}</template>
    </span>
  </p>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    quote: {
      type: String,
      required: false,
      default: ','
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  background: white;
  padding: 16px 8px;
  z-index: 2;
  p {
    margin: 0;
  }
  h5 {
    margin-top: 16px;
  }
}
</style>
