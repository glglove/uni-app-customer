<style lang="less" scoped>
	uni-page-wrapper{
		height: calc(100% - 50px);
	}
	#findBox{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		overflow-y: scroll;
		.bgBox{
			width: 100%;
			height: 100%;
			.bgpic{
				width: 100%;
			}
		}
		.contentBox{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			z-index: 1;
			.top {
				width: 650upx;
				height: 470upx;
				margin: 0 auto;
				.design {
					height: 70upx;
					font-size: 40upx;
					color: #ffffff;
					line-height: 70upx;					
				}
				.study {
					width: 400upx;
					height: 70upx;
					font-size: 40upx;
					color: #ffffff;
					line-height: 70upx;
				}
			}
			.findContainer{
				width: 650upx;
				height: 675upx;
				padding-top: 400upx;
				margin: 0 auto;
				border-radius: 20upx;
				padding: 50upx 95upx 0 95upx;
				box-sizing: border-box;
				border-radius: 10upx;
				border: 2upx solid rgba(250, 235, 228, 0.2);
				box-shadow: 0 12px 20upx rgba(252,195,165,0.2);	
				.contentTop {
					width: 462upx;
					height: 280upx;
					.contentTopLeft{
						width: 50%;
						height: 255upx;
						.signUpPicBox {
							width: 128upx;
							height: 128upx;
							border-radius: 50%;
							margin: 0 auto;
							padding: 0;
							.signUpPic{
								width: 100%;
							}
						}
						.signUpNum {
							width: 85upx;
							height: 67upx;
							margin: 0 auto;   
							text-align: center;                 
							.signDay {
								width: 50upx;
								height: 100%;
								color: #FA9960;
								line-height: 67upx;
								font-weight: 500;
								font-size: 48upx;
								text-align: center;
							}
							.signTotalDay {
								width: 36upx;
								height: 100%;
								color: #FA9B64;
								line-height: 67upx;
								text-align: center;
								font-size: 24upx;
							}
						}
						.signUpTit {
							width: 120upx;
							height: 42upx;
							text-align: center;
							line-height: 42upx;
							color: #000000;
							font-size: 30upx;
							margin: 0 auto;
						}
					}
					.contentTopRight{
						width: 50%;
						height: 255upx;
						.rankPicBox {
							width: 128upx;
							height: 128upx;
							border-radius: 50%;
							margin: 0 auto;
							padding: 0;
							.signUpPic{
								width: 100%;
							}
						}
						.rankNum {
							width: 85upx;
							height: 67upx;
							margin: 0 auto;     
							text-align: center;               
							.rankNo {
								width: 50upx;
								height: 100%;
								color: #FA9960;
								line-height: 67upx;
								font-weight: 500;
								font-size: 48upx;
								text-align: center;
							}
						}
						.rankTit {
							width: 120upx;
							height: 42upx;
							text-align: center;
							line-height: 42upx;
							color: #000000;
							font-size: 30upx;
							margin: 0 auto;
						}                
					}
				}					
				.signUpBtn {
					width: 462upx;
					height: 99upx;
					line-height: 99upx;
					background-color: #FA9960;
					border-radius: 49.5upx;
					text-align: center;
					box-shadow: 2upx 2upx 5upx rgba(0,0,0,0.1);
					.signUpPic {
						width: 48upx;
						height: 48upx;
						vertical-align: middle;
						position: absolute;
						top: 50%;
						left: 30%;
						transform: translate(-50%,-50% );
					}
					.signUpTit {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						width: 141upx;
						color: #FFFFFF;
						font-size: 34upx;
						margin-left: 25upx;
					}
				}
				.invitationBtn {
					width: 462upx;
					height: 99upx;
					background-color: #FFFFFF;
					border-radius: 49.5upx;
					border: 2px dashed #FA9960;
					text-align: center;      
					color: #FA9960; 
					box-shadow: 2upx 2upx 5upx rgba(0,0,0,0.1);                 
					.invitationPic {
						width: 48upx;
						height: 48upx;
						vertical-align: middle;
						position: absolute;
						top: 50%;
						left: 30%;                
						transform: translate(-50%,-50% );                
					}
					.invitationTit {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						width: 141upx;
						height: 100%;
						font-size: 34upx;
						margin-left: 25upx;
					}
				}				
			}
		}
	}
</style>
<template>
	<container>
		<view  id="findBox" slot="container-slot">
			<!--loading组件-->
			<!-- <Loading type="4"></Loading> -->
			<!-- bg.find_bg:{{bg.find_bg}} -->
			<!-- {{$configs.baseImgsUrl + $configs.baseUrlConfigs.imgs_bg.find_bg}} -->
			<!--loading-->
				<view class="bgBox">
					<image :src="bg.find_bg" class="bgpic" lazy-load="true"></image>            
				</view>
				<view class="contentBox">
					<view class="top"> 
						<view class="design marginT30">21天设计</view>
						<view class="study marginT10">理论手绘学习计划</view>
					</view>

					<view class="findContainer">
						<view class="contentTop">
							<view class="contentTopLeft lt">
								<button class="signUpPicBox" id="signUp_top" name="signUp_top" form-type="submit">
									<image class="signUpPic click-able" src="../../static/imgs/icon/signUp.png" layz-load="true" @tap.stop = ""></image>
								</button>
								<view class="signUpNum marginT10">
									<text class="signDay">{{signData.signDay}}</text>
									<text class="signTotalDay">/21</text>
								</view>
								<view class="signUpTit marginT10"><text>连续打卡</text></view>
							</view>

							<view class="contentTopRight rt">
								<button class="rankPicBox" id="rank_top" name="rank_top" form-type="submit">
									<image class="rankPic click-able" src="../../static/imgs/icon/rank.png" layz-load="true" @tap.stop = ""></image>
								</button>
								<view class="rankNum marginT10">
									<text class="rankNo">{{signData.rankNo}}</text>
								</view>
								<view class="rankTit marginT10"><text>排行榜</text></view>                    
							</view>  
										
							<button class="signUpBtn click-able" form-type="submit" id = "signUp" name="siginBtn" @tap.stop = "">
								<image class="signUpPic" src="../../static/imgs/icon/signUpPic.png"></image>
								<text class="signUpTit click-able">立即报名</text>
							</button>

							<button class="invitationBtn marginT40 click-able" id = "invitate" form-type="submit" name="invitateBtn"  disabled="shairePic_clickable" @tap.stop = "">
								<image class="invitationPic" src="../../static/imgs/icon/invitationPic.png" layz-load="true"></image>
								<text class="invitationTit click-able">邀请好友</text>               
							</button>							  
						</view>			
					</view>		
					
					<!--引用footerCmp-->
					<footer-explain versition="20150205"></footer-explain>
				</view>
							
			
			
			<!--用于收集定时提醒的推送码-->
			<!-- <form report-submit="true" bindsubmit="formSubmit">
				<view class="contentBox">
					<view class="contentTop">
						<view class="contentTopLeft lt">
							<button class="signUpPicBox" id="signUp_top" name="signUp_top" form-type="submit">
								<image class="signUpPic click-able" src="../../static/imgs/icon/signUp.png" layz-load="true" @tap.stop = ""></image>
							</button>
							<view class="signUpNum marginT10">
								<text class="signDay">{{signData.signDay}}</text>
								<text class="signTotalDay">/21</text>
							</view>
							<view class="signUpTit marginT10"><text>连续打卡</text></view>
						</view>

						<view class="contentTopRight rt">
							<button class="rankPicBox" id="rank_top" name="rank_top" form-type="submit">
								<image class="rankPic click-able" src="../../static/imgs/icon/rank.png" layz-load="true" @tap.stop = ""></image>
							</button>
							<view class="rankNum marginT10">
								<text class="rankNo">{{signData.rankNo}}</text>
							</view>
							<view class="rankTit marginT10"><text>排行榜</text></view>                    
						</view>                
					</view>
					

					<button class="signUpBtn click-able" form-type="submit" id = "signUp" name="siginBtn" @tap.stop = "">
						<image class="signUpPic" src="../../static/imgs/icon/signUpPic.png"></image>
						<text class="signUpTit click-able">立即报名</text>
					</button>

					<button class="invitationBtn marginT40 click-able" id = "invitate" form-type="submit" name="invitateBtn"  disabled="shairePic_clickable" @tap.stop = "">
						<image class="invitationPic" src="../../static/imgs/icon/invitationPic.png" layz-load="true"></image>
						<text class="invitationTit click-able">邀请好友</text>               
					</button>
				</view>
			</form>
			-->

			<!--授权区-->
			<!--<twAuthorze>
				<image slot="pic" mode="scallToFill" class="pic"  src="../../static/imgs/icon/twlogo.png" layz-load="true"></image>
			</twAuthorze> -->
		</view>
	</container>

</template>

<script>
	import {uniCard, uniPagination} from '@dcloudio/uni-ui'	
	import FooterExplain from '@/pages/components/footerExplain/footerExplain'
	import findApi from '@/api/find.js'
	import { miniProApi } from '@/utils/mixins.js'
	// import container from '@/pages/components/container1/container'

	export default {
		mixins: [ miniProApi ],
        components: {
            uniCard,
            uniPagination,
			FooterExplain
		},			
		data() {
			return {
				contentData: [],
				version: this.$configs.miniproConfings.version,
				shairePic_clickable: false,  // 控制邀请好友的disable状态
				// loading_show: false, // 控制页面loading的状态
				type: 1, // 1 总排名  2 点赞排名  3 邀请排名  
				bg: {
					'find_bg': `${this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.find_bg}`
				},
				loadingMoreIsShow: false,
				authorzeIsShow: "",
				signData: {
					signDay: "0",
					rankNo: "0",
					totalDay: "0",
				},
				loadingMore: {}					
			};
		},	
		onLoad () {
			console.log("find-----onload")
			this._getRankDayData()
		},		
		methods:{		
			onComLoad () {
				debugger
				console.log("find --------onComLoad")
			},							
			// 获取list 列表数据
			_getRankDayData () {
				// debugger
				// uni.showLoading()
				let paramsObj = {
					params: {

					},
					page: {
						pageSize: 10,
						pageNum: 1
					}
				}
				findApi.getRankDayData( paramsObj, "loading", "加载中..").then(res => {
					debugger
					// uni.hideLoading()
					console.log(res)
					if(res && res.data.code === 1){
						// debugger
						uni.showToast({
							title:"数据获取成功",
							icon: 'success',
							mask: true,
							duration:2000
						})
						this.contentData = res.data.data
				
						let {
							days,
							rank,
							total
						} = res.data.data

						this.signData.signDay = days
						this.signData.rankNo = rank
						this.signData.totalDay = total
						//页面跳转到
						// uni.redirectTo({
						// 	url:'../packageA/find/ranklist/index'
						// })
					}else{
						// uni.hideLoading()
						uni.showToast({
							title:"数据获取失败",
							icon: 'success',
							mask: true,	
							duration:2000
						})

					}
				}).catch(err => {
					// uni.hideLoading()
					uni.showToast({
						title:"数据获取失败,请重试",
						icon: 'success',
						mask:true,
						duration:2000
					})
				})
			}
		}
	}
</script>
