import Vue from "vue";
import Vuex from "vuex";
import dummy from "@/assets/todaydummy.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: dummy,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
