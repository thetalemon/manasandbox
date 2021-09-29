<template>
  <v-layout column class="font">
    <div class="main-container">
      <portTop />
      <portSocial />
      <portTobe />
      <portSkill />
      <portCert />
      <portTimeline />
      <!-- <portInterests /> -->
      <portSocial />
      <portBottom />
    </div>
  </v-layout>
</template>

<script>
import portTop from '~/components/organisms/portfolio/Top.vue'
import portSocial from '~/components/organisms/portfolio/Social.vue'
import portTobe from '~/components/organisms/portfolio/Tobe.vue'
import portSkill from '~/components/organisms/portfolio/Skills.vue'
import portCert from '~/components/organisms/portfolio/Certification.vue'
import portTimeline from '~/components/organisms/portfolio/Timeline.vue'
import portBottom from '~/components/organisms/portfolio/Bottom.vue'

export default {
  components: {
    portTop,
    portSocial,
    portTobe,
    portSkill,
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
  padding: 0 10px 10px 10px;
  margin: 0 auto;
}
</style>
