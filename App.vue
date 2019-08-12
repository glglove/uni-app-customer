<style lang="less" src="./static/style/base.less"></style>
<style lang="less" src="./static/style/icons.less"></style>
<!-- <style lang="less" src="./static/style/iconfont.less"></style> -->
<style lang="less">
	// .container {
	//   height: 100%;
	//   display: flex;
	//   flex-direction: column;
	//   align-items: center;
	//   justify-content: space-between;
	//   box-sizing: border-box;
	// }
</style>	

<script>
	import getEnterType from '@/utils/miniProSceneType'
	import { getDeviceApi } from '@/utils/deviceApi.js'
	export default {
		onLaunch: async function() {
			// debugger
			console.log('App Launch')
			// 小程序检查是否有版本更新 采用条件判断来编译
			// #ifdef MP-WEIXIN
			this.checkNewVersion()
			this.chekWeixinLogin().then(res => {
				console.log("---打印检查微信是否登录返回的res---------", res)
				if(res){
					// weixin 登录未过期 页面跳转到 find 首页
					
				}else {
					// weixin登录已经过期  需要 弹出 微信登录的页面
					
				}
			})
			// 检查 是否微信已授权用户信息
			let AuthorizeStatus_res = await this.getAuthorizeStatus("scope.userInfo", async ()=>{
				// 已经授权回调
				// getDeviceApi().reLaunch({
				// 	url: '../../pages/find/find'
				// })
				// store-app 中 存入 用户授权flag
				this.$store.dispatch("setAuthorizeState", true)				
			}, async function() {
				// 未授权回调
				this.$store.dispatch("setAuthorizeState", false)
			})
			console.log("---------APP初始化时，onlanch中打印 是否授权--------", AuthorizeStatus_res)
			// if( AuthorizeStatus_res ) {
			// 	// 已授权
			// 	getDeviceApi().reLaunch({
			// 		url: '../../pages/find/find'
			// 	})
			// 	// store-app 中 存入 用户授权flag
			// 	this.$store.dispatch("setAuthorizeState", true)
			//  }else {
			// 	this.$store.dispatch("setAuthorizeState", false)
			//  }
				 
			// await this.getAuthorizeStatus("scope.userInfo").then(res => {
			// 	debugger
			// 	if( res ) {
			// 		// 已授权
			// 		getDeviceApi().reLaunch({
			// 			url: './find/find'
			// 		})
			// 		// store-app 中 存入 用户授权flag
			// 		this.$store.dispatch("setAuthorizeState", true)
			// 	}else {
			// 		this.$store.dispatch("setAuthorizeState", false)
			// 	}
			// })
			// #endif
		},
		onShow: function() {
			console.log('App Show')
				
		},
		onHide: function() {
			console.log('App Hide')
			
		},
		methods:{
			// 检查是否有版本更新
			checkNewVersion () {
				console.log("-------检查小程序是否有新版本-------checkNewVersion----------")
				// uni.showLoading({
				// 	title:'加载中。。'
				// })
				// 用户版本更新
				// debugger
				if (uni.canIUse("getUpdateManager")) {
				  let updateManager = uni.getUpdateManager();
				  updateManager.onCheckForUpdate((res) => {
					// 请求完新版本信息的回调
					console.log("---检查小程序是否有新版本---",res.hasUpdate);
				  })
				  updateManager.onUpdateReady(() => {
					// debugger;
					uni.showModal({
					  title: '更新提示',
					  content: '新版本已经准备好，是否重启应用？',
					  success: (res) => {
						if (res.confirm) {
						  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						  updateManager.applyUpdate();
						} else if (res.cancel) {
						  return false;
						}
					  }
					})
				  })
				  updateManager.onUpdateFailed(() => {
					// 新的版本下载失败
					uni.hideLoading();
					uni.showModal({
					  title: '升级失败',
					  content: '新版本下载失败，请检查网络！',
					  showCancel: false
					});
				  });
				}  
			},						
			// 小程序检查是否 用户授权了
			chekWeixinLogin () {
				// 微信登录状态监测	
				return new Promise((resolve, reject) => {
					getDeviceApi().checkSession({
						success() {
							console.log('微信登录session_key未过期，ok');
							// session_key 未过期，并且在本生命周期一直有效
							resolve(true)
						},
						fail() {
							// 微信登录已过期
							// session_key 已经失效，需要重新执行登录流程
							//this.getDeviceApi().login() // 重新登录
							// uni.toast("微信登录已过期,请重新授权登陆!")
							reject("微信登录已过期")
							console.log('expire');
						}			
					})
				})
			},	
			// 判断是否授权（主要是微信小程序）
			async getAuthorizeStatus(type, cb, fb) {
				let _this = this
				if(!type){
					uni.showToast({
						title: '请传入scope.type!'
					})
					return 
				}
				let scopeText = {
					"scope.userInfo":"用户信息",
					"scope.userLocation": "地理位置",
					"scope.address": "通讯地址",
					"scope.invoiceTitle": "发票排头",
					"scope.invoice": "获取发票",
					"scope.record": "录音功能",
					"scope.werun": "微信运动步数",
					"scope.writePhotosAlbum": "保存到相册",
					"scope.camera": "摄像头"
				}		

				return new Promise((resolve,reject)=>{
					getDeviceApi().getSetting().then((res) => {
						// debugger
						// 获取用户授权信息
						console.log("打印用户授权的情况集合------------",res)   // res.userInfo 为true  res.errMsg == "authorize:ok"
						if( res ){
							// debugger
							if(res[1] && res[1]['authSetting'] && res[1]['authSetting'][type]){
								// 自动检测到已经授过权
								console.log(`--------------检测到已授权了：【${scopeText[type]}】 的权限---------`)
							    // 用户已授权 执行回调函数
							    cb && cb();								
								resolve(true)
							}else {
								// 未授权
								console.log(`----------检测到未授权：【${scopeText[type]}】 的权限-----------`)
								fb && fb()
								resolve(false)
							}
						}else {
							// 先判断是否是网络问题造成了请求失败
							try {
								getDeviceApi().getNetworkType({
									success: function (res) {
										let  networkType = res.networkType
										if( networkType != "none" ) {
											// 有网络，检查 缓存中的授权字段
											//   let AuthorizeStatus = _this.getDeviceApi().getStorageSync("AuthorizeStatus");
											//   if( AuthorizeStatus ) {
											// 	resolve( true ) ;
											//   }else {
											// 	resolve( false ) ;
											//   }  
											reject("--------报错了-------------")
										}else {
											// 无网络 返回true, 弹出 提示
											_this.error("网络异常")
											reject( "--------网络异常，请先检查网络------------" ) 
										}
									}
								})
							} catch (error) {
								reject("--------报错了-------")
							}						
						}
					})
				})		
			},						
		}
	}
</script>

