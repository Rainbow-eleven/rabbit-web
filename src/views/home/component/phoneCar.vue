<template>
  <div class="phoneCar">
    <div class="img">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="title">
      <p>{{ title }} {{id }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgUrl", "title", "id"],
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