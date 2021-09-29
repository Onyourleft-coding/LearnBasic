<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址:{{ schoolAddress }}</h2>
    <button @click="showName">点我提示学校名</button>
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
  methods: {
    showName() {
      alert(this.schoolName);
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
