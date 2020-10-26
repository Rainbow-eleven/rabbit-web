<template>
  <div class="guild">
    <div class="img">
      <span :class="['iconfont', item.icon]"></span>
    </div>
    <div class="content">
      <h5>{{ item.title }}</h5>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>
<script>
import "../css/iconfont.css";

export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
.guild {
  display: flex;
  color: #fff;
  .img {
    margin-top: 8px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 40px;
      color: #83d838;
      font-weight: bold;
    }
  }
  .content {
    margin-left: 20px;
    h5 {
      margin: 0;
      line-height: 40px;
      color: #f5f5f5;
    }
    p {
      margin: 0;
      line-height: 30px;
      color: #9a9a9a;
    }
  }
}
</style>