<template>
  <nav>
    <div v-on:click="closeNavBar()" class="container-close-icon">
      <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
        <g fill="#00001A" fill-rule="evenodd">
          <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
          <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
        </g>
      </svg>
    </div>
    <div class="container-nav">
      <router-link v-on:click="topNews()" to="/"> News </router-link>
      <router-link v-on:click="businessNews()" to="/business">
        Business
      </router-link>
      <router-link v-on:click="entertainmentNews()" to="/entertainment">
        Entreterimento
      </router-link>
      <router-link v-on:click="healthNews()" to="/health"> Saúde</router-link>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["propsNavBar"],

  methods: {
    ...mapMutations([
      "topNews",
      "businessNews",
      "entertainmentNews",
      "healthNews",
    ]),
    closeNavBar() {
      this.$emit("updateStatusNav", false);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 40%;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 60%;
  background-color: $corHighlightOrange;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-top: 2vh;
  gap: 10vh;
}
.container-nav {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5vh;

  a {
    padding-left: 10%;
    font-size: 4vw;
  }
}
.container-close-icon {
  width: 100%;
  svg {
    margin-right: 5%;
    float: right;
  }
}
</style>
