<template>
  <div class="guild">
    <div class="img">
      <img :src="item.imgUrl" alt="" />
    </div>
    <div class="content">
      <h5>{{ item.title }}</h5>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.guild {
  display: flex;
  color: #fff;
  .img {
    width: 50px;
    img {
      width: 100%;
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