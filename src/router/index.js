import Vue from "vue";
import VueRouter from "vue-router";

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
    path: "/personal",
    name: "personal",
    component: () => import("../views/personal/personal.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/productList/list.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/home.vue"),
  },
  {
    // 总页面
    path: "/FaultState",
    name: "FaultState",
    component: () => import("../views/rate/FaultState.vue"),
  },
  {
    // 总页面
    path: "/FaultState/:id",
    props: true,
    name: "FaultState",
    component: () => import("../views/rate/FaultState.vue"),
  },
  {
    // 维修
    path: "/MaintainAssess",
    name: "MaintainAssess",
    component: () => import("../views/rate/MaintainAssess.vue"),
  },
  {
    // 报价
    path: "/Offer",
    name: "Offer",
    component: () => import("../views/rate/Offer.vue"),
  },
  {
    // 地址
    path: "/WriteAddress",
    name: "WriteAddress",
    component: () => import("../views/rate/WriteAddress.vue"),
  },
  {
    // 客服
    path: "/CustomerService",
    name: "CustomerService",
    component: () => import("../views/rate/CustomerService.vue"),
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
