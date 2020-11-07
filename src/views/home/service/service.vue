<template>
  <div class="service" id="service">
    <header class="header d-flex justify-content-between">
      <div class="left">
        <h3 class="font-weight-bold d-inline-block">旧机维修</h3>
        <sub class="text-black d-inline-block">维修/便捷/安全</sub>
      </div>
      <div class="right">
        <but text="免费估价"></but>
      </div>
    </header>
    <guilds :arr="guildList"></guilds>
    <mainBody></mainBody>
  </div>
</template>
<script>
import guilds from "../component/guilds";
import but from "../component/button";
import mainBody from "./main";
export default {
  name: "service",
  data() {
    return {
      guildList: null,
    };
  },
  components: {
    guilds,
    but,
    mainBody,
  },
  methods: {
    async obtainGuildList() {
      let arr = await import("../data/serviceGuildList");
      this.guildList = arr.default;
    },
  },
  created() {
    this.obtainGuildList();
  },
};
</script>
<style lang="scss" scoped>
.service {
  margin: 100px auto;
  background-color: #fff;
  width: 1080px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  .header {
    margin: 20px 0;
    padding: 0 20px;
    .left {
      h3 {
        letter-spacing: 5px;
      }
      sub {
        font-size: 16px;
        margin-left: 10px;
        letter-spacing: 0px;
      }
    }
  }
}
</style>