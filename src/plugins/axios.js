"use strict";
import Vue from "vue";
import axios from "axios";
import store from "vuex";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMTQwOTQxMDMxOEBxcS5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTYwNDYyNTU4NSwiZXhwIjoxNjA0NjI5MTg1fQ.j-D1ZQsvGfH0UAiO3qoPhbLOMMdJxco_4QfiZ-wPBuQ";
let config = {
  // 配置 默认路径
  baseURL: "http://192.168.1.101:3000",
  // 延时
  // timeout: 60 * 1000, // Timeout
  // 跨域请求是否提供凭据信息  检查跨站点访问控制
  withCredentials: false, // Check cross-site Access-Control
};
import Store from "../store/index";
axios.interceptors.request.use(
  (config) => {
    Store.commit("LoadingChangeLoading", true);
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Store.commit("LoadingChangeLoading", true);
    store.state.login.user.isLogin = false;
    return Promise.reject(error);
  }
);
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
