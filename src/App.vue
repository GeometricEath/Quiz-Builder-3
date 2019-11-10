<template>
  <v-app id="app">
    <v-content fill-height fluid>
      <app-header />
      <router-view style="height:90%;"></router-view>
    </v-content>
  </v-app>
</template>

<style>
</style>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader
  }
};
</script>
