<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--跳转路由并携带params参数，to的字符串写法-->
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;-->
        <!--跳转路由并携带params参数，to的对象写法-->
        <router-link :to="{
        //  用parmas传参这里必须用name，不能用path
        name:'xiangqing',
        params:{
          id:m.id,
          title:m.title
        }
        }">
          {{m.title}}
        </router-link>&nbsp;
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return{
      messageList:[
        {id:'0001',title:'消息0001'},
        {id:'0002',title:'消息0002'},
        {id:'0003',title:'消息0003'},
        {id:'0004',title:'消息0004'},
      ]
    }
  }
};
</script>

<style scoped>

</style>