<style lang="less" scoped>
#sign {
	// position: absolute;
	// top: 0;
	// left: 0;
	// right: 0;
	// bottom: 0;
	// margin: auto;	
	// min-height: 1110upx;
	background-color: rgba(251,250,249,1);
	.bgBox {
		width: 100%;
		height: 400upx;
		.bgpic{
			width: 100%;
		}		
	}
	.contentBox {
		width: 686upx;
		padding: 45upx 30upx;
		box-sizing: border-box;
		letter-spacing: 1upx;
		margin: 0 auto;
		.scroll-view-y {
			// position: absolute;
			// top: 0;
			// left: 0;
			// right: 0;
			// bottom: 0;
			// margin: auto;
			width: 100%;
			height: 100%;
		}
		.itemListBox {
			width: 100%;
			// height: 200upx;
			.itemlist {
				height: 270rpx;
				border: 1px solid rgba(252,213,190,0.3);
				border-top-left-radius: 28rpx;
				border-top-right-radius: 28rpx;    
				margin-top: 20rpx; 
				padding: 20rpx;   
				// background-color: #FFFFFF;
				box-shadow: 0 4rpx 20rpx 4rpx rgba(255,0,0,0.1);
				box-sizing: border-box; 
				&.shadow {
					background: linear-gradient(top,#ccc,#000);
				}            
				.listBox-top {
					position: relative;
					width: 100%;
					height: 150rpx;
					border-bottom: 1px dashed rgba(250,160,107,0.7);
					.lessonTit {
						// width: 310rpx;
						height: 48rpx;
						font-size: 34rpx;
						color: #000000;
						line-height: 48rpx;
						font-weight: blod;
					}
					.signTimeZone {
						height: 33rpx;
						font-size: 24rpx;
						color: #888C91;
						line-height: 33rpx;
					}
					.signTimes {
						height: 33rpx;
						font-size: 24rpx;
						color: #888C91;
						line-height: 33rpx;
					}
					.signBtn {
						position: absolute;
						top: 50%;
						right: 0;
						width: 164rpx;
						height: 70rpx;
						transform: translateY(-50%);
						-webkit-transform: translateY(-50%);
						.sign-button {
							height: 100%;
							width: 100%;
							line-height: 70rpx;
							font-size: 34rpx;
							color: #FFFFFF;
							background: linear-gradient(to right,rgba(250,153,96,0.4),rgba(250,153,96,1));
							border-radius: 50rpx;
							padding: 0 !important;
							&.alreadySign {
								color: #000000;
							}
							&.already_end {
								background: linear-gradient(to right,rgba(0,0,0,0.08),rgba(0,0,0,0.2));
								color: #000000;
							}
							&.not_begin {
								color: #242F42;
							}
						}

					}
				}  
				.listBoxBottom {
					display: flex;
					justify-content: space-between;
					margin: 30rpx 0;
					.flex_item {
						// flex: 1;
						text-align: center;
						padding: 0;
						background-color: transparent;
						line-height: 0;
						&.border-right {
							border-right: 1rpx solid silver;
							border-radius: 0;
							// margin: 0 10rpx;
							width: 33%;
							text-align: left;
						}
						.flex_item_pic {
							display: inline-block;
							width: 40rpx;
							height: 30rpx;
							vertical-align: middle;
						}
						.flex_item_tit {
							display: inline-block;
							height: 33rpx;
							line-height: 33rpx;
							text-align: center;
							color: #000000;
							font-size: 24rpx;
							margin-left: 20rpx;
						}
					}
				}
			}  
		}
	}

}

</style>

<template>
	<container :containerLoading="containerLoading">
		<view id="sign" class="content" slot="container-slot">
			<!-- <image class="logo" src="/static/logo.png"></image>
			<view>
				<text class="title">{{title}}</text>
			</view>
			<view>这是打卡页面</view> -->
			<!--loading组件-->
			<!-- <Loading type="4"></Loading> -->

			<!--<view class="bgBox">
				<image :src="bg.sign_bg" class="bgpic" lazy-load="true"></image>            
			</view> -->

			<view class="uni-swiper-msg">
				<!--<view class="uni-swiper-msg-icon">
					<image :src="bg.sign_bg" mode="widthFix"></image>
				</view> -->
				<swiper  autoplay="true" circular="true" interval="3000">
					<swiper-item>
						<navigator>
							<image :src="require('@/pages/packageA/static/imgs/carousel/carousel_01.png')" mode="widthFix"></image>
<!-- 							<image 
								:src="bg.sign_bg"
								mode="widthFix">
							</image> -->
						</navigator>
					</swiper-item>
					<swiper-item>
						<navigator>
							<!-- <image :src="require('@/pages/packageA/static/imgs/carousel/carousel_02.jpg')" mode="widthFix"></image> -->
							图二
						</navigator>
					</swiper-item>		
					<swiper-item>
						<navigator>
							<!-- <image :src="require('@/pages/packageA/static/imgs/carousel/carousel_03.jpg')" mode="widthFix"></image> -->
							图三
						</navigator>
					</swiper-item>						
				</swiper>
			</view>
			
			<view :class="['contentBox', !lessonList.length? 'not_found' : '']" :style="signContentBoxHeight">
				<!-- signContentBoxHeight: {{signContentBoxHeight}} -->
				<!--<scroll-view 
					:scroll-top="scrollTop" 
					scroll-y="true" 
					class="scroll-view-y" 
					@scrolltoupper="upper" 
					@scrolltolower="lower"
					@scroll="scroll"> -->
					<view class="itemListBox" >
						<!-- <p class="scroll-view-item" v-for="(lessonItem,key) in arrData" :key="key">打卡开始时间：{{lessonItem.clockEndDate}}</p>	 -->
						<view>
							<form id="item_formId" report-submit="true" bindsubmit="formSubmit">
								<view v-for="(item,index) in lessonList" :key="index"  :data-index="index">
									<view 
										:class="['itemlist', (index+1) == idx ? 'shadow':'']"  
										@tap.stop = "clickLesson" 
										data-id = "item.id" 
										data-name="itemBox">
										<view class="listBox-top click-able ">
											<view class="lessonTit">{{item.title}}</view>
											<view class="signTimeZone marginT10">打卡时间 {{item.clockStartDate}}-{{item.clockEndDate}}</view>
											<view class="signTimes marginT10">共进行21天,已打卡{{item.days}}次</view>
											<view class="signBtn click-able">
												<!-- <button class="sign-button {{item.flag?'alreadySign':''}} click-able" data-name="gotoSignBtn" data-item="{{item}}" form-type="submit">{{item.flag?"已打卡":"去打卡"}}</button>     -->
												<!-- <button class="sign-button {{item.titStatus=='已结束'? 'already_end':''}} {{item.titStatus=='未开始'? 'not_begin':''}} {{item.flag?'alreadySign':''}} click-able" data-name="gotoSignBtn" data-item="{{item}}" form-type="submit">{{item.titStatus}}</button>     -->
												<button 
													:class="['sign-button', item.titStatus=='已结束'? 'already_end':'',item.titStatus=='未开始'? 'not_begin':'',item.flag?'alreadySign':'','click-able']"
													:data-name="gotoSignBtn" 
													:data-item="item" 
													form-type="submit"
												>
												{{item.titStatus}}
												</button>    
											</view> 
										</view> 
										<view class="listBoxBottom">
											<button class="flex_item border-right click-able"  form-type="submit" :data-name="ranklistBtn" :data-item="item">
												<image src="../../static/imgs/icon/ranklist.png" layz-load="true" class="flex_item_pic"></image>
												<text class="flex_item_tit">排行榜</text>
											</button>
											<button class="flex_item border-right click-able"  form-type="submit" :data-name="learnBtn" :data-item="item">
												<image src="../../static/imgs/icon/canlendar.png"  layz-load="true" class="flex_item_pic"></image>
												<text class="flex_item_tit">学习日历</text>                        
											</button>
											<button class="flex_item click-able"  form-type="submit" :data-name="invitateBtn" :data-item="item">
												<image src="../../static/imgs/icon/invitation.png"  layz-load="true" class="flex_item_pic"></image>
												<text class="flex_item_tit">邀请人数</text>                        
											</button>
										</view>                        
									</view>                
								</view>                   
							</form>          
						</view>	
											
											
						<!--loadMore-->
						<view class="loadingMore" v-if="loadingMoreShow">
							<load-more :loadingType="1" :status="loadingStatus"></load-more>																																
						</view>
					</view>
                <!-- </scroll-view>				 -->
			</view>

		</view>
	</container>		
</template>

<script>
	import { miniProApi } from '@/utils/mixins.js'
	import LoadMore from '@/pages/components/uni-load-more/uni-load-more'
	import signApi from '@/api/sign.js'
	import {mapGetters} from 'vuex'
	export default {
		mixins: [ miniProApi ],
		components:{
			LoadMore
		},
		computed: {

		},
		data() {
			return {
				lessonList: [],  // 课程列表集合
				bg: {
					'sign_bg': `${this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.sign_bg}`
				},
				loadingStatus: "loading", // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了 
				arrData: [
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},	
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},	
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},	
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},	
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},
					{
						clockEndDate:"2019-09-09"
					},																																																		
				]
			}
		},
		onLoad() {
			this.signContentBoxHeight = `min-height: ${this.pHeight - 150}px`
			this.getLessonList()
		},
		methods: {
			//onload 之前的 生命周期
			onComLoad () {

			},
			// 刷新页面
			refreshPage() {
				console.log("页面刷新")
				debugger
				this.getLessonList()
			},
			// 获取课程列表
			getLessonList () {
				this.containerLoading = true
				// debugger
				let paramObj = {
					params:{

					},
					page: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
					}					
				}
				signApi.getLessonList(paramObj, false, "获取课程list").then((res) => {
					// debugger
					this.containerLoading = false
					this.getDeviceApi().stopPullDownRefresh()
					if(res && res.data.code === 1){
						// this.$bus.$emit("loading1_end")
						// 总页数赋值给 total
						this.total = res.data.data.total
						let resDataLength = res.data.data.list
						if( resDataLength ){
							this.lessonList = this.lessonList.concat(res.data.data.list)
							this.success("课程获取成功")
						}else {
							debugger
							// 没有数据了
							// 显示 loadingMore 到底的 文字
							this.toast("已经到底了!~~~~")
						}
					}else {
						this.toast("数据获取失败")
					}
				})
			}
		}
	}
</script>

