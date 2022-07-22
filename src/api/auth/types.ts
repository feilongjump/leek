export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  token_type: string
  access_token: string
  expires_in: number
}

export interface ForgetPasswordParams {
  email: string
}

export interface ResetPasswordParams {
  email: string
  token: string
  password: string
  password_confirmation: string
}
