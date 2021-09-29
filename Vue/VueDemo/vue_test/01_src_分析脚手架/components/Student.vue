<template>
  <!-- 组件的结构 -->
  <div clang="demo">
    <h2>学生姓名{{ name }}</h2>
    <h2>年龄{{ age }}</h2>
    <button @click="showName">点我提示名字</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  name: "Student",
  data() {
    return {
      name: "qingzhi",
      age:16
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style scoped>
/* 组件的样式 */
.demo {
  background-color: rgb(107, 36, 221);
}
</style>
