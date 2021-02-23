<template>
  <port-card-template title="資格">
    <template slot="content">
      <v-row>
        <v-card
          v-for="(item, i) in certs"
          :key="i"
          class="ma-2 pa-2 text-center rounded-xl"
          tile
          width="150px"
          height="100px"
        >
          <v-card-text>{{ item.name }}</v-card-text>
          <v-card-text>{{ item.year }}</v-card-text>
        </v-card>
      </v-row>
    </template>
  </port-card-template>
</template>

<script>
import certs from '@/mixins/CertsMixin.js'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    'port-card-template': PortCardTemplate
  },
  mixins: [certs]
}
</script>
