<template>
  <template v-if="mainNotices.length">
    <article v-bind:key="notice" v-for="notice in mainNotices">
      <div class="image-notice">
        <img
          v-if="notice.image_url"
          v-bind:src="notice.image_url"
          :alt="notice.image_url"
        />
        <img v-else src="../assets/ImageNews.jpg" alt="No Image" />
      </div>
      <div class="container-title-and-text">
        <div class="title-notice">
          <h1>{{ notice.title.slice(0, notice.title.indexOf(",")) }} ...</h1>
        </div>
        <div class="text-notice">
          <p v-if="notice.description">
            {{ notice.description.slice(0, 300) }}
          </p>
          <p v-else>sem mais informações</p>
          <button v-on:click="goTo(notice.id)" class="btn-read-more">
            READ MORE
          </button>
        </div>
      </div>
    </article>
  </template>
  <template v-else>
    <div class="none-notice">
      <h2>Nenhuma notícia sobre {{ category }}</h2>
    </div>
  </template>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {},
  mounted() {},
  computed: {
    ...mapGetters(["mainNotices"]),
    ...mapState(["category", "resultApi"]),
  },
  methods: {
    goTo(noticeId) {
      this.$router.push(`/notice/${noticeId}`);
    },
  },
};
</script>

<style scoped lang="scss">
article {
  width: 100%;
  height: 100%;
  display: grid;
  grid-row-gap: 3vh;
  grid-template-columns: 100%;
  grid-template-areas: "imagem imagem ";
}
.image-notice {
  width: 100%;
  height: 50vh;
  background-color: $corTitle;
  grid-area: imagem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.container-title-and-text {
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 5vh;
  @include md-text-and-title();
}
.title-notice {
  @include agroup-text();
  width: 50%;
  h1 {
    font-family: "font-title";
    margin: 0%;
    font-size: 48px;
    font-weight: 800;
    color: $corTitle;
  }
}
.text-notice {
  @include agroup-text();
  font-family: "font-text";
  width: 50%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  p {
    font-size: $size-text;
    color: $corTextMain;
    line-height: 3vh;
  }
}
.btn-read-more {
  background-color: $corTitle;
  color: white;
  padding: 4% 20%;
  font-weight: 700;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: $strongOrange;
    border: none;
  }
}
.none-notice {
  @include none-notice();
}
@font-face {
  font-family: "font-title";
  src: url("../assets/Inter-ExtraBold.ttf");
}
@font-face {
  font-family: "font-text";
  src: url("../assets/Inter-Regular.ttf");
}

@media (max-width: 425px) {
  .title-notice > h1 {
    font-size: 36px;
  }
}
</style>
