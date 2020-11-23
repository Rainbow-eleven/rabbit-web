<template>
  <!-- 跟标签 -->
  <div class="Buildbox">
    <div class="Related">
      <!-- 二维码 -->
      <div class="erwm">
        <img :src="copy" alt="" />
      </div>
      <!-- 相关程序 -->
      <div class="More">
        <p>扫码关注小程序</p>
        <p>更多活动跟高价</p>
      </div>
    </div>
  </div>
</template>
<script>
import "../../iconfont/iconfont.css";
export default {
  props: ["data"],
  name: "QRcode",
  data() {
    return {
      phoneInfo: [
        {
          hintImg:
            "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604978614&di=82f7806879c26a5f9a846bb63af0ca92&src=http://img3.duitang.com/uploads/item/201609/12/20160912113125_LfiYy.thumb.700_0.jpeg", //图片
        },
      ],
    };
  },
  methods: {
    Obtain() {
      let obj = JSON.parse(localStorage.getItem("info"));
      if (obj == null) {
        this.phoneInfo[0].hintImg;
      } else {
        this.phoneInfo[0] = obj;
      }
    },
  },
  computed: {
    copy: {
      get() {
        this.Obtain();
        return this.phoneInfo[0].hintImg;
      },
      set(val) {
        return val;
      },
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.Buildbox {
  width: 280px;
  height: 165px;
  margin-top: 40px;
  background: white;
  border: solid white;
}
.Buildbox .Related {
  width: 90%;
  height: 110px;
  margin: 0 auto;
  display: flex;
  margin-top: 27px;
}
.Buildbox .erwm {
  width: 110px;
  height: 110px;
  margin: 0 auto;
}
.Buildbox .erwm img {
  width: 100%;
  height: 100%;
}
.Buildbox .More {
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  padding-top: 10%;
}
</style>
