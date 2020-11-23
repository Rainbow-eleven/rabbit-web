<template>
  <!-- 信息列表 -->
  <div class="body">
    <div class="Buildbox">
      <div>
        <ul>
          <li v-for="(list, index) in phoneinfo[0].valueinf" :key="index">
            <input class="btn btn-default" type="button" :value="list" />
          </li>
        </ul>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infolist",
  data() {
    return {
      phoneinfo: [
        {
          valueinf: [
            "中国大陆",
            "全网通",
            "纯白色",
            "6+128G",
            "正常开机进入桌面",
            "童话正常",
            "无维修情况",
            "指纹功能正常",
            "摄像功能正常",
            "充电正常",
            "无限正常",
            "显示完美,无瑕疵",
            "屏幕完美,无划痕",
            "全新包装未拆封",
            "机身无尽水",
            "机身无弯曲",
            "触摸功能正常",
            "账号可退出",
            "光想，距离感应正常",
            "震动正常",
          ],
        },
      ],
    };
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
}
.Buildbox {
  border-top:  solid #f5f5f5;
  width: 1080px;
  background: white;
}
.Buildbox ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 20px auto;
}
.Buildbox ul li {
  hyphens: 20px;
  margin: 10px;
  border: 1px solid #cecece;
  border-radius: 20px;
}
input {
  border-radius: 15%;
  font-size: 16px;
  color: #cecece;
  padding: 0 10px;
}
.foot{
  background: orangered;
}
</style>
