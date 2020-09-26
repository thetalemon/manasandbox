<template>
  <div />
</template>
<script>
import Plotly from 'plotly.js/dist/plotly'
export default {
  components: {
    Plotly
  },
  mounted () {
    // exists only on client:
    console.log(Plotly)
  }
}
</script>
