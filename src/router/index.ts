import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
import Layout from '@/layouts/index.vue'

const backstage: Array<RouteRecordRaw> = [
  {
    path: '/backstage',
    name: 'Backstage',
    redirect: { name: 'Backstage.Overview' },
    component: Layout,
    children: [
      {
        path: 'overview',
        name: 'Backstage.Overview',
        component: () => import('@/views/overview/index.vue')
      }
    ]
  }
]

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/auth',
    component: App,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/login.vue')
      }
    ]
  },
  ...backstage
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
