<template>
  <div class="body">
    <div class="box">
      <!-- 故障 -->
      <div v-if="checking" class="loading">
        <img src="../../assets/css/img/webp.webp" alt="" />
      </div>
      <div class="nav">
        <p>
          <a href="" @click="returnHome">首页</a>
          <span>>二手平板电脑维修>二手苹果平板电脑维修>二手ipad...</span>
        </p>
      </div>
      <div class="mian">
        <div class="info">
          <PhoneInfo></PhoneInfo>
          <AppleFate :data="phoneInfone"></AppleFate>
          <QRcode :data="phoneInfone"></QRcode>
        </div>
        <!-- 右边故障列表信息 -->
        <div class="FailureDetails">
          <!-- 标题 -->
          <div class="Failureinfo">
            <div>
              <h5>故障情况</h5>
            </div>
            <!-- 故障内容列表 -->
            <div class="Buttonlist">
              <ul>
                <li
                  v-for="(list, index) in phoneInfo[0].valueinfo"
                  :key="index"
                >
                  <input
                    type="button"
                    class="btn btn-light text-wrap btnstyle"
                    :value="list.title"
                    :class="list.count == 0 ? '' : 'btnstyle'"
                    @click="ass(index)"
                  />
                </li>
              </ul>
            </div>
            <div class="btninfo">
              <gudu :show="phoneInfo[0].check">
                <p class="opt">请选择一个内容</p>
              </gudu>
              <button
                type="button"
                class="btn btn-success submit"
                @click="submit"
              >
                请填写详细信息
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PhoneInfo from "../rate/component/PhoneInfo.vue";
import QRcode from "../rate/component/QRcode.vue";
import AppleFate from "../rate/component/AppleFate.vue";
import gudu from "../rate/component/gudu";
import "../iconfont/iconfont.css";
import { _axios } from "@/plugins/axios.js";
export default {
  name: "FaultState",
  data() {
    return {
      checking: true,
      phoneInfone: [
        {
          modelId: "",
          title: " ",
          isHint: "0",
          hintTitle: "",
          hintInfo: " ",
          hintImg: "",
          maintainTopPrice: 0,
        },
      ],
      phoneInfo: [
        {
          check: false,
          valueinfo: [],
        },
      ],
    };
  },
  methods: {
    async fimdStudet() {
      const { data } = await _axios.get(`/malfunction`);
      this.phoneInfo[0].valueinfo = data.data;
      this.checking = false;
      let i = 0;
      this.phoneInfo[0].valueinfo.map((item) => {
        let valueinfo = {
          ...item,
        };
        var key = "count";
        var value = 0;
        var keyone = "counts";
        var valueone = 0;
        valueinfo[key] = value;
        valueinfo[keyone] = valueone;
        this.phoneInfo[0].valueinfo[i++] = valueinfo;
      });
    },
    async aee(index) {
      const { data } = await _axios.get(`/malfunction/${++index}`);
      this.phoneInfone[0] = data.data;
      localStorage.setItem("info", JSON.stringify(this.phoneInfone[0]));
      localStorage.setItem("priceinfo", this.phoneInfone[0].maintainTopPrice);
    },
    async ass(index) {
      this.aee(index);
      this.phoneInfo[0].valueinfo[index].counts++;
      if (this.phoneInfo[0].valueinfo[index].counts % 2 == 0) {
        this.phoneInfo[0].valueinfo[index].count = 0;
      } else {
        for (let i = 0; i < this.phoneInfo[0].valueinfo.length; i++) {
          this.phoneInfo[0].valueinfo[i].count = 0;
        }
        this.phoneInfo[0].valueinfo[index].count = 1;
      }
    },
    submit() {
      let countt = 0;
      this.phoneInfo[0].valueinfo.map((item) => {
        if (item.count === 1) {
          countt++;
        }
      });
      if (countt < 1) {
        this.phoneInfo[0].check = !this.phoneInfo[0].check;
      } else {
        this.$router.replace("/MaintainAssess");
      }
    },
    returnHome() {
      this.$router.replace("/index");
    },
  },
  components: {
    PhoneInfo,
    AppleFate,
    QRcode,
    gudu,
  },
  created() {
    this.fimdStudet();
    localStorage.removeItem("info");
  },
  mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  text-align: center;
  padding-top: 10rem;
}
.loading-img {
  width: 5.556vw;
  height: 5.556vw;
}
.body {
  width: 100%;
  background: #f5f5f5;
  border: solid white;
}
.box {
  width: 1080px;
  margin: 0 auto;
  position: relative;
}
.nav {
  width: 1080px;
  margin: 20px 0;
}
.mian {
  display: flex;
  justify-content: space-between;
}
.FailureDetails {
  width: 780px;
  height: 700px;
  background: white;
}
.FailureDetails .Failureinfo {
  width: 90%;
  margin: 0 auto;
}
.FailureDetails .Failureinfo h5 {
  text-align: left;
  border-bottom: 1px solid #f5f5f5;
  line-height: 80px;
}
.FailureDetails .Failureinfo .Buttonlist ul {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;
}
.FailureDetails .Failureinfo .Buttonlist ul li {
  width: 45%;
  margin: 5px 0;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
}
.btn {
  background: white;
}
.btnstyle:focus {
  border: 1px solid #83d838;
  color: #83d838;
}
.btninfo {
  margin-top: 60px;
  text-align: center;
}
.Failureinfo .submit {
  width: 310px;
  height: 45px;
  background: #83d838;
  border: none;
  font-size: 16px;
}
.opt {
  color: red;
  margin: 40px 0;
}
input {
  width: 100%;
  height: 55px;
  font-size: 14px;
  padding: 10px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
