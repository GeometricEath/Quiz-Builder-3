<template>
  <v-content fill-height class="justify-center">
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
    QuestionList,
    QuestionForm
  }
};
</script>

<style>
</style>