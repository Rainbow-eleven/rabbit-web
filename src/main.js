import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import EleUploadImage from "vue-ele-upload-image";
Vue.component(EleUploadImage.name, EleUploadImage);
import EleGallery from "vue-ele-gallery";
Vue.component(EleGallery.name, EleGallery);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
