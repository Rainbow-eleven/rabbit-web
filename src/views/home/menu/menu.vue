<template>
  <div class="menu">
    <div class="content">
      <nav class="nav">
        <ul>
          <li
            v-for="(item, index) in navArr"
            :key="index"
            :class="{ active: index === navActive }"
          >
            <a :href="item.classA">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <div class="center">
        <div class="main">
          <aside class="aside">
            <ul>
              <li
                v-for="(item, index) in classArr"
                :key="index"
                :class="{ active: index === classActive }"
                @click="classClick(index, item.id)"
              >
                <p>
                  <!-- <span :class="[item.icon, 'iconfont']"></span> -->
                  <img :src="item.icon" alt="" />
                  {{ item.classifyName }}
                </p>
              </li>
            </ul>
          </aside>
          <article :class="{ article: true }">
            <ul :class="{ active: i_isactive }">
              <li v-for="(item, index) in brandArr" :key="index">
                <dl>
                  <dt>{{ item.brandName }}</dt>
                  <dd v-for="(item, index) in item.models" :key="index">
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
                  <button style="font-size: 14px">更多>></button>
                </div>
              </li>
              <div
                class="lvbut"
                @click="
                  () => {
                    $router.push('/list');
                  }
                "
              >
                更多品牌 &gt;
              </div>
            </ul>
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
      classArr: null,
      classActive: 0,
      brandArr: [],
      i_isactive: true,
    };
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
      let { data } = await this.$axios.get(`/bcr/${id}`);
      let dataArr = data.data.brands;
      dataArr.map((item) => {
        this.obtainModel(item.id);
      });
    },
    async obtainModel(id) {
      let { data } = await this.$axios.get(`/model/${id}`);
      this.brandArr.push(data.data);
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu {
  padding: 0 !important;
  background-color: #fff;
  .nav {
    position: relative;
    width: 1080px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: #000 0px 1px 2px;
    ul {
      display: flex;
      li {
        padding: 10px 0;
        text-align: center;
        width: 200px;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #999;
        }
      }
    }
    .active {
      animation: bgColor 0.3s linear;
      a {
        color: #fff;
      }
      background: #83d838;
    }
  }
  .center {
    background: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2972769053,1513981736&fm=26&gp=0.jpg")
      no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 400px;
    display: flex;
    .main {
      display: flex;
      width: 1080px;
      margin: 0 auto;
      height: 400px;
      .aside {
        padding: 10px 0 0 0;
        background-color: rgba(0, 0, 0, 0.7);
        width: 200px;
        li {
          padding: 10px 0;
          text-align: left;
          padding-left: 30px;
          color: #fff;
          line-height: 50px;
          cursor: pointer;
          transition: all 0.3s;
          img {
            margin-right: 20px;
            width: 15px;
            height: 15px;
            color: #fff;
            width: 20px;
            height: 20px;
          }
          p {
            font-size: 18px;
            margin: 0;
            padding: 0;
          }
        }
        .active {
          background-color: #fff;
          color: #000;
          animation: bgColor 0.5s linear;
          transition: 0.5s;
          span {
            color: #000;
          }
        }
      }

      .article {
        box-shadow: #999 2px 5px 5px;
        padding-top: 20px;
        padding-right: 20px;
        height: 470px;
        background: #fff;
        width: 800px;

        .active {
          animation: anim 0.8s linear;
        }
        ul {
          .lvbut {
            text-align: center;
            line-height: 35px;
            width: 120px;
            height: 38px;
            border: #71c02e 2px solid;
            border-radius: 12px;
            color: #71c02e;
            margin-left: 30px;
            cursor: pointer;
          }
          li {
            display: flex;
            line-height: 40px;
            justify-content: space-between;
            dl {
              display: flex;
              dt {
                font-size: 18px;
                margin: 0 30px;
              }
              dd {
                cursor: pointer;
                font-size: 15px;
                display: inline-block;
                margin: 0 10px;
                color: #666;
              }
              dd:hover {
                color: #000;
              }
            }
            button {
              width: 60px;
              height: 30px;
              padding: 5px;
              font-size: 14px;
              text-align: center;
              line-height: 100%;
              background-color: #fff;
              border: 1px solid #ccc;
              outline-color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>