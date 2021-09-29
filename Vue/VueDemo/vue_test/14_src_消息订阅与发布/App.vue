<template>
  <div class="App">
    <h1>{{ msg }}</h1>
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
    return {
      msg: "你好啊！",
    };
  },
  components: {
    School,
    Student,
  },
};
</script>

<style>
/*  app里不推荐加上scoped */
.App {
  background-color: gray;
  padding: 5px;
}
</style>
