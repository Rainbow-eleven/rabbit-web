<template>
  <div>
    <div class="content d-flex">
      <div
        class="img rounded-circle text-white d-flex justify-content-center align-items-center h-100 font-weight-bold"
      >
        <span :class="[icon, 'iconfont']" style="font-size: 22px"></span>
      </div>
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/iconfont.css";
export default {
  props: ["icon", "title"],
  name: "guild",
};
</script>
<style lang="scss" scoped>
.content {
  height: 45px;
  .img {
    width: 45px;
    background: linear-gradient(to bottom, #f8d996, #e4b464);
  }
  .title {
    line-height: 50px;
    font-size: 18px;
    margin-left: 10px;
  }
}
</style>