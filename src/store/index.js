import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    apiData: null,
    formCleared: null,
    formData: {
      cleared: null,
      selectedLang: null,
      repoCount: null,
    },
  },
  getters: {
    getApiData(state) {
      return state.apiData;
    },
    getformData(state) {
      return state.formData;
    },
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_API_DATA(state, status) {
      state.apiData = status;
    },
    SET_FORM_DATA(state, status) {
      state.formData = status;
    },
  },
  actions: {
    fetchApiData(context) {
      context.commit("SET_LOADING_STATUS", "loading");
      axios
        .get(
          `https://api.github.com/search/repositories?q=language:${this.state.formData.selectedLang}`,
          {
            params: {
              // Limit number of respons per request
              per_page: this.state.formData.repoCount,
            },
          }
        )
        .then((response) => {
          context.commit("SET_LOADING_STATUS", "notLoading");
          context.commit("SET_API_DATA", response.data.items);
        });
    },
    setFormData(context, payload) {
      context.commit("SET_LOADING_STATUS", "loading");
      context.commit("SET_FORM_DATA", payload);
      // If form is cleared set API Data to null
      if (payload.cleared) {
        context.commit("SET_API_DATA", null);
      }
      context.commit("SET_LOADING_STATUS", "notLoading");
    },
  },
  modules: {},
});
