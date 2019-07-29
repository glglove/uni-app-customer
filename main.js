import Vue from 'vue'
import App from './App'
// import store from './store' // vuex状态管理

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import Axios from 'axios'
// import './utils/http.js'
Vue.use(MintUI);

// 引入 uni.request()
import http from '@/utils/http.js'

Vue.config.productionTip = false;
// Vue.prototype.$axios = Axios

// 挂载在 Vue实例的原型上
Vue.prototype.$http = http
// Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
