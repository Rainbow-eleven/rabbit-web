<template>
  <div class="service" id="service">
    <header class="header">
      <div class="left">
        <h3>旧机维修</h3>
        <sub>维修/便捷/安全</sub>
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
  * {
    margin: 7px 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    .left {
      h3 {
        font-weight: bold;
        letter-spacing: 5px;
      }
      sub {
        font-size: 16px;
        margin-left: 10px;
        letter-spacing: 0px;
        color: #999;
      }
      * {
        display: inline-block;
      }
    }
  }
}
</style>