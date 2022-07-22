import Request from '@/utils/request'
import { CommonResponse } from '../common'
import { ForgetPasswordParams, LoginParams, LoginResponse, ResetPasswordParams } from './types'

export default class Auth extends Request {
  BASE_URL: string = ''

  public login(data: LoginParams): Promise<LoginResponse> {
    const url = `${this.BASE_URL}/login`

    return super.post(url, '', data)
  }

  public forgetPassword(data: ForgetPasswordParams): Promise<CommonResponse> {
    const url = `${this.BASE_URL}/forget-password`

    return super.post(url, '', data)
  }

  public resetPassword(data: ResetPasswordParams): Promise<CommonResponse> {
    const url = `${this.BASE_URL}/reset-password`

    return super.post(url, '', data)
  }
}
