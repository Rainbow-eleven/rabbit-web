<template>
  <div class="guild d-flex mx-auto text-white">
    <div class="img d-flex justify-content-center">
      <span class="font-wight-bold" :class="['iconfont', item.icon]"></span>
    </div>
    <div class="content">
      <h5 class="m-0">{{ item.title }}</h5>
      <p class="m-0">{{ item.text }}</p>
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
  .img {
    width: 60px;
    height: 60px;
    display: block;
    span {
      font-size: 35px;
      color: #83d838;
    }
  }
  .content {
    margin-left: 20px;
    h5 {
      line-height: 30px;
      color: #f5f5f5;
    }
    p {
      line-height: 20px;
      color: #d1cece;
    }
  }
}
</style>