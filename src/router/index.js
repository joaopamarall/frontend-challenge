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
    path: '/lista-usuario',
    name: 'lista',
    component: () => import('../views/ListUserView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
