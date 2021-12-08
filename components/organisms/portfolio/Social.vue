<template>
  <div class="social">
    <div class="socialInner">
      <a
        v-for="(item, i) in social"
        :key="i"
        :href="item.url"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="ico"
          :src="convert2Path(item.img)"
          contain
          :height="item.width"
          :width="item.height"
          :alt="item.alt"
        >
      </a>
    </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.social {
  .socialInner {
    height: 60px;
    max-width: 400px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    a {
      margin-right: 8px;
      &:first-child{
        margin-right: 0;
      }
    }
    .ico {
      object-fit: fill;
      cursor: pointer;
      &:hover {
        opacity: .7;
      }
    }
  }
}
</style>
