/** 
*注册页面
*/
<style lang="less" scoped>
	#register {
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
					width: 144upx;
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
	}
</style>
<template>
	<container>
		<view id="register" slot="container-slot">
			<view class="input-group">
				<view class="input-row border">
					<text class="title">账号：</text>
					<m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
				</view>
				<view class="input-row border">
					<text class="title">密码：</text>
					<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
				</view>
				<view class="input-row">
					<text class="title">邮箱：</text>
					<m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
				</view>
			</view>
			<view class="btn-row">
				<button type="primary" class="primary" @tap="register">注册</button>
			</view>
		</view>		
	</container>
</template>

<script>
    import mInput from '../components/m-input/m-input.vue';

    export default {
        components: {
            mInput
        },
        data() {
            return {
                account: '',
                password: '',
                email: ''
            }
        },
        methods: {
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法'
                    });
                    return;
                }

                const data = {
                    account: this.account,
                    password: this.password,
                    email: this.email
                }
                // service.addUser(data);
                uni.showToast({
                    title: '注册成功'
                });
                uni.navigateBack({
                    delta: 1
                });
            }
        }
    }
</script>

