<template>
  <div class="cardTemplate">
    <h1 v-if="title">
      ■ {{ title }}
    </h1>
    <slot name="content" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.cardTemplate{
  h1 {
    margin-bottom: 8px;
  }
}

</style>
