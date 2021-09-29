<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://z3.ax1x.com/2021/07/23/WsmBSe.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <Video
        slot="center"
        controls
        src="http://vjs.zencdn.net/v/oceans.mp4"
      ></Video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎观影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
