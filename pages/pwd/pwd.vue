/** 
* 忘记密码页面
*/
<style lang="less" scoped>
	#pwd {
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
		<view id="pwd" slot="container-slot">
			<view class="input-group">
				<view class="input-row">
					<text class="title">邮箱：</text>
					<m-input type="text" focus clearable v-model="email" placeholder="请输入邮箱"></m-input>
				</view>
			</view>

			<view class="btn-row">
				<button type="primary" class="primary" @tap="findPassword">提交</button>
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
                email: ''
            }
        },
        methods: {
            findPassword() {
                /**
                 * 仅做示例
                 */
                if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法',
                    });
                    return;
                }
                uni.showToast({
                    icon: 'none',
                    title: '已发送重置邮件至注册邮箱，请注意查收。',
                    duration: 3000
                });
            }
        }
    }
</script>

<style>

</style>
