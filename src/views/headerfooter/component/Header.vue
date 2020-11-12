<template>
  <div class="home-nav">
    <header>
      <div class="left-area">
        {{ address }}市<span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-chevron-down"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            /></svg
        ></span>
        <addresse
          class="addresse"
          @addressClick="addressClick"
          :address="address"
        ></addresse>
      </div>
      <div class="right-nav">
        <ul>
          <li>
            <router-link to="/" class="prompt-hover">
              登录
              <div class="Mouse-prompt">
                <span class="iconfont icon-lingxing iconfont-lingxing"></span
                >注册领<span class="price">￥799</span>新人礼包
              </div>
            </router-link>
          </li>
          <li v-for="(item, index) in list" :key="index">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </li>
          <li>
            <router-link to="/">网站导航</router-link>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-chevron-down"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
import addresse from "./address";
export default {
  data() {
    return {
      address: "泊头",
      list: [
        { name: "购物车0件", url: "/" },
        { name: "关于我们", url: "/personal" },
        { name: "企业回收", url: "/" },
        { name: "开放平台", url: "/" },
        { name: "帮助中心", url: "/" },
      ],
    };
  },
  components: {
    addresse,
  },
  methods: {
    addressClick(e) {
      this.address = e;
    },
  },
};
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.home-nav {
  width: 100%;
  height: 50px;
  background: #f3f3f3;
}
header {
  width: 1080px;
  height: 3.125rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.left-area {
  width: 9.375rem;
  font-size: 14px;
  cursor: pointer;
}

.right-nav {
  width: 31.25rem;
}
header .right-nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
header .right-nav ul li {
  border-right: 1px solid #c1c1c1;
  padding-right: 0.3125rem;
  font-size: 12px;
  font-size: #222;
}
header .right-nav ul li:nth-child(2) {
  width: 6.25rem;
}
header .right-nav ul li a {
  text-decoration: none;
  color: #999;
}
.Mouse-prompt {
  transition: all 0.3s;
  position: absolute;
  top: 1.875rem;
  left: -40px;
  background: #ff5c21;
  width: 8.125rem;
  height: 1.875rem;
  line-height: 1.875rem;
  border-radius: 5px;
  color: #ffdaac;
  visibility: hidden;
  opacity: 0;
}
.iconfont-lingxing {
  position: absolute;
  top: -15px;
  font-size: 24px;
  left: 45px;
  color: #ff5c21;
}
.prompt-hover:hover .Mouse-prompt {
  visibility: inherit;
  opacity: 1;
}
.Mouse-prompt > .price {
  color: orange;
}
</style>