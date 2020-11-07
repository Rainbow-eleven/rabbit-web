<template>
  <div class="main">
    <ul class="class d-flex oveflow-hidden">
      <li
        v-for="(item, index) in showClassList"
        :class="{ active: index === classActive }"
        :key="index"
        @click="classClick(index, item.id)"
      >
        {{ item.classifyName }}
      </li>
    </ul>
    <ul class="brand">
      <div
        v-if="brandList.length"
        class="brandBox d-flex flex-wrap overflow-hidden"
      >
        <li
          v-for="(item, index) in showBrandList"
          :class="{ active: index === brandActive }"
          class="text-center d-flex justify-content-center align-items-center"
          :key="index"
          @click="brandClick(index, item.id)"
        >
          <img class="text-center" :src="item.logo" alt="" />
        </li>
      </div>
      <div v-else class="error">
        <p>暂无商品</p>
      </div>
    </ul>
    <div class="content w-100">
      <div class="left text-white mx-auto text-center" @click="addsub('sub')">
        <span class="iconfont icon-right"></span>
      </div>
      <div class="right text-white mx-auto text-center" @click="addsub('add')">
        <span class="iconfont icon-icon-cmd-cell-icon-arrow-right"></span>
      </div>
      <ul class="contentUl h-100">
        <div
          v-if="modelList.length > 0"
          class="centerUl"
          :style="{ left: phoneActive + 'px' }"
        >
          <li
            v-for="(item, index) in modelList"
            class="contentli float-left"
            :key="index"
          >
            <phoneCar :item="item"></phoneCar>
          </li>
        </div>
        <div v-else class="error">
          <p>暂无商品</p>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
/* eslint-disable  */
import phoneCar from "../component/phoneCar";
import "../css/iconfont.css";

export default {
  data() {
    return {
      classList: [],
      brandList: [],
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
      let marginLeft = -(this.phoneCarActive * 200 * 5);
      return marginLeft;
    },
    showClassList() {
      let arr = this.classList.filter((item) => {
        return item.status;
      });
      return arr;
    },
    showBrandList() {
      let arr = this.brandList.filter((item) => {
        return item.status;
      });
      return arr;
    },
  },
  methods: {
    classClick(i, id) {
      this.classActive = i;
      this.brandActive = 0;
      this.brandList = [];
      this.brandlogo(id);
    },
    brandClick(i, id) {
      this.modelList = [];
      this.brandActive = i;
      this.phoneCarActive = 0;
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
      this.modelList = [];
      let { data } = await this.$axios.get(`/brand`);
      let brandList = data.data;
      brandList.filter((item) => {
        if (id === item.classifyId.id) {
          this.brandList.push(item);
        }
      });
      if (this.brandList.length > 0) {
        this.obtainModel(this.brandList[this.brandActive].id);
      }
    },
    async obtainModel(id) {
      let { data } = await this.$axios.get(`/model`);
      let modelList = data.data;
      modelList.filter((item) => {
        if (id === item.brandId.id) {
          this.modelList.push(item);
        }
      });
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
.error {
  margin-left: 400px;
  line-height: 60px;
}
.class {
  border-top: 1px solid rgb(236, 236, 236);
  border-bottom: 1px solid #83d838;
  & > * {
    cursor: pointer;
    width: 20%;
    color: #999;
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
  height: 280px;
  position: relative;
  padding: 0 20px;
  cursor: pointer;
  .contentUl {
    position: relative;
    overflow: hidden;
    .centerUl {
      position: absolute;
      transition: all 0.5s ease-in-out;

      width: 8000px;
      .contentli {
        width: 200px;
        box-sizing: border-box;
        margin: 30px 0px;
      }
    }
  }
  .left {
    position: absolute;
    left: 0px;
    top: 40%;
    width: 20px;
    height: 50px;
    line-height: 50px;
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
    line-height: 50px;
    cursor: pointer;
    border-radius: 8px;
    background: rgba(40, 40, 40, 0.3);
  }
}
.brand {
  background: #f6f6f6;
  height: 55px;
  position: relative;
  .brandBox {
    justify-content: flex-start;
  }
  li {
    display: block;
    width: 104px;
    cursor: pointer;
    height: 55px;
    overflow: hidden;

    img {
      width: 45px;
      filter: grayscale(100%);
      filter: gray;
    }
  }
  .wait {
    position: absolute;
    right: 0;
    top: 0;
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