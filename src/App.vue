<template>
  <div id="app">
    <template v-if="authToken">
      <Listings />
      <button @click="onLogoutClick">Logout</button>
    </template>
    <template v-else>
      <Login />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Login from './components/Login.vue'
import Listings from './components/Listings.vue'
import './styles/main.scss';

export default {
  name: 'App',
  components: {
    Listings,
    Login
  },
  computed: {
    ...mapState(['authToken']),
  },
  methods: {
    ...mapActions(['logout']),
    onLogoutClick() {
      this.logout();
    },
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
  display: flex;
  justify-content: center;
}
</style>
