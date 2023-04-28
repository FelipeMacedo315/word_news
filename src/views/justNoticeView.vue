<template>
  <main>
    <h1>{{ exactNotice.title }}</h1>
    <div class="container-keywords">
      <div v-bind:key="data" v-for="data in keywordsFormat">
        <span class="keywords">{{ data }} </span>
      </div>
    </div>
    <div class="image-notice">
      <img v-if="exactNotice.image_url" v-bind:src="exactNotice.image_url" alt="image-notice" />
      <img v-else src="../assets/ImageNews.jpg" alt="image-notice" />
      <small>
        Noticia de
        <span v-bind:key="data" v-for="data in exactNotice.creator">{{ data }} </span>
        <span>
          em
          {{
            exactNotice.pubDate.slice(8, 10) +
            "/" +
            exactNotice.pubDate.slice(5, 7) +
            "/" +
            exactNotice.pubDate.slice(0, 4)
          }}
          às {{ exactNotice.pubDate.slice(10) }}
        </span>
      </small>
    </div>

    <h2>{{ exactNotice.description }}</h2>

    <p>{{ exactNotice.content }}</p>
  </main>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    noticeIndex() {
      return this.$route.params.index;
    },
    ...mapGetters(["allNotice"]),
    ...mapState(["resultApi"]),
    exactNotice() {
      return this.resultApi[this.noticeIndex];
    },
    keywordsFormat() {
      if (this.exactNotice.keywords === null) {
        this.exactNotice.keywords = "";
      }
      if (this.exactNotice.creator === null) {
        this.exactNotice.creator = "anônimo";
      }
      return this.exactNotice.keywords.slice(0, 6);
    },
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
}
h1 {
  color: $corTitle;
  font-size: 3rem;
  font-family: "font-titleNew";
}
h2 {
  color: $corTitle;
  font-size: 2rem;
  font-family: "font-titleNew";
  margin-top: 5%;
  margin-bottom: 0%;
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
.container-keywords {
  height: auto;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  gap: 3vh;
  flex-wrap: wrap;
  flex-direction: row;
}
.keywords {
  background-color: $corText;
  color: $corTitle;
  font-family: "font-text";
  font-size: 0.9rem;
  min-width: 100%;
  max-width: 100%;
  padding: 0.5vh 5vh;
  border-radius: 10px;
}
small {
  font-family: "font-text";
  color: $corTextMain;
}
p {
  font-family: "font-text";
  line-height: 5vh;
  color: $corTextMain;
}
@font-face {
  font-family: "font-titleNew";
  src: url("../assets/Inter-ExtraBold.ttf");
}
@font-face {
  font-family: "font-text";
  src: url("../assets/Inter-Regular.ttf");
}
</style>
