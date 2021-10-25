<template>
  <v-container>
    <Form />
    <v-row>
      <v-col class="Chart">
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
    starsCount: [100, 200, 550],
    repoName: null,
    repoColors: null,
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
    // Call it when the State Change
    "$store.getters.getApiData": function() {
      this.fillChart();
    },
  },
  computed: {
    // Get the Api response from the store
    ...mapGetters({
      apiData: "getApiData",
    }),
  },
  methods: {
    fillChart() {
      this.repoName = this.apiData.map((el) => el.name);
      this.starsCount = this.apiData.map((el) => el.stargazers_count);
      this.repoColors = this.createColors(this.repoName.length);
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
    },
    randomColor(id) {
      const r = () => Math.floor(256 * Math.random());

      return (
        this.colorCache[id] ||
        (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`)
      );
    },
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
