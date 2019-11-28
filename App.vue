<style lang="less" src="./static/style/base.less"></style>
<style lang="less" src="./static/style/icons.less"></style>
<style lang="less" src="./static/style/iconfont.less"></style>
<style lang="less">
	/* 头条小程序需要把 iconfont 样式放到组件外 */
	@import "pages/components/m-icon/m-icon.css";
</style>	

<script>
	import store from '@/store/index.js'
	import getEnterType from '@/utils/miniProSceneType'
	import { getDeviceApi } from '@/utils/deviceApi.js'
	import commApi  from '@/api/comm.js'
	
	let io = require('./utils/weapp.socket.io.js')
	
// 1. 与服务器端建立连接
        const socket = io.connect("http://localhost:3000");

        // 2. 监听send按钮点击的事件
        $("#send").click(function(){
            // 获取输入的信息
            let message = $("#message").val().trim();
            // 向服务器端发送信息
            socket.emit("sentToServer", message);
        });

        // 3. 获取服务端发送过来的信息
        socket.on("sendToClient", message => {
            console.log(message);
        });
        /**
         * 发布订阅(广播), 一端发布, 可以让多端触发
         */	

	let self = ''
	export default {
		onLaunch: async function() {
			self = this
			// debugger
			console.log('App Launch')
			
	// 		// 连接 socket
	// 		// 1. 与服务器端建立连接
	// 		const socket = io.connect("http://localhost:3000");
	// 
	// 		// 2. 监听send按钮点击的事件
	// 		$("#send").click(function(){
	// 			// 获取输入的信息
	// 			let message = $("#message").val().trim();
	// 			// 向服务器端发送信息
	// 			socket.emit("sentToServer", message);
	// 		});
	// 
	// 		// 3. 获取服务端发送过来的信息
	// 		socket.on("sendToClient", message => {
	// 			console.log(message);
	// 		});
	// 		/**
	// 		 * 发布订阅(广播), 一端发布, 可以让多端触发
	// 		 */
	
			uni.connectSocket({
	          url: "wss://www.gaolongweb.cn:5000",
	          success:function(r){
	            console.log("ok")
	          },
	          fail:function(r){
	            console.log("fail")
	          },complete:function(r){
	            console.log("complete")
	          }
	        })
	        uni.onSocketOpen(function(res) {
	          console.log("websocket连接已打开")
	          uni.sendSocketMessage({
	            data: 'hhhh:'+Math.round(Math.random()*0xFFFFFF).toString()           
	          })
	        })
	 
	        uni.onSocketMessage(function(data) {
	          console.log('收到服务器内容：'+data)
	        })
	        uni.onSocketClose(function() {
	          console.log("websocket连接已关闭")
	        })
	        uni.onSocketError(function(res){
	            console.log('WebSocket连接打开失败，请检查！')
	        })
			
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
				console.log("App------onLaunch------检测到用户信息已授权-true----")
				store.dispatch("setAuthorizeState", {authorizeState: true})	
				// 重新登陆
				this.authorizeAfter_login().then(() => {
					console.log("APP onLaunch 登陆成功")
				})
			}, async function() {
				// 未授权回调
				console.log("App------onLaunch------检测到用户信息未授权--false---")
				// store-app 中存入 用户未授权状态 flag
				store.dispatch("setAuthorizeState", {authorizeState: false})
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
			
			// #ifdef APP-PLUS
			// app 检测 localstorage 中是否有 userToken
			this.appCheckLocalStorageToken()
			
			// 获取clientid
			this.getAppCid()
			//#endif
		},
		onShow: function() {
			console.log('App Show')
				
		},
		onHide: function() {
			console.log('App Hide')	
		},
		methods:{
			// app-plus获取应用的clientid
			getAppCid() {
				// app-plus 登录成功后 获取 设备的 clientid
				let clientid = plus.push.getClientInfo().clientid
				console.log("获取到的应用clientid", clientid)
				if (!clientid) { //如果获取的clientid为空，说明客户端向推送服务器注册还未完成，可以使用setTimeout延时重试。
					setTimeout(() => {
						clientid = plus.push.getClientInfo().clientid
						console.log("setTimeOut后打印的clientid", clientid)
					}, 4000)
				}else {
					// 存入用户的clientid 到storage 中
					uni.setStorage({
						key: 'clientid',
						data: clientid,
						success: function () {
							console.log('clientid 存储success');
						}						
					})
				}
			 
				// 首先是获取cid，cid是每个设备向个推服务器注册以后生成的设备id，获取到cid后要在登录的时候把cid传给服务端和用户绑定起来，就可以实现特定用户的推送。
				// 两个监听click很明显，就是点击时候出触发的。
				// receive有两种情况会触发
				// 1.ios应用已经打开的情况，这种情况通知栏不会有消息。可以自己写这种情况的处理逻辑，一般会弹出一个弹窗问需不需要跳转，我的方式是用plus.push.createMessage本地创建一条消息。
				// 2.android接收到不符合格式的推送（不符合{title:"xxxx",content:"xxxx",payload:"xxxxx"}），这个是服务端来控制的

				plus.push.addEventListener('click', (message) => {
					// 客户端注册点击事件
					this.pushCallBack("click事件", message)
				})
			 
				plus.push.addEventListener('receive', (message) => {
					// 客户端注册receive事件
					this.pushCallBack("reciive事件", message)
				})
			},

			pushCallBack(str, message){
				// 收到推送注册的 click 或者 receive事件后的 回调函数
				debugger
				uni.showToast({
					title: `${str},消息内容：${message}`
				})
			},	
			
					
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
			// 授权后登陆 （主要是微信小程序）	
			// 授权成功后，进行登陆注册获取 token，并缓存 AuthorizeStatus ,token 等
			async authorizeAfter_login(){
				// debugger
				// debugger;
				// 登陆之前，首先将全局的授权状态notAuthrize改为 已授权(true)，并存入 localstorage中，后续判断是否授权都是看localstorage里面的这个字段
				return new Promise(async (resolve,reject)=>{
					try{
						console.log('---调用login方法---')
						// let token = that.getDeviceApi().getStorageSync('token') || '';    
						// let userInfo = that.getDeviceApi().getStorageSync( 'userInfo' ) || '';
						// if( token )   await that.removeStorage("token" );
						// if( userInfo )  await that.removeStorage("userInfo" );      
						// debugger
						// 先登陆 uni.login();
						// let {code } = await uni.login();  //通过调用uni.login()获取code 判断是否开始登录
						let code_loginRes = ''
						await uni.login({
							success: async(res) => {
								debugger
								console.log("-----打印uni.login()登录后返回的code------",res.code)
								code_loginRes = res.code

								if(code_loginRes){
									let userInfo= await uni.getUserInfo({
										lang: "zh_CN"
									})
									
									console.log("-----授权后通过uni.getUserInfo()获取用户信息返回的结果-----：", userInfo[1])
									debugger
									let {
										iv,
										encryptedData,
										signature,
										rawData
										} = userInfo[1]

										// self.$store.dispatch("setUserName", userInfo[1].userInfo)  // 将返回的数据赋值 存入 store 的app中  
								
									let params = {
										params: {
											code: code_loginRes,
											encryptedData: encryptedData,
											iv: iv,
											type: '' //0是扫码，1是点击分享图，2.微信上搜索的
										}
									}
									
									//  this.$parent.gloabalData.ret = userInfo;  //  将返回的数据赋值给 全局gloabalData 的ret 
									//   console.log('---获取信息,发送网络请求，将获取到的code 传给后台获取 用户信息（openid、token等信息）---');
							
									//   let ret = this.$parent.globalData.ret;
							
									//   let type = "";
							
									//   console.log("----打印global中的 optionObj对象信息---：", this.$parent.globalData.optionObj );
									//   if ( this.$parent.globalData.optionObj.scene ){
									// 	// 场景值
									// 	type = await self.getEnterType(this.$parent.globalData.optionObj.scene );
									//   }
							
									//   let params = {
									// 	params: {
									// 	  code: code,
									// 	  encryptedData: ret.encryptedData,
									// 	  iv: ret.iv,
									// 	  type: type,       //0是扫码，1是点击分享图，2.微信上搜索的
									// 	  userId: self.$parent.globalData.optionObj.query.scene ? self.$parent.globalData.optionObj.query.scene : "",    // 用户scene唯一标识 用于邀请人数的统计
									// 	}
									//   }
							
									// 调用 后台注册用户信息的login接口 getOenId 方法
									// console.log(commApi)
									commApi.getOpenId( params, true ).then((res)=>{
										// debugger
										console.log("------------------",res)
										if(res && res.statusCode == 200){
											let resData = res.data
											if( resData && resData.code == 1){
												// debugger
												console.log('---网络请求返回成功---')
												console.log("-----调取后台login接口注册用户信息成功后获取openid成功------：", resData)          

												// uni.setStorage( "token", resData.data.token )
												// 将token 存入 store - app中
												store.dispatch("setUserToken", resData.data.token)
												// 将 userInfo 存入 store -app 中
												// store.dispatch("")
												// 将userId 存入 store-app 中
												store.dispatch("setUserId", resData.data.customer.id)
												// 缓存 用户信息 userInfo
												// uni.setStorage( "userInfo", JSON.stringify(resData.data.customer) )          
												resolve(true);  
											}else if( resData.code == 1018){
												// 发现是黑名单用户，跳转至黑名单页面
												//   this.reLaunchPage("../blacklist/index");
												//   console.log("---------调用后台login接口后返回的状态有问题-------")											
											}
											else {
												debugger
												// 登陆后后台返回错误
												uni.showToast({
													title: '登陆失败'
												})
												reject("-----调用后台login接口后返回的状态有问题-----")
												console.log("---------调用后台login接口后返回的状态有问题-------")
											}
										}
									}).then(async ()=>{
										// let token = await that.getStorage( "token" ) || "";
										// let userInfo = await that.getStorage( "userInfo" ) || "";
										// console.log('--------缓存token成功----------')
										// console.log( "缓存成功后读取缓存中的token：", token )
										// console.log('----------缓存userInfo成功--------')
										// console.log( "缓存成功后读取缓存中的userInfo：", userInfo ) 
									})						
								}else{
									reject("---登陆微信后台 wx.login() 接口返回异常---");
									console.log('---登陆微信后台 wx.login() 接口返回异常---')
								}
							},
							fail: (error) => {
								debugger
								console.log("-----打印登录后------", error)
							}
						})
					}catch (error) {
						console.log(error)
						reject(error)
					}
				}) 
			},
			// app 检测localStorage 中是否有userToken
			appCheckLocalStorageToken() {
				return new Promise((resolve, reject) => {
					let res_localStorage = uni.getStorageSync("userToken")
					if(res_localStorage){
						store.dispatch("setUserToken", res_localStorage)
					}
				})
			}
		}
	}
</script>

