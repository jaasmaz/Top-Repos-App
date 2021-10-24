<template>
  <v-container>
    <v-row v-for="(item, index) in apiData" :key="index">
      <v-col>
        <h3>Language: {{ item.language }}</h3>
      </v-col>
      <v-col>
        <h5>Star Count: {{ item.stargazers_count }}</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    apiData() {
      return this.$store.getters.getApiData;
    },
  },
  props: {},
  created() {},
  methods: {},
};
</script>

<!-- Add "scoped" to style this component only -->
<style scoped></style>
