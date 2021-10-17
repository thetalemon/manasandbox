<template>
  <div class="card">
    <h3>
      {{ item.name }}
      <span class="iconsWrapper">
        <img
          class="img"
          :src="convert2Path('tech-logo', item.skill[0])"
          width="20px"
          height="20px"
        >
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
  border: 2px solid #add8e6;
  border-radius: 4px;
  padding: 4px;
  h3 {
    display: inline-flex;

    .iconsWrapper{
      line-height: 25px;
      padding-top: 2px;
      margin-left: 8px;
    }
  }

  .imgWrapper{
    text-align: center;
    .img {
      margin-top: 8px;
      object-fit: contain;
      max-width: 250px;
      width: auto;
      max-height: 150px;
    }
  }
}
</style>
