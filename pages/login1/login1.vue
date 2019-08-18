<style>
    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-row navigator {
        color: #007aff;
        padding: 0 10px;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 50px;
        height: 50px;
        border: 1px solid #dddddd;
        border-radius: 50px;
        margin: 0 20px;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 30px;
        height: 30px;
        margin: 10px;
    }
</style>

<template>
	<container>
    <view id="login-content" slot="container-slot">
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
		
        <!--授权登陆区域-->
        <view class="oauth-row" v-if="hasProvider" :style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
        </view>
    </view>
	</container>
</template>

<script>
    import loginApi from '@/api/login.js'
	import { miniProApi } from '@/utils/mixins.js'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import mInput from '../components/m-input/m-input.vue'

    export default {
        components: {
            mInput
        },
        mixins:{
            miniProApi
        },
        data() {
            return {
                providerList: [],  // 授权的服务商的信息
                hasProvider: false,  // 是否有 授权的服务商
                name: '',  // 用户名
                password: '', //密码
                positionTop: 0  
            }
        },
        computed: mapState(['forcedLogin']),
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
                const filters = ['weixin', 'qq', 'sinaweibo'];
                uni.getProvider({
                    service: 'oauth', //服务类型  登录授权
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/img/' + res.provider[i] + '.png'
                                    });
                                }
                            }
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
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.name.length < 5) {
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
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
                const data = {
                    name: this.name,
                    pwd: this.password
                };
                loginApi.register().then((res) => {
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
                        this.toast("用户账号或密码不正确")
                    }
                })
            },
            oauth(value) {
                this.getDevice().login({
                    provider: value,
                    success: (res) => {
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
                                this.toWelecome(infoRes.userInfo.nickName);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
            toWelecome(userName) {
                // 触发 store 中的mutations （login）
                this.login(userName);
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

