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
                @click="classClick(index)"
              >
                <p>
                  <span :class="[item.icon, 'iconfont']"></span>
                  {{ item.title }}
                </p>
              </li>
            </ul>
          </aside>
          <article class="article">
            <dl v-for="(item, index) in brandArr" :key="index">
              <dt>{{ item.title }}</dt>
              <dd v-for="(item, index) in item.arr" :key="index">{{ item }}</dd>
            </dl>
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
      classArr: [
        {
          icon: "icon-shouji1",
          title: "手机维修",
        },
        {
          icon: "icon-tablet",
          title: "平板电脑维修",
        },
        {
          icon: "icon-bijiben",
          title: "笔记本维修",
        },
        {
          icon: "icon-fangyingji-xian",
          title: "摄影摄像维修",
        },
        {
          icon: "icon-youxishoubing",
          title: "智能数码维修",
        },
      ],
      classActive: 2,
      brandArr: [
        {
          title: "苹果",
          arr: [
            "苹果iPhone XS Max",
            "苹果iPhone XS",
            "苹果iPhone Xr",
            "苹果iPhone X",
          ],
        },
        {
          title: "苹果",
          arr: [
            "苹果iPhone XS Max",
            "苹果iPhone XS",
            "苹果iPhone Xr",
            "苹果iPhone X",
          ],
        },
        {
          title: "苹果",
          arr: [
            "苹果iPhone XS Max",
            "苹果iPhone XS",
            "苹果iPhone Xr",
            "苹果iPhone X",
          ],
        },
        {
          title: "苹果",
          arr: [
            "苹果iPhone XS Max",
            "苹果iPhone XS",
            "苹果iPhone Xr",
            "苹果iPhone X",
          ],
        },
        {
          title: "苹果",
          arr: [
            "苹果iPhone XS Max",
            "苹果iPhone XS",
            "苹果iPhone Xr",
            "苹果iPhone X",
          ],
        },
        {
          title: "苹果",
          arr: [
            "苹果iPhone XS Max",
            "苹果iPhone XS",
            "苹果iPhone Xr",
            "苹果iPhone X",
          ],
        },
        {
          title: "苹果",
          arr: [
            "苹果iPhone XS Max",
            "苹果iPhone XS",
            "苹果iPhone Xr",
            "苹果iPhone X",
          ],
        },
      ],
    };
  },
  methods: {
    classClick(i) {
      this.classActive = i;
    },
  },
};
</script>
<style lang="scss" scoped>
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
    box-shadow: #ccc 0px 3px 3px;
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
          span {
            margin-right: 20px;
            width: 15px;
            height: 15px;
            color: #fff;
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
          span {
            color: #000;
          }
        }
      }
      .article {
        box-shadow: #999 2px 5px 5px;
        padding-top: 20px;
        padding-right: 80px;
        height: 450px;
        background: #fff;
        dl {
          display: flex;
          line-height: 40px;
          dt {
            font-size: 18px;
            margin: 0 30px;
          }
          dd {
            font-size: 15px;
            margin: 0 10px;
          }
        }
      }
    }
  }
}
</style>