<template>
  <v-container fluid fill-height>
        <v-row  align="center" justify="center">
          <!-- <v-col cols="12" sm="4" md="2" class="d-flex flex-column justify-center align-center align-lg-end">
            <v-btn fab large class="mb-2" href="/editor">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p>Создать</p>
          </v-col>
          <v-col cols="12" sm="4" md="2" class="d-flex flex-column justify-center align-center align-lg-start">
            <v-btn fab large class="mb-2">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p>Редактировать</p>
          </v-col> -->
          <v-col cols="12" sm="4" md="2"  align="center"  class="grey lighten-3">
            <div >
              <v-btn fab large class="mb-2" href="/editor">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <p>Создать</p>
            </div>
            <div >
               <v-btn fab large class="mb-2" to="/open_project">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <p>Редактировать</p>
            </div>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
