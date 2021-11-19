<template>
  <h3 class="titleWithGtihubIco">
    {{ title }}
    <span v-if="githubUrl" class="githubIcon">
      <a :href="githubUrl" rel="noreferrer" target="_blank">
        <img
          class="img"
          src="/social/github.svg"
          width="20px"
          height="20px"
          alt="github icon"
        >
      </a>
    </span>
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    githubUrl: {
      type: String,
      required: false,
      default: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.titleWithGtihubIco {
  display: inline-flex;
}

.githubIcon{
  line-height: 25px;
  padding-top: 2px;
  margin-left: 8px;
  &:hover {
    opacity: .7;
  }
}
</style>
