<template>
  <v-container fill-height class="grey lighten-3">
        <v-row >
          <v-col xs="8" sm="4" md8 class="red lighten-5 d-flex flex-column justify-center align-center">
            <v-btn fab large class="mb-2" href="/editor">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p>Создать</p>
          </v-col>
          <v-col xs="4" sm="4" md8 class="d-flex flex-column justify-center align-center">
            <v-btn fab large class="mb-2" href="">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p>Редактировать</p>
          </v-col>
        </v-row>
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
