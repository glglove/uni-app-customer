<style lang="less" scoped>
#sign {
	// position: absolute;
	// top: 0;
	// left: 0;
	// right: 0;
	// bottom: 0;
	// margin: auto;	
	.bgBox {
		width: 100%;
		height: 400upx;
		.bgpic{
			width: 100%;
		}		
	}
	.contentBox {
		// position: absolute;
		// top: 0;
		// left: 0;
		// right: 0;
		// bottom: 0;
		// margin: auto;
		// z-index: 1;
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
		.itemBox {
			width: 100%;
			height: 200upx;
		}
	}

}

</style>

<template>
	<container>
		<view id="sign" class="content" slot="container-slot">
			<!-- <image class="logo" src="/static/logo.png"></image>
			<view>
				<text class="title">{{title}}</text>
			</view>
			<view>这是打卡页面</view> -->
			<!--loading组件-->
			<!-- <Loading type="4"></Loading> -->

			<view class="bgBox">
				<image :src="bg.sign_bg" class="bgpic" lazy-load="true"></image>            
			</view>

			<view class="contentBox">
<!--                <scroll-view 
					:scroll-top="scrollTop" 
					scroll-y="true" 
					class="scroll-view-y" 
					@scrolltoupper="upper" 
					@scrolltolower="lower"
					@scroll="scroll"> -->
					<view class="itemBox" v-for="(lessonItem,key) in arrData" :key="key">
						<p class="scroll-view-item">打卡开始时间：{{lessonItem.clockEndDate}}</p>																																			
					</view>
                <!-- </scroll-view>				 -->
			</view>

		</view>
	</container>		
</template>

<script>
	import { miniProApi } from '@/utils/mixins.js'
	import signApi from '@/api/sign.js'
	export default {
		mixins: [ miniProApi ],
		data() {
			return {
				lessonList: [],
				bg: {
					'sign_bg': `${this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.sign_bg}`
				},
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
				debugger
				
				let paramObj = {
					params:{

					},
					page: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
					}					
				}
				signApi.getLessonList(paramObj, "loading", "获取课程list").then((res) => {
					// debugger
					this.getDeviceApi().stopPullDownRefresh()
					if(res && res.data.code === 1){
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

