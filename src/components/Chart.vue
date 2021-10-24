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
        <v-card class="pa-5">
          <h2 v-if="selectedLang" class="headline font-weight-bold mb-3">
            Top {{ selectedLang }} Repos
          </h2>
          <h2 v-else class="headline font-weight-bold mb-3">
            Please Select a Language
          </h2>
          <v-form ref="form">
            <v-container class="justify-center">
              <v-row>
                <v-col cols="6" sm="3">
                  <v-select
                    :items="dropLang"
                    v-model="selectedLang"
                    @change="getRepos()"
                    clearable
                    outlined
                    small-chips
                    solo
                    label="Language"
                    hint="Select The Repo Language"
                    :rules="[(v) => !!v || 'Please Select a Language']"
                  ></v-select>
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field
                    v-model="repoCount"
                    @change="getRepos()"
                    outlined
                    counter="2"
                    label="Repo Count"
                    hint="This field uses counter prop"
                    :rules="[
                      (v) => !isNaN(v) || 'It\'s not a Digit!',
                      (v) => (v && (v.length <= 2 && v.length > 0)) || 'Insert 1 or 2 Digits!',
                      (v) => (v <= 20) || 'Can\'t display more than 20 Repos',
                    ]"
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    apiData: null,
    selectedLang: null,
    repoCount: null,
    name: "Chart",
    repoLang: "Programing Language",
    dropLang: ["Javascript", "Dart", "PHP", "python", "Java"],
  }),
  props: {
    msg: String,
  },
  created() {
  },
  methods: {
    async getRepos() {
      this.$refs.form.validate()
      if (this.selectedLang && this.repoCount && this.$refs.form.validate()) {
        const api = await axios.get(
          `https://api.github.com/search/repositories?q=language:${this.selectedLang}`
        );
        this.apiData = api.data.items.slice(0, this.repoCount);

      }
    },
  },
};
</script>

<!-- Add "scoped" to style this component only -->
<style scoped></style>
