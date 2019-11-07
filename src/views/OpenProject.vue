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
      color="deep-purple accent-4"
      counter
      label="File input"
      multiple
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
        <v-list-tile-avatar>
          
        </v-list-tile-avatar>
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
import FileSistem from "../modules/fileSistem.js";
const FS = new FileSistem();
export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    open() {
      FS.openQuiz()
        .then(quiz => {
          console.log("Open quiz data after parse: " + quiz);
          this.$router.push({
            name: "editor",
            params: quiz
          });
        })
        .then(() => console.log("Переход в QizeEditor"))
        .catch(err => {
          console.error("Ошибка чтения xml " + err);
        });
    }
  }
};
</script>