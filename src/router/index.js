import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'

Vue.use(Router)

const Recharge = (resolve) => {
  import('components/recharge/recharge').then((module) => {
    resolve(module)
  })
}

const Mys = (resolve) => {
  import('components/mys/mys').then((module) => {
    resolve(module)
  })
}

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
