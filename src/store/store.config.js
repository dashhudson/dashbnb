import apis from '../apis';

const AUTH_TOKEN_NAME = 'authToken';
const DEFAULT_PAGE = 'Listings';

export default {
  state: {
    authToken: null,
    currentPage: null,
    currentUser: null,
    listings: null,
    bookings: null,
  },
  getters: {
    isLoggedIn(state) {
      return !!state.authToken;
    },
    currentPage(state) {
      return state.currentPage;
    },
    currentUser(state) {
        return state.currentUser;
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
    setListings(state, newListings) {
      state.listings = newListings;
    },
    setBookings(state, newBookings) {
      state.bookings = newBookings;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    async init({ dispatch, commit }) {
      const storedToken = localStorage.getItem(AUTH_TOKEN_NAME);
      if (storedToken) {
        dispatch('setAuthToken', storedToken);
      }
      commit('setCurrentPage', DEFAULT_PAGE);
    },
    async login({ dispatch, commit }, { email, password }) {
        const response = await apis.login({ email, password });
        dispatch('setAuthToken', response.data.authToken);
        commit('setCurrentPage', DEFAULT_PAGE);
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
    async getBookings({ commit }) {
        const response = await apis.getMyReservations();
        commit('setBookings', response.data.items);
    },
    async deleteBooking({ dispatch }, { id }) {
        await apis.deleteReservation({ id });
        dispatch('getBookings');
    },
    async gotoPage({ commit }, page) {
      commit('setCurrentPage', page);
    }
  },
  modules: {
  }
};
