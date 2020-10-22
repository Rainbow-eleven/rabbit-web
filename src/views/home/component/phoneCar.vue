<template>
  <div class="phoneCar">
    <div class="img">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgUrl", "title"],
};
</script>
<style lang="scss" scoped>
.phoneCar {
  width: 200px;
  display: inline-block;
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