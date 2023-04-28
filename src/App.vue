<template>
  <header>
    <img src="./assets/logo.svg" alt="Logo" />
    <div v-on:click="openNav()">
      <svg
        v-show="!navBarDesktop"
        width="40"
        height="17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#00001A" fill-rule="evenodd">
          <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
          <path d="M0 0h40v3H0z" />
        </g>
      </svg>
    </div>
    <NavBar v-on:updateStatusNav="closeNav($event)" v-if="navBarmobile" />
    <nav v-show="navBarDesktop">
      <router-link v-on:click="topNews()" to="/"> News </router-link>
      <router-link v-on:click="businessNews()" to="/business">
        Business
      </router-link>
      <router-link v-on:click="entertainmentNews()" to="/entertainment">
        Entreterimento
      </router-link>
      <router-link v-on:click="healthNews()" to="/health"> Saúde</router-link>
    </nav>
  </header>
  <router-view> </router-view>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import NavBar from "./components/navbar.vue";
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["category"]),
  },
  data() {
    return {
      widthPage: window.screen.width,
      navBarDesktop: true,
      navBarmobile: false,
    };
  },
  mounted() {
    if (this.widthPage > 950) {
      this.navBarDesktop = true;
    } else {
      this.navBarDesktop = false;
    }
  },

  methods: {
    ...mapMutations([
      "topNews",
      "businessNews",
      "entertainmentNews",
      "healthNews",
    ]),
    openNav() {
      this.navBarmobile = true;
    },
    closeNav($event) {
      this.navBarmobile = $event;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "font-title";
  src: url("./assets/Inter-Regular.ttf");
}
@mixin agrupar-elemento {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body {
  background-color: $corTitleNotice;
  min-height: 100vh;
}
#app {
  margin: 0% 5%;
}
header {
  @include agrupar-elemento();
  padding: 5vh;
}
nav {
  @include agrupar-elemento();
  justify-content: space-around;
  width: 30%;
}

a {
  color: $corTextMain;
  text-decoration: none;
  font-family: "font-title";
  font-size: 1rem;
}

@media (max-width: 465px) {
  header {
    padding: 5vh 0;
  }
}
</style>
