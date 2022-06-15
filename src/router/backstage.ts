import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import articles from './backstage_modules/articles'
import projects from './backstage_modules/projects'
import novels from './backstage_modules/novels'

const backstageRouter: Array<RouteRecordRaw> = [
  {
    path: '/backstage',
    name: 'Backstage',
    redirect: { name: 'Backstage.Dashboard' },
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Backstage.Dashboard',
        component: () => import('@/views/backstage/dashboard/index.vue')
      },
      ...articles,
      ...projects,
      ...novels
    ]
  }
]

export default backstageRouter
