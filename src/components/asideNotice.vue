<template>
  <aside>
    <h1>{{ category }}</h1>
    <article v-bind:key="index" v-for="(data, index) in asideNews">
      <h2 v-on:click="goTo(data.id)">{{ data.title }}</h2>
      <p>{{ data.description.slice(0, 150) }}...</p>
    </article>
  </aside>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["asideNews"]),
    ...mapState(["category", "resultApi"]),
  },
  methods: {
    goTo(noticeId) {
      this.$router.push(`/notice/${noticeId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  width: 100%;
  h1 {
    font-family: "font-titleNew";
    color: $corHighlightOrange;
    font-size: 3em;
    margin: 0px;
    padding: 5% 0%;
  }
}

article {
  padding: 5% 0%;
  border-bottom: solid 1px $corText;
  &:last-child {
    border-bottom: none;
  }
  h2 {
    color: $corTitleNotice;
    font-size: 1.2rem;
    font-family: "font-title";
    cursor: pointer;
    @include hover-text($corHighlightOrange);
  }
  p {
    color: $corText;
    font-size: $size-text;
    line-height: 3vh;
    font-family: "font-text";
  }
}
@font-face {
  font-family: "font-title";
  src: url("../assets/Inter-ExtraBold.ttf");
}
@font-face {
  font-family: "font-text";
  src: url("../assets/Inter-Regular.ttf");
}
@font-face {
  font-family: "font-titleNew";
  src: url("../assets/Inter-ExtraBold.ttf");
}
</style>
