import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from './store'

Vue.config.productionTip = false;

// Vue.prototype.$http = axios.create({
//   baseURL: "http://192.168.1.117:3000",
// });
//全局用一下axios
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
