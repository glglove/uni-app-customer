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
	import loginApi from '@/api/login.js'
	import { miniProApi } from '@/utils/mixins.js'
	export default {
		mixins:[ miniProApi ],
		data() {
			return {
				username: '',
				password: '',
			};
		},
		methods:{
			login(){
				// debugger
				this.showLoading();
				if(this.username && this.password){
					// 调取注册/登录接口
					let params = {
						name: this.username,
						pwd: this.password
					}
					this.hideLoading();
					loginApi.register(params).then((res)=>{
						console.log("调取注册/登录接口后返回到数据-----》",res)
						if(res && res.data.code === 1) {
							// 成功后 
							// debugger
							this.switchPage('../find/find').then((res) =>{
								this.success('登录成功')
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
