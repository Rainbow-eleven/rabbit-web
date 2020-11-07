<template>
  <div
    class="maks d-flex justify-content-center align-items-center p-0 w-100 h-100"
  >
    <div class="loader rounded-circle">Loading...</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.maks {
  background-color: rgba($color: #fff, $alpha: 0.8);
}
.loader {
  font-size: 20px;
  width: 1.2rem;
  height: 1.2rem;
  text-indent: -9999em;
  animation: load-effect 1s infinite linear;
}

@keyframes load-effect {
  0% {
    box-shadow:

         /*

          0:左移3em

          -3em:下移2em

          0:模糊距离0，即纯色

          .2em:外扩.2em

          #456275:白色

         */ 0 -3em
        0 0.2em #456275,
      /*上*/ 2em -2em 0 0 #456275, /*右上*/ 3em 0 0 -0.5em #456275,
      /*右*/ 2em 2em 0 -0.5em #456275, /*右下*/ 0 3em 0 -0.5em #456275,
      /*下*/ -2em 2em 0 -0.5em #456275, /*左下*/ -3em 0 0 -0.5em #456275,
      /*左*/ -2em -2em 0 0 #456275; /*左上*/
  }

  12.5% {
    box-shadow: 0 -3em 0 0 #456275, 2em -2em 0 0.2em #456275, 3em 0 0 0 #456275,
      2em 2em 0 -0.5em #456275, 0 3em 0 -0.5em #456275,
      -2em 2em 0 -0.5em #456275, -3em 0 0 -0.5em #456275,
      -2em -2em 0 -0.5em #456275;
  }

  25% {
    box-shadow: 0 -3em 0 -0.5em #456275, 2em -2em 0 0 #456275,
      3em 0 0 0.2em #456275, 2em 2em 0 0 #456275, 0 3em 0 -0.5em #456275,
      -2em 2em 0 -0.5em #456275, -3em 0 0 -0.5em #456275,
      -2em -2em 0 -0.5em #456275;
  }

  37.5% {
    box-shadow: 0 -3em 0 -0.5em #456275, 2em -2em 0 -0.5em #456275,
      3em 0 0 0 #456275, 2em 2em 0 0.2em #456275, 0 3em 0 0 #456275,
      -2em 2em 0 -0.5em #456275, -3em 0 0 -0.5em #456275,
      -2em -2em 0 -0.5em #456275;
  }

  50% {
    box-shadow: 0 -3em 0 -0.5em #456275, 2em -2em 0 -0.5em #456275,
      3em 0 0 -0.5em #456275, 2em 2em 0 0 #456275, 0 3em 0 0.2em #456275,
      -2em 2em 0 0 #456275, -3em 0 0 -0.5em #456275, -2em -2em 0 -0.5em #456275;
  }

  62.5% {
    box-shadow: 0 -3em 0 -0.5em #456275, 2em -2em 0 -0.5em #456275,
      3em 0 0 -0.5em #456275, 2em 2em 0 -0.5em #456275, 0 3em 0 0 #456275,
      -2em 2em 0 0.2em #456275, -3em 0 0 0 #456275, -2em -2em 0 -0.5em #456275;
  }

  75% {
    box-shadow: 0 -3em 0 -0.5em #456275, 2em -2em 0 -0.5em #456275,
      3em 0 0 -0.5em #456275, 2em 2em 0 -0.5em #456275, 0 3em 0 -0.5em #456275,
      -2em 2em 0 0 #456275, -3em 0 0 0.2em #456275, -2em -2em 0 0 #456275;
  }

  87.5% {
    box-shadow: 0 -3em 0 0 #456275, 2em -2em 0 -0.5em #456275,
      3em 0 0 -0.5em #456275, 2em 2em 0 -0.5em #456275, 0 3em 0 -0.5em #456275,
      -2em 2em 0 0 #456275, -3em 0 0 0 #456275, -2em -2em 0 0.2em #456275;
  }

  100% {
    box-shadow: 0 -3em 0 0.2em #456275, 2em -2em 0 0 #456275,
      3em 0 0 -0.5em #456275, 2em 2em 0 -0.5em #456275, 0 3em 0 -0.5em #456275,
      -2em 2em 0 -0.5em #456275, -3em 0 0 -0.5em #456275, -2em -2em 0 0 #456275;
  }
}
</style>