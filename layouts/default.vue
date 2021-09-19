<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
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
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            icon
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      class="red accent-2"
      fixed
      dense
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
          icon: 'mdi-human-greeting',
          title: 'トップ',
          to: '/'
        },
        {
          icon: 'mdi-package-variant',
          title: 'コンポーネント',
          to: '/components'
        },
        {
          icon: 'mdi-chart-line',
          title: 'グラフ',
          to: '/graph'
        },
        {
          icon: 'mdi-cellphone',
          title: 'スマホレイアウト',
          to: '/smartPhones'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Mana's Sandbox"
    }
  }
}
</script>

<style lang="scss">
#toolbar-title{
  font-family: 'Caveat';
  font-size: 1.8em;
  color:white;
}
.defaultContainer {
  margin-top: 10px;
}
</style>
