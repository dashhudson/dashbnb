import Vue from 'vue'
import Vuex from 'vuex'
import apis from '../apis';

Vue.use(Vuex)

const AUTH_TOKEN_NAME = 'authToken';

export default new Vuex.Store({
  state: {
    authToken: null,
    listings: [],
  },
  getters: {
    isLoggedIn(state) {
      return !!state.authToken;
    },
  },
  mutations: {
    setAuthToken(state, newToken) {
      state.authToken = newToken;
      apis.setToken(newToken);
      if (newToken) {
        localStorage.setItem(AUTH_TOKEN_NAME, newToken);
      } else {
        localStorage.removeItem(AUTH_TOKEN_NAME);
      }
    },
    setListings(state, newListings) {
      state.listings = newListings;
    }
  },
  actions: {
    async init({ commit }) {
      const storedToken = localStorage.getItem(AUTH_TOKEN_NAME);
      if (storedToken) {
        commit('setAuthToken', storedToken);
      }
    },
    async login({ commit }, { email, password }) {
        const response = await apis.login({ email, password });
        commit('setAuthToken', response.data.authToken);
    },
    async logout({ commit }) {
      commit('setAuthToken', null);
    },
    async getListings({ commit }) {
      const response = await apis.getListings();
      commit('setListings', response.data.items);
    },
  },
  modules: {
  }
})
