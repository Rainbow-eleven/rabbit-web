<template>
  <!-- 回首清单 -->
  <div class="Buildbox">
    <div class="smallbox">
      <div class="recoverinfo">
        <div class="title"><h5>回收清单</h5></div>
        <div class="phoneinfo">
          <div class="imginfo">
            <img class="mx-auto px-2 py-2" :src="phoneinfo[0].faceImg" alt="" />
          </div>
          <div class="listinfo">
            <h6>
              {{ phoneinfo[0].modelName }}
            </h6>
            <p>
              ￥:{{ phoneinfo[0].exchangePrice
              }}<span>{{
                phoneinfo[0].classifyId == 1 ? "手机" : "平板"
              }}</span>
            </p>
          </div>
        </div>
        <!-- 物价详情 -->
        <div class="itme">
          <p class="Price">
            物价详情<i class="iconfont icon-xiala i" @click="ass"></i>
          </p>
          <gudu :showtime="Right">
            <p class="bewrite">
              {{ phoneinfo[0].description }}
            </p>
          </gudu>
        </div>
        <!-- 合计 -->
        <div class="priceinfo">
          <p>
            <i class="iconfont icon-wenhao icon"></i>
            <span class="total"
              >合计( 1 )件<span class="prciespan"
                >￥:{{ phoneinfo[0].exchangePrice }}</span
              ></span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../iconfont/iconfont.css";
import gudu from "./gudu";
export default {
  // props: ['id'],
  name: "recoverList",
  data() {
    return {
      Right: false,
      phoneinfo: [{}],
      id: 1,
    };
  },
  methods: {
    ass() {
      this.Right = !this.Right;
    },
    async fimdStudet() {
      // const { data } = await this.$axios.get(`/model/${this.id}`);
      const { data } = await this.$axios.get(`/model/1`);
      this.phoneinfo[0] = data.data;
      this.ass();
    },
  },
  components: {
    gudu,
  },
  created() {
    this.fimdStudet();
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.Buildbox {
  width: 330px;
  background: white;
}
.smallbox {
  width: 90%;
  margin: 0 auto;
}
.recoverinfo .title h5 {
  line-height: 60px;
}
.recoverinfo .phoneinfo {
  display: flex;
}
.phoneinfo .imginfo {
  width: 90px;
  height: 90px;
  border: 1px solid #e5e5e5;
}
.phoneinfo img {
  width: 100%;
}
.phoneinfo .listinfo {
  margin-left: 20px;
}
.phoneinfo .listinfo h6 {
  width: 10rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  letter-spacing: 2px;
}
.listinfo p {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
}
.listinfo span {
  width: 50px;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  text-align: center;
  background: #f5f5f5;
  box-sizing: border-box;
}
.itme {
  border-bottom: 1px solid #e5e5e5;
}
.itme i {
  padding: 5px;
}
.itme .Price {
  text-align: right;
  line-height: 60px;
}
.Price i {
  font-size: 12px;
}
.itme .bewrite {
  font-size: 12px;
  line-height: 40px;
  text-indent: 2em;
}
// 价格信息
.priceinfo {
  text-align: right;
  padding: 20px 0;
}
.priceinfo .icon {
  color: #a6e370;
  padding-right: 10px;
}
.prciespan {
  color: #ff6027;
  font-size: 16px;
}
.total {
  font-size: 16px;
}
</style>
