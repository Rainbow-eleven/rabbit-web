import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import FaultState from "../views/rate/FaultState.vue";
// import MaintainAssess from "../views/rate/MaintainAssess.vue";
// import Offer from "../views/rate/Offer.vue";
// import WriteAddress from "../views/rate/WriteAddress.vue";
// import CustomerService from "../views/rate/CustomerService.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    // 总页面
    path: "/",
    component: () => import("../views/rate/FaultState.vue"),
  },
  {
    // 总页面
    path: "/FaultState",
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
router.beforeEach((to, from, next) => {
  next();
});
export default router;
