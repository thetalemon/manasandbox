<template>
  <div>
    <!-- <client-only>
      <my-chart />
    </client-only> -->
  </div>
</template>
<script>
export default {
  components: {
    // this different (webpack) import did the trick together with <no-ssr>:
    // 'my-chart': () => import('@/components/Plotlyjs.vue')
  }
}
</script>
