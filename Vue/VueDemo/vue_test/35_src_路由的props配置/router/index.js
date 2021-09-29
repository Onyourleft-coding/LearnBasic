//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children:[
                {
                    //子级路由不用加/
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component:Message,
                    children:[
                        {
                            //子级路由不用加/
                            name:'xiangqing',
                            path: 'detail',
                            component: Detail,
                            //props的第一种对象写法,该对象中的所有key-value都会以props的形式传给上方的Detail组件
                            /*props:{
                                a:1,b:'hello'
                            }*/
                        //    第二种写法：值为布尔值,若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                        //     props:true

                        //    第三种写法：值为函数
                           /* props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }*/
                            //解构赋值 语义不明确，推荐不简写的那种方法
                            props({query:{id,title}}){
                                return {id,title}
                            }
                        }
                    ]
                }
            ]
        },
        {
            name:'guanyu',
            path: '/about',
            component: About,

        },
    ]
})
