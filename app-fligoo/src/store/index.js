import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersList: [],
    userSelected: {},
  },
  mutations: {
    SET_USER_LIST(state, payload) {
      state.usersList = payload;
    },
    SET_USER_SELECTED(state, payload) {
      state.userSelected = payload;
    },
    CLEAR_USER_SELECTED(state, payload) {
      state.userSelected = {};
    },
  },
  actions: {},
  modules: {},
});
