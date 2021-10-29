<template>
  <v-container>
    <Form />
    <v-row>
      <v-col class="Chart" v-if="datacollection">
        <BarChart :chartData="datacollection" :options="options" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from "./Chart.js";
import Form from "./Form.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BarChart,
    Form,
  },
  data: () => ({
    datacollection: null,
    loaded: false,
    starsCount: null,
    repoName: null,
    repoColors: null,
    // Options for Chart
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      legend: {
        display: true,
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  watch: {
    // Draw Chart when the APIState Change
    "$store.getters.getApiData": function() {
      this.fillChart();
    },
  },
  computed: {
    // Get the new Api response from the store
    ...mapGetters({
      apiData: "getApiData",
    }),
  },
  methods: {
    // show Chart
    fillChart() {
      // if apiData is null then reset chart
      if (!this.apiData) {
        this.datacollection = null;
      } else {
        this.repoName = this.apiData.map((el) => el.name);
        this.starsCount = this.apiData.map((el) => el.stargazers_count);
        this.repoColors = this.createColors(this.repoName.length);
        // Build Data object to pass it to Chart component
        this.datacollection = {
          labels: this.repoName,
          datasets: [
            {
              label: "Total Stars",
              backgroundColor: this.repoColors,
              data: this.starsCount,
            },
          ],
        };
      }
    },
    // Create Random Colors for each repo
    createColors(count) {
      let rgbColors = [];
      for (var i = 0; i < count; i++) {
        var rgb = [];
        for (var j = 0; j < 3; j++) {
          rgb.push(Math.floor(Math.random() * 255));
        }
        rgbColors.push("rgb(" + rgb.join(",") + ")");
      }
      return rgbColors;
    },
  },
};
</script>
