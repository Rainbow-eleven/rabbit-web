<template>
  <div id="app">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/FaultState">总页面</router-link> |
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import "./assets/css/transition/fade.scss";
@import "./assets/css/global/index.scss";

</style>
