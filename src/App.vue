<template>
  <v-app id="app">
    <v-content>
      <app-header />
      <router-view />
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
