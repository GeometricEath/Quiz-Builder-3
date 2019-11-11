<template>
  <!-- <v-content>
    <app-header></app-header> -->
     
  <v-content fill-height class="align-end justify-center">
    <v-row>
      <v-col>
        <question-list></question-list>
        <question-form class="justify-center"></question-form>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import QuestionList from "@/components/QuestionList.vue";
import QuestionForm from "@/components/QuestionForm.vue";

export default {
  components: {
    AppHeader,
    QuestionList,
    QuestionForm,
  }
};
</script>

<style>
</style>