<template>
  <div class="main">
    <ul class="class">
      <li
        v-for="(item, index) in classList"
        :class="{ active: index === classActive }"
        :key="index"
        @click="classClick(index, item.id)"
      >
        {{ item.classifyName }}
      </li>
    </ul>
    <ul class="brand">
      <li
        v-for="(item, index) in brandList"
        :class="{ active: index === brandActive }"
        :key="index"
        @click="brandClick(index, item.id)"
      >
        <div>
          <img :src="item.logo" alt="" />
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
        <li v-for="(item, index) in modelList" class="contentli" :key="index">
          <phoneCar :item="item"></phoneCar>
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
      classList: null,
      brandList: null,
      modelList: [],
      classActive: 0,
      brandActive: 0,
      phoneCarActive: 0,
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
    classClick(i, id) {
      this.classActive = i;
      this.brandlogo(id);
    },
    brandClick(i, id) {
      this.brandActive = i;
      this.obtainModel(id);
    },
    addsub(s) {
      if (s === "add") {
        if (parseInt(this.modelList.length / 5) === this.phoneCarActive) {
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
    async brandlogo(id) {
      let { data } = await this.$axios.get(`/bcr/${id}`);
      this.brandList = data.data.brands;
      this.obtainModel(this.brandList[this.brandActive].id);
    },
    async obtainModel(id) {
      let { data } = await this.$axios.get(`/model/${id}`);
      this.modelList = data.data.models;
    },
    async classListData() {
      let { data } = await this.$axios.get("/classify");
      this.classList = data.data;
      this.brandlogo(this.classList[0].id);
    },
  },
  created() {
    this.classListData();
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
  & > * {
    cursor: pointer;
    width: 24.5%;
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
  background: #f6f6f6;
  li {
    cursor: pointer;
    padding: 12px 0;
    width: 200px;
    text-align: center;
    img {
      width: 45px;
      text-align: center;
    }
  }
  .active {
    animation: bgColor 0.5s linear;
    background-color: #fff;
  }
}
</style>