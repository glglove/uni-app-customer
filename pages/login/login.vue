<style lang="less" scoped>	
	#login {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
 		.input-group {
			background-color: #ffffff;
			margin-top: 40upx;
			position: relative;
			&::before {
				position: absolute;
				right: 0;
				top: 0;
				left: 0;
				height: 2upx;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #c8c7cc;				
			}
			&::after {
				position: absolute;
				right: 0;
				bottom: 0;
				left: 0;
				height: 2upx;
				content: '';
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
				background-color: #c8c7cc;				
			}
			.input-row {
				display: flex;
				flex-direction: row;
				position: relative;
				font-size: 36upx;
				line-height: 80upx;	
				&.border::before{
					position: absolute;
					right: 0;
					bottom: 0;
					left: 16upx;
					height: 2upx;
					content: '';
					-webkit-transform: scaleY(.5);
					transform: scaleY(.5);
					background-color: #c8c7cc;					
				}
				.title {
					min-width: 144upx;
					padding-left: 30upx;					
				}
			}
		} 
		.btn-row {
			margin-top: 50upx;
			padding: 20upx;
			button {
				&.primary {
					background-color: #0faeff;
				}
			}
		}
		.action-row {
			display: flex;
			flex-direction: row;
			justify-content: center;
			navigator {
				color: #007aff;
				padding: 0 20upx;
			}
		}
		.oauth-row {
			display: flex;
			flex-direction: row;
			justify-content: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			.oauth-image {
				width: 100upx;
				height: 100upx;
				border: 2upx solid #dddddd;
				border-radius: 100upx;
				margin: 0 40upx;
				background-color: #ffffff;
				image {
					width: 60upx;
					height: 60upx;
					margin: 20upx;
				}
			}
		}
	}
	
</style>

<template>
	<container>
		<view id="login" slot="container-slot">
			<view class="input-group">
				<view class="input-row border">
					<text class="title">账号：</text>
					<m-input class="m-input" type="text" clearable focus v-model="name" placeholder="请输入账号"></m-input>
				</view>
				<view class="input-row">
					<text class="title">密码：</text>
					<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
				</view>
			</view>
			
			<view class="btn-row">
				<button type="primary" class="primary" @tap="bindLogin">登录</button>
			</view>
			
			<view class="action-row">
				<navigator url="../register/register">注册账号</navigator>
				<text>|</text>
				<navigator url="../pwd/pwd">忘记密码</navigator>
			</view>
			
			
			<!--#ifdef APP-PLUS-->
	<!-- 			hasProvider: {{hasProvider}}
			providerList: {{providerList[0].value}}
			providerList: {{providerList[0].image}} -->
			<!--#endif-->
			<!--授权登陆区域-->
			<view class="oauth-row" v-if="hasProvider" :style="'top:' + positionTop + 'px'">
				<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
					<image :src="provider.image" @tap="oauth(provider.value)"></image>
				</view>
			</view>
			
			<!--#ifdef H5-->
			<view class="oauth-row"  :style="'top:' + positionTop + 'px'">
				<view class="oauth-image" >
					<image :src="require('@/static/weixin.png')" @tap="oauth()"></image>
				</view>
				
				<view class="oauth-image" >
					<image :src="require('@/static/qq.png')" @tap="oauth()"></image>
				</view>
								
				<view class="oauth-image" >
					<image :src="require('@/static/sinaweibo.png')" @tap="oauth()"></image>
				</view>								
			</view>
			<!--#endif-->
		</view>
	</container>
</template>

<script>
    import loginApi from '@/api/login.js'
    import commApi from '@/api/comm.js'
	import { miniProApi } from '@/utils/mixins.js'
    import {
        mapGetters,
        mapMutations
    } from 'vuex'
    import mInput from '../components/m-input/m-input.vue'

    export default {
        components: {
            mInput
        },
        mixins:[
            miniProApi
        ],
        data() {
            return {
                providerList: [],  // 授权的服务商的信息
                hasProvider: false,  // 是否有 授权的服务商
                name: '',  // 用户名
                password: '', //密码
                positionTop: 0,
				toUrl: '../find/find', // 登陆成功后需要跳转的页面地址 默认是跳转至 find首页
				jumpType: 2 // jumpType 为跳转的方式： 1:switch   2:redirect  3:relanch 4:navigate
            }
        },
        computed: {
			...mapGetters(['forcedLogin','userToken'])
		},
		watch: {
			userToken: {
				handler(newValue, oldValue){
					if(newValue){
						// 页面调转到首页
						this.switchPage("../find/find")
					}
				},
				immediate: true
			}
		},
		onLoad(options) {
			try{
				this.toUrl = options.toPageUrl
				this.jumpType = options.jumpType
			}catch(e){
				//TODO handle the exception
			}
		},
        onReady() {
            // 获取 设备屏幕的可视区高度
            this.initPosition();
            //获取 服务商
            this.initProvider();
        },
        methods: {
            // ...mapMutations(['login']),
            // 获取服务供应商
            initProvider() {
				debugger
                const filters = ['weixin', 'qq', 'sinaweibo'];
                uni.getProvider({
                    service: 'oauth', //服务类型  登录授权
                    success: (res) => {
						debugger
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/' + res.provider[i] + '.png'
                                    });
                                }
                            }
							debugger
                            // 设置 是否有授权的服务商
                            this.hasProvider = true;
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
            bindLogin() {
				debugger
				let _this = this
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                // if (this.name.length < 5) {
                //     uni.showToast({
                //         icon: 'none',
                //         title: '账号最短为 5 个字符'
                //     });
                //     return;
                // }
                // if (this.password.length < 6) {
                //     uni.showToast({
                //         icon: 'none',
                //         title: '密码最短为 6 个字符'
                //     });
                //     return;
                // }
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
     //            const data = {
					// loginAccount: this.name,
					// password: this.password	
     //            };
				
				// console.log("手机号码、密码注册登录时的 data",data)
				//#ifdef APP-PLUS
				// uni.login({
				// 	success(res) {
				// 		debugger
				// 		console.log("app登录通过 uni.login 获取到的返回结果 res", res)
				// 		uni.getUserInfo({
				// 			success(res) {
				// 				debugger
				// 				console.log("app登录后通过 uni.getUerInfo 获取到的 返回结果res", res)
				// 				// 成功之后 进行 手机号、密码注册登录  
				// 				loginApi.register(data).then((res) => {
				// 					debugger
				// 					if(res && res.data.code === 1) {
				// 						this.success('登录成功')
				// 						// 成功后 
				// 						// debugger
				// 						// 将用户信息存入到store 中
				// 						if(res.data.user){
				// 							this.$store.dispatch('setUserToken', res.data.user.token || '')								
				// 						}
				// 						debugger
				// 						this.switchPage('../find/find').then((res) =>{
											
				// 						}).catch(()=>{
											
				// 						})
				// 					}else {
				// 						this.hideLoading();
				// 						this.toast("用户账号或密码不正确")
				// 					}
				// 				})								
				// 			},
				// 			fail(res) {
				// 				debugger
				// 			}
				// 		})
				// 	},
				// 	fail(res) {
				// 		debugger
				// 	}
				// })
				//#endif
     //            loginApi.register(data).then((res) => {
					// // debugger
     //                if(res && res.data.code === 1) {
     //                    this.success('登录成功')
     //                    // 成功后 
     //                    // debugger
     //                    // 将用户信息存入到store 中
     //                    if(res.data.user){
     //                        this.$store.dispatch('setUserToken', res.data.user.token || '')								
     //                    }
					// 	debugger
     //                    this.switchPage('../find/find').then((res) =>{
     //                        
     //                    }).catch(()=>{
     //                        
     //                    })
     //                }else {
     //                    this.hideLoading();
     //                    this.toast("用户账号或密码不正确")
     //                }
     //            })
	 
	 		// 	let data = {
				// 	name: this.name,
				// 	password: this.password
				// }
				// console.log("手机号码、密码注册登录时的 data",data)
				// this.$store.dispatch("login", data)
				 
				let data = {
					params: {
						loginAccount: this.name,
						password: this.password	 
					}
				}
	 
				commApi.appLoginAndRegister( data ).then(res => {
					debugger
					console.log("app登陆成功后打印 res", res)
					if(res.statusCode === 200 && res.data.code === 1){
						// console.log("--------",res.data.data.token)
						let token = res.data.data.token
						let customer = res.data.data.customer
						// tokn 存入 缓存中
						this.setStorage("userToken", token)
						console.log("welecome中打印冲localstorage中获取到的userToken",uni.getStorageSync("userToken"))
						// token 存入store 中
						this.$store.dispatch("setUserToken", token)
						this.toast("app登录成功")
						// 登陆成功后 页面进行跳转
						switch(this.jumpType){
							case 1:
								this.switchPage(this.toUrl)
							break;
							
							case 2:
								this.redirectPage(this.toUrl)
							break;
							
							case 3:
								this.reLauchPage(this.toUrl)
							break;
							
							case 4:
								this.navigatePage(this.toUrl)
							break
							
							default:
								this.switchPage('../find/find')
						}
					}else if( res.statusCode === 200 && res.data.code === 1000){
						// 密码错误
						this.toast("登录密码不正确,请重新输入")
					} 
				})
				
            },
			// 授权登陆（微信、qq、微博）
            oauth(value) {
                this.getDeviceApi().login({
                    provider: value,
                    success: (res) => {
						console.log("[${value}]授权后 通过uni.login()获取到的返回结果res", JSON.stringify(res))
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。 
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
								console.log(`[${value}]授权登录后 通过uni.getUserInfo获取到的返回结果infoRes`, JSON.stringify(infoRes))
                                this.getLoginToken(infoRes);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
			// 授权后 登录获取 token
			getLoginToken(data) {
				debugger
				let params = {
					params: {
						
					}
				}
				commApi.getOpenId( params, true ).then((res) =>{
					debugger
				})
			},
            toWelecome(userName) {
                // 触发 store 中的mutations （login）
                // this.login(userName);
                /**
                 * 强制登录时使用reLaunch方式跳转过来
                 * 返回首页也使用reLaunch方式 
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
                    });
                } else {
                    uni.navigateBack();
                }
            }
        }
    }
</script>

