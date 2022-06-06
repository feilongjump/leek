import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import parseUrlAndParams from './index'

class Request {
  private baseURL: string = import.meta.env.VITE_APP_API_URL

  private axiosRequestConfig: AxiosRequestConfig = {}

  // axios 实例
  public instance: AxiosInstance

  constructor() {
    this.requestConfig()

    this.instance = axios.create(this.axiosRequestConfig)

    this.interceptorsRequest()

    this.interceptorsResponse()
  }

  /**
   * 请求基本配置
   */
  private requestConfig() {
    this.axiosRequestConfig = {
      baseURL: this.baseURL,
      timeout: 10000,
      withCredentials: false
    }
  }

  /**
   * 拦截请求
   */
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // set token
        if (config.headers) config.headers.Authorization = this.getToken()

        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }

  /**
   * 拦截响应
   */
  protected interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response: any) => {
        return response.data
      },
      (error: any) => {
        const { response } = error
        switch (response.status) {
          case 401:
            ElMessage.warning(response.data.message)
            if (router.currentRoute.value.path !== '/login') {
              router.push({ name: 'Login' })
            }
            break
          case 404:
            ElMessage.error('没找到你想要的东西！')
            break
          case 422:
            Object.keys(response.data.errors).forEach((key: string) => {
              response.data.errors[key].forEach((item: string) => {
                setTimeout(() => {
                  ElMessage.warning(item)
                }, 1)
              })
            })
            break
          default:
            ElMessage.error('发生了什么？过段时间再来提交错误吧。')
            break
        }
        return Promise.reject(error)
      }
    )
  }

  /**
   * 获取令牌
   * @returns string
   */
  private getToken() {
    let token = ''

    if (localStorage.getItem('token_type') && localStorage.getItem('access_token')) {
      token = `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
    }

    return token
  }

  public async request(method: string, url: string, params?: any, data?: any): Promise<any> {
    const parseResult = parseUrlAndParams(url, params)

    const config = <AxiosRequestConfig>{
      ...parseResult,
      data,
      method
    }
    const result = await this.instance.request(config)
    return result
  }

  public async get(url: string, params?: any): Promise<any> {
    const result = await this.request('get', url, params)
    return result
  }

  public async post(url: string, params?: any, data?: any): Promise<any> {
    const result = await this.request('post', url, params, data)
    return result
  }

  public async put(url: string, params?: any, data?: any): Promise<any> {
    const result = await this.request('put', url, params, data)
    return result
  }

  public async patch(url: string, params?: any, data?: any): Promise<any> {
    const result = await this.request('patch', url, params, data)
    return result
  }

  public async delete(url: string, params?: any): Promise<any> {
    const result = this.request('delete', url, params)
    return result
  }
}

export default Request
