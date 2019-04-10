
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Regest from './components/Regest'
import About from './components/about/About'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
    {path: '/',components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History,
    }},
    {path: '/menu',component: Menu},
    {path: '/admin',name: 'adminLink',component: Admin,beforeEnter: (to,from,next)=>{
      alert('非登录状态，不能访问此页面！');
      // next(false);
      next();
    }},
    {path: '/login',name: 'loginLink',component: Login},
    {path: '/regest',name: 'regestLink',component: Regest},
    {path: '/about',name: 'aboutLink',component: About,redirect: '/about/contact',children: [
        {path: '/about/contact',name: 'contactLink',component: Contact,children: [
            {path: '/about/contact/phone',name: 'phoneLink',component: Phone},
            {path: '/about/contact/personname',name: 'personnameLink',component: PersonName},
          ]},
        {path: '/about/delivery',name: 'deliveryLink',component: Delivery},
        {path: '/about/history',name: 'historyLink',component: History},
        {path: '/about/orderingGuide',name: 'orderingGuideLink',component: OrderingGuide},
      ]},
    {path: '*',redirect: '/'},
  ]
  