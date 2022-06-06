import Request from '@/utils/request'
import { ProjectColumnCardResponse, ProjectColumnParams, ProjectColumnCardParams } from './types'

export default class ProjectColumnCard extends Request {
  BASE_URL: string = 'projects/:project/columns/:column/cards'

  public show(id: string | string[]): Promise<ProjectColumnCardResponse> {
    const url = `${this.BASE_URL}/${id}`

    return super.get(url)
  }

  public store(data: ProjectColumnCardResponse): Promise<ProjectColumnCardResponse> {
    const url = `${this.BASE_URL}`

    return super.post(url, '', data)
  }

  public update(
    id: number,
    params: ProjectColumnParams | ProjectColumnCardParams,
    data: ProjectColumnCardResponse
  ): Promise<ProjectColumnCardResponse> {
    const url = `${this.BASE_URL}/${id}`

    return super.patch(url, params, data)
  }
}
