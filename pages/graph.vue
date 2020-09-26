<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container fluid>
      <v-row dense>
        <v-col>
          <card-template
            title="apexchart"
            url="https://github.com/apexcharts/vue-apexcharts/issues/34"
          >
            <template slot="content">
              <apexchart />
            </template>
          </card-template>
        </v-col>
        <v-col>
          <card-template
            title="Chart.js"
            url="https://qiita.com/kattoon/items/a76caa684261956c900b"
          >
            <template slot="content">
              <chartjs />
            </template>
          </card-template>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <card-template
            title="plotly.js"
            url="https://github.com/statnett/vue-plotly/issues/26"
          >
            <template slot="content">
              ライブラリ呼び出す時点でdocument見つからないで怒られる
            </template>
          </card-template>
        </v-col>
        <v-col>
          <card-template
            title="d3.js"
            url="https://qiita.com/tochiji/items/90e4674bde19923b68cb"
          >
            <template slot="content">
              多機能だが根本的に学習コスト高いらしいので学習コストと相談
              nuxt.jsに導入自体にも結構時間かかるかも
            </template>
          </card-template>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import CardTemplate from '~/components/templates/CardTemplate.vue'
import Apexchart from '~/components/molecules/graph/Apexchart.vue'
import Chartjs from '~/components/molecules/graph/Chartjs.vue'
// import PlotlyjsComponent from '~/components/molecules/graph/PlotlyjsComponent.vue'

export default {
  components: {
    'card-template': CardTemplate,
    apexchart: Apexchart,
    chartjs: Chartjs
    // plotlyjs: PlotlyjsComponent
  }
}
</script>
