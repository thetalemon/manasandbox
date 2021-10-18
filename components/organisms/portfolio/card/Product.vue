<template>
  <div class="card">
    <div class="imgWrapper">
      <a :href="item.url" target="_blank">
        <img
          class="img"
          :src="convert2Path('product', item.img)"
          width="250px"
          height="150px"
        >
      </a>
    </div>
    <div class="textArea">
      <h3>
        {{ item.name }}
        <span class="githubIcon">
          <a :href="item.github" target="_blank">
            <img
              class="img"
              :src="convert2Path('social', 'github.svg')"
              width="20px"
              height="20px"
            >
          </a>
        </span>
      </h3>
      <p>
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    convert2Path (imgDir, filename) {
      const prefix = `/${imgDir}/`
      return prefix + filename
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: auto;
  border: 1px solid #add8e6;
  border-radius: 4px;

.textArea {
    margin: 0 8px;
  }
  h3 {
    display: inline-flex;
  }

  .githubIcon{
    line-height: 25px;
    padding-top: 2px;
    margin-left: 8px;
  }

  .imgWrapper{
    text-align: center;
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
