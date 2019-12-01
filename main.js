import Vue from 'vue'
import App from './App'
import store from './store' // vuex状态管理
import configs from './api/config.js'
import io from 'socket.io-client'   // 客户端引入socket.io-client
// 建立socket 连接
let socket = io(`${configs.wsUrl}`)
// 将socket 对象挂载在 Vue实例的原型上
Vue.prototype.$socket = socket


// 将container 组件注册为全局组件
import container from '@/pages/components/container1/container'
Vue.component('container', container)

// 引入 uni.request()
import http from '@/utils/http.js'

Vue.config.productionTip = false;

// 挂载在 Vue实例的原型上
Vue.prototype.$configs = configs
Vue.prototype.$http = http
Vue.prototype.$store = store
Vue.prototype.$bus = new Vue()
// 原型上面 添加一个 监测登陆的方法
Vue.prototype.checkLogin = function(toPageUrl, jumpType){
	// toPageUrl 为 需要跳转的地址   jumpType 为跳转的方式： 1:switch   2:redirect  3:relanch 4:navigate
	let token = uni.getStorageSync("userToken")
	if(token){
		// 已登陆
	}else {
		// 未登陆
		uni.redirectTo({
			url:"'./pages/login/login?toPageUrl=' + toPageUrl + '?jumpType=' + jumpType"
		})
		return false
	}
	// 最终可以返回 token等
	return {
		token
	}
}




App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
