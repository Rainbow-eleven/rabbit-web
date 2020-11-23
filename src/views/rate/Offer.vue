<template>
  <!-- 报价 -->
  <div class="body">
    <div class="box">
      <div class="nav">
        <p>
          <span>维修评价 ><a href="" @click="returnHome">报价信息</a> </span>
        </p>
      </div>
      <div class="mian">
        <!--  -->
        <div class="phone">
          <!-- 手机基本信息 -->
          <div class="module">
            <PhoneInfo></PhoneInfo>
          </div>
          <!-- 报价和权威认证 -->
          <div class="rateattest">
            <!-- 报价 -->
            <div class="rate">
              <div class="rateone">
                <div>
                  <p>评价估价 <i class="iconfont icon-wenhao"> </i></p>
                </div>
                <div class="rateprice">
                  <p class="Price">
                    ￥<span style="font-size:24px">{{
                      PhoneInfo[0].price
                    }}</span>
                  </p>
                  <p class="Dprice">
                    (定金金额：￥<span>{{ PhoneInfo[0].subscription }})</span>
                  </p>
                </div>
              </div>
              <textarea
                cols="30"
                rows="10"
                v-model="PhoneInfo[0].remark"
                @blur="comment"
                placeholder="  "
              >
              </textarea>
              <input
                class="btn btn-primary submit "
                type="button"
                :value="commit"
                @click="submit"
              />
            </div>
            <!-- 权威认证 -->
            <div class="attest">
              <ul>
                <li v-for="(list, index) in attest" :key="index">
                  <p>
                    <i class="iconfont icon-dunpai"></i><span>{{ list }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="prompt">
          <p>
            <i class="iconfont icon-dunpai"></i> 安全小贴士 为了保障你的
            手机隐私不在快递途中、质检、交易过程中泄露，我们粉碎你的隐私,更以严格的政策来管理所有数据的处理方式
          </p>
        </div>
        <div>
          <infolist></infolist>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import infolist from "../rate/component/infolist.vue";
import PhoneInfo from "../rate/component/PhoneInfo.vue";
import "../iconfont/iconfont.css";
export default {
  name: "Offer",
  data() {
    return {
      attest: ["价格公道", "服务快捷", "隐私保护", "安全隐私"],
      commit: "请进行估价",
      PhoneInfo: [
        {
          modelId: "1",
          subscription: 0,
          price: 2010,
          remark: "",
        },
      ],
    };
  },
  methods: {
    // async findStudent() {
    //   const { data } = await this.$http.get(`/list/${id}`);
    // },
    returnHome() {
      this.$router.push("/index");
    },
    comment() {
      if (this.PhoneInfo[0].remark == "") {
        this.commit = "请进行估价";
      } else {
        this.commit = "请联系人工客服";
      }
    },
    submit() {
      if (this.commit == "请进行估价") {
        this.$router.push("/CustomerService");
        localStorage.clear();
      }
    },
  },
  components: {
    PhoneInfo,
    infolist,
  },
  created() {
    this.PhoneInfo[0].price = localStorage.getItem("priceinfo");
    this.PhoneInfo[0].subscription = localStorage.getItem("priceinfo") * 0.15;
  },
    mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
  display: inline-block;
  border-bottom: 2px solid #76bb38;
  text-indent: 8px;
}
.body {
  width: 100%;
  background: #f5f5f5;
  border: solid white;
}
.box {
  width: 1080px;
  margin: 0 auto;
}
.nav {
  margin: 20px 0;
}
.mian {
  background: white;
}
.phone {
  display: flex;
}
.module {
  border-right: 1px solid #f5f5f5;
}
.rateattest {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.rate {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0 0 30px;
}
textarea {
  height: 60px;
  border: 1px dotted #999666;
  outline: none;
}
.rate .rateprice {
  display: flex;
  color: red;
}
.rate .Dprice {
  color: #ff8361;
  font-size: 14px;
  line-height: 40px;
}
.rate i {
  color: #76bb38;
}
.attest {
  border-left: 1px solid #f5f5f5;
  width: 250px;
}
.attest ul {
  width: 200px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px 0 0 20px;
}
.attest ul li {
  margin: 20px 0;
  line-height: 30px;
}
.attest i {
  color: #76bb38;
  padding-right: 5px;
}
.prompt {
  background-image: linear-gradient(to right, #94ddc3, #84c9d4);
  line-height: 40px;
  font-size: 12px;
}
.prompt p {
  width: 80%;
  margin: 0 auto;
  color: white;
}
.submit {
  width: 310px;
  background: #83d838;
  border-radius: 10px;
  color: white;
  line-height: 45px;
  border: none;
}
</style>
