<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:'About',
		/* beforeDestroy() {
			console.log('About组件即将被销毁了')
		},*/
		/* mounted() {
			console.log('About组件挂载完毕了',this)
			window.aboutRoute = this.$route
			window.aboutRouter = this.$router
		},  */
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next){
      console.log(to,from,next);
      console.log('App-beforeRouterEnter');
      if(to.meta.isAuth){
        if(localStorage.getItem('company')==='moer'){
          next()
        }else {
          alert('公司名不对，无权限查看')
        }
      }else {
        next()
      }
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave(to,from,next){
      console.log(to,from,next);
      console.log('App-beforeRouteLeave');
      next()
    }
  }

</script>