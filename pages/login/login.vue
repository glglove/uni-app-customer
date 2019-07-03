<template>
	<view>
		<view class="loginBox">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<!-- <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field> -->
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<!-- <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field> -->
		</view>
		<view class="loginBtnBox">
			<mt-button type="default" class="loginBtn" @click='login'>登陆</mt-button>
		</view>
	</view>
</template>

<script>
	import {http} from '../../utils/http.js'
	export default {
		data() {
			return {
				username: '',
				email: '',
				password: '',
				phone: ''
			};
			
		},
		methods:{
			login(){
				if(this.username && this.password){
					// const option = {
					// 	path: '/users/register',
					// 	
					// }
					// http.get()
					http.get('users/register',{
							params: {
								name: this.username,
								pwd: this.password
							}
						}).then((res)=>{
						console.log("调取注册接口后返回到数据-----》",res)
						if(res && res.data.state === 1) {
							uni.navigateTo({
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

						}
					})	
				}else {
					// uni.showToast({
					// 	title:"用户名和密码为空",
					// 	duration:2000,
					// 	mask:truetrue
					// })
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
	.loginBtnBox {
		text-align: center;
		margin: 20px auto 0 
		// .loginBtn {
		// 	width: 50%;
		// 	height: 50px;
		// 	line-height: 50px
		// }
	}
</style>
