<template>
	<view id="login">
		<view class="loginBox">
				谁会看到是健康的减肥立刻撒旦解放开绿灯时间分厘卡
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
