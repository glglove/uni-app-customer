/** 
* 忘记密码页面
*/

<template>
	<container>
		<view id="content-pwd" slot="container-slot">
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
