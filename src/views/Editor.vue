<template>
  <div class="d-flex align-end justify-center">
    <v-content fill-height>
      <!-- <app-header></app-header> -->
      <v-row class="align-self-start">
        <question-list></question-list>
      </v-row>
      <v-row>
        <v-col>
          <question-form class="justify-center"></question-form>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";
import QuestionList from "@/components/QuestionList.vue";
import QuestionForm from "@/components/QuestionForm.vue";

export default {
  components: {
    // AppHeader,
    QuestionList,
    QuestionForm
  }
};
</script>

<style>
</style>