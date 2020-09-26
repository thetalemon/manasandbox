<template>
  <div class="card-template">
    <v-card class="card-template pl-3 pr-3">
      <v-card-title>
        {{ title }}
        <v-spacer />
        <linkbtn :url="url" />
      </v-card-title>
      <v-card-subtitle v-if="subtitle">
        {{ subtitle }}
      </v-card-subtitle>

      <slot name="content" />
    </v-card>
  </div>
</template>

<script>

import LinkBtn from '~/components/atoms/LinkBtn.vue'

export default {
  components: {
    linkbtn: LinkBtn
  },
  props: {
    title: {
      type: String,
      required: true,
      default: undefined
    },
    subtitle: {
      type: String,
      required: false,
      default: undefined
    },
    url: {
      type: String,
      required: true,
      default: undefined
    }
  }
}
</script>

<style>
.card-template{
  min-height: 350px;
}
</style>
