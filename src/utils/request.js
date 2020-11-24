import axios from 'axios'

// 创建实例
const service = axios.create({
  // baseURL: window.global_config.BASE_URL,
  timeout: 5000 * 2
})

// const token = localStorage.getItem('token')
// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '200') {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  }, error => {
    const { code, message } = error
    if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时
      // console.warn(`请求超时`)
      // return new Promise(resolve => {
      //     setTimeout(async _ => {
      //         resolve(await httpClient.request(config))
      //         }, defaultConfig.retryDelay) // 设置发送间隔
      //     })
    }
    return Promise.reject(error)
  }
)

export default service
