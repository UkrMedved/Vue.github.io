import Vue from 'vue'
import Router from 'vue-router'
import nav from '@/components/nav'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
