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
    <v-btn @click="checkFiles">Добавить выбраные файлы</v-btn>
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
    <v-btn @click="prepareQuiz">Продолжить</v-btn>
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
      quize: {},
      xmlFind: false
    };
  },
  methods: {
    checkFiles() {
      if (!this.itemsInForm) return;
      this.itemsInForm.forEach(file => {
        if (file.type === "text/xml") {
          readAsTextXML(file);
          this.xmlFind = true;
        }
        if (file.type === "image/jpeg" || file.type === "image/png") {
          let imageName = file.name;
          readAsDataURL(file).then(imageURL => {
            this.images.push({ imageURL, imageName });
          });
        }
      });
      this.itemsInForm = [];
    },
    prepareQuiz() {
      if (!this.xmlFind) return;
      let questions = this.$store.getters.questions;
      questions.forEach(element => {
        // console.log(element)
        this.images.forEach((img, index, array) => {
          // console.log(img.imageName + " элемент в xml " + element.image);
          if (element.image == img.imageName) {
            element.image = img.imageURL;
            array.splice(index, 1);
          }
        });
      });

      this.$router.push("/editor");
    }
  },
  computed: {
    // questions() {
    //   let result = this.$store.getters.questions
    //   .map((question) => {
    //     let imageName = question.image.split('\\')[3];
    //     let questionText = question.questionText;
    //     // Добавить поиск в this.images по imageName
    //     return {imageName, questionText}
    //   });
    //   return result
    // }
  }
};
</script>