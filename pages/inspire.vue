<template>
  <v-layout
    column
    justify-center
    align-center
    class="font"
  >
    <v-container fluid>
      <v-row dense>
        <v-col cols="6">
          <card-template
            title="pattern.css"
            url="https://bansal.io/pattern-css"
            subtitle="pattern.cssを使ってアイコンっぽい画像を生成する"
          >
            <template slot="content">
              <div
                class="icon pattern-diagonal-stripes-sm"
                :style="{'background-color':bacground, color:color}"
              >
                <div class="inside-icon">
                  吉
                </div>
              </div>
            </template>
          </card-template>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
// import CardTemplate from '~/components/templates/CardTemplate.vue'

export default {
  // components: {
  //   'card-template': CardTemplate
  // },
  data () {
    return {
      bacground: 'rgba(200,255,255,1.0)',
      color: 'rgba(100,200,200,1.0)'
    }
  }
}
</script>

<style lang="scss">
.icon {
  height:50px;
  width:50px;
  border-radius: 10px;
  justify-content: center;
  align-items:center;
  display: flex;
}

.inside-icon{
  height:40px;
  width:40px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.8);
  justify-content: center;
  align-items:center;
  display: flex;
  font-size:1.5rem;
  color:rgb(30, 50, 200);
  font-family: 'MPLUS 1p';
  font-weight: bold;
}

</style>
