import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import find from './modules/find'
import sign from './modules/sign'
import my from './modules/my'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    app,
    find,
    sign,
    my
  },
  getters,
  // strict: debug,  // 加了严格模式动态挂载路由会报错，但不影响功能
  plugins: debug ? [createLogger()] : []
})

export default store
