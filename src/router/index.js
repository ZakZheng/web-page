import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Mys from 'components/mys/mys'
import Recharge from 'components/recharge/recharge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/Mys',
      name: 'Mys',
      component: Mys
    }, {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge
    }
  ]
})
