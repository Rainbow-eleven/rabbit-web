<template>
  <div class="renewed" id="renewed">
    <header class="header">
      <div class="left">
        <h3 class="font-weight-bold d-inline-block">
          以旧换新
          <div class="img">
            <img
              src="https://czh1010.oss-cn-beijing.aliyuncs.com/images/20201030/19331273.png"
              alt=""
            />
          </div>
        </h3>
        <sub class="text-dark d-inline-block">旧机回收抵扣新机款</sub>
      </div>
    </header>
    <guilds :arr="guildList"></guilds>
    <div class="content">
      <phoneCar
        v-for="(item, index) in phoneLists"
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
      phoneList: [],
      guildList: [],
    };
  },
  computed: {
    phoneLists() {
      let arr = this.phoneList.slice(0, 20);
      return arr;
    },
  },
  methods: {
    async obtainHotList() {
      let { data } = await this.$axios.get("/model");
      this.phoneList = data.data;
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
  box-shadow: 0px 0px 3px 3px #ccc;
  margin: 100px auto;
  width: 1080px;
  .header {
    padding: 20px;
    .left {
      h3 {
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
      }
    }
  }
  .content {
    padding: 20px 0;
    & > * {
      width: 19.5%;
      display: inline-block;
    }
  }
}
</style>