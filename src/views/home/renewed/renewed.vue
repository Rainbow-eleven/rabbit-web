<template>
  <div class="renewed" id="renewed">
    <header class="header">
      <div class="left">
        <h3>以旧换新</h3>
        <sub>旧机回收抵扣新机款</sub>
      </div>
    </header>
    <guilds :arr="guildList"></guilds>
    <div class="content">
      <phoneCar
        v-for="(item, index) in phoneList"
        :key="index"
        :item="item"
      ></phoneCar>
    </div>
  </div>
</template>
<script>
import guilds from "../component/guilds";
import phoneCar from "../component/phoneCarPic";
export default {
  name: "renewed",
  data() {
    return {
      phoneList: [
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
        {
          imgUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603274353378&di=1d775689eddf51bb721271fa37822572&imgtype=0&src=http%3A%2F%2Fspic1.51fanli.net%2Fgroup2%2FM07%2FEC%2FAA%2FwKgDiV05B3eAHP2wAAsAwxK66eM033_350x350.jpg",
          title: "华为 P30",
          pic: 3988,
        },
      ],
      guildList: [
        {
          icon: "icon-anquan",
          title: "正品自营，全国联保",
        },

        {
          icon: "icon-shouji",
          title: "任意机型，旧机抵扣",
        },
        {
          icon: "icon-hour",
          title: "2小时 闪电直送",
        },
        {
          icon: "icon-anquan",
          title: "专业擦除，隐私保障",
        },
      ],
    };
  },
  components: {
    guilds,
    phoneCar,
  },
};
</script>
<style lang="scss" scoped>
.renewed {
  background-color: #fff;

  margin: 100px auto;
  width: 1080px;
  .header {
    padding: 20px;
    .left {
      h3 {
        font-weight: bold;
        letter-spacing: 5px;
      }
      sub {
        font-size: 16px;
        margin-left: 10px;
        letter-spacing: 0px;
        color: #999;
      }
      * {
        display: inline-block;
      }
    }
  }
  .content {
    padding: 20px 0;
    * {
      width: 19.5%;
      display: inline-block;
    }
  }
}
</style>