<template>
  <div
    style="position: relative; height:350px; width:300px"
  >
    <!-- <line-chart :chart-data="chartData" :options="chartOptions" /> -->
  </div>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
  data () {
    return {
      chartDataValues: [],
      chartColors: [
        colors.red.lighten1,
        colors.blue.lighten1,
        colors.yellow.lighten1,
        colors.green.lighten1
      ],
      chartLabels: ['red', 'blue', 'yellow', 'green'],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  computed: {
    chartData () {
      return {
        datasets: [
          {
            label: 'hogehoge',
            data: [30, 40, null, 50, 49, 60, 70, 91],
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            borderColor: 'rgba(0, 100, 0, 1.0)'
          }
        ],
        labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    }
  },
  mounted () {
    this.randomizeData()
  },
  methods: {
    randomizeData () {
      const data = []
      for (let i = 0; i < this.chartLabels.length; i++) {
        data.push(Math.floor(Math.random() * 100))
      }
      this.chartDataValues = data
    }
  }
}
</script>

<style>
.chartjs{
  height:350px;
}
</style>
