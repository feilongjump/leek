import Request from '@/utils/request'
import { NovelParams, NovelSearchResponse, NovelResponse, NovelChapterResponse } from './types'

export default class Novel extends Request {
  BASE_URL: string = 'novels'

  public search(params: NovelParams): Promise<NovelSearchResponse> {
    const url = `${this.BASE_URL}`

    return super.get(url, params)
  }

  public show(params: NovelParams): Promise<NovelResponse> {
    const url = `${this.BASE_URL}/:novel`

    return super.get(url, params)
  }

  public chapter(params: NovelParams): Promise<NovelChapterResponse> {
    const url = `${this.BASE_URL}/:novel/chapters/:chapter`

    return super.get(url, params)
  }
}
