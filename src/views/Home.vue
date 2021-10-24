<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          The GitHub Repositories Chart
        </h1>
        <p class="subheading font-weight-regular">
          GitHub API, building a small web service that returns the top N
          repositories by star count for a specific language.
        </p>
      </v-col>
    </v-row>
    <Form />
    <Chart />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Chart from "@/components/Chart.vue";
import Form from "@/components/Form.vue";
// import axios from "axios";

export default {
  components: {
    Chart,
    Form,
  },
  data: () => ({
    name: "Home",
    apiData: null,
    formData: null,
    selectedLang: null,
    repoCount: null,
    dropLang: ["Javascript", "Dart", "PHP", "python", "Java"],
  }),
  computed: {
    fetchAPI() {
      return this.$store.getters.getformData;
    },
  },
  created() {},
  // methods: {
  //   async getRepos() {
  //     this.$refs.form.validate();
  //     if (this.selectedLang && this.repoCount && this.$refs.form.validate()) {
  //       const api = await axios.get(
  //         `https://api.github.com/search/repositories?q=language:${this.selectedLang}`
  //       );
  //       this.apiData = api.data.items.slice(0, this.repoCount);
  //     }
  //   },
  // },
};
</script>
