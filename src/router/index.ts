import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import backstageRouter from './backstage'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue')
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: () => import('@/views/auth/forgetPassword.vue')
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('@/views/auth/resetPassword.vue')
  },
  ...backstageRouter
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'activate-menu',
  routes
})

export default router
