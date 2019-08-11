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
			transform: translateY(10px)
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
				animation: container_loading 2s ease 0;
			}
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
		<view :class="['container_mask', aniClass1]" @tap="handleMaskTap" v-if="containerMaskFlag"></view>
		
		<!-- loading -->
		<view :class="['container_loading', aniClass]" v-show="containerLoadingFlag">
			<image class="loadingPic" :src="require('@/static/loading.png')" layz-load="true"></image>
		</view>		
	</view>
</template>

<script>
	import { mapGetters, mapActions  } from 'vuex'
	// import { miniProApi } from '@/utils/mixins.js'
	export default {
		// mixins:[ miniProApi ],
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
			this.pHeight= uni.getSystemInfoSync().windowHeight;
			console.log("---获取到的系统屏幕高度---------",this.pHeight)	
		},					
		onShow() {
			debugger
			console.log("container-----onShow")

			this.pHeight= uni.getSystemInfoSync().windowHeight;
			// console.log("---获取到的系统屏幕高度---------",this.pHeight)			
		},
		onHide() {
			
		},
		computed:{
			...mapGetters([
				'containerLoadingFlag', 
				'containerMaskFlag',
				'pHeight'
			]),
			positionStyle() {
                return `background:${this.background};position:relative;padding-top:${this.top}px;padding-bottom:${this.bottom}px;
                padding-left:${this.left}px;padding-right:${this.right}px;min-height:${this.pHeight}px;opacity:${this.containerLoadingFlag?0:1}`
			}			
		},
		watch: {
			containerLoadingFlag: {
				hanler(newValue, oldValue){
					if(newValue){
						this.aniClass = 'animated fast fadeIn'
					}else {
						this.aniClass = 'animated fast fadeOut'
					}
				}
			},
			containerMaskFlag: {
				hanler(newValue, oldValue){
					if(newValue){
						this.aniClass1 = 'animated fast fadeIn'
					}else {
						this.aniClass1 = 'animated fast fadeOut'
					}
				}				
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
		}
	}
</script>

