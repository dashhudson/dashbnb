<template>
    <header class="top-nav">
        <div class="center">
            <div class="title"><span class='logo-gold'>DASH</span><span class='logo-black'>BNB</span></div>
        </div>
        <div class="right">
            <template v-if="isLoggedIn">
                <nav>
                  <ul>
                    <li><a @click="gotoPage('listings')">Listings</a></li>
                    <li><a @click="gotoPage('NotFound')">My Reservations</a></li>
                  </ul>
                  <button @click="onLogoutClick">Logout</button>
                </nav>
            </template>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
    methods: {
        ...mapActions(['logout']),
        ...mapActions(['gotoPage']),
        onLogoutClick() {
           this.logout();
        },
    }
}
</script>

<style lang="scss" scoped>
.top-nav {
  background: $white;
  height: 50px;
  width: 100%;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: z-index('nav');
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 0.4rem;

  .center {
    width: 400px;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .right {
      display: flex;
      justify-content: flex-end;
      width: 500px;
      margin-left: auto;
  }

  .title {
    font-size: 24pt;
    line-height: 50px;
  }

  .logo-black {
    font-weight: 300;
  }

  .logo-gold {
    font-weight: 300;
    color: $gold;
  }

  nav {
    display: inline-flex;
    height: 50px;
    align-items: center;

    ul {
      display: flex;
      justify-content: flex-end;
      list-style-type: none;
      margin: 0 0 0 10px;
      padding: 0;

      li {
        padding: 10px;
      }
    }
  }
}
</style>
