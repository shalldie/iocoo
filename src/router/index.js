import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/pages/todo/todo';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/todo'
        },{
            path:'/todo/:filter'
        }
    ]
})
