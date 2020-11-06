<template>
  <div class="centerstyle">
    <EleUploadImage
      action="http://192.168.1.101:3000/upload"
      v-model="image"
      :headers="headersOption"
      :responseFn="handleResponse"
      :drag="true"
      crop
      name="file"
      :isShowSuccessTip="false"
      :isShowTip="false"
      class="input"
    ></EleUploadImage>
    <img :src="img" class="imgStyle" />
  </div>
</template>
<script>
export default {
  name: "avatar",
  data() {
    return {
      image: "",
      file: "file",
      headersOption: {
        Authorization: `Bearer ${this.$store.state.login.token}`,
      },
      img:
        "https://czh1010.oss-cn-beijing.aliyuncs.com/images/20201102/19480942.png",
    };
  },
  methods: {
    handleResponse(response) {
      this.img = response.src;
      console.log(this.img);
    },
  },
};
</script>
<style scoped>
.centerstyle {
  position: relative;
}
.input {
  width: 8rem;
  height: 8rem;
  opacity: 1;
  z-index: 10;
  position: absolute;
  border-radius: 5.25rem;
  margin-top: 2.5rem;
  left: 28.2rem;
}
.plus {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 5px;
  top: 20px;
  left: 350px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
}
.plus span {
  opacity: 1;
}
.imgStyle {
  width: 8rem;
  height: 8rem;
  border-radius: 5.25rem;
  margin-top: 2.5rem;
  padding: 0.3125rem;
  border: 1px solid #ccc;
}
</style>