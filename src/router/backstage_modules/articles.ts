import { RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const articles: Array<RouteRecordRaw> = [
  {
    path: 'articles',
    component: App,
    children: [
      {
        path: '',
        name: 'Backstage.Article',
        component: () => import('@views/backstage/article/index.vue')
      },
      {
        path: 'add',
        name: 'Backstage.Article.Add',
        component: () => import('@views/backstage/article/create.vue')
      },
      {
        path: ':id(\\d+)/edit',
        name: 'Backstage.Article.Edit',
        component: () => import('@views/backstage/article/edit.vue')
      }
    ]
  }
]

export default articles
