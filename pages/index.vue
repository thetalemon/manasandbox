<template>
  <v-layout column class="font">
    <div class="main-container">
      <portTop />
      <portSocial />
      <div class="mainContents">
        <portTobe class="component" />
        <portProd class="component" />
        <portSkillGraph class="component" />
        <portCert class="component" />
        <portTimeline class="component" />
      </div>
      <portSocial />
      <portBottom />
    </div>
  </v-layout>
</template>

<script>
import portTop from '~/components/organisms/portfolio/Top.vue'
import portSocial from '~/components/organisms/portfolio/Social.vue'
import portTobe from '~/components/organisms/portfolio/Tobe.vue'
import portProd from '~/components/organisms/portfolio/Product.vue'
import portSkillGraph from '~/components/organisms/portfolio/SkillsGraph.vue'
import portCert from '~/components/organisms/portfolio/Certification.vue'
import portTimeline from '~/components/organisms/portfolio/Timeline.vue'
import portBottom from '~/components/organisms/portfolio/Bottom.vue'

export default {
  components: {
    portTop,
    portSocial,
    portTobe,
    portProd,
    portSkillGraph,
    portCert,
    portTimeline,
    portBottom
  }
}
</script>

<style lang="scss">
.font{
  font-family: 'M PLUS Rounded 1c';
}
.main-container{
  width: 100%;
  max-width: 840px;
  min-width: 320px;
  margin: 0 auto;
  .mainContents {
    .component{
      padding-top: 40px;
      border-top: 1px #add8e6 solid;
      margin-bottom: 40px;
      &:first-child {
        border-top: none;
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
