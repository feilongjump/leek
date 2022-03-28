import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hello-world", // 路径
    name: "Hello-World", // 路由名
    component: () => import("@views/hello-world.vue"), // 懒加载模式 - 加载页面
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
