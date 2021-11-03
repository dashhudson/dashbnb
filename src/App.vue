<template>
  <div id="app">
    <TopNav />
    <template v-if="isLoggedIn">
      <Listings />
    </template>
    <template v-else>
      <Login />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Login from './components/Login.vue'
import Listings from './components/Listings.vue'
import TopNav from './components/TopNav.vue'
import './styles/main.scss';

export default {
  name: 'App',
  components: {
    Listings,
    Login,
    TopNav
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(['init']),
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  max-width: 1024px;
}
</style>
