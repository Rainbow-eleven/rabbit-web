<template>
  <div>
    <popout
      v-if="bounced"
      :bounced="bounced"
      :bouncedInfo="bouncedInfo"
      @changePopout="popoutClose"
    ></popout>
    <div class="forgetPass animate__animated animate__flipInX">
      <div class="text-right">
        <button class="btn btn-success" @click="close">x</button>
      </div>
      <div class="text-center mt-2">
        <h3 class="mb-3">忘记密码？</h3>
        <span>请在下面输入您的电子邮件</span>
      </div>
      <div class="info" v-if="isNext">
        <div class="mt-5 inputItem">
          <div class="infpEmail float-left">
            <input
              type="text"
              placeholder="邮箱账号"
              v-model="forgetForm.account"
            />
          </div>
        </div>
        <div class="mt-3 inputItemT">
          <div class="infpEmail float-left">
            <input type="text" placeholder="验证码" v-model="forgetForm.code" />
          </div>
          <button
            type="button"
            @click="getCode"
            class="btn btn-outline-primary w-10"
            v-show="captchaTime"
          >
            获取验证码
          </button>
          <button
            type="button"
            class="btn btn-outline-primary w-10"
            v-show="!captchaTime"
          >
            {{ autoTime }}秒后重置
          </button>
        </div>
        <div class="userSign mt-4 text-center w-100">
          <input
            type="button"
            class="btn btn-success"
            value="下一步"
            @click="next"
          />
        </div>
      </div>
      <div class="info" v-else>
        <div class="mt-5 inputItem">
          <div class="infpEmail float-left">
            <input
              type="password"
              placeholder="新密码"
              v-model="forgetForm.newPass"
            />
          </div>
        </div>
        <div class="userSign mt-5 text-center w-100">
          <input
            type="button"
            class="btn btn-success mr-5"
            value="确认修改"
            @click="alter"
          />
          <input
            type="button"
            class="btn btn-success"
            value="取消"
            @click="cancel"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import popout from "./popout";
export default {
  props: ["forgetPass"],
  components: {
    popout,
  },
  data() {
    return {
      forgetForm: {
        account: "",
        code: "",
        newPass: "",
      },
      bounced: false,
      forgetClose: true,
      captchaTime: true,
      autoTime: 0,
      isNext: true,
    };
  },
  methods: {
    // 确认修改
    async alter() {
      let { data } = await this.$axios.get(
        `user/account/${this.forgetForm.account}`
      );
      await this.$axios
        .post("/user/updatePass", {
          id: data.data.id,
          pass: this.forgetForm.newPass,
        })
        .then((data) => {
          console.log(data);
          this.close();
          alert("修改成功");
        });
    },
    cancel() {
      this.close();
    },
    async getCode() {
      if (this.forgetForm.account !== "") {
        let { data } = await this.$axios.get(
          `/email/${this.forgetForm.account}`
        );
        sessionStorage.setItem("forgetCode", data.data.code);
        this.captchaTime = false;
        this.autoTime = 30;
        var autoTimeTimer = setInterval(() => {
          this.autoTime--;
          if (this.autoTime <= 0) {
            this.captchaTime = true;
            clearInterval(autoTimeTimer);
          }
        }, 1000);
      } else {
        alert("邮箱为空");
      }
    },
    async next() {
      let code = sessionStorage.getItem("forgetCode");
      if (this.forgetForm.code == code) {
        this.isNext = !this.isNext;
      } else {
        if (this.forgetForm.account == "") {
          alert("邮箱为空");
        } else {
          alert(this.forgetForm.code == "" ? "验证码为空" : "验证码不对");
        }
      }
    },
    close() {
      this.forgetClose = false;
      this.$emit("changeClose", this.forgetClose);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../css/forgetPass.scss";
</style>