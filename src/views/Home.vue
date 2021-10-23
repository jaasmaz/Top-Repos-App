<template>
  <Chart msg="The GitHub Repositories Chart" />
</template>

<script>
// @ is an alias to /src
import Chart from "@/components/Chart.vue";

export default {
  name: "Home",

  components: {
    Chart,
  },
};
</script>
