import apis from '../apis';

const AUTH_TOKEN_NAME = 'authToken';

export default {
  state: {
    authToken: null,
    currentUser: null,
    currentListing: null,
    listings: null,
    bookings: null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.authToken;
    },
    currentUser(state) {
      return state.currentUser;
    },
    currentListing(state) {
      return state.currentListing;
    },
  },
  mutations: {
    updateCurrentUser(state, newUser) {
      state.currentUser = newUser;
    },
    updateAuthToken(state, newToken) {
      state.authToken = newToken;
      apis.setToken(newToken);
      if (newToken) {
        localStorage.setItem(AUTH_TOKEN_NAME, newToken);
      } else {
        localStorage.removeItem(AUTH_TOKEN_NAME);
      }
    },
    updateCurrentListing(state, newListing) {
      state.currentListing = newListing;
    },
    setListings(state, newListings) {
      state.listings = newListings;
    },
    setBookings(state, newBookings) {
      state.bookings = newBookings;
    },
  },
  actions: {
    async init({ dispatch }) {
      const storedToken = localStorage.getItem(AUTH_TOKEN_NAME);
      if (storedToken) {
        dispatch('setAuthToken', storedToken);
      }
    },
    async login({ dispatch }, { email, password }) {
      const response = await apis.login({ email, password });
      dispatch('setAuthToken', response.data.authToken);
    },
    async logout({ dispatch }) {
      dispatch('setAuthToken', null);
    },
    async setAuthToken({ commit }, token) {
      commit('updateAuthToken', token);
      if (token) {
        const response = await apis.getCurrentUser();
        commit('updateCurrentUser', response?.data);
      } else {
        commit('updateCurrentUser', null);
      }
    },
    async getListings({ commit }) {
      const response = await apis.getListings();
      commit('setListings', response.data.items);
    },
    async getListing({ commit }, { id }) {
      const response = await apis.getListing({ id });
      commit('updateCurrentListing', response.data);
    },
    async getBookings({ commit }) {
      const response = await apis.getMyReservations();
      commit('setBookings', response.data.items);
    },
    async deleteBooking({ dispatch }, { id }) {
      await apis.deleteReservation({ id });
      dispatch('getBookings');
    },
  },
  modules: {},
};
