
import * as types from '../mutation-types'
import { copyFile } from 'fs';

const app = {
  state: {
	/**
	 * 是否需要强制登录
	 */
	forcedLogin: false,
	hasLogin: false,
	userName: "",	  

	authorizeState: false, // 小程序中 用户信息userInfo是否微信授权成功， false 未授权  true 已授权  默认 true
	userName: '',// 用户名
	userId: '', // 用户id
    // userToken: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NSIsInJvbGVzIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTUzMDQyMzl9.Pznwe4fyBDXb0JIQOKZbMvca3P6a7REvHyYDbdnieSM',
    userToken: '',
	containerLoadingFlag: false, // 控制页面全屏下的外层container 容器的 loading状态显示与隐藏
	containerMaskFlag: false, // 控制页面全屏下的外层container 容器的 遮罩状态显示与隐藏
	pHeight: '0'  // 页面的高度，minxin 中获取后 存入了 store中
  },
  mutations: {
	// 登陆
	login(state, userName) {
		state.userName = userName || '新用户';
		state.hasLogin = true;
	},
	// 登出
	logout(state) {
		state.userName = "";
		state.hasLogin = false;
	},	  
	
	 //设置 用户微信是否已授权用户信息userInfo
	[types.setAuthorizeState] (state, flag) {
		// debugger
		state.authorizeState = flag
	},	  
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
		// debugger
		state.containerLoadingFlag = flag
	},
	// 设置 全屏的 mask 遮罩状态
	[types.setContainerMaskFlag] (state, flag = true ) {
		// debugger
		state.containerMaskFlag = flag
	},
	//	存储 获取到的系统的可视区高度
	[types.saveWindowHeight] (state, pHeight) {
		state.pHeight = pHeight
	}
  },
  actions: {
	// 设置 用户微信是否已授权用户信息userInfo
	setAuthorizeState ({commit, state}, flag){
		// debugger
		commit(types.setAuthorizeState, flag)
	},
	// 设置 用户姓名
	setUserName ({commit, state}, str){
		commit(types.setUserName, str)
	},
	// 设置 用户id
	setUserId ({commit, state}, str){
		commit(types.setUserId, str)
	},	
    // 设置用户token
    setUserToken ({ commit, state }, str) {
      commit(types.setUserToken, str )
    },
	// 设置全屏 loading 状态
	setContainerLoadingFlag ({commit, state}, flag) {
		commit(types.setContainerLoadingFlag, flag)
	},
	// 设置全屏 mask遮罩 状态
	setContainerMaskFlag ({commit, state}, flag) {
		commit(types.setContainerMaskFlag, flag)
	},
	// 存储 获取到的系统的可视区高度
	saveWindowHeight ({commit, state}, pHeight){
		commit(types.saveWindowHeight, pHeight)
	}
  }
}

export default app 
