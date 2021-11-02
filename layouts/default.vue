<template>
  <v-app>
    <v-app-bar
      color="#4682B4"
      fixed
      dense
      app
    >
      <v-toolbar-title id="toolbar-title" v-text="title" />
    </v-app-bar>
    <v-main>
      <div class="defaultContainer">
        <nuxt />
      </div>
    </v-main>
    <v-footer
      class="footer"
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

<style lang="scss">
#toolbar-title{
  font-size: 1.4rem;
  color:rgba(255, 255, 255, 0.9);
}
.menuButton {
  height: 30px;
  width: 30px;
  margin-right: 10px;
  .menu-btn,
  .menu-btn:before,
  .menu-btn:after {
      content: '';
      display: block;
      height: 2px;
      width: 24px;
      border-radius: 5px;
      background-color: #ffffff;
      position: absolute;
  }
  .menu-btn:before {
    bottom: 8px;
  }
  .menu-btn:after {
      top: 8px;
  }
}
.footer {
  color: white;
}
</style>
