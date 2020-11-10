<template>
  <div>
    <popout
      v-if="bounced"
      :bounced="bounced"
      :bouncedInfo="bouncedInfo"
      @changePopout="popoutClose"
    ></popout>
    <div class="register animate__animated animate__flipInX">
      <div class="text-right">
        <button class="btn btn-success" @click="close">x</button>
      </div>
      <div class="info">
        <div class="mt-3 inputItem">
          <div class="float-left">邮箱账号：</div>
          <div class="infpEmail float-left">
            <input
              type="text"
              placeholder="邮箱账号"
              v-model="signForm.account"
            />
          </div>
        </div>
        <div class="mt-3 inputItem">
          <div class="float-left">账号密码：</div>
          <div class="infpEmail float-left">
            <input
              type="password"
              placeholder="账号密码"
              v-model="signForm.password"
            />
          </div>
        </div>
        <div class="mt-3 inputItem">
          <div class="float-left">账号昵称：</div>
          <div class="infpEmail float-left">
            <input
              type="text"
              placeholder="账号昵称"
              v-model="signForm.username"
            />
          </div>
        </div>
        <div class="mt-3 inputItem">
          <div class="float-left">用户名称：</div>
          <div class="infpEmail float-left">
            <input type="text" placeholder="用户昵称" v-model="signForm.name" />
          </div>
        </div>
      </div>
      <div class="userSign mt-4 text-center w-100">
        <input
          type="button"
          class="btn btn-success"
          value="注册"
          @click="signBtn"
        />
      </div>
    </div>
  </div>
</template>
<script>
import popout from "./popout";
export default {
  props: ["register"],
  components: {
    popout,
  },
  data() {
    return {
      signClose: this.register,
      signForm: {
        account: "",
        password: "",
        username: "",
        name: "",
      },
      bounced: false,
      bouncedInfo: "信息为空",
    };
  },
  methods: {
    popoutClose(e) {
      this.bounced = e;
    },
    async signBtn() {
      if (
        this.signForm.account == "" ||
        this.signForm.password == "" ||
        this.signForm.username == "" ||
        this.signForm.name == ""
      ) {
        this.bounced = true;
        return false;
      } else {
        await this.$axios
          .post("/user", this.signForm)
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    close() {
      this.signClose = false;
      this.$emit("changeClose", this.signClose);
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
@import "../css/sign.scss";
</style>