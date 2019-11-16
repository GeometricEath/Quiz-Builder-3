<template>
  <v-row>
    <v-col xs="12" sm="10" md="6">
      <v-expansion-panels v-model="panel">
        <v-expansion-panel expand focusable>
          <v-expansion-panel-header>
            <template v-slot:default="{ open }">
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
                  <v-col>
                    <v-textarea
                      v-model="quize.question"
                      :rules="quesitonLenght"
                      :counter="120"
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
                      <template v-slot:append>
                        <v-icon>mdi-plus</v-icon>
                        <!-- <v-checkbox class="ma-0 pt-2" dense v-model="quize.trueAnswer" :value="`answer${id}`"></v-checkbox> -->
                      </template>
                    </v-textarea>
                    <v-card-actions class="d-flex align-center justify-center">
                      <v-btn :disabled="!valid" @click="add" color="primary">Добавить</v-btn>
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
export default {
  data() {
    return {
      panel: 0,
      quize: {
        image: undefined,
        question: "",
        answers: [],
        trueAnswer: null
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
      return this.quize.question && this.quize.trueAnswer ? true : false;
    }
  },
  methods: {
    add() {
      this.$refs.addQuestion.reset();
    }
  }
};
</script>
