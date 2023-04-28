import { createStore } from "vuex";
import store from "../store/index";
export default createStore({
  state: {
    resultApi: [],
    category: "top",
  },
  getters: {
    mainNotices(state) {
      console.log(state.resultApi);
      return state.resultApi.slice(0, 1);
    },
    asideNews(state) {
      const justAsideNews = state.resultApi.slice(1, 4);
      const formatAsideNews = justAsideNews.map((item) => {
        if (item.description === null) {
          item.description = "veja mais infos";
        }
        return item;
      });
      return formatAsideNews;
    },

    footerNews(state) {
      const justFooterNews = state.resultApi.slice(4, 7);
      const checkImageNews = justFooterNews.map((item) => {
        if (item.description === null) {
          item.description = "veja mais infos";
        }
        return item;
      });
      return checkImageNews;
    },

    fetchCategoryNews(state) {
      async function requestApi() {
        const fetchApi = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_1468049882dfef310db635e9584aa75a7b1e2&country=br&category=${state.category}`
        );
        const responseApi = await fetchApi.json();
        const resultApi = await store.dispatch("increment", responseApi);
      }
      return requestApi;
    },
  },

  mutations: {
    increment(state, data) {
      state.resultApi = data;
    },
    topNews() {
      store.dispatch("handleCategory", "top");
    },
    businessNews() {
      store.dispatch("handleCategory", "business");
    },
    entertainmentNews() {
      store.dispatch("handleCategory", "entertainment");
    },
    healthNews() {
      store.dispatch("handleCategory", "health");
    },
    handleCategory(state, data) {
      state.category = data;
    },
  },
  actions: {
    increment(context, data) {
      if (data.status === "success") {
        data.results.forEach((item, index) => {
          item.id = index;
        });
      }
      context.commit("increment", data.results);
    },
    handleCategory(context, data) {
      context.commit("handleCategory", data);
    },
  },
  modules: {},
});
