<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1
    };

  },
  /*mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.1;
      if (this.opacity <= 0) this.opacity = 1;
    },200);
  },
  beforeDestroy() {
    console.log("news组件即将被销毁");
    clearInterval(this.timer);
  }*/
  //激活的
  activated() {
    console.log("news组件被激活了");
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.1;
      if (this.opacity <= 0) this.opacity = 1;
    },200);
  },
  //失活的
  deactivated() {
    console.log("new组件失活了");
    clearInterval(this.timer);
  }
};
</script>