import Request from '@/utils/request'
import { LoginParams, LoginResponse } from './types'

export default class Auth extends Request {
  BASE_URL: string = ''

  public login(params: LoginParams): Promise<LoginResponse> {
    const url = `${this.BASE_URL}/login`

    return super.post(url, params)
  }
}
