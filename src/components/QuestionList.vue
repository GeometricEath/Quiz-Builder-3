<template>
  <v-content>
    <v-row class="justify-center">
      <v-col xs="12" sm="10" md="8" lg="6">
        <v-expansion-panels>
          <v-expansion-panel dark expand focusable inset popout>
            <v-expansion-panel-header>
              <v-row class="justify-center pr-6">{{quize.question}}</v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-col cols="12" xs="12" md="3" class="my-auto grey lighten-3">
                  <v-img src="@/assets/logo.png" max-width="180" contain class="mx-auto"></v-img>
                </v-col>
                <v-col xs="12" md="9" class="px-0 px-md-2">
                  <v-list disabled dense>
                    <v-list-item-group v-model="quize.trueAnswer" color="primary">
                      <v-list-item v-for="(answer, i) in quize.answers" :key="i" class="px-2">
                        <v-list-item-icon class="mr-2 my-auto">
                          <v-icon v-if="quize.trueAnswer==i">mdi-checkbox-marked-circle</v-icon>
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
    return {
      quize: {
        image: undefined,
        question:
          "Какое из ниже перечисленных утверждений верно? Какое из ниже перечисленных утверждений верно? Какое из ниже перечисленных утверждений верно?",
        answers: [
          "В космической отрасли невозможно проведение тренировок на реальном изделии тренировок на реальном изделии",
          "В космической отрасли не используются бортовые тренажёры",
          "В сельском хозяйстве не используются комплексные тренажёры",
          "Все утверждения верны"
        ],
        trueAnswer: 3
      }
    };
  }
};
</script>