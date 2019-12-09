<template>
  <!-- <div class="select_wrapper">
        <button @click="$router.push({name: 'landing'})">Назад</button>
        <div class="select__file">
            <h1>Выберете XML файл викторины</h1>
            <button @click="open">Открыть</button>
        </div>
  </div>-->
  <v-container grid-list-sm>
    <v-file-input
      v-model="files"
      @change="checkFile"
      color="deep-purple accent-4"
      counter
      label="File input"
      placeholder="Select your files"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>{{ text }}</v-chip>

        <span
          v-else-if="index === 2"
          class="overline grey--text text--darken-3 mx-2"
        >+{{ files.length - 2 }} File(s)</span>
      </template>
    </v-file-input>
    <v-list two-line>
      <v-list-tile avatar>
        <v-list-tile-avatar></v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>title</v-list-tile-title>
          <v-list-tile-sub-title>subTitle</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-container>
</template>
<script>
/* eslint-disable no-console */
import { readAsTextXML } from "../modules/fileSistem.js";
export default {
  data() {
    return {
      files: []
    };
  },
  methods: {
    checkFile(file) {
      if (file ) readAsTextXML(file);
    }
  }
};
</script>