<template>
  <!-- 跟标签 -->
  <div class="Buildbox">
    <div class="apple">
      <!-- 苹果部分 -->
      <div>
        <!-- 苹果安全i图标 -->
        <div class="i">
          <i class="iconfont icon-dunpai tick"></i>
          <p>
            <span>{{ title }}</span>
            <!-- 安全小贴士 -->
            <!-- <span style="display:none">{{copyone}}</span> -->
          </p>

          <span style=" display: none;">{{ copy }}</span>
        </div>
        <!-- 苹果安全小贴士的介绍 -->
        <gudu :showtime="Right">
          <div class="text">
            <p>
              <span>{{ phoneInfo[0].hintInfo }}</span>
            </p>
          </div>
        </gudu>
      </div>
      <!-- 下拉 -->
      <div class="more">
        <span>
          <i
            class="iconfont"
            :class="Right == true ? 'icon-xiala' : 'icon-shang'"
            @click="ass"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import gudu from "./gudu";
import "../../iconfont/iconfont.css";
export default {
  name: "AppleFate",
  props: ["data"],
  data() {
    return {
      Right: true,
      title: "",
      phoneInfo: [
        {
          modelId: "", //手机品牌
          hintTitle: "安全小贴士", //标题
          hintInfo:
            "手机只要恢复出厂设置，是无需担心数据泄露风险的,请放心回收。这是真的！没够FBI都破解不了", //信息
          hintImg: "", //图片
          maintainTopPrice: "", //最高价
        },
      ],
    };
  },
  methods: {
    ass() {
      this.Right = !this.Right;
    },
    Obtain() {
      let obj = JSON.parse(localStorage.getItem("info"));
      if (obj == null) {
        this.phoneInfo[0];
        this.title = "安全小贴士";
      } else {
        this.phoneInfo[0] = obj;
        this.titleinfo();
      }
    },
    titleinfo() {
      let obje = JSON.parse(localStorage.getItem("info"));
      this.title = obje.hintTitle;
    },
  },
  computed: {
    copy: {
      get() {
        this.Obtain();
        return this.data[0].hintInfo;
      },
      set(val) {
        return val;
      },
    },
  },
  components: {
    gudu,
  },
  created() {},
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.Buildbox {
  width: 280px;
  background: #f7fdf2;
  border: 1px solid #cdf0ad;
}
.Buildbox .apple {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.Buildbox .apple .i {
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 60px;
}
.Buildbox .apple .text {
  margin-top: 20px;
}
.Buildbox .apple .text p {
  font-size: 8px;
}
.Buildbox .apple .more {
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
}
.tick {
  font-size: 28px;
}
</style>
