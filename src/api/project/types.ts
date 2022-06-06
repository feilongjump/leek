export interface ProjectResponse {
  id: number
  name: string
  created_at: string
  updated_at: string
  content: {
    body: string
    markdown: string
  }
}

export interface ProjectColumnCardResponse {
  id: number
  project_id: number
  name: string
  order: number
  created_at: string
  updated_at: string
}

export interface ProjectColumnResponse {
  id: number
  project_id: number
  name: string
  order: number
  created_at: string
  updated_at: string
  cards?: Array<ProjectColumnCardResponse>
}

export interface ProjectColumnParams {
  project?: string | string[]
}
