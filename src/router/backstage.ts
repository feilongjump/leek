import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const backstageRouter: Array<RouteRecordRaw> = [
  {
    path: '/backstage',
    name: 'Backstage',
    redirect: { name: 'Backstage.Dashboard' },
    component: Layout,
    children: [
      {
        path: '',
        name: 'Backstage.Dashboard',
        component: () => import('@views/backstage/dashboard/index.vue')
      },
      {
        path: 'test',
        name: 'Backstage.Test',
        component: () => import('@views/backstage/dashboard/test.vue')
      }
    ]
  }
]

export default backstageRouter
