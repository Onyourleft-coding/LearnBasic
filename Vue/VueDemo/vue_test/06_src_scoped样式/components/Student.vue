<template>
  <!-- 组件的结构 -->
  <div class="test">
    <h2>学生姓名{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  name: "Student",
  data() {
    return {
      msg: "欢迎学习vue——props复习",
      name: "小白",
      sex: "男",
    };
  },
};
</script>

<style scoped>
.test{
  background-color: orange;
}
</style>
