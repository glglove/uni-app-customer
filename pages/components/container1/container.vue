<style lang="less" scoped>
	// 设置动画container_loading
	@keyframes 	container_loading {
		0% {
			transform: rotate(30deg)
		}
		10% {
			transform: translateX(20px)
		}
		50% {
			transform: translateY(10px);
			width: 200px
		}
		100% {
			transform: translateX(-20px)
		}
	}
	
	.container-box-cmp {
		position: relative;
		width: 100%;
		height: 100%;
		.top-loadding {
			
		}
		.container {
			position: relative;
			overflow: hidden;
			box-sizing: border-box;
			opacity: 0;
		}
		.container_mask {
			position: fixed;
			top: 0;  
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 999;
			opacity: 0.82;
			background: rgba(0, 0, 0, .75);			
		}
		.container_allLoading {
			position: fixed;
			top: 50%;
			left: 50%;
			width: 64upx;
			height: 64upx;
			margin-left: -32upx;
			margin-top: -32upx;
			// background: rgba(0, 0, 0, 0.80);
			border-radius: 5upx;
			z-index: 1000;
			text-align: center;		
			.allLoadingPic {
				width: 100%;
				// animation: container_loading .2s ease 0;
			}
		}		
		.container_loading {
			position: fixed;
			top: 50%;
			left: 50%;
			width: 200rpx;
			height: 200rpx;
			margin-left: -100rpx;
			margin-top: -100rpx;
			// background: rgba(0, 0, 0, 0.80);
			border-radius: 10rpx;
			z-index: 1001;
			text-align: center;		
			.loadingPic {
				// animation: container_loading .2s ease 0;
			}
		}
		.container_authorize {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			background: rgba(0, 0, 0, 0.2);
			z-index: 1002;	
		}
	}
	
</style>
<template>
	<view class="container-box-cmp">
	<!--<view class="top-loadding {{topClass}}" style="{{topViewStyle}}" hidden="{{refreshTop==0&&!refreshFlag}}">
			<text class="iconfont mykicon-d_loading_icon"></text>
		</view> -->
		
		<view class="container" :style="positionStyle" @touchstart=""  @touchmove="" @touchend="">
			<slot name="container-slot"></slot>
		</view>
		
		<!--<view class="bottom-loadding"  wx:if="{{more!='false'&&!showLoadingFlag}}" style="opacity:{{more!='false'&&!showLoadingFlag?'1':'0'}}">
			<image src="../../assets/imgs/loading2.svg" wx:if="{{nomore=='false'}}" />
			<text wx:if="{{nomore=='false'}}">{{moretext}}</text>
			<text wx:else>沒有更多啦~</text>
		</view> -->	
		
		<!-- common mask -->
		<!-- containerMaskFlag: {{containerMaskFlag}} -->
		<view :class="['container_mask', aniClass1]" @tap="handleMaskTap" v-show="containerMaskFlag"></view>

		<!-- allLoading -->
		<view :class="['container_allLoading', aniClass]" v-show="containerAllloadingFlag">
			<image class="allLoadingPic" :src="require('@/static/allLoading.gif')" layz-load="true"></image>
		</view>	
		
		<!-- loading -->
		<!-- loading1: {{loading1}} -->
		<view :class="['container_loading', aniClass]" v-show="containerLoadingFlag">
			<image class="loadingPic" :src="require('@/static/loading.gif')" layz-load="true"></image>
		</view>	
			
		<!--authorize 授权区域------>
		<!-- #ifdef MP-WEIXIN -->
		<!-- isAuthorize: {{JSON.stringify(isAuthorize)}} -->
		<!-- {{JSON.stringify(isAuthorize)}}
		------
		{{authorizeState}} -->
		<view :class="['container_authorize', aniClass]" v-show="!authorizeState">
			<authorize></authorize>
		</view>
		<!--#endif-->
	</view>
</template>

<script>
	import { mapGetters, mapActions  } from 'vuex'
	// import { miniProApi } from '@/utils/mixins.js'
	import Authorize from '@/pages/components/authorize/authorize.vue'
	import { getDeviceApi } from '@/utils/deviceApi.js'
	
	
	
	export default {
		components:{
			Authorize
		},
		props: {
			top: {
				type: String,
				default: "0"
			},
			bottom: {
				type: String,
				default:"0"
			},
			left: {
				type: String,
				default:"0"
			},
			right: {
				type: String,
				default: "0"
			},
			background: {
				type: String,
				default: 'transparent'
			},
			loading1: {
				type: Boolean,
				default: false
			}
			// more: {
			// 	type: String,
			// 	default: 'false'
			// },
			// nomore: {
			// 	type: String,
			// 	default: 'false'
			// },
			// moretext: {
			// 	type: String,
			// 	default: '加载中'
			// },
			// pulldown:{
			// 	type: String,
			// 	default: 'false'
			// }
		},	
		onLoad() {
			// debugger
			console.log("container-----onload")
			// this.pHeight= uni.getSystemInfoSync().windowHeight;
			// console.log("---获取到的系统屏幕高度---------",this.pHeight)	
		},					
		onShow() {
			// debugger
			console.log("container-----onShow")		
			// this.pHeight= uni.getSystemInfoSync().windowHeight;
			// console.log("---获取到的系统屏幕高度---------",this.pHeight)			
		},
		onReady(){
			console.log("container----------onReady")				
		},
		onUnload() {
		
		},
		onHide() {

		},
		computed:{
			...mapGetters([
				'authorizeState',
				'containerAllloadingFlag',
				'containerLoadingFlag', 
				'containerMaskFlag',
				'pHeight'
			]),
			positionStyle() {
                return `background:${this.background};position:relative;padding-top:${this.top}px;padding-bottom:${this.bottom}px;
                padding-left:${this.left}px;padding-right:${this.right}px;min-height:${this.pHeight}px;opacity:${this.containerAllloadingFlag?0:1}`
			}
			// 小程序上面 自动检测 是否有授权
			// #ifdef MP-WEIXIN
			,async isAuthorize(){
				console.log("container组件中computed 中获得的 userInfo授权状态", await this.getAuthorizeStatus("scope.userInfo"))
				let isAuthorize_res = await this.getAuthorizeStatus("scope.userInfo")
				console.log('container组件中computed 中打印isAuthorize_res的值 ', isAuthorize_res)
				return isAuthorize_res
			}
			//#endif
		},
		watch: {
			containerLoadingFlag: {
				handler(newValue, oldValue){
					if(newValue){
						this.aniClass = 'animated fast fadeIn'
					}else {
						this.aniClass = 'animated fast fadeOut'
					}
				},
				deep: true
			},
			containerMaskFlag: {
				handler(newValue, oldValue){
					if(newValue){
						this.aniClass1 = 'animated fast fadeIn'
					}else {
						this.aniClass1 = 'animated fast fadeOut'
					}
				},
				deep: true				
			}
		},
		data() {
			return {
				// showLoadingFlag: true, 
				// containerMaskFlag: true, //  控制container 的全屏 遮罩显示与否
				// containerLoadingFlag: false,  // 控制container 的全屏loading状态
				aniClass: 'animated fast fadeIn',  // container 的全屏loading 动画class
				aniClass1: 'animated fast fadeIn', // mask 的动画class
			}
		},
		methods:{					
			...mapActions( [ 'setContainerLoadingFlag','setContainerMaskFlag' ] ),
			// ctstart(e){
   //              cancelAnimationFrame(this.tickID,this)
   //              if(this.customerData.scrollPosition<=0&&e.changedTouches.length>0){
   //                  this.startY=e.changedTouches[0].clientY
   //                  this.refreshOk=true
   //              }else{
   //                  this.refreshOk=false
   //              }
			// },
			// ctmove(e){
			// 	if(this.refreshOk&&!this.refreshFlag&&this.customerData.scrollPosition<=0&&e.changedTouches[0].clientY>this.startY){
			// 		let diffY=e.changedTouches[0].clientY-this.startY;
			// 		if(diffY<200){
			// 			diffY=(1-(200-diffY)/200)*80;
			// 			if(diffY>80){
			// 				diffY=80;
			// 			}
			// 		}else{
			// 			diffY=80;
   //                  }
   //                  if(diffY!=this.refresh ){
   //                      this.refreshTop=diffY;
   //                      this.$apply()
   //                  }
			// 	}else{
   //                  if(this.refreshOk&&this.refreshTop!=0){
   //                      setTimeout(() => {
   //                          this.refreshTop=0; 
   //                          this.$apply();
   //                      }, 300);
   //                  }
			// 	}
			// },
			// ctend(e){
   //              if(this.refreshOk&&this.refreshTop>=75&&this.pulldown!='false'){
			// 		this._beginFresh()
			// 	}else if(this.refreshOk&&this.refreshTop>0){
   //                  let current =this.refreshTop;
   //                  let dv = 0 - current;
   //                  let beginTime = new Date();
   //                  let time=400;
   //                  let toTick =()=>{
   //                      var dt = new Date() - beginTime;
   //                      if (dt >= time) {
   //                          return;
   //                      }
   //                      this.refreshTop = dv * ease(dt / time) + current;
   //                      this.$apply();
   //                      this.tickID = requestAnimationFrame(toTick);
   //                  };
   //                  toTick();
   //              }
			// },		
			// 点击遮罩
			handleMaskTap() {
				debugger
				console.log("点击了遮罩")
				// 触发 
				console.log(this)
				if( this.containerMaskFlag ) {
					debugger
					this.setContainerMaskFlag(false)
				}
			},
			// 获取小程序 是否授权userInfo
			// #ifdef MP-WEIXIN
			async getAuthorizeStatus(type, cb, fb) {
				// type: "scope.userInfo" "scope.userLocation" "scope.address" "scope.invoiceTitle" "scope.invoice" "scope.record" "scope.werun" "scope.writePhotosAlbum" "scope.camera"
				let _this = this
				if(!type){
					_this.toast("请传入scope.type!")
					return 
				}
				let scopeText = {
					"scope.userInfo":"用户信息",
					"scope.userLocation": "地理位置",
					"scope.address": "通讯地址",
					"scope.invoiceTitle": "发票排头",
					"scope.invoice": "获取发票",
					"scope.record": "录音功能",
					"scope.werun": "微信运动步数",
					"scope.writePhotosAlbum": "保存到相册",
					"scope.camera": "摄像头"
				}		

				return new Promise((resolve,reject)=>{
					getDeviceApi().getSetting().then((res) => {
						// 获取用户授权信息
						console.log("打印用户授权的情况集合------------",res)   // res.userInfo 为true  res.errMsg == "authorize:ok"
						if( res ){
							// debugger
							if(res[1] && res[1]['authSetting'] && res[1]['authSetting'][type]){
								// 自动检测到已经授过权
								console.log(`--------------检测到已授权了：【${scopeText[type]}】 的权限---------`)
								// 成功回调
								cb && cb()
								resolve(true)
							}else {
								// 未授权
								console.log(`----------检测到未授权：【${scopeText[type]}】 的权限-----------`)
								fb && fb()
								resolve(false)
							}
						}else {
							// 先判断是否是网络问题造成了请求失败
							try {
								getDeviceApi().getNetworkType({
									success: function (res) {
										let  networkType = res.networkType
										if( networkType != "none" ) {
											// 有网络，检查 缓存中的授权字段
											//   let AuthorizeStatus = _this.getDeviceApi().getStorageSync("AuthorizeStatus");
											//   if( AuthorizeStatus ) {
											// 	resolve( true ) ;
											//   }else {
											// 	resolve( false ) ;
											//   }  
											reject("--------报错了-------------")
										}else {
											// 无网络 返回true, 弹出 提示
											_this.error("网络异常")
											reject( "--------网络异常，请先检查网络------------" ) 
										}
									}
								})
							} catch (error) {
								reject("--------报错了-------")
							}						
						}
					})
				})		
			},	
			//#endif
		}
	}
</script>

