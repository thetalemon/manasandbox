<template>
  <v-row dense justify="center" align-content="center">
    <v-col cols="12">
      <v-card>
        <v-card-title>
          {{ title }}
        </v-card-title>
        <v-card-text>
          <slot name="content" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
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
