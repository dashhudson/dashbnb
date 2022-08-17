import Vue from 'vue';
import VueRouter from 'vue-router';

import BookListing from './pages/BookListing.vue';
import Listings from './pages/Listings.vue';
import Login from './pages/Login.vue';
import MyBookings from './pages/MyBookings.vue';
import NotFound from './pages/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'Home', path: '', redirect: { name: 'Listings' } },
  { name: 'Login', path: '/login', component: Login },
  {
    name: 'Listings',
    path: '/listings',
    component: Listings,
  },
  {
    name: 'Listing',
    path: '/listings/:id',
    component: BookListing,
  },
  { name: 'MyBookings', path: '/bookings', component: MyBookings },
  { name: 'NotFound', path: '*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
