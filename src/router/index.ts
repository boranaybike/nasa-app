import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/apod-detail",
    name: "apod",
    component: () => import("../views/ApodDetailView.vue"),
  },
  {
    path: "/tle-detail",
    name: "tle",
    component: () => import("../views/TLEDetailView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
