<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址:{{ schoolAddress }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  name: "School",
  data() {
    return {
      schoolName: "qingzhi",
      schoolAddress: "清远",
    };
  },
};
</script>

<style scoped>
.demo{  
  background-color: skyblue;
}
</style>
