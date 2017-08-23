import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LoginRegister from './LoginRegister'
import Home from './home'
import { isLogin } from '../utils/authUser'

Vue.use(Router)

const router = new Router({
  routes: [
    ...Home,...LoginRegister
  ]
})


//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //判断要去的路由有没有requiresAuth

    if(isLogin()){
       next();
    }else{
	    if (to.fullPath!='/login') {
	      next( '/login'); // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
	    }else{
	    	next()
	    }
    }

});

export default router