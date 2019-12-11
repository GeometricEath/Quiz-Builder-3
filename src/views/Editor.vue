<template>
  <div>
    <v-content fill-height class="justify-center">
      <v-row justify="center">
        <v-col xs="12" sm="10" md="8" lg="6">
          <question-list @showOverlay="editQuestion"></question-list>
          <v-expansion-panels v-model="editorPanelState">
            <v-expansion-panel expand focusable>
              <v-expansion-panel-header>
                <template v-slot:default="{ open }">
                  <v-row no-gutters>
                    <v-col class="d-flex align-center justify-center">
                      <h2>Редактировать вопрос</h2>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <question-form class="justify-center"></question-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-dialog v-model="edeting" scrollable max-width="860px" width="80%">
            <v-row justify="center">
              <v-col cols="12">
                <v-card>
                  <v-card-title>Добавить вопрос</v-card-title>
                  <v-card-text height="90%">
                    <question-form
                      class="justify-center"
                      :question="editableQuestion"
                      :isEdeting="edeting"
                      @mutationIsDone="mutationIsDone"
                    ></question-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-dialog>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
/* eslint-disable no-console */
import QuestionList from "@/components/QuestionList.vue";
import QuestionForm from "@/components/QuestionForm.vue";

export default {
  data() {
    return {
      edeting: false,
      editableQuestion: {},
      editorPanelState: 0
    };
  },
  components: {
    QuestionList,
    QuestionForm
  },
  methods: {
    editQuestion(id) {
      this.editableQuestion = this.$store.getters.getQuestionByID(id);
      this.edeting = true;
    },
    mutationIsDone() {
      this.edeting = false;
      // this.editableQuestion = {}
    }
  }
};
</script>