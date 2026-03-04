import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/watch",
      name: "watchTest",
      component: () => import("../views/WatchTest.vue"),
    },
    {
      path: "/hook",
      name: "lifecycleHook",
      component: () => import("../views/LifecycleHook.vue"),
    },
  ],
});

export default router;
