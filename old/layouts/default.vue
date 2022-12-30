<template>
  <v-app>
    <v-app-bar
      color="#4682B4"
      fixed
      dense
      app
      dark
    >
      <h3>
        {{ title }}
      </h3>
    </v-app-bar>
    <v-main>
      <div class="defaultContainer">
        <nuxt />
      </div>
    </v-main>
    <v-footer
      color="#4682B4"
      dark
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Manami SASAKI</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      title: "Mana's Sandbox"
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
