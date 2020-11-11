<template>
  <div class="w-1080 mx-auto" :class="'animate__animated animate__fadeIn'">
    <div
      v-if="brandList.length != 0"
      :class="'animate__animated animate__fadeIn mx-auto w-100 row'"
    >
      <div
        class="mb-4 shadow-sm  mb-2 bg-white hand rounded bck-fff commodity-background hand"
        v-for="(item, index) in currentPageData"
        :key="index"
      >
        <img
          @click="assessment(item.id)"
          class="img_style mx-5 mt-4"
          :src="item.faceImg"
        />
        <div
          @click="assessment(item.id)"
          style="height: 50px;"
          class="text-truncate pt-4 product-name text-truncates"
        >
          {{ item.modelName }}
        </div>
        <div style="height: 3rem;" class="pb-4 pt-2 numbering text-truncate">
          {{ item.description }}
        </div>
        <span class="float-left pb-3 numbering text-danger"
          >现价:{{ item.exchangePrice }}</span
        >
        <span class="float-right pb-3 numbering"
          >最高价:{{ item.topPrice }}
        </span>
        <span class="float-right pb-3 numbering pt-3 px-4"
          >编号:{{ index + 1 }}</span
        >
        <div
          class="mt-5 mb-3 text-center border w-100 free pt-1 pb-1"
          @click="assessment(item.id)"
        >
          <span style="font-size: .8rem">评估价格</span>
        </div>
      </div>
    </div>
    <div v-else class="bck-fff noData mt-3">
      <img class="noIMG ml-5 mt-5" :src="noImg" />
      <div class="text-center p-0 w-500 mx-auto">亲，暂无数据</div>
    </div>
    <ul
      v-if="brandList.length != 0 ? true : false"
      class="w-500 mx-auto list-none"
    >
      <li
        class="font-12  float-left my-2 py-2 px-3 hand mx-2 bck-color"
        @click="prevPage()"
      >
        上一页
      </li>
      <li class="float-left font-12 my-2 py-2  px-3 hand mx-2 bck-color">
        第{{ current }}页/共{{ totalPage }}页
      </li>
      <li
        class="font-12  float-left my-2 py-2  px-3 hand mx-2 bck-color"
        @click="nextPage()"
      >
        下一页
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["brandList", "current"],
  name: "product",
  data() {
    return {
      totalPage: 1, // 统共页数，默认为1
      pageSize: 8, // 每页显示数量
      currentPageData: [], //当前页显示内容
    };
  },
  methods: {
    assessment(id) {
      // this.$router.push(`/FaultState/${id}`);
      this.$router.push(`FaultState/${id}`);
    },
    setCurrentPageData() {
      let begin = (this.current- 1) * this.pageSize;
      let end = this.current * this.pageSize;
      this.currentPageData = this.brandList.slice(begin, end);
    },
    prevPage() {
      if (this.current == 1) return;
      this.$emit("decrement",this.current);
      // this.current--;
      this.setCurrentPageData();
    },
    // 下一页
    nextPage() {
      if (this.current == this.totalPage) return;
      // this.current++;
      this.$emit("increment",this.current);
      this.setCurrentPageData();
    },
    totalClick() {
      // 计算一共有几页
      this.totalPage = Math.ceil(this.brandList.length / this.pageSize);
      // 计算得0时设置为1
      this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
      this.setCurrentPageData();
    },
  },

  computed: {
    noImg() {
      return this.$store.state.list.noImg;
    },
  },
  watch: {
    currentPageData() {
      return this.currentPageData;
    },
  },
  created() {
  },
  beforeUpdate() {
    this.totalClick();
  },
  mounted() {
    this.totalClick();
  },
};
</script>
<style scoped lang="scss">
@import "~@/assets/css/productList/product.scss";
@import "~@/assets/css/productList/mian.scss";
</style>
