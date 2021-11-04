<template>
  <div>
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
        <img
          class="img"
          :src="convert2Path(item.img)"
          width="80px"
          height="50px"
        >
        <p>
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  grid-row-gap: 16px;
  grid-column-gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  .skillCard{
    height: 100px;
    padding: 12px;
    border-radius: 6px;
    text-align: center;
    p {
      font-size: 12px;
    }
    .img {
      margin: 0 auto;
      margin-bottom: 8px;
      object-fit: contain;
      max-width: 80px;
      max-height: 50px;
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
