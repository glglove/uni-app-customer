import axios from 'axios'
 
// 创建axios实例
const http = axios.create({
//   baseURL: process.env.BASE_API,
  baseURL: 'http://localhost:5000',
  timeout: 50000 ,// 请求超时时间
  
})
 
// request拦截器
http.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 关键所在
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

export {http}