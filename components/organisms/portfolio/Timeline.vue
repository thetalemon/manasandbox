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
            <div class="circle" :style="{ background: year.colorCode }" />
            <h2 :style="{ color: year.colorCode }">
              {{ year.year }}
            </h2>
            <h3>
              {{ year.title }}
            </h3>
            <p>
              {{ year.text }}
            </p>
            <p v-if="year.process">
              工程: {{ year.process }}
            </p>
            <p>使用技術: {{ year.tech }}</p>
          </div>
        </div>
      </div>
    </template>
  </PortCardTemplate>
</template>

<script>
import years from '@/mixins/TimelineMixin'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    PortCardTemplate
  },
  mixins: [years]
}
</script>

<style lang="scss" scoped>
.timelineWrapper {
  max-width: 700px;

  @media only screen and (min-width: 600px) {
    margin-left: 16px;
  }
  .timeline {
    border-left: #c4c4c4 2px solid;
    padding-top: 24px;
    margin-left : 8px;
    .timelineInner {
      padding-left: 16px;
      padding-bottom: 24px;
      position: relative;
      .circle {
        border: #fff 1px solid;
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        left: -8px;
        top: 19px;
        transform: translateY(-50%);
        border-radius: 50%;
      }
    }
  }
}
</style>
