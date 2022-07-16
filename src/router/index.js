import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Today",
    component: () => import("../views/TodayView.vue"),
  },
  {
    path: "/Chart",
    name: "Chart",
    component: () => import("../views/ChartView.vue"),
  },
  {
    path: "/Artist",
    name: "Artist",
    component: () => import("../views/ArtistView.vue"),
  },
  {
    path: "/Latest",
    name: "Latest",
    component: () => import("../views/LatestView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
