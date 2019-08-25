<style lang="less" scoped>
#sign {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	overflow-y: scroll;
	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}	
	.bgBox {
		width: 100%;
		height: 100%;
		.bgpic{
			width: 100%;
		}		
	}
	.contentBox {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 1;
	}

}
	// .content {
	// 	text-align: center;
	// 	height: 400upx;
	// }

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

			<view class="contentBox"></view>
	
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
				title: 'Hello',
				pageNum: 1,
				pageSize: 10,
				currentPage: 1,
				lessonList: [],
				bg: {
					'sign_bg': `${this.$configs.baseImgsUrl+this.$configs.baseUrlConfigs.imgs_bg.sign_bg}`
				},
			}
		},
		onLoad() {
			this.getLessonList()
		},
		methods: {
			//onload 之前的 生命周期
			onComLoad () {

			},
			// 获取课程列表
			getLessonList () {
				let paramObj = {
					params:{

					},
					page: {
                        pageNum: this.currentPage,
                        pageSize: this.pageSize,
					}					
				}
				signApi.getLessonList(paramObj, "loading", "获取课程list").then((res) => {
					// debugger
					if(res && res.data.code === 1){
						this.lessonList = res.data.data
						this.success("课程获取成功")
					}
				})
			}
		}
	}
</script>

