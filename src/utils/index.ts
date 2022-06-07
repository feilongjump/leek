/**
 * 解析带 ':' 的 url 替换其为真实值，且删除此参数
 * @param {string} url
 * @param {any} params
 * @returns {object}
 */
export default function parseUrlAndParams(url: string, params: any): object {
  let str = ''

  url.split('/').forEach((value) => {
    const valueIndex = value.indexOf(':')
    if (valueIndex !== -1) {
      const paramsIndex = value.substring(valueIndex + 1)

      if (params[paramsIndex]) {
        const paramsValue = params[paramsIndex]

        params[paramsIndex] = undefined

        value = paramsValue
      }
    }

    str += `${value}/`
  })

  url = str.substring(0, str.lastIndexOf('/'))

  return { url, params }
}
