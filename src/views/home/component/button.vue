<template>
  <div>
    <button>{{ text }}</button>
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
  color: #fff;
  background-color: #83d838;
  border-color: #83d838;
  outline-color: #83d838;
  letter-spacing: 1px;
  font-size: 15px;
}
</style>