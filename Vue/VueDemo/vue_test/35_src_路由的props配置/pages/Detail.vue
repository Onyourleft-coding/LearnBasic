<template>
  <div>
    <ul>
<!--      <li>消息编号：{{$route.query.id}}</li>
      <li>消息标题:{{$route.query.title}}</li>-->
      <li>消息编号：{{id}}</li>
      <li>消息标题:{{title}}</li>
<!--      <li>a:{{a}}</li>-->
<!--      <li>b:{{b}}</li>-->

    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  // props:['a','b'],
  props:['id','title'],

  mounted() {
    console.log(this.$route);
  },
  computed:{
    // id(){
    //   return  this.$route.query.id
    // },
    // title(){
    //   return this.$route.query.title
    // }
  }
};
</script>

<style scoped>

</style>