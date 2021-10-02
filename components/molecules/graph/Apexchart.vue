<template>
  <div class="apexchart">
    <!-- <client-only>
      <VueApexCharts
        width="500"
        type="line"
        :options="chartOptions"
        :series="series"
      />
    </client-only> -->
  </div>
</template>

<script>

export default {
  components: {
    // VueApexCharts: () => import('vue-apexcharts')
  },
  data () {
    return {
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        theme: {
          mode: 'dark',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
          }
        }

      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, null, 50, 49, 60, 70, 91]
        }
      ]
    }
  }
}
</script>

<style>
.apexchart{
  height:350px;
}
</style>
