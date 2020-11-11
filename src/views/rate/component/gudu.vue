<template>
  <!-- 过渡 -->
  <div>
    <transition name="fade">
      <slot v-if="show"></slot>
    </transition>
        <transition name="fadetwo">
      <slot v-if="showtime"></slot>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["show",'showtime'],
  name: "gudu",
};
</script>

<style>
.fadetwo-enter {
  opacity: 0;
}
.fadetwo-enter-active {
  transition: opacity 1s;
}
.fadetwo-leave-to {
  opacity: 0;
}
.fadetwo-leave-active {
  transition: opacity 1s;
}
</style>
