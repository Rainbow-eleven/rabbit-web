<template>
  <div class="home">
    <div class="content">
      <div
        @click.stop="maskClick"
        class="mask p-0 w-100 h-100"
        v-show="$store.state.home.loading"
      >
        <loading></loading>
      </div>
      <menuee></menuee>
      <service></service>
      <renewed></renewed>
      <banner></banner>
    </div>
  </div>
</template>
<script>
import service from "./service/service.vue";
import renewed from "./renewed/renewed.vue";
import banner from "./banner/banner.vue";
import menuee from "./menu/menu";
import loading from "./component/loading";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    service,
    renewed,
    banner,
    menuee,
    loading,
  },
  methods: {
    maskClick() {},
  },
};
</script>
<style lang='scss' scoped>
.home {
  background-color: #f9f9f9;
  .content {
    & > * {
      padding: 20px;
    }
  }
  .mask {
    z-index: 9999;
    position: fixed;
    animation: yanchi 0.5s linear;
  }
}
@keyframes yanchi {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>