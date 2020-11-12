<template>
  <div>
    <div class="addressStyle">
      <ul>
        <li
          v-for="(item, index) in addressn"
          :key="index"
          @click="clickAddress(index)"
          :class="item.styleaddress"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "addressn",
  props: ["address"],
  data() {
    return {
      addressnid: 0,
      addressn: [
        {
          name: "邯郸",
          styleaddress: "",
        },
        {
          name: "沧州",
          styleaddress: "",
        },
        {
          name: "泊头",
          styleaddress: "",
        },
        {
          name: "重庆",
          styleaddress: "",
        },
        {
          name: "武隆",
          styleaddress: "",
        },
        {
          name: "上海",
          styleaddress: "",
        },

        {
          name: "北京",
          styleaddress: "",
        },
        {
          name: "天京",
          styleaddress: "",
        },
        {
          name: "澳门",
          styleaddress: "",
        },
        {
          name: "杭州",
          styleaddress: "",
        },
        {
          name: "武安",
          styleaddress: "",
        },
        {
          name: "呼和浩特",
          styleaddress: "",
        },
        {
          name: "台湾",
          styleaddress: "",
        },
        {
          name: "邢台",
          styleaddress: "",
        },
      ],
    };
  },
  methods: {
    clickAddress(e) {
      for (let i = 0; i < this.addressn.length; i++) {
        this.addressn[i].styleaddress = "";
      }
      this.addressn[e].styleaddress = "addresseas";
      this.$emit("addressClick", this.addressn[e].name);
    },
    clickaddre() {
      for (let i = 0; i < this.addressn.length; i++) {
        if (this.addressn[i].name == this.address) {
          this.addressn[i].styleaddress = "addresseas";
        }
      }
    },
  },
  created() {
    this.clickaddre();
  },
};
</script>
<style scoped>
.addressStyle {
  width: 400px;
  padding: 10px;
  background: #fff;
  border: 1px solid #333;
}
.addressStyle ul {
  display: flex;
  flex-wrap: wrap;
}
.addressStyle ul li {
  width: 75px;
  height: 40px;
  text-align-last: center;
  line-height: 2.5rem;
  cursor: pointer;
}
.addressStyle ul .addresseas {
  background: #333;
  color: #fff;
  border-radius: 0.3125rem;
}
.addresse {
  position: absolute;
  top: 3.125rem;
  visibility: hidden;
  overflow: hidden;
  width: 0;
  height: 0;
  transition: all 0.5s;
}
.left-area:hover .addresse {
  position: absolute;
  width: 25rem;
  height: 31.25rem;
  top: 3.125rem;
  visibility: initial;
}
</style>