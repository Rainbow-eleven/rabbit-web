<template>
  <div class="renewed" id="renewed">
    <header class="header">
      <div class="left">
        <h3>
          以旧换新
          <div class="img">
            <img
              src="https://czh1010.oss-cn-beijing.aliyuncs.com/images/20201027/08360226.png"
              alt=""
            />
          </div>
        </h3>
        <sub>旧机回收抵扣新机款</sub>
      </div>
    </header>
    <guilds :arr="guildList"></guilds>
    <div class="content">
      <phoneCar
        v-for="(item, index) in phoneList"
        :key="index"
        :item="item"
      ></phoneCar>
    </div>
  </div>
</template>
<script>
import guilds from "../component/guilds";
import phoneCar from "../component/phoneCarPic";
export default {
  name: "renewed",
  data() {
    return {
      phoneList: null,
      guildList: null,
    };
  },
  methods: {
    async obtainHotList() {
      let arr = await import("../data/hotPhoneList");
      this.phoneList = arr.default;
    },
    async obtainGuildList() {
      let arr = await import("../data/serviceGuildList");
      this.guildList = arr.default;
    },
  },
  components: {
    guilds,
    phoneCar,
  },
  created() {
    this.obtainGuildList();
    this.obtainHotList();
  },
};
</script>
<style lang="scss" scoped>
.renewed {
  background-color: #fff;

  margin: 100px auto;
  width: 1080px;
  .header {
    padding: 20px;
    .left {
      h3 {
        font-weight: bold;
        letter-spacing: 5px;
        position: relative;
        .img {
          position: absolute;
          right: -63px;
          top: -18px;
          img {
            width: 60px;
          }
        }
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
  .content {
    padding: 20px 0;
    * {
      width: 19.5%;
      display: inline-block;
    }
  }
}
</style>