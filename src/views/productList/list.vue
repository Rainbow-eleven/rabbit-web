<template>
  <div>
    <Tips></Tips>
    <Nav></Nav>
  </div>
</template>
<script>
import Tips from "./component/tips";
import Nav from "./component/nav";
export default {
  name: "list",
  components: {
    Tips,
    Nav,
  },
};
</script>
