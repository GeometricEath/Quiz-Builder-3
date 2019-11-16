<template>
  <v-content>
    <v-row class="justify-center">
      <v-col xs="12" sm="8" md="6">
        <v-expansion-panels>
          <v-expansion-panel dark expand focusable inset popout>
            <v-expansion-panel-header>
              <v-row justify="center">{{quize.question}}</v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row justify="center">
                <v-img src="@/assets/logo.png" max-width="180" contain class="mr-2"></v-img>
                <v-list disabled>
                  <v-list-item-group v-model="quize.trueAnswer" color="primary">
                    <v-list-item v-for="(answer, i) in quize.answers" :key="i">
                      <v-list-item-icon class="mr-2">
                        <v-icon v-if="quize.trueAnswer==i">mdi-checkbox-marked-circle</v-icon>
                        <v-icon v-else>mdi-checkbox-blank-circle-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="answer"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
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