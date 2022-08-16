<template>
  <div id="app">
    <TopNav />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TopNav from './components/TopNav.vue';
import './styles/main.scss';

export default {
  name: 'App',
  components: {
    TopNav,
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  async created() {
    await this.init();
    if (!this.isLoggedIn) {
      this.$router.push({ name: 'Login' });
    }
  },
  methods: {
    ...mapActions(['init']),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  .main-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    padding: 24px;
  }
}
</style>
