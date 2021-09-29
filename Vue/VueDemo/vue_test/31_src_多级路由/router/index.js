//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from "../pages/News";
import Message from "../pages/Message";

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
                    component:Message
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
    ]
})
