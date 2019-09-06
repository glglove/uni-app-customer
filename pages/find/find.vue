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
		.find-hasLogin {
			height: 100%;
			width: 100%;
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
				overflow-y: auto;
				.top {
					width: 650upx;
					height: 400upx;
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
					height: 600upx;
					margin: 0 auto;
					border-radius: 20upx;
					padding: 30upx 95upx 0 95upx;
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
								// width: 120upx;
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
		.find-notLogin {
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
	<container :containerLoading="containerLoading">
		<view  id="findBox" slot="container-slot">
			<!--loading组件-->
			<!-- <Loading type="4"></Loading> -->
			<!-- bg.find_bg:{{bg.find_bg}} -->
			<!-- {{$configs.baseImgsUrl + $configs.baseUrlConfigs.imgs_bg.find_bg}} -->
			<!--loading-->
			<div v-if="userToken" class="find-hasLogin">
				<view class="bgBox">
					<image :src="bg.find_bg" class="bgpic" lazy-load="true"></image>            
				</view>
				<!--用于收集定时提醒的推送码-->
				<form report-submit="true" bindsubmit="formSubmit">				
					<view class="contentBox">
						<view class="top"> 
							<view class="design marginT30">21天设计</view>
							<view class="study marginT10">理论手绘学习计划</view>
						</view>

						<view class="findContainer">
							<view class="contentTop">
								<view class="contentTopLeft lt">
									<button class="signUpPicBox" id="signUp_top" name="signUp_top" form-type="submit">
										<image class="signUpPic click-able" :src="require('@/static/imgs/icon/signUp.png')" layz-load="true" @tap.stop = "clickRank"></image>
									</button>
									<view class="signUpNum marginT10">
										<text class="signDay">{{signData.signDay}}</text>
										<text class="signTotalDay">/21</text>
									</view>
									<view class="signUpTit marginT10"><text>连续打卡</text></view>
								</view>

								<view class="contentTopRight rt">
									<button class="rankPicBox" id="rank_top" name="rank_top" form-type="submit">
										<image class="rankPic click-able" :src="require('@/static/imgs/icon/rank.png')" layz-load="true" @tap.stop = ""></image>
									</button>
									<view class="rankNum marginT10">
										<text class="rankNo">{{signData.rankNo}}</text>
									</view>
									<view class="rankTit marginT10"><text>排行榜</text></view>                    
								</view>  
											
								<button class="signUpBtn click-able" form-type="submit" id = "signUp" name="siginBtn" @tap.stop = "">
									<image class="signUpPic" :src="require('@/static/imgs/icon/signUpPic.png')"></image>
									<text class="signUpTit click-able">立即报名</text>
								</button>

								<button class="invitationBtn marginT40 click-able" id = "invitate" form-type="submit" name="invitateBtn"  disabled="shairePic_clickable" @tap.stop = "">
									<image class="invitationPic" :src="require('@/static/imgs/icon/invitationPic.png')" layz-load="true"></image>
									<text class="invitationTit click-able">邀请好友</text>               
								</button>							  
							</view>			
						</view>		
						
						<!--引用footerCmp-->
						<footer-explain versition="20150205"></footer-explain>
					</view>
				</form>				
			</div>
			
			<!---未登录-->
			<view v-if="!userToken" class="find-notLogin">
                <view class="title">
                    您好 游客。
                </view>
                <view class="ul">
                    <view>这是 小助手App首页。</view>
                    <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
                </view>
            </view>
		</view>
	</container>
</template>

<script>
	import {uniCard, uniPagination} from '@dcloudio/uni-ui'	
	import FooterExplain from '@/pages/components/footerExplain/footerExplain'
	import findApi from '@/api/find.js'
	import { miniProApi } from '@/utils/mixins.js'
	// import container from '@/pages/components/container1/container'
	import {mapGetters} from 'vuex'

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
		computed:{
			...mapGetters([
				'userToken',
				'forcedLogin', 
				'hasLogin', 
				'userName'
			])
		},
		watch: {
			userToken: {
				handler(newValue, oldValue){
					if(newValue){
						this.refreshPage()
					}
				}
			}
		},
		async onLoad () {
			//#ifdef MP-WEIXIN
			this.$bus.$on("emitRefreshPage", () => {
				// debugger
				// this.refreshPage()
			})
			//#endif			
			// debugger
			console.log("find页面------------onload")
			console.log("-------find首页检查是否登陆成功----",await this.getLoginStatus())
			// 判断是否已经授权
			//#ifdef MP-WEIXIN
			console.log("----------------find首页检查是否用户授权了userInfo--------", await this.getAuthorizeStatus('scope.userInfo'))
			console.log("----------------find首页检查是否用户授权了userLocation--------", await this.getAuthorizeStatus('scope.userLocation'))
			//#endif
			
		},
		onShow(){
			console.log("find页面-----------------onShow")
			// 有token 时 才去 请求
			if( this.userToken ){
				// debugger
				this._getRankDayData()
			}	
		},	
		onReady(){
			console.log("find页面-----------------onReady")		
		},
		onHide () {
			this.$bus.$off("emitRefreshPage")			
		},	
		onTabItemTap(){
			console.log("find页面-----------onTabItemTap----")
		},
		methods:{		
			async onComLoad () {
				// debugger
				console.log("find --------onComLoad")
				// find 首页 判断 用户是否授权userinfo 信息
				// #ifdef MP-WEIXIN
				let isAuthorize = await this.getAuthorizeStatus("scope.userInfo")
				console.log("find --------onComLoad--获取到的用户信息授权状态----", isAuthorize)
				// 将授权状态存入 store 中
				this.$store.dispatch("setAuthorizeState", {authorizeState: isAuthorize})
				//#endif
				
				//#ifdef H5 || APP-PLUS
				// 判断是否登陆
				if(!this.hasLogin){
					this.getDeviceApi().showModal({
						title: '未登录',
						content: '您未登录，需要登录后才能继续',
						/**
						 * 如果需要强制登录，不显示取消按钮
						 */
						showCancel: !this.forcedLogin,
						success: (res) => {
							if (res.confirm) {
								/**
								 * 如果需要强制登录，使用reLaunch方式
								 */
								if (this.forcedLogin) {
									// this.reLaunchPage("../login/login");
								} else {
									// this.navigatePage("../login/login");
								}
							}else {
								// 取消
							}
						}
					})				
				}	
				//#endif
			},	
			refreshPage() {
				// debugger
				this._getRankDayData()
			},
			// 获取list 列表数据
			_getRankDayData () {
				// debugger
				// uni.showLoading()
				this.containerLoading = true
				let paramsObj = {
					params: {

					},
					page: {
						pageSize: 10,
						pageNum: 1
					}
				}
				findApi.getRankDayData( paramsObj ).then(res => {
					// debugger
					// uni.hideLoading()
					this.containerLoading = false
					console.log(res)
					if(res && res.data.code === 1){
						// debugger
						// this.getDeviceApi().showToast({
						// 	title:"数据获取成功",
						// 	icon: 'success',
						// 	mask: true,
						// 	duration:2000
						// })
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
						this.getDeviceApi().showToast({
							title:"数据获取失败",
							icon: 'error',
							mask: true,	
							duration:2000
						})

					}
				}).catch(err => {
					// uni.hideLoading()
					this.getDeviceApi().showToast({
						title:"数据获取失败,请重试",
						icon: 'error',
						mask:true,
						duration:2000
					})
				})
			},
			async clickRank () {
				// 点击排行榜的icon
				this.navigatePage(`../packageA/find/ranklist/index`);
			},  

			// 邀请好友
			async invitateFriends (e) {

				console.log("邀请好友 生成海报分享------", e)
				// 未生成海报前 禁止再次点击  邀请好友
				this.shairePic_clickable = true;
				this.$apply();

				let token = await this.getStorage("token");

				let userInfo = await this.getStorage("userInfo");
				
				// let userId = userInfo.id;
				console.log("用户id----",userInfo.id);
				let params = {
					userId: userInfo.id,
					// token:token
				};


				// 获取 海报的信息
				let haibaoData = await findApi.getShareData(params,false);
				
				let shareData = {};
				if( haibaoData && haibaoData.code ==1 ){
					if( haibaoData.data ) {
						shareData.headImg = haibaoData.data.headImg;
						shareData.realName = haibaoData.data.realName;
						shareData.time = haibaoData.data.time;
						shareData.title = haibaoData.data.title;
						shareData.days = haibaoData.data.days;
						shareData.qrcode = haibaoData.data.qrcode;
					}
					// let picUrl = base.baseUrl + base.imgs_bg.sharePic_bg02; // 底图
					let haibaoPicObj = {
						picUrl_bg: base.baseUrl + base.imgs_bg.sharePic_bg02, // 底图
						avertor_bg: '../../../../../assets/imgs/icon/logo_1.png',
						headImg: shareData.headImg,
						title:shareData.title,
						name:shareData.realName,
						dayNum: shareData.days,
						time: shareData.time,
						codePic: shareData.qrcode,
					}

					// this.toast("正在生成分享图片...");
					//setTimeout(()=>{
					// },500)

					// 预加载
					this.$preload("data",JSON.stringify(haibaoPicObj));

					// debugger;
					//获取当前页面URL
					var pages = getCurrentPages();
					var currentPage = pages[pages.length - 1];
					var url = currentPage;
					var options = currentPage.options; //获取参数
					var url1 = currentPage.route; //获取地址
					

					// 页面跳转
					// this.navigatePage(`./shaireHaibao/index?picUrl=${haibaoPicObj}`)
					this.navigatePage(`../packageA/find/invitation/shaireHaibao/index`)

					this.shairePic_clickable = false;
					this.$apply();
					// wepy.showToast({
					//     title: "海报生成中...",
					//     image: '/assets/imgs/icon/alert.png',
					//     mask: false,
					//     duration: 1000
					// })
				}else {
					this.toast("网络走神了~~",1000);

					// this.navigatePage(`./shaireHaibao/index`)
				}                  
			}   		
		}
	}
</script>
