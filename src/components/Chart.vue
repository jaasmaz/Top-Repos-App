<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ msg }}
        </h1>
        <p class="subheading font-weight-regular">
          GitHub API, building a small web service that returns the top N
          repositories by star count for a specific language.
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">The {{ language }} Repos</h2>
        <v-form>
          <v-container class="justify-center">
            <v-row>
              <v-col cols="6" sm="3">
                <v-combobox
                  v-model="language"
                  clearable
                  outlined
                  persistent-hint
                  small-chips
                  solo
                  label="Language"
                  hint="Select The Repo Language"
                ></v-combobox>
              </v-col>
              <v-col cols="6" sm="3">
                <v-text-field
                  v-model="repoCount"
                  :rules="[
                    (v) => !isNaN(v) || 'It\'s not a Digit!',
                    (v) => (v && v.length <= 2) || 'Too Many Digits!',
                  ]"
                  outlined
                  counter="2"
                  hint="This field uses counter prop"
                  label="Repo Count"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row v-for="(item, index) in apiData" :key="index">
              <v-col>
                <h3>Language: {{ item.language }}</h3>
              </v-col>
              <v-col>
                <h5>Star Count: {{ item.stargazers_count }}</h5>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    apiData: null,
    name: "Chart",
    language: "Lang",
    repoCount: 0,
    obj: { type: "Fiat", model: "500", color: "white" },
  }),
  props: {
    msg: String,
  },
  created() {
    this.getRepos();
  },
  methods: {
    async getRepos() {
      const api = await axios.get(
        "https://api.github.com/search/repositories?q=language:javascript"
      );
      this.apiData = api.data.items;
      console.log(this.apiData);
    },
  },
};
</script>

<!-- Add "scoped" to style this component only -->
<style scoped></style>
