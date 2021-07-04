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
          <CardTemplate
            title="pattern.css"
            url="https://bansal.io/pattern-css"
            subtitle="pattern.cssを使ってアイコンっぽい画像を生成する"
          >
            <template slot="content">
              <CssIcon />
            </template>
          </CardTemplate>
        </v-col>
        <v-col cols="6">
          <CardTemplate
            title="cocoda validation"
            url="https://cocoda.design/signup"
            subtitle="OKがわかりやすいCocoda式のバリデーション"
          >
            <template slot="content">
              <CocodaValidation />
            </template>
          </CardTemplate>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
import CardTemplate from '~/components/templates/CardTemplate'
import CssIcon from '~/components/CssIcon/CssIcon'
import CocodaValidation from '~/components/CocodaValidation/CocodaValidation'

export default {
  components: {
    CardTemplate,
    CssIcon,
    CocodaValidation
  },
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
