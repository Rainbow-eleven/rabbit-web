<template>
  <div class="phoneCar">
    <div class="img">
      <img :src="item.faceImg" alt="" />
    </div>
    <div class="title">
      <p>{{ item.modelName }} {{ item.topPrice }}</p>
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
  float: left;
  height: 240px;
  width: 100%;
  .img {
    width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .title {
    text-align: center;
  }
}
</style>