<template>
  <div>
    <ul class="class">
      <li
        v-for="(item, index) in classList"
        :class="{ active: index === classActive }"
        :key="index"
        @click="classClick(index)"
      >
        {{ item }}
      </li>
    </ul>
    <ul class="brand">
      <li
        v-for="(item, index) in brandLogoList"
        :class="{ active: index === brandActive }"
        :key="index"
        @click="brandClick(index)"
      >
        <div>
          <span :class="[item, 'iconfont']"></span>
        </div>
      </li>
    </ul>
    <div class="content">
      <phoneCar
        v-for="item in phoneList"
        :key="item.id"
        :imgUrl="item.imgUrl"
        :title="item.title"
      ></phoneCar>
    </div>
  </div>
</template>
<script>
import phoneCar from "../component/phoneCar";
export default {
  data() {
    return {
      classList: ["手机", "笔记本", "平板电脑", "摄影摄像", "智能数码"],
      brandLogoList: [
        "icon-ios-black",
        "icon-huawei",
        "icon-xiaomi1",
        "icon-rongyao",
        "icon-vivo5",
        "icon-OPPO2",
        "icon-changyonglogo43",
        "icon-meizu1",
        "icon-webtubiaozhengli20",
      ],
      phoneList: [
        {
          id: "1",
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1143542591,1492292679&fm=26&gp=0.jpg",
          title: "苹果 iPhone xs",
        },
        {
          id: "2",
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1143542591,1492292679&fm=26&gp=0.jpg",
          title: "苹果 iPhone xs",
        },
        {
          id: "3",
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1143542591,1492292679&fm=26&gp=0.jpg",
          title: "苹果 iPhone xs",
        },
        {
          id: "4",
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1143542591,1492292679&fm=26&gp=0.jpg",
          title: "苹果 iPhone xs",
        },
        {
          id: "5",
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1143542591,1492292679&fm=26&gp=0.jpg",
          title: "苹果 iPhone xs",
        },
      ],
      classActive: 0,
      brandActive: 0,
    };
  },
  components: {
    phoneCar,
  },
  methods: {
    classClick(i) {
      this.classActive = i;
    },
    brandClick(i) {
      this.brandActive = i;
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.class {
  margin-top: 40px;
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
    background-color: #83d838;
    color: #fff;
  }
}
.content {
  display: flex;
  justify-content: space-around;
  padding: 20px;
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
    background-color: #fff;
  }
}
</style>