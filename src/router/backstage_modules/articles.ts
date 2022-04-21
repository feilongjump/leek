import { RouteRecordRaw } from 'vue-router'

const articles: Array<RouteRecordRaw> = [
  {
    path: 'articles',
    name: 'Backstage.Article',
    component: () => import('@views/backstage/article/index.vue')
  }
]

export default articles
