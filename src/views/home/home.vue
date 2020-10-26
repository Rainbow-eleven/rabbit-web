<template>
  <div class="home">
    <div class="content">
      <menuee></menuee>
      <service></service>
      <renewed></renewed>
      <banner></banner>
    </div>
  </div>
</template>
<script>
import service from "./service/service.vue";
import renewed from "./renewed/renewed.vue";
import banner from "./banner/banner.vue";
import menuee from "./menu/menu";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    service,
    renewed,
    banner,
    menuee,
  },
  methods: {
    async login() {
      let user = {
        account: "qiu3291002845@gmail.com",
        password: "123456",
      };
      let data = await this.$axios.post("/login", user);
      console.log(data);
    },
  },
  created() {
    // this.login();
  },
};
</script>
<style lang='scss' scoped>
.home {
  background-color: #f9f9f9;
  .content {
    & > * {
      box-shadow: #ccc 10px 10px 10px;
      padding: 20px;
    }
  }
}
</style>