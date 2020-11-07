import Vue from "vue";
import Vuex from "vuex";
import { _axios } from "../plugins/axios";
import router from "../router";
Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    Authorization: "", // token
    loading: true,
    forget: false, // 忘记密码框
    register: false, // 控制注册组件
    inputBorder: false, // 控制input框class
    pwdBorder: false, // 控制input密码框class
    emailCode: "", //邮箱号
    verification: "", //验证码
    loginActive: true, // 控制登录切换
    loginForm: {
      account: "", //账号
      password: "", // 密码
    },
    PrivacyAgreement: {
      userAgreement: false, //用户协议
      privacyPolicy: false, //隐私政策
    },
    popupError: {
      //错误弹框
      bounced: false,
      bouncedInfo: "邮箱号或验证码错误",
    },
    btnTimer: {
      sendAuthCode: true, // 切换btn
      autoTime: 0, //计时器
    },

    footer: {
      about: ["关于我们#", "安全保#", "帮助中心"],
      blogroll: [
        "友情链接：",
        "北京二手手机#",
        "北京二手手机维修#",
        "信用租机#",
        "二手手机",
      ],
    },
  },
  mutations: {
    setToken(state, token) {
      state.Authorization = token;
      localStorage.setItem("token", token);
    },
    login(state) {
      state.loginActive && this.commit("login/phoneLogin");
      !state.loginActive && this.commit("login/loginForm");
    },
    phoneLogin(state) {
      console.log(state);
      if (state.emailCode !== "") {
        this.commit("login/sessionCode");
      } else {
        state.popupError.bounced = true;
        console.log("手机号或验证码错误");
      }
    },
    sessionCode(state) {
      let verifyCode = sessionStorage.getItem("verifyCode");
      if (state.verification == verifyCode) {
        // this.$router.push("/home");
        router.push({ path: "/home" });
      } else {
        alert("验证码错误");
      }
    },
    // 获取验证码
    async getCode(state) {
      if (state.emailCode !== "") {
        await this.dispatch("login/verification");
        state.btnTimer.sendAuthCode = false;
        state.btnTimer.autoTime = 30;
        var authTimetimer = setInterval(() => {
          state.btnTimer.autoTime--;
          if (state.btnTimer.autoTime <= 0) {
            state.btnTimer.sendAuthCode = true;
            clearInterval(authTimetimer);
          }
        }, 1000);
      } else {
        state.popupError.bounced = true;
        state.popupError.bouncedInfo = "邮箱账号为空";
      }
    },
    // input失去焦点
    inputAccount(state) {
      if (state.loginForm.account !== "") {
        state.inputBorder = false;
      } else {
        state.inputBorder = true;
      }
    },
    inputPwd(state) {
      if (state.loginForm.password !== "") {
        state.pwdBorder = false;
      } else {
        state.pwdBorder = true;
      }
    },
    // 账号密码登录
    async loginForm(state) {
      if (state.loginForm.account == "" || state.loginForm.password == "") {
        state.inputBorder = true;
        state.pwdBorder = true;
        if (state.loginForm.account !== "") {
          state.inputBorder = false;
        } else if (state.loginForm.password !== "") {
          state.pwdBorder = false;
        }
      } else {
        state.inputBorder = false;
        state.pwdBorder = false;
        await this.dispatch("login/loginPost");
      }
    },
  },
  actions: {
    async verification(state) {
      console.log(state.state.emailCode);
      let { data } = await _axios
        .get(`email/${state.state.emailCode}`)
        .catch((err) => {
          console.log(err);
          state.popupError.bounced = true;
          state.popupError.bouncedInfo = "请求数据失败";
        });
      console.log(data);
      sessionStorage.setItem("verifyCode", data.data.code);
    },
    async loginPost(state) {
      await _axios
        .post(
          `/login/${state.state.loginForm.account}/${state.state.loginForm.password}`
        )
        .then(({ data }) => {
          if (data.statusCode == 500) {
            alert("账号或密码不对");
            return;
          } else {
            this.commit("login/setToken", `Bearer ${data.data.token}`);
            router.push({ path: "/home" });
            // this.$router.push("/home");
          }
        })
        .catch((err) => {
          alert("账号或密码错误");
          console.log(err);
        });
    },
  },
  getters: {},
};
