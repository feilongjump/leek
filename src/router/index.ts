import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
import Layout from '@/layouts/index.vue'
import Alert from '@/components/Alerts'

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
        component: () => import('@/views/overview/index.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'topics',
        component: App,
        children: [
          {
            path: '',
            name: 'Backstage.Topic',
            component: () => import('@/views/topics/index.vue'),
            meta: {
              auth: true
            }
          },
          {
            path: 'add',
            name: 'Backstage.Topic.Add',
            component: () => import('@/views/topics/add.vue'),
            meta: {
              auth: true
            }
          },
          {
            path: ':id(\\d+)',
            name: 'Backstage.Topic.Show',
            component: () => import('@/views/topics/show.vue'),
            meta: {
              auth: true
            }
          },
          {
            path: ':id(\\d+)/edit',
            name: 'Backstage.Topic.Edit',
            component: () => import('@/views/topics/edit.vue'),
            meta: {
              auth: true
            }
          }
        ]
      },
      {
        path: 'stock',
        name: 'Backstage.Stock',
        component: () => import('@/views/stock/index.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'cash-book',
        name: 'Backstage.CashBook',
        component: () => import('@/views/cash-book/index.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'system',
        name: 'Backstage.System',
        component: () => import('@/views/system/index.vue'),
        meta: {
          auth: true
        }
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

router.beforeEach((to) => {
  const isLogged = !!localStorage.getItem('user')

  if (to.meta.auth && !isLogged && to.name !== 'Login') {
    Alert.warning('先登录一下吧。')
    router.push({ name: 'Login' })
  }
})

export default router
