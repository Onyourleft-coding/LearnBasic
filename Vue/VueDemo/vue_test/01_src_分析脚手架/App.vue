<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <School />
    <Student />
  </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    School,
    Student,
  },
};
</script>

<style scoped></style>
