<template>
  <div class="banner">
    <div class="content">
      <ul>
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
      guildArr: [
        {
          icon: "icon-bid",
          title: "高价",
          text: "百家竞价 价格公道",
        },
        {
          icon: "icon-shalou",
          title: "便捷",
          text: "交易便利，保障有我",
        },
        {
          icon: "icon-anquan",
          title: "安全",
          text: "放心维修，保障有我",
        },
        {
          icon: "icon-huanbao",
          title: "环保",
          text: "综合利用，避免污染",
        },
      ],
    };
  },
  components: {
    guild,
  },
};
</script>
<style lang="scss" scoped>
.banner {
  background: #494949;
  .content {
    width: 1080px;
    margin: 0 auto;
    padding: 25px 0;
    ul {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>  