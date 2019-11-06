<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md4>
        <v-row>
          <v-col cols="12" sm="4" md="2">
            <v-btn fab large class="mb-2" href="/Editor">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p>Создать</p>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <v-btn fab large class="mb-2">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p>Редактировать</p>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {}
};
</script>
