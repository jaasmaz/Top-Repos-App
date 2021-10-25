<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>GitHub Repo Chart</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="ma-2 amber darken-3 black--white" to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/details" class="ma-2 amber darken-2 black--white">
        <span>More Details</span>
        <v-icon>mdi-file-multiple</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
