<template>
  <PortCardTemplate title="履歴">
    <template slot="content">
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            />
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">
              {{ year.title }}
            </v-card-title>
            <v-card-text>
              <p>{{ year.text }}</p>
              <p v-if="year.process">
                工程: {{ year.process }}
              </p><p>使用技術: {{ year.tech }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
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

</style>
