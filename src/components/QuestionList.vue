<template>
  <v-content>
    <v-row class="justify-center">
      <v-col xs="12" sm="10" md="8" lg="6">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(question) in questions"
            :key="question.id"
            dark
            expand
            focusable
            inset
            popout
          >
            <v-expansion-panel-header>
              <v-row class="justify-center pr-6">{{question.questionText}}</v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12" xs="12" md="3" class="my-auto grey lighten-3">
                  <v-img :src="question.image" max-width="180" contain class="mx-auto"></v-img>
                </v-col>
                <v-col xs="12" md="9" class="px-0 px-md-2">
                  <v-list disabled dense>
                    <v-list-item-group v-model="question.trueAnswer" color="primary">
                      <v-list-item v-for="(answer, k) in question.answers" :key="k" class="px-2">
                        <v-list-item-icon class="mr-2 my-auto">
                          <v-icon v-if="question.trueAnswer==k">mdi-checkbox-marked-circle</v-icon>
                          <v-icon v-else>mdi-checkbox-blank-circle-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <p class="my-auto text-sm-justify">{{answer}}</p>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
              </v-row>
            <div class="float-right">
              <v-icon :data-id="question.id" @click="deleteQuestion" style="cursor: pointer;">mdi-trash-can-outline</v-icon>
            </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-content>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    questions() {
      return this.$store.getters.questions;
    }
  },
  methods: {
    deleteQuestion(evt) {
      this.$store.commit("DELETE_QUESTION", evt.target.dataset.id)
    }
  },
};
</script>