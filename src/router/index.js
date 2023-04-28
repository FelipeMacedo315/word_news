import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BusinessView from "../views/BusinessView.vue";
import EntertainmentView from "../views/EntertainmentView.vue";
import HealthView from "../views/HealthView.vue";
import justNoticeView from "../views/justNoticeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/business",
    name: "business",
    component: BusinessView,
  },
  {
    path: "/entertainment",
    name: "entertainment",
    component: EntertainmentView,
  },
  {
    path: "/health",
    name: "health",
    component: HealthView,
  },
  {
    path: "/notice/:index",
    name: "justNotice",
    component: justNoticeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
