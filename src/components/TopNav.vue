<template>
    <header class="top-nav">
        <div class="left">
            <div class="title">Reservations</div>
            <nav>
              <ul>
                <li>Listings</li>
                <li>My Reservations</li>
              </ul>
            </nav>
        </div>
        <div class="right">
            <template v-if="isLoggedIn">
                <button @click="onLogoutClick">Logout</button>
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
        onLogoutClick() {
           this.logout();
        },
    }
}
</script>

<style lang="scss" scoped>
.top-nav {
  background: #fff;
  height: 3.125rem;
  width: 100%;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: z-index('nav');
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 0.4rem;

  .left {
    display: flex;
    align-items: center;
  }

  .right {
      display: flex;
      align-items: center;
  }

  .title {
    font-size: 24pt;
    font-weight: normal;
    line-height: 1.25em;
  }

  nav {
    ul {
      list-style-type: none;
      margin: 0 0 0 10px;
      padding: 0;

      li {
        display: inline-block;
        padding: 10px;

        a {

        }
      }
    }
  }
}
</style>
