<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import "./assets/css/transition/fade.scss";
@import "./assets/css/global/index.scss";
</style>
