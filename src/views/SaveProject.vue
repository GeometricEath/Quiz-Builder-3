<template>
  <v-container grid-list-sm>
    <v-text-field v-model="quizName" label="Введите название викторины"></v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      quizName: ""
    };
  },
  methods: {
    save() {
      this.$bus.emit("saveProject");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>