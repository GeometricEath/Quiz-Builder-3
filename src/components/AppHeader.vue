<template>
  <v-toolbar class="primary">
    <v-toolbar-title>Test</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text fab to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn text fab @click="save">
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
/* eslint-disable no-console */

export default {
  data() {
    return {};
  },
  methods: {
    save() {
      this.$bus.emit("saveProject");
    }
  }
};
</script>

<style>
</style>