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

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
