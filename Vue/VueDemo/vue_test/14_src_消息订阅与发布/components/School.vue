<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址:{{ schoolAddress }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
    demo(msgName, data) {
      console.log(
        "有人发布了hello消息，hello消息的回调执行了",
        msgName,
        data,
        this
      );
    },
  },
  mounted() {
    // // console.log("School", this);
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是school组件，收到了数据',data);
    // })
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
