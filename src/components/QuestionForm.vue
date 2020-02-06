
<template>
  <v-row>
<<<<<<< HEAD
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
=======
    <v-col cols="12">
      <v-form ref="addQuestion">
        <v-container>
          <v-row no-gutters justify="center">
            <v-col v-if="quiz.image" cols="12" class="my-auto grey lighten-3 py-4">
              <v-img :src="quiz.image" max-width="280" contain class="mx-auto"></v-img>
            </v-col>
            <v-col>
              <v-slider
                v-model="quiz.timeout"
                track-color="grey"
                always-dirty
                max="25"
                thumb-label="always"
              >
                <template v-slot:prepend>
                  <v-icon @click="decrement">mdi-minus</v-icon>
                </template>

                <template v-slot:append>
                  <v-icon @click="increment">mdi-plus</v-icon>
                </template>
              </v-slider>
              <v-file-input
                @change="addImage"
                accept="image/*"
                label="Добавить изображение"
                prepend-icon="mdi-camera-plus"
                small-chips
              ></v-file-input>
              <v-textarea
                v-model="quiz.questionText"
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
                v-for="(answer, id) in 4"
                v-model="quiz.answers[id]"
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
                    v-if="quiz.trueAnswer === id"
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
                <v-btn v-if="!isEdeting" :disabled="!valid" @click="add" color="primary">Добавить</v-btn>
                <v-btn v-else :disabled="!valid" @click="mutateQuestion" color="primary">Изменить</v-btn>
                <v-btn @click="clearForm" class="lime lighten-4">Очистить</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
>>>>>>> editing-quiz-list
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
      quiz: this.question,
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
  props: {
    question: {
      type: Object,
      default: () => {
        console.log("return default obj");
        return {
          image: "",
          questionText: "",
          answers: ["", "", "", ""],
          trueAnswer: -1,
          timeout: 15
        };
      }
    },
    isEdeting: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    valid() {
      return this.quiz.questionText && this.quiz.trueAnswer >= 0 ? true : false;
    }
  },
  watch: {
    question(newValue) {
      this.quiz = newValue;
    }
  },
  methods: {
    add() {
<<<<<<< HEAD
      if (!this.quize.image) this.quize.image = defultImage;
      this.$store.commit("ADD_QUESTION", this.quize);
      this.quize = {
        image: null,
        questionText: null,
        answers: [],
        trueAnswer: -1
      };
      this.$refs.addQuestion.reset();
=======
      this.$store.commit("ADD_QUESTION", this.quiz);
      this.clearForm();
    },
    mutateQuestion() {
      this.$store.commit("CHANGE_QUESTION", this.quiz);
      this.$emit("mutationIsDone");
      this.clearForm();
>>>>>>> editing-quiz-list
    },
    clearForm() {
      this.quiz = {
        image: "",
        questionText: "",
        answers: [],
        trueAnswer: -1,
        timeout: 15
      };
      this.$refs.addQuestion.reset();
    },
    addImage(file) {
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        let reader = new FileReader();
        reader.onload = () => {
          this.quiz.image = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.quiz.image = "";
      }
    },
    checked(pyload) {
      this.quiz.trueAnswer = pyload;
    },
    decrement() {
      this.quiz.timeout--;
    },
    increment() {
      this.quiz.timeout++;
    }
  }
};
</script>
