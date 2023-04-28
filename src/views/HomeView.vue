<template>
  <div class="all-notice">
    <main class="main-notice"><MainNotice /></main>
    <aside class="aside-notice"><AsideNotice /></aside>
    <footer class="footer-notice"><FooterNotice /></footer>
  </div>
</template>

<script>
import mainNotice from "../components/mainNotice.vue";
import asideNotice from "../components/asideNotice.vue";
import footerNotice from "../components/footerNotice.vue";
import { mapGetters, mapState } from "vuex";
export default {
  mounted() {
    this.fetchCategoryNews();
  },
  computed: {
    ...mapGetters(["fetchCategoryNews"]),
  },
  components: {
    MainNotice: mainNotice,
    AsideNotice: asideNotice,
    FooterNotice: footerNotice,
  },
};
</script>
<style lang="scss" scoped>
$CorBackgroundAsideNotice: hsl(240, 100%, 5%);
.all-notice {
  @include all-notice;
}
.main-notice {
  @include main-notice(main);
}
.aside-notice {
  @include aside-notice(aside);
}
.footer-notice {
  @include footer-notice(footer);
}
</style>
