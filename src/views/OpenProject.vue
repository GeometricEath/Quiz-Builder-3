<template>
  <v-container grid-list-sm>
    <v-file-input
      v-model="itemsInForm"
      accept="image/*, text/xml"
      color="deep-purple accent-4"
      counter
      multiple
      label="Загрузка файлов"
      placeholder="Выберете файлы викторины"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip v-if="index < 25" color="deep-purple accent-4" dark label small>{{ text }}</v-chip>
        <span
          v-else-if="index === 25"
          class="overline grey--text text--darken-3 mx-2"
        >+{{ files.length - 25 }} File(s)</span>
      </template>
    </v-file-input>
    <v-btn @click="checkFiles">Добавить</v-btn>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(fileItem, k) in images" :key="k">
          <v-list-item-content>
            <v-chip close>{{fileItem.name}}</v-chip>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>
<script>
/* eslint-disable no-console */
// import { readAsTextXML } from "../modules/fileSistem.js";
export default {
  data() {
    return {
      filesList: [],
      itemsInForm: [],
      images: [],
      quizFile: null
    };
  },
  methods: {
    checkFiles() {
      if (!this.itemsInForm) return;
      this.itemsInForm.forEach(file => {
        if (file.type === "text/xml") this.quizFile = file;
        if (file.type === "image/jpeg" || file.type === "image/png"){
        this.images.push(file);
        }
      });
      this.itemsInForm = [];
      // if (file.type == "text/xml") {
      //   readAsTextXML(file);
      //   this.$router.push({ path: "/editor" });
      // }
    }
  }
};
</script>