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
            <v-card>
              <v-img max-width="150px" contain :src="fileItem.imageURL"></v-img>
              <v-chip close>{{fileItem.imageName}}</v-chip>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>
<script>
/* eslint-disable no-console */
import { readAsDataURL, readAsTextXML } from "../modules/fileSistem.js";
export default {
  data() {
    return {
      itemsInForm: [],
      images: [],
    };
  },
  methods: {
    checkFiles() {
      if (!this.itemsInForm) return;
      this.itemsInForm.forEach(file => {
        if (file.type === "text/xml") {
          readAsTextXML(file);
        }
        if (file.type === "image/jpeg" || file.type === "image/png") {
          let imageName = file.name;
          readAsDataURL(file).then(imageURL => {
            this.images.push({ imageURL, imageName });
          });
        }
      });
      this.itemsInForm = [];
    }
  },
  computed: {
    questions() {
      let result = this.$store.getters.questions.map((question) => {
        let imageName = question.image.split('\\')[3];
        let questionText = question.questionText;
        // Добавить поиск в this.images по imageName
        return {imageName, questionText}
      });
      return result
    }
  }
};
</script>