<template>
  <div class="footer">
    <div class="footer-top">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <h5>{{ item.title }}</h5>
          <p v-for="(listContent, index) in item.content" :key="index">
            <a :href="listContent.address">{{ listContent.name }}</a>
          </p>
        </li>
      </ul>
    </div>
    <div class="Links">
      <div>友情链接:</div>
      <ul>
        <li v-for="(item, index) in Links" :key="index">
          <a :href="item.url">
            {{ item.name }}
          </a>
          |
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "bottomFooter",
  data() {
    return {
      list: [
        {
          title: "交易方式",
          content: [
            { name: "上海交易方式", address: "http://www.baidu.com" },
            { name: "北京交易方式", address: "http://www.baidu.com" },
            { name: "全国交易方式", address: "http://www.baidu.com" },
          ],
        },
        {
          title: "质检说明",
          content: [
            { name: "质检名词解释", address: "http://www.baidu.com" },
            { name: "专业质检说明", address: "http://www.baidu.com" },
          ],
        },
        {
          title: "帮助中心",
          content: [
            { name: "常见问题", address: "http://www.baidu.com" },
            { name: "用户协议", address: "http://www.baidu.com" },
            { name: "隐私政策", address: "http://www.baidu.com" },
          ],
        },
        {
          title: "关于我们",
          content: [
            { name: "了解我们", address: "http://www.baidu.com" },
            { name: "加入我们", address: "http://www.baidu.com" },
            { name: "商务合作", address: "http://www.baidu.com" },
            { name: "维修商品", address: "http://www.baidu.com" },
            { name: "维修商合作", address: "http://www.baidu.com" },
            { name: "门店加盟", address: "http://www.baidu.com" },
          ],
        },
        {
          title: "合作伙伴",
          content: [{ name: "京东", address: "http://www.baidu.com" }],
        },
      ],
      Links: [
        {
          name: "北京二手手机",
          url: "http://baidu.com",
        },
        {
          name: "北京二手手机维修",
          url: "http://baidu.com",
        },
        {
          name: "使用租机",
          url: "http://baidu.com",
        },
        {
          name: "二手手机",
          url: "http://baidu.com",
        },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  width: 100%;
  margin-top: 3.125rem;
}
.footer-top {
  width: 1080px;
  margin: 0 auto;
}
.footer-top ul {
  display: flex;
  justify-content: space-around;
  text-align: left;
}
.footer-top ul li h5 {
  font-size: 16px;
  font-weight: bold;
}
.footer-top ul li a {
  text-decoration: none;
  color: #333;
}
.footer-top ul li p {
  font-size: 14px;
  margin: 0;
  padding: 0;
  line-height: 25px;
  color: #c1c1c1;
}
.footer .Links {
  width: 1080px;
  height: 60px;
  display: flex;
  margin: 0 auto;
  margin-top: 1.875rem;
  border-top: 1px solid #c1c1c1;
  justify-content: center;
  align-items: center;
}
.footer .Links ul {
  display: flex;
}
.footer .Links a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  margin: 0 10px;
}
</style>