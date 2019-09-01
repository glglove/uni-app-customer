
import * as types from '../mutation-types'
// import { copyFile } from 'fs';

const app = {
  state: {
	/**
	 * 是否需要强制登录
	 */
	forcedLogin: false,
	hasLogin: false,  // 是否已经登陆
	authorizeState: false, // 小程序中 用户信息userInfo是否微信授权成功， false 未授权  true 已授权  默认 true
	userInfo: {}, // 用户信息
	userId: '', // 用户id
	userName: '',// 用户名
	userAvatarUrl: '', // 用户头像
    // userToken: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NSIsInJvbGVzIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTUzMDQyMzl9.Pznwe4fyBDXb0JIQOKZbMvca3P6a7REvHyYDbdnieSM',
	userToken: '',
	//containerAllloadingFlag 控制 外层 container 容器的 allLoading 状态的显示与隐藏 （ 一般allloading、loading、content的层级关系是loading在最上一层，allloading在中间，最下面就是页面内容显示了）
	// 一般 可以设置 container 页面的 onReady 后 可以 关闭 containerLoadingFlag,  在 minxin中的 on
	containerAllloadingFlag: false, 
	containerLoadingFlag: false, // 控制外层container 容器的 loading状态显示与隐藏
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
	loginOut(state) {
		state.userName = "";
		state.hasLogin = false;
		state.userToken = false;
	},	  
	
	 //设置 用户微信是否已授权用户信息userInfo
	[types.setAuthorizeState] (state, {authorizeState, userInfo}) {
		// debugger
		state.authorizeState = authorizeState
		if( userInfo ){
			state.userInfo = userInfo 
			state.userName = userInfo.nickName 
			state.userAvatarUrl = userInfo.avatarUrl 
		}
	},	  
	// 设置用户姓名
	[types.setUserName] (state, str) {
		state.userName = str
	},
	// 设置用户id
	[types.setUserId] (state, str) {
		state.userId = str
	},	
	// 设置用户 token
    [types.setUserToken] (state, str) {
		// debugger
		state.userToken = str
		state.hasLogin = true
    },
	// 设置 loading状态
	[types.setContainerLoadingFlag] (state, flag ) {
		// debugger
		state.containerLoadingFlag = flag
	},
	// 设置 全屏allLoading状态
	[types.setContainerAllloadingFlag] (state, flag ) {
		// debugger
		state.containerAllloadingFlag = flag
	},	
	// 设置 全屏的 mask 遮罩状态
	[types.setContainerMaskFlag] (state, flag  ) {
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
	setAuthorizeState ({commit, state}, {authorizeState, userInfo}){
		// debugger
		commit(types.setAuthorizeState, {authorizeState, userInfo})
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
	// 设置 loading 状态
	setContainerLoadingFlag ({commit, state}, flag) {
		commit(types.setContainerLoadingFlag, flag)
	},
	// 设置 allLoading 状态
	setContainerAllloadingFlag ({commit, state}, flag) {
		commit(types.setContainerAllloadingFlag, flag)
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
