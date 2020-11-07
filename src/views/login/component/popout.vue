<template>
  <div class="popout animate__animated animate__bounceInDown">
    <div>
      <span>提示</span>
      <span class="float-right" @click="close" style="cursor: pointer">X</span>
    </div>
    <div class="countent mt-3">{{ bouncedInfo }}</div>
    <div class="float-right">
      <button type="button" class="mt-3 btn btn-primary" @click="close">
        确定
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bounced", "bouncedInfo"],
  data() {
    return {
      popoutClose: this.bounced,
    };
  },
  methods: {
    close() {
      this.popoutClose = false;
      this.$emit("changePopout", this.popoutClose);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../css/popout.scss";
</style>