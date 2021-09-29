<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!--      这里的News是组件名，即News里定义的name-->
      <!--      这是缓存多个组件，加:和写成数组的方式-->
      <keep-alive :include="['News','Message']">
        <router-view></router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
  /* beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }, */
  /* mounted() {
    console.log('Home组件挂载完毕了',this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },  */
};
</script>