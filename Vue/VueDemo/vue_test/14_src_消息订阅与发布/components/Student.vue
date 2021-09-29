<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
// 组件交互相关的代码（数据、方法等等）
export default {
  name: "Student",
  data() {
    return {
      name: "小白",
      sex: "男",
    };
  },
  mounted() {
    // console.log("Student", this.x);
  },
  methods: {
    sendStudentName(){
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',666)
    }
  }
};
</script>

<style scoped>
.student {
  margin-top: 30px;
  padding: 5px;
  background-color: orange;
}
</style>
