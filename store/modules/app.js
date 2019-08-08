
import * as types from '../mutation-types'

const app = {
  state: {
	userName: '',// 用户名
	userId: '', // 用户id
    userToken: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NSIsInJvbGVzIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTUzMDQyMzl9.Pznwe4fyBDXb0JIQOKZbMvca3P6a7REvHyYDbdnieSM',
	containerLoadingFlag: false, // 控制页面全屏下的外层container 容器的 loading状态显示与隐藏
	containerMaskFlag: true // 控制页面全屏下的外层container 容器的 遮罩状态显示与隐藏
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
    },
	// 设置 全屏loading状态
	[types.setContainerLoadingFlag] (state, flag = false ) {
		state.containerLoadingFlag = flag
	},
	// 设置 全屏的 mask 遮罩状态
	[types.setContainerMaskFlag] (state, flag = true ) {
		state.containerLoadingFlag = flag
	},	
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
    },
	// 设置全屏 loading 状态
	setContainerLoadingFlag ({commit, state}, flag) {
		commit(types.setContainerLoadingFlag, flag)
	},
	// 设置全屏 mask遮罩 状态
	setContainerMaskFlag ({commit, state}, flag) {
		commit(types.setContainerMaskFlag, flag)
	}
  }
}

export default app 
