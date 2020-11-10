<template>
  <div class="centent">
    <div v-if="$store.state.login.Info == ''">
      <span @click="jumpLogin" class="jumpLogin">您还没有登录，请先登录</span>
    </div>
    <div v-else>
      <div class="body" v-if="loading">
        <div class="box">
          <div class="loader-01"></div>
        </div>
      </div>

      <div class="accountStyle" v-if="numberUnits == 0">
        <div class="nameImg">
          <avatar></avatar>
        </div>
        <p class="usernames">{{ mineAccount.username }}</p>
        <p class="ModifyInformation">
          <button
            class="passwordStyle btn iconfont icon-drxx04"
            @click="modifyPassword"
            data-toggle="tooltip"
            data-placement="top"
            title="修改密码"
          ></button>
          <button
            class="information btn iconfont icon-xiugaixinxi"
            @click="information"
            data-toggle="tooltip"
            data-placement="top"
            title="修改信息"
          ></button>
        </p>

        <div class="content">
          <div class="PersonalModification">
            <p><span class="iconfont icon-xingbie"></span>{{ inputSex }}</p>
            <p>
              <span class="iconfont icon-shimingrenzheng"></span>{{ Verified }}
            </p>
            <p>
              <span class="iconfont icon-zhenshixingming"></span
              >{{ mineAccount.name }}
            </p>
            <p>
              <span class="iconfont icon-youxiang"></span
              >{{ mineAccount.account }}
            </p>
            <p>
              <span class="iconfont icon-shenfenzhenghao"></span
              ><span class="carNostyle">{{
                mineAccount.cardNo == "" ? "未认证" : mineAccount.cardNo
              }}</span>
            </p>
            <p>创建时间：{{ time }}</p>
            <!-- <div v-if="mineAccount.evaluation == ''">
            <span>个人评价：您还没有自己的评价</span>
          </div>
          <div
            class="evaluationTotal"
            v-else-if="mineAccount.evaluation !== ''"
          >
            <span class="evaluationName iconfont icon-pingjia"></span>
            <p class="Evaluation">
              {{ mineAccount.evaluation }}
            </p>
          </div> -->
          </div>
        </div>
      </div>
      <!-- v-else-if="numberUnits == 2" -->
      <Password
        :notice="mineAccount.password"
        @ctChanges="ctChanges"
        class="passwordClass"
        :class="passwordClass"
      ></Password>
      <modifomy
        class="modifomy"
        :class="modifomyStyle"
        @modifomyClick="modifomyClick"
      ></modifomy>
    </div>
  </div>
</template>
<script>
import Password from "./component/changePassword";
import avatar from "./component/avatar";
import modifomy from "./component/modifomy";
import "./iconfont/iconfont.css";
import { _axios } from "@/plugins/axios.js";
export default {
  name: "myAccount",
  components: {
    Password,
    avatar,
    modifomy,
  },

  data() {
    return {
      loading: false,
      modifomyStyle: "",
      numberUnits: 0,
      inputSex: "男",
      passwordClass: "",
      time: "",
      headersOption: {
        Authorization: `Bearer ${this.$store.state.login.token}`,
      },
      mineAccount: {
        // faceUrl:
        //   "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1561204147,3725236709&fm=26&gp=0.jpg",
        // username: "小男孩",
        // sex: 1,
        // isAuthentication: 1,
        // name: "李子亮",
        // cardNo: "111111111111111111",
        // cellphoneNumber: "15603107927",
        // password: "1409410318",
        // createdTime: "2020-10-22T10:29:11.842Z",
        // updatedTime: "2020-10-29T07:38:32.000Z",
      },
    };
  },
  methods: {
    jumpLogin() {
      this.$router.push("/login");
    },
    cancelModify() {
      this.numberUnits = 0;
    },

    information() {
      this.modifomyStyle = "modifomyStyle";
    },
    modifomyClick(e) {
      this.modifomyStyle = e;
      console.log(e);
    },
    ctChanges(e) {
      this.passwordClass = e;
    },
    modifyPassword() {
      this.passwordClass = "stylepassword";
    },
    async nameuser() {
      this.loading = true;
      let { data } = await _axios.get(
        `http://123.56.59.201/api/user/${this.$store.state.login.Info}`
      );
      this.mineAccount = data;
      this.dadwas();
      this.loading = false;
    },
    dadwas() {
      let timedate = new Date(this.mineAccount.createdTime);

      let timeFull = timedate.getFullYear();
      let timeMonth = timedate.getMonth();
      let timeDay = timedate.getDay();
      let timeHours = timedate.getHours();
      let timeMinut = timedate.getMinutes();
      let timeSeconds = timedate.getSeconds();
      this.time = `${timeFull}年 ${timeMonth}月${timeDay}日${timeHours}:${timeMinut}:${timeSeconds}`;
      this.mineAccount.cardNo = this.mineAccount.cardNo.substr(0, 14) + "****";
    },
  },
  computed: {
    Verified() {
      return this.mineAccount.isAuthentication == 0 ? "未实名" : "已实名";
    },
  },
  mounted() {
    console.log(this.$store.state.login.Info);
    this.nameuser();
  },
};
</script>
<style scoped>
.jumpLogin {
  color: red;
  cursor: pointer;
}
.body {
  background: rgb(50, 57, 67);
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: auto;

  box-sizing: border-box;
  font-family: sans-serif;
  color: rgba(200, 200, 200, 0.5);
  z-index: 999999;
  border: 1px solid #000;
}

/* body *,
body *:before,
body *:after {
  box-sizing: inherit;
} */

.box {
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 3px;
  font-size: 30px;
  color: rgba(255, 255, 255);
  padding: 1em;
  vertical-align: top;
  -webkit-transition: 0.3s color, 0.3s border;
  transition: 0.3s color, 0.3s border;
  margin-top: 20%;
}

.loader-01 {
  border: 0.2em dotted currentcolor;
  border-radius: 50%;
  -webkit-animation: 1s loader-01 linear infinite;
  animation: 1s loader-01 linear infinite;
}

@-webkit-keyframes loader-01 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader-01 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.modifomy {
  position: fixed;
  width: 100%;
  top: 0;
  visibility: hidden;
  opacity: 0;
  z-index: 30;
  transition: all 0.5s;
}
.StyleModifomy {
  opacity: 0;
  visibility: hidden;
}
.modifomyStyle {
  opacity: 1;
  visibility: initial;
}
.passwordClass {
  position: fixed;
  width: 100%;
  top: 0;
  visibility: hidden;
  opacity: 0;
  z-index: 30;
  transition: all 0.5s;
}
.passwordstyle {
  opacity: 0;
  visibility: hidden;
}
.stylepassword {
  opacity: 1;
  visibility: initial;
}
.accountStyle {
  width: 1080px;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 1.875rem;
  border: 1px solid #999;
  border-radius: 0.625rem;
}
.PersonalModification p {
  font-size: 1rem;
  color: #fff;
}
.evaluationTotal {
  margin-left: 3.1rem;
}
.content {
  margin-top: 1.6rem;
}
.content .PersonalModification {
  width: 80%;
  padding: 20px 0;
  margin: 0 auto;
  position: relative;
  border-radius: 0.625rem;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid rgb(217, 215, 255);
  background: rgb(144, 212, 146);
}
.content .PersonalModification p span {
  display: inline-block;
  width: 50px;
  text-align-last: center;
  margin-right: 10px;
  color: #fff;
  font-size: 18px;
}
.evaluationName {
  display: inline-block;
  width: 50px;
  text-align-last: justify;
  margin-right: 5px;
  position: absolute;
  top: 110px;
  text-align-last: center;
  color: #fff;
}
.content .PersonalModification .information {
  position: absolute;
  right: -18px;
  top: -16px;
}
.content .PersonalModification .passwordStyle {
  position: absolute;
  right: -18px;
  bottom: -16px;
  background: rgb(255, 246, 246);
}
.content .PersonalModification p .carNostyle {
  width: 180px;
  padding: 0;
  display: inline-block;
  text-align-last: left;
  font-size: 16px;
}
.content .PersonalModification > p {
  padding: 0 38px;
}
.accountStyle .usernames {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0.625rem 0;
}
.buttonstyle {
  width: 25rem;
  clear: both;
  margin-left: 14rem;
  padding-top: 1.25rem;
}
.Evaluation {
  width: 300px;
  display: inline-block;
  text-align: left;
  padding: 0.3125rem;
  margin-left: 55px;
}
.ModifyInformation {
  text-align: center;
}
.ModifyInformation button {
  font-size: 22px;
}
.stylemodify {
  border: 1px solid #f3f3f3;
  background: #f3f3f3;
  outline-color: #f3f3f3;
  border-bottom: 1px solid #000;
}
.stylemodifyJs {
  border: 1px solid red;
  background: #f3f3f3;
  outline-color: #f3f3f3;
}
.modify span {
  display: inline-block;
  width: 7.5rem;
  text-align-last: justify;
}
.modify p > .Numberpropmts {
  display: none;
}
.modify p > .Numberprompt {
  display: inline-block;
  width: 7.5rem;
  text-align: left;
  font-size: 0.75rem;
  color: red;
}
.Evaluatione {
  display: inline-block;
  width: 18.75rem;
  text-align: left;
  text-decoration: underline #83d838;
  padding: 0.3125rem;
  margin-left: 7.1875rem;
}
.Evaluatione textarea {
  font-size: 1rem;
  padding: 0.625rem;
}
.accountStyle .nameImg {
  text-align: center;
}
.accountStyle .nameImg img {
  width: 6.25rem;
  height: 6.25rem;
  margin-top: 1.25rem;
}
.buttonColor {
  background: #83d838;
  color: #fff;
  margin-top: 1.875rem;
  margin: 0 1.875rem;
}
.buttonCancel {
  background: #83d838;
  color: #fff;
  margin-top: 1.875rem;
  margin: 0 1.25rem;
}
</style>