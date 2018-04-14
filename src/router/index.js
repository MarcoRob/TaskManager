import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignIn'
import Dashboard from '@/components/dashboard/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/app',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
