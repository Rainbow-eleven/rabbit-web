<template>
  <div class="mx-auto px-4 p-3 tips">
    <p class="text-lowercase">{{ tipsTitle }}</p>
    <p class="text-capitalize text-muted">{{ tips }}</p>
  </div>
</template>
<script>
export default {
  name: "tips",
  data() {
    return {};
  },
  computed: {
    tipsTitle() {
      //接收vuex数据的title
      return this.$store.state.list.tipsTitle;
    },
    tips() {
      return this.$store.state.list.tips;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../css/tips.scss";
</style>
