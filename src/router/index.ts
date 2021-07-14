import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const routes: Array<RouteRecordRaw> = [
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
