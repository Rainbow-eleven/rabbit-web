<template>
  <div class="home text-center">
    <Header></Header>
    <search></search>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <bottomFooter></bottomFooter>
  </div>
</template>
<script>
import Header from "./component/Header";
import bottomFooter from "./component/footer";
import search from "./component/search";
import "./iconfont.css";
export default {
  name: "Home",
  components: { search, bottomFooter, Header },
};
</script>
<style lang="scss" scope>
* {
  padding: 0;
  margin: 0;
}
</style>
