<template>
  <div class="Car">
    <div class="img mx-auto w-75">
      <img :src="item.faceImg" class="w-100 text-center" alt="" />
    </div>
    <div class="title text-center font-weight-bold">
      <p class="text-muted text-truncate">{{ item.modelName }}</p>
    </div>
    <div class="pic text-center">
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
  cursor: pointer;
  .img {
    height: 180px;
    img {
      text-align: center;
    }
  }
}
.title {
  margin: 10px 0;
  line-height: 40px;
}
.pic {
  p {
    line-height: 30px;
    margin: 20px 0;
    span {
      color: rgb(248, 47, 57);
      margin-left: 3px;
    }
  }
}
</style>