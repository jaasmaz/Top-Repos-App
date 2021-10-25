<template>
  <v-container>
    <v-row justify="center">
      <v-card class="pa-5">
        <h2 v-if="formData.selectedLang" class="headline font-weight-bold mb-3">
          Top {{ formData.selectedLang }} Repos
        </h2>
        <h2 v-else class="headline font-weight-bold mb-3">
          Please Select a Language
        </h2>
        <v-form ref="form">
          <v-container class="justify-center">
            <v-row>
              <v-col md="4">
                <v-select
                  :items="dropLang"
                  v-model="formData.selectedLang"
                  clearable
                  outlined
                  small-chips
                  solo
                  label="Language"
                  hint="Select The Repo Language"
                  :rules="[(v) => !!v || 'Please Select a Language']"
                ></v-select>
              </v-col>
              <v-col md="4">
                <v-text-field
                  v-model="formData.repoCount"
                  outlined
                  counter="2"
                  label="Repo Count"
                  hint="Amount of Repos to disply"
                  :rules="[
                    (v) => !isNaN(v) || 'It\'s not a Digit!',
                    (v) =>
                      (v && v.length <= 2 && v.length > 0) ||
                      'Insert 1 or 2 Digits!',
                    (v) =>
                      (v <= 20 && v > 0) ||
                      'Can\'t display more than 20 Repos or less than 1',
                  ]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn class="primary pa-7" @click="submitForm">
                  <v-icon>mdi-magnify</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    formData: {
      selectedLang: null,
      repoCount: null,
    },
    name: "Form",
    dropLang: ["Javascript", "Dart", "PHP", "python", "Java"],
  }),
  props: {},
  created() {},
  methods: {
    // Update Form data State after input by user
    submitForm() {
      this.$refs.form.validate();
      if (
        this.formData.selectedLang &&
        this.formData.repoCount &&
        this.$refs.form.validate()
      ) {
        this.$store.dispatch("setFormData", this.formData);
        this.$store.dispatch("fetchApiData");
        // this.$emit("submited", true);
      }
    },
  },
};
</script>

<style></style>
