import Request from '@/utils/request'
import { ListParams, ListResponse } from '@/api/common'
import { ArticleResponse } from './types'

export default class Auth extends Request {
  BASE_URL: string = 'articles'

  public index(params?: ListParams): Promise<ListResponse<ArticleResponse>> {
    const url = `${this.BASE_URL}`

    return super.get(url, params)
  }
}
