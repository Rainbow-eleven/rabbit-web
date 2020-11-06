import Vue from "vue";
import Vuex from "vuex";
import { ModuleLogin } from "./moduleLogin";
import user from "./moduleUser";
Vue.use(Vuex);

export default new Vuex.Store({
  // 状态
  // 突变操作 - 改变 状态
  mutations: {},
  // 行为
  actions: {},
  // 模块
  modules: {
    user,
    login: ModuleLogin,
  },
  // 计算属性
  getters: {},
});
