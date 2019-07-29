
import * as types from '../mutation-types'

const app = {
  state: {
	userName: '',// 用户名
	userId: '', // 用户id
    userToken: ''
  },
  mutations: {
	[types.setUserName] (state, str) {
		state.userName = str
	},
	[types.setUserId] (state, str) {
		state.userId = str
	},	
    [types.setUserToken] (state, str) {
		state.userToken = str
    }
  },
  actions: {
	// 设置 用户姓名
	setUserName ({commit, state}, str){
		commit(types.setUserName, str)
	},
	// 设置 用户id
	setUserId ({commit, state}, str){
		commit(types.setUserId, str)
	},	
    // 设置用户token
    setUserToken ({ commit, state }) {
      commit(types.setUserToken, str )
    }
  }
}

export default app 
