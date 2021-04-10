import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/pages/index.vue'
import About from '../components/pages/about.vue'
import Detail from '../components/pages/detail/index.vue'
import DetailId from '../components/pages/detail/_id.vue'
import Nest from '../components/pages/nest/parent.vue'
import Child1 from '../components/pages/nest/child1.vue'
import Child2 from '../components/pages/nest/child2.vue'
import Child3 from '../components/pages/nest/child3.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/detail/:id',
      component: DetailId
    },
    {
      path: '/nest',
      component: Nest,
      children: [
        {
          path: '',
          component: Child1
        },
        {
          path: 'child2',
          component: Child2
        },
        {
          path: 'child3',
          component: Child3
        }
      ]
    }
  ]
})
