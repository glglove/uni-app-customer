<style lang="less" scoped src = "">
	#my {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		.bgBox {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: 0 auto;      
		}
		.contentBox {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			z-index: 100;			
			.top {
				position: relative;
				width: 686upx;
				height: 108upx;
				line-height: 108upx;
				margin: 40upx auto;
				.leftInfoBox {
					.avatarBox {
						.photo {
							width: 108upx;
							height: 108upx;
							border-radius: 50%;
							vertical-align: middle;
						}
						.name {
							display: inline-block;
							height: 48upx;
							margin-left: 25upx;
							line-height: 48upx;
							text-align: center;
							font-size: 34upx;
							color: #FFFFFF;
							letter-spacing: 0.59upx;
						}	
					}
					.contentLoginBox {
						.btn-row {
							.loginBtn {
								font-size: 32upx;
								background-color: #FA9A60
							}
						}
					}						
				}
				.setBtnBox {
					.set {
						position: relative;
						width: 50upx;
						height: 50upx;  
						margin: 32upx 0;
						image.set {
						  position: absolute;
						  top: -30upx;
						  left: 0;  
						  z-index: 1001;
						}
						.btn {
							position: absolute;
							width: 100%;
							height: 100%;
							padding: 0 !important;
							line-height: 0 !important;
							background-color: transparent !important; 
							z-index: 1002;
						}            
					}
				}							
			}
			.containerBox {
				width: 686upx;
				height: 560upx;
				border-radius: 28upx;
				margin: 0 auto;
				padding: 0 30upx;
				background: #FFFFFF;
				border: 1px solid rgba(250, 235, 228, 0.2);
				box-shadow: 0 12px 10px rgba(252,195,165,0.2);
				box-sizing: border-box; 
				.itemBox {
					height: 100upx;
					line-height: 100upx;
					.itemBox-left {
						margin: 26upx 0;
						.pic {
							width: 48upx;
							height: 45upx;
						}
						.tit {
							height: 42upx;
							line-height: 42upx;
							color: #000000;
							font-size: 30upx;
							letter-spacing: 0.46upx;
							margin-left: 30upx;
						}
					}
					.itemBox-right {
						width: 15upx;
						height: 30upx;
						margin-top: 7.5upx;
						.tip {
							width: 100%;
						}
					}
				}  
			}
		}
	}
</style>

<template>
	<container :containerLoading="containerLoading">
		<view id="my"  slot="container-slot"  @touchstart=""  @touchmove="" @touchend="">
			<!--loading组件-->
			<!-- <Loading type="4"></Loading> -->

			<view class="bgBox">
				<image class="" :src="bg.my_bg" lazy-load="true"></image>
			</view>
			
			<view class="contentBox">
				<view class="top marginT40 u-f u-f-jsb">
					<!-- photo_png: {{photo_png}}
					set_png: {{set_png}} -->
					<!--头像、姓名区域-->
					<view class="leftInfoBox u-f-ajc">
						<view class="avatarBox u-f-ac">
							<image class="photo" :src="photo_png" layz-load="true"></image>
							<text class="name">{{name? name:''}}</text>
						</view>
													
						
						<!--登陆/退出登陆-->
						<!--#ifdef H5 || APP-PLUS-->
						<view class="contentLoginBox">
							<view class="btn-row">
								<button class="loginBtn" v-if="!userToken" type="primary"  @tap="bindLogin">{{userToken?'已登陆': '您还未登录'}}</button>
								<button class="loginBtn" v-if="userToken" type="default" @tap="loginOut">退出登录</button>
							</view>
						</view>
						<!--#endif-->
					</view>
					
					<!--设置区域-->
					<view class="setBtnBox">
						<!--#ifdef MP-WEIXIN-->
						<form id="setFormBox"  class="set rt click-able" report-submit="true" bindsubmit="formSubmit">
							<image class="set click-able" :src="set_png" layz-load="true" @tap.stop = "clickSetBtn"></image>
							<button form-type="submit" class="btn click-able"></button>
						</form>
						<!--#endif-->
						
						<!--#ifdef H5 || APP-PLUS-->
						<span class="setBtn">
							<image class="set click-able" :src="set_png" layz-load="true" @tap.stop = "clickSetBtn"></image>
							<button form-type="submit" class="btn click-able"></button>						
						</span>
						<!--#endif-->
					</view>					
				</view>
				<view class="containerBox form">
					<view class="itemBox line clearfix marginT10 click-able u-f u-f-jsb" @tap.stop = "clickLessons">
						<view class="itemBox-left form_row lt">
							<image :src="card_png" class="pic"></image>
							<text class="tit">报名卡片</text>
						</view>
						<view class="itemBox-right rt">
							<image :src="forwardRight_png" layz-load="true" class="tip"></image>
						</view>
					</view> 

					<view class="itemBox line clearfix marginT10 click-able u-f u-f-jsb" @tap.stop = "clickAchivement">
						<view class="itemBox-left form_row lt">
							<image :src="achievement_png" layz-load="true" class="pic"></image>
							<text class="tit">我的成就</text>
						</view>
						<view class="itemBox-right rt">
							<image :src="forwardRight_png" layz-load="true" class="tip"></image>
						</view>
					</view> 

					<view class="itemBox line clearfix marginT10 click-able u-f u-f-jsb" @tap.stop = "clickRecord">
						<view class="itemBox-left form_row lt">
							<image :src="record_png" layz-load="true" class="pic"></image>
							<text class="tit">学习记录</text>
						</view>
						<view class="itemBox-right rt">
							<image :src="forwardRight_png" layz-load="true" class="tip"></image>
						</view>
					</view> 

					<view class="itemBox line clearfix marginT10 click-able u-f u-f-jsb" @tap.stop = "clickHelp">
						<view class="itemBox-left form_row lt">
							<image :src="help_png" layz-load="true" class="pic"></image>
							<text class="tit">帮助中心</text>
						</view>
						<view class="itemBox-right rt">
							<image :src="forwardRight_png" layz-load="true" class="tip"></image>
						</view>
					</view> 

					<view class="itemBox line clearfix marginT10 click-able u-f u-f-jsb"  @tap.stop = "clickInvitation">
						<view class="itemBox-left form_row lt">
							<image :src="invitation_png" layz-load="true" class="pic"></image>
							<text class="tit">邀请好友</text>
						</view>
						<view class="itemBox-right rt">
							<image :src="require('@/static/imgs/icon/forward-right.png')" layz-load="true" class="tip"></image>
						</view>
					</view>                                       
				</view>	
				<!--引用footerCmp-->
				<footer-explain versition="20150205" :bgcolor="'rgba(246,246,247,1)'"></footer-explain>								
			</view>
			
		</view>	
	</container>	
</template>

<script>
	import photoPng from '@/static/imgs/icon/photo.png'
	import setPng from '@/static/imgs/icon/set.png'
	import cardPng from '@/static/imgs/icon/card.png'
	import achievementPng from '@/static/imgs/icon/achievement.png'
	import recordPng from '@/static/imgs/icon/record.png'
	import forwardRightPng from '@/static/imgs/icon/forward-right.png'
	import helpPng from '@/static/imgs/icon/help.png'
	import invitationPng from '@/static/imgs/icon/invitation.png'	
	
	import FooterExplain from '@/pages/components/footerExplain/footerExplain'

	import { miniProApi } from '@/utils/mixins.js'
	
	import {
        mapGetters,
        mapMutations
    } from 'vuex'
	import myApi from '@/api/my.js'

	export default {
		mixins: [ miniProApi ],
        components: {
			FooterExplain
        },	
		computed: {
			...mapGetters(['hasLogin', 'forcedLogin','userToken','userAvatarUrl','userInfo']),
		},
		watch:{

		},	
		data() {
			return {
				flag: false, // 控制首次加载时的 onload 和 onshow 的重复加载
				name: '',
				bg: {
					// my_bg: `${this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.my_bg}`
					my_bg: ''
				},
				photo_png: photoPng,
				set_png: setPng,
				card_png: cardPng,
				achievement_png: achievementPng,
				record_png: recordPng,
				forwardRight_png: forwardRightPng,
				help_png: helpPng,
				invitation_png: invitationPng,
				pHeight: 0, 
				startY: 0, 
				scrollTop_refresh: 0, // 滑动的距离				
			}
		},

		onLoad() {
			this.avaterPic = this.getAvaterPic()
		},
		onShow() {
			
		},
		onReady() {
			
		},
		onHide(){
			
		},
		onUnload(){
			
		},
		onPullDownRefresh(){
			
		},
		onReachBottom(){
			
		},
		onShareAppMessage(){
			
		},
		onPageScroll(){
			
		},
		onTabItemTap(){
			
		},
		methods:{
			...mapMutations(['loginOut']),
			onComLoad(){
				// 异步下载 首页的背景图片存入 缓存中 后续就不用再次加载
				debugger
				if( !this.bg.my_bg ){
					uni.downloadFile({
						url: `${this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.my_bg}`,
						success: (res) => {
							debugger
							if(res.statusCode === 200 && res.tempFilePath){
								console.log("99999999999",res)
								// res.tempFilePath
								this.bg.my_bg = res.tempFilePath
								// uni.saveFile({
								// 	 
								// }) 
							}
						},
						fail: (error) => {
								
						}
					})	
				}else {
					console.log("find首页背景图片已经下载过了")
				}			
			},			
			// 刷新页面
			refreshPage () {
				
			},
			// 登陆
			bindLogin () {	
                this.navigatePage("../login/login?toPageUrl=../my/my&jumpType=1");
			},	
			// 退出登陆
			loginOut () {
				//#ifdef H5 || APP-PLUS
                // this.loginOut();
				this.$store.dispatch("setUserToken", '')
				// 清空locaStorage 中的 userToken
				this.setStorage("userToken", "")
				//#endif
				
				//#ifdef MP-WEIXIN
				
				//#endif
				
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                // if (this.forcedLogin) {
                //     uni.reLaunch({
                //         url: '../login/login',
                //     });
                // }				
			},	
			// 获取头像
			async getAvaterPic() {
				// debugger
				// console.log(this.getStorage("userInfo"))
				this.getStorage("userInfo").then(res => {
					debugger
					// console.log("------------",res)
					if(res){
						this.photo_png = JSON.parse(res).headImg
					}
				})
			},
			// 点击设置
			clickSetBtn(){
				this.navigatePage("../packageB/my/set/index")
			},
			// 点击报名卡片
			clickLessons () {
				this.navigatePage('../packageB/my/signUpCard/signUpCard')
			},
			// 
			// 点击 我的成就
			async clickAchivement () {
				this.navigatePage('../packageB/my/myAchievement/index')
			},
			// 学习记录
			clickRecord(){
				this.navigatePage('../packageB/my/learnRecord/index')
			},
			//帮助中心
			clickHelp(){
				this.navigatePage('../packageB/my/help/index')
			},
			// 邀请好友
			clickInvitation() {
				this.navigatePage('../packageB/my/inviteFriends/index')
			},
			formSubmit(){
				
			}
		}
	}
</script>

