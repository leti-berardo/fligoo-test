import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [],
  },
  mutations: {
    SET_USER_LIST(state, payload) {
      state.userList = payload;
    },
  },
  actions: {},
  modules: {},
});
