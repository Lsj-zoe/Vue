import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import Cart from '@/components/cart/cart';
import Me from '@/components/my/me';
import Login from '@/components/my/login';

Vue.use(Router);

const vueRouter =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
		{
      path: '/cart',
      name: 'cart',
      component: Cart
    }, 
		{
      path: '/me',
      name: 'me',
      component: Me
    },
		{
			path: '/login',
			name: 'login',
			component: Login
		},
  ]
});
//验证登录
// vueRouter.beforeEach(function (to, from, next) {
// 	 const nextRoute = ['cart','me'];
//    // console.log(nextRoute)
// // 跳转至上述3个页面
// 	 if(nextRoute.indexOf(to.name) >= 0) {
//     	var token = localStorage.getItem('token');
// 			// console.log(token)
//         //未登录
//         if (token =='14e1b600b1fd579f47433b88e8d85291') {
//         	if(to.name == 'cart'){        		
//         		vueRouter.push({path: '/login?cart'})
//         	}else if(to.name == 'me'){
//         		vueRouter.push({path: '/login?me'})
//         	}
//         }
//     }
//     next();
// });
export default vueRouter;