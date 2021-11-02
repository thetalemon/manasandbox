<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="cardsWrapper">
      <div
        v-for="(item, i) in list"
        :key="i"
        class="skillCard"
        tile
        width="135px"
        height="200px"
        @click="clickData(item)"
      >
        <p>
          {{ item.name }}
        </p>
        <v-img class="img mb-5" :src="convert2Path(item.img)" contain max-width="100px" height="80px" />
        <p class="centringText">
          {{ item.level }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    convert2Path (filename) {
      const prefix = '/tech-logo/'
      return prefix + filename
    },
    clickData (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.cardsWrapper {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin-top: 16px;
  margin-bottom: 24px;

  .skillCard{
    height: 180px;
    border-radius: 6px;
    text-align: center;
    .img {
      margin: 0 auto;
    }
    &:hover {
      background-color: #e6f9ff;
    }
  }
}

.dialogTitle {
  margin: 0;
}
</style>
