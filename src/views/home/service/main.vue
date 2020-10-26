<template>
  <div class="main">
    <ul class="class">
      <li
        v-for="(item, index) in classList"
        :class="{ active: index === classActive }"
        :key="index"
        @click="classClick(index)"
      >
        {{ item.class }}
      </li>
    </ul>
    <ul class="brand">
      <li
        v-for="(item, index) in brandLogoList"
        :class="{ active: index === brandActive }"
        :key="index"
        @click="brandClick(index, item.src)"
      >
        <div>
          <span :class="[item.logo, 'iconfont']"></span>
        </div>
      </li>
    </ul>
    <div class="content">
      <div class="left" @click="addsub('sub')">
        <span class="iconfont icon-right"></span>
      </div>
      <div class="right" @click="addsub('add')">
        <span class="iconfont icon-icon-cmd-cell-icon-arrow-right"></span>
      </div>
      <ul class="contentUl" :style="{ marginLeft: phoneActive + 'px' }">
        <li v-for="(item, index) in phoneList" class="contentli" :key="index">
          <transition name="fade" mode="out-in">
            <phoneCar
              :imgUrl="item.imgUrl"
              :title="item.title"
              :id="item.id"
            ></phoneCar>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import phoneCar from "../component/phoneCar";
import "../css/iconfont.css";
export default {
  data() {
    return {
      classList: [
        { class: "手机", js: "phoneLogoData.js" },
        { class: "笔记本", js: "noteBookLogoData.js" },
        { class: "平板电脑", js: "flatLogoData.js" },
        { class: "摄影摄像", js: "cameraLogoData.js" },
        { class: "智能数码", js: "digitalLogoData.js" },
      ],
      brandLogoList: null,
      phoneList: null,
      classActive: 0,
      brandActive: 0,
      phoneCarActive: 1,
    };
  },
  components: {
    phoneCar,
  },
  computed: {
    phoneActive() {
      let marginLeft = -(this.phoneCarActive * 188 * 5);
      return marginLeft;
    },
  },
  methods: {
    classClick(i) {
      this.classActive = i;
      this.brandlogin(i);
    },
    brandClick(i, src) {
      this.brandActive = i;
      this.phoneListData(src);
    },
    addsub(s) {
      if (s === "add") {
        if (parseInt(this.phoneList.length / 5) === this.phoneCarActive) {
          this.phoneCarActive = 0;
        } else {
          this.phoneCarActive++;
        }
      } else if (s === "sub") {
        if (this.phoneCarActive > 0) {
          this.phoneCarActive--;
        }
      }
    },

    async brandlogin(i) {
      let js = this.classList[i].js;
      let arr = await import(`../data/${js}`);
      this.brandLogoList = arr.default;
    },
    async phoneListData(src) {
      let arr = await import(`../data/${src}`);
      this.phoneList = arr.default;
    },
  },
  created() {
    this.brandlogin("0");
    this.phoneListData("applePhoneListData");
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/transition/fade.scss";
@import "../../../assets/css/transition/bg.scss";
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.main {
  padding: 40px 30px;
}
.class {
  display: flex;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #83d838;
  justify-content: space-around;
  & > * {
    cursor: pointer;
    width: 20%;
    text-align: center;
    padding: 15px;
    font-size: 15px;
    letter-spacing: 3px;
    font-weight: bold;
  }
  .active {
    animation: bgColor 0.5s linear;
    background-color: #83d838;
    color: #fff;
  }
}
.content {
  width: 100%;
  display: inline-block;
  height: 220px;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  cursor: pointer;
  .contentUl {
    transition: all 0.5s ease-in-out;
    width: 1000%;
    .contentli {
      float: left;
      width: 170px;
      margin: 30px 9px;
    }
  }
  .left {
    position: absolute;
    left: 0px;
    top: 40%;
    width: 20px;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    background: rgba(40, 40, 40, 0.3);
  }
  .right {
    position: absolute;
    right: 0px;
    top: 40%;
    width: 20px;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
    background: rgba(40, 40, 40, 0.3);
  }
}
.brand {
  display: flex;
  justify-content: space-around;
  background: #f6f6f6;
  li {
    cursor: pointer;
    padding: 12px 0;
    width: 12%;
    text-align: center;
    span {
      font-size: 25px;
    }
  }
  .active {
    animation: bgColor 0.5s linear;
    background-color: #fff;
  }
}
</style>