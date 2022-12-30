<template>
  <v-btn
    x-small
    color="secondary"
    dark
    link
    nuxt
    :href="url"
    target="_blank"
  >
    参考サイト
  </v-btn>
</template>

<script>

export default {
  props: {
    url: {
      type: String,
      required: true,
      default: undefined
    }
  }
}
</script>
