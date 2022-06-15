import { RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const novels: Array<RouteRecordRaw> = [
  {
    path: 'novels',
    component: App,
    children: [
      {
        path: '',
        name: 'Backstage.Novel',
        component: () => import('@/views/backstage/novel/index.vue')
      },
      {
        path: ':novel/chapter/:chapter',
        name: 'Backstage.Novel.Chapter',
        component: () => import('@/views/backstage/novel/chapter.vue')
      },
      {
        path: ':novel',
        name: 'Backstage.Novel.Show',
        component: () => import('@/views/backstage/novel/show.vue')
      }
    ]
  }
]

export default novels
