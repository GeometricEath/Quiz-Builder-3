<template>
  <v-toolbar class="primary">
    <v-toolbar-title>Test</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text fab v-for="(item, id) in MenuItems" :key="`menuItem${id}`" :to="item.link">
        <v-icon>{{item.icon}}</v-icon>
        <!-- {{item.title}} -->
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
   data() {
    return {
      MenuItems: [
        {
          icon:'mdi-content-save',
          title:'Сохранить',
          link:''
        },
        {
          icon:'mdi-home',
          title:'',
          link:'/'
        },
      ]
    };
  },
};
</script>

<style>
</style>