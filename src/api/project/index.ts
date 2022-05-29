import Request from '@/utils/request'
import { ListParams, ListResponse } from '@/api/common'
import { ProjectResponse } from './types'

export default class Auth extends Request {
  BASE_URL: string = 'projects'

  public index(params?: ListParams): Promise<ListResponse<ProjectResponse>> {
    const url = `${this.BASE_URL}`

    return super.get(url, params)
  }

  public show(id: string | string[]): Promise<ProjectResponse> {
    const url = `${this.BASE_URL}/${id}`

    return super.get(url)
  }

  public store(data: ProjectResponse): Promise<ProjectResponse> {
    const url = `${this.BASE_URL}`

    return super.post(url, '', data)
  }

  public update(id: number, data: ProjectResponse): Promise<ProjectResponse> {
    const url = `${this.BASE_URL}/${id}`

    return super.patch(url, '', data)
  }
}
