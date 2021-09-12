<template>
  <v-layout column class="font">
    <v-container fluid class="main-container">
      <portTop />
      <portSocial />
      <portTobe />
      <portSkill />
      <portCert />
      <portTimeline />
      <!-- <portInterests /> -->
      <portSocial />
      <portBottom />
    </v-container>
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
  max-width: 840px;
}
</style>
