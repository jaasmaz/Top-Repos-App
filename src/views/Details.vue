<template>
  <v-container>
    <div class="text-center">
      <h1 v-if="!this.apiData" class="warning pa-5 white--text">
        Select a Language from Home Page to Display Data!
      </h1>
    </div>
    <v-row
      class="pa-5"
      justify="center"
      v-for="(repo, index) in this.apiData"
      :key="index"
    >
      <v-card class="pa-5 mx-auto" elevation="10">
        <v-row>
          <v-col>
            <div class="details">
              <v-avatar size="70">
                <img :src="repo.owner.avatar_url" alt="Avatar" />
              </v-avatar>
              <h4 class="mt-5">Repo Name</h4>
              <span class="ont-weight-black">{{ repo.name }}</span>
              <h4 class="mt-5">Description</h4>
              <p style="max-width: 500px">{{ repo.description }}</p>
              <v-btn
                :href="repo.html_url"
                target="_"
                class="ma-2 amber darken-2 black--white"
              >
                <span>RepoLink</span>
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="3">
            <v-chip class="ma-2" color="primary">
              {{ repo.language }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    // Get the Api response from the store
    ...mapGetters({
      apiData: "getApiData",
    }),
  },
  methods: {},
  created() {
    console.log(this.apiData);
  },
};
</script>
