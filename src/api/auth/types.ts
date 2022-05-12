export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  token_type: string
  access_token: string
  expires_in: number
}
