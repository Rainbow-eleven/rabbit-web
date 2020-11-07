<template>
  <div class="loginBox">
    <popout
      v-if="$store.state.login.popupError.bounced"
      @changePopout="popoutClose"
      :bouncedInfo="$store.state.login.popupError.bouncedInfo"
      :bounced="$store.state.login.popupError.bounced"
    ></popout>
    <forget-pass
      v-if="$store.state.login.forget"
      @changeClose="forgetClose"
    ></forget-pass>
    <signin
      v-if="$store.state.login.register"
      :register="$store.state.login.register"
      @changeClose="signClose"
    ></signin>
    <div class="header m-auto">
      <img src="../login/image/loginHeader.png" alt="" />
    </div>
    <div class="login mt-4 m-auto">
      <div class="logo">
        <img class="mt-5" src="./image/rabbitLogo.png" alt="" />
      </div>
      <div class="ways mt-3">
        <div class="center m-auto">
          <div class="loginCut d-flex justify-content-between">
            <div
              style="cursor: pointer"
              @click="emailCode"
              :class="[loginActive ? 'active' : '']"
            >
              邮箱验证码登录
            </div>
            <div
              style="cursor: pointer"
              @click="account"
              :class="[!loginActive ? 'active' : '']"
            >
              账号密码登录
            </div>
          </div>
          <div
            v-if="loginActive"
            class="mt-4 animate__animated animate__slideInLeft"
            style="animation-duration: 500ms"
          >
            <div class="d-flex justify-content-between">
              <input
                class="w-100 border p-2"
                type="text"
                placeholder="邮箱账号"
                v-model="$store.state.login.emailCode"
                @keyup="spacekey"
              />
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <input
                class="p-2 border"
                type="text"
                placeholder="短信验证码"
                v-model="$store.state.login.verification"
                @keyup="spacekey"
              />
              <button
                @click="getCode"
                v-show="$store.state.login.btnTimer.sendAuthCode"
                class="btn btn-success"
                style="border: none; background: #3eb135"
              >
                获取验证码
              </button>
              <button
                v-show="!$store.state.login.btnTimer.sendAuthCode"
                class="btn btn-dark"
                style="font-size: 12px"
              >
                {{ $store.state.login.btnTimer.autoTime }}秒后重新获取
              </button>
            </div>
          </div>
          <div
            v-else
            class="mt-4 animate__animated animate__slideInRight"
            style="animation-duration: 500ms"
          >
            <input
              type="text"
              class="w-100 border p-2"
              placeholder="手机/邮箱/用户名"
              :class="$store.state.login.inputBorder ? 'inputBorder' : ''"
              v-model="$store.state.login.loginForm.account"
              @keyup="spacekey"
              @blur="inputAccount"
            />

            <input
              type="password"
              class="mt-3 w-100 border p-2"
              :class="$store.state.login.pwdBorder ? 'inputBorder' : ''"
              placeholder="密码"
              v-model="$store.state.login.loginForm.password"
              @keyup="spacekey"
              @blur="inputPwd"
            />
            <div style="font-size: ">
              还没有账号？<span
                style="color: blue; cursor: pointer"
                @click="
                  $store.state.login.register = !$store.state.login.register
                "
                >注册</span
              >
              <span
                class="float-right"
                style="color: blue; cursor: pointer"
                @click="$store.state.login.forget = !$store.state.login.forget"
                >忘记密码?</span
              >
            </div>
          </div>
          <div>
            <button
              v-if="$store.state.login.loading"
              style="background: #83d838; border: none"
              class="w-100 mt-3 btn btn-success"
              @click="login"
            >
              登 录
            </button>
            <button
              v-if="!$store.state.login.loading"
              class="w-100 mt-3 btn btn-success"
            >
              <div class="loader m-auto"></div>
            </button>
            <div class="hint mt-3">
              未注册二手兔账号的手机号，登陆时自动将创建二手兔账号
              我已阅读并同意<span
                class="color"
                @click="
                  $store.state.login.PrivacyAgreement.userAgreement = !$store
                    .state.login.PrivacyAgreement.userAgreement
                "
                >《用户协议》</span
              >及<span
                class="color"
                @click="
                  $store.state.login.PrivacyAgreement.privacyPolicy = !$store
                    .state.login.PrivacyAgreement.privacyPolicy
                "
                >《隐私政策》</span
              >
              <div
                v-if="$store.state.login.PrivacyAgreement.userAgreement"
                class="agreement animate__animated animate__slideInDown"
              >
                <div class="center text-center m-auto mt-5">
                  <button
                    class="close"
                    @click="
                      $store.state.login.PrivacyAgreement.userAgreement = false
                    "
                  >
                    x
                  </button>
                  <button
                    class="confirm btn btn-success"
                    @click="
                      $store.state.login.PrivacyAgreement.userAgreement = false
                    "
                  >
                    确定
                  </button>
                  <h4 class="mt-3">二手兔用户协议</h4>

                  <div class="mb-4">
                    <span class="text">
                      二手兔系统是一个 B2C
                      的电商平台，本系统的主题是旧品回收、维修、环
                      保，包含客户端和管理端。主要的客户群体是手中有闲置电子产品的城镇居民。
                      系统主要实现了可以网上预约、评估报价、上门维修、快速结款等功能，客户可
                      以足不出户解决手机、电脑等电子产品的故障问题，并可轻松将闲置电子产品卖
                      给平台本文档作为二手兔系统的需求说明文档，用于与用户确定最终的目标，并成为合同的一
                      部分，同时也是本系统设计人员的基础文档。当前互联网行业发展迅速，手机、笔记本电脑等电子产品成为了生活中不可或缺的必需
                      品。这些产品不时出现的故障给人们的生活带来了很多不便。并且电子产品更新换代迅速，
                      不少人手中都积攒了几台甚至更多的淘汰设备，既占空间也是浪费。为了方便人们的维修及
                      满足闲置回收的需求我们特别开发了【二手兔】系统。用户可以在线下单，享受上门维修、
                      快速公平回收闲置电子设备的服务概要设计在系统需求分析说明书的基础上对系统总体架构、数据库结构、模块结构进行
                      了设计描述。在下一阶段的系统开发实现中，设计人员和研发人员可参考此报告，对系统进
                      行软件设计和开发实现。在以后的软件测试以及软件维护阶段也可参考此说明书，了解在概
                      要设计过程中所完成的各模块设计结构，或在修改时找出在本阶段设计的不足或错误。
                      二手兔系统是一个 B2C
                      的电商平台，本系统的主题是旧品回收、维修、环
                      保，包含客户端和管理端。主要的客户群体是手中有闲置电子产品的城镇居民。
                      系统主要实现了可以网上预约、评估报价、上门维修、快速结款等功能，客户可
                      以足不出户解决手机、电脑等电子产品的故障问题，并可轻松将闲置电子产品卖
                      给平台本文档作为二手兔系统的需求说明文档，用于与用户确定最终的目标，并成为合同的一
                      部分，同时也是本系统设计人员的基础文档。当前互联网行业发展迅速，手机、笔记本电脑等电子产品成为了生活中不可或缺的必需
                      品。</span
                    >
                  </div>
                </div>
              </div>
              <div
                v-if="$store.state.login.PrivacyAgreement.privacyPolicy"
                class="agreement animate__animated animate__slideInDown"
              >
                <div class="center text-center m-auto mt-5">
                  <button
                    class="close"
                    @click="
                      $store.state.login.PrivacyAgreement.privacyPolicy = false
                    "
                  >
                    x
                  </button>
                  <button
                    class="confirm btn btn-success"
                    @click="
                      $store.state.login.PrivacyAgreement.privacyPolicy = false
                    "
                  >
                    确定
                  </button>
                  <h4 class="mt-3">二手兔隐私政策</h4>
                  <div class="mb-4">
                    <span class="text">
                      二手兔系统是一个 B2C
                      的电商平台，本系统的主题是旧品回收、维修、环
                      保，包含客户端和管理端。主要的客户群体是手中有闲置电子产品的城镇居民。
                      系统主要实现了可以网上预约、评估报价、上门维修、快速结款等功能，客户可
                      以足不出户解决手机、电脑等电子产品的故障问题，并可轻松将闲置电子产品卖
                      给平台本文档作为二手兔系统的需求说明文档，用于与用户确定最终的目标，并成为合同的一
                      部分，同时也是本系统设计人员的基础文档。当前互联网行业发展迅速，手机、笔记本电脑等电子产品成为了生活中不可或缺的必需
                      品。这些产品不时出现的故障给人们的生活带来了很多不便。并且电子产品更新换代迅速，
                      不少人手中都积攒了几台甚至更多的淘汰设备，既占空间也是浪费。为了方便人们的维修及
                      满足闲置回收的需求我们特别开发了【二手兔】系统。用户可以在线下单，享受上门维修、
                      快速公平回收闲置电子设备的服务概要设计在系统需求分析说明书的基础上对系统总体架构、数据库结构、模块结构进行
                      了设计描述。在下一阶段的系统开发实现中，设计人员和研发人员可参考此报告，对系统进
                      行软件设计和开发实现。在以后的软件测试以及软件维护阶段也可参考此说明书，了解在概
                      要设计过程中所完成的各模块设计结构，或在修改时找出在本阶段设计的不足或错误。
                      二手兔系统是一个 B2C
                      的电商平台，本系统的主题是旧品回收、维修、环
                      保，包含客户端和管理端。主要的客户群体是手中有闲置电子产品的城镇居民。
                      系统主要实现了可以网上预约、评估报价、上门维修、快速结款等功能，客户可
                      以足不出户解决手机、电脑等电子产品的故障问题，并可轻松将闲置电子产品卖
                      给平台本文档作为二手兔系统的需求说明文档，用于与用户确定最终的目标，并成为合同的一
                      部分，同时也是本系统设计人员的基础文档。当前互联网行业发展迅速，手机、笔记本电脑等电子产品成为了生活中不可或缺的必需
                      品。</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="other mt-4 text-center">
              <h6 style="font-size: 14px">其他登录</h6>
              <div
                style="font-size: 22px"
                class="d-flex mt-3 justify-content-center"
              >
                <div @click="qq">
                  <svg style="cursor: pointer" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-QQ"></use>
                  </svg>
                </div>
                <div class="pl-4">
                  <svg style="cursor: pointer" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weibo"></use>
                  </svg>
                </div>
                <div class="pl-4" @click="wx = !wx">
                  <svg style="cursor: pointer" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weixin"></use>
                  </svg>
                </div>
                <div v-if="wx" class="wx">
                  <button class="close" @click="wx = false">x</button>
                  <img
                    class="mt-5"
                    src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFR7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyX3l5ejU3dEVlaTIxQmFMbmh2Y2sAAgTybJdfAwRYAgAA"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer mt-5">
      <ul class="mr-5 d-flex justify-content-center">
        <li
          style="cursor: pointer"
          class="pl-2"
          v-for="(item, index) in footer.about"
          :key="index"
        >
          {{ item | line }}
        </li>
      </ul>
      <ul class="mr-5 d-flex justify-content-center">
        <li
          style="cursor: pointer"
          class="pl-2 text-secondary"
          v-for="(item, index) in footer.blogroll"
          :key="index"
        >
          {{ item | line }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "./font/iconfont.js";
import popout from "./component/popout";
import signin from "./component/signIn";
import forgetPass from "./component/forgetPass";
export default {
  name: "Login",
  data() {
    return {
      wx: false,
    };
  },
  components: {
    signin,
    popout,
    forgetPass,
  },
  methods: {
    forgetClose(e) {
      this.$store.state.login.forget = e;
    },
    popoutClose(e) {
      this.$store.state.login.popupError.bounced = e;
    },
    signClose(e) {
      this.$store.state.login.register = e;
    },
    spacekey(e) {
      e.target.value = e.target.value.replace(/\s+/g, "");
    },
    qq() {
      window.location.href =
        "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100270989&response_type=code&redirect_uri=https%3A%2F%2Fpassport.csdn.net%2Faccount%2Flogin%3FpcAuthType%3Dqq%26state%3Dtest";
    },
    emailCode() {
      this.$store.state.login.loginActive = true;
    },
    account() {
      this.$store.state.login.loginActive = false;
    },
    // 点击获取验证码
    async getCode() {
      await this.$store.commit("login/getCode");
    },
    // 点击登录
    login() {
      this.$store.commit("login/login");
    },
    inputAccount() {
      this.$store.commit("login/inputAccount");
    },
    inputPwd() {
      this.$store.commit("login/inputPwd");
    },
    // 账号登录
    async loginForm() {
      await this.$store.commit("login/loginForm");
    },
  },
  filters: {
    line(value) {
      return value.replace(/#/g, " |");
    },
  },
  computed: {
    loginActive() {
      return this.$store.state.login.loginActive;
    },
    footer() {
      return this.$store.state.login.footer;
    },
  },
  mounted() {
    document.body.style.backgroundColor = "#F5F5F5";
  },
};
</script>
<style scoped lang="scss">
@import "./css/login";
@import "./font/iconfont";
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.btn:focus {
  box-shadow: none !important;
}
</style>
