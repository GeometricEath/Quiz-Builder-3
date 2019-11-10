<template>
  <v-content>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-expansion-panels>
          <v-expansion-panel dark expand focusable inset popout>
            <v-expansion-panel-header>Вопрос</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item two-line>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="@/assets/logo.png" />
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>title</v-list-tile-title>
                    <v-list-tile-sub-title>subTitle</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-item>
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
  }
};
</script>