<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About即将被销毁");
  },
  mounted() {
    console.log("About组件挂在完毕", this);
  },
};


</script>

<style scoped></style>
