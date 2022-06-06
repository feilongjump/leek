/**
 * 解析带 ':' 的 url 替换其为真实值
 * @param {string} url
 * @param {any} params
 * @returns {string}
 */
export default function parseUrl(url: string, params: any): string {
  let str = ''

  url.split('/').forEach((value) => {
    const valueIndex = value.indexOf(':')
    if (valueIndex !== -1) {
      if (params[value.substring(valueIndex + 1)]) {
        value = params[value.substring(valueIndex + 1)]
      }
    }

    str += `${value}/`
  })

  return str.substring(0, str.lastIndexOf('/'))
}
