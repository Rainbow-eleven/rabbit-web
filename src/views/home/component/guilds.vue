<template>
  <div class="guild d-flex justify-content-around">
    <guild
      v-for="(item, index) in arr"
      :key="index"
      :icon="item.icon"
      :title="item.title"
    ></guild>
  </div>
</template>
<script>
import guild from "./gulid";
export default {
  props: ["arr"],
  components: {
    guild,
  },
};
</script>
<style lang="scss" scoped>
.guild {
  padding: 15px 0;
  margin: 30px 0;
  background-color: #f8f8f8;
}
</style>