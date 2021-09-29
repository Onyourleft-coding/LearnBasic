<template>
  <div class="container">
    <Category title="美食">
      <img src="https://z3.ax1x.com/2021/07/23/WsmBSe.jpg" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <Video controls src="http://vjs.zencdn.net/v/oceans.mp4"></Video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["英雄联盟", "穿越火线", "绝地大逃杀", "GTAV"],
      films: ["《教父》", "《拆弹专家》", "《速度与激情8》", "《黑寡妇》"],
    };
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>
