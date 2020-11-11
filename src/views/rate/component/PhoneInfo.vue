<template>
  <!-- 手机信息 -->
  <!-- 跟标签 -->
  <div>
    <!-- body -->
    <div class="Buildbox">
      <!--信息部分 -->
      <div class="phoneInfo">
        <img :src="phoneInfo.contentImg" alt="" />
        <h5>{{ phoneInfo.modelName }}</h5>
        <a href="#" @click="comeback">请选择机型></a>
      </div>
    </div>
  </div>
</template>
<script>
// import { _axios } from "@/plugins/axios.js";
export default {
  // props: ["id"],
  name: "PhoneInfo",
  data() {
    return {
      props: ["title", "hintImg"],
      phoneInfo: {},
      id: 1,
    };
  },
  methods: {
    comeback() {
      this.$router.push("/list");
    },
    async fimdStudet() {
      const { data } = await this.$axios.get(`/model/${this.id}`);
      this.phoneInfo = data.data;
    },
  },
  created() {
    this.fimdStudet();
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
.Buildbox {
  width: 280px;
  height: 380px;
  background: white;
}
.Buildbox .phoneInfo {
  width: 200px;
  margin: 0 auto;
  text-align: center;
}
.Buildbox .phoneInfo img {
  height: 197px;
  width: 165px;
  margin: 30px 0;
}
.Buildbox .phoneInfo h5 {
  width: 10rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.Buildbox .phoneInfo a {
  display: inline-block;
  margin-top: 40px;
  color: #a7e27c;
  font-size: 16px;
}
</style>
