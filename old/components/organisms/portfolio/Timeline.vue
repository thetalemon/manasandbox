<template>
  <PortCardTemplate title="履歴">
    <template slot="content">
      <div class="timelineWrapper">
        <div class="timeline">
          <div
            v-for="(year, i) in years"
            :key="i"
            small
            class="timelineInner"
          >
            <CircleFuti class="circle" :color="year.colorCode" />
            <h2 :style="{ color: year.colorCode }" v-text=" year.year" />
            <h3 v-text="year.title" />
            <p v-text="year.text" />
            <p v-if="year.process" v-text=" year.process " />
            <p> 使用技術: {{ year.tech }} </p>
          </div>
        </div>
      </div>
    </template>
  </PortCardTemplate>
</template>

<script>
import years from '@/mixins/TimelineMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'
import CircleFuti from '~/components/atoms/CircleFuti.vue'

export default {
  components: {
    PortCardTemplate,
    CircleFuti
  },
  mixins: [years]
}
</script>

<style lang="scss" scoped>
.timelineWrapper {
  max-width: 700px;
  @media only screen and (min-width: 600px) {
    margin-left: 8px;
  }
  .timeline {
    border-left: #e6f9ff 2px solid;
    padding-top: 24px;
    margin-left : 8px;
    .timelineInner {
      padding-left: 16px;
      padding-bottom: 24px;
      position: relative;
      .circle {
        left: -8.5px;
        top: 19px;
        transform: translateY(-50%);
        border-radius: 50%;
      }
    }
  }
}
</style>
