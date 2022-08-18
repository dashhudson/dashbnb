import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_RESERVATION_API_URL,
});

function setToken(token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function login({ email, password }) {
  return instance.post(`/auth/login`, { email, password });
}

function getCurrentUser() {
  return instance.get(`/auth/me`);
}

function getListings() {
  return instance.get(`/listings`);
}

function getListing({ id }) {
  return instance.get(`/listings/${id}`);
}

function getMyReservations() {
  return instance.get(`/my/reservations`);
}

function deleteReservation({ id } = {}) {
  return instance.delete(`/reservations/${id}`);
}

export default {
  getCurrentUser,
  setToken,
  login,
  getListings,
  getListing,
  getMyReservations,
  deleteReservation,
};
