<template>
  <div class="prassword">
    <div class="prasswordStyle">
      <p>
        <span class="styleprass">旧密码：</span>
        <input
          type="text"
          v-model="oldPassword"
          placeholder="若包含字母,请注意区分大小写"
          onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
          maxlength="18"
          class="shadow-none p-3 rounded"
        />
      </p>
      <p>
        <span class="styleprass">新密码：</span>
        <input
          type="text"
          v-model="newPassword"
          placeholder="8-16位"
          onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
          maxlength="18"
          @blur="matchjs"
          class="shadow-none p-3 rounded"
        />
      </p>
      <p>
        <span class="styleprass">确认密码：</span>
        <input
          type="text"
          v-model="Password"
          placeholder="8-16位"
          onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
          maxlength="18"
          @blur="matchjs"
          @keydown.enter="confirmPassword"
          class="shadow-none p-3 rounded"
        /><span :class="matchs">密码与上面不符</span>
      </p>
      <button class="cancelModification" @click="cancelEdit">
        <span class="iconfont icon-cuohao Modification"></span>
      </button>
      <button class="confirmPassword" @click="confirmPassword">
        确认修改密码
      </button>
    </div>
  </div>
</template>
<script>
import ".././iconfont/iconfont.css";
export default {
  name: "changePassword",
  passPassword: "password",
  props: ["notice"],
  data() {
    return {
      matchs: "matchstyle",
      passwordname: this.notice,
      oldPassword: "",
      newPassword: "",
      Password: "",
    };
  },
  methods: {
    confirmPassword() {
      if (this.oldPassword == this.passwordname) {
        //   判断新密码位数是否大于或等于8   旧密码不能为空
        if (this.Password >= 8 && this.newPassword !== "") {
          // 判断两次输入的旧密码是否相等
          if (this.newPassword == this.Password) {
            this.$emit("ctChanges", 0);
            alert("密码修改成功");
          } else {
            alert("您两次输入的密码不一样");
          }
        } else {
          alert("你输入的新密码不符合正确格式");
        }
      } else if (this.oldPassword == "") {
        alert("请输入旧密码");
      } else {
        alert("旧密码错误，请重试");
        console.log(this.passwordname);
      }
    },
    cancelEdit() {
      this.$emit("ctChanges", 0);
    },
    matchjs() {
      if (this.newPassword > 8 && this.newPassword == this.Password) {
        this.matchs = "matchstyle";
      } else {
        this.matchs = "match";
      }
    },
  },
};
</script>
<style scoped>
.styleprass {
  display: inline-block;
  width: 90px;
  text-align-last: justify;
  color: #fff;
}
.prassword {
  width: 100%;
  height: 100%;
  background: url(../img/modify.jpg);
  background-size: 100% 100%;
}
.cancelModification .Modification {
  display: inline-block;
  transition: all 0.3s;
  transform: rotate(0deg);
}
.cancelModification:hover .Modification {
  transform: rotate(360deg);
  color: #fff;
  font-size: 1.375rem;
}
.prasswordStyle p > .match {
  display: inline-block;
  width: 200px;
  position: absolute;
  top: 200px;
  left: 120px;
  color: rgb(255, 20, 20);
  font-size: 12px;
}
.matchstyle {
  display: none;
}
.cancelModification {
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background: 0;
}
.prasswordStyle {
  width: 500px;
  text-align: left;
  margin: 0 auto;
  position: relative;
  margin-top: 1.25rem;
  background: rgba(123, 133, 187, 0.5);
  padding: 60px;
  margin-top: 13rem;
  text-align: center;
}
.prassword input {
  width: 240px;
  height: 30px;
  font-size: 12px;
  padding-left: 0.3125rem;
  border: 0;
  background: none;
  outline-color: #f3f3f3;
  border: 1px solid #fff;
  color: #fff;
}
.prassword input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: white;
  font-size: 12px;
}
.confirmPassword {
  width: 18.75rem;
  height: 40px;
  font-size: 16px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  margin: 0 1.25rem;
  border-radius: 0.3125rem;
  outline-color: #f3f3f3;
  margin-top: 30px;
  transition: all 0.8s;
  text-align-last: justify;
  padding: 0 90px;
}
.confirmPassword:hover {
  width: 18.75rem;
  height: 40px;
  font-size: 16px;
  border: 1px solid #fff;
  background: #fff;
  font-weight: bold;
  color: rgba(3, 13, 150);
  margin: 0 1.25rem;
  border-radius: 0.3125rem;
  margin-top: 30px;
}
</style>