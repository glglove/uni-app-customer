<style lang="less" scoped>
	.footerExplain {
		position: absolute;
		bottom: 20upx;
		width: 100%;
		.footer {
			height: 20upx;
			width: 90%;
			line-height: 40upx;
			font-size: 24upx;
			color: #ccc;
			border-bottom: 1upx solid #ddd;
			margin: 20upx auto 40upx auto;
			text-align: center;
			.footText {
				font-size: 24upx;
				// background: #ffffff;
				padding: 0 20upx;
			}
			.version {
				font-size: 20upx;
				color: #ccc;
				text-align: right;
				opacity: 0.3
			}
		}
	}
</style>

<template>
	<view class="footerExplain">
		<view class="footer">
			<text class="footText" :style="footerTextBgc">{{text}}</text>
			<!--版本version-->
			<view class="version">{{version}}</view>
		</view>	
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		components: {
			
		},
		props: {
			bgcolor: {
				type: String,
				default: "#000000"
			},
			text:{
				type: String,
				default: '设计考研打卡助手'
			},
			version: {
				type: String,
				default: '#000000'
			}
		},
		data(){

		},
		onLoad(){
			
		},
		onShow() {
			
		},
		onReady(){
			
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
		data() {
			return {
				
			}
		},
		computed:{
		  	...mapGetters([
				'userToken'
		 	]),
			footerTextBgc(){
				return `background-color:${this.bgcolor}`
			}	
		},
		watch:{
		 //  a :{
			// handler: function (newValue, oldValue){
			//   this.handleContent(newValue)
			// },
			// immediate: true
		 //  }			
		},
		methods: {
			
		}	
	}
</script>

