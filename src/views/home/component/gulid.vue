<template>
  <div>
    <div class="content">
      <div class="img">
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
  display: flex;
  height: 45px;
  //   justify-content: space-around;
  .img {
    width: 45px;
    height: 100%;
    background: linear-gradient(to bottom, #f7d793, #e4b464);
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }
}
</style>