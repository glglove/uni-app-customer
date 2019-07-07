import config from './config'
import Axios from 'axios'
 
// 创建axios实例
const http = Axios.create({
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


export default class base {
  static imgs_bg = config.baseUrlConfigs.imgs_bg; // 网络图片地址集合对象
  static miniproConfings = config.miniproConfings;     // 小程序配置信息 （appid、secret）
  static baseUrl = config.baseUrl;   // 基础地址
  static baseInterfaceMap  = config.baseUrlConfigs;  // 所有请求接口的集合对象
  static $http = http
  // static get = http.httpGET.bind(http);          //get 请求
  // static post = http.httpPOST.bind(http);      // post 请求
  // static upload = http.httpUPLOAD.bind(http);   // 上传
  // static delete = http.delete.bind(http);
}