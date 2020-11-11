<template>
  <div class="modifyInformation">
    <div class="modify content rounded">
      <p>
        <span class="iconfont icon-youxiang"></span>{{ mineAccount.account }}
      </p>
      <p>
        <span class="iconfont icon-yonghu"></span>
        <input
          type="text"
          v-model="mineAccount.username"
          @blur="username"
          :class="modifystylename"
          @keyup="spacekey"
          class="shadow-sm p-1 bg-black rounded"
          placeholder="用户昵称"
        />
        <span v-bind:class="Numberpropmte">请输入用户名</span>
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
          v-model="mineAccount.name"
          class="stylemodify p-1 bg-black rounded"
          @keyup="spacekey"
          placeholder="姓名"
        />
      </p>
      <p>
        <span class="iconfont icon-shenfenzhenghao"></span
        ><input
          type="number"
          v-model="mineAccount.cardNo"
          :class="stylemodifycard"
          oninput="if(value.length>18) value=value.slice(0,18)"
          @blur="cardNo"
          class="p-1 bg-black rounded"
          placeholder="身份证号"
        /><span :class="Numberpropmt">身份证号是十八位</span>
      </p>

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
  data() {
    return {
      StyleModifomy: "StyleModifomy",
      Numberpropmte: "Numberpropmts",
      modifystylename: "stylemodify",
      Numberpropmts: "Numberpropmts",
      Numberpropmt: "Numberpropmts",
      stylemodifycard: "stylemodify",
      stylemodify: "stylemodify",
      mineAccount: {},
    };
  },
  methods: {
    spacekey(e) {
      e.target.value = e.target.value.replace(/\s+/g, "");
    },
    phone() {
      if (this.mineAccount.cellphoneNumber.length == 11) {
        this.Numberpropmts = "Numberpropmts";
        this.stylemodify = "stylemodify";
      } else {
        this.stylemodify = "stylemodifyJs";
        this.Numberpropmts = "Numberprompt";
        this.numberUnits = 1;
      }
    },
    cardNo() {
      if (
        this.mineAccount.cardNo.length == 18 ||
        this.mineAccount.cardNo.length == 0
      ) {
        this.stylemodifycard = "stylemodify";
        this.Numberpropmt = "Numberpropmts";
      } else {
        this.stylemodifycard = "stylemodifyJs";
        this.Numberpropmt = "Numberprompt";
        this.numberUnits = 1;
      }
    },
    username() {
      if (this.mineAccount.username.length == 0) {
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
    async changes() {
      if (this.mineAccount.username == " ") {
        this.username();
      } else {
        if (
          this.mineAccount.cardNo.length == 18 ||
          this.mineAccount.cardNo.length == 0
        ) {
          window.location.reload();
          this.assignment();
          this.cancelModify();
          delete this.mineAccount.createdTime;
          delete this.mineAccount.updatedTime;
          delete this.mineAccount.sex;
          await this.$axios.put(
            `http://123.56.59.201/api/user/${this.$store.state.login.infoId}`,
            this.mineAccount
          );
        } else {
          this.cardNo();
        }
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
      console.log(this.mineAccount);
      if (this.mineAccount.cardNo == "") {
        this.mineAccount.isAuthentication = 0;
        console.log(this.mineAccount.cardNo);
      }
    },
    async nameuser() {
      let { data } = await this.$axios.get(
        `/user/${this.$store.state.login.infoId}`
      );
      console.log(data);
      this.mineAccount = data;
    },
  },
  computed: {
    Verified() {
      return this.mineAccount.isAuthentication == 0 ? "未认证" : "已认证";
    },
  },
  created() {
    this.nameuser();
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
  width: 280px;
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