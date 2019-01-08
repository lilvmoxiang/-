import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../admin'

import Type1 from "../views/type1"
import Type2 from "../views/type2"
import Problem from "../views/problem"
import Pay from "../views/pay"
import PayWay from "../views/payway"
import PayWay1 from "../views/payway1"
import PayComplete  from "../views/paycomplete"
import P_Center from "../views/p_center"
import Login from "../views/login/login"
import Merin from "../views/merin"

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      alias:'首页',
      component: Admin
     },
      {
      path: '/type1',
      name: 'type1',
      alias:'全部',
      component: Type1
     },
      {
      path: '/pay',
      name: 'pay',
      alias:'支付',
      component: Pay
     },
     {
      path: '/payway',
      name: 'payway',
      alias:'退换货',
      component: PayWay
     },
      {
      path: '/payway1',
      name: 'payway1',
      component: PayWay1
     },
      {
      path: '/paycomplete',
      name: 'paycomplete',
      component:PayComplete
     },
      {
      path: '/type2',
      name: 'type2',
      component:Type2
     },
     {
      path: '/problem',
      name: 'problem',
      component:Problem
     },
     {
      path: '/merin',
      name: 'merin',
      component:Merin
     },
      {
      path: '/login',
      name: 'login',
      component:Login
     },
      {
      path: '/p_center',
      name: 'p_center',
      component:P_Center
     }
   ]
})

export default router;