import { RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const projects: Array<RouteRecordRaw> = [
  {
    path: 'projects',
    component: App,
    children: [
      {
        path: '',
        name: 'Backstage.Project',
        component: () => import('@/views/backstage/project/index.vue')
      },
      {
        path: 'add',
        name: 'Backstage.Project.Add',
        component: () => import('@/views/backstage/project/create.vue')
      },
      {
        path: ':id(\\d+)',
        name: 'Backstage.Project.Detail',
        component: () => import('@/views/backstage/project/detail.vue')
      },
      {
        path: ':id(\\d+)/edit',
        name: 'Backstage.Project.Edit',
        component: () => import('@/views/backstage/project/edit.vue')
      }
    ]
  }
]

export default projects
