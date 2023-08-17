import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterUserView from '../views/RegisterUserView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'registro',
    component: RegisterUserView
  },
  {
    path: '/ListUserView',
    name: 'listagem',
    component: () => import('../views/ListUserView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
