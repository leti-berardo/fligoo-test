import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersList: [],
  },
  mutations: {
    SET_USER_LIST(state, payload) {
      state.usersList = payload;
    },
  },
  actions: {},
  modules: {},
});
