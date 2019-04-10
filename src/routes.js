import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

export const routes = [
    {path: '/',name: 'customerLink',component: Customers},
    {path: '/about',name:'aboutLink',component: About},
    {path: '/add',name:'addLink',component: Add},
    {path: '/customer/:id',component: CustomerDetails},
    {path: '/edit/:id',component: Edit},
  ];