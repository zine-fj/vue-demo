// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.config.productionTip = false

// Vue.use(VueResource)
Vue.use(VueRouter)
Vue.prototype.$http = axios

// 自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode) {
//     el.style.color = `#${Math.random().toString().slice(2,8)}`
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode) {
    if(binding.value == 'wide') {
      el.style.maxWidth = '1260px';
    } else if(binding.value == 'narrow') {
      el.style.maxWidth = '560px'
    }
    if(binding.arg == 'column') {
      el.style.background = '#67c';
      el.style.padding = '20px';
    }
  }
})

// 自定义过滤器
// Vue.filter('to-uppercase',(value)=>{
//   return value.toUpperCase();
// })
Vue.filter('snippet',(value)=>{
  return value.slice(0,100) + '...'
})

// 创建路由
const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
