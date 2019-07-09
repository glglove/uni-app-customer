import configs from './config'
import Axios from 'axios'
 
// 创建axios实例
const http = Axios.create({
	//   baseURL: process.env.BASE_API,
	// method: 'get', // 默认值
	baseURL: 'http://localhost:5000',
	timeout: 50000 ,// 请求超时时间
	// 用于请求之前对请求数据进行操作
	// 只用当请求方法为‘PUT’，‘POST’和‘PATCH’时可用
	// 最后一个函数需return出相应数据
	// 可以修改headers
// 	transformRequest: [function (data, headers) {
// 	// 可以对data做任何操作
// 
// 		return data;
// 	}],  
	// 用于对相应数据进行处理
	// 它会通过then或者catch
// 	transformResponse: [function (data) {
// 	// 可以对data做任何操作
// 
// 		return data;
// 	}],	
	// 是否携带cookie信息
	withCredentials: false, // default	
	// 响应格式
	// 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
	responseType: 'json', // 默认值是json

	// `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
	xsrfCookieName: 'XSRF-TOKEN', // default

	// `xsrfHeaderName` is the name of the http header that carries the xsrf token value
	xsrfHeaderName: 'X-XSRF-TOKEN', // default

	// 处理上传进度事件
	onUploadProgress: function (progressEvent) {
	// Do whatever you want with the native progress event
	},

	// 处理下载进度事件
	onDownloadProgress: function (progressEvent) {
	// Do whatever you want with the native progress event
	},

	// 设置http响应内容的最大长度
	maxContentLength: 2000,

	// 定义可获得的http响应状态码
	// return true、设置为null或者undefined，promise将resolved,否则将rejected
	validateStatus: function (status) {
		return status >= 200 && status < 300; // default
	},

	// `maxRedirects` defines the maximum number of redirects to follow in node.js.
	// If set to 0, no redirects will be followed.
	// 最大重定向次数？没用过不清楚
	maxRedirects: 5, // default

	// `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
	// and https requests, respectively, in node.js. This allows options to be added like
	// `keepAlive` that are not enabled by default.
	// httpAgent: new http.Agent({ keepAlive: true }),
	// httpsAgent: new https.Agent({ keepAlive: true }),

	// 'proxy' defines the hostname and port of the proxy server
	// Use `false` to disable proxies, ignoring environment variables.
	// `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
	// supplies credentials.
	// This will set an `Proxy-Authorization` header, overwriting any existing
	// `Proxy-Authorization` custom headers you have set using `headers`.
	// 代理
	proxy: {
		// host: '127.0.0.1',
		// port: 9000,
		// auth: {
		//   username: 'mikeymike',
		//   password: 'rapunz3l'
		// }
	},

	// `cancelToken` specifies a cancel token that can be used to cancel the request
	// (see Cancellation section below for details)
	// 用于取消请求？又是一个不知道怎么用的配置项
	// cancelToken: new CancelToken(function (cancel) {
	// })	
})
 
// request拦截器
http.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json' // 关键所在
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)


export default class base {
   static imgs_bg = configs.baseUrlConfigs.imgs_bg; // 网络图片地址集合对象
   static miniproConfings= configs.miniproConfings;     // 小程序配置信息 （appid、secret）
   static baseUrl= configs.baseUrl;   // 基础地址
   static baseInterfaceMap= configs.baseUrlConfigs; // 所有请求接口的集合对象
   static $http= http
  //  get = http.httpGET.bind(http);          //get 请求
  //  post = http.httpPOST.bind(http);      // post 请求
  //  upload = http.httpUPLOAD.bind(http);   // 上传
  //  delete = http.delete.bind(http);
}