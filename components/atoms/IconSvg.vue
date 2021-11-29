<template>
  <div class="iconSvg">
    <VuejsSvg
      v-if="type === 'Vue.js'"
      color="#4FC08D"
    />
    <ReactSvg
      v-if="type === 'React'"
      color="#61DAFB"
    />
    <PythonSvg
      v-if="type === 'Python'"
      color="#3776AB"
    />
    <FlaskSvg
      v-if="type === 'Flask'"
      color="#000000"
    />
    <DockerSvg
      v-if="type === 'Docker'"
      color="#2496ED"
    />
    <JavaSvg
      v-if="type === 'Java'"
      color="#007396"
    />
    <FirebaseSvg
      v-if="type === 'Firebase'"
      color="#FFCA28"
    />
    <FigmaSvg
      v-if="type === 'Figma'"
      color="#F24E1E"
    />
    <CppSvg
      v-if="type === 'C++'"
      color="#00599C"
    />
    <UbuntuSvg
      v-if="type === 'Ubuntu Server'"
      color="#E95420"
    />
    <AeSvg
      v-if="type === 'After Effects'"
      color="#9999FF"
    />
    <IllustratorSvg
      v-if="type === 'Illustrator'"
      color="#FF9A00"
    />
    <NuxtSvg
      v-if="type === 'Nuxt.js'"
      color="#00DC82"
    />
    <NextSvg
      v-if="type === 'Next.js'"
      color="#000000"
    />
    <SpringSvg
      v-if="type === 'Spring'"
      color="#6DB33F"
    />
    <GoogleMapsSvg
      v-if="type === 'Google Maps'"
      color="#4285F4"
    />
    <OpenCvSvg
      v-if="type === 'OpenCV'"
      color="#5C3EE8"
    />
    <WebpackSvg
      v-if="type === 'Webpack'"
      color="#8DD6F9"
    />
    <MidiSvg
      v-if="type === 'MIDI'"
      color="#000000"
    />
    <ElectronSvg
      v-if="type === 'Electron'"
      color="#47848F"
    />
  </div>
</template>

<script>
import VuejsSvg from '../../static/tech-logo/vuejs.svg'
import ReactSvg from '../../static/tech-logo/react.svg'
import PythonSvg from '../../static/tech-logo/python.svg'
import FlaskSvg from '../../static/tech-logo/flask.svg'
import DockerSvg from '../../static/tech-logo/docker.svg'
import JavaSvg from '../../static/tech-logo/java.svg'
import FirebaseSvg from '../../static/tech-logo/firebase.svg'
import FigmaSvg from '../../static/tech-logo/figma.svg'
import CppSvg from '../../static/tech-logo/c-plusplus.svg'
import UbuntuSvg from '../../static/tech-logo/ubuntu.svg'
import AeSvg from '../../static/tech-logo/ae.svg'
import IllustratorSvg from '../../static/tech-logo/illustrator.svg'
import NuxtSvg from '../../static/tech-logo/nuxtjs.svg'
import NextSvg from '../../static/tech-logo/nextjs.svg'
import SpringSvg from '../../static/tech-logo/spring.svg'
import GoogleMapsSvg from '../../static/tech-logo/googlemaps.svg'
import OpenCvSvg from '../../static/tech-logo/opencv.svg'
import WebpackSvg from '../../static/tech-logo/webpack.svg'
import MidiSvg from '../../static/tech-logo/midi.svg'
import ElectronSvg from '../../static/tech-logo/electron.svg'

export default {
  components: {
    VuejsSvg,
    ReactSvg,
    PythonSvg,
    FlaskSvg,
    DockerSvg,
    JavaSvg,
    FirebaseSvg,
    FigmaSvg,
    CppSvg,
    UbuntuSvg,
    AeSvg,
    IllustratorSvg,
    NuxtSvg,
    NextSvg,
    SpringSvg,
    GoogleMapsSvg,
    OpenCvSvg,
    WebpackSvg,
    MidiSvg,
    ElectronSvg
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.iconSvg{
  svg {
    fill: currentColor;
    width: 80px;
    height: 50px;
  }
}
</style>
