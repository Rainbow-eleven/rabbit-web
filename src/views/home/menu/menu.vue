<template>
  <div class="menu p-0">
    <div class="content">
      <nav class="nav mx-auto">
        <ul class="d-flex">
          <li
            v-for="(item, index) in navArr"
            :key="index"
            :class="{ active: index === navActive }"
            class="mx-auto text-center font-weight-bold"
          >
            <a :href="item.classA">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <div class="center d-flex w-100">
        <div class="main d-flex mx-auto">
          <aside class="aside overflow-hidden">
            <ul class="d-flex flex-column">
              <li
                v-for="(item, index) in showClassArr"
                :key="index"
                :class="{ active: index === classActive }"
                @click="classClick(index, item.id)"
              >
                <p class="m-0 p-0">
                  <img :src="item.icon" alt="" />
                  {{ item.classifyName }}
                </p>
              </li>
            </ul>
          </aside>
          <article :class="{ article: true }" class="overflow-hidden">
            <ul v-if="brandArr.length > 0" :class="{ active: i_isactive }">
              <li
                v-for="(item, index) in brandArr"
                class="text-muted d-flex"
                :key="index"
              >
                <dl class="m-0 p-0 d-flex flex-wrap">
                  <dt class="text-dark">
                    {{ item[0] && item[0].brandId.brandName }}
                  </dt>
                  <dd
                    v-for="(item, index) in item"
                    class="text-truncate"
                    :key="index"
                  >
                    {{ item.modelName }}
                  </dd>
                </dl>
                <div
                  @click="
                    () => {
                      $router.push('/list');
                    }
                  "
                >
                  <button
                    style="font-size: 14px"
                    class="more text-muted text-center"
                  >
                    更多>>
                  </button>
                </div>
              </li>
              <div
                class="lvbut text-center"
                @click="
                  () => {
                    $router.push('/list');
                  }
                "
              >
                更多品牌 &gt;
              </div>
            </ul>
            <div v-else>暂无数据</div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navArr: [
        { title: "旧机维修", classA: "#" },
        { title: "旧机维修", classA: "#service" },
        { title: "以旧换新", classA: "#renewed" },
      ],
      navActive: 0,
      classArr: [],
      classActive: 0,
      brandArr: [],
      i_isactive: true,
    };
  },
  computed: {
    showClassArr() {
      let arr = this.classArr.filter((item) => {
        return item.status;
      });
      return arr;
    },
  },
  methods: {
    classClick(i, id) {
      this.i_isactive = true;
      this.classActive = i;
      this.ObtainBrand(id);
      this.isActiveFalse();
    },
    isActiveFalse() {
      setTimeout(() => {
        this.i_isactive = false;
      }, 1000);
    },
    async ObtainBrand(id) {
      this.brandArr = [];
      let { data } = await this.$axios.get(`/brand`);
      let dataArr = [];
      data.data.map((item) => {
        if (item.classifyId.id === id) {
          dataArr.push(item.id);
        }
      });
      let modelArr = [];
      dataArr.map(async (item) => {
        let yy = await this.obtainModel(item);
        if (yy) {
          modelArr.push(yy);
        }
      });
      this.brandArr = modelArr;
      console.log(this.brandArr);
    },
    async obtainModel(id) {
      let { data } = await this.$axios.get(`/model`);
      let dataArr = [];
      data.data.filter((item) => {
        if (item.brandId && item.brandId.id === id) {
          dataArr.push(item);
        }
      });
      if (dataArr.length > 0) {
        return dataArr;
      }
    },
    async ObtainClass() {
      let { data } = await this.$axios.get("/classify");
      this.classArr = data.data;
      this.isActiveFalse();
      this.ObtainBrand(this.classArr[0].id);
    },
  },
  created() {
    this.ObtainClass();
  },
};
</script>
<style lang="scss" scoped>
@import "../../../assets/css/transition/bg.scss";
@import "../../../assets/css/transition/anim.scss";
.menu {
  background-color: #fff;
  .nav {
    position: relative;
    width: 1080px;
    background-color: #fff;
    ul {
      li {
        padding: 10px 0;
        width: 250px;
        cursor: pointer;
        font-size: 20px;
        a {
          text-decoration: none;
          color: #454545;
        }
      }
    }
    .active {
      animation: bgColor 0.3s linear;
      background: #83d838;

      a {
        color: #fff;
      }
    }
  }
  .center {
    background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2672237493,2557152787&fm=26&gp=0.jpg")
      no-repeat;
    background-size: 100% 100%;
    height: 400px;
    .main {
      width: 1080px;
      height: 400px;
      .aside {
        padding: 10px 0 0 0;
        background-color: rgba(0, 0, 0, 0.7);
        width: 250px;
        li {
          padding: 15px 0;
          text-align: left;
          padding-left: 30px;
          line-height: 35px;
          cursor: pointer;
          transition: all 0.3s;
          img {
            margin-right: 5px;
            width: 20px;
            height: 20px;
          }
          p {
            color: #fff;
            font-size: 18px;
          }
        }
        .active {
          background-color: #fff;
          animation: bgColor 0.5s linear;
          transition: 0.5s;
          p {
            color: #000;
          }
        }
      }
      .article {
        padding: 20px 5px 80px 5px;
        height: 470px;
        background: #fff;
        width: 800px;
        box-shadow: 0 0 5px #ccc;
        z-index: 9;
        position: relative;
        .active {
          animation: anim 0.8s linear;
        }
        ul {
          .lvbut {
            line-height: 35px;
            position: absolute;
            left: 10px;
            bottom: 8px;
            width: 120px;
            height: 38px;
            border: #71c02e 2px solid;
            border-radius: 12px;
            color: #71c02e;
            margin-left: 30px;
            cursor: pointer;
          }
          li {
            position: relative;
            line-height: 40px;
            padding-right: 80px;
            dl {
              height: 45px;
              overflow: hidden;
              dt {
                font-size: 18px;
                margin: 0 10px;
                line-height: 45px;
                font-weight: 800;
              }
              dd {
                height: 45px;
                line-height: 45px;
                cursor: pointer;
                font-size: 15px;
                transition: all 0.5s;
                margin: 0 8px;
                letter-spacing: 0;
              }
              dd:hover {
                color: #333;
                transition: all 0.5s;
              }
            }
            button {
              position: absolute;
              right: 10px;
              top: 15px;
              width: 65px;
              height: 30px;
              padding: 8px;
              line-height: 100%;
              background-color: #fff;
              border: 0px;
              outline-color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>