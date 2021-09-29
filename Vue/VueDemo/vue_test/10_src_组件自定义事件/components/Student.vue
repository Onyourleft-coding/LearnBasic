<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名{{ name }}</h2>
    <h2>性别:{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例对象（vc）</button>
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
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add回调被调用了");
      this.number++;
    },
    sendStudentName() {
      // 触发Student组件实例身上的atguigu问题
      this.$emit("atguigu", this.name, 666, 777, 888);
      // this.$emit("demo");
      // this.$emit("click");
    },
    unbind() {
      this.$off("atguigu"); //解绑一个自定义事件
      // this.$off(["atguigu", "demo"]); //解绑多个自定义事件
      // this.$off(); //暴力写法，全部解绑
    },
    death() {
      this.$destroy(); //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效了
    },
  },
  mounted() {
    this.$on("hhh", (data) => {
      console.log("hhh被触发了", data);
    });
  },
};
</script>

<style scoped>
.student {
  margin-top: 30px;
  padding: 5px;
  background-color: orange;
}
</style>
