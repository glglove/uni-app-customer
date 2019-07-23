// import axios from 'axios'
// // 创建axios实例
// const http = axios.create({
// //   baseURL: process.env.BASE_API,
//   baseURL: 'http://localhost:5000',
//   timeout: 50000 ,// 请求超时时间
  
// })
 
// // request拦截器
// http.interceptors.request.use(
//   config => {
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 关键所在
//     return config
//   },
//   error => {
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )

// export {http}

//-------------up is axios ---------

import qs from 'qs'
import store from '@/store/index.js'

/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */

/*
// 开放的接口
import http from './interface'

http.config.baseUrl = "http://localhost:8080/api/"

http.request(url:'user/list',method:'GET').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list', {status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.post('user', {id:1, status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.put('user/1', {status: 2}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.delete('user/1').then((res)=>{
	console.log(JSON.stringify(res))
}) 

*/
export default {
	config: {
		baseUrl: "http://localhost:5000/",
		header: {
			'Content-Type':'application/json;charset=UTF-8',
			'Content-Type':'application/x-www-form-urlencoded'
		},  
		data: {},
		method: "GET",
		dataType: "json",  /* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	// 拦截器对象
	interceptor: {
		// 默认统一的请求拦截函数
		request: (config) => {
		  // 将请求的参数中 默认增加 token
		  debugger
		  const data = config.data || {}
		  const globalCofigs = config.globalCofigs || {}
		  config.data = Object.assign(data, {
			'token': store.getters.userToken
		  })
		  if(globalCofigs.loading){
			uni.showLoadig({
			  title: '正在加载中',
			  mask: true,
			  success: ()=> {

			  },
			  fail: ()=>{

			  },
			  complete: ()=> {

			  }
			})
		  }
		},
		// 默认统一的响应拦截函数
		response: (config) => {
			debugger
			return config
		}
	},
	request(options) {
		debugger
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		//TODO 加密数据
		
		//TODO 数据签名
		/* 
		_token = {'token': getStorage(STOREKEY_LOGIN).token || 'undefined'},
		_sign = {'sign': sign(JSON.stringify(options.data))}
		options.header = Object.assign({}, options.header, _token,_sign) 
		*/
	   
		return new Promise((resolve, reject) => {
			debugger
			let _config = null
			
			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				if (process.env.NODE_ENV === 'development') {
					if (statusCode === 200) {
						console.log("【" + _config.requestId + "】 结果：" + JSON.stringify(response.data))
					}
				}
				// 如果有响应的回调
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				// 统一的响应日志记录
				_reslog(response)
        
				// 
				if (statusCode === 200) { //成功
					resolve(response);
				} else {
					reject(response)
				}
			}

			// 将传入的配置参数与默认的参数进行合并
			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()

			// 如果有请求的回调函数
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			
			// 统一的请求日志记录
			_reqlog(_config)
			
			if (process.env.NODE_ENV === 'development') {
				console.log("【" + _config.requestId + "】 地址：" + _config.url)
				if (_config.data) {
					console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data))
				}
			}

			// 调用 uni.request 发起请求
			debugger
			uni.request(_config);
		});
	},
	// get 请求
	get(url, data, options) {
		debugger
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'  
		return this.request(options)
	},
	// post 请求
	post(url, data, options) {
		debugger
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
  },
	// put请求
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	// delete 请求
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}


/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + req.requestId + "】 地址：" + req.url)
		if (req.data) {
			debugger
			console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data))
			debugger
		}
	}
	//TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	let _statusCode = res.statusCode;
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + res.config.requestId + "】 地址：" + res.config.url)
		if (res.config.data) {
			console.log("【" + res.config.requestId + "】 请求参数：" + JSON.stringify(res.config.data))
		}
		console.log("【" + res.config.requestId + "】 响应结果：" + JSON.stringify(res))
	}
	//TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
	switch(_statusCode){
		case 200:
			break;
		case 401:
			break;
		case 404:
			break;
		default:
			break;
	}
}


