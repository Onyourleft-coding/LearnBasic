<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址:{{ schoolAddress }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      schoolName: "qingzhi",
      schoolAddress: "清远",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.schoolName);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
