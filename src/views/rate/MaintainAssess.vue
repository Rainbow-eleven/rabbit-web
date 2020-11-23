<template>
  <!-- 维修评估 -->
  <div class="body">
    <div class="box">
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
        <div class="snagList">
          <div class="sangListone">
            <div>
              <ul>
                <li v-for="(list, index) in PhoneInfo[0].snag" :key="index">
                  <p>{{ list.name }}</p>
                  <input
                    class="liinput"
                    type="text"
                    :placeholder="list.Right == true ? ' ' : '请输入详细信息'"
                    v-model="list.point"
                    :disabled="list.Right"
                    @click="ass"
                    @blur="lose(index)"
                  />
                  <button
                    type="button"
                    class="btn alterbtn"
                    @click="alter(index)"
                  >
                    {{ !list.Right ? "请修改" : "修改" }}
                  </button>
                </li>
              </ul>
            </div>
            <div class="reserve">
              <gudu :show="PhoneInfo[0].className">
                <p class="warninfo">请输入全部详细信息</p>
              </gudu>
              <input
                class="btn btn-primary  submit"
                type="button"
                value="请进行估价"
                @click="submit"
              />
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
  name: "MaintainAssess",
  data() {
    return {
      phoneInfone: [{}],
      PhoneInfo: [
        {
          className: false,
          snag: [
            {
              name: "故障信息",
              Right: true,
              point: "",
            },
            {
              name: "型号",
              Right: true,
              point: "",
            },
            {
              name: "存续内容",
              Right: true,
              point: "",
            },
          ],
        },
      ],
      info: {},
    };
  },
  methods: {
    //禁用
    alter(index) {
      this.PhoneInfo[0].snag[index].Right = !this.PhoneInfo[0].snag[index]
        .Right;
    },
    // 失去焦点
    lose(index) {
      this.PhoneInfo[0].snag[index].Right = true;
    },
    // 请求数据
    async fimdStudet() {
      const { data } = await _axios.get(`/model/1`);
      this.info = data.data;
      this.PhoneInfo[0].snag[1].point = this.info.modelName;
      this.PhoneInfo[0].snag[2].point = this.info.description;
    },
    // 标题
    // Assignment(){    },
    returnHome() {
      this.$router.push("/index");
    },
    // 提示
    ass() {
      this.PhoneInfo[0].className = false;
    },
    // 提交
    submit() {
      localStorage.removeItem("info");
      let lock = true;
      for (let i = 0; i < this.PhoneInfo[0].snag.length; i++) {
        if (this.PhoneInfo[0].snag[i].point == "") {
          lock = false;
        }
      }
      if (lock) {
        this.$router.replace("/WriteAddress");
      } else {
        this.PhoneInfo[0].className = true;
      }
    },
  },
  components: {
    PhoneInfo,
    AppleFate,
    QRcode,
    gudu,
  },
  mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
  created() {
    this.fimdStudet();
    this.PhoneInfo[0].snag[0].point = JSON.parse(
      localStorage.getItem("info")
    ).title;
    // this.Assignment();
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
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
.mian {
  display: flex;
  justify-content: space-between;
}
.snagList {
  width: 780px;
  background: white;
}
.sangListone {
  width: 90%;
  margin: 0 auto;
}
.sangListone .reserve {
  text-align: center;
}
.reserve .warninfo {
  margin: 40px;
  color: red;
}
.snagList ul {
  list-style: none;
}
.snagList ul li {
  margin: 40px 0;
  display: flex;
  line-height: 40px;
  justify-content: space-between;
  padding: 0 20px;
}
.snagList ul li p {
  width: 200px;
}
.snagList .liinput {
  width: 50%;
  border: #ffffff 1px solid;
  color: #ff5a00;
  outline-color: #83d838;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
input:disabled {
  opacity: 1;
  background: white;
  font-size: 16px;
}
.submit {
  width: 310px;
  height: 45px;
  background: #83d838;
  border-radius: 10px;
  color: white;
  border: none;
}
a {
  text-decoration: none;
  color: black;
}
.alterbtn {
  width: 60px;
  height: 40px;
  text-align: center;
}
</style>
