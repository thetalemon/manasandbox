<template>
  <PortCardTemplate title="資格">
    <template slot="content">
      <table class="certificationTable">
        <tbody>
          <tr
            v-for="(item, index) in certs"
            :key="index"
          >
            <td class="year">
              {{ item.year }}
            </td>
            <td>
              {{ item.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </PortCardTemplate>
</template>

<script>
import certs from '@/mixins/CertsMixin.js'
import PortCardTemplate from '~/components/templates/portfolio/PortfolioCardTemplate.vue'

export default {
  components: {
    PortCardTemplate
  },
  mixins: [certs]
}
</script>

<style lang="scss" scoped>
.certificationTable {
  @media only screen and (min-width: 600px) {
    margin-left: 16px;
  }
  .year {
    width: 60px;
  }
}
</style>
