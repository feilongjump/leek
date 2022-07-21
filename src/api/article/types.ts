export interface ArticleResponse {
  id: number
  title: string
  created_at: string
  updated_at: string
  drafted_at?: string
  type: 'markdown' | 'body'
  content: {
    body: string
    markdown: string
  }
}
