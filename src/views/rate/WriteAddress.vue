<template>
  <!--地址  -->
  <div class="body">
    <div class="box">
      <div class="nav">
        <p>
          <span>维修评价 ><a href="" @click="returnHome">填写信息</a> </span>
        </p>
      </div>
      <div class="main">
        <!-- 左边手机信息部分 -->
        <div class="addressinfo">
          <div class="infobox">
            <ul>
              <li>
                <span>我的地址</span
                ><input
                  type="text"
                  v-model="Information[0].adress"
                  placeholder="请输入你的地址."
                  @blur="address"
                />
                <gudu :show="judge[0].checkingFive">
                  <p id="noticeTFive">
                    请输入你的地址
                  </p></gudu
                >
              </li>
              <li>
                <span>预约时间</span>
                <select>
                  <option>{{ Information[0].appintDate }}</option>
                  <option
                    v-for="(item, index) in phoneInfo[0].appintDate"
                    :key="index"
                    >{{ item }}</option
                  >
                </select>
              </li>
              <li>
                <span>邮箱地址</span>
                <input
                  type="email"
                  placeholder="请输入邮箱"
                  v-model="Information[0].email"
                  @blur="email"
                />
                <button
                  class="codebutton btn  btn-secondary"
                  @click="VerificationCode"
                >
                  获取验证码
                </button>
                <gudu :show="judge[0].checking">
                  <p id="notice">邮箱格式不正确</p>
                </gudu>
                <gudu :show="judge[0].checkingOne">
                  <p id="noticeone">
                    邮箱不能为空
                  </p>
                </gudu>
                <gudu :show="judge[0].checkingThree">
                  <p id="noticeThree">
                    请先输入你的邮箱
                  </p>
                </gudu>
              </li>
              <li>
                <span>验证码</span
                ><input
                  type="text"
                  :placeholder="phoneInfo[0].appintDate[0]"
                  v-model="phoneInfo[0].VerificationCode"
                />
                <p v-show="judge[0].checkingTwo" id="noticetwo">
                  验证码错误
                </p>
              </li>
            </ul>
            <div class="buttoninfo">
              <gudu :show="judge[0].checkingFour">
                <p id="noticeFour">
                  请检查信息是否有误
                </p>
              </gudu>
              <button class="btn submitbutton" @click="submit">
                提交订单
              </button>
              <p class="infoboxText">
                提交订单表示同意 <a href="#">《用户协议》</a> 及<a href="#"
                  >《隐私政策》</a
                >
                并确认机器来源合法
              </p>
            </div>
          </div>
        </div>
        <!-- 右边估价部分 -->
        <div class="Checklist">
          <recoverList></recoverList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import recoverList from "../rate/component/recoverList.vue";
import gudu from "../rate/component/gudu";
export default {
  name: "WriteAddress",
  data() {
    return {
      judge: [
        {
          checking: false,
          checkingOne: false,
          checkingTwo: false,
          checkingThree: false,
          checkingFour: false,
          checkingFive: false,
        },
      ],
      phoneInfo: [
        {
          VerificationCode: "", //输入的验证码
          code: "",
          email: "",
          adress: "",
          appintDate: [],
        },
      ],
      Information: [
        {

        },
      ],
    };
  },
  methods: {
    // 地址
    address() {
      let pushAddress = this.Information[0].adress;
      if (pushAddress == "") {
        this.judge[0].checkingFive = true;
      } else {
        this.judge[0].checkingFive = false;
      }
    },
    // 请求
    async fimdStudet() {
      const { data } = await this.$axios.get(`/appointment/1`);
      this.Information[0] = data.data.appointments[0];
      this.time();
    },
    time() {
      let time = new Date().getTime();
      let day = 1000 * 60 * 60 * 24;
      let arr = [];
      for (let i = 0; i < 7; i++) {
        if (i === 0) {
          arr[i] = time;
        } else {
          let times = i * day + time;
          arr[i] = times;
        }
      }
      arr.map((item, i) => {
        let weekday = [
          "( 周 日 )",
          "( 周 一 )",
          "( 周 二 )",
          "( 周 三 )",
          "( 周 四 )",
          "( 周 五 )",
          "( 周 六 )",
        ];
        let iteme = new Date(item);
        let month = iteme.getMonth() + 1; //月
        let day = iteme.getDate(); //日
        let Hours = iteme.getHours(); //小时
        let Minutes = iteme.getMinutes(); //分钟
        if (Hours < 10) Hours = "0" + Hours;
        if (Minutes < 10) Minutes = "0" + Minutes;
        let timeValue = "" + (Hours >= 12 ? "下午 " : "上午 "); //上午下午
        let days = weekday[iteme.getDay()]; //周
        let week =
          month +
          " 月 " +
          day +
          "日" +
          days +
          " " +
          timeValue +
          "（ " +
          Hours +
          ":" +
          Minutes +
          " )";
        arr[i] = week;
      });
      this.phoneInfo[0].appintDate = arr;
    },
    email() {
      let value = this.Information[0].email;
      let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
      if (value == "") {
        this.judge[0].checkingOne = true;
      } else {
        this.judge[0].checkingOne = false;
        if (re.test(value)) {
          this.judge[0].checking = false;
          this.judge[0].checkingOne = false;
        } else {
          this.judge[0].checking = true;
          this.judge[0].checkingOne = false;
        }
      }
    },
    // 验证码
    VerificationCode() {
      let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
      let value = this.Information[0].email;
      if (value == "") {
        this.judge[0].checkingThree = true;
      } else {
        if (re.test(value)) {
          this.judge[0].checkingThree = false;
          this.judge[0].checkingFour = false;
          this.emailGet(); //验证码
        }
      }
    },
    //发送验证码
    async emailGet() {
      let { data } = await this.$axios.get(
        `/email/${this.Information[0].email}`
      );
      localStorage.setItem("code", data.data.code);
      this.phoneInfo[0].code = localStorage.getItem("code", data.data.code);
      console.log(this.phoneInfo[0].code);
    },
    // 提交
    submit() {
      let value = this.Information[0].email;
      console.log(this.phoneInfo[0].VerificationCode);
      if (this.phoneInfo[0].VerificationCode == "") {
        // 时间 和验证码为空
        this.judge[0].checkingFour = true;
      } else if (this.phoneInfo[0].VerificationCode == this.phoneInfo[0].code) {
        this.$router.replace("/Offer");
        //验证码错误
      } else {
        this.judge[0].checkingTwo = true;
      }
      if (value == "") {
        //邮箱为空
        this.judge[0].checkingThree = true;
      }
    },
    // 首页跳转
    returnHome() {
      this.$router.push("/list");
    },
  },
  created() {
    this.fimdStudet();
  },
  mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
  components: {
    recoverList,
    gudu,
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
.body {
  width: 100%;
  background: #f5f5f5;
  border: solid white;
}
.box {
  width: 1080px;
  margin: 0 auto;
}
.nav {
  margin: 20px 0;
}
.nav a {
  color: black;
  display: inline-block;
  border-bottom: 2px solid #76bb38;
  text-indent: 8px;
}
.main {
  width: 1080px;
  display: flex;
  justify-content: space-between;
}
.addressinfo {
  width: 730px;
  background: white;
}
.addressinfo .infobox {
  margin: 0 auto;
  width: 90%;
}
.infobox li {
  list-style: none;
  margin: 50px 10px;
}
.infobox li span {
  display: inline-block;
  width: 100px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.infobox .codebutton {
  padding: 5px 10px;
  font-size: 16px;
  margin-left: 20px;
  background: #eeeeee;
  color: #ababab;
  border: solid #d2d2d2 1px;
}
.infobox .buttoninfo {
  margin-left: 110px;
}
.infobox .submitbutton {
  padding: 5px 50px;
  background: #83d838;
  margin: 30px 0;
  color: white;
}
.infobox .infoboxText {
  font-size: 14px;
}
.infobox a {
  color: #ff9679;
}
.infobox li input {
  width: 350px;
  height: 38px;
  border: #d2d2d2 1px solid;
  font-size: 16px;
  text-indent: 0.5rem;
}
input::-webkit-input-placeholder {
  color: #aab2bd;
  font-size: 14px;
  text-indent: 12px;
}
#notice,
#noticeone,
#noticetwo,
#noticeThree,
#noticeTFive {
  color: red;
  line-height: 30px;
  font-size: 16px;
  margin: 20px 0;
  margin-left: 100px;
}
#noticeFour {
  color: red;
  line-height: 30px;
  font-size: 16px;
}
select {
  width: 350px;
  height: 38px;
  border: 1px solid #d2d2d2;
  color: black;
}
</style>
