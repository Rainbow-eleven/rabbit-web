<template>
  <div class="guild">
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
  padding: 30px 0;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-around;
}
</style>