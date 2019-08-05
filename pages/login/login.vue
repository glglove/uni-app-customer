<template>
	<view id="login">
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
	</view>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import loginApi from '@/api/login.js'
	export default {
		data() {
			return {
				username: '',
				password: '',
			};
		},
		methods:{
			login(){
				Indicator.open('Loading...');
				if(this.username && this.password){
					// 调取注册/登录接口
					let params = {
						name: this.username,
						pwd: this.password
					}
				
					loginApi.register(params).then((res)=>{
						console.log("调取注册/登录接口后返回到数据-----》",res)
						if(res && res.data.code === 1) {
							// 成功后 
							debugger
							Indicator.close();
							uni.switchTab({
								url:'../find/find',
								success: () => {
									uni.showToast({
										title:"登陆成功"
									})
								},
								fail: () =>{
									
								}
							}) 
						}else {
							Indicator.close();
						}
					})	
				}else {
					Indicator.close();
					uni.showModal({
						title: '提示',
						content: '用户名密码为空',
						showCancel: true,
						cancelText: '取消',
						confirmText: '确定',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
			}
		}
	}
</script>

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
		// background: url('https://www.kaoyandaka.com/img/find_bg_gaitubao_com_350x646.png') no-repeat 0 0;
		// background-color: rgba(205,205,202,0.5);
		background-size: cover;
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
