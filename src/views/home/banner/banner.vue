<template>
  <div class="banner">
    <div class="content">
      <ul class="d-flex justify-content-between mx-auto">
        <li v-for="(item, index) in guildArr" :key="index">
          <guild :item="item"></guild>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import guild from "../component/guild2";
export default {
  name: "banner",
  data() {
    return {
      guildArr: null,
    };
  },
  components: {
    guild,
  },
  methods: {
    async obtainGuildList() {
      let arr = await import("../data/bannerGuildList");
      this.guildArr = arr.default;
    },
  },
  created() {
    this.obtainGuildList();
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
.banner {
  background: #494949;
  .content {
    width: 1080px;
    margin: 0 auto;
    padding: 15px 0;
  }
}
</style>  