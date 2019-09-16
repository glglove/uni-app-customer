<style lang="less" scoped>
    #welecome {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
        .welecome-logined {
            display: flex;
            flex: 1;
            flex-direction: column;
            .title {
                color: #8f8f94;
                margin-top: 50upx;
            }  
            .ul {
                font-size: 30upx;
                color: #8f8f94;
                margin-top: 50upx;
                view {
                    line-height: 50upx;
                }
            }                      
        }
        .welecome-loginOut {
            display: flex;
            flex: 1;
            flex-direction: column;
            .title {
                color: #8f8f94;
                margin-top: 50upx;
            } 
            .ul {
                font-size: 30upx;
                color: #8f8f94;
                margin-top: 50upx;
                view {
                    line-height: 50upx;
                }
            }           
        }
    }
</style>

<template>
    <container :loading1="loading1">
        <view id="welecome" slot="container-slot">
			<!-- hasLogin: {{hasLogin}} -->
			isHasLogin: {{isHasLogin}}
<!-- 			<view v-if="hasLogin" class="welecome-logined">
                <view class="title">
                    您好 {{userName}}，您已成功登录。
                </view>
                <view class="ul">
                    <view>这是 uni-app 带登录模板的示例App首页。</view>
                    <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
                </view>
            </view> -->
            
			<view v-if="!isHasLogin" class="welecome-loginOut">
                <view class="title">
                    您好 游客。
                </view>
                <view class="ul">
                    <view>这是 uni-app 带登录模板的示例App首页。</view>
                    <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
                </view>
            </view>
        </view>
    </container>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

	import { miniProApi } from '@/utils/mixins.js'
    export default {
		mixins: [ miniProApi ],
        computed: {
			...mapGetters(['forcedLogin', 'hasLogin', 'userName'])
		},
		data(){
			return {
				isHasLogin: false
			}
		},
        onLoad() {
			console.log("----",this.hasLogin)
   //          if (!this.hasLogin) {
   //              uni.showModal({
   //                  title: '未登录',
   //                  content: '您未登录，需要登录后才能继续',
   //                  /**
   //                   * 如果需要强制登录，不显示取消按钮
   //                   */
   //                  showCancel: !this.forcedLogin,
   //                  success: (res) => {
   //                      if (res.confirm) {
			// 				/**
			// 				 * 如果需要强制登录，使用reLaunch方式
			// 				 */
   //                          if (this.forcedLogin) {
   //                              uni.reLaunch({
   //                                  url: '../login/login'
   //                              });
   //                          } else {
   //                              uni.navigateTo({
   //                                  url: '../login/login'
   //                              });
   //                          }
   //                      }
   //                  }
   //              });
   //          }else {
			// 	// this.navigatePage("../find/find")
			// }
        },
		methods:{
			onComLoad(){
				debugger
                // 判断 localStorage 中是否有 userToken 没有就跳到 登陆页面
                let userToken = uni.getStorageSync("userToken")
				console.log("app 中的 welecome 页面onComLoad 中localStorage 中获取到的 userToken", userToken)
                if(userToken ){
					this.isHasLogin = true
					// 将userToken 赋值给 store-app 中存储
					this.$store.dispatch("setUserToken", userToken)
                    //跳到 find 首页
                    this.switchPage("../find/find")
                }else {
                    // 跳到 登陆页面
                    this.reLaunchPage("../login/login")
                }
			}
		}
    }
</script>

