export interface ListParams {
  page?: number
  per_page?: number
}

interface Links {
  first: string
  last: string
  next: string | null
  prev: string | null
}

interface Meta {
  current_page: number
  from: number
  last_page: number
  links: any
  path: string
  per_page: number
  to: number
  total: number
}

export interface ListResponse<D = any> {
  data: Array<D>
  links: Links
  meta: Meta
}

export class ListResponseDefault implements ListResponse<any> {
  data = []

  links = {
    first: '',
    last: '',
    prev: '',
    next: ''
  }

  meta = {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [],
    path: 'string',
    per_page: 0,
    to: 0,
    total: 0
  }
}
