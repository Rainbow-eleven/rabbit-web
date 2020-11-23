<template>
  <div class="phoneCar float-left">
    <div class="img d-flex justify-content-center">
      <img :src="item.faceImg" alt="" />
    </div>
    <div class="title text-center font-weight-bold">
      <p class="text-truncate">{{ item.modelName }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.phoneCar {
  width: 100%;
  height: 240px;
  .img {
    width: 100%;
    img {
      width: 70%;
    }
    height: 170px;
  }
  .title {
    margin-top: 20px;
    p {
      width: 120px;
      height: 23px;
      margin: 0 auto;
    }
  }
}
</style>