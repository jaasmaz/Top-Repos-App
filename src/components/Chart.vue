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
                  v-model="title"
                  :rules="rules"
                  outlined
                  counter="2"
                  hint="This field uses counter prop"
                  label="Repo Count"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "Chart",
    language: "Lang",
  }),
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" to style this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
