<template>
  <div class="Car">
    <div class="img">
      <img :src="item.faceImg" alt="" />
    </div>
    <div class="title">
      <p>{{ item.modelName }}</p>
    </div>
    <div class="pic">
      <p>
        官方售价<span>￥{{ item.topPrice }}起</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.Car {
  margin: 20px 0;
  width: 100%;
  // box-shadow: #ccc 2px 2px 2px;
  cursor: pointer;
  .img {
    width: 80%;
    margin: 0 auto;

    img {
      text-align: center;
      width: 100%;
    }
  }
  .title {
    margin: 10px 0;
    text-align: center;
  }
  .pic {
    text-align: center;
    p {
      span {
        color: red;
        margin-left: 3px;
      }
    }
  }
}
</style>