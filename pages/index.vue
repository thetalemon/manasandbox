<template>
  <v-layout
    column
    class="font"
  >
    <v-container fluid>
      <v-row dense justify="center" align-content="center">
        <v-col cols="10">
          <v-card>
            <v-parallax
              dark
              height="300"

              src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
              <v-row
                align="center"
                justify="center"
                :style="{ height: `10rem` }"
              >
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <v-img
                    src="/azara.svg"
                    contain
                    height="10rem"
                    justify="center"
                    align-content="center"
                  >
                    <v-row
                      align="center"
                      justify="center"
                      :style="{ height: `10rem` }"
                    >
                      <v-col
                        cols="12"
                        class="text-center"
                      >
                        <h5>なじみクリエイター</h5>
                        <h2>まな / しーた</h2>
                      </v-col>
                    </v-row>
                  </v-img>
                </v-col>
              </v-row>
            </v-parallax>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense justify="center" align-content="center">
        <v-col cols="10">
          <v-card>
            <v-card-title>TO BE</v-card-title>
            <v-card-text>
              <p>画面をぱっと開いた時に、なんとなく使い方がわかるような、</p>
              <p>毎日使う時に、ストレスがないような、</p>
              <p>そんな『日々の暮らしに馴染む』を、目指して造っています。</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row dense justify="center" align-content="center">
        <v-col cols="10">
          <v-card
            class="mx-auto"
          >
            <v-card-title>技術</v-card-title>

            <v-list two-line>
              <v-list-item-group
                v-model="selected"
                multiple
                active-class="pink--text"
              >
                <template>
                  <v-list-item>
                    <template>
                      <v-list-item-content>
                        <v-list-item-title>
                          メインスキル（最近業務利用しているもの）
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Vue.js / Nuxt.js / Vuetify / scss / webpack / Cypress
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Python / Flask / pytest
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Docker / Figma
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <!-- todo -->
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template>
                      <v-list-item-content>
                        <v-list-item-title>
                          趣味
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Firebase / Firestore / Google Map API
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Illustrator / AfterEffects
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <!-- todo -->
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template>
                      <v-list-item-content>
                        <v-list-item-title>
                          過去に触った技術
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Java / Spring Framework
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          C / C++ / OpenMIDI / Qt
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          SQL / OracleDB
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Ubuntu / Shell Script
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Chainer / OpenCV(Python)
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Ansible / puml
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <!-- todo -->
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-list-item>
                    <template>
                      <v-list-item-content>
                        <v-list-item-title>
                          資格
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          2016年 基本情報
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          2017年 TOEIC730点
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          2018年 応用情報
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          2020年 G検定
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <!-- todo -->
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <!-- <v-divider
                    v-if="index + 1 < items.length"
                    :key="index"
                  /> -->
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
.font{
  font-family: 'M PLUS Rounded 1c';
}
</style>
