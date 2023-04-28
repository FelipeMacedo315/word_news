<template>
  <footer>
    <div v-bind:key="index" v-for="(notice, index) in footerNews" class="notice-footer">
      <div class="container-img-notice">
        <img v-if="notice.image_url" v-bind:src="notice.image_url" alt="imagem noticia" />
        <img v-else src="../assets/ImageNews.jpg" alt="" />
      </div>
      <div class="footer-notice-preview">
        <span class="number-notice"> 0{{ index + 1 }} </span>
        <h4 v-on:click="goTo(notice.id)">{{ notice.title.slice(0, 40) }} ...</h4>
        <p>{{ notice.description.slice(0, 100) }} ...</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["footerNews"]),
  },
  methods: {
    goTo(noticeId) {
      this.$router.push(`/notice/${noticeId}`);
    },
  },
};
</script>

<style scoped lang="scss">
footer {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 5%;
  @include md-footer-Notice();
}
.notice-footer {
  margin-top: 0%;
  display: flex;
  justify-content: space-between;
}
.container-img-notice {
  height: 30vh;
  width: 35%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.footer-notice-preview {
  height: auto;
  width: 60%;
  display: flex;
  justify-content: baseline;
  flex-direction: column;
  row-gap: 2vh;
  word-wrap: break-word;
  h4 {
    margin: 0%;
    font-size: 1rem;
    font-family: "font-title";
    color: hsl(240, 100%, 5%);
    @include hover-text($strongOrange);
    cursor: pointer;
  }
  p {
    margin: 0%;
    font-size: 0.8rem;
    font-family: "font-text";
    color: hsl(236, 13%, 42%);
    line-height: 3vh;
  }
  span {
    color: hsl(233, 8%, 79%);
    font-size: 2rem;
    font-family: "font-titleNew";
    font-weight: 700;
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
</style>
