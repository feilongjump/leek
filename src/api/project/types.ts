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
