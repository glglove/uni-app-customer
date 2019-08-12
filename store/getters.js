// 获取用户信息 userInfo 是否微信授权成功
export const authorizeState = state => state.app.authorizeState
// 获取用户token
export const userToken = state => state.app.userToken
// 获取用户姓名
export const userName = state => state.app.userName
// 获取用户id
export const userId = state => state.app.userId

// 获取 全屏loading状态
export const containerLoadingFlag = state => state.app.containerLoadingFlag

// 获取 全屏遮罩mask 状态
export const containerMaskFlag = state => state.app.containerMaskFlag

// 获取 屏幕可视区高度
export const pHeight = state => state.app.pHeight
