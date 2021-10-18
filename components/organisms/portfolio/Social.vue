<template>
  <div class="center">
    <img
      v-for="(item, i) in social"
      :key="i"
      class="ico"
      :src="convert2Path(item.img)"
      contain
      :height="40"
      :width="80"
      :alt="item.alt"
      @click="onClick(item.url)"
    >
  </div>
</template>

<script>
import social from '@/mixins/SocialMixin'

export default {
  mixins: [social],
  methods: {
    convert2Path (filename) {
      const prefix = '/social/'
      return prefix + filename
    },
    onClick (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.center{
  max-width: 400px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 70px;
}

.ico{
  object-fit: fill;
  cursor: pointer;
}
</style>
