import Vue from "vue";
import Vuex from "vuex";
import user from "./moduleUser";
import moduleLogin from "./moduleLogin";
import list from "./moduleList";
import ModuleHome from "./moduleHome";
Vue.use(Vuex);

export default new Vuex.Store({
  // 状态
  state: {},
  // 突变操作 - 改变 状态
  mutations: {},
  // 行为
  actions: {},
  // 模块
  modules: {
    user,
    login: moduleLogin,
    list,
    home: ModuleHome,
  },
  // 计算属性
  getters: {},
});
