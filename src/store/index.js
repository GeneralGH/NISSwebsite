import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userLanguage: '1',
  },
  mutations: {
    SET_USER_LANGUAGE(state, language) {
      state.userLanguage = language;
    },
  },
  actions: {
    setUserLanguage({ commit }, language) {
      commit('SET_USER_LANGUAGE', language);
    },
  },
});

export default store;
