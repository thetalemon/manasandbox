<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      color="#4682B4"
      fixed
      dense
      app
    >
      <button class="menuButton" aria-label="menu-button" @click.stop="drawer = !drawer">
        <span class="menu-btn" />
      </button>
      <v-toolbar-title id="toolbar-title" v-text="title" />
    </v-app-bar>
    <v-main>
      <div class="defaultContainer">
        <nuxt />
      </div>
    </v-main>
    <v-footer
      class="footer"
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'トップ',
          to: '/'
        },
        {
          title: 'コンポーネント',
          to: '/components'
        },
        {
          title: 'グラフ',
          to: '/graph'
        },
        {
          title: 'スマホレイアウト',
          to: '/smartPhones'
        }
      ],

      right: true,
      rightDrawer: false,
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
.defaultContainer {
  margin-top: 10px;
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
</style>
