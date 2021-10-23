<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    VUE_API: process.env.VUE_APP_API_TOKEN,
  }),
  methods:{

  },
  created() {
      // console.log(this.VUE_API)
  },
};
</script>