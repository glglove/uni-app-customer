<style lang="less" scoped>
	#login {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		opacity: 1;
		// background: url('https://www.kaoyandaka.com/img/find_bg_gaitubao_com_350x646.png') no-repeat 0 0;
		// background-color: rgba(205,205,202,0.5);
		// background-size: cover;
		background-color: #e8e5e5;
		.loginBox{
			width: 100%;
			margin: 300upx 0 30upx 0;
			// background-color: red
			.loginWrap{
				// box-sizing: border-box;
				.userNameBox{
					display: flex;
					justify-content: flex-start;
					height: 90upx;
					margin-bottom: 30upx;
					padding: 10upx 20upx;
					.nameTit {
						width: 130upx;
					}
					.userNameInput{
						flex-grow: 1;
						border: 1upx solid #000000;
					}
				}
				.passWordBox{
					display:flex;
					justify-content: flex-start;
					height: 90upx;
					padding: 10upx 20upx;
					.pwdTit {
						width: 130upx;
					}
					.passWordInput{
						flex-grow: 1;
						border: 1upx solid #000000;
					}
				}
			}
		}
		.loginBtnBox {
			width: 100%;
			text-align: center;
			margin-top: 20upx;
			.loginBtn {
				width: 90%;
				height: 50px;
				line-height: 50px;
				margin: 0 auto;
			}
		}	
	}
</style>

<template>
	<container>
		<view id="login" slot="container-slot">	
			<!--h5登录-->
			<!-- #ifdef H5 -->
			<view class="loginBox">	
				<view class="loginWrap">
					<view class="userNameBox">
						<span class="nameTit">用户名：</span>
						<input class="userNameInput" type="text" value="" v-model="username"/>
					</view>
					<view class="passWordBox">
						<span class="pwdTit">密码：</span>
						<input class="passWordInput" type="text" value="" v-model="password"/>
					</view>
				</view>
			</view>		
			
			<view>
				<button class="button click-able" plain="true" @tap="login">按钮</button>
			</view>		
			<!-- #endif -->
			
			
			<!--小程序登录-->
			<!-- #ifdef MP-WEIXIN -->
			<!-- <authorize></authorize> -->
			<!-- #endif -->
					

			<!--app-pulus--登录-->
			<!-- #ifdef APP-PLUS-->
			<view class="loginBox">	
				<view class="loginWrap">
					<view class="userNameBox">
						<span class="nameTit">用户名：</span>
						<input class="userNameInput" type="text" value="" v-model="username"/>
					</view>
					<view class="passWordBox">
						<span class="pwdTit">密码：</span>
						<input class="passWordInput" type="text" value="" v-model="password"/>
					</view>
				</view>
			</view>			
				
			<view>
				<button class="button click-able" plain="true" @tap="login">按钮</button>
			</view>					
			<!-- <button class="" @click="appLogin">APP微信授权登录</button> -->
			<!--#endif-->	
		</view>
	</container>
	
		
		
</template>

<script>
	import loginApi from '@/api/login.js'
	import { miniProApi } from '@/utils/mixins.js'
	import Authorize from '@/pages/components/authorize/authorize'
	export default {
		mixins:[ miniProApi ],
		components:{
			Authorize
		},
		data() {
			return {
				username: '',
				password: '',
			};
		},
		onLoad() {
			console.log("----------login页面 ----onload----")
		},
		methods:{
			// onComLoad
			async onComLoad() {
				console.log("----------login页面 ----onComLoad----")
				// 先判断 用户是否微信授权
				// #ifdef MP-WEIXIN
					let isAuthorize = await this.getAuthorizeStatus("scope.userInfo", async () => {
						this.$store.dispatch("setAuthorizeState", {authorizeState: true})												
						this.reLaunchPage("../find/find")
					}, async () => {
						// this.reLaunchPage("../find/find")												
						this.$store.dispatch("setAuthorizeState", {authorizeState: false})
					})
				// #endif
			},
			login(){
				// debugger
				this.showLoading();
				if(this.username && this.password){
					// 调取注册/登录接口
					let params = {
						name: this.username,
						pwd: this.password
					}
					this.hideLoading()
					loginApi.register(params).then((res)=>{
						debugger
						console.log("调取注册/登录接口后返回到数据-----》",res)
						if(res && res.data.code === 1) {
							this.success('登录成功')
							// 成功后 
							// debugger
							// 将用户信息存入到store 中
							if(res.data.user){
								this.$store.dispatch('setUserToken', res.data.user.token || '')								
							}
							this.switchPage('../welecome/welecome').then((res) =>{
								
							}).catch(()=>{
								
							})
						}else {
							this.hideLoading();
						}
					})	
				}else {
					this.hideLoading();
					this.alert('用户名或密码不能为空')
				}
			}
		}
	}
</script>
