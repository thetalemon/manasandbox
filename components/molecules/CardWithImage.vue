<template>
  <div class="card">
    <div class="imgWrapper">
      <a :href="item.url" rel="noreferrer" target="_blank">
        <WebpImage
          :image-path-with-out-ext="img"
          :width="270"
          :height="180"
          :alt="item.name"
        />
      </a>
    </div>
    <div class="textArea">
      <TitleWithGithubIco :title="item.name" :github-url="item.github" />
      <p v-text="item.text" />
    </div>
  </div>
</template>

<script>
import TitleWithGithubIco from '~/components/molecules/TitleWithGithubIco.vue'
import WebpImage from '~/components/atoms/Img/Webp.vue'

export default {
  components: {
    TitleWithGithubIco,
    WebpImage
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 0 4px;
  border: 1px solid #add8e6;

  .textArea {
    margin: 0 8px;
  }
  .imgWrapper{
    text-align: center;
    margin-bottom: 8px;
    &:hover {
      opacity: .7;
    }
  }
}
</style>
