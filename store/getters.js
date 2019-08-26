// 获取用户信息 userInfo 是否微信授权成功
export const authorizeState = state => state.app.authorizeState
// 获取用户token
export const userToken = state => state.app.userToken
// 获取用户姓名
export const userName = state => state.app.userName
// 获取用户id
export const userId = state => state.app.userId
// 获取用户id
export const userInfo = state => state.app.userInfo
// 获取用户头像
export const userAvatarUrl = state => state.app.userAvatarUrl
// 获取用户 hasLogin
export const hasLogin = state => state.app.hasLogin
// 获取是否强制登陆 forcedLogin
export const forcedLogin = state => state.app.forcedLogin


// 获取 loading状态
export const containerLoadingFlag = state => state.app.containerLoadingFlag

// 获取全屏 allLoading状态
export const containerAllloadingFlag = state => state.app.containerAllloadingFlag

// 获取 全屏遮罩mask 状态
export const containerMaskFlag = state => state.app.containerMaskFlag

// 获取 屏幕可视区高度
export const pHeight = state => state.app.pHeight
