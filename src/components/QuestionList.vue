<template>
  <v-content>
    <v-row class="justify-center">
      <v-col cols="8" >
        <v-list two-line>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/logo.png" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>title</v-list-tile-title>
              <v-list-tile-sub-title>subTitle</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-col>
    </v-row>
  </v-content>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>