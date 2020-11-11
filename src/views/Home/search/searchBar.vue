<template>
  <div class="inputsearch">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-controle"
        v-model="inputContent"
        placeholder="请输入机器型号"
      />
      <button class="search-bar" @click="buttonSearch">
        <span class="iconfont icon-linedesign-12 iconf"></span>
      </button>
    </div>
    <ul :class="Commercial">
      <li
        v-for="(list, index) in item"
        :key="index"
        @click="modelNameClick(list)"
      >
        {{ list.modelName }}
      </li>
      <span :class="noSearch">没有搜索到您想要的内容</span>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noSearch: "noSearch",
      Commercial: "Commercialstyle",
      inputContent: "",
      item: [],
    };
  },
  methods: {
    async buttonSearch() {
      this.inputContent = this.inputContent.replace(/\s*/g, "");
      if (this.inputContent == "") {
        this.noSearch = "noSearch";
        this.Commercial = "Commercialstyle";
      } else {
        const { data } = await this.$axios.get(
          `/model?keyword=${this.inputContent}`
        );
        this.item = data.data;
        if (this.item == "") {
          this.Commercial = "Commercial";
          this.noSearch = "okSearch";
        } else {
          this.Commercial = "Commercialstyle";
          this.noSearch = "noSearch";
        }
        this.Commercial = "Commercial";
      }
    },
    modelNameClick(e) {
      this.$router.push("/FaultState", e.id);
    },
  },
  watch: {
    inputContent: function () {
      this.buttonSearch();
    },
  },
};
</script>
<style scoped>
.form-controle {
  width: 16.25rem;
  outline-color: rgba(125, 224, 26, 0.719);
  font-size: 0.875rem;
  color: #5f5e5e;
}
.noSearch {
  visibility: hidden;
}
.okSearch {
  visibility: none;
}
.search-bar {
  width: 3.75rem;
  border: 2px solid #83d838;
  background: #71e709;
  border-radius: 0 5px 5px 0;
}
.Commercial {
  background: rgb(211, 252, 187);
  margin-top: -16px;
  border: 1px solid rgb(130, 155, 127);
  text-align: left;
  padding: 10px;
  position: relative;
  z-index: 999;
}
.Commercialstyle {
  background: rgb(211, 252, 187);
  margin-top: -16px;
  border: 1px solid rgb(130, 155, 127);
  text-align: left;
  padding: 10px;
  position: relative;
  z-index: 999;
  visibility: hidden;
}
.Commercial li {
  width: 260px;
  padding: 10px;
  line-height: 30px;
  cursor: pointer;
}
.Commercial li:hover {
  background: #cecdcd;
  color: #fff;
}
.inputsearch {
  width: 20rem;
  margin-right: 1.25rem;
}
.inputsearch input {
  width: 260px;
  height: 3.125rem;
  border: lawngreen 2px solid;
  align-items: center;
  padding-left: 5px;
  /* outline: none; */
  border-radius: 5px 0 0 5px;
}

.iconf {
  font-size: 1.75rem;
  color: #fff;
}
</style>