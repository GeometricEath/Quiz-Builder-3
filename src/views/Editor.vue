<template>
  <v-content fill-height class="justify-center">
        <v-overlay :value="edeting">
          <v-row width="900px">
            <v-col cols="10">
              <question-form class="justify-center"></question-form>
              <v-btn @click="edeting = false">close</v-btn>
            </v-col>
          </v-row>
        </v-overlay>
    <v-row>
      <v-col>
        <question-list @showOverlay="edeting = true"></question-list>
        <question-form class="justify-center"></question-form>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import QuestionList from "@/components/QuestionList.vue";
import QuestionForm from "@/components/QuestionForm.vue";

export default {
  data() {
    return {
      edeting: false
    };
  },
  components: {
    QuestionList,
    QuestionForm
  }
};
</script>

<style>
</style>