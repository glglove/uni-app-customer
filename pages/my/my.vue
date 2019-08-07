<style lang="less" scoped src = "">
	#my {
		position: relative;
		height: 100%;
		width: 100%;
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
			z-index: 1;			
			.top {
				width: 686upx;
				height: 108upx;
				line-height: 108upx;
				margin: 40upx auto;
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
	<view id="my" :style="positionStyle" @touchstart=""  @touchmove="" @touchend="" >
		<!--loading组件-->
		<!-- <Loading type="4"></Loading> -->

		<view class="bgBox">
			 <!-- <image class="" src="../../static/imgs/tab/my_bg_gaitubao_com_375x667.png"></image> -->
			<image class="" :src="bg.my_bg" lazy-load="true"></image>
		</view>
		<view class="contentBox">
			<view class="top clearfix marginT40">
				<image class="photo" :src="avater? avater : photo_png" layz-load="true"></image>
				<!-- <image class="photo" src="{{avater? avater : ''}}" layz-load="true"></image> -->
				<text class="name">{{name? name:''}}</text>
				<!-- <view class="setBox "> -->
					<!-- <image class="set rt" src="../../static/imgs/icon/set.png"  @tap.stop = "clickSet"></image> -->
				<form id="setFormBox"  class="set rt click-able" report-submit="true" bindsubmit="formSubmit">
					<image class="set click-able" src="set_png" layz-load="true" @tap.stop = " "></image>
					<button form-type="submit" class="btn click-able"></button>
				</form>
				<!-- </view> -->
			</view>
			<view class="containerBox form">
				<view class="itemBox line clearfix marginT10 click-able" @tap.stop = "clickLessons">
					<view class="itemBox-left form_row lt">
						<image :src="card_png" class="pic"></image>
						<text class="tit">报名卡片</text>
					</view>
					<view class="itemBox-right rt">
						<image :src="forwardRight_png" layz-load="true" class="tip"></image>
					</view>
				</view> 

				<view class="itemBox line clearfix marginT10 click-able" @tap.stop = "clickAchivement">
					<view class="itemBox-left form_row lt">
						<image :src="achievement_png" layz-load="true" class="pic"></image>
						<text class="tit">我的成就</text>
					</view>
					<view class="itemBox-right rt">
						<image :src="forwardRight_png" layz-load="true" class="tip"></image>
					</view>
				</view> 

				<view class="itemBox line clearfix marginT10 click-able" @tap.stop = "clickRecord">
					<view class="itemBox-left form_row lt">
						<image :src="record_png" layz-load="true" class="pic"></image>
						<text class="tit">学习记录</text>
					</view>
					<view class="itemBox-right rt">
						<image :src="forwardRight_png" layz-load="true" class="tip"></image>
					</view>
				</view> 

				<view class="itemBox line clearfix marginT10 click-able" @tap.stop = "clickHelp">
					<view class="itemBox-left form_row lt">
						<image :src="help_png" layz-load="true" class="pic"></image>
						<text class="tit">帮助中心</text>
					</view>
					<view class="itemBox-right rt">
						<image :src="forwardRight_png" layz-load="true" class="tip"></image>
					</view>
				</view> 

				<view class="itemBox clearfix marginT10 click-able"  @tap.stop = "clickInvitation">
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
		
		<!--授权区-->
		<!--<twAuthorze>
			<image slot="pic" mode="aspectFit" class="pic" src="../../static/imgs/icon/twlogo.png" layz-load="true"></image>
		</twAuthorze> -->
	</view>		
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

	
	import myApi from '@/api/my.js'
	export default {
        components: {
			FooterExplain
        },	
		computed: {
			now () {
				return +new Date()
			}, 
			positionStyle () {
				// return `background:${this.background};position:relative;padding-top:${this.top}upx;padding-bottom:${this.bottom }upx;
				// padding-left:${this.left}upx;padding-right:${this.right}upx;min-height:${this.pHeight}px;opacity:${this.showLoadingFlag?0:1}`
				// console.log("实时滚动的距离------》", this.scrollTop_refresh)
				// return `background:red;transform:translateY(${this.scrollTop_refresh}upx)`
			},
			authorizeStatus1 () {
				// debugger;
				console.log(`-----my页面computed中打印 获取的notAuthorize字段值----`, this.$parent.globalData.notAuthorize)
				// true 表示已经授权，false 表示未授权
				// return this.$parent.globalData.notAuthorize;
			}          
		},
		watch:{
			// authorizeStatus1:(newVal,oldVal)=>{
			//     // debugger;
			//     if( newVal ) {
			//         // 已授权
			//         this.$broadcast("already_authorize");
			//     }else {
			//         // 未授权
			//         this.$broadcast("not_authorize");
			//     }
			// }
		},
		mixins: {
			// twMixin
		},		
		data() {
			return {
				flag: false, // 控制首次加载时的 onload 和 onshow 的重复加载
				name: '',
				avater: '',
				bg: {
					my_bg: `${this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.my_bg}`
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
			// 点击 我的成就
			async clickAchivement () {
				// let token = await this.getStorage("token");
				// 预加载数据
				let paramsObj = {
					page: {
						pageNum: 1,
						pageSize: 6
					},
					params: {
						
					}
					// 'token': "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwicm9sZXMiOiJjdXN0b21lciIsImlhdCI6MTU0OTk2NTY3NH0.8R4zpdfGo_vao8yReVJG3j1U1jkWA5Re11j0QVUwhV0",             
					// token: token,
				}

				//预加载
				
				// let achivementData = await myApi.getAchivementList( params , false );
				// this.$preload("achivementData", achivementData);
				let achivementData = myApi.getAchivementList( paramsObj , "loading", "加载数据" );
				debugger
				this.navigatePage('../packageB/my/myAchievement/index')
			}			
		}
	}
</script>

