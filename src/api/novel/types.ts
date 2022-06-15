export interface NovelParams {
  keyword?: string
  novel?: string | string[]
  chapter?: string | string[]
}

interface NovelSearchHeader {
  category: string
  title: string
  latestChapter: string
  author: string
  updated_at: string
  status: string
}

interface NovelSearchBody {
  category: string
  title: string
  latestChapter: string
  author: string
  updated_at: string
  status: string
  link: string
}

export interface NovelSearchResponse {
  header?: NovelSearchHeader
  body?: Array<NovelSearchBody>
}

interface NovelInfo {
  image: string
  title: string
  author: string
  progress: string
  category: string
  updated_at: string
  introduce: string
}

interface NovelChapters {
  title: string
  link: string
}

export interface NovelResponse {
  info: NovelInfo
  chapters: Array<NovelChapters>
}

export class NovelResponseDefault implements NovelResponse {
  info = {
    image: '',
    title: '',
    author: '',
    progress: '',
    category: '',
    updated_at: '',
    introduce: ''
  }

  chapters = [
    {
      title: '',
      link: ''
    }
  ]
}

export interface ChapterLinksDetails {
  title: string
  link: string
  is_novel_link: boolean
}

interface ChapterLinks {
  previous: ChapterLinksDetails
  show: ChapterLinksDetails
  next: ChapterLinksDetails
}

export interface NovelChapterResponse {
  title: string
  links: ChapterLinks
  content: string
}
