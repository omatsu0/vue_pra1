import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
mode: 'history',
routes: [
  {
    path: '/',
    component: Index,
    name: 'index',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
  },
  {
    path: '/detail/:id',
    component: DetailId
  }
] 
})