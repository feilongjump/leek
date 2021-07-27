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
      },
      {
        path: 'blog',
        name: 'Backstage.Blog',
        component: () => import('@/views/blog/index.vue')
      },
      {
        path: 'stock',
        name: 'Backstage.Stock',
        component: () => import('@/views/stock/index.vue')
      },
      {
        path: 'cash-book',
        name: 'Backstage.CashBook',
        component: () => import('@/views/cash-book/index.vue')
      },
      {
        path: 'system',
        name: 'Backstage.System',
        component: () => import('@/views/system/index.vue')
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
  routes,
  linkActiveClass: 'activate-menu'
})

export default router
