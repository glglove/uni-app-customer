import Vue from 'vue'
import App from './App'
import store from './store' // vuex状态管理
import configs from './api/config.js'

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
Vue.prototype.$isLogined = function(toPageUrl, jumpType){
	// toPageUrl 为 需要跳转的地址   jumpType 为跳转的方式： switch   redirect  relanch navigate
	let token = uni.getStorageSync("userToken")
	if(token){
		// 已登陆
	}else {
		// 未登陆
		
	}
}


App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
