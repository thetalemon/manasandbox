<template>
  <port-card-template>
    <template slot="content">
      <div class="center">
        <v-img
          v-for="(item, i) in social"
          :key="i"
          class="ico"
          :src="convert2Path(item.img)"
          contain
          :max-height="item.size"
          :width="item.size"
          @click="onClick(item.url)"
        />
      </div>
    </template>
  </port-card-template>
</template>

<script>
import social from '@/mixins/SocialMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate
  },
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
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.ico{
  margin: 0px 20px;
  cursor: pointer;
}

</style>
