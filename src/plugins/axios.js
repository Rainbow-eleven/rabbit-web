"use strict";
import Vue from "vue";
import axios from "axios";
let config = {
  // 配置 默认路径
  baseURL: "https://www.xxx.com",
  // 延时
  // timeout: 60 * 1000, // Timeout
  // 跨域请求是否提供凭据信息  检查跨站点访问控制
  withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);
// axios 请求拦截器  包含[请求头以及请求参数等等]
_axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
// axios 响应拦截器  包含[请求头以及请求参数等等]
_axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};
Vue.use(Plugin);
export default Plugin;