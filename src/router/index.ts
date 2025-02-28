import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import RestaurantPage from "../pages/RestaurantPage.vue";

// Définition du type des routes avec RouteRecordRaw
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/restaurant/:name",
    name: "restaurant",
    component: RestaurantPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
