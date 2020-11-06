<template>
  <div class="modifyInformation">
    <div class="modify content rounded">
      <p>
        <span class="iconfont icon-yonghu"></span>
        <input
          type="text"
          v-model="modifyName"
          @blur="username"
          :class="modifystylename"
          @keyup="spacekey"
          class="shadow-sm p-1 bg-black rounded"
          placeholder="用户昵称"
        />
        <span v-bind:class="Numberpropmte">请输入用户名</span>
      </p>
      <p>
        <span class="iconfont icon-xingbie"></span>
        <input type="radio" v-model="modifysex" value="1" name="sex" />男
        <input type="radio" v-model="modifysex" value="0" name="sex" />女
      </p>
      <p>
        <span
          class="iconfont icon-shimingrenzheng1"
          v-if="mineAccount.isAuthentication == 1"
        ></span>
        <span
          class="iconfont icon-weishimingrenzheng"
          v-else-if="mineAccount.isAuthentication === 0"
        ></span>
        {{ Verified }}
      </p>
      <p>
        <span class="iconfont icon-zhenshixingming"></span>
        <input
          type="text"
          v-model="modifyisname"
          class="stylemodify p-1 bg-black rounded"
          @keyup="spacekey"
          placeholder="姓名"
        />
      </p>
      <p>
        <span class="iconfont icon-shouji"></span>
        <input
          type="number"
          v-model="modifyNumber"
          :class="stylemodify"
          oninput="if(value.length>11) value=value.slice(0,11)"
          @blur="phone"
          class="shadow-sm p-1 bg-black rounded"
          placeholder="手机号码"
        />
        <span :class="Numberpropmts">手机号输入不正确</span>
      </p>
      <p>
        <span class="iconfont icon-shenfenzhenghao"></span
        ><input
          type="number"
          v-model="modifycardNo"
          :class="stylemodifycard"
          oninput="if(value.length>18) value=value.slice(0,18)"
          @blur="cardNo"
          class="p-1 bg-black rounded"
          placeholder="身份证号"
        /><span :class="Numberpropmt">身份证号是十八位</span>
      </p>
      <div class="evaluationTotal">
        <span class="evaluationName iconfont icon-pingjia"></span>
        <p class="Evaluatione">
          <textarea
            cols="50"
            rows="2"
            v-model="dodifyEvaluation"
            oninput="if(value.length>300) value=value.slice(0,300)"
            class="shadow-sm p-1 bg-black rounded"
          ></textarea>
        </p>
      </div>
      <button class="btn btn-default bg-primary modifys" @click="changes">
        确认修改
      </button>
      <button class="buttonCancel cancel" @click="cancelModify">
        <span class="iconfont icon-cuohao"></span>
      </button>
    </div>
  </div>
</template>
<script>
import ".././iconfont/iconfont.css";
export default {
  name: "modifomy",
  props: ["mineAccount"], //传值
  data() {
    return {
      dodifyEvaluation: this.mineAccount.evaluation,
      modifysex: this.mineAccount.sex,
      modifyisname: this.mineAccount.name,
      modifycardNo: this.mineAccount.cardNo,
      modifyNumber: this.mineAccount.cellphoneNumber,
      modifyName: this.mineAccount.username,
      StyleModifomy: "StyleModifomy",
      Numberpropmte: "Numberpropmts",
      modifystylename: "stylemodify",
      Numberpropmts: "Numberpropmts",
      Numberpropmt: "Numberpropmts",
      stylemodifycard: "stylemodify",
      stylemodify: "stylemodify",
    };
  },
  methods: {
    spacekey(e) {
      e.target.value = e.target.value.replace(/\s+/g, "");
    },
    phone() {
      if (this.modifyNumber.length == 11) {
        this.Numberpropmts = "Numberpropmts";
        this.stylemodify = "stylemodify";
      } else {
        this.stylemodify = "stylemodifyJs";
        this.Numberpropmts = "Numberprompt";
        this.numberUnits = 1;
      }
    },
    cardNo() {
      if (this.modifycardNo.length == 18 || this.modifycardNo.length == 0) {
        this.stylemodifycard = "stylemodify";
        this.Numberpropmt = "Numberpropmts";
      } else {
        this.stylemodifycard = "stylemodifyJs";
        this.Numberpropmt = "Numberprompt";
        this.numberUnits = 1;
      }
    },
    username() {
      if (this.modifyName.length == 0) {
        this.modifystylename = "stylemodifyJs";
        this.Numberpropmte = "Numberprompt";
        this.numberUnits = 1;
      } else {
        this.modifystylename = "stylemodify";
        this.Numberpropmte = "Numberpropmts";
      }
    },
    cancelModify() {
      this.$emit("modifomyClick", "StyleModifomy");
    },
    changes() {
      if (this.modifyName == " ") {
        this.username();
      } else if (this.modifyNumber.length == 11) {
        if (this.modifycardNo.length == 18 || this.modifycardNo.length == 0) {
          this.assignment();
          this.cancelModify();
        } else {
          this.cardNo();
        }
      } else {
        this.phone();
      }
    },
    async assignment() {
      this.numberUnits = 0;

      if (this.mineAccount.sex == 0) {
        this.inputSex = "男";
        this.mineAccount.sex = 0;
      } else {
        this.inputSex = "女";
        this.mineAccount.sex = 1;
      }
      this.mineAccount.username = this.modifyName;
      this.mineAccount.evaluation = this.dodifyEvaluation;
      this.mineAccount.sex = this.modifysex;
      this.mineAccount.name = this.modifyisname;
      this.mineAccount.cardNo = this.modifycardNo;
      this.mineAccount.cellphoneNumber = this.modifyNumber;
      console.log(this.mineAccount);
      if (this.modifycardNo == "") {
        this.mineAccount.isAuthentication = 0;
        console.log(this.mineAccount.cardNo);
      }
      await this.$axios.put(`/user/${this.id}`, this.mineAccount);
    },
  },
  computed: {
    Verified() {
      return this.mineAccount.isAuthentication == 0
        ? "未实名认证"
        : "已实名认证";
    },
  },
};
</script>
<style scoped>
.modifyInformation {
  width: 100%;
  height: 100%;
  background: url(../img/modify.jpg);
  background-size: 100% 100%;
  border-top: 1px solid #000;
}
.content p input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: white;
  font-size: 12px;
}
.cancel {
  position: absolute;
  top: 0;
  right: 0;
}
.modifys {
  width: 18.75rem;
  color: #fff;
  height: 50px;
  margin-bottom: 0.625rem;
}
.Evaluatione {
  font-size: 12px;
}
.Evaluatione textarea {
  background: none;
  color: #fff;
  border: 1px solid #fff;
}
.content {
  width: 40%;
  background: rgba(123, 133, 187, 0.5);
  color: #fff;
  padding: 20px 0;
  margin: auto;
  margin-top: 7rem;
  position: relative;
}
.content > p {
  width: 400px;
  text-align: left;
  margin: 1.25rem auto;
}
.content p input {
  font-size: 14px;
  background: none;
  color: #fff;
}
.content p > .Numberpropmts {
  display: none;
}
.content p span {
  display: inline-block;
  width: 3.125rem;
  text-align: center;
  font-size: 20px;
}
.evaluationTotal {
  width: 400px;
  display: flex;
  margin: 1.25rem auto;
}
.evaluationName {
  display: inline-block;
  margin: 0 14px 0 16px;
  font-size: 20px;
}
.Numberprompt {
  display: inline-block;
  width: 7.5rem;
  text-align: left;
  font-size: 0.75rem;
  color: red;
}
.modify p > .Numberprompt {
  display: inline-block;
  width: 7.5rem;
  text-align: left;
  font-size: 0.75rem;
  color: red;
}
.stylemodify {
  border: 1px solid #f3f3f3;
  outline-color: royalblue;
}
.stylemodifyJs {
  border: 1px solid red;
  background: #f3f3f3;
  outline-color: #f3f3f3;
}
.buttonCancel {
  width: 30px;
  height: 30px;
  background: none;
  border: none;
}
.buttonCancel span {
  color: #fff;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  display: inline-block;
  transition: all 0.3s;
  transform: rotate(0deg);
}
.buttonCancel:hover span {
  transform: rotate(180deg);
  font-size: 20px;
}
</style>