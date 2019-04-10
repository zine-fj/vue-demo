import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition) {
    // return {x:0,y:100}
    // return {selector: '.btn'}
    if(savedPosition) {
      return savedPosition
    } else {
      return {x:0,y:0}
    }
  }
})

// 全局守卫(eg: 未登录则点击其他路由跳转不过去)
// to: 进入哪个路由
// from: 从哪个路由离开
// next: 对应的一个函数
// router.beforeEach((to,from,next)=>{
//   // alert('未登录，请先登录');
//   // next();
//   console.log(to)
//   if(to.path == '/login' || to.path == '/regest') {
//     next();
//   } else {
//     alert('未登录，请先登录');
//     next('/login')
//   }
// })

// 后置钩子
// router.afterEach((to,from)=>{
//   alert('后置钩子')
// })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
