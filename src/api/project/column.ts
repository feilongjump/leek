import Request from '@/utils/request'
import { ListParams } from '@/api/common'
import { ProjectColumnParams, ProjectColumnResponse } from './types'

export default class ProjectColumn extends Request {
  BASE_URL: string = 'projects/:project/columns'

  public index(params?: ListParams | ProjectColumnParams): Promise<ProjectColumnResponse[]> {
    const url = `${this.BASE_URL}`

    return super.get(url, params)
  }

  public store(data: ProjectColumnResponse): Promise<ProjectColumnResponse> {
    const url = `${this.BASE_URL}`

    return super.post(url, '', data)
  }

  public update(id: number, data: ProjectColumnResponse): Promise<ProjectColumnResponse> {
    const url = `${this.BASE_URL}/${id}`

    return super.patch(url, '', data)
  }
}
