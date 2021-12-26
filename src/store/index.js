import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authModelShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModelShow = !state.authModelShow;
      // console.log(state.authModelShow);
    },
  },
  getters: {
    authModelShow: (state) => state.authModelShow,
  },
  actions: {
  },
  modules: {
  },
});
