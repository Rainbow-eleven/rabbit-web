<template>
  <div class="centent">
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
            <span class="iconfont icon-shouji"></span
            >{{ mineAccount.cellphoneNumber }}
          </p>
          <p>
            <span class="iconfont icon-shenfenzhenghao"></span
            ><span class="carNostyle">{{ mineAccount.cardNo }}</span>
          </p>
          <p>创建时间：{{ time }}</p>
          <div v-if="mineAccount.evaluation == ''">
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
          </div>
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
      v-bind:mineAccount="mineAccount"
    ></modifomy>
  </div>
</template>
<script>
import Password from "./component/changePassword";
import avatar from "./component/avatar";
import modifomy from "./component/modifomy";
import "./iconfont/iconfont.css";
export default {
  name: "myAccount",
  components: {
    Password,
    avatar,
    modifomy,
  },

  data() {
    return {
      modifomyStyle: "",
      numberUnits: 0,
      inputSex: "男",
      passwordClass: "",
      time: "",
      mineAccount: {
        faceUrl:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1561204147,3725236709&fm=26&gp=0.jpg",
        username: "小男孩",
        sex: 1,
        evaluation: "这是一个非常牛逼的人爱我大家哦啊我等你哦啊都看看看单位可",
        isAuthentication: 1,
        name: "李子亮",
        cardNo: "111111111111111111",
        cellphoneNumber: "15603107927",
        password: "1409410318",
        createdTime: "2020-10-22T10:29:11.842Z",
        updatedTime: "2020-10-29T07:38:32.000Z",
      },
    };
  },
  methods: {
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
      let { data } = await this.$axios.get(`/user/1`);
      console.log(data);
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
    },
  },
  computed: {
    Verified() {
      return this.mineAccount.isAuthentication == 0 ? "否" : "是";
    },
  },
  mounted() {
    this.nameuser();
    this.dadwas();
  },
};
</script>
<style scoped>
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
  border-top: 1px solid #fff;
  text-align: left;
  background: rgb(157, 231, 170);
  padding-bottom: 1.875rem;
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
  padding: 0 50px;
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