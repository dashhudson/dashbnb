import Vue from 'vue'
import Vuex from 'vuex'
import apis from '../apis';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: null,
    listings: [],
  },
  mutations: {
    setAuthToken(state, newToken) {
      state.authToken = newToken;
      apis.setToken(newToken);
    },
    setListings(state, newListings) {
      state.listings = newListings;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
        const response = await apis.login({ email, password });
        commit('setAuthToken', response.data.authToken);
    },
    async logout({ commit }) {
      commit('setAuthToken', null);
    },
    async getListings({ commit }) {
      const response = await apis.getListings();
      commit('setListings', response.data);
    },
  },
  modules: {
  }
})
