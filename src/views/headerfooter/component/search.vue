<template>
  <div class="search">
    <div
      class="small-ad"
      v-if="
        $route.path == '/' ||
        $route.path == '/list' ||
        $route.path == '/Offer' ||
        $route.path == '/personal' ||
        $route.path == '/home'
      "
    >
      <img src="../img/logo.jpg" class="logoImg" />
      <img src="../img/01.jpg" alt="" />
      <p align="right">1分钟快速备份手机数据轻松操作快如闪电</p>
    </div>
    <div
      class="small-ad"
      v-else-if="
        $route.path == '/MaintainAssess' || $route.path == '/CustomerService'
      "
    >
      <img src="../img/logo.jpg" class="logoImg" />
      <ul>
        <li>旧机维修</li>
        <!-- 判断旧机维修是否显示 -->
        <li
          v-if="
            $route.path == '/FaultState' || $route.path == '/MaintainAssess'
          "
        >
          以旧换新
        </li>
      </ul>
    </div>
    <searchBar
      v-if="
        $route.path == '/' ||
        $route.path == '/list' ||
        $route.path == '/FaultState' ||
        $route.path == '/MaintainAssess' ||
        $route.path == '/personal' ||
        $route.path == '/home'
      "
    ></searchBar>

    <div class="progres" v-else-if="$router.path == '/personal'">
      <div class="input-group mb-3">
        <!-- 判断旧机维修一级页 -->
        <div class="progress progressStyle" v-if="$route.path == '/personal'">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 60%"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <!-- 判断旧机维修二级页                 *****************还未定义 -->
        <div
          class="progress progressStyle"
          v-else-if="$route.path == '/CustomerService'"
        >
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <ul class="WordCount">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <ul class="TextPrompt">
        <li>维修估价</li>
        <li>填写信息</li>
        <li>预约下单</li>
      </ul>
    </div>
  </div>
</template>
<script>
import "../iconfont.css";
import searchBar from "./searchBar";
export default {
  name: "search",
  components: {
    searchBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.search {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.875rem;
}
.logoImg {
  margin-right: 2.5rem;
}
.small-ad {
  width: 26.875rem;
  display: flex;
  align-items: center;
  margin-left: 3.125rem;
}
.small-ad ul {
  display: flex;
  width: 12.5rem;
  justify-content: space-around;
  font-size: 1rem;
}
.small-ad p {
  margin: auto;
  font-size: 0.75rem;
  display: flex;
}
.inputsearch {
  height: 3.125rem;
  margin-right: 1.25rem;
}
.inputsearch input {
  width: 260px;
  border: lawngreen 2px solid;
  align-items: center;
  padding-left: 5px;
}
.form-controle {
  width: 16.25rem;
  outline-color: rgba(75, 150, 0, 0.719);
  font-size: 0.875rem;
  color: #5f5e5e;
}
.search-bar {
  width: 3.75rem;
  border: 2px solid #83d838;
  background: #83d838;
}
.iconf {
  font-size: 1.75rem;
  color: #fff;
}
.progres {
  display: flex;
  height: 1.25rem;
  flex-direction: column;
  margin-right: 2.5rem;
  margin-top: 1.875rem;
  text-align: center;
}
.progressStyle {
  width: 12.5rem;
  height: 0.375rem;
  margin: 0 auto;
}
.progres .WordCount {
  width: 12.5rem;
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
  margin-top: -1.875rem;
  z-index: 5;
}
.progres .WordCount li {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #0d6efd;
  line-height: 1.25rem;
  color: #fff;
  font-size: 0.75rem;
}
.TextPrompt {
  width: 15rem;
  justify-content: space-between;
  display: flex;
}
.TextPrompt li {
  font-size: 0.875rem;
}
</style>