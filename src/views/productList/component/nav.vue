<template>
  <div>
    <div class="mx-auto p-5 px-4 m-4 w-1080 bg-white">
      <div class="mb-3">
        分类:
        <button
          class="px-3 title_style pb-1"
          :class="
            index == classNum ? 'animate__animated animate__jello active' : ''
          "
          v-for="(item, index) in classData"
          :key="index"
          @click="classClick(index, item.id)"
        >
          {{ item.classifyName }}
        </button>
      </div>
      <hr />
      <div class="pt-3 pb-3 w-1000">
        <span class="brand_style">品牌:</span>
        <div
          :class="{
            brandsOne: Increase,
            brandsTwo: decreasing,
            'animate__animated animate__bounceIn': true,
          }"
        >
          <button
            @click="brandClick(index, item.id)"
            class="title_style mx-3 mr-4 brand_style_color mb-1"
            v-for="(item, index) in brandData"
            :key="index"
            :class="
              index == brandsNum
                ? 'animate__animated animate__flipInY active'
                : ''
            "
          >
            {{ item.brandName }}
          </button>
        </div>
        <button
          class="float-left border ml-2 b-font"
          :disabled="btState"
          @click="more"
        >
          更多 ∨
        </button>
      </div>
    </div>
    <div class="w-1080 mx-auto">
      <button
        class="bck-fff search-esc font-1 px-2 py-2 out mb-3 text-center"
        @click="escClick"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-arrow-counterclockwise"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
          />
          <path
            d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"
          />
        </svg>
      </button>
      <input
        type="text"
        class="font-1 px-1 py-2 out mx-auto search mb-3"
        placeholder="查找您所需要的产品"
        @keyup.enter="searchClick"
        @keyup.esc = "escClick"
        v-model.trim="search"
      />
      <button @click="searchClick" class="search-sear font-1 px-2 py-2 out bck-fff mb-3 text-center">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </button>
    </div>
    <Product class="mt-1" @decrement="decrement" @increment="increment" :brandList="list" :current="currentPage"
    > </Product>
    <div class="loading" v-if="loading"></div>
  </div>
</template>
<script>
import Product from "./product";
export default {
  name: "Nav",
  data() {
    return {
      classData: [], //分类数据
      brandData: [], //品牌数据
      list: [], //商品数据
      classNum: 0, //分类点击
      brandsNum: 0, //品牌点击
      loading: false,
      btState: false,
      father: "", //接收搜索传递的数据
      search: "",
      Increase: true, //更多递减
      decreasing: false, //更多递增
      currentPage:1
    };
  },
  methods: {
    async getClass() {
      this.loading =true;
      //获取类
      const { data } = await this.$axios.get("/classify");
      this.classData = data.data;
      this.getBrand(this.classData[0].id);
      this.classData = this.classData.filter((item) => {
        return item.status === 1;
      });
      this.loading =false;
    },
    classClick(index, id) {
      //分类点击
      this.brandData = [];
      this.list = [];
      this.classNum = index;
      this.loading = true;
      this.getBrand(id);
      this.loading = false;
      this.brandsNum = 0;
      this.currentPage = 1;
    },
    async getBrand(id) {
      //获取品牌数据
      const { data } = await this.$axios.get(`/brand`);
      this.brandData = data.data;
      this.brandData = this.brandData.filter((item) => {
        return item.classifyId.id === id && item.status === 1;
      });
      if (this.brandData.length == 0) {
        this.brandData = this.noList; //判断是否有数据
      } else if (this.brandData.length > 10) {
        this.btState = false;
      } else {
        this.btState = true;
      }
      this.getModel(this.brandData[0].id);
    },
    brandClick(index, id) {
      this.list = [];
      this.brandsNum = index;
      this.getModel(id);
      this.currentPage = 1;
    },
    async getModel(id) { //获取商品模型
      const { data } = await this.$axios.get("/model");
      this.list = data.data;
      this.list = this.list.filter((item) => {
        return item.brandId.id === id;
      });
    },
    increment(val) { //修改分页递增
      this.currentPage = val;
      this.currentPage++;
      console.log(this.currentPage);
    },
    decrement(val) {//分页递减
      this.currentPage =val;
      this.currentPage--;
    },
    searchClick() {
      //模糊查询
      this.list = this.list.filter((item) => {
        return (
          item.modelName
            .toLocaleLowerCase()
            .indexOf(`${this.search.toLocaleLowerCase()}`) !== -1
        );
      });
    },
    more() {
      //点击更多
      this.Increase = !this.Increase;
      this.decreasing = !this.decreasing;
    },
    escClick() {
      this.getClass();
      this.brandsNum = 0;
      this.search = "";
    },
  },
  created() {
    this.getClass();
  },
  components: {
    Product,
  },
  computed: {
    noList() {
      return this.$store.state.list.noList;
    },
  },
};
</script>
<style scoped lang="scss">
@import "~@/assets/css/productList/nav.scss";
@import "~@/assets/css/productList/mian.scss";
</style>
