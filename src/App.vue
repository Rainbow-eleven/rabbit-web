<template>
  <div id="app">
    <Header
      v-if="$router.history.current.name !== 'login' ? 'login' : ''"
    ></Header>
    <search
      v-if="$router.history.current.name !== 'login' ? 'login' : ''"
    ></search>
    <transition name="fade" mode="out-in">
      <router-view style="background-color: #f5f5f5"></router-view>
    </transition>
    <Footer
      v-if="$router.history.current.name !== 'login' ? 'login' : ''"
    ></Footer>
  </div>
</template>

<script>
import Header from "./views/headerfooter/component/Header";
import search from "./views/headerfooter/component/search";
import Footer from "./views/headerfooter/component/footer";
export default {
  components: { Header, search, Footer },
  data() {
    return {
      login: false,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/css/transition/fade.scss";
@import "./assets/css/global/index.scss";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
