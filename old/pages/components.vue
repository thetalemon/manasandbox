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
import CocodaValidation from '~/components/CocodaValidation/CocodaValidation'

export default {
  components: {
    CardTemplate,
    CocodaValidation
  }
}
</script>
