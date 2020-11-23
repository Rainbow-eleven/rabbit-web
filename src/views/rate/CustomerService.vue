<template>
  <!-- 客服 -->
  <div class="body">
    <div class="box">
      <div class="KfInfo">
        <!-- 客服图标 -->
        <div class="icon">
          <img src="../.././assets/css/img/KeFu.jpg" alt="" />
        </div>
        <!-- 信息部分 -->
        <div class="info">
          <div class="info-content">
            <h6>预约已成功,维修大师将按时上门,请保持电话畅通</h6>
            <p>{{ PhoneInfo[0].Countdown }}秒<span>后跳转首页</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomerService",
  data() {
    return {
      PhoneInfo: [
        {
          Countdown: 6,
        },
      ],
    };
  },
  methods: {
    Countdown() {
      let phon = this;
      for (let i = this.PhoneInfo[0].Countdown; i > 0; ) {
        i--;
        this.PhoneInfo[0].Countdown = i;
        window.setTimeout(phon.Countdown, 1000);
        return;
      }
      // this.$router.push("/FaultState");
    },
  },
  created() {
    this.Countdown();
  },
    mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.body {
  width: 100%;
  border: solid white;
}
.box {
  width: 1080px;
  margin: 60px auto;
}
.KfInfo {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.icon {
  width: 240px;
}
img {
  width: 100%;
}
.info-content {
  margin: 25px;
}
.info p {
  line-height: 70px;
  color: orangered;
}
.info span {
  color: black;
}
</style>
