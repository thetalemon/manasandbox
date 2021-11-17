<template>
  <div class="card">
    <div class="imgWrapper">
      <a :href="item.url" target="_blank">
        <img
          class="img"
          :src="img"
          width="250px"
          height="150px"
        >
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

export default {
  components: {
    TitleWithGithubIco
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
  border-radius: 4px;

  .textArea {
    margin: 0 8px;
  }
  .imgWrapper{
    text-align: center;
    &:hover {
      opacity: .7;
    }
    .img {
      margin-bottom: 8px;
      border-radius: 4px 4px 0 0;
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
}
</style>
