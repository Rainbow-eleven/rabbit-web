import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/login/:accout/:password",
    name: "login",
    props: true,
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/personal",
        name: "personal",
        component: () => import("../views/personal/personal.vue"),
      },
    ],
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/productList/list.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// 路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") {
//     next();
//   } else {
//     let token = localStorage.getItem("token");
//     if (token === null || token === "") {
//       next("/login");
//     } else {
//       next();
//     }
//   }
// });
export default router;
