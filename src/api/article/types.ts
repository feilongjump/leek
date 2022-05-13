export interface ArticleResponse {
  id: number
  title: string
  created_at: string
  updated_at: string
  content: {
    body: string
    markdown: string
  }
}
