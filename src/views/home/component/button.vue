<template>
  <div>
    <button class="border-0 text-white">{{ text }}</button>
  </div>
</template>
<script>
export default {
  props: ["text"],
};
</script>
<style lang="scss" scoped>
button {
  width: 120px;
  height: 40px;
  background-color: #83d838;
  outline: none;
  letter-spacing: 1px;
  font-size: 15px;
  box-shadow: 0 0 1px #ccc;
}
</style>