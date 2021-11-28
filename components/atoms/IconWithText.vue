<template>
  <div
    class="iconWithText"
    @click="clickData"
  >
    <VuejsSvg
      v-if="text =='Vue.js'"
      width="80px"
      height="50px"
      :color="color"
    />
    <ReactSvg
      v-if="text =='React'"
      width="80px"
      height="50px"
      :color="color"
    />
    <PythonSvg
      v-if="text =='Python'"
      width="80px"
      height="50px"
      :color="color"
    />
    <FlaskSvg
      v-if="text =='Flask'"
      width="80px"
      height="50px"
      :color="color"
    />
    <DockerSvg
      v-if="text =='Docker'"
      width="80px"
      height="50px"
      :color="color"
    />
    <JavaSvg
      v-if="text =='Java'"
      width="80px"
      height="50px"
      :color="color"
    />
    <FirebaseSvg
      v-if="text =='Firebase'"
      width="80px"
      height="50px"
      :color="color"
    />
    <FigmaSvg
      v-if="text =='Figma'"
      width="80px"
      height="50px"
      :color="color"
    />
    <CppSvg
      v-if="text =='C++'"
      width="80px"
      height="50px"
      :color="color"
    />
    <UbuntuSvg
      v-if="text =='Ubuntu Server'"
      width="80px"
      height="50px"
      :color="color"
    />
    <AeSvg
      v-if="text =='After Effects'"
      width="80px"
      height="50px"
      :color="color"
    />
    <IllustratorSvg
      v-if="text =='Illustrator'"
      width="80px"
      height="50px"
      :color="color"
    />
    <NuxtSvg
      v-if="text =='Nuxt.js'"
      width="80px"
      height="50px"
      :color="color"
    />
    <NextSvg
      v-if="text =='Next.js'"
      width="80px"
      height="50px"
      :color="color"
    />
    <SpringSvg
      v-if="text =='Spring'"
      width="80px"
      height="50px"
      :color="color"
    />
    <GoogleMapsSvg
      v-if="text =='Google Maps'"
      width="80px"
      height="50px"
      :color="color"
    />
    <OpenCvSvg
      v-if="text =='OpenCV'"
      width="80px"
      height="50px"
      :color="color"
    />
    <WebpackSvg
      v-if="text =='Webpack'"
      width="80px"
      height="50px"
      :color="color"
    />
    <MidiSvg
      v-if="text =='MIDI'"
      width="80px"
      height="50px"
      :color="color"
    />
    <ElectronSvg
      v-if="text =='Electron'"
      width="80px"
      height="50px"
      :color="color"
    />
    <p v-text="text" />
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
    src: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    clickData () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.iconWithText{
  height: 100px;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  img {
    margin: 0 auto;
    margin-bottom: 8px;
    object-fit: contain;
    max-width: 80px;
    max-height: 50px;
  }
  svg {
    fill: currentColor;
  }
  p {
    font-size: 12px;
  }
  &:hover {
    background-color: #e6f9ff;
  }
}
</style>
