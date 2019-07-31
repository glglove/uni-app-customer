<template>
	<view id="login">
		<view class="loginBox">
<!-- 			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field> -->
			
			<view class="loginWrap">
				用户名：<input type="text" value="" v-model="username"/>
				密码：<input type="text" value="" v-model="password"/>
			</view>
			
		</view>
		<view class="loginBtnBox">
			<mt-button type="primary" class="loginBtn" @click='login'>登陆</mt-button>
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
		height: 400px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		.loginBox{
			width: 750upx;
			background-color: red
		}
		.loginBtnBox {
			width: 100%;
			text-align: center;
			margin-top: 20px;
			.loginBtn {
				width: 90%;
				height: 50px;
				line-height: 50px;
				margin: 0 auto;
			}
		}	
	}
</style>
