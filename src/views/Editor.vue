<template>
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
import QuestionList from "@/components/QuestionList.vue";
import QuestionForm from "@/components/QuestionForm.vue";

export default {
  components: {
    QuestionForm,
    QuestionList
  }
};
</script>

<style>
</style>