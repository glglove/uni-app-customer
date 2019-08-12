import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistense from 'vuex-persistedstate' // vuex 数据持久化，防止刷新后vuex中数据消失
import app from './modules/app'
import find from './modules/find'
import sign from './modules/sign'
import my from './modules/my'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'   

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// #ifdef H5 || APP-PLUS
const vuexLocal = new VuexPersistense({
  storage: localStorage,
  reducer: val => {
    return {
      //引入app模板，对象里面可配置需要持久化的status
      app: {
        userId: val.app.userId,
        userName: val.app.userName,
        userToken: val.app.userToken,
      }
    }
  }
})
//#endif

const store = new Vuex.Store({
	modules: {
		app,
		find,
		sign,
		my
	},
	getters,
	// strict: debug,  // 加了严格模式动态挂载路由会报错，但不影响功能
	// plugins: debug ? [createLogger()] : [] // 插件只有一个时
	//#ifdef H5 || APP-PLUS
	plugins: debug ? [createLogger(), vuexLocal] : [vuexLocal]  // 多个插件时候
	//#endif
	//#ifdef MP-WEIXIN 
	plugins: debug ? [createLogger()] : []  // 多个插件时候
	//#endif
})

export default store
