
<template>
  <v-row>
    <v-col xs="12" sm="10" md="8" lg="6">
      <v-expansion-panels v-model="panel">
        <v-expansion-panel expand focusable>
          <v-expansion-panel-header>
            <template v-slot:default>
              <v-row no-gutters>
                <v-col class="d-flex align-center justify-center">
                  <h2>Добавить вопрос</h2>
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-form ref="addQuestion">
              <v-container>
                <v-row no-gutters justify="center">
                  <v-col v-if="quize.image" cols="12" class="my-auto grey lighten-3 py-4">
                    <v-img :src="quize.image" max-width="280" contain class="mx-auto"></v-img>
                  </v-col>
                  <v-col>
                    <v-file-input
                      @change="addImage"
                      accept="image/*"
                      label="Добавить изображение"
                      prepend-icon="mdi-camera-plus"
                      small-chips
                    ></v-file-input>
                    <v-textarea
                      v-model="quize.questionText"
                      :rules="quesitonLenght"
                      :counter="120"
                      class="ml-8"
                      name="question"
                      label="Вопрос"
                      outlined
                      rows="1"
                      auto-grow
                      lazy-validation
                    ></v-textarea>
                    <v-textarea
                      v-model="quize.answers[id]"
                      v-for="(answer, id) in 4"
                      :key="`answer${id}`"
                      :name="`answer${id}`"
                      :label="`Ответ${id+1}`"
                      :counter="60"
                      outlined
                      rows="1"
                      auto-grow
                      lazy-validation
                    >
                      <template v-slot:prepend>
                        <v-icon
                          v-if="quize.trueAnswer === id"
                          color="primary"
                          style="cursor:pointer;"
                        >mdi-checkbox-marked-circle</v-icon>
                        <v-icon
                          v-else
                          @click="checked(id)"
                          style="cursor:pointer;"
                        >mdi-checkbox-blank-circle-outline</v-icon>
                      </template>
                    </v-textarea>
                    <v-card-actions class="d-flex align-center justify-center">
                      <v-btn :disabled="!valid" @click="add" color="primary">Добавить</v-btn>
                      <v-btn @click="clearForm" class="lime lighten-4">Очистить</v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>
<script>
/* eslint-disable no-console */
// const defultImage = require("");
import defultImage from '@/assets/defultImage.js'
export default {
  data() {
    return {
      panel: 0,
      quize: {
        image: "",
        questionText: "",
        answers: [],
        trueAnswer: -1
      },
      quesitonLenght: [
        v => !!v || "Викторина без вопросов невозможна",
        v =>
          (v && v.length <= 120) ||
          "Длинна вопроса должнаа быть менее 120 символов"
      ]
      // answerLenght: [
      //   v =>v && v.length <= 120 || "Длинна ответа должнаа быть менее 60 символов"
      // ]
    };
  },
  computed: {
    valid() {
      return this.quize.questionText && this.quize.trueAnswer >= 0
        ? true
        : false;
    }
  },
  methods: {
    add() {
      if (!this.quize.image) this.quize.image = defultImage;
      this.$store.commit("ADD_QUESTION", this.quize);
      this.quize = {
        image: null,
        questionText: null,
        answers: [],
        trueAnswer: -1
      };
      this.$refs.addQuestion.reset();
    },
    clearForm() {
      this.quize = {
        image: null,
        questionText: null,
        answers: [],
        trueAnswer: -1
      };
      this.$refs.addQuestion.reset();
    },
    addImage(file) {
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        let reader = new FileReader();
        reader.onload = () => {
          this.quize.image = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.quize.image = "";
      }
    },
    checked(pyload) {
      this.quize.trueAnswer = pyload;
    }
  }
};
</script>
